import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import ServiceSchema from '@/components/ServiceSchema';
import MapEmbed from '@/components/MapEmbed';
import BookingForm from '@/components/BookingForm';
import { Clock, MapPin, Euro, CheckCircle, ChevronRight, Plane, ShieldCheck, Car, Star } from 'lucide-react';
import {
    type MilanTransferCombo,
    milanAirports,
    relatedMilanHotels,
    milanArrivalSlug,
    milanDepartureSlug,
} from '@/lib/milan-transfer-data';

const SITE = 'https://www.italytaxiservice.com';
const HERO_IMG = '/images/milan airport.jpg';

// Deterministic per-page seed so boilerplate phrasing varies across pages.
function seedOf(slug: string): number {
    let s = 0;
    for (let i = 0; i < slug.length; i++) s = (s + slug.charCodeAt(i) * (i + 1)) % 100000;
    return s;
}
function pick<T>(arr: T[], seed: number, salt = 0): T {
    return arr[(seed + salt) % arr.length];
}

export default function MilanTransferContent({ combo }: { combo: MilanTransferCombo }) {
    const { airport, hotel, leg, direction } = combo;
    const dep = direction === 'hotel-to-airport';
    const seed = seedOf(combo.slug);
    const reverseSlug = dep ? milanArrivalSlug(airport, hotel) : milanDepartureSlug(hotel, airport);
    const related = relatedMilanHotels(hotel.slug, 6);
    const otherAirports = milanAirports.filter((a) => a.code !== airport.code);

    const h1 = dep
        ? `Private Transfer from ${hotel.name} to ${airport.name}`
        : `Private Transfer from ${airport.name} to ${hotel.name}`;
    const bookText = dep ? `${hotel.name} to ${airport.short} Airport` : `${airport.short} Airport to ${hotel.name}`;
    const stars = '★'.repeat(hotel.stars);

    // ── Content-block variations (selected by seed) ─────────────────────────
    const introArrival = [
        `Landing at ${airport.name} and heading to the ${hotel.name}? A private transfer is the smoothest way to start your stay in Milan. Instead of ${airport.publicAlt}, a professional English-speaking driver meets you in arrivals, helps with your luggage and takes you directly to the hotel door in ${hotel.district}.`,
        `Arriving at ${airport.name} bound for the ${hotel.name} in ${hotel.district}? Skip ${airport.publicAlt}. Our driver greets you by name in the arrivals hall and drives you straight to the hotel in one comfortable, fixed-price journey.`,
        `A private car from ${airport.name} to the ${hotel.name} takes the stress out of arriving in Milan. Rather than ${airport.publicAlt}, you are met on arrival, your bags are handled for you, and you travel door-to-door to ${hotel.district}.`,
    ];
    const introDeparture = [
        `On departure day, a private transfer from the ${hotel.name} to ${airport.name} keeps things simple. Your driver arrives at the hotel in ${hotel.district} on time, loads your luggage and takes you directly to the correct terminal — no ${airport.publicAlt}.`,
        `Leaving the ${hotel.name} for ${airport.name}? A pre-booked car means a punctual pickup from the lobby in ${hotel.district} and a direct, fixed-price ride to your terminal, instead of ${airport.publicAlt}.`,
        `A private departure transfer from the ${hotel.name} to ${airport.name} is the reliable way to catch your flight. The driver meets you at the hotel in ${hotel.district} and drives you straight to the airport, luggage handled throughout.`,
    ];
    const whyOpener = [
        `Milan's public options each have trade-offs.`,
        `Getting between ${airport.short} and central Milan by public transport is doable but rarely relaxing.`,
        `There are cheaper ways to make this journey, but few as effortless.`,
    ];
    const intro = dep ? pick(introDeparture, seed) : pick(introArrival, seed);

    const faqs = dep ? [
        { q: `How early should I leave the ${hotel.name} for ${airport.short} Airport?`, a: `${airport.recommendedArrival} The transfer itself takes about ${leg.duration} (${leg.distance}), so your driver recommends a hotel pickup time that comfortably covers the drive and check-in.` },
        { q: `Where does the driver pick me up at the ${hotel.name}?`, a: `Your driver arrives at the reception/entrance of the ${hotel.name} in ${hotel.district} at the agreed time, helps with your luggage and drives you directly to your departure terminal at ${airport.name}.` },
        { q: `Is the price fixed?`, a: `Yes — the fare is agreed in advance with no meter and no hidden charges. The final price depends on vehicle type, passenger count, luggage and pickup time.` },
        { q: `Can you collect me very early or late at night?`, a: `Yes, departure transfers run 24/7 — useful for the early and late flights common at ${airport.short}, when ${airport.publicAlt} may be limited or not running.` },
        { q: `What if my flight time changes?`, a: `Just let us know the new time and we re-schedule your hotel pickup accordingly — straightforward when arranged in advance.` },
        { q: `Will the driver help with my luggage?`, a: `Yes, the driver loads and unloads your bags at both the hotel and the terminal, so departure day is hands-free.` },
        { q: `Can you reach the ${hotel.name} in central Milan?`, a: `Yes. As a licensed NCC service we reach the hotel door in ${hotel.district}, including the central Area C restricted zone that private cars are charged to enter.` },
        { q: `Which terminal will I be dropped at?`, a: `You'll be taken to the correct departure terminal for your airline. ${airport.terminals} Tell us your flight when booking.` },
    ] : [
        { q: `How long is the transfer from ${airport.name} to the ${hotel.name}?`, a: `The private transfer takes approximately ${leg.duration} (about ${leg.distance}), depending on traffic. Your driver always takes the fastest route.` },
        { q: `Where will the driver meet me at ${airport.short} Airport?`, a: `Your driver waits at ${airport.meetingPoint}, helps with your luggage and walks you to the vehicle. ${airport.terminals}` },
        { q: `Will the driver wait if my flight is delayed?`, a: `Yes. We monitor your flight in real time, so if it lands early or late the pickup is adjusted automatically, with free waiting time after landing.` },
        { q: `Is this a private transfer or a shared shuttle?`, a: `It is a fully private, door-to-door transfer for your party only — no other passengers and no extra stops between ${airport.short} and the ${hotel.name}.` },
        { q: `Can you drop me at the hotel door in central Milan?`, a: `Yes — as a licensed NCC service we reach the ${hotel.name} in ${hotel.district}, including Milan's central Area C zone where private cars pay a charge to enter.` },
        { q: `Is the price fixed and can I pay online?`, a: `Yes — the fare is fixed and agreed before travel with no meter, and secure online payment is available.` },
        { q: `Do you provide child seats?`, a: `Yes, infant, toddler and booster seats are available on request — just add your children's ages when booking.` },
        { q: `Is the ${airport.short} to ${hotel.name} transfer available 24/7?`, a: `Yes, transfers run around the clock, including the early and late arrivals when ${airport.publicAlt} is limited.` },
    ];

    const webPageSchema = {
        '@context': 'https://schema.org', '@type': 'WebPage',
        name: h1, url: `${SITE}/${combo.slug}`,
        description: dep
            ? `Private departure transfer from the ${hotel.name} in ${hotel.district}, Milan, to ${airport.name}.`
            : `Private door-to-door transfer from ${airport.name} to the ${hotel.name} in ${hotel.district}, Milan.`,
        isPartOf: { '@type': 'WebSite', name: 'Italy Taxi Service', url: SITE },
        about: {
            '@type': 'Hotel', name: hotel.name, starRating: { '@type': 'Rating', ratingValue: hotel.stars },
            image: `${SITE}${hotel.image}`,
            address: { '@type': 'PostalAddress', streetAddress: hotel.address, addressLocality: 'Milan', addressRegion: 'Lombardy', addressCountry: 'IT' },
            geo: { '@type': 'GeoCoordinates', latitude: hotel.lat, longitude: hotel.lng },
        },
    };

    const cell = 'px-4 py-3 border border-gray-100 text-sm';

    return (
        <main className="font-inter bg-white text-navy">
            <ServiceSchema
                name={h1}
                description={dep
                    ? `Fixed-price private departure transfer from the ${hotel.name}, ${hotel.district}, to ${airport.name}. On-time hotel pickup, luggage assistance and door-to-door service.`
                    : `Fixed-price private transfer from ${airport.name} to the ${hotel.name}, ${hotel.district}, Milan. Meet & greet, flight monitoring and door-to-door service.`}
                url={`${SITE}/${combo.slug}`}
                image={`${SITE}${HERO_IMG}`}
            />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <Navbar />

            <PageHero
                titleTop={dep ? `Private Transfer from ${hotel.name} to` : `Private Transfer from ${airport.short} Airport to`}
                titleBottom={dep ? `${airport.short} Airport` : hotel.name}
                description={dep
                    ? `Fixed-price, on-time private transfer from the ${hotel.name} in ${hotel.district} to ${airport.name}. ${leg.distance} · ${leg.duration} · luggage assistance included.`
                    : `Fixed-price, door-to-door private transfer from ${airport.name} to the ${hotel.name} in ${hotel.district}. ${leg.distance} · ${leg.duration} · meet & greet included.`}
                backgroundImage={HERO_IMG}
                buttonText="Book Your Transfer"
                buttonLink="/book-now"
                breadcrumbs={dep ? [
                    { name: 'Milan Airport Transfers', item: '/milan-chauffeur-service' },
                    { name: hotel.name, item: `/${combo.slug}` },
                    { name: `${airport.short} Airport`, item: airport.airportPage },
                ] : [
                    { name: 'Milan Airport Transfers', item: '/milan-chauffeur-service' },
                    { name: `${airport.short} Airport`, item: airport.airportPage },
                    { name: hotel.name, item: `/${combo.slug}` },
                ]}
            />

            <section className="py-16">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main column */}
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4 leading-tight">{h1}</h2>
                            <p className="text-gold font-semibold mb-6">{stars} · {hotel.district}, Milan</p>

                            {/* Transfer overview stats */}
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

                            {/* Introduction */}
                            <h2 className="text-2xl font-bold text-navy mt-4 mb-4">Overview</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">{intro}</p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Every transfer includes {dep ? 'an on-time hotel pickup' : 'real-time flight monitoring, meet & greet'}, luggage assistance, a professional English-speaking driver and a fixed, all-inclusive fare — a genuine door-to-door service with no meter and no hidden charges.
                            </p>

                            {/* Why choose us */}
                            <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Why Choose Our Private Transfer</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                {pick(whyOpener, seed)} {dep
                                    ? `On departure day, a fixed-price car from the ${hotel.name} guarantees a pickup at a set time and a driver who knows the fastest route to ${airport.short}, so you avoid dragging luggage through ${airport.publicAlt}.`
                                    : `A private transfer replaces ${airport.publicAlt} with one direct ride: a guaranteed driver waiting for your flight, help with your bags, and a fixed price agreed before you travel.`}
                            </p>
                            <div className="overflow-x-auto my-6">
                                <table className="w-full border-collapse">
                                    <thead><tr className="bg-navy text-white text-left text-xs uppercase tracking-wider">
                                        <th className={cell}>Option</th><th className={cell}>Door-to-door</th><th className={cell}>Fixed price</th><th className={cell}>Luggage</th><th className={cell}>Wait</th>
                                    </tr></thead>
                                    <tbody>
                                        <tr className="bg-[#FBF8F0]"><td className={`${cell} font-bold`}>Private Transfer</td><td className={cell}>Yes</td><td className={cell}>Yes</td><td className={cell}>Assisted</td><td className={cell}>{dep ? 'On-time pickup' : 'Driver waiting'}</td></tr>
                                        <tr><td className={`${cell} font-bold`}>Train / Metro</td><td className={cell}>No</td><td className={cell}>Fixed ticket</td><td className={cell}>Carry your own</td><td className={cell}>Timetabled</td></tr>
                                        <tr><td className={`${cell} font-bold`}>Shuttle / Coach</td><td className={cell}>No</td><td className={cell}>Fixed ticket</td><td className={cell}>Limited</td><td className={cell}>Timetabled</td></tr>
                                        <tr><td className={`${cell} font-bold`}>Taxi</td><td className={cell}>Yes</td><td className={cell}>Metered</td><td className={cell}>Limited</td><td className={cell}>Variable queue</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Route information + pickup */}
                            {dep ? (
                                <>
                                    <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Pickup at the {hotel.name}</h2>
                                    <ol className="space-y-2 text-gray-700 mb-4 list-decimal list-inside">
                                        <li><strong>Confirmed pickup time</strong> that covers the drive plus airport check-in.</li>
                                        <li><strong>Driver at reception</strong> of the {hotel.name} in {hotel.district}, ready to help with luggage.</li>
                                        <li><strong>Direct, non-stop ride</strong> to the correct departure terminal at {airport.name}.</li>
                                        <li><strong>Flight-aware scheduling</strong> — tell us your flight and we time the pickup for a comfortable margin.</li>
                                    </ol>
                                </>
                            ) : (
                                <>
                                    <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Airport Meeting Point &amp; Pickup at {airport.short}</h2>
                                    <ol className="space-y-2 text-gray-700 mb-4 list-decimal list-inside">
                                        <li><strong>Flight monitoring</strong> — we track your flight and time the pickup to your actual landing.</li>
                                        <li><strong>Meet &amp; greet</strong> — your driver waits at {airport.meetingPoint}.</li>
                                        <li><strong>Free waiting time</strong> covering passport control and baggage reclaim.</li>
                                        <li><strong>Direct transfer</strong> to the door of the {hotel.name} in {hotel.district}.</li>
                                    </ol>
                                </>
                            )}

                            {/* Route / journey info */}
                            <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Route &amp; Journey Information</h2>
                            <ul className="space-y-2 text-gray-700 mb-4">
                                <li><strong>Estimated duration:</strong> {leg.duration}</li>
                                <li><strong>Distance:</strong> {leg.distance} between {airport.short} Airport and {hotel.district}</li>
                                <li><strong>Route:</strong> {airport.code === 'LIN' ? 'a short run in from the east of the city' : airport.code === 'BGY' ? 'the A4 motorway from the northeast toward central Milan' : 'the motorway in from the northwest via the A8/A4'}, then into {hotel.district}</li>
                                <li><strong>Milan Area C:</strong> the central congestion zone charges private cars to enter; our licensed NCC vehicles handle access so we reach the hotel door.</li>
                                {dep
                                    ? <li><strong>Recommended departure:</strong> {airport.recommendedArrival}</li>
                                    : <li><strong>Meeting point:</strong> {airport.meetingPoint}.</li>}
                            </ul>

                            {/* About the hotel (UNIQUE) */}
                            <h2 className="text-2xl font-bold text-navy mt-10 mb-4">About the {hotel.name}</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">{hotel.description}</p>
                            <p className="text-gray-700 leading-relaxed mb-4">{hotel.dining} It is especially well suited to {hotel.suitedFor}.</p>
                            <div className="grid md:grid-cols-2 gap-6 mb-4">
                                <div className="bg-[#F8F9FA] p-5 rounded-2xl">
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-2">Close by</p>
                                    <ul className="space-y-1 text-sm text-gray-700">
                                        {hotel.nearby.map((w, i) => <li key={i}><CheckCircle className="w-4 h-4 text-gold inline mr-2" />{w.place} — {w.note}</li>)}
                                    </ul>
                                </div>
                                <div className="bg-[#F8F9FA] p-5 rounded-2xl">
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-2">Good to know</p>
                                    <ul className="space-y-1 text-sm text-gray-700">
                                        <li><strong>District:</strong> {hotel.district}</li>
                                        <li><strong>Address:</strong> {hotel.address}</li>
                                        <li><strong>Rating:</strong> <span className="inline-flex items-center gap-1">{Array.from({ length: hotel.stars }).map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />)}</span></li>
                                        <li><strong>From {airport.short}:</strong> {leg.distance} · {leg.duration}</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Popular nearby attractions */}
                            <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Popular Nearby Attractions</h2>
                            <ul className="grid sm:grid-cols-2 gap-2 text-gray-700 mb-4">
                                {hotel.landmarks.map((l, i) => <li key={i}><MapPin className="w-4 h-4 text-gold inline mr-2" />{l}</li>)}
                            </ul>

                            {/* Map */}
                            <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Location Map</h2>
                            <div className="rounded-2xl overflow-hidden mb-4"><MapEmbed /></div>

                            {/* Vehicle options */}
                            <h2 className="text-2xl font-bold text-navy mt-10 mb-4">Vehicle Options</h2>
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
                                {['Licensed NCC chauffeurs', 'Real-time flight monitoring', 'Meet & greet with name sign', 'Area C-registered vehicles', '24/7 availability', 'Fixed price — no hidden charges', 'Professional English-speaking drivers', 'Free cancellation (per terms)'].map((s, i) => (
                                    <p key={i} className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-gold shrink-0" /> {s}</p>
                                ))}
                            </div>
                        </div>

                        {/* Booking form sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-[#0F1C2E] p-8 rounded-[2rem] shadow-2xl lg:sticky lg:top-24">
                                <h2 className="text-xl font-bold text-white mb-1">Book This Transfer</h2>
                                <p className="text-gray-400 text-xs mb-6">Fixed price · Meet &amp; greet · Free cancellation (per terms)</p>
                                <BookingForm sourceName={`Milan Transfer: ${bookText}`} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FAQSection faqs={faqs} title={`${bookText} — FAQ`} />

            {/* Internal linking */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    {/* Reverse direction */}
                    <div className="bg-[#FBF8F0] border border-gold/30 rounded-2xl p-5 mb-10">
                        <p className="font-bold text-navy mb-1">{dep ? 'Arriving instead?' : 'Departing instead?'}</p>
                        <Link href={`/${reverseSlug}`} className="text-gold font-semibold hover:underline">
                            {dep ? `${airport.short} Airport to ${hotel.name} Transfer` : `${hotel.name} to ${airport.short} Airport Transfer`} <ChevronRight className="w-4 h-4 inline" />
                        </Link>
                    </div>

                    {/* Same hotel, other airports */}
                    <h2 className="text-2xl font-bold text-navy mb-4">The {hotel.name} From Milan's Other Airports</h2>
                    <div className="grid sm:grid-cols-2 gap-3 mb-10">
                        {otherAirports.map((a) => (
                            <Link key={a.code} href={`/${dep ? milanDepartureSlug(hotel, a) : milanArrivalSlug(a, hotel)}`} className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium">
                                <Plane className="w-4 h-4 text-gold" /> {dep ? `${hotel.name} to ${a.short} Airport` : `${a.short} Airport to ${hotel.name}`}
                            </Link>
                        ))}
                    </div>

                    {/* Related hotels */}
                    <h2 className="text-2xl font-bold text-navy mb-4">Other {airport.short} Airport Hotel Transfers</h2>
                    <div className="grid sm:grid-cols-2 gap-3 mb-10">
                        {related.map((h) => (
                            <Link key={h.slug} href={`/${dep ? milanDepartureSlug(h, airport) : milanArrivalSlug(airport, h)}`} className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium">
                                <ChevronRight className="w-4 h-4 text-gold" /> {dep ? `${h.name} to ${airport.short} Airport` : `${airport.short} Airport to ${h.name}`}
                            </Link>
                        ))}
                    </div>

                    <h3 className="text-xl font-bold text-navy mb-4">Milan Transfers &amp; Services</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                        <Link href="/milan-chauffeur-service" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><Plane className="w-4 h-4 text-gold" /> Milan Chauffeur Service</Link>
                        <Link href="/city/milan" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> Milan City Transfers</Link>
                        <Link href={airport.airportPage} className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> {airport.name} Guide</Link>
                        <Link href="/route/milan-to-lake-como-taxi" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> Milan to Lake Como Transfer</Link>
                        <Link href="/services/airport-transfers" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> Airport Transfer Service</Link>
                        <Link href="/services/hotel-transfers" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> Hotel Transfer Service</Link>
                    </div>

                    <div className="mt-10 text-center">
                        <Link href="/book-now" className="inline-block bg-[#0F1C2E] text-white font-bold px-10 py-4 rounded-full hover:bg-gold hover:text-navy transition-all">
                            Book Your {dep ? `${hotel.name} → ${airport.short}` : `${airport.short} → ${hotel.name}`} Transfer
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
