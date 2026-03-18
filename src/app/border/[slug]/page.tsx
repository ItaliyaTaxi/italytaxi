import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import BookingForm from '@/components/BookingForm';
import Image from 'next/image';
import Link from 'next/link';
import { Car, Clock, MapPin, CheckCircle, ArrowRight, Shield } from 'lucide-react';

interface Route {
    from: string;
    to: string;
    time: string;
    distance: string;
}

interface BorderTransfer {
    slug: string;
    to: string;
    hero_image: string;
    intro: string;
    popular_routes: Route[];
    features: string[];
    why_us: string[];
}

const borderTransfers: BorderTransfer[] = [
    {
        slug: "italy-to-switzerland",
        to: "Switzerland",
        hero_image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&q=80&w=2070",
        intro: "Travel comfortably between Italy and Switzerland with our professional cross-border taxi service. Whether you are traveling for business, tourism, or airport transfers, we provide safe, reliable, and door-to-door transportation.",
        popular_routes: [
            { from: "Milan", to: "Lugano", time: "1h 30min", distance: "~80 km" },
            { from: "Milan", to: "Zurich", time: "3h 30min", distance: "~290 km" },
            { from: "Como", to: "Lugano", time: "45 min", distance: "~30 km" },
            { from: "Milan", to: "Geneva", time: "4h", distance: "~320 km" },
        ],
        features: [
            "Private transfers between major cities",
            "Airport pickup and drop-off",
            "Luxury vehicles and professional drivers",
            "Fixed pricing with no hidden charges",
            "24/7 availability",
        ],
        why_us: [
            "Licensed cross-border drivers",
            "Comfortable long-distance vehicles",
            "Flight tracking for airport pickups",
            "Instant booking confirmation",
        ],
    },
    {
        slug: "italy-to-france",
        to: "France",
        hero_image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&q=80&w=2070",
        intro: "Enjoy a seamless cross-border journey between Italy and France with our professional private taxi service. We offer comfortable long-distance transfers connecting major Italian cities with the French Riviera.",
        popular_routes: [
            { from: "Milan", to: "Nice", time: "3h 30min", distance: "~300 km" },
            { from: "Turin", to: "Nice", time: "2h 30min", distance: "~200 km" },
            { from: "Genoa", to: "Monaco", time: "1h 30min", distance: "~150 km" },
        ],
        features: [
            "Door-to-door service",
            "Experienced cross-border drivers",
            "Luxury and standard vehicles",
            "Fixed and transparent pricing",
            "24/7 customer support",
        ],
        why_us: [
            "French Riviera specialists",
            "Comfortable long-distance vehicles",
            "Professional English-speaking drivers",
            "Instant booking confirmation",
        ],
    },
    {
        slug: "italy-to-austria",
        to: "Austria",
        hero_image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&q=80&w=2070",
        intro: "Travel between Italy and Austria in comfort with our reliable cross-border taxi services. Our long-distance transfers provide a convenient alternative to trains and flights.",
        popular_routes: [
            { from: "Venice", to: "Vienna", time: "4h 30min", distance: "~600 km" },
            { from: "Verona", to: "Innsbruck", time: "2h 30min", distance: "~240 km" },
            { from: "Bolzano", to: "Innsbruck", time: "1h 15min", distance: "~120 km" },
        ],
        features: [
            "Comfortable long-distance vehicles",
            "Professional English-speaking drivers",
            "Direct city-to-city transfers",
            "24/7 booking service",
            "Flight tracking for airport pickups",
        ],
        why_us: [
            "Licensed cross-border drivers",
            "Comfortable long-distance vehicles",
            "Professional English-speaking drivers",
            "Instant booking confirmation",
        ],
    },
    {
        slug: "italy-to-germany",
        to: "Germany",
        hero_image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=2070",
        intro: "Our Italy to Germany private taxi service provides a convenient solution for travelers needing reliable cross-border transportation. Whether for business travel or tourism, our drivers ensure a safe and comfortable journey.",
        popular_routes: [
            { from: "Milan", to: "Munich", time: "5h", distance: "~450 km" },
            { from: "Verona", to: "Munich", time: "4h 30min", distance: "~400 km" },
        ],
        features: [
            "Direct city-to-city transfers",
            "Business and leisure travel",
            "Luxury and standard vehicles",
            "Fixed pricing, no surprises",
            "24/7 availability",
        ],
        why_us: [
            "Experienced Alpine route drivers",
            "Comfortable long-distance vehicles",
            "Professional English-speaking drivers",
            "Instant booking confirmation",
        ],
    },
    {
        slug: "italy-to-slovenia",
        to: "Slovenia",
        hero_image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=2070",
        intro: "Travel easily between Italy and Slovenia with our professional private transfer service. We provide comfortable vehicles and experienced drivers for cross-border journeys.",
        popular_routes: [
            { from: "Venice", to: "Ljubljana", time: "2h 30min", distance: "~250 km" },
            { from: "Trieste", to: "Ljubljana", time: "1h", distance: "~100 km" },
        ],
        features: [
            "Direct door-to-door service",
            "Professional cross-border drivers",
            "Luxury and standard vehicles",
            "Fixed and transparent pricing",
            "24/7 availability",
        ],
        why_us: [
            "Licensed cross-border drivers",
            "Comfortable long-distance vehicles",
            "Flight tracking for airport pickups",
            "Instant booking confirmation",
        ],
    },
    {
        slug: "italy-to-croatia",
        to: "Croatia",
        hero_image: "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&q=80&w=2070",
        intro: "Our Italy to Croatia taxi service offers convenient cross-border travel for tourists and business travelers. Avoid crowded buses and trains with a comfortable private ride.",
        popular_routes: [
            { from: "Venice", to: "Pula", time: "3h", distance: "~250 km" },
            { from: "Trieste", to: "Rijeka", time: "1h 30min", distance: "~120 km" },
        ],
        features: [
            "Comfortable private vehicles",
            "Cross-border travel coordination",
            "Professional English-speaking drivers",
            "Fixed pricing, no hidden charges",
            "24/7 availability",
        ],
        why_us: [
            "Adriatic coast specialists",
            "Comfortable long-distance vehicles",
            "Professional English-speaking drivers",
            "Instant booking confirmation",
        ],
    },
];

export async function generateStaticParams() {
    return borderTransfers.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const transfer = borderTransfers.find((t) => t.slug === slug);
    if (!transfer) return {};

    return {
        title: `Italy to ${transfer.to} | Cross-Border Taxi Transfer`,
        description: transfer.intro.slice(0, 155),
        alternates: {
            canonical: `/border/${slug}`,
        },
    };
}

export default async function BorderTransferPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const transfer = borderTransfers.find((t) => t.slug === slug);
    if (!transfer) notFound();

    const whyUsIcons = [
        <Shield key="0" className="w-6 h-6" />,
        <Car key="1" className="w-6 h-6" />,
        <Clock key="2" className="w-6 h-6" />,
        <CheckCircle key="3" className="w-6 h-6" />,
    ];

    return (
        <main className="font-inter bg-white">
            <Navbar />
            <PageHero
                titleTop="Private Taxi Transfer"
                titleBottom={`Italy to ${transfer.to}`}
                description={transfer.intro}
                backgroundImage={transfer.hero_image}
                buttonText={`Book Italy to ${transfer.to} Transfer`}
                buttonLink="/book-now/"
            />

            {/* Overview Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="animate-slide-left [animation-delay:0.2s]">
                            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Cross-Border Excellence</p>
                            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                Italy to {transfer.to}<br />Transfer Service
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-10">
                                {transfer.intro}
                            </p>
                            <ul className="space-y-4">
                                {transfer.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-4">
                                        <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                                        <span className="text-gray-700 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative animate-fade-in [animation-delay:0.4s]">
                            <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                                <Image
                                    src={transfer.hero_image}
                                    alt={`Italy to ${transfer.to} taxi transfer`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-10 -left-10 bg-gold p-8 rounded-[2rem] shadow-2xl max-w-[240px]">
                                <p className="text-navy font-extrabold text-4xl mb-1">24/7</p>
                                <p className="text-navy/80 font-bold uppercase tracking-widest text-xs">Available<br />Across Borders</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Routes Section */}
            <section className="py-24 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Our Routes</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-navy">Popular Transfers</h2>
                        <div className="w-20 h-1 bg-gold mx-auto mt-6" />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {transfer.popular_routes.map((route, i) => (
                            <Link
                                key={i}
                                href="/book-now/"
                                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-gold/30 p-8 transition-all duration-300"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className="text-center">
                                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">From</p>
                                        <p className="text-xl font-bold text-navy">{route.from}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-gold">
                                        <div className="w-10 h-px bg-gold" />
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">To</p>
                                        <p className="text-xl font-bold text-navy">{route.to}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between pt-4 border-t border-gray-100">
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <Clock className="w-4 h-4 text-gold" />
                                        <span className="text-sm font-medium">{route.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-500">
                                        <MapPin className="w-4 h-4 text-gold" />
                                        <span className="text-sm font-medium">{route.distance}</span>
                                    </div>
                                </div>
                                <div className="mt-5 pt-4 border-t border-gray-100 text-right">
                                    <span className="text-gold text-sm font-bold uppercase tracking-widest group-hover:underline">
                                        Book This Route →
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Our Promise</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-navy">Why Choose Us</h2>
                        <div className="w-20 h-1 bg-gold mx-auto mt-6" />
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {transfer.why_us.map((point, i) => (
                            <div
                                key={i}
                                className="uiverse-card p-10 group animate-slide-left"
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-navy transition-all duration-500">
                                        <div className="text-gold group-hover:text-navy transition-colors">
                                            {whyUsIcons[i % whyUsIcons.length]}
                                        </div>
                                    </div>
                                    <h3 className="text-white font-bold text-base group-hover:text-gold transition-colors">{point}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA + Booking Section */}
            <section className="py-24 bg-[#0F1C2E] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
                        <div className="w-full lg:w-1/2 animate-slide-left">
                            <p className="text-sm font-bold uppercase text-gold tracking-[0.4em] mb-6">Book Your Transfer</p>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-8">
                                Ready to Travel<br />
                                <span className="text-gold">Italy to {transfer.to}?</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-10">
                                Book your private cross-border transfer now. Fixed price, no hidden fees, professional drivers.
                            </p>
                            <BookingForm />
                        </div>
                        <div className="w-full lg:w-1/2 relative h-[500px] hidden lg:block rounded-[3rem] overflow-hidden shadow-2xl animate-fade-in">
                            <Image
                                src={transfer.hero_image}
                                alt={`Italy to ${transfer.to} taxi transfer`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
