import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ChevronRight, Waves } from 'lucide-react';
import { beachTransfers } from '@/lib/page-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Beach Taxi Transfers Italy | Coastal Private Car Service",
    description: "Point-to-point beach transfers across Italy's most beautiful coastlines. From Sardinia and Puglia to the Amalfi Coast and Sicily.",
    alternates: {
        canonical: "/beach-transfer",
    }
};

export default function BeachTransfersPage() {
    const slugToName = (slug: string) => {
        return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    };

    const beachFaqs = [
      {
        q: "How can I book a taxi to the beach in Italy?",
        a: "You can book your coastal transfer easily through our website, WhatsApp, or by calling our service line. We offer fixed rates to all major Italian beaches."
      },
      {
        q: "Do you provide transfers to remote beaches and hidden coves?",
        a: "Yes, our drivers are locals who know the best routes to both popular beach resorts and the more secluded, hard-to-reach coastal gems."
      },
      {
        q: "Is there enough space for beach gear and luggage?",
        a: "Our fleet includes spacious Minivans and SUVs perfect for families carrying umbrellas, coolers, and large suitcases."
      },
      {
        q: "Are the prices for beach transfers fixed?",
        a: "Absolutely. We provide a transparent, upfront quote that remains the same regardless of traffic, so you can enjoy your day in the sun without worry."
      },
      {
        q: "Do you offer return transfers from the beach back to my hotel?",
        a: "Yes, we recommend booking a round-trip transfer to ensure your driver is waiting for you when you're ready to head back after a long day at the beach."
      }
    ];

    return (
        <main className="min-h-screen bg-gray-50 font-inter text-navy-rich">
            <Navbar />

            <div className="container mx-auto px-6 pt-10">
                <Breadcrumb 
                    items={[
                        { name: "Beach Transfers", item: "/beach-transfer" }
                    ]} 
                />
            </div>

            <PageHero
                titleTop="Explore the Beauty of"
                titleBottom="Italian Beach Transfers"
                description="Experience Italy's most pristine beaches in absolute comfort with our professional private drivers. From major resorts to hidden coves."
                backgroundImage="/images/beach-transfer.webp"
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
                            className="group bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 flex items-center justify-between hover:border-gold"
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
                    <Link href="/contact/" className="inline-block text-gold font-bold border-b-2 border-gold pb-1 transition-all hover:text-navy hover:border-navy">
                        Request Custom Route
                    </Link>
                </div>
            </div>

            <FAQSection faqs={beachFaqs} title="Coastal Travel FAQs" />

            <Footer />
        </main>
    );
}

