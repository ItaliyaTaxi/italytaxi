import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import ServiceSchema from '@/components/ServiceSchema';
import MapEmbed from '@/components/MapEmbed';
import BookingForm from '@/components/BookingForm';
import { Clock, MapPin, Euro, CheckCircle, ChevronRight, Plane, ShieldCheck, Car, Ship, Info } from 'lucide-react';
import {
    type BolognaCruiseCombo,
    relatedBolognaCruiseOrigins,
    cruiseArrivalSlug,
    cruiseDepartureSlug,
    bolognaArrivalSlug,
    bolognaDepartureSlug,
} from '@/lib/bologna-transfer-data';

const SITE = 'https://www.italytaxiservice.com';
const HERO_IMG = '/images/Bologna.webp';

function seedOf(slug: string): number {
    let s = 0;
    for (let i = 0; i < slug.length; i++) s = (s + slug.charCodeAt(i) * (i + 1)) % 100000;
    return s;
}
function pick<T>(arr: T[], seed: number, salt = 0): T { return arr[(seed + salt) % arr.length]; }

export default function BolognaCruiseContent({ combo }: { combo: BolognaCruiseCombo }) {
    const { origin, port, leg, direction } = combo;
    const dep = direction === 'origin-to-port'; // Bologna [origin] -> Ravenna
    const seed = seedOf(combo.slug);
    const reverseSlug = dep ? cruiseArrivalSlug(origin) : cruiseDepartureSlug(origin);
    const related = relatedBolognaCruiseOrigins(origin.slug, 6);
    const isHotel = origin.kind === 'hotel';
    const isAirport = origin.kind === 'airport';

    const h1 = dep
        ? `Private Transfer from ${origin.name} to ${port.name}`
        : `Private Transfer from ${port.name} to ${origin.name}`;
    const bookText = dep ? `${origin.name} to Ravenna Cruise Port` : `Ravenna Cruise Port to ${origin.name}`;

    const introDeparture = [
        `Heading to a cruise from ${origin.name}? A private transfer to ${port.name} is the most comfortable way to reach your ship. A professional English-speaking driver collects you at the agreed time, handles your luggage and drives you directly to the terminal, timed to your embarkation window.`,
        `Boarding a cruise from Ravenna? A pre-booked car from ${origin.name} to ${port.name} keeps embarkation day simple: an on-time pickup, a direct road transfer of ${leg.duration} (${leg.distance}), and luggage handled throughout.`,
        `A private transfer from ${origin.name} to ${port.name} takes the stress out of embarkation day. Instead of arranging trains or shared shuttles, your driver takes you door-to-door, timed for your ship's boarding window.`,
    ];
    const introArrival = [
        `Disembarking at ${port.name} and heading to ${origin.name}? A private transfer collects you at the terminal, helps with your luggage and drives you directly onward — no queuing for a shared coach or figuring out local transport after your cruise.`,
        `Finishing your cruise at Ravenna? A private car from ${port.name} to ${origin.name} is a direct, comfortable way to continue your trip, with a driver waiting for you at the terminal and a fixed price agreed in advance.`,
        `A private transfer from ${port.name} to ${origin.name} means a smooth end to your cruise: your driver meets you at the terminal, loads your bags, and drives you straight to ${origin.name}.`,
    ];
    const intro = dep ? pick(introDeparture, seed) : pick(introArrival, seed);

    const faqs = dep ? [
        { q: `How early should I leave ${origin.name} for the cruise port?`, a: `We recommend allowing plenty of time before your ship's boarding window closes — typically 2–3 hours before departure. The transfer itself takes about ${leg.duration} (${leg.distance}), so your driver will suggest a pickup time that comfortably covers the drive.` },
        { q: `Where does the driver collect me${isHotel ? ` at ${origin.name}` : ''}?`, a: isHotel
            ? `Your driver arrives at the reception/entrance of ${origin.name} in ${origin.area} at the agreed time and helps with your luggage.`
            : isAirport
                ? `Your driver meets you in the arrivals hall at ${origin.area} with a name sign, ready to drive straight on to Ravenna.`
                : `Your driver collects you from your hotel's address anywhere in Bologna at the agreed time and helps with your luggage.` },
        { q: `Is the price fixed?`, a: `Yes — the fare is agreed in advance with no meter and no hidden charges. The final price depends on vehicle type, passenger count, luggage and pickup time.` },
        { q: `Which terminal at Ravenna will I be dropped at?`, a: `${port.area}. The port has multiple berths, so please confirm your cruise line and terminal when booking and we will drop you at the correct pier.` },
        { q: `What if my cruise line changes the boarding time?`, a: `Just let us know the new time and we re-schedule your pickup accordingly — straightforward when arranged in advance.` },
        { q: `Will the driver help with my luggage?`, a: `Yes, the driver loads and unloads your bags at both ends, so embarkation day is hands-free.` },
        { q: `Can you carry a family or group?`, a: `Yes — choose a minivan, Mercedes V-Class or minibus, and request child seats when booking. Tell us passenger and bag numbers so the right vehicle is assigned.` },
        { q: `Can I stop in Ravenna on the way to the port?`, a: `Yes, a short detour into Ravenna's historic centre for the Byzantine mosaics can usually be arranged if your embarkation window allows it — mention this when booking so we can plan the timing.` },
        { q: `Is the transfer available very early in the morning?`, a: `Yes, cruise transfers run 24/7 to match embarkation schedules, including early-morning boarding windows common on Adriatic itineraries.` },
    ] : [
        { q: `How long is the transfer from ${port.name} to ${origin.name}?`, a: `The private transfer takes approximately ${leg.duration} (about ${leg.distance}), depending on traffic. Your driver takes the fastest route via the A14 motorway.` },
        { q: `Where will the driver meet me at the cruise port?`, a: `Your driver waits near your ship's terminal with a name sign. ${port.area} has several berths, so please confirm your cruise line and disembarkation pier when booking.` },
        { q: `Will the driver wait if disembarkation is delayed?`, a: `Yes. Cruise disembarkation can run later than scheduled, and we build in free waiting time so your driver is there when you clear the terminal.` },
        { q: isHotel ? `Can you take me to the door at ${origin.name}?` : `Can you take me directly to my hotel in Bologna?`, a: isHotel
            ? `Yes — it is a door-to-door service directly to ${origin.name} in ${origin.area}, including Bologna's ZTL restricted-traffic zone that our licensed NCC vehicles are permitted to enter.`
            : isAirport
                ? `Yes — we drive you directly to the terminal at Bologna Marconi Airport for your onward flight.`
                : `Yes — tell us your hotel's address anywhere in Bologna and we take you there directly, door-to-door.` },
        { q: `Is this a private transfer or a shared shuttle?`, a: `It is a fully private, door-to-door transfer for your party only — no other passengers and no extra stops between Ravenna and ${origin.name}.` },
        { q: `Is the price fixed and can I pay online?`, a: `Yes — the fare is fixed and agreed before travel with no meter, and secure online payment is available.` },
        { q: `Do you provide child seats?`, a: `Yes, infant, toddler and booster seats are available on request — just add your children's ages when booking.` },
        { q: `What if disembarkation takes longer than expected?`, a: `We build free waiting time into every port pickup, and if your ship's clearance runs unusually late, message your driver directly and we adjust — no extra charge for reasonable delays.` },
        { q: `Can I book this transfer for a group finishing a cruise together?`, a: `Yes — tell us your total passenger and luggage count and we assign a minivan, Mercedes V-Class or minibus so the whole group travels together from the terminal.` },
    ];

    const webPageSchema = {
        '@context': 'https://schema.org', '@type': 'WebPage',
        name: h1, url: `${SITE}/bologna-transfer/${combo.slug}`,
        description: dep
            ? `Private transfer from ${origin.name} to ${port.name}, ${port.area}.`
            : `Private transfer from ${port.name}, ${port.area}, to ${origin.name}.`,
        isPartOf: { '@type': 'WebSite', name: 'Italy Taxi Service', url: SITE },
        about: isHotel
            ? { '@type': 'Hotel', name: origin.name, address: { '@type': 'PostalAddress', addressLocality: 'Bologna', addressRegion: 'Emilia-Romagna', addressCountry: 'IT' } }
            : { '@type': 'Place', name: origin.name, address: { '@type': 'PostalAddress', addressLocality: 'Bologna', addressRegion: 'Emilia-Romagna', addressCountry: 'IT' } },
    };

    const cell = 'px-4 py-3 border border-gray-100 text-sm';

    return (
        <main className="font-inter bg-white text-navy">
            <ServiceSchema
                name={h1}
                description={dep
                    ? `Fixed-price private transfer from ${origin.name} to ${port.name}. On-time pickup, luggage assistance and door-to-door service, timed to your embarkation window.`
                    : `Fixed-price private transfer from ${port.name} to ${origin.name}. Meet & greet at the terminal, luggage assistance and door-to-door service.`}
                url={`${SITE}/bologna-transfer/${combo.slug}`}
                image={`${SITE}${HERO_IMG}`}
            />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <Navbar />

            <PageHero
                titleTop={dep ? `Private Transfer from ${origin.name} to` : `Private Transfer from Ravenna Cruise Port to`}
                titleBottom={dep ? `Ravenna Cruise Port` : origin.name}
                description={dep
                    ? `Fixed-price, on-time private transfer from ${origin.name} to ${port.name}. ${leg.distance} · ${leg.duration} · luggage assistance included.`
                    : `Fixed-price, door-to-door private transfer from ${port.name} to ${origin.name}. ${leg.distance} · ${leg.duration} · meet & greet included.`}
                backgroundImage={HERO_IMG}
                buttonText="Book Your Transfer"
                buttonLink="/book-now"
                breadcrumbs={dep ? [
                    { name: 'Cruise Port Transfers', item: '/services/cruise-port-transfers' },
                    { name: origin.name, item: `/bologna-transfer/${combo.slug}` },
                    { name: port.name, item: `/bologna-transfer/${combo.slug}` },
                ] : [
                    { name: 'Cruise Port Transfers', item: '/services/cruise-port-transfers' },
                    { name: port.name, item: `/bologna-transfer/${combo.slug}` },
                    { name: origin.name, item: `/bologna-transfer/${combo.slug}` },
                ]}
            />

            <section className="py-16">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4 leading-tight">{h1}</h2>
                            <p className="text-gold font-semibold mb-6">{dep ? origin.area : port.area}</p>

                            {/* Overview stats */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                                <div className="bg-[#F8F9FA] p-5 rounded-2xl text-center">
                                    <Clock className="w-6 h-6 text-gold mx-auto mb-2" />
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Travel Time</p>
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

                            {/* Journey overview */}
                            <h2 className="text-2xl font-bold text-navy mt-4 mb-4">Journey Overview</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">{intro}</p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                The route runs via the A14 Adriatica motorway between Bologna and Ravenna, a straightforward road transfer with no train changes or shared-shuttle waiting. Every journey includes {dep ? 'an on-time pickup' : 'meet & greet at the terminal'}, luggage assistance, a professional English-speaking driver and a fixed, all-inclusive fare.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Beyond Bologna&apos;s outer ring road, the route joins the A14 Adriatica motorway branch running east through the flat Emilia-Romagna countryside to the Adriatic coast. Most of the {leg.duration.replace('~', '')} journey is spent on the motorway, with the final few minutes threading through Ravenna towards the port.
                            </p>

                            {isHotel && (
                                <div className="bg-[#FBF8F0] border border-gold/30 rounded-2xl p-5 mb-6 flex gap-3">
                                    <Info className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                    <p className="text-sm text-gray-700"><strong>Good to know:</strong> flying into Bologna Marconi Airport before your cruise? We can also arrange a direct <Link href={`/bologna-transfer/${bolognaArrivalSlug(origin.hotel!)}`} className="font-semibold text-gold hover:underline">airport transfer to {origin.name}</Link> the day before, so you arrive relaxed ahead of your Ravenna departure.</p>
                                </div>
                            )}

                            {/* Why choose us */}
                            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Why Choose Our Private Transfer</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                {dep
                                    ? `Cruise embarkation has a hard deadline — miss the boarding window and the ship leaves without you. A pre-booked car from ${origin.name} removes that risk with a guaranteed pickup, a driver who knows the fastest route to Ravenna, and a fixed price agreed before you travel.`
                                    : `After a cruise, the last thing you want is to manage luggage on public transport. A private transfer from ${port.name} means a driver waiting at the terminal, help with your bags, and one direct ride to ${origin.name} — no coach transfers or train connections.`}
                            </p>
                            <div className="overflow-x-auto my-6">
                                <table className="w-full border-collapse">
                                    <thead><tr className="bg-navy text-white text-left text-xs uppercase tracking-wider">
                                        <th className={cell}>Option</th><th className={cell}>Door-to-door</th><th className={cell}>Fixed price</th><th className={cell}>Luggage</th><th className={cell}>Wait</th>
                                    </tr></thead>
                                    <tbody>
                                        <tr className="bg-[#FBF8F0]"><td className={`${cell} font-bold`}>Private Transfer</td><td className={cell}>Yes</td><td className={cell}>Yes</td><td className={cell}>Assisted</td><td className={cell}>{dep ? 'On-time pickup' : 'Driver waiting'}</td></tr>
                                        <tr><td className={`${cell} font-bold`}>Train + Taxi</td><td className={cell}>No</td><td className={cell}>Two fares</td><td className={cell}>Carry your own</td><td className={cell}>Timetabled</td></tr>
                                        <tr><td className={`${cell} font-bold`}>Shared Shuttle</td><td className={cell}>No</td><td className={cell}>Fixed ticket</td><td className={cell}>Limited</td><td className={cell}>Group timetable</td></tr>
                                        <tr><td className={`${cell} font-bold`}>Taxi Rank</td><td className={cell}>Yes</td><td className={cell}>Metered</td><td className={cell}>Limited</td><td className={cell}>Variable queue</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Pickup process */}
                            {dep ? (
                                <>
                                    <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Pickup at {origin.name}</h2>
                                    <ol className="space-y-2 text-gray-700 mb-4 list-decimal list-inside">
                                        <li><strong>Confirmed pickup time</strong> that comfortably covers the drive plus port check-in before boarding closes.</li>
                                        <li><strong>Driver at {isAirport ? 'arrivals' : isHotel ? 'the entrance' : 'your address'}</strong> in {origin.area}, ready to help with luggage.</li>
                                        <li><strong>Direct, non-stop ride</strong> via the A14 to {port.name}.</li>
                                        <li><strong>Embarkation-aware timing</strong> — tell us your ship and boarding window and we plan the pickup accordingly.</li>
                                    </ol>
                                </>
                            ) : (
                                <>
                                    <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Meet &amp; Greet at {port.name}</h2>
                                    <ol className="space-y-2 text-gray-700 mb-4 list-decimal list-inside">
                                        <li><strong>Disembarkation-aware scheduling</strong> — we plan for realistic clearance times after your ship docks.</li>
                                        <li><strong>Meet &amp; greet</strong> — your driver waits near the terminal with a name sign.</li>
                                        <li><strong>Free waiting time</strong> covering disembarkation and luggage collection.</li>
                                        <li><strong>Direct transfer</strong> via the A14 to {origin.name}.</li>
                                    </ol>
                                </>
                            )}

                            {/* About the origin / port */}
                            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">About {dep ? origin.name : port.name}</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">{dep ? origin.description : port.description}</p>
                            {dep && origin.dining && origin.suitedFor && (
                                <p className="text-gray-700 leading-relaxed mb-4">{origin.dining} It is especially well suited to {origin.suitedFor}.</p>
                            )}
                            {!dep && (
                                <p className="text-gray-700 leading-relaxed mb-4">{port.dining} It is especially well suited to {port.suitedFor}.</p>
                            )}

                            {/* Ravenna teaser on departure pages (full detail lives on the arrival page) */}
                            {dep && (
                                <>
                                    <h2 className="text-2xl font-bold text-navy mt-8 mb-4">About {port.name}</h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">{port.description}</p>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Many travellers combine the transfer with a visit to Ravenna&apos;s historic centre — home to {port.attractions.slice(0, 2).join(' and ')} — either before boarding or on a stopover. Ask your driver about timing this if your embarkation window allows it.
                                    </p>
                                </>
                            )}

                            {/* Nearby / things to know */}
                            {dep && origin.nearby && (
                                <div className="bg-[#F8F9FA] p-5 rounded-2xl mb-6">
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-2">Close by</p>
                                    <ul className="space-y-1 text-sm text-gray-700">
                                        {origin.nearby.map((w, i) => <li key={i}><CheckCircle className="w-4 h-4 text-gold inline mr-2" />{w.place} — {w.note}</li>)}
                                    </ul>
                                </div>
                            )}
                            {!dep && (
                                <>
                                    <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Things to Know</h2>
                                    <ul className="space-y-2 text-gray-700 mb-4">
                                        {port.thingsToKnow.map((t, i) => <li key={i} className="flex gap-2"><CheckCircle className="w-4 h-4 text-gold mt-1 shrink-0" />{t}</li>)}
                                    </ul>
                                    <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Near the Port</h2>
                                    <ul className="grid sm:grid-cols-2 gap-2 text-gray-700 mb-4">
                                        {port.nearby.map((n, i) => <li key={i}><MapPin className="w-4 h-4 text-gold inline mr-2" />{n.place} — {n.note}</li>)}
                                    </ul>
                                    <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Nearby Attractions</h2>
                                    <ul className="grid sm:grid-cols-2 gap-2 text-gray-700 mb-4">
                                        {port.attractions.map((a, i) => <li key={i}><Ship className="w-4 h-4 text-gold inline mr-2" />{a}</li>)}
                                    </ul>
                                </>
                            )}

                            {/* Map */}
                            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Location Map</h2>
                            <div className="rounded-2xl overflow-hidden mb-4"><MapEmbed /></div>

                            {/* Vehicles */}
                            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Vehicle Options</h2>
                            <ul className="grid md:grid-cols-2 gap-2 text-gray-700 mb-4">
                                <li><Car className="w-4 h-4 text-gold inline mr-2" /><strong>Sedan</strong> — 1–3 passengers</li>
                                <li><Car className="w-4 h-4 text-gold inline mr-2" /><strong>Executive Sedan</strong> — business comfort</li>
                                <li><Car className="w-4 h-4 text-gold inline mr-2" /><strong>Minivan</strong> — 4–8 passengers &amp; luggage</li>
                                <li><Car className="w-4 h-4 text-gold inline mr-2" /><strong>Mercedes V-Class</strong> — premium group travel</li>
                                <li><Car className="w-4 h-4 text-gold inline mr-2" /><strong>Luxury Van</strong> — VIP transfers</li>
                                <li><Car className="w-4 h-4 text-gold inline mr-2" /><strong>Group Minibus</strong> — larger parties on request</li>
                            </ul>

                            {/* Trust signals */}
                            <div className="bg-[#0F1C2E] text-white rounded-2xl p-6 my-8 grid sm:grid-cols-2 gap-3 text-sm">
                                {['Licensed professional chauffeurs', 'Embarkation-aware scheduling', 'Meet & greet with name sign', 'English-speaking drivers', '24/7 availability', 'Fixed price — no hidden charges', 'Child seats on request', 'Free cancellation (per terms)'].map((s, i) => (
                                    <p key={i} className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-gold shrink-0" /> {s}</p>
                                ))}
                            </div>
                        </div>

                        {/* Booking sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-[#0F1C2E] p-8 rounded-[2rem] shadow-2xl lg:sticky lg:top-24">
                                <h2 className="text-xl font-bold text-white mb-1">Book This Transfer</h2>
                                <p className="text-gray-400 text-xs mb-6">Fixed price · Meet &amp; greet · Free cancellation (per terms)</p>
                                <BookingForm sourceName={`Bologna Cruise Transfer: ${bookText}`} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FAQSection faqs={faqs} title={`${bookText} — FAQ`} />

            {/* Internal linking */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="bg-[#FBF8F0] border border-gold/30 rounded-2xl p-5 mb-10">
                        <p className="font-bold text-navy mb-1">{dep ? 'Returning from your cruise?' : 'Heading to your cruise instead?'}</p>
                        <Link href={`/bologna-transfer/${reverseSlug}`} className="text-gold font-semibold hover:underline">
                            {dep ? `Ravenna Cruise Port to ${origin.name} Transfer` : `${origin.name} to Ravenna Cruise Port Transfer`} <ChevronRight className="w-4 h-4 inline" />
                        </Link>
                    </div>

                    {isHotel && (
                        <div className="bg-[#FBF8F0] border border-gold/30 rounded-2xl p-5 mb-10">
                            <p className="font-bold text-navy mb-1">Flying in or out of Bologna?</p>
                            <Link href={`/bologna-transfer/${dep ? bolognaArrivalSlug(origin.hotel!) : bolognaDepartureSlug(origin.hotel!)}`} className="text-gold font-semibold hover:underline">
                                {dep ? `Bologna Airport to ${origin.name} Transfer` : `${origin.name} to Bologna Airport Transfer`} <ChevronRight className="w-4 h-4 inline" />
                            </Link>
                        </div>
                    )}

                    <h2 className="text-2xl font-bold text-navy mb-4">Other Bologna ⇄ Ravenna Cruise Transfers</h2>
                    <div className="grid sm:grid-cols-2 gap-3 mb-10">
                        {related.map((o) => (
                            <Link key={o.slug} href={`/bologna-transfer/${dep ? cruiseDepartureSlug(o) : cruiseArrivalSlug(o)}`} className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium">
                                <ChevronRight className="w-4 h-4 text-gold" /> {dep ? `${o.name} to Ravenna Cruise Port` : `Ravenna Cruise Port to ${o.name}`}
                            </Link>
                        ))}
                    </div>

                    <h3 className="text-xl font-bold text-navy mb-4">Bologna &amp; Ravenna Services</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                        <Link href="/airport/bologna-marconi" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><Plane className="w-4 h-4 text-gold" /> Bologna Marconi Airport Guide</Link>
                        <Link href="/city/bologna" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> Bologna City Transfers</Link>
                        <Link href="/services/cruise-port-transfers" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><Ship className="w-4 h-4 text-gold" /> Cruise Port Transfer Service</Link>
                        <Link href="/services/airport-transfers" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> Airport Transfer Service</Link>
                        <Link href="/services/hotel-transfers" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> Hotel Transfer Service</Link>
                        <Link href="/route/bologna-to-florence-taxi" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> Bologna to Florence Transfer</Link>
                    </div>

                    <div className="mt-10 text-center">
                        <Link href="/book-now" className="inline-block bg-[#0F1C2E] text-white font-bold px-10 py-4 rounded-full hover:bg-gold hover:text-navy transition-all">
                            Book Your {dep ? `${origin.name} → Ravenna` : `Ravenna → ${origin.name}`} Transfer
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
