import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceIntro, { ServiceFeatures } from '@/components/ServiceDetails';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Costa Smeralda Taxi | Luxury Emerald Coast Transfers",
  description: "Experience the luxury of Costa Smeralda with our premium taxi transfers. Professional service to Porto Cervo, Baia Sardinia, and Porto Rotondo from Olbia Airport.",
  alternates: {
    canonical: "/beach-transfer/costa-smeralda-taxi",
  }
};

export default function CostaSmeraldaBeachPage() {
  const features = [
    "Luxury Mercedes-Benz fleet",
    "Punctual Olbia Airport pickups",
    "Professional multi-lingual chauffeurs",
    "Direct service to hotels and private villas",
    "Fixed premium rates, no hidden fees",
    "Assistance with boat and club reservations"
  ];

  const smeraldaFaqs = [
    {
      q: "How far is Porto Cervo from Olbia Airport?",
      a: "The drive typically takes about 35-45 minutes along the beautiful coastal roads of Northeast Sardinia."
    },
    {
      q: "Do you offer services for nightlife and clubs?",
      a: "Yes, we provide safe and reliable transfers to and from famous venues like Billionaire and Phi Beach, allowing you to enjoy your evening without worry."
    },
    {
      q: "Can I book a taxi for a full day of beach hopping?",
      a: "Absolutely. We offer hourly-based services where a driver stays at your disposal to take you to various beaches like Spiaggia del Principe and Romazzino."
    },
    {
      q: "Are your vehicles suitable for large families?",
      a: "Yes, we have luxury minivans (Mercedes V-Class) that can comfortably accommodate up to 7-8 passengers with significant luggage."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="Premium Private Taxi to the"
        titleBottom="Exclusive Costa Smeralda"
        description="Luxury travel on the Emerald Coast. Professional, discreet, and reliable transport to Sardinia's most prestigious destination."
        backgroundImage="https://a.storyblok.com/f/306333/1920x1080/6d1b795a3d/costasmeralda.jpg/m/1920x1080/filters:format(webp):quality(70)"
        buttonText="Book Costa Smeralda Taxi"
      />

      <ServiceIntro
        title="Luxury Mobility in Paradise"
        content="Costa Smeralda is the jewel of the Mediterranean, known for its turquoise waters, granite rocks, and world-class hospitality. Whether you are arriving for a luxury yacht vacation in Porto Cervo or a relaxing stay in a private villa near Porto Rotondo, our premium taxi service provides the level of comfort and professionalism that this destination demands. Skip the airport queues and travel in a climate-controlled Mercedes-Benz with a local expert at the wheel."
      />

      <ServiceFeatures
        title="Emerald Coast Excellence"
        features={features}
        bg="bg-[#F8F9FA]"
      />

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">Seamless Transfers for Every Occasion</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Costa Smeralda is more than just beaches; it's a lifestyle. We provide tailored transportation for every aspect of your stay, from high-end airport transfers to reliable transport for dinners at Michelin-starred restaurants or nights out at exclusive clubs.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our drivers are not just transporters; they are local ambassadors who can provide recommendations and ensure you navigate the coast with ease. We prioritize punctuality, discretion, and your absolute comfort.
            </p>
          </div>
        </div>
      </div>

      <HowItWorks />

      <FAQSection
        faqs={smeraldaFaqs}
        title="Costa Smeralda Service FAQs"
        badge="Luxury Travel"
      />

      <CTA />
      <Footer />
    </main>
  );
}
