import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/mailer';

export async function POST(req: NextRequest) {
    try {
        const { name, email, phone, date, pickup, dropoff, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ success: false, error: 'Name, email and message are required.' }, { status: 400 });
        }

        // Admin notification
        await sendEmail({
            to: 'info@italytaxiservice.com',
            subject: `Contact Form Enquiry from ${name}`,
            fromAccount: 'info',
            html: `
                <h2 style="color:#0F1C2E">New Contact Form Submission</h2>
                <table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif">
                    <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Name</strong></td><td style="padding:10px;border:1px solid #ddd">${name}</td></tr>
                    <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Email</strong></td><td style="padding:10px;border:1px solid #ddd">${email}</td></tr>
                    <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Phone</strong></td><td style="padding:10px;border:1px solid #ddd">${phone || '—'}</td></tr>
                    <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Date</strong></td><td style="padding:10px;border:1px solid #ddd">${date || '—'}</td></tr>
                    <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Pickup</strong></td><td style="padding:10px;border:1px solid #ddd">${pickup || '—'}</td></tr>
                    <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Dropoff</strong></td><td style="padding:10px;border:1px solid #ddd">${dropoff || '—'}</td></tr>
                    <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Message</strong></td><td style="padding:10px;border:1px solid #ddd">${message}</td></tr>
                </table>
            `,
        });

        // Customer confirmation
        await sendEmail({
            to: email,
            subject: `We received your enquiry — Italy Taxi Service`,
            fromAccount: 'info',
            html: `
                <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
                    <h2 style="color:#0F1C2E">Thank you, ${name}!</h2>
                    <p style="color:#555">We have received your enquiry and will get back to you shortly.</p>
                    <p style="color:#555">For urgent requests, contact us at <a href="mailto:info@italytaxiservice.com">info@italytaxiservice.com</a></p>
                    <p style="color:#999;font-size:12px">Italy Taxi Service — Premium Transfers Across Italy</p>
                </div>
            `,
        });

        return NextResponse.json({ success: true, message: 'Your enquiry has been sent successfully!' });

    } catch (error: any) {
        console.error('Contact API error:', error);
        return NextResponse.json({ success: false, error: 'Failed to send message. Please try again.' }, { status: 500 });
    }
}
