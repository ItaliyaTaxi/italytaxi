import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/mailer';
import { supabase } from '@/lib/supabase/client';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'italytaxiservicee@gmail.com';

export async function POST(req: NextRequest) {
    try {
        const { name, email, phone, subject, message, source_form } = await req.json();

        if (!name || !email || !subject || !message) {
            return NextResponse.json({ success: false, error: 'Name, email, subject and message are required.' }, { status: 400 });
        }

        // Save to DB
        try {
            await supabase.from('contacts').insert([{
                full_name: name,
                email,
                phone: phone || null,
                subject,
                message,
                source_form: source_form || 'Contact Page',
            }]);
        } catch (dbError) {
            console.error('Contact DB insert failed:', dbError);
        }

        // 1. Admin notification → italytaxiservices@gmail.com
        try {
            await sendEmail({
                to: ADMIN_EMAIL,
                subject: `📩 Contact Form: ${subject} — from ${name} [${source_form || 'Contact Page'}]`,
                html: `
                    <h2 style="color:#0F1C2E">New Contact Form Submission</h2>
                    <p style="color:#888;font-size:12px">Source: <strong>${source_form || 'Contact Page'}</strong></p>
                    <table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif">
                        <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Name</strong></td><td style="padding:10px;border:1px solid #ddd">${name}</td></tr>
                        <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Email</strong></td><td style="padding:10px;border:1px solid #ddd">${email}</td></tr>
                        <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Phone</strong></td><td style="padding:10px;border:1px solid #ddd">${phone || '—'}</td></tr>
                        <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Subject</strong></td><td style="padding:10px;border:1px solid #ddd">${subject}</td></tr>
                        <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Message</strong></td><td style="padding:10px;border:1px solid #ddd">${message}</td></tr>
                    </table>
                `,
            });
        } catch (adminEmailError) {
            console.error('[CONTACT] Admin email failed:', adminEmailError);
        }

        // 2. Customer confirmation → client's email address
        try {
            await sendEmail({
                to: email,
                subject: `We received your message — Italy Taxi Service`,
                html: `
                    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
                        <h2 style="color:#0F1C2E">Thank you, ${name}!</h2>
                        <p style="color:#555">We have received your message regarding "<strong>${subject}</strong>" and will get back to you shortly.</p>
                        <p style="color:#555">For urgent requests, reply to this email or contact us at <a href="mailto:italytaxiservicee@gmail.com">italytaxiservicee@gmail.com</a></p>
                        <p style="color:#999;font-size:12px">Italy Taxi Service — Premium Transfers Across Italy</p>
                    </div>
                `,
            });
        } catch (customerEmailError) {
            console.error('[CONTACT] Customer email failed:', customerEmailError);
        }

        return NextResponse.json({ success: true, message: 'Your message has been sent successfully!' });

    } catch (error: any) {
        console.error('Contact API error:', error);
        return NextResponse.json({ success: false, error: 'Failed to send message. Please try again.' }, { status: 500 });
    }
}
