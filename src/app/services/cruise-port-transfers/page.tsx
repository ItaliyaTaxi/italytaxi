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
    title: "Cruise Port Transfers Italy | Private Pier to Airport Taxi",
    description: "Reliable private taxi transfers from all major Italian cruise ports including Civitavecchia, Venice, Naples, and Livorno. Seamless pier-to-airport or city transfers.",
    alternates: {
        canonical: "/services/cruise-port-transfers",
    }
};

export default function CruisePortTransfersPage() {
    const url = "https://www.italytaxiservice.com/services/cruise-port-transfers";
    const features = [
        "Direct pier pickup",
        "Wait-time included",
        "Assistance with luggage",
        "Fixed porto-to-airport rates",
        "English-speaking drivers",
        "Real-time ship tracking"
    ];

    const faqs = [
        {
            q: "Which Italian cruise ports do you serve?",
            a: "We provide private transfers from all major Italian ports including Civitavecchia (Rome), Venice (Mestre/Marghera), Naples, Livorno (Florence), and Savona."
        },
        {
            q: "Will the driver meet me at the ship's pier?",
            a: "Yes, our drivers have the necessary permits to pick you up right at the cruise ship's pier. They will be holding a sign with your name."
        },
        {
            q: "Do you offer airport transfers from the cruise port?",
            a: "Absolutely. We specialize in fast, fixed-rate transfers from the port directly to Rome Fiumicino, Venice Marco Polo, and other major airports."
        },
        {
            q: "How much luggage can I bring on a port transfer?",
            a: "We recommend choosing a Minivan or SUV for cruise travelers as they typically have more luggage. Let us know the number of bags when booking."
        },
        {
            q: "Can I book a day tour during my port layover?",
            a: "Yes! We offer shore excursions and private tours while your ship is in port, ensuring you get back in plenty of time for departure."
        }
    ];

    return (
        <main className="min-h-screen">
            <ServiceSchema 
                name="Private Cruise Port Transfers Italy" 
                description="Fast and reliable private taxi transfers from Italian cruise ship piers to airports and city centers." 
                url={url} 
            />
            <Navbar />

            <PageHero
                titleTop="Private Cruise Port"
                titleBottom="Transfers in Italy"
                description="Hassle-free transportation from the pier to your hotel or airport. Experience the most reliable port transfers in Italy."
                backgroundImage="/images/cruise-port-transfer.webp"
                buttonText="Book Port Transfer"
                breadcrumbs={[
                    { name: "Services", item: "/services" },
                    { name: "Cruise Port Transfers", item: "/services/cruise-port-transfers" }
                ]}
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
            <FAQSection faqs={faqs} title="Cruise Port Transfer FAQs" />
            <CTA />
            <Footer />
        </main>
    );
}

