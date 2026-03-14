"use client";

import TaxiButton from './TaxiButton';
import { useLanguage } from '@/context/LanguageContext';

export default function CTA() {
    const { t } = useLanguage();

    return (
        <section className="py-24 relative overflow-hidden font-inter cv-section">
            {/* Dark Navy Background */}
            <div className="absolute inset-0 bg-[#0F1C2E]" />

            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-gold text-sm font-bold uppercase tracking-[0.6em] mb-8 animate-slide-left [animation-delay:0.2s]">{t.cta.badge}</p>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 leading-tight animate-slide-left [animation-delay:0.4s]">
                        {t.cta.heading} <br />{t.cta.headingLine2}
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto animate-slide-left [animation-delay:0.6s]">
                        {t.cta.description}
                    </p>
                    <div className="animate-slide-left [animation-delay:0.8s] flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
                        <TaxiButton href="/book-now/" className="md:scale-125 md:mr-4 flex-shrink-0">
                            {t.cta.bookBtn}
                        </TaxiButton>
                        <div className="flex items-center">
                            <a
                                href="tel:+39061234567"
                                className="text-white hover:text-gold font-bold tracking-widest uppercase text-sm border-b-2 border-gold/30 hover:border-gold transition-all pb-1 whitespace-nowrap"
                            >
                                {t.cta.callUs}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
