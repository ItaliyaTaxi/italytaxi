"use client";

import Link from 'next/link';
import { ChevronRight, MapPin, Clock, ArrowRight } from 'lucide-react';

const popularRoutes = [
    { from: 'Florence', to: 'Pisa', slug: 'florence-to-pisa-taxi', distance: '~80 km', duration: '~1 hour' },
    { from: 'Rome', to: 'Florence', slug: 'rome-to-florence-taxi', distance: '~277 km', duration: '~3 hours' },
    { from: 'Milan', to: 'Lake Como', slug: 'milan-to-lake-como-taxi', distance: '~50 km', duration: '~45 min' },
    { from: 'Rome', to: 'Naples', slug: 'rome-to-naples-taxi', distance: '~226 km', duration: '~2.5 hours' },
    { from: 'Naples', to: 'Amalfi Coast', slug: 'naples-to-amalfi-coast-taxi', distance: '~65 km', duration: '~1.5 hours' },
    { from: 'Venice', to: 'Verona', slug: 'venice-to-verona-taxi', distance: '~115 km', duration: '~1.5 hours' },
];

export default function PopularRoutes() {
    return (
        <section className="py-24 bg-white font-inter">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-[#F4C430] text-sm font-bold uppercase tracking-[0.4em] mb-4">City-to-City Transfers</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0F1C2E]">Popular Routes in Italy</h2>
                    <p className="text-gray-500 mt-4 max-w-xl mx-auto">Private taxi transfers between Italy's top destinations. Door-to-door service, professional drivers, instant booking.</p>
                    <div className="w-20 h-1 bg-[#F4C430] mx-auto mt-6" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {popularRoutes.map((route, index) => (
                        <Link
                            key={index}
                            href={`/route/${route.slug}`}
                            className="group block p-8 rounded-[2rem] border border-gray-100 hover:border-gold hover:shadow-xl transition-all duration-300 bg-white shadow-sm"
                        >
                            {/* Route Arrow Display */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex flex-col items-start gap-1">
                                    <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">From</span>
                                    <span className="text-xl font-extrabold text-[#0F1C2E] group-hover:text-gold transition-colors">{route.from}</span>
                                </div>
                                <ArrowRight className="w-6 h-6 text-[#F4C430] mx-2 shrink-0" />
                                <div className="flex flex-col items-start gap-1">
                                    <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">To</span>
                                    <span className="text-xl font-extrabold text-[#0F1C2E] group-hover:text-gold transition-colors">{route.to}</span>
                                </div>
                            </div>

                            {/* Stats Row */}
                            <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4 text-gold" /> {route.distance}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4 text-gold" /> {route.duration}
                                </span>
                            </div>

                            <div className="flex items-center justify-end">
                                <span className="flex items-center text-gold font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                    Get a Quote <ChevronRight className="w-4 h-4 ml-1" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/services/city-to-city"
                        className="inline-flex items-center text-[#0F1C2E] hover:text-[#F4C430] font-bold tracking-widest uppercase text-sm border-b-2 border-[#F4C430]/50 hover:border-[#F4C430] transition-all pb-1"
                    >
                        View All Italy Transfers <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
