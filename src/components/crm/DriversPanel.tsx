'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import {
    listDriversAction,
    createDriverAction,
    updateDriverAction,
    deleteDriverAction,
    Driver,
} from '@/app/actions/drivers';

interface FormState {
    name: string;
    whatsapp_number: string;
    city: string;
    coverage_areas: string;
    vehicle_type: string;
    vehicle_model: string;
    passenger_capacity: string;
    luggage_capacity: string;
    notes: string;
    status: string;
}

const EMPTY: FormState = {
    name: '', whatsapp_number: '', city: '', coverage_areas: '', vehicle_type: '',
    vehicle_model: '', passenger_capacity: '', luggage_capacity: '', notes: '', status: 'active',
};

const VEHICLE_TYPES = ['Sedan', 'Estate / Wagon', 'Minivan', 'Minibus', 'Luxury Sedan', 'Luxury Van', 'SUV', 'Coach'];

const errMsg = (e: unknown) => (e instanceof Error ? e.message : String(e));
const inputClass = 'w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-navy font-semibold focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all';
const labelClass = 'block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2';

export default function DriversPanel() {
    const [drivers, setDrivers] = useState<Driver[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [cityFilter, setCityFilter] = useState('all');
    const [vehicleFilter, setVehicleFilter] = useState('all');

    const [formOpen, setFormOpen] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [form, setForm] = useState<FormState>(EMPTY);
    const [saving, setSaving] = useState(false);
    const [formError, setFormError] = useState<string | null>(null);

    const load = useCallback(async () => {
        setLoading(true);
        try {
            setDrivers(await listDriversAction());
        } catch (e) {
            console.error('Failed to load drivers', e);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => { load(); }, [load]);

    function openCreate() {
        setEditingId(null);
        setForm(EMPTY);
        setFormError(null);
        setFormOpen(true);
    }

    function openEdit(d: Driver) {
        setEditingId(d.id);
        setForm({
            name: d.name,
            whatsapp_number: d.whatsapp_number,
            city: d.city,
            coverage_areas: d.coverage_areas || '',
            vehicle_type: d.vehicle_type || '',
            vehicle_model: d.vehicle_model || '',
            passenger_capacity: d.passenger_capacity != null ? String(d.passenger_capacity) : '',
            luggage_capacity: d.luggage_capacity != null ? String(d.luggage_capacity) : '',
            notes: d.notes || '',
            status: d.status,
        });
        setFormError(null);
        setFormOpen(true);
    }

    async function handleSubmit() {
        if (!form.name.trim()) return setFormError('Driver name is required.');
        if (!form.whatsapp_number.trim()) return setFormError('WhatsApp number is required.');
        if (!form.city.trim()) return setFormError('City is required.');
        setSaving(true);
        setFormError(null);
        try {
            const fd = new FormData();
            Object.entries(form).forEach(([k, v]) => fd.append(k, v));
            if (editingId) await updateDriverAction(editingId, fd);
            else await createDriverAction(fd);
            setFormOpen(false);
            await load();
        } catch (e) {
            setFormError(errMsg(e) || 'Failed to save driver.');
        } finally {
            setSaving(false);
        }
    }

    async function handleDelete(d: Driver) {
        if (!confirm(`Delete driver "${d.name}"? This cannot be undone.`)) return;
        try {
            await deleteDriverAction(d.id);
            setDrivers(prev => prev.filter(x => x.id !== d.id));
        } catch (e) {
            alert('Error: ' + errMsg(e));
        }
    }

    const cities = useMemo(() => Array.from(new Set(drivers.map(d => d.city).filter(Boolean))).sort(), [drivers]);
    const vehicles = useMemo(() => Array.from(new Set(drivers.map(d => d.vehicle_type).filter(Boolean))).sort() as string[], [drivers]);

    const filtered = useMemo(() => {
        const q = search.trim().toLowerCase();
        return drivers.filter(d => {
            if (cityFilter !== 'all' && d.city !== cityFilter) return false;
            if (vehicleFilter !== 'all' && d.vehicle_type !== vehicleFilter) return false;
            if (!q) return true;
            return [d.name, d.city, d.coverage_areas, d.vehicle_type, d.vehicle_model, d.whatsapp_number]
                .some(v => (v || '').toLowerCase().includes(q));
        });
    }, [drivers, search, cityFilter, vehicleFilter]);

    const activeCount = drivers.filter(d => d.status === 'active').length;

    return (
        <>
            {/* ===== Add / Edit Modal ===== */}
            {formOpen && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => !saving && setFormOpen(false)}>
                    <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-3xl max-h-[92vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                        <div className="flex items-center justify-between px-8 py-6 bg-[#0F1C2E] rounded-t-[2rem] sticky top-0 z-10">
                            <div>
                                <h2 className="text-xl font-black text-white tracking-tight">{editingId ? 'Edit Driver' : 'Add Driver'}</h2>
                                <p className="text-[10px] font-bold text-gold/70 uppercase tracking-widest mt-0.5">Fleet &amp; dispatch directory</p>
                            </div>
                            <button onClick={() => !saving && setFormOpen(false)} className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-all">✕</button>
                        </div>

                        <div className="p-8 space-y-5">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className={labelClass}>Driver Name *</label>
                                    <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Marco Rossi" />
                                </div>
                                <div>
                                    <label className={labelClass}>WhatsApp Number (with country code) *</label>
                                    <input value={form.whatsapp_number} onChange={e => setForm({ ...form, whatsapp_number: e.target.value })} className={inputClass} placeholder="+39 333 123 4567" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className={labelClass}>City *</label>
                                    <input value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} className={inputClass} placeholder="Rome" />
                                </div>
                                <div>
                                    <label className={labelClass}>Status</label>
                                    <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })} className={inputClass}>
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className={labelClass}>Coverage Areas</label>
                                <input value={form.coverage_areas} onChange={e => setForm({ ...form, coverage_areas: e.target.value })} className={inputClass} placeholder="Fiumicino, Ciampino, Civitavecchia, Ostia" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className={labelClass}>Vehicle Type</label>
                                    <select value={form.vehicle_type} onChange={e => setForm({ ...form, vehicle_type: e.target.value })} className={inputClass}>
                                        <option value="">—</option>
                                        {VEHICLE_TYPES.map(v => <option key={v} value={v}>{v}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className={labelClass}>Vehicle Model</label>
                                    <input value={form.vehicle_model} onChange={e => setForm({ ...form, vehicle_model: e.target.value })} className={inputClass} placeholder="Mercedes V-Class" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className={labelClass}>Passenger Capacity</label>
                                    <input type="number" min="0" value={form.passenger_capacity} onChange={e => setForm({ ...form, passenger_capacity: e.target.value })} className={inputClass} placeholder="8" />
                                </div>
                                <div>
                                    <label className={labelClass}>Luggage Capacity</label>
                                    <input type="number" min="0" value={form.luggage_capacity} onChange={e => setForm({ ...form, luggage_capacity: e.target.value })} className={inputClass} placeholder="8" />
                                </div>
                            </div>

                            <div>
                                <label className={labelClass}>Notes</label>
                                <textarea value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} rows={3} className={`${inputClass} resize-none`} placeholder="English-speaking, child seats available, etc." />
                            </div>

                            {formError && <div className="px-4 py-3 rounded-xl text-sm font-bold bg-red-50 text-red-700 border border-red-200">✕ {formError}</div>}

                            <div className="flex gap-3 pt-2">
                                <button onClick={handleSubmit} disabled={saving} className="flex-1 py-4 bg-[#0F1C2E] text-white font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-gold hover:text-navy transition-all disabled:opacity-40 shadow-lg">
                                    {saving ? 'Saving...' : editingId ? 'Update Driver' : 'Add Driver'}
                                </button>
                                <button onClick={() => !saving && setFormOpen(false)} className="px-8 py-4 bg-gray-100 text-gray-500 font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-gray-200 transition-all">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ===== Stats ===== */}
            <div className="grid grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm shadow-navy/5 flex flex-col justify-between">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Total Drivers</div>
                    <div className="flex items-end justify-between">
                        <span className="text-5xl font-black text-navy">{drivers.length}</span>
                        <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center"><span className="text-xl">🚗</span></div>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm shadow-navy/5 flex flex-col justify-between">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Active Drivers</div>
                    <div className="flex items-end justify-between">
                        <span className="text-5xl font-black text-green-600">{activeCount}</span>
                        <div className="w-10 h-10 rounded-2xl bg-green-50 flex items-center justify-center"><span className="text-xl">✅</span></div>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm shadow-navy/5 flex flex-col justify-between">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Cities Covered</div>
                    <div className="flex items-end justify-between">
                        <span className="text-5xl font-black text-gold">{cities.length}</span>
                        <div className="w-10 h-10 rounded-2xl bg-yellow-50 flex items-center justify-center"><span className="text-xl">📍</span></div>
                    </div>
                </div>
            </div>

            {/* ===== Table ===== */}
            <div className="bg-white rounded-[3rem] shadow-2xl shadow-navy/10 border border-gray-100 overflow-hidden">
                <div className="p-8 border-b border-gray-50 flex flex-wrap gap-4 justify-between items-center bg-gray-50/50">
                    <h3 className="text-lg font-bold text-navy flex items-center gap-3">
                        Driver Directory
                        <span className="text-[10px] bg-navy text-white px-3 py-1 rounded-full uppercase tracking-widest font-bold">{filtered.length}</span>
                    </h3>
                    <div className="flex flex-wrap items-center gap-3">
                        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search name, area, vehicle..." className="px-4 py-3 w-64 border border-gray-200 rounded-xl text-sm text-navy font-semibold focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20" />
                        <select value={cityFilter} onChange={e => setCityFilter(e.target.value)} className="px-4 py-3 border border-gray-200 rounded-xl text-sm text-navy font-semibold focus:outline-none focus:border-gold">
                            <option value="all">All Cities</option>
                            {cities.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                        <select value={vehicleFilter} onChange={e => setVehicleFilter(e.target.value)} className="px-4 py-3 border border-gray-200 rounded-xl text-sm text-navy font-semibold focus:outline-none focus:border-gold">
                            <option value="all">All Vehicles</option>
                            {vehicles.map(v => <option key={v} value={v}>{v}</option>)}
                        </select>
                        <button onClick={openCreate} className="px-6 py-3 bg-[#0F1C2E] text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-gold hover:text-navy transition-all shadow-lg whitespace-nowrap">+ Add Driver</button>
                    </div>
                </div>

                <div className="overflow-x-auto min-h-[400px]">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center pt-32 gap-6">
                            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gold outline outline-4 outline-gold/10"></div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.5em] animate-pulse">Loading drivers...</p>
                        </div>
                    ) : filtered.length === 0 ? (
                        <div className="flex flex-col items-center justify-center pt-32 gap-4">
                            <span className="text-6xl">🚖</span>
                            <p className="text-sm font-bold text-navy opacity-30 uppercase tracking-widest">{search || cityFilter !== 'all' || vehicleFilter !== 'all' ? 'No matching drivers.' : 'No drivers yet. Add your first.'}</p>
                        </div>
                    ) : (
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-navy text-white text-[9px] font-bold uppercase tracking-[0.3em]">
                                    <th className="px-8 py-6">Driver</th>
                                    <th className="px-8 py-6">City / Coverage</th>
                                    <th className="px-8 py-6">Vehicle</th>
                                    <th className="px-8 py-6 text-center">Pax / Bags</th>
                                    <th className="px-8 py-6 text-center">Status</th>
                                    <th className="px-8 py-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {filtered.map(d => (
                                    <tr key={d.id} className="hover:bg-[#F8FAFC]/80 transition-all">
                                        <td className="px-8 py-7">
                                            <div className="font-black text-navy text-sm leading-tight">{d.name}</div>
                                            <div className="text-xs font-bold text-gray-400 font-mono mt-0.5">{d.whatsapp_number}</div>
                                        </td>
                                        <td className="px-8 py-7">
                                            <div className="text-sm font-bold text-navy">{d.city}</div>
                                            {d.coverage_areas && <div className="text-xs text-gray-400 max-w-[220px] leading-tight">{d.coverage_areas}</div>}
                                        </td>
                                        <td className="px-8 py-7">
                                            <div className="text-sm font-bold text-navy">{d.vehicle_type || '—'}</div>
                                            {d.vehicle_model && <div className="text-xs text-gray-400">{d.vehicle_model}</div>}
                                        </td>
                                        <td className="px-8 py-7 text-center">
                                            <span className="text-sm font-bold text-navy">{d.passenger_capacity ?? '—'}</span>
                                            <span className="text-gray-300 mx-1">/</span>
                                            <span className="text-sm font-bold text-navy">{d.luggage_capacity ?? '—'}</span>
                                        </td>
                                        <td className="px-8 py-7 text-center">
                                            <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.15em] border ${d.status === 'active' ? 'bg-green-50 text-green-600 border-green-200' : 'bg-gray-100 text-gray-500 border-gray-200'}`}>{d.status}</span>
                                        </td>
                                        <td className="px-8 py-7 text-right">
                                            <div className="flex gap-1.5 justify-end">
                                                <a href={`https://wa.me/${d.whatsapp_number.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="h-9 w-9 flex items-center justify-center bg-gray-50 text-gray-400 rounded-xl hover:bg-green-600 hover:text-white transition-all" title="Open WhatsApp chat">💬</a>
                                                <button onClick={() => openEdit(d)} className="h-9 w-9 flex items-center justify-center bg-gray-50 text-gray-400 rounded-xl hover:bg-navy hover:text-white transition-all" title="Edit">✎</button>
                                                <button onClick={() => handleDelete(d)} className="h-9 w-9 flex items-center justify-center bg-gray-50 text-gray-400 rounded-xl hover:bg-red-900 hover:text-white transition-all" title="Delete">🗑</button>
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
