import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceIntro, { ServiceFeatures } from '@/components/ServiceDetails';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Cruise Port Taxi Transfers | Italian Taxi Service",
    description: "Reliable private taxi transfers from all major Italian cruise ports including Civitavecchia, Venice, Naples, and Livorno. Seamless pier-to-airport or city transfers.",
    alternates: {
        canonical: "https://www.italytaxiservice.com/services/cruise-port-transfers",
    }
};

export default function CruisePortTransfersPage() {
    const features = [
        "Direct pier pickup",
        "Wait-time included",
        "Assistance with luggage",
        "Fixed porto-to-airport rates",
        "English-speaking drivers",
        "Real-time ship tracking"
    ];

    return (
        <main className="min-h-screen">
            <Navbar />
            <PageHero
                titleTop="Private Cruise Port"
                titleBottom="Transfers in Italy"
                description="Hassle-free transportation from the pier to your hotel or airport. Experience the most reliable port transfers in Italy."
                backgroundImage="https://images.unsplash.com/photo-1548543604-a87c9909afce?q=80&w=2070&auto=format&fit=crop"
                buttonText="Book Port Transfer"
            />

            <ServiceIntro
                title="Seamless Port Connections"
                content="Don't stress about finding a taxi at a busy cruise port. Our professional drivers will be waiting for you right at the pier with a name sign, ready to take you directly to your destination in comfort and style."
            />

            <ServiceFeatures
                title="Premier Port Service"
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
