'use server';

import { headers } from 'next/headers';
import { createLead } from '@/lib/leads/createLead';
import { leadBrands, sendLeadNotifications } from '@/lib/leads/notify';
import type { LeadInput } from '@/lib/leads/types';
import { getServiceSupabase } from '@/lib/supabase/server';
import {
    clientIpFrom,
    TURNSTILE_ACTIONS,
    TURNSTILE_FIELD,
    verifyTurnstile,
} from '@/lib/security/turnstile';
import {
    checkBooking,
    HONEYPOT_FIELD,
    honeypotTripped,
    isDuplicateBooking,
} from '@/lib/security/antiSpam';

/** What a rejected submission tells the sender: enough to fix a mistake, no more. */
const REJECTED = (message: string) => ({ success: false, message });

/**
 * The public booking form's submit handler.
 *
 * The database write and the two emails used to live here in full. They now
 * live in `lib/leads/createLead.ts` and `lib/leads/notify.ts`, which this
 * calls — the same two functions the cross-site intake at /api/leads calls.
 * That is the whole point of the move: one lead model, one insert with its
 * fallbacks, one pair of email templates, whichever website the enquiry came
 * from.
 *
 * What the visitor sees is unchanged: the same fields are read from the form,
 * the same record is written, the same emails go out, and the same
 * `{ success, message }` shape comes back for `useActionState`.
 *
 * One deliberate change under the surface: the insert now goes through the
 * service-role client rather than the public anon key, matching what the
 * CRM's own "add lead" action has always done. The public no longer needs
 * write access to the table for this form to work.
 */
export async function submitBooking(_prevState: unknown, formData: FormData) {
    const name = (formData.get('name') as string) || '';
    const email = (formData.get('email') as string) || '';
    const phone = (formData.get('phone') as string) || '';
    const pickup = (formData.get('pickup') as string) || '';
    const dropoff = (formData.get('dropoff') as string) || '';
    const datetime = (formData.get('datetime') as string) || '';
    const passengers = Number(formData.get('passengers')) || 1;
    const luggage = ((formData.get('luggage') as string) || '').trim();
    const flightNumber = ((formData.get('flight_number') as string) || '').trim();
    const sourceForm = ((formData.get('source_form') as string) || '').trim() || 'Unknown Form';

    const returnTrip = formData.get('return_trip') === 'on';
    const returnPickup = ((formData.get('return_pickup') as string) || '').trim();
    const returnDropoff = ((formData.get('return_dropoff') as string) || '').trim();
    const returnDatetime = ((formData.get('return_datetime') as string) || '').trim();
    const returnFlightNumber = ((formData.get('return_flight_number') as string) || '').trim();

    /* ─────────── Gate: nothing below this reaches the CRM or email ───────────
     *
     * This form posts to a public Server Action, so the browser's `required`
     * and `type="email"` attributes are not a control — a direct POST never
     * sees them. Every check here runs on the server, in this order:
     * Turnstile, honeypot, field and date validation, duplicate. A submission
     * that fails any of them returns before `createLead()` is called, so it
     * creates no record and sends no notification.
     */

    // 2. Turnstile — proof the submission came from a real browser session.
    const requestHeaders = await headers();
    const ip = clientIpFrom(requestHeaders);
    const rawToken = formData.get(TURNSTILE_FIELD);
    const verdict = await verifyTurnstile(rawToken, ip, TURNSTILE_ACTIONS.booking);
    if (!verdict.ok) {
        // Token length only, never the token itself: enough to tell "the field
        // never arrived" apart from "it arrived and Cloudflare refused it",
        // which is the difference between a front-end wiring fault and a real
        // rejection.
        const tokenLen = typeof rawToken === 'string' ? rawToken.length : -1;
        console.warn(
            '[BOOKING] rejected: turnstile —', verdict.reason,
            '| tokenChars:', tokenLen,
            '| form:', sourceForm,
        );
        return REJECTED(
            'We could not verify that this request came from a browser. Please refresh the page and try again.',
        );
    }

    // 3. Honeypot — a field no human sees, so anything in it is automated.
    if (honeypotTripped(formData.get(HONEYPOT_FIELD))) {
        console.warn('[BOOKING] rejected: honeypot | form:', sourceForm, '| ip:', ip);
        return REJECTED('We could not process this request. Please contact us directly.');
    }

    // 5. Field, date and time validation, in Europe/Rome.
    const { rejections, flags } = checkBooking({
        name,
        email,
        phone,
        pickup,
        dropoff,
        datetime,
        sourceForm,
    });
    if (rejections.length > 0) {
        console.warn(
            '[BOOKING] rejected: validation —',
            rejections.map((r) => `${r.field}: ${r.reason}`).join('; '),
            '| form:',
            sourceForm,
        );
        return REJECTED(rejections[0].reason);
    }

    // 6. Duplicate — the same journey from the same person, minutes apart.
    if (await isDuplicateBooking(getServiceSupabase(), { email, phone, pickup, dropoff, datetime })) {
        console.warn('[BOOKING] rejected: duplicate | form:', sourceForm);
        return REJECTED(
            'We already have this request. We will be in touch shortly — no need to send it again.',
        );
    }

    const lead: LeadInput = {
        sourceSite: 'italytaxiservice',
        sourceForm,
        fullName: name,
        email,
        phone,
        pickupLocation: pickup,
        dropoffLocation: dropoff,
        bookingDatetime: datetime,
        flightNumber: flightNumber || undefined,
        hasReturnTrip: returnTrip,
        ...(returnTrip
            ? {
                  returnPickupLocation: returnPickup,
                  returnDropoffLocation: returnDropoff,
                  returnDatetime: returnDatetime,
                  returnFlightNumber: returnFlightNumber || undefined,
              }
            : {}),
        passengers,
        luggage: luggage || undefined,
    };

    // Soft signals are recorded in the logs, not written to the lead: the CRM
    // field mapping is deliberately left exactly as it was, and none of these
    // is a reason to refuse a booking on its own.
    if (flags.length > 0) {
        console.info('[BOOKING] accepted with flags —', flags.join('; '), '| form:', sourceForm);
    }

    try {
        await createLead(lead);
    } catch (error: unknown) {
        console.error('Booking Error:', error);
        return {
            success: false,
            message:
                (error instanceof Error && error.message) ||
                'Something went wrong. Please try again or call us directly.',
        };
    }

    // The lead is saved. Email failures are logged inside and must not turn a
    // saved request into an error the customer sees.
    await sendLeadNotifications(lead, leadBrands.italytaxiservice);

    return {
        success: true,
        message: `We received your request. Shortly we will send you an email with the quotation details.`,
    };
}
