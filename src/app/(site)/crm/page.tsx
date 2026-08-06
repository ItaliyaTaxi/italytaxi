'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { deleteBookingAction, deleteContactAction, confirmBookingAction, sendClientEmailAction } from '@/app/actions/crm';
import InvoicesPanel, { InvoicePrefill } from '@/components/crm/InvoicesPanel';
import DriversPanel from '@/components/crm/DriversPanel';
import DispatchDriversModal from '@/components/crm/DispatchDriversModal';

/** A confirmed booking whose trip date/time has already passed is treated as
 *  "completed" for display purposes — derived live from booking_datetime
 *  rather than a separate DB flag, so a booking rolls from Confirmed into
 *  Completed automatically the moment its trip time passes, with nothing to
 *  update manually. Pending/cancelled bookings are unaffected. */
function getEffectiveStatus(booking: any, now: Date): 'pending' | 'confirmed' | 'completed' | 'cancelled' {
    if (booking.status === 'cancelled') return 'cancelled';
    if (booking.status !== 'confirmed') return booking.status;
    const tripDate = new Date(booking.booking_datetime);
    if (!isNaN(tripDate.getTime()) && tripDate < now) return 'completed';
    return 'confirmed';
}

export default function CRMPage() {
    const [bookings, setBookings] = useState<any[]>([]);
    const [contacts, setContacts] = useState<any[]>([]);
    const [activeTab, setActiveTab] = useState<'bookings' | 'contacts' | 'invoices' | 'drivers'>('bookings');
    const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'confirmed' | 'completed' | 'cancelled'>('all');
    const [invoicePrefill, setInvoicePrefill] = useState<InvoicePrefill | null>(null);
    const [dispatchBooking, setDispatchBooking] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);
    const [viewItem, setViewItem] = useState<{ type: 'booking' | 'contact'; data: any } | null>(null);
    const [emailModal, setEmailModal] = useState<{ to: string; name: string; defaultSubject: string } | null>(null);
    const [emailSubject, setEmailSubject] = useState('');
    const [emailBody, setEmailBody] = useState('');
    const [emailSending, setEmailSending] = useState(false);
    const [emailResult, setEmailResult] = useState<{ ok: boolean; msg: string } | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [dateFilter, setDateFilter] = useState('');
    const [confirmBooking, setConfirmBooking] = useState<any | null>(null);
    const [confirmForm, setConfirmForm] = useState<any>(null);
    const [confirming, setConfirming] = useState(false);
    const [confirmResult, setConfirmResult] = useState<{ ok: boolean; msg: string } | null>(null);
    const router = useRouter();

    useEffect(() => {
        const checkUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                router.push('/crm/login');
            } else {
                setUser(session.user);
                fetchAll();
            }
        };

        async function fetchAll() {
            setLoading(true);
            const [bookingsRes, contactsRes] = await Promise.all([
                supabase.from('bookings').select('*').order('created_at', { ascending: false }),
                supabase.from('contacts').select('*').order('created_at', { ascending: false }),
            ]);
            if (bookingsRes.data) setBookings(bookingsRes.data);
            if (contactsRes.data) setContacts(contactsRes.data);
            setLoading(false);
        }

        checkUser();
    }, [router]);

    async function handleLogout() {
        await supabase.auth.signOut();
        router.push('/crm/login');
    }

    // Opens the Confirm & Send modal, pre-filled with the booking's current
    // details (including any return-trip info the client originally
    // submitted) so the admin can review, correct, or extend them before the
    // confirmation email goes out.
    function openConfirmModal(booking: any) {
        setConfirmResult(null);
        setConfirmBooking(booking);
        setConfirmForm({
            full_name: booking.full_name || '',
            email: booking.email || '',
            phone: booking.phone || '',
            pickup_location: booking.pickup_location || '',
            dropoff_location: booking.dropoff_location || '',
            booking_datetime: toDatetimeLocal(booking.booking_datetime),
            flight_number: booking.flight_number || '',
            passengers: booking.passengers ?? 1,
            luggage: booking.luggage || '',
            trip_selection: booking.trip_selection || (booking.has_return_trip ? 'roundtrip' : 'outbound'),
            return_pickup_location: booking.return_pickup_location || '',
            return_dropoff_location: booking.return_dropoff_location || '',
            return_datetime: toDatetimeLocal(booking.return_datetime),
            return_flight_number: booking.return_flight_number || '',
            admin_notes: booking.admin_notes || '',
        });
    }

    function toDatetimeLocal(raw: string | null | undefined): string {
        if (!raw) return '';
        // booking_datetime is stored as a raw "YYYY-MM-DDTHH:mm" string from the
        // form already — pass it straight through if it looks right, otherwise
        // derive it from a real Date so the <input type="datetime-local"> can use it.
        if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(raw)) return raw.slice(0, 16);
        const d = new Date(raw);
        if (isNaN(d.getTime())) return '';
        const pad = (n: number) => String(n).padStart(2, '0');
        return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
    }

    async function handleConfirmSend() {
        if (!confirmBooking || !confirmForm) return;
        setConfirming(true);
        setConfirmResult(null);
        try {
            await confirmBookingAction(confirmBooking.id, {
                full_name: confirmForm.full_name,
                email: confirmForm.email,
                phone: confirmForm.phone,
                pickup_location: confirmForm.pickup_location,
                dropoff_location: confirmForm.dropoff_location,
                booking_datetime: confirmForm.booking_datetime,
                flight_number: confirmForm.flight_number,
                passengers: Number(confirmForm.passengers) || 1,
                luggage: confirmForm.luggage,
                trip_selection: confirmForm.trip_selection,
                return_pickup_location: confirmForm.return_pickup_location,
                return_dropoff_location: confirmForm.return_dropoff_location,
                return_datetime: confirmForm.return_datetime,
                return_flight_number: confirmForm.return_flight_number,
                admin_notes: confirmForm.admin_notes,
            });
            setBookings(bookings.map(b => b.id === confirmBooking.id ? { ...b, ...confirmForm, status: 'confirmed', has_return_trip: confirmForm.trip_selection !== 'outbound' } : b));
            setConfirmResult({ ok: true, msg: 'Confirmed — email sent to client.' });
            setTimeout(() => { setConfirmBooking(null); setConfirmForm(null); }, 1200);
        } catch (e: any) {
            setConfirmResult({ ok: false, msg: e.message || 'Failed to confirm booking.' });
        } finally {
            setConfirming(false);
        }
    }

    async function updateStatus(id: string, status: string) {
        const { error } = await supabase.from('bookings').update({ status }).eq('id', id);
        if (!error) setBookings(bookings.map(b => b.id === id ? { ...b, status } : b));
    }

    async function deleteBooking(id: string) {
        if (!confirm('Delete this booking? This cannot be undone.')) return;
        try {
            await deleteBookingAction(id);
            setBookings(bookings.filter(b => b.id !== id));
        } catch (error: any) {
            alert('Error: Could not delete booking. ' + error.message);
        }
    }

    async function deleteContact(id: string) {
        if (!confirm('Delete this contact message? This cannot be undone.')) return;
        try {
            await deleteContactAction(id);
            setContacts(contacts.filter(c => c.id !== id));
        } catch (error: any) {
            alert('Error: Could not delete contact message. ' + error.message);
        }
    }

    function createInvoiceFromBooking(booking: any) {
        setInvoicePrefill({
            client_name: booking.full_name,
            client_email: booking.email,
            client_phone: booking.phone || '',
            pickup_location: booking.pickup_location || '',
            dropoff_location: booking.dropoff_location || '',
            booking_datetime: booking.booking_datetime || '',
            passengers: booking.passengers ?? undefined,
            luggage: booking.luggage || '',
            booking_id: booking.id,
        });
        setActiveTab('invoices');
    }

    function openEmailModal(to: string, name: string, defaultSubject: string) {
        setEmailSubject(defaultSubject);
        setEmailBody('');
        setEmailResult(null);
        setEmailModal({ to, name, defaultSubject });
    }

    async function handleSendEmail() {
        if (!emailModal || !emailSubject.trim() || !emailBody.trim()) return;
        setEmailSending(true);
        setEmailResult(null);
        try {
            await sendClientEmailAction(emailModal.to, emailModal.name, emailSubject, emailBody);
            setEmailResult({ ok: true, msg: `Email sent to ${emailModal.to}` });
        } catch (e: any) {
            setEmailResult({ ok: false, msg: e.message || 'Failed to send email.' });
        } finally {
            setEmailSending(false);
        }
    }

    if (!user && !loading) return null;

    // Computed once per render — used to derive completed/upcoming status
    // and the "this week" list below. Cheap enough not to need memoizing.
    const now = new Date();
    const weekFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

    const stats = {
        total: bookings.length,
        pending: bookings.filter(b => b.status === 'pending').length,
        confirmed: bookings.filter(b => getEffectiveStatus(b, now) === 'confirmed').length,
        completed: bookings.filter(b => getEffectiveStatus(b, now) === 'completed').length,
        cancelled: bookings.filter(b => b.status === 'cancelled').length,
    };

    // Confirmed bookings whose trip falls within the next 7 days, soonest
    // first — the dashboard's "This Week's Transfers" widget.
    const thisWeekTransfers = bookings
        .filter(b => getEffectiveStatus(b, now) === 'confirmed')
        .filter(b => {
            const d = new Date(b.booking_datetime);
            return !isNaN(d.getTime()) && d >= now && d <= weekFromNow;
        })
        .sort((a, b) => new Date(a.booking_datetime).getTime() - new Date(b.booking_datetime).getTime());

    // Bookings shown in the table — filtered by status card (using the
    // derived completed/confirmed split), then by the name/email/phone
    // search box, then by the selected trip date.
    const visibleBookings = bookings
        .filter(b => statusFilter === 'all' || getEffectiveStatus(b, now) === statusFilter)
        .filter(b => {
            if (!searchQuery.trim()) return true;
            const q = searchQuery.trim().toLowerCase();
            return (
                b.full_name?.toLowerCase().includes(q) ||
                b.email?.toLowerCase().includes(q) ||
                b.phone?.toLowerCase().includes(q)
            );
        })
        .filter(b => {
            if (!dateFilter) return true;
            return b.booking_datetime?.slice(0, 10) === dateFilter;
        });

    return (
        <div className="flex min-h-screen bg-[#F8FAFC]">
            {/* View Detail Modal */}
            {viewItem && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setViewItem(null)}>
                    <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                        <div className="flex items-center justify-between p-8 border-b border-gray-100">
                            <div>
                                <h2 className="text-2xl font-black text-navy tracking-tight">
                                    {viewItem.type === 'booking' ? 'Booking Details' : 'Contact Message'}
                                </h2>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Full lead information</p>
                            </div>
                            <button onClick={() => setViewItem(null)} className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-red-100 hover:text-red-600 text-gray-500 font-bold text-lg transition-all">✕</button>
                        </div>
                        <div className="p-8 space-y-6">
                            {viewItem.type === 'booking' ? (
                                <>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                                            <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">Full Name</p>
                                            <p className="font-black text-navy text-lg leading-tight">{viewItem.data.full_name}</p>
                                        </div>
                                        <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                                            <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">Status</p>
                                            {(() => {
                                                const eff = getEffectiveStatus(viewItem.data, new Date());
                                                const cls = eff === 'confirmed' ? 'bg-green-50 text-green-600 border-green-200'
                                                    : eff === 'completed' ? 'bg-blue-50 text-blue-600 border-blue-200'
                                                    : eff === 'cancelled' ? 'bg-red-50 text-red-600 border-red-200'
                                                    : 'bg-yellow-50 text-yellow-600 border-yellow-200';
                                                return <span className={`inline-flex items-center px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em] border ${cls}`}>{eff}</span>;
                                            })()}
                                        </div>
                                        <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                                            <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">Email</p>
                                            <p className="font-semibold text-navy text-sm">{viewItem.data.email}</p>
                                        </div>
                                        <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                                            <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">Phone</p>
                                            <p className="font-semibold text-navy text-sm font-mono">{viewItem.data.phone || '—'}</p>
                                        </div>
                                        <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100 col-span-2">
                                            <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">Pickup Location</p>
                                            <p className="font-semibold text-navy text-sm">{viewItem.data.pickup_location}</p>
                                        </div>
                                        <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100 col-span-2">
                                            <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">Drop-off Location</p>
                                            <p className="font-semibold text-navy text-sm">{viewItem.data.dropoff_location}</p>
                                        </div>
                                        <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                                            <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">Booking Date & Time</p>
                                            <p className="font-black text-navy text-sm">{new Date(viewItem.data.booking_datetime).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
                                            <p className="text-[10px] text-gold font-bold mt-1">{new Date(viewItem.data.booking_datetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
                                        </div>
                                        <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                                            <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">Passengers</p>
                                            <p className="font-black text-navy text-2xl">{viewItem.data.passengers ?? '—'}</p>
                                        </div>
                                        <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                                            <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">Source Form</p>
                                            <p className="font-semibold text-navy text-sm">{viewItem.data.source_form || '—'}</p>
                                        </div>
                                        <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                                            <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">Received On</p>
                                            <p className="font-black text-navy text-sm">{new Date(viewItem.data.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
                                            <p className="text-[10px] text-gold font-bold mt-1">{new Date(viewItem.data.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                                            <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">Full Name</p>
                                            <p className="font-black text-navy text-lg leading-tight">{viewItem.data.full_name}</p>
                                        </div>
                                        <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                                            <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">Phone</p>
                                            <p className="font-semibold text-navy text-sm font-mono">{viewItem.data.phone || '—'}</p>
                                        </div>
                                        <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100 col-span-2">
                                            <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">Email</p>
                                            <p className="font-semibold text-navy text-sm">{viewItem.data.email}</p>
                                        </div>
                                        <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100 col-span-2">
                                            <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">Subject</p>
                                            <p className="font-black text-navy text-base">{viewItem.data.subject}</p>
                                        </div>
                                        <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100 col-span-2">
                                            <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-2">Message</p>
                                            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">{viewItem.data.message}</p>
                                        </div>
                                        <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                                            <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">Source Form</p>
                                            <p className="font-semibold text-navy text-sm">{viewItem.data.source_form || '—'}</p>
                                        </div>
                                        <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
                                            <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">Received On</p>
                                            <p className="font-black text-navy text-sm">{new Date(viewItem.data.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
                                            <p className="text-[10px] text-gold font-bold mt-1">{new Date(viewItem.data.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
            {/* Email Compose Modal */}
            {emailModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setEmailModal(null)}>
                    <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-2xl" onClick={e => e.stopPropagation()}>
                        {/* Header */}
                        <div className="flex items-center justify-between px-8 py-6 bg-[#0F1C2E] rounded-t-[2rem]">
                            <div>
                                <h2 className="text-xl font-black text-white tracking-tight">Compose Email</h2>
                                <p className="text-[10px] font-bold text-gold/70 uppercase tracking-widest mt-0.5">To: {emailModal.name} — {emailModal.to}</p>
                            </div>
                            <button onClick={() => setEmailModal(null)} className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-all">✕</button>
                        </div>

                        {/* Body */}
                        <div className="p-8 space-y-5">
                            {/* To (read-only) */}
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">To</label>
                                <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold text-navy">
                                    {emailModal.name} &lt;{emailModal.to}&gt;
                                </div>
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Subject</label>
                                <input
                                    type="text"
                                    value={emailSubject}
                                    onChange={e => setEmailSubject(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-navy font-semibold focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                                    placeholder="Email subject..."
                                />
                            </div>

                            {/* Body */}
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Message</label>
                                <textarea
                                    value={emailBody}
                                    onChange={e => setEmailBody(e.target.value)}
                                    rows={8}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-navy leading-relaxed focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all resize-none"
                                    placeholder={`Write your message to ${emailModal.name}...`}
                                />
                            </div>

                            {/* Result feedback */}
                            {emailResult && (
                                <div className={`px-4 py-3 rounded-xl text-sm font-bold ${emailResult.ok ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                                    {emailResult.ok ? '✓ ' : '✕ '}{emailResult.msg}
                                </div>
                            )}

                            {/* Actions */}
                            <div className="flex gap-3 pt-2">
                                <button
                                    onClick={handleSendEmail}
                                    disabled={emailSending || !emailSubject.trim() || !emailBody.trim()}
                                    className="flex-1 py-4 bg-[#0F1C2E] text-white font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-gold hover:text-navy transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg"
                                >
                                    {emailSending ? 'Sending...' : 'Send Email'}
                                </button>
                                <button
                                    onClick={() => setEmailModal(null)}
                                    className="px-8 py-4 bg-gray-100 text-gray-500 font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-gray-200 transition-all"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Confirm & Send Modal — review/edit every detail, choose which
                leg(s) to confirm, then send the matching confirmation email. */}
            {confirmBooking && confirmForm && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => { setConfirmBooking(null); setConfirmForm(null); }}>
                    <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-3xl max-h-[92vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                        <div className="flex items-center justify-between px-8 py-6 bg-[#0F1C2E] rounded-t-[2rem] sticky top-0 z-10">
                            <div>
                                <h2 className="text-xl font-black text-white tracking-tight">Confirm &amp; Send</h2>
                                <p className="text-[10px] font-bold text-gold/70 uppercase tracking-widest mt-0.5">Review details, choose trip type, then send the confirmation email</p>
                            </div>
                            <button onClick={() => { setConfirmBooking(null); setConfirmForm(null); }} className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-all">✕</button>
                        </div>

                        <div className="p-8 space-y-6">
                            {/* Trip selection */}
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Which Transfer(s) Has the Client Selected?</label>
                                <div className="grid grid-cols-3 gap-3">
                                    {[
                                        { value: 'outbound', label: 'Outbound Only', desc: 'One-way transfer' },
                                        { value: 'both', label: 'Both Trips', desc: 'Two separate transfers' },
                                        { value: 'roundtrip', label: 'Round Trip', desc: 'One continuous booking' },
                                    ].map(opt => (
                                        <button
                                            key={opt.value}
                                            type="button"
                                            onClick={() => setConfirmForm({ ...confirmForm, trip_selection: opt.value })}
                                            className={`text-left p-4 rounded-2xl border-2 transition-all ${confirmForm.trip_selection === opt.value ? 'border-gold bg-gold/10' : 'border-gray-100 hover:border-gray-200'}`}
                                        >
                                            <p className="font-black text-navy text-sm">{opt.label}</p>
                                            <p className="text-[10px] text-gray-400 font-semibold mt-0.5">{opt.desc}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Client details */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Full Name</label>
                                    <input value={confirmForm.full_name} onChange={e => setConfirmForm({ ...confirmForm, full_name: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Email</label>
                                    <input value={confirmForm.email} onChange={e => setConfirmForm({ ...confirmForm, email: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Phone</label>
                                    <input value={confirmForm.phone} onChange={e => setConfirmForm({ ...confirmForm, phone: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" />
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Passengers</label>
                                        <input type="number" min={1} value={confirmForm.passengers} onChange={e => setConfirmForm({ ...confirmForm, passengers: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Luggage</label>
                                        <input value={confirmForm.luggage} onChange={e => setConfirmForm({ ...confirmForm, luggage: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" />
                                    </div>
                                </div>
                            </div>

                            {/* Outbound trip */}
                            <div className="p-5 bg-[#F8FAFC] rounded-2xl border border-gray-100">
                                <p className="text-[10px] font-black uppercase tracking-widest text-gold mb-4">{confirmForm.trip_selection === 'roundtrip' ? 'Outbound Trip' : confirmForm.trip_selection === 'both' ? 'Transfer 1' : 'Trip Details'}</p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-span-2">
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Pickup Location</label>
                                        <input value={confirmForm.pickup_location} onChange={e => setConfirmForm({ ...confirmForm, pickup_location: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" />
                                    </div>
                                    <div className="col-span-2">
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Drop-off Location</label>
                                        <input value={confirmForm.dropoff_location} onChange={e => setConfirmForm({ ...confirmForm, dropoff_location: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Date &amp; Time</label>
                                        <input type="datetime-local" value={confirmForm.booking_datetime} onChange={e => setConfirmForm({ ...confirmForm, booking_datetime: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Flight Number</label>
                                        <input value={confirmForm.flight_number} onChange={e => setConfirmForm({ ...confirmForm, flight_number: e.target.value })} placeholder="e.g., AZ610" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" />
                                    </div>
                                </div>
                            </div>

                            {/* Return trip — only when the admin has selected both/roundtrip */}
                            {confirmForm.trip_selection !== 'outbound' && (
                                <div className="p-5 bg-[#F8FAFC] rounded-2xl border border-gray-100">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-gold mb-4">{confirmForm.trip_selection === 'roundtrip' ? 'Return Trip' : 'Transfer 2'}</p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="col-span-2">
                                            <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Pickup Location</label>
                                            <input value={confirmForm.return_pickup_location} onChange={e => setConfirmForm({ ...confirmForm, return_pickup_location: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" />
                                        </div>
                                        <div className="col-span-2">
                                            <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Drop-off Location</label>
                                            <input value={confirmForm.return_dropoff_location} onChange={e => setConfirmForm({ ...confirmForm, return_dropoff_location: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Date &amp; Time</label>
                                            <input type="datetime-local" value={confirmForm.return_datetime} onChange={e => setConfirmForm({ ...confirmForm, return_datetime: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Flight Number</label>
                                            <input value={confirmForm.return_flight_number} onChange={e => setConfirmForm({ ...confirmForm, return_flight_number: e.target.value })} placeholder="e.g., AZ611" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Admin notes / procedure */}
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Notes / Meeting Procedure <span className="normal-case font-semibold text-gray-300">(included in the client email if filled in)</span></label>
                                <textarea
                                    value={confirmForm.admin_notes}
                                    onChange={e => setConfirmForm({ ...confirmForm, admin_notes: e.target.value })}
                                    rows={3}
                                    placeholder="e.g., driver will be holding a name sign at arrivals, meet at Terminal 3 exit..."
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-navy leading-relaxed focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 resize-none"
                                />
                            </div>

                            {confirmResult && (
                                <div className={`px-4 py-3 rounded-xl text-sm font-bold ${confirmResult.ok ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                                    {confirmResult.ok ? '✓ ' : '✕ '}{confirmResult.msg}
                                </div>
                            )}

                            <div className="flex gap-3 pt-2">
                                <button
                                    onClick={handleConfirmSend}
                                    disabled={confirming}
                                    className="flex-1 py-4 bg-green-600 text-white font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-green-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg"
                                >
                                    {confirming ? 'Sending...' : 'Confirm & Send Email'}
                                </button>
                                <button
                                    onClick={() => { setConfirmBooking(null); setConfirmForm(null); }}
                                    className="px-8 py-4 bg-gray-100 text-gray-500 font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-gray-200 transition-all"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Dispatch to Driver Modal */}
            {dispatchBooking && (
                <DispatchDriversModal booking={dispatchBooking} onClose={() => setDispatchBooking(null)} />
            )}

            {/* Sidebar */}
            <aside className="w-80 bg-[#0F1C2E] text-white flex flex-col fixed h-full z-50">
                <div className="p-10 border-b border-white/5">
                    <Link href="/" className="flex items-center gap-4 group">
                        <div className="w-12 h-12 bg-gold flex items-center justify-center rounded-xl shadow-lg shadow-gold/20 group-hover:scale-110 transition-transform">
                            <span className="text-navy font-black text-2xl italic">I</span>
                        </div>
                        <div>
                            <span className="block text-xl font-black tracking-tighter leading-none italic group-hover:text-gold transition-colors">ITALY TAXI SERVICE</span>
                            <span className="text-[10px] uppercase font-bold text-gold tracking-widest opacity-50">CRM DASHBOARD</span>
                        </div>
                    </Link>
                </div>

                <nav className="flex-1 p-6 space-y-2">
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] px-4 mb-4">Core Menu</div>
                    <button
                        onClick={() => setActiveTab('bookings')}
                        className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-left transition-all ${activeTab === 'bookings' ? 'bg-gold/10 text-gold border border-gold/20 shadow-lg shadow-gold/5' : 'text-gray-400 hover:bg-white/5 border border-transparent'}`}
                    >
                        <div className={`w-2 h-2 rounded-full ${activeTab === 'bookings' ? 'bg-gold animate-pulse' : 'bg-gray-600'}`}></div>
                        <span className="font-bold text-sm tracking-wider uppercase">Leads & Bookings</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('contacts')}
                        className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-left transition-all ${activeTab === 'contacts' ? 'bg-gold/10 text-gold border border-gold/20 shadow-lg shadow-gold/5' : 'text-gray-400 hover:bg-white/5 border border-transparent'}`}
                    >
                        <div className={`w-2 h-2 rounded-full ${activeTab === 'contacts' ? 'bg-gold animate-pulse' : 'bg-gray-600'}`}></div>
                        <span className="font-bold text-sm tracking-wider uppercase">Contact Messages</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('invoices')}
                        className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-left transition-all ${activeTab === 'invoices' ? 'bg-gold/10 text-gold border border-gold/20 shadow-lg shadow-gold/5' : 'text-gray-400 hover:bg-white/5 border border-transparent'}`}
                    >
                        <div className={`w-2 h-2 rounded-full ${activeTab === 'invoices' ? 'bg-gold animate-pulse' : 'bg-gray-600'}`}></div>
                        <span className="font-bold text-sm tracking-wider uppercase">Invoices &amp; Receipts</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('drivers')}
                        className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl text-left transition-all ${activeTab === 'drivers' ? 'bg-gold/10 text-gold border border-gold/20 shadow-lg shadow-gold/5' : 'text-gray-400 hover:bg-white/5 border border-transparent'}`}
                    >
                        <div className={`w-2 h-2 rounded-full ${activeTab === 'drivers' ? 'bg-gold animate-pulse' : 'bg-gray-600'}`}></div>
                        <span className="font-bold text-sm tracking-wider uppercase">Drivers &amp; Dispatch</span>
                    </button>
                </nav>

                <div className="p-8 border-t border-white/5">
                    <div className="bg-white/5 rounded-2xl p-4 mb-6 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center text-gold font-bold">
                            {user?.email?.charAt(0).toUpperCase()}
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-xs font-bold truncate">{user?.email}</p>
                            <p className="text-[9px] text-gold uppercase font-bold tracking-widest opacity-50">Administrator</p>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="w-full py-4 text-center rounded-2xl bg-red-500/10 text-red-500 border border-red-500/20 text-xs font-bold uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all shadow-lg"
                    >
                        Sign Out System
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="ml-80 flex-1 p-12 w-[calc(100%-20rem)]">
                <div className="w-full">
                    {/* Dashboard Header */}
                    <div className="flex justify-between items-start mb-12">
                        <div>
                            <h2 className="text-4xl font-black text-[#0F1C2E] tracking-tight mb-2">Internal Dashboard</h2>
                            <p className="text-gray-400 font-medium">Welcome back! Manage your fleet bookings and leads here.</p>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-xs font-bold text-navy uppercase tracking-widest">Database Linked</span>
                        </div>
                    </div>

                    {/* Analytics Summary — only on bookings tab */}
                    {activeTab === 'bookings' && (
                        <div className="grid grid-cols-5 gap-6 mb-12">
                            <button type="button" onClick={() => setStatusFilter('all')}
                                className={`text-left bg-white p-6 rounded-[2rem] border shadow-sm shadow-navy/5 flex flex-col justify-between transition-all hover:shadow-md cursor-pointer ${statusFilter === 'all' ? 'border-navy ring-2 ring-navy/20' : 'border-gray-100'}`}>
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Total Reservations</div>
                                <div className="flex items-end justify-between">
                                    <span className="text-4xl font-black text-navy">{stats.total}</span>
                                    <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center">
                                        <span className="text-xl">📊</span>
                                    </div>
                                </div>
                            </button>
                            <button type="button" onClick={() => setStatusFilter('pending')}
                                className={`text-left bg-white p-6 rounded-[2rem] border shadow-sm shadow-navy/5 flex flex-col justify-between transition-all hover:shadow-md cursor-pointer ${statusFilter === 'pending' ? 'border-yellow-400 ring-2 ring-yellow-200' : 'border-gray-100'}`}>
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 italic">Pending Verification</div>
                                <div className="flex items-end justify-between">
                                    <span className="text-4xl font-black text-yellow-600">{stats.pending}</span>
                                    <div className="w-10 h-10 rounded-2xl bg-yellow-50 flex items-center justify-center animate-pulse">
                                        <span className="text-xl text-yellow-500">⏳</span>
                                    </div>
                                </div>
                            </button>
                            <button type="button" onClick={() => setStatusFilter('confirmed')}
                                className={`text-left bg-white p-6 rounded-[2rem] border shadow-sm shadow-navy/5 flex flex-col justify-between transition-all hover:shadow-md cursor-pointer ${statusFilter === 'confirmed' ? 'border-green-400 ring-2 ring-green-200' : 'border-gray-100'}`}>
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Confirmed &amp; Upcoming</div>
                                <div className="flex items-end justify-between">
                                    <span className="text-4xl font-black text-green-600">{stats.confirmed}</span>
                                    <div className="w-10 h-10 rounded-2xl bg-green-50 flex items-center justify-center">
                                        <span className="text-xl text-green-500">✅</span>
                                    </div>
                                </div>
                            </button>
                            <button type="button" onClick={() => setStatusFilter('completed')}
                                className={`text-left bg-white p-6 rounded-[2rem] border shadow-sm shadow-navy/5 flex flex-col justify-between transition-all hover:shadow-md cursor-pointer ${statusFilter === 'completed' ? 'border-blue-400 ring-2 ring-blue-200' : 'border-gray-100'}`}>
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Completed</div>
                                <div className="flex items-end justify-between">
                                    <span className="text-4xl font-black text-blue-600">{stats.completed}</span>
                                    <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center">
                                        <span className="text-xl text-blue-500">🏁</span>
                                    </div>
                                </div>
                            </button>
                            <button type="button" onClick={() => setStatusFilter('cancelled')}
                                className={`text-left bg-white p-6 rounded-[2rem] border shadow-sm shadow-navy/5 flex flex-col justify-between transition-all hover:shadow-md cursor-pointer ${statusFilter === 'cancelled' ? 'border-red-400 ring-2 ring-red-200' : 'border-gray-100'}`}>
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Cancelled / Lost</div>
                                <div className="flex items-end justify-between">
                                    <span className="text-4xl font-black text-red-600">{stats.cancelled}</span>
                                    <div className="w-10 h-10 rounded-2xl bg-red-50 flex items-center justify-center">
                                        <span className="text-xl text-red-500">❌</span>
                                    </div>
                                </div>
                            </button>
                        </div>
                    )}

                    {/* This Week's Transfers — confirmed bookings with a trip date in the next 7 days */}
                    {activeTab === 'bookings' && (
                        <div className="bg-white rounded-[1.75rem] shadow-xl shadow-navy/10 border border-gray-100 overflow-hidden mb-12">
                            <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between bg-gray-50/50">
                                <h3 className="text-sm font-bold text-navy flex items-center gap-2.5">
                                    🗓️ This Week's Transfers
                                    <span className="text-[9px] bg-navy text-white px-2.5 py-1 rounded-full uppercase tracking-widest font-bold">{thisWeekTransfers.length}</span>
                                </h3>
                                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Confirmed pickups in the next 7 days</span>
                            </div>
                            {thisWeekTransfers.length === 0 ? (
                                <div className="px-6 py-8 text-center">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">No confirmed transfers scheduled in the next 7 days.</p>
                                </div>
                            ) : (
                                <div className="divide-y divide-gray-50 max-h-[320px] overflow-y-auto">
                                    {thisWeekTransfers.map((booking) => (
                                        <div key={booking.id} className="px-6 py-3 flex items-center gap-4 hover:bg-[#F8FAFC] transition-colors">
                                            <div className="shrink-0 bg-navy text-white rounded-xl px-3 py-2 text-center min-w-[64px]">
                                                <div className="text-[10px] font-black uppercase tracking-wide">{new Date(booking.booking_datetime).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</div>
                                                <div className="text-[9px] text-gold font-bold">{new Date(booking.booking_datetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</div>
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <div className="flex items-center gap-1.5">
                                                    <span className="font-bold text-navy text-[13px] truncate">{booking.full_name}</span>
                                                    {booking.has_return_trip && (
                                                        <span className="inline-flex items-center px-1.5 py-[1px] rounded-full text-[8px] font-black uppercase border bg-purple-50 text-purple-600 border-purple-200">
                                                            {booking.trip_selection === 'both' ? '2 Transfers' : 'Round Trip'}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="text-[11px] text-gray-500 truncate">
                                                    <span className="text-gold">📍</span> {booking.pickup_location} <span className="text-gray-300">→</span> {booking.dropoff_location}
                                                </div>
                                            </div>
                                            <div className="shrink-0 flex gap-1">
                                                <button onClick={() => setViewItem({ type: 'booking', data: booking })} className="h-7 w-7 flex items-center justify-center bg-gray-50 text-gray-400 text-xs rounded-lg hover:bg-navy hover:text-white transition-all" title="View Details">👁</button>
                                                <button onClick={() => setDispatchBooking(booking)} className="h-7 w-7 flex items-center justify-center bg-gray-50 text-gray-400 text-xs rounded-lg hover:bg-[#25D366] hover:text-white transition-all" title="Dispatch to Driver">🚗</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Invoices / Drivers Sections */}
                    {activeTab === 'invoices' ? (
                        <InvoicesPanel prefill={invoicePrefill} onConsumePrefill={() => setInvoicePrefill(null)} />
                    ) : activeTab === 'drivers' ? (
                        <DriversPanel />
                    ) : (
                    /* Table Section */
                    <div className="bg-white rounded-[1.75rem] shadow-xl shadow-navy/10 border border-gray-100 overflow-hidden w-full">
                        <div className="px-6 py-4 border-b border-gray-50 flex justify-between items-center bg-gray-50/50 flex-wrap gap-3">
                            <h3 className="text-sm font-bold text-navy flex items-center gap-2.5 flex-wrap">
                                {activeTab === 'bookings'
                                    ? (statusFilter === 'all' ? 'Recent Activity Log' : `${statusFilter.charAt(0).toUpperCase() + statusFilter.slice(1)} Bookings`)
                                    : 'Contact Messages'}
                                <span className="text-[9px] bg-navy text-white px-2.5 py-1 rounded-full uppercase tracking-widest font-bold">Real-time</span>
                                {activeTab === 'bookings' && statusFilter !== 'all' && (
                                    <button type="button" onClick={() => setStatusFilter('all')} className="text-[10px] font-bold text-gold uppercase tracking-widest border-b border-gold hover:text-navy hover:border-navy transition-all">Show all</button>
                                )}
                            </h3>
                            <button
                                onClick={() => router.refresh()}
                                className="text-[10px] font-bold text-gold uppercase tracking-widest border-b border-gold hover:text-navy hover:border-navy transition-all"
                            >
                                Refresh Table Data
                            </button>
                        </div>

                        {/* Search & date filters — bookings tab only, single compact row */}
                        {activeTab === 'bookings' && (
                            <div className="px-6 py-3 border-b border-gray-50 flex flex-wrap items-center gap-3 bg-white">
                                <div className="relative flex-1 min-w-[220px]">
                                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 text-sm">🔍</span>
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search by name, email or phone..."
                                        className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-xs text-navy font-medium focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                                    />
                                </div>
                                <div className="flex items-center gap-2">
                                    <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Trip Date</label>
                                    <input
                                        type="date"
                                        value={dateFilter}
                                        onChange={(e) => setDateFilter(e.target.value)}
                                        className="px-3 py-2 border border-gray-200 rounded-lg text-xs text-navy font-medium focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all"
                                    />
                                </div>
                                {(searchQuery || dateFilter) && (
                                    <button
                                        type="button"
                                        onClick={() => { setSearchQuery(''); setDateFilter(''); }}
                                        className="text-[9px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-300 hover:text-red-500 hover:border-red-500 transition-all"
                                    >
                                        Clear
                                    </button>
                                )}
                                <span className="text-[9px] font-bold text-gray-300 uppercase tracking-widest ml-auto">{visibleBookings.length} of {bookings.length}</span>
                            </div>
                        )}

                        <div className="overflow-auto max-h-[74vh] min-h-[200px]">
                            {loading ? (
                                <div className="flex flex-col items-center justify-center pt-32 gap-6">
                                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gold outline outline-4 outline-gold/10"></div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.5em] animate-pulse">Syncing Database Assets...</p>
                                </div>
                            ) : activeTab === 'bookings' ? (
                                visibleBookings.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center pt-32 gap-4">
                                        <span className="text-6xl">📥</span>
                                        <p className="text-sm font-bold text-navy opacity-30 uppercase tracking-widest">
                                            {statusFilter === 'all' ? 'No booking records found.' : `No ${statusFilter} bookings.`}
                                        </p>
                                        {statusFilter !== 'all' && (
                                            <button type="button" onClick={() => setStatusFilter('all')} className="text-[10px] font-bold text-gold uppercase tracking-widest border-b border-gold hover:text-navy transition-all">Show all bookings</button>
                                        )}
                                    </div>
                                ) : (
                                    <>
                                    {/* Desktop: dense data table */}
                                    <table className="w-full text-left table-fixed hidden md:table">
                                        <colgroup>
                                            <col className="w-[22%]" />
                                            <col className="w-[24%]" />
                                            <col className="w-[11%]" />
                                            <col className="w-[9%]" />
                                            <col className="w-[9%]" />
                                            <col className="w-[8%]" />
                                            <col className="w-[17%]" />
                                        </colgroup>
                                        <thead className="sticky top-0 z-10">
                                            <tr className="bg-navy text-white text-[9px] font-bold uppercase tracking-[0.2em]">
                                                <th className="px-4 py-3">Customer</th>
                                                <th className="px-4 py-3">Route</th>
                                                <th className="px-4 py-3">Schedule</th>
                                                <th className="px-4 py-3">Received</th>
                                                <th className="px-4 py-3">Source</th>
                                                <th className="px-4 py-3">Status</th>
                                                <th className="px-4 py-3 text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            {visibleBookings.map((booking) => (
                                                <tr key={booking.id} className="hover:bg-[#F8FAFC] transition-colors duration-200 group">
                                                    {/* Customer */}
                                                    <td className="px-4 py-2.5 align-top">
                                                        <div className="flex items-center gap-1.5 leading-tight">
                                                            <span className="font-bold text-navy text-[13px] truncate">{booking.full_name}</span>
                                                        </div>
                                                        <span className={`inline-flex items-center px-1.5 py-[1px] rounded-full text-[8px] font-black uppercase tracking-wide border mt-0.5 ${booking.has_return_trip ? 'bg-purple-50 text-purple-600 border-purple-200' : 'bg-gray-50 text-gray-500 border-gray-200'}`}>
                                                            {booking.has_return_trip ? (booking.trip_selection === 'both' ? '2 Transfers' : 'Round Trip') : 'One Way'}
                                                        </span>
                                                        <div className="text-[11px] text-gold/90 truncate leading-tight mt-1">{booking.email}</div>
                                                        <div className="text-[10px] text-gray-400 font-mono leading-tight">{booking.phone}</div>
                                                    </td>
                                                    {/* Route */}
                                                    <td className="px-4 py-2.5 align-top">
                                                        <div className="text-[11px] text-navy font-semibold leading-snug truncate" title={booking.pickup_location}>
                                                            <span className="text-gold">📍</span> {booking.pickup_location}
                                                        </div>
                                                        <div className="text-[11px] text-navy font-semibold leading-snug truncate mt-0.5" title={booking.dropoff_location}>
                                                            <span className="text-gray-400">→</span> {booking.dropoff_location}
                                                        </div>
                                                        <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wide mt-1">{booking.passengers ?? '—'} pax{booking.luggage ? ` · ${booking.luggage} bags` : ''}</div>
                                                    </td>
                                                    {/* Schedule */}
                                                    <td className="px-4 py-2.5 align-top">
                                                        <div className="text-[11px] text-navy font-bold leading-tight">{new Date(booking.booking_datetime).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</div>
                                                        <div className="text-[10px] text-gold font-bold leading-tight mt-0.5">{new Date(booking.booking_datetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</div>
                                                    </td>
                                                    {/* Received */}
                                                    <td className="px-4 py-2.5 align-top">
                                                        <div className="text-[11px] text-gray-600 font-semibold leading-tight">{new Date(booking.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</div>
                                                        <div className="text-[10px] text-gray-400 font-semibold leading-tight mt-0.5">{new Date(booking.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</div>
                                                    </td>
                                                    {/* Source */}
                                                    <td className="px-4 py-2.5 align-top">
                                                        <span className="inline-flex items-center px-2 py-1 rounded-md text-[9px] font-bold uppercase tracking-wide bg-blue-50 text-blue-700 border border-blue-200 truncate max-w-full">
                                                            {booking.source_form || '—'}
                                                        </span>
                                                    </td>
                                                    {/* Status */}
                                                    <td className="px-4 py-2.5 align-top">
                                                        {(() => {
                                                            const eff = getEffectiveStatus(booking, now);
                                                            const cls = eff === 'confirmed' ? 'bg-green-50 text-green-600 border-green-200'
                                                                : eff === 'completed' ? 'bg-blue-50 text-blue-600 border-blue-200'
                                                                : eff === 'cancelled' ? 'bg-red-50 text-red-600 border-red-200'
                                                                : 'bg-yellow-50 text-yellow-600 border-yellow-200';
                                                            return (
                                                                <span className={`inline-flex items-center px-2 py-1 rounded-md text-[9px] font-black uppercase tracking-wide border ${cls}`}>
                                                                    {eff}
                                                                </span>
                                                            );
                                                        })()}
                                                    </td>
                                                    {/* Actions */}
                                                    <td className="px-4 py-2.5 align-top">
                                                        <div className="flex gap-1 justify-end flex-wrap">
                                                            <button onClick={() => setViewItem({ type: 'booking', data: booking })} className="h-7 w-7 flex items-center justify-center bg-gray-50 text-gray-400 text-xs rounded-lg hover:bg-navy hover:text-white transition-all border border-transparent hover:border-navy" title="View Details">👁</button>
                                                            <button onClick={() => openEmailModal(booking.email, booking.full_name, `Re: Your Italy Taxi Booking`)} className="h-7 w-7 flex items-center justify-center bg-gray-50 text-gray-400 text-xs rounded-lg hover:bg-gold hover:text-navy transition-all border border-transparent hover:border-gold" title="Email Client">✉</button>
                                                            <button onClick={() => setDispatchBooking(booking)} className="h-7 w-7 flex items-center justify-center bg-gray-50 text-gray-400 text-xs rounded-lg hover:bg-[#25D366] hover:text-white transition-all border border-transparent hover:border-[#25D366]" title="Dispatch to Driver (WhatsApp)">🚗</button>
                                                            <button onClick={() => createInvoiceFromBooking(booking)} className="h-7 w-7 flex items-center justify-center bg-gray-50 text-gray-400 text-xs rounded-lg hover:bg-navy hover:text-gold transition-all border border-transparent hover:border-navy" title="Create Invoice">🧾</button>
                                                            <button onClick={() => openConfirmModal(booking)} className="h-7 w-7 flex items-center justify-center bg-gray-50 text-gray-400 text-xs rounded-lg hover:bg-green-600 hover:text-white transition-all border border-transparent hover:border-green-400" title="Confirm & Send">✓</button>
                                                            <button onClick={() => updateStatus(booking.id, 'cancelled')} className="h-7 w-7 flex items-center justify-center bg-gray-50 text-gray-400 text-xs rounded-lg hover:bg-red-600 hover:text-white transition-all border border-transparent hover:border-red-400" title="Cancel Booking">✕</button>
                                                            <button onClick={() => deleteBooking(booking.id)} className="h-7 w-7 flex items-center justify-center bg-gray-50 text-gray-400 text-xs rounded-lg hover:bg-red-900 hover:text-white transition-all border border-transparent hover:border-red-900" title="Delete Booking">🗑</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    {/* Mobile: card layout */}
                                    <div className="md:hidden divide-y divide-gray-100">
                                        {visibleBookings.map((booking) => (
                                            <div key={booking.id} className="p-4 space-y-2">
                                                <div className="flex items-start justify-between gap-2">
                                                    <div>
                                                        <div className="flex items-center gap-1.5">
                                                            <span className="font-bold text-navy text-sm">{booking.full_name}</span>
                                                            <span className={`inline-flex items-center px-1.5 py-[1px] rounded-full text-[8px] font-black uppercase border ${booking.has_return_trip ? 'bg-purple-50 text-purple-600 border-purple-200' : 'bg-gray-50 text-gray-500 border-gray-200'}`}>
                                                                {booking.has_return_trip ? (booking.trip_selection === 'both' ? '2 Transfers' : 'Round Trip') : 'One Way'}
                                                            </span>
                                                        </div>
                                                        <div className="text-[11px] text-gold/90">{booking.email}</div>
                                                        <div className="text-[10px] text-gray-400 font-mono">{booking.phone}</div>
                                                    </div>
                                                    {(() => {
                                                        const eff = getEffectiveStatus(booking, now);
                                                        const cls = eff === 'confirmed' ? 'bg-green-50 text-green-600 border-green-200'
                                                            : eff === 'completed' ? 'bg-blue-50 text-blue-600 border-blue-200'
                                                            : eff === 'cancelled' ? 'bg-red-50 text-red-600 border-red-200'
                                                            : 'bg-yellow-50 text-yellow-600 border-yellow-200';
                                                        return <span className={`shrink-0 inline-flex items-center px-2 py-1 rounded-md text-[9px] font-black uppercase border ${cls}`}>{eff}</span>;
                                                    })()}
                                                </div>
                                                <div className="text-[12px] text-navy font-semibold"><span className="text-gold">📍</span> {booking.pickup_location}</div>
                                                <div className="text-[12px] text-navy font-semibold"><span className="text-gray-400">→</span> {booking.dropoff_location}</div>
                                                <div className="flex items-center justify-between text-[10px] text-gray-500 font-bold uppercase tracking-wide">
                                                    <span>{new Date(booking.booking_datetime).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })} · {new Date(booking.booking_datetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</span>
                                                    <span>{booking.passengers ?? '—'} pax</span>
                                                </div>
                                                <div className="flex gap-1.5 pt-1 flex-wrap">
                                                    <button onClick={() => setViewItem({ type: 'booking', data: booking })} className="h-8 w-8 flex items-center justify-center bg-gray-50 text-gray-500 rounded-lg border border-gray-100" title="View">👁</button>
                                                    <button onClick={() => openEmailModal(booking.email, booking.full_name, `Re: Your Italy Taxi Booking`)} className="h-8 w-8 flex items-center justify-center bg-gray-50 text-gray-500 rounded-lg border border-gray-100" title="Email">✉</button>
                                                    <button onClick={() => setDispatchBooking(booking)} className="h-8 w-8 flex items-center justify-center bg-gray-50 text-gray-500 rounded-lg border border-gray-100" title="Dispatch">🚗</button>
                                                    <button onClick={() => createInvoiceFromBooking(booking)} className="h-8 w-8 flex items-center justify-center bg-gray-50 text-gray-500 rounded-lg border border-gray-100" title="Invoice">🧾</button>
                                                    <button onClick={() => openConfirmModal(booking)} className="h-8 w-8 flex items-center justify-center bg-gray-50 text-gray-500 rounded-lg border border-gray-100" title="Confirm">✓</button>
                                                    <button onClick={() => updateStatus(booking.id, 'cancelled')} className="h-8 w-8 flex items-center justify-center bg-gray-50 text-gray-500 rounded-lg border border-gray-100" title="Cancel">✕</button>
                                                    <button onClick={() => deleteBooking(booking.id)} className="h-8 w-8 flex items-center justify-center bg-gray-50 text-gray-500 rounded-lg border border-gray-100" title="Delete">🗑</button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    </>
                                )
                            ) : (
                                contacts.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center pt-32 gap-4">
                                        <span className="text-6xl">📭</span>
                                        <p className="text-sm font-bold text-navy opacity-30 uppercase tracking-widest">No contact messages found.</p>
                                    </div>
                                ) : (
                                    <table className="w-full text-left table-fixed">
                                        <colgroup>
                                            <col className="w-[22%]" />
                                            <col className="w-[16%]" />
                                            <col className="w-[32%]" />
                                            <col className="w-[10%]" />
                                            <col className="w-[10%]" />
                                            <col className="w-[10%]" />
                                        </colgroup>
                                        <thead className="sticky top-0 z-10">
                                            <tr className="bg-navy text-white text-[9px] font-bold uppercase tracking-[0.2em]">
                                                <th className="px-4 py-3">Sender</th>
                                                <th className="px-4 py-3">Subject</th>
                                                <th className="px-4 py-3">Message</th>
                                                <th className="px-4 py-3">Received</th>
                                                <th className="px-4 py-3">Source</th>
                                                <th className="px-4 py-3 text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            {contacts.map((contact) => (
                                                <tr key={contact.id} className="hover:bg-[#F8FAFC] transition-colors duration-200">
                                                    <td className="px-4 py-2.5 align-top">
                                                        <div className="font-bold text-navy text-[13px] leading-tight truncate">{contact.full_name}</div>
                                                        <div className="text-[11px] text-gold/90 truncate leading-tight">{contact.email}</div>
                                                        {contact.phone && <div className="text-[10px] text-gray-400 font-mono leading-tight">{contact.phone}</div>}
                                                    </td>
                                                    <td className="px-4 py-2.5 align-top">
                                                        <div className="text-[12px] font-semibold text-navy leading-snug truncate">{contact.subject}</div>
                                                    </td>
                                                    <td className="px-4 py-2.5 align-top">
                                                        <div className="text-[11px] text-gray-600 leading-snug line-clamp-2">{contact.message}</div>
                                                    </td>
                                                    <td className="px-4 py-2.5 align-top">
                                                        <div className="text-[11px] text-gray-600 font-semibold leading-tight">{new Date(contact.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</div>
                                                        <div className="text-[10px] text-gray-400 font-semibold leading-tight mt-0.5">{new Date(contact.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</div>
                                                    </td>
                                                    <td className="px-4 py-2.5 align-top">
                                                        <span className="inline-flex items-center px-2 py-1 rounded-md text-[9px] font-bold uppercase tracking-wide bg-blue-50 text-blue-700 border border-blue-200 truncate max-w-full">
                                                            {contact.source_form || '—'}
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-2.5 align-top">
                                                        <div className="flex gap-1 justify-end">
                                                            <button
                                                                onClick={() => setViewItem({ type: 'contact', data: contact })}
                                                                className="h-7 w-7 flex items-center justify-center bg-gray-50 text-gray-400 text-xs rounded-lg hover:bg-navy hover:text-white transition-all border border-transparent hover:border-navy"
                                                                title="View Details"
                                                            >
                                                                👁
                                                            </button>
                                                            <button
                                                                onClick={() => openEmailModal(contact.email, contact.full_name, `Re: ${contact.subject}`)}
                                                                className="h-7 w-7 flex items-center justify-center bg-gray-50 text-gray-400 text-xs rounded-lg hover:bg-gold hover:text-navy transition-all border border-transparent hover:border-gold"
                                                                title="Email Client"
                                                            >
                                                                ✉
                                                            </button>
                                                            <button
                                                                onClick={() => deleteContact(contact.id)}
                                                                className="h-7 w-7 flex items-center justify-center bg-gray-50 text-gray-400 text-xs rounded-lg hover:bg-red-900 hover:text-white transition-all border border-transparent hover:border-red-900"
                                                                title="Delete Message"
                                                            >
                                                                🗑
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )
                            )}
                        </div>
                    </div>
                    )}
                </div>
            </main>
        </div>
    );
}

