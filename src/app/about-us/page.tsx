import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import StorySection from '@/components/StorySection';
import MissionValues from '@/components/MissionValues';
import StatsSection from '@/components/StatsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import {
    CheckCircle, Star, MessageCircle, ChevronRight,
    Award, Shield, Clock, Users, MapPin, Plane,
    Car, Anchor, Sparkles, HeartHandshake, BadgeCheck
} from 'lucide-react';
import TaxiButton from '@/components/TaxiButton';

export const metadata: Metadata = {
    title: "About Italy Taxi Service | Professional Private Taxi & Transfers Across Italy",
    description: "Italy Taxi Service — Italy's premier private taxi and transfer company since 2013. NCC-licensed drivers, fixed prices, 10,000+ rides across Rome, Milan, Florence, Venice & 30+ cities.",
    alternates: { canonical: "/about-us" }
};

const aboutFaqs = [
    {
        q: "What makes Italy Taxi Service different from street taxis in Italy?",
        a: "Every booking is pre-arranged with a fixed, all-inclusive price agreed before you travel — no meters, no surge pricing, no negotiation at the kerb. Your driver's name, vehicle details, and mobile number are sent to you in advance. You know exactly what to expect before you even board the plane."
    },
    {
        q: "Are all your drivers licensed and insured?",
        a: "Yes. Every driver in our network holds a professional NCC (Noleggio Con Conducente) licence — Italy's regulated private hire authorisation — and carries comprehensive passenger liability insurance. All vehicles are registered with Italian transport authorities and pass regular inspections."
    },
    {
        q: "How long has Italy Taxi Service been operating?",
        a: "We have been providing premium private transfers since 2013 — over a decade of service. In that time we have completed more than 10,000 private journeys and maintained a 4.9-star average rating across all review platforms."
    },
    {
        q: "Which cities and airports in Italy do you cover?",
        a: "We operate nationwide — from Rome, Milan, Florence, Venice, and Naples to every major Italian airport (FCO, MXP, VCE, FLR, NAP, and 30+ others), all major cruise ports (Civitavecchia, Livorno, Naples, Venice), and popular tourist regions including Tuscany, Amalfi Coast, Lake Como, and Sicily."
    },
    {
        q: "Do you offer service for weddings, corporate events, and group travel?",
        a: "Yes. We have dedicated divisions for corporate travel (executive sedans, monthly invoicing, account management), destination weddings (multi-vehicle coordination, suited chauffeurs, ZTL venue access), and group transfers (8-seat minivans, convoy logistics). Contact us to discuss your specific requirements."
    },
    {
        q: "Why should I choose Italy Taxi Service over a train or public transport?",
        a: "For solo travellers, trains are excellent — but for families, groups, or anyone with significant luggage, a private taxi is often more practical and better value. There are no stations to navigate, no connection changes, no luggage limits, and no fixed departure times. You travel door-to-door, on your schedule, for one fixed price."
    },
    {
        q: "Do you work with travel agencies and wedding planners?",
        a: "Yes. We maintain active partnerships with travel agencies, destination wedding coordinators, tour operators, hotel concierge teams, and corporate travel managers across Europe. Contact us to discuss a partnership, affiliate arrangement, or preferred supplier agreement."
    },
    {
        q: "What is your safety and vetting process for drivers?",
        a: "All drivers undergo background verification, hold valid NCC professional licences, and receive an internal orientation covering our service standards, customer communication protocols, and vehicle presentation requirements. Vehicles are regularly inspected and maintained to manufacturer schedules. Your safety is the non-negotiable foundation of everything we do."
    },
];

const services = [
    { icon: <Plane className="w-6 h-6 text-gold" />, title: "Airport Transfers", desc: "Meet & Greet at FCO, MXP, VCE, FLR, NAP and 30+ airports. Flight tracking included.", href: "/services/airport-transfers" },
    { icon: <Car className="w-6 h-6 text-gold" />, title: "City-to-City Transfers", desc: "Rome to Florence, Milan to Venice, Naples to Amalfi. Door-to-door, fixed price.", href: "/services/city-to-city" },
    { icon: <Award className="w-6 h-6 text-gold" />, title: "Business Taxi", desc: "Executive vehicles, Wi-Fi, monthly invoicing, and NDA-ready discretion.", href: "/services/business-taxi" },
    { icon: <Anchor className="w-6 h-6 text-gold" />, title: "Cruise Port Transfers", desc: "Pier pickup at Civitavecchia, Livorno, Naples, Venice, and Genoa.", href: "/services/cruise-port-transfers" },
    { icon: <Sparkles className="w-6 h-6 text-gold" />, title: "Private Sightseeing Tours", desc: "Amalfi Coast, Tuscany, Vatican, Pompeii — custom itineraries at your pace.", href: "/services/private-tours" },
    { icon: <HeartHandshake className="w-6 h-6 text-gold" />, title: "Wedding Transfers", desc: "Elegant fleet, suited chauffeurs, multi-vehicle coordination across Italy.", href: "/services/wedding-transfers" },
];

const cities = [
    { name: "Rome", href: "/city/rome", desc: "Airport transfers, city tours, Colosseum excursions" },
    { name: "Milan", href: "/city/milan", desc: "Malpensa & Linate airport, fashion district, business" },
    { name: "Florence", href: "/city/florence", desc: "Tuscany tours, FLR airport, Uffizi & Duomo trips" },
    { name: "Venice", href: "/city/venice", desc: "VCE airport, Marco Polo, Grand Canal hotels" },
    { name: "Naples", href: "/city/naples", desc: "NAP airport, Pompeii, Amalfi Coast & Capri" },
    { name: "Bologna", href: "/city/bologna", desc: "BLQ airport, Emilia-Romagna, business travel" },
];

export default function AboutUsPage() {
    return (
        <main className="min-h-screen text-navy font-inter">
            {/* ── Organization + AboutPage Schema ─────────────────── */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "AboutPage",
                            "name": "About Italy Taxi Service",
                            "url": "https://www.italytaxiservice.com/about-us",
                            "description": "Italy Taxi Service is Italy's premier private taxi and transfer company, operating since 2013 with NCC-licensed drivers covering all major Italian cities, airports, and cruise ports."
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Italy Taxi Service",
                            "url": "https://www.italytaxiservice.com",
                            "logo": "https://www.italytaxiservice.com/images/logo.png",
                            "foundingDate": "2013",
                            "areaServed": "IT",
                            "description": "Professional private taxi and transfer service across Italy since 2013.",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "contactType": "customer service",
                                "availableLanguage": ["English", "Italian"],
                                "contactOption": "TollFree"
                            },
                            "sameAs": [
                                "https://www.facebook.com/italytaxiservice",
                                "https://www.instagram.com/italytaxiservice"
                            ]
                        }
                    ])
                }}
            />

            <Navbar />

            <PageHero
                titleTop="Italy's Premier Private"
                titleBottom="Taxi & Transfer Service"
                description="NCC-licensed drivers, fixed prices, and nationwide coverage — trusted by thousands of travellers across Rome, Milan, Florence, Venice, and beyond since 2013."
                backgroundImage="/images/hero.png"
                breadcrumbs={[{ name: "About Us", item: "/about-us" }]}
            />

            {/* ── WHO WE ARE — 3-column intro ────────────────────── */}
            <section className="py-16 bg-white font-inter border-b border-gray-100">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {[
                            { icon: <BadgeCheck className="w-8 h-8 text-gold mx-auto" />, heading: "Who We Are", body: "A professional private taxi and transfer company operating across all of Italy since 2013. Every driver is NCC-licensed, every price is fixed, every journey is guaranteed." },
                            { icon: <MapPin className="w-8 h-8 text-gold mx-auto" />, heading: "Where We Operate", body: "Rome, Milan, Florence, Venice, Naples, and 30+ additional cities and airports — plus cruise ports, lake districts, mountain resorts, and cross-border routes." },
                            { icon: <Users className="w-8 h-8 text-gold mx-auto" />, heading: "Who We Serve", body: "Leisure travellers, families, business executives, wedding parties, cruise passengers, and corporate accounts — anyone who needs a reliable private taxi in Italy." },
                        ].map((c, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-[#F8F9FA] hover:border-gold hover:shadow-md border border-transparent transition-all">
                                <div className="mb-4">{c.icon}</div>
                                <h3 className="font-extrabold text-navy text-lg mb-2">{c.heading}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{c.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BRAND STORY + MISSION + VISION ─────────────────── */}
            <StorySection />

            {/* ── STATS WITH CONTEXT ──────────────────────────────── */}
            <StatsSection variant="light" />

            {/* ── WHY US — COMPETITIVE POSITIONING ───────────────── */}
            <section className="py-24 bg-white font-inter relative overflow-hidden group">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image
                        src="/images/itineraries.png"
                        alt="Italy Map Background"
                        fill
                        className="object-cover opacity-20 blur-sm transition-opacity duration-700 group-hover:opacity-35"
                        priority
                    />
                </div>
                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <div className="text-center mb-14">
                        <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Why Choose Us</p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight">
                            Italy Taxi Service vs Every Other Option
                        </h2>
                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">
                            There are dozens of ways to get around Italy. Here is why private taxi with us is the right choice for your journey.
                        </p>
                        <div className="w-20 h-1 bg-gold mx-auto mt-6" />
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm rounded-2xl overflow-hidden shadow-lg">
                            <thead>
                                <tr className="bg-navy text-white">
                                    <th className="text-left px-6 py-4 font-semibold">Feature</th>
                                    <th className="px-6 py-4 font-bold text-gold">Italy Taxi Service</th>
                                    <th className="px-6 py-4 font-semibold text-gray-300">Street Taxi</th>
                                    <th className="px-6 py-4 font-semibold text-gray-300">Train / Bus</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Fixed price before you book", "✅ Always", "❌ Metered", "⚠️ Varies"],
                                    ["Door-to-door service", "✅ Yes", "⚠️ Partial", "❌ No"],
                                    ["Flight delay tracking", "✅ Automatic", "❌ No", "❌ No"],
                                    ["English-speaking driver", "✅ Guaranteed", "⚠️ Not always", "❌ N/A"],
                                    ["Pre-confirmed driver name", "✅ Yes", "❌ No", "❌ N/A"],
                                    ["Child seats included", "✅ Free", "⚠️ Sometimes", "❌ No"],
                                    ["60 min free wait at airport", "✅ Yes", "❌ No", "❌ N/A"],
                                    ["Available 24/7", "✅ Yes", "⚠️ Limited", "❌ No"],
                                ].map(([feature, us, taxi, train], i) => (
                                    <tr key={i} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FA]'}`}>
                                        <td className="px-6 py-4 font-semibold text-navy">{feature}</td>
                                        <td className="px-6 py-4 text-center font-bold text-green-600">{us}</td>
                                        <td className="px-6 py-4 text-center text-gray-500">{taxi}</td>
                                        <td className="px-6 py-4 text-center text-gray-500">{train}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── HOW IT WORKS — PROCESS ──────────────────────────── */}
            <section className="py-24 bg-navy relative overflow-hidden font-inter">
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <div className="text-center mb-14">
                        <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Simple Process</p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">How Our Private Taxi Service Works</h2>
                        <div className="w-20 h-1 bg-gold mx-auto mt-6" />
                    </div>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { step: "01", title: "Book Online", body: "Complete our booking form in under 2 minutes. Enter your route, date, and vehicle preference to receive an instant fixed quote." },
                            { step: "02", title: "Get Confirmed", body: "Receive instant email confirmation with your driver's name, vehicle details, mobile number, and exact meeting instructions." },
                            { step: "03", title: "We Track & Prepare", body: "Our dispatch team monitors your flight in real-time. Your driver departs timed to your actual landing — not your scheduled arrival." },
                            { step: "04", title: "Travel in Comfort", body: "Your driver meets you with a name sign in the arrivals hall, loads your luggage, and takes you directly to your destination." },
                        ].map((s, i) => (
                            <div key={i} className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold transition-all">
                                <div className="text-5xl font-extrabold text-gold/20 mb-3 leading-none">{s.step}</div>
                                <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{s.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── MID-PAGE CTA ─────────────────────────────────────── */}
            <section className="py-14 bg-gold font-inter">
                <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-navy text-2xl font-extrabold mb-1">Ready to book your private taxi in Italy?</h3>
                        <p className="text-navy/70 text-sm">Fixed prices • English-speaking drivers • 24/7 availability</p>
                    </div>
                    <div className="flex gap-3 shrink-0">
                        <TaxiButton href="/book-now">Book Now</TaxiButton>
                        <Link href="/contact" className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-navy text-navy font-bold hover:bg-navy hover:text-white transition-all text-sm">
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── SERVICE COVERAGE ────────────────────────────────── */}
            <section className="py-24 bg-white font-inter">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-14">
                        <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Full Service Range</p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight">Every Transfer Type — One Provider</h2>
                        <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm">From a single airport pickup to multi-day wedding logistics — Italy Taxi Service covers every ground transport need.</p>
                        <div className="w-20 h-1 bg-gold mx-auto mt-6" />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((s, i) => (
                            <Link key={i} href={s.href}
                                className="group flex gap-4 p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-gold transition-all">
                                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-white transition-all">
                                    {s.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-navy mb-1 group-hover:text-gold transition-colors">{s.title}</h3>
                                    <p className="text-gray-500 text-sm leading-snug">{s.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── LOCATION COVERAGE ───────────────────────────────── */}
            <section className="py-24 bg-[#F8F9FA] font-inter relative overflow-hidden group">
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image
                        src="/images/services.png"
                        alt="Services Background"
                        fill
                        className="object-cover opacity-20 blur-sm transition-opacity duration-700 group-hover:opacity-35"
                        priority
                    />
                </div>
                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <div className="text-center mb-14">
                        <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Where We Operate</p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight">
                            Private Taxi Service Across Italy
                        </h2>
                        <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm">
                            Our driver network spans the entire Italian peninsula. Click any city to see specific transfer options and pricing.
                        </p>
                        <div className="w-20 h-1 bg-gold mx-auto mt-6" />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {cities.map((c, i) => (
                            <Link key={i} href={c.href}
                                className="group flex items-start gap-4 p-5 rounded-2xl border border-gray-200 bg-white hover:border-gold hover:shadow-lg transition-all">
                                <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center shrink-0 group-hover:bg-gold transition-all">
                                    <MapPin className="w-5 h-5 text-gold group-hover:text-navy transition-all" />
                                </div>
                                <div>
                                    <p className="font-bold text-navy group-hover:text-gold transition-colors">{c.name}</p>
                                    <p className="text-gray-400 text-xs mt-0.5 leading-snug">{c.desc}</p>
                                </div>
                                <ChevronRight className="w-4 h-4 text-gray-300 ml-auto self-center group-hover:text-gold transition-all" />
                            </Link>
                        ))}
                    </div>
                    <p className="text-center text-gray-400 text-sm mt-8">
                        Not listed? We cover all of Italy.{' '}
                        <Link href="/coverage-areas" className="text-gold hover:underline font-semibold">View full coverage map →</Link>
                    </p>
                </div>
            </section>

            {/* ── TRUST SIGNALS + CERTIFICATIONS ──────────────────── */}
            <section className="py-24 bg-white font-inter">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-14">
                        <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Verified & Certified</p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight">Why You Can Trust Us Completely</h2>
                        <div className="w-20 h-1 bg-gold mx-auto mt-6" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: <Shield className="w-8 h-8 text-gold" />,
                                title: "NCC Licensed — Italy's Gold Standard",
                                body: "Every driver holds a Noleggio Con Conducente (NCC) professional licence — Italy's regulated private hire authorisation. This is not a standard driving licence. NCC licensing requires background checks, vehicle inspections, municipal registration, and ongoing compliance with Italian transport law. When you travel with us, you are always in legal, insured, professional hands."
                            },
                            {
                                icon: <Award className="w-8 h-8 text-gold" />,
                                title: "10+ Years of Verified Service",
                                body: "Launched in 2013, Italy Taxi Service has been building its reputation for over a decade. Our 4.9-star average rating is not a snapshot — it is sustained across more than 500 individual verified reviews on Google, TripAdvisor, and our direct booking platform. We have not survived 10 years by being average."
                            },
                            {
                                icon: <Clock className="w-8 h-8 text-gold" />,
                                title: "99.2% On-Time Rate",
                                body: "Punctuality is our most measured performance metric. Our internal tracking records show a 99.2% on-time arrival rate across all confirmed bookings. We achieve this through proactive dispatch scheduling, real-time traffic monitoring, and buffer time built into every pickup calculation."
                            },
                            {
                                icon: <HeartHandshake className="w-8 h-8 text-gold" />,
                                title: "Zero Hidden Charges — Guaranteed",
                                body: "The price quoted is the price charged. No exceptions. We include all highway tolls, fuel costs, waiting time within the grace period, luggage handling, and child seats. Night transfers, early morning pickups, and journeys on public holidays are quoted transparently — never revealed at the end of the journey."
                            },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-5 p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-gold transition-all group">
                                <div className="shrink-0 p-3 rounded-full bg-gold/10 w-fit h-fit group-hover:bg-gold transition-all group-hover:[&>svg]:text-navy">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">{item.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CUSTOMER REVIEWS ────────────────────────────────── */}
            <section className="py-24 bg-navy font-inter relative overflow-hidden">
                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <div className="text-center mb-14">
                        <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Real Passengers, Real Experiences</p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">What Clients Say About Our Taxi Service</h2>
                        <div className="flex items-center justify-center gap-1 mt-5">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-gold text-gold" />)}
                            <span className="text-gray-400 text-sm ml-2">4.9 / 5 — 500+ verified reviews</span>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Rachel B.", country: "United Kingdom", route: "Rome FCO → City Centre", text: "Professional, punctual, and the vehicle was immaculate. Driver met us at the arrivals hall with a sign, helped with all the luggage, and took us straight to our hotel. No stress whatsoever after a long flight.", date: "March 2025" },
                            { name: "David & Anna K.", country: "United States", route: "Rome → Florence (family)", text: "Booked a minivan for our family of five — Rome to Florence. Comfortable ride, super friendly driver who even suggested a lunch stop in a village we would never have found alone. Will absolutely book again for our next Italy trip.", date: "February 2025", featured: true },
                            { name: "Thomas H.", country: "Germany", route: "Milan business travel", text: "Used Italy Taxi Service for a full week of client meetings across Milan and Bologna. Every single pickup was exactly on time. The driver was discreet, professional, and knew the city perfectly. Exceptional reliability.", date: "January 2025" },
                        ].map((r, i) => (
                            <div key={i} className={`p-8 rounded-[2rem] border shadow-xl relative bg-white ${r.featured ? 'border-gold shadow-gold/10' : 'border-gray-100'}`}>
                                <div className="absolute -top-5 left-8 bg-gold text-white w-10 h-10 rounded-full flex items-center justify-center font-serif text-2xl">"</div>
                                <div className="flex gap-1 mb-3 pt-4 text-gold">
                                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-gold" />)}
                                </div>
                                <p className="text-xs text-gold font-semibold mb-2">{r.route}</p>
                                <p className="text-gray-700 leading-relaxed text-sm mb-6 italic">"{r.text}"</p>
                                <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                                    <div>
                                        <p className="font-bold text-navy text-sm">{r.name}</p>
                                        <p className="text-xs text-gray-400">{r.country}</p>
                                    </div>
                                    <span className="text-xs text-gray-400">{r.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BENEFITS LIST ───────────────────────────────────── */}
            <section className="py-24 bg-white font-inter">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-14">
                        <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Everything Included</p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight">Everything You Need. Nothing Hidden.</h2>
                        <div className="w-20 h-1 bg-gold mx-auto mt-6" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            "Licensed NCC drivers on every single booking",
                            "Fixed all-inclusive price confirmed at the time of booking",
                            "All motorway tolls, road fees, and fuel included",
                            "Meet-and-greet inside every arrivals hall — name sign provided",
                            "Real-time flight tracking — pickup adjusts automatically for delays",
                            "60 minutes free waiting time for international flights",
                            "Child seats, booster seats, and infant carriers free on request",
                            "24/7 customer support via WhatsApp and email",
                            "English-speaking professional drivers across Italy",
                            "Free cancellation up to 24 hours before scheduled pickup",
                            "Premium Mercedes-Benz sedans, executive saloons, and minivans",
                            "Corporate invoicing, VAT receipts, and account management",
                        ].map((b, i) => (
                            <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-gold transition-all group">
                                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                <span className="text-navy font-semibold text-sm leading-snug">{b}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CORE VALUES ─────────────────────────────────────── */}
            <MissionValues />

            {/* ── FAQ ─────────────────────────────────────────────── */}
            <FAQSection faqs={aboutFaqs} title="Questions About Italy Taxi Service" badge="Company FAQs" variant="light" />

            {/* ── INTERNAL LINKS ──────────────────────────────────── */}
            <section className="py-20 bg-gold font-inter relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle, #0F1C2E 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <p className="text-navy text-sm font-bold uppercase tracking-[0.4em] mb-3 text-center">Explore Our Services</p>
                    <h3 className="text-3xl font-extrabold text-navy text-center mb-10">Find Your Transfer Type</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            { label: "Airport Transfers", href: "/services/airport-transfers" },
                            { label: "City-to-City Transfers", href: "/services/city-to-city" },
                            { label: "Hotel Transfers", href: "/services/hotel-transfers" },
                            { label: "Business Taxi", href: "/services/business-taxi" },
                            { label: "Private Tours", href: "/services/private-tours" },
                            { label: "Cruise Port Transfers", href: "/services/cruise-port-transfers" },
                            { label: "Hourly Chauffeur", href: "/services/hourly-taxi" },
                            { label: "Wedding Transfers", href: "/services/wedding-transfers" },
                            { label: "Rome Transfers", href: "/city/rome" },
                            { label: "Milan Transfers", href: "/city/milan" },
                            { label: "Florence Transfers", href: "/city/florence" },
                            { label: "Venice Transfers", href: "/city/venice" },
                        ].map((l, i) => (
                            <Link key={i} href={l.href}
                                className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-navy/10 text-navy font-bold text-sm bg-white/40 hover:bg-white hover:border-navy hover:shadow-lg transition-all backdrop-blur-md">
                                <ChevronRight className="w-4 h-4" />{l.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ───────────────────────────────────────── */}
            <section className="py-24 bg-navy font-inter relative overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
                <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
                    <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Start Your Journey</p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                        Book Your Private Taxi in Italy Today
                    </h2>
                    <p className="text-gray-400 text-lg mb-4 max-w-2xl mx-auto">
                        Join 25,000+ travellers who trust Italy Taxi Service for reliable, fixed-price private transfers across Rome, Milan, Florence, Venice, Naples, and beyond.
                    </p>
                    <p className="text-gray-500 text-sm mb-10">Instant confirmation · No hidden charges · 24/7 support</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <TaxiButton href="/book-now" className="md:scale-110">Book Your Transfer Now</TaxiButton>
                        <a href="https://wa.me/923148932631" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold hover:bg-[#1ebe57] transition-all shadow-lg hover:scale-105">
                            <MessageCircle className="w-5 h-5" /> WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
