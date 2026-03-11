'use client';

import { useActionState } from 'react';
import { submitBooking } from '@/app/actions/booking';
import TaxiButton from './TaxiButton';

const initialState = {
    success: false,
    message: '',
};

export default function BookingForm() {
    const [state, formAction, isPending] = useActionState(submitBooking, initialState);

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
                    <h3 className="text-3xl font-bold text-white">Booking Confirmed!</h3>
                    <p className="text-gray-300 leading-relaxed max-w-md mx-auto italic">
                        {state.message}
                    </p>
                    <div className="pt-8">
                        <button
                            onClick={() => window.location.reload()}
                            className="text-gold border-b border-gold hover:text-white hover:border-white transition-all text-sm font-bold tracking-widest uppercase"
                        >
                            Make Another Booking
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
                            <input name="datetime" type="datetime-local" required className="taxi-form-input" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                            <label className="taxi-form-label">Pickup Location</label>
                            <input name="pickup" type="text" required placeholder="e.g., FCO Airport / Hotel Address" className="taxi-form-input" />
                        </div>
                        <div className="space-y-1">
                            <label className="taxi-form-label">Drop-off Location</label>
                            <input name="dropoff" type="text" required placeholder="e.g., Rome Center / Destination Address" className="taxi-form-input" />
                        </div>
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

                    <div className="mt-8">
                        <TaxiButton
                            type="submit"
                            disabled={isPending}
                            className={`w-full py-5 text-base relative overflow-hidden group ${isPending ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            <span className="relative z-10">
                                {isPending ? 'PROCESSING...' : 'Confirm Booking'}
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
