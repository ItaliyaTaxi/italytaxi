import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Compass, ChevronRight } from 'lucide-react';
import { tours } from '@/lib/page-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Private Tours Italy | Book a Sightseeing Taxi",
    description: "Discover Italy's most beautiful highlights with our private sightseeing tours. From the Amalfi Coast and Tuscany to the Dolomites and Lake Como.",
    alternates: {
        canonical: "/tour",
    }
};

export default function ToursHubPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            <PageHero
                titleTop="Explore the Beauty of"
                titleBottom="Private Sightseeing Tours"
                description="Experience Italy's iconic landmarks and hidden gems in absolute comfort with our professional private drivers."
                backgroundImage="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=2070"
            />

            <div className="container mx-auto py-24 px-6">
                <h2 className="text-4xl font-bold text-[#0F1C2E] mb-12 text-center text-navy font-playfair">Exclusive Private Tours</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {tours.map((tour, idx) => (
                        <Link
                            key={tour.slug}
                            href={`/tour/${tour.slug}`}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:border-gold transition-all duration-300"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={tour.hero_image}
                                    alt={tour.alt_text}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-6">
                                    <span className="text-gold text-xs font-bold uppercase tracking-widest bg-navy/80 px-3 py-1 rounded-full">{tour.city}</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-gold transition-colors">{tour.name}</h3>
                                <p className="text-gray-600 text-sm mb-6 line-clamp-2">{tour.description}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-gold font-bold text-sm">
                                        <Compass className="w-4 h-4" />
                                        <span>View Full Tour</span>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-24 text-center max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold text-navy mb-4">Can't find your destination?</h3>
                    <p className="text-gray-600 mb-8">We provide customized tour itineraries across all of Italy. Tell us what you want to see, and we'll create the perfect journey for you.</p>
                    <Link href="/contact/" className="inline-block px-10 py-4 bg-navy text-white font-bold rounded-full hover:bg-gold transition-all shadow-xl hover:shadow-gold/20">
                        Request Custom Tour
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    );
}
