import { sendEmail } from '@/lib/mailer';
import type { LeadInput, LeadSourceSite } from './types';

/**
 * The two emails a new lead triggers: one to the admin inbox, one back to the
 * customer.
 *
 * Lifted out of `app/actions/booking.ts` unchanged in substance so that the
 * public form and the cross-site intake both send exactly the same mail
 * through the same provider and the same sender, rather than each growing its
 * own copy. For the Italy Taxi Service brand the markup produced here is the
 * same markup that action produced before this was extracted.
 *
 * What is parameterised is the *brand*, and only because the alternative
 * would be dishonest: a customer who filled in a form on the Rome site should
 * not receive a confirmation headed "Italy Taxi Service" telling them about a
 * site they never visited. The admin notification is identical for both and
 * states the originating site, so one inbox still sees everything.
 *
 * Both sends are wrapped individually: an email failure is logged and does
 * not undo a lead that is already safely in the database.
 */

export interface LeadBrand {
    name: string;
    tagline: string;
    domain: string;
    /** Shown to the customer as the address to reply to. */
    contactEmail: string;
    policy?: { label: string; url: string };
}

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'italytaxiservicee@gmail.com';

export const leadBrands: Record<LeadSourceSite, LeadBrand> = {
    italytaxiservice: {
        name: 'Italy Taxi Service',
        tagline: 'Premium Transfers Across Italy',
        domain: 'italytaxiservice.com',
        contactEmail: 'italytaxiservicee@gmail.com',
        policy: {
            label: 'Cancellation, Refund &amp; Missed Transfer Policy',
            url: 'https://www.italytaxiservice.com/cancellation-refund-policy',
        },
    },
    rometransferservice: {
        name: 'Rome Transfer Service',
        tagline: 'Private Transfers in Rome',
        domain: process.env.ROME_SITE_DOMAIN || 'rometransferservice.com',
        contactEmail: ADMIN_EMAIL,
    },
};

const formatDateTime = (raw: string) => {
    if (!raw) return { date: '—', time: '—' };
    const d = new Date(raw);
    if (isNaN(d.getTime())) return { date: raw, time: '' };
    return {
        date: d.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }),
        time: d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }),
    };
};

/** Minimal escaping: these values go straight into an HTML email. */
const esc = (value: unknown) =>
    String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');

const cellLabel =
    'padding:10px 12px;border:1px solid #eee;background:#f9f9f9;font-size:13px;color:#555;width:140px';
const cellValue = 'padding:10px 12px;border:1px solid #eee;font-size:13px;color:#0F1C2E';
const labelStyle = 'padding:7px 0;color:#888;font-size:13px;width:140px;vertical-align:top';
const valueStyle = 'padding:7px 0;color:#0F1C2E;font-weight:bold;font-size:13px';

export interface NotifyResult {
    adminSent: boolean;
    customerSent: boolean;
}

export async function sendLeadNotifications(
    lead: LeadInput,
    brand: LeadBrand,
): Promise<NotifyResult> {
    const outbound = formatDateTime(lead.bookingDatetime);
    const ret = lead.hasReturnTrip ? formatDateTime(lead.returnDatetime || '') : null;
    const result: NotifyResult = { adminSent: false, customerSent: false };

    const adminReturnBlock =
        lead.hasReturnTrip && ret
            ? `
            <h3 style="margin:24px 0 10px;font-size:14px;color:#0F1C2E;letter-spacing:0.5px;text-transform:uppercase;border-bottom:2px solid #C9A84C;padding-bottom:6px">Return Trip</h3>
            <table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif">
                <tr><td style="${cellLabel}"><strong>Pickup</strong></td><td style="${cellValue}">${esc(lead.returnPickupLocation) || '—'}</td></tr>
                <tr><td style="${cellLabel}"><strong>Drop-off</strong></td><td style="${cellValue}">${esc(lead.returnDropoffLocation) || '—'}</td></tr>
                <tr><td style="${cellLabel}"><strong>Date &amp; Time</strong></td><td style="${cellValue}">${ret.date} at ${ret.time}</td></tr>
                ${lead.returnFlightNumber ? `<tr><td style="${cellLabel}"><strong>Flight No.</strong></td><td style="${cellValue}">${esc(lead.returnFlightNumber)}</td></tr>` : ''}
            </table>
        `
            : '';

    // Extra detail the Rome form collects. Rendered only when present, so the
    // Italy Taxi Service email is byte-for-byte what it always was.
    const extraRows = [
        lead.serviceType ? `<tr><td style="${cellLabel}"><strong>Service</strong></td><td style="${cellValue}">${esc(lead.serviceType)}</td></tr>` : '',
        typeof lead.adults === 'number'
            ? `<tr><td style="${cellLabel}"><strong>Split</strong></td><td style="${cellValue}">${esc(lead.adults)} adult(s), ${esc(lead.children ?? 0)} child(ren)${lead.childAges ? ` — ages ${esc(lead.childAges)}` : ''}</td></tr>`
            : '',
        lead.locale ? `<tr><td style="${cellLabel}"><strong>Language</strong></td><td style="${cellValue}">${esc(lead.locale)}</td></tr>` : '',
    ].join('');

    const messageBlock = lead.customerMessage
        ? `
            <h3 style="margin:24px 0 10px;font-size:14px;color:#0F1C2E;letter-spacing:0.5px;text-transform:uppercase;border-bottom:2px solid #C9A84C;padding-bottom:6px">Customer Message</h3>
            <p style="font-size:13px;color:#0F1C2E;line-height:1.6;white-space:pre-wrap;margin:0">${esc(lead.customerMessage)}</p>
        `
        : '';

    // 1. Admin notification — one inbox, both websites.
    try {
        await sendEmail({
            to: ADMIN_EMAIL,
            replyTo: lead.email || undefined,
            subject: `🚖 New Quote Request from ${lead.fullName} [${lead.sourceForm}]`,
            html: `
                    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
                        <div style="background:#0F1C2E;padding:24px 32px;border-radius:10px 10px 0 0">
                            <h2 style="color:#C9A84C;margin:0;font-size:20px">New Quote Request</h2>
                            <p style="color:#ffffff66;font-size:11px;margin:4px 0 0;letter-spacing:1px;text-transform:uppercase">Site: ${esc(brand.name)} &middot; Source: ${esc(lead.sourceForm)}${lead.hasReturnTrip ? ' · Return Trip' : ''}</p>
                        </div>
                        <div style="padding:32px;border:1px solid #eee;border-top:none;border-radius:0 0 10px 10px">
                            <table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif">
                                <tr><td style="${cellLabel}"><strong>Name</strong></td><td style="${cellValue}">${esc(lead.fullName)}</td></tr>
                                <tr><td style="${cellLabel}"><strong>Email</strong></td><td style="${cellValue}">${esc(lead.email)}</td></tr>
                                <tr><td style="${cellLabel}"><strong>Phone</strong></td><td style="${cellValue}">${esc(lead.phone)}</td></tr>
                                <tr><td style="${cellLabel}"><strong>Passengers</strong></td><td style="${cellValue}">${esc(lead.passengers)}</td></tr>
                                ${lead.luggage ? `<tr><td style="${cellLabel}"><strong>Luggage</strong></td><td style="${cellValue}">${esc(lead.luggage)}</td></tr>` : ''}
                                ${extraRows}
                            </table>
                            <h3 style="margin:24px 0 10px;font-size:14px;color:#0F1C2E;letter-spacing:0.5px;text-transform:uppercase;border-bottom:2px solid #C9A84C;padding-bottom:6px">Outbound Trip</h3>
                            <table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif">
                                <tr><td style="${cellLabel}"><strong>Pickup</strong></td><td style="${cellValue}">${esc(lead.pickupLocation)}</td></tr>
                                <tr><td style="${cellLabel}"><strong>Drop-off</strong></td><td style="${cellValue}">${esc(lead.dropoffLocation)}</td></tr>
                                <tr><td style="${cellLabel}"><strong>Date &amp; Time</strong></td><td style="${cellValue}">${outbound.date} at ${outbound.time}</td></tr>
                                ${lead.flightNumber ? `<tr><td style="${cellLabel}"><strong>Flight No.</strong></td><td style="${cellValue}">${esc(lead.flightNumber)}</td></tr>` : ''}
                            </table>
                            ${adminReturnBlock}
                            ${messageBlock}
                            <p style="margin:20px 0 0;font-size:12px;color:#999">Reply to this email to send the client a quotation.</p>
                        </div>
                    </div>
                `,
        });
        result.adminSent = true;
    } catch (e) {
        console.error('[LEAD] Admin email failed:', e);
    }

    const clientReturnBlock =
        lead.hasReturnTrip && ret
            ? `
            <div style="background:#f9f9f9;border-left:4px solid #C9A84C;padding:20px;border-radius:0 8px 8px 0;margin:16px 0">
                <p style="margin:0 0 14px;font-size:11px;font-weight:bold;color:#888;text-transform:uppercase;letter-spacing:1.5px">Return Trip</p>
                <table style="border-collapse:collapse;width:100%">
                    <tr><td style="${labelStyle}">Pickup Location</td><td style="${valueStyle}">${esc(lead.returnPickupLocation) || '—'}</td></tr>
                    <tr><td style="${labelStyle}">Drop-off Location</td><td style="${valueStyle}">${esc(lead.returnDropoffLocation) || '—'}</td></tr>
                    <tr><td style="${labelStyle}">Date &amp; Time</td><td style="${valueStyle}">${ret.date} at ${ret.time}</td></tr>
                    ${lead.returnFlightNumber ? `<tr><td style="${labelStyle}">Flight Number</td><td style="${valueStyle}">${esc(lead.returnFlightNumber)}</td></tr>` : ''}
                </table>
            </div>
        `
            : '';

    // 2. Customer confirmation. The wording stays what it was: a request has
    // been received and a quotation will follow. It does not say a transfer
    // is booked or confirmed, because at this point it is not.
    if (lead.email) {
        try {
            await sendEmail({
                to: lead.email,
                subject: `Quote Request Received — ${brand.name}`,
                html: `
                    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
                        <div style="background:#0F1C2E;padding:32px;text-align:center;border-radius:12px 12px 0 0">
                            <h1 style="color:#C9A84C;margin:0;font-size:24px;letter-spacing:-0.5px">${esc(brand.name)}</h1>
                            <p style="color:#ffffff99;font-size:11px;margin:8px 0 0;letter-spacing:2px;text-transform:uppercase">${esc(brand.tagline)}</p>
                        </div>
                        <div style="background:#ffffff;padding:40px;border:1px solid #eee;border-top:none">
                            <h2 style="color:#0F1C2E;margin-top:0">Hello ${esc(lead.fullName)},</h2>
                            <p style="color:#555;line-height:1.7;font-size:15px">We received your request. Shortly we will send you an email with the quotation details.</p>
                            <div style="background:#f9f9f9;border-left:4px solid #C9A84C;padding:20px;border-radius:0 8px 8px 0;margin:24px 0">
                                <p style="margin:0 0 14px;font-size:11px;font-weight:bold;color:#888;text-transform:uppercase;letter-spacing:1.5px">Your Details</p>
                                <table style="border-collapse:collapse;width:100%">
                                    <tr><td style="${labelStyle}">Full Name</td><td style="${valueStyle}">${esc(lead.fullName)}</td></tr>
                                    <tr><td style="${labelStyle}">Email</td><td style="${valueStyle}">${esc(lead.email)}</td></tr>
                                    <tr><td style="${labelStyle}">Phone</td><td style="${valueStyle}">${esc(lead.phone)}</td></tr>
                                    <tr><td style="${labelStyle}">Passengers</td><td style="${valueStyle}">${esc(lead.passengers)}</td></tr>
                                    ${lead.luggage ? `<tr><td style="${labelStyle}">Luggage</td><td style="${valueStyle}">${esc(lead.luggage)}</td></tr>` : ''}
                                </table>
                            </div>
                            <div style="background:#f9f9f9;border-left:4px solid #C9A84C;padding:20px;border-radius:0 8px 8px 0;margin:16px 0">
                                <p style="margin:0 0 14px;font-size:11px;font-weight:bold;color:#888;text-transform:uppercase;letter-spacing:1.5px">Outbound Trip</p>
                                <table style="border-collapse:collapse;width:100%">
                                    <tr><td style="${labelStyle}">Pickup Location</td><td style="${valueStyle}">${esc(lead.pickupLocation)}</td></tr>
                                    <tr><td style="${labelStyle}">Drop-off Location</td><td style="${valueStyle}">${esc(lead.dropoffLocation)}</td></tr>
                                    <tr><td style="${labelStyle}">Date &amp; Time</td><td style="${valueStyle}">${outbound.date} at ${outbound.time}</td></tr>
                                    ${lead.flightNumber ? `<tr><td style="${labelStyle}">Flight Number</td><td style="${valueStyle}">${esc(lead.flightNumber)}</td></tr>` : ''}
                                </table>
                            </div>
                            ${clientReturnBlock}
                            <p style="color:#555;line-height:1.7">If anything looks incorrect or you need to make changes, reply to this email or reach us at:<br>
                            📧 <a href="mailto:${esc(brand.contactEmail)}" style="color:#C9A84C">${esc(brand.contactEmail)}</a></p>
                        </div>
                        <div style="background:#f9f9f9;padding:20px;text-align:center;border:1px solid #eee;border-top:none;border-radius:0 0 12px 12px">
                            <p style="color:#999;font-size:11px;margin:0 0 6px">${esc(brand.name)} &middot; ${esc(brand.domain)}</p>
                            ${brand.policy ? `<p style="color:#999;font-size:11px;margin:0">Cancellation and refund terms: <a href="${brand.policy.url}" style="color:#C9A84C">${brand.policy.label}</a></p>` : ''}
                        </div>
                    </div>
                `,
            });
            result.customerSent = true;
        } catch (e) {
            console.error('[LEAD] Client email failed:', e);
        }
    }

    return result;
}
