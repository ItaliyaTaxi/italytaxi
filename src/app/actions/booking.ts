'use server';

import { supabase } from '@/lib/supabase/client';
import { sendEmail } from '@/lib/mailer';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'italytaxiservicee@gmail.com';

const formatDateTime = (raw: string) => {
    if (!raw) return { date: '—', time: '—' };
    const d = new Date(raw);
    if (isNaN(d.getTime())) return { date: raw, time: '' };
    return {
        date: d.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }),
        time: d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }),
    };
};

export async function submitBooking(_prevState: any, formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const pickup = formData.get('pickup') as string;
    const dropoff = formData.get('dropoff') as string;
    const datetime = formData.get('datetime') as string;
    const passengers = Number(formData.get('passengers')) || 1;
    const flightNumber = ((formData.get('flight_number') as string) || '').trim();
    const source_form = (formData.get('source_form') as string) || 'Unknown Form';

    const returnTrip = formData.get('return_trip') === 'on';
    const returnPickup = ((formData.get('return_pickup') as string) || '').trim();
    const returnDropoff = ((formData.get('return_dropoff') as string) || '').trim();
    const returnDatetime = ((formData.get('return_datetime') as string) || '').trim();
    const returnFlightNumber = ((formData.get('return_flight_number') as string) || '').trim();

    try {
        const { error: dbError } = await supabase
            .from('bookings')
            .insert([{
                full_name: name,
                email,
                phone,
                pickup_location: pickup,
                dropoff_location: dropoff,
                booking_datetime: datetime,
                passengers,
                status: 'pending',
                source_form,
            }]);

        if (dbError) throw dbError;

        const outbound = formatDateTime(datetime);
        const ret = returnTrip ? formatDateTime(returnDatetime) : null;

        const cellLabel = 'padding:10px 12px;border:1px solid #eee;background:#f9f9f9;font-size:13px;color:#555;width:140px';
        const cellValue = 'padding:10px 12px;border:1px solid #eee;font-size:13px;color:#0F1C2E';

        const adminReturnBlock = returnTrip && ret ? `
            <h3 style="margin:24px 0 10px;font-size:14px;color:#0F1C2E;letter-spacing:0.5px;text-transform:uppercase;border-bottom:2px solid #C9A84C;padding-bottom:6px">Return Trip</h3>
            <table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif">
                <tr><td style="${cellLabel}"><strong>Pickup</strong></td><td style="${cellValue}">${returnPickup || '—'}</td></tr>
                <tr><td style="${cellLabel}"><strong>Drop-off</strong></td><td style="${cellValue}">${returnDropoff || '—'}</td></tr>
                <tr><td style="${cellLabel}"><strong>Date &amp; Time</strong></td><td style="${cellValue}">${ret.date} at ${ret.time}</td></tr>
                ${returnFlightNumber ? `<tr><td style="${cellLabel}"><strong>Flight No.</strong></td><td style="${cellValue}">${returnFlightNumber}</td></tr>` : ''}
            </table>
        ` : '';

        // 1. Admin notification
        try {
            await sendEmail({
                to: ADMIN_EMAIL,
                replyTo: email,
                subject: `🚖 New Quote Request from ${name} [${source_form}]`,
                html: `
                    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
                        <div style="background:#0F1C2E;padding:24px 32px;border-radius:10px 10px 0 0">
                            <h2 style="color:#C9A84C;margin:0;font-size:20px">New Quote Request</h2>
                            <p style="color:#ffffff66;font-size:11px;margin:4px 0 0;letter-spacing:1px;text-transform:uppercase">Source: ${source_form}${returnTrip ? ' · Return Trip' : ''}</p>
                        </div>
                        <div style="padding:32px;border:1px solid #eee;border-top:none;border-radius:0 0 10px 10px">
                            <table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif">
                                <tr><td style="${cellLabel}"><strong>Name</strong></td><td style="${cellValue}">${name}</td></tr>
                                <tr><td style="${cellLabel}"><strong>Email</strong></td><td style="${cellValue}">${email}</td></tr>
                                <tr><td style="${cellLabel}"><strong>Phone</strong></td><td style="${cellValue}">${phone}</td></tr>
                                <tr><td style="${cellLabel}"><strong>Passengers</strong></td><td style="${cellValue}">${passengers}</td></tr>
                            </table>
                            <h3 style="margin:24px 0 10px;font-size:14px;color:#0F1C2E;letter-spacing:0.5px;text-transform:uppercase;border-bottom:2px solid #C9A84C;padding-bottom:6px">Outbound Trip</h3>
                            <table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif">
                                <tr><td style="${cellLabel}"><strong>Pickup</strong></td><td style="${cellValue}">${pickup}</td></tr>
                                <tr><td style="${cellLabel}"><strong>Drop-off</strong></td><td style="${cellValue}">${dropoff}</td></tr>
                                <tr><td style="${cellLabel}"><strong>Date &amp; Time</strong></td><td style="${cellValue}">${outbound.date} at ${outbound.time}</td></tr>
                                ${flightNumber ? `<tr><td style="${cellLabel}"><strong>Flight No.</strong></td><td style="${cellValue}">${flightNumber}</td></tr>` : ''}
                            </table>
                            ${adminReturnBlock}
                            <p style="margin:20px 0 0;font-size:12px;color:#999">Reply to this email to send the client a quotation.</p>
                        </div>
                    </div>
                `,
            });
        } catch (e) {
            console.error('[BOOKING] Admin email failed:', e);
        }

        const labelStyle = 'padding:7px 0;color:#888;font-size:13px;width:140px;vertical-align:top';
        const valueStyle = 'padding:7px 0;color:#0F1C2E;font-weight:bold;font-size:13px';

        const clientReturnBlock = returnTrip && ret ? `
            <div style="background:#f9f9f9;border-left:4px solid #C9A84C;padding:20px;border-radius:0 8px 8px 0;margin:16px 0">
                <p style="margin:0 0 14px;font-size:11px;font-weight:bold;color:#888;text-transform:uppercase;letter-spacing:1.5px">Return Trip</p>
                <table style="border-collapse:collapse;width:100%">
                    <tr><td style="${labelStyle}">Pickup Location</td><td style="${valueStyle}">${returnPickup || '—'}</td></tr>
                    <tr><td style="${labelStyle}">Drop-off Location</td><td style="${valueStyle}">${returnDropoff || '—'}</td></tr>
                    <tr><td style="${labelStyle}">Date &amp; Time</td><td style="${valueStyle}">${ret.date} at ${ret.time}</td></tr>
                    ${returnFlightNumber ? `<tr><td style="${labelStyle}">Flight Number</td><td style="${valueStyle}">${returnFlightNumber}</td></tr>` : ''}
                </table>
            </div>
        ` : '';

        // 2. Client confirmation
        try {
            await sendEmail({
                to: email,
                subject: `Quote Request Received — Italy Taxi Service`,
                html: `
                    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
                        <div style="background:#0F1C2E;padding:32px;text-align:center;border-radius:12px 12px 0 0">
                            <h1 style="color:#C9A84C;margin:0;font-size:24px;letter-spacing:-0.5px">Italy Taxi Service</h1>
                            <p style="color:#ffffff99;font-size:11px;margin:8px 0 0;letter-spacing:2px;text-transform:uppercase">Premium Transfers Across Italy</p>
                        </div>
                        <div style="background:#ffffff;padding:40px;border:1px solid #eee;border-top:none">
                            <h2 style="color:#0F1C2E;margin-top:0">Hello ${name},</h2>
                            <p style="color:#555;line-height:1.7;font-size:15px">We received your request. Shortly we will send you an email with the quotation details.</p>
                            <div style="background:#f9f9f9;border-left:4px solid #C9A84C;padding:20px;border-radius:0 8px 8px 0;margin:24px 0">
                                <p style="margin:0 0 14px;font-size:11px;font-weight:bold;color:#888;text-transform:uppercase;letter-spacing:1.5px">Your Details</p>
                                <table style="border-collapse:collapse;width:100%">
                                    <tr><td style="${labelStyle}">Full Name</td><td style="${valueStyle}">${name}</td></tr>
                                    <tr><td style="${labelStyle}">Email</td><td style="${valueStyle}">${email}</td></tr>
                                    <tr><td style="${labelStyle}">Phone</td><td style="${valueStyle}">${phone}</td></tr>
                                    <tr><td style="${labelStyle}">Passengers</td><td style="${valueStyle}">${passengers}</td></tr>
                                </table>
                            </div>
                            <div style="background:#f9f9f9;border-left:4px solid #C9A84C;padding:20px;border-radius:0 8px 8px 0;margin:16px 0">
                                <p style="margin:0 0 14px;font-size:11px;font-weight:bold;color:#888;text-transform:uppercase;letter-spacing:1.5px">Outbound Trip</p>
                                <table style="border-collapse:collapse;width:100%">
                                    <tr><td style="${labelStyle}">Pickup Location</td><td style="${valueStyle}">${pickup}</td></tr>
                                    <tr><td style="${labelStyle}">Drop-off Location</td><td style="${valueStyle}">${dropoff}</td></tr>
                                    <tr><td style="${labelStyle}">Date &amp; Time</td><td style="${valueStyle}">${outbound.date} at ${outbound.time}</td></tr>
                                    ${flightNumber ? `<tr><td style="${labelStyle}">Flight Number</td><td style="${valueStyle}">${flightNumber}</td></tr>` : ''}
                                </table>
                            </div>
                            ${clientReturnBlock}
                            <p style="color:#555;line-height:1.7">If anything looks incorrect or you need to make changes, reply to this email or reach us at:<br>
                            📧 <a href="mailto:italytaxiservicee@gmail.com" style="color:#C9A84C">italytaxiservicee@gmail.com</a></p>
                        </div>
                        <div style="background:#f9f9f9;padding:20px;text-align:center;border:1px solid #eee;border-top:none;border-radius:0 0 12px 12px">
                            <p style="color:#999;font-size:11px;margin:0">Italy Taxi Service &middot; italytaxiservice.com</p>
                        </div>
                    </div>
                `,
            });
        } catch (e) {
            console.error('[BOOKING] Client email failed:', e);
        }

        return {
            success: true,
            message: `We received your request. Shortly we will send you an email with the quotation details.`,
        };

    } catch (error: any) {
        console.error('Booking Error:', error);
        return {
            success: false,
            message: error.message || 'Something went wrong. Please try again or call us directly.',
        };
    }
}
