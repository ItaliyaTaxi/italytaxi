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
const SLUG = '/cortina-dampezzo-to-treviso-airport';
const HERO_IMAGE = '/images/photo-1464822759023-fed622ff2c3b.webp';
const HERO_ALT = 'Mountain scenery in the Dolomites, the region served by transfers from Cortina d’Ampezzo';

// This page is the kept direction of its pair, so canonicalPath() returns the
// page itself. Calling it keeps the page in lockstep with the approved
// direction-canonical configuration instead of hardcoding a self-canonical.
const CANONICAL = canonicalPath(SLUG);

export const metadata: Metadata = {
    title: { absolute: 'Cortina d’Ampezzo Airport Transfers: Treviso (TSF)' },
    description:
        'Private transfer from Cortina d’Ampezzo to Treviso Airport (TSF), about 130 km — plus how Treviso, Venice and Verona compare for a Dolomites trip.',
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: 'Cortina d’Ampezzo to Treviso Airport Private Transfer',
        description:
            'A private car from Cortina d’Ampezzo to Treviso Airport (TSF), approximately 130 km, with a comparison of the three airports used for the Dolomites.',
        url: `${SITE}${SLUG}`,
        type: 'website',
        images: [{ url: `${SITE}${HERO_IMAGE}`, width: 1200, height: 630, alt: HERO_ALT }],
    },
};

const airports = [
    {
        code: 'TSF',
        name: 'Treviso Airport',
        distance: 'Approximately 130 km',
        time: 'Around 1 h 50 min',
        primary: true,
        good: 'The closest of the three and the shortest drive. If your route is served from Treviso, it is the least time on the road.',
        caveat: 'It is a smaller airport. The choice of destinations and airlines is narrower, and some services are seasonal, so it may simply not fly where you need to go.',
    },
    {
        code: 'VCE',
        name: 'Venice Marco Polo Airport',
        distance: 'Approximately 160 km',
        time: 'Around 2 h 15 min',
        primary: false,
        good: 'The main airport for the region, with far more destinations, long-haul routes and connecting options. Usually the realistic choice for intercontinental or connecting itineraries.',
        caveat: 'Around 25 to 30 minutes further than Treviso, which on an early departure means a correspondingly earlier pickup.',
    },
    {
        code: 'VRN',
        name: 'Verona Villafranca Airport',
        distance: 'Approximately 265 km',
        time: 'Around 3 hours',
        primary: false,
        good: 'Occasionally the right answer if a specific flight only works from Verona, or if the trip also takes in Lake Garda or the western Veneto.',
        caveat: 'Roughly double the distance to Treviso. Rarely worth it from Cortina unless your flight or your wider itinerary makes the case.',
    },
];

const journeyLegs = [
    {
        h: 'Out of the Ampezzo valley',
        p: 'Cortina sits high in the Ampezzo valley in the province of Belluno. The first stretch descends through the valley on mountain road — the slowest part of the route, and the part most affected by weather.',
    },
    {
        h: 'South through Cadore towards Belluno',
        p: 'The road follows the valley south towards Belluno, still two-lane for much of the way, through villages and over gradients. Average speeds stay modest even in clear conditions.',
    },
    {
        h: 'Onto the plain and across to Treviso',
        p: 'From the Belluno area the route picks up the motorway and crosses onto the Venetian plain to the airport on the edge of Treviso. This is the quick part, and roughly where the drive stops feeling alpine.',
    },
];

const pickupPoints = [
    'Your hotel, apartment or chalet address in or around Cortina.',
    'A meeting point agreed in advance where a vehicle can legally stop and wait.',
    'The Piazza Roma area in Cortina, if that is simpler than your accommodation.',
    'A mobile number that will be reachable on the morning of travel.',
];

const quoteChecklist = [
    'Your pickup address in or near Cortina.',
    'Which airport you are flying from — Treviso, Venice Marco Polo or Verona.',
    'The travel date, and a pickup time if you already have one in mind.',
    'Your flight number and its scheduled departure time.',
    'Number of passengers.',
    'Number of bags, plus any skis, boards or boot bags counted separately.',
    'Child seats needed, with the age of each child.',
];

const vehicles = [
    { h: 'Sedan', p: '1–3 passengers with normal luggage. Comfortable for a couple travelling light, tight once ski bags are involved.' },
    { h: 'Executive Sedan', p: 'The same capacity with more comfort for a long descent from the mountains.' },
    { h: 'Minivan', p: 'Up to 7 passengers with luggage — the usual choice for families and for ski equipment.' },
    { h: 'Mercedes V-Class', p: 'Premium group travel where space matters across a two-hour drive.' },
    { h: 'Luxury Van', p: 'VIP transfers for those who want the higher specification.' },
    { h: 'Group Minibus', p: 'Larger parties on request, keeping everyone in one vehicle.' },
];

const faqs = [
    {
        q: 'Which airport should I use for Cortina d’Ampezzo?',
        a: 'Three are used in practice. Treviso (TSF) is closest at roughly 130 km and around 1 h 50 min. Venice Marco Polo (VCE) is about 160 km and around 2 h 15 min, but is much larger and serves many more destinations. Verona (VRN) is roughly 265 km and around 3 hours. The sensible rule is to let your flight decide rather than the map: a shorter drive to an airport that does not fly your route is no saving at all.',
    },
    {
        q: 'How long is the transfer from Cortina d’Ampezzo to Treviso Airport?',
        a: 'Approximately 130 km and around 1 hour 50 minutes. Treat that as a planning estimate rather than a guarantee. The first half is mountain road through the Ampezzo and Cadore valleys and only the final stretch across the plain is motorway, so snow, roadworks or weekend traffic can all add to it.',
    },
    {
        q: 'Is Treviso closer to Cortina than Venice Marco Polo?',
        a: 'Yes, by roughly 30 km and about 25 minutes of driving. Whether that matters depends on your flight. Treviso is a smaller airport with a narrower, partly seasonal route network, so for many itineraries Venice Marco Polo is the only practical option despite the extra distance.',
    },
    {
        q: 'Can the driver collect me directly from my hotel in Cortina?',
        a: 'Yes, from any address a vehicle can legally reach and wait at. Send the full address when you book and the meeting point is confirmed in advance. Some mountain accommodation sits on private, narrow or seasonally unploughed access roads; where a vehicle cannot reach the door we agree the nearest workable point with you beforehand rather than on the morning. For hotel and address pickups the published complimentary waiting allowance is 15 minutes from the scheduled time.',
    },
    {
        q: 'Is there a train from Cortina d’Ampezzo to the airport?',
        a: 'No. Cortina has no railway station of its own. The nearest railheads are Calalzo-Pieve di Cadore, roughly 35 km down the valley, and Dobbiaco to the north, roughly 32 km away, and reaching either means a bus or car first, then a train, then a further connection to the airport. Rail is not a practical option for an airport departure from Cortina.',
    },
    {
        q: 'Is there a coach from Cortina to the airports?',
        a: 'Scheduled coach services run from the Piazza Roma bus station in Cortina towards the Venice-area airports, operated by ATVO and by Cortina Express. Which airports are served, and how often, varies by season, so check the operator directly for current routes, departure times and fares — we do not publish their timetables here because they change. The trade-off is control: a coach runs to its own schedule rather than to your flight.',
    },
    {
        q: 'How early should I leave Cortina for my flight?',
        a: 'Work backwards from your airline’s check-in and bag-drop deadline for your specific flight, then add the drive and a margin for conditions. We do not publish a single recommended buffer, because the deadline that governs is your airline’s and it varies by carrier, ticket and whether you are checking bags. Send your flight number and departure time and the pickup time is agreed with you against it before the day.',
    },
    {
        q: 'Does winter weather affect the transfer, and can I bring skis?',
        a: 'Winter conditions can affect timing, and on this route the mountain section is where delays happen, so a winter departure deserves a larger margin than the same flight in summer. Skis, boards and boot bags are carried, but they must be declared when you book: they take far more room than their weight suggests, and a sedan that seats three people will not take three sets of skis. Confirm the vehicle and any winter-equipment requirements with us at booking.',
    },
];

const cortinaCluster = [
    { href: '/cortina-dampezzo-to-venice-marco-polo-airport', label: 'Cortina d’Ampezzo to Venice Marco Polo Airport (VCE)' },
    { href: '/treviso-airport-to-cortina-dampezzo', label: 'Treviso Airport to Cortina d’Ampezzo (arrivals)' },
    { href: '/venice-marco-polo-airport-to-cortina-dampezzo', label: 'Venice Marco Polo Airport to Cortina d’Ampezzo' },
];

const dolomitesLinks = [
    { href: '/blog/cortina-dolomites-winter-transfers', label: 'Cortina and Dolomites winter transfers' },
    { href: '/attraction-transfer/dolomites-taxi-transfer', label: 'Dolomites taxi transfers' },
    { href: '/tour/dolomites', label: 'Private Dolomites tours' },
    { href: '/day-trips/venice-to-dolomites-day-trip', label: 'Venice to the Dolomites day trip' },
];

const serviceLinks = [
    { href: '/airport/treviso', label: 'Treviso Airport transfers' },
    { href: '/airport/venice', label: 'Venice Marco Polo Airport transfers' },
    { href: '/services/airport-transfers', label: 'Airport transfer service' },
    { href: '/services/city-to-city', label: 'City-to-city transfers' },
];

export default function CortinaToTrevisoAirportPage() {
    return (
        <main className="font-inter bg-white text-navy-rich">
            <ServiceSchema
                name="Cortina d&rsquo;Ampezzo to Treviso Airport Private Transfer"
                description="Private departure transfer by car from Cortina d'Ampezzo in the Dolomites to Treviso Airport (TSF). Approximately 130 km, around 1 hour 50 minutes, with the pickup time planned around your departing flight. Venice Marco Polo and Verona transfers also quoted on request."
                url={`${SITE}${SLUG}`}
                image={`${SITE}${HERO_IMAGE}`}
            />
            <Navbar />

            <PageHero
                titleTop="Cortina d&rsquo;Ampezzo"
                titleBottom="Airport Transfers"
                description="A private car from Cortina to Treviso Airport (TSF) &mdash; about 130 km and roughly 1 h 50 min down from the Dolomites. Not sure which airport you need? The comparison below covers Treviso, Venice Marco Polo and Verona."
                backgroundImage={HERO_IMAGE}
                buttonText="Request a Quotation"
                buttonLink="#quote"
                breadcrumbs={[
                    { name: 'Veneto Transfers', item: '/services/airport-transfers' },
                    { name: 'Cortina to Treviso Airport', item: SLUG },
                ]}
            />

            {/* THE DIFFERENTIATOR: airport selection, which is what most visitors actually arrive asking */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Choosing an Airport</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-5 max-w-3xl leading-tight">
                        Three airports serve Cortina. Which one depends on your flight, not the distance.
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mb-12">
                        Most people planning a Dolomites trip search for a Cortina airport transfer before they have settled on an airport. Here is the honest comparison, with distances and drive times measured from Cortina. All figures are approximate planning estimates, not guaranteed journey times.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {airports.map((a) => (
                            <div
                                key={a.code}
                                className={
                                    a.primary
                                        ? 'rounded-[2rem] p-8 bg-navy text-white shadow-2xl'
                                        : 'rounded-[2rem] p-8 bg-[#F8F9FA] border border-gray-200'
                                }
                            >
                                <div className="flex items-baseline justify-between mb-1">
                                    <span className={`text-3xl font-bold ${a.primary ? 'text-gold' : 'text-navy'}`}>{a.code}</span>
                                    {a.primary && (
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-gold/80 border border-gold/40 rounded-full px-2 py-1">
                                            This page
                                        </span>
                                    )}
                                </div>
                                <h3 className={`font-bold mb-5 ${a.primary ? 'text-white' : 'text-navy'}`}>{a.name}</h3>
                                <dl className={`text-sm space-y-1 mb-5 pb-5 border-b ${a.primary ? 'border-white/15' : 'border-gray-200'}`}>
                                    <div className="flex justify-between gap-3">
                                        <dt className={a.primary ? 'text-gray-400' : 'text-gray-500'}>Distance</dt>
                                        <dd className={`font-medium text-right ${a.primary ? 'text-white' : 'text-navy'}`}>{a.distance}</dd>
                                    </div>
                                    <div className="flex justify-between gap-3">
                                        <dt className={a.primary ? 'text-gray-400' : 'text-gray-500'}>Typical drive</dt>
                                        <dd className={`font-medium text-right ${a.primary ? 'text-white' : 'text-navy'}`}>{a.time}</dd>
                                    </div>
                                </dl>
                                <p className={`text-sm leading-relaxed mb-4 ${a.primary ? 'text-gray-300' : 'text-gray-700'}`}>
                                    {a.good}
                                </p>
                                <p className={`text-sm leading-relaxed ${a.primary ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {a.caveat}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 border-l-4 border-gold bg-[#FDFBF6] rounded-r-2xl p-8">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            <strong className="text-navy">The short version:</strong> let the flight decide. A 1 h 50 min drive to an airport that does not fly your route is no saving on a 2 h 15 min drive to one that does. Treviso wins on distance; Venice Marco Polo wins on choice; Verona only makes sense for particular flights or a wider itinerary.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            This page covers the <strong className="text-navy">Cortina to Treviso Airport</strong> transfer. We also quote{' '}
                            <Link href="/cortina-dampezzo-to-venice-marco-polo-airport" className="text-gold font-semibold hover:underline">
                                Cortina to Venice Marco Polo
                            </Link>
                            , and Verona on request — whichever you need, the quotation works the same way.
                        </p>
                        <Link
                            href="#quote"
                            className="inline-flex items-center gap-1 mt-5 text-gold hover:text-navy font-bold tracking-widest uppercase text-sm border-b-2 border-gold/30 hover:border-navy transition-all pb-1"
                        >
                            Request your transfer quotation <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* The road journey */}
            <section className="py-20 bg-navy">
                <div className="container mx-auto px-6 max-w-5xl">
                    <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">The Drive to TSF</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-2xl leading-tight">
                        Why 130 km takes nearly two hours
                    </h2>
                    <p className="text-gray-400 leading-relaxed max-w-2xl mb-12">
                        Most of this route is not motorway. It changes character three times, and only the last stretch is quick.
                    </p>
                    <div className="space-y-8">
                        {journeyLegs.map((leg, i) => (
                            <div key={i} className="flex gap-6 md:gap-10">
                                <span className="text-4xl font-serif italic text-gold/40 shrink-0 w-10">{i + 1}</span>
                                <div className="border-b border-white/10 pb-8 flex-1">
                                    <h3 className="text-white font-bold text-lg mb-2">{leg.h}</h3>
                                    <p className="text-gray-400 leading-relaxed">{leg.p}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Departure planning */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="flex items-center gap-2 mb-5">
                        <Plane className="w-5 h-5 text-gold" />
                        <h2 className="text-3xl font-bold text-navy">Planning a departure from the Dolomites</h2>
                    </div>
                    <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                        <p>
                            The most useful thing you can send us is your flight number and its scheduled departure time. The pickup time is calculated backwards from your flight rather than forwards from your morning.
                        </p>
                        <p>
                            The order to think in is: your airline&rsquo;s check-in and bag-drop deadline for that flight, then security and walking time at the terminal, then the drive, then a margin for conditions. We deliberately do not publish one recommended buffer for this route, because the deadline that governs is your airline&rsquo;s, and it varies by carrier, by ticket type and by whether you are checking bags.
                        </p>
                        <p>
                            What is specific to leaving Cortina is that the slow part comes first. The mountain section is at the start of the day, when you know least about how the rest of it will go, so a margin that feels generous in the valley can look thin by Belluno. An early February flight deserves more room than an afternoon one in July.
                        </p>
                        <p className="font-medium text-navy">
                            Send the flight details with your enquiry and the pickup time is agreed in writing before the day, not estimated on the morning.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pickup */}
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
                                    Mountain accommodation is not always reachable by car. Some chalets and rifugi sit on private tracks, unpaved approaches or roads that go unploughed in winter, and a transfer vehicle is not a 4x4 service.
                                </p>
                                <p>
                                    We would rather say so in advance than send a car that cannot reach you. Where that applies we agree the nearest point a vehicle can safely reach and wait, and you cover the last stretch.
                                </p>
                                <p className="text-gray-500 text-sm">
                                    For hotel and address pickups the published complimentary waiting allowance is 15 minutes from the scheduled time, so a confirmed, reachable meeting point is worth getting right.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Public transport and rail */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-8">Public transport and rail connections</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-navy mb-3">There is no railway station in Cortina</h3>
                            <p className="text-gray-700 leading-relaxed">
                                This is the single most common planning mistake on this route. Cortina d&rsquo;Ampezzo has no station of its own. The nearest railheads are Calalzo-Pieve di Cadore, roughly 35 km down the valley, and Dobbiaco to the north, roughly 32 km away. Reaching either involves a bus or car first, then a train, then a further connection to the airport, which makes rail a three-change journey rather than an alternative.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-navy mb-3">Scheduled coaches</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Coach services run from the Piazza Roma bus station in Cortina towards the Venice-area airports, operated by ATVO and by Cortina Express. Which airports are served and how frequently varies by season, so check the operator directly for current routes, times and fares — we do not publish their timetables or prices here because they change.
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-3">
                                The trade-off is control rather than comfort. A coach runs to its own schedule and departs from the bus station rather than your accommodation, so on a departure day you fit the flight around the timetable. With one bag and a midday flight that is perfectly sensible. With skis, small children or an early departure it is a different proposition.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-navy mb-3">Driving yourself</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Workable, with the usual departure-day costs: the hire car has to be returned at the airport to someone else&rsquo;s deadline, and the mountain section gets driven at the start of the day rather than slept through.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Winter */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="border-l-4 border-gold bg-[#FDFBF6] rounded-r-2xl p-8 md:p-10">
                        <div className="flex items-center gap-2 mb-5">
                            <Snowflake className="w-5 h-5 text-gold" />
                            <h2 className="text-2xl font-bold text-navy">Winter travel and mountain roads</h2>
                        </div>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Cortina is a winter resort, so a large share of these transfers happen in snow season. Snow, ice, low cloud and short daylight are ordinary conditions in the Dolomites from late autumn into spring, and the mountain part of this route is where they tell.
                            </p>
                            <p>
                                The practical consequence is about time rather than drama: a winter departure deserves a bigger margin than the same flight in summer, and that margin is worth agreeing when you book rather than improvising on the day.
                            </p>
                            <p className="font-medium text-navy">
                                On equipment we would rather be exact than reassuring. Confirm winter tyre or chain requirements and the vehicle for your date with us at booking. We make no claim here that every vehicle carries particular winter equipment as standard, because that depends on the vehicle and the date.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vehicles */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold text-navy mb-4">Vehicles, luggage and ski equipment</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl">
                        On a ski route the vehicle is chosen by the equipment rather than the headcount. Count ski and boot bags separately from the suitcases when you enquire.
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
                        Child seats are available free of charge on request &mdash; ask when you book and give the age of each child, since that determines the restraint required. Larger parties are quoted on request.
                    </p>
                </div>
            </section>

            {/* Quotation checklist */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-4">How to request a quotation</h2>
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
                        Your price is a fixed, all-inclusive quotation confirmed before you travel, and nothing is added at the end of the journey without your prior agreement. A surcharge can apply on Italian public holidays, on journeys starting between 22:00 and 06:00, and on 24-26 December, 31 December and 1 January; where one applies it appears in the quotation. Cancellation is free with more than 24 hours&rsquo; notice, and amendments are accepted free of charge more than 24 hours ahead, subject to availability. We recommend booking at least 24 hours in advance, and earlier in peak ski weeks. Drivers are professionally licensed under Italian NCC regulations and are English-speaking.
                    </p>
                </div>
            </section>

            {/* Map — the shared component pointed at this route rather than its default */}
            <section className="bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-2xl font-bold text-navy mb-2">Cortina d&rsquo;Ampezzo to Treviso Airport &mdash; route map</h2>
                    <p className="text-gray-600 text-sm">Approximate road route between Cortina and Treviso Airport.</p>
                </div>
                <MapEmbed
                    query="Cortina d'Ampezzo to Treviso Airport"
                    title="Map of the road route from Cortina d'Ampezzo to Treviso Airport"
                />
            </section>

            {/* Quote form */}
            <section id="quote" className="py-20 bg-white scroll-mt-8">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Request a Cortina Airport Transfer Quote</h2>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                            Send your pickup address in Cortina, your travel date and your flight details, and we will come back with a fixed price and a proposed pickup time. Tell us which airport you are flying from &mdash; Treviso, Venice Marco Polo or Verona.
                        </p>
                    </div>
                    <div className="bg-[#0F1C2E] p-8 md:p-10 rounded-[2rem] shadow-2xl">
                        <BookingForm sourceName="Cortina to Treviso Airport Page" />
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

            <FAQSection faqs={faqs} title="Cortina d&rsquo;Ampezzo Airport Transfers &mdash; FAQ" />

            {/* About Cortina — short, factual, Olympics in the past */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-8">About Cortina d&rsquo;Ampezzo</h2>
                    <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                        <p>
                            Cortina d&rsquo;Ampezzo is the best-known resort in the Italian Dolomites, in the province of Belluno, set in a high valley beneath the Tofane, Cristallo and Faloria peaks. It was a host venue of the Milano-Cortina 2026 Winter Olympics, held in February 2026.
                        </p>
                        <p>
                            Its one practical drawback is transport. There is no railway station, the valley roads are mountain roads, and the nearest airport is still the best part of two hours away. That is why getting from Cortina to a flight is a planning exercise rather than a short hop, and why it is worth settling the airport before the car.
                        </p>
                    </div>
                </div>
            </section>

            {/* Internal links */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-2xl font-bold text-navy mb-12 text-center">Related Cortina and Dolomites transfers</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { h: 'Other Cortina airport routes', links: cortinaCluster },
                            { h: 'Dolomites travel', links: dolomitesLinks },
                            { h: 'Airports & services', links: serviceLinks },
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
