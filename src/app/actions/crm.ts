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

/** Minimal HTML-escaping for user-supplied booking fields before they're interpolated into email markup. */
function escapeHtml(value: string): string {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

/**
 * Derives a human-readable booking reference from the booking's real
 * database id (a Supabase UUID) — not a randomly invented value. Same
 * booking id always produces the same reference, so it's stable across
 * re-sends (e.g. if a booking is edited and re-confirmed).
 */
function bookingReference(id: string): string {
    const clean = (id || '').replace(/-/g, '').toUpperCase();
    return `ITS-${clean.slice(0, 8) || '00000000'}`;
}

// Small, email-safe inline SVG icons (18x18, currentColor stroke) matching the
// lucide-react icon set already used across the site. Purely decorative —
// every value they sit beside also has a text label, so if a client fails to
// render inline SVG (older Outlook desktop builds) no information is lost.
const EMAIL_ICONS = {
    pin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    flag: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22V4a1 1 0 0 1 1-1h13l-2 5 2 5H6a1 1 0 0 0-1 1v8"/></svg>',
    calendar: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
    users: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    briefcase: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    plane: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-1 .1-1.3.5l-.6.7c-.5.7-.3 1.7.4 2.1L9 12l-2 3H3l-1 1 3 2 2 3 1-1v-4l3-2 3.5 5.3c.4.7 1.4.9 2.1.4l.7-.6c.4-.3.6-.8.5-1.3Z"/></svg>',
    mail: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
    phone: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 3a2 2 0 0 1-.5 2.1L8 10.1a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2-.5c1 .3 2 .5 3 .7a2 2 0 0 1 1.7 2Z"/></svg>',
};

const EMAIL_SUPPORT_EMAIL = 'italytaxiservicee@gmail.com';
const SITE_URL = 'https://www.italytaxiservice.com';

interface ClientConfirmationEmailArgs {
    reference: string;
    fullName: string;
    tripLabel: string;
    outboundHeading: string;
    outbound: { date: string; time: string };
    pickup: string;
    dropoff: string;
    passengers: number;
    luggage?: string | null;
    flightNumber?: string | null;
    hasReturn: boolean;
    returnHeading: string;
    ret: { date: string; time: string } | null;
    returnPickup?: string | null;
    returnDropoff?: string | null;
    returnFlightNumber?: string | null;
    adminNotes?: string | null;
}

/** Renders one leg (outbound or return) of the trip-details card. */
function renderTripLeg(args: {
    heading: string;
    pickup: string;
    dropoff: string;
    date: string;
    time: string;
    passengers?: number;
    luggage?: string | null;
    flightNumber?: string | null;
    isFirst: boolean;
}): string {
    const { heading, pickup, dropoff, date, time, passengers, luggage, flightNumber, isFirst } = args;
    return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="${isFirst ? '' : 'margin-top:24px;padding-top:24px;border-top:1px solid #ECE8DD;'}">
        <tr>
            <td style="padding-bottom:14px;">
                <span style="font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:1.5px;color:#B3A170;text-transform:uppercase;">${escapeHtml(heading)}</span>
            </td>
        </tr>
        <tr>
            <td>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                        <td width="26" valign="top" style="padding-top:2px;color:#C9A84C;">${EMAIL_ICONS.pin}</td>
                        <td style="padding-left:10px;">
                            <div style="font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:700;letter-spacing:1px;color:#9AA0AB;text-transform:uppercase;">Pickup</div>
                            <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:700;color:#0F1C2E;line-height:1.4;word-break:break-word;">${escapeHtml(pickup)}</div>
                        </td>
                    </tr>
                </table>
                <table role="presentation" cellpadding="0" cellspacing="0"><tr><td width="26" style="padding:2px 0;"><div style="width:1px;height:18px;background:#DCD7C8;margin-left:12px;"></div></td></tr></table>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                        <td width="26" valign="top" style="padding-top:2px;color:#C9A84C;">${EMAIL_ICONS.flag}</td>
                        <td style="padding-left:10px;">
                            <div style="font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:700;letter-spacing:1px;color:#9AA0AB;text-transform:uppercase;">Drop-off</div>
                            <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:700;color:#0F1C2E;line-height:1.4;word-break:break-word;">${escapeHtml(dropoff)}</div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td style="padding-top:18px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                        <td width="28" valign="top" style="padding-top:1px;">
                            <img src="${SITE_URL}/images/icon.png" width="24" height="24" alt="Italy Taxi Service" style="display:block;border:0;border-radius:5px;">
                        </td>
                        <td style="padding-left:10px;">
                            <div style="font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:700;letter-spacing:1px;color:#9AA0AB;text-transform:uppercase;">Date &amp; Time</div>
                            <div style="font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;color:#0F1C2E;">${escapeHtml(date)}${time ? ` · ${escapeHtml(time)}` : ''}</div>
                        </td>
                    </tr>
                </table>
                ${flightNumber ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:14px;">
                    <tr>
                        <td width="28" valign="top" style="color:#B3A170;padding-top:2px;">${EMAIL_ICONS.plane}</td>
                        <td style="padding-left:10px;">
                            <div style="font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:700;letter-spacing:1px;color:#9AA0AB;text-transform:uppercase;">Flight</div>
                            <div style="font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;color:#0F1C2E;">${escapeHtml(flightNumber)}</div>
                        </td>
                    </tr>
                </table>` : ''}
                ${passengers != null ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:14px;">
                    <tr>
                        <td width="28" valign="top" style="color:#B3A170;padding-top:2px;">${EMAIL_ICONS.users}</td>
                        <td style="padding-left:10px;">
                            <div style="font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:700;letter-spacing:1px;color:#9AA0AB;text-transform:uppercase;">Passengers</div>
                            <div style="font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;color:#0F1C2E;">${passengers}</div>
                        </td>
                    </tr>
                </table>` : ''}
                ${luggage ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:14px;">
                    <tr>
                        <td width="28" valign="top" style="color:#B3A170;padding-top:2px;">${EMAIL_ICONS.briefcase}</td>
                        <td style="padding-left:10px;">
                            <div style="font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:700;letter-spacing:1px;color:#9AA0AB;text-transform:uppercase;">Luggage</div>
                            <div style="font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;color:#0F1C2E;">${escapeHtml(luggage)}</div>
                        </td>
                    </tr>
                </table>` : ''}
            </td>
        </tr>
    </table>`;
}

/** Builds the full client-facing "booking confirmed" email HTML. Table-based layout with inline styles throughout for maximum compatibility with Gmail, Outlook, Apple Mail and mobile mail apps. */
function buildClientConfirmationEmailHtml(args: ClientConfirmationEmailArgs): string {
    const { reference, fullName, tripLabel, outboundHeading, outbound, pickup, dropoff, passengers, luggage, flightNumber, hasReturn, returnHeading, ret, returnPickup, returnDropoff, returnFlightNumber, adminNotes } = args;

    const outboundLeg = renderTripLeg({
        heading: outboundHeading, pickup, dropoff, date: outbound.date, time: outbound.time,
        passengers, luggage, flightNumber, isFirst: true,
    });

    const returnLeg = hasReturn && ret ? renderTripLeg({
        heading: returnHeading,
        pickup: returnPickup || '—',
        dropoff: returnDropoff || '—',
        date: ret.date, time: ret.time,
        flightNumber: returnFlightNumber,
        isFirst: false,
    }) : '';

    const notesBlock = adminNotes ? `
    <tr><td style="padding:0 32px 8px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#FBF7ED;border-left:3px solid #C9A84C;border-radius:0 10px 10px 0;">
            <tr><td style="padding:16px 20px;">
                <div style="font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:700;letter-spacing:1.5px;color:#9AA0AB;text-transform:uppercase;margin-bottom:6px;">Good to Know</div>
                <div style="font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.6;color:#4A5160;white-space:pre-wrap;">${escapeHtml(adminNotes)}</div>
            </td></tr>
        </table>
    </td></tr>` : '';

    const firstName = escapeHtml((fullName || '').split(' ')[0] || fullName || 'there');

    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Your Italy Taxi Service Booking is Confirmed</title>
<!--[if mso]>
<noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
<![endif]-->
<style>
  body,table,td { -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; }
  table,td { mso-table-lspace:0pt; mso-table-rspace:0pt; }
  img { -ms-interpolation-mode:bicubic; border:0; }
  body { margin:0; padding:0; width:100%!important; background:#F0EEE8; }
  @media only screen and (max-width:600px) {
    .its-container { width:100%!important; }
    .its-px { padding-left:20px!important; padding-right:20px!important; }
    .its-stack td { display:block!important; width:100%!important; padding-left:0!important; }
  }
</style>
</head>
<body style="margin:0;padding:0;background:#F0EEE8;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;mso-hide:all;">Your transfer is confirmed — reference ${escapeHtml(reference)}. Pickup: ${escapeHtml(pickup)}.</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F0EEE8;">
    <tr>
      <td align="center" style="padding:32px 12px;">
        <table role="presentation" class="its-container" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;background:#FFFFFF;border-radius:16px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td class="its-px" style="background:#0F1C2E;padding:26px 32px 22px;text-align:center;">
              <img src="${SITE_URL}/images/logo.png" width="176" height="80" alt="ITALY TAXI SERVICE" style="display:block;margin:0 auto;border:0;max-width:176px;color:#F4C430;font-family:Arial,Helvetica,sans-serif;font-size:18px;font-weight:800;letter-spacing:1.5px;">
            </td>
          </tr>

          <!-- Confirmation status -->
          <tr>
            <td class="its-px" style="background:#0F1C2E;padding:4px 32px 34px;text-align:center;">
              <table role="presentation" align="center" cellpadding="0" cellspacing="0"><tr>
                <td style="background:#C9A84C;border-radius:20px;padding:7px 16px;">
                  <span style="font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:800;letter-spacing:1.2px;color:#0F1C2E;">&#10003;&nbsp; BOOKING CONFIRMED</span>
                </td>
              </tr></table>
              <div style="font-family:Arial,Helvetica,sans-serif;font-size:23px;font-weight:800;color:#FFFFFF;margin:18px 0 8px;line-height:1.3;">Your Transfer Is Confirmed</div>
              <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#C7CCD6;max-width:400px;margin:0 auto;">Thank you for choosing Italy Taxi Service, ${firstName}. Your ${escapeHtml(tripLabel.toLowerCase())} has been successfully confirmed.</div>
            </td>
          </tr>

          <!-- Booking reference -->
          <tr>
            <td class="its-px" style="padding:22px 32px 0;text-align:center;">
              <div style="font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:700;letter-spacing:1.5px;color:#9AA0AB;text-transform:uppercase;">Booking Reference</div>
              <div style="font-family:'Courier New',Courier,monospace;font-size:17px;font-weight:700;color:#0F1C2E;letter-spacing:1px;margin-top:4px;">${escapeHtml(reference)}</div>
            </td>
          </tr>

          <!-- Trip details card -->
          <tr>
            <td class="its-px" style="padding:22px 32px 6px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #ECE8DD;border-radius:14px;">
                <tr><td style="padding:22px 22px 24px;">
                  ${outboundLeg}
                  ${returnLeg}
                </td></tr>
              </table>
            </td>
          </tr>

          ${notesBlock}

          <!-- What happens next -->
          <tr>
            <td class="its-px" style="padding:30px 32px 6px;">
              <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:1.5px;color:#9AA0AB;text-transform:uppercase;margin-bottom:16px;">What Happens Next?</div>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                <tr>
                  <td width="30" valign="top"><table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="width:22px;height:22px;border-radius:50%;background:#0F1C2E;text-align:center;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;color:#C9A84C;line-height:22px;">1</td></tr></table></td>
                  <td style="padding-left:12px;">
                    <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;color:#0F1C2E;">Driver Assignment</div>
                    <div style="font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.6;color:#6B7280;margin-top:2px;">Your professional driver is assigned 24 hours before your journey.</div>
                  </td>
                </tr>
              </table>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                <tr>
                  <td width="30" valign="top"><table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="width:22px;height:22px;border-radius:50%;background:#0F1C2E;text-align:center;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;color:#C9A84C;line-height:22px;">2</td></tr></table></td>
                  <td style="padding-left:12px;">
                    <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;color:#0F1C2E;">Driver Details</div>
                    <div style="font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.6;color:#6B7280;margin-top:2px;">We will contact you before your journey with your driver's name and contact details.</div>
                  </td>
                </tr>
              </table>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:6px;">
                <tr>
                  <td width="30" valign="top"><table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="width:22px;height:22px;border-radius:50%;background:#0F1C2E;text-align:center;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;color:#C9A84C;line-height:22px;">3</td></tr></table></td>
                  <td style="padding-left:12px;">
                    <div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;color:#0F1C2E;">Enjoy Your Journey</div>
                    <div style="font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.6;color:#6B7280;margin-top:2px;">Your driver will arrive at the agreed pickup location, ready when you are.</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Support -->
          <tr>
            <td class="its-px" style="padding:22px 32px 30px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F8F6F1;border-radius:14px;">
                <tr><td style="padding:22px 24px;">
                  <div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:700;color:#0F1C2E;margin-bottom:12px;">Need Help?</div>
                  <table role="presentation" cellpadding="0" cellspacing="0"><tr>
                    <td valign="middle" style="color:#C9A84C;">${EMAIL_ICONS.mail}</td>
                    <td style="padding-left:8px;"><a href="mailto:${EMAIL_SUPPORT_EMAIL}" style="font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#0F1C2E;text-decoration:none;font-weight:600;">${EMAIL_SUPPORT_EMAIL}</a></td>
                  </tr></table>
                  <div style="font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#9AA0AB;margin-top:10px;">Available 24/7 for assistance with your journey.</div>
                </td></tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td class="its-px" style="background:#0F1C2E;padding:26px 32px;text-align:center;">
              <div style="font-family:Arial,Helvetica,sans-serif;font-size:13px;font-weight:700;color:#FFFFFF;">Italy Taxi Service</div>
              <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#8B93A3;margin-top:4px;">Private Transfers Across Italy</div>
              <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#8B93A3;margin-top:14px;">
                <a href="https://www.italytaxiservice.com" style="color:#C9A84C;text-decoration:none;">Website</a>
                <span style="color:#3C465C;">&nbsp;&middot;&nbsp;</span>
                <a href="mailto:${EMAIL_SUPPORT_EMAIL}" style="color:#C9A84C;text-decoration:none;">Contact Us</a>
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

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
        const subjectLabel = booking.trip_selection === 'roundtrip' ? 'Round Trip' : booking.trip_selection === 'both' ? 'Transfers' : 'Booking';
        const reference = bookingReference(id);

        await sendEmail({
            to: booking.email,
            subject: `Your Italy Taxi ${subjectLabel} is Confirmed — ${reference}`,
            html: buildClientConfirmationEmailHtml({
                reference,
                fullName: booking.full_name,
                tripLabel,
                outboundHeading,
                outbound,
                pickup: booking.pickup_location,
                dropoff: booking.dropoff_location,
                passengers: booking.passengers,
                luggage: booking.luggage,
                flightNumber: booking.flight_number,
                hasReturn,
                returnHeading,
                ret,
                returnPickup: booking.return_pickup_location,
                returnDropoff: booking.return_dropoff_location,
                returnFlightNumber: booking.return_flight_number,
                adminNotes: booking.admin_notes,
            }),
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

