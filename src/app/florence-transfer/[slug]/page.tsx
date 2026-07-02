import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import ServiceSchema from '@/components/ServiceSchema';
import MapEmbed from '@/components/MapEmbed';
import { Clock, MapPin, Euro, CheckCircle, ChevronRight, Plane, ShieldCheck, Car, MessageCircle } from 'lucide-react';
import {
    getAllFlorenceTransfers,
    findFlorenceTransfer,
    relatedByAirport,
    arrivalSlug,
    departureSlug,
    flAirports,
} from '@/lib/florence-transfer-data';

const SITE = 'https://www.italytaxiservice.com';
const HERO_IMG = '/images/florence airport.webp';
const WHATSAPP = '923148932631';

// Only the curated Florence/Tuscany transfer slugs render here.
export const dynamicParams = false;

export function generateStaticParams() {
    return getAllFlorenceTransfers().map((t) => ({ slug: t.slug }));
}

function waLink(text: string) {
    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const t = findFlorenceTransfer(slug);
    if (!t) return { title: 'Page Not Found' };
    const dep = t.direction === 'dest-to-airport';
    const title = dep
        ? `${t.dest.name} to ${t.airport.short} Airport Transfer`
        : `${t.airport.short} Airport to ${t.dest.name} Transfer`;
    const description = dep
        ? `Private departure transfer from ${t.dest.name} (${t.dest.area}) to ${t.airport.name}. Fixed price, on-time pickup, ${t.leg.duration} journey (${t.leg.distance}), luggage assistance.`
        : `Private transfer from ${t.airport.name} to ${t.dest.name} (${t.dest.area}). Fixed price, ${t.leg.duration} (${t.leg.distance}), meet & greet and flight monitoring.`;
    const url = `${SITE}/florence-transfer/${slug}`;
    const shortTitle = dep ? `${t.dest.name} to ${t.airport.short} Transfer` : `${t.airport.short} to ${t.dest.name} Transfer`;
    const alt = dep
        ? `Private transfer from ${t.dest.name} to ${t.airport.name}`
        : `Private transfer from ${t.airport.name} to ${t.dest.name}`;
    return {
        title: title.length > 60 ? shortTitle : title,
        description: description.slice(0, 160),
        alternates: { canonical: `/florence-transfer/${slug}` },
        openGraph: {
            title, description, url, type: 'website',
            images: [{ url: `${SITE}${HERO_IMG}`, width: 1200, height: 630, alt }],
        },
        twitter: { card: 'summary_large_image', title, description },
    };
}

export default async function FlorenceTransferPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const t = findFlorenceTransfer(slug);
    if (!t) notFound();

    const { airport, dest, leg, direction } = t;
    const dep = direction === 'dest-to-airport';
    const flr = flAirports.find((a) => a.code === 'FLR')!;
    const isPisa = airport.code === 'PSA';
    const isCountry = dest.kind === 'resort';
    const isLandmark = dest.kind === 'landmark';
    const placeWord = isLandmark ? 'destination' : isCountry ? 'resort' : 'hotel';

    // Reverse-direction link (only where a curated page exists).
    const reverseSlug = dep
        ? arrivalSlug(flr, dest)
        : (airport.code === 'FLR' && dest.reverseToFlr ? departureSlug(dest, flr) : null);

    const related = relatedByAirport(airport.code, dest.slugPart, 6);

    const h1 = dep
        ? `Private Transfer from ${dest.name} to ${airport.name}`
        : `Private Transfer from ${airport.name} to ${dest.name}`;

    const bookText = dep ? `${dest.name} to ${airport.short} Airport` : `${airport.short} Airport to ${dest.name}`;

    const faqs = dep ? [
        { q: `How early should I leave ${dest.name} for ${airport.short} Airport?`, a: `${airport.recommendedArrival} The transfer itself takes about ${leg.duration} (${leg.distance}), so your driver recommends a pickup time that comfortably covers the drive and check-in.` },
        { q: `Where does the driver collect me at ${dest.name}?`, a: `Your driver arrives at ${dest.name} in ${dest.area} at the agreed time, helps with your luggage and drives you directly to your departure terminal at ${airport.name}.` },
        { q: `Will the driver help with my luggage?`, a: `Yes — the driver loads and unloads your bags at both ${dest.name} and the airport terminal, so departure day is hands-free.` },
        { q: `Is the price fixed?`, a: `Yes. Your fare is fixed and agreed in advance with no meter and no hidden charges. The final price depends on vehicle type, passenger count, luggage, pickup time and season.` },
        { q: `Can I book a very early or late departure?`, a: `Yes — private departure transfers run 24/7, ideal for the early flights common at ${airport.short} when public transport is limited or not yet running.` },
        { q: `What happens if my flight time changes?`, a: `Just tell us the new time and we re-schedule your pickup accordingly — straightforward when arranged in advance.` },
        { q: `Is this a private transfer?`, a: `Yes — it is fully private, door-to-door, for your party only, with no shared rides or extra stops between ${dest.name} and ${airport.name}.` },
        { q: `Can you enter Florence's ZTL to collect me?`, a: `Yes. Our NCC-licensed vehicles are pre-registered for Florence's restricted-traffic (ZTL) zone, so we can reach your door where standard visitors' cars would risk fines.` },
        { q: `Can I request child seats?`, a: `Yes — infant, toddler and booster seats are available on request; add your children's ages when booking.` },
        { q: `How do I pay and can I book on WhatsApp?`, a: `You can request a quote and confirm by WhatsApp or online; secure online payment is available and the fare is fixed before you travel.` },
    ] : [
        { q: `How long is the transfer from ${airport.name} to ${dest.name}?`, a: `The private transfer takes approximately ${leg.duration} (about ${leg.distance}), depending on traffic. Your driver always takes the fastest route.` },
        { q: `Will the driver wait if my flight is delayed?`, a: `Yes. We monitor your flight in real time, so if it lands early or late your pickup is adjusted automatically, with free waiting time after landing for passport control and baggage.` },
        { q: `Where will the driver meet me at ${airport.short} Airport?`, a: `Your driver waits in the arrivals hall with a name sign (meet & greet), helps with your luggage and walks you to the vehicle. ${airport.terminals}` },
        { q: `Is this private or a shared shuttle?`, a: `It is a fully private, door-to-door transfer for your party only — no other passengers and no extra stops between ${airport.short} and ${dest.name}.` },
        { q: `Can the driver reach ${dest.name}?`, a: isLandmark
            ? `Yes — the driver brings you to the nearest permitted drop-off point for ${dest.name}. As an NCC-licensed service we can access Florence's ZTL restricted-traffic zone that standard cars cannot enter without fines.`
            : isCountry
                ? `Yes — we drive you all the way to the entrance of ${dest.name} in ${dest.area}, including the country roads that trains and buses do not serve.`
                : `Yes — we reach ${dest.name} door-to-door, including streets inside Florence's ZTL restricted-traffic zone that rental cars cannot enter without fines.` },
        { q: `Can I pay online and is the price fixed?`, a: `Yes — the fare is fixed and agreed before travel with no meter, and secure online payment is available.` },
        { q: `Do you provide child seats?`, a: `Yes, infant, toddler and booster seats are available on request — just add your children's ages when booking.` },
        { q: `How much luggage is included?`, a: `Tell us the number of passengers and bags and we assign the right vehicle, from a sedan up to a minivan or larger, so everything fits comfortably.` },
        { q: `Can I book last minute or on WhatsApp?`, a: `Yes, subject to availability — you can request a quote and confirm by WhatsApp or online. Booking ahead is recommended in peak season to guarantee your vehicle.` },
        { q: `Is the ${airport.short} to ${dest.name} transfer available 24/7?`, a: `Yes, transfers run around the clock, including very early and late arrivals when public transport ${isPisa ? 'between Pisa and Florence' : 'in Florence'} is limited.` },
    ];

    const webPageSchema = {
        '@context': 'https://schema.org', '@type': 'WebPage',
        name: h1, url: `${SITE}/florence-transfer/${slug}`,
        description: dep
            ? `Private departure transfer from ${dest.name} in ${dest.area} to ${airport.name}.`
            : `Private door-to-door transfer from ${airport.name} to ${dest.name} in ${dest.area}.`,
        isPartOf: { '@type': 'WebSite', name: 'Italy Taxi Service', url: SITE },
        about: isLandmark
            ? { '@type': 'TouristAttraction', name: dest.name, address: { '@type': 'PostalAddress', addressLocality: 'Florence', addressCountry: 'IT' } }
            : { '@type': 'Hotel', name: dest.name, address: { '@type': 'PostalAddress', addressLocality: dest.area, addressRegion: 'Tuscany', addressCountry: 'IT' } },
    };

    const cell = 'px-4 py-3 border border-gray-100 text-sm';

    return (
        <main className="font-inter bg-white text-navy">
            <ServiceSchema
                name={h1}
                description={dep
                    ? `Fixed-price private departure transfer from ${dest.name}, ${dest.area}, to ${airport.name}. On-time pickup, luggage assistance and door-to-door service.`
                    : `Fixed-price private transfer from ${airport.name} to ${dest.name}, ${dest.area}. Meet & greet, flight monitoring and door-to-door service.`}
                url={`${SITE}/florence-transfer/${slug}`}
                image={`${SITE}${HERO_IMG}`}
            />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <Navbar />

            <PageHero
                titleTop={dep ? `Private Transfer from ${dest.name} to` : `Private Transfer from ${airport.short} Airport to`}
                titleBottom={dep ? `${airport.short} Airport` : dest.name}
                description={dep
                    ? `Fixed-price, on-time private transfer from ${dest.name} in ${dest.area} to ${airport.name} for your departure. ${leg.distance} · ${leg.duration} · luggage assistance included.`
                    : `Fixed-price, door-to-door private transfer from ${airport.name} to ${dest.name} in ${dest.area}. ${leg.distance} · ${leg.duration} · meet & greet and flight monitoring included.`}
                backgroundImage={HERO_IMG}
                buttonText="Book Your Transfer"
                buttonLink="/book-now/"
                breadcrumbs={dep ? [
                    { name: 'Florence Airport Transfers', item: '/florence-transfer' },
                    { name: dest.name, item: `/florence-transfer/${slug}` },
                    { name: `${airport.short} Airport`, item: airport.airportPage },
                ] : [
                    { name: 'Florence Airport Transfers', item: '/florence-transfer' },
                    { name: `${airport.short} Airport`, item: airport.airportPage },
                    { name: dest.name, item: `/florence-transfer/${slug}` },
                ]}
            />

            <section className="py-16">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6 leading-tight">{h1}</h2>

                    {/* Hero stats */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                        <div className="bg-[#F8F9FA] p-5 rounded-2xl text-center">
                            <Clock className="w-6 h-6 text-gold mx-auto mb-2" />
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Journey Time</p>
                            <p className="text-navy font-extrabold">{leg.duration}</p>
                        </div>
                        <div className="bg-[#F8F9FA] p-5 rounded-2xl text-center">
                            <MapPin className="w-6 h-6 text-gold mx-auto mb-2" />
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Distance</p>
                            <p className="text-navy font-extrabold">{leg.distance}</p>
                        </div>
                        <div className="bg-[#F8F9FA] p-5 rounded-2xl text-center col-span-2 md:col-span-1">
                            <Euro className="w-6 h-6 text-gold mx-auto mb-2" />
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Pricing</p>
                            <p className="text-navy font-extrabold">Fixed price</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Link href="/book-now/" className="inline-block bg-[#0F1C2E] text-white font-bold px-8 py-4 rounded-full hover:bg-gold hover:text-navy transition-all">Book Your Transfer</Link>
                        <a href={waLink(`Hi, I'd like a quote for a private transfer: ${bookText}.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-8 py-4 rounded-full hover:bg-[#1da851] transition-all">
                            <MessageCircle className="w-5 h-5" /> Quote on WhatsApp
                        </a>
                    </div>

                    {/* Overview */}
                    <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Overview</h2>
                    {dep ? (
                        <>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Departure day should be the easy part of your trip. A private transfer from {dest.name} to {airport.name} means a professional driver arrives at your {placeWord} on time, loads your luggage and takes you directly to the correct departure terminal — no waiting for a taxi, no train connections and no watching a meter in traffic.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                It is the most reliable way to leave {dest.area}: an <strong>on-time pickup</strong>, a <strong>private vehicle</strong> for your party only, a <strong>comfortable door-to-door ride</strong> and <strong>luggage assistance</strong> at both ends — all for a fixed, all-inclusive price agreed in advance.
                            </p>
                        </>
                    ) : (
                        <>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Arriving at {airport.name} and heading to {dest.name}? A private transfer is the most comfortable way to begin your time in {isCountry ? 'Tuscany' : 'Florence'}. Instead of {isPisa ? 'taking the train to Pisa Centrale and changing for Florence with your luggage' : 'queuing for a taxi or riding the tram with your bags'}, a professional, English-speaking driver meets you in the arrivals hall, helps with your luggage and drives you directly to {isLandmark ? dest.name : `the door of ${dest.name}`} in {dest.area}.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                {airport.blurb} Every transfer includes <strong>real-time flight monitoring</strong>, <strong>meet &amp; greet</strong>, <strong>luggage assistance</strong> and a fixed, all-inclusive fare — a genuine door-to-door service with no meter and no hidden charges.
                            </p>
                        </>
                    )}

                    {/* Why */}
                    <h2 className="text-2xl font-bold text-navy mt-12 mb-4">{dep ? 'Why Book a Departure Transfer?' : 'Why Choose a Private Transfer'}</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        {dep
                            ? `On departure day, certainty matters. A pre-booked transfer from ${dest.name} gives you a guaranteed pickup at a set time, a fixed price with no surprises and a chauffeur who knows the fastest route to ${airport.short} — so you avoid the wait for a taxi, the luggage struggle on public transport and any risk of missing check-in.`
                            : isPisa
                                ? `From Pisa, the alternatives are slow: the train involves a walk or shuttle to Pisa Centrale, a change and a further ride to Florence's Santa Maria Novella, then a taxi or walk to ${dest.name} with your bags. A private transfer removes every step — one fixed price, a driver waiting for your flight and a direct ${leg.distance} ride to ${dest.name}.`
                                : `Public options from ${airport.short} each have drawbacks: the tram to the centre means managing luggage and a final walk, the taxi rank can queue at peak times, and ride-sharing is limited in Florence. A private transfer removes all of that — one fixed price, a guaranteed driver and a direct ride to ${dest.name}.`}
                    </p>

                    {/* Comparison table */}
                    <div className="overflow-x-auto my-8">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-navy text-white text-left text-xs uppercase tracking-wider">
                                    <th className={cell}>Option</th><th className={cell}>Convenience</th><th className={cell}>Fixed Cost</th><th className={cell}>Comfort</th><th className={cell}>Wait</th><th className={cell}>Luggage</th><th className={cell}>Direct</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-[#FBF8F0]"><td className={`${cell} font-bold`}>Private Transfer</td><td className={cell}>Excellent</td><td className={cell}>Yes</td><td className={cell}>Excellent</td><td className={cell}>{dep ? 'On-time pickup' : 'None — driver waiting'}</td><td className={cell}>Assisted</td><td className={cell}>Yes</td></tr>
                                <tr><td className={`${cell} font-bold`}>Taxi</td><td className={cell}>Good</td><td className={cell}>Metered</td><td className={cell}>Good</td><td className={cell}>Variable queue</td><td className={cell}>Limited</td><td className={cell}>Yes</td></tr>
                                <tr><td className={`${cell} font-bold`}>Train</td><td className={cell}>Low</td><td className={cell}>Fixed ticket</td><td className={cell}>Basic</td><td className={cell}>Timetabled</td><td className={cell}>Carry your own</td><td className={cell}>No</td></tr>
                                <tr><td className={`${cell} font-bold`}>{isPisa ? 'Bus / Coach' : 'Tram / Bus'}</td><td className={cell}>Low</td><td className={cell}>Fixed ticket</td><td className={cell}>Basic</td><td className={cell}>Timetabled</td><td className={cell}>Limited</td><td className={cell}>No</td></tr>
                                <tr><td className={`${cell} font-bold`}>Ride-sharing</td><td className={cell}>Variable</td><td className={cell}>Surge pricing</td><td className={cell}>Variable</td><td className={cell}>Unpredictable</td><td className={cell}>Limited</td><td className={cell}>Yes</td></tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Florence ZTL / access note */}
                    {!isCountry && (
                        <>
                            <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Florence&apos;s ZTL &amp; Door-to-Door Access</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Almost all of central Florence lies inside a strict ZTL (limited-traffic zone), where unauthorised vehicles are automatically fined. Our NCC-licensed fleet is pre-registered for ZTL access, which means we can bring you {dep ? `from ${dest.name}` : `right to ${isLandmark ? `the nearest permitted point for ${dest.name}` : dest.name}`} without the fines or restrictions that affect ordinary cars and many out-of-town taxis — a genuine door-to-door service through the historic centre.
                            </p>
                        </>
                    )}

                    {/* Process */}
                    {dep ? (
                        <>
                            <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Pickup Process at {dest.name}</h2>
                            <ol className="space-y-2 text-gray-700 mb-4 list-decimal list-inside">
                                <li><strong>Confirmed pickup time:</strong> we recommend a pickup that covers the drive plus airport check-in.</li>
                                <li><strong>Driver at the entrance:</strong> your chauffeur arrives at {dest.name} and meets you there.</li>
                                <li><strong>Luggage assistance:</strong> the driver loads your bags into a clean, private vehicle.</li>
                                <li><strong>Direct transfer:</strong> a non-stop ride to the correct departure terminal at {airport.name}.</li>
                                <li><strong>Flight-aware scheduling:</strong> tell us your flight and we time the pickup for a comfortable margin.</li>
                            </ol>
                        </>
                    ) : (
                        <>
                            <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Airport Pickup &amp; Meet &amp; Greet at {airport.short}</h2>
                            <ol className="space-y-2 text-gray-700 mb-4 list-decimal list-inside">
                                <li><strong>Flight monitoring:</strong> we track your flight, so the driver is timed to your actual landing.</li>
                                <li><strong>Meet &amp; greet:</strong> your driver waits in the arrivals hall with a name sign.</li>
                                <li><strong>Free waiting time:</strong> a grace period covers passport control and baggage reclaim.</li>
                                <li><strong>Luggage assistance:</strong> the driver helps you to the vehicle.</li>
                                <li><strong>Direct contact:</strong> you receive the driver&apos;s details in advance for peace of mind.</li>
                            </ol>
                        </>
                    )}

                    {/* Journey information */}
                    <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Journey Information</h2>
                    <ul className="space-y-2 text-gray-700 mb-4">
                        <li><strong>Estimated duration:</strong> {leg.duration}</li>
                        <li><strong>Distance:</strong> {leg.distance} between {airport.short} Airport and {dest.area}</li>
                        <li><strong>Route:</strong> {isPisa ? 'the FI-PI-LI expressway / A11 motorway between the coast and Florence' : isCountry ? 'a mix of motorway and scenic Tuscan country roads' : 'a short run from the airport into central Florence'}</li>
                        <li><strong>Typical traffic:</strong> heaviest during weekday peaks and summer weekends; the driver adjusts the route and pickup time accordingly.</li>
                        {dep ? (
                            <>
                                <li><strong>Recommended departure time:</strong> {airport.recommendedArrival}</li>
                                <li><strong>Drop-off:</strong> your airline&apos;s departure terminal at {airport.name}.</li>
                            </>
                        ) : (
                            <>
                                <li><strong>Pickup:</strong> arrivals hall at {airport.name}, with meet &amp; greet.</li>
                                <li><strong>Drop-off:</strong> {isLandmark ? `the nearest permitted point for ${dest.name}` : `directly at the entrance of ${dest.name}`}.</li>
                            </>
                        )}
                    </ul>

                    {/* About the destination (UNIQUE) */}
                    <h2 className="text-2xl font-bold text-navy mt-12 mb-4">About {dest.name}</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">{dest.description}</p>
                    <p className="text-gray-700 leading-relaxed mb-4">{dest.dining} It is especially well suited to {dest.suitedFor}.</p>
                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                        <div className="bg-[#F8F9FA] p-5 rounded-2xl">
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-2">{isCountry ? 'Nearby' : 'Close by'}</p>
                            <ul className="space-y-1 text-sm text-gray-700">
                                {dest.nearby.map((w, i) => <li key={i}><CheckCircle className="w-4 h-4 text-gold inline mr-2" />{w.place} — {w.note}</li>)}
                            </ul>
                        </div>
                        <div className="bg-[#F8F9FA] p-5 rounded-2xl">
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-2">Good to know</p>
                            <ul className="space-y-1 text-sm text-gray-700">
                                <li><strong>Area:</strong> {dest.area}</li>
                                <li><strong>Type:</strong> {dest.type}</li>
                                <li><strong>From {airport.short} Airport:</strong> {leg.distance} · {leg.duration}</li>
                                <li><strong>Nearby:</strong> {dest.attractions.join(', ')}</li>
                            </ul>
                        </div>
                    </div>

                    {/* About the airport (departures / Pisa arrivals) */}
                    {(dep || isPisa) && (
                        <>
                            <h2 className="text-2xl font-bold text-navy mt-12 mb-4">About {airport.name}</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">{airport.about}</p>
                            <ul className="space-y-2 text-gray-700 mb-4">
                                <li><strong>Terminal:</strong> {airport.terminals}</li>
                                <li><strong>Distance to {dest.area}:</strong> {leg.distance} ({leg.duration} by private transfer)</li>
                                <li><strong>Recommended arrival for departures:</strong> {airport.recommendedArrival}</li>
                            </ul>
                        </>
                    )}

                    {/* Map */}
                    <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Location Map</h2>
                    <div className="rounded-2xl overflow-hidden mb-4"><MapEmbed /></div>

                    {/* Vehicle options */}
                    <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Vehicle Options</h2>
                    <ul className="grid md:grid-cols-2 gap-2 text-gray-700 mb-4">
                        <li><Car className="w-4 h-4 text-gold inline mr-2" /><strong>Sedan</strong> — 1–3 passengers</li>
                        <li><Car className="w-4 h-4 text-gold inline mr-2" /><strong>Executive Sedan</strong> — business comfort</li>
                        <li><Car className="w-4 h-4 text-gold inline mr-2" /><strong>Minivan</strong> — 4–8 passengers &amp; luggage</li>
                        <li><Car className="w-4 h-4 text-gold inline mr-2" /><strong>Luxury Van</strong> — premium group travel</li>
                        <li><Car className="w-4 h-4 text-gold inline mr-2" /><strong>Business Class</strong> — VIP transfers</li>
                        <li><Car className="w-4 h-4 text-gold inline mr-2" /><strong>Group Transfers</strong> — minibus on request</li>
                    </ul>

                    {/* Pricing */}
                    <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Fixed Pricing</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Your fare is fixed and confirmed before you travel — no meter and no hidden charges. The final price depends on vehicle type, passenger count, luggage, pickup time and season. Request a free quote online or on WhatsApp for an exact, all-inclusive price for your {bookText} transfer.
                    </p>

                    {/* Trust signals */}
                    <div className="bg-[#0F1C2E] text-white rounded-2xl p-6 my-8 grid sm:grid-cols-2 gap-3 text-sm">
                        {['Licensed, professional chauffeurs', 'Real-time flight monitoring', 'Meet & greet service', 'ZTL-registered vehicles', '24/7 availability', 'Fixed price — no hidden charges', 'Secure online booking', 'Free cancellation (per terms)'].map((s, i) => (
                            <p key={i} className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-gold" /> {s}</p>
                        ))}
                    </div>
                </div>
            </section>

            <FAQSection faqs={faqs} title={`${bookText} — FAQ`} />

            {/* Internal linking */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    {reverseSlug && (
                        <div className="bg-[#FBF8F0] border border-gold/30 rounded-2xl p-5 mb-10">
                            <p className="font-bold text-navy mb-1">{dep ? 'Arriving instead?' : 'Departing instead?'}</p>
                            <Link href={`/florence-transfer/${reverseSlug}`} className="text-gold font-semibold hover:underline">
                                {dep ? `${airport.short} Airport to ${dest.name} Transfer` : `${dest.name} to ${airport.short} Airport Transfer`} <ChevronRight className="w-4 h-4 inline" />
                            </Link>
                        </div>
                    )}

                    <h2 className="text-2xl font-bold text-navy mb-6">More {airport.short} Airport Transfers</h2>
                    <div className="grid sm:grid-cols-2 gap-3 mb-10">
                        {related.map((d) => (
                            <Link key={d.slugPart} href={`/florence-transfer/${arrivalSlug(airport, d)}`} className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium">
                                <ChevronRight className="w-4 h-4 text-gold" /> {airport.short} Airport to {d.name}
                            </Link>
                        ))}
                    </div>

                    <h3 className="text-xl font-bold text-navy mb-4">Florence &amp; Tuscany Transfers &amp; Services</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                        <Link href="/florence-transfer" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><Plane className="w-4 h-4 text-gold" /> Florence Airport Transfers</Link>
                        <Link href="/city/florence" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> Florence City Private Transfers</Link>
                        <Link href={airport.airportPage} className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> {airport.name} Guide</Link>
                        <Link href="/tour/tuscany-wine-tour" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> Tuscany Wine Tours</Link>
                        <Link href="/airport-transfer" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> Airport Transfer Service</Link>
                        <Link href="/florence-private-taxi" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> Florence Private Taxi</Link>
                        <Link href="/route/pisa-airport-to-florence-taxi" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> Pisa Airport → Florence</Link>
                        <Link href="/route/florence-to-siena-taxi" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> Florence → Siena Transfers</Link>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-4 justify-center">
                        <Link href="/book-now/" className="inline-block bg-[#0F1C2E] text-white font-bold px-10 py-4 rounded-full hover:bg-gold hover:text-navy transition-all">
                            Book Your {dep ? `${dest.name} → ${airport.short}` : `${airport.short} → ${dest.name}`} Transfer
                        </Link>
                        <a href={waLink(`Hi, I'd like to book a private transfer: ${bookText}.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-10 py-4 rounded-full hover:bg-[#1da851] transition-all">
                            <MessageCircle className="w-5 h-5" /> Book on WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
