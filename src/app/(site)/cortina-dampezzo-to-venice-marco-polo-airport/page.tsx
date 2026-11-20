import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ServiceSchema from '@/components/ServiceSchema';
import BookingForm from '@/components/BookingForm';
import FAQSection from '@/components/FAQSection';
import MapEmbed from '@/components/MapEmbed';
import { canonicalPath } from '@/lib/direction-canonicals';
import { MapPin, ChevronRight, MessageCircle, CheckCircle, AlertCircle, Snowflake, Car, Plane } from 'lucide-react';

const SITE = 'https://www.italytaxiservice.com';
const SLUG = '/cortina-dampezzo-to-venice-marco-polo-airport';
const HERO_IMAGE = '/images/photo-1464822759023-fed622ff2c3b.webp';
const HERO_ALT = 'Mountain scenery in the Dolomites, the setting for Cortina d’Ampezzo';

// The canonical for this arrival/departure pair is decided centrally in
// direction-canonicals.ts (the approved 289-pair consolidation). Importing it
// keeps this page in lockstep with that decision instead of restating it.
const CANONICAL = canonicalPath(SLUG);

export const metadata: Metadata = {
    title: { absolute: 'Cortina d’Ampezzo to Venice Airport (VCE) Transfer' },
    description:
        'Private transfer from Cortina d’Ampezzo to Venice Marco Polo Airport (VCE) — about 160 km down from the Dolomites, timed to your departing flight.',
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: 'Cortina d’Ampezzo to Venice Marco Polo Airport Transfer',
        description:
            'A private car from Cortina d’Ampezzo in the Dolomites to Venice Marco Polo Airport (VCE), about 160 km, with the pickup time planned around your flight.',
        url: `${SITE}${SLUG}`,
        type: 'website',
        images: [{ url: `${SITE}${HERO_IMAGE}`, width: 1200, height: 630, alt: HERO_ALT }],
    },
};

const snapshot = [
    { label: 'From', value: 'Cortina d’Ampezzo — hotel, apartment, chalet or another agreed address' },
    { label: 'To', value: 'Venice Marco Polo Airport (VCE), departures' },
    { label: 'Direction', value: 'Mountains to airport — a departure transfer, timed to your flight' },
    { label: 'Distance', value: 'Approximately 160 km' },
    { label: 'Typical drive', value: 'Around 2 h 15 min, longer in winter or heavy traffic' },
    { label: 'Rail option', value: 'None direct — Cortina has no railway station' },
];

const journeyLegs = [
    {
        n: '01',
        h: 'Down the Ampezzo valley',
        p: 'Cortina sits high in the Ampezzo valley in the province of Belluno, ringed by the Tofane, Cristallo and Faloria massifs. The first part of the drive descends from the resort through the valley, and it is the slowest section of the route — mountain road rather than open highway.',
    },
    {
        n: '02',
        h: 'South through Cadore to Belluno',
        p: 'The road continues south through the Cadore valley, following the Piave towards Belluno. Still two-lane for much of the way, with villages, gradients and bends, so average speeds stay modest even in clear conditions.',
    },
    {
        n: '03',
        h: 'Across the plain to the airport',
        p: 'From the Belluno area the route joins the A27 motorway and runs down to the Venetian plain, reaching Venice Marco Polo on the mainland at the northern edge of the lagoon. This is the fastest stretch, and the point where the journey stops feeling alpine.',
    },
];

const pickupPoints = [
    'Your hotel, apartment or chalet address in or around Cortina.',
    'A meeting point agreed in advance where a vehicle can legally stop and wait.',
    'Cortina’s Piazza Roma area, if that is simpler than your accommodation.',
    'A mobile number that will be reachable on the morning of travel.',
];

const quoteChecklist = [
    'Your pickup address in or near Cortina.',
    'The travel date, and the pickup time if you already have one in mind.',
    'Your flight number and its scheduled departure time from VCE.',
    'Number of passengers travelling.',
    'Number of bags, plus any skis, boards or boot bags.',
    'Child seats needed, with the age of each child.',
    'Anything else that affects the vehicle — a wheelchair, oversized equipment, a pet.',
];

const vehicles = [
    { h: 'Sedan', p: '1–3 passengers with normal luggage. Fine for a couple travelling light, tight with ski bags.' },
    { h: 'Executive Sedan', p: 'The same capacity with more comfort for a long mountain descent.' },
    { h: 'Minivan', p: 'Up to 7 passengers with luggage — the usual choice for families and for ski equipment.' },
    { h: 'Mercedes V-Class', p: 'Premium group travel where space matters over a two-hour-plus drive.' },
    { h: 'Luxury Van', p: 'VIP transfers for those who want the higher specification.' },
    { h: 'Group Minibus', p: 'Larger parties on request, keeping everyone in one vehicle.' },
];

const faqs = [
    {
        q: 'How long does the transfer from Cortina d’Ampezzo to Venice Marco Polo Airport take?',
        a: 'Around 2 hours 15 minutes for roughly 160 km. That is a planning estimate rather than a guarantee: the first half is mountain road through the Ampezzo and Cadore valleys, and only the final stretch across the Venetian plain is motorway. Snow, roadworks or summer weekend traffic can all add to it.',
    },
    {
        q: 'How early should I leave Cortina for my flight?',
        a: 'Work backwards from your airline’s check-in and bag-drop deadline for your specific flight, then add the drive and a margin for conditions. We do not publish a single recommended buffer, because the deadline varies by airline, ticket and whether you are checking bags. Send us your flight number and departure time and the pickup time is agreed with you against it.',
    },
    {
        q: 'Can the driver collect me directly from my hotel in Cortina?',
        a: 'Yes, from any address a vehicle can legally reach and wait at. Give us the full address when you book and the meeting point is confirmed in advance. Some mountain accommodation sits on private, narrow or seasonally restricted access roads, so if a vehicle cannot reach your door we agree the nearest workable point with you rather than leaving it to the morning. For a hotel or address pickup, the published complimentary waiting allowance is 15 minutes from the scheduled time.',
    },
    {
        q: 'Is there a direct train from Cortina to Venice Airport?',
        a: 'No. Cortina d’Ampezzo has no railway station at all. The nearest railheads are Calalzo-Pieve di Cadore, roughly 35 km away, and Dobbiaco to the north, roughly 32 km — and reaching either from Cortina means a bus or car first, then a train, then a further connection to the airport. Rail is not a direct option on this route in any practical sense.',
    },
    {
        q: 'Is there a bus or coach from Cortina to Venice Marco Polo Airport?',
        a: 'Yes. Scheduled coach services run between Cortina and the airport, operated by ATVO and by Cortina Express, departing from the Piazza Roma bus station in Cortina. They are timetabled and the service pattern varies by season, so check the operator directly for current departures and fares. Journey times are broadly comparable to the drive, but the coach runs to its schedule rather than to your flight.',
    },
    {
        q: 'Does winter weather affect the transfer?',
        a: 'It can, and on this route it matters more than on a short airport run. Snow, ice and low cloud are normal in the Dolomites in winter and the mountain section is where delays occur. In practice this means allowing a larger margin for a winter flight than a summer one. If you are travelling in winter, confirm the vehicle and any winter-equipment requirements with us when you book rather than assuming them.',
    },
    {
        q: 'Can I travel with skis, snowboards and large luggage?',
        a: 'Yes, provided you declare the equipment when you book so the right vehicle is assigned. Skis and board bags take up far more room than their weight suggests, and a sedan that seats three people comfortably will not take three sets of skis. Tell us the number of bags and the number of ski or boot bags separately and a minivan or larger vehicle is quoted where needed.',
    },
    {
        q: 'Is the price confirmed before departure, and can I cancel?',
        a: 'Your quotation is a fixed, all-inclusive price confirmed before you travel, and nothing is added at the end of the journey without your prior agreement. A surcharge can apply on Italian public holidays, on journeys starting between 22:00 and 06:00, and on 24-26 December, 31 December and 1 January; where one applies it appears in the quotation. Cancellation is free with more than 24 hours’ notice, and amendments are accepted free of charge more than 24 hours ahead, subject to availability.',
    },
];

const cortinaCluster = [
    { href: '/venice-marco-polo-airport-to-cortina-dampezzo', label: 'Venice Marco Polo Airport to Cortina d’Ampezzo (the arrival transfer)' },
    { href: '/cortina-dampezzo-to-treviso-airport', label: 'Cortina d’Ampezzo to Treviso Airport (TSF)' },
    { href: '/treviso-airport-to-cortina-dampezzo', label: 'Treviso Airport to Cortina d’Ampezzo' },
];

const dolomitesLinks = [
    { href: '/tour/dolomites', label: 'Private Dolomites tours' },
    { href: '/day-trips/venice-to-dolomites-day-trip', label: 'Venice to the Dolomites day trip' },
    { href: '/blog/cortina-dolomites-winter-transfers', label: 'Cortina and Dolomites winter transfers' },
];

const serviceLinks = [
    { href: '/airport/venice', label: 'Venice Marco Polo Airport transfers' },
    { href: '/city/venice', label: 'Venice taxi service' },
    { href: '/services/airport-transfers', label: 'Airport transfer service' },
    { href: '/services/city-to-city', label: 'City-to-city transfers' },
];

export default function CortinaToVeniceAirportPage() {
    return (
        <main className="font-inter bg-white text-navy-rich">
            <ServiceSchema
                name="Cortina d&rsquo;Ampezzo to Venice Marco Polo Airport Private Transfer"
                description="Private departure transfer by car from Cortina d'Ampezzo in the Dolomites to Venice Marco Polo Airport (VCE). Approximately 160 km, around 2 hours 15 minutes, with the pickup time planned around your departing flight."
                url={`${SITE}${SLUG}`}
                image={`${SITE}${HERO_IMAGE}`}
            />
            <Navbar />

            <PageHero
                titleTop="Cortina d&rsquo;Ampezzo to"
                titleBottom="Venice Marco Polo Airport"
                description="A private car from Cortina down to Venice Marco Polo (VCE) on departure day: about 160 km from the Dolomites to the edge of the lagoon, with one driver, one vehicle and a pickup time built around your flight."
                backgroundImage={HERO_IMAGE}
                buttonText="Request a Quotation"
                buttonLink="#quote"
                breadcrumbs={[
                    { name: 'Veneto Transfers', item: '/services/airport-transfers' },
                    { name: 'Cortina to Venice Airport', item: SLUG },
                ]}
            />

            {/* Route snapshot — a labelled ledger, answering the basics immediately for readers and answer engines */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Route Snapshot</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-10 max-w-2xl leading-tight">
                        Cortina to VCE, in the essentials
                    </h2>
                    <div className="grid md:grid-cols-2 gap-x-16 border-t border-gray-100">
                        {snapshot.map((row) => (
                            <div key={row.label} className="flex items-baseline justify-between gap-6 py-5 border-b border-gray-100">
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 shrink-0">{row.label}</span>
                                <span className="text-navy font-medium text-right">{row.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The journey — three legs on navy, a distinct band */}
            <section className="py-20 bg-navy">
                <div className="container mx-auto px-6 max-w-6xl">
                    <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">The Drive</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-2xl leading-tight">
                        From the Dolomites down to the lagoon
                    </h2>
                    <p className="text-gray-400 leading-relaxed max-w-2xl mb-14">
                        The reason 160 km takes over two hours is that most of it is not motorway. The route changes character three times, and only the last part is quick.
                    </p>
                    <div className="grid md:grid-cols-3 gap-10 md:gap-8">
                        {journeyLegs.map((leg) => (
                            <div key={leg.n} className="md:pr-6 md:border-r md:border-white/10 md:last:border-r-0">
                                <span className="block text-5xl font-serif italic text-gold/40 mb-4">{leg.n}</span>
                                <h3 className="text-white font-bold text-lg mb-3">{leg.h}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{leg.p}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Departure planning — the most useful section on the page */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="flex items-center gap-2 mb-5">
                        <Plane className="w-5 h-5 text-gold" />
                        <h2 className="text-3xl font-bold text-navy">Planning your airport departure</h2>
                    </div>
                    <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                        <p>
                            The single most useful thing you can send us is your flight number and its scheduled departure time. Everything else about the booking follows from it, because the pickup time is calculated backwards from your flight rather than forwards from your morning.
                        </p>
                        <p>
                            The order to think in is: your airline&rsquo;s check-in and bag-drop deadline for that specific flight, then security and walking time at the terminal, then the drive itself, then a margin for conditions. We deliberately do not publish one recommended buffer for this route, because the deadline that governs is your airline&rsquo;s, and it varies by carrier, by ticket type and by whether you are checking bags.
                        </p>
                        <p>
                            What is specific to this route is the shape of the risk. On a 20-minute city transfer a delay costs you minutes. Here, the slow mountain section comes first, when you have the least information about the rest of the day, so a margin that feels generous in Cortina can look thin by Belluno. An early-morning flight in February deserves more room than an afternoon flight in July.
                        </p>
                        <p className="font-medium text-navy">
                            Send the flight details with your enquiry and the pickup time is agreed with you in writing before the day, rather than estimated on the morning.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pickup in Cortina */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <div className="flex items-center gap-2 mb-5">
                                <MapPin className="w-5 h-5 text-gold" />
                                <h2 className="text-2xl font-bold text-navy">Where the driver collects you</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                We confirm the meeting point when you book, not on the morning. What we need from you:
                            </p>
                            <ul className="space-y-3">
                                {pickupPoints.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700">
                                        <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-5">
                                <AlertCircle className="w-5 h-5 text-gold" />
                                <h2 className="text-2xl font-bold text-navy">Where we may not be able to</h2>
                            </div>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    Mountain accommodation is not always reachable by car. Some chalets and rifugi sit on private tracks, unpaved approaches or roads that are closed or unploughed in winter, and a transfer vehicle is not a 4x4 service.
                                </p>
                                <p>
                                    We would rather tell you that in advance than send a car that cannot get to you. If your address is in that category, we agree the nearest point a vehicle can safely reach and wait, and you walk or shuttle the last stretch.
                                </p>
                                <p className="text-gray-500 text-sm">
                                    For hotel and address pickups the published complimentary waiting allowance is 15 minutes from the scheduled time, so a confirmed, reachable meeting point is worth getting right.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Alternatives — prose, route-accurate, no comparison table */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-8">How else you could get to VCE</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-navy mb-3">The coach</h3>
                            <p className="text-gray-700 leading-relaxed">
                                This is the real alternative on this route. Scheduled coach services link Cortina with Venice Marco Polo, operated by ATVO and by Cortina Express, leaving from the Piazza Roma bus station rather than from your accommodation. Journey times are broadly comparable to the drive. The service pattern changes with the season, so check the operator directly for current departures and fares — we do not publish their timetables or prices here, because they change.
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-3">
                                The trade-off is not comfort so much as control: a coach runs to its own schedule, and on a departure day you fit your flight around the timetable instead of the other way round. With one bag and a midday flight that is perfectly reasonable. With skis, small children or a 07:00 departure, it is a different proposition.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-navy mb-3">The train — why it does not really apply</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Cortina d&rsquo;Ampezzo has no railway station. The nearest railheads are Calalzo-Pieve di Cadore, roughly 35 km down the valley, and Dobbiaco to the north, roughly 32 km away. Reaching either involves a bus or car first, then a train, then a further connection to the airport on the far side. It is a three-change journey on a route where a coach already runs directly, which is why rail is not a sensible departure option from Cortina.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-navy mb-3">Driving yourself</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Workable, with the usual departure-day costs: the hire car has to be returned at the airport to someone else&rsquo;s deadline, and the mountain section has to be driven at the start of the day rather than slept through. In winter it also means taking responsibility for conditions on the descent.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Winter — honest about what is and is not promised */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="border-l-4 border-gold bg-[#FDFBF6] rounded-r-2xl p-8 md:p-10">
                        <div className="flex items-center gap-2 mb-5">
                            <Snowflake className="w-5 h-5 text-gold" />
                            <h2 className="text-2xl font-bold text-navy">Winter travel on this route</h2>
                        </div>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Cortina is a winter resort, so a large share of these transfers happen in snow season. Snow, ice, low cloud and short daylight are ordinary conditions in the Dolomites between late autumn and spring, and the mountain part of this route is where they bite.
                            </p>
                            <p>
                                The practical consequence is about time, not drama: a winter departure deserves a bigger margin than the same flight in summer, and that margin should be agreed when you book rather than improvised on the day.
                            </p>
                            <p className="font-medium text-navy">
                                On equipment, we would rather be exact than reassuring: confirm winter tyre or chain requirements and the vehicle for your date with us at booking. We do not claim here that every vehicle carries particular winter equipment as standard, because that depends on the vehicle and the date.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vehicles and skis */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold text-navy mb-4">Vehicles, luggage and ski equipment</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl">
                        On a ski route the vehicle is chosen by the equipment, not the headcount. Count the ski bags separately from the suitcases when you enquire.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {vehicles.map((v, i) => (
                            <div key={i} className="border-t-2 border-gold pt-5">
                                <h3 className="font-bold text-navy mb-2 flex items-center gap-2">
                                    <Car className="w-4 h-4 text-gold" /> {v.h}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{v.p}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-gray-500 text-sm mt-10 leading-relaxed max-w-2xl">
                        Child seats are available free of charge on request — ask when you book and give each child&rsquo;s age, since that determines the restraint required. Larger parties can be quoted on request.
                    </p>
                </div>
            </section>

            {/* What to send */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-4">Booking your Cortina to VCE transfer</h2>
                    <p className="text-gray-600 leading-relaxed mb-10">
                        A quotation request is not yet a booking. Send these and you should get a usable price and a proposed pickup time first time.
                    </p>
                    <ol className="space-y-5">
                        {quoteChecklist.map((item, i) => (
                            <li key={i} className="flex items-start gap-5 pl-5 border-l-2 border-gold/30">
                                <span className="text-gold font-serif italic text-2xl leading-none shrink-0 w-6">{i + 1}</span>
                                <span className="text-gray-700 leading-relaxed pt-1">{item}</span>
                            </li>
                        ))}
                    </ol>
                    <p className="text-gray-500 text-sm mt-10 leading-relaxed">
                        We recommend booking at least 24 hours ahead, and earlier in peak ski weeks. Once you accept the quotation the transfer is confirmed, with the pickup time and meeting point set out in writing. Drivers are professionally licensed under Italian NCC regulations and are English-speaking.
                    </p>
                </div>
            </section>

            {/* Map — the shared component, pointed at this route rather than its default */}
            <section className="bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-2xl font-bold text-navy mb-2">Cortina to Venice Marco Polo — route map</h2>
                    <p className="text-gray-600 text-sm">Approximate road route between Cortina d&rsquo;Ampezzo and the airport.</p>
                </div>
                <MapEmbed
                    query="Cortina d'Ampezzo to Venice Marco Polo Airport"
                    title="Map of the road route from Cortina d'Ampezzo to Venice Marco Polo Airport"
                />
            </section>

            {/* Quote form */}
            <section id="quote" className="py-20 bg-white scroll-mt-8">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Request a Cortina to Venice Airport Quote</h2>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                            Send your pickup address in Cortina, your travel date and your flight number, and we will come back with a fixed price and a proposed pickup time.
                        </p>
                    </div>
                    <div className="bg-[#0F1C2E] p-8 md:p-10 rounded-[2rem] shadow-2xl">
                        <BookingForm sourceName="Cortina to Venice Marco Polo Airport Page" />
                        <div className="mt-8 flex flex-col items-center gap-4">
                            <p className="text-gray-400 text-xs text-center">Prefer to ask a question first?</p>
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

            <FAQSection faqs={faqs} title="Cortina d&rsquo;Ampezzo to Venice Marco Polo Airport &mdash; FAQ" />

            {/* About Cortina — short, factual, past tense on the Olympics */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-8">About Cortina d&rsquo;Ampezzo</h2>
                    <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                        <p>
                            Cortina d&rsquo;Ampezzo is the best-known resort in the Italian Dolomites, in the province of Belluno, set in a high valley beneath the Tofane, Cristallo and Faloria peaks. It has the ski areas, the old town and the mountain access that bring most visitors, and it was a host venue of the Milano-Cortina 2026 Winter Olympics, held in February 2026.
                        </p>
                        <p>
                            Its one practical drawback is transport. There is no railway station, the valley roads are mountain roads, and the nearest major airports are two hours or more away. That is the whole reason this page exists: getting from Cortina to a flight is a planning exercise rather than a short hop.
                        </p>
                    </div>
                </div>
            </section>

            {/* Internal links grouped by intent */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-2xl font-bold text-navy mb-12 text-center">Related Cortina and Venice transfers</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { h: 'This route, other directions', links: cortinaCluster },
                            { h: 'Dolomites travel', links: dolomitesLinks },
                            { h: 'Venice airport & services', links: serviceLinks },
                        ].map((group) => (
                            <div key={group.h}>
                                <p className="text-gold text-xs font-bold uppercase tracking-[0.25em] mb-5">{group.h}</p>
                                <div className="space-y-1">
                                    {group.links.map((l, i) => (
                                        <Link
                                            key={i}
                                            href={l.href}
                                            className="flex items-start gap-2 py-2 text-gray-700 hover:text-gold transition-colors font-medium text-sm leading-snug"
                                        >
                                            <ChevronRight className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                                            {l.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-14">
                        <Link
                            href="/book-now"
                            className="inline-flex items-center text-gold hover:text-navy font-bold tracking-widest uppercase text-sm border-b-2 border-gold/30 hover:border-navy transition-all pb-1"
                        >
                            Book Your Transfer <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
