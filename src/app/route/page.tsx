import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { routes } from '@/lib/page-data';
import { MapPin, Clock, ArrowRight, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Italy Taxi Routes | City-to-City Private Transfers',
    description: 'Browse all private taxi routes in Italy. Private transfers between top cities including Rome, Florence, Milan, Venice, Naples and more. Request a quote today.',
    alternates: {
        canonical: '/route',
    },
    openGraph: {
        title: 'Italy Taxi Routes | City-to-City Private Transfers',
        description: 'Private taxi transfers between Italy\'s top cities. Professional drivers, door-to-door service.',
    },
};

export default function RoutesIndexPage() {
    return (
        <main className="font-inter bg-white text-navy-rich">
            <Navbar />

            {/* Hero */}
            <section className="bg-[#0F1C2E] text-white py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Private Transfers</p>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Italy Taxi Routes</h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                        Private taxi transfers between Italy's top destinations. Professional drivers, door-to-door service, and instant online booking.
                    </p>
                    <nav aria-label="Breadcrumb" className="flex justify-center gap-2 text-sm text-gray-500">
                        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-gold">Routes</span>
                    </nav>
                </div>
            </section>

            {/* All Routes Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">City-to-City Taxi</p>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#0F1C2E]">All Italy Taxi Routes</h2>
                        <div className="w-20 h-1 bg-gold mx-auto mt-6" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {routes.map((route, index) => (
                            <Link
                                key={index}
                                href={`/route/${route.slug}`}
                                className="group block p-8 rounded-[2rem] border border-gray-100 hover:border-gold hover:shadow-xl transition-all duration-300 bg-white shadow-sm"
                            >
                                <div className="flex items-center gap-3 mb-5">
                                    <div>
                                        <span className="text-xs text-gray-400 font-bold uppercase tracking-widest block">From</span>
                                        <span className="text-xl font-extrabold text-[#0F1C2E] group-hover:text-gold transition-colors">{route.from}</span>
                                    </div>
                                    <ArrowRight className="w-6 h-6 text-gold mx-2 shrink-0" />
                                    <div>
                                        <span className="text-xs text-gray-400 font-bold uppercase tracking-widest block">To</span>
                                        <span className="text-xl font-extrabold text-[#0F1C2E] group-hover:text-gold transition-colors">{route.to}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 mb-5 text-sm text-gray-500">
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
                </div>
            </section>

            {/* Internal Links Section */}
            <section className="py-16 bg-[#F8F9FA] border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid md:grid-cols-3 gap-12 text-center">
                        <div>
                            <h3 className="text-lg font-bold text-navy mb-4">Airport Transfers</h3>
                            <p className="text-sm text-gray-500 mb-4">Direct transfers from all major Italian airports to your hotel or destination.</p>
                            <Link href="/services/airport-transfers" className="text-gold font-bold text-sm hover:text-navy transition-colors">
                                View Airport Transfers →
                            </Link>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-navy mb-4">City Taxi Services</h3>
                            <p className="text-sm text-gray-500 mb-4">Private taxi services in Rome, Milan, Florence, Venice, Naples and all major Italian cities.</p>
                            <Link href="/city" className="text-gold font-bold text-sm hover:text-navy transition-colors">
                                View All Cities →
                            </Link>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-navy mb-4">Private Tours</h3>
                            <p className="text-sm text-gray-500 mb-4">Full-day private tours of Tuscany, Amalfi Coast, Lake Como and Italy's top attractions.</p>
                            <Link href="/services/private-tours" className="text-gold font-bold text-sm hover:text-navy transition-colors">
                                View Private Tours →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
