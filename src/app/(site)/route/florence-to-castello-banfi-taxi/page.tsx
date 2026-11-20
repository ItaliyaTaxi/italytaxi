import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ServiceSchema from '@/components/ServiceSchema';
import BookingForm from '@/components/BookingForm';
import FAQSection from '@/components/FAQSection';
import { MapPin, Clock, ChevronRight, MessageCircle, CheckCircle, AlertCircle, Wine, Car } from 'lucide-react';

const HERO_IMAGE = '/images/Tuscany Wine.webp';
const CANONICAL = '/route/florence-to-castello-banfi-taxi';
const HERO_ALT = 'Vineyards in the Montalcino wine country of southern Tuscany, the setting for Castello Banfi';

export const metadata: Metadata = {
    // Absolute: the line is already at its useful length, so skip the root
    // layout's "%s | Italy Taxi Service" template, which pushed it to 69 chars.
    title: { absolute: 'Florence to Castello Banfi: Private Driver' },
    description:
        'Private driver from Florence to Castello Banfi near Montalcino - roughly 150 km through southern Tuscany, so you can taste Brunello without driving back.',
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: 'Florence to Castello Banfi: Private Driver',
        description:
            'A private car from Florence to the Castello Banfi estate at Poggio alle Mura, in the Montalcino wine country of southern Tuscany.',
        images: [{ url: HERO_IMAGE, alt: HERO_ALT }],
    },
};

const stages = [
    {
        n: '01',
        h: 'Out of Florence',
        p: 'We collect you from your hotel, apartment or another agreed address. Much of the historic centre sits inside the ZTL limited traffic zone, so the exact spot a car can legally wait is agreed with you beforehand.',
    },
    {
        n: '02',
        h: 'South through Tuscany',
        p: 'The drive runs south past Siena and on into the Crete Senesi and the Val d’Orcia, a UNESCO World Heritage landscape of ridgelines, cypress avenues and farmhouses.',
    },
    {
        n: '03',
        h: 'Into the Montalcino hills',
        p: 'The last stretch leaves the main roads for the hills around Montalcino, where the estate sits among its own vineyards. These are narrow rural lanes rather than fast roads.',
    },
];

const whyDriver = [
    'You can taste what is poured without counting glasses or nominating a driver.',
    'No hire car, no rural parking, no unfamiliar lanes at the end of a long lunch.',
    'One vehicle for your party for the whole journey, with no changes en route.',
    'Your bags, coats and any cases of wine you buy stay in the car.',
    'The day is planned around your estate booking rather than a bus or train timetable.',
];

const drivingYourself = [
    'A hire car must be collected, fuelled, parked and returned.',
    'Montalcino is well beyond the reach of a simple train or bus day trip.',
    'Someone in your group has to stay under the limit all day.',
    'Rural signage and narrow approach lanes are harder after a tasting.',
];

const quoteChecklist = [
    'Your pickup address in Florence - hotel, apartment or another location.',
    'The date, and the time you would like to leave Florence.',
    'Your confirmed estate booking time, if you already have one.',
    'Number of passengers, and how many bags you are bringing.',
    'Whether you want the return leg to Florence included.',
    'Any stop you are considering, such as Montalcino town or a Val d’Orcia viewpoint.',
    'Whether you need a child seat, and the age of the child.',
];

const faqs = [
    {
        q: 'How long does the drive from Florence to Castello Banfi take?',
        a: 'The estate is roughly 150 km south of Florence and the transfer is quoted at about two hours and five minutes each way. Treat that as a planning estimate rather than a guarantee: the final approach is on rural roads, and traffic leaving Florence can add to it. Most guests plan the visit as a full day rather than a half day.',
    },
    {
        q: 'Can you collect us from a hotel inside the historic centre of Florence?',
        a: 'Yes, from any address a vehicle can reach. Much of the centre lies inside the ZTL limited traffic zone, which restricts where a car may drive and wait, so we agree the precise pickup point with you in advance rather than on the morning. Give us the full address when you request your quotation. For a hotel or address pickup, the published complimentary waiting allowance is 15 minutes from the scheduled time.',
    },
    {
        q: 'Is the return journey to Florence included?',
        a: 'Only if you ask for it. This page covers the journey out to the estate; a return leg can be arranged as part of the same booking, and when it is, it appears in your quotation alongside the outbound leg. We do not treat a round trip as automatic, because some guests stay in the area overnight or continue to Siena or Rome instead.',
    },
    {
        q: 'Will the driver wait while we are at the estate?',
        a: 'Waiting during your visit can be arranged, but it is not automatically included. Under our published terms, waiting beyond the complimentary allowance is set out in your quotation and agreed with you in advance - it is never added afterwards. Tell us roughly how long you expect to be at the estate and it will be quoted accordingly.',
    },
    {
        q: 'Do you book our tasting or tour at Castello Banfi?',
        a: 'No. Tastings, tours, the museum and the restaurants are run by the estate, not by us, and its hours change with the season - parts of the property close over the winter months. Arrange your visit directly with Banfi, then send us the confirmed time and we will plan the transfer around it.',
    },
    {
        q: 'Can we add Montalcino town or the Val d’Orcia to the day?',
        a: 'Yes, as an agreed itinerary rather than an open-ended tour. Montalcino town and the Val d’Orcia are both close to the estate and are a natural addition for guests who want more than a single stop. Any extra stop affects the time involved, so mention it when you ask for a quotation and it will be priced and planned in.',
    },
    {
        q: 'What vehicle will we have, and how is the price set?',
        a: 'A sedan suits a couple, a minivan or Mercedes V-Class a family or small group with luggage, and a minibus a larger party travelling together. Your price is a fixed quotation confirmed before you travel, based on the route, the date and time, the passenger and luggage details and any waiting or stops you have asked for. Cancellation is free with more than 24 hours’ notice before pickup.',
    },
];

const wineCountryRoutes = [
    { href: '/route/florence-to-brunello-di-montalcino-taxi', label: 'Florence to Brunello di Montalcino' },
    { href: '/route/florence-to-val-d-orcia-taxi', label: 'Florence to the Val d’Orcia' },
    { href: '/route/florence-to-chianti-wine-region-taxi', label: 'Florence to the Chianti wine region' },
    { href: '/route/florence-to-siena-taxi', label: 'Florence to Siena' },
];

const planningLinks = [
    { href: '/blog/tuscany-wine-tour-without-a-car-private-driver', label: 'Touring Tuscan wine country without a car' },
    { href: '/tour/tuscany-wine-tour', label: 'Private Tuscany wine tour' },
    { href: '/day-trips/florence-to-chianti-wine-tour', label: 'Florence to Chianti day trip' },
    { href: '/services/private-tours', label: 'Private sightseeing tours' },
];

const serviceLinks = [
    { href: '/city/florence', label: 'Florence taxi service' },
    { href: '/city/siena', label: 'Siena taxi service' },
    { href: '/services/city-to-city', label: 'City-to-city transfers' },
    { href: '/services/hourly-taxi', label: 'Hourly taxi hire' },
];

const arrangements = [
    {
        t: 'The return journey',
        d: 'A return leg to Florence can be included in the same booking. It is not automatic - some guests stay nearby, or carry on to Siena, Rome or an airport instead - so tell us which you want and it is quoted with the outbound leg.',
    },
    {
        t: 'Waiting during your visit',
        d: 'Waiting while you are at the estate can be arranged. Under our published terms, waiting beyond the complimentary allowance is set out in your quotation and agreed with you in advance, and is never charged at the end of the journey without your agreement.',
    },
    {
        t: 'Added stops',
        d: 'Montalcino town, a Val d’Orcia viewpoint or a second estate can be built into an agreed itinerary. Each affects the time the day takes, so each is priced into the quotation rather than added on the road.',
    },
    {
        t: 'Changes and cancellation',
        d: 'Amendments to the date, time or vehicle are accepted free of charge more than 24 hours before the scheduled pickup, subject to availability, and cancellation is free with more than 24 hours’ notice.',
    },
];

const vehicles = [
    { h: 'Sedan', p: 'A couple or a solo traveller with normal luggage.' },
    { h: 'Minivan', p: 'A family or small group, with room for bags and purchases.' },
    { h: 'Mercedes V-Class', p: 'More space and comfort for a small group on a long day.' },
    { h: 'Minibus', p: 'A larger party who want to travel together in one vehicle.' },
];

export default function FlorenceToCastelloBanfiTaxiPage() {
    return (
        <main className="font-inter bg-white text-navy-rich">
            <ServiceSchema
                name="Florence to Castello Banfi Private Transfer"
                description="Private car with driver from Florence to the Castello Banfi estate at Poggio alle Mura, near Montalcino in southern Tuscany. Approximately 150 km. Return leg and estate waiting arranged on request and set out in the quotation."
                url="https://www.italytaxiservice.com/route/florence-to-castello-banfi-taxi"
                image={HERO_IMAGE}
            />
            <Navbar />

            <PageHero
                titleTop="Florence to Castello Banfi"
                titleBottom="Private Driver"
                description="A private car from Florence to the Banfi estate at Poggio alle Mura, in the Brunello country south of Siena. Roughly 150 km each way, so the one thing you will not be doing is driving home afterwards."
                backgroundImage={HERO_IMAGE}
                buttonText="Request a Quotation"
                buttonLink="#quote"
                breadcrumbs={[
                    { name: 'Routes', item: '/services/city-to-city' },
                    { name: 'Florence to Castello Banfi', item: CANONICAL },
                ]}
            />

            {/* Three stages of the drive — a stepped band, deliberately not a stat-card grid */}
            <section className="py-20 bg-navy">
                <div className="container mx-auto px-6 max-w-6xl">
                    <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">The Drive</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-14 max-w-2xl leading-tight">
                        Three stages between the city and the estate
                    </h2>
                    <div className="grid md:grid-cols-3 gap-10 md:gap-8">
                        {stages.map((s) => (
                            <div key={s.n} className="md:pr-6 md:border-r md:border-white/10 md:last:border-r-0">
                                <span className="block text-5xl font-serif italic text-gold/40 mb-4">{s.n}</span>
                                <h3 className="text-white font-bold text-lg mb-3">{s.h}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{s.p}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-14 pt-8 border-t border-white/10 grid sm:grid-cols-3 gap-6 text-sm">
                        <p className="flex items-start gap-2 text-gray-300">
                            <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Approximately 150 km from central Florence
                        </p>
                        <p className="flex items-start gap-2 text-gray-300">
                            <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Quoted at around 2 h 05 min each way
                        </p>
                        <p className="flex items-start gap-2 text-gray-300">
                            <Car className="w-4 h-4 text-gold shrink-0 mt-0.5" /> One private vehicle, no changes en route
                        </p>
                    </div>
                </div>
            </section>

            {/* Where the estate actually is — editorial prose, narrow column */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">Where Castello Banfi actually is</h2>
                    <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                        <p>
                            The address is the Castle of Poggio alle Mura, in the comune of Montalcino, in the province of Siena. That matters more than it sounds, because &ldquo;Montalcino&rdquo; on a map is the hilltop town, and the estate is not in it. Banfi lies out in the countryside beyond the town, on the side of the Montalcino hills that falls away towards the Maremma.
                        </p>
                        <p>
                            It is the largest wine estate in Montalcino, built around a medieval castle that the Banfi family restored after acquiring the property in the 1980s. Brunello di Montalcino is what the name is known for. Alongside the cellars, the site today holds a hotel, two restaurants, an enoteca and a glass museum.
                        </p>
                        <p>
                            For a visitor the practical consequence is simple: this is a rural destination at the end of secondary roads, roughly 150 km from Florence, with no useful train and no realistic bus. Either someone in your group drives the whole way there and back, or someone else does the driving.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contrast pair — a comparison layout, distinct from the lists above */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Tasting Brunello, and getting home again</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-2xl">
                        A wine estate is one of the few destinations where the way you travel changes what you can actually do when you arrive.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-[2rem] p-8 border border-gold/30 shadow-sm">
                            <div className="flex items-center gap-2 mb-6">
                                <Wine className="w-5 h-5 text-gold" />
                                <h3 className="text-xl font-bold text-navy">With a private driver</h3>
                            </div>
                            <ul className="space-y-3">
                                {whyDriver.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700">
                                        <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white rounded-[2rem] p-8 border border-gray-200">
                            <div className="flex items-center gap-2 mb-6">
                                <Car className="w-5 h-5 text-gray-400" />
                                <h3 className="text-xl font-bold text-navy">Driving yourself</h3>
                            </div>
                            <ul className="space-y-3">
                                {drivingYourself.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-600">
                                        <ChevronRight className="w-4 h-4 text-gray-400 shrink-0 mt-1" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-gray-500 text-sm mt-6 leading-relaxed">
                                Italy enforces strict drink-driving limits. Whoever drives is committing to staying within them for the whole day, which on a Brunello estate is a real constraint rather than a technicality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advisory panel — the one genuinely load-bearing planning warning */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="border-l-4 border-gold bg-[#FDFBF6] rounded-r-2xl p-8 md:p-10">
                        <div className="flex items-center gap-2 mb-5">
                            <AlertCircle className="w-5 h-5 text-gold" />
                            <h2 className="text-2xl font-bold text-navy">Book the estate before you book the car</h2>
                        </div>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Everything you would come here to do - a tasting, a tour, the glass museum, lunch or dinner - is run by the estate, not by us. We can get you there and back; we cannot get you a table or a tasting slot.
                            </p>
                            <p>
                                The part people underestimate is the season. The estate&rsquo;s restaurants, wine shop and hospitality office all run on seasonal hours, and parts of the property close over the winter. Its hospitality office keeps limited weekday hours and is closed on Sundays. An estate that is open in late September may not be open on the same weekday in January.
                            </p>
                            <p className="font-medium text-navy">
                                So the order that works is: confirm what you want to do directly with Banfi, then send us the confirmed date and time and we will build the transfer around it.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Return and waiting — honest, quotation-based */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-8">The return leg, and waiting at the estate</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        This is worth being precise about, because a rural destination 150 km from the city is not somewhere to improvise a way home. Two things here are arranged on request rather than assumed, and both are confirmed before you travel.
                    </p>
                    <div className="mt-10 divide-y divide-gray-200 border-t border-gray-200">
                        {arrangements.map((row, i) => (
                            <div key={i} className="py-6">
                                <h3 className="font-bold text-navy mb-2">{row.t}</h3>
                                <p className="text-gray-600 leading-relaxed">{row.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vehicles — compact inline treatment */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold text-navy mb-4">Choosing the vehicle</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl">
                        On a full-day journey into the hills, space matters more than it does on a short airport run - and most guests come back with more than they left with.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {vehicles.map((v, i) => (
                            <div key={i} className="border-t-2 border-gold pt-5">
                                <h3 className="font-bold text-navy mb-2">{v.h}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{v.p}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-gray-500 text-sm mt-10 leading-relaxed max-w-2xl">
                        Tell us the passenger and luggage count and the suitable options will be quoted. Child seats are available free of charge on request - ask when you book and give the age of the child, since that determines the restraint required.
                    </p>
                </div>
            </section>

            {/* What to send — ordered list with a rule, distinct from a numbered step grid */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-4">What to send when you ask for a quotation</h2>
                    <p className="text-gray-600 leading-relaxed mb-10">
                        A quotation request is not yet a booking. Send these and you should get a usable price first time, rather than a round of questions.
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
                        We recommend booking at least 24 hours ahead. A surcharge can apply on Italian public holidays, on journeys starting between 22:00 and 06:00, and on 24-26 December, 31 December and 1 January; where one applies it is shown in your quotation rather than afterwards.
                    </p>
                </div>
            </section>

            {/* Quote form */}
            <section id="quote" className="py-20 bg-white scroll-mt-8">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Request a Castello Banfi Transfer Quote</h2>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                            Tell us where you are staying in Florence, when you would like to travel, and whether you want the return leg and waiting time included. We will review the journey and send you a quotation.
                        </p>
                    </div>
                    <div className="bg-[#0F1C2E] p-8 md:p-10 rounded-[2rem] shadow-2xl">
                        <BookingForm sourceName="Florence to Castello Banfi Route Page" />
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

            <FAQSection faqs={faqs} title="Florence to Castello Banfi - FAQ" />

            {/* Internal links grouped by intent, rather than one flat card grid */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-2xl font-bold text-navy mb-12 text-center">Planning a Tuscan wine trip</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { h: 'Other wine-country routes', links: wineCountryRoutes },
                            { h: 'Planning and tours', links: planningLinks },
                            { h: 'Transfer services', links: serviceLinks },
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
