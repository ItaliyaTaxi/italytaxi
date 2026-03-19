import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { MapPin, ChevronRight, Waves } from 'lucide-react';
import { beachTransfers } from '@/lib/page-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Beach Taxi Transfers Italy | Book Your Ride",
    description: "Point-to-point beach transfers across Italy's most beautiful coastlines. From Sardinia and Puglia to the Amalfi Coast and Sicily.",
    alternates: {
        canonical: "/beach-transfer",
    }
};

export default function BeachTransfersPage() {
    const slugToName = (slug: string) => {
        return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    };

    return (
        <main className="min-h-screen bg-gray-50 font-inter">
            <Navbar />

            <PageHero
                titleTop="Explore the Beauty of"
                titleBottom="Italian Beach Transfers"
                description="Experience Italy's most pristine beaches in absolute comfort with our professional private drivers. From major resorts to hidden coves."
                backgroundImage="https://media.licdn.com/dms/image/v2/D4D12AQHlO-CIDaoLpw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1675860130639?e=2147483647&v=beta&t=1e16vgb5s7K6-hSi25JIlcZjYo67-0ru3HJ5FxuPVc8"
            />

            <div className="container mx-auto py-24 px-6">
                <div className="text-center mb-16">
                    <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Pristine Destinations</p>
                    <h2 className="text-4xl font-bold text-navy">Exclusive Coastal Routes</h2>
                    <div className="w-20 h-1 bg-gold mx-auto mt-6" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {beachTransfers.map((slug) => (
                        <Link
                            key={slug}
                            href={`/beach-transfer/${slug}`}
                            className="group bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-gold transition-all duration-300 flex items-center justify-between"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                                    <Waves className="w-5 h-5" />
                                </div>
                                <span className="text-sm font-bold text-navy group-hover:text-gold transition-colors">{slugToName(slug.replace('-taxi', ''))}</span>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                        </Link>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <h3 className="text-2xl font-bold text-navy mb-6">Need a custom beach route?</h3>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">We provide transfers to any beach location across Italy. From the Amalfi Coast to Sardinia, we've got you covered.</p>
                    <Link href="/contact/" className="inline-block text-gold font-bold border-b-2 border-gold pb-1 hover:text-navy hover:border-navy transition-all">
                        Request Custom Route
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    );
}
