'use server';

import { randomBytes } from 'crypto';
import { getServiceSupabase } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { sendEmail } from '@/lib/mailer';
import {
    Invoice,
    ReceiptFile,
    buildInvoiceEmailHtml,
    getReceiptList,
    COMPANY_NAME,
} from '@/lib/invoice';

const BUCKET = 'invoice-receipts';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'italytaxiservicee@gmail.com';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

type ServiceClient = ReturnType<typeof getServiceSupabase>;

async function generateInvoiceNumber(supabase: ServiceClient): Promise<string> {
    const year = new Date().getFullYear();
    const prefix = `INV-${year}-`;
    const { data } = await supabase
        .from('invoices')
        .select('invoice_number')
        .like('invoice_number', `${prefix}%`)
        .order('invoice_number', { ascending: false })
        .limit(1);

    let next = 1;
    if (data && data.length > 0) {
        const last = parseInt(String(data[0].invoice_number).slice(prefix.length), 10);
        if (!isNaN(last)) next = last + 1;
    }
    return `${prefix}${String(next).padStart(4, '0')}`;
}

/** Reads a single field from FormData, returning null for empty strings. */
function field(formData: FormData, key: string): string | null {
    const v = formData.get(key);
    if (v === null || typeof v !== 'string') return null;
    const trimmed = v.trim();
    return trimmed === '' ? null : trimmed;
}

/**
 * A datetime-local input yields a naive wall-clock string (e.g. "2026-06-08T14:30")
 * with no timezone. We pin it to UTC so it is stored as that exact wall-clock
 * regardless of the database session timezone — and read back the same way by
 * the UTC formatters. Values that already carry a timezone are left untouched.
 */
function bookingDateTime(formData: FormData): string | null {
    const raw = field(formData, 'booking_datetime');
    if (!raw) return null;
    // Already has an offset (Z or ±hh:mm)? Trust it.
    if (/[zZ]$|[+-]\d{2}:?\d{2}$/.test(raw)) return raw;
    const withSeconds = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(raw) ? `${raw}:00` : raw;
    return `${withSeconds}Z`;
}

/** Uploads every receipt file in the form and returns their storage entries. */
async function uploadReceiptFiles(
    supabase: ServiceClient,
    invoiceNumber: string,
    formData: FormData,
): Promise<ReceiptFile[]> {
    const files = formData
        .getAll('receipt_file')
        .filter((f): f is File => typeof f !== 'string' && !!(f as File).size);

    const uploaded: ReceiptFile[] = [];
    for (const blob of files) {
        const safeName = blob.name.replace(/[^a-zA-Z0-9._-]/g, '_');
        const rand = Math.random().toString(36).slice(2, 8);
        const path = `${invoiceNumber}/${Date.now()}-${rand}-${safeName}`;
        const buffer = Buffer.from(await blob.arrayBuffer());

        const { error } = await supabase.storage
            .from(BUCKET)
            .upload(path, buffer, {
                contentType: blob.type || 'application/octet-stream',
                upsert: false,
            });

        if (error) {
            console.error('[Invoice] Receipt upload failed:', error);
            throw new Error('Receipt upload failed: ' + error.message);
        }
        uploaded.push({ path, filename: blob.name });
    }
    return uploaded;
}

// ---------------------------------------------------------------------------
// CRUD
// ---------------------------------------------------------------------------

export async function listInvoicesAction(): Promise<Invoice[]> {
    const supabase = getServiceSupabase();
    const { data, error } = await supabase
        .from('invoices')
        .select('*')
        .order('created_at', { ascending: false });
    if (error) throw new Error(error.message);
    return (data || []) as Invoice[];
}

export async function createInvoiceAction(formData: FormData): Promise<Invoice> {
    const supabase = getServiceSupabase();

    const clientName = field(formData, 'client_name');
    const clientEmail = field(formData, 'client_email');
    if (!clientName) throw new Error('Client name is required.');
    if (!clientEmail) throw new Error('Client email is required.');

    const invoiceNumber = await generateInvoiceNumber(supabase);
    const publicToken = randomBytes(16).toString('hex');

    const uploaded = await uploadReceiptFiles(supabase, invoiceNumber, formData);

    const record = {
        invoice_number: invoiceNumber,
        public_token: publicToken,
        doc_type: field(formData, 'doc_type') || 'invoice',
        client_name: clientName,
        client_email: clientEmail,
        client_phone: field(formData, 'client_phone'),
        pickup_location: field(formData, 'pickup_location'),
        dropoff_location: field(formData, 'dropoff_location'),
        booking_datetime: bookingDateTime(formData),
        amount: Number(field(formData, 'amount') || 0),
        currency: field(formData, 'currency') || 'EUR',
        payment_method: field(formData, 'payment_method'),
        payment_status: field(formData, 'payment_status') || 'paid',
        notes: field(formData, 'notes'),
        booking_id: field(formData, 'booking_id'),
        receipt_files: uploaded,
    };

    const { data, error } = await supabase.from('invoices').insert([record]).select('*').single();
    if (error) {
        console.error('[Invoice] Create failed:', error);
        throw new Error(error.message);
    }

    revalidatePath('/crm');
    return data as Invoice;
}

export async function updateInvoiceAction(id: string, formData: FormData): Promise<Invoice> {
    const supabase = getServiceSupabase();
    if (!id) throw new Error('Invoice id is required.');

    const clientName = field(formData, 'client_name');
    const clientEmail = field(formData, 'client_email');
    if (!clientName) throw new Error('Client name is required.');
    if (!clientEmail) throw new Error('Client email is required.');

    // Load existing to know invoice_number (for upload path) and old receipt.
    const { data: existing, error: loadErr } = await supabase
        .from('invoices').select('*').eq('id', id).single();
    if (loadErr || !existing) throw new Error('Invoice not found.');

    const update: Record<string, unknown> = {
        doc_type: field(formData, 'doc_type') || 'invoice',
        client_name: clientName,
        client_email: clientEmail,
        client_phone: field(formData, 'client_phone'),
        pickup_location: field(formData, 'pickup_location'),
        dropoff_location: field(formData, 'dropoff_location'),
        booking_datetime: bookingDateTime(formData),
        amount: Number(field(formData, 'amount') || 0),
        currency: field(formData, 'currency') || 'EUR',
        payment_method: field(formData, 'payment_method'),
        payment_status: field(formData, 'payment_status') || 'paid',
        notes: field(formData, 'notes'),
    };

    // Receipt files: keep existing ones (minus any the admin removed), then
    // append any newly uploaded files. Migrates legacy single-file rows too.
    let removedPaths: string[] = [];
    const removedRaw = field(formData, 'removed_receipts');
    if (removedRaw) {
        try {
            const parsed = JSON.parse(removedRaw);
            if (Array.isArray(parsed)) removedPaths = parsed.filter((p): p is string => typeof p === 'string');
        } catch { /* ignore malformed input */ }
    }

    const kept = getReceiptList(existing as Invoice).filter(f => !removedPaths.includes(f.path));
    const uploaded = await uploadReceiptFiles(supabase, existing.invoice_number, formData);
    update.receipt_files = [...kept, ...uploaded];
    // Legacy columns are fully superseded by receipt_files now.
    update.receipt_path = null;
    update.receipt_filename = null;

    if (removedPaths.length > 0) {
        await supabase.storage.from(BUCKET).remove(removedPaths).catch(() => { });
    }

    const { data, error } = await supabase
        .from('invoices').update(update).eq('id', id).select('*').single();
    if (error) throw new Error(error.message);

    revalidatePath('/crm');
    return data as Invoice;
}

export async function deleteInvoiceAction(id: string): Promise<{ success: true }> {
    const supabase = getServiceSupabase();
    const { data: existing } = await supabase
        .from('invoices').select('receipt_files, receipt_path, receipt_filename').eq('id', id).single();

    const { error } = await supabase.from('invoices').delete().eq('id', id);
    if (error) throw new Error(error.message);

    if (existing) {
        const paths = getReceiptList(existing as Invoice).map(f => f.path);
        if (paths.length > 0) {
            await supabase.storage.from(BUCKET).remove(paths).catch(() => { });
        }
    }

    revalidatePath('/crm');
    return { success: true };
}

/** Returns time-limited signed URLs for every uploaded receipt file. */
export async function getReceiptUrlsAction(id: string): Promise<{ path: string; filename: string; url: string }[]> {
    const supabase = getServiceSupabase();
    const { data: inv, error } = await supabase
        .from('invoices').select('receipt_files, receipt_path, receipt_filename').eq('id', id).single();
    if (error || !inv) throw new Error('Invoice not found.');

    const files = getReceiptList(inv as Invoice);
    if (files.length === 0) throw new Error('No receipt files on this invoice.');

    const out: { path: string; filename: string; url: string }[] = [];
    for (const f of files) {
        const { data } = await supabase.storage.from(BUCKET).createSignedUrl(f.path, 60 * 60);
        if (data?.signedUrl) out.push({ path: f.path, filename: f.filename, url: data.signedUrl });
    }
    if (out.length === 0) throw new Error('Could not generate download links.');
    return out;
}

// ---------------------------------------------------------------------------
// Email
// ---------------------------------------------------------------------------

export async function sendInvoiceEmailAction(id: string, customMessage?: string): Promise<{ success: true }> {
    const supabase = getServiceSupabase();
    const { data: invoice, error } = await supabase
        .from('invoices').select('*').eq('id', id).single();
    if (error || !invoice) throw new Error('Invoice not found.');

    const inv = invoice as Invoice;
    if (!inv.client_email) throw new Error('This invoice has no client email.');

    const docLabel = inv.doc_type === 'receipt' ? 'Receipt' : 'Invoice';

    // Attach every uploaded receipt file, if present.
    const attachments: { filename: string; content: Buffer }[] = [];
    for (const f of getReceiptList(inv)) {
        try {
            const { data: fileData } = await supabase.storage.from(BUCKET).download(f.path);
            if (fileData) {
                const buffer = Buffer.from(await fileData.arrayBuffer());
                attachments.push({ filename: f.filename || 'receipt', content: buffer });
            }
        } catch (e) {
            console.error('[Invoice] Could not attach receipt file:', e);
        }
    }

    await sendEmail({
        to: inv.client_email,
        replyTo: ADMIN_EMAIL,
        subject: `Your ${COMPANY_NAME} ${docLabel} — ${inv.invoice_number}`,
        html: buildInvoiceEmailHtml(inv, customMessage),
        ...(attachments.length ? { attachments } : {}),
    });

    await supabase
        .from('invoices')
        .update({ email_sent: true, email_sent_at: new Date().toISOString() })
        .eq('id', id);

    revalidatePath('/crm');
    return { success: true };
}
