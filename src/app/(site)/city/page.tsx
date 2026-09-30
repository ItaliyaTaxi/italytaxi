import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import Link from 'next/link';
import { ChevronRight, Plane, Building2, TrainFront, Ship, MapPinned, Camera, Route } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Private Taxi Transfers Across Italy | Italy Taxi Service",
    description: "Book private taxi and transfer services across Italy, including Rome, Milan, Florence, Venice, Naples, the Amalfi Coast and other destinations.",
    alternates: {
        canonical: "/city",
    }
};

const featured = [
    { name: "Rome", link: "/city/rome" },
    { name: "Florence", link: "/city/florence" },
    { name: "Milan", link: "/city/milan" },
    { name: "Venice", link: "/city/venice" },
    { name: "Naples", link: "/city/naples" },
    { name: "Amalfi Coast", link: "/city/amalfi-coast" },
];

const regions = [
    {
        name: "Major Italian Cities",
        destinations: [
            { name: "Rome", link: "/city/rome" },
            { name: "Milan", link: "/city/milan" },
            { name: "Florence", link: "/city/florence" },
            { name: "Venice", link: "/city/venice" },
            { name: "Naples", link: "/city/naples" },
            { name: "Bologna", link: "/city/bologna" },
            { name: "Bari", link: "/city/bari" },
            { name: "Palermo", link: "/city/palermo" },
        ],
    },
    {
        name: "Amalfi Coast & Southern Italy",
        destinations: [
            { name: "Amalfi", link: "/city/amalfi" },
            { name: "Amalfi Coast", link: "/city/amalfi-coast" },
            { name: "Positano", link: "/city/positano" },
            { name: "Ravello", link: "/city/ravello" },
            { name: "Sorrento", link: "/city/sorrento" },
        ],
    },
    {
        name: "Tuscany",
        destinations: [
            { name: "Florence", link: "/city/florence" },
            { name: "Lucca", link: "/city/lucca" },
            { name: "San Gimignano", link: "/city/san-gimignano" },
        ],
    },
    {
        name: "Northern Italy & Lakes",
        destinations: [
            { name: "Lake Como", link: "/city/como" },
            { name: "Portofino", link: "/city/portofino" },
        ],
    },
    {
        name: "Sicily",
        destinations: [
            { name: "Palermo", link: "/city/palermo" },
            { name: "Taormina", link: "/city/taormina" },
        ],
    },
];

const bookable = [
    { icon: Plane, h: "Airport Transfers", p: "Airport to hotel, city or destination." },
    { icon: Building2, h: "Hotel Transfers", p: "Pickup or drop-off at hotels and accommodation, subject to vehicle access." },
    { icon: MapPinned, h: "City-to-City Transfers", p: "Private transportation between Italian cities." },
    { icon: Ship, h: "Cruise Port Transfers", p: "Transportation between cruise ports and destinations." },
    { icon: TrainFront, h: "Train Station Transfers", p: "Pickup or drop-off around major railway stations." },
    { icon: Camera, h: "Private Sightseeing Journeys", p: "Multi-stop itineraries when arranged in advance." },
    { icon: Route, h: "Custom Routes", p: "If a destination isn't listed, submit the journey for a quotation." },
];

const faqs = [
    {
        q: "Which cities in Italy do you cover?",
        a: "This page lists our currently available destination and service pages, grouped by region. If your destination isn't listed, you can still ask about a custom route.",
    },
    {
        q: "Can I book an airport transfer?",
        a: "Yes — airport transfers can be arranged to and from hotels, cities and other destinations. See our Airport Transfers service for more detail.",
    },
    {
        q: "Can I travel between two Italian cities?",
        a: "Yes, private city-to-city transfers can be requested between the destinations listed on this page, or elsewhere via a custom route request.",
    },
    {
        q: "Can I book a cruise port transfer?",
        a: "Yes, cruise-port journeys can be requested where supported — Naples cruise port transfers are covered in detail on the relevant destination pages.",
    },
    {
        q: "Can I request a custom route?",
        a: "Yes. Provide your pickup, destination, date, time, passenger count and luggage, and we'll review the route and provide a quotation.",
    },
    {
        q: "Can I book a return transfer?",
        a: "Yes, return journeys can be requested as part of your itinerary.",
    },
    {
        q: "Can I travel with several suitcases?",
        a: "Yes — include your luggage details when requesting a quote so an appropriate vehicle can be considered.",
    },
    {
        q: "How is the transfer price calculated?",
        a: "Quotations depend on the route, date, passenger count, luggage, vehicle requirements and any additional stops. You'll receive a price before you book.",
    },
];

export default function CityTransfersPage() {
    return (
        <main className="min-h-screen bg-[#F8F6F1] font-inter">
            <Navbar />

            <PageHero
                titleTop="Private Transfers"
                titleBottom="Across Italy"
                description="Book private transportation between Italy's major cities, airports, ports, hotels and destinations. Choose a destination below, or contact us if your journey requires a custom route."
                backgroundImage="/images/hero.png"
                buttonText="Plan Your Journey"
                buttonLink="/contact"
            />

            {/* Practical overview */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-navy mb-10 text-center">Private Transfers Throughout Italy</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden bg-white">
                        {[
                            { icon: Plane, label: 'Airports', value: 'Airport to hotel, city or destination' },
                            { icon: Building2, label: 'Hotels & Accommodation', value: 'Door-to-door or vehicle-accessible pickup' },
                            { icon: TrainFront, label: 'Train Stations', value: 'Private station transfers' },
                            { icon: Ship, label: 'Cruise Ports', value: 'Port to hotel, city or sightseeing destination' },
                            { icon: MapPinned, label: 'City-to-City', value: 'Private intercity transfers' },
                            { icon: Route, label: 'Custom Routes', value: 'Journeys not covered by the listed destinations' },
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div key={i} className="p-6 text-center sm:text-left">
                                    <Icon className="w-5 h-5 text-gold mb-3 mx-auto sm:mx-0" />
                                    <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">{item.label}</p>
                                    <p className="text-navy font-medium text-sm leading-snug">{item.value}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Featured destinations — larger visual treatment */}
            <section className="py-20 bg-[#F8F6F1]">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-navy mb-10 text-center">Popular Transfer Destinations</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featured.map((city, i) => (
                            <Link
                                key={i}
                                href={city.link}
                                className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-gold hover:shadow-lg transition-all flex items-center justify-between"
                            >
                                <span className="text-xl font-bold text-navy group-hover:text-gold transition-colors">{city.name}</span>
                                <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Browse all destinations, grouped by region */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4 text-center">Browse All Destinations</h2>
                    <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">Every destination below has its own dedicated transfer page.</p>
                    <div className="grid sm:grid-cols-2 gap-x-16 gap-y-12">
                        {regions.map((region, i) => (
                            <div key={i}>
                                <h3 className="text-gold text-xs font-bold uppercase tracking-widest mb-4">{region.name}</h3>
                                <ul className="space-y-1">
                                    {region.destinations.map((d, j) => (
                                        <li key={j}>
                                            <Link href={d.link} className="flex items-center justify-between py-2.5 border-b border-gray-100 text-navy font-medium hover:text-gold transition-colors">
                                                {d.name}
                                                <ChevronRight className="w-4 h-4 text-gray-300" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What can you book */}
            <section className="py-20 bg-[#F8F6F1]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-navy mb-14 text-center">What Can You Book?</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
                        {bookable.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div key={i} className="border-l-2 border-gold/40 pl-5">
                                    <Icon className="w-5 h-5 text-gold mb-2" />
                                    <h3 className="font-bold text-navy mb-1">{item.h}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.p}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="py-20 bg-navy relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-14 text-center">How to Arrange a Private Transfer</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            { n: '1', h: 'Choose your destination', p: 'Select one of the listed cities or areas.' },
                            { n: '2', h: 'Send your journey details', p: 'Provide pickup, destination, date, time, passengers and luggage.' },
                            { n: '3', h: 'Receive your quote', p: 'The journey is reviewed based on your exact requirements.' },
                            { n: '4', h: 'Confirm your transfer', p: 'Follow the booking instructions provided with the quotation.' },
                        ].map((step) => (
                            <div key={step.n}>
                                <span className="block text-5xl font-serif italic text-gold/40 mb-4">{step.n}</span>
                                <h3 className="text-white font-bold text-lg mb-2">{step.h}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{step.p}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom route CTA */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-2xl text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Can&apos;t Find Your Destination?</h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                        If your pickup or destination isn&apos;t listed above, send us the journey details and we&apos;ll review the route and provide a quotation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-bold py-3 px-8 rounded-xl hover:bg-navy hover:text-white transition-colors">
                            Plan Your Journey
                        </Link>
                        <Link href="/book-now" className="inline-flex items-center justify-center gap-2 border border-gray-200 text-navy font-bold py-3 px-8 rounded-xl hover:border-gold hover:text-gold transition-colors">
                            Book Now
                        </Link>
                    </div>
                </div>
            </section>

            <FAQSection faqs={faqs} title="Private Transfers Across Italy — FAQ" />

            <Footer />
        </main>
    );
}
