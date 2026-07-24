// Shared types & helpers for the invoice / receipt system.
// Pure functions only — safe to import from both server and client components.

export interface ReceiptFile {
    path: string;
    filename: string;
}

export interface LineItem {
    description: string;
    note?: string;
    amount: number;
}

export interface Invoice {
    id: string;
    invoice_number: string;
    public_token: string;
    doc_type: 'invoice' | 'receipt';
    client_name: string;
    client_email: string;
    client_phone: string | null;
    pickup_location: string | null;
    dropoff_location: string | null;
    booking_datetime: string | null;
    passengers: number | null;
    luggage: string | null;
    flight_no: string | null;
    trip_type: string | null;
    line_items: LineItem[] | null;
    amount: number;
    currency: string;
    payment_method: string | null;
    payment_status: 'paid' | 'unpaid' | 'partial' | 'refunded';
    ref_token: string | null;
    payment_date: string | null;
    notes: string | null;
    receipt_files: ReceiptFile[] | null;
    receipt_path: string | null;      // legacy single-file (back-compat)
    receipt_filename: string | null;  // legacy single-file (back-compat)
    email_sent: boolean;
    email_sent_at: string | null;
    booking_id: string | null;
    created_at: string;
    updated_at: string;
}

export const SITE_URL = 'https://www.italytaxiservice.com';
export const COMPANY_NAME = 'ItaliaRide';
export const COMPANY_EMAIL = 'italytaxiservicee@gmail.com';
export const COMPANY_TAGLINE = 'Luxury Chauffeur Service';
export const COMPANY_LOGO_URL = `${SITE_URL}/images/logo.png`;

/** Normalizes an invoice's line items, synthesizing one from legacy amount/notes if empty. */
export function getLineItems(inv: Pick<Invoice, 'line_items' | 'amount' | 'notes'>): LineItem[] {
    const items = Array.isArray(inv.line_items)
        ? inv.line_items.filter((i): i is LineItem => !!i && typeof i.description === 'string')
        : [];
    if (items.length > 0) return items;
    if (Number(inv.amount) > 0) {
        return [{ description: inv.notes?.trim() || 'Private chauffeur transfer', amount: Number(inv.amount) }];
    }
    return [];
}

export function lineItemsTotal(items: LineItem[]): number {
    return items.reduce((sum, i) => sum + (Number(i.amount) || 0), 0);
}

const CURRENCY_SYMBOLS: Record<string, string> = {
    EUR: '€',
    USD: '$',
    GBP: '£',
    CHF: 'CHF ',
    AUD: 'A$',
};

export function currencySymbol(currency: string): string {
    return CURRENCY_SYMBOLS[currency] || `${currency} `;
}

export function formatAmount(amount: number, currency: string): string {
    const value = Number(amount || 0).toLocaleString('en-GB', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    return `${currencySymbol(currency)}${value}`;
}

// Booking dates are stored as the exact wall-clock the admin typed (a naive
// datetime-local value persisted into a UTC timestamptz). We therefore format
// in UTC everywhere so the displayed date/time always matches what was entered,
// regardless of the server or browser timezone — avoiding off-by-one-day bugs.
export function formatDate(raw: string | null | undefined): string {
    if (!raw) return '—';
    const d = new Date(raw);
    if (isNaN(d.getTime())) return '—';
    return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

export function formatDateTime(raw: string | null | undefined): string {
    if (!raw) return '—';
    const d = new Date(raw);
    if (isNaN(d.getTime())) return '—';
    const date = d.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'UTC' });
    const time = d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'UTC' });
    return `${date} at ${time}`;
}

export function paymentStatusLabel(status: string): string {
    switch (status) {
        case 'paid': return 'Paid';
        case 'unpaid': return 'Unpaid';
        case 'partial': return 'Partially Paid';
        case 'refunded': return 'Refunded';
        default: return status;
    }
}

export function invoiceViewUrl(token: string): string {
    return `${SITE_URL}/invoice/${token}`;
}

/**
 * Returns the invoice's receipt files as a normalized array, transparently
 * falling back to the legacy single-file columns for older rows.
 */
export function getReceiptList(
    inv: Pick<Invoice, 'receipt_files' | 'receipt_path' | 'receipt_filename'>,
): ReceiptFile[] {
    const list = Array.isArray(inv.receipt_files)
        ? inv.receipt_files.filter((f): f is ReceiptFile => !!f && typeof f.path === 'string' && f.path.length > 0)
        : [];
    if (list.length > 0) return list;
    if (inv.receipt_path) return [{ path: inv.receipt_path, filename: inv.receipt_filename || 'receipt' }];
    return [];
}

const NAVY = '#0F1C2E';
const GOLD = '#C9A84C';

/**
 * Builds the branded HTML email that delivers an invoice/receipt to a client.
 * The full printable invoice lives at the view link; the uploaded receipt (if
 * any) is sent as an attachment by the caller.
 */
export function buildInvoiceEmailHtml(invoice: Invoice, customMessage?: string): string {
    const docLabel = invoice.doc_type === 'receipt' ? 'Receipt' : 'Invoice';
    const viewUrl = invoiceViewUrl(invoice.public_token);

    const messageBlock = customMessage && customMessage.trim()
        ? `<p style="color:#555;line-height:1.8;font-size:15px;margin:0 0 8px">${customMessage.replace(/\n/g, '<br>')}</p>`
        : `<p style="color:#555;line-height:1.8;font-size:15px;margin:0 0 8px">Dear <strong>${invoice.client_name}</strong>,<br><br>
            Please find below your ${docLabel.toLowerCase()} for your transfer with ${COMPANY_NAME}. Thank you for choosing us for your journey.</p>`;

    return `
    <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;background:#f4f5f7;padding:0">
        <div style="background:${NAVY};padding:28px 32px;text-align:center;border-radius:12px 12px 0 0">
            <img src="${COMPANY_LOGO_URL}" alt="${COMPANY_NAME}" width="72" height="72" style="display:block;margin:0 auto 8px;height:72px;width:auto" />
            <h1 style="color:${GOLD};margin:0;font-size:24px;letter-spacing:-0.5px">${COMPANY_NAME}</h1>
            <p style="color:#ffffff99;font-size:11px;margin:8px 0 0;letter-spacing:2px;text-transform:uppercase">${COMPANY_TAGLINE}</p>
        </div>
        <div style="background:#ffffff;padding:40px;border:1px solid #eee;border-top:none">
            ${messageBlock}

            <div style="text-align:center;margin:28px 0">
                <a href="${viewUrl}" style="display:inline-block;background:${NAVY};color:${GOLD};text-decoration:none;font-weight:bold;font-size:14px;letter-spacing:0.5px;padding:14px 32px;border-radius:999px">View &amp; Download ${docLabel} (PDF)</a>
            </div>

            <p style="color:#888;font-size:13px;line-height:1.7;text-align:center">Open the link above and use your browser's <strong>Print &rarr; Save as PDF</strong> to keep a copy.</p>

            <hr style="border:none;border-top:1px solid #eee;margin:28px 0">
            <p style="color:#888;font-size:13px;line-height:1.6">
                Best regards,<br>
                <strong style="color:${NAVY}">${COMPANY_NAME} Team</strong><br>
                📧 <a href="mailto:${COMPANY_EMAIL}" style="color:${GOLD}">${COMPANY_EMAIL}</a>
            </p>
        </div>
        <div style="background:#f9f9f9;padding:20px;text-align:center;border:1px solid #eee;border-top:none;border-radius:0 0 12px 12px">
            <p style="color:#999;font-size:11px;margin:0">${COMPANY_NAME} &middot; italytaxiservice.com</p>
        </div>
    </div>`;
}
