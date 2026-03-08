'use server';

import { supabase } from '@/lib/supabase/client';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function submitBooking(prevState: any, formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const pickup = formData.get('pickup') as string;
    const dropoff = formData.get('dropoff') as string;
    const datetime = formData.get('datetime') as string;

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
                    status: 'pending'
                }
            ]);

        if (dbError) throw dbError;

        if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
            try {
                await transporter.sendMail({
                    from: `"Italy Taxi Service" <${process.env.SMTP_USER}>`,
                    to: 'booking@italytaxiservice.com',
                    subject: `New Booking Request from ${name}`,
                    html: `
                        <h2>New Booking Request</h2>
                        <table style="border-collapse:collapse;width:100%">
                            <tr><td style="padding:8px;border:1px solid #ddd"><strong>Name</strong></td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
                            <tr><td style="padding:8px;border:1px solid #ddd"><strong>Email</strong></td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
                            <tr><td style="padding:8px;border:1px solid #ddd"><strong>Phone</strong></td><td style="padding:8px;border:1px solid #ddd">${phone}</td></tr>
                            <tr><td style="padding:8px;border:1px solid #ddd"><strong>Pickup</strong></td><td style="padding:8px;border:1px solid #ddd">${pickup}</td></tr>
                            <tr><td style="padding:8px;border:1px solid #ddd"><strong>Dropoff</strong></td><td style="padding:8px;border:1px solid #ddd">${dropoff}</td></tr>
                            <tr><td style="padding:8px;border:1px solid #ddd"><strong>Date & Time</strong></td><td style="padding:8px;border:1px solid #ddd">${datetime}</td></tr>
                        </table>
                    `,
                });
            } catch (emailError) {
                console.error('Email notification failed:', emailError);
            }
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
