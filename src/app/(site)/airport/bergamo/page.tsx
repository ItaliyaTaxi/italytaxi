import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ServiceSchema from '@/components/ServiceSchema';
import BookingForm from '@/components/BookingForm';
import FAQSection from '@/components/FAQSection';
import MapEmbed from '@/components/MapEmbed';
import { MapPin, ChevronRight, MessageCircle, CheckCircle, Mountain, Waves, Building2, Plane } from 'lucide-react';

const SITE = 'https://www.italytaxiservice.com';
const CANONICAL = '/airport/bergamo';
// Generic transfer asset. No Bergamo-specific photograph exists in the project,
// so the alt text describes what the image actually shows rather than implying
// it is a picture of BGY.
const HERO_IMAGE = '/images/airport-transfer.webp';
const HERO_ALT = 'A private transfer vehicle at an airport pickup point';
const WHATSAPP =
    'https://wa.me/923148932631?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20a%20private%20transfer%20from%20Bergamo%20Airport%20(BGY).';

export const metadata: Metadata = {
    title: { absolute: 'Bergamo Airport (BGY) Transfers | Italy Taxi Service' },
    description:
        'Pre-book a private transfer from Bergamo Airport (Orio al Serio, BGY) to Milan, Bergamo Città Alta, Lake Como or Lake Iseo. Request a quotation.',
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: 'Private Transfers from Bergamo Airport (BGY)',
        description:
            'Private airport transfers from Bergamo Orio al Serio (BGY) to Milan, Bergamo Città Alta, Lake Como and Lake Iseo.',
        url: `${SITE}${CANONICAL}`,
        type: 'website',
        images: [{ url: `${SITE}${HERO_IMAGE}`, alt: HERO_ALT }],
    },
};

const destinations = [
    {
        icon: Building2,
        h: 'Milan',
        p: 'The most requested direction from BGY — central Milan, hotels, apartments, Milano Centrale and business addresses. Give us the exact address and it is quoted door to door.',
    },
    {
        icon: Mountain,
        h: 'Bergamo Città Alta',
        p: 'The walled upper town above Bergamo, much closer to the airport than Milan is. Its lanes are steep and partly restricted to traffic, so tell us your accommodation and the drop-off point is agreed with the quotation.',
    },
    {
        icon: Waves,
        h: 'Lake Como',
        p: 'Transfers to the Lake Como area can be arranged. The lake is long and the shore roads are slow, so the journey depends a great deal on which town you are heading for — send the destination and it is quoted for that route.',
    },
    {
        icon: Waves,
        h: 'Lake Iseo',
        p: 'The quieter lake east of Bergamo, including the shoreline towns and the Franciacorta side. Transfers here can be arranged on request with your specific destination.',
    },
];

const whenUseful = [
    'A late-night arrival or a very early departure, when scheduled services are thinner.',
    'Families, or groups travelling together who would rather not split across services.',
    'Several bags, bulky luggage or equipment that is awkward on a coach.',
    'A destination that is not on a direct coach or rail route from the airport.',
    'Travelling straight to a hotel, apartment or other agreed address rather than a city terminus.',
    'A preference for arranging the vehicle in advance rather than queuing on arrival.',
];

const quoteChecklist = [
    'Your pickup location — the airport, or the full address if we are collecting you.',
    'Your destination, as a full address where you have one.',
    'The travel date.',
    'Your flight number, where the journey is tied to a flight.',
    'The arrival or departure time.',
    'How many passengers are travelling.',
    'How many bags, and anything oversized such as skis or a pushchair.',
    'Any child seat required, with the age of each child.',
];

const hotelRoutes = [
    { href: '/milan-bergamo-airport-to-hotel-berna-milan', label: 'Hotel Berna, beside Milano Centrale' },
    { href: '/milan-bergamo-airport-to-radisson-collection-santa-sofia-milan', label: 'Radisson Collection Santa Sofia, Missori' },
    { href: '/milan-bergamo-airport-to-chateau-monfort', label: 'Château Monfort, Porta Venezia' },
    { href: '/milan-bergamo-airport-to-hotel-viu-milan', label: 'Hotel VIU, towards Monumentale' },
    { href: '/milan-bergamo-airport-to-bulgari-hotel-milano', label: 'Bulgari Hotel, in Brera' },
    { href: '/milan-bergamo-airport-to-melia-milano', label: 'Meliá Milano, for Fiera and CityLife' },
];

const departureRoutes = [
    { href: '/hotel-principe-di-savoia-to-milan-bergamo-airport', label: 'Principe di Savoia, Repubblica — heading to BGY' },
    { href: '/hotel-dei-cavalieri-milano-to-milan-bergamo-airport', label: 'Hotel Dei Cavalieri, Duomo — heading to BGY' },
];

const faqs = [
    {
        q: 'Where is Bergamo Airport?',
        a: 'Bergamo Airport, officially Orio al Serio International Airport (IATA code BGY), sits beside the city of Bergamo in Lombardy, roughly 45 to 50 km north-east of Milan. It is often marketed as a Milan airport, but it is not in Milan.',
    },
    {
        q: 'Is Bergamo Airport the same as Milan Malpensa or Milan Linate?',
        a: 'No. They are three separate airports. Malpensa lies north-west of Milan, Linate sits close to the east of the city, and Bergamo Orio al Serio is north-east of Milan next to Bergamo. Check which one your flight actually uses before arranging transport, because the journeys are entirely different.',
    },
    {
        q: 'How can I travel from Bergamo Airport to Milan?',
        a: 'There are scheduled airport coaches towards Milano Centrale, a bus-and-train combination via Bergamo’s railway station, taxis from the rank, and pre-booked private transfers. Which suits you depends mainly on your luggage, your group size and the time of day. Our Bergamo Airport to Milan guide compares the options in detail.',
    },
    {
        q: 'Does Bergamo Airport have its own railway station?',
        a: 'Not at present. The rail option today means travelling to Bergamo’s railway station first and taking a train onward. A rail connection to the airport has been under development, so it is worth checking the current arrangements close to your travel date rather than relying on older guidance.',
    },
    {
        q: 'Can I book a private transfer from BGY to Bergamo Città Alta?',
        a: 'Yes, transfers to Bergamo Città Alta can be arranged. The upper town has narrow, partly restricted streets, so send your accommodation address with your request and the drop-off arrangements are confirmed with your quotation.',
    },
    {
        q: 'Can I arrange a transfer from Bergamo Airport to Lake Como or Lake Iseo?',
        a: 'Yes, both can be arranged. Each lake covers a lot of ground and the shore roads are slower than the motorway, so the route depends on the specific town you are travelling to. Include your exact destination when you request a quotation and it is priced for that journey.',
    },
    {
        q: 'What information do you need to quote an airport transfer?',
        a: 'Your pickup point and destination, the travel date and time, your flight number where the journey is tied to a flight, the number of passengers, how many bags you have, and any child seat you need. Child seats are available free of charge on request — give the age of each child so the right restraint is arranged.',
    },
    {
        q: 'How are the airport pickup arrangements confirmed?',
        a: 'We do not publish a single fixed meeting point for Bergamo Airport on this page. Send your flight number and arrival time with your request, and the pickup arrangements are set out in your booking details and confirmed with you before you travel, so you know where to go before you land.',
    },
    {
        q: 'What does a quotation include, and can I cancel?',
        a: 'Under our published terms, quotations are all-inclusive and cover motorway tolls, road charges, fuel and parking, and nothing is added at the end of the journey without your prior agreement. Cancellation is free with more than 24 hours’ notice before the scheduled pickup, and amendments are accepted free of charge in the same window, subject to availability.',
    },
];

const relatedLinks = [
    { href: '/blog/bergamo-airport-to-milan-guide', label: 'Bergamo Airport to Milan: comparing coach, train, taxi and transfer' },
    { href: '/route/bergamo-airport-to-milan-taxi', label: 'Bergamo Airport to Milan private route' },
    { href: '/airport/milan-malpensa', label: 'Milan Malpensa Airport (MXP) transfers' },
    { href: '/airport/milan-linate', label: 'Milan Linate Airport (LIN) transfers' },
    { href: '/city/milan', label: 'Milan taxi and transfer service' },
    { href: '/services/airport-transfers', label: 'Airport transfer service across Italy' },
];

export default function BergamoAirportPage() {
    return (
        <main className="font-inter bg-white text-navy-rich">
            <ServiceSchema
                name="Private Transfers from Bergamo Airport (BGY)"
                description="Pre-booked private transfers from Bergamo Orio al Serio Airport (BGY) to Milan, Bergamo Citt&agrave; Alta, Lake Como and Lake Iseo. Quotation provided for review before booking."
                url={`${SITE}${CANONICAL}`}
                image={`${SITE}${HERO_IMAGE}`}
            />
            <Navbar />

            <PageHero
                titleTop="Private Transfers from"
                titleBottom="Bergamo Airport (BGY)"
                description="Pre-book a private transfer from Bergamo Orio al Serio Airport to Milan, Bergamo Citt&agrave; Alta, Lake Como or Lake Iseo. Send your flight and destination, and we will come back with a quotation to review before you book."
                backgroundImage={HERO_IMAGE}
                buttonText="Request a Quotation"
                buttonLink="#quote"
                breadcrumbs={[
                    { name: 'Airport Transfers', item: '/services/airport-transfers' },
                    { name: 'Bergamo Airport', item: CANONICAL },
                ]}
            />

            {/* B. Where the airport is — short; the guide owns the long comparison */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-6">Where Bergamo Airport is</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Bergamo Airport is officially <strong>Orio al Serio International Airport</strong>, IATA code <strong>BGY</strong>. It sits next to the city of Bergamo in Lombardy, roughly 45 to 50 km north-east of Milan, and it is a separate airport from both Milan Malpensa and Milan Linate.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        That distance is the thing most worth knowing in advance: the airport is widely marketed under Milan&rsquo;s name, so a good number of passengers only discover on arrival that the city is an hour or so away. If you want the full breakdown of how the options compare, our{' '}
                        <Link href="/blog/bergamo-airport-to-milan-guide" className="text-gold font-semibold hover:underline">
                            Bergamo Airport to Milan guide
                        </Link>{' '}
                        covers it properly.
                    </p>
                </div>
            </section>

            {/* C. Getting to Milan — fair comparison, durable rail wording */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-8">Getting from Bergamo Airport to Milan</h2>
                    <div className="space-y-7">
                        <div>
                            <h3 className="text-xl font-bold text-navy mb-2">Airport coach</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Scheduled coach services run between the airport and Milano Centrale. They are the standard choice for travellers with light luggage, and they run to their own timetable rather than to your flight. Check the operator directly for current departures and fares.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-navy mb-2">Bus and train via Bergamo station</h3>
                            <p className="text-gray-700 leading-relaxed">
                                A local bus connects the airport with Bergamo&rsquo;s railway station, from which trains continue towards Milan. It suits travellers who are actually going to Bergamo, or who would rather be on a train than a motorway coach, and it involves at least one change with your bags.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-navy mb-2">Does the airport have a station?</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Not at present. The rail route today means reaching Bergamo&rsquo;s station first. A rail connection serving the airport has been under development, so it is worth checking the current arrangements close to your travel date rather than relying on older guidance — we are deliberately not putting a date on it here.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-navy mb-2">Taxi</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Taxis wait at the rank outside arrivals and need no booking, which is their advantage. The trade-off is that a long transfer into another province is not what a rank taxi is set up for, and the rank can empty quickly when several flights land together.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-navy mb-2">Pre-booked private transfer</h3>
                            <p className="text-gray-700 leading-relaxed">
                                A private transfer is arranged in advance for your party alone and goes to the address you give us rather than a city terminus. It is not automatically the quickest or the cheapest way to reach Milan — that depends on your group, your luggage and the hour — but it removes the timetable from the equation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* D. When a transfer may be useful — qualified throughout */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-4">When a private transfer may be useful</h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                        A transfer is not the right answer for every arrival. These are the situations where travellers most often find it worth pre-booking:
                    </p>
                    <ul className="space-y-3">
                        {whenUseful.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                <span className="text-gray-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* E. Confirmed destinations */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold text-navy mb-4">Where we can take you from BGY</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-2xl">
                        Transfers from Bergamo Airport are arranged to these destinations. Journey details depend on your exact address, so send it with your request and the route is quoted for that specific destination.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
                        {destinations.map((d) => (
                            <div key={d.h}>
                                <div className="flex items-center gap-2 mb-3">
                                    <d.icon className="w-5 h-5 text-gold" />
                                    <h3 className="font-bold text-navy text-lg">{d.h}</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">{d.p}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-gray-500 text-sm mt-10 leading-relaxed">
                        Travelling somewhere else in Lombardy or northern Italy? Send the destination with your enquiry and we will confirm what can be arranged rather than guess at it here.
                    </p>
                </div>
            </section>

            {/* F. Hotel transfer cluster */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold text-navy mb-4">Bergamo Airport hotel transfers</h2>
                    <p className="text-gray-600 leading-relaxed mb-10 max-w-2xl">
                        If you are heading to a Milan hotel, these pages cover the journey for some of the more frequently requested addresses. Your own hotel does not need to be listed — send the address and it is quoted the same way.
                    </p>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                        <div>
                            <p className="text-gold text-xs font-bold uppercase tracking-[0.25em] mb-5">Arriving at BGY</p>
                            <div className="space-y-1">
                                {hotelRoutes.map((l, i) => (
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
                        <div>
                            <p className="text-gold text-xs font-bold uppercase tracking-[0.25em] mb-5">Departing to BGY</p>
                            <div className="space-y-1">
                                {departureRoutes.map((l, i) => (
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
                            <p className="text-gray-500 text-sm mt-6 leading-relaxed">
                                For a departure, send your flight time as well as the pickup address so the pickup can be planned around it.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* G. Arrival and pickup — transparent, no invented procedure */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="flex items-center gap-2 mb-5">
                        <Plane className="w-5 h-5 text-gold" />
                        <h2 className="text-3xl font-bold text-navy">Arrival and pickup arrangements</h2>
                    </div>
                    <div className="space-y-5 text-gray-700 leading-relaxed">
                        <p>
                            We are not going to describe a meeting point on this page that we cannot stand behind for every booking. What we can tell you is how the arrangement is settled.
                        </p>
                        <p>
                            Send your <strong>flight number and arrival details</strong> when you request a quotation. The pickup arrangements are then set out in your booking details and confirmed with you <strong>before you travel</strong>, so you know where to go before you land rather than working it out in the terminal.
                        </p>
                        <p>
                            If anything about your arrival is unusual — a very late landing, a connection, reduced mobility, or a large group arriving together — say so with your enquiry, because that is the kind of detail that changes the arrangement.
                        </p>
                    </div>
                </div>
            </section>

            {/* H. Quotation checklist + the existing booking form */}
            <section id="quote" className="py-20 bg-white scroll-mt-8">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-4">Requesting a quotation</h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                        A request is not a booking. You send the journey details, we review them, and you receive a quotation to look over before you decide.
                    </p>
                    <ul className="space-y-3 mb-10">
                        {quoteChecklist.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <ChevronRight className="w-4 h-4 text-gold shrink-0 mt-1" />
                                <span className="text-gray-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-gray-500 text-sm leading-relaxed mb-10">
                        Under our published terms, quotations are all-inclusive and cover motorway tolls, road charges, fuel and parking, and nothing is added at the end of the journey without your prior agreement. Child seats are available free of charge on request. Cancellation is free with more than 24 hours&rsquo; notice before the scheduled pickup, and amendments are accepted free of charge in the same window, subject to availability. Drivers are professionally licensed under Italian NCC regulations and are English-speaking.
                    </p>
                    <div className="bg-[#0F1C2E] p-8 md:p-10 rounded-[2rem] shadow-2xl">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-white mb-2">Request your Bergamo Airport transfer quote</h3>
                            <p className="text-gray-400 text-sm">Tell us the journey and we will come back with a quotation.</p>
                        </div>
                        <BookingForm sourceName="Bergamo Airport Page" />
                        <div className="mt-8 flex flex-col items-center gap-4">
                            <p className="text-gray-400 text-xs text-center">Prefer to ask a question first?</p>
                            <a
                                href={WHATSAPP}
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

            {/* J. Map — existing component, real place, no invented coordinates */}
            <section className="bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-5 h-5 text-gold" />
                        <h2 className="text-2xl font-bold text-navy">Bergamo Orio al Serio Airport on the map</h2>
                    </div>
                    <p className="text-gray-600 text-sm">The airport&rsquo;s location, north-east of Milan beside the city of Bergamo.</p>
                </div>
                <MapEmbed
                    query="Milan Bergamo Orio al Serio Airport"
                    title="Map showing the location of Bergamo Orio al Serio Airport (BGY)"
                />
            </section>

            <FAQSection faqs={faqs} title="Bergamo Airport FAQs" />

            {/* K. Related links */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-2xl font-bold text-navy mb-10 text-center">Planning your journey</h2>
                    <div className="grid sm:grid-cols-2 gap-x-10 gap-y-2">
                        {relatedLinks.map((l, i) => (
                            <Link
                                key={i}
                                href={l.href}
                                className="flex items-start gap-2 py-3 border-b border-gray-200 text-gray-700 hover:text-gold transition-colors font-medium text-sm leading-snug"
                            >
                                <ChevronRight className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                                {l.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
