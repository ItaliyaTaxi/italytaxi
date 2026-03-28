import { notFound } from 'next/navigation';
import { airports } from '@/lib/page-data';
import BookingForm from '@/components/BookingForm';
import FAQSection from '@/components/FAQSection';
import { ShieldCheck, Clock, UserCheck, Plane, MousePointer2, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ServiceSchema from '@/components/ServiceSchema';
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
        title: `Best ${airportName.replace(/ Airport$/, '')} Airport Taxi Transfer | Cheap, 24/7 & Reliable`,
        description: `Book the most reliable and affordable private taxi transfer to or from ${airportName}. 24/7 service, top-rated English-speaking drivers, and fixed pricing.`,
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
        features: ["Flight tracking", "Meet & greet service", "Fixed pricing", "24/7 availability", "Premium fleet"],
        city: slug.split('-')[0]
    };

    const airportFaqs = [
      {
        q: `Where do I meet my driver at ${airport.name}?`,
        a: "Your driver will be waiting in the arrivals hall, right after you pass through customs and collect your luggage. They will hold a sign with your name clearly visible."
      },
      {
        q: `Does the price for a transfer from ${airport.name} include parking?`,
        a: "Yes, our prices are all-inclusive. All airport parking fees, fuel, and highway tolls are covered in the fixed price we quote you."
      },
      {
        q: "What if I can't find my driver at the airport?",
        a: "Don't worry. You will receive the driver's phone number via WhatsApp or email before your arrival. You can also contact our 24/7 support line for immediate assistance."
      },
      {
        q: "How early should I book my transfer to the airport?",
        a: "We recommend booking at least 24 hours in advance. However, if you have a last-minute flight, contact us via WhatsApp and we will do our best to accommodate you."
      },
      {
        q: "Can the driver wait if I have a delay at baggage claim?",
        a: "We include 60 minutes of free waiting time from the moment your flight lands. If you encounter significant delays (like lost luggage), please call the driver to let them know."
      },
      {
        q: "Are baby seats and child boosters provided for airport transfers?",
        a: "Yes, we provide high-quality baby seats and child booster seats free of charge upon request. Just mention your requirements and the age of your children when completing your booking."
      },
      {
        q: "What type of vehicles do you use for airport transfers?",
        a: "We operate a premium fleet including standard sedans (Mercedes E-Class or similar), luxury minivans (Mercedes V-Class), and spacious premium vans to comfortably accommodate any group size and luggage requirement."
      }
    ];

    const icons = [<Plane key="1" />, <ShieldCheck key="2" />, <UserCheck key="3" />, <Clock key="4" />, <MousePointer2 key="5" />];

    return (
        <main className="font-inter bg-white text-navy-rich">
            <ServiceSchema 
                name={`Private Transfer to ${airport.name}`} 
                description={`Reliable private taxi transfer and meet & greet service to or from ${airport.name}.`} 
                url={`https://www.italytaxiservice.com/airport/${slug}`} 
                image={airport.hero_image}
            />
            <Navbar />

            <PageHero
                titleTop="Private Airport"
                titleBottom={airport.name}
                description={`Reliable, luxury transfer service to and from ${airport.name} with professional English-speaking drivers.`}
                backgroundImage={airport.hero_image}
                buttonText="Book Your Airport Transfer"
                breadcrumbs={[
                    { name: "Airport Transfers", item: "/services/airport-transfers" },
                    { name: airport.name, item: `/airport/${slug}` }
                ]}
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
                                alt={`Luxury car waiting at ${airport.name}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-24 bg-[#0F1C2E] text-white">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Transparent Fares</p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-12">Fixed Pricing from {airport.name}</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-gold transition-colors">
                            <h3 className="text-xl font-bold mb-2 text-gold">Standard Sedan</h3>
                            <p className="text-gray-400 mb-6">Up to 3 Passengers + 2 Bags</p>
                            <p className="text-4xl font-extrabold mb-6">From €50*</p>
                            <button className="w-full bg-white text-navy font-bold py-3 rounded-xl hover:bg-gold transition-colors">Select Vehicle</button>
                        </div>
                        <div className="bg-gold p-8 rounded-[2rem] transform md:-translate-y-4 shadow-2xl shadow-gold/20 text-navy relative">
                            <div className="absolute top-0 right-0 bg-white text-navy text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-[2rem] uppercase">Most Popular</div>
                            <h3 className="text-xl font-bold mb-2">Luxury Minivan</h3>
                            <p className="text-navy/70 mb-6">Up to 7 Passengers + 7 Bags</p>
                            <p className="text-4xl font-extrabold mb-6">From €80*</p>
                            <button className="w-full bg-navy text-white font-bold py-3 rounded-xl hover:bg-white hover:text-navy transition-colors">Select Vehicle</button>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-gold transition-colors">
                            <h3 className="text-xl font-bold mb-2 text-gold">Premium Van</h3>
                            <p className="text-gray-400 mb-6">Up to 8 Passengers + 8 Bags</p>
                            <p className="text-4xl font-extrabold mb-6">From €100*</p>
                            <button className="w-full bg-white text-navy font-bold py-3 rounded-xl hover:bg-gold transition-colors">Select Vehicle</button>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-8">*Prices vary depending on final destination and time of day.</p>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-24 bg-gray-50 overflow-hidden text-center">
                <div className="container mx-auto px-6 mb-16">
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

            {/* Customer Reviews Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-6xl">
                    <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4 text-center">Testimonials</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-navy text-center mb-16">What Travelers Say</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-[2rem] border border-gray-100 shadow-xl relative mt-4">
                            <div className="absolute -top-6 left-8 bg-gold text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">"</div>
                            <div className="flex gap-1 mb-4 pt-4 text-gold">★★★★★</div>
                            <p className="text-gray-600 italic mb-6">"Our driver was waiting with a sign right as we exited luggage claim at {airport.name}. The van was spotless and the ride to our hotel was incredibly smooth."</p>
                            <p className="font-bold text-navy">— Sarah Jenkins, US</p>
                        </div>
                        <div className="p-8 rounded-[2rem] border border-gold shadow-xl shadow-gold/10 relative">
                            <div className="absolute -top-6 left-8 bg-gold text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">"</div>
                            <div className="flex gap-1 mb-4 pt-4 text-gold">★★★★★</div>
                            <p className="text-gray-600 italic mb-6">"Our flight was delayed by 2 hours, but our driver tracked it and was still there waiting with a smile. Perfect start to our vacation!"</p>
                            <p className="font-bold text-navy">— Mark T., UK</p>
                        </div>
                        <div className="p-8 rounded-[2rem] border border-gray-100 shadow-xl relative mt-4">
                            <div className="absolute -top-6 left-8 bg-gold text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">"</div>
                            <div className="flex gap-1 mb-4 pt-4 text-gold">★★★★★</div>
                            <p className="text-gray-600 italic mb-6">"Cheaper than grabbing two local taxis for our family of six, and way more comfortable. I will use them every time I fly into {airport.name}."</p>
                            <p className="font-bold text-navy">— The Miller Family</p>
                        </div>
                    </div>
                </div>
            </section>

            <FAQSection faqs={airportFaqs} title={`${airport.name.split(' ')[0]} Airport FAQ`} />

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
                                Secure your luxury airport transfer in less than 2 minutes. Get instant confirmation and travel with peace of mind.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-white font-bold text-sm">Real-time Flight Tracking</p>
                                        <p className="text-gray-500 text-xs">We wait even if your flight is delayed</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-white font-bold text-sm">Secure Booking</p>
                                        <p className="text-gray-500 text-xs">SSL Encrypted processing</p>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp Direct Contact */}
                            <div className="mt-12 p-6 bg-white/5 rounded-[2rem] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                                <div>
                                    <h4 className="text-white font-bold mb-1">Need help immediately?</h4>
                                    <p className="text-gray-400 text-sm">Chat with our 24/7 dispatch</p>
                                </div>
                                <a href="https://wa.me/923148932631" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#128C7E] transition-colors">
                                    <MessageCircle className="w-6 h-6" />
                                    WhatsApp
                                </a>
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

