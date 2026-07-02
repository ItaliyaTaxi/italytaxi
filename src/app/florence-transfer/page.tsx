import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import ServiceSchema from '@/components/ServiceSchema';
import { ChevronRight, Plane, Building2, Trees, Landmark } from 'lucide-react';
import {
    flDestinations,
    flAirports,
    arrivalSlug,
    departureSlug,
} from '@/lib/florence-transfer-data';

const SITE = 'https://www.italytaxiservice.com';
const HERO_IMG = '/images/florence airport.webp';

export const metadata: Metadata = {
    title: 'Florence & Pisa Airport Transfers to Florence Hotels & Tuscany',
    description: 'Private airport transfers from Florence (FLR) and Pisa (PSA) to Florence hotels, Tuscany resorts and top destinations. Fixed prices, meet & greet, flight monitoring and door-to-door service.',
    alternates: { canonical: '/florence-transfer' },
    openGraph: {
        title: 'Florence & Pisa Airport Transfers | Italy Taxi Service',
        description: 'Private transfers from Florence and Pisa airports to Florence hotels, Tuscany resorts and landmarks.',
        url: `${SITE}/florence-transfer`, type: 'website',
        images: [{ url: `${SITE}${HERO_IMG}`, width: 1200, height: 630, alt: 'Florence and Pisa airport private transfers to Florence and Tuscany' }],
    },
};

export default function FlorenceTransferHub() {
    const flr = flAirports.find((a) => a.code === 'FLR')!;
    const psa = flAirports.find((a) => a.code === 'PSA')!;

    const hotels = flDestinations.filter((d) => d.kind === 'hotel');
    const resorts = flDestinations.filter((d) => d.kind === 'resort');
    const landmarks = flDestinations.filter((d) => d.kind === 'landmark');

    const flrHotels = hotels.filter((d) => d.legs.flr);
    const psaHotels = hotels.filter((d) => d.legs.psa);
    const flrResorts = resorts.filter((d) => d.legs.flr);
    const psaResorts = resorts.filter((d) => d.legs.psa);
    const flrLandmarks = landmarks.filter((d) => d.legs.flr);
    const psaLandmarks = landmarks.filter((d) => d.legs.psa);
    const departures = flDestinations.filter((d) => d.reverseToFlr && d.legs.flr);

    const faqs = [
        { q: 'How far is Florence Airport (FLR) from the city centre?', a: 'Florence Airport (Peretola / Amerigo Vespucci) is about 6 km northwest of the centre — roughly a 15–25 minute private transfer, depending on traffic and your exact address.' },
        { q: 'How far is Pisa Airport (PSA) from Florence?', a: 'Pisa International Airport is about 85 km west of Florence, typically a 1 hour 10 to 1 hour 30 minute private transfer via the FI-PI-LI expressway or the A11 motorway.' },
        { q: 'Can you collect me inside Florence\'s ZTL?', a: 'Yes. Our NCC-licensed vehicles are pre-registered for Florence\'s restricted-traffic (ZTL) zone, so we reach your hotel door where ordinary cars would be fined.' },
        { q: 'Are prices fixed?', a: 'Yes — every transfer is quoted as a fixed, all-inclusive price agreed before you travel, with no meter and no hidden charges.' },
        { q: 'Do you monitor flights?', a: 'Yes. We track your flight in real time and adjust the pickup automatically if it lands early or late, with free waiting time after landing.' },
        { q: 'Do you cover the Tuscan countryside?', a: 'Yes — we transfer to resorts across Chianti, the Val d\'Orcia, Siena, the Maremma coast and more, from both Florence and Pisa airports.' },
    ];

    const Group = ({ title, icon, airport, items, reverse = false }: {
        title: string; icon: React.ReactNode; airport: typeof flr; items: typeof flDestinations; reverse?: boolean;
    }) => (
        <div className="mb-10">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-navy mb-4">{icon} {title}</h2>
            <div className="grid sm:grid-cols-2 gap-3">
                {items.map((d) => {
                    const slug = reverse ? departureSlug(d, airport) : arrivalSlug(airport, d);
                    const label = reverse ? `${d.name} → ${airport.short} Airport` : `${airport.short} Airport → ${d.name}`;
                    return (
                        <Link key={slug} href={`/florence-transfer/${slug}`} className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium">
                            <ChevronRight className="w-4 h-4 text-gold shrink-0" /> {label}
                        </Link>
                    );
                })}
            </div>
        </div>
    );

    return (
        <main className="font-inter bg-white text-navy">
            <ServiceSchema
                name="Florence & Pisa Airport Transfers to Florence and Tuscany"
                description="Private airport transfers from Florence (FLR) and Pisa (PSA) to Florence hotels, Tuscany resorts and top destinations, with fixed prices, meet & greet and flight monitoring."
                url={`${SITE}/florence-transfer`}
                image={`${SITE}${HERO_IMG}`}
            />
            <Navbar />

            <PageHero
                titleTop="Florence &amp; Pisa Airport"
                titleBottom="Private Transfers"
                description="Fixed-price, door-to-door private transfers from Florence (FLR) and Pisa (PSA) airports to Florence hotels, Tuscany resorts and the region's most famous landmarks — with meet & greet, flight monitoring and ZTL-registered vehicles."
                backgroundImage={HERO_IMG}
                buttonText="Book Your Transfer"
                buttonLink="/book-now/"
                breadcrumbs={[
                    { name: 'Airport Transfers', item: '/airport-transfer' },
                    { name: 'Florence & Pisa Airport Transfers', item: '/florence-transfer' },
                ]}
            />

            <section className="py-16">
                <div className="container mx-auto px-6 max-w-5xl">
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Whether you land at <strong>Florence Airport (FLR)</strong>, minutes from the city, or at <strong>Pisa International (PSA)</strong> on the coast, our private transfers take you directly to your Florence hotel, a Tuscan countryside resort, or a landmark of your choice. Every transfer is a fixed price with a professional English-speaking driver, real-time flight monitoring and meet &amp; greet — and because our fleet is NCC-licensed and ZTL-registered, we reach addresses in the historic centre that ordinary cars cannot.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-10">
                        Choose your route below for full details, distance, travel time and pricing.
                    </p>

                    <Group title="Florence Airport → Florence Hotels" icon={<Building2 className="w-6 h-6 text-gold" />} airport={flr} items={flrHotels} />
                    <Group title="Pisa Airport → Florence Hotels" icon={<Building2 className="w-6 h-6 text-gold" />} airport={psa} items={psaHotels} />
                    <Group title="Florence Airport → Tuscany Resorts" icon={<Trees className="w-6 h-6 text-gold" />} airport={flr} items={flrResorts} />
                    <Group title="Pisa Airport → Tuscany Resorts" icon={<Trees className="w-6 h-6 text-gold" />} airport={psa} items={psaResorts} />
                    <Group title="Florence Airport → Popular Destinations" icon={<Landmark className="w-6 h-6 text-gold" />} airport={flr} items={flrLandmarks} />
                    <Group title="Pisa Airport → Popular Destinations" icon={<Landmark className="w-6 h-6 text-gold" />} airport={psa} items={psaLandmarks} />
                    <Group title="Florence Hotels → Florence Airport (Departures)" icon={<Plane className="w-6 h-6 text-gold" />} airport={flr} items={departures} reverse />

                    <div className="mt-6 grid sm:grid-cols-2 gap-3">
                        <Link href="/city/florence" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> Florence City Private Transfers</Link>
                        <Link href="/tour/tuscany-wine-tour" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> Tuscany Wine Tours</Link>
                        <Link href="/airport/florence" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> Florence Airport Guide</Link>
                        <Link href="/airport/pisa" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> Pisa Airport Guide</Link>
                    </div>
                </div>
            </section>

            <FAQSection faqs={faqs} title="Florence & Pisa Airport Transfers — FAQ" />
            <Footer />
        </main>
    );
}
