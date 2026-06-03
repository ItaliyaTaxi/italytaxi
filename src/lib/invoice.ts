// Shared types & helpers for the invoice / receipt system.
// Pure functions only — safe to import from both server and client components.

export interface ReceiptFile {
    path: string;
    filename: string;
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
    amount: number;
    currency: string;
    payment_method: string | null;
    payment_status: 'paid' | 'unpaid' | 'partial' | 'refunded';
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
export const COMPANY_NAME = 'Italy Taxi Service';
export const COMPANY_EMAIL = 'italytaxiservicee@gmail.com';
export const COMPANY_TAGLINE = 'Premium Transfers Across Italy';

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

export function formatDate(raw: string | null | undefined): string {
    if (!raw) return '—';
    const d = new Date(raw);
    if (isNaN(d.getTime())) return '—';
    return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
}

export function formatDateTime(raw: string | null | undefined): string {
    if (!raw) return '—';
    const d = new Date(raw);
    if (isNaN(d.getTime())) return '—';
    const date = d.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
    const time = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
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

function row(label: string, value: string): string {
    return `<tr>
        <td style="padding:9px 0;color:#888;font-size:13px;width:150px;vertical-align:top">${label}</td>
        <td style="padding:9px 0;color:${NAVY};font-weight:bold;font-size:13px">${value || '—'}</td>
    </tr>`;
}

/**
 * Builds the branded HTML email that delivers an invoice/receipt to a client.
 * The full printable invoice lives at the view link; the uploaded receipt (if
 * any) is sent as an attachment by the caller.
 */
export function buildInvoiceEmailHtml(invoice: Invoice, customMessage?: string): string {
    const docLabel = invoice.doc_type === 'receipt' ? 'Receipt' : 'Invoice';
    const viewUrl = invoiceViewUrl(invoice.public_token);
    const statusColor = invoice.payment_status === 'paid' ? '#16a34a'
        : invoice.payment_status === 'refunded' ? '#6b7280'
            : invoice.payment_status === 'partial' ? '#d97706' : '#dc2626';

    const tripRows = [
        invoice.pickup_location ? row('Pickup', invoice.pickup_location) : '',
        invoice.dropoff_location ? row('Drop-off', invoice.dropoff_location) : '',
        invoice.booking_datetime ? row('Date &amp; Time', formatDateTime(invoice.booking_datetime)) : '',
    ].join('');

    const messageBlock = customMessage && customMessage.trim()
        ? `<p style="color:#555;line-height:1.8;font-size:15px;margin:0 0 8px">${customMessage.replace(/\n/g, '<br>')}</p>`
        : `<p style="color:#555;line-height:1.8;font-size:15px;margin:0 0 8px">Dear <strong>${invoice.client_name}</strong>,<br><br>
            Please find below your ${docLabel.toLowerCase()} for your transfer with ${COMPANY_NAME}. Thank you for choosing us for your journey.</p>`;

    return `
    <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;background:#f4f5f7;padding:0">
        <div style="background:${NAVY};padding:32px;text-align:center;border-radius:12px 12px 0 0">
            <h1 style="color:${GOLD};margin:0;font-size:24px;letter-spacing:-0.5px">${COMPANY_NAME}</h1>
            <p style="color:#ffffff99;font-size:11px;margin:8px 0 0;letter-spacing:2px;text-transform:uppercase">${COMPANY_TAGLINE}</p>
        </div>
        <div style="background:#ffffff;padding:40px;border:1px solid #eee;border-top:none">
            ${messageBlock}

            <div style="background:#f9f9f9;border:1px solid #eee;border-radius:12px;padding:24px;margin:24px 0">
                <div style="display:flex;justify-content:space-between;align-items:center">
                    <div>
                        <p style="margin:0;font-size:11px;font-weight:bold;color:#888;text-transform:uppercase;letter-spacing:1.5px">${docLabel} Number</p>
                        <p style="margin:4px 0 0;font-size:18px;font-weight:bold;color:${NAVY}">${invoice.invoice_number}</p>
                    </div>
                </div>
                <hr style="border:none;border-top:1px solid #eee;margin:18px 0">
                <table style="border-collapse:collapse;width:100%">
                    ${row('Issued', formatDate(invoice.created_at))}
                    ${tripRows}
                    ${invoice.payment_method ? row('Payment Method', invoice.payment_method) : ''}
                </table>
                <hr style="border:none;border-top:1px solid #eee;margin:18px 0">
                <table style="border-collapse:collapse;width:100%">
                    <tr>
                        <td style="padding:0;color:${NAVY};font-size:16px;font-weight:bold">Amount Paid</td>
                        <td style="padding:0;text-align:right;color:${NAVY};font-size:22px;font-weight:bold">${formatAmount(invoice.amount, invoice.currency)}</td>
                    </tr>
                    <tr>
                        <td colspan="2" style="padding:8px 0 0;text-align:right">
                            <span style="display:inline-block;background:${statusColor}1a;color:${statusColor};font-size:11px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;padding:4px 12px;border-radius:999px">${paymentStatusLabel(invoice.payment_status)}</span>
                        </td>
                    </tr>
                </table>
            </div>

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
