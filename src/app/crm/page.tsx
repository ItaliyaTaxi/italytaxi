'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CRMPage() {
    const [bookings, setBookings] = useState<any[]>([]);
    const [contacts, setContacts] = useState<any[]>([]);
    const [activeTab, setActiveTab] = useState<'bookings' | 'contacts'>('bookings');
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null);
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

    async function updateStatus(id: string, status: string) {
        const { error } = await supabase.from('bookings').update({ status }).eq('id', id);
        if (!error) setBookings(bookings.map(b => b.id === id ? { ...b, status } : b));
    }

    async function deleteBooking(id: string) {
        if (!confirm('Delete this booking? This cannot be undone.')) return;
        const { error } = await supabase.from('bookings').delete().eq('id', id);
        if (!error) setBookings(bookings.filter(b => b.id !== id));
    }

    async function deleteContact(id: string) {
        if (!confirm('Delete this contact message? This cannot be undone.')) return;
        const { error } = await supabase.from('contacts').delete().eq('id', id);
        if (!error) setContacts(contacts.filter(c => c.id !== id));
    }

    if (!user && !loading) return null;

    const stats = {
        total: bookings.length,
        pending: bookings.filter(b => b.status === 'pending').length,
        confirmed: bookings.filter(b => b.status === 'confirmed').length,
        cancelled: bookings.filter(b => b.status === 'cancelled').length,
    };

    return (
        <div className="flex min-h-screen bg-[#F8FAFC]">
            {/* Sidebar */}
            <aside className="w-80 bg-[#0F1C2E] text-white flex flex-col fixed h-full z-50">
                <div className="p-10 border-b border-white/5">
                    <Link href="/" className="flex items-center gap-4 group">
                        <div className="w-12 h-12 bg-gold flex items-center justify-center rounded-xl shadow-lg shadow-gold/20 group-hover:scale-110 transition-transform">
                            <span className="text-navy font-black text-2xl italic">I</span>
                        </div>
                        <div>
                            <span className="block text-xl font-black tracking-tighter leading-none italic group-hover:text-gold transition-colors">ITALIARIDE</span>
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
                            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm shadow-navy/5 flex flex-col justify-between">
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Total Reservations</div>
                                <div className="flex items-end justify-between">
                                    <span className="text-5xl font-black text-navy">{stats.total}</span>
                                    <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center">
                                        <span className="text-xl">📊</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm shadow-navy/5 flex flex-col justify-between">
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 italic">Pending Verification</div>
                                <div className="flex items-end justify-between">
                                    <span className="text-5xl font-black text-yellow-600">{stats.pending}</span>
                                    <div className="w-10 h-10 rounded-2xl bg-yellow-50 flex items-center justify-center animate-pulse">
                                        <span className="text-xl text-yellow-500">⏳</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm shadow-navy/5 flex flex-col justify-between">
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Confirmed Rides</div>
                                <div className="flex items-end justify-between">
                                    <span className="text-5xl font-black text-green-600">{stats.confirmed}</span>
                                    <div className="w-10 h-10 rounded-2xl bg-green-50 flex items-center justify-center">
                                        <span className="text-xl text-green-500">✅</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm shadow-navy/5 flex flex-col justify-between">
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Cancelled / Lost</div>
                                <div className="flex items-end justify-between">
                                    <span className="text-5xl font-black text-red-600">{stats.cancelled}</span>
                                    <div className="w-10 h-10 rounded-2xl bg-red-50 flex items-center justify-center">
                                        <span className="text-xl text-red-500">❌</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Table Section */}
                    <div className="bg-white rounded-[3rem] shadow-2xl shadow-navy/10 border border-gray-100 overflow-hidden">
                        <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
                            <h3 className="text-lg font-bold text-navy flex items-center gap-3">
                                {activeTab === 'bookings' ? 'Recent Activity Log' : 'Contact Messages'}
                                <span className="text-[10px] bg-navy text-white px-3 py-1 rounded-full uppercase tracking-widest font-bold">Real-time</span>
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
                                bookings.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center pt-32 gap-4">
                                        <span className="text-6xl">📥</span>
                                        <p className="text-sm font-bold text-navy opacity-30 uppercase tracking-widest">No booking records found.</p>
                                    </div>
                                ) : (
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-navy text-white text-[9px] font-bold uppercase tracking-[0.3em]">
                                                <th className="px-10 py-6">Customer Identity</th>
                                                <th className="px-10 py-6">Route Logistics</th>
                                                <th className="px-10 py-6">Schedule</th>
                                                <th className="px-10 py-6 text-center">Passengers</th>
                                                <th className="px-10 py-6 text-center">Validation</th>
                                                <th className="px-10 py-6 text-right">Management</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            {bookings.map((booking) => (
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
                                                                onClick={() => updateStatus(booking.id, 'confirmed')}
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
                                                <th className="px-10 py-6">Date</th>
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
                                                    <td className="px-10 py-8 text-right">
                                                        <button
                                                            onClick={() => deleteContact(contact.id)}
                                                            className="h-10 w-10 flex items-center justify-center bg-gray-50 text-gray-400 rounded-xl hover:bg-red-900 hover:text-white hover:scale-110 active:scale-95 transition-all shadow-sm border border-transparent hover:border-red-900 ml-auto"
                                                            title="Delete Message"
                                                        >
                                                            🗑
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
