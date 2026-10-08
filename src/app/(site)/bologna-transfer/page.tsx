import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import ServiceSchema from '@/components/ServiceSchema';
import { ChevronRight, Plane, Building2, Ship, Anchor } from 'lucide-react';
import {
    bolognaAirport,
    bolognaHotels,
    bolognaArrivalSlug,
    bolognaDepartureSlug,
    bolognaCruiseOrigins,
    ravennaCruisePort,
    cruiseArrivalSlug,
    cruiseDepartureSlug,
} from '@/lib/bologna-transfer-data';

const SITE = 'https://www.italytaxiservice.com';
const HERO_IMG = '/images/Bologna.webp';

export const metadata: Metadata = {
    title: 'Bologna Airport & Ravenna Cruise Port Transfers',
    description: 'Private transfers between Bologna Marconi Airport (BLQ), Bologna hotels and Ravenna Cruise Port. Fixed prices agreed before you travel, with door-to-door service across Emilia-Romagna.',
    alternates: { canonical: '/bologna-transfer' },
    openGraph: {
        title: 'Bologna Airport & Ravenna Cruise Port Transfers | Italy Taxi Service',
        description: 'Private transfers between Bologna Marconi Airport, Bologna hotels and Ravenna Cruise Port.',
        url: `${SITE}/bologna-transfer`, type: 'website',
        images: [{ url: `${SITE}${HERO_IMG}`, width: 1200, height: 630, alt: 'Bologna private airport and cruise port transfers' }],
    },
};

const Group = ({ title, icon, intro, children }: {
    title: string; icon: React.ReactNode; intro: string; children: React.ReactNode;
}) => (
    <div className="mb-10">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-navy mb-2">{icon} {title}</h2>
        <p className="text-gray-600 mb-4">{intro}</p>
        <div className="grid sm:grid-cols-2 gap-3">{children}</div>
    </div>
);

const Item = ({ href, label }: { href: string; label: string }) => (
    <Link href={href} className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium">
        <ChevronRight className="w-4 h-4 text-gold shrink-0" /> {label}
    </Link>
);

export default function BolognaTransferHub() {
    const faqs = [
        { q: 'How far is Bologna Airport from the city centre?', a: 'Bologna Guglielmo Marconi Airport (BLQ) sits about 6 km northwest of the historic centre, which usually means a 15 to 20 minute drive — longer at peak hours or if your hotel is inside the narrow streets of the old town.' },
        { q: 'Is there public transport from Bologna Airport?', a: 'Yes. The Marconi Express people-mover runs between the terminal and Bologna Centrale station in a few minutes. It is a sensible option if you are travelling light, but it leaves you at the station with a walk or a second taxi to your hotel, which a direct transfer avoids.' },
        { q: 'How far is Ravenna Cruise Port from Bologna?', a: 'The cruise terminal sits along the Candiano Canal at the Porto di Ravenna, roughly 76 km from Bologna via the A14 Adriatica motorway — generally a little over an hour by road. Treat that as an estimate rather than a promise, since traffic varies.' },
        { q: 'Can you collect me from my Bologna hotel for a cruise departure?', a: 'Yes. Transfers to Ravenna can start from any of the Bologna hotels listed on this page, from the city centre, or directly from the airport if you are flying in on embarkation day.' },
        { q: 'Which other Emilia-Romagna destinations do you cover from Bologna Airport?', a: 'Bologna Marconi is a practical gateway for Modena, Parma and Ravenna, each reachable within about an hour by road. Tell us the destination when you request a quote and we will price the route directly.' },
        { q: 'Are transfer prices fixed?', a: 'Your quotation is confirmed before you travel, based on the route, the number of passengers, luggage and any extra stops. There is no meter running during the journey.' },
    ];

    return (
        <main className="font-inter bg-white text-navy">
            <ServiceSchema
                name="Bologna Airport and Ravenna Cruise Port Private Transfers"
                description="Private transfers between Bologna Marconi Airport (BLQ), Bologna hotels and Ravenna Cruise Port, with fixed prices agreed before travel and door-to-door service."
                url={`${SITE}/bologna-transfer`}
                image={`${SITE}${HERO_IMG}`}
            />
            <Navbar />

            <PageHero
                titleTop="Bologna Airport &amp; Ravenna"
                titleBottom="Private Transfers"
                description="Door-to-door private transfers between Bologna Marconi Airport (BLQ), hotels across Bologna and the cruise terminals at Ravenna — with a fixed price agreed before you travel."
                backgroundImage={HERO_IMG}
                buttonText="Request a Quote"
                buttonLink="/book-now"
                breadcrumbs={[
                    { name: 'Airport Transfers', item: '/airport-transfer' },
                    { name: 'Bologna & Ravenna Transfers', item: '/bologna-transfer' },
                ]}
            />

            <section className="py-16">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-2xl font-bold text-navy mb-4">Two routes that matter in Emilia-Romagna</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        <strong>Bologna Guglielmo Marconi Airport (BLQ)</strong> is a compact single-terminal airport about 6 km northwest of the city, so the drive in is short — usually 15 to 20 minutes. The Marconi Express people-mover connects the terminal to Bologna Centrale in a few minutes, but it ends at the station rather than your door, which is the main reason travellers with luggage, early flights or hotels in the porticoed centre book a car instead.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Bologna is also the usual mainland base for <strong>{ravennaCruisePort.name}</strong>, about 76 km east on the Adriatic. Embarkation days run to a fixed clock, so most cruise passengers prefer a single confirmed pickup — from the airport, the city centre or their hotel — rather than a train plus a local connection at the Ravenna end. The reverse legs below cover disembarkation mornings, when the whole ship leaves at once.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-10">
                        Pick your route below for the distance, journey time and what to include when you request a quote.
                    </p>

                    <Group
                        title="Bologna Airport → Bologna Hotels"
                        icon={<Building2 className="w-6 h-6 text-gold" />}
                        intro="Arrivals at BLQ, taken directly to the hotel door — including addresses in the historic centre where the street layout makes self-drive awkward."
                    >
                        {bolognaHotels.map((h) => (
                            <Item
                                key={bolognaArrivalSlug(h)}
                                href={`/bologna-transfer/${bolognaArrivalSlug(h)}`}
                                label={`${bolognaAirport.short} Airport → ${h.name}`}
                            />
                        ))}
                    </Group>

                    <Group
                        title="Bologna Hotels → Bologna Airport"
                        icon={<Plane className="w-6 h-6 text-gold" />}
                        intro="Departure legs, timed back from your flight so the pickup allows for traffic, check-in and security at the terminal."
                    >
                        {bolognaHotels.map((h) => (
                            <Item
                                key={bolognaDepartureSlug(h)}
                                href={`/bologna-transfer/${bolognaDepartureSlug(h)}`}
                                label={`${h.name} → ${bolognaAirport.short} Airport`}
                            />
                        ))}
                    </Group>

                    <Group
                        title="To Ravenna Cruise Port (Embarkation)"
                        icon={<Ship className="w-6 h-6 text-gold" />}
                        intro="Roughly 76 km from Bologna, a little over an hour by road. Each route page covers the pickup point and what the terminal approach looks like on a sailing day."
                    >
                        {bolognaCruiseOrigins.map((o) => (
                            <Item
                                key={cruiseDepartureSlug(o)}
                                href={`/bologna-transfer/${cruiseDepartureSlug(o)}`}
                                label={`${o.name} → Ravenna Cruise Port`}
                            />
                        ))}
                    </Group>

                    <Group
                        title="From Ravenna Cruise Port (Disembarkation)"
                        icon={<Anchor className="w-6 h-6 text-gold" />}
                        intro="The return direction, for mornings when a whole ship disembarks at once and taxi ranks at the terminal are thin."
                    >
                        {bolognaCruiseOrigins.map((o) => (
                            <Item
                                key={cruiseArrivalSlug(o)}
                                href={`/bologna-transfer/${cruiseArrivalSlug(o)}`}
                                label={`Ravenna Cruise Port → ${o.name}`}
                            />
                        ))}
                    </Group>

                    <h2 className="text-2xl font-bold text-navy mb-4">Related pages</h2>
                    <div className="grid sm:grid-cols-2 gap-3">
                        <Item href={bolognaAirport.airportPage} label="Bologna Marconi Airport Guide" />
                        <Item href="/city/bologna" label="Bologna City Private Transfers" />
                        <Item href="/services/cruise-port-transfers" label="Cruise Port Transfers in Italy" />
                        <Item href="/services/airport-transfers" label="Airport Transfers in Italy" />
                    </div>
                </div>
            </section>

            <FAQSection faqs={faqs} title="Bologna & Ravenna Transfers — FAQ" />
            <Footer />
        </main>
    );
}
