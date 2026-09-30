import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ServiceSchema from '@/components/ServiceSchema';
import BookingForm from '@/components/BookingForm';
import FAQSection from '@/components/FAQSection';
import { MapPin, ChevronRight, MessageCircle, CheckCircle, Ship, Anchor, Clock } from 'lucide-react';

const HERO_IMAGE = '/images/almafi.webp';
const CANONICAL = '/route/naples-cruise-port-to-amalfi-taxi';

export const metadata: Metadata = {
    title: 'Naples Cruise Port to Amalfi Private Transfer | Italy Taxi Service',
    description: "Private transfer from Naples' Stazione Marittima cruise terminal to Amalfi, planned around your ship's arrival and all-aboard time. Approx. 70 km, around 1h45 depending on traffic.",
    alternates: { canonical: CANONICAL },
    openGraph: {
        title: 'Naples Cruise Port to Amalfi Private Transfer',
        description: "Private transfer from Naples' cruise terminal to Amalfi, planned around your ship's schedule.",
        images: [{ url: HERO_IMAGE, alt: 'Amalfi harbour with the coastal road winding above' }],
    },
};

const faqs = [
    {
        q: 'Where does the driver meet cruise passengers in Naples?',
        a: "The exact meeting point and instructions are confirmed with your booking. Where terminal meet-and-greet applies, you'll be told exactly where to look for your driver before you disembark.",
    },
    {
        q: 'How far is Amalfi from Naples Cruise Port?',
        a: 'Approximately 70 km by road, depending on the exact route taken.',
    },
    {
        q: 'How long does Naples Cruise Port to Amalfi take?',
        a: 'Around 1 hour 45 minutes under suitable traffic conditions. The Amalfi Coast road is winding and can be considerably slower at busy times, so treat this as a guide rather than a guarantee.',
    },
    {
        q: 'Can I book a return transfer to the cruise port?',
        a: 'Yes, provided your itinerary — including your desired pickup time and location in Amalfi — is given in advance.',
    },
    {
        q: 'How early should I leave Amalfi for my cruise ship?',
        a: "There's no single figure that fits every sailing — allow a substantial buffer beyond the minimum driving time, since coastal traffic and your ship's own schedule both introduce variables outside our control. Tell us your all-aboard time and we'll help plan a realistic departure.",
    },
    {
        q: 'Can I stop in Positano?',
        a: "An additional stop can be requested, but it needs to be arranged in advance so it can be weighed against your available shore time and reflected in your quotation.",
    },
    {
        q: 'Can I visit Ravello as part of the transfer?',
        a: 'A stop in Ravello can be requested in the same way — arrange it before booking so the itinerary and timing work for your specific port call.',
    },
    {
        q: 'Can I bring cruise luggage?',
        a: 'Yes. Let us know what you\'re bringing — suitcases, hand luggage, a stroller or anything else — so an appropriate vehicle can be considered.',
    },
    {
        q: 'Can I book a one-way transfer?',
        a: 'Yes, a one-way transfer to Amalfi is available if you don\'t need the return leg — for example if you\'re continuing your trip by land rather than rejoining the ship.',
    },
    {
        q: 'Does the price include waiting time?',
        a: "This depends on what you request — waiting time and any additional stops should be confirmed when requesting your quotation, so they're reflected in the price rather than assumed.",
    },
];

export default function NaplesCruisePortToAmalfiPage() {
    return (
        <main className="font-inter bg-white text-navy-rich">
            <ServiceSchema
                name="Naples Cruise Port to Amalfi Taxi Transfer"
                description="Private transfer from Naples' Stazione Marittima cruise terminal to Amalfi, planned around your ship's arrival and all-aboard time."
                url={`https://www.italytaxiservice.com${CANONICAL}`}
                image={HERO_IMAGE}
            />
            <Navbar />

            <PageHero
                titleTop="Naples Cruise Port Transfer"
                titleBottom="to Amalfi"
                description="Travel from Naples' cruise port to Amalfi in a private vehicle, with pickup arranged around your ship's arrival. Plan a direct journey to the Amalfi Coast, and allow enough time for the return to Naples before your ship departs."
                backgroundImage={HERO_IMAGE}
                buttonText="Request Your Transfer Quote"
                breadcrumbs={[
                    { name: 'Routes', item: '/services/city-to-city' },
                    { name: 'Naples Cruise Port to Amalfi', item: CANONICAL },
                ]}
            />

            {/* Route overview */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden mb-6">
                        {[
                            { label: 'From', value: 'Naples Cruise Port — Stazione Marittima' },
                            { label: 'To', value: 'Amalfi' },
                            { label: 'Road distance', value: 'Approximately 70 km' },
                            { label: 'Typical drive', value: 'Around 1h45, depending on traffic and exact locations' },
                            { label: 'Service', value: 'Private transfer' },
                            { label: 'Return', value: 'Available on request' },
                        ].map((item, i) => (
                            <div key={i} className="p-6 text-center sm:text-left">
                                <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">{item.label}</p>
                                <p className="text-navy font-medium text-sm leading-snug">{item.value}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-gray-500 text-sm max-w-2xl">
                        The 1h45 figure is a typical guide, not a guarantee — Amalfi Coast traffic can significantly affect journey time, particularly during busy periods.
                    </p>
                </div>
            </section>

            {/* Cruise passenger introduction */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">From Naples Cruise Port to Amalfi</h2>
                    <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                        <p>
                            Cruise passengers calling at Naples often want to use their limited time ashore to reach the Amalfi Coast — but Amalfi is further from the port than Sorrento or Pompeii, so it suits a longer port call rather than a short one.
                        </p>
                        <p>
                            A private transfer lets you arrange pickup and return around your ship&apos;s own arrival and departure times, rather than relying on multiple public transport connections between the port, Naples, and the coast. That&apos;s not to say a private transfer is the only sensible option — it simply removes the need to plan connections yourself on a day with a fixed deadline.
                        </p>
                        <p>
                            What matters most is the return leg: because the coastal road can be unpredictable, planning a sensible margin before all-aboard matters more here than the one-way driving time alone.
                        </p>
                    </div>
                </div>
            </section>

            {/* Meeting point */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-6">Where Will I Meet the Driver?</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        The exact meeting point and instructions are confirmed with your booking, since this can depend on which terminal your ship uses. Where terminal meet-and-greet applies, the process works like this:
                    </p>
                    <ul className="space-y-3">
                        {[
                            'You disembark and clear the port gate',
                            'You follow the meeting instructions confirmed with your booking',
                            'Your driver meets you at the confirmed location',
                            'You proceed together to the vehicle',
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                <span className="text-gray-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Cruise schedule — timeline layout, not a card grid */}
            <section className="py-20 bg-navy relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
                <div className="container mx-auto px-6 max-w-4xl relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Planning Around Your Cruise Schedule</h2>
                    <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14">
                        A shore excursion to Amalfi sits inside a fixed window set by your ship — here&apos;s how the pieces fit together.
                    </p>

                    <div className="relative pl-10 sm:pl-12">
                        <div className="absolute left-[15px] sm:left-[19px] top-2 bottom-2 w-px bg-white/15" />
                        {[
                            { icon: Ship, label: 'Ship arrival', desc: 'Your vessel docks at Naples Stazione Marittima.' },
                            { icon: Anchor, label: 'Disembarkation', desc: 'You clear the port gate at your own pace.' },
                            { icon: MapPin, label: 'Driver meeting point', desc: 'You meet your driver at the confirmed location.' },
                            { icon: Clock, label: 'Transfer to Amalfi', desc: 'Around 1h45, traffic-dependent, via the coast road.' },
                            { icon: Clock, label: 'Time in Amalfi', desc: 'Yours to spend as you choose, within your planned window.' },
                            { icon: Clock, label: 'Return journey', desc: 'Timed with a margin, not the minimum possible drive time.' },
                            { icon: Ship, label: 'Cruise departure', desc: 'Your ship\'s all-aboard time — the deadline everything plans around.' },
                        ].map((step, i, arr) => {
                            const Icon = step.icon;
                            return (
                                <div key={i} className={`relative flex items-start gap-5 ${i !== arr.length - 1 ? 'pb-10' : ''}`}>
                                    <div className="absolute -left-10 sm:-left-12 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-navy border-2 border-gold/40 flex items-center justify-center shrink-0">
                                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg mb-1">{step.label}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <p className="text-gray-400 text-sm text-center mt-4 max-w-2xl mx-auto">
                        This isn&apos;t an exact timetable — it&apos;s a guide to how a cruise schedule and a shore transfer relate to each other. When booking, share your ship name, arrival date, port arrival time, expected disembarkation time if known, all-aboard time, passenger count and luggage, so a realistic schedule can be planned around them.
                    </p>
                </div>
            </section>

            {/* Return transfer — restrained practical-warning treatment */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="border-l-4 border-gold pl-6 sm:pl-8">
                        <h2 className="text-3xl font-bold text-navy mb-4">Getting Back to Naples Before Your Ship Departs</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            A return transfer can be requested alongside your outbound journey. To plan it properly, we&apos;ll need your cruise departure time, your desired time to leave Amalfi, and your exact Amalfi pickup location.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Build in a genuine margin rather than departing at the minimum time the drive might take — coastal traffic and unexpected delays are real possibilities on this route, and the consequence of missing your ship is significant. We&apos;ll help plan a sensible departure time based on the details you provide, but the final margin is a decision worth taking seriously on your side too.
                        </p>
                    </div>
                </div>
            </section>

            {/* The journey */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-6">The Journey to Amalfi</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        The transfer leaves the Naples cruise port and heads toward the Sorrento/Amalfi Coast area, typically using the A3 motorway before joining the coastal SS163 for the final stretch into Amalfi. The exact route can vary with traffic and road conditions on the day.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        The main thing worth understanding is that the last part of the journey runs along the Amalfi Coast road itself — narrow, winding, and often busier than the distance alone would suggest, which is why the drive can take longer than a straight-line estimate implies.
                    </p>
                </div>
            </section>

            {/* Traffic and timing */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-6">Why Extra Time Matters on the Amalfi Coast</h2>
                    <ul className="space-y-3">
                        {[
                            'Road conditions on the coast road vary through the day',
                            'Traffic is generally heavier during busy travel periods, particularly in summer',
                            'The coastal road itself is narrow and winding by nature',
                            'Journey time can vary considerably as a result',
                            'Your return should not be planned around the minimum possible driving time',
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                <span className="text-gray-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Direct transfer vs sightseeing stops */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold text-navy mb-10 text-center">Direct Transfer or Amalfi Coast Stops?</h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="bg-white p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-xl font-bold text-navy mb-3">Direct Transfer</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Naples Cruise Port straight to Amalfi, and back again — the standard option, best suited to a port call where shore time is limited.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-xl font-bold text-navy mb-3">Transfer With Sightseeing Stops</h3>
                            <p className="text-gray-600 leading-relaxed">
                                You can ask whether a stop in Positano, Ravello or elsewhere can be included. Additional stops, waiting time and itinerary changes affect the available time and the quotation, so this needs to be arranged in advance — it isn&apos;t part of the standard transfer by default, and not every request can be accommodated within a short shore window.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Luggage */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-6">Traveling With Cruise Luggage?</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Cruise passengers on a shore excursion often carry cabin bags, a day bag, or occasionally more — suitcases, a stroller, or other equipment. Mention what you&apos;re bringing when requesting your quote, so an appropriate vehicle can be considered for your group.
                    </p>
                </div>
            </section>

            {/* Vehicle options — explanation, not a fleet list */}
            <section className="py-20 bg-[#F8F9FA]">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-6">Vehicle Options</h2>
                    <p className="text-gray-600 leading-relaxed">
                        The right vehicle for your transfer depends on your number of passengers, the amount of luggage, any group requirements, your requested comfort level, and availability on the day. Let us know these details when requesting your quote, and we&apos;ll confirm a suitable option as part of your quotation.
                    </p>
                </div>
            </section>

            {/* What's included */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-navy mb-8">What Your Transfer Can Include</h2>
                    <ul className="space-y-4">
                        {[
                            'A private vehicle for your group',
                            'Pickup at the agreed cruise-port meeting point',
                            'A direct transfer to your Amalfi destination',
                            'Luggage assistance',
                            'A return transfer, if requested',
                            'A quotation based on your exact itinerary',
                            'Optional additional stops, when arranged in advance',
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                <span className="text-gray-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* How booking works */}
            <section className="py-20 bg-navy relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-14 text-center">How to Book Your Cruise Port Transfer</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            { n: '1', h: 'Send your cruise details', p: 'Ship name, arrival date, arrival time and port information.' },
                            { n: '2', h: 'Tell us your Amalfi plans', p: 'Destination, passenger count, luggage and any requested stops.' },
                            { n: '3', h: 'Receive your quotation', p: 'We review the itinerary and provide the applicable transfer price.' },
                            { n: '4', h: 'Confirm the journey', p: "Once confirmed, you'll receive your pickup and meeting instructions." },
                        ].map((step) => (
                            <div key={step.n}>
                                <span className="block text-5xl font-serif italic text-gold/40 mb-4">{step.n}</span>
                                <h3 className="text-white font-bold text-lg mb-2">{step.h}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{step.p}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote form */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Request a Naples Cruise Port to Amalfi Quote</h2>
                        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                            Tell us your cruise arrival time, Amalfi destination, travel date, passenger count and luggage details. If you&apos;re planning a return to the ship or want to add a stop along the coast, include that in your request.
                        </p>
                    </div>
                    <div className="bg-[#0F1C2E] p-8 md:p-10 rounded-[2rem] shadow-2xl">
                        <BookingForm sourceName="Naples Cruise Port to Amalfi Route Page" />
                        <div className="mt-8 flex flex-col items-center gap-4">
                            <p className="text-gray-400 text-xs text-center">Need help? Contact us 24/7</p>
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

            <FAQSection faqs={faqs} title="Naples Cruise Port to Amalfi — FAQ" />

            {/* Related Naples & Amalfi transfers — the page's real internal-link focus */}
            <section className="py-16 bg-[#F8F9FA] border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-2xl font-bold text-navy mb-8 text-center">Related Naples &amp; Amalfi Transfers</h2>
                    <div className="grid sm:grid-cols-2 gap-x-10 gap-y-1">
                        {[
                            { href: '/city/naples', label: 'Naples Taxi Service' },
                            { href: '/city/amalfi', label: 'Amalfi Taxi Service' },
                            { href: '/route/naples-airport-to-amalfi-taxi', label: 'Flying in instead? Naples Airport to Amalfi' },
                            { href: '/route/naples-cruise-port-to-sorrento-taxi', label: 'Naples Cruise Port to Sorrento' },
                            { href: '/route/naples-cruise-port-to-pompeii-taxi', label: 'Naples Cruise Port to Pompeii' },
                        ].map((r, i) => (
                            <Link
                                key={i}
                                href={r.href}
                                className="flex items-center justify-between gap-2 py-4 border-b border-gray-100 text-gray-700 hover:text-gold transition-colors font-medium"
                            >
                                {r.label}
                                <ChevronRight className="w-4 h-4 text-gold shrink-0" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Other routes — kept secondary, low emphasis */}
            <section className="py-10 bg-white">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <Link href="/services/city-to-city" className="inline-flex items-center text-gold hover:text-navy font-bold tracking-widest uppercase text-sm border-b-2 border-gold/30 hover:border-navy transition-all pb-1">
                        View All City-to-City Transfers <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
