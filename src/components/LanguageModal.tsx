"use client";

import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

export default function LanguageModal() {
    const { hasChosen, confirmLanguage } = useLanguage();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!hasChosen) {
            const t = setTimeout(() => setVisible(true), 400);
            return () => clearTimeout(t);
        }
    }, [hasChosen]);

    if (!visible || hasChosen) return null;

    const choose = (lang: 'en' | 'it') => {
        setVisible(false);
        confirmLanguage(lang);
    };

    return (
        /* Solid dark overlay — no blur so content is fully hidden */
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-[#060e17]/90">
            {/* Dot pattern */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '28px 28px' }}
            />

            <div className="relative bg-white rounded-[2rem] shadow-2xl max-w-sm w-full overflow-hidden animate-fade-in-up">
                {/* Gold top bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-[#b8952a] via-[#F4C430] to-[#b8952a]" />

                <div className="px-8 py-8 text-center">
                    {/* Logo */}
                    <div className="flex justify-center mb-6">
                        <Image
                            src="/images/logo.png"
                            alt="Italy Taxi Service"
                            width={140}
                            height={46}
                            className="object-contain"
                        />
                    </div>

                    <p className="text-[#F4C430] text-[10px] font-bold uppercase tracking-[0.4em] mb-2">
                        Welcome · Benvenuto
                    </p>
                    <h2 className="text-xl font-extrabold text-[#0F1C2E] mb-1">Choose your language</h2>
                    <p className="text-gray-400 text-sm mb-7">
                        Select your preferred language.<br />
                        <span className="italic text-xs">Scegli la tua lingua per continuare.</span>
                    </p>

                    {/* Language buttons */}
                    <div className="flex gap-3">
                        {/* English */}
                        <button
                            onClick={() => choose('en')}
                            className="flex-1 flex flex-col items-center gap-2 px-4 py-5 rounded-2xl border-2 border-gray-200 hover:border-[#F4C430] hover:shadow-lg transition-all group"
                        >
                            {/* UK flag SVG */}
                            <svg viewBox="0 0 60 40" className="w-10 h-7 rounded-md shadow-sm" xmlns="http://www.w3.org/2000/svg">
                                <rect width="60" height="40" fill="#012169"/>
                                <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8"/>
                                <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="5"/>
                                <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="13"/>
                                <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="8"/>
                            </svg>
                            <div>
                                <p className="font-bold text-[#0F1C2E] text-sm group-hover:text-[#b8952a] transition-colors">English</p>
                                <p className="text-gray-400 text-xs">Continue</p>
                            </div>
                        </button>

                        {/* Italian */}
                        <button
                            onClick={() => choose('it')}
                            className="flex-1 flex flex-col items-center gap-2 px-4 py-5 rounded-2xl border-2 border-gray-200 hover:border-[#F4C430] hover:shadow-lg transition-all group"
                        >
                            {/* Italian flag SVG */}
                            <svg viewBox="0 0 60 40" className="w-10 h-7 rounded-md shadow-sm" xmlns="http://www.w3.org/2000/svg">
                                <rect width="20" height="40" x="0"  fill="#009246"/>
                                <rect width="20" height="40" x="20" fill="#fff"/>
                                <rect width="20" height="40" x="40" fill="#CE2B37"/>
                            </svg>
                            <div>
                                <p className="font-bold text-[#0F1C2E] text-sm group-hover:text-[#b8952a] transition-colors">Italiano</p>
                                <p className="text-gray-400 text-xs">Continua</p>
                            </div>
                        </button>
                    </div>

                    <p className="text-gray-300 text-[11px] mt-5">
                        You can change this at any time from the nav bar.
                    </p>
                </div>
            </div>
        </div>
    );
}
