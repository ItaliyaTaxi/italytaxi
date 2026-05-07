'use server';

import { supabase } from '@/lib/supabase/client';
import { sendEmail } from '@/lib/mailer';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'italytaxiservicee@gmail.com';

export async function submitBooking(_prevState: any, formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const pickup = formData.get('pickup') as string;
    const dropoff = formData.get('dropoff') as string;
    const datetime = formData.get('datetime') as string;
    const passengers = Number(formData.get('passengers')) || 1;
    const source_form = (formData.get('source_form') as string) || 'Unknown Form';

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

        const bookingDate = new Date(datetime).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
        const bookingTime = new Date(datetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

        // 1. Admin notification
        try {
            await sendEmail({
                to: ADMIN_EMAIL,
                replyTo: email,
                subject: `🚖 New Booking Request from ${name} [${source_form}]`,
                html: `
                    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
                        <div style="background:#0F1C2E;padding:24px 32px;border-radius:10px 10px 0 0">
                            <h2 style="color:#C9A84C;margin:0;font-size:20px">New Booking Request</h2>
                            <p style="color:#ffffff66;font-size:11px;margin:4px 0 0;letter-spacing:1px;text-transform:uppercase">Source: ${source_form}</p>
                        </div>
                        <div style="padding:32px;border:1px solid #eee;border-top:none;border-radius:0 0 10px 10px">
                            <table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif">
                                <tr><td style="padding:10px 12px;border:1px solid #eee;background:#f9f9f9;font-size:13px;color:#555;width:140px"><strong>Name</strong></td><td style="padding:10px 12px;border:1px solid #eee;font-size:13px;color:#0F1C2E">${name}</td></tr>
                                <tr><td style="padding:10px 12px;border:1px solid #eee;background:#f9f9f9;font-size:13px;color:#555"><strong>Email</strong></td><td style="padding:10px 12px;border:1px solid #eee;font-size:13px;color:#0F1C2E">${email}</td></tr>
                                <tr><td style="padding:10px 12px;border:1px solid #eee;background:#f9f9f9;font-size:13px;color:#555"><strong>Phone</strong></td><td style="padding:10px 12px;border:1px solid #eee;font-size:13px;color:#0F1C2E">${phone}</td></tr>
                                <tr><td style="padding:10px 12px;border:1px solid #eee;background:#f9f9f9;font-size:13px;color:#555"><strong>Pickup</strong></td><td style="padding:10px 12px;border:1px solid #eee;font-size:13px;color:#0F1C2E">${pickup}</td></tr>
                                <tr><td style="padding:10px 12px;border:1px solid #eee;background:#f9f9f9;font-size:13px;color:#555"><strong>Drop-off</strong></td><td style="padding:10px 12px;border:1px solid #eee;font-size:13px;color:#0F1C2E">${dropoff}</td></tr>
                                <tr><td style="padding:10px 12px;border:1px solid #eee;background:#f9f9f9;font-size:13px;color:#555"><strong>Date &amp; Time</strong></td><td style="padding:10px 12px;border:1px solid #eee;font-size:13px;color:#0F1C2E">${bookingDate} at ${bookingTime}</td></tr>
                                <tr><td style="padding:10px 12px;border:1px solid #eee;background:#f9f9f9;font-size:13px;color:#555"><strong>Passengers</strong></td><td style="padding:10px 12px;border:1px solid #eee;font-size:13px;color:#0F1C2E">${passengers}</td></tr>
                            </table>
                            <p style="margin:20px 0 0;font-size:12px;color:#999">Reply to this email to contact the client directly.</p>
                        </div>
                    </div>
                `,
            });
        } catch (e) {
            console.error('[BOOKING] Admin email failed:', e);
        }

        // 2. Client confirmation
        try {
            await sendEmail({
                to: email,
                subject: `Booking Request Received — Italy Taxi Service`,
                html: `
                    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
                        <div style="background:#0F1C2E;padding:32px;text-align:center;border-radius:12px 12px 0 0">
                            <h1 style="color:#C9A84C;margin:0;font-size:24px;letter-spacing:-0.5px">Italy Taxi Service</h1>
                            <p style="color:#ffffff99;font-size:11px;margin:8px 0 0;letter-spacing:2px;text-transform:uppercase">Premium Transfers Across Italy</p>
                        </div>
                        <div style="background:#ffffff;padding:40px;border:1px solid #eee;border-top:none">
                            <h2 style="color:#0F1C2E;margin-top:0">Thank you, ${name}!</h2>
                            <p style="color:#555;line-height:1.7">We have received your booking request. Our team will review it and contact you shortly to confirm and provide your quote.</p>
                            <div style="background:#f9f9f9;border-left:4px solid #C9A84C;padding:20px;border-radius:0 8px 8px 0;margin:24px 0">
                                <p style="margin:0 0 14px;font-size:11px;font-weight:bold;color:#888;text-transform:uppercase;letter-spacing:1.5px">Your Booking Details</p>
                                <table style="border-collapse:collapse;width:100%">
                                    <tr><td style="padding:7px 0;color:#888;font-size:13px;width:140px;vertical-align:top">Full Name</td><td style="padding:7px 0;color:#0F1C2E;font-weight:bold;font-size:13px">${name}</td></tr>
                                    <tr><td style="padding:7px 0;color:#888;font-size:13px;vertical-align:top">Email</td><td style="padding:7px 0;color:#0F1C2E;font-weight:bold;font-size:13px">${email}</td></tr>
                                    <tr><td style="padding:7px 0;color:#888;font-size:13px;vertical-align:top">Phone</td><td style="padding:7px 0;color:#0F1C2E;font-weight:bold;font-size:13px">${phone}</td></tr>
                                    <tr><td style="padding:7px 0;color:#888;font-size:13px;vertical-align:top">Pickup Location</td><td style="padding:7px 0;color:#0F1C2E;font-weight:bold;font-size:13px">${pickup}</td></tr>
                                    <tr><td style="padding:7px 0;color:#888;font-size:13px;vertical-align:top">Drop-off Location</td><td style="padding:7px 0;color:#0F1C2E;font-weight:bold;font-size:13px">${dropoff}</td></tr>
                                    <tr><td style="padding:7px 0;color:#888;font-size:13px;vertical-align:top">Date &amp; Time</td><td style="padding:7px 0;color:#0F1C2E;font-weight:bold;font-size:13px">${bookingDate} at ${bookingTime}</td></tr>
                                    <tr><td style="padding:7px 0;color:#888;font-size:13px;vertical-align:top">Passengers</td><td style="padding:7px 0;color:#0F1C2E;font-weight:bold;font-size:13px">${passengers}</td></tr>
                                </table>
                            </div>
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
            message: `Thank you ${name}! Your booking request has been received. Our team will contact you at ${phone} shortly to confirm the details.`,
        };

    } catch (error: any) {
        console.error('Booking Error:', error);
        return {
            success: false,
            message: error.message || 'Something went wrong. Please try again or call us directly.',
        };
    }
}
