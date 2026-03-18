import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceIntro, { ServiceFeatures } from '@/components/ServiceDetails';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Wedding & Event Transfers | Italian Taxi Service",
    description: "Elegant transportation for weddings and special events in Italy. High-quality taxi service to ensure your guests arrive in style and comfort.",
    alternates: {
        canonical: "/services/wedding-events",
    }
};

export default function WeddingEventsPage() {
    const features = [
        "Elegant wedding vehicles",
        "Decorated cars upon request",
        "Professional taxi service",
        "Coordination for guests",
        "taxi late-model fleet",
        "Punctual and refined"
    ];

    return (
        <main className="min-h-screen">
            <Navbar />
            <PageHero
                titleTop="taxi Event &"
                titleBottom="Wedding Transportation"
                description="Make your special day more elegant with taxi transportation solutions across Italy."
                backgroundImage="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop"
                buttonText="Plan Your Event Travel"
            />

            <ServiceIntro
                title="Arrive in Unforgettable Style"
                content="We provide stylish vehicles for weddings, parties, and private events. Arrive in comfort and elegance, ensuring your transportation is as memorable as the event itself."
            />

            <ServiceFeatures
                title="Refined Event Logistics"
                features={features}
                bg="bg-[#F8F9FA]"
            />


            <HowItWorks />

            <FAQSection />

            <CTA />

            <Footer />
        </main>
    );
}
