import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ServiceSchema from '@/components/ServiceSchema';
import BookingForm from '@/components/BookingForm';
import FAQSection from '@/components/FAQSection';
import { Plane, Building2, Route, Camera, RotateCcw, ChevronRight, MessageCircle, CheckCircle } from 'lucide-react';

const HERO_IMAGE = '/images/almafi.webp';
const CANONICAL = '/city/amalfi-coast';
const WHATSAPP = 'https://wa.me/923148932631?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20a%20private%20transfer%20on%20the%20Amalfi%20Coast.';

export const metadata: Metadata = {
    title: 'Amalfi Coast Taxi & Private Transfers | Italy Taxi Service',
    description: 'Book private transfers across the Amalfi Coast, including Naples Airport, cruise ports, hotels, Amalfi, Positano, Ravello and Sorrento.',
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: 'Amalfi Coast Taxi & Private Transfers | Italy Taxi Service',
        description: 'Private transfers across the Amalfi Coast — airports, cruise ports, hotels, and journeys between Amalfi, Positano, Ravello and Sorrento.',
        images: [{ url: HERO_IMAGE, alt: 'Amalfi Coast, southern Italy' }],
    },
};

const faqs = [
    {
        q: 'How do I book a private taxi on the Amalfi Coast?',
        a: 'Send us your pickup location, destination, date, time, passenger count and luggage. We review the journey and provide a quotation before you book.',
    },
    {
        q: 'Can I book a transfer from Naples Airport to Amalfi?',
        a: 'Yes, airport transfers from Naples to Amalfi and other coastal towns can be requested directly.',
    },
    {
        q: 'Can I travel from Naples Cruise Port to Positano?',
        a: 'Yes — cruise-port transfers to Positano and other Amalfi Coast towns can be requested. See our Naples Cruise Port to Sorrento guide for the neighbouring route in detail.',
    },
    {
        q: 'Can I travel from Sorrento to Amalfi?',
        a: 'Yes, town-to-town transfers such as Sorrento to Amalfi can be requested directly.',
    },
    {
        q: 'Can I book a transfer to Ravello?',
        a: 'Yes, Ravello can be requested as a destination, subject to vehicle access at your specific pickup or drop-off point.',
    },
    {
        q: 'Can I be picked up directly from my hotel or villa?',
        a: 'Provide the exact address when requesting your quote. Some Amalfi Coast properties sit on narrow roads or pedestrian areas, so the final pickup or drop-off point may depend on local vehicle access.',
    },
    {
        q: 'Can I book a return transfer?',
        a: 'Yes, if included in your requested itinerary.',
    },
    {
        q: 'Can I stop in Positano or another town during my transfer?',
        a: 'Additional stops can be requested in advance and may affect the available time and the quotation, so let us know when you first get in touch.',
    },
    {
        q: 'How much does an Amalfi Coast taxi cost?',
        a: 'Pricing depends on your route, date, passenger count, luggage, vehicle requirements and any additional stops. You\'ll receive a quotation based on these details before you book.',
    },
    {
        q: 'How long do Amalfi Coast transfers take?',
        a: "Journey time depends on the specific route and traffic conditions — the coast road is winding and can be busier at certain times, so treat any duration as a guide rather than a guarantee.",
    },
];

export default function AmalfiCoastPage() {
    return (
        <main className="font-inter bg-white text-navy-rich">
            <ServiceSchema
                name="Amalfi Coast Taxi & Private Transfers"
                description="Private transfers across the Amalfi Coast, covering Naples Airport, Naples Cruise Port, Salerno, hotels and villas, and journeys between Amalfi, Positano, Ravello and Sorrento."
                url={`https://www.italytaxiservice.com${CANONICAL}`}
                image={HERO_IMAGE}
            />
            <Navbar />

            <PageHero
                titleTop="Private Amalfi Coast"
                titleBottom="Transfers"
                description="Arrange a private transfer along the Amalfi Coast, with pickup from Naples, Salerno, Sorrento, an airport, cruise port, hotel or another agreed location."
                backgroundImage={HERO_IMAGE}
                buttonText="Request a Quote"
                breadcrumbs={[
                    { name: 'Destinations', item: '/city' },
                    { name: 'Amalfi Coast', item: CANONICAL },
                ]}
            />

            {/* Practical overview — replaces the 99% stat */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-2xl font-bold text-navy mb-8 text-center">Private Transfers Across the Amalfi Coast</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
                        {[
                            { icon: Plane, label: 'Airports & Cruise Ports', value: 'Naples and nearby arrival points' },
                            { icon: Building2, label: 'Hotels & Villas', value: 'Door-to-door where access allows' },
                            { icon: Route, label: 'Coastal Destinations', value: 'Amalfi, Positano, Ravello, Sorrento' },
                            { icon: RotateCcw, label: 'Return & Custom Journeys', value: 'Additional stops on request' },
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

            {/* Airport transfers */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-6">Amalfi Coast Airport Transfers</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Naples International Airport is the main arrival point for the Amalfi Coast. A private transfer can be arranged directly from the airport to Amalfi, Positano, Ravello, Sorrento, your hotel, a villa, or another agreed destination — around 70 km and typically 1 hour 45 minutes via the coast road, depending on traffic and your exact destination.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Return airport transfers can also be requested. Provide your flight number, arrival or departure date and time, pickup or drop-off address, passenger count and luggage when requesting a quote. See our{' '}
                        <Link href="/route/naples-airport-to-amalfi-taxi" className="text-gold font-semibold hover:underline">Naples Airport to Amalfi</Link>{' '}
                        route page for the full detail.
                    </p>
                </div>
            </section>

            {/* Naples Cruise Port */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-6">Naples Cruise Port to the Amalfi Coast</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Cruise passengers arriving in Naples can request a private transfer to Amalfi, Positano, Ravello or Sorrento for their time ashore. Because the Amalfi Coast is a longer excursion than some other Naples shore options, planning the return leg with a genuine time buffer matters — coastal traffic can be unpredictable, and the goal is to get you back to the ship comfortably ahead of the all-aboard time, not at the last possible minute.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        When booking, provide your ship name, arrival time, expected disembarkation time if known, all-aboard time, destination, passenger count and luggage.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        See our{' '}
                        <Link href="/route/naples-cruise-port-to-amalfi-taxi" className="text-gold font-semibold hover:underline">Naples Cruise Port to Amalfi guide</Link>{' '}
                        for the full detail, or the{' '}
                        <Link href="/route/naples-cruise-port-to-sorrento-taxi" className="text-gold font-semibold hover:underline">Naples Cruise Port to Sorrento guide</Link>{' '}
                        if Sorrento fits your port call better.
                    </p>
                </div>
            </section>

            {/* Naples to Amalfi Coast */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-6">Naples to Amalfi Coast Private Transfers</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Beyond the airport and cruise port, private transfers from Naples itself — a hotel, Napoli Centrale, or another address — can be requested to any point on the coast:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                        {[
                            'Naples to Amalfi',
                            'Naples to Positano',
                            'Naples to Ravello',
                            'Naples to Sorrento',
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <ChevronRight className="w-4 h-4 text-gold mt-1 shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Salerno */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-6">Salerno to the Amalfi Coast</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Travelers arriving in Salerno — including cruise passengers — can also request a private transfer to Amalfi, Positano, Ravello or another coastal destination. See our{' '}
                        <Link href="/blog/salerno-cruise-port-to-amalfi-coast" className="text-gold font-semibold hover:underline">Salerno Cruise Port to the Amalfi Coast guide</Link>{' '}
                        for the shore-excursion specifics.
                    </p>
                </div>
            </section>

            {/* Town to town */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-6">Private Transfers Between Amalfi Coast Towns</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Moving between towns along the coast is one of the most common requests — Amalfi, Positano, Ravello and Sorrento are close on a map, but the coast road is narrow and winding, so journey times vary with traffic and season more than distance alone would suggest.
                    </p>
                    <ul className="space-y-2 text-gray-700 mb-4">
                        <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-gold mt-1 shrink-0" />
                            <Link href="/route/positano-to-ravello-taxi" className="hover:text-gold hover:underline">Positano to Ravello</Link>
                        </li>
                        <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-gold mt-1 shrink-0" />
                            <Link href="/route/sorrento-to-amalfi-taxi" className="hover:text-gold hover:underline">Sorrento to Amalfi</Link>
                        </li>
                        <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-gold mt-1 shrink-0" />
                            <Link href="/route/sorrento-to-positano-taxi" className="hover:text-gold hover:underline">Sorrento to Positano</Link>
                        </li>
                        <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-gold mt-1 shrink-0" />
                            <span>Amalfi to Positano, Amalfi to Ravello, and other coastal routes — let us know your pickup and destination and we&apos;ll confirm what can be arranged</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Hotel & villa */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-6">Amalfi Coast Hotel &amp; Villa Transfers</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Pickup or drop-off can be requested at hotels, villas, holiday apartments, resorts and other accommodation along the coast. Provide the exact address when requesting your quote.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Vehicle access varies significantly along the Amalfi Coast — some properties sit on narrow roads, steps, or pedestrian-only stretches where a vehicle cannot stop directly outside. We&apos;ll confirm the closest practical pickup or drop-off point once we know your address.
                    </p>
                </div>
            </section>

            {/* Multi-stop */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="flex items-center gap-3 mb-6">
                        <Camera className="w-6 h-6 text-gold" />
                        <h2 className="text-3xl font-bold text-navy">Want to See More Than One Place?</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        A private itinerary involving multiple destinations can be requested — for example Naples to Pompeii to Positano to Amalfi, or Amalfi to Ravello to Positano in a single day. This isn&apos;t a fixed tour product; it&apos;s arranged around your specific stops and timing.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Additional stops and waiting time affect the total journey time, vehicle availability and the quotation, so it&apos;s worth discussing your itinerary in advance. For a more structured sightseeing itinerary, see our{' '}
                        <Link href="/services/private-tours" className="text-gold font-semibold hover:underline">Private Tours service</Link>.
                    </p>
                </div>
            </section>

            {/* Road & access info */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-6">Traveling Along the Amalfi Coast</h2>
                    <ul className="space-y-3">
                        {[
                            'The coastal road is narrow and winding by nature, and can become busy, particularly during popular travel periods',
                            'Travel time can vary considerably between the same two points depending on traffic and time of day',
                            'Exact pickup and drop-off arrangements depend on local road access at each specific address',
                            'Return journeys and cruise/flight connections should be planned with a sensible margin rather than the minimum possible driving time',
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                <span className="text-gray-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Vehicle options */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-6">Choosing the Right Vehicle</h2>
                    <p className="text-gray-600 leading-relaxed">
                        The right vehicle depends on your passenger count, luggage, group size, comfort requirements and availability on the day. A sedan typically suits smaller groups, a minivan suits families or larger groups, and a larger vehicle can be arranged for bigger parties subject to availability. Let us know your group size and luggage when requesting a quote, and we&apos;ll confirm a suitable option as part of your quotation.
                    </p>
                </div>
            </section>

            {/* How booking works */}
            <section className="py-20 bg-navy relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-14 text-center">How to Arrange an Amalfi Coast Transfer</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
                        {[
                            { n: '1', h: 'Tell us your journey', p: 'Pickup, destination, date and time.' },
                            { n: '2', h: 'Add passenger & luggage details', p: 'This helps determine the appropriate vehicle.' },
                            { n: '3', h: 'Tell us about any stops', p: 'Mention additional destinations or waiting requirements.' },
                            { n: '4', h: 'Receive your quotation', p: 'We review the journey and provide the applicable transfer option.' },
                            { n: '5', h: 'Confirm the booking', p: 'Follow the provided confirmation instructions.' },
                        ].map((step) => (
                            <div key={step.n}>
                                <span className="block text-4xl font-serif italic text-gold/40 mb-3">{step.n}</span>
                                <h3 className="text-white font-bold text-base mb-2">{step.h}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{step.p}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote form */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Request an Amalfi Coast Transfer Quote</h2>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                            Tell us where you&apos;re starting, where you&apos;re going, when you&apos;re traveling and how many people are in your group. If you&apos;re arriving by air, cruise ship or train, include those details in your request.
                        </p>
                    </div>
                    <div className="bg-[#0F1C2E] p-8 md:p-10 rounded-[2rem] shadow-2xl">
                        <BookingForm sourceName="Amalfi Coast Destination Page" />
                        <div className="mt-8 flex flex-col items-center gap-4">
                            <p className="text-gray-400 text-xs text-center">Need help? Contact us 24/7</p>
                            <a
                                href={WHATSAPP}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-[#25D366] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#128C7E] transition-colors w-full max-w-xs justify-center"
                            >
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp Support
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <FAQSection faqs={faqs} title="Amalfi Coast Transfers — FAQ" />

            {/* Related destinations */}
            <section className="py-16 bg-[#F8F9FA] border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-2xl font-bold text-navy mb-8 text-center">Popular Transfers From the Amalfi Coast</h2>
                    <div className="grid sm:grid-cols-2 gap-x-10 gap-y-1">
                        {[
                            { href: '/city/naples', label: 'Naples' },
                            { href: '/city/amalfi', label: 'Amalfi' },
                            { href: '/city/positano', label: 'Positano' },
                            { href: '/city/ravello', label: 'Ravello' },
                            { href: '/city/sorrento', label: 'Sorrento' },
                            { href: '/route/naples-airport-to-amalfi-taxi', label: 'Naples Airport' },
                            { href: '/route/naples-cruise-port-to-amalfi-taxi', label: 'Naples Cruise Port' },
                            { href: '/services/hotel-transfers', label: 'Hotel Transfers' },
                            { href: '/services/private-tours', label: 'Private Tours' },
                            { href: '/book-now', label: 'Book Now' },
                        ].map((r, i) => (
                            <Link
                                key={i}
                                href={r.href}
                                className="flex items-center justify-between gap-2 py-4 border-b border-gray-100 text-gray-700 hover:text-gold transition-colors font-medium"
                            >
                                {r.label}
                                <ChevronRight className="w-4 h-4 text-gold shrink-0" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
