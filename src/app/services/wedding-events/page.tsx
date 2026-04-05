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
    title: "Wedding & Event Taxi | Private Transfers",
    description: "Elegant transportation for weddings and special events in Italy. High-quality taxi service to ensure your guests arrive in style and comfort.",
    alternates: {
        canonical: "/services/wedding-events",
    }
};

export default function WeddingEventsPage() {
    const url = "https://www.italytaxiservice.com/services/wedding-events";
    const features = [
        "Elegant wedding vehicles",
        "Decorated cars upon request",
        "Professional taxi service",
        "Coordination for guests",
        "Premium late-model fleet",
        "Punctual and refined"
    ];

    const eventFaqs = [
        {
            q: "Can we book transportation for our entire wedding party?",
            a: "Yes, we can organize a fleet of luxury sedans and vans to transport the bride, groom, family, and guests seamlessly between venues."
        },
        {
            q: "Do you offer decorations for wedding cars?",
            a: "We can provide simple, elegant ribbon decorations upon request. For more elaborate floral arrangements, we can coordinate with your florist."
        },
        {
            q: "What kind of events do you cover besides weddings?",
            a: "We provide luxury transfers for gala dinners, fashion shows, corporate events, private parties, and anniversary celebrations across Italy."
        },
        {
            q: "Are the drivers familiar with remote wedding villas?",
            a: "Yes, our drivers are highly experienced and use advanced navigation to reach even the most exclusive and remote villas in Tuscany and the Amalfi Coast."
        },
        {
            q: "Is there a standby service available during the event?",
            a: "Absolutely. We offer 'at disposal' hourly services where the driver remains on-site to assist guests with departures throughout the event."
        }
    ];

    return (
        <main className="min-h-screen">
            <ServiceSchema 
                name="Private Wedding & Event Transfers Italy" 
                description="Luxury private taxi and taxi services for weddings and high-end events across Italy." 
                url={url} 
            />
            <Navbar />

            <PageHero
                titleTop="Luxury Event &"
                titleBottom="Wedding Transportation"
                description="Make your special day more elegant with premium transportation solutions across Italy."
                backgroundImage="https://aprilmunday.wordpress.com/wp-content/uploads/2018/09/bodiam_castle_through_the_trees.jpg?w=500"
                buttonText="Plan Your Event Travel"
                breadcrumbs={[
                    { name: "Services", item: "/services" },
                    { name: "Wedding & Events", item: "/services/wedding-events" }
                ]}
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

            <FAQSection faqs={eventFaqs} title="Event Transport FAQs" />

            <CTA />

            <Footer />
        </main>
    );
}

