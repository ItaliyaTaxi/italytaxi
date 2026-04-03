import { notFound } from 'next/navigation';
import { cities } from '@/lib/page-data';
import BookingForm from '@/components/BookingForm';
import FAQSection from '@/components/FAQSection';
import { Plane, Clock, MapPin, Camera, Star, ChevronRight, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ServiceSchema from '@/components/ServiceSchema';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
    return cities.map((city) => ({
        slug: city.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const city = cities.find((c) => c.slug === slug);
    const cityName = city ? city.name : slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    return {
        title: `Best Private Taxi in ${cityName} | Cheap & Reliable Transfer Service`,
        description: `Book the #1 top-rated private taxi transfer in ${cityName}. 24/7 service, English-speaking drivers, and fixed pricing for airport and city rides.`,
        alternates: {
            canonical: `/city/${slug}`,
        }
    };
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const city = cities.find((c) => c.slug === slug) || {
        slug: slug,
        name: slug.split('-').filter(w => w !== 'taxi' && w !== 'service').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        hero_image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=60&w=1200",
        description: "Explore this beautiful Italian destination with our premium private transfer services. Professional drivers and luxury vehicles at your service.",
        popular_tours: ["City Center Tour", "Historical Landmarks", "Local Food Tasting"]
    };

    const cityFaqs = [
      {
        q: `Does your private service cover all areas of ${city.name}?`,
        a: `Yes, we provide door-to-door transportation to any hotel, residence, or attraction within the metropolitan area of ${city.name} and its surrounding suburbs.`
      },
      {
        q: `Can I book a transfer from ${city.name} to other Italian cities?`,
        a: `Absolutely. We specialize in long-distance city-to-city transfers. Whether you're heading from ${city.name} to Rome, Florence, or the coast, we provide comfortable, fixed-price rides.`
      },
      {
        q: `Are your drivers in ${city.name} knowledgeable about local landmarks?`,
        a: `Yes, our drivers are local experts who know the best routes and can provide interesting insights into the history and culture of ${city.name} during your journey.`
      },
      {
        q: `Can I hire a private chauffeur in ${city.name} by the hour?`,
        a: "Yes, we offer flexible hourly disposal services. This is perfect for business meetings, shopping trips, or multi-stop sightseeing tours within the city."
      },
      {
        q: `What is the best vehicle for a large group traveling in ${city.name}?`,
        a: "For groups of 4 to 8 people, we recommend our luxury Mercedes V-Class minivans. They offer ample space for both passengers and luggage, ensuring a comfortable ride for everyone."
      },
      {
        q: `What if my schedule changes while I have a chauffeur in ${city.name}?`,
        a: "We offer maximum flexibility. If you've booked our hourly disposition service, you can direct your chauffeur to change paths or wait as needed without any strict itineraries."
      },
      {
        q: `Are the vehicles equipped with Wi-Fi and air conditioning?`,
        a: `Yes, all our luxury vehicles feature complimentary onboard Wi-Fi, climate control air conditioning, and bottled water to ensure your journey through ${city.name} is as comfortable as possible.`
      }
    ];

    return (
        <main className="font-inter bg-white text-navy-rich">
            <ServiceSchema 
                name={`Private Taxi Service in ${city.name}`} 
                description={`Premium private taxi transfers, airport rides, and city tours in ${city.name}, Italy.`} 
                url={`https://www.italytaxiservice.com/city/${slug}`} 
                image={city.hero_image}
            />
            <Navbar />

            <PageHero
                titleTop={`Luxury Transfer in`}
                titleBottom={city.name}
                description={`Premium airport transfers, city-to-city rides, and hourly chauffeur service across ${city.name} with local experts.`}
                backgroundImage={city.hero_image}
                buttonText={`Book Your ${city.name} Ride Now`}
                breadcrumbs={[
                    { name: "Destinations", item: "/services" },
                    { name: city.name, item: `/city/${slug}` }
                ]}
            />

            {/* City Highlights Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="animate-slide-left [animation-delay:0.2s] text-left">
                            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">The Pride of Italy</p>
                            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-10 leading-tight">Explore {city.name} With Excellence</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-10">
                                {city.description}
                                <br /><br />
                                Enjoy {city.name} without the worry of traffic or logistics. Experience the historical monuments and grand aesthetics with our local professional drivers who know every hidden corner of the city.
                            </p>
                            <div className="grid grid-cols-1 gap-6 mb-10">
                                {city.popular_tours.map((tour, i) => (
                                    <div key={i} className="flex items-center gap-4 group p-4 rounded-xl border border-gray-100 hover:border-gold/30 hover:shadow-xl transition-all cursor-pointer">
                                        <div className="w-10 h-10 rounded-full bg-gold/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy transition-all">
                                            <Star className="w-5 h-5 fill-current" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-navy font-bold text-lg">{tour}</p>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-gold transition-colors" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative animate-fade-in [animation-delay:0.4s]">
                            <div className="relative h-[550px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                                <Image
                                    src={city.hero_image}
                                    alt={`Private chauffeur service in ${city.name} - Italy Taxi Service`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-10 -left-10 bg-gold p-8 rounded-[2rem] shadow-2xl animate-slide-up max-w-[250px]">
                                <p className="text-navy font-extrabold text-4xl mb-1">99%</p>
                                <p className="text-navy/80 font-bold uppercase tracking-widest text-xs">Customer <br />Satisfaction in {city.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-24 bg-[#0F1C2E] text-white">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Transparent Fares</p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-12">Fixed Pricing in {city.name}</h2>
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
                    <p className="text-sm text-gray-500 mt-8">*Prices vary by time and exact distance.</p>
                </div>
            </section>

            {/* Our Services Section */}
            <section className="py-24 bg-gray-50 overflow-hidden text-center">
                <div className="container mx-auto px-6 mb-16">
                    <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Our Local Expertise</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-navy">Our Services in {city.name}</h2>
                    <div className="w-20 h-1 bg-gold mx-auto mt-6" />
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Airport Transfers", icon: <Plane />, desc: "Reliable airport pickups & drop-offs.", path: "/services/airport-transfers" },
                            { title: "Hourly Chauffeur", icon: <Clock />, desc: "Personal driver for as long as you need.", path: "/services/hourly-taxi" },
                            { title: "City-to-city Rides", icon: <MapPin />, desc: "Travel between Italian cities in comfort.", path: "/services/city-to-city" },
                            { title: "Private Tours", icon: <Camera />, desc: "Explore landmarks and hidden gems.", path: "/services/private-tours" }
                        ].map((service, index) => (
                            <Link
                                key={index}
                                href={service.path}
                                className="uiverse-card p-10 group animate-slide-left min-h-[300px] block"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="flex flex-col items-center text-center w-full h-full">
                                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-gold group-hover:text-navy transition-all duration-500 shadow-lg">
                                        <div className="text-gold group-hover:text-navy transform group-hover:scale-110 transition-transform">
                                            {service.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-white font-bold text-lg mb-4 group-hover:text-gold transition-colors">{service.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                        {service.desc}
                                    </p>
                                </div>
                            </Link>
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
                            <p className="text-gray-600 italic mb-6">"Our driver knew {city.name} perfectly. We completely avoided the traffic zones, and the recommendation for dinner was superb."</p>
                            <p className="font-bold text-navy">— Alice F., Canada</p>
                        </div>
                        <div className="p-8 rounded-[2rem] border border-gold shadow-xl shadow-gold/10 relative">
                            <div className="absolute -top-6 left-8 bg-gold text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">"</div>
                            <div className="flex gap-1 mb-4 pt-4 text-gold">★★★★★</div>
                            <p className="text-gray-600 italic mb-6">"Punctual, professional, and the Mercedes van was incredible. Worth every penny to ensure a smooth trip through the city."</p>
                            <p className="font-bold text-navy">— Jason H., US</p>
                        </div>
                        <div className="p-8 rounded-[2rem] border border-gray-100 shadow-xl relative mt-4">
                            <div className="absolute -top-6 left-8 bg-gold text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">"</div>
                            <div className="flex gap-1 mb-4 pt-4 text-gold">★★★★★</div>
                            <p className="text-gray-600 italic mb-6">"Such reliable service! Booking was easy and everything went smoothly. Highly recommended over trying to navigate local buses."</p>
                            <p className="font-bold text-navy">— The Peterson Family</p>
                        </div>
                    </div>
                </div>
            </section>

            <FAQSection faqs={cityFaqs} title={`${city.name} Service FAQ`} />

            {/* CTA Section */}
            <section className="py-24 bg-[#0F1C2E] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
                        <div className="w-full lg:w-1/2 animate-slide-left">
                            <p className="text-sm font-bold uppercase text-gold tracking-[0.4em] mb-6">Experience Italy</p>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8">
                                Ready for a Journey in <span className="text-gold">{city.name}?</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-10">
                                Don't wait at taxi stands. Book your private ride now and travel in complete comfort with fixed pricing.
                            </p>
                            
                            {/* WhatsApp Direct Contact */}
                            <div className="mb-10 p-6 bg-white/5 rounded-[2rem] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                                <div>
                                    <h4 className="text-white font-bold mb-1">Need to speak to someone?</h4>
                                    <p className="text-gray-400 text-sm">Our 24/7 team is ready on WhatsApp</p>
                                </div>
                                <a href="https://wa.me/923148932631" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#128C7E] transition-colors">
                                    <MessageCircle className="w-6 h-6" />
                                    WhatsApp
                                </a>
                            </div>

                            <BookingForm />
                        </div>
                        <div className="w-full lg:w-1/2 relative h-[500px] hidden lg:block rounded-[3rem] overflow-hidden shadow-2xl animate-fade-in">
                            <Image
                                src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=60&w=1200"
                                alt={`Luxury transfer service in ${city.name}`}
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

