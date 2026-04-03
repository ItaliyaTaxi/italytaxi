import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ChevronRight, Landmark } from 'lucide-react';
import { attractionTransfers } from '@/lib/page-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Italy Attraction Taxi Transfers | Sightseeing Private Car",
    description: "Point-to-point transfers to Italy's most iconic attractions. From the Colosseum and Pompeii to Mount Etna and the Dolomites.",
    alternates: {
        canonical: "/attraction-transfer",
    }
};

export default function AttractionTransfersPage() {
    const slugToName = (slug: string) => {
        return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    };

    const attractionFaqs = [
      {
        q: "What is the best way to visit top landmarks in Italy?",
        a: "A private taxi transfer is the most comfortable and flexible way to visit landmarks. You avoid crowded tours and arrive right at the entrance of the Colosseum, Pompeii, or Leaning Tower of Pisa."
      },
      {
        q: "Do you offer 'wait-and-return' services for sightseeing?",
        a: "Yes! We can arrange for a driver to take you to an attraction, wait for a specified number of hours while you explore, and then take you back to your hotel."
      },
      {
        q: "Are entry tickets to attractions included in the transfer price?",
        a: "Our price covers the private transfer service only. However, our staff can often assist with advice on how to skip the lines or book tickets in advance."
      },
      {
        q: "Can you provide transfers to remote mountain attractions or vineyards?",
        a: "Absolutely. We specialize in reaching destinations that are hard to access by public transport, including the Dolomites, Tuscany vineyards, and Mount Etna base camps."
      },
      {
        q: "Is there enough space for a full group of sightseeing travelers?",
        a: "Our fleet includes high-capacity Minivans and SUVs, ensuring the whole family or group can travel together in comfort to any Italian landmark."
      }
    ];

    return (
        <main className="min-h-screen bg-gray-50 font-inter text-navy-rich">
            <Navbar />

            <PageHero
                titleTop="Explore the Beauty of"
                titleBottom="Italian Iconic Attractions"
                description="Experience Italy's most famous landmarks and museums in absolute comfort with our professional private drivers."
                backgroundImage="https://aprilmunday.wordpress.com/wp-content/uploads/2018/09/bodiam_castle_through_the_trees.jpg?w=500"
                breadcrumbs={[{ name: "Attraction Transfers", item: "/attraction-transfer" }]}
            />

            <div className="container mx-auto py-24 px-6">
                <div className="text-center mb-16">
                    <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Iconic Landmarks</p>
                    <h2 className="text-4xl font-bold text-navy">Top Attraction Routes</h2>
                    <div className="w-20 h-1 bg-gold mx-auto mt-6" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {attractionTransfers.map((slug) => (
                        <Link
                            key={slug}
                            href={`/attraction-transfer/${slug}`}
                            className="group bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 flex items-center justify-between hover:border-gold"
                        >
                            <div className="flex items-center gap-4 text-left">
                                <div className="p-3 rounded-xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                                    <Landmark className="w-5 h-5" />
                                </div>
                                <span className="text-sm font-bold text-navy group-hover:text-gold transition-colors">{slugToName(slug.replace('-taxi-transfer', ''))}</span>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                        </Link>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <h3 className="text-2xl font-bold text-navy mb-6">Need a custom landmark route?</h3>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">We provide transfers to any attraction across Italy. From the Dolomites to Sicily, we've got you covered.</p>
                    <Link href="/contact/" className="inline-block text-gold font-bold border-b-2 border-gold pb-1 transition-all hover:text-navy hover:border-navy">
                        Request Custom Route
                    </Link>
                </div>
            </div>

            <FAQSection faqs={attractionFaqs} title="Sightseeing Travel FAQs" />

            <Footer />
        </main>
    );
}

