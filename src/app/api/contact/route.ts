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

        // 1. Admin notification
        try {
            await sendEmail({
                to: ADMIN_EMAIL,
                replyTo: email,
                subject: `📩 Contact Form: ${subject} — from ${name} [${source_form || 'Contact Page'}]`,
                html: `
                    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
                        <div style="background:#0F1C2E;padding:24px 32px;border-radius:10px 10px 0 0">
                            <h2 style="color:#C9A84C;margin:0;font-size:20px">New Contact Message</h2>
                            <p style="color:#ffffff66;font-size:11px;margin:4px 0 0;letter-spacing:1px;text-transform:uppercase">Source: ${source_form || 'Contact Page'}</p>
                        </div>
                        <div style="padding:32px;border:1px solid #eee;border-top:none;border-radius:0 0 10px 10px">
                            <table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif">
                                <tr><td style="padding:10px 12px;border:1px solid #eee;background:#f9f9f9;font-size:13px;color:#555;width:100px"><strong>Name</strong></td><td style="padding:10px 12px;border:1px solid #eee;font-size:13px;color:#0F1C2E">${name}</td></tr>
                                <tr><td style="padding:10px 12px;border:1px solid #eee;background:#f9f9f9;font-size:13px;color:#555"><strong>Email</strong></td><td style="padding:10px 12px;border:1px solid #eee;font-size:13px;color:#0F1C2E">${email}</td></tr>
                                <tr><td style="padding:10px 12px;border:1px solid #eee;background:#f9f9f9;font-size:13px;color:#555"><strong>Phone</strong></td><td style="padding:10px 12px;border:1px solid #eee;font-size:13px;color:#0F1C2E">${phone || '—'}</td></tr>
                                <tr><td style="padding:10px 12px;border:1px solid #eee;background:#f9f9f9;font-size:13px;color:#555"><strong>Subject</strong></td><td style="padding:10px 12px;border:1px solid #eee;font-size:13px;color:#0F1C2E">${subject}</td></tr>
                                <tr><td style="padding:10px 12px;border:1px solid #eee;background:#f9f9f9;font-size:13px;color:#555;vertical-align:top"><strong>Message</strong></td><td style="padding:10px 12px;border:1px solid #eee;font-size:13px;color:#0F1C2E;line-height:1.6;white-space:pre-wrap">${message}</td></tr>
                            </table>
                            <p style="margin:20px 0 0;font-size:12px;color:#999">Reply to this email to respond directly to the client.</p>
                        </div>
                    </div>
                `,
            });
        } catch (e) {
            console.error('[CONTACT] Admin email failed:', e);
        }

        // 2. Client confirmation
        try {
            await sendEmail({
                to: email,
                subject: `We received your message — Italy Taxi Service`,
                html: `
                    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
                        <div style="background:#0F1C2E;padding:32px;text-align:center;border-radius:12px 12px 0 0">
                            <h1 style="color:#C9A84C;margin:0;font-size:24px;letter-spacing:-0.5px">Italy Taxi Service</h1>
                            <p style="color:#ffffff99;font-size:11px;margin:8px 0 0;letter-spacing:2px;text-transform:uppercase">Premium Transfers Across Italy</p>
                        </div>
                        <div style="background:#ffffff;padding:40px;border:1px solid #eee;border-top:none">
                            <h2 style="color:#0F1C2E;margin-top:0">Thank you, ${name}!</h2>
                            <p style="color:#555;line-height:1.7">We have received your message and will get back to you as soon as possible.</p>
                            <div style="background:#f9f9f9;border-left:4px solid #C9A84C;padding:20px;border-radius:0 8px 8px 0;margin:24px 0">
                                <p style="margin:0 0 14px;font-size:11px;font-weight:bold;color:#888;text-transform:uppercase;letter-spacing:1.5px">Your Submitted Details</p>
                                <table style="border-collapse:collapse;width:100%">
                                    <tr><td style="padding:7px 0;color:#888;font-size:13px;width:100px;vertical-align:top">Full Name</td><td style="padding:7px 0;color:#0F1C2E;font-weight:bold;font-size:13px">${name}</td></tr>
                                    <tr><td style="padding:7px 0;color:#888;font-size:13px;vertical-align:top">Email</td><td style="padding:7px 0;color:#0F1C2E;font-weight:bold;font-size:13px">${email}</td></tr>
                                    ${phone ? `<tr><td style="padding:7px 0;color:#888;font-size:13px;vertical-align:top">Phone</td><td style="padding:7px 0;color:#0F1C2E;font-weight:bold;font-size:13px">${phone}</td></tr>` : ''}
                                    <tr><td style="padding:7px 0;color:#888;font-size:13px;vertical-align:top">Subject</td><td style="padding:7px 0;color:#0F1C2E;font-weight:bold;font-size:13px">${subject}</td></tr>
                                    <tr><td style="padding:7px 0;color:#888;font-size:13px;vertical-align:top">Message</td><td style="padding:7px 0;color:#0F1C2E;font-size:13px;line-height:1.6;white-space:pre-wrap">${message}</td></tr>
                                </table>
                            </div>
                            <p style="color:#555;line-height:1.7">Need urgent help? Reply to this email or contact us directly at:<br>
                            📧 <a href="mailto:italytaxiservicee@gmail.com" style="color:#C9A84C">italytaxiservicee@gmail.com</a></p>
                        </div>
                        <div style="background:#f9f9f9;padding:20px;text-align:center;border:1px solid #eee;border-top:none;border-radius:0 0 12px 12px">
                            <p style="color:#999;font-size:11px;margin:0">Italy Taxi Service &middot; italytaxiservice.com</p>
                        </div>
                    </div>
                `,
            });
        } catch (e) {
            console.error('[CONTACT] Client email failed:', e);
        }

        return NextResponse.json({ success: true, message: 'Your message has been sent successfully!' });

    } catch (error: any) {
        console.error('Contact API error:', error);
        return NextResponse.json({ success: false, error: 'Failed to send message. Please try again.' }, { status: 500 });
    }
}
