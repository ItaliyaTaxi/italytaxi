import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import BookingForm from '@/components/BookingForm';
import FAQSection from '@/components/FAQSection';
import ServiceSchema from '@/components/ServiceSchema';
import { Clock, Route as RouteIcon, Plane, Car, Ship, Users, CheckCircle, ChevronRight, Info, MessageCircle, Luggage } from 'lucide-react';

/* Page-specific implementation for /tronchetto-to-treviso-airport.
 *
 * This static segment takes precedence over the shared (site)/[slug] veneto
 * template, which renders ~150 transfer pages from one layout. Overriding here
 * gives this route its own structure and copy without altering the shared
 * template, the shared route data, or any sibling page. The URL is unchanged.
 *
 * WHY AN OVERRIDE RATHER THAN TEMPLATE EDITS: the audit found four defects that
 * originate in shared code/data, not in this page --
 *   1. VenetoTransferContent.tsx:49  "-- no ${publicAlt}" renders as
 *      "no the ATVO airport bus to Venice or Treviso" on 40 built pages.
 *   2. VenetoTransferContent.tsx:175 a related construction on 18 pages.
 *   3. veneto-transfer-data.ts:125    the `dining` field holds a general
 *      description, which the template prints straight after `description`,
 *      restating the same facts.
 *   4. `suitedFor` renders with a stray space before its full stop.
 * Fixing those in place would change up to 40 other pages, which this task
 * forbids. They are avoided here by not using the template, and are reported
 * as outstanding shared-code work.
 *
 * FACTS -- nothing invented:
 *  - ~40 km and ~45-55 min: veneto-transfer-data.ts:130 (tsf leg). The 45-55
 *    minute figure was explicitly confirmed by the site owner and is used as
 *    given, although external aggregators cluster lower at 30-40 min.
 *  - Tronchetto geography, People Mover, water-taxi terminal, cruise-terminal
 *    proximity: veneto-transfer-data.ts:123-129.
 *  - Treviso Airport single compact terminal and the ATVO bus as the public
 *    alternative: the TSF entry in veneto-transfer-data.ts.
 *  - NCC licensing, English-speaking drivers, real-time flight monitoring,
 *    free child seats, fixed all-inclusive fares, the >24h free-cancellation
 *    window, and the required booking details: /terms-and-conditions.
 *  - "Meet & greet with a name sign" is deliberately ABSENT: this is a
 *    departure journey, so there is no arrivals hall to be met in.
 */

const SITE = 'https://www.italytaxiservice.com';
const PATH = '/tronchetto-to-treviso-airport';
const HERO = '/images/venice.webp';
const WHATSAPP =
    'https://wa.me/923148932631?text=' +
    encodeURIComponent('Hi, I would like a quote for a private transfer from Tronchetto to Treviso Airport.');

export const metadata: Metadata = {
    title: { absolute: 'Tronchetto to Treviso Airport Transfer | Book a Car' },
    description:
        'Private car from Tronchetto, Venice to Treviso Airport (TSF) — about 40 km and 45–55 minutes, with the pickup point agreed in advance. Request a quote.',
    alternates: { canonical: PATH },
    robots: { index: true, follow: true },
    openGraph: {
        title: 'Tronchetto to Treviso Airport Private Transfer',
        description:
            'Leaving Venice from Tronchetto for a flight at Treviso Airport (TSF)? A pre-booked car collects you on the island and drives you straight to the terminal.',
        url: `${SITE}${PATH}`,
        type: 'website',
        images: [{ url: HERO, width: 1200, height: 630, alt: 'Venice, departure point for Tronchetto to Treviso Airport transfers' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tronchetto to Treviso Airport Private Transfer',
        description: 'Private car from Tronchetto, Venice to Treviso Airport (TSF) — about 40 km, 45–55 minutes.',
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Treviso Airport', item: `${SITE}/airport/treviso` },
        { '@type': 'ListItem', position: 3, name: 'Tronchetto to Treviso Airport', item: `${SITE}${PATH}` },
    ],
};

/* FAQ strings are rendered by FAQSection as plain text, so they use real
   characters rather than HTML entities. */
const faqs = [
    {
        q: 'How long does the transfer from Tronchetto to Treviso Airport take?',
        a: 'Around 45 to 55 minutes for roughly 40 km, on our published figures for this route. That is a planning estimate rather than a guaranteed time: the first part of the journey leaves a car-park island at the edge of a city with no through traffic, and the mainland stretch past Mestre is where any delay usually occurs.',
    },
    {
        q: 'Where exactly on Tronchetto does the driver collect me?',
        a: 'That is agreed with you before the day rather than assumed. Tronchetto is a large multi-level car-park island with several vehicle areas, a water-taxi terminal and the People Mover station, so "Tronchetto" on its own is not a precise instruction. Tell us whether you are arriving off a boat, coming down from the car park or stepping off the People Mover, and the meeting point is confirmed in advance.',
    },
    {
        q: 'Can I get from Tronchetto to Treviso Airport by train?',
        a: 'Not directly, because Tronchetto has no railway station. You would first take the People Mover to Piazzale Roma and walk to Venezia Santa Lucia, or continue to Mestre, and only then join a train — and Treviso Airport has no station of its own either, so a bus or taxi is still needed at the far end. It is a workable route with light luggage and a poor one with suitcases.',
    },
    {
        q: 'What is the People Mover, and does it matter for this journey?',
        a: 'It is the short automated shuttle linking Tronchetto to Piazzale Roma, Venice’s vehicle terminus. It matters because it is how most public-transport options from Tronchetto actually begin: you ride it first, then start your real journey. A private car removes that step, since it can reach Tronchetto directly.',
    },
    {
        q: 'I am leaving a cruise ship or a water taxi. Does that work from Tronchetto?',
        a: 'Yes, and it is one of the more common reasons for this transfer. Tronchetto sits close to the Stazione Marittima cruise terminals and has its own water-taxi terminal, so a boat arrival can be handed over to a waiting car without crossing the city. Give us the boat’s arrival point and expected time so the pickup is set against it.',
    },
    {
        q: 'How early should I leave Tronchetto for my flight?',
        a: 'Work backwards from the flight, not from the drive. Allow the 45 to 55 minute journey, then add your airline’s check-in and bag-drop deadline and a margin for traffic on the mainland stretch. Low-cost departures from Treviso can close firmly on time, so check what your carrier asks for rather than relying on a general rule.',
    },
    {
        q: 'Can you take a family or a group with several suitcases?',
        a: 'Yes. Vehicle choice on this route is usually a luggage question rather than a seat question, so tell us the number of bags as well as passengers. A sedan suits one to three people with normal luggage; a minivan takes up to seven with bags. Child seats are available free of charge on request if you ask when booking.',
    },
    {
        q: 'Is the price fixed, and what happens if my flight changes?',
        a: 'Quotes are fixed, all-inclusive fares agreed before you travel, with nothing added at the end of the journey without prior agreement. If your departure time moves, tell us: amendments are free more than 24 hours before the pickup, subject to availability, and cancelling more than 24 hours ahead is refunded in full under our published policy.',
    },
];

export default function TronchettoToTrevisoAirportPage() {
    return (
        <main className="bg-white">
            <ServiceSchema
                name="Private Transfer from Tronchetto to Treviso Airport"
                description="Pre-booked private car from Tronchetto, Venice to Treviso Airport (TSF), with the pickup point on the island agreed in advance."
                url={`${SITE}${PATH}`}
                image={`${SITE}${HERO}`}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <Navbar />

            <PageHero
                titleTop="Private Transfer from Tronchetto to"
                titleBottom="Treviso Airport"
                description="A pre-booked car collects you on Venice’s car-park island and drives you straight to the Treviso Airport terminal — about 40 km and 45–55 minutes, with the meeting point agreed before the day."
                backgroundImage={HERO}
                buttonText="REQUEST A QUOTE"
                buttonLink="/book-now"
                breadcrumbs={[
                    { name: 'Home', item: '/' },
                    { name: 'Treviso Airport', item: '/airport/treviso' },
                    { name: 'From Tronchetto', item: PATH },
                ]}
            />

            {/* ── JOURNEY OVERVIEW ────────────────────────────── */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6 leading-tight">
                        The journey in short
                    </h2>
                    <div className="space-y-5 text-gray-700 leading-relaxed">
                        <p>
                            <strong>Tronchetto</strong> is Venice&rsquo;s artificial car-park island, built at the western
                            edge of the city where the causeway from the mainland ends. It is one of only two places a car
                            can reach in Venice, and it is where a road journey out of the city has to begin.{' '}
                            <strong>Treviso Airport (TSF)</strong> lies inland to the north, beside Treviso, and works from
                            a single compact terminal.
                        </p>
                        <p>
                            On our published figures the drive is <strong>about 40 km and 45 to 55 minutes</strong>. Both are
                            planning estimates rather than guarantees. The useful thing to understand about this particular
                            journey is that it is <strong>entirely by road once you are on the island</strong> — no boat leg,
                            no change of vehicle — but reaching the island is itself a step, and that is what makes the
                            pickup arrangement worth settling in advance.
                        </p>
                    </div>

                    <div className="mt-10 grid sm:grid-cols-3 gap-4">
                        {[
                            { icon: <RouteIcon className="w-6 h-6 text-gold" />, k: 'Distance', v: '~40 km', n: 'Published route estimate' },
                            { icon: <Clock className="w-6 h-6 text-gold" />, k: 'Journey time', v: '45–55 min', n: 'Normal conditions, not guaranteed' },
                            { icon: <Plane className="w-6 h-6 text-gold" />, k: 'Destination', v: 'TSF', n: 'One compact terminal' },
                        ].map((c) => (
                            <div key={c.k} className="rounded-2xl border border-gray-200 bg-[#F8F9FA] p-6">
                                <div className="mb-3">{c.icon}</div>
                                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">{c.k}</p>
                                <p className="text-2xl font-extrabold text-navy leading-none mb-2">{c.v}</p>
                                <p className="text-xs text-gray-500 leading-snug">{c.n}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHY IT NEEDS PLANNING ───────────────────────── */}
            <section className="py-16 md:py-20 bg-[#F8F9FA] border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6 leading-tight">
                        Why a departure from Tronchetto needs planning
                    </h2>
                    <div className="space-y-5 text-gray-700 leading-relaxed">
                        <p>
                            Venice is car-free. That single fact shapes every road journey out of the city, and it is why
                            Tronchetto exists at all: vehicles stop at the island, and the historic centre carries on by
                            water or on foot. For a departure, this means the car cannot come to your hotel if your hotel is
                            inside the islands. <strong>You come to the car.</strong>
                        </p>
                        <p>
                            Tronchetto is connected to Piazzale Roma — the other vehicle terminus, a few hundred metres
                            across the water — by the automated <strong>People Mover</strong> shuttle. It also has its own
                            water-taxi and vaporetto terminal, and it sits close to the Stazione Marittima cruise terminals.
                            So there are several genuinely different ways to arrive at the pickup, and they arrive at
                            different parts of a large island.
                        </p>
                        <p>
                            This is the part that catches people out. A hotel address in Venice is a precise instruction; the
                            word &ldquo;Tronchetto&rdquo; is not. Deciding in advance how you will reach the island, and from
                            which point, is most of what makes this transfer run smoothly. If your pickup is on the Piazzale
                            Roma side instead, that is a different journey and has its own{' '}
                            <Link href="/piazzale-roma-to-treviso-airport" className="text-gold font-semibold hover:underline">
                                Piazzale Roma to Treviso Airport transfer
                            </Link>{' '}
                            page.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── THE PICKUP ──────────────────────────────────── */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6 leading-tight">
                        Agreeing your pickup point on the island
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-8">
                        Rather than guess, we confirm the meeting point with you before the day. Which one makes sense
                        depends entirely on how you are arriving at Tronchetto.
                    </p>

                    <div className="grid md:grid-cols-3 gap-5">
                        {[
                            {
                                icon: <Ship className="w-5 h-5 text-gold shrink-0" />,
                                h: 'Arriving by water',
                                p: 'Off a private water taxi, the vaporetto or a cruise ship near the Stazione Marittima. Tell us the landing point and the expected time, because a boat schedule and a road pickup need to be matched rather than hoped for.',
                            },
                            {
                                icon: <Car className="w-5 h-5 text-gold shrink-0" />,
                                h: 'Coming from the car park',
                                p: 'If you have been parked on the island, say which level or zone you will come down to. It is a multi-storey structure and a vague instruction costs both sides time on the morning of a flight.',
                            },
                            {
                                icon: <RouteIcon className="w-5 h-5 text-gold shrink-0" />,
                                h: 'Off the People Mover',
                                p: 'Coming across from Piazzale Roma, you arrive at the People Mover station. That is a clear, fixed landmark and usually the simplest point to agree on if you are travelling from inside the city.',
                            },
                        ].map((c) => (
                            <div key={c.h} className="rounded-2xl border border-gray-200 p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    {c.icon}
                                    <h3 className="font-bold text-navy">{c.h}</h3>
                                </div>
                                <p className="text-sm text-gray-700 leading-relaxed">{c.p}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-sm text-gray-500 leading-relaxed mt-8">
                        Our terms ask that passengers are ready and available at the agreed pickup point at the booked time.
                        On an island where the driver cannot circle indefinitely, that matters more than it does at a
                        kerbside hotel.
                    </p>
                </div>
            </section>

            {/* ── THE ROAD JOURNEY ────────────────────────────── */}
            <section className="py-16 md:py-20 bg-[#F8F9FA] border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6 leading-tight">
                        What the drive to Treviso Airport is like
                    </h2>
                    <div className="space-y-5 text-gray-700 leading-relaxed">
                        <p>
                            The journey has three distinct parts, and knowing which is which explains where the 45 to 55
                            minutes goes.
                        </p>
                        <p>
                            <strong>Leaving the island and crossing to the mainland.</strong> Short in distance, but it is
                            the one stretch with no alternative: all road traffic out of Venice uses the causeway, so this is
                            where congestion is least avoidable at busy times of day.
                        </p>
                        <p>
                            <strong>Through the mainland around Mestre.</strong> This is the built-up section and, in
                            practice, where delay happens. Commuter peaks here are the usual reason a transfer runs closer to
                            the upper end of the estimate than the lower. If you are starting from the mainland rather than
                            the islands, the{' '}
                            <Link href="/mestre-to-treviso-airport" className="text-gold font-semibold hover:underline">
                                Mestre to Treviso Airport transfer
                            </Link>{' '}
                            skips this entirely.
                        </p>
                        <p>
                            <strong>North to Treviso and the airport.</strong> The final run inland is the most
                            straightforward part of the trip. Treviso Airport sits just outside the city and works from one
                            compact terminal, so the arrival itself is simple: there is no terminal to choose between and the
                            walk from the drop-off to check-in is short. Background on the airport is on our{' '}
                            <Link href="/airport/treviso" className="text-gold font-semibold hover:underline">
                                Treviso Airport transfer page
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </section>

            {/* ── BOOKING FORM ────────────────────────────────── */}
            <section className="py-16 md:py-20 bg-navy" aria-labelledby="tron-quote">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
                        <div className="lg:col-span-2 text-white">
                            <h2 id="tron-quote" className="text-3xl md:text-4xl font-extrabold mb-5 leading-tight">
                                Get a price for this transfer
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Send your flight and how you are reaching Tronchetto, and we will come back with a fixed,
                                all-inclusive fare before anything is confirmed.
                            </p>
                            <ul className="space-y-3 text-sm text-gray-200 mb-8">
                                {[
                                    'A quote request is not yet a reservation',
                                    'Professionally licensed NCC drivers',
                                    'English-speaking drivers',
                                    'Child seats on request, free of charge',
                                ].map((x) => (
                                    <li key={x} className="flex items-start gap-3">
                                        <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                                        <span>{x}</span>
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={WHATSAPP}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-[#25D366] text-white font-bold px-7 py-4 rounded-full hover:bg-[#1ebe57] transition-colors"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Ask on WhatsApp instead
                            </a>
                        </div>
                        <div className="lg:col-span-3">
                            <BookingForm sourceName="Tronchetto to Treviso Airport Page" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PRIVATE VS PUBLIC ───────────────────────────── */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6 leading-tight">
                        Private car or public transport from Tronchetto?
                    </h2>
                    <div className="space-y-5 text-gray-700 leading-relaxed">
                        <p>
                            There is no public service that runs from Tronchetto to Treviso Airport. Every public option
                            begins with the same extra step: <strong>the People Mover across to Piazzale Roma</strong>, and
                            only then does the journey towards the airport actually start.
                        </p>
                        <p>
                            From Piazzale Roma the usual public route is the <strong>ATVO airport coach</strong>, which
                            serves Treviso Airport from the Venice side. It is a reasonable option if you are travelling
                            light and your timing is flexible, because it runs to a timetable rather than to your flight.
                        </p>
                        <p>
                            <strong>Rail is not a direct option from Tronchetto, because the island has no railway
                            station.</strong> You would take the People Mover to Piazzale Roma and walk to Venezia Santa
                            Lucia, or carry on to Mestre, before boarding anything — and Treviso Airport has no station of
                            its own either, so a bus or taxi is still needed at the far end. That is two or three changes
                            with luggage to cover 40 km.
                        </p>
                        <p>
                            A private car replaces all of that with one vehicle from the island to the terminal, timed
                            against your flight rather than a published schedule. The honest trade-off is cost: the coach is
                            cheaper, and if you have one bag and time to spare it may well be the sensible choice. We do not
                            publish public-transport fares or departure times here, because they change and a stale timetable
                            is worse than none — check the operator directly before relying on it.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── WHO IT SUITS + VEHICLES ─────────────────────── */}
            <section className="py-16 md:py-20 bg-[#F8F9FA] border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6 leading-tight">
                        Who this transfer actually suits
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-5 mb-12">
                        {[
                            { icon: <Luggage className="w-5 h-5 text-gold shrink-0" />, h: 'Anyone with real luggage', p: 'The public alternative means moving bags through the People Mover and at least one interchange. One vehicle, loaded once, is a different experience.' },
                            { icon: <Ship className="w-5 h-5 text-gold shrink-0" />, h: 'Cruise passengers', p: 'Tronchetto is close to the Stazione Marittima terminals, so a disembarkation can hand straight over to a waiting car without crossing the city.' },
                            { icon: <Users className="w-5 h-5 text-gold shrink-0" />, h: 'Families and groups', p: 'Keeping a party together through a timetabled connection is the hard part. A single vehicle removes the coordination problem as much as the carrying.' },
                            { icon: <Clock className="w-5 h-5 text-gold shrink-0" />, h: 'Early and late flights', p: 'Pre-booked departure transfers are available around the clock, which matters when a flight leaves before the city has properly woken up.' },
                        ].map((c) => (
                            <div key={c.h} className="rounded-2xl bg-white border border-gray-200 p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    {c.icon}
                                    <h3 className="font-bold text-navy">{c.h}</h3>
                                </div>
                                <p className="text-sm text-gray-700 leading-relaxed">{c.p}</p>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-4 leading-tight">
                        Choosing a vehicle
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
                        On an airport departure the constraint is almost always luggage rather than seats, so count the bags
                        as well as the people. Availability of a particular category depends on the date and is confirmed
                        with your quote.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { name: 'Sedan', note: '1–3 passengers' },
                            { name: 'Executive Sedan', note: 'Business comfort' },
                            { name: 'Minivan', note: 'Up to 7 passengers with luggage' },
                            { name: 'Mercedes V-Class', note: 'Premium group travel' },
                            { name: 'Luxury Van', note: 'VIP transfers' },
                            { name: 'Group Minibus', note: 'Larger parties on request' },
                        ].map((v) => (
                            <div key={v.name} className="rounded-2xl bg-white border border-gray-200 p-5">
                                <Car className="w-5 h-5 text-gold mb-2" />
                                <h3 className="font-bold text-navy text-sm mb-1">{v.name}</h3>
                                <p className="text-xs text-gray-600">{v.note}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BOOKING INFO ────────────────────────────────── */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6 leading-tight">
                        What to send when you ask for a quote
                    </h2>
                    <div className="rounded-2xl bg-navy text-white p-7 md:p-9 mb-8">
                        <div className="flex items-center gap-3 mb-5">
                            <Info className="w-5 h-5 text-gold shrink-0" />
                            <h3 className="text-xl font-bold">For this route specifically</h3>
                        </div>
                        <ul className="space-y-3 text-sm text-gray-200">
                            {[
                                'How you are reaching Tronchetto — by water, from the car park, or on the People Mover',
                                'Your flight number and departure time from Treviso',
                                'The date and the pickup time you have in mind',
                                'Number of passengers, and number of bags',
                                'Any child seat needed, and the child’s age',
                            ].map((x) => (
                                <li key={x} className="flex items-start gap-3">
                                    <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                                    <span>{x}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-xs text-gray-400 mt-5 leading-relaxed">
                            The first item is the one that is specific to Tronchetto, and the one most often left out.
                        </p>
                    </div>
                    <div className="space-y-5 text-gray-700 leading-relaxed">
                        <p>
                            Every quote is a <strong>fixed, all-inclusive fare</strong> confirmed before you travel, with
                            nothing added at the end of the journey without prior agreement. A surcharge can apply on Italian
                            public holidays and on journeys starting between 22:00 and 06:00; where one applies it appears in
                            the quote rather than afterwards.
                        </p>
                        <p>
                            Flights are monitored using live tracking data, which on a departure matters mainly if your
                            time shifts — tell us and the pickup is re-planned. Amendments are free more than 24 hours
                            before the booked pickup, subject to availability, and cancelling more than 24 hours ahead is
                            refunded in full. The full detail is in our{' '}
                            <Link href="/terms-and-conditions" className="text-gold font-semibold hover:underline">
                                terms and conditions
                            </Link>
                            , which govern where this page and the terms differ.
                        </p>
                    </div>
                </div>
            </section>

            <FAQSection
                faqs={faqs}
                title="Tronchetto to Treviso Airport: common questions"
                badge="Route FAQs"
            />

            {/* ── RELATED ─────────────────────────────────────── */}
            <section className="py-16 md:py-20 bg-[#F8F9FA] border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-6">
                        Related Venice and Treviso transfers
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { href: '/treviso-airport-to-tronchetto', label: 'Treviso Airport to Tronchetto', note: 'The same route on arrival' },
                            { href: '/tronchetto-to-venice-marco-polo-airport', label: 'Tronchetto to Venice Marco Polo', note: 'If your flight leaves from VCE' },
                            { href: '/piazzale-roma-to-treviso-airport', label: 'Piazzale Roma to Treviso Airport', note: 'The other Venice vehicle terminus' },
                            { href: '/venice-cruise-port-to-treviso-airport', label: 'Venice Cruise Port to Treviso Airport', note: 'Straight from the terminals' },
                            { href: '/mestre-to-treviso-airport', label: 'Mestre to Treviso Airport', note: 'Starting on the mainland' },
                            { href: '/city/venice', label: 'Venice taxi and transfer service', note: 'How road transfers meet a car-free city' },
                        ].map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                className="group flex items-start gap-3 rounded-2xl bg-white border border-gray-200 p-5 hover:border-gold transition-colors"
                            >
                                <ChevronRight className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                <span>
                                    <span className="block font-semibold text-navy group-hover:text-gold transition-colors">{l.label}</span>
                                    <span className="block text-xs text-gray-500 mt-1">{l.note}</span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ───────────────────────────────────── */}
            <section className="py-20 bg-navy">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <p className="text-gold text-sm font-bold uppercase tracking-[0.3em] mb-4">Tronchetto &rarr; Treviso Airport</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
                        One car, island to terminal
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-9">
                        Tell us your flight and how you are reaching Tronchetto, and we will agree the meeting point and
                        quote the journey at a fixed price before you commit.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/book-now"
                            className="inline-flex justify-center items-center gap-3 bg-gold text-navy font-bold px-9 py-4 rounded-full hover:bg-white transition-colors"
                        >
                            <Users className="w-5 h-5" />
                            Request a Quote
                        </Link>
                        <a
                            href={WHATSAPP}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex justify-center items-center gap-3 bg-[#25D366] text-white font-bold px-9 py-4 rounded-full hover:bg-[#1ebe57] transition-colors"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Message on WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
