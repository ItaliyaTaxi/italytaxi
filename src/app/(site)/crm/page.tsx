'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { deleteBookingAction, deleteContactAction, confirmBookingAction, sendClientEmailAction } from '@/app/actions/crm';
import InvoicesPanel, { InvoicePrefill } from '@/components/crm/InvoicesPanel';
import DriversPanel from '@/components/crm/DriversPanel';
import DispatchDriversModal from '@/components/crm/DispatchDriversModal';

export default function CRMPage() {
    const [bookings, setBookings] = useState<any[]>([]);
    const [contacts, setContacts] = useState<any[]>([]);
    const [activeTab, setActiveTab] = useState<'bookings' | 'contacts' | 'invoices' | 'drivers'>('bookings');
    const [statusFilter, setStatusFilter] = useState<'all' | 'pending' | 'confirmed' | 'cancelled'>('all');
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

    async function handleConfirm(booking: any) {
        try {
            await confirmBookingAction(booking.id, {
                full_name: booking.full_name,
                email: booking.email,
                phone: booking.phone,
                pickup_location: booking.pickup_location,
                dropoff_location: booking.dropoff_location,
                booking_datetime: booking.booking_datetime,
                passengers: booking.passengers ?? 1,
            });
            setBookings(bookings.map(b => b.id === booking.id ? { ...b, status: 'confirmed' } : b));
        } catch (e: any) {
            alert('Error confirming booking: ' + e.message);
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

    const stats = {
        total: bookings.length,
        pending: bookings.filter(b => b.status === 'pending').length,
        confirmed: bookings.filter(b => b.status === 'confirmed').length,
        cancelled: bookings.filter(b => b.status === 'cancelled').length,
    };

    // Bookings shown in the table, filtered by the selected status card.
    const visibleBookings = statusFilter === 'all'
        ? bookings
        : bookings.filter(b => b.status === statusFilter);

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
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em] border ${viewItem.data.status === 'confirmed' ? 'bg-green-50 text-green-600 border-green-200' : viewItem.data.status === 'cancelled' ? 'bg-red-50 text-red-600 border-red-200' : 'bg-yellow-50 text-yellow-600 border-yellow-200'}`}>{viewItem.data.status}</span>
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
            <main className="ml-80 flex-1 p-12">
                <div className="max-w-7xl mx-auto">
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
                        <div className="grid grid-cols-4 gap-8 mb-16">
                            <button type="button" onClick={() => setStatusFilter('all')}
                                className={`text-left bg-white p-8 rounded-[2.5rem] border shadow-sm shadow-navy/5 flex flex-col justify-between transition-all hover:shadow-md cursor-pointer ${statusFilter === 'all' ? 'border-navy ring-2 ring-navy/20' : 'border-gray-100'}`}>
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Total Reservations</div>
                                <div className="flex items-end justify-between">
                                    <span className="text-5xl font-black text-navy">{stats.total}</span>
                                    <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center">
                                        <span className="text-xl">📊</span>
                                    </div>
                                </div>
                            </button>
                            <button type="button" onClick={() => setStatusFilter('pending')}
                                className={`text-left bg-white p-8 rounded-[2.5rem] border shadow-sm shadow-navy/5 flex flex-col justify-between transition-all hover:shadow-md cursor-pointer ${statusFilter === 'pending' ? 'border-yellow-400 ring-2 ring-yellow-200' : 'border-gray-100'}`}>
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 italic">Pending Verification</div>
                                <div className="flex items-end justify-between">
                                    <span className="text-5xl font-black text-yellow-600">{stats.pending}</span>
                                    <div className="w-10 h-10 rounded-2xl bg-yellow-50 flex items-center justify-center animate-pulse">
                                        <span className="text-xl text-yellow-500">⏳</span>
                                    </div>
                                </div>
                            </button>
                            <button type="button" onClick={() => setStatusFilter('confirmed')}
                                className={`text-left bg-white p-8 rounded-[2.5rem] border shadow-sm shadow-navy/5 flex flex-col justify-between transition-all hover:shadow-md cursor-pointer ${statusFilter === 'confirmed' ? 'border-green-400 ring-2 ring-green-200' : 'border-gray-100'}`}>
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Confirmed Rides</div>
                                <div className="flex items-end justify-between">
                                    <span className="text-5xl font-black text-green-600">{stats.confirmed}</span>
                                    <div className="w-10 h-10 rounded-2xl bg-green-50 flex items-center justify-center">
                                        <span className="text-xl text-green-500">✅</span>
                                    </div>
                                </div>
                            </button>
                            <button type="button" onClick={() => setStatusFilter('cancelled')}
                                className={`text-left bg-white p-8 rounded-[2.5rem] border shadow-sm shadow-navy/5 flex flex-col justify-between transition-all hover:shadow-md cursor-pointer ${statusFilter === 'cancelled' ? 'border-red-400 ring-2 ring-red-200' : 'border-gray-100'}`}>
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Cancelled / Lost</div>
                                <div className="flex items-end justify-between">
                                    <span className="text-5xl font-black text-red-600">{stats.cancelled}</span>
                                    <div className="w-10 h-10 rounded-2xl bg-red-50 flex items-center justify-center">
                                        <span className="text-xl text-red-500">❌</span>
                                    </div>
                                </div>
                            </button>
                        </div>
                    )}

                    {/* Invoices / Drivers Sections */}
                    {activeTab === 'invoices' ? (
                        <InvoicesPanel prefill={invoicePrefill} onConsumePrefill={() => setInvoicePrefill(null)} />
                    ) : activeTab === 'drivers' ? (
                        <DriversPanel />
                    ) : (
                    /* Table Section */
                    <div className="bg-white rounded-[3rem] shadow-2xl shadow-navy/10 border border-gray-100 overflow-hidden">
                        <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
                            <h3 className="text-lg font-bold text-navy flex items-center gap-3 flex-wrap">
                                {activeTab === 'bookings'
                                    ? (statusFilter === 'all' ? 'Recent Activity Log' : `${statusFilter.charAt(0).toUpperCase() + statusFilter.slice(1)} Bookings`)
                                    : 'Contact Messages'}
                                <span className="text-[10px] bg-navy text-white px-3 py-1 rounded-full uppercase tracking-widest font-bold">Real-time</span>
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

                        <div className="overflow-x-auto min-h-[400px]">
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
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-navy text-white text-[9px] font-bold uppercase tracking-[0.3em]">
                                                <th className="px-10 py-6">Customer Identity</th>
                                                <th className="px-10 py-6">Route Logistics</th>
                                                <th className="px-10 py-6">Schedule</th>
                                                <th className="px-10 py-6">Date Received</th>
                                                <th className="px-10 py-6">Form Source</th>
                                                <th className="px-10 py-6 text-center">Passengers</th>
                                                <th className="px-10 py-6 text-center">Validation</th>
                                                <th className="px-10 py-6 text-right">Management</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            {visibleBookings.map((booking) => (
                                                <tr key={booking.id} className="hover:bg-[#F8FAFC]/80 transition-all duration-300 group">
                                                    <td className="px-10 py-8">
                                                        <div className="font-black text-navy text-lg mb-1 leading-none">{booking.full_name}</div>
                                                        <div className="space-y-1">
                                                            <div className="text-xs font-semibold text-gold/80 italic">{booking.email}</div>
                                                            <div className="text-[10px] font-bold text-gray-400 font-mono tracking-tighter uppercase">{booking.phone}</div>
                                                        </div>
                                                    </td>
                                                    <td className="px-10 py-8">
                                                        <div className="flex items-center gap-4">
                                                            <div className="flex flex-col items-center gap-1">
                                                                <div className="w-2.5 h-2.5 rounded-full border-2 border-gold bg-white"></div>
                                                                <div className="w-0.5 h-6 bg-gray-100"></div>
                                                                <div className="w-2.5 h-2.5 rounded-full bg-navy"></div>
                                                            </div>
                                                            <div className="space-y-4">
                                                                <div className="text-xs font-bold text-navy max-w-[200px] leading-tight truncate">{booking.pickup_location}</div>
                                                                <div className="text-xs font-bold text-navy max-w-[200px] leading-tight truncate">{booking.dropoff_location}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-10 py-8">
                                                        <div className="inline-block bg-navy p-3 rounded-2xl border border-white/10 shadow-lg shadow-navy/5">
                                                            <div className="text-xs text-white font-black tracking-tight">{new Date(booking.booking_datetime).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</div>
                                                            <div className="text-[10px] text-gold font-bold mt-1 tracking-widest">{new Date(booking.booking_datetime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</div>
                                                        </div>
                                                    </td>
                                                    <td className="px-10 py-8">
                                                        <div className="inline-block bg-[#F8FAFC] p-3 rounded-2xl border border-gray-100">
                                                            <div className="text-xs text-navy font-black tracking-tight">{new Date(booking.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</div>
                                                            <div className="text-[10px] text-gold font-bold mt-1 tracking-widest">{new Date(booking.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</div>
                                                        </div>
                                                    </td>
                                                    <td className="px-10 py-8">
                                                        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.15em] bg-blue-50 text-blue-700 border border-blue-200">
                                                            📋 {booking.source_form || '—'}
                                                        </span>
                                                    </td>
                                                    <td className="px-10 py-8 text-center">
                                                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-navy/10 text-navy font-black text-sm">
                                                            {booking.passengers ?? '—'}
                                                        </span>
                                                    </td>
                                                    <td className="px-10 py-8 text-center">
                                                        <span className={`inline-flex items-center px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] border ${booking.status === 'confirmed' ? 'bg-green-50 text-green-600 border-green-200 shadow-sm shadow-green-100' :
                                                                booking.status === 'cancelled' ? 'bg-red-50 text-red-600 border-red-200 shadow-sm shadow-red-100' :
                                                                    'bg-yellow-50 text-yellow-600 border-yellow-200 shadow-sm shadow-yellow-100 animate-pulse'
                                                            }`}>
                                                            {booking.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-10 py-8 text-right">
                                                        <div className="flex gap-2 justify-end">
                                                            <button
                                                                onClick={() => setViewItem({ type: 'booking', data: booking })}
                                                                className="h-10 w-10 flex items-center justify-center bg-gray-50 text-gray-400 rounded-xl hover:bg-navy hover:text-white hover:scale-110 active:scale-95 transition-all shadow-sm border border-transparent hover:border-navy"
                                                                title="View Details"
                                                            >
                                                                👁
                                                            </button>
                                                            <button
                                                                onClick={() => openEmailModal(booking.email, booking.full_name, `Re: Your Italy Taxi Booking`)}
                                                                className="h-10 w-10 flex items-center justify-center bg-gray-50 text-gray-400 rounded-xl hover:bg-gold hover:text-navy hover:scale-110 active:scale-95 transition-all shadow-sm border border-transparent hover:border-gold"
                                                                title="Email Client"
                                                            >
                                                                ✉
                                                            </button>
                                                            <button
                                                                onClick={() => setDispatchBooking(booking)}
                                                                className="h-10 w-10 flex items-center justify-center bg-gray-50 text-gray-400 rounded-xl hover:bg-[#25D366] hover:text-white hover:scale-110 active:scale-95 transition-all shadow-sm border border-transparent hover:border-[#25D366]"
                                                                title="Dispatch to Driver (WhatsApp)"
                                                            >
                                                                🚗
                                                            </button>
                                                            <button
                                                                onClick={() => createInvoiceFromBooking(booking)}
                                                                className="h-10 w-10 flex items-center justify-center bg-gray-50 text-gray-400 rounded-xl hover:bg-navy hover:text-gold hover:scale-110 active:scale-95 transition-all shadow-sm border border-transparent hover:border-navy"
                                                                title="Create Invoice"
                                                            >
                                                                🧾
                                                            </button>
                                                            <button
                                                                onClick={() => handleConfirm(booking)}
                                                                className="h-10 w-10 flex items-center justify-center bg-gray-50 text-gray-400 rounded-xl hover:bg-green-600 hover:text-white hover:scale-110 active:scale-95 transition-all shadow-sm border border-transparent hover:border-green-400"
                                                                title="Confirm Booking"
                                                            >
                                                                ✓
                                                            </button>
                                                            <button
                                                                onClick={() => updateStatus(booking.id, 'cancelled')}
                                                                className="h-10 w-10 flex items-center justify-center bg-gray-50 text-gray-400 rounded-xl hover:bg-red-600 hover:text-white hover:scale-110 active:scale-95 transition-all shadow-sm border border-transparent hover:border-red-400"
                                                                title="Cancel Booking"
                                                            >
                                                                ✕
                                                            </button>
                                                            <button
                                                                onClick={() => deleteBooking(booking.id)}
                                                                className="h-10 w-10 flex items-center justify-center bg-gray-50 text-gray-400 rounded-xl hover:bg-red-900 hover:text-white hover:scale-110 active:scale-95 transition-all shadow-sm border border-transparent hover:border-red-900"
                                                                title="Delete Booking"
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
                            ) : (
                                contacts.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center pt-32 gap-4">
                                        <span className="text-6xl">📭</span>
                                        <p className="text-sm font-bold text-navy opacity-30 uppercase tracking-widest">No contact messages found.</p>
                                    </div>
                                ) : (
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-navy text-white text-[9px] font-bold uppercase tracking-[0.3em]">
                                                <th className="px-10 py-6">Sender</th>
                                                <th className="px-10 py-6">Subject</th>
                                                <th className="px-10 py-6">Message</th>
                                                <th className="px-10 py-6">Date Received</th>
                                                <th className="px-10 py-6">Form Source</th>
                                                <th className="px-10 py-6 text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            {contacts.map((contact) => (
                                                <tr key={contact.id} className="hover:bg-[#F8FAFC]/80 transition-all duration-300">
                                                    <td className="px-10 py-8">
                                                        <div className="font-black text-navy text-lg mb-1 leading-none">{contact.full_name}</div>
                                                        <div className="text-xs font-semibold text-gold/80 italic">{contact.email}</div>
                                                        {contact.phone && <div className="text-[10px] font-bold text-gray-400 font-mono tracking-tighter uppercase mt-1">{contact.phone}</div>}
                                                    </td>
                                                    <td className="px-10 py-8">
                                                        <div className="text-sm font-bold text-navy max-w-[180px] leading-tight">{contact.subject}</div>
                                                    </td>
                                                    <td className="px-10 py-8">
                                                        <div className="text-xs text-gray-600 max-w-[280px] leading-relaxed line-clamp-3">{contact.message}</div>
                                                    </td>
                                                    <td className="px-10 py-8">
                                                        <div className="inline-block bg-navy p-3 rounded-2xl border border-white/10 shadow-lg shadow-navy/5">
                                                            <div className="text-xs text-white font-black tracking-tight">{new Date(contact.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</div>
                                                            <div className="text-[10px] text-gold font-bold mt-1 tracking-widest">{new Date(contact.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</div>
                                                        </div>
                                                    </td>
                                                    <td className="px-10 py-8">
                                                        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.15em] bg-blue-50 text-blue-700 border border-blue-200">
                                                            📋 {contact.source_form || '—'}
                                                        </span>
                                                    </td>
                                                    <td className="px-10 py-8 text-right">
                                                        <div className="flex gap-2 justify-end">
                                                            <button
                                                                onClick={() => setViewItem({ type: 'contact', data: contact })}
                                                                className="h-10 w-10 flex items-center justify-center bg-gray-50 text-gray-400 rounded-xl hover:bg-navy hover:text-white hover:scale-110 active:scale-95 transition-all shadow-sm border border-transparent hover:border-navy"
                                                                title="View Details"
                                                            >
                                                                👁
                                                            </button>
                                                            <button
                                                                onClick={() => openEmailModal(contact.email, contact.full_name, `Re: ${contact.subject}`)}
                                                                className="h-10 w-10 flex items-center justify-center bg-gray-50 text-gray-400 rounded-xl hover:bg-gold hover:text-navy hover:scale-110 active:scale-95 transition-all shadow-sm border border-transparent hover:border-gold"
                                                                title="Email Client"
                                                            >
                                                                ✉
                                                            </button>
                                                            <button
                                                                onClick={() => deleteContact(contact.id)}
                                                                className="h-10 w-10 flex items-center justify-center bg-gray-50 text-gray-400 rounded-xl hover:bg-red-900 hover:text-white hover:scale-110 active:scale-95 transition-all shadow-sm border border-transparent hover:border-red-900"
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

