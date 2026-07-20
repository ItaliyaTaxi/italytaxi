import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceSupabase } from '@/lib/supabase/server';
import {
    Invoice,
    COMPANY_NAME,
    COMPANY_EMAIL,
    COMPANY_TAGLINE,
    SITE_URL,
    formatAmount,
    formatDate,
    formatDateTime,
    paymentStatusLabel,
    getReceiptList,
    getLineItems,
    lineItemsTotal,
} from '@/lib/invoice';
import PrintButton from './PrintButton';

export const metadata: Metadata = {
    robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

const BUCKET = 'invoice-receipts';
const SITE_HOST = SITE_URL.replace(/^https?:\/\//, '');

async function getInvoice(token: string): Promise<{ invoice: Invoice; receipts: { filename: string; url: string }[] } | null> {
    const supabase = getServiceSupabase();
    const { data, error } = await supabase
        .from('invoices')
        .select('*')
        .eq('public_token', token)
        .single();
    if (error || !data) return null;

    const invoice = data as Invoice;
    const receipts: { filename: string; url: string }[] = [];
    for (const f of getReceiptList(invoice)) {
        const { data: signed } = await supabase.storage
            .from(BUCKET)
            .createSignedUrl(f.path, 60 * 60);
        if (signed?.signedUrl) receipts.push({ filename: f.filename, url: signed.signedUrl });
    }
    return { invoice, receipts };
}

const STAMP_COLOR: Record<string, string> = {
    paid: '#16a34a',
    unpaid: '#dc2626',
    partial: '#d97706',
    refunded: '#6b7280',
};

export default async function InvoicePage({ params }: { params: Promise<{ token: string }> }) {
    const { token } = await params;
    const result = await getInvoice(token);
    if (!result) notFound();

    const { invoice, receipts } = result;
    const docLabel = invoice.doc_type === 'receipt' ? 'Receipt' : 'Invoice';
    const items = getLineItems(invoice);
    const total = items.length > 0 ? lineItemsTotal(items) : Number(invoice.amount || 0);
    const totalLabel = invoice.payment_status === 'paid' ? 'Total Paid'
        : invoice.payment_status === 'partial' ? 'Total (Partially Paid)'
            : invoice.payment_status === 'refunded' ? 'Total Refunded'
                : 'Total Due';
    const stampColor = STAMP_COLOR[invoice.payment_status] || STAMP_COLOR.unpaid;

    const hasTripBasics = invoice.pickup_location || invoice.dropoff_location || invoice.booking_datetime || invoice.flight_no || invoice.trip_type;

    return (
        <main className="min-h-screen bg-[#F1F3F6] py-10 px-4 print:bg-white print:py-0">
            <style>{`@media print { .no-print { display: none !important; } @page { margin: 12mm; } }`}</style>

            {/* Action bar */}
            <div className="no-print mx-auto mb-6 flex max-w-3xl items-center justify-between">
                <a href={SITE_URL} className="text-sm font-bold text-[#0F1C2E] hover:text-[#C9A84C]">← {COMPANY_NAME}</a>
                <div className="flex items-center gap-3">
                    {receipts.length === 1 && (
                        <a
                            href={receipts[0].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-[#0F1C2E]/15 bg-white px-6 py-3.5 text-sm font-bold text-[#0F1C2E] shadow-sm transition-all hover:border-[#C9A84C] active:scale-95"
                        >
                            ⬇ Download Receipt File
                        </a>
                    )}
                    <PrintButton />
                </div>
            </div>

            {/* Invoice document */}
            <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl bg-white shadow-xl print:rounded-none print:shadow-none">
                <div className="px-10 py-9">
                    {/* Brand header */}
                    <div className="flex flex-col gap-6 border-b-2 border-[#C9A84C]/40 pb-7 sm:flex-row sm:items-center sm:justify-between">
                        <img src="/images/logo.png" alt={COMPANY_NAME} className="h-24 w-auto" />
                        <div className="text-left sm:text-right">
                            <p className="text-lg font-black text-[#0F1C2E]">{COMPANY_NAME}</p>
                            <p className="text-xs font-bold uppercase tracking-widest text-[#C9A84C]">{COMPANY_TAGLINE}</p>
                            <p className="mt-1 text-xs text-gray-500">{SITE_HOST}</p>
                            <p className="text-xs text-gray-500">{COMPANY_EMAIL}</p>
                        </div>
                    </div>

                    {/* Title + meta */}
                    <div className="flex flex-wrap items-start justify-between gap-4 py-7">
                        <h1 className="text-4xl font-black uppercase tracking-tight text-[#0F1C2E]">{docLabel}</h1>
                        <div className="text-left sm:text-right">
                            <p className="text-sm text-gray-500">Invoice No: <span className="font-mono font-bold text-[#0F1C2E]">{invoice.invoice_number}</span></p>
                            <p className="text-sm text-gray-500">Issue Date: <span className="font-bold text-[#0F1C2E]">{formatDate(invoice.created_at)}</span></p>
                            <p className="text-sm text-gray-500">Status: <span className="font-black uppercase" style={{ color: stampColor }}>{paymentStatusLabel(invoice.payment_status)}</span></p>
                        </div>
                    </div>

                    {/* Bill To / Trip Details */}
                    <div className="grid grid-cols-1 gap-8 border-t border-gray-100 py-7 sm:grid-cols-2">
                        <div>
                            <p className="mb-3 border-b-2 border-[#C9A84C] pb-1 text-[11px] font-black uppercase tracking-widest text-[#0F1C2E]">Bill To</p>
                            <table className="w-full text-sm">
                                <tbody>
                                    <tr><td className="py-1 pr-3 text-gray-400">Name:</td><td className="py-1 font-semibold text-[#0F1C2E]">{invoice.client_name}</td></tr>
                                    <tr><td className="py-1 pr-3 text-gray-400">Email:</td><td className="py-1 font-semibold text-[#0F1C2E]">{invoice.client_email}</td></tr>
                                    {invoice.client_phone && <tr><td className="py-1 pr-3 text-gray-400">Phone:</td><td className="py-1 font-semibold text-[#0F1C2E]">{invoice.client_phone}</td></tr>}
                                    {invoice.passengers != null && <tr><td className="py-1 pr-3 text-gray-400">Passengers:</td><td className="py-1 font-semibold text-[#0F1C2E]">{invoice.passengers}</td></tr>}
                                    {invoice.luggage && <tr><td className="py-1 pr-3 text-gray-400">Luggage:</td><td className="py-1 font-semibold text-[#0F1C2E]">{invoice.luggage}</td></tr>}
                                </tbody>
                            </table>
                        </div>
                        {hasTripBasics && (
                            <div>
                                <p className="mb-3 border-b-2 border-[#C9A84C] pb-1 text-[11px] font-black uppercase tracking-widest text-[#0F1C2E]">Trip Details</p>
                                <table className="w-full text-sm">
                                    <tbody>
                                        {invoice.pickup_location && <tr><td className="py-1 pr-3 align-top text-gray-400">Pickup:</td><td className="py-1 font-semibold text-[#0F1C2E]">{invoice.pickup_location}</td></tr>}
                                        {invoice.dropoff_location && <tr><td className="py-1 pr-3 align-top text-gray-400">Drop-off:</td><td className="py-1 font-semibold text-[#0F1C2E]">{invoice.dropoff_location}</td></tr>}
                                        {invoice.booking_datetime && <tr><td className="py-1 pr-3 align-top text-gray-400">Date/Time:</td><td className="py-1 font-semibold text-[#0F1C2E]">{formatDateTime(invoice.booking_datetime)}</td></tr>}
                                        {invoice.flight_no && <tr><td className="py-1 pr-3 text-gray-400">Flight No:</td><td className="py-1 font-semibold text-[#0F1C2E]">{invoice.flight_no}</td></tr>}
                                        {invoice.trip_type && <tr><td className="py-1 pr-3 text-gray-400">Trip Type:</td><td className="py-1 font-semibold text-[#0F1C2E]">{invoice.trip_type}</td></tr>}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>

                    {/* Service description */}
                    {items.length > 0 && (
                        <div className="border-t border-gray-100 py-7">
                            <p className="mb-3 border-b-2 border-[#C9A84C] pb-1 text-[11px] font-black uppercase tracking-widest text-[#0F1C2E]">Service Description</p>
                            <table className="w-full overflow-hidden rounded-lg text-sm">
                                <thead>
                                    <tr className="bg-[#8A6D28] text-white">
                                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide">Description</th>
                                        <th className="px-4 py-3 text-right text-xs font-bold uppercase tracking-wide">Amount ({invoice.currency})</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item, idx) => (
                                        <tr key={idx} className="border-b border-gray-100">
                                            <td className="px-4 py-3 align-top">
                                                <p className="font-semibold text-[#0F1C2E]">{item.description}</p>
                                                {item.note && <p className="mt-0.5 text-xs italic text-gray-500">{item.note}</p>}
                                            </td>
                                            <td className="px-4 py-3 text-right align-top font-semibold text-[#0F1C2E]">{Number(item.amount).toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="mt-3 flex items-center justify-between rounded-lg bg-[#F3E9CE] px-5 py-4">
                                <span className="text-sm font-black uppercase tracking-widest text-[#0F1C2E]">{totalLabel}</span>
                                <span className="text-xl font-black text-[#0F1C2E]">{formatAmount(total, invoice.currency)}</span>
                            </div>
                        </div>
                    )}

                    {/* Payment information */}
                    <div className="flex flex-col items-start justify-between gap-8 border-t border-gray-100 py-7 sm:flex-row">
                        <div className="flex-1">
                            <p className="mb-3 border-b-2 border-[#C9A84C] pb-1 text-[11px] font-black uppercase tracking-widest text-[#0F1C2E]">Payment Information</p>
                            <table className="w-full text-sm">
                                <tbody>
                                    {invoice.payment_method && <tr><td className="py-1 pr-3 text-gray-400">Method:</td><td className="py-1 font-semibold text-[#0F1C2E]">{invoice.payment_method}</td></tr>}
                                    <tr><td className="py-1 pr-3 text-gray-400">Amount:</td><td className="py-1 font-semibold text-[#0F1C2E]">{formatAmount(total, invoice.currency)}</td></tr>
                                    {invoice.ref_token && <tr><td className="py-1 pr-3 align-top text-gray-400">Ref Token:</td><td className="break-all py-1 font-mono text-xs font-semibold text-[#0F1C2E]">{invoice.ref_token}</td></tr>}
                                    {invoice.payment_date && <tr><td className="py-1 pr-3 text-gray-400">Payment Date:</td><td className="py-1 font-semibold text-[#0F1C2E]">{formatDate(invoice.payment_date)}</td></tr>}
                                </tbody>
                            </table>
                        </div>

                        {/* Stamp seal */}
                        <div
                            className="flex h-36 w-36 shrink-0 -rotate-6 flex-col items-center justify-center rounded-full text-center"
                            style={{ border: `3px double ${stampColor}`, color: stampColor }}
                        >
                            <p className="text-[8px] font-black uppercase tracking-widest">{COMPANY_NAME}</p>
                            <p className="text-[6px] font-bold uppercase tracking-wide opacity-80">{COMPANY_TAGLINE}</p>
                            <p className="my-1 text-lg font-black uppercase tracking-widest">{paymentStatusLabel(invoice.payment_status)}</p>
                            <p className="text-[7px] font-semibold">{SITE_HOST}</p>
                            <p className="text-[7px] font-semibold">{formatDate(invoice.created_at)}</p>
                        </div>
                    </div>

                    {/* Notes */}
                    {invoice.notes && (
                        <div className="border-t border-gray-100 pt-7">
                            <p className="mb-2 text-[10px] font-black uppercase tracking-widest text-gray-400">Notes</p>
                            <p className="whitespace-pre-wrap text-sm leading-relaxed text-gray-600">{invoice.notes}</p>
                        </div>
                    )}

                    {/* Attached receipt files */}
                    {receipts.length > 0 && (
                        <div className="no-print border-t border-gray-100 pt-7">
                            <p className="mb-3 text-[10px] font-black uppercase tracking-widest text-gray-400">Attached Receipts ({receipts.length})</p>
                            <div className="flex flex-col gap-2">
                                {receipts.map((r, idx) => (
                                    <a
                                        key={idx}
                                        href={r.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between rounded-xl border border-gray-200 bg-[#F8FAFC] px-4 py-3 text-sm font-semibold text-[#0F1C2E] transition-all hover:border-[#C9A84C]"
                                    >
                                        <span className="truncate">📎 {r.filename}</span>
                                        <span className="ml-3 shrink-0 text-xs font-bold text-[#C9A84C]">Download ⬇</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="border-t border-gray-100 bg-[#F8FAFC] px-10 py-6 text-center">
                    <p className="text-sm font-bold text-[#0F1C2E]">Thank you for choosing {COMPANY_NAME}</p>
                    <p className="mt-1 text-xs text-gray-500">
                        {COMPANY_NAME} · {SITE_HOST} · <a href={`mailto:${COMPANY_EMAIL}`} className="font-semibold text-[#C9A84C]">{COMPANY_EMAIL}</a>
                    </p>
                </div>
            </div>
        </main>
    );
}
