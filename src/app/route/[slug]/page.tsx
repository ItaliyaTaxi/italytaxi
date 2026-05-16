import { notFound } from 'next/navigation';
import { routes } from '@/lib/page-data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ServiceSchema from '@/components/ServiceSchema';
import BookingForm from '@/components/BookingForm';
import FAQSection from '@/components/FAQSection';
import Link from 'next/link';
import { MapPin, Clock, ChevronRight, MessageCircle, CheckCircle } from 'lucide-react';

export async function generateStaticParams() {
    return routes.map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const route = routes.find((r) => r.slug === slug);
    if (!route) return {};

    return {
        title: `${route.title} | Private Transfer Italy`,
        description: `Book a private taxi from ${route.from} to ${route.to}. Distance: ${route.distance}, duration: ${route.duration}. Professional English-speaking drivers, door-to-door service. Request a quote today.`,
        alternates: {
            canonical: `/route/${slug}`,
        },
        openGraph: {
            title: `${route.title} | Italy Taxi Service`,
            description: `Private taxi from ${route.from} to ${route.to}. Professional drivers, door-to-door service. Request a quote today.`,
            images: [{ url: route.hero_image, alt: route.title }],
        },
    };
}

// Related popular routes to cross-link
const relatedRoutes = routes.slice(0, 6);

export default async function RoutePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const route = routes.find((r) => r.slug === slug);

    if (!route) notFound();

    return (
        <main className="font-inter bg-white text-navy-rich">
            <ServiceSchema
                name={route.title}
                description={route.description}
                url={`https://www.italytaxiservice.com/route/${slug}`}
                image={route.hero_image}
            />
            <Navbar />

            <PageHero
                titleTop={`${route.from} to`}
                titleBottom={`${route.to} Transfer`}
                description={`Private door-to-door taxi from ${route.from} to ${route.to}. ${route.distance} · ${route.duration} · Professional drivers`}
                backgroundImage={route.hero_image}
                buttonText={`Book ${route.from} to ${route.to} Taxi`}
                breadcrumbs={[
                    { name: 'Routes', item: '/services/city-to-city' },
                    { name: `${route.from} to ${route.to}`, item: `/route/${slug}` }
                ]}
            />

            {/* Route Overview */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Private Transfer</p>
                            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                {route.from} to {route.to} Taxi
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-10">{route.description}</p>

                            {/* Route Stats */}
                            <div className="grid grid-cols-2 gap-4 mb-10">
                                <div className="bg-[#F8F9FA] p-6 rounded-2xl text-center">
                                    <MapPin className="w-6 h-6 text-gold mx-auto mb-2" />
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Distance</p>
                                    <p className="text-navy font-extrabold text-lg">{route.distance}</p>
                                </div>
                                <div className="bg-[#F8F9FA] p-6 rounded-2xl text-center">
                                    <Clock className="w-6 h-6 text-gold mx-auto mb-2" />
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Duration</p>
                                    <p className="text-navy font-extrabold text-lg">{route.duration}</p>
                                </div>
                            </div>

                            {/* Highlights */}
                            <h2 className="text-2xl font-bold text-navy mb-6">What's Included</h2>
                            <ul className="space-y-3 mb-10">
                                {route.highlights.map((highlight, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                                        <span className="text-gray-700 font-medium">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Booking Form */}
                        <div className="bg-[#0F1C2E] p-10 rounded-[3rem] shadow-2xl">
                            <h2 className="text-2xl font-bold text-white mb-2">Book This Transfer</h2>
                            <p className="text-gray-400 text-sm mb-8">Instant confirmation · Professional drivers · Free cancellation</p>
                            <BookingForm sourceName="Route Page" />
                            <div className="mt-8 flex flex-col items-center gap-4">
                                <p className="text-gray-400 text-xs text-center">Need help? Contact us 24/7</p>
                                <a
                                    href="https://wa.me/923148932631"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-[#25D366] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#128C7E] transition-colors w-full justify-center"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    WhatsApp Support
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FAQSection faqs={route.faqs} title={`${route.from} to ${route.to} Transfer — FAQ`} />

            {/* Internal Linking: Other Popular Routes */}
            <section className="py-16 bg-[#F8F9FA] border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="text-center mb-10">
                        <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-3">More Transfers</p>
                        <h2 className="text-3xl font-bold text-navy">Other Popular Italy Routes</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {routes
                            .filter((r) => r.slug !== slug)
                            .slice(0, 6)
                            .map((r, idx) => (
                                <Link
                                    key={idx}
                                    href={`/route/${r.slug}`}
                                    className="block p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-gold hover:shadow-md transition-all group"
                                >
                                    <p className="font-bold text-navy group-hover:text-gold transition-colors text-sm">{r.from} → {r.to}</p>
                                    <p className="text-xs text-gray-400 mt-1">{r.distance} · {r.duration}</p>
                                </Link>
                            ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/services/city-to-city" className="inline-flex items-center text-gold hover:text-navy font-bold tracking-widest uppercase text-sm border-b-2 border-gold/30 hover:border-navy transition-all pb-1">
                            View All City-to-City Transfers <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Internal Links: City + Service Pages */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-bold text-navy mb-6">Taxi Services in {route.from}</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href={`/city/${route.from.toLowerCase()}-taxi-service`} className="flex items-center gap-2 text-gray-700 hover:text-gold transition-colors font-medium">
                                        <ChevronRight className="w-4 h-4 text-gold" /> {route.from} Taxi Service
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/airport-transfers" className="flex items-center gap-2 text-gray-700 hover:text-gold transition-colors font-medium">
                                        <ChevronRight className="w-4 h-4 text-gold" /> Airport Transfers in Italy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/city-to-city" className="flex items-center gap-2 text-gray-700 hover:text-gold transition-colors font-medium">
                                        <ChevronRight className="w-4 h-4 text-gold" /> City-to-City Transfers
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/private-tours" className="flex items-center gap-2 text-gray-700 hover:text-gold transition-colors font-medium">
                                        <ChevronRight className="w-4 h-4 text-gold" /> Private Sightseeing Tours
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-navy mb-6">Taxi Services in {route.to}</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href={`/city/${route.to.toLowerCase().replace(/\s+/g, '-')}-taxi-service`} className="flex items-center gap-2 text-gray-700 hover:text-gold transition-colors font-medium">
                                        <ChevronRight className="w-4 h-4 text-gold" /> {route.to} Taxi Service
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/hotel-transfers" className="flex items-center gap-2 text-gray-700 hover:text-gold transition-colors font-medium">
                                        <ChevronRight className="w-4 h-4 text-gold" /> Hotel Transfer Service
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/hourly-taxi" className="flex items-center gap-2 text-gray-700 hover:text-gold transition-colors font-medium">
                                        <ChevronRight className="w-4 h-4 text-gold" /> Hourly Taxi Service
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/book-now" className="flex items-center gap-2 text-gold hover:text-navy transition-colors font-bold">
                                        <ChevronRight className="w-4 h-4" /> Book Your Transfer Now
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
