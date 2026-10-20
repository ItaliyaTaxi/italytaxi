'use server';

import { createLead } from '@/lib/leads/createLead';
import { leadBrands, sendLeadNotifications } from '@/lib/leads/notify';
import type { LeadInput } from '@/lib/leads/types';

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
