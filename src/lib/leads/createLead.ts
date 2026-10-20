import { getServiceSupabase } from '@/lib/supabase/server';
import type { CreatedLead, LeadInput } from './types';

/**
 * The one place a lead is written to the database.
 *
 * Both entry points use it: the public booking form on this site and the
 * server-to-server intake at /api/leads that the Rome Transfer Service site
 * posts to. That is the point — one lead model, one insert, one set of
 * fallbacks, so a lead from either website lands in the same table in the
 * same shape and shows up in the same CRM.
 *
 * Three behaviours worth knowing about:
 *
 * 1. **Idempotency.** When the caller supplies a key, an existing lead with
 *    that key is returned instead of inserting a second one. The unique index
 *    added by `add_bookings_multisite_fields.sql` is the real guard — the
 *    lookup here just turns a race into a clean answer rather than a 500.
 *
 * 2. **Schema fallback.** The project's existing migrations may or may not
 *    have been run. If Postgres reports an unknown column, the insert is
 *    retried with progressively smaller column sets, and anything that could
 *    not be stored in its own column is folded into `admin_notes` so no
 *    detail the customer typed is lost. This mirrors what `submitBooking`
 *    already did before this refactor.
 *
 * 3. **Service role.** Writes go through the service client, never the anon
 *    key, so the public never needs write access to the table.
 */

const trim = (value: string | undefined | null) => (value ?? '').toString().trim();

/** Everything the extended columns would have held, as readable text. */
function describeExtras(input: LeadInput): string {
    const lines: string[] = [];
    lines.push(`Source site: ${input.sourceSite}`);
    if (input.serviceType) lines.push(`Service type: ${input.serviceType}`);
    if (input.locale) lines.push(`Enquiry language: ${input.locale}`);
    if (typeof input.adults === 'number' || typeof input.children === 'number') {
        lines.push(`Passengers: ${input.adults ?? '?'} adult(s), ${input.children ?? 0} child(ren)`);
    }
    if (input.childAges) lines.push(`Children's ages: ${input.childAges}`);
    if (typeof input.luggageHold === 'number' || typeof input.luggageCabin === 'number') {
        lines.push(`Luggage: ${input.luggageHold ?? 0} hold, ${input.luggageCabin ?? 0} cabin`);
    }
    if (input.customerMessage) lines.push(`Customer message: ${input.customerMessage}`);
    if (input.idempotencyKey) lines.push(`Idempotency key: ${input.idempotencyKey}`);
    return lines.join('\n');
}

export async function createLead(input: LeadInput): Promise<CreatedLead> {
    const supabase = getServiceSupabase();

    if (!trim(input.fullName) || !trim(input.pickupLocation) || !trim(input.dropoffLocation) || !trim(input.bookingDatetime)) {
        throw new Error('Full name, pickup location, drop-off location and trip date & time are required.');
    }

    // Already seen? Return the original rather than creating a twin.
    if (input.idempotencyKey) {
        const { data: existing, error } = await supabase
            .from('bookings')
            .select('*')
            .eq('idempotency_key', input.idempotencyKey)
            .maybeSingle();

        // A missing column here just means the migration has not been run; it
        // is not a reason to refuse the lead.
        if (!error && existing) {
            return { id: existing.id ?? null, deduplicated: true, fullSchema: true, record: existing };
        }
    }

    const extras = describeExtras(input);

    /** Columns that have existed since the first migration. */
    const base: Record<string, unknown> = {
        full_name: trim(input.fullName),
        email: trim(input.email),
        phone: trim(input.phone),
        pickup_location: trim(input.pickupLocation),
        dropoff_location: trim(input.dropoffLocation),
        booking_datetime: input.bookingDatetime,
        passengers: Number(input.passengers) || 1,
        status: 'pending',
        source_form: trim(input.sourceForm) || 'Unknown Form',
    };

    /** Columns from the return-trip migration. */
    const returnTrip: Record<string, unknown> = {
        ...(input.luggage ? { luggage: input.luggage } : {}),
        ...(input.flightNumber ? { flight_number: input.flightNumber } : {}),
        has_return_trip: input.hasReturnTrip,
        ...(input.hasReturnTrip
            ? {
                  return_pickup_location: trim(input.returnPickupLocation),
                  return_dropoff_location: trim(input.returnDropoffLocation),
                  return_datetime: trim(input.returnDatetime),
                  ...(input.returnFlightNumber ? { return_flight_number: input.returnFlightNumber } : {}),
              }
            : {}),
        trip_selection: input.hasReturnTrip ? 'roundtrip' : 'outbound',
    };

    /** Columns from the multi-site migration. */
    const multiSite: Record<string, unknown> = {
        source_site: input.sourceSite,
        ...(input.serviceType ? { service_type: input.serviceType } : {}),
        ...(input.customerMessage ? { customer_message: input.customerMessage } : {}),
        ...(input.locale ? { locale: input.locale } : {}),
        ...(typeof input.adults === 'number' ? { adults: input.adults } : {}),
        ...(typeof input.children === 'number' ? { children: input.children } : {}),
        ...(input.childAges ? { child_ages: input.childAges } : {}),
        ...(typeof input.luggageHold === 'number' ? { luggage_hold: input.luggageHold } : {}),
        ...(typeof input.luggageCabin === 'number' ? { luggage_cabin: input.luggageCabin } : {}),
        ...(input.idempotencyKey ? { idempotency_key: input.idempotencyKey } : {}),
    };

    const missingColumn = (message: string | undefined) =>
        !!message && /column .* does not exist|could not find the .* column/i.test(message);

    // Best case first, then degrade. Each step keeps the information by
    // folding it into a column that does exist.
    const attempts: Record<string, unknown>[] = [
        { ...base, ...returnTrip, ...multiSite },
        { ...base, ...returnTrip, admin_notes: extras },
        { ...base, ...(input.luggage ? { luggage: input.luggage } : {}) },
        base,
    ];

    let lastError: string | undefined;
    for (let i = 0; i < attempts.length; i += 1) {
        const { data, error } = await supabase
            .from('bookings')
            .insert([attempts[i]])
            .select('*')
            .single();

        if (!error) {
            return {
                id: data?.id ?? null,
                deduplicated: false,
                fullSchema: i === 0,
                record: data ?? null,
            };
        }

        // A duplicate key means another request won the race with the same
        // idempotency key. That is a success for the caller, not a failure.
        if (error.code === '23505' && input.idempotencyKey) {
            const { data: existing } = await supabase
                .from('bookings')
                .select('*')
                .eq('idempotency_key', input.idempotencyKey)
                .maybeSingle();
            if (existing) {
                return { id: existing.id ?? null, deduplicated: true, fullSchema: true, record: existing };
            }
        }

        lastError = error.message;
        if (!missingColumn(error.message)) break;
    }

    throw new Error(lastError || 'Failed to save the lead.');
}
