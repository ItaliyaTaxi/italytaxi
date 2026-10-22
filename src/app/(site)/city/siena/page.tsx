import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ServiceSchema from '@/components/ServiceSchema';
import BookingForm from '@/components/BookingForm';
import FAQSection from '@/components/FAQSection';
import { Plane, TrainFront, MapPinned, ShieldAlert, ChevronRight, Clock } from 'lucide-react';

/* Standalone route rather than an entry in `cities` (page-data.ts), so this page
 * touches no shared data file and inherits none of the /city/[slug] template's
 * blanket service claims. The sitemap picks it up through discoverStaticRoutes(),
 * the same way /city/pisa-taxi-service is listed without a `cities` entry.
 *
 * Deliberately NOT stated anywhere below, because none of it is verifiable:
 * ZTL gate hours (published schedules disagree between sources), the
 * Florence–Siena distance (our own pages give 60, 69 and 70 km), prices,
 * vehicle types, driver languages, ratings, or any guarantee. Meet-and-greet is
 * referenced only for airport arrivals, which is where the site establishes it —
 * there is no established platform meet-and-greet at railway stations. */
const CANONICAL = '/city/siena';
const HERO_IMAGE = '/images/Tuscany Wine.webp';
const SITE = 'https://www.italytaxiservice.com';

export const metadata: Metadata = {
    // No " | Italy Taxi Service" suffix here: the root layout's metadata
    // template already appends it. Including it would render the brand twice,
    // as some older standalone pages currently do.
    title: 'Siena Taxi Service & Private Transfers',
    description:
        'Private transfers in Siena — arrivals from Florence and Pisa airports, Siena station journeys, and travel across Tuscany, arranged around the details you provide.',
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: 'Siena Taxi Service & Private Transfers',
        description:
            'Pre-booked private transfers to and from Siena, with the realistic drop-off point for the walled historic centre explained before you travel.',
        url: `${SITE}${CANONICAL}`,
        images: [{ url: HERO_IMAGE, alt: 'Tuscan countryside' }],
    },
};

const faqs = [
    {
        q: 'Can a private transfer drop me at my hotel inside the walls?',
        a: "Siena's historic centre is a restricted-traffic zone enforced by camera gates, and access is limited to authorised categories of vehicle. In practice that means the drop-off is at the closest point the rules allow, with the last stretch on foot. Send the full street address when you ask for a quote and we will tell you what is realistic for that address rather than leaving you to find out on the day.",
    },
    {
        q: 'Which airport should I use for Siena?',
        a: 'Siena has no airport of its own. Most visitors arrive through Florence or Pisa, and either works as a single door-to-door transfer. Which one suits you usually depends on your flight rather than the drive. For airport arrivals we monitor the flight, and the meet-and-greet is inside the arrivals hall with a name sign.',
    },
    {
        q: 'Can you arrange a transfer from Siena railway station?',
        a: 'Yes — a station address works like any other pickup point, and journeys between stations and airports are a standard part of what we do. Give us the train and the arrival time along with the station name so the timing is right. We would not promise to meet you on the platform itself; the meeting point is agreed as part of the booking.',
    },
    {
        q: 'Do you cover journeys from Siena into the rest of Tuscany?',
        a: 'Yes. Siena is a common base for San Gimignano, the Chianti area and the surrounding hill towns, either as one-way transfers or as hourly hire with a driver for part of the day. Tell us the stops you have in mind and we will quote the itinerary. Our drivers are not tour guides — this is transport rather than a guided tour.',
    },
    {
        q: 'What should I send you to get a quote?',
        a: 'The date and time, the pickup and drop-off addresses with street and number, how many passengers and bags, and the flight or train number if you are arriving. Those details are what the quote is based on, and the price is confirmed at booking rather than run on a meter.',
    },
    {
        q: 'Can you provide child seats?',
        a: 'Yes. Child seats are available on request at no extra charge and are installed in advance, so tell us the ages when you book rather than on the day.',
    },
    {
        q: 'Is it busier around the Palio?',
        a: 'Yes. The Palio is run in the Piazza del Campo on 2 July and 16 August, and both dates bring large crowds into the centre. If you are travelling near them, ask early and expect the drop-off point to sit further out than usual.',
    },
];

const journeys = [
    { label: 'Florence to Siena', href: '/route/florence-to-siena-taxi' },
    { label: 'Rome to Siena', href: '/route/rome-to-siena-taxi' },
    { label: 'Piazza del Campo transfer', href: '/attraction-transfer/piazza-del-campo-taxi-transfer' },
    { label: 'San Gimignano', href: '/city/san-gimignano' },
    { label: 'Florence Airport', href: '/airport/florence' },
    { label: 'Pisa Airport', href: '/airport/pisa' },
];

export default function SienaCityPage() {
    return (
        <main className="min-h-screen font-inter text-navy">
            <ServiceSchema
                name="Private Taxi & Transfer Service in Siena"
                description="Pre-booked private transfers to and from Siena, including Florence and Pisa airport arrivals, station journeys and travel across Tuscany."
                url={`${SITE}${CANONICAL}`}
                image={HERO_IMAGE}
            />
            <Navbar />

            <PageHero
                titleTop="Siena Taxi Service"
                titleBottom="Private Transfers & Airport Arrivals"
                description="Door-to-door transfers to Siena from Florence, Pisa and across Tuscany — with the realistic drop-off point for the walled centre explained before you travel."
                backgroundImage={HERO_IMAGE}
                buttonText="Request a Siena Transfer Quote"
                buttonLink="/book-now"
                breadcrumbs={[
                    { name: 'Home', item: '/' },
                    { name: 'Cities', item: '/city' },
                    { name: 'Siena', item: CANONICAL },
                ]}
            />

            {/* ── The one thing that actually shapes a Siena arrival ───────── */}
            <section className="py-20 bg-white" aria-labelledby="arriving-in-siena">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 id="arriving-in-siena" className="text-3xl md:text-4xl font-bold text-navy mb-6">
                        Arriving in Siena: the drop-off is the whole question
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-5">
                        Siena&apos;s historic centre sits inside ramparts built between the 14th and 16th
                        centuries, and that centre is a restricted-traffic zone enforced by camera gates.
                        Access is limited to authorised categories of vehicle, which is why visitors
                        normally park outside the walls rather than at their accommodation.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-5">
                        For a pre-booked transfer that changes one thing only: not whether we can bring you
                        to Siena, but where the car can stop. Your exact street address is what decides
                        that, so send it when you ask for a quote and we will tell you what the rules allow
                        for that address — rather than you discovering it on the kerb with luggage. On the
                        approach to a central address, expect a short walk at the end.
                    </p>
                    <div className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-slate-50 p-6">
                        <ShieldAlert className="w-5 h-5 text-gold shrink-0 mt-1" aria-hidden="true" />
                        <p className="text-base text-gray-700 leading-relaxed">
                            Access rules for the centre are set by the Comune di Siena and are revised from
                            time to time. We deliberately do not publish the gate timings here, because the
                            schedules quoted by different sources disagree — check the Comune&apos;s current
                            rules if you intend to drive yourself.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── How people actually reach Siena ──────────────────────────── */}
            <section className="py-20 bg-slate-50" aria-labelledby="how-to-reach">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 id="how-to-reach" className="text-3xl md:text-4xl font-bold text-navy mb-10">
                        How people reach Siena
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <article className="bg-white rounded-2xl p-7 border border-gray-100">
                            <Plane className="w-6 h-6 text-gold mb-4" aria-hidden="true" />
                            <h3 className="text-lg font-bold text-navy mb-3">By air</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Siena has no airport of its own. Arrivals come through{' '}
                                <Link href="/airport/florence" className="text-gold font-semibold hover:underline">
                                    Florence
                                </Link>{' '}
                                or{' '}
                                <Link href="/airport/pisa" className="text-gold font-semibold hover:underline">
                                    Pisa
                                </Link>
                                , either of which works as a single door-to-door transfer with the flight
                                monitored and a meet-and-greet in the arrivals hall.
                            </p>
                        </article>
                        <article className="bg-white rounded-2xl p-7 border border-gray-100">
                            <TrainFront className="w-6 h-6 text-gold mb-4" aria-hidden="true" />
                            <h3 className="text-lg font-bold text-navy mb-3">By train</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Siena&apos;s station sits below the historic centre, so arriving by rail still
                                leaves a transfer up into town — easy enough to arrange in advance, and more
                                awkward on foot with luggage.
                            </p>
                        </article>
                        <article className="bg-white rounded-2xl p-7 border border-gray-100">
                            <MapPinned className="w-6 h-6 text-gold mb-4" aria-hidden="true" />
                            <h3 className="text-lg font-bold text-navy mb-3">From another city</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Siena is a common stop between Florence, Rome and the hill towns. See{' '}
                                <Link href="/route/florence-to-siena-taxi" className="text-gold font-semibold hover:underline">
                                    Florence to Siena
                                </Link>{' '}
                                and{' '}
                                <Link href="/route/rome-to-siena-taxi" className="text-gold font-semibold hover:underline">
                                    Rome to Siena
                                </Link>
                                .
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* ── Journeys ─────────────────────────────────────────────────── */}
            <section className="py-20 bg-white" aria-labelledby="journeys">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 id="journeys" className="text-3xl md:text-4xl font-bold text-navy mb-4">
                        Siena journeys we already cover
                    </h2>
                    <p className="text-lg text-gray-600 mb-10">
                        Each of these has its own page with the detail for that journey.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {journeys.map((j) => (
                            <Link
                                key={j.href}
                                href={j.href}
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gray-200 bg-white font-semibold text-sm text-navy hover:border-gold hover:text-gold hover:shadow-md transition-all"
                            >
                                <ChevronRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                                {j.label}
                            </Link>
                        ))}
                    </div>
                    <p className="text-base text-gray-600 mt-8">
                        For part of a day with a driver rather than a single trip, see{' '}
                        <Link href="/services/hourly-taxi" className="text-gold font-semibold hover:underline">
                            hourly hire
                        </Link>{' '}
                        or{' '}
                        <Link href="/services/private-tours" className="text-gold font-semibold hover:underline">
                            private tours
                        </Link>
                        . Airport runs are covered on our{' '}
                        <Link href="/services/airport-transfers" className="text-gold font-semibold hover:underline">
                            airport transfers
                        </Link>{' '}
                        page.
                    </p>
                </div>
            </section>

            {/* ── What to send us ─────────────────────────────────────────── */}
            <section className="py-20 bg-slate-50" aria-labelledby="what-we-need">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 id="what-we-need" className="text-3xl md:text-4xl font-bold text-navy mb-8">
                        What to send us for a Siena quote
                    </h2>
                    <ul className="space-y-4 text-lg text-gray-700">
                        <li className="flex gap-3">
                            <ChevronRight className="w-5 h-5 text-gold shrink-0 mt-1" aria-hidden="true" />
                            <span>
                                <strong>The full address</strong>, with street and number — it decides where the
                                car can stop for a centre address.
                            </span>
                        </li>
                        <li className="flex gap-3">
                            <ChevronRight className="w-5 h-5 text-gold shrink-0 mt-1" aria-hidden="true" />
                            <span><strong>Date and time</strong>, and whether you need the return as well.</span>
                        </li>
                        <li className="flex gap-3">
                            <ChevronRight className="w-5 h-5 text-gold shrink-0 mt-1" aria-hidden="true" />
                            <span>
                                <strong>Flight or train number</strong> if you are arriving, so the timing follows
                                the actual arrival.
                            </span>
                        </li>
                        <li className="flex gap-3">
                            <ChevronRight className="w-5 h-5 text-gold shrink-0 mt-1" aria-hidden="true" />
                            <span>
                                <strong>Passengers and luggage</strong>, including child seats if you need them —
                                those are fitted in advance.
                            </span>
                        </li>
                        <li className="flex gap-3">
                            <Clock className="w-5 h-5 text-gold shrink-0 mt-1" aria-hidden="true" />
                            <span>
                                <strong>Travelling near 2 July or 16 August?</strong> Say so — Palio week changes
                                both demand and access around the centre.
                            </span>
                        </li>
                    </ul>
                    <p className="text-base text-gray-600 mt-8">
                        Organising transport for a group or a wedding party?{' '}
                        <Link href="/contact" className="text-gold font-semibold hover:underline">
                            Get in touch
                        </Link>{' '}
                        and we will work through it with you.
                    </p>
                </div>
            </section>

            {/* ── Quote form ──────────────────────────────────────────────── */}
            <section className="py-20 bg-white" aria-labelledby="request-quote">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 id="request-quote" className="text-3xl md:text-4xl font-bold text-navy mb-8 text-center">
                        Request a Siena transfer quote
                    </h2>
                    <BookingForm sourceName="Siena City Page" />
                </div>
            </section>

            {/* ── Verified destination context ────────────────────────────── */}
            <section className="py-20 bg-slate-50" aria-labelledby="about-siena">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 id="about-siena" className="text-3xl md:text-4xl font-bold text-navy mb-6">
                        A little context on Siena
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-5">
                        Siena&apos;s historic centre has been a UNESCO World Heritage Site since 1995, listed
                        for a medieval core that survives largely intact inside its ramparts. UNESCO
                        describes the city as built around the <strong>Piazza del Campo</strong> — the square
                        that still organises everything around it.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-5">
                        The <strong>Palazzo Pubblico</strong> faces that square, a Gothic building now housing
                        the Museo Civico, with the <strong>Torre del Mangia</strong> rising from it — one of the
                        oldest towers in Italy. The <strong>Duomo</strong>, dedicated to the Assumption, is a
                        short walk away, recognisable by its black-and-white façade and its inlaid floor.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Twice a year, on <strong>2 July and 16 August</strong>, the Piazza del Campo hosts the{' '}
                        <strong>Palio</strong>, the horse race run between the city&apos;s contrade. Those two
                        dates are worth knowing when you plan a transfer, because they change how busy the
                        centre is and how close a vehicle can get to it.
                    </p>
                </div>
            </section>

            <FAQSection faqs={faqs} title="Siena Transfers — FAQ" badge="Siena Questions" />
            <Footer />
        </main>
    );
}
