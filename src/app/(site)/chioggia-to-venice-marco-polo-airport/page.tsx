import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import BookingForm from '@/components/BookingForm';
import FAQSection from '@/components/FAQSection';
import ServiceSchema from '@/components/ServiceSchema';
import MapEmbed from '@/components/MapEmbed';
import { Clock, MapPin, Route, Plane, Car, Users, CheckCircle, ChevronRight, Info, MessageCircle } from 'lucide-react';

/* Page-specific implementation for /chioggia-to-venice-marco-polo-airport.
 *
 * This static segment deliberately takes precedence over the shared
 * (site)/[slug] veneto-pair template, which serves ~150 other transfer pages
 * from one layout. Overriding here means this route gets genuinely
 * route-specific content and a corrected map without altering the shared
 * template or any sibling page. The URL is unchanged.
 *
 * FACT SOURCES — nothing here is invented:
 *  - Journey time, Chioggia/Sottomarina geography, VCE terminal and public
 *    alternatives: src/lib/veneto-transfer-data.ts (the site's own route data).
 *  - Road distance: approximately 55 km, approved after review. Rome2rio
 *    states ~55 km paired with a ~54 min drive, which is consistent with the
 *    ~50-60 min this site already published; 40 km over 50-60 min would imply
 *    an implausible 40-48 km/h average on the SS309 Romea. The ~32 km figure
 *    is the straight line across the lagoon and is never used as the route
 *    distance. The shared veneto `vce` leg was corrected to ~55 km to match;
 *    the Chioggia `tsf` leg is a different journey and was left alone.
 *  - Waiting, payment, cancellation, surcharge and child-seat policy:
 *    /terms-and-conditions. The complimentary waiting allowances in the Terms
 *    apply to airport ARRIVALS measured from landing, so they are not claimed
 *    for a departure pickup here. No published extra-waiting rate exists any
 *    more, so none is quoted.
 *  - No 24/7 claim, no fixed journey-time guarantee, no fabricated reviews,
 *    no invented vehicle capacities, no Italian office or local licence.
 */

const SITE = 'https://www.italytaxiservice.com';
const PATH = '/chioggia-to-venice-marco-polo-airport';
const HERO = '/images/venice airport.webp';
const WHATSAPP =
    'https://wa.me/923148932631?text=' +
    encodeURIComponent('Hi, I would like a quote for a private transfer from Chioggia to Venice Marco Polo Airport.');

export const metadata: Metadata = {
    // `absolute` skips the layout's "%s | Italy Taxi Service" template. The
    // previous title rendered at 67 characters and was truncated in results.
    title: { absolute: 'Chioggia to Venice Airport Transfer | Private Taxi' },
    description:
        'Private transfer from Chioggia and Sottomarina to Venice Marco Polo Airport (VCE). Around 50-60 minutes by road, door to door. Request a quote.',
    alternates: { canonical: PATH },
    robots: { index: true, follow: true },
    openGraph: {
        title: 'Chioggia to Venice Marco Polo Airport Transfer',
        description:
            'Private door-to-door transfer from Chioggia or Sottomarina to Venice Marco Polo Airport (VCE), with pickup planned around your flight.',
        url: `${SITE}${PATH}`,
        type: 'website',
        images: [{ url: HERO, width: 1200, height: 630, alt: 'Venice Marco Polo Airport, the destination for Chioggia airport transfers' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Chioggia to Venice Marco Polo Airport Transfer',
        description: 'Private door-to-door transfer from Chioggia or Sottomarina to Venice Marco Polo Airport (VCE).',
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Venice Marco Polo Airport', item: `${SITE}/airport/venice` },
        { '@type': 'ListItem', position: 3, name: 'Chioggia to Venice Marco Polo Airport', item: `${SITE}${PATH}` },
    ],
};

const faqs = [
    {
        q: 'How far is Chioggia from Venice Marco Polo Airport, and how long does the drive take?',
        a:
            'Approximately 55 km by road, with an estimated journey time of 50–60 minutes, depending on traffic and road conditions. The road cannot take the direct line, because that crosses the Venetian lagoon and there is no bridge, so it runs up the coast and around the landward edge before reaching the airport on the mainland. Both figures are planning estimates rather than guarantees: summer weekends along the coast, the Mestre approaches at commuter times and roadworks on the lagoon-edge routes can all add to the drive, which is why the pickup is set with a margin rather than to the quickest possible run.',
    },
    {
        q: 'Can a private car collect me from my hotel in Chioggia?',
        a:
            'In most cases yes. Chioggia is reached directly by road, so unlike central Venice there is no boat leg and no change of vehicle. Collection is normally door to door. The exception is the narrowest lanes off the historic centre, where a vehicle may not be able to reach a specific doorway; in that situation the driver waits at the nearest point a car can legally stop and you walk the short distance. Giving the full address and the accommodation name when you book lets that be checked in advance rather than discovered on the morning.',
    },
    {
        q: 'Can I arrange a pickup in Sottomarina?',
        a:
            'Yes. Sottomarina sits immediately across the channel from the historic town and is the beach side of Chioggia, with most of the larger hotels, apartment blocks and campsites. It is fully road-accessible and adds only a few minutes to the journey. Because many Sottomarina addresses are on long parallel streets behind the seafront, the street number matters as much as the street name.',
    },
    {
        q: 'How early should I leave Chioggia for my flight?',
        a:
            'Work backwards from your flight rather than from the drive. Venice Marco Polo advises arriving about two hours before a European departure and about three hours before a long-haul or intercontinental one. Add the 50 to 60 minute drive, plus a margin for traffic and for getting your party and luggage into the vehicle. Your airline may ask for more time, and its instruction takes precedence over any general guidance. There is no single universal buffer that fits every flight.',
    },
    {
        q: 'Is a private transfer from Chioggia to the airport direct?',
        a:
            'Yes. One vehicle, one driver, from your pickup address to the terminal, with no changes and no waiting for other passengers. Public transport on this corridor has no direct equivalent: it involves at least one connection, usually via Piazzale Roma or Mestre, with your luggage alongside you for each change.',
    },
    {
        q: 'Can I travel with several suitcases?',
        a:
            'Yes, provided the vehicle is matched to the load when you book. A sedan suits one to three passengers with normal cabin and hold luggage. A minivan takes up to seven passengers with luggage and is the usual choice for families or anyone with bulky cases. Tell us the number and rough size of your bags, and anything oversized such as golf clubs, a bicycle or a pushchair, so the right vehicle is allocated rather than assumed.',
    },
    {
        q: 'Can I request a child seat?',
        a:
            'Yes. Child seats are available free of charge on request under our terms. Ask for one when you book and say the child’s age, since that determines the type of restraint needed. A seat cannot reliably be produced on the morning of travel if it was not requested in advance.',
    },
    {
        q: 'What happens if my flight details change?',
        a:
            'Tell us as soon as you know. Amendments to the date, time, address or vehicle are accepted free of charge when requested more than 24 hours before the scheduled pickup, subject to availability. Cancelling more than 24 hours ahead is free with a full refund; shorter notice follows the schedule set out in our terms. For departures the pickup is planned against the flight you give us, so a changed departure time is worth passing on even if everything else stays the same.',
        link: { text: 'the schedule set out in our terms', href: '/terms-and-conditions' },
    },
    {
        q: 'Are early-morning pickups from Chioggia possible?',
        a:
            'Early departures from this part of the lagoon are common, because the first wave of flights out of Venice means leaving Chioggia while it is still dark. Journeys starting between 22:00 and 06:00 are operated, and our terms note that they may carry a surcharge. Where one applies it is shown in your quote before you book, never added afterwards. Confirm an unusually early pickup when booking rather than assuming it.',
    },
    {
        q: 'What is the difference between Venice Marco Polo and Treviso Airport?',
        a:
            'Venice Marco Polo (VCE) is the main airport, on the mainland at the northern edge of the lagoon, and handles most scheduled and long-haul traffic. Treviso (TSF) is the smaller low-cost airport beside Treviso, used heavily by budget carriers. From Chioggia, Treviso is the longer drive of the two. Check which airport your ticket actually names before booking a transfer, because the two are not interchangeable and a wrong assumption is an expensive mistake on the day.',
        link: { text: 'Treviso (TSF)', href: '/airport/treviso' },
    },
];

const comparison = [
    {
        option: 'Private transfer',
        direct: 'Direct, door to door',
        changes: 'None',
        luggage: 'Loaded once, stays in the vehicle',
        timing: 'Planned around your flight',
    },
    {
        option: 'Bus and public transport',
        direct: 'Not direct on this corridor',
        changes: 'At least one connection, usually via Piazzale Roma or Mestre',
        luggage: 'Carried by you at every change',
        timing: 'Fixed to the published timetable',
    },
    {
        option: 'Local taxi',
        direct: 'Direct, if one is available',
        changes: 'None',
        luggage: 'Loaded once',
        timing: 'Depends on availability at the time you need it',
    },
];

export default function ChioggiaToVeniceAirportPage() {
    return (
        <main className="bg-white">
            <ServiceSchema
                name="Private Transfer from Chioggia to Venice Marco Polo Airport"
                description="Private door-to-door car transfer from Chioggia and Sottomarina to Venice Marco Polo Airport (VCE), with pickup planned around your flight departure."
                url={`${SITE}${PATH}`}
                image={`${SITE}${HERO}`}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <Navbar />

            <PageHero
                titleTop="Private Transfer from Chioggia to"
                titleBottom="Venice Marco Polo Airport"
                description="Door-to-door car transfer from Chioggia or Sottomarina to Venice Marco Polo Airport (VCE). Approximately 55 km by road, with an estimated journey time of 50–60 minutes, depending on traffic and road conditions. The pickup is planned around your flight."
                backgroundImage={HERO}
                buttonText="REQUEST A QUOTE"
                buttonLink="/book-now"
                breadcrumbs={[
                    { name: 'Home', item: '/' },
                    { name: 'Venice Marco Polo Airport', item: '/airport/venice' },
                    { name: 'From Chioggia', item: PATH },
                ]}
            />

            {/* ── DIRECT ANSWER ───────────────────────────────── */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6 leading-tight">
                        Chioggia to Venice Marco Polo Airport, in short
                    </h2>
                    <div className="space-y-5 text-gray-700 leading-relaxed">
                        <p>
                            <strong>Chioggia</strong> is a fishing town at the southern end of the Venetian lagoon, often
                            called a smaller Venice for its canals and colourful boats. <strong>Sottomarina</strong>, just
                            across the channel, is its beach side and where most of the hotels and apartments are.
                            <strong> Venice Marco Polo Airport (VCE)</strong> is the region&rsquo;s main airport, on the
                            mainland at the northern edge of the same lagoon, about 13 km from the Venice historic centre.
                        </p>
                        <p>
                            The important practical point is that{' '}
                            <strong>this journey is entirely by road, at both ends</strong>. Chioggia is reached directly
                            by car and the airport sits on the mainland, so there is no boat leg, no water taxi and no
                            change of vehicle. That is not true of transfers into central Venice itself, which is car-free
                            and has to be reached by water from the vehicle terminus at Piazzale Roma or Tronchetto.
                        </p>
                        <p>
                            <strong>Approximately 55 km by road, with an estimated journey time of 50&ndash;60
                            minutes</strong>, depending on traffic and road conditions. Both are planning estimates rather
                            than guaranteed figures. A private transfer on this route is most useful for early departures,
                            for families and groups with luggage, and for anyone who would otherwise face a connection with
                            suitcases, because public transport between Chioggia and the airport is not direct.
                        </p>
                        <p>
                            Pickup planning matters more here than on a short city hop. The first flights out of Venice mean
                            leaving Chioggia in the dark, and the road skirts the lagoon rather than crossing it, so the
                            margin you allow is what absorbs traffic on the day.
                        </p>
                    </div>

                    <div className="mt-10 grid sm:grid-cols-3 gap-4">
                        {[
                            { icon: <Route className="w-6 h-6 text-gold" />, k: 'Road distance', v: '~55 km', n: 'Estimated road route' },
                            { icon: <Clock className="w-6 h-6 text-gold" />, k: 'Typical drive', v: '~50-60 min', n: 'Normal traffic, not guaranteed' },
                            { icon: <Plane className="w-6 h-6 text-gold" />, k: 'Destination', v: 'VCE', n: 'One main passenger terminal' },
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

            {/* ── ROUTE OVERVIEW ──────────────────────────────── */}
            <section className="py-16 md:py-20 bg-[#F8F9FA] border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6 leading-tight">
                        How the road journey actually works
                    </h2>
                    <div className="space-y-5 text-gray-700 leading-relaxed">
                        <p>
                            Chioggia sits on the far southern tip of the lagoon, which is why the map distance and the
                            driving distance differ so much. The straight line to the airport crosses open water. The road
                            cannot, so it runs north along the coastal strip and then inland around the lagoon&rsquo;s
                            landward side before turning back towards the airport, which lies north-east of Mestre on the
                            mainland shore.
                        </p>
                        <p>
                            In practice the drive divides into three stretches. The first is leaving Chioggia and
                            Sottomarina, slow by nature because of the bridges, the canal crossings and the narrow one-way
                            sections near the centre. The second is the open run north on the coastal road, usually the
                            quickest part. The third is the approach through the mainland around Mestre, where the
                            traffic is heaviest and where delays, if they happen, usually happen.
                        </p>
                        <p>
                            Conditions change the picture more than the distance does. July and August bring heavy beach
                            traffic to the Sottomarina strip and the coast road. Commuter peaks around Mestre, roughly
                            07:30-09:00 and 17:00-19:00, affect the final stretch. Winter fog on the laguna-edge roads is a
                            genuine local factor and slows traffic rather than stopping it. Out of season and early in the
                            morning the route runs close to its quickest time, which is one reason the earliest departures
                            are often the smoothest.
                        </p>
                        <p>
                            If you are travelling in the other direction on arrival, the same road applies in reverse and
                            is covered on our{' '}
                            <Link href="/venice-marco-polo-airport-to-chioggia" className="text-gold font-semibold hover:underline">
                                Venice Marco Polo Airport to Chioggia transfer
                            </Link>{' '}
                            page, where the meeting arrangements inside the terminal are set out in more detail.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── PICKUP LOCATIONS ────────────────────────────── */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6 leading-tight">
                        Pickup points in Chioggia and Sottomarina
                    </h2>
                    <div className="space-y-5 text-gray-700 leading-relaxed">
                        <p>
                            Because the whole town is road-accessible, pickup is normally from your door. Where it is not,
                            it is for a specific and predictable reason, so it is worth knowing which part of town you are
                            staying in.
                        </p>
                    </div>

                    <div className="mt-8 grid md:grid-cols-2 gap-6">
                        <div className="rounded-2xl border border-gray-200 p-7">
                            <div className="flex items-center gap-3 mb-4">
                                <MapPin className="w-5 h-5 text-gold shrink-0" />
                                <h3 className="text-xl font-bold text-navy">Chioggia historic town</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                The old town is built along the Corso del Popolo with narrow calli and canal bridges running
                                off it. Main streets take a car without difficulty. Some of the smaller lanes do not, and a
                                few are pedestrian. Where a vehicle cannot reach the doorway, the driver stops at the nearest
                                legal point and helps with the bags from there. It is usually a short walk, but it is better
                                known in advance than discovered with suitcases at six in the morning.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-gray-200 p-7">
                            <div className="flex items-center gap-3 mb-4">
                                <MapPin className="w-5 h-5 text-gold shrink-0" />
                                <h3 className="text-xl font-bold text-navy">Sottomarina</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                The beach side, across the channel, holds most of the hotels, apartment blocks and
                                campsites. Access is straightforward and adds only a few minutes. The practical catch is
                                that the streets behind the seafront run long and parallel, with similar names and many
                                near-identical buildings, so the street number and the accommodation name matter as much as
                                the street itself.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 rounded-2xl bg-navy text-white p-7 md:p-9">
                        <div className="flex items-center gap-3 mb-5">
                            <Info className="w-5 h-5 text-gold shrink-0" />
                            <h3 className="text-xl font-bold">What to send us when you ask for a quote</h3>
                        </div>
                        <ul className="space-y-3 text-sm text-gray-200">
                            {[
                                'The full pickup address, including the street number',
                                'The hotel, apartment or campsite name, if there is one',
                                'The pickup date and time you have in mind',
                                'Your flight number and departure time',
                                'How many passengers are travelling',
                                'How many bags, and anything oversized',
                            ].map((x) => (
                                <li key={x} className="flex items-start gap-3">
                                    <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                                    <span>{x}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-xs text-gray-400 mt-5 leading-relaxed">
                            These are the details our terms require for any booking. The flight number is what lets the
                            pickup be planned against your departure rather than estimated.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── DEPARTURE PLANNING ──────────────────────────── */}
            <section className="py-16 md:py-20 bg-[#F8F9FA] border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6 leading-tight">
                        Planning your departure from Chioggia
                    </h2>
                    <div className="space-y-5 text-gray-700 leading-relaxed">
                        <p>
                            Start at the flight and work backwards. Venice Marco Polo&rsquo;s own guidance is to arrive
                            about two hours before a European departure and about three hours before a long-haul or
                            intercontinental one. On top of that you need the drive, which is normally 50 to 60 minutes, and
                            then a margin.
                        </p>
                        <p>
                            The margin is the part people underestimate. It covers the Mestre approach at the wrong time of
                            day, a slow exit from a narrow street in the old town, and the few minutes it genuinely takes to
                            get a family and six bags into a vehicle. It is not padding; it is the difference between
                            arriving composed and arriving at a closing gate.
                        </p>
                        <p>
                            Two cases deserve extra thought. <strong>Early-morning departures</strong> mean leaving Chioggia
                            before dawn, which is quiet on the road but needs the pickup confirmed in advance and everyone
                            genuinely ready; a pre-dawn start leaves no slack to recover from a late one. <strong>Evening
                            departures</strong> run into the commuter peak around Mestre, so the same flight time can need a
                            noticeably bigger buffer in the late afternoon than at midday.
                        </p>
                        <p>
                            Whatever general guidance says, <strong>your airline&rsquo;s instruction takes precedence</strong>.
                            Check-in and bag-drop deadlines vary by carrier and by ticket, low-cost gates in particular close
                            firmly, and there is no universal buffer that fits every flight. If you want a second view on
                            timing, our guide to{' '}
                            <Link href="/blog/how-early-airport-italy" className="text-gold font-semibold hover:underline">
                                how early to get to the airport in Italy
                            </Link>{' '}
                            goes through the reasoning in more detail.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── COMPARISON ──────────────────────────────────── */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4 leading-tight">
                        Private transfer or public transport?
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
                        The honest summary: there is no direct public route from Chioggia to the airport. Any public
                        combination involves at least one change, normally through Piazzale Roma or Mestre, with your luggage
                        with you throughout. That is the real difference on this corridor &mdash; not comfort, but the number
                        of times you move your bags.
                    </p>

                    {/* readable cards on mobile, table on desktop */}
                    <div className="grid gap-5 md:hidden">
                        {comparison.map((r) => (
                            <div key={r.option} className="rounded-2xl border border-gray-200 p-6">
                                <h3 className="font-bold text-navy text-lg mb-4">{r.option}</h3>
                                <dl className="space-y-3 text-sm">
                                    <div><dt className="text-gray-500 font-semibold">Direct?</dt><dd className="text-gray-700">{r.direct}</dd></div>
                                    <div><dt className="text-gray-500 font-semibold">Changes</dt><dd className="text-gray-700">{r.changes}</dd></div>
                                    <div><dt className="text-gray-500 font-semibold">Luggage</dt><dd className="text-gray-700">{r.luggage}</dd></div>
                                    <div><dt className="text-gray-500 font-semibold">Timing</dt><dd className="text-gray-700">{r.timing}</dd></div>
                                </dl>
                            </div>
                        ))}
                    </div>
                    <div className="hidden md:block overflow-x-auto rounded-2xl border border-gray-200">
                        <table className="w-full text-sm">
                            <caption className="sr-only">
                                Comparison of ways to travel from Chioggia to Venice Marco Polo Airport
                            </caption>
                            <thead>
                                <tr className="bg-navy text-white text-left">
                                    <th scope="col" className="px-5 py-4 font-bold">Option</th>
                                    <th scope="col" className="px-5 py-4 font-bold">Direct?</th>
                                    <th scope="col" className="px-5 py-4 font-bold">Changes</th>
                                    <th scope="col" className="px-5 py-4 font-bold">Luggage</th>
                                    <th scope="col" className="px-5 py-4 font-bold">Timing</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparison.map((r, i) => (
                                    <tr key={r.option} className={i % 2 ? 'bg-[#F8F9FA]' : 'bg-white'}>
                                        <td className="px-5 py-4 font-semibold text-navy align-top">{r.option}</td>
                                        <td className="px-5 py-4 text-gray-700 align-top">{r.direct}</td>
                                        <td className="px-5 py-4 text-gray-700 align-top">{r.changes}</td>
                                        <td className="px-5 py-4 text-gray-700 align-top">{r.luggage}</td>
                                        <td className="px-5 py-4 text-gray-700 align-top">{r.timing}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <p className="text-sm text-gray-500 mt-6 leading-relaxed">
                        We do not publish public-transport fares or departure times here, because they change and a stale
                        timetable is worse than none. Check the current schedule with the operator directly before relying
                        on it. For the airport end of any public option, our{' '}
                        <Link href="/blog/venice-airport-to-venice-guide" className="text-gold font-semibold hover:underline">
                            guide to getting from Venice Marco Polo into Venice
                        </Link>{' '}
                        sets out how the bus and waterbus links actually connect.
                    </p>
                </div>
            </section>

            {/* ── BOOKING FORM, two-column on desktop ─────────── */}
            <section className="py-16 md:py-20 bg-navy" aria-labelledby="chioggia-quote">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
                        <div className="lg:col-span-2 text-white">
                            <h2 id="chioggia-quote" className="text-3xl md:text-4xl font-extrabold mb-5 leading-tight">
                                Request a quote for this transfer
                            </h2>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Send your pickup address and flight details and we will come back with a fixed,
                                all-inclusive price for the journey before anything is confirmed.
                            </p>
                            <ul className="space-y-3 text-sm text-gray-200 mb-8">
                                {[
                                    'A quote request is not yet a reservation',
                                    'The price is confirmed to you before you commit',
                                    'Pickup is planned around your flight time',
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
                            <BookingForm sourceName="Chioggia to Venice Marco Polo Airport Page" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── AIRPORT DROP-OFF ────────────────────────────── */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6 leading-tight">
                        Arriving at Venice Marco Polo for your flight
                    </h2>
                    <div className="space-y-5 text-gray-700 leading-relaxed">
                        <p>
                            Venice Marco Polo works from a single main passenger terminal, which keeps the departure simple:
                            there is no terminal to choose between and no risk of being dropped at the wrong one. Your driver
                            takes you to the departures drop-off and helps your luggage out of the vehicle.
                        </p>
                        <p>
                            From there the airport is yours to work through &mdash; check-in or bag drop, security, then the
                            gate. Because a single terminal handles everything, the walk from the drop-off to check-in is
                            short, but it is still worth knowing your airline&rsquo;s check-in area before you arrive rather
                            than reading the boards with a deadline approaching.
                        </p>
                        <p>
                            Two things are worth confirming before the day. First, the terminal your airline actually uses
                            for departures, which your booking confirmation will state. Second, that your flight has not
                            moved; schedules shift, and a changed departure time changes the pickup. We monitor flights using
                            live tracking data, which matters most on arrivals, but on a departure the most reliable signal is
                            still you telling us if the time changes.
                        </p>
                        <p>
                            For background on the airport itself, including the layout and the onward links, see our{' '}
                            <Link href="/airport/venice" className="text-gold font-semibold hover:underline">
                                Venice Marco Polo Airport transfer page
                            </Link>
                            . If you want to know where drivers actually stand on the arrivals side for a future return trip,
                            that is covered in{' '}
                            <Link href="/blog/driver-pickup-venice-marco-polo" className="text-gold font-semibold hover:underline">
                                where drivers wait at Venice Marco Polo
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </section>

            {/* ── VEHICLES ────────────────────────────────────── */}
            <section className="py-16 md:py-20 bg-[#F8F9FA] border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4 leading-tight">
                        Choosing the right vehicle for passengers and luggage
                    </h2>
                    <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
                        Vehicle choice on an airport departure is really a luggage question. Seats are rarely the
                        constraint; cases are. Count the bags as well as the people, and say if anything is bulky, because a
                        party of four with four large suitcases needs more space than a party of four with hand luggage.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {[
                            { name: 'Sedan', note: '1-3 passengers' },
                            { name: 'Executive Sedan', note: 'Business comfort' },
                            { name: 'Minivan', note: 'Up to 7 passengers with luggage' },
                            { name: 'Mercedes V-Class', note: 'Premium group travel' },
                            { name: 'Luxury Van', note: 'VIP transfers' },
                            { name: 'Group Minibus', note: 'Larger parties on request' },
                        ].map((v) => (
                            <div key={v.name} className="rounded-2xl bg-white border border-gray-200 p-6">
                                <Car className="w-6 h-6 text-gold mb-3" />
                                <h3 className="font-bold text-navy mb-1">{v.name}</h3>
                                <p className="text-sm text-gray-600">{v.note}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            <strong>Child seats</strong> are available free of charge on request. Ask when you book and give
                            the child&rsquo;s age, since that decides the restraint type. <strong>Bulky items</strong> such as
                            golf clubs, skis, a bicycle or a pushchair should be mentioned at quote stage so the vehicle is
                            matched rather than hoped for.
                        </p>
                        <p className="text-sm text-gray-500">
                            Availability of a specific vehicle category depends on the date and is confirmed with your quote.
                            We would rather allocate a larger vehicle than arrive with one your luggage will not fit into.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── BOOKING PROCESS + TERMS ─────────────────────── */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-8 leading-tight">
                        How booking this transfer works
                    </h2>
                    <ol className="space-y-5 mb-12">
                        {[
                            ['Send the pickup details', 'Your address in Chioggia or Sottomarina, as set out in the checklist above.'],
                            ['Add the flight information', 'Venice Marco Polo as the destination, plus your flight number and departure time.'],
                            ['Give passengers and luggage', 'Numbers travelling and bags carried, plus any child seat needed.'],
                            ['Receive the quote', 'A fixed, all-inclusive price for the journey. This is a quote, not yet a booking.'],
                            ['Confirm the arrangements', 'Once you accept, the pickup time and point are confirmed with you and the booking is made.'],
                        ].map(([t, d], i) => (
                            <li key={t} className="flex gap-5">
                                <span className="shrink-0 w-10 h-10 rounded-full bg-gold text-navy font-extrabold flex items-center justify-center">
                                    {i + 1}
                                </span>
                                <div>
                                    <h3 className="font-bold text-navy mb-1">{t}</h3>
                                    <p className="text-gray-700 text-sm leading-relaxed">{d}</p>
                                </div>
                            </li>
                        ))}
                    </ol>

                    <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6 leading-tight">
                        Price, payment and cancellation
                    </h2>
                    <div className="space-y-5 text-gray-700 leading-relaxed">
                        <p>
                            We do not publish a headline fare for this route, because the price depends on your pickup
                            address, the vehicle needed and the time of day. What our terms do fix is the shape of the price:
                            every quote is a <strong>fixed, all-inclusive fare</strong>, and no additional charge is applied
                            at the end of the journey without prior agreement.
                        </p>
                        <p>
                            A surcharge may apply on Italian public holidays, on journeys starting between 22:00 and 06:00,
                            and on 24-26 December, 31 December and 1 January. Where one applies it appears in your quote
                            before you book, not afterwards.
                        </p>
                        <p>
                            <strong>Payment</strong> is by cash to the driver on the day, which is the standard method;
                            Visa and Mastercard can also be accepted through a secure online payment link, and bank transfer
                            is available for pre-approved advance bookings.
                        </p>
                        <p>
                            <strong>Changes and cancellation.</strong> Amendments to the date, time, address or vehicle are
                            free when requested more than 24 hours before pickup, subject to availability. Cancelling more
                            than 24 hours ahead is free with a full refund; shorter notice follows the schedule in our terms.
                            We recommend booking at least 24 hours in advance, and earlier for an early-morning departure.
                        </p>
                        <p className="text-sm text-gray-500">
                            The full detail, including the cancellation schedule and the waiting-time provisions, is in our{' '}
                            <Link href="/terms-and-conditions" className="text-gold font-semibold hover:underline">
                                terms and conditions
                            </Link>
                            . Where this page and the terms differ, the terms govern.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── LOCAL CONTEXT + RELATED ─────────────────────── */}
            <section className="py-16 md:py-20 bg-[#F8F9FA] border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6 leading-tight">
                        Chioggia, Sottomarina and what is nearby
                    </h2>
                    <div className="space-y-5 text-gray-700 leading-relaxed">
                        <p>
                            Chioggia is a working fishing town before it is a destination, which is much of its appeal. The
                            Corso del Popolo runs the length of the old town, the fish market is genuinely a market rather
                            than a display, and the canals carry boats that work for a living. Sottomarina, over the channel,
                            is the Adriatic beach strip: long sand, a seafront of hotels, and the holiday trade that fills
                            the roads in August.
                        </p>
                        <p>
                            For transfer purposes the useful geography is what else is within a reasonable drive. Venice is
                            about an hour away by road to the vehicle terminus, from where the historic centre continues by
                            water. Padua is roughly fifty minutes inland. Both matter if your trip combines Chioggia with
                            another stop before flying home, because a single transfer with a stop is often simpler than two
                            separate journeys.
                        </p>
                        <p>
                            If Venice itself is part of the plan rather than just the airport, our{' '}
                            <Link href="/city/venice" className="text-gold font-semibold hover:underline">
                                Venice taxi and transfer service
                            </Link>{' '}
                            page explains how road transfers meet the car-free city, which is the one piece of Venetian
                            logistics that catches most first-time visitors out.
                        </p>
                    </div>

                    <h3 className="text-xl font-bold text-navy mt-12 mb-5">Related transfers on this corridor</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { href: '/venice-marco-polo-airport-to-chioggia', label: 'Venice Marco Polo Airport to Chioggia', note: 'The same route on arrival' },
                            { href: '/chioggia-to-treviso-airport', label: 'Chioggia to Treviso Airport', note: 'If your ticket says TSF' },
                            { href: '/airport/venice', label: 'Venice Marco Polo Airport transfers', note: 'All routes to and from VCE' },
                            { href: '/airport/treviso', label: 'Treviso Airport transfers', note: 'The low-cost alternative' },
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

            <FAQSection
                faqs={faqs}
                title="Chioggia to Venice Marco Polo Airport: your questions"
                badge="Route FAQs"
            />

            {/* ── MAP: the destination airport, not a decorative route ── */}
            <section className="bg-white pb-4">
                <div className="container mx-auto px-6 max-w-5xl pt-16">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-2">
                        Venice Marco Polo Airport on the map
                    </h2>
                    <p className="text-sm text-gray-500 mb-2">
                        The destination: the airport sits on the mainland at the northern edge of the lagoon, reached by
                        road from Chioggia.
                    </p>
                </div>
                <MapEmbed query="Venice Marco Polo Airport" title="Map of Venice Marco Polo Airport (VCE)" />
            </section>

            {/* ── FINAL CTA ───────────────────────────────────── */}
            <section className="py-20 bg-navy">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <p className="text-gold text-sm font-bold uppercase tracking-[0.3em] mb-4">Chioggia &rarr; Venice Marco Polo</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
                        Get a price for your airport transfer
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-9">
                        One car, door to door, from Chioggia or Sottomarina to the terminal, with the pickup planned around
                        your flight. Send your details and we will quote the journey before you commit to anything.
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
