'use client';

import { useEffect, useState } from 'react';
import { updateBookingAction } from '@/app/actions/crm';

/* Full-record editor for an existing lead.
 *
 * Deliberately NOT the Confirm & Send modal: that one forces the status to
 * 'confirmed' and emails the client. This saves the record and nothing else,
 * so a typo on an already-confirmed booking can be fixed without re-notifying
 * anyone. Every column the CRM is allowed to write is exposed here; `id` and
 * `created_at` are shown read-only for reference. */

interface EditLeadModalProps {
    booking: any | null;
    onClose: () => void;
    onSaved: (updated: any) => void;
}

type TripSelection = 'outbound' | 'both' | 'roundtrip';

const INPUT =
    'w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20';
const LABEL = 'block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2';
const SECTION = 'p-5 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-4';
const SECTION_TITLE = 'text-[10px] font-black uppercase tracking-widest text-gold';

/** <input type="datetime-local"> only accepts YYYY-MM-DDTHH:mm. Stored values
 *  may be that already, or a full ISO timestamp — normalise without shifting
 *  the clock, so an edit never silently moves a pickup time. */
function toLocalInput(value: unknown): string {
    if (!value) return '';
    const s = String(value);
    const m = s.match(/^(\d{4}-\d{2}-\d{2})[T ](\d{2}:\d{2})/);
    return m ? `${m[1]}T${m[2]}` : '';
}

const str = (v: unknown) => (v === null || v === undefined ? '' : String(v));

export default function EditLeadModal({ booking, onClose, onSaved }: EditLeadModalProps) {
    const [f, setF] = useState<Record<string, any>>({});
    const [saving, setSaving] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [notice, setNotice] = useState<string | null>(null);

    // Re-seed whenever a different lead is opened.
    useEffect(() => {
        if (!booking) return;
        setErrorMsg(null);
        setNotice(null);
        setF({
            full_name: str(booking.full_name),
            email: str(booking.email),
            phone: str(booking.phone),
            customer_message: str(booking.customer_message),
            status: str(booking.status) || 'pending',
            source_form: str(booking.source_form),
            source_site: str(booking.source_site),
            locale: str(booking.locale),
            service_type: str(booking.service_type),
            trip_selection: (str(booking.trip_selection) || 'outbound') as TripSelection,
            pickup_location: str(booking.pickup_location),
            dropoff_location: str(booking.dropoff_location),
            booking_datetime: toLocalInput(booking.booking_datetime),
            flight_number: str(booking.flight_number),
            passengers: str(booking.passengers),
            adults: str(booking.adults),
            children: str(booking.children),
            child_ages: str(booking.child_ages),
            luggage: str(booking.luggage),
            luggage_cabin: str(booking.luggage_cabin),
            luggage_hold: str(booking.luggage_hold),
            return_pickup_location: str(booking.return_pickup_location),
            return_dropoff_location: str(booking.return_dropoff_location),
            return_datetime: toLocalInput(booking.return_datetime),
            return_flight_number: str(booking.return_flight_number),
            admin_notes: str(booking.admin_notes),
        });
    }, [booking]);

    if (!booking) return null;

    const set = (k: string, v: unknown) => setF((prev) => ({ ...prev, [k]: v }));
    const hasReturn = f.trip_selection !== 'outbound';

    /** '' -> null so clearing a field actually clears it in the database,
     *  rather than writing an empty string. */
    const orNull = (v: unknown): string | null => {
        const t = v == null ? '' : typeof v === 'string' ? v.trim() : String(v);
        return t === '' ? null : t;
    };
    const numOrNull = (v: unknown) => {
        const t = String(v ?? '').trim();
        if (t === '') return null;
        const n = Number(t);
        return Number.isFinite(n) ? n : null;
    };

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setErrorMsg(null);
        setNotice(null);

        if (!String(f.full_name || '').trim()) return setErrorMsg('Customer name is required.');
        if (!String(f.pickup_location || '').trim() || !String(f.dropoff_location || '').trim())
            return setErrorMsg('Pickup and drop-off locations are required.');
        if (!f.booking_datetime) return setErrorMsg('Trip date and time are required.');
        if (hasReturn && !f.return_datetime)
            return setErrorMsg('This trip type needs a return date and time, or switch it to One-Way Transfer.');

        setSaving(true);
        try {
            const res = await updateBookingAction(booking.id, {
                full_name: String(f.full_name).trim(),
                email: orNull(f.email),
                phone: orNull(f.phone),
                customer_message: orNull(f.customer_message),
                status: String(f.status),
                source_form: orNull(f.source_form),
                source_site: orNull(f.source_site),
                locale: orNull(f.locale),
                service_type: orNull(f.service_type),
                trip_selection: f.trip_selection as TripSelection,
                pickup_location: String(f.pickup_location).trim(),
                dropoff_location: String(f.dropoff_location).trim(),
                booking_datetime: String(f.booking_datetime),
                flight_number: orNull(f.flight_number),
                passengers: numOrNull(f.passengers),
                adults: numOrNull(f.adults),
                children: numOrNull(f.children),
                child_ages: orNull(f.child_ages),
                luggage: orNull(f.luggage),
                luggage_cabin: orNull(f.luggage_cabin),
                luggage_hold: orNull(f.luggage_hold),
                return_pickup_location: hasReturn ? orNull(f.return_pickup_location) : null,
                return_dropoff_location: hasReturn ? orNull(f.return_dropoff_location) : null,
                return_datetime: hasReturn ? orNull(f.return_datetime) : null,
                return_flight_number: hasReturn ? orNull(f.return_flight_number) : null,
                admin_notes: orNull(f.admin_notes),
            });

            if (res?.skippedColumns?.length) {
                setNotice(
                    `Saved. These columns are not in the database yet and were skipped: ${res.skippedColumns.join(', ')}.`
                );
            }
            onSaved(res?.data ?? { ...booking, ...f, has_return_trip: hasReturn });
            if (!res?.skippedColumns?.length) onClose();
        } catch (err) {
            console.error('Edit lead error:', err);
            setErrorMsg(err instanceof Error ? err.message : 'Could not save changes.');
        } finally {
            setSaving(false);
        }
    }

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-[2rem] shadow-2xl w-full max-w-3xl max-h-[92vh] flex flex-col overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-8 py-5 bg-[#0F1C2E] shrink-0">
                    <div>
                        <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
                            <span>✎ Edit Lead</span>
                            <span className="text-[10px] font-bold bg-gold/20 text-gold border border-gold/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                                No Email Sent
                            </span>
                        </h2>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">
                            Saves changes only — the client is not notified
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-all"
                    >
                        ✕
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6 overflow-y-auto flex-1">
                    {errorMsg && (
                        <div className="p-4 bg-red-50 border-2 border-red-200 rounded-2xl text-xs font-bold text-red-700">
                            {errorMsg}
                        </div>
                    )}
                    {notice && (
                        <div className="p-4 bg-amber-50 border-2 border-amber-300 rounded-2xl text-xs font-bold text-amber-900">
                            {notice}
                        </div>
                    )}

                    {/* Status, source, locale */}
                    <div className={SECTION}>
                        <p className={SECTION_TITLE}>Status &amp; Source</p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label className={LABEL}>Status</label>
                                <select value={f.status} onChange={(e) => set('status', e.target.value)} className={INPUT}>
                                    <option value="pending">Pending</option>
                                    <option value="confirmed">Confirmed</option>
                                    <option value="completed">Completed</option>
                                    <option value="cancelled">Cancelled</option>
                                </select>
                            </div>
                            <div>
                                <label className={LABEL}>Source Form</label>
                                <input value={f.source_form} onChange={(e) => set('source_form', e.target.value)} className={INPUT} placeholder="e.g. WhatsApp, Book Now Page" />
                            </div>
                            <div>
                                <label className={LABEL}>Source Site</label>
                                <input value={f.source_site} onChange={(e) => set('source_site', e.target.value)} className={INPUT} placeholder="e.g. italytaxiservice" />
                            </div>
                            <div>
                                <label className={LABEL}>Locale</label>
                                <input value={f.locale} onChange={(e) => set('locale', e.target.value)} className={INPUT} placeholder="e.g. en, it" />
                            </div>
                            <div className="sm:col-span-2">
                                <label className={LABEL}>Service Type</label>
                                <input value={f.service_type} onChange={(e) => set('service_type', e.target.value)} className={INPUT} placeholder="e.g. Airport Transfer" />
                            </div>
                        </div>
                    </div>

                    {/* Customer */}
                    <div className={SECTION}>
                        <p className={SECTION_TITLE}>Customer</p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="sm:col-span-2">
                                <label className={LABEL}>Full Name *</label>
                                <input value={f.full_name} onChange={(e) => set('full_name', e.target.value)} className={INPUT} />
                            </div>
                            <div>
                                <label className={LABEL}>Email Address</label>
                                <input type="email" value={f.email} onChange={(e) => set('email', e.target.value)} className={INPUT} />
                            </div>
                            <div>
                                <label className={LABEL}>Phone / WhatsApp</label>
                                <input value={f.phone} onChange={(e) => set('phone', e.target.value)} className={INPUT} />
                            </div>
                            <div className="sm:col-span-2">
                                <label className={LABEL}>Customer Message</label>
                                <textarea rows={2} value={f.customer_message} onChange={(e) => set('customer_message', e.target.value)} className={`${INPUT} resize-none`} />
                            </div>
                        </div>
                    </div>

                    {/* Trip type */}
                    <div className={SECTION}>
                        <p className={SECTION_TITLE}>Trip Type</p>
                        <div className="grid sm:grid-cols-3 gap-3">
                            {([
                                { value: 'outbound', label: 'One-Way Transfer', desc: 'Single trip' },
                                { value: 'both', label: 'Two Transfers', desc: 'Two distinct legs' },
                                { value: 'roundtrip', label: 'Round Trip', desc: 'Outbound + Return' },
                            ] as const).map((opt) => (
                                <button
                                    key={opt.value}
                                    type="button"
                                    onClick={() => set('trip_selection', opt.value)}
                                    className={`p-3 rounded-xl border-2 text-left transition-all ${
                                        f.trip_selection === opt.value
                                            ? 'border-gold bg-gold/10'
                                            : 'border-gray-200 bg-white hover:border-gray-300'
                                    }`}
                                >
                                    <p className="font-black text-navy text-sm">{opt.label}</p>
                                    <p className="text-[11px] text-gray-500 font-semibold">{opt.desc}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Outbound */}
                    <div className={SECTION}>
                        <p className={SECTION_TITLE}>Outbound Trip</p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label className={LABEL}>Pickup Location *</label>
                                <input value={f.pickup_location} onChange={(e) => set('pickup_location', e.target.value)} className={INPUT} />
                            </div>
                            <div>
                                <label className={LABEL}>Drop-off Location *</label>
                                <input value={f.dropoff_location} onChange={(e) => set('dropoff_location', e.target.value)} className={INPUT} />
                            </div>
                            <div>
                                <label className={LABEL}>Date &amp; Time *</label>
                                <input type="datetime-local" value={f.booking_datetime} onChange={(e) => set('booking_datetime', e.target.value)} className={INPUT} />
                            </div>
                            <div>
                                <label className={LABEL}>Flight Number</label>
                                <input value={f.flight_number} onChange={(e) => set('flight_number', e.target.value)} className={INPUT} placeholder="e.g. AZ610" />
                            </div>
                        </div>
                    </div>

                    {/* Passengers & luggage */}
                    <div className={SECTION}>
                        <p className={SECTION_TITLE}>Passengers &amp; Luggage</p>
                        <div className="grid sm:grid-cols-3 gap-4">
                            <div>
                                <label className={LABEL}>Passengers</label>
                                <input type="number" min={0} value={f.passengers} onChange={(e) => set('passengers', e.target.value)} className={INPUT} />
                            </div>
                            <div>
                                <label className={LABEL}>Adults</label>
                                <input type="number" min={0} value={f.adults} onChange={(e) => set('adults', e.target.value)} className={INPUT} />
                            </div>
                            <div>
                                <label className={LABEL}>Children</label>
                                <input type="number" min={0} value={f.children} onChange={(e) => set('children', e.target.value)} className={INPUT} />
                            </div>
                            <div className="sm:col-span-3">
                                <label className={LABEL}>Child Ages</label>
                                <input value={f.child_ages} onChange={(e) => set('child_ages', e.target.value)} className={INPUT} placeholder="e.g. 3, 7" />
                            </div>
                            <div className="sm:col-span-3">
                                <label className={LABEL}>Luggage</label>
                                <input value={f.luggage} onChange={(e) => set('luggage', e.target.value)} className={INPUT} />
                            </div>
                            <div>
                                <label className={LABEL}>Cabin Bags</label>
                                <input value={f.luggage_cabin} onChange={(e) => set('luggage_cabin', e.target.value)} className={INPUT} />
                            </div>
                            <div>
                                <label className={LABEL}>Hold Bags</label>
                                <input value={f.luggage_hold} onChange={(e) => set('luggage_hold', e.target.value)} className={INPUT} />
                            </div>
                        </div>
                    </div>

                    {/* Return leg */}
                    {hasReturn && (
                        <div className={SECTION}>
                            <p className={SECTION_TITLE}>Return Trip</p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className={LABEL}>Return Pickup</label>
                                    <input value={f.return_pickup_location} onChange={(e) => set('return_pickup_location', e.target.value)} className={INPUT} />
                                </div>
                                <div>
                                    <label className={LABEL}>Return Drop-off</label>
                                    <input value={f.return_dropoff_location} onChange={(e) => set('return_dropoff_location', e.target.value)} className={INPUT} />
                                </div>
                                <div>
                                    <label className={LABEL}>Return Date &amp; Time</label>
                                    <input type="datetime-local" value={f.return_datetime} onChange={(e) => set('return_datetime', e.target.value)} className={INPUT} />
                                </div>
                                <div>
                                    <label className={LABEL}>Return Flight Number</label>
                                    <input value={f.return_flight_number} onChange={(e) => set('return_flight_number', e.target.value)} className={INPUT} />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Admin notes */}
                    <div className={SECTION}>
                        <p className={SECTION_TITLE}>Internal</p>
                        <div>
                            <label className={LABEL}>Admin Notes</label>
                            <textarea rows={3} value={f.admin_notes} onChange={(e) => set('admin_notes', e.target.value)} className={`${INPUT} resize-none`} />
                        </div>
                    </div>

                    {/* Read-only reference */}
                    <div className="px-5 py-4 bg-white rounded-2xl border border-dashed border-gray-200">
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                            Record Reference (read-only)
                        </p>
                        <p className="text-[11px] font-mono text-gray-500 break-all">ID: {booking.id}</p>
                        <p className="text-[11px] font-mono text-gray-500">
                            Created: {booking.created_at ? new Date(booking.created_at).toLocaleString('en-GB') : '—'}
                        </p>
                    </div>
                </form>

                {/* Footer */}
                <div className="flex items-center justify-end gap-3 px-8 py-5 bg-[#F8FAFC] border-t border-gray-100 shrink-0">
                    <button
                        type="button"
                        onClick={onClose}
                        disabled={saving}
                        className="px-6 py-3 rounded-xl border border-gray-200 bg-white text-gray-700 font-bold text-xs uppercase tracking-widest hover:bg-gray-50 transition-all disabled:opacity-50"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        disabled={saving}
                        className="px-8 py-3 rounded-xl bg-gold text-navy font-black text-xs uppercase tracking-widest hover:bg-yellow-400 transition-all disabled:opacity-50"
                    >
                        {saving ? 'Saving…' : 'Save Changes'}
                    </button>
                </div>
            </div>
        </div>
    );
}
