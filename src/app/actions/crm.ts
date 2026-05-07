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

export async function confirmBookingAction(id: string, booking: {
    full_name: string;
    email: string;
    phone: string;
    pickup_location: string;
    dropoff_location: string;
    booking_datetime: string;
    passengers: number;
}) {
    const supabase = getServiceSupabase();
    const { error } = await supabase.from('bookings').update({ status: 'confirmed' }).eq('id', id);
    if (error) throw new Error(error.message);

    const bookingDate = new Date(booking.booking_datetime).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
    const bookingTime = new Date(booking.booking_datetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

    // Admin notification
    try {
        await sendEmail({
            to: ADMIN_EMAIL,
            subject: `✅ Booking Confirmed — ${booking.full_name}`,
            html: `
                <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
                    <h2 style="color:#0F1C2E">Booking Confirmed</h2>
                    <p style="color:#555">You have confirmed the following booking in the CRM dashboard.</p>
                    <table style="border-collapse:collapse;width:100%;margin:20px 0">
                        <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Name</strong></td><td style="padding:10px;border:1px solid #ddd">${booking.full_name}</td></tr>
                        <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Email</strong></td><td style="padding:10px;border:1px solid #ddd">${booking.email}</td></tr>
                        <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Phone</strong></td><td style="padding:10px;border:1px solid #ddd">${booking.phone}</td></tr>
                        <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Pickup</strong></td><td style="padding:10px;border:1px solid #ddd">${booking.pickup_location}</td></tr>
                        <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Dropoff</strong></td><td style="padding:10px;border:1px solid #ddd">${booking.dropoff_location}</td></tr>
                        <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Date &amp; Time</strong></td><td style="padding:10px;border:1px solid #ddd">${bookingDate} at ${bookingTime}</td></tr>
                        <tr><td style="padding:10px;border:1px solid #ddd;background:#f9f9f9"><strong>Passengers</strong></td><td style="padding:10px;border:1px solid #ddd">${booking.passengers}</td></tr>
                    </table>
                    <p style="color:#999;font-size:12px">Italy Taxi Service — CRM System</p>
                </div>
            `,
        });
    } catch (e) {
        console.error('[CRM] Admin confirmation email failed:', e);
    }

    // Client confirmation email
    try {
        await sendEmail({
            to: booking.email,
            subject: `Your Italy Taxi Booking is Confirmed! 🚖`,
            html: `
                <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
                    <div style="background:#0F1C2E;padding:32px;text-align:center;border-radius:12px 12px 0 0">
                        <h1 style="color:#C9A84C;margin:0;font-size:28px;letter-spacing:-0.5px">Italy Taxi Service</h1>
                        <p style="color:#ffffff99;font-size:12px;margin:8px 0 0;letter-spacing:2px;text-transform:uppercase">Premium Transfers Across Italy</p>
                    </div>
                    <div style="background:#ffffff;padding:40px;border:1px solid #eee;border-top:none">
                        <h2 style="color:#0F1C2E;margin-top:0">Your Booking is Confirmed!</h2>
                        <p style="color:#555;line-height:1.7">Dear <strong>${booking.full_name}</strong>,<br><br>
                        Great news! Your taxi booking has been confirmed. Your driver will be ready and waiting for you at the pickup location.</p>

                        <div style="background:#f9f9f9;border-left:4px solid #C9A84C;padding:20px;border-radius:0 8px 8px 0;margin:24px 0">
                            <p style="margin:0 0 12px;font-size:11px;font-weight:bold;color:#888;text-transform:uppercase;letter-spacing:1.5px">Booking Summary</p>
                            <table style="border-collapse:collapse;width:100%">
                                <tr><td style="padding:8px 0;color:#888;font-size:13px;width:130px">Pickup</td><td style="padding:8px 0;color:#0F1C2E;font-weight:bold;font-size:13px">${booking.pickup_location}</td></tr>
                                <tr><td style="padding:8px 0;color:#888;font-size:13px">Drop-off</td><td style="padding:8px 0;color:#0F1C2E;font-weight:bold;font-size:13px">${booking.dropoff_location}</td></tr>
                                <tr><td style="padding:8px 0;color:#888;font-size:13px">Date &amp; Time</td><td style="padding:8px 0;color:#0F1C2E;font-weight:bold;font-size:13px">${bookingDate} at ${bookingTime}</td></tr>
                                <tr><td style="padding:8px 0;color:#888;font-size:13px">Passengers</td><td style="padding:8px 0;color:#0F1C2E;font-weight:bold;font-size:13px">${booking.passengers}</td></tr>
                            </table>
                        </div>

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
