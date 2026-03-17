import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Plane, ChevronRight } from 'lucide-react';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Airports We Cover in Italy | Italian Taxi Service",
    description: "Private airport taxi transfers across all major Italian airports. Reliable, punctual, and comfortable rides with professional English-speaking drivers.",
    alternates: {
        canonical: "https://www.italytaxiservice.com/airport",
    }
};

export default function AirportTransfersPage() {
    const airports = [
        { name: "Rome Fiumicino", link: "/airport/rome-fiumicino" },
        { name: "Rome Ciampino", link: "/airport/rome-ciampino" },
        { name: "Milan Malpensa", link: "/airport/milan-malpensa" },
        { name: "Milan Linate", link: "/airport/milan-linate" },
        { name: "Venice Marco Polo", link: "/airport/venice" },
        { name: "Naples International", link: "/airport/naples" },
        { name: "Florence Peretola", link: "/airport/florence" },
        { name: "Bologna Marconi", link: "/airport/bologna-marconi" },
        { name: "Pisa Airport", link: "/airport/pisa" },
        { name: "Verona Airport", link: "/airport/verona" },
        { name: "Palermo Airport", link: "/airport/palermo" },
        { name: "Catania Airport", link: "/airport/catania-fontanarossa" },
        { name: "Bari Airport", link: "/airport/bari" },
        { name: "Genoa Airport", link: "/airport/genoa" },
        { name: "Turin Airport", link: "/airport/turin" }
    ];

    return (
        <main className="min-h-screen bg-[#F8F6F1]">
            <Navbar />

            <PageHero
                titleTop="Nationwide Coverage"
                titleBottom="Airport Transfers"
                description="taxi airport taxi services across all major Italian airports. Reliable, punctual, and professional."
                backgroundImage="/images/hero.png"
            />

            <div className="container mx-auto py-24 px-6">
                <h2 className="text-4xl font-bold text-[#0F1C2E] mb-12 text-center">Top Italian Airports</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {airports.map((airport, idx) => (
                        <Link
                            key={idx}
                            href={airport.link}
                            className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-[#F4C430] transition-all duration-300 flex items-center justify-between"
                        >
                            <div className="flex items-center gap-5">
                                <div className="p-3 rounded-xl bg-[#F4C430]/10 text-[#F4C430] group-hover:bg-[#F4C430] group-hover:text-white transition-colors">
                                    <Plane className="w-6 h-6" />
                                </div>
                                <span className="text-lg font-bold text-[#0F1C2E] group-hover:text-[#F4C430] transition-colors">{airport.name}</span>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#F4C430] group-hover:translate-x-1 transition-all" />
                        </Link>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <h3 className="text-2xl font-bold text-[#0F1C2E] mb-6">Can't find your airport?</h3>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">We cover 40+ airports across Italy. Contact us for a custom quote or search for your specific destination.</p>
                    <Link href="/contact/" className="inline-block text-[#F4C430] font-bold border-b-2 border-[#F4C430] pb-1 hover:text-[#0F1C2E] hover:border-[#0F1C2E] transition-all">
                        Contact Support
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    );
}

