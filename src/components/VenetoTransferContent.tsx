import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import ServiceSchema from '@/components/ServiceSchema';
import MapEmbed from '@/components/MapEmbed';
import BookingForm from '@/components/BookingForm';
import { Clock, MapPin, Euro, CheckCircle, ChevronRight, Plane, ShieldCheck, Car, Info } from 'lucide-react';
import {
    type VenetoTransferCombo,
    venetoAirports,
    relatedVenetoDestinations,
    venetoArrivalSlug,
    venetoDepartureSlug,
} from '@/lib/veneto-transfer-data';

const SITE = 'https://www.italytaxiservice.com';
const HERO_IMG = '/images/venice airport.webp';

function seedOf(slug: string): number {
    let s = 0;
    for (let i = 0; i < slug.length; i++) s = (s + slug.charCodeAt(i) * (i + 1)) % 100000;
    return s;
}
function pick<T>(arr: T[], seed: number, salt = 0): T { return arr[(seed + salt) % arr.length]; }

export default function VenetoTransferContent({ combo }: { combo: VenetoTransferCombo }) {
    const { airport, dest, leg, direction } = combo;
    const dep = direction === 'dest-to-airport';
    const seed = seedOf(combo.slug);
    const water = !!dest.waterOnward;
    const otherAirports = venetoAirports.filter((a) => a.code !== airport.code && dest.legs[a.code.toLowerCase() as 'vce' | 'tsf' | 'vrn']);
    const related = relatedVenetoDestinations(airport.code, dest.slug, 6);
    const reverseSlug = dep ? venetoArrivalSlug(airport, dest) : venetoDepartureSlug(dest, airport);

    const h1 = dep
        ? `Private Transfer from ${dest.name} to ${airport.name}`
        : `Private Transfer from ${airport.name} to ${dest.name}`;
    const bookText = dep ? `${dest.name} to ${airport.short} Airport` : `${airport.short} Airport to ${dest.name}`;
    const dropWord = water ? 'the vehicle terminus at Piazzale Roma or Tronchetto (for onward water transport to)' : 'the door of';

    const introArrival = [
        `Arriving at ${airport.name} and heading to ${dest.name}? A private transfer is the most comfortable way to get there. Instead of ${airport.publicAlt}, a professional English-speaking driver meets you in arrivals, helps with your luggage and drives you directly toward ${dest.name} in ${dest.area}.`,
        `A private car from ${airport.name} to ${dest.name} takes the guesswork out of your arrival. Rather than ${airport.publicAlt}, you are met on arrival and taken on a fixed-price, door-to-door journey toward ${dest.area}.`,
        `Landing at ${airport.name} bound for ${dest.name}? Skip ${airport.publicAlt}. Our driver greets you by name and drives you straight toward ${dest.name}, luggage handled, at a price agreed before you travel.`,
    ];
    const introDeparture = [
        `Leaving ${dest.name} for ${airport.name}? A pre-booked private transfer means a punctual pickup and a direct, fixed-price ride to your terminal — no ${airport.publicAlt}.`,
        `On departure day, a private car from ${dest.name} to ${airport.name} keeps things simple: an on-time pickup in ${dest.area}, luggage handled, and a straight run to the airport instead of ${airport.publicAlt}.`,
        `A private departure transfer from ${dest.name} to ${airport.name} is the reliable way to make your flight, with a driver who knows the fastest route and a fare fixed in advance.`,
    ];
    const intro = dep ? pick(introDeparture, seed) : pick(introArrival, seed);

    const routeNote = water
        ? `Because central Venice is car-free, the road transfer reaches Piazzale Roma or the Tronchetto — the points vehicles can reach — where you connect to a water taxi, the vaporetto or a short walk to ${dest.name}.`
        : dest.kind === 'ski'
            ? `The route climbs into the mountains, so allow for winding passes; our drivers are experienced with alpine conditions and, in winter, proper equipment.`
            : dest.kind === 'lake'
                ? `The drive follows the lakeside and valley roads toward ${dest.name}; summer traffic around Lake Garda can add time, and the driver plans the route accordingly.`
                : `It is a straightforward door-to-door drive between ${airport.short} Airport and ${dest.name}.`;

    const faqs = dep ? [
        { q: `How early should I leave ${dest.name} for ${airport.short} Airport?`, a: `${airport.recommendedArrival} The transfer itself takes about ${leg.duration} (${leg.distance}), so your driver recommends a pickup time that comfortably covers the journey and check-in.` },
        { q: `Where does the driver collect me${water ? ' in Venice' : ''}?`, a: water
            ? `For a car transfer we meet at Piazzale Roma or Tronchetto (the vehicle termini). If you are inside the islands, a private water taxi can bring you and your luggage to the terminus to meet the car.`
            : `Your driver arrives at your address in ${dest.name} at the agreed time, helps with your luggage and drives you directly to ${airport.name}.` },
        { q: `Is the price fixed?`, a: `Yes — the fare is agreed in advance with no meter and no hidden charges. The final price depends on vehicle type, passenger count, luggage and pickup time.` },
        { q: `Can you collect me very early or late?`, a: `Yes, departure transfers run 24/7 — useful for early and late flights when ${airport.publicAlt} may be limited or not running.` },
        { q: `What if my flight time changes?`, a: `Just let us know the new time and we re-schedule your pickup accordingly — straightforward when arranged in advance.` },
        { q: `Will the driver help with luggage?`, a: `Yes, the driver assists with your bags at both ends, so departure day is hands-free.` },
        { q: `Can you carry a family or group?`, a: `Yes — choose a minivan, Mercedes V-Class or minibus, and request child seats when booking. Tell us passenger and bag numbers so the right vehicle is assigned.` },
        { q: `Which airport is closest to ${dest.name}?`, a: `${dest.name} is about ${leg.distance} from ${airport.name} (${leg.duration}). We also serve it from Milan${airport.code === 'VRN' ? '' : ''}${otherAirports.length ? ' and ' + otherAirports.map((a) => a.short).join(' and ') + ' airports' : ''}.` },
    ] : [
        { q: `How long is the transfer from ${airport.name} to ${dest.name}?`, a: `The private transfer takes approximately ${leg.duration} (about ${leg.distance}), depending on traffic. Your driver takes the fastest route.` },
        { q: `Where will the driver meet me at ${airport.short} Airport?`, a: `Your driver waits at ${airport.meetingPoint}, helps with your luggage and walks you to the vehicle. ${airport.terminals}` },
        { q: `Will the driver wait if my flight is delayed?`, a: `Yes. We monitor your flight in real time, so if it lands early or late the pickup is adjusted automatically, with free waiting time after landing.` },
        { q: water ? `Can you drive me right into Venice?` : `Can you take me to the door in ${dest.name}?`, a: water
            ? `Venice is car-free, so the car reaches Piazzale Roma or Tronchetto. From there a water taxi or the vaporetto completes the trip to your hotel — we can arrange the water connection.`
            : `Yes — it is a door-to-door service to your address in ${dest.name}, ${dest.area}.` },
        { q: `Is this a private transfer or a shared shuttle?`, a: `It is a fully private, door-to-door transfer for your party only — no other passengers and no extra stops.` },
        { q: `Is the price fixed and can I pay online?`, a: `Yes — the fare is fixed and agreed before travel with no meter, and secure online payment is available.` },
        { q: `Do you provide child seats?`, a: `Yes, infant, toddler and booster seats are available on request — just add your children's ages when booking.` },
        { q: `Is the ${airport.short} to ${dest.name} transfer available 24/7?`, a: `Yes, transfers run around the clock, including the early and late arrivals when ${airport.publicAlt} is limited.` },
    ];

    const webPageSchema = {
        '@context': 'https://schema.org', '@type': 'WebPage',
        name: h1, url: `${SITE}/${combo.slug}`,
        description: dep
            ? `Private departure transfer from ${dest.name}, ${dest.area}, to ${airport.name}.`
            : `Private door-to-door transfer from ${airport.name} to ${dest.name}, ${dest.area}.`,
        isPartOf: { '@type': 'WebSite', name: 'Italy Taxi Service', url: SITE },
        about: { '@type': 'Place', name: dest.name, address: { '@type': 'PostalAddress', addressLocality: dest.area, addressRegion: 'Veneto', addressCountry: 'IT' } },
    };

    const cell = 'px-4 py-3 border border-gray-100 text-sm';

    return (
        <main className="font-inter bg-white text-navy">
            <ServiceSchema
                name={h1}
                description={dep
                    ? `Fixed-price private departure transfer from ${dest.name}, ${dest.area}, to ${airport.name}. On-time pickup, luggage assistance and door-to-door service.`
                    : `Fixed-price private transfer from ${airport.name} to ${dest.name}, ${dest.area}. Meet & greet, flight monitoring and door-to-door service.`}
                url={`${SITE}/${combo.slug}`}
                image={`${SITE}${HERO_IMG}`}
            />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <Navbar />

            <PageHero
                titleTop={dep ? `Private Transfer from ${dest.name} to` : `Private Transfer from ${airport.short} Airport to`}
                titleBottom={dep ? `${airport.short} Airport` : dest.name}
                description={dep
                    ? `Fixed-price, on-time private transfer from ${dest.name} in ${dest.area} to ${airport.name}. ${leg.distance} · ${leg.duration} · luggage assistance included.`
                    : `Fixed-price, door-to-door private transfer from ${airport.name} to ${dest.name} in ${dest.area}. ${leg.distance} · ${leg.duration} · meet & greet included.`}
                backgroundImage={HERO_IMG}
                buttonText="Book Your Transfer"
                buttonLink="/book-now"
                breadcrumbs={dep ? [
                    { name: 'Venice & Verona Transfers', item: '/airport-transfer' },
                    { name: dest.name, item: `/${combo.slug}` },
                    { name: `${airport.short} Airport`, item: airport.airportPage },
                ] : [
                    { name: 'Venice & Verona Transfers', item: '/airport-transfer' },
                    { name: `${airport.short} Airport`, item: airport.airportPage },
                    { name: dest.name, item: `/${combo.slug}` },
                ]}
            />

            <section className="py-16">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4 leading-tight">{h1}</h2>
                            <p className="text-gold font-semibold mb-6">{dest.area}</p>

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

                            {/* Route overview / introduction */}
                            <h2 className="text-2xl font-bold text-navy mt-4 mb-4">Route Overview</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">{intro}</p>
                            <p className="text-gray-700 leading-relaxed mb-4">{routeNote}</p>

                            {/* Water-onward notice for Venice islands */}
                            {water && (
                                <div className="bg-[#FBF8F0] border border-gold/30 rounded-2xl p-5 mb-6 flex gap-3">
                                    <Info className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                    <p className="text-sm text-gray-700"><strong>Good to know:</strong> {dest.name} is inside Venice's car-free zone. Your road transfer ends at Piazzale Roma or Tronchetto; from there we can arrange a private water taxi or you continue by vaporetto.</p>
                                </div>
                            )}

                            {/* Why choose us */}
                            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Why Choose Our Private Transfer</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                {dep
                                    ? `A pre-booked car from ${dest.name} guarantees a pickup at a set time and a fixed price, so you avoid dragging luggage through ${airport.publicAlt} on the way to ${airport.short}.`
                                    : `A private transfer replaces ${airport.publicAlt} with one direct ride: a driver waiting for your flight, help with your bags and a fixed price agreed before you travel.`}
                            </p>
                            <div className="overflow-x-auto my-6">
                                <table className="w-full border-collapse">
                                    <thead><tr className="bg-navy text-white text-left text-xs uppercase tracking-wider">
                                        <th className={cell}>Option</th><th className={cell}>Door-to-door</th><th className={cell}>Fixed price</th><th className={cell}>Luggage</th><th className={cell}>Wait</th>
                                    </tr></thead>
                                    <tbody>
                                        <tr className="bg-[#FBF8F0]"><td className={`${cell} font-bold`}>Private Transfer</td><td className={cell}>{water ? 'To the terminus + water link' : 'Yes'}</td><td className={cell}>Yes</td><td className={cell}>Assisted</td><td className={cell}>{dep ? 'On-time pickup' : 'Driver waiting'}</td></tr>
                                        <tr><td className={`${cell} font-bold`}>Bus / Shuttle</td><td className={cell}>No</td><td className={cell}>Fixed ticket</td><td className={cell}>Limited</td><td className={cell}>Timetabled</td></tr>
                                        <tr><td className={`${cell} font-bold`}>Train</td><td className={cell}>No</td><td className={cell}>Fixed ticket</td><td className={cell}>Carry your own</td><td className={cell}>Timetabled</td></tr>
                                        <tr><td className={`${cell} font-bold`}>Taxi</td><td className={cell}>Yes</td><td className={cell}>Metered</td><td className={cell}>Limited</td><td className={cell}>Variable</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Meet & greet / pickup */}
                            {dep ? (
                                <>
                                    <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Pickup in {dest.name}</h2>
                                    <ol className="space-y-2 text-gray-700 mb-4 list-decimal list-inside">
                                        <li><strong>Confirmed pickup time</strong> that covers the journey plus airport check-in.</li>
                                        <li><strong>Driver at your address</strong> {water ? 'or at Piazzale Roma/Tronchetto for Venice' : `in ${dest.area}`}, ready to help with luggage.</li>
                                        <li><strong>Direct ride</strong> to your terminal at {airport.name}.</li>
                                        <li><strong>Flight-aware timing</strong> — tell us your flight and we build in a comfortable margin.</li>
                                    </ol>
                                </>
                            ) : (
                                <>
                                    <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Airport Meeting Point &amp; Pickup at {airport.short}</h2>
                                    <ol className="space-y-2 text-gray-700 mb-4 list-decimal list-inside">
                                        <li><strong>Flight monitoring</strong> — we track your flight and time the pickup to your landing.</li>
                                        <li><strong>Meet &amp; greet</strong> — your driver waits at {airport.meetingPoint}.</li>
                                        <li><strong>Free waiting time</strong> covering passport control and baggage reclaim.</li>
                                        <li><strong>Direct transfer</strong> toward {water ? `Venice's vehicle terminus for ${dest.name}` : `${dest.name} in ${dest.area}`}.</li>
                                    </ol>
                                </>
                            )}

                            {/* About the destination */}
                            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">About {dest.name}</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">{dest.description}</p>
                            <p className="text-gray-700 leading-relaxed mb-4">{dest.dining} It is especially well suited to {dest.suitedFor}.</p>

                            {/* Things to know */}
                            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Things to Know</h2>
                            <ul className="space-y-2 text-gray-700 mb-4">
                                {dest.thingsToKnow.map((t, i) => <li key={i} className="flex gap-2"><CheckCircle className="w-4 h-4 text-gold mt-1 shrink-0" />{t}</li>)}
                            </ul>

                            {/* Popular nearby destinations */}
                            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Popular Nearby Destinations</h2>
                            <ul className="grid sm:grid-cols-2 gap-2 text-gray-700 mb-4">
                                {dest.nearby.map((n, i) => <li key={i}><MapPin className="w-4 h-4 text-gold inline mr-2" />{n.place} — {n.note}</li>)}
                            </ul>

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
                                {['Licensed professional chauffeurs', 'Real-time flight monitoring', 'Meet & greet with name sign', 'English-speaking drivers', '24/7 availability', 'Fixed price — no hidden charges', 'Child seats on request', 'Free cancellation (per terms)'].map((s, i) => (
                                    <p key={i} className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-gold shrink-0" /> {s}</p>
                                ))}
                            </div>
                        </div>

                        {/* Booking sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-[#0F1C2E] p-8 rounded-[2rem] shadow-2xl lg:sticky lg:top-24">
                                <h2 className="text-xl font-bold text-white mb-1">Book This Transfer</h2>
                                <p className="text-gray-400 text-xs mb-6">Fixed price · Meet &amp; greet · Free cancellation (per terms)</p>
                                <BookingForm sourceName={`Veneto Transfer: ${bookText}`} />
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
                        <p className="font-bold text-navy mb-1">{dep ? 'Arriving instead?' : 'Departing instead?'}</p>
                        <Link href={`/${reverseSlug}`} className="text-gold font-semibold hover:underline">
                            {dep ? `${airport.short} Airport to ${dest.name} Transfer` : `${dest.name} to ${airport.short} Airport Transfer`} <ChevronRight className="w-4 h-4 inline" />
                        </Link>
                    </div>

                    {otherAirports.length > 0 && (
                        <>
                            <h2 className="text-2xl font-bold text-navy mb-4">{dest.name} From Other Airports</h2>
                            <div className="grid sm:grid-cols-2 gap-3 mb-10">
                                {otherAirports.map((a) => (
                                    <Link key={a.code} href={`/${dep ? venetoDepartureSlug(dest, a) : venetoArrivalSlug(a, dest)}`} className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium">
                                        <Plane className="w-4 h-4 text-gold" /> {dep ? `${dest.name} to ${a.short} Airport` : `${a.short} Airport to ${dest.name}`}
                                    </Link>
                                ))}
                            </div>
                        </>
                    )}

                    <h2 className="text-2xl font-bold text-navy mb-4">Other {airport.short} Airport Transfers</h2>
                    <div className="grid sm:grid-cols-2 gap-3 mb-10">
                        {related.map((d) => (
                            <Link key={d.slug} href={`/${dep ? venetoDepartureSlug(d, airport) : venetoArrivalSlug(airport, d)}`} className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium">
                                <ChevronRight className="w-4 h-4 text-gold" /> {dep ? `${d.name} to ${airport.short} Airport` : `${airport.short} Airport to ${d.name}`}
                            </Link>
                        ))}
                    </div>

                    <h3 className="text-xl font-bold text-navy mb-4">Venice, Verona &amp; Veneto Services</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                        <Link href={airport.airportPage} className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><Plane className="w-4 h-4 text-gold" /> {airport.name} Guide</Link>
                        <Link href="/city/venice" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> Venice Travel &amp; Transfers</Link>
                        <Link href="/services/airport-transfers" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> Airport Transfer Service</Link>
                        <Link href="/services/cruise-port-transfers" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> Cruise Port Transfers</Link>
                        <Link href="/route/venice-to-verona-taxi" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> Venice to Verona Transfer</Link>
                        <Link href="/services/city-to-city" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> City-to-City Transfers</Link>
                    </div>

                    <div className="mt-10 text-center">
                        <Link href="/book-now" className="inline-block bg-[#0F1C2E] text-white font-bold px-10 py-4 rounded-full hover:bg-gold hover:text-navy transition-all">
                            Book Your {dep ? `${dest.name} → ${airport.short}` : `${airport.short} → ${dest.name}`} Transfer
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
