import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Plane, ChevronRight, Clock, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';
import { airports as airportData } from '@/lib/page-data';

import { Metadata } from 'next';

const SITE = 'https://www.italytaxiservice.com';

export const metadata: Metadata = {
    title: "Airports We Cover in Italy | Italian Taxi Service",
    description: "Private airport taxi transfers across all major Italian airports. Reliable, punctual, and comfortable rides with professional English-speaking drivers.",
    alternates: {
        canonical: "/airport",
    }
};

/** Journey time from each airport to the city it serves.
 *
 *  Every value here is already published elsewhere on this site — ten come from
 *  the `airportRichData` travelTimes on /airport/[slug], eight from the first
 *  entry of each airport's own `features` list, and Ciampino from its page
 *  description. Nothing is estimated: Ciampino publishes a distance but no
 *  journey time, so a distance is what this table shows for it. Keep it that
 *  way — if a figure is not published on the destination page, do not invent
 *  one here just to fill the column. */
const cityCentreTime: Record<string, string> = {
    'rome-fiumicino': '30–45 min',
    'rome-ciampino': '15 km from the centre',
    'milan-malpensa': '50–65 min',
    'milan-linate': 'under 20 min',
    'bergamo': '55–65 min to central Milan',
    'venice': '20–30 min to Piazzale Roma',
    'treviso': '~15 min to Treviso',
    'naples': '15–20 min',
    'florence': '15–20 min',
    'bologna-marconi': '15–20 min',
    'pisa': '10 min to the Leaning Tower',
    'verona': '20–25 min',
    'turin': '25 min',
    'genoa': '15 min',
    'bari': '15 min',
    'palermo': '35–40 min',
    'catania-fontanarossa': '~10 min',
    'olbia': '30–35 min to Porto Cervo',
    'cagliari': '~15 min',
};

const faqs = [
    {
        q: 'Which Italian airport should I fly into for the Amalfi Coast?',
        a: 'Naples International (NAP). It is the closest major airport to the coast, about 65 km from Positano, Amalfi and Ravello, roughly an hour and a half by road. Salerno has very limited scheduled flights, and Rome is a three-and-a-half to four hour transfer.',
    },
    {
        q: 'Which airport is closest to Lake Garda?',
        a: 'Verona Villafranca (VRN). The southern Garda towns — Peschiera, Lazise, Sirmione and Bardolino — are 25 to 30 km away, roughly half an hour. Venice and Bergamo also serve the lake but are considerably further from the southern basin.',
    },
    {
        q: 'Which Milan airport is best for Lake Como?',
        a: 'Malpensa (MXP). It sits north-west of Milan, so the transfer never has to cross the city. Linate and Bergamo are both served but lie on the far side of Milan from the lake, which adds time in traffic.',
    },
    {
        q: 'How do I find my driver at an Italian airport?',
        a: 'Your driver waits in the arrivals hall after baggage reclaim, holding a sign with your name. You receive their contact details before you land, so you can message them directly if immigration or baggage takes longer than expected.',
    },
    {
        q: 'What happens if my flight is delayed?',
        a: 'Your flight is tracked from departure at the origin airport, so the pickup time adjusts automatically. The first 60 minutes of waiting after an international landing are included at no charge, and 30 minutes on domestic flights, measured from when the aircraft actually lands.',
    },
    {
        q: 'Is the price fixed before I travel?',
        a: 'Yes. Every transfer is quoted as a fixed all-inclusive fare covering motorway tolls, fuel and parking, confirmed before you travel. Nothing is added at the end of the journey without your prior agreement. Journeys starting between 22:00 and 06:00 and on Italian public holidays can carry a surcharge, shown in your quote before you book.',
    },
    {
        q: 'Can you reach a hotel inside Venice?',
        a: 'Not by car — the historic centre is car-free. Road transfers from Venice Marco Polo and Treviso end at the vehicle terminus at Piazzale Roma or Tronchetto, from where you continue on foot or by water. Mainland destinations such as Mestre and Jesolo are reached door to door.',
    },
    {
        q: 'Do you cover airports not listed on this page?',
        a: 'The nineteen airports listed here each have their own transfer page with journey times and destinations. If you are flying into a smaller regional airport, send us the details and we will confirm whether we can cover it and quote the journey.',
    },
];

export default function AirportTransfersPage() {
    // Short display labels for the airports this hub already linked to, so the
    // existing anchor text and ordering stay unchanged. The list itself is now
    // derived from the shared `airports` data, so a newly added airport page
    // cannot end up unlinked from this hub again.
    const displayName: Record<string, string> = {
        'rome-fiumicino': 'Rome Fiumicino',
        'rome-ciampino': 'Rome Ciampino',
        'milan-malpensa': 'Milan Malpensa',
        'milan-linate': 'Milan Linate',
        'venice': 'Venice Marco Polo',
        'naples': 'Naples International',
        'florence': 'Florence Peretola',
        'bologna-marconi': 'Bologna Marconi',
        'pisa': 'Pisa Airport',
        'verona': 'Verona Airport',
        'palermo': 'Palermo Airport',
        'catania-fontanarossa': 'Catania Airport',
        'bari': 'Bari Airport',
        'genoa': 'Genoa Airport',
        'turin': 'Turin Airport',
    };
    const order = Object.keys(displayName);
    const rank = (slug: string) => {
        const i = order.indexOf(slug);
        return i === -1 ? order.length : i;
    };
    const sorted = [...airportData].sort((a, b) => rank(a.slug) - rank(b.slug));
    const airports = sorted.map((a) => ({ name: displayName[a.slug] ?? a.name, link: `/airport/${a.slug}` }));

    // ── Structured data ──────────────────────────────────────────────────────
    // Three inert JSON-LD blocks. ItemList marks this page as the canonical
    // index of the airports covered; each Airport entity carries its IATA code
    // so an answer engine can resolve it to the real-world airport rather than
    // treating it as loose text; FAQPage mirrors the questions rendered below.
    const itemListSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Italian airports served by Italy Taxi Service',
        numberOfItems: sorted.length,
        itemListElement: sorted.map((a, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: `${SITE}/airport/${a.slug}`,
            item: {
                '@type': 'Airport',
                name: a.name,
                iataCode: a.code,
                url: `${SITE}/airport/${a.slug}`,
                address: { '@type': 'PostalAddress', addressLocality: a.city, addressCountry: 'IT' },
            },
        })),
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
            { '@type': 'ListItem', position: 2, name: 'Airports', item: `${SITE}/airport` },
        ],
    };

    return (
        <main className="min-h-screen bg-[#F8F6F1]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <Navbar />

            <PageHero
                titleTop="Nationwide Coverage"
                titleBottom="Airport Transfers"
                description="Private airport transfers across every major Italian airport. Fixed prices, flight tracking and a driver waiting in arrivals."
                backgroundImage="/images/hero.png"
            />

            <div className="container mx-auto py-24 px-6">
                <h2 className="text-4xl font-bold text-[#0F1C2E] mb-12 text-center">Top Italian Airports</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {airports.map((airport, idx) => (
                        <Link
                            key={idx}
                            href={airport.link}
                            className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-[#F4C430] transition-all duration-300 flex items-center justify-between"
                        >
                            <div className="flex items-center gap-5">
                                <div className="p-3 rounded-xl bg-[#F4C430]/10 text-[#F4C430] group-hover:bg-[#F4C430] group-hover:text-white transition-colors">
                                    <Plane className="w-6 h-6" />
                                </div>
                                <span className="text-lg font-bold text-[#0F1C2E] group-hover:text-[#F4C430] transition-colors">{airport.name}</span>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#F4C430] group-hover:translate-x-1 transition-all" />
                        </Link>
                    ))}
                </div>

                {/* ── Comparison table ─────────────────────────────────────────── */}
                <section className="max-w-5xl mx-auto mt-28">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F1C2E] mb-4 text-center">Every Italian Airport We Cover</h2>
                    <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
                        Journey times are realistic estimates for a private car under normal traffic. Each airport has its own page with
                        terminal pickup detail and onward destinations.
                    </p>
                    <div className="overflow-x-auto bg-white rounded-[1.5rem] border border-gray-100 shadow-sm">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#0F1C2E] text-white">
                                    <th className="px-5 py-4 font-semibold">Airport</th>
                                    <th className="px-5 py-4 font-semibold">Code</th>
                                    <th className="px-5 py-4 font-semibold">City served</th>
                                    <th className="px-5 py-4 font-semibold">To the city centre</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sorted.map((a, i) => (
                                    <tr key={a.slug} className={i % 2 ? 'bg-[#F8F9FA]' : ''}>
                                        <td className="px-5 py-3.5 border-t border-gray-100">
                                            <Link href={`/airport/${a.slug}`} className="text-[#0F1C2E] font-semibold hover:text-[#F4C430] transition-colors">
                                                {a.name}
                                            </Link>
                                        </td>
                                        <td className="px-5 py-3.5 border-t border-gray-100 font-mono text-sm text-gray-500">{a.code}</td>
                                        <td className="px-5 py-3.5 border-t border-gray-100 text-gray-700">{a.city}</td>
                                        <td className="px-5 py-3.5 border-t border-gray-100 text-gray-700">{cityCentreTime[a.slug] ?? '—'}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* ── Which airport for which destination ──────────────────────── */}
                <section className="max-w-4xl mx-auto mt-28">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F1C2E] mb-8 text-center">Which Airport Should You Fly Into?</h2>
                    <div className="space-y-5 text-gray-700 leading-relaxed">
                        <p>
                            For most Italian destinations the nearest airport is obvious. For the ones people actually get wrong, it is worth
                            checking before you book the flight — the difference is often two or three hours in a car.
                        </p>
                        <ul className="space-y-3">
                            <li><strong>Amalfi Coast, Sorrento, Positano</strong> — Naples (NAP). About 65 km and an hour and a half to the coastal towns. See our <Link href="/route/naples-to-amalfi-coast-taxi" className="text-[#F4C430] font-semibold hover:underline">Naples to Amalfi Coast transfer</Link>.</li>
                            <li><strong>Lake Garda</strong> — Verona (VRN) is the closest, 25 to 30 km from the southern lake towns. Our <Link href="/route/verona-airport-to-lake-garda-taxi" className="text-[#F4C430] font-semibold hover:underline">Verona Airport to Lake Garda transfer</Link> covers them all.</li>
                            <li><strong>Lake Como</strong> — Malpensa (MXP), which sits north-west of Milan so the drive never crosses the city. See the <Link href="/route/milan-to-lake-como-taxi" className="text-[#F4C430] font-semibold hover:underline">Milan to Lake Como transfer</Link>.</li>
                            <li><strong>Venice and the lagoon</strong> — Marco Polo (VCE), or Treviso (TSF) for low-cost flights. Remember the city is car-free: transfers end at Piazzale Roma or Tronchetto.</li>
                            <li><strong>Costa Smeralda and northern Sardinia</strong> — Olbia (OLB), about 30 to 35 minutes from Porto Cervo.</li>
                            <li><strong>Taormina and Mount Etna</strong> — Catania (CTA), not Palermo. Palermo is on the opposite side of Sicily.</li>
                            <li><strong>Tuscany and Chianti</strong> — Florence (FLR) for the city itself, Pisa (PSA) for the western coast and the Leaning Tower.</li>
                        </ul>
                        <p>
                            If your destination is not listed, send it to us with your travel dates and we will tell you which airport works
                            best and quote the transfer. Browse all our <Link href="/services/airport-transfers" className="text-[#F4C430] font-semibold hover:underline">airport transfer services</Link> for how the service works end to end.
                        </p>
                    </div>
                </section>

                {/* ── Cities with more than one airport ────────────────────────── */}
                <section className="max-w-4xl mx-auto mt-28">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F1C2E] mb-8 text-center">Rome, Milan and Venice Each Have More Than One Airport</h2>
                    <div className="space-y-5 text-gray-700 leading-relaxed">
                        <p>
                            This catches people out more than any other detail, because booking sites often show the city name rather than the
                            airport. Arriving at the wrong one can add an hour before you have even started.
                        </p>
                        <ul className="space-y-3">
                            <li><strong>Rome</strong> — Fiumicino (FCO) is the main intercontinental gateway, 30 to 45 minutes from the centre. Ciampino (CIA) is the smaller low-cost airport, 15 km south-east. There is no direct rail link between the two. More on <Link href="/city/rome" className="text-[#F4C430] font-semibold hover:underline">Rome taxi services</Link>.</li>
                            <li><strong>Milan</strong> — Malpensa (MXP) is the long-haul airport at 50 to 65 minutes from the Duomo; Linate (LIN) is the close-in city airport at under 20 minutes; Bergamo (BGY) is the low-cost base, 55 to 65 minutes from central Milan. See <Link href="/city/milan" className="text-[#F4C430] font-semibold hover:underline">Milan taxi services</Link>.</li>
                            <li><strong>Venice</strong> — Marco Polo (VCE) is the main airport, 20 to 30 minutes to Piazzale Roma. Treviso (TSF) serves low-cost carriers and is roughly 40 km away. See <Link href="/city/venice" className="text-[#F4C430] font-semibold hover:underline">Venice taxi services</Link>.</li>
                        </ul>
                    </div>
                </section>

                {/* ── How it works ─────────────────────────────────────────────── */}
                <section className="max-w-5xl mx-auto mt-28">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F1C2E] mb-10 text-center">How an Airport Transfer Works</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: <Plane className="w-6 h-6" />, title: 'Your flight is tracked', body: 'Tracking starts at departure from your origin airport, so a delayed or early landing adjusts the pickup automatically.' },
                            { icon: <Clock className="w-6 h-6" />, title: 'Free waiting time', body: 'The first 60 minutes after an international landing are included at no charge, and 30 minutes on domestic flights — measured from the actual landing time.' },
                            { icon: <ShieldCheck className="w-6 h-6" />, title: 'A fixed, all-inclusive price', body: 'Tolls, fuel and parking are included and the fare is confirmed before you travel. Nothing is added afterwards without your prior agreement.' },
                        ].map((s, i) => (
                            <div key={i} className="bg-white rounded-[1.5rem] p-8 border border-gray-100 shadow-sm">
                                <div className="w-12 h-12 rounded-full bg-[#F4C430]/10 text-[#F4C430] flex items-center justify-center mb-5">{s.icon}</div>
                                <h3 className="font-bold text-[#0F1C2E] text-lg mb-2">{s.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-[15px]">{s.body}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed mt-8 max-w-3xl mx-auto text-center">
                        Your driver meets you in the arrivals hall after baggage reclaim, holding a sign with your name, and you receive their
                        contact details before you land. Bookings cancelled more than 24 hours before pickup are refunded in full.
                    </p>
                </section>

                {/* ── FAQ ──────────────────────────────────────────────────────── */}
                <section className="max-w-4xl mx-auto mt-28" aria-label="Frequently Asked Questions">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F1C2E] mb-10 text-center">Airport Transfer FAQs</h2>
                    <div className="space-y-4">
                        {faqs.map((f, i) => (
                            <div key={i} className="bg-white rounded-[1.25rem] p-7 border border-gray-100 shadow-sm">
                                <h3 className="font-bold text-[#0F1C2E] text-lg mb-2">{f.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Closing CTA ──────────────────────────────────────────────── */}
                <section className="max-w-3xl mx-auto mt-28 bg-[#0F1C2E] rounded-[2rem] p-10 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Flying into an airport not listed here?</h2>
                    <p className="text-gray-300 mb-8">
                        The nineteen airports above each have their own transfer page. For a smaller regional airport, send us your flight
                        details and we will confirm whether we cover it and quote the journey.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/book-now" className="inline-flex items-center justify-center gap-2 bg-[#F4C430] text-[#0F1C2E] font-bold py-3.5 px-8 rounded-xl hover:bg-white transition-colors">
                            Request a Quote
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-bold py-3.5 px-8 rounded-xl hover:bg-white/20 transition-colors border border-white/20">
                            <MessageCircle className="w-5 h-5" />
                            Contact Us
                        </Link>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
