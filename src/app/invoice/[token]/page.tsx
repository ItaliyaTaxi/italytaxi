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
} from '@/lib/invoice';
import PrintButton from './PrintButton';

export const metadata: Metadata = {
    robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

const BUCKET = 'invoice-receipts';

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

const STATUS_COLORS: Record<string, string> = {
    paid: 'bg-green-50 text-green-700 border-green-200',
    unpaid: 'bg-red-50 text-red-700 border-red-200',
    partial: 'bg-amber-50 text-amber-700 border-amber-200',
    refunded: 'bg-gray-100 text-gray-600 border-gray-200',
};

export default async function InvoicePage({ params }: { params: Promise<{ token: string }> }) {
    const { token } = await params;
    const result = await getInvoice(token);
    if (!result) notFound();

    const { invoice, receipts } = result;
    const docLabel = invoice.doc_type === 'receipt' ? 'Receipt' : 'Invoice';
    const hasTrip = invoice.pickup_location || invoice.dropoff_location || invoice.booking_datetime;

    return (
        <main className="min-h-screen bg-[#F1F3F6] py-10 px-4 print:bg-white print:py-0">
            <style>{`@media print { .no-print { display: none !important; } @page { margin: 14mm; } }`}</style>

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
                {/* Header */}
                <div className="flex flex-col gap-6 bg-[#0F1C2E] px-10 py-9 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-black tracking-tight text-[#C9A84C]">{COMPANY_NAME}</h1>
                        <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">{COMPANY_TAGLINE}</p>
                    </div>
                    <div className="text-left sm:text-right">
                        <p className="text-3xl font-black uppercase tracking-tight text-white">{docLabel}</p>
                        <p className="mt-1 font-mono text-sm font-bold text-[#C9A84C]">{invoice.invoice_number}</p>
                    </div>
                </div>

                <div className="px-10 py-9">
                    {/* Meta row */}
                    <div className="flex flex-wrap items-start justify-between gap-6 border-b border-gray-100 pb-7">
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Billed To</p>
                            <p className="mt-2 text-lg font-black text-[#0F1C2E]">{invoice.client_name}</p>
                            <p className="text-sm text-gray-600">{invoice.client_email}</p>
                            {invoice.client_phone && <p className="font-mono text-sm text-gray-600">{invoice.client_phone}</p>}
                        </div>
                        <div className="text-left sm:text-right">
                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Issue Date</p>
                            <p className="mt-2 font-bold text-[#0F1C2E]">{formatDate(invoice.created_at)}</p>
                            <span className={`mt-3 inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-widest ${STATUS_COLORS[invoice.payment_status] || STATUS_COLORS.refunded}`}>
                                {paymentStatusLabel(invoice.payment_status)}
                            </span>
                        </div>
                    </div>

                    {/* Trip details */}
                    {hasTrip && (
                        <div className="border-b border-gray-100 py-7">
                            <p className="mb-4 text-[10px] font-black uppercase tracking-widest text-gray-400">Trip Details</p>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                {invoice.pickup_location && (
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Pickup</p>
                                        <p className="font-semibold text-[#0F1C2E]">{invoice.pickup_location}</p>
                                    </div>
                                )}
                                {invoice.dropoff_location && (
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Drop-off</p>
                                        <p className="font-semibold text-[#0F1C2E]">{invoice.dropoff_location}</p>
                                    </div>
                                )}
                                {invoice.booking_datetime && (
                                    <div className="sm:col-span-2">
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Date &amp; Time</p>
                                        <p className="font-semibold text-[#0F1C2E]">{formatDateTime(invoice.booking_datetime)}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Amount */}
                    <div className="py-7">
                        <div className="flex items-center justify-between rounded-2xl bg-[#F8FAFC] px-7 py-6">
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Amount {invoice.payment_status === 'paid' ? 'Paid' : 'Due'}</p>
                                {invoice.payment_method && (
                                    <p className="mt-1 text-sm text-gray-600">via {invoice.payment_method}</p>
                                )}
                            </div>
                            <p className="text-3xl font-black text-[#0F1C2E]">{formatAmount(invoice.amount, invoice.currency)}</p>
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
                        Questions? <a href={`mailto:${COMPANY_EMAIL}`} className="font-semibold text-[#C9A84C]">{COMPANY_EMAIL}</a> · italytaxiservice.com
                    </p>
                </div>
            </div>
        </main>
    );
}
