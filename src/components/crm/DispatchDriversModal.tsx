'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import {
    listDriversAction,
    listDriverContactsAction,
    logDriverContactAction,
    updateDriverContactStatusAction,
    Driver,
    DriverContact,
} from '@/app/actions/drivers';

const errMsg = (e: unknown) => (e instanceof Error ? e.message : String(e));

interface DispatchBooking {
    id: string;
    full_name?: string;
    pickup_location?: string | null;
    dropoff_location?: string | null;
    booking_datetime?: string | null;
    passengers?: number | null;
}

function formatDateTime(raw: string | null | undefined): string {
    if (!raw) return '—';
    const d = new Date(raw);
    if (isNaN(d.getTime())) return '—';
    const date = d.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'UTC' });
    const time = d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'UTC' });
    return `${date} at ${time}`;
}

/** Builds the exact dispatch message (spec format). */
function buildMessage(driverName: string, booking: DispatchBooking, vehicleRequired: string, luggage: string): string {
    return `Hello ${driverName},

Please confirm availability and price for this transfer:

Pickup: ${booking.pickup_location || '—'}
Drop-off: ${booking.dropoff_location || '—'}
Date & Time: ${formatDateTime(booking.booking_datetime)}
Passengers: ${booking.passengers ?? '—'}
Luggage: ${luggage.trim() || '—'}
Vehicle Required: ${vehicleRequired || '—'}

Please reply with your price and availability.

Thank you.`;
}

/** wa.me click-to-chat link — number digits only, message URL-encoded. No API. */
function waLink(number: string, text: string): string {
    const digits = (number || '').replace(/\D/g, '');
    return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

const STATUS_BADGE: Record<string, string> = {
    contacted: 'bg-blue-50 text-blue-600 border-blue-200',
    confirmed: 'bg-green-50 text-green-600 border-green-200',
    rejected: 'bg-red-50 text-red-600 border-red-200',
};

export default function DispatchDriversModal({ booking, onClose }: { booking: DispatchBooking; onClose: () => void }) {
    const [drivers, setDrivers] = useState<Driver[]>([]);
    const [contacts, setContacts] = useState<DriverContact[]>([]);
    const [loading, setLoading] = useState(true);
    const [cityFilter, setCityFilter] = useState<string>('');
    const [vehicleFilter, setVehicleFilter] = useState('all');
    const [luggage, setLuggage] = useState('');

    const load = useCallback(async () => {
        setLoading(true);
        try {
            const [d, c] = await Promise.all([
                listDriversAction(),
                listDriverContactsAction(booking.id),
            ]);
            setDrivers(d);
            setContacts(c);
            // Auto-match: default city to a driver city found in the pickup location.
            const pickup = (booking.pickup_location || '').toLowerCase();
            const active = d.filter(x => x.status === 'active');
            const matched = active.find(x =>
                pickup.includes(x.city.toLowerCase()) ||
                (x.coverage_areas || '').toLowerCase().split(',').some(a => a.trim() && pickup.includes(a.trim().toLowerCase()))
            );
            setCityFilter(matched ? matched.city : 'all');
        } catch (e) {
            console.error('Dispatch load failed', e);
        } finally {
            setLoading(false);
        }
    }, [booking.id, booking.pickup_location]);

    useEffect(() => { load(); }, [load]);

    const activeDrivers = useMemo(() => drivers.filter(d => d.status === 'active'), [drivers]);
    const cities = useMemo(() => Array.from(new Set(activeDrivers.map(d => d.city))).sort(), [activeDrivers]);
    const vehicles = useMemo(() => Array.from(new Set(activeDrivers.map(d => d.vehicle_type).filter(Boolean))).sort() as string[], [activeDrivers]);

    const matchedCity = useMemo(() => {
        const pickup = (booking.pickup_location || '').toLowerCase();
        return activeDrivers.find(x => pickup.includes(x.city.toLowerCase()))?.city || null;
    }, [activeDrivers, booking.pickup_location]);

    const shown = useMemo(() => activeDrivers.filter(d => {
        if (cityFilter !== 'all' && cityFilter !== '' && d.city !== cityFilter) return false;
        if (vehicleFilter !== 'all' && d.vehicle_type !== vehicleFilter) return false;
        return true;
    }), [activeDrivers, cityFilter, vehicleFilter]);

    async function handleOpenWhatsApp(d: Driver) {
        const message = buildMessage(d.name, booking, d.vehicle_type || '', luggage);
        // Open WhatsApp Web/App with pre-filled text — admin clicks send manually.
        window.open(waLink(d.whatsapp_number, message), '_blank', 'noopener,noreferrer');
        // Log to contact history (does NOT send anything).
        try {
            const row = await logDriverContactAction({
                booking_id: booking.id,
                driver_id: d.id,
                driver_name: d.name,
                message_text: message,
            });
            setContacts(prev => [row, ...prev]);
        } catch (e) {
            console.error('Failed to log contact', e);
        }
    }

    async function setStatus(id: string, status: 'contacted' | 'confirmed' | 'rejected') {
        try {
            await updateDriverContactStatusAction(id, status);
            setContacts(prev => prev.map(c => c.id === id ? { ...c, status } : c));
        } catch (e) {
            alert('Error: ' + errMsg(e));
        }
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={onClose}>
            <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-3xl max-h-[92vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                {/* Header */}
                <div className="flex items-center justify-between px-8 py-6 bg-[#0F1C2E] rounded-t-[2rem] sticky top-0 z-10">
                    <div>
                        <h2 className="text-xl font-black text-white tracking-tight">Dispatch to Driver</h2>
                        <p className="text-[10px] font-bold text-gold/70 uppercase tracking-widest mt-0.5">{booking.full_name} · {booking.pickup_location} → {booking.dropoff_location}</p>
                    </div>
                    <button onClick={onClose} className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-all">✕</button>
                </div>

                <div className="p-8 space-y-6">
                    {/* Trip summary */}
                    <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                        <div><span className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">Date &amp; Time</span><div className="font-bold text-navy">{formatDateTime(booking.booking_datetime)}</div></div>
                        <div><span className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">Passengers</span><div className="font-bold text-navy">{booking.passengers ?? '—'}</div></div>
                    </div>

                    {/* Controls */}
                    <div className="flex flex-wrap items-end gap-3">
                        <div>
                            <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">City {matchedCity && <span className="text-green-600 normal-case">· matched: {matchedCity}</span>}</label>
                            <select value={cityFilter} onChange={e => setCityFilter(e.target.value)} className="px-4 py-3 border border-gray-200 rounded-xl text-sm text-navy font-semibold focus:outline-none focus:border-gold">
                                <option value="all">All cities</option>
                                {cities.map(c => <option key={c} value={c}>{c}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Vehicle</label>
                            <select value={vehicleFilter} onChange={e => setVehicleFilter(e.target.value)} className="px-4 py-3 border border-gray-200 rounded-xl text-sm text-navy font-semibold focus:outline-none focus:border-gold">
                                <option value="all">All vehicles</option>
                                {vehicles.map(v => <option key={v} value={v}>{v}</option>)}
                            </select>
                        </div>
                        <div className="flex-1 min-w-[160px]">
                            <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Luggage (added to message)</label>
                            <input value={luggage} onChange={e => setLuggage(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-navy font-semibold focus:outline-none focus:border-gold" placeholder="e.g., 3 suitcases" />
                        </div>
                    </div>

                    {/* Driver list */}
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Matching Active Drivers ({shown.length})</p>
                        {loading ? (
                            <div className="py-12 text-center text-gray-400 text-sm font-bold">Loading drivers...</div>
                        ) : shown.length === 0 ? (
                            <div className="py-10 text-center text-gray-400 text-sm font-bold">
                                No active drivers{cityFilter !== 'all' && cityFilter !== '' ? ` in ${cityFilter}` : ''}. Add drivers in the Drivers tab, or choose another city above.
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {shown.map(d => (
                                    <div key={d.id} className="flex items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-white px-5 py-4 hover:border-gold/40 transition-all">
                                        <div className="min-w-0">
                                            <div className="font-black text-navy text-sm leading-tight">{d.name} <span className="text-gray-300 font-normal">·</span> <span className="text-xs font-bold text-gray-500">{d.city}</span></div>
                                            <div className="text-xs text-gray-500 mt-0.5">
                                                {d.vehicle_type || 'Vehicle n/a'}{d.vehicle_model ? ` (${d.vehicle_model})` : ''}
                                                {d.passenger_capacity != null ? ` · ${d.passenger_capacity} pax` : ''}
                                                {d.luggage_capacity != null ? ` · ${d.luggage_capacity} bags` : ''}
                                            </div>
                                            <div className="text-[10px] font-mono text-gray-400 mt-0.5">{d.whatsapp_number}</div>
                                        </div>
                                        <button onClick={() => handleOpenWhatsApp(d)} className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-black text-white hover:bg-[#1da851] active:scale-95 transition-all shadow">
                                            💬 Open WhatsApp
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Contact history */}
                    {contacts.length > 0 && (
                        <div className="border-t border-gray-100 pt-6">
                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Contact History ({contacts.length})</p>
                            <div className="space-y-2">
                                {contacts.map(c => (
                                    <div key={c.id} className="flex items-center justify-between gap-3 rounded-xl bg-[#F8FAFC] border border-gray-100 px-4 py-3">
                                        <div className="min-w-0">
                                            <div className="text-sm font-bold text-navy">{c.driver_name}</div>
                                            <div className="text-[10px] text-gray-400">{new Date(c.contacted_at).toLocaleString('en-GB', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}</div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${STATUS_BADGE[c.status]}`}>{c.status}</span>
                                            {c.status !== 'confirmed' && <button onClick={() => setStatus(c.id, 'confirmed')} className="h-7 w-7 flex items-center justify-center bg-white border border-gray-200 rounded-lg text-gray-400 hover:bg-green-600 hover:text-white transition-all" title="Mark confirmed">✓</button>}
                                            {c.status !== 'rejected' && <button onClick={() => setStatus(c.id, 'rejected')} className="h-7 w-7 flex items-center justify-center bg-white border border-gray-200 rounded-lg text-gray-400 hover:bg-red-600 hover:text-white transition-all" title="Mark rejected">✕</button>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <p className="text-[11px] text-gray-400 leading-relaxed border-t border-gray-100 pt-4">
                        Clicking <strong>Open WhatsApp</strong> opens WhatsApp Web/App with the message pre-filled — nothing is sent automatically. You must press send yourself. Each open is logged above so you can track who you contacted.
                    </p>
                </div>
            </div>
        </div>
    );
}
