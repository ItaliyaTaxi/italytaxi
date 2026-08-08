'use server';

import { getServiceSupabase } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { sendEmail } from '@/lib/mailer';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'italytaxiservicee@gmail.com';

export async function deleteBookingAction(id: string) {
    try {
        const supabase = getServiceSupabase();
        const { error } = await supabase.from('bookings').delete().eq('id', id);
        
        if (error) {
            console.error('[CRM Action] Error deleting booking:', error);
            throw new Error(error.message);
        }
        
        revalidatePath('/crm');
        return { success: true };
    } catch (e: any) {
        console.error('[CRM Action] Exception deleting booking:', e);
        throw new Error(e.message || 'Failed to delete booking');
    }
}

export type TripSelection = 'outbound' | 'both' | 'roundtrip';

export interface ConfirmBookingInput {
    full_name: string;
    email: string;
    phone: string;
    pickup_location: string;
    dropoff_location: string;
    booking_datetime: string;
    flight_number?: string;
    passengers: number;
    luggage?: string;
    trip_selection: TripSelection;
    return_pickup_location?: string;
    return_dropoff_location?: string;
    return_datetime?: string;
    return_flight_number?: string;
    admin_notes?: string;
}

const formatWhen = (raw: string) => {
    const d = new Date(raw);
    if (isNaN(d.getTime())) return { date: raw || '—', time: '' };
    return {
        date: d.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }),
        time: d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }),
    };
};

/**
 * Confirms a booking and sends the confirmation email — built to match
 * exactly what the admin selected/edited in the CRM's Confirm & Send modal:
 *   - 'outbound': only the outbound leg is included.
 *   - 'both' / 'roundtrip': both legs are included, with copy that frames
 *     them as either two separate transfers or a single round trip.
 * Any edits made in the modal (time, pickup, flight number, notes, etc.) are
 * persisted to the booking row first, so the email always reflects the
 * latest, corrected details rather than what the client originally submitted.
 */
export async function confirmBookingAction(id: string, booking: ConfirmBookingInput) {
    const supabase = getServiceSupabase();

    const hasReturn = booking.trip_selection !== 'outbound';

    const updatePayload: Record<string, any> = {
        status: 'confirmed',
        full_name: booking.full_name,
        email: booking.email,
        phone: booking.phone,
        pickup_location: booking.pickup_location,
        dropoff_location: booking.dropoff_location,
        booking_datetime: booking.booking_datetime,
        passengers: booking.passengers,
        luggage: booking.luggage || null,
        flight_number: booking.flight_number || null,
        trip_selection: booking.trip_selection,
        has_return_trip: hasReturn,
        return_pickup_location: hasReturn ? (booking.return_pickup_location || null) : null,
        return_dropoff_location: hasReturn ? (booking.return_dropoff_location || null) : null,
        return_datetime: hasReturn ? (booking.return_datetime || null) : null,
        return_flight_number: hasReturn ? (booking.return_flight_number || null) : null,
        admin_notes: booking.admin_notes || null,
    };

    let { error } = await supabase.from('bookings').update(updatePayload).eq('id', id);
    if (error && /column .* does not exist/i.test(error.message)) {
        // Pre-migration schema — fall back to just flipping status so confirmation
        // still works; run add_bookings_return_trip_fields.sql to enable the rest.
        ({ error } = await supabase.from('bookings').update({ status: 'confirmed' }).eq('id', id));
    }
    if (error) throw new Error(error.message);

    const outbound = formatWhen(booking.booking_datetime);
    const ret = hasReturn ? formatWhen(booking.return_datetime || '') : null;

    const tripLabel = booking.trip_selection === 'outbound' ? 'One-Way Transfer'
        : booking.trip_selection === 'both' ? 'Two Transfers'
            : 'Round Trip';

    // ── Admin notification ──────────────────────────────────────────────
    try {
        const adminReturnRow = hasReturn && ret ? `
            <h3 style="margin:24px 0 10px;font-size:14px;color:#0F1C2E">Return Trip</h3>
            <table style="border-collapse:collapse;width:100%">
                <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Pickup</strong></td><td style="padding:10px;border:1px solid #ddd">${booking.return_pickup_location || '—'}</td></tr>
                <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Dropoff</strong></td><td style="padding:10px;border:1px solid #ddd">${booking.return_dropoff_location || '—'}</td></tr>
                <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Date &amp; Time</strong></td><td style="padding:10px;border:1px solid #ddd">${ret.date} at ${ret.time}</td></tr>
                ${booking.return_flight_number ? `<tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Flight No.</strong></td><td style="padding:10px;border:1px solid #ddd">${booking.return_flight_number}</td></tr>` : ''}
            </table>
        ` : '';

        await sendEmail({
            to: ADMIN_EMAIL,
            subject: `✅ Booking Confirmed (${tripLabel}) — ${booking.full_name}`,
            html: `
                <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
                    <h2 style="color:#0F1C2E">Booking Confirmed — ${tripLabel}</h2>
                    <p style="color:#555">You have confirmed the following booking in the CRM dashboard.</p>
                    <table style="border-collapse:collapse;width:100%;margin:20px 0">
                        <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Name</strong></td><td style="padding:10px;border:1px solid #ddd">${booking.full_name}</td></tr>
                        <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Email</strong></td><td style="padding:10px;border:1px solid #ddd">${booking.email}</td></tr>
                        <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Phone</strong></td><td style="padding:10px;border:1px solid #ddd">${booking.phone}</td></tr>
                        <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Passengers</strong></td><td style="padding:10px;border:1px solid #ddd">${booking.passengers}</td></tr>
                        ${booking.luggage ? `<tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Luggage</strong></td><td style="padding:10px;border:1px solid #ddd">${booking.luggage}</td></tr>` : ''}
                    </table>
                    <h3 style="margin:24px 0 10px;font-size:14px;color:#0F1C2E">Outbound Trip</h3>
                    <table style="border-collapse:collapse;width:100%">
                        <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Pickup</strong></td><td style="padding:10px;border:1px solid #ddd">${booking.pickup_location}</td></tr>
                        <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Dropoff</strong></td><td style="padding:10px;border:1px solid #ddd">${booking.dropoff_location}</td></tr>
                        <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Date &amp; Time</strong></td><td style="padding:10px;border:1px solid #ddd">${outbound.date} at ${outbound.time}</td></tr>
                        ${booking.flight_number ? `<tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Flight No.</strong></td><td style="padding:10px;border:1px solid #ddd">${booking.flight_number}</td></tr>` : ''}
                    </table>
                    ${adminReturnRow}
                    ${booking.admin_notes ? `<h3 style="margin:24px 0 10px;font-size:14px;color:#0F1C2E">Notes</h3><p style="color:#555;white-space:pre-wrap">${booking.admin_notes}</p>` : ''}
                    <p style="color:#999;font-size:12px;margin-top:20px">Italy Taxi Service — CRM System</p>
                </div>
            `,
        });
    } catch (e) {
        console.error('[CRM] Admin confirmation email failed:', e);
    }

    // ── Client confirmation email ───────────────────────────────────────
    try {
        const outboundHeading = booking.trip_selection === 'roundtrip' ? 'Outbound Trip' : (hasReturn ? 'Transfer 1' : 'Trip Details');
        const returnHeading = booking.trip_selection === 'roundtrip' ? 'Return Trip' : 'Transfer 2';

        const outboundBlock = `
            <div style="background:#f9f9f9;border-left:4px solid #C9A84C;padding:20px;border-radius:0 8px 8px 0;margin:16px 0">
                <p style="margin:0 0 14px;font-size:11px;font-weight:bold;color:#888;text-transform:uppercase;letter-spacing:1.5px">${outboundHeading}</p>
                <table style="border-collapse:collapse;width:100%">
                    <tr><td style="padding:8px 0;color:#888;font-size:13px;width:130px;vertical-align:top">Pickup</td><td style="padding:8px 0;color:#0F1C2E;font-weight:bold;font-size:13px">${booking.pickup_location}</td></tr>
                    <tr><td style="padding:8px 0;color:#888;font-size:13px;vertical-align:top">Drop-off</td><td style="padding:8px 0;color:#0F1C2E;font-weight:bold;font-size:13px">${booking.dropoff_location}</td></tr>
                    <tr><td style="padding:8px 0;color:#888;font-size:13px;vertical-align:top">Date &amp; Time</td><td style="padding:8px 0;color:#0F1C2E;font-weight:bold;font-size:13px">${outbound.date} at ${outbound.time}</td></tr>
                    ${booking.flight_number ? `<tr><td style="padding:8px 0;color:#888;font-size:13px;vertical-align:top">Flight Number</td><td style="padding:8px 0;color:#0F1C2E;font-weight:bold;font-size:13px">${booking.flight_number}</td></tr>` : ''}
                    <tr><td style="padding:8px 0;color:#888;font-size:13px;vertical-align:top">Passengers</td><td style="padding:8px 0;color:#0F1C2E;font-weight:bold;font-size:13px">${booking.passengers}</td></tr>
                </table>
            </div>`;

        const returnBlock = hasReturn && ret ? `
            <div style="background:#f9f9f9;border-left:4px solid #C9A84C;padding:20px;border-radius:0 8px 8px 0;margin:16px 0">
                <p style="margin:0 0 14px;font-size:11px;font-weight:bold;color:#888;text-transform:uppercase;letter-spacing:1.5px">${returnHeading}</p>
                <table style="border-collapse:collapse;width:100%">
                    <tr><td style="padding:8px 0;color:#888;font-size:13px;width:130px;vertical-align:top">Pickup</td><td style="padding:8px 0;color:#0F1C2E;font-weight:bold;font-size:13px">${booking.return_pickup_location || '—'}</td></tr>
                    <tr><td style="padding:8px 0;color:#888;font-size:13px;vertical-align:top">Drop-off</td><td style="padding:8px 0;color:#0F1C2E;font-weight:bold;font-size:13px">${booking.return_dropoff_location || '—'}</td></tr>
                    <tr><td style="padding:8px 0;color:#888;font-size:13px;vertical-align:top">Date &amp; Time</td><td style="padding:8px 0;color:#0F1C2E;font-weight:bold;font-size:13px">${ret.date} at ${ret.time}</td></tr>
                    ${booking.return_flight_number ? `<tr><td style="padding:8px 0;color:#888;font-size:13px;vertical-align:top">Flight Number</td><td style="padding:8px 0;color:#0F1C2E;font-weight:bold;font-size:13px">${booking.return_flight_number}</td></tr>` : ''}
                </table>
            </div>` : '';

        const notesBlock = booking.admin_notes ? `
            <div style="background:#fffaf0;border-left:4px solid #C9A84C;padding:20px;border-radius:0 8px 8px 0;margin:16px 0">
                <p style="margin:0 0 10px;font-size:11px;font-weight:bold;color:#888;text-transform:uppercase;letter-spacing:1.5px">Good to Know</p>
                <p style="color:#555;font-size:13px;line-height:1.6;white-space:pre-wrap;margin:0">${booking.admin_notes}</p>
            </div>` : '';

        const introLine = booking.trip_selection === 'roundtrip'
            ? 'Great news! Your round-trip taxi booking has been confirmed. Your driver will be ready and waiting for you at each pickup location.'
            : booking.trip_selection === 'both'
                ? 'Great news! Both of your taxi transfers have been confirmed. Your driver will be ready and waiting for you at each pickup location.'
                : 'Great news! Your taxi booking has been confirmed. Your driver will be ready and waiting for you at the pickup location.';

        const subjectLabel = booking.trip_selection === 'roundtrip' ? 'Round Trip' : booking.trip_selection === 'both' ? 'Transfers' : 'Booking';

        await sendEmail({
            to: booking.email,
            subject: `Your Italy Taxi ${subjectLabel} is Confirmed! 🚖`,
            html: `
                <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
                    <div style="background:#0F1C2E;padding:32px;text-align:center;border-radius:12px 12px 0 0">
                        <h1 style="color:#C9A84C;margin:0;font-size:28px;letter-spacing:-0.5px">Italy Taxi Service</h1>
                        <p style="color:#ffffff99;font-size:12px;margin:8px 0 0;letter-spacing:2px;text-transform:uppercase">Premium Transfers Across Italy</p>
                    </div>
                    <div style="background:#ffffff;padding:40px;border:1px solid #eee;border-top:none">
                        <h2 style="color:#0F1C2E;margin-top:0">Your ${tripLabel} is Confirmed!</h2>
                        <p style="color:#555;line-height:1.7">Dear <strong>${booking.full_name}</strong>,<br><br>${introLine}</p>

                        ${outboundBlock}
                        ${returnBlock}
                        ${notesBlock}

                        <p style="color:#555;line-height:1.7">Our team will be in touch shortly with your driver's details and final quote. If you have any questions in the meantime, please don't hesitate to reach out.</p>
                        <p style="color:#555;line-height:1.7">📧 <a href="mailto:italytaxiservicee@gmail.com" style="color:#C9A84C">italytaxiservicee@gmail.com</a><br>📞 Available 24/7 for your journey needs</p>
                    </div>
                    <div style="background:#f9f9f9;padding:20px;text-align:center;border:1px solid #eee;border-top:none;border-radius:0 0 12px 12px">
                        <p style="color:#999;font-size:11px;margin:0">Italy Taxi Service · Premium Transfers · italytaxiservicee@gmail.com</p>
                    </div>
                </div>
            `,
        });
    } catch (e) {
        console.error('[CRM] Client confirmation email failed:', e);
    }

    revalidatePath('/crm');
    return { success: true };
}

export async function sendClientEmailAction(to: string, clientName: string, subject: string, body: string) {
    if (!to || !subject || !body) throw new Error('To, subject and body are required.');

    const htmlBody = body.replace(/\n/g, '<br>');

    await sendEmail({
        to,
        replyTo: ADMIN_EMAIL,
        subject,
        html: `
            <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
                <div style="background:#0F1C2E;padding:32px;text-align:center;border-radius:12px 12px 0 0">
                    <h1 style="color:#C9A84C;margin:0;font-size:24px;letter-spacing:-0.5px">Italy Taxi Service</h1>
                    <p style="color:#ffffff99;font-size:11px;margin:8px 0 0;letter-spacing:2px;text-transform:uppercase">Premium Transfers Across Italy</p>
                </div>
                <div style="background:#ffffff;padding:40px;border:1px solid #eee;border-top:none">
                    <p style="color:#555;font-size:15px;line-height:1.8">Dear <strong>${clientName}</strong>,</p>
                    <div style="color:#333;font-size:15px;line-height:1.8;margin:20px 0">${htmlBody}</div>
                    <hr style="border:none;border-top:1px solid #eee;margin:32px 0">
                    <p style="color:#888;font-size:13px;line-height:1.6">
                        Best regards,<br>
                        <strong style="color:#0F1C2E">Italy Taxi Service Team</strong><br>
                        📧 <a href="mailto:italytaxiservicee@gmail.com" style="color:#C9A84C">italytaxiservicee@gmail.com</a>
                    </p>
                </div>
                <div style="background:#f9f9f9;padding:20px;text-align:center;border:1px solid #eee;border-top:none;border-radius:0 0 12px 12px">
                    <p style="color:#999;font-size:11px;margin:0">Italy Taxi Service &middot; italytaxiservice.com</p>
                </div>
            </div>
        `,
    });

    return { success: true };
}

export async function deleteContactAction(id: string) {
    try {
        const supabase = getServiceSupabase();
        const { error } = await supabase.from('contacts').delete().eq('id', id);
        
        if (error) {
            console.error('[CRM Action] Error deleting contact:', error);
            throw new Error(error.message);
        }
        
        revalidatePath('/crm');
        return { success: true };
    } catch (e: any) {
        console.error('[CRM Action] Exception deleting contact:', e);
        throw new Error(e.message || 'Failed to delete contact');
    }
}

export interface CreateManualLeadInput {
    full_name: string;
    email?: string;
    phone?: string;
    pickup_location: string;
    dropoff_location: string;
    booking_datetime: string;
    passengers: number;
    luggage?: string;
    flight_number?: string;
    source_form: string;
    status: 'pending' | 'confirmed' | 'cancelled';
    trip_selection: TripSelection;
    has_return_trip: boolean;
    return_pickup_location?: string;
    return_dropoff_location?: string;
    return_datetime?: string;
    return_flight_number?: string;
    admin_notes?: string;
}

export async function createManualLeadAction(input: CreateManualLeadInput) {
    try {
        const supabase = getServiceSupabase();

        if (!input.full_name || !input.pickup_location || !input.dropoff_location || !input.booking_datetime) {
            throw new Error('Full name, pickup location, drop-off location, and trip date & time are required.');
        }

        const payload: Record<string, any> = {
            full_name: input.full_name,
            email: input.email ? input.email.trim() : '',
            phone: input.phone ? input.phone.trim() : '',
            pickup_location: input.pickup_location,
            dropoff_location: input.dropoff_location,
            booking_datetime: input.booking_datetime,
            passengers: Number(input.passengers) || 1,
            luggage: input.luggage || null,
            flight_number: input.flight_number || null,
            source_form: input.source_form || 'WhatsApp',
            status: input.status || 'confirmed',
            trip_selection: input.trip_selection || 'outbound',
            has_return_trip: input.has_return_trip || false,
            return_pickup_location: input.has_return_trip ? (input.return_pickup_location || null) : null,
            return_dropoff_location: input.has_return_trip ? (input.return_dropoff_location || null) : null,
            return_datetime: input.has_return_trip ? (input.return_datetime || null) : null,
            return_flight_number: input.has_return_trip ? (input.return_flight_number || null) : null,
            admin_notes: input.admin_notes || null,
        };

        let { data, error } = await supabase.from('bookings').insert([payload]).select('*').single();
        if (error && /column .* does not exist/i.test(error.message)) {
            // Fallback for missing return trip columns if table hasn't migrated
            const fallbackPayload = {
                full_name: payload.full_name,
                email: payload.email,
                phone: payload.phone,
                pickup_location: payload.pickup_location,
                dropoff_location: payload.dropoff_location,
                booking_datetime: payload.booking_datetime,
                passengers: payload.passengers,
                status: payload.status,
                source_form: payload.source_form,
                luggage: payload.luggage,
            };
            const res = await supabase.from('bookings').insert([fallbackPayload]).select('*').single();
            if (res.error) throw new Error(res.error.message);
            data = res.data;
        } else if (error) {
            throw new Error(error.message);
        }

        revalidatePath('/crm');
        return { success: true, data };
    } catch (e: any) {
        console.error('[CRM Action] Exception creating manual lead:', e);
        throw new Error(e.message || 'Failed to create manual lead');
    }
}

