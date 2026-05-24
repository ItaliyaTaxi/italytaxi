'use client';

import { useActionState, useState } from 'react';
import { submitBooking } from '@/app/actions/booking';
import TaxiButton from './TaxiButton';

const initialState = {
    success: false,
    message: '',
};

export default function BookingForm({ sourceName = 'Book Now Page' }: { sourceName?: string }) {
    const [state, formAction, isPending] = useActionState(submitBooking, initialState);

    const [pickup, setPickup] = useState('');
    const [dropoff, setDropoff] = useState('');
    const [datetime, setDatetime] = useState('');
    const [flight, setFlight] = useState('');

    const [returnTrip, setReturnTrip] = useState(false);
    const [returnPickup, setReturnPickup] = useState('');
    const [returnDropoff, setReturnDropoff] = useState('');
    const [returnDatetime, setReturnDatetime] = useState('');
    const [returnFlight, setReturnFlight] = useState('');

    const handleSwapToReturn = () => {
        setReturnPickup(dropoff);
        setReturnDropoff(pickup);
        setReturnDatetime(datetime);
        setReturnFlight(flight);
    };

    if (state.success) {
        return (
            <div className="taxi-form-container relative py-16 px-10 text-center animate-fade-in">
                <div className="form-bg-stars">
                    <div className="form-star"></div>
                    <div className="form-star"></div>
                    <div className="form-star"></div>
                </div>
                <div className="relative z-10 space-y-6">
                    <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-gold/30">
                        <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-white">Request Received</h3>
                    <p className="text-gray-300 leading-relaxed max-w-md mx-auto italic">
                        We received your request. Shortly we will send you an email with the quotation details.
                    </p>
                    <div className="pt-8">
                        <button
                            onClick={() => window.location.reload()}
                            className="text-gold border-b border-gold hover:text-white hover:border-white transition-all text-sm font-bold tracking-widest uppercase"
                        >
                            Submit Another Request
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="taxi-form-container relative">
            {/* Shooting Stars background */}
            <div className="form-bg-stars">
                <div className="form-star"></div>
                <div className="form-star"></div>
                <div className="form-star"></div>
                <div className="form-star"></div>
            </div>

            <div className="relative z-10">
                <header className="mb-10 text-center">
                    <p className="form-flicker-title">Secure Your <span>Transfer</span></p>
                    <h3 className="form-main-title uppercase">GET QUOTE</h3>
                </header>

                <form action={formAction} className="space-y-6">
                    <input type="hidden" name="source_form" value={sourceName} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <label className="taxi-form-label">Full Name</label>
                            <input name="name" type="text" required placeholder="John Doe" className="taxi-form-input" />
                        </div>
                        <div className="space-y-1">
                            <label className="taxi-form-label">Email Address</label>
                            <input name="email" type="email" required placeholder="john@example.com" className="taxi-form-input" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <label className="taxi-form-label">Phone Number</label>
                            <input name="phone" type="tel" required placeholder="+39 XXX XXX XXXX" className="taxi-form-input" />
                        </div>
                        <div className="space-y-1">
                            <label className="taxi-form-label">Date & Time</label>
                            <input
                                name="datetime"
                                type="datetime-local"
                                required
                                value={datetime}
                                onChange={(e) => setDatetime(e.target.value)}
                                className="taxi-form-input"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <label className="taxi-form-label">Pickup Location</label>
                            <input
                                name="pickup"
                                type="text"
                                required
                                placeholder="e.g., FCO Airport / Hotel Address"
                                value={pickup}
                                onChange={(e) => setPickup(e.target.value)}
                                className="taxi-form-input"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="taxi-form-label">Drop-off Location</label>
                            <input
                                name="dropoff"
                                type="text"
                                required
                                placeholder="e.g., Rome Center / Destination Address"
                                value={dropoff}
                                onChange={(e) => setDropoff(e.target.value)}
                                className="taxi-form-input"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <label className="taxi-form-label">
                                Flight Number <span className="text-xs opacity-60 normal-case">(optional)</span>
                            </label>
                            <input
                                name="flight_number"
                                type="text"
                                placeholder="e.g., AZ610"
                                value={flight}
                                onChange={(e) => setFlight(e.target.value)}
                                className="taxi-form-input"
                            />
                        </div>
                        <div className="space-y-1">
                            <label className="taxi-form-label">Number of Passengers</label>
                            <select name="passengers" required className="taxi-form-input [&>option]:text-black">
                                <option value="">Select passengers</option>
                                <option value="1">1 Passenger</option>
                                <option value="2">2 Passengers</option>
                                <option value="3">3 Passengers</option>
                                <option value="4">4 Passengers</option>
                                <option value="5">5 Passengers</option>
                                <option value="6">6 Passengers</option>
                                <option value="7">7 Passengers</option>
                                <option value="8">8 Passengers</option>
                            </select>
                        </div>
                    </div>

                    {/* Return trip toggle */}
                    <div className="pt-2">
                        <label className="inline-flex items-center gap-3 cursor-pointer select-none">
                            <input
                                type="checkbox"
                                name="return_trip"
                                checked={returnTrip}
                                onChange={(e) => setReturnTrip(e.target.checked)}
                                className="w-4 h-4 accent-[#C9A84C]"
                            />
                            <span className="taxi-form-label !m-0">Add Return Trip</span>
                        </label>
                    </div>

                    {returnTrip && (
                        <div className="border-t border-white/10 pt-6 space-y-6 animate-fade-in">
                            <div className="flex items-center justify-between flex-wrap gap-3">
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Return Trip Details</p>
                                <button
                                    type="button"
                                    onClick={handleSwapToReturn}
                                    className="text-xs font-bold uppercase tracking-widest text-gold border-b border-gold/60 hover:text-white hover:border-white transition-all"
                                >
                                    Return to the Pickup Details ↺
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="taxi-form-label">Return Pickup Location</label>
                                    <input
                                        name="return_pickup"
                                        type="text"
                                        required={returnTrip}
                                        placeholder="e.g., Rome Center / Destination Address"
                                        value={returnPickup}
                                        onChange={(e) => setReturnPickup(e.target.value)}
                                        className="taxi-form-input"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="taxi-form-label">Return Drop-off Location</label>
                                    <input
                                        name="return_dropoff"
                                        type="text"
                                        required={returnTrip}
                                        placeholder="e.g., FCO Airport / Hotel Address"
                                        value={returnDropoff}
                                        onChange={(e) => setReturnDropoff(e.target.value)}
                                        className="taxi-form-input"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="taxi-form-label">Return Date & Time</label>
                                    <input
                                        name="return_datetime"
                                        type="datetime-local"
                                        required={returnTrip}
                                        value={returnDatetime}
                                        onChange={(e) => setReturnDatetime(e.target.value)}
                                        className="taxi-form-input"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="taxi-form-label">
                                        Return Flight Number <span className="text-xs opacity-60 normal-case">(optional)</span>
                                    </label>
                                    <input
                                        name="return_flight_number"
                                        type="text"
                                        placeholder="e.g., AZ611"
                                        value={returnFlight}
                                        onChange={(e) => setReturnFlight(e.target.value)}
                                        className="taxi-form-input"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="mt-8">
                        <TaxiButton
                            type="submit"
                            disabled={isPending}
                            className={`w-full py-5 text-base relative overflow-hidden group ${isPending ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            <span className="relative z-10">
                                {isPending ? 'PROCESSING...' : 'Request Quotation'}
                            </span>
                            {!isPending && (
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-[-20deg]"></div>
                            )}
                        </TaxiButton>
                    </div>

                    {state.message && !state.success && (
                        <p className="mt-4 text-center text-sm text-red-400 font-mono">
                            {state.message}
                        </p>
                    )}

                    <p className="signup-link mt-6 text-center text-xs text-gray-400 font-mono tracking-wider">
                        Need immediate help? <a href="tel:+39061234567" className="text-gold hover:underline">Call Us 24/7</a>
                    </p>
                </form>
            </div>
        </div>
    );
}
