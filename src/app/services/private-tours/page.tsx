import Link from 'next/link';
import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceIntro, { ServiceFeatures } from '@/components/ServiceDetails';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import ServiceSchema from '@/components/ServiceSchema';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Private Sightseeing Tours Italy | Custom Taxi Excursions",
    description: "Discover Italy with our premium private taxi tours. Expert chauffeurs take you to the Colosseum, Tuscany, Amalfi Coast and more on your own schedule.",
    alternates: {
        canonical: "/services/private-tours",
    }
};

export default function PrivateToursPage() {
    const url = "https://www.italytaxiservice.com/services/private-tours";
    const features = [
        "Fully customizable itineraries",
        "Expert local chauffeurs",
        "Flexible starting times",
        "Luxury SUV & Van options",
        "Hotel pickup & drop-off",
        "Stops for photos & dining"
    ];

    const tourFaqs = [
        {
            q: "How can I customize my private tour of Italy?",
            a: "Simply contact us with your preferred destinations. We can tailor the route, duration, and stops to match your interests, whether it's wine, history, or coastal views."
        },
        {
            q: "Do tours include official museum guides?",
            a: "Our chauffeurs are knowledgeable local drivers. For in-depth historical walkthroughs inside monuments like the Vatican, we can help you book a licensed professional tour guide."
        },
        {
            q: "What is the best way to see the Amalfi Coast or Tuscany?",
            a: "A private taxi tour is the best way to handle the winding roads of Amalfi or the remote vineyards of Tuscany without the stress of driving yourself."
        },
        {
            q: "Can I book a tour directly from my hotel or cruise port?",
            a: "Yes! We offer convenient door-to-door tours starting and ending at your hotel, Airbnb, or directly from any major Italian cruise ship pier."
        },
        {
            q: "Are the tour prices fixed or per person?",
            a: "Our tours are priced per vehicle (sedan or van), not per person, making it an excellent value for families and small groups."
        }
    ];

    return (
        <main className="min-h-screen">
            <ServiceSchema 
                name="Private Sightseeing Tours Italy" 
                description="Premium customizable private taxi tours and excursions across Italy's most iconic landmarks." 
                url={url} 
            />
            <Navbar />

            <div className="container mx-auto px-6 pt-10">
                <Breadcrumb 
                    items={[
                        { name: "Services", item: "/services" },
                        { name: "Private Tours", item: "/services/private-tours" }
                    ]} 
                />
            </div>

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
                                className="p-6 rounded-2xl border border-gray-100 font-bold text-navy block hover:border-gold hover:text-gold hover:shadow-xl transition-all"
                            >
                                {tour.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <HowItWorks />
            <FAQSection faqs={tourFaqs} title="Private Tour FAQs" />
            <CTA />
            <Footer />
        </main>
    );
}

