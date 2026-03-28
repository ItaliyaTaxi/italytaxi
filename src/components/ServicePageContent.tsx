import Link from 'next/link';
import { CheckCircle, Star, MessageCircle, Clock, Shield, CreditCard, MapPin, Users, ChevronRight } from 'lucide-react';
import TaxiButton from '@/components/TaxiButton';

export interface PricingTier {
    label: string;
    price: string;
    note: string;
    popular?: boolean;
}

export interface RouteItem {
    from: string;
    to: string;
    duration: string;
    price: string;
}

export interface ReviewItem {
    name: string;
    country: string;
    rating: number;
    text: string;
    date: string;
}

export interface ServicePageContentProps {
    /** Long-form intro paragraph – aim for 2-3 sentences */
    introTitle: string;
    introParagraphs: string[];

    /** Detailed description section */
    detailTitle: string;
    detailParagraphs: string[];

    /** Bullet-point benefits */
    benefits: string[];

    /** Pricing */
    pricingTitle?: string;
    pricing?: PricingTier[];

    /** Popular routes */
    routesTitle?: string;
    routes?: RouteItem[];

    /** Testimonials */
    reviews?: ReviewItem[];

    /** Linked internal pages */
    relatedLinks?: { label: string; href: string }[];

    /** WhatsApp CTA number */
    whatsapp?: string;
}

const defaultReviews: ReviewItem[] = [
    {
        name: "James T.",
        country: "🇬🇧 United Kingdom",
        rating: 5,
        text: "Absolutely seamless airport pickup from Fiumicino. Driver was professional, vehicle was immaculate. Will use Italy Taxi Service every visit.",
        date: "March 2025"
    },
    {
        name: "Sofia M.",
        country: "🇺🇸 United States",
        rating: 5,
        text: "Booked for our family trip from Rome to Florence. Comfortable van, friendly driver, and the price was completely transparent. Highly recommend.",
        date: "February 2025"
    },
    {
        name: "Marco R.",
        country: "🇩🇪 Germany",
        rating: 5,
        text: "Used their business taxi service for a week of meetings across Milan. Punctual every single time, discreet and very professional drivers.",
        date: "January 2025"
    }
];

export default function ServicePageContent({
    introTitle,
    introParagraphs,
    detailTitle,
    detailParagraphs,
    benefits,
    pricingTitle = "Transparent Pricing — No Surprises",
    pricing,
    routesTitle = "Popular Routes",
    routes,
    reviews = defaultReviews,
    relatedLinks,
    whatsapp = "923148932631",
}: ServicePageContentProps) {
    return (
        <>
            {/* ── INTRO ─────────────────────────────────────── */}
            <section className="py-24 bg-white font-inter">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-[2px] bg-gold" />
                        <p className="text-gold text-sm font-bold uppercase tracking-[0.4em]">Introduction</p>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-8 leading-tight">{introTitle}</h2>
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-5">
                            {introParagraphs.map((p, i) => (
                                <p key={i} className="text-gray-600 text-lg leading-relaxed">{p}</p>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: <Clock className="w-6 h-6 text-gold" />, label: "24/7 Availability", sub: "Round-the-clock service" },
                                { icon: <Shield className="w-6 h-6 text-gold" />, label: "Safe & Insured", sub: "Fully licensed drivers" },
                                { icon: <CreditCard className="w-6 h-6 text-gold" />, label: "Fixed Pricing", sub: "No hidden charges" },
                                { icon: <Users className="w-6 h-6 text-gold" />, label: "English-Speaking", sub: "Professional drivers" },
                            ].map((item, i) => (
                                <div key={i} className="p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white">
                                    <div className="mb-3">{item.icon}</div>
                                    <p className="font-bold text-navy text-sm">{item.label}</p>
                                    <p className="text-gray-500 text-xs mt-1">{item.sub}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DETAILED DESCRIPTION ───────────────────────── */}
            <section className="py-24 bg-[#F8F9FA] font-inter">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-[2px] bg-gold" />
                        <p className="text-gold text-sm font-bold uppercase tracking-[0.4em]">Service Details</p>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-10 leading-tight">{detailTitle}</h2>
                    <div className="space-y-6">
                        {detailParagraphs.map((p, i) => (
                            <p key={i} className="text-gray-700 text-lg leading-relaxed">{p}</p>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── BENEFITS ──────────────────────────────────── */}
            <section className="py-24 bg-white font-inter">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-14">
                        <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Why Choose Us</p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight">Everything You Need, Included</h2>
                        <div className="w-20 h-1 bg-gold mx-auto mt-6" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {benefits.map((b, i) => (
                            <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all group">
                                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                <span className="text-navy font-semibold text-base leading-snug">{b}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PRICING ───────────────────────────────────── */}
            {pricing && pricing.length > 0 && (
                <section className="py-24 bg-navy font-inter">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <div className="text-center mb-14">
                            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Sample Fares</p>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">{pricingTitle}</h2>
                            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">All prices are fixed and all-inclusive — no meter, no surcharges. You see the total before you book.</p>
                        </div>
                        <div className={`grid gap-6 ${pricing.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-' + pricing.length}`}>
                            {pricing.map((tier, i) => (
                                <div key={i} className={`relative p-8 rounded-[2rem] text-center transition-all ${tier.popular ? 'bg-gold text-navy shadow-2xl shadow-gold/30 transform md:-translate-y-4' : 'bg-white/5 border border-white/10 text-white hover:border-gold'}`}>
                                    {tier.popular && (
                                        <div className="absolute top-0 right-0 bg-navy text-gold text-xs font-bold px-3 py-1 rounded-bl-2xl rounded-tr-[2rem]">
                                            Most Popular
                                        </div>
                                    )}
                                    <p className={`text-sm font-bold uppercase tracking-widest mb-4 ${tier.popular ? 'text-navy' : 'text-gray-400'}`}>{tier.label}</p>
                                    <p className={`text-4xl font-extrabold mb-2 ${tier.popular ? 'text-navy' : 'text-white'}`}>{tier.price}</p>
                                    <p className={`text-xs ${tier.popular ? 'text-navy/70' : 'text-gray-500'}`}>{tier.note}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-gray-500 text-sm mt-8">* Prices vary by vehicle type and pick-up location. Get an exact quote instantly via our booking form.</p>
                    </div>
                </section>
            )}

            {/* ── ROUTES ───────────────────────────────────── */}
            {routes && routes.length > 0 && (
                <section className="py-24 bg-[#F8F9FA] font-inter">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <div className="text-center mb-14">
                            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Route Coverage</p>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight">{routesTitle}</h2>
                            <div className="w-20 h-1 bg-gold mx-auto mt-6" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {routes.map((r, i) => (
                                <div key={i} className="flex items-center gap-5 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gold transition-all group">
                                    <MapPin className="w-7 h-7 text-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                                    <div className="flex-1">
                                        <p className="font-bold text-navy text-base">{r.from} → {r.to}</p>
                                        <p className="text-gray-500 text-sm mt-0.5">{r.duration}</p>
                                    </div>
                                    <span className="text-gold font-extrabold text-lg whitespace-nowrap">{r.price}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── REVIEWS ──────────────────────────────────── */}
            {reviews.length > 0 && (
                <section className="py-24 bg-white font-inter">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="text-center mb-14">
                            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Customer Stories</p>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight">Trusted by Thousands of Travelers</h2>
                            <div className="flex items-center justify-center gap-1 mt-6">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-gold text-gold" />)}
                                <span className="text-gray-500 text-sm ml-2">4.9 / 5 across 500+ reviews</span>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {reviews.map((r, i) => (
                                <div key={i} className={`p-8 rounded-[2rem] border shadow-xl relative ${i === 1 ? 'border-gold shadow-gold/10' : 'border-gray-100'}`}>
                                    <div className="absolute -top-5 left-8 bg-gold text-white w-10 h-10 rounded-full flex items-center justify-center font-serif text-2xl leading-none">"</div>
                                    <div className="flex gap-1 mb-4 pt-4 text-gold">
                                        {[...Array(r.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-gold" />)}
                                    </div>
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
            )}

            {/* ── RELATED INTERNAL LINKS ──────────────────── */}
            {relatedLinks && relatedLinks.length > 0 && (
                <section className="py-16 bg-[#F8F9FA] font-inter">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-6 text-center">Explore More Services</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {relatedLinks.map((l, i) => (
                                <Link key={i} href={l.href} className="flex items-center gap-2 px-5 py-3 rounded-full border border-gray-200 text-navy font-semibold text-sm bg-white hover:border-gold hover:text-gold hover:shadow-md transition-all">
                                    <ChevronRight className="w-4 h-4" />
                                    {l.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── WHATSAPP + BOOK CTA ──────────────────────── */}
            <section className="py-16 bg-navy font-inter relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
                <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
                    <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Ready to Travel?</p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Book Your Transfer Today</h2>
                    <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">Secure your private taxi in minutes. Fixed prices, professional drivers, and 24/7 customer support.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <TaxiButton href="/book-now" className="md:scale-110">
                            Book Now — Instant Confirmation
                        </TaxiButton>
                        <a
                            href={`https://wa.me/${whatsapp}?text=Hi%2C%20I'd%20like%20to%20book%20a%20private%20taxi%20in%20Italy.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold hover:bg-[#1ebe57] transition-all shadow-lg hover:shadow-green-500/30 hover:scale-105"
                        >
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
