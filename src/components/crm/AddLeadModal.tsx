'use client';

import { useState, useMemo } from 'react';
import { createManualLeadAction } from '@/app/actions/crm';

interface AddLeadModalProps {
    isOpen: boolean;
    onClose: () => void;
    existingBookings: any[];
    onLeadCreated: (newLead: any) => void;
    onViewExistingLead: (lead: any) => void;
}

export default function AddLeadModal({
    isOpen,
    onClose,
    existingBookings,
    onLeadCreated,
    onViewExistingLead,
}: AddLeadModalProps) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropoffLocation, setDropoffLocation] = useState('');
    const [bookingDatetime, setBookingDatetime] = useState('');
    const [passengers, setPassengers] = useState<number>(1);
    const [luggage, setLuggage] = useState('');
    const [flightNumber, setFlightNumber] = useState('');
    const [sourceForm, setSourceForm] = useState('WhatsApp');
    const [status, setStatus] = useState<'pending' | 'confirmed' | 'cancelled'>('confirmed');
    const [tripSelection, setTripSelection] = useState<'outbound' | 'both' | 'roundtrip'>('outbound');
    
    // Return trip fields
    const [returnPickupLocation, setReturnPickupLocation] = useState('');
    const [returnDropoffLocation, setReturnDropoffLocation] = useState('');
    const [returnDatetime, setReturnDatetime] = useState('');
    const [returnFlightNumber, setReturnFlightNumber] = useState('');
    
    const [adminNotes, setAdminNotes] = useState('');
    
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [duplicateDismissed, setDuplicateDismissed] = useState(false);

    // Duplicate detection based on email or phone
    const duplicateMatch = useMemo(() => {
        if (duplicateDismissed) return null;
        const cleanEmail = email.trim().toLowerCase();
        const cleanPhone = phone.replace(/\D/g, '');

        if (!cleanEmail && cleanPhone.length < 5) return null;

        return existingBookings.find(b => {
            const bEmail = (b.email || '').trim().toLowerCase();
            const bPhone = (b.phone || '').replace(/\D/g, '');

            const matchEmail = cleanEmail && bEmail && cleanEmail === bEmail;
            const matchPhone = cleanPhone.length >= 5 && bPhone.length >= 5 && (cleanPhone.endsWith(bPhone) || bPhone.endsWith(cleanPhone));

            return matchEmail || matchPhone;
        });
    }, [email, phone, existingBookings, duplicateDismissed]);

    if (!isOpen) return null;

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setErrorMsg(null);

        if (!fullName.trim()) {
            setErrorMsg('Customer name is required.');
            return;
        }
        if (!pickupLocation.trim() || !dropoffLocation.trim()) {
            setErrorMsg('Pickup and drop-off locations are required.');
            return;
        }
        if (!bookingDatetime) {
            setErrorMsg('Trip date and time are required.');
            return;
        }

        const hasReturn = tripSelection !== 'outbound';
        if (hasReturn && (!returnPickupLocation.trim() || !returnDropoffLocation.trim() || !returnDatetime)) {
            setErrorMsg('Please fill in return pickup, drop-off, and datetime, or switch to One-Way Transfer.');
            return;
        }

        setLoading(true);

        try {
            const res = await createManualLeadAction({
                full_name: fullName.trim(),
                email: email.trim() || undefined,
                phone: phone.trim() || undefined,
                pickup_location: pickupLocation.trim(),
                dropoff_location: dropoffLocation.trim(),
                booking_datetime: bookingDatetime,
                passengers: Number(passengers) || 1,
                luggage: luggage.trim() || undefined,
                flight_number: flightNumber.trim() || undefined,
                source_form: sourceForm,
                status,
                trip_selection: tripSelection,
                has_return_trip: hasReturn,
                return_pickup_location: hasReturn ? returnPickupLocation.trim() : undefined,
                return_dropoff_location: hasReturn ? returnDropoffLocation.trim() : undefined,
                return_datetime: hasReturn ? returnDatetime : undefined,
                return_flight_number: hasReturn ? returnFlightNumber.trim() : undefined,
                admin_notes: adminNotes.trim() || undefined,
            });

            if (res.success && res.data) {
                onLeadCreated(res.data);
                onClose();
            } else {
                setErrorMsg('Failed to create lead. Please try again.');
            }
        } catch (err: any) {
            console.error('Add lead error:', err);
            setErrorMsg(err.message || 'Error creating lead.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={onClose}>
            <div 
                className="bg-white rounded-[2rem] shadow-2xl w-full max-w-3xl max-h-[92vh] flex flex-col overflow-hidden" 
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-8 py-5 bg-[#0F1C2E] shrink-0">
                    <div>
                        <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
                            <span>+ Add Lead</span>
                            <span className="text-[10px] font-bold bg-gold/20 text-gold border border-gold/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                                Manual Entry
                            </span>
                        </h2>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">
                            Create leads from WhatsApp, Phone, Email or Walk-in bookings
                        </p>
                    </div>
                    <button 
                        onClick={onClose} 
                        className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-all"
                    >
                        ✕
                    </button>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSubmit} className="p-8 space-y-6 overflow-y-auto flex-1">
                    
                    {/* Duplicate Warning Banner */}
                    {duplicateMatch && (
                        <div className="p-4 bg-amber-50 border-2 border-amber-300 rounded-2xl space-y-3">
                            <div className="flex items-center gap-2 text-amber-900 font-black text-xs uppercase tracking-wider">
                                <span className="text-base">⚠️</span>
                                <span>Possible Duplicate Lead Found</span>
                            </div>
                            <div className="bg-white p-3.5 rounded-xl border border-amber-200 text-xs text-navy space-y-1">
                                <div className="font-bold text-navy text-sm">{duplicateMatch.full_name}</div>
                                <div className="text-gray-600">
                                    <span className="font-semibold text-gold">Source:</span> {duplicateMatch.source_form || 'Website'} &middot;{' '}
                                    <span className="font-semibold text-gold">Status:</span> {duplicateMatch.status} &middot;{' '}
                                    <span className="font-semibold text-gold">Trip:</span> {duplicateMatch.pickup_location} → {duplicateMatch.dropoff_location}
                                </div>
                                <div className="text-gray-400 text-[11px] font-mono">
                                    Email: {duplicateMatch.email || '—'} | Phone: {duplicateMatch.phone || '—'}
                                </div>
                            </div>
                            <div className="flex gap-2 pt-1">
                                <button
                                    type="button"
                                    onClick={() => {
                                        onViewExistingLead(duplicateMatch);
                                        onClose();
                                    }}
                                    className="px-4 py-2 bg-amber-600 text-white font-bold text-xs rounded-xl hover:bg-amber-700 transition-all"
                                >
                                    👁 Open Existing Lead
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setDuplicateDismissed(true)}
                                    className="px-4 py-2 bg-white text-gray-700 border border-amber-300 font-bold text-xs rounded-xl hover:bg-amber-100 transition-all"
                                >
                                    Continue Creating New Lead
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Section 1: Source & Status */}
                    <div className="p-5 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-4">
                        <p className="text-[10px] font-black uppercase tracking-widest text-gold">Lead Source &amp; Status</p>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                                    Lead Source <span className="text-red-500">*</span>
                                </label>
                                <select
                                    value={sourceForm}
                                    onChange={e => setSourceForm(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-bold text-navy bg-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                                >
                                    <option value="WhatsApp">💬 WhatsApp</option>
                                    <option value="Phone">📞 Phone Call</option>
                                    <option value="Email">📧 Email</option>
                                    <option value="Website Form">🌐 Website Form</option>
                                    <option value="Referral">🤝 Referral</option>
                                    <option value="Other">📌 Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                                    Initial Status <span className="text-red-500">*</span>
                                </label>
                                <select
                                    value={status}
                                    onChange={e => setStatus(e.target.value as any)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-bold text-navy bg-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                                >
                                    <option value="confirmed">✅ Confirmed Booking</option>
                                    <option value="pending">⏳ Pending Verification</option>
                                    <option value="cancelled">❌ Cancelled / Lost</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Customer Information */}
                    <div className="space-y-4">
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Customer Details</p>
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={fullName}
                                    onChange={e => setFullName(e.target.value)}
                                    placeholder="e.g. Mario Rossi"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={e => { setEmail(e.target.value); setDuplicateDismissed(false); }}
                                    placeholder="client@example.com"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Phone / WhatsApp</label>
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={e => { setPhone(e.target.value); setDuplicateDismissed(false); }}
                                    placeholder="+39 333 1234567"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-navy font-mono focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Trip Selection */}
                    <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">
                            Trip Type
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                            {[
                                { value: 'outbound', label: 'One-Way Transfer', desc: 'Single trip' },
                                { value: 'both', label: 'Two Transfers', desc: 'Two distinct legs' },
                                { value: 'roundtrip', label: 'Round Trip', desc: 'Outbound + Return' },
                            ].map(opt => (
                                <button
                                    key={opt.value}
                                    type="button"
                                    onClick={() => setTripSelection(opt.value as any)}
                                    className={`text-left p-4 rounded-2xl border-2 transition-all ${tripSelection === opt.value ? 'border-gold bg-gold/10' : 'border-gray-100 hover:border-gray-200'}`}
                                >
                                    <p className="font-black text-navy text-sm">{opt.label}</p>
                                    <p className="text-[10px] text-gray-400 font-semibold mt-0.5">{opt.desc}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Section 4: Outbound Transfer Details */}
                    <div className="p-5 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-4">
                        <p className="text-[10px] font-black uppercase tracking-widest text-gold">
                            {tripSelection === 'roundtrip' ? 'Outbound Trip' : tripSelection === 'both' ? 'Transfer 1' : 'Transfer Details'}
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2">
                                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                                    Pickup Location <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={pickupLocation}
                                    onChange={e => setPickupLocation(e.target.value)}
                                    placeholder="e.g. Rome Fiumicino Airport (FCO)"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                                />
                            </div>
                            <div className="col-span-2">
                                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                                    Drop-off Location <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={dropoffLocation}
                                    onChange={e => setDropoffLocation(e.target.value)}
                                    placeholder="e.g. Hotel Artemide, Rome"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                                    Trip Date &amp; Time <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="datetime-local"
                                    required
                                    value={bookingDatetime}
                                    onChange={e => setBookingDatetime(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Flight Number</label>
                                <input
                                    type="text"
                                    value={flightNumber}
                                    onChange={e => setFlightNumber(e.target.value)}
                                    placeholder="e.g. AZ610"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Passengers</label>
                                <input
                                    type="number"
                                    min={1}
                                    max={50}
                                    value={passengers}
                                    onChange={e => setPassengers(Number(e.target.value))}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Luggage Details</label>
                                <input
                                    type="text"
                                    value={luggage}
                                    onChange={e => setLuggage(e.target.value)}
                                    placeholder="e.g. 2 Large Suitcases, 1 Carry-on"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section 5: Return Transfer Details (if roundtrip/both) */}
                    {tripSelection !== 'outbound' && (
                        <div className="p-5 bg-[#F8FAFC] rounded-2xl border border-gray-100 space-y-4">
                            <p className="text-[10px] font-black uppercase tracking-widest text-gold">
                                {tripSelection === 'roundtrip' ? 'Return Trip Details' : 'Transfer 2 Details'}
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-2">
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Return Pickup Location</label>
                                    <input
                                        type="text"
                                        value={returnPickupLocation}
                                        onChange={e => setReturnPickupLocation(e.target.value)}
                                        placeholder="e.g. Hotel Artemide, Rome"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Return Drop-off Location</label>
                                    <input
                                        type="text"
                                        value={returnDropoffLocation}
                                        onChange={e => setReturnDropoffLocation(e.target.value)}
                                        placeholder="e.g. Rome Fiumicino Airport (FCO)"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Return Date &amp; Time</label>
                                    <input
                                        type="datetime-local"
                                        value={returnDatetime}
                                        onChange={e => setReturnDatetime(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Return Flight Number</label>
                                    <input
                                        type="text"
                                        value={returnFlightNumber}
                                        onChange={e => setReturnFlightNumber(e.target.value)}
                                        placeholder="e.g. AZ611"
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-navy focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Section 6: Internal Notes */}
                    <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">
                            Internal Staff Notes <span className="normal-case text-gray-300 font-semibold">(Not visible to customer)</span>
                        </label>
                        <textarea
                            value={adminNotes}
                            onChange={e => setAdminNotes(e.target.value)}
                            rows={3}
                            placeholder="e.g. Confirmed via WhatsApp. Agreed price €75. Driver assigned."
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-navy leading-relaxed focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 resize-none"
                        />
                    </div>

                    {/* Error Feedback */}
                    {errorMsg && (
                        <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-xl text-xs font-bold">
                            ✕ {errorMsg}
                        </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-3 pt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 py-4 bg-[#0F1C2E] text-white font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-gold hover:text-navy transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg"
                        >
                            {loading ? 'Creating Lead...' : 'Save & Create Lead'}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-8 py-4 bg-gray-100 text-gray-500 font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-gray-200 transition-all"
                        >
                            Cancel
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
