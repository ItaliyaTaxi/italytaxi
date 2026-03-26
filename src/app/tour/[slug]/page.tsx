import { notFound } from 'next/navigation';
import { tours } from '@/lib/page-data';
import BookingForm from '@/components/BookingForm';
import TaxiButton from '@/components/TaxiButton';
import FAQSection from '@/components/FAQSection';
import { ShieldCheck, Heart, Zap, UserCheck, Star, Camera, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ServiceSchema from '@/components/ServiceSchema';
import Image from 'next/image';

export async function generateStaticParams() {
    return tours.map((tour) => ({
        slug: tour.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const tour = tours.find((t) => t.slug === slug);
    const tourName = tour ? tour.name : slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    return {
        title: `${tourName} Italy | Private Taxi Tour & Chauffeur`,
        description: `Experience ${tourName} with our professional private taxi tours. Luxury transportation, English-speaking chauffeurs, and flexible itineraries across Italy.`,
        alternates: {
            canonical: `/tour/${slug}`,
        }
    };
}

export default async function TourPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const tour = tours.find((t) => t.slug === slug);

    if (!tour) notFound();

    const tourFaqs = [
      {
        q: `Is the ${tour.name} tour entirely private?`,
        a: "Yes, all our tours are 100% private. The vehicle and driver are exclusively for your group, ensuring a personalized and intimate experience."
      },
      {
        q: "Can we customize the pickup time and location?",
        a: "Absolutely. We can pick you up from any hotel, Airbnb, or cruise port at the time that best suits your schedule."
      },
      {
        q: "Do your tour drivers speak English?",
        a: "Yes, we provide professional, English-speaking chauffeurs who are knowledgeable about the local history and culture of the region."
      },
      {
        q: "Will we have enough time for lunch or shopping during the tour?",
        a: "Yes! Your driver will recommend the best local spots and ensure you have ample time to enjoy authentic Italian cuisine and browse local shops at your own pace."
      },
      {
        q: "Does the price for this tour include hidden fees or tolls?",
        a: "Our pricing is fixed and transparent. All fuel, highway tolls, and parking fees are included in the quote we provide upfront."
      }
    ];

    const iconSet = [<Zap key="1" />, <Heart key="2" />, <ShieldCheck key="3" />, <Camera key="4" />, <UserCheck key="5" />];

    return (
        <main className="font-inter bg-white text-navy-rich">
            <ServiceSchema 
                name={`${tour.name} Private Tour`} 
                description={`Explore the wonders of ${tour.name} with our professional private taxi tours and excursions.`} 
                url={`https://www.italytaxiservice.com/tour/${slug}`} 
                image={tour.hero_image}
            />
            <Navbar />

            <PageHero
                titleTop={`${tour.name}`}
                titleBottom="Private Excursion"
                description={`Experience the wonders of ${tour.name} with luxury private transportation and professional local drivers.`}
                backgroundImage={tour.hero_image}
                buttonText={`Book Your ${tour.name} Now`}
                breadcrumbs={[
                    { name: "Services", item: "/services" },
                    { name: "Private Tours", item: "/services/private-tours" },
                    { name: tour.name, item: `/tour/${slug}` }
                ]}
            />

            {/* Tour Description Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6 text-center">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative animate-fade-in [animation-delay:0.2s]">
                            <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-gradient-gold p-1">
                                <Image
                                    src={tour.hero_image}
                                    alt={`${tour.name} private tour experience`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute top-10 -right-10 bg-white p-8 rounded-[2rem] shadow-2xl max-w-[250px] border border-gray-100 animate-slide-up">
                                <div className="flex text-gold mb-2">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <p className="text-navy font-bold text-lg mb-1">Top Rated Tour</p>
                                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest leading-relaxed">Most recommended experience in {tour.city}</p>
                            </div>
                        </div>

                        <div className="animate-slide-left [animation-delay:0.4s] text-left">
                            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Journey Into History</p>
                            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-10 leading-tight">About The Tour</h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-10">
                                {tour.description}
                                <br /><br />
                                Immerse yourself in the authentic Italian lifestyle. No rushing, no crowded buses—just you, your companions, and a beautiful destination waiting to be explored with a professional driver at your side.
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                <li className="flex items-center gap-3 text-navy font-bold text-sm tracking-wide">
                                    <div className="w-8 h-8 rounded-full bg-gold/5 flex items-center justify-center text-gold border border-gold/10">
                                        <ShieldCheck className="w-4 h-4" />
                                    </div>
                                    Licensed Chauffeur
                                </li>
                                <li className="flex items-center gap-3 text-navy font-bold text-sm tracking-wide">
                                    <div className="w-8 h-8 rounded-full bg-gold/5 flex items-center justify-center text-gold border border-gold/10">
                                        <Clock className="w-4 h-4" />
                                    </div>
                                    Flexible Hours
                                </li>
                                <li className="flex items-center gap-3 text-navy font-bold text-sm tracking-wide">
                                    <div className="w-8 h-8 rounded-full bg-gold/5 flex items-center justify-center text-gold border border-gold/10">
                                        <Heart className="w-4 h-4" />
                                    </div>
                                    Luxury Vehicles
                                </li>
                                <li className="flex items-center gap-3 text-navy font-bold text-sm tracking-wide">
                                    <div className="w-8 h-8 rounded-full bg-gold/5 flex items-center justify-center text-gold border border-gold/10">
                                        <Star className="w-4 h-4" />
                                    </div>
                                    VIP Service
                                </li>
                            </ul>
                            <div className="p-8 bg-gray-50 rounded-[2rem] border border-gray-100 italic text-gray-400 leading-relaxed text-sm">
                                "Our mission is to provide more than just a ride; we offer memories that last a lifetime through the beauty of Italy."
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tour Highlights / Features Section */}
            <section className="py-24 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-6 text-center mb-16">
                    <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Elevated Experience</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-navy">Tour Highlights & Features</h2>
                    <div className="w-20 h-1 bg-gold mx-auto mt-6" />
                </div>

                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {tour.highlights.map((highlight, index) => (
                            <div
                                key={index}
                                className="uiverse-card p-10 group animate-slide-left min-h-[200px]"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="flex flex-col items-center text-center w-full h-full">
                                    <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-navy transition-all duration-500 shadow-lg">
                                        <div className="text-gold group-hover:text-navy transform group-hover:scale-110 transition-transform">
                                            {iconSet[index % iconSet.length]}
                                        </div>
                                    </div>
                                    <h3 className="text-white font-bold text-sm mb-4 group-hover:text-gold transition-colors tracking-tight leading-tight">{highlight}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FAQSection faqs={tourFaqs} title={`${tour.name} Tour FAQ`} />

            {/* Tour Booking CTA Section */}
            <section className="py-24 bg-[#0F1C2E] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-center justify-between">
                        <div className="w-full lg:w-2/3 animate-slide-left">
                            <p className="text-sm font-bold uppercase text-gold tracking-[0.4em] mb-6 font-inter">Your Journey Begins</p>
                            <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
                                Book your <span className="text-gold">{tour.name}</span> tour now!
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl italic">
                                Ready to discover the heart of Italy in absolute comfort? Our reservation team is standing by to confirm your premium taxi tour.
                            </p>
                            <TaxiButton href="/book-now/" className="scale-125 mb-10">
                                Send Tour Request Now
                            </TaxiButton>

                            <div className="flex items-center gap-10 border-t border-white/5 pt-10">
                                <div className="group cursor-pointer">
                                    <p className="text-white font-bold text-sm mb-1 group-hover:text-gold transition-colors">Instant Booking</p>
                                    <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold text-center">24/7 Availability</p>
                                </div>
                                <div className="group cursor-pointer">
                                    <p className="text-white font-bold text-sm mb-1 group-hover:text-gold transition-colors">Fixed Pricing</p>
                                    <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold text-center">No Hidden Fees</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/3">
                            <BookingForm />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

