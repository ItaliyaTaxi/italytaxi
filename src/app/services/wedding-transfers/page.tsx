import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceIntro, { ServiceFeatures } from '@/components/ServiceDetails';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ServiceSchema from '@/components/ServiceSchema';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Wedding Guest Transfers Italy | Private Event Taxi",
    description: "Reliable and elegant wedding taxi transfers in Italy. Professional guest transportation for weddings in Tuscany, Amalfi Coast, Lake Como, and beyond.",
    alternates: {
        canonical: "/services/wedding-transfers",
    }
};

export default function WeddingTransfersPage() {
    const url = "https://www.italytaxiservice.com/services/wedding-transfers";
    const features = [
        "Punctual guest shuttle services",
        "Luxury Mercedes sedans & vans",
        "Professional suited chauffeurs",
        "Coordinated venue-to-venue logistics",
        "24/7 coordination support",
        "Available at all major wedding destinations"
    ];

    const weddingFaqs = [
        {
            q: "Do you provide luxury cars for weddings in Italy?",
            a: "Yes, we offer a high-end fleet of Mercedes E-Class, S-Class, and V-Class vans, perfect for weddings and VIP event transportation."
        },
        {
            q: "Do you provide shuttles for large groups of guests?",
            a: "Yes, we have a fleet of Mercedes V-Class and Sprinter vans that can accommodate groups of 7 to 20+ guests comfortably."
        },
        {
            q: "Can we book transfers for multiple days?",
            a: "Absolutely. We often handle welcome dinners, wedding day logistics, and post-wedding brunch transfers."
        },
        {
            q: "How far in advance should we book?",
            a: "For weddings, we recommend booking at least 3-6 months in advance, especially for peak season (May-September)."
        },
        {
            q: "Do the drivers dress formally for the event?",
            a: "Yes, our wedding chauffeurs maintain a professional, suited appearance to match the elegance of your special day."
        }
    ];

    return (
        <main className="min-h-screen">
            <ServiceSchema 
                name="Private Wedding Transfers Italy" 
                description="Elegant and professional private taxi transfers for wedding guests across Italy's most beautiful venues." 
                url={url} 
            />
            <Navbar />

            <PageHero
                titleTop="Elegant Wedding & Guest"
                titleBottom="Taxi Transfers in Italy"
                description="Ensuring your guests arrive in style and on time. Professional transportation for the most important day of your life."
                backgroundImage="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
                buttonText="Plan Wedding Transport"
                breadcrumbs={[
                    { name: "Services", item: "/services" },
                    { name: "Wedding Transfers", item: "/services/wedding-transfers" }
                ]}
            />

            <ServiceIntro
                title="Seamless Logistics for Your Italian Wedding"
                content="Planning a wedding in Italy—whether in a Tuscan villa, a Lake Como palazzo, or on the Amalfi Coast—requires precise coordination. Our wedding transfer service takes the stress out of guest logistics. We handle everything from airport arrivals for out-of-town guests to coordinated shuttles between the ceremony and reception venues, allowing you to focus on your celebration."
            />

            <ServiceFeatures
                title="Wedding Service Excellence"
                features={features}
                bg="bg-[#F8F9FA]"
            />

            <div className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div>
                            <h2 className="text-3xl font-bold text-navy mb-6">Tailored for Your Special Day</h2>
                            <p className="text-gray-600 mb-4 uppercase tracking-widest text-sm font-bold">Venue Coordination</p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Many Italian wedding venues are located in remote areas or historic centers with restricted access (ZTL). Our licensed taxis and professional drivers have the permits to drive your guests directly to the venue entrance, saving them from long walks in formal attire.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                                        <span className="text-gold font-bold">01</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy">Airport Meet & Greet</h4>
                                        <p className="text-sm text-gray-500">Welcoming your family and friends as soon as they land in Italy.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                                        <span className="text-gold font-bold">02</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy">Shuttle Rotations</h4>
                                        <p className="text-sm text-gray-500">Continuous transport options for guests throughout the evening.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <img 
                                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" 
                                alt="Professional Italian Wedding Guest Transportation" 
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <HowItWorks />
            
            <FAQSection 
                faqs={weddingFaqs}
                title="Wedding Service FAQs"
                badge="Event Planning"
            />

            <CTA />
            <Footer />
        </main>
    );
}

