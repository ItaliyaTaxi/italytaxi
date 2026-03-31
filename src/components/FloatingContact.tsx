"use client";

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Mail, X, ChevronRight } from 'lucide-react';

const WA_LINK = "https://wa.me/923148932631?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20a%20transfer%20service.";

const emails = [
    { label: "Booking Enquiry", address: "booking@italytaxiservice.com", hint: "Reservations & quotes" },
    { label: "General Info", address: "info@italytaxiservice.com", hint: "Support & other queries" },
];

type View = 'closed' | 'main' | 'email';

export default function FloatingContact() {
    const [view, setView] = useState<View>('closed');
    const ref = useRef<HTMLDivElement>(null);

    // Close on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setView('closed');
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    const toggle = () => setView(v => v === 'closed' ? 'main' : 'closed');

    return (
        <div ref={ref} className="fixed bottom-5 right-5 z-[90] flex flex-col items-end gap-3 md:bottom-8 md:right-8">

            {/* ── EMAIL SUB-MENU ─────────────────────────────────── */}
            {view === 'email' && (
                <div className="flex flex-col gap-2 animate-slide-up-fade">
                    {/* Back button */}
                    <button
                        onClick={() => setView('main')}
                        className="self-end text-xs text-gray-500 hover:text-gold flex items-center gap-1 transition-colors mb-1"
                    >
                        ← Back
                    </button>
                    {emails.map((e) => (
                        <a
                            key={e.address}
                            href={`mailto:${e.address}`}
                            className="flex items-center gap-3 bg-white rounded-2xl shadow-xl px-4 py-3 hover:shadow-2xl hover:scale-[1.02] transition-all border border-gray-100 min-w-[220px]"
                        >
                            <div className="w-9 h-9 rounded-full bg-navy flex items-center justify-center shrink-0">
                                <Mail className="w-4 h-4 text-gold" />
                            </div>
                            <div>
                                <p className="font-bold text-navy text-sm leading-tight">{e.label}</p>
                                <p className="text-gray-400 text-xs truncate max-w-[160px]">{e.address}</p>
                            </div>
                        </a>
                    ))}
                </div>
            )}

            {/* ── MAIN MENU ─────────────────────────────────────── */}
            {view === 'main' && (
                <div className="flex flex-col gap-2 animate-slide-up-fade">
                    {/* WhatsApp */}
                    <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-white rounded-2xl shadow-xl px-4 py-3 hover:shadow-2xl hover:scale-[1.02] transition-all border border-gray-100 min-w-[200px]"
                    >
                        <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                            <WhatsAppIcon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <p className="font-bold text-navy text-sm leading-tight">WhatsApp</p>
                            <p className="text-gray-400 text-xs">Chat with us — 24/7</p>
                        </div>
                    </a>

                    {/* Email → triggers sub-menu */}
                    <button
                        onClick={() => setView('email')}
                        className="flex items-center gap-3 bg-white rounded-2xl shadow-xl px-4 py-3 hover:shadow-2xl hover:scale-[1.02] transition-all border border-gray-100 min-w-[200px] text-left"
                    >
                        <div className="w-9 h-9 rounded-full bg-navy flex items-center justify-center shrink-0">
                            <Mail className="w-4 h-4 text-gold" />
                        </div>
                        <div className="flex-1">
                            <p className="font-bold text-navy text-sm leading-tight">Email Us</p>
                            <p className="text-gray-400 text-xs">Choose an inbox</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-300" />
                    </button>
                </div>
            )}

            {/* ── MAIN TOGGLE BUTTON ────────────────────────────── */}
            <button
                onClick={toggle}
                aria-label={view === 'closed' ? 'Open contact menu' : 'Close contact menu'}
                className={`
                    w-14 h-14 rounded-full shadow-2xl flex items-center justify-center
                    transition-all duration-300 hover:scale-110 active:scale-95
                    ${view !== 'closed' ? 'bg-gray-700 rotate-0' : 'bg-[#25D366]'}
                `}
            >
                {view !== 'closed' ? (
                    <X className="w-6 h-6 text-white" />
                ) : (
                    <WhatsAppIcon className="w-7 h-7 text-white" />
                )}
            </button>
        </div>
    );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.316 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.718-.975v-.006zm9.766-7.392c.272.136.433.226.482.308.049.082.049.474-.15.939-.199.464-1.14 1.153-1.585 1.185-.444.032-.904.14-2.731-.606-1.826-.747-3.03-2.634-3.121-2.755-.09-.121-.767-.983-.767-1.902 0-.919.467-1.37.633-1.564.167-.193.367-.242.489-.242.122 0 .245.001.35.006.115.005.27.022.415.361.16.376.545 1.326.592 1.422.047.096.078.208.016.333-.061.125-.092.203-.184.308-.092.105-.193.234-.275.314-.092.09-.188.19-.081.372.108.182.479.791 1.028 1.282.706.626 1.302.821 1.489.912.187.091.295.076.403-.046.108-.121.463-.54.586-.725.123-.186.246-.155.415-.093.169.062 1.08.51 1.265.602z" />
        </svg>
    );
}
