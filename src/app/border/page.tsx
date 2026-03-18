import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Globe, ChevronRight } from 'lucide-react';
import { borderSlugs } from '@/lib/page-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "International Border Transfers from Italy | Italian Taxi Service",
    description: "Private taxi transfers from Italy to Switzerland, France, Austria, Germany, Slovenia, and Croatia. Comfortable long-distance international travel.",
    alternates: {
        canonical: "/border",
    }
};

export default function BorderTransfersPage() {
    const slugToName = (slug: string) => {
        return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    };

    return (
        <main className="min-h-screen bg-gray-50 font-inter">
            <Navbar />

            <PageHero
                titleTop="International Long-Distance"
                titleBottom="Border Crossings"
                description="Cross European borders in absolute comfort. We provide reliable taxi transfers from major Italian cities to neighboring countries."
                backgroundImage="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070"
            />

            <div className="container mx-auto py-24 px-6">
                <div className="text-center mb-16">
                    <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">International Routes</p>
                    <h2 className="text-4xl font-bold text-navy">Border Transfers from Italy</h2>
                    <div className="w-20 h-1 bg-gold mx-auto mt-6" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {borderSlugs.map((slug) => (
                        <Link
                            key={slug}
                            href={`/border/${slug}`}
                            className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-gold transition-all duration-300 flex items-center justify-between"
                        >
                            <div className="flex items-center gap-6">
                                <div className="p-4 rounded-2xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white transition-all transform group-hover:rotate-12">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <div className="text-left">
                                    <span className="text-lg font-bold text-navy group-hover:text-gold transition-colors block">{slugToName(slug)}</span>
                                    <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold mt-1 block">Full Coverage</span>
                                </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                        </Link>
                    ))}
                </div>

                <div className="mt-24 text-center bg-navy text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-gold/10 transition-colors" />
                    <h3 className="text-3xl font-bold mb-6">Need an International Quote?</h3>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">We specialize in long-distance European transfers. Whether you're heading to Zurich, Nice, or Vienna, our team ensures a smooth crossing.</p>
                    <Link href="/contact/" className="inline-block px-12 py-5 bg-gold text-navy font-bold rounded-full hover:bg-white transition-all shadow-xl hover:shadow-gold/20 transform hover:-translate-y-1">
                        Get Custom Quote
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    );
}
