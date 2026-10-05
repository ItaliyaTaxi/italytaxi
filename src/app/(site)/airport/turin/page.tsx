import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ServiceSchema from '@/components/ServiceSchema';
import BookingForm from '@/components/BookingForm';
import FAQSection from '@/components/FAQSection';
import { MapPin, ChevronRight, MessageCircle, CheckCircle, TrainFront, Mountain, Grape } from 'lucide-react';

const HERO_IMAGE = '/images/airport-transfer.webp';
const CANONICAL = '/airport/turin';
const WHATSAPP = "https://wa.me/923148932631?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20a%20private%20transfer%20from%20Turin%20Caselle%20Airport.";

export const metadata: Metadata = {
    title: 'Turin Airport Transfers | Private Transfers from TRN',
    description: 'Book a private transfer from Turin Caselle Airport (TRN) to Turin, hotels and destinations across Piedmont. Request a route-specific quotation before your journey.',
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: 'Turin Airport Transfers | Private Transfers from TRN',
        description: 'Private transfers from Turin Caselle Airport to Turin city, hotels and Piedmont destinations.',
        images: [{ url: HERO_IMAGE, alt: 'Private transfer vehicle at an airport pickup point' }],
    },
};

const faqs = [
    {
        q: 'Where is Turin Caselle Airport?',
        a: 'Turin Caselle Airport is about 16 km north of Turin city centre, in Piedmont.',
    },
    {
        q: 'What is the airport code for Turin Airport?',
        a: 'TRN.',
    },
    {
        q: 'Can I book a private transfer from Turin Airport to Turin city centre?',
        a: 'Yes — provide your flight details, arrival time and destination address when requesting a quote.',
    },
    {
        q: 'Can I arrange a transfer from Turin Airport to my hotel?',
        a: 'Yes, direct transfers to hotels and other accommodation can be requested. Provide the full address when you request your quote.',
    },
    {
        q: 'Can I book a return transfer from Turin to Turin Airport?',
        a: 'Yes — provide your pickup address, departure flight number and desired pickup time, and we\'ll confirm what can be arranged.',
    },
    {
        q: 'Can I request a transfer to destinations outside Turin?',
        a: 'Yes, transfers to Piedmont towns, ski and mountain destinations, and other Italian cities can be requested, depending on the route. Let us know your destination and we\'ll confirm availability.',
    },
    {
        q: 'How do I provide my flight information?',
        a: 'Include your flight number, arrival date and arrival time when requesting your quote or completing the booking form.',
    },
    {
        q: 'How much luggage can I bring?',
        a: 'Let us know your approximate number and type of bags when requesting a quote, so an appropriate vehicle can be considered.',
    },
    {
        q: 'How is the transfer price calculated?',
        a: 'Pricing depends on your destination, passenger count, luggage and vehicle requirements. You\'ll receive a quotation based on these details before you book.',
    },
    {
        q: 'How far in advance should I request a Turin Airport transfer?',
        a: 'Requesting as early as you can helps with planning, particularly for less common routes or during busier travel periods, though last-minute requests can still be sent.',
    },
];

export default function TurinAirportPage() {
    return (
        <main className="font-inter bg-white text-navy-rich">
            <ServiceSchema
                name="Private Transfers from Turin Caselle Airport"
                description="Private transfers from Turin Caselle Airport (TRN) to Turin city, hotels, train stations and destinations across Piedmont."
                url={`https://www.italytaxiservice.com${CANONICAL}`}
                image={HERO_IMAGE}
            />
            <Navbar />

            <PageHero
                titleTop="Private Transfers from"
                titleBottom="Turin Airport (TRN)"
                description="Pre-book a private airport transfer from Turin Caselle Airport to Turin city, hotels, train stations and destinations across Piedmont and northern Italy. Request your route and receive a confirmed quotation before your journey."
                backgroundImage={HERO_IMAGE}
                buttonText="Get a Transfer Quote"
                breadcrumbs={[
                    { name: 'Airport Transfers', item: '/services/airport-transfers' },
                    { name: 'Turin Caselle Airport', item: CANONICAL },
                ]}
            />

            {/* Airport context */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-6">Arriving at Turin Caselle Airport</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Turin Airport — also known as Turin Caselle Airport, Torino Airport, or Aeroporto di Torino (IATA code TRN) — sits around 16 km north of Turin city centre, serving Piedmont.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Travelers arriving here typically need onward transport to Turin&apos;s city centre, its railway stations, a hotel or business address, a Piedmont town, or further afield toward the Alpine ski resorts. A private transfer covers whichever of these applies to your trip.
                    </p>
                </div>
            </section>

            {/* Where can you go */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold text-navy mb-12 text-center">Where Can You Go from Turin Airport?</h2>
                    <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <MapPin className="w-5 h-5 text-gold" />
                                <h3 className="font-bold text-navy text-lg">Turin City Centre</h3>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">Transfers to hotels, apartments, business addresses and central Turin locations.</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <TrainFront className="w-5 h-5 text-gold" />
                                <h3 className="font-bold text-navy text-lg">Turin Railway Stations</h3>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">Including Torino Porta Nuova and Torino Porta Susa — mention your specific station when requesting a quote.</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <Grape className="w-5 h-5 text-gold" />
                                <h3 className="font-bold text-navy text-lg">Piedmont Destinations</h3>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">Transfers beyond central Turin — such as toward Alba, Asti or the Langhe wine country — can be requested depending on the route and availability.</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <Mountain className="w-5 h-5 text-gold" />
                                <h3 className="font-bold text-navy text-lg">Ski &amp; Mountain Destinations</h3>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Turin is also an arrival point for the Alps. See our{' '}
                                <Link href="/blog/turin-airport-transfers-ski" className="text-gold font-semibold hover:underline">Turin Airport to the ski resorts guide</Link>{' '}
                                for realistic distances and timing to resorts such as Sestriere and Courmayeur.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Airport to city centre */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-6">Turin Airport to Turin City Centre</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        A private transfer collects you from the airport and takes you directly to your hotel, apartment or business address in Turin, without changing vehicles. The approximate 16 km drive is usually quick, though actual timing depends on traffic and your exact destination — treat any duration as a guide rather than a guarantee.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        When requesting your transfer, provide your flight number, arrival date and time, passenger count, luggage, and the destination address.
                    </p>
                </div>
            </section>

            {/* Pickup process */}
            <section className="py-20 bg-navy relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-14 text-center">How Does a Turin Airport Pickup Work?</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
                        {[
                            { n: '1', h: 'Send your journey details', p: 'Arrival date, arrival time, flight number, passengers, luggage and destination.' },
                            { n: '2', h: 'Receive the quotation', p: 'The route is reviewed and a quotation is provided.' },
                            { n: '3', h: 'Confirm the transfer', p: 'Once confirmed, you receive the relevant booking details.' },
                            { n: '4', h: 'Continue to the pickup point', p: 'Meeting instructions follow your booking confirmation and the airport arrangements on the day.' },
                            { n: '5', h: 'Travel to your destination', p: 'A direct journey to the address you provided.' },
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

            {/* What info do we need */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-8">What Information Do We Need?</h2>
                    <ul className="space-y-3">
                        {[
                            'Arrival airport: Turin Caselle Airport (TRN)',
                            'Flight number',
                            'Arrival date',
                            'Arrival time',
                            'Destination address',
                            'Number of passengers',
                            'Number of luggage pieces',
                            'Return transfer details, if required',
                            'Special requirements, if applicable',
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                <span className="text-gray-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Vehicle + luggage */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-6">Vehicle Options</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Vehicle selection depends on passenger count, luggage, route and availability:
                    </p>
                    <ul className="space-y-2 text-gray-700 mb-8">
                        <li><strong>Sedan</strong> — suitable for smaller groups and normal luggage requirements.</li>
                        <li><strong>Minivan</strong> — useful for families and larger groups.</li>
                        <li><strong>Larger van</strong> — for larger parties or higher luggage requirements, subject to availability.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-navy mb-4">Traveling with Luggage?</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Whether you&apos;re bringing standard suitcases, hand luggage, large cases, several bags, or special equipment, let us know the approximate quantity when requesting your quote so an appropriate vehicle can be considered.
                    </p>
                </div>
            </section>

            {/* Return */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-6">Turin City to Turin Airport</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Return transfers can be pre-arranged alongside your arrival, or booked separately. Provide your accommodation pickup address, departure date, desired pickup time, flight number, passenger count and luggage.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Allow sufficient time for traffic, airport procedures and check-in requirements — we don&apos;t promise an exact pickup buffer, since this depends on your specific circumstances and the day&apos;s conditions.
                    </p>
                </div>
            </section>

            {/* More transfers */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-6">More Transfers from Turin Airport</h2>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-gold mt-1 shrink-0" />
                            <Link href="/blog/turin-airport-transfers-ski" className="hover:text-gold hover:underline">Turin Airport to the ski resorts (Sestriere &amp; Courmayeur)</Link>
                        </li>
                        <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-gold mt-1 shrink-0" />
                            <Link href="/route/milan-to-turin-taxi" className="hover:text-gold hover:underline">Turin ↔ Milan private transfer</Link>
                        </li>
                        <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-gold mt-1 shrink-0" />
                            <Link href="/attraction-transfer/lake-maggiore-taxi-transfer" className="hover:text-gold hover:underline">Lake Maggiore transfers</Link>
                        </li>
                        <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-gold mt-1 shrink-0" />
                            <Link href="/blog/artissima-2026-transfers" className="hover:text-gold hover:underline">Artissima 2026 transfer guide (Oval Lingotto Fiere)</Link>
                        </li>
                        <li className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-gold mt-1 shrink-0" />
                            <span>Other Piedmont or Italian city routes — let us know your destination and we&apos;ll confirm what can be arranged</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Before you book */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-6">Before Booking Your Turin Airport Transfer</h2>
                    <ul className="space-y-2 text-gray-700">
                        {[
                            'Check the destination address carefully.',
                            'Provide the correct flight number.',
                            'Include all luggage.',
                            'Mention children or special requirements where relevant.',
                            'For return transfers, provide the flight departure time.',
                            'If you have a multi-stop itinerary, explain it when requesting the quotation.',
                            'Keep your booking confirmation accessible while travelling.',
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <ChevronRight className="w-4 h-4 text-gold mt-1 shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Why pre-book */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-6">Why Travelers Pre-Book a Transfer from Turin Airport</h2>
                    <ul className="space-y-3">
                        {[
                            'A direct journey to a specific address, rather than a shared or fixed-route service',
                            'Useful for travelers with several bags',
                            'Useful for families or groups travelling together',
                            'Convenient when continuing outside central Turin',
                            'Useful when your hotel or accommodation isn\'t directly beside public transport',
                            'Useful for onward journeys to Piedmont destinations',
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                <span className="text-gray-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Quote form */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Request Your Turin Airport Transfer Quote</h2>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                            Tell us your arrival details and destination. We will review the journey and provide the relevant quotation.
                        </p>
                    </div>
                    <div className="bg-[#0F1C2E] p-8 md:p-10 rounded-[2rem] shadow-2xl">
                        <BookingForm sourceName="Turin Airport Page" />
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

            <FAQSection faqs={faqs} title="Turin Airport Transfer FAQ" />

            <Footer />
        </main>
    );
}
