'use server';

import { supabase } from '@/lib/supabase/client';
import { sendEmail } from '@/lib/mailer';

export async function submitBooking(_prevState: any, formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const pickup = formData.get('pickup') as string;
    const dropoff = formData.get('dropoff') as string;
    const datetime = formData.get('datetime') as string;
    const passengers = Number(formData.get('passengers')) || 1;

    try {
        const { error: dbError } = await supabase
            .from('bookings')
            .insert([
                {
                    full_name: name,
                    email,
                    phone,
                    pickup_location: pickup,
                    dropoff_location: dropoff,
                    booking_datetime: datetime,
                    passengers,
                    status: 'pending'
                }
            ]);

        if (dbError) throw dbError;

        // 1. Admin notification
        try {
            await sendEmail({
                to: 'booking@italytaxiservice.com',
                subject: `New Booking Request from ${name}`,
                fromAccount: 'booking',
                html: `
                    <h2 style="color:#0F1C2E">New Booking Request</h2>
                    <table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif">
                        <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Name</strong></td><td style="padding:10px;border:1px solid #ddd">${name}</td></tr>
                        <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Email</strong></td><td style="padding:10px;border:1px solid #ddd">${email}</td></tr>
                        <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Phone</strong></td><td style="padding:10px;border:1px solid #ddd">${phone}</td></tr>
                        <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Pickup</strong></td><td style="padding:10px;border:1px solid #ddd">${pickup}</td></tr>
                        <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Dropoff</strong></td><td style="padding:10px;border:1px solid #ddd">${dropoff}</td></tr>
                        <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Date & Time</strong></td><td style="padding:10px;border:1px solid #ddd">${datetime}</td></tr>
                    </table>
                `,
            });
        } catch (adminEmailError) {
            console.error('[BOOKING] Admin email notification failed:', adminEmailError);
        }

        // 2. Customer confirmation
        try {
            await sendEmail({
                to: email,
                subject: `Booking Confirmed — Italy Taxi Service`,
                fromAccount: 'booking',
                html: `
                    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
                        <h2 style="color:#0F1C2E">Thank you, ${name}!</h2>
                        <p style="color:#555">We have received your booking request. Our team will contact you shortly to confirm the details.</p>
                        <table style="border-collapse:collapse;width:100%;margin:20px 0">
                            <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Pickup</strong></td><td style="padding:10px;border:1px solid #ddd">${pickup}</td></tr>
                            <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Dropoff</strong></td><td style="padding:10px;border:1px solid #ddd">${dropoff}</td></tr>
                            <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Date & Time</strong></td><td style="padding:10px;border:1px solid #ddd">${datetime}</td></tr>
                            <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Passengers</strong></td><td style="padding:10px;border:1px solid #ddd">${passengers}</td></tr>
                        </table>
                        <p style="color:#555">For any queries, contact us at <a href="mailto:booking@italytaxiservice.com">booking@italytaxiservice.com</a></p>
                        <p style="color:#999;font-size:12px">Italy Taxi Service — Premium Transfers Across Italy</p>
                    </div>
                `,
            });
        } catch (customerEmailError) {
            console.error('[BOOKING] Customer email confirmation failed:', customerEmailError);
        }

        return {
            success: true,
            message: `Thank you ${name}! Your booking request has been received. Our team will contact you at ${phone} shortly to confirm the details.`
        };

    } catch (error: any) {
        console.error('Booking Error:', error);
        return {
            success: false,
            message: error.message || "Something went wrong. Please try again or call us directly."
        };
    }
}
