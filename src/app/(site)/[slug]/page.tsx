import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import ServiceSchema from '@/components/ServiceSchema';
import MapEmbed from '@/components/MapEmbed';
import { Clock, MapPin, Euro, CheckCircle, ChevronRight, Plane, ShieldCheck, Car } from 'lucide-react';
import {
    getAllAirportHotelTransfers,
    findAirportHotelTransfer,
    romeHotels,
} from '@/lib/airport-hotel-data';
import { getAllMilanTransfers, findMilanTransfer } from '@/lib/milan-transfer-data';
import MilanTransferContent from '@/components/MilanTransferContent';
import { getAllVenetoTransfers, findVenetoTransfer } from '@/lib/veneto-transfer-data';
import VenetoTransferContent from '@/components/VenetoTransferContent';
import { getAllCrossBorderTransfers, findCrossBorderTransfer, countries } from '@/lib/cross-border-data';
import CrossBorderContent from '@/components/CrossBorderContent';
import { getAllDistancePages, findDistancePage } from '@/lib/distance-pages-data';
import DistancePageContent from '@/components/DistancePageContent';

const SITE = 'https://www.italytaxiservice.com';

// Only the pre-defined transfer slugs render here; any other single-segment path 404s.
export const dynamicParams = false;

export function generateStaticParams() {
    return [
        ...getAllAirportHotelTransfers().map((t) => ({ slug: t.slug })),
        ...getAllMilanTransfers().map((t) => ({ slug: t.slug })),
        ...getAllVenetoTransfers().map((t) => ({ slug: t.slug })),
        ...getAllCrossBorderTransfers().map((t) => ({ slug: t.slug })),
        ...getAllDistancePages().map((d) => ({ slug: d.slug })),
    ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const t = findAirportHotelTransfer(slug);
    if (!t) {
        const m = findMilanTransfer(slug);
        if (m) {
            const dep = m.direction === 'hotel-to-airport';
            const title = dep
                ? `${m.hotel.name} to ${m.airport.short} Airport Transfer`
                : `${m.airport.short} Airport to ${m.hotel.name} Transfer`;
            const description = dep
                ? `Private departure transfer from the ${m.hotel.name} (${m.hotel.district}) to ${m.airport.name}. Fixed price, on-time pickup, ${m.leg.duration} (${m.leg.distance}), luggage assistance.`
                : `Private transfer from ${m.airport.name} to the ${m.hotel.name} (${m.hotel.district}). Fixed price, ${m.leg.duration} (${m.leg.distance}), meet & greet and flight monitoring.`;
            const shortTitle = dep ? `${m.hotel.name} to ${m.airport.short} Transfer` : `${m.airport.short} to ${m.hotel.name} Transfer`;
            return {
                title: title.length > 60 ? shortTitle : title,
                description: description.slice(0, 160),
                alternates: { canonical: `/${slug}` },
                openGraph: {
                    title, description, url: `${SITE}/${slug}`, type: 'website',
                    images: [{ url: `${SITE}/images/milan airport.jpg`, width: 1200, height: 630, alt: `${m.hotel.name} ${m.airport.name} private transfer` }],
                },
                twitter: { card: 'summary_large_image', title, description },
            };
        }
        const v = findVenetoTransfer(slug);
        if (v) {
            const vdep = v.direction === 'dest-to-airport';
            const vtitle = vdep
                ? `${v.dest.name} to ${v.airport.short} Airport Transfer`
                : `${v.airport.short} Airport to ${v.dest.name} Transfer`;
            const vdescription = vdep
                ? `Private departure transfer from ${v.dest.name} (${v.dest.area}) to ${v.airport.name}. Fixed price, on-time pickup, ${v.leg.duration} (${v.leg.distance}), professional drivers — book online.`
                : `Private transfer from ${v.airport.name} to ${v.dest.name} (${v.dest.area}). Fixed price, ${v.leg.duration} (${v.leg.distance}), meet & greet, professional drivers — book online.`;
            const vshortTitle = vdep ? `${v.dest.name} to ${v.airport.short} Transfer` : `${v.airport.short} to ${v.dest.name} Transfer`;
            return {
                title: vtitle.length > 60 ? vshortTitle : vtitle,
                description: vdescription.slice(0, 160),
                alternates: { canonical: `/${slug}` },
                openGraph: {
                    title: vtitle, description: vdescription, url: `${SITE}/${slug}`, type: 'website',
                    images: [{ url: `${SITE}/images/venice airport.webp`, width: 1200, height: 630, alt: `${v.dest.name} ${v.airport.name} private transfer` }],
                },
                twitter: { card: 'summary_large_image', title: vtitle, description: vdescription },
            };
        }
        const cb = findCrossBorderTransfer(slug);
        if (cb) {
            const country = countries[cb.route.countryCode];
            const cbtitle = `${cb.origin} to ${cb.dest} Private Transfer`;
            const cbdescription = `Private ${cb.origin} to ${cb.dest} transfer (Italy–${country.name}). Fixed price, professional chauffeur, door-to-door, ${cb.route.duration}. Book online.`;
            return {
                title: cbtitle.length > 60 ? `${cb.origin} to ${cb.dest} Transfer` : cbtitle,
                description: cbdescription.slice(0, 160),
                alternates: { canonical: `/${slug}` },
                openGraph: {
                    title: cbtitle, description: cbdescription, url: `${SITE}/${slug}`, type: 'website',
                    images: [{ url: `${SITE}/images/hero.webp`, width: 1200, height: 630, alt: `${cb.origin} to ${cb.dest} private cross-border transfer` }],
                },
                twitter: { card: 'summary_large_image', title: cbtitle, description: cbdescription },
            };
        }
        const dp = findDistancePage(slug);
        if (dp) {
            return {
                title: dp.seoTitle,
                description: dp.metaDescription,
                alternates: { canonical: `/${slug}` },
                openGraph: {
                    title: dp.seoTitle, description: dp.metaDescription, url: `${SITE}/${slug}`, type: 'website',
                    images: [{ url: `${SITE}${dp.heroImage}`, width: 1200, height: 630, alt: dp.h1 }],
                },
                twitter: { card: 'summary_large_image', title: dp.seoTitle, description: dp.metaDescription },
            };
        }
        return { title: 'Page Not Found' };
    }
    const dep = t.direction === 'hotel-to-airport';
    const title = dep
        ? `${t.hotel.name} to ${t.airport.short} Airport Transfer`
        : `${t.airport.short} Airport to ${t.hotel.name} Transfer`;
    const description = dep
        ? `Private departure transfer from ${t.hotel.name} (${t.hotel.area}) to ${t.airport.name}. Fixed price, on-time hotel pickup, ${t.airport.duration} journey, luggage assistance.`
        : `Private transfer from ${t.airport.name} to ${t.hotel.name} (${t.hotel.area}). Fixed price, ${t.airport.duration} journey, meet & greet and flight tracking.`;
    const url = `${SITE}/${slug}`;
    return {
        title: title.length > 60 ? (dep ? `${t.hotel.name} to ${t.airport.short} Transfer` : `${t.airport.short} to ${t.hotel.name} Transfer`) : title,
        description: description.slice(0, 160),
        alternates: { canonical: `/${slug}` },
        openGraph: {
            title, description, url, type: 'website',
            images: [{ url: `${SITE}/images/rome airport.webp`, width: 1200, height: 630, alt: `${t.hotel.name} ${t.airport.name} private transfer` }],
        },
        twitter: { card: 'summary_large_image', title, description },
    };
}

export default async function AirportHotelTransferPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const t = findAirportHotelTransfer(slug);
    if (!t) {
        const m = findMilanTransfer(slug);
        if (m) return <MilanTransferContent combo={m} />;
        const v = findVenetoTransfer(slug);
        if (v) return <VenetoTransferContent combo={v} />;
        const cb = findCrossBorderTransfer(slug);
        if (cb) return <CrossBorderContent combo={cb} />;
        const dp = findDistancePage(slug);
        if (dp) return <DistancePageContent page={dp} />;
        notFound();
    }

    const { airport, hotel, direction } = t;
    const dep = direction === 'hotel-to-airport';
    const airportPageSlug = airport.slugPart.replace('-airport', ''); // rome-fiumicino / rome-ciampino
    const reverseSlug = dep ? `${airport.slugPart}-to-${hotel.slugPart}-transfer` : `${hotel.slugPart}-to-${airport.slugPart}-transfer`;
    const relatedHotels = romeHotels.filter((h) => h.slugPart !== hotel.slugPart).slice(0, 5);

    const h1 = dep
        ? `Private Transfer from ${hotel.name} to ${airport.name}`
        : `Private Transfer from ${airport.name} to ${hotel.name}`;

    const faqs = dep ? [
        { q: `How early should I leave ${hotel.name} for ${airport.short} Airport?`, a: `${airport.recommendedArrival} The transfer itself takes about ${airport.duration} (${airport.distance}), so your driver will recommend a hotel pickup time that comfortably covers both the drive and check-in.` },
        { q: `Where does the driver pick me up at ${hotel.name}?`, a: `Your driver arrives at the reception/lobby of ${hotel.name} in ${hotel.area} at the agreed time, helps with your luggage, and drives you directly to your departure terminal at ${airport.name}.` },
        { q: `Will the driver help with my luggage?`, a: `Yes — the driver assists with loading and unloading your bags at both the hotel and the airport terminal, so you travel hands-free on departure day.` },
        { q: `Which terminal will I be dropped at?`, a: `You'll be dropped at the correct departure terminal for your airline. ${airport.terminals} Tell us your flight when booking and the driver will take you to the right one.` },
        { q: `Can I book a transfer late at night or very early?`, a: `Yes, departure transfers operate 24/7 — ideal for the early-morning and late-night flights common at ${airport.short}, when public transport is limited or not running.` },
        { q: `What if my flight time changes?`, a: `Just let us know the new time and we'll re-schedule your hotel pickup accordingly. Adjusting the pickup to your revised departure is straightforward when arranged in advance.` },
        { q: `Is the transfer private?`, a: `Yes — it is a fully private, door-to-door service for you and your party only, with no shared rides or extra stops between ${hotel.name} and ${airport.name}.` },
        { q: `Can child seats be requested?`, a: `Yes, infant, toddler and booster seats are available on request — add your children's ages when booking and the right seats will be fitted.` },
        { q: `Is the price fixed and can I pay online?`, a: `Yes. The fare is fixed and agreed in advance with no meter, and secure online payment is available. The final fare depends on vehicle type, passenger count, luggage, pickup time and season.` },
        { q: `Can I cancel my booking?`, a: `Yes, bookings can be cancelled according to our cancellation terms — we recommend confirming the policy when you book, especially for peak-season departures.` },
    ] : [
        { q: `How long is the transfer from ${airport.name} to ${hotel.name}?`, a: `The private transfer takes approximately ${airport.duration} (about ${airport.distance}), depending on traffic. Your driver always takes the fastest route.` },
        { q: `Will the driver wait if my flight is delayed?`, a: `Yes. We monitor your flight in real time, so if it lands early or late the pickup is adjusted automatically, with free waiting time after landing for passport control and baggage.` },
        { q: `Where will the driver meet me at ${airport.short} Airport?`, a: `Your driver waits in the arrivals hall with a name sign (meet & greet), helps with your luggage and walks you to the vehicle. ${airport.terminals}` },
        { q: `Is this a private transfer or a shared shuttle?`, a: `It is a fully private, door-to-door transfer for you and your party only — no other passengers and no extra stops between ${airport.short} and ${hotel.name}.` },
        { q: `Can I book this transfer last minute?`, a: `Yes, subject to availability, though booking in advance is recommended in peak season to guarantee your vehicle and meeting point.` },
        { q: `Can I pay online and is the price fixed?`, a: `Yes — the fare is fixed and agreed before travel with no meter, and secure online payment is available.` },
        { q: `Do you provide child seats?`, a: `Yes, infant, toddler and booster seats are available on request — just add your children's ages when booking.` },
        { q: `How much luggage is included?`, a: `Tell us the number of passengers and bags and we'll assign the right vehicle, from a sedan up to a minivan or larger, so everything fits comfortably.` },
        { q: `Can the driver reach ${hotel.name} in ${hotel.area}?`, a: `Yes — as a licensed service we reach ${hotel.name} door-to-door, including streets within Rome's limited-traffic (ZTL) zones that rental cars cannot enter without fines.` },
        { q: `Is the ${airport.short} to ${hotel.name} transfer available 24/7?`, a: `Yes, transfers run around the clock, including very early and late arrivals when trains and public transport at ${airport.short} are limited.` },
    ];

    const webPageSchema = {
        '@context': 'https://schema.org', '@type': 'WebPage',
        name: h1, url: `${SITE}/${slug}`,
        description: dep
            ? `Private departure transfer from ${hotel.name} in ${hotel.area}, Rome, to ${airport.name}.`
            : `Private door-to-door transfer from ${airport.name} to ${hotel.name} in ${hotel.area}, Rome.`,
        isPartOf: { '@type': 'WebSite', name: 'Italy Taxi Service', url: SITE },
        about: { '@type': 'Hotel', name: hotel.name, address: { '@type': 'PostalAddress', addressLocality: 'Rome', addressCountry: 'IT' } },
    };

    const cell = 'px-4 py-3 border border-gray-100 text-sm';

    return (
        <main className="font-inter bg-white text-navy">
            <ServiceSchema
                name={h1}
                description={dep
                    ? `Fixed-price private departure transfer from ${hotel.name}, ${hotel.area}, to ${airport.name}. On-time hotel pickup, luggage assistance and door-to-door service.`
                    : `Fixed-price private airport transfer from ${airport.name} to ${hotel.name}, ${hotel.area}, Rome. Meet & greet, flight tracking and door-to-door service.`}
                url={`${SITE}/${slug}`}
                image={`${SITE}/images/rome airport.webp`}
            />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <Navbar />

            <PageHero
                titleTop={dep ? `Private Transfer from ${hotel.name} to` : `Private Transfer from ${airport.short} Airport to`}
                titleBottom={dep ? `${airport.short} Airport` : hotel.name}
                description={dep
                    ? `Fixed-price, on-time private transfer from ${hotel.name} in ${hotel.area} to ${airport.name} for your departure. ${airport.distance} · ${airport.duration} · luggage assistance included.`
                    : `Fixed-price, door-to-door private transfer from ${airport.name} to ${hotel.name} in ${hotel.area}. ${airport.distance} · ${airport.duration} · meet & greet included.`}
                backgroundImage="/images/rome airport.webp"
                buttonText="Book Your Transfer"
                buttonLink="/book-now"
                breadcrumbs={dep ? [
                    { name: 'Rome Hotel Transfers', item: '/services/hotel-transfers' },
                    { name: hotel.name, item: `/${slug}` },
                    { name: `${airport.short} Airport`, item: `/airport/${airportPageSlug}` },
                ] : [
                    { name: 'Rome Airport Transfers', item: '/rome-airport-transfer' },
                    { name: `${airport.short} Airport`, item: `/airport/${airportPageSlug}` },
                    { name: hotel.name, item: `/${slug}` },
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
                            <p className="text-navy font-extrabold">{airport.duration}</p>
                        </div>
                        <div className="bg-[#F8F9FA] p-5 rounded-2xl text-center">
                            <MapPin className="w-6 h-6 text-gold mx-auto mb-2" />
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Distance</p>
                            <p className="text-navy font-extrabold">{airport.distance}</p>
                        </div>
                        <div className="bg-[#F8F9FA] p-5 rounded-2xl text-center col-span-2 md:col-span-1">
                            <Euro className="w-6 h-6 text-gold mx-auto mb-2" />
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Pricing</p>
                            <p className="text-navy font-extrabold">Fixed price</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <Link href="/book-now" className="inline-block bg-[#0F1C2E] text-white font-bold px-8 py-4 rounded-full hover:bg-gold hover:text-navy transition-all">Book Your Transfer</Link>
                        <Link href="/book-now" className="inline-block bg-gold text-navy font-bold px-8 py-4 rounded-full hover:bg-[#0F1C2E] hover:text-white transition-all">Get Instant Quote</Link>
                    </div>

                    {/* Overview */}
                    <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Overview</h2>
                    {dep ? (
                        <>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Departure day should be the easy part of your trip. Booking a private transfer from {hotel.name} to {airport.name} means a professional driver arrives at your hotel on time, loads your luggage, and takes you directly to the correct departure terminal — no taxi queue, no train connections, and no watching the meter in traffic.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                It is the most reliable way to leave {hotel.area}: an <strong>on-time pickup</strong> from the lobby, a <strong>private vehicle</strong> just for your party, a <strong>comfortable door-to-door ride</strong>, and <strong>luggage assistance</strong> at both ends — all for a fixed, all-inclusive price agreed in advance.
                            </p>
                        </>
                    ) : (
                        <>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Arriving at {airport.name} and heading to {hotel.name}? A private transfer is the most comfortable way to begin your stay in Rome. Rather than queuing for a taxi or changing between trains with your luggage, a professional, English-speaking driver meets you in the arrivals hall, helps with your bags, and takes you directly to the hotel&apos;s door in {hotel.area}.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                {airport.blurb} Every transfer includes <strong>flight monitoring</strong>, <strong>meet &amp; greet</strong>, <strong>luggage assistance</strong> and a fixed, all-inclusive fare — a genuine door-to-door service with no meter and no hidden charges.
                            </p>
                        </>
                    )}

                    {/* Why */}
                    <h2 className="text-2xl font-bold text-navy mt-12 mb-4">{dep ? 'Why Book a Hotel-to-Airport Transfer?' : 'Why Choose a Private Transfer'}</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        {dep
                            ? `On departure day, certainty matters. A pre-booked transfer from ${hotel.name} gives you a guaranteed pickup at a set time, a fixed price with no surprises, and a professional chauffeur who knows the fastest route to ${airport.short} — so you avoid the hotel taxi-rank wait, the luggage struggle on the train, and any risk of missing check-in. It is the stress-free way to start your journey home.`
                            : `Public options from ${airport.short} each have drawbacks. The taxi rank can mean a long wait at peak times; the train requires you to manage luggage and onward connections to reach ${hotel.area}; buses are slow and crowded; and ride-sharing is limited and unpredictable in Rome. A private transfer removes all of that: one fixed price, a guaranteed driver, and a direct ride to ${hotel.name}.`}
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
                                <tr><td className={`${cell} font-bold`}>Bus</td><td className={cell}>Low</td><td className={cell}>Fixed ticket</td><td className={cell}>Basic</td><td className={cell}>Timetabled</td><td className={cell}>Limited</td><td className={cell}>No</td></tr>
                                <tr><td className={`${cell} font-bold`}>Ride-sharing</td><td className={cell}>Variable</td><td className={cell}>Surge pricing</td><td className={cell}>Variable</td><td className={cell}>Unpredictable</td><td className={cell}>Limited</td><td className={cell}>Yes</td></tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Process */}
                    {dep ? (
                        <>
                            <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Pickup Process at {hotel.name}</h2>
                            <ol className="space-y-2 text-gray-700 mb-4 list-decimal list-inside">
                                <li><strong>Confirmed pickup time:</strong> we recommend a hotel pickup that covers the drive plus airport check-in (see below).</li>
                                <li><strong>Driver at reception:</strong> your chauffeur arrives at the {hotel.name} lobby/entrance and meets you there.</li>
                                <li><strong>Luggage assistance:</strong> the driver helps load your bags into a clean, private vehicle.</li>
                                <li><strong>Direct transfer:</strong> a non-stop ride to the correct departure terminal at {airport.name}.</li>
                                <li><strong>Flight-aware scheduling:</strong> tell us your flight and we time the pickup so you arrive with comfortable margin.</li>
                            </ol>
                        </>
                    ) : (
                        <>
                            <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Airport Pickup Process at {airport.short}</h2>
                            <ol className="space-y-2 text-gray-700 mb-4 list-decimal list-inside">
                                <li><strong>Flight monitoring:</strong> we track your flight, so the driver is timed to your actual landing.</li>
                                <li><strong>Meet &amp; greet:</strong> your driver waits in the arrivals hall with a name sign.</li>
                                <li><strong>Free waiting time:</strong> a grace period covers passport control and baggage.</li>
                                <li><strong>Luggage assistance:</strong> the driver helps you to the vehicle.</li>
                                <li><strong>Direct contact:</strong> you receive the driver&apos;s details in advance for peace of mind.</li>
                            </ol>
                        </>
                    )}

                    {/* Journey information */}
                    <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Journey Information</h2>
                    <ul className="space-y-2 text-gray-700 mb-4">
                        <li><strong>Estimated duration:</strong> {airport.duration}</li>
                        <li><strong>Distance:</strong> {airport.distance} between {hotel.area} and {airport.short}</li>
                        <li><strong>Typical traffic:</strong> heaviest during weekday morning and evening peaks; the driver adjusts the route and your pickup time accordingly.</li>
                        {dep ? (
                            <>
                                <li><strong>Best departure time:</strong> {airport.recommendedArrival}</li>
                                <li><strong>Drop-off:</strong> your airline&apos;s departure terminal at {airport.name}.</li>
                            </>
                        ) : (
                            <>
                                <li><strong>Pickup:</strong> arrivals hall at {airport.name}, with meet &amp; greet.</li>
                                <li><strong>Drop-off:</strong> directly at the entrance of {hotel.name}.</li>
                            </>
                        )}
                    </ul>

                    {/* About the hotel (UNIQUE) */}
                    <h2 className="text-2xl font-bold text-navy mt-12 mb-4">About {hotel.name}</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">{hotel.description}</p>
                    <p className="text-gray-700 leading-relaxed mb-4">{hotel.dining} It is especially well suited to {hotel.suitedFor}.</p>
                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                        <div className="bg-[#F8F9FA] p-5 rounded-2xl">
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-2">Within walking distance</p>
                            <ul className="space-y-1 text-sm text-gray-700">
                                {hotel.walk.map((w, i) => <li key={i}><CheckCircle className="w-4 h-4 text-gold inline mr-2" />{w.place} — {w.mins}</li>)}
                            </ul>
                        </div>
                        <div className="bg-[#F8F9FA] p-5 rounded-2xl">
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-2">Good to know</p>
                            <ul className="space-y-1 text-sm text-gray-700">
                                <li><strong>Area:</strong> {hotel.area}</li>
                                <li><strong>Style:</strong> {hotel.type}</li>
                                <li><strong>Nearest metro:</strong> {hotel.nearestMetro}</li>
                                <li><strong>Nearby attractions:</strong> {hotel.attractions.join(', ')}</li>
                            </ul>
                        </div>
                    </div>

                    {/* About the airport (departure pages) */}
                    {dep && (
                        <>
                            <h2 className="text-2xl font-bold text-navy mt-12 mb-4">About {airport.name}</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">{airport.about}</p>
                            <ul className="space-y-2 text-gray-700 mb-4">
                                <li><strong>Terminals:</strong> {airport.terminals}</li>
                                <li><strong>Distance from {hotel.area}:</strong> {airport.distance} ({airport.duration} by private transfer)</li>
                                <li><strong>Recommended arrival:</strong> {airport.recommendedArrival}</li>
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
                        <li><Car className="w-4 h-4 text-gold inline mr-2" /><strong>Business Class</strong> — VIP departures</li>
                        <li><Car className="w-4 h-4 text-gold inline mr-2" /><strong>Group Transfers</strong> — minibus on request</li>
                    </ul>

                    {/* Pricing */}
                    <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Pricing</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Your fare is fixed and confirmed before you travel. The final fare depends on vehicle type, passenger count, luggage requirements, pickup time and travel season — request a free quote for an exact, all-inclusive price with no hidden charges.
                    </p>

                    {/* Trust signals */}
                    <div className="bg-[#0F1C2E] text-white rounded-2xl p-6 my-8 grid sm:grid-cols-2 gap-3 text-sm">
                        {['Licensed, professional chauffeurs', 'Flight-aware scheduling', 'Meet & greet service', 'Clean, modern vehicles', '24/7 availability', 'Fixed price — no hidden charges', 'Secure online booking', 'Free cancellation (per terms)'].map((s, i) => (
                            <p key={i} className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-gold" /> {s}</p>
                        ))}
                    </div>
                </div>
            </section>

            <FAQSection faqs={faqs} title={`${dep ? `${hotel.name} to ${airport.short} Airport` : `${airport.short} Airport to ${hotel.name}`} — FAQ`} />

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

                    <h2 className="text-2xl font-bold text-navy mb-6">{dep ? `More ${airport.short} Airport Departures` : `More ${airport.short} Airport Transfers`}</h2>
                    <div className="grid sm:grid-cols-2 gap-3 mb-10">
                        {relatedHotels.map((h) => (
                            <Link key={h.slugPart} href={dep ? `/${h.slugPart}-to-${airport.slugPart}-transfer` : `/${airport.slugPart}-to-${h.slugPart}-transfer`} className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium">
                                <ChevronRight className="w-4 h-4 text-gold" /> {dep ? `${h.name} to ${airport.short} Airport` : `${airport.short} Airport to ${h.name}`}
                            </Link>
                        ))}
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-4">Popular Rome Transfers &amp; Services</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                        <Link href="/rome-airport-transfer" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><Plane className="w-4 h-4 text-gold" /> Rome Airport Transfers</Link>
                        <Link href="/services/hotel-transfers" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> Rome Hotel Transfers</Link>
                        <Link href={`/airport/${airportPageSlug}`} className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> {airport.name} Guide</Link>
                        <Link href="/city/rome" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> Rome Private Transfers</Link>
                        <Link href="/services/airport-transfers" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> Airport Transfer Service</Link>
                        <Link href="/route/rome-to-vatican-taxi" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> Vatican Transfers</Link>
                        <Link href="/attraction-transfer/colosseum-taxi-transfer" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> Colosseum Transfers</Link>
                        <Link href="/services/cruise-port-transfers" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> Civitavecchia Port Transfers</Link>
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
