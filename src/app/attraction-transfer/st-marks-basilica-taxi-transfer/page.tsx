import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceIntro, { ServiceFeatures } from '@/components/ServiceDetails';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "St Marks Basilica Private Transfer | Venice City Access",
  description: "Book a professional private transfer to Venice. We provide land taxi services to Piazzale Roma or the Cruise Port, with optional water taxi coordination to St. Mark's Square.",
  alternates: {
    canonical: "/attraction-transfer/st-marks-basilica-taxi-transfer",
  }
};

export default function StMarksPage() {
  const features = [
    "Direct land transfers to Piazzale Roma",
    "Meet & Greet at Venice Marco Polo Airport",
    "Punctual service from Treviso Airport",
    "Coordination with private Water Taxis",
    "Fixed rates with no hidden water-entry fees",
    "Spacious vehicles for cruise luggage"
  ];

  const veniceFaqs = [
    {
      q: "Can the taxi drive directly to St. Mark's Basilica?",
      a: "Venice is an island city with no cars. Our land taxis take you to Piazzale Roma (the last point accessible by car). From there, we can help you coordinate a private water taxi directly to your hotel or St. Mark's Square."
    },
    {
      q: "How far is Piazzale Roma from Venice Airport?",
      a: "The drive typically takes 20-25 minutes by private taxi."
    },
    {
      q: "Do you offer transfers from Venice Cruise Port?",
      a: "Yes, we provide land transfers from the Venice Cruise Terminal to any destination in Northern Italy, including Milan, Florence, and the Dolomites."
    },
    {
      q: "Can we book a transfer from Marco Polo Airport to Treviso?",
      a: "Yes, we provide inter-airport transfers and city-to-city services throughout the Veneto region."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="Private Taxi Transfers to"
        titleBottom="The Heart of Venice"
        description="Your gateway to the floating city. Professional land transfers to Piazzale Roma or the Venice Cruise Port with absolute comfort."
        backgroundImage="https://aprilmunday.wordpress.com/wp-content/uploads/2018/09/bodiam_castle_through_the_trees.jpg?w=500"
        buttonText="Book Venice Transfer"
      />

      <ServiceIntro
        title="Arrive Seamlessly in the World's Most Unique City"
        content="St. Mark's Basilica and the surrounding square are the breathtaking symbols of Venice. Navigating the logistics of reaching the island city can be complex. Our private land taxi service simplifies your arrival by providing a direct, comfortable link from Marco Polo Airport, Treviso Airport, or the cruise terminal to Piazzale Roma—the gateway to Venice's historic water-streets. Skip the crowded airport shuttles and start your Venetian adventure in style."
      />

      <ServiceFeatures
        title="Venetian Transfer Excellence"
        features={features}
        bg="bg-[#F8F9FA]"
      />

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">Land & Sea Coordination</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              While cars cannot enter Venice, our land taxi service is the essential first step of your journey. We monitor your flight or ship arrival in real-time, ensuring our driver is waiting for you the moment you land or disembark. 
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              If you require a continuation of your journey via private water taxi, please let us know in advance. We can coordinate the transfer at Piazzale Roma so you move seamlessly from our luxury sedan or van directly onto a boat, arriving at St. Mark's Square without lifting a finger.
            </p>
          </div>
        </div>
      </div>

      <HowItWorks />

      <FAQSection 
        faqs={veniceFaqs}
        title="Venice Service FAQs"
        badge="City Gateway"
      />

      <CTA />
      <Footer />
    </main>
  );
}
