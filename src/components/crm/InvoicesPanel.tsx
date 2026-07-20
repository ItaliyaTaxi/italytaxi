'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import {
    listInvoicesAction,
    createInvoiceAction,
    updateInvoiceAction,
    deleteInvoiceAction,
    sendInvoiceEmailAction,
    getReceiptUrlsAction,
} from '@/app/actions/invoices';
import { Invoice, ReceiptFile, LineItem, formatAmount, formatDate, getReceiptList, getLineItems, lineItemsTotal } from '@/lib/invoice';

export interface InvoicePrefill {
    client_name?: string;
    client_email?: string;
    client_phone?: string;
    pickup_location?: string;
    dropoff_location?: string;
    booking_datetime?: string;
    passengers?: number | string;
    luggage?: string;
    booking_id?: string;
}

interface FormState {
    doc_type: string;
    client_name: string;
    client_email: string;
    client_phone: string;
    pickup_location: string;
    dropoff_location: string;
    booking_datetime: string;
    passengers: string;
    luggage: string;
    flight_no: string;
    trip_type: string;
    currency: string;
    payment_method: string;
    payment_status: string;
    ref_token: string;
    payment_date: string;
    notes: string;
}

const EMPTY_FORM: FormState = {
    doc_type: 'invoice',
    client_name: '',
    client_email: '',
    client_phone: '',
    pickup_location: '',
    dropoff_location: '',
    booking_datetime: '',
    passengers: '',
    luggage: '',
    flight_no: '',
    trip_type: '',
    currency: 'EUR',
    payment_method: '',
    payment_status: 'paid',
    ref_token: '',
    payment_date: '',
    notes: '',
};

const EMPTY_LINE_ITEM: LineItem = { description: '', note: '', amount: 0 };

const TRIP_TYPE_OPTIONS = [
    'One-way, Private Transfer',
    'Round-trip, Private Transfer',
    'Hourly Hire',
    'Point-to-Point',
    'Private Tour',
];

const STATUS_BADGE: Record<string, string> = {
    paid: 'bg-green-50 text-green-600 border-green-200',
    unpaid: 'bg-red-50 text-red-600 border-red-200',
    partial: 'bg-amber-50 text-amber-600 border-amber-200',
    refunded: 'bg-gray-100 text-gray-500 border-gray-200',
};

// Read the stored wall-clock back into a datetime-local value using UTC getters,
// matching how formatDate/formatDateTime render it. This keeps the round-trip
// (type -> store -> display -> edit) stable and free of timezone day-shifts.
function toInputDateTime(iso?: string | null): string {
    if (!iso) return '';
    const d = new Date(iso);
    if (isNaN(d.getTime())) return '';
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}T${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}`;
}

const errMsg = (e: unknown) => (e instanceof Error ? e.message : String(e));

const inputClass =
    'w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-navy font-semibold focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all';
const labelClass = 'block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2';

export default function InvoicesPanel({
    prefill,
    onConsumePrefill,
}: {
    prefill: InvoicePrefill | null;
    onConsumePrefill: () => void;
}) {
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    // Create / edit modal
    const [formOpen, setFormOpen] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [form, setForm] = useState<FormState>(EMPTY_FORM);
    const [lineItems, setLineItems] = useState<LineItem[]>([EMPTY_LINE_ITEM]);
    const [bookingId, setBookingId] = useState<string | null>(null);
    const [newFiles, setNewFiles] = useState<File[]>([]);
    const [existingReceipts, setExistingReceipts] = useState<ReceiptFile[]>([]);
    const [removedPaths, setRemovedPaths] = useState<string[]>([]);
    const [saving, setSaving] = useState(false);
    const [formError, setFormError] = useState<string | null>(null);

    // Send email modal
    const [sendTarget, setSendTarget] = useState<Invoice | null>(null);
    const [sendMessage, setSendMessage] = useState('');
    const [sending, setSending] = useState(false);
    const [sendResult, setSendResult] = useState<{ ok: boolean; msg: string } | null>(null);

    const load = useCallback(async () => {
        setLoading(true);
        try {
            const data = await listInvoicesAction();
            setInvoices(data);
        } catch (e) {
            console.error('Failed to load invoices', e);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        load();
    }, [load]);

    const openCreate = useCallback((seed?: InvoicePrefill) => {
        setEditingId(null);
        setForm({
            ...EMPTY_FORM,
            client_name: seed?.client_name || '',
            client_email: seed?.client_email || '',
            client_phone: seed?.client_phone || '',
            pickup_location: seed?.pickup_location || '',
            dropoff_location: seed?.dropoff_location || '',
            booking_datetime: toInputDateTime(seed?.booking_datetime),
            passengers: seed?.passengers != null ? String(seed.passengers) : '',
            luggage: seed?.luggage || '',
        });
        setLineItems([EMPTY_LINE_ITEM]);
        setBookingId(seed?.booking_id || null);
        setNewFiles([]);
        setExistingReceipts([]);
        setRemovedPaths([]);
        setFormError(null);
        setFormOpen(true);
    }, []);

    // Open prefilled form when a lead's "Invoice" button is clicked.
    useEffect(() => {
        if (prefill) {
            openCreate(prefill);
            onConsumePrefill();
        }
    }, [prefill, openCreate, onConsumePrefill]);

    function openEdit(inv: Invoice) {
        setEditingId(inv.id);
        setForm({
            doc_type: inv.doc_type,
            client_name: inv.client_name,
            client_email: inv.client_email,
            client_phone: inv.client_phone || '',
            pickup_location: inv.pickup_location || '',
            dropoff_location: inv.dropoff_location || '',
            booking_datetime: toInputDateTime(inv.booking_datetime),
            passengers: inv.passengers != null ? String(inv.passengers) : '',
            luggage: inv.luggage || '',
            flight_no: inv.flight_no || '',
            trip_type: inv.trip_type || '',
            currency: inv.currency || 'EUR',
            payment_method: inv.payment_method || '',
            payment_status: inv.payment_status || 'paid',
            ref_token: inv.ref_token || '',
            payment_date: inv.payment_date || '',
            notes: inv.notes || '',
        });
        const items = getLineItems(inv);
        setLineItems(items.length > 0 ? items : [EMPTY_LINE_ITEM]);
        setBookingId(inv.booking_id || null);
        setNewFiles([]);
        setExistingReceipts(getReceiptList(inv));
        setRemovedPaths([]);
        setFormError(null);
        setFormOpen(true);
    }

    const cleanLineItems = useMemo(
        () => lineItems.filter(i => i.description.trim() !== ''),
        [lineItems]
    );
    const computedTotal = useMemo(() => lineItemsTotal(cleanLineItems), [cleanLineItems]);

    function buildFormData(): FormData {
        const fd = new FormData();
        Object.entries(form).forEach(([k, v]) => fd.append(k, v));
        fd.append('line_items', JSON.stringify(cleanLineItems));
        if (bookingId) fd.append('booking_id', bookingId);
        newFiles.forEach(f => fd.append('receipt_file', f));
        if (removedPaths.length) fd.append('removed_receipts', JSON.stringify(removedPaths));
        return fd;
    }

    async function handleSubmit() {
        if (!form.client_name.trim()) return setFormError('Client name is required.');
        if (!form.client_email.trim()) return setFormError('Client email is required.');
        if (cleanLineItems.length === 0) return setFormError('Add at least one service line with a description.');
        setSaving(true);
        setFormError(null);
        try {
            if (editingId) {
                await updateInvoiceAction(editingId, buildFormData());
            } else {
                await createInvoiceAction(buildFormData());
            }
            setFormOpen(false);
            await load();
        } catch (e) {
            setFormError(errMsg(e) || 'Failed to save invoice.');
        } finally {
            setSaving(false);
        }
    }

    async function handleDelete(inv: Invoice) {
        if (!confirm(`Delete ${inv.invoice_number}? This cannot be undone.`)) return;
        try {
            await deleteInvoiceAction(inv.id);
            setInvoices(prev => prev.filter(i => i.id !== inv.id));
        } catch (e) {
            alert('Error: ' + errMsg(e));
        }
    }

    async function handleDownloadReceipts(inv: Invoice) {
        try {
            const urls = await getReceiptUrlsAction(inv.id);
            if (urls.length === 1) {
                window.open(urls[0].url, '_blank');
            } else {
                // Multiple files — open the invoice page where all are listed.
                window.open(`/invoice/${inv.public_token}`, '_blank');
            }
        } catch (e) {
            alert('Error: ' + errMsg(e));
        }
    }

    async function downloadSingle(invId: string, path: string) {
        try {
            const urls = await getReceiptUrlsAction(invId);
            const match = urls.find(u => u.path === path);
            if (match) window.open(match.url, '_blank');
            else alert('File not found.');
        } catch (e) {
            alert('Error: ' + errMsg(e));
        }
    }

    function openSend(inv: Invoice) {
        setSendTarget(inv);
        setSendMessage('');
        setSendResult(null);
    }

    async function handleSend() {
        if (!sendTarget) return;
        setSending(true);
        setSendResult(null);
        try {
            await sendInvoiceEmailAction(sendTarget.id, sendMessage.trim() || undefined);
            setSendResult({ ok: true, msg: `Sent to ${sendTarget.client_email}` });
            setInvoices(prev => prev.map(i => i.id === sendTarget.id ? { ...i, email_sent: true, email_sent_at: new Date().toISOString() } : i));
        } catch (e) {
            setSendResult({ ok: false, msg: errMsg(e) || 'Failed to send.' });
        } finally {
            setSending(false);
        }
    }

    const filtered = useMemo(() => {
        const q = search.trim().toLowerCase();
        if (!q) return invoices;
        return invoices.filter(i =>
            i.client_name?.toLowerCase().includes(q) ||
            i.client_email?.toLowerCase().includes(q) ||
            (i.client_phone || '').toLowerCase().includes(q) ||
            i.invoice_number?.toLowerCase().includes(q)
        );
    }, [invoices, search]);

    const totalAmount = useMemo(
        () => invoices.reduce((sum, i) => sum + Number(i.amount || 0), 0),
        [invoices]
    );

    return (
        <>
            {/* ===== Create / Edit Modal ===== */}
            {formOpen && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => !saving && setFormOpen(false)}>
                    <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-3xl max-h-[92vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                        <div className="flex items-center justify-between px-8 py-6 bg-[#0F1C2E] rounded-t-[2rem] sticky top-0 z-10">
                            <div>
                                <h2 className="text-xl font-black text-white tracking-tight">{editingId ? 'Edit Invoice' : 'New Invoice / Receipt'}</h2>
                                <p className="text-[10px] font-bold text-gold/70 uppercase tracking-widest mt-0.5">
                                    {editingId ? 'Update document details' : 'Invoice number is generated automatically'}
                                </p>
                            </div>
                            <button onClick={() => !saving && setFormOpen(false)} className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-all">✕</button>
                        </div>

                        <div className="p-8 space-y-5">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className={labelClass}>Document Type</label>
                                    <select value={form.doc_type} onChange={e => setForm({ ...form, doc_type: e.target.value })} className={inputClass}>
                                        <option value="invoice">Invoice</option>
                                        <option value="receipt">Receipt</option>
                                    </select>
                                </div>
                                <div>
                                    <label className={labelClass}>Payment Status</label>
                                    <select value={form.payment_status} onChange={e => setForm({ ...form, payment_status: e.target.value })} className={inputClass}>
                                        <option value="paid">Paid</option>
                                        <option value="unpaid">Unpaid</option>
                                        <option value="partial">Partially Paid</option>
                                        <option value="refunded">Refunded</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className={labelClass}>Client Name *</label>
                                    <input value={form.client_name} onChange={e => setForm({ ...form, client_name: e.target.value })} className={inputClass} placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className={labelClass}>Client Email *</label>
                                    <input type="email" value={form.client_email} onChange={e => setForm({ ...form, client_email: e.target.value })} className={inputClass} placeholder="client@email.com" />
                                </div>
                            </div>

                            <div>
                                <label className={labelClass}>Phone Number</label>
                                <input value={form.client_phone} onChange={e => setForm({ ...form, client_phone: e.target.value })} className={inputClass} placeholder="+39 ..." />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className={labelClass}>Pickup Location</label>
                                    <input value={form.pickup_location} onChange={e => setForm({ ...form, pickup_location: e.target.value })} className={inputClass} placeholder="Rome Fiumicino Airport" />
                                </div>
                                <div>
                                    <label className={labelClass}>Drop-off Location</label>
                                    <input value={form.dropoff_location} onChange={e => setForm({ ...form, dropoff_location: e.target.value })} className={inputClass} placeholder="Hotel in city center" />
                                </div>
                            </div>

                            <div>
                                <label className={labelClass}>Booking Date &amp; Time</label>
                                <input type="datetime-local" value={form.booking_datetime} onChange={e => setForm({ ...form, booking_datetime: e.target.value })} className={inputClass} />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className={labelClass}>Passengers</label>
                                    <input type="number" min="0" value={form.passengers} onChange={e => setForm({ ...form, passengers: e.target.value })} className={inputClass} placeholder="2" />
                                </div>
                                <div>
                                    <label className={labelClass}>Luggage</label>
                                    <input value={form.luggage} onChange={e => setForm({ ...form, luggage: e.target.value })} className={inputClass} placeholder="2" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className={labelClass}>Flight No</label>
                                    <input value={form.flight_no} onChange={e => setForm({ ...form, flight_no: e.target.value })} className={inputClass} placeholder="LY285" />
                                </div>
                                <div>
                                    <label className={labelClass}>Trip Type</label>
                                    <input
                                        list="trip-type-options"
                                        value={form.trip_type}
                                        onChange={e => setForm({ ...form, trip_type: e.target.value })}
                                        className={inputClass}
                                        placeholder="One-way, Private Transfer"
                                    />
                                    <datalist id="trip-type-options">
                                        {TRIP_TYPE_OPTIONS.map(t => <option key={t} value={t} />)}
                                    </datalist>
                                </div>
                            </div>

                            {/* Service Description / line items */}
                            <div>
                                <label className={labelClass}>Service Description</label>
                                <div className="space-y-2">
                                    {lineItems.map((item, idx) => (
                                        <div key={idx} className="flex flex-col gap-2 rounded-xl border border-gray-200 p-3 sm:flex-row sm:items-start">
                                            <div className="flex-1 space-y-2">
                                                <input
                                                    value={item.description}
                                                    onChange={e => setLineItems(prev => prev.map((li, i) => i === idx ? { ...li, description: e.target.value } : li))}
                                                    className={inputClass}
                                                    placeholder="Private chauffeur transfer: FCO Airport -> Florence NH Hotel"
                                                />
                                                <input
                                                    value={item.note || ''}
                                                    onChange={e => setLineItems(prev => prev.map((li, i) => i === idx ? { ...li, note: e.target.value } : li))}
                                                    className={`${inputClass} text-xs font-normal italic`}
                                                    placeholder="Note (optional) — e.g. Includes flight monitoring, meet & greet"
                                                />
                                            </div>
                                            <div className="flex items-center gap-2 sm:w-40">
                                                <input
                                                    type="number"
                                                    step="0.01"
                                                    min="0"
                                                    value={item.amount || ''}
                                                    onChange={e => setLineItems(prev => prev.map((li, i) => i === idx ? { ...li, amount: Number(e.target.value) } : li))}
                                                    className={inputClass}
                                                    placeholder="0.00"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setLineItems(prev => prev.length > 1 ? prev.filter((_, i) => i !== idx) : prev)}
                                                    className="shrink-0 text-red-400 hover:text-red-600 font-bold text-lg leading-none px-1"
                                                    title="Remove line"
                                                >✕</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setLineItems(prev => [...prev, { ...EMPTY_LINE_ITEM }])}
                                    className="mt-2 text-xs font-black uppercase tracking-widest text-gold hover:text-navy"
                                >+ Add Line</button>

                                <div className="mt-3 flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Total</span>
                                    <span className="text-lg font-black text-navy">{formatAmount(computedTotal, form.currency)}</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className={labelClass}>Currency</label>
                                    <select value={form.currency} onChange={e => setForm({ ...form, currency: e.target.value })} className={inputClass}>
                                        <option value="EUR">EUR €</option>
                                        <option value="USD">USD $</option>
                                        <option value="GBP">GBP £</option>
                                        <option value="CHF">CHF</option>
                                        <option value="AUD">AUD A$</option>
                                    </select>
                                </div>
                                <div>
                                    <label className={labelClass}>Payment Method</label>
                                    <select value={form.payment_method} onChange={e => setForm({ ...form, payment_method: e.target.value })} className={inputClass}>
                                        <option value="">—</option>
                                        <option value="Cash">Cash</option>
                                        <option value="Credit Card">Credit Card</option>
                                        <option value="Debit Card">Debit Card</option>
                                        <option value="PayPal">PayPal</option>
                                        <option value="Bank Transfer">Bank Transfer</option>
                                        <option value="Stripe">Stripe</option>
                                        <option value="Payoneer">Payoneer</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className={labelClass}>Ref Token</label>
                                    <input value={form.ref_token} onChange={e => setForm({ ...form, ref_token: e.target.value })} className={`${inputClass} font-mono`} placeholder="Payment gateway reference" />
                                </div>
                                <div>
                                    <label className={labelClass}>Payment Date</label>
                                    <input type="date" value={form.payment_date} onChange={e => setForm({ ...form, payment_date: e.target.value })} className={inputClass} />
                                </div>
                            </div>

                            <div>
                                <label className={labelClass}>Receipt Upload (image / PDF — multiple allowed)</label>
                                <input
                                    type="file"
                                    accept="image/*,application/pdf"
                                    multiple
                                    onChange={e => {
                                        const picked = Array.from(e.target.files || []);
                                        if (picked.length) setNewFiles(prev => [...prev, ...picked]);
                                        e.target.value = '';
                                    }}
                                    className="w-full text-sm text-gray-600 file:mr-4 file:rounded-xl file:border-0 file:bg-navy file:px-4 file:py-2.5 file:text-xs file:font-bold file:uppercase file:tracking-widest file:text-gold hover:file:bg-[#1a2e47]"
                                />

                                {/* Existing receipts (edit mode) */}
                                {existingReceipts.filter(r => !removedPaths.includes(r.path)).length > 0 && (
                                    <div className="mt-3 space-y-2">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Current Files</p>
                                        {existingReceipts.filter(r => !removedPaths.includes(r.path)).map(r => (
                                            <div key={r.path} className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-3 py-2">
                                                <button type="button" onClick={() => editingId && downloadSingle(editingId, r.path)} className="truncate text-xs font-semibold text-navy hover:text-gold text-left" title="Download">
                                                    📎 {r.filename}
                                                </button>
                                                <button type="button" onClick={() => setRemovedPaths(prev => [...prev, r.path])} className="ml-3 shrink-0 text-xs font-bold text-red-500 hover:text-red-700" title="Remove">✕ Remove</button>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Newly selected files */}
                                {newFiles.length > 0 && (
                                    <div className="mt-3 space-y-2">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">New Files To Upload</p>
                                        {newFiles.map((f, idx) => (
                                            <div key={idx} className="flex items-center justify-between rounded-xl border border-green-200 bg-green-50 px-3 py-2">
                                                <span className="truncate text-xs font-semibold text-green-800">⬆ {f.name}</span>
                                                <button type="button" onClick={() => setNewFiles(prev => prev.filter((_, i) => i !== idx))} className="ml-3 shrink-0 text-xs font-bold text-red-500 hover:text-red-700" title="Remove">✕</button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div>
                                <label className={labelClass}>Notes / Message</label>
                                <textarea value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} rows={3} className={`${inputClass} resize-none`} placeholder="Any additional notes for this invoice..." />
                            </div>

                            {formError && (
                                <div className="px-4 py-3 rounded-xl text-sm font-bold bg-red-50 text-red-700 border border-red-200">✕ {formError}</div>
                            )}

                            <div className="flex gap-3 pt-2">
                                <button onClick={handleSubmit} disabled={saving} className="flex-1 py-4 bg-[#0F1C2E] text-white font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-gold hover:text-navy transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg">
                                    {saving ? 'Saving...' : editingId ? 'Update Invoice' : 'Create Invoice'}
                                </button>
                                <button onClick={() => !saving && setFormOpen(false)} className="px-8 py-4 bg-gray-100 text-gray-500 font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-gray-200 transition-all">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ===== Send Email Modal ===== */}
            {sendTarget && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => !sending && setSendTarget(null)}>
                    <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-2xl" onClick={e => e.stopPropagation()}>
                        <div className="flex items-center justify-between px-8 py-6 bg-[#0F1C2E] rounded-t-[2rem]">
                            <div>
                                <h2 className="text-xl font-black text-white tracking-tight">Send {sendTarget.doc_type === 'receipt' ? 'Receipt' : 'Invoice'} to Client</h2>
                                <p className="text-[10px] font-bold text-gold/70 uppercase tracking-widest mt-0.5">{sendTarget.invoice_number} → {sendTarget.client_email}</p>
                            </div>
                            <button onClick={() => !sending && setSendTarget(null)} className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-all">✕</button>
                        </div>
                        <div className="p-8 space-y-5">
                            <p className="text-sm text-gray-600 leading-relaxed">
                                A branded email with the invoice details and a <strong>View &amp; Download (PDF)</strong> link will be sent to the client.
                                {getReceiptList(sendTarget).length > 0 ? ` The ${getReceiptList(sendTarget).length} uploaded receipt file(s) will be attached.` : ''}
                            </p>
                            <div>
                                <label className={labelClass}>Custom Message (optional)</label>
                                <textarea value={sendMessage} onChange={e => setSendMessage(e.target.value)} rows={5} className={`${inputClass} font-normal leading-relaxed resize-none`} placeholder="Leave blank to use the default professional message..." />
                            </div>
                            {sendResult && (
                                <div className={`px-4 py-3 rounded-xl text-sm font-bold ${sendResult.ok ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                                    {sendResult.ok ? '✓ ' : '✕ '}{sendResult.msg}
                                </div>
                            )}
                            <div className="flex gap-3 pt-1">
                                <button onClick={handleSend} disabled={sending || sendResult?.ok} className="flex-1 py-4 bg-[#0F1C2E] text-white font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-gold hover:text-navy transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg">
                                    {sending ? 'Sending...' : sendTarget.email_sent ? 'Resend Now' : 'Send to Client'}
                                </button>
                                <button onClick={() => !sending && setSendTarget(null)} className="px-8 py-4 bg-gray-100 text-gray-500 font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-gray-200 transition-all">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ===== Stats ===== */}
            <div className="grid grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm shadow-navy/5 flex flex-col justify-between">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Total Invoices</div>
                    <div className="flex items-end justify-between">
                        <span className="text-5xl font-black text-navy">{invoices.length}</span>
                        <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center"><span className="text-xl">🧾</span></div>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm shadow-navy/5 flex flex-col justify-between">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Total Billed (EUR ref.)</div>
                    <div className="flex items-end justify-between">
                        <span className="text-4xl font-black text-green-600">{formatAmount(totalAmount, 'EUR')}</span>
                        <div className="w-10 h-10 rounded-2xl bg-green-50 flex items-center justify-center"><span className="text-xl">💶</span></div>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm shadow-navy/5 flex flex-col justify-between">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Emailed to Client</div>
                    <div className="flex items-end justify-between">
                        <span className="text-5xl font-black text-gold">{invoices.filter(i => i.email_sent).length}</span>
                        <div className="w-10 h-10 rounded-2xl bg-yellow-50 flex items-center justify-center"><span className="text-xl">✉️</span></div>
                    </div>
                </div>
            </div>

            {/* ===== Table ===== */}
            <div className="bg-white rounded-[3rem] shadow-2xl shadow-navy/10 border border-gray-100 overflow-hidden">
                <div className="p-8 border-b border-gray-50 flex flex-wrap gap-4 justify-between items-center bg-gray-50/50">
                    <h3 className="text-lg font-bold text-navy flex items-center gap-3">
                        Invoices &amp; Receipts
                        <span className="text-[10px] bg-navy text-white px-3 py-1 rounded-full uppercase tracking-widest font-bold">{filtered.length}</span>
                    </h3>
                    <div className="flex items-center gap-3">
                        <input
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Search name, email, phone, number..."
                            className="px-4 py-3 w-72 border border-gray-200 rounded-xl text-sm text-navy font-semibold focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                        />
                        <button onClick={() => openCreate()} className="px-6 py-3 bg-[#0F1C2E] text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-gold hover:text-navy transition-all shadow-lg whitespace-nowrap">+ New Invoice</button>
                    </div>
                </div>

                <div className="overflow-x-auto min-h-[400px]">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center pt-32 gap-6">
                            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gold outline outline-4 outline-gold/10"></div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.5em] animate-pulse">Loading invoices...</p>
                        </div>
                    ) : filtered.length === 0 ? (
                        <div className="flex flex-col items-center justify-center pt-32 gap-4">
                            <span className="text-6xl">🧾</span>
                            <p className="text-sm font-bold text-navy opacity-30 uppercase tracking-widest">{search ? 'No matching invoices.' : 'No invoices yet. Create your first one.'}</p>
                        </div>
                    ) : (
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-navy text-white text-[9px] font-bold uppercase tracking-[0.3em]">
                                    <th className="px-8 py-6">Invoice #</th>
                                    <th className="px-8 py-6">Client</th>
                                    <th className="px-8 py-6">Trip</th>
                                    <th className="px-8 py-6 text-right">Amount</th>
                                    <th className="px-8 py-6 text-center">Status</th>
                                    <th className="px-8 py-6 text-center">Emailed</th>
                                    <th className="px-8 py-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {filtered.map(inv => (
                                    <tr key={inv.id} className="hover:bg-[#F8FAFC]/80 transition-all">
                                        <td className="px-8 py-7">
                                            <div className="font-mono font-black text-navy text-sm">{inv.invoice_number}</div>
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1">{inv.doc_type} · {formatDate(inv.created_at)}</div>
                                        </td>
                                        <td className="px-8 py-7">
                                            <div className="font-black text-navy text-sm leading-tight">{inv.client_name}</div>
                                            <div className="text-xs font-semibold text-gold/80 italic">{inv.client_email}</div>
                                            {inv.client_phone && <div className="text-[10px] font-bold text-gray-400 font-mono mt-0.5">{inv.client_phone}</div>}
                                        </td>
                                        <td className="px-8 py-7">
                                            <div className="text-xs font-bold text-navy max-w-[180px] leading-tight truncate">{inv.pickup_location || '—'}</div>
                                            <div className="text-xs text-gray-400 max-w-[180px] leading-tight truncate">↓ {inv.dropoff_location || '—'}</div>
                                        </td>
                                        <td className="px-8 py-7 text-right">
                                            <div className="font-black text-navy text-base">{formatAmount(inv.amount, inv.currency)}</div>
                                            {inv.payment_method && <div className="text-[10px] font-bold text-gray-400 mt-0.5">{inv.payment_method}</div>}
                                        </td>
                                        <td className="px-8 py-7 text-center">
                                            <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.15em] border ${STATUS_BADGE[inv.payment_status] || STATUS_BADGE.refunded}`}>{inv.payment_status}</span>
                                        </td>
                                        <td className="px-8 py-7 text-center">
                                            {inv.email_sent
                                                ? <span className="text-green-600 text-lg" title={inv.email_sent_at ? `Sent ${formatDate(inv.email_sent_at)}` : 'Sent'}>✓</span>
                                                : <span className="text-gray-300 text-lg" title="Not sent">—</span>}
                                        </td>
                                        <td className="px-8 py-7 text-right">
                                            <div className="flex gap-1.5 justify-end">
                                                <a href={`/invoice/${inv.public_token}`} target="_blank" rel="noopener noreferrer" className="h-9 w-9 flex items-center justify-center bg-gray-50 text-gray-400 rounded-xl hover:bg-navy hover:text-white transition-all" title="View / Print invoice">👁</a>
                                                {getReceiptList(inv).length > 0 && (
                                                    <button onClick={() => handleDownloadReceipts(inv)} className="relative h-9 w-9 flex items-center justify-center bg-gray-50 text-gray-400 rounded-xl hover:bg-blue-600 hover:text-white transition-all" title={`Download receipt file(s) (${getReceiptList(inv).length})`}>
                                                        ⬇
                                                        {getReceiptList(inv).length > 1 && (
                                                            <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-600 px-1 text-[9px] font-black text-white">{getReceiptList(inv).length}</span>
                                                        )}
                                                    </button>
                                                )}
                                                <button onClick={() => openSend(inv)} className="h-9 w-9 flex items-center justify-center bg-gray-50 text-gray-400 rounded-xl hover:bg-gold hover:text-navy transition-all" title={inv.email_sent ? 'Resend to client' : 'Send to client'}>✉</button>
                                                <button onClick={() => openEdit(inv)} className="h-9 w-9 flex items-center justify-center bg-gray-50 text-gray-400 rounded-xl hover:bg-navy hover:text-white transition-all" title="Edit">✎</button>
                                                <button onClick={() => handleDelete(inv)} className="h-9 w-9 flex items-center justify-center bg-gray-50 text-gray-400 rounded-xl hover:bg-red-900 hover:text-white transition-all" title="Delete">🗑</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </>
    );
}
