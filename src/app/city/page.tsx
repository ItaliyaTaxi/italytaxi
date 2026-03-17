import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { MapPin, ChevronRight } from 'lucide-react';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Cities We Cover in Italy | Italian Taxi Service",
    description: "Point-to-point transfers and city taxi services across Italy. Travel between major cities in comfort and luxury with our professional drivers.",
    alternates: {
        canonical: "https://www.italytaxiservice.com/city",
    }
};

export default function CityTransfersPage() {
    const cities = [
        { name: "Rome", link: "/city/rome" },
        { name: "Milan", link: "/city/milan" },
        { name: "Venice", link: "/city/venice" },
        { name: "Florence", link: "/city/florence" },
        { name: "Naples", link: "/city/naples" },
        { name: "Bologna", link: "/city/bologna" },
        { name: "Bari", link: "/city/bari" },
        { name: "Palermo", link: "/city/palermo" },
        { name: "Amalfi", link: "/city/amalfi" },
        { name: "Portofino", link: "/city/portofino" },
        { name: "Lake Como", link: "/city/como" },
        { name: "Positano", link: "/city/positano" },
        { name: "Ravello", link: "/city/ravello" },
        { name: "Taormina", link: "/city/taormina" },
        { name: "Sorrento", link: "/city/sorrento" }
    ];

    return (
        <main className="min-h-screen bg-[#F8F6F1]">
            <Navbar />

            <PageHero
                titleTop="Nationwide Service"
                titleBottom="City Transfers"
                description="taxi point-to-point transfers and city taxi services. Travel between major Italian cities in absolute comfort."
                backgroundImage="/images/hero.png"
            />

            <div className="container mx-auto py-24 px-6">
                <h2 className="text-4xl font-bold text-[#0F1C2E] mb-12 text-center">Popular Destinations</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {cities.map((city, idx) => (
                        <Link
                            key={idx}
                            href={city.link}
                            className="group bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:border-[#F4C430] transition-all duration-300 flex items-center justify-between"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-[#F4C430]/10 text-[#F4C430] group-hover:bg-[#F4C430] group-hover:text-white transition-colors">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <span className="text-lg font-bold text-[#0F1C2E] group-hover:text-[#F4C430] transition-colors">{city.name}</span>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#F4C430] group-hover:translate-x-1 transition-all" />
                        </Link>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <h3 className="text-2xl font-bold text-[#0F1C2E] mb-6">Need a custom route?</h3>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">We provide city-to-city transfers across all of Italy. From the Dolomites to Sicily, we've got you covered.</p>
                    <Link href="/contact/" className="inline-block text-[#F4C430] font-bold border-b-2 border-[#F4C430] pb-1 hover:text-[#0F1C2E] hover:border-[#0F1C2E] transition-all">
                        Plan Your Journey
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    );
}

