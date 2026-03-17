import Link from 'next/link';
import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceIntro, { ServiceFeatures } from '@/components/ServiceDetails';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Private Sightseeing Tours | Italian Taxi Service",
    description: "Discover Italy with our premium private taxi tours. Expert chauffeurs take you to the Colosseum, Tuscany, Amalfi Coast and more on your own schedule.",
    alternates: {
        canonical: "https://www.italytaxiservice.com/services/private-tours",
    }
};

export default function PrivateToursPage() {
    const features = [
        "Fully customizable itineraries",
        "Expert local chauffeurs",
        "Flexible starting times",
        "Luxury SUV & Van options",
        "Hotel pickup & drop-off",
        "Stops for photos & dining"
    ];

    return (
        <main className="min-h-screen">
            <Navbar />
            <PageHero
                titleTop="Explore Italy with"
                titleBottom="Private Taxi Tours"
                description="Experience the beauty of Italy on your terms. Our professional drivers show you the best landmarks and hidden gems."
                backgroundImage="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=2070&auto=format&fit=crop"
                buttonText="Plan Your Custom Tour"
            />

            <ServiceIntro
                title="Your Personal Journey Through Italy"
                content="Our private tours offer the ultimate flexibility. Whether you want to spend a day in the rolling hills of Tuscany or explore the ancient ruins of Rome, our professional chauffeurs provide a comfortable and personalized sightseeing experience."
            />

            <ServiceFeatures
                title="Tour Excellence"
                features={features}
                bg="bg-[#F8F9FA]"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-navy mb-12">Popular Sightseeing Routes</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "Vatican Museums Tour", path: "/tour/vatican" },
                            { name: "Lake Como Experience", path: "/tour/lake-como" },
                            { name: "Amalfi Coast Drive", path: "/tour/amalfi-coast" },
                            { name: "Tuscany Wine Region", path: "/tour/tuscany-wine-tour" },
                            { name: "Dolomites Peaks", path: "/tour/dolomites" }
                        ].map((tour, i) => (
                            <Link 
                                key={i} 
                                href={tour.path}
                                className="p-6 rounded-2xl border border-gray-100 hover:border-gold hover:shadow-xl transition-all font-bold text-navy block"
                            >
                                {tour.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <HowItWorks />
            <FAQSection />
            <CTA />
            <Footer />
        </main>
    );
}
