"use client";

import Link from 'next/link';
import { attractionTransfers, beachTransfers, borderSlugs, cities, airports, tours } from '@/lib/page-data';

export default function CoverageDirectory() {
    const slugToName = (slug: string) => {
        return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    };

    return (
        <section className="py-24 bg-gray-50 font-inter">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Complete Directory</p>
                    <h2 className="text-4xl font-bold text-navy">All Destinations & Routes</h2>
                    <div className="w-20 h-1 bg-gold mx-auto mt-6" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Cities */}
                    <div>
                        <h3 className="text-xl font-bold text-navy mb-6 border-b border-gray-200 pb-2">Main Cities</h3>
                        <ul className="space-y-3">
                            {cities.map(city => (
                                <li key={city.slug}>
                                    <Link href={`/city/${city.slug}`} className="text-gray-600 hover:text-gold transition-colors text-sm">
                                        Taxi in {city.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Airports */}
                    <div>
                        <h3 className="text-xl font-bold text-navy mb-6 border-b border-gray-200 pb-2">Airports</h3>
                        <ul className="space-y-3">
                            {airports.map(airport => (
                                <li key={airport.slug}>
                                    <Link href={`/airport/${airport.slug}`} className="text-gray-600 hover:text-gold transition-colors text-sm">
                                        {airport.name} taxi
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tours */}
                    <div>
                        <h3 className="text-xl font-bold text-navy mb-6 border-b border-gray-200 pb-2">Sightseeing Tours</h3>
                        <ul className="space-y-3">
                            {tours.map(tour => (
                                <li key={tour.slug}>
                                    <Link href={`/tour/${tour.slug}`} className="text-gray-600 hover:text-gold transition-colors text-sm">
                                        {tour.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Border Transfers */}
                    <div>
                        <h3 className="text-xl font-bold text-navy mb-6 border-b border-gray-200 pb-2">International Borders</h3>
                        <ul className="space-y-3">
                            {borderSlugs.map(slug => (
                                <li key={slug}>
                                    <Link href={`/border/${slug}`} className="text-gray-600 hover:text-gold transition-colors text-sm">
                                        {slugToName(slug)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-16 grid md:grid-cols-2 gap-12">
                    {/* Attractions */}
                    <div>
                        <h3 className="text-xl font-bold text-navy mb-6 border-b border-gray-200 pb-2">Attraction Transfers</h3>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                            {attractionTransfers.map(slug => (
                                <Link key={slug} href={`/attraction-transfer/${slug}`} className="text-gray-600 hover:text-gold transition-colors text-sm truncate">
                                    {slugToName(slug.replace('-taxi-transfer', ''))}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Beaches */}
                    <div>
                        <h3 className="text-xl font-bold text-navy mb-6 border-b border-gray-200 pb-2">Beach Transfers</h3>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                            {beachTransfers.map(slug => (
                                <Link key={slug} href={`/beach-transfer/${slug}`} className="text-gray-600 hover:text-gold transition-colors text-sm truncate">
                                    {slugToName(slug.replace('-taxi', ''))}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
