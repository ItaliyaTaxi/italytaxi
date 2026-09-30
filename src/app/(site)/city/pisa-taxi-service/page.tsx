import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ServiceSchema from '@/components/ServiceSchema';
import BookingForm from '@/components/BookingForm';
import FAQSection from '@/components/FAQSection';
import { Plane, TrainFront, Building2, MapPinned, Car, ChevronRight, MessageCircle } from 'lucide-react';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=60&w=1200';
const CANONICAL = '/city/pisa-taxi-service';

export const metadata: Metadata = {
    title: 'Pisa Taxi Service & Private Transfers | Italy Taxi Service',
    description: 'Book private taxi transfers in Pisa, including Pisa Airport, Pisa Centrale, hotels and journeys to Florence and destinations across Tuscany.',
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: 'Pisa Taxi Service & Private Transfers | Italy Taxi Service',
        description: 'Private transfers in Pisa — airport, station, hotel and Tuscany-wide journeys, arranged around the details you provide.',
        images: [{ url: HERO_IMAGE, alt: 'The Leaning Tower of Pisa on a clear day' }],
    },
};

const faqs = [
    {
        q: 'Can I book a taxi from Pisa Airport to my hotel?',
        a: 'Yes. Provide your flight details, arrival time and hotel address when requesting a quote, and pickup can be arranged from the airport directly to your accommodation.',
    },
    {
        q: 'Can I book a Pisa Airport to Florence transfer?',
        a: 'Yes, a private intercity transfer from Pisa Airport to Florence can be requested directly.',
    },
    {
        q: 'Can I be picked up from Pisa Centrale?',
        a: "Yes — station pickups and drop-offs can be requested. The exact meeting point is confirmed with your booking, since this depends on where you'll be waiting and what the station looks like on the day.",
    },
    {
        q: 'Can I book a transfer to the Leaning Tower?',
        a: "Yes. Piazza dei Miracoli has vehicle access restrictions, so your driver will take you to an appropriate vehicle-accessible drop-off point nearby rather than directly to the tower itself. If you'd like waiting time while you visit, arrange this in advance.",
    },
    {
        q: 'Can I book a return airport transfer?',
        a: 'Yes, if included in your requested itinerary — let us know your outbound and return details when you request your quote.',
    },
    {
        q: 'Can I travel from Pisa to Florence?',
        a: 'Yes, direct private transfers between Pisa and Florence can be requested in either direction.',
    },
    {
        q: 'Can I travel from Pisa to Lucca?',
        a: 'This can be requested — let us know your pickup point and timing and we\'ll confirm what can be arranged.',
    },
    {
        q: 'Can I bring several suitcases?',
        a: 'Yes — provide your luggage details when requesting a quotation so an appropriate vehicle can be considered.',
    },
    {
        q: 'Can I request a private transfer for a family or group?',
        a: 'Yes. Vehicle selection depends on passenger count and luggage, so include both when requesting your quote.',
    },
    {
        q: 'How much does a Pisa taxi cost?',
        a: 'Pricing depends on your pickup, destination, date, passenger count, luggage and any additional requirements. You\'ll receive a quotation based on these details before you book.',
    },
];

export default function PisaTaxiServicePage() {
    return (
        <main className="font-inter bg-white text-navy-rich">
            <ServiceSchema
                name="Pisa Taxi Service & Private Transfers"
                description="Private taxi transfers in Pisa, covering Pisa Airport, Pisa Centrale, hotels and accommodation, and journeys to Florence and destinations across Tuscany."
                url={`https://www.italytaxiservice.com${CANONICAL}`}
                image={HERO_IMAGE}
            />
            <Navbar />

            <PageHero
                titleTop="Private Taxi & Transfers"
                titleBottom="in Pisa"
                description="Arrange a private transfer in Pisa with pickup from Pisa Airport, Pisa Centrale, your hotel, accommodation or another agreed location — for airport transfers, hotel transfers, and private journeys to destinations around Tuscany."
                backgroundImage={HERO_IMAGE}
                buttonText="Get a Quote"
                breadcrumbs={[
                    { name: 'Cities', item: '/city' },
                    { name: 'Pisa', item: CANONICAL },
                ]}
            />

            {/* Service overview */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
                        {[
                            { icon: Plane, label: 'Pisa Airport', value: 'Private pickup and drop-off' },
                            { icon: TrainFront, label: 'Pisa Centrale', value: 'Station transfers' },
                            { icon: Building2, label: 'Hotels & Accommodation', value: 'Door-to-door service' },
                            { icon: MapPinned, label: 'City Transfers', value: 'Pisa to Florence and other destinations' },
                            { icon: Car, label: 'Private Trips', value: 'Custom journeys on request' },
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

            {/* Main introduction */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">Private Taxi Transfers in Pisa</h2>
                    <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                        <p>
                            Pisa is known first for the Leaning Tower, but for many travellers it&apos;s also an arrival point for exploring the rest of Tuscany — a compact airport, a well-connected station, and a genuinely useful base for reaching Florence, Lucca and beyond.
                        </p>
                        <p>
                            A private transfer covers the journeys that come up most: between Pisa Airport and your hotel, between Pisa Centrale and your accommodation, into the city centre near Piazza dei Miracoli, or onward to Florence and other Tuscan destinations.
                        </p>
                        <p>
                            Whatever the journey, the same basic details apply — your pickup point, destination, date and time, passenger count and luggage — and you&apos;ll receive a quotation based on those specifics before you book.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pisa Airport */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-6">Pisa Airport Taxi Transfers</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Pisa International Airport (PSA) transfers can be arranged for arrivals and departures, covering:
                    </p>
                    <ul className="space-y-2 text-gray-700 mb-6">
                        {[
                            'Pickup from Pisa Airport to your Pisa hotel',
                            'Pisa Airport to Florence',
                            'Pisa Airport to nearby Tuscan destinations',
                            'Return transfers back to Pisa Airport',
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <ChevronRight className="w-4 h-4 text-gold mt-1 shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        When requesting a quote, provide your flight number if applicable, arrival or departure date and time, pickup or drop-off address, number of passengers, and luggage. See our{' '}
                        <Link href="/airport/pisa" className="text-gold font-semibold hover:underline">Pisa Airport guide</Link>{' '}
                        for more on the airport itself, or the{' '}
                        <Link href="/route/pisa-airport-to-florence-taxi" className="text-gold font-semibold hover:underline">Pisa Airport to Florence</Link>{' '}
                        and{' '}
                        <Link href="/route/pisa-airport-to-lucca-taxi" className="text-gold font-semibold hover:underline">Pisa Airport to Lucca</Link>{' '}
                        route pages for those specific journeys.
                    </p>
                </div>
            </section>

            {/* Pisa Centrale */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-6">Pisa Centrale Station Transfers</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Pickup or drop-off at Pisa Centrale can be requested for journeys such as:
                    </p>
                    <ul className="space-y-2 text-gray-700 mb-4">
                        {[
                            'Pisa Centrale to your hotel',
                            'Your Pisa hotel to Pisa Centrale',
                            'Pisa to Florence',
                            'Pisa to Lucca',
                            'Pisa to another agreed destination',
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <ChevronRight className="w-4 h-4 text-gold mt-1 shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-gray-500 text-sm">The exact meeting point at the station is confirmed with your booking.</p>
                </div>
            </section>

            {/* Hotels & accommodation */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-6">Pisa Hotel &amp; Accommodation Transfers</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Door-to-door transfers can be requested between your accommodation and:
                    </p>
                    <ul className="space-y-2 text-gray-700 mb-4">
                        {[
                            'Pisa Airport',
                            'Pisa Centrale',
                            'Another Tuscan destination',
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <ChevronRight className="w-4 h-4 text-gold mt-1 shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-gray-600 leading-relaxed">
                        Provide your complete accommodation address when requesting a quote. Some streets in Pisa&apos;s historic centre have vehicle access restrictions, so your final pickup or drop-off point may depend on local access.
                    </p>
                </div>
            </section>

            {/* Pisa to Tuscany destinations */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-6">Private Transfers From Pisa to Nearby Destinations</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Beyond the city itself, Pisa is a workable starting point for a private transfer to:
                    </p>
                    <div className="flex flex-wrap gap-3 mb-4">
                        {[
                            { href: '/city/florence', label: 'Florence' },
                            { href: '/city/lucca', label: 'Lucca' },
                            { href: '/city/san-gimignano', label: 'San Gimignano' },
                        ].map((d, i) => (
                            <Link key={i} href={d.href} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-navy font-medium text-sm hover:border-gold hover:text-gold transition-colors">
                                {d.label}
                            </Link>
                        ))}
                        <span className="px-4 py-2 text-gray-500 text-sm">and other Tuscan destinations on request</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                        Include your destination and any preferred stops when requesting a quote, and we&apos;ll confirm what can be arranged for your itinerary.
                    </p>
                </div>
            </section>

            {/* Florence <-> Pisa connection */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-6">Pisa to Florence &amp; Florence to Pisa</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Private transfers between Pisa and Florence can be arranged in either direction — a Florence hotel to Pisa Airport ahead of a flight, Pisa Airport to a Florence hotel on arrival, a day trip from Pisa city into Florence, or a Florence-based visitor coming to see the Leaning Tower before continuing on.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        For the full route details, distance and a dedicated FAQ, see our{' '}
                        <Link href="/route/florence-to-pisa-taxi" className="text-gold font-semibold hover:underline">Florence to Pisa transfer guide</Link>.
                    </p>
                </div>
            </section>

            {/* Leaning Tower */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-6">Getting to the Leaning Tower of Pisa</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        A private transfer can take you to the area around Piazza dei Miracoli, home to the Leaning Tower and the cathedral complex. The square itself is largely pedestrianised, so your driver can take you to an appropriate vehicle-accessible drop-off point near the attraction rather than directly onto the piazza.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        A standard transfer is a direct journey rather than a sightseeing stop with waiting time built in. If you&apos;d like your driver to wait while you visit, arrange this in advance so it can be reflected in your quotation.
                    </p>
                </div>
            </section>

            {/* Who the service is for */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold text-navy mb-12 text-center">Pisa Transfers for Different Types of Travelers</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
                        {[
                            { h: 'Airport Travelers', p: 'Direct transportation between Pisa Airport and your accommodation.' },
                            { h: 'Families', p: 'A private vehicle without needing to manage luggage through public transport.' },
                            { h: 'Couples & Small Groups', p: 'Point-to-point travel around Pisa and Tuscany.' },
                            { h: 'Business Travelers', p: 'Airport, hotel and station transfers.' },
                            { h: 'Travelers Exploring Tuscany', p: 'Private transfers between Pisa and other destinations.' },
                        ].map((item, i) => (
                            <div key={i} className="border-l-2 border-gold/40 pl-5">
                                <h3 className="font-bold text-navy mb-1">{item.h}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.p}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="py-20 bg-navy relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-14 text-center">How to Book a Pisa Taxi</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            { n: '1', h: 'Send your journey details', p: 'Tell us your pickup, destination, date and time.' },
                            { n: '2', h: 'Add passenger & luggage info', p: 'This helps determine the appropriate vehicle.' },
                            { n: '3', h: 'Receive your quotation', p: 'We review the requested journey and provide the applicable transfer option and price.' },
                            { n: '4', h: 'Confirm your booking', p: 'Once you accept the quotation, follow the confirmation instructions.' },
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

            {/* Quote form */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Request a Pisa Taxi Quote</h2>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                            Tell us where you&apos;re being picked up, where you&apos;re going, when you&apos;re traveling and how many people are in your group. If you&apos;re arriving by air or train, include your flight or train details where relevant.
                        </p>
                    </div>
                    <div className="bg-[#0F1C2E] p-8 md:p-10 rounded-[2rem] shadow-2xl">
                        <BookingForm sourceName="Pisa Taxi Service Page" />
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

            <FAQSection faqs={faqs} title="Pisa Taxi Service — FAQ" />

            {/* Related services */}
            <section className="py-16 bg-[#F8F9FA] border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-2xl font-bold text-navy mb-8 text-center">Related Services</h2>
                    <div className="grid sm:grid-cols-2 gap-x-10 gap-y-1">
                        {[
                            { href: '/route/florence-to-pisa-taxi', label: 'Florence to Pisa Taxi' },
                            { href: '/services/airport-transfers', label: 'Airport Transfers' },
                            { href: '/services/hotel-transfers', label: 'Hotel Transfer Service' },
                            { href: '/services/city-to-city', label: 'City-to-City Transfers' },
                            { href: '/services/private-tours', label: 'Private Sightseeing Tours' },
                            { href: '/book-now', label: 'Book Your Transfer' },
                        ].map((link, i) => (
                            <Link
                                key={i}
                                href={link.href}
                                className="flex items-center justify-between gap-2 py-4 border-b border-gray-100 text-gray-700 hover:text-gold transition-colors font-medium"
                            >
                                {link.label}
                                <ChevronRight className="w-4 h-4 text-gold shrink-0" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related cities — secondary */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <h2 className="text-xl font-bold text-navy mb-5">Explore More Transfer Destinations</h2>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
                        {[
                            { href: '/city/florence', label: 'Florence' },
                            { href: '/city/lucca', label: 'Lucca' },
                            { href: '/city/san-gimignano', label: 'San Gimignano' },
                            { href: '/city/rome', label: 'Rome' },
                            { href: '/city/milan', label: 'Milan' },
                        ].map((c, i) => (
                            <Link key={i} href={c.href} className="text-gray-600 hover:text-gold transition-colors font-medium text-sm">
                                {c.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
