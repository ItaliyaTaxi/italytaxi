import { notFound } from 'next/navigation';
import { airports } from '@/lib/page-data';
import BookingForm from '@/components/BookingForm';
import { ShieldCheck, Clock, UserCheck, Plane, MousePointer2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Image from 'next/image';

export async function generateStaticParams() {
    return airports.map((airport) => ({
        slug: airport.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const airport = airports.find((a) => a.slug === slug);
    const airportName = airport ? airport.name : slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    return {
        title: `${airportName.replace(/ Airport$/, '')} | Private Airport Transfer`,
        description: `Book your private taxi transfer to or from ${airportName}. Professional drivers, fixed pricing, and premium fleet for a stress-free travel in Italy.`,
        alternates: {
            canonical: `/airport/${slug}`,
        }
    };
}

export default async function AirportPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const airport = airports.find((a) => a.slug === slug) || {
        slug: slug,
        name: slug.split('-').filter(w => w !== 'airport' && w !== 'taxi').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') + ' Airport',
        hero_image: "/images/hero.png",
        description: "Professional airport transfer service. Reliable, punctual, and comfortable rides to and from the airport.",
        features: ["Flight tracking", "Meet & greet service", "Fixed pricing", "24/7 availability", "Premium fleet"]
    };

    const icons = [<Plane key="1" />, <ShieldCheck key="2" />, <UserCheck key="3" />, <Clock key="4" />, <MousePointer2 key="5" />];

    return (
        <main className="font-inter bg-white">
            <Navbar />
            <PageHero
                titleTop="Private Airport Transfers from"
                titleBottom={airport.name}
                description={`Reliable, luxury taxi service to and from ${airport.name} with professional English-speaking drivers.`}
                backgroundImage={airport.hero_image}
                buttonText="Book Your Airport Transfer"
            />

            {/* Introduction Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="animate-slide-left [animation-delay:0.2s]">
                            <p className="text-sm font-bold uppercase text-gold tracking-[0.4em] mb-4">Introduction</p>
                            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">Travel from {airport.name} in Comfort</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                {airport.description}
                            </p>
                            <p className="text-gray-500 leading-relaxed mb-10">
                                Whether you're traveling for business or leisure, our door-to-door transportation ensures you reach your destination without the stress of navigating public transport or waiting for local cabs.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="px-6 py-3 bg-gray-50 rounded-full border border-gray-100 text-navy font-bold text-sm tracking-wide">
                                    Fixed Pricing
                                </div>
                                <div className="px-6 py-3 bg-gray-50 rounded-full border border-gray-100 text-navy font-bold text-sm tracking-wide">
                                    Airport Meet & Greet
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl animate-fade-in [animation-delay:0.4s]">
                            <Image
                                src={airport.hero_image}
                                alt={airport.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-24 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-6 text-center mb-16">
                    <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Our Excellence</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-navy">Why Choose This Airport Service</h2>
                    <div className="w-20 h-1 bg-gold mx-auto mt-6" />
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {airport.features.map((feature, index) => (
                            <div
                                key={index}
                                className="uiverse-card p-10 group animate-slide-left min-h-[250px]"
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                <div className="flex flex-col items-center text-center w-full">
                                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-navy transition-all duration-500">
                                        <div className="text-gold group-hover:text-navy transform group-hover:scale-110 transition-transform">
                                            {icons[index % icons.length]}
                                        </div>
                                    </div>
                                    <h3 className="text-white font-bold text-xl mb-4 group-hover:text-gold transition-colors">{feature}</h3>
                                    <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">Standard Inclusion</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking & CTA Section */}
            <section className="py-24 bg-[#0F1C2E] relative overflow-hidden">
                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                        <div className="w-full lg:w-1/2 animate-slide-left">
                            <p className="text-sm font-bold uppercase text-gold tracking-[0.4em] mb-6">Reservation</p>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8">
                                Book your <span className="text-gold">{airport.name}</span> transfer today!
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
                                Secure your luxury airport taxi in less than 2 minutes. Get instant confirmation and travel with peace of mind.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">Real-time Flight Tracking</p>
                                        <p className="text-gray-500 text-xs">We wait even if your flight is delayed</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">Secure Booking</p>
                                        <p className="text-gray-500 text-xs">SSL Encrypted processing</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <BookingForm />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
