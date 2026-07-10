import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import ServiceSchema from '@/components/ServiceSchema';
import BookingForm from '@/components/BookingForm';
import { Clock, MapPin, Euro, CheckCircle, ChevronRight, ShieldCheck, Car, Globe, MessageCircle, Sparkles } from 'lucide-react';
import {
    type CrossBorderCombo,
    countries,
    relatedCrossBorder,
} from '@/lib/cross-border-data';

const SITE = 'https://www.italytaxiservice.com';
const HERO_IMG = '/images/hero.webp';
const WHATSAPP = '923148932631';

function seedOf(slug: string): number {
    let s = 0;
    for (let i = 0; i < slug.length; i++) s = (s + slug.charCodeAt(i) * (i + 1)) % 100000;
    return s;
}
function pick<T>(arr: T[], seed: number, salt = 0): T { return arr[(seed + salt) % arr.length]; }
function waLink(text: string) { return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`; }

export default function CrossBorderContent({ combo }: { combo: CrossBorderCombo }) {
    const { route, origin, dest, slug, direction } = combo;
    const country = countries[route.countryCode];
    const seed = seedOf(slug);
    const inbound = direction === 'inbound';
    const originIsAirport = route.fromAirport && !inbound;
    const reverseSlug = inbound ? `${route.fromSlug}-to-${route.toSlug}-transfer` : `${route.toSlug}-to-${route.fromSlug}-transfer`;
    const related = relatedCrossBorder(route.countryCode, slug, 6);

    const h1 = `${origin} to ${dest} Private Transfer`;
    const bookText = `${origin} to ${dest}`;

    const introVariants = [
        `A private ${origin} to ${dest} transfer is the most comfortable, door-to-door way to make this international journey. Instead of juggling trains, connections and luggage across the border, a professional English-speaking chauffeur collects you at your chosen address and drives you the whole way — a fixed-price, ${route.duration} ride across roughly ${route.distance}.`,
        `Travelling from ${origin} to ${dest}? Our private cross-border transfer turns a ${route.distance} international trip into a single relaxed ride. A licensed chauffeur meets you door-to-door, handles the ${country.name === 'Monaco' ? 'French' : country.name} border formalities and delivers you straight to your destination for a price agreed in advance.`,
        `The ${origin} to ${dest} route is one of our most requested Italy–${country.name} transfers. Rather than changing trains or waiting for coaches, you travel privately in comfort, door to door, on a fixed all-inclusive fare — about ${route.duration} for the ${route.distance} journey.`,
    ];

    const faqs = [
        { q: `How long does the ${origin} to ${dest} transfer take?`, a: `The drive is about ${route.distance} and takes approximately ${route.duration}, via ${route.roads}. Your chauffeur monitors traffic and border conditions to keep the journey as smooth as possible.` },
        { q: `Do I need a passport for the ${origin} to ${dest} transfer?`, a: `${country.schengen}` },
        { q: `Are there customs checks between Italy and ${country.name}?`, a: `${country.customs}` },
        { q: `Are tolls and the motorway vignette included?`, a: `${country.toll}` },
        { q: `How long does the border crossing take?`, a: `Usually only a few minutes. ${route.countryCode === 'HR' ? 'Since Croatia joined the Schengen Area in 2023, the crossings are check-free in normal conditions.' : route.countryCode === 'CH' ? 'Switzerland is in Schengen, so it is typically a smooth pass-through with only occasional customs spot-checks.' : 'Both countries are in the Schengen Area, so it is normally a seamless pass-through.'} Your driver knows the ${route.crossing} crossing well.` },
        { q: `Is a private transfer better than the train for this route?`, a: `For international routes with luggage, groups or families it usually is: one door-to-door ride, no changes, no platform rushes, and the freedom to stop along the way. The train can be cheaper for solo travellers, but the private transfer wins on comfort and directness.` },
        { q: `Can we stop along the way?`, a: `Yes — many travellers add a short stop${route.scenic.length ? ` to enjoy ${route.scenic[0]}` : ''} or for photos and refreshments. Just let us know when booking and we can build it into your itinerary.` },
        { q: `What vehicles are available and do you have child seats?`, a: `Choose from a sedan, executive sedan, business SUV, luxury van, Mercedes V-Class or Sprinter for larger groups. Infant, toddler and booster seats are available free on request — add your children's ages when booking.` },
        { q: originIsAirport ? `Do you monitor my flight into ${origin}?` : `Can you collect me from a hotel, station or address?`, a: originIsAirport
            ? `Yes — we track your flight in real time and adjust the pickup automatically, with meet & greet in the arrivals hall and free waiting time after landing.`
            : `Yes — we collect you door-to-door from any hotel, home, train station, cruise port or city-centre address in ${origin}, and drop you at the exact address you need in ${dest}.` },
        { q: `Is the price really fixed, and how do I book?`, a: `Yes — the fare is fixed and agreed before you travel, with no meter and no hidden charges. Request a free quote online or on WhatsApp, or book directly; secure online payment is available and our team is on hand 24/7.` },
    ];

    const cell = 'px-4 py-3 border border-gray-100 text-sm';

    return (
        <main className="font-inter bg-white text-navy">
            <ServiceSchema
                name={`${h1}`}
                description={`Fixed-price private cross-border transfer from ${origin} to ${dest} (Italy–${country.name}). Professional English-speaking chauffeur, door-to-door service, ${route.distance} in about ${route.duration}, meet & greet and luggage assistance.`}
                url={`${SITE}/${slug}`}
                image={`${SITE}${HERO_IMG}`}
            />
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    '@context': 'https://schema.org', '@type': 'WebPage', name: h1, url: `${SITE}/${slug}`,
                    description: `Private ${origin} to ${dest} cross-border transfer between Italy and ${country.name}.`,
                    isPartOf: { '@type': 'WebSite', name: 'Italy Taxi Service', url: SITE },
                    about: { '@type': 'Service', serviceType: 'Cross-border private transfer', areaServed: ['Italy', country.name] },
                })
            }} />
            <Navbar />

            <PageHero
                titleTop={`Private Transfer from ${origin} to`}
                titleBottom={dest}
                description={`Fixed-price, door-to-door private chauffeur transfer from ${origin} to ${dest}. ${route.distance} · ${route.duration} · English-speaking driver · meet & greet · luggage assistance.`}
                backgroundImage={HERO_IMG}
                buttonText="Get a Fixed-Price Quote"
                buttonLink="/book-now"
                breadcrumbs={[
                    { name: 'Cross-Border Transfers', item: '/airport-transfer' },
                    { name: `Italy–${country.name}`, item: `/${slug}` },
                    { name: `${origin} to ${dest}`, item: `/${slug}` },
                ]}
            />

            <section className="py-16">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4 leading-tight">{h1}</h2>
                            <p className="text-gold font-semibold mb-6 inline-flex items-center gap-2"><Globe className="w-4 h-4" /> Italy → {country.name} · Cross-border chauffeur service</p>

                            {/* Trust badges */}
                            <div className="flex flex-wrap gap-3 mb-8 text-xs font-semibold">
                                {['Fixed price', 'Licensed chauffeurs', 'English-speaking', '24/7 support', 'Free cancellation (per terms)'].map((b, i) => (
                                    <span key={i} className="inline-flex items-center gap-1 bg-[#F8F9FA] px-3 py-2 rounded-full text-navy"><CheckCircle className="w-3.5 h-3.5 text-gold" /> {b}</span>
                                ))}
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                                <div className="bg-[#F8F9FA] p-5 rounded-2xl text-center"><Clock className="w-6 h-6 text-gold mx-auto mb-2" /><p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Travel Time</p><p className="text-navy font-extrabold">{route.duration}</p></div>
                                <div className="bg-[#F8F9FA] p-5 rounded-2xl text-center"><MapPin className="w-6 h-6 text-gold mx-auto mb-2" /><p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Distance</p><p className="text-navy font-extrabold">{route.distance}</p></div>
                                <div className="bg-[#F8F9FA] p-5 rounded-2xl text-center col-span-2 md:col-span-1"><Euro className="w-6 h-6 text-gold mx-auto mb-2" /><p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Pricing</p><p className="text-navy font-extrabold">Fixed price</p></div>
                            </div>

                            <div className="flex flex-wrap gap-3 mb-8">
                                <Link href="/book-now" className="inline-block bg-[#0F1C2E] text-white font-bold px-7 py-3.5 rounded-full hover:bg-gold hover:text-navy transition-all">Book Online</Link>
                                <a href={waLink(`Hi, I'd like a quote for a private transfer: ${bookText}.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-7 py-3.5 rounded-full hover:bg-[#1da851] transition-all"><MessageCircle className="w-5 h-5" /> Quote on WhatsApp</a>
                            </div>

                            {/* Intro */}
                            <p className="text-gray-700 leading-relaxed mb-4">{pick(introVariants, seed)}</p>
                            <p className="text-gray-700 leading-relaxed mb-6">{route.description}</p>

                            {/* Why choose */}
                            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Why Choose Our Cross-Border Transfer</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">International routes are exactly where a private transfer earns its keep. There are no connections to miss, no luggage to haul between platforms, and no language barrier at the border — just one licensed, English-speaking chauffeur who knows the {route.crossing} crossing and the fastest roads. Your fare is fixed before departure, so cross-border tolls, the {country.name} vignette and fuel are all covered.</p>
                            <ul className="grid sm:grid-cols-2 gap-2 text-gray-700 mb-4">
                                {['Door-to-door, no changes', 'One fixed all-inclusive price', 'Experienced on international routes', 'Comfortable, luxury vehicles', 'Optional scenic stops en route', 'Available 24/7, year-round'].map((b, i) => (
                                    <li key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-gold mt-1 shrink-0" />{b}</li>
                                ))}
                            </ul>

                            {/* Route overview */}
                            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Route Overview: {origin} to {dest}</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">The journey covers roughly {route.distance} and takes about {route.duration}, following {route.roads}. The border is crossed at {route.crossing}.</p>
                            <ul className="space-y-2 text-gray-700 mb-4">
                                <li><strong>Distance:</strong> {route.distance}</li>
                                <li><strong>Estimated travel time:</strong> {route.duration}</li>
                                <li><strong>Best driving route:</strong> {route.roads}</li>
                                <li><strong>Border crossing:</strong> {route.crossing}</li>
                                <li><strong>Scenic highlights:</strong> {route.scenic.join(', ')}</li>
                            </ul>

                            {/* Border crossing info */}
                            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Border Crossing Information</h2>
                            <p className="text-gray-700 leading-relaxed mb-3">{country.schengen}</p>
                            <p className="text-gray-700 leading-relaxed mb-3">{country.customs}</p>
                            <p className="text-gray-700 leading-relaxed mb-4">{country.toll} Our drivers make this route regularly and handle the crossing and any formalities so you can simply relax.</p>

                            {/* Vehicle options */}
                            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Vehicle Options</h2>
                            <ul className="grid md:grid-cols-2 gap-2 text-gray-700 mb-4">
                                <li><Car className="w-4 h-4 text-gold inline mr-2" /><strong>Sedan</strong> — 1–3 passengers</li>
                                <li><Car className="w-4 h-4 text-gold inline mr-2" /><strong>Executive Sedan</strong> — business comfort</li>
                                <li><Car className="w-4 h-4 text-gold inline mr-2" /><strong>Business SUV</strong> — extra space &amp; style</li>
                                <li><Car className="w-4 h-4 text-gold inline mr-2" /><strong>Mercedes V-Class</strong> — premium group travel</li>
                                <li><Car className="w-4 h-4 text-gold inline mr-2" /><strong>Luxury Van</strong> — up to 8 in comfort</li>
                                <li><Car className="w-4 h-4 text-gold inline mr-2" /><strong>Sprinter</strong> — larger groups &amp; luggage</li>
                            </ul>

                            {/* What's included */}
                            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">What's Included</h2>
                            <ul className="grid sm:grid-cols-2 gap-2 text-gray-700 mb-4">
                                {[originIsAirport ? 'Meet & greet at the airport' : 'Meet & greet at pickup', originIsAirport ? 'Real-time flight monitoring' : 'Door-to-door service', 'Professional chauffeur', 'Free waiting time', 'Complimentary bottled water', 'Child seats available', 'Fixed pricing — no hidden charges', 'Luggage assistance', 'All tolls & vignettes included'].map((b, i) => (
                                    <li key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-gold mt-1 shrink-0" />{b}</li>
                                ))}
                            </ul>

                            {/* Pickup & drop-off */}
                            <div className="grid md:grid-cols-2 gap-6 my-6">
                                <div className="bg-[#F8F9FA] p-5 rounded-2xl">
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-2">Popular pickup points in {origin}</p>
                                    <ul className="space-y-1 text-sm text-gray-700">
                                        <li><CheckCircle className="w-4 h-4 text-gold inline mr-2" />Airports &amp; private terminals</li>
                                        <li><CheckCircle className="w-4 h-4 text-gold inline mr-2" />Hotels &amp; private residences</li>
                                        <li><CheckCircle className="w-4 h-4 text-gold inline mr-2" />Train stations</li>
                                        <li><CheckCircle className="w-4 h-4 text-gold inline mr-2" />Cruise ports &amp; city centres</li>
                                    </ul>
                                </div>
                                <div className="bg-[#F8F9FA] p-5 rounded-2xl">
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-2">Popular drop-off points in {dest}</p>
                                    <ul className="space-y-1 text-sm text-gray-700">
                                        <li><CheckCircle className="w-4 h-4 text-gold inline mr-2" />Hotels &amp; resorts</li>
                                        <li><CheckCircle className="w-4 h-4 text-gold inline mr-2" />Business districts</li>
                                        <li><CheckCircle className="w-4 h-4 text-gold inline mr-2" />Tourist attractions</li>
                                        <li><CheckCircle className="w-4 h-4 text-gold inline mr-2" />Airports &amp; train stations</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Attractions along the route */}
                            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Along the Route &amp; in {dest}</h2>
                            <p className="text-gray-700 leading-relaxed mb-3">The drive passes {route.towns.join(', ')}, and travellers often add a short stop to break the journey. Highlights along the way include {route.scenic.join(', ')}.</p>
                            <p className="text-gray-700 leading-relaxed mb-2">Once in {dest}, don't miss:</p>
                            <ul className="grid sm:grid-cols-2 gap-2 text-gray-700 mb-4">
                                {route.attractions.map((a, i) => <li key={i}><Sparkles className="w-4 h-4 text-gold inline mr-2" />{a}</li>)}
                            </ul>

                            {/* Why book with us */}
                            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Why Book With Us</h2>
                            <div className="bg-[#0F1C2E] text-white rounded-2xl p-6 my-4 grid sm:grid-cols-2 gap-3 text-sm">
                                {['Licensed, professional chauffeurs', 'Fixed rates — no hidden charges', 'English-speaking drivers', 'Modern luxury vehicles', '24/7 customer support', 'Experienced on cross-border routes', 'Meet & greet & flight monitoring', 'Secure online booking'].map((s, i) => (
                                    <p key={i} className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-gold shrink-0" /> {s}</p>
                                ))}
                            </div>
                        </div>

                        {/* Booking sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-[#0F1C2E] p-8 rounded-[2rem] shadow-2xl lg:sticky lg:top-24">
                                <h2 className="text-xl font-bold text-white mb-1">Request Your Quote</h2>
                                <p className="text-gray-400 text-xs mb-6">Fixed price · Cross-border · Free cancellation (per terms)</p>
                                <BookingForm sourceName={`Cross-Border Transfer: ${bookText}`} />
                                <a href={waLink(`Hi, I'd like to book a private transfer: ${bookText}.`)} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#1da851] transition-colors w-full"><MessageCircle className="w-5 h-5" /> Book on WhatsApp</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FAQSection faqs={faqs} title={`${bookText} Transfer — FAQ`} />

            {/* Internal linking */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="bg-[#FBF8F0] border border-gold/30 rounded-2xl p-5 mb-10">
                        <p className="font-bold text-navy mb-1">Travelling the other way?</p>
                        <Link href={`/${reverseSlug}`} className="text-gold font-semibold hover:underline">{dest} to {origin} Private Transfer <ChevronRight className="w-4 h-4 inline" /></Link>
                    </div>

                    {related.length > 0 && (
                        <>
                            <h2 className="text-2xl font-bold text-navy mb-4">More Italy–{country.name} Transfers</h2>
                            <div className="grid sm:grid-cols-2 gap-3 mb-10">
                                {related.map((t) => (
                                    <Link key={t.slug} href={`/${t.slug}`} className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium">
                                        <ChevronRight className="w-4 h-4 text-gold" /> {t.origin} to {t.dest}
                                    </Link>
                                ))}
                            </div>
                        </>
                    )}

                    <h3 className="text-xl font-bold text-navy mb-4">Related Transfers &amp; Services</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                        <Link href="/services/airport-transfers" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> Italy Airport Transfers</Link>
                        <Link href="/milan-chauffeur-service" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> Milan Chauffeur Service</Link>
                        <Link href="/city/venice" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> Venice Transfers</Link>
                        <Link href="/route/milan-to-lake-como-taxi" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> Lake Como Transfers</Link>
                        <Link href="/services/city-to-city" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> City-to-City Transfers</Link>
                        <Link href="/contact" className="flex items-center gap-2 text-gray-700 hover:text-gold font-medium"><ChevronRight className="w-4 h-4 text-gold" /> Contact for Custom Routes</Link>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-4 justify-center">
                        <Link href="/book-now" className="inline-block bg-[#0F1C2E] text-white font-bold px-10 py-4 rounded-full hover:bg-gold hover:text-navy transition-all">Book Your {origin} → {dest} Transfer</Link>
                        <a href={waLink(`Hi, I'd like a quote: ${bookText} private transfer.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold px-10 py-4 rounded-full hover:bg-[#1da851] transition-all"><MessageCircle className="w-5 h-5" /> WhatsApp Us</a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
