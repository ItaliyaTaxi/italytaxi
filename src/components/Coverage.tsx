"use client";

import { MapPin, Plane, Car } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export default function Coverage() {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-navy relative overflow-hidden font-inter cv-section">
            <div className="absolute inset-0 opacity-5 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                    <div className="w-full lg:w-1/2">
                        <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">{t.coverage.badge}</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">{t.coverage.heading} <br />{t.coverage.headingLine2}</h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-xl">
                            {t.coverage.description}
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                                <Plane className="w-8 h-8 text-gold mx-auto mb-4" />
                                <h3 className="text-white font-bold text-xs uppercase tracking-widest">{t.coverage.airports}</h3>
                            </div>
                            <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                                <MapPin className="w-8 h-8 text-gold mx-auto mb-4" />
                                <h3 className="text-white font-bold text-xs uppercase tracking-widest">{t.coverage.cities}</h3>
                            </div>
                            <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                                <Car className="w-8 h-8 text-gold mx-auto mb-4" />
                                <h3 className="text-white font-bold text-xs uppercase tracking-widest">{t.coverage.drivers}</h3>
                            </div>
                            <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                                <Car className="w-8 h-8 text-gold mx-auto mb-4" />
                                <h3 className="text-white font-bold text-xs uppercase tracking-widest">{t.coverage.support}</h3>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 p-4 md:p-10 bg-white/5 rounded-[40px] border border-white/10 backdrop-blur-sm">
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                            {[
                                { name: "Rome", path: "/city/rome-taxi-service", types: ["airports", "city", "ports"] as const },
                                { name: "Milan", path: "/city/milan-taxi-service", types: ["airports", "city"] as const },
                                { name: "Venice", path: "/city/venice-taxi-service", types: ["airports", "city", "ports"] as const },
                                { name: "Florence", path: "/city/florence-taxi-service", types: ["airports", "city"] as const },
                                { name: "Naples", path: "/city/naples-taxi-service", types: ["airports", "city", "ports"] as const },
                                { name: "Amalfi Coast", path: "/city/amalfi-taxi-service", types: ["city"] as const },
                                { name: "Lake Como", path: "/city/como-taxi-service", types: ["city"] as const },
                                { name: "Sicily", path: "/city/palermo-taxi-service", types: ["airports", "city"] as const },
                            ].map((loc, index) => (
                                <Link
                                    key={index}
                                    href={loc.path}
                                    className="p-6 bg-navy/80 border border-white/5 rounded-2xl hover:border-gold/50 hover:bg-white/5 transition-all duration-300 animate-slide-left group"
                                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                                >
                                    <h4 className="text-white font-bold text-lg mb-2 group-hover:text-gold transition-colors">{loc.name}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {loc.types.map(type => (
                                            <span key={type} className="text-[10px] text-gold font-bold uppercase tracking-widest bg-gold/10 px-2 py-0.5 rounded">
                                                {t.coverage.types[type]}
                                            </span>
                                        ))}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
