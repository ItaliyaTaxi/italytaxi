import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ServiceSchema from '@/components/ServiceSchema';
import BookingForm from '@/components/BookingForm';
import FAQSection from '@/components/FAQSection';
import { MapPin, Clock, ChevronRight, MessageCircle, CheckCircle } from 'lucide-react';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=60&w=1200';
const CANONICAL = '/route/florence-to-pisa-taxi';

export const metadata: Metadata = {
    title: 'Florence to Pisa Private Taxi | Italy Taxi Service',
    description: 'Private door-to-door transfer from Florence to Pisa — around 80 km and 1 hour by road. Pickup from your Florence hotel, apartment or the airport, drop-off anywhere in Pisa.',
    alternates: {
        canonical: CANONICAL,
        languages: { 'it-IT': '/it/route/trasferimento-firenze-pisa', en: CANONICAL, 'x-default': CANONICAL },
    },
    openGraph: {
        title: 'Florence to Pisa Private Taxi | Italy Taxi Service',
        description: 'Private door-to-door transfer from Florence to Pisa — around 80 km and 1 hour by road, with pickup and drop-off at the address you choose.',
        images: [{ url: HERO_IMAGE, alt: 'The Leaning Tower of Pisa on a clear day' }],
    },
};

const faqs = [
    {
        q: 'How far is Pisa from Florence?',
        a: 'Around 80 km by road. The exact distance depends on your pickup point in Florence and where you\'re dropped off in Pisa, since both can vary the route slightly.',
    },
    {
        q: 'How long does a private transfer from Florence to Pisa take?',
        a: 'Around one hour under normal conditions. Traffic, roadworks and the exact addresses at either end can add to this, so treat it as a realistic estimate rather than a guarantee.',
    },
    {
        q: 'Can I be picked up from my Florence hotel?',
        a: 'Yes, provided the address is accessible by vehicle. Give us the full pickup address — hotel, apartment or another location — when you request your quote.',
    },
    {
        q: 'Can I go from Florence Airport to Pisa?',
        a: 'Yes. If you\'re travelling from Florence Airport (FLR), include your flight details in your enquiry so the pickup is planned around your arrival time.',
    },
    {
        q: 'Can I stop at the Leaning Tower of Pisa?',
        a: 'A standard transfer is a direct, point-to-point journey. If you\'d like time at Piazza dei Miracoli to see the Leaning Tower, ask for this when requesting your quote — a sightseeing stop or waiting time is arranged separately and may affect the price.',
    },
    {
        q: 'Can I bring luggage?',
        a: 'Yes — tell us how many bags and what type (including anything oversized, such as golf clubs or musical instruments) so the right vehicle is arranged.',
    },
    {
        q: 'Can I book a return transfer from Pisa to Florence?',
        a: 'Yes, a return journey can be requested as part of the same enquiry, at a time that suits your onward plans.',
    },
    {
        q: 'Is the price fixed?',
        a: 'Your quotation is confirmed before you travel, based on the exact pickup and drop-off points, date and time, passenger and luggage details, and any requested stops or waiting time.',
    },
];

const morePrivateTransfers = [
    { href: '/route/rome-to-florence-taxi', label: 'Rome → Florence' },
    { href: '/route/florence-to-rome-taxi', label: 'Florence → Rome' },
    { href: '/route/milan-to-lake-como-taxi', label: 'Milan → Lake Como' },
    { href: '/route/milan-to-venice-taxi', label: 'Milan → Venice' },
    { href: '/route/rome-to-naples-taxi', label: 'Rome → Naples' },
    { href: '/route/naples-to-amalfi-coast-taxi', label: 'Naples → Amalfi Coast' },
];

export default function FlorenceToPisaTaxiPage() {
    return (
        <main className="font-inter bg-white text-navy-rich">
            <ServiceSchema
                name="Florence to Pisa Taxi Transfer"
                description="Private door-to-door taxi from Florence to Pisa. Approximately 80 km, around 1 hour, with pickup and drop-off at the address you choose."
                url={`https://www.italytaxiservice.com${CANONICAL}`}
                image={HERO_IMAGE}
            />
            <Navbar />

            <PageHero
                titleTop="Florence to Pisa"
                titleBottom="Private Taxi"
                description="Private door-to-door transfer between Florence and Pisa. We collect you from a Florence hotel, apartment, the airport or another agreed address, and take you directly to your Pisa destination — approximately 80 km, around an hour depending on traffic."
                backgroundImage={HERO_IMAGE}
                buttonText="Request Your Transfer Quote"
                breadcrumbs={[
                    { name: 'Routes', item: '/services/city-to-city' },
                    { name: 'Florence to Pisa', item: CANONICAL },
                ]}
            />

            {/* At a Glance — editorial info panel, not a stat-card grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">At a Glance</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-10 max-w-2xl leading-tight">
                        The route between Florence and Pisa, in brief
                    </h2>
                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-0 border-t border-gray-100">
                        {[
                            { label: 'From', value: 'Florence — hotel, apartment, airport, station or agreed address' },
                            { label: 'To', value: 'Pisa — hotel, apartment, airport, station, or the area near the Leaning Tower' },
                            { label: 'Distance', value: 'Approximately 80 km' },
                            { label: 'Typical drive', value: 'Around 1 hour, depending on traffic and the exact addresses' },
                            { label: 'Service', value: 'Private, door-to-door — one vehicle, no changes en route' },
                            { label: 'Booking', value: 'Send your details and receive a quotation before you travel' },
                        ].map((row, i) => (
                            <div key={i} className="flex items-baseline justify-between gap-6 py-5 border-b border-gray-100">
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 shrink-0">{row.label}</span>
                                <span className="text-navy font-medium text-right">{row.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The journey — editorial prose, narrow column */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">Florence to Pisa by Private Taxi</h2>
                    <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                        <p>
                            The drive from Florence to Pisa covers around 80 km, mostly via the A11 motorway, and normally takes about an hour. That's a general figure rather than a guarantee — traffic around Florence at busier times of day, and the precise pickup and drop-off addresses at either end, can both shift the journey a little longer or shorter.
                        </p>
                        <p>
                            With a private transfer, there's no train to catch, no platform to find and no connection to manage with your luggage. Your driver collects you from the address you've given — a hotel, an apartment, Florence Airport, or another location you've agreed in advance — and drives directly toward Pisa, without a change of vehicle along the way.
                        </p>
                        <p>
                            The same applies at the Pisa end: you're taken to the specific address or area you've requested, rather than a fixed station or stop shared with other passengers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pickup / Drop-off — two-column editorial layout */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <div className="flex items-center gap-2 mb-5">
                                <MapPin className="w-5 h-5 text-gold" />
                                <h3 className="text-2xl font-bold text-navy">Where We Can Pick You Up in Florence</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-5">
                                We collect passengers from most addresses that a vehicle can reach, including:
                            </p>
                            <ul className="space-y-2 text-gray-700">
                                {[
                                    'Florence city-centre hotels',
                                    'Private apartments',
                                    'Florence Airport (FLR)',
                                    'The Santa Maria Novella area',
                                    'Florence\'s main railway station',
                                    'Another address you agree with us in advance',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-gold mt-1 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-500 text-sm mt-5">Provide the exact pickup address when you request your quotation.</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-5">
                                <MapPin className="w-5 h-5 text-gold" />
                                <h3 className="text-2xl font-bold text-navy">Where We Can Drop You in Pisa</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-5">
                                On arrival, we take you as close as vehicle access allows to:
                            </p>
                            <ul className="space-y-2 text-gray-700">
                                {[
                                    'Pisa city centre',
                                    'Hotels and private apartments',
                                    'Pisa Airport',
                                    'Pisa Centrale railway station',
                                    'The area near the Leaning Tower and Piazza dei Miracoli',
                                    'Another address you agree with us in advance',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-gold mt-1 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-500 text-sm mt-5">
                                A standard transfer is a direct journey rather than a sightseeing tour. If you'd like time to visit the Leaning Tower on the way, request a stop when asking for your quote — any waiting time is arranged, and priced, separately.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's included — plain factual checklist, single column */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-8">Your Private Transfer Includes</h2>
                    <ul className="space-y-4">
                        {[
                            'A private vehicle for your group — not shared with other passengers',
                            'Pickup from your agreed Florence location',
                            'A direct journey to your Pisa destination',
                            'Driver assistance with luggage',
                            'A route planned around your confirmed pickup and drop-off points',
                            'English-speaking driver',
                            'A clear quotation before you book',
                             'Free cancellation with more than 24 hours\' notice before pickup',
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                <span className="text-gray-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* How booking works — numbered steps, distinct from the checklist/grid patterns above */}
            <section className="py-20 bg-navy">
                <div className="container mx-auto px-6 max-w-5xl">
                    <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4 text-center">How Booking Works</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-14 text-center">From enquiry to pickup</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            { n: '1', h: 'Send your journey details', p: 'Tell us your pickup location, destination, date, time, passengers and luggage.' },
                            { n: '2', h: 'Receive your quotation', p: 'We check the journey details and send you the available transfer option and price.' },
                            { n: '3', h: 'Confirm your transfer', p: 'Once you\'re happy with the quotation, confirm the booking following the instructions provided.' },
                            { n: '4', h: 'Meet your driver', p: 'Your driver collects you at the agreed pickup point and takes you to your destination.' },
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

            {/* Quote form — same functional form, introduced with editorial copy */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Request a Florence to Pisa Transfer Quote</h2>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                            Tell us where you're staying in Florence, where you'd like to be dropped off in Pisa, and when you plan to travel. We'll review your journey and send you a quotation.
                        </p>
                    </div>
                    <div className="bg-[#0F1C2E] p-8 md:p-10 rounded-[2rem] shadow-2xl">
                        <BookingForm sourceName="Florence to Pisa Route Page" />
                        <div className="mt-8 flex flex-col items-center gap-4">
                            <p className="text-gray-400 text-xs text-center">Need help? Contact us 24/7</p>
                            <a
                                href="https://wa.me/923148932631"
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

            {/* Route planning resource — a simple text band, not a card */}
            <section className="py-16 bg-[#F8F9FA] border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <h2 className="text-2xl font-bold text-navy mb-3">Planning Your Florence–Pisa Journey?</h2>
                    <p className="text-gray-600 leading-relaxed mb-2">
                        See our Florence to Pisa distance guide for more on the route, the approximate driving distance and typical travel time.
                    </p>
                    <Link href="/distance/florence-to-pisa-distance" className="inline-flex items-center gap-1 text-gold hover:text-navy font-bold transition-colors">
                        Florence to Pisa Distance Guide <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            <FAQSection faqs={faqs} title="Florence to Pisa Transfer — FAQ" />

            {/* More private transfers — compact list, not a repeated square-card grid */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-2xl font-bold text-navy mb-8 text-center">More Private Transfers</h2>
                    <div className="grid sm:grid-cols-2 gap-x-10 gap-y-1 border-t border-gray-100">
                        {morePrivateTransfers.map((r, i) => (
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
                    <div className="text-center mt-10">
                        <Link href="/services/city-to-city" className="inline-flex items-center text-gold hover:text-navy font-bold tracking-widest uppercase text-sm border-b-2 border-gold/30 hover:border-navy transition-all pb-1">
                            View All City-to-City Transfers <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* More ways to travel with Italy Taxi Service */}
            <section className="py-16 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-2xl font-bold text-navy mb-8 text-center">More Ways to Travel with Italy Taxi Service</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
                        {[
                            { href: '/city/florence', label: 'Florence Taxi Service' },
                            { href: '/city/pisa', label: 'Pisa Taxi Service' },
                            { href: '/services/airport-transfers', label: 'Airport Transfers' },
                            { href: '/services/city-to-city', label: 'City-to-City Transfers' },
                            { href: '/services/private-tours', label: 'Private Sightseeing Tours' },
                            { href: '/services/hotel-transfers', label: 'Hotel Transfer Service' },
                            { href: '/services/hourly-taxi', label: 'Hourly Taxi Service' },
                            { href: '/book-now', label: 'Book Your Transfer' },
                        ].map((link, i) => (
                            <Link
                                key={i}
                                href={link.href}
                                className="flex items-center gap-2 text-gray-700 hover:text-gold transition-colors font-medium py-1.5"
                            >
                                <ChevronRight className="w-4 h-4 text-gold shrink-0" /> {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
