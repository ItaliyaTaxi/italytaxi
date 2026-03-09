'use client';

import { useState } from 'react';
import TaxiButton from './TaxiButton';
import Image from 'next/image';

export default function ContactFormSection() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', pickup: '', dropoff: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [responseMsg, setResponseMsg] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const data = await res.json();

            if (data.success) {
                setStatus('success');
                setResponseMsg(data.message);
                setForm({ name: '', email: '', phone: '', date: '', pickup: '', dropoff: '', message: '' });
            } else {
                setStatus('error');
                setResponseMsg(data.error || 'Something went wrong.');
            }
        } catch {
            setStatus('error');
            setResponseMsg('Failed to send. Please try again.');
        }
    };

    return (
        <section className="py-24 bg-white font-inter">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Form Side */}
                    <div className="w-full lg:w-3/5 taxi-form-container animate-slide-left relative">
                        <div className="form-bg-stars">
                            <div className="form-star"></div>
                            <div className="form-star"></div>
                            <div className="form-star"></div>
                            <div className="form-star"></div>
                        </div>

                        <div className="relative z-10">
                            <header className="mb-10 text-center">
                                <p className="form-flicker-title">Send Us a <span>Request</span></p>
                                <h3 className="form-main-title">GET A QUOTE</h3>
                            </header>

                            {status === 'success' && (
                                <div className="mb-6 bg-green-500/10 border border-green-500/40 text-green-400 text-sm font-bold text-center p-4 rounded-xl">
                                    {responseMsg}
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="mb-6 bg-red-500/10 border border-red-500/40 text-red-400 text-sm font-bold text-center p-4 rounded-xl">
                                    {responseMsg}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="taxi-form-label">Full Name</label>
                                    <input name="name" type="text" placeholder="John Doe" value={form.name} onChange={handleChange} required className="taxi-form-input" />
                                </div>
                                <div className="space-y-1">
                                    <label className="taxi-form-label">Email Address</label>
                                    <input name="email" type="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required className="taxi-form-input" />
                                </div>
                                <div className="space-y-1">
                                    <label className="taxi-form-label">Phone Number</label>
                                    <input name="phone" type="tel" placeholder="+39 XXX XXX XXXX" value={form.phone} onChange={handleChange} className="taxi-form-input" />
                                </div>
                                <div className="space-y-1">
                                    <label className="taxi-form-label">Date of Service</label>
                                    <input name="date" type="date" value={form.date} onChange={handleChange} className="taxi-form-input" />
                                </div>
                                <div className="space-y-1">
                                    <label className="taxi-form-label">Pickup Location</label>
                                    <input name="pickup" type="text" placeholder="e.g., FCO Airport" value={form.pickup} onChange={handleChange} className="taxi-form-input" />
                                </div>
                                <div className="space-y-1">
                                    <label className="taxi-form-label">Drop-off Location</label>
                                    <input name="dropoff" type="text" placeholder="e.g., Rome Center" value={form.dropoff} onChange={handleChange} className="taxi-form-input" />
                                </div>
                                <div className="md:col-span-2 space-y-1 mt-4">
                                    <label className="taxi-form-label">Special Requirements / Message</label>
                                    <textarea name="message" rows={4} placeholder="Tell us more about your trip..." value={form.message} onChange={handleChange} required className="taxi-form-input resize-none h-32" />
                                </div>
                                <div className="md:col-span-2 mt-8">
                                    <TaxiButton type="submit" disabled={status === 'loading'} className="w-full py-5 text-base relative overflow-hidden group">
                                        <span className="relative z-10">
                                            {status === 'loading' ? 'Sending...' : 'Send Booking Request'}
                                        </span>
                                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-[-20deg]"></div>
                                    </TaxiButton>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Image / Stats Side */}
                    <div className="w-full lg:w-2/5 flex flex-col gap-8 animate-slide-left [animation-delay:0.3s]">
                        <div className="relative h-[350px] rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <Image src="/images/hero.png" alt="taxi Ride" fill className="object-cover" />
                            <div className="absolute inset-0 bg-navy/40 flex items-center justify-center">
                                <div className="text-center p-8">
                                    <div className="text-5xl font-extrabold text-gold mb-2">24/7</div>
                                    <div className="text-white font-bold uppercase tracking-[0.3em] text-sm">Always Online</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-navy p-10 rounded-[2.5rem] shadow-xl text-white">
                            <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                                <div className="w-2 h-2 bg-gold animate-pulse rounded-full" />
                                Live Availability
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                Our support team is currently active and ready to process your booking. Typical response time for queries is under 15 minutes during daylight hours.
                            </p>
                            <div className="flex items-center gap-4 border-t border-white/10 pt-8">
                                <div className="text-gold font-bold text-3xl">99%</div>
                                <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Response Rate <br />Successfully Maintained</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
