import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceIntro, { ServiceFeatures } from '@/components/ServiceDetails';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Uffizi Gallery Private Taxi | Florence Art Transfers",
  description: "Book a professional private taxi to the Uffizi Gallery. Direct access to Florence's historic center with professional English-speaking drivers.",
  alternates: {
    canonical: "/attraction-transfer/uffizi-gallery-taxi-transfer",
  }
};

export default function UffiziGalleryPage() {
  const features = [
    "Authorized access to Florence ZTL zones",
    "Direct drop-off near the Gallery entrance",
    "Professional English-speaking drivers",
    "Fixed rates with no city taxi surcharges",
    "Meet & Greet at Florence Amerigo Vespucci Airport",
    "Luxury Mercedes-Benz sedans and minivans"
  ];

  const uffiziFaqs = [
    {
      q: "Where is the best drop-off point for the Uffizi Gallery?",
      a: "The Gallery is in a pedestrian-only zone. We drop you off at the closest possible point, usually near Piazza della Signoria or the Lungomare, minimizing your walk."
    },
    {
      q: "Can we book a transfer from Florence Airport to the Uffizi?",
      a: "Yes, we provide direct airport transfers. It usually takes about 25-30 minutes."
    },
    {
      q: "Do you offer transfers from Livorno Port for cruise passengers?",
      a: "Absolutely. We specialize in day trips for cruise passengers. We can pick you up at the pier, take you to the Uffizi, and ensure you're back at the ship on time."
    },
    {
      q: "Are the vehicles air-conditioned?",
      a: "Yes, our entire fleet consists of modern, climate-controlled vehicles to ensure your comfort in the Tuscan summer."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="Private Taxi Transfers to the"
        titleBottom="Renowned Uffizi Gallery"
        description="Arrive at the heart of the Renaissance in comfort. Professional door-to-door service to one of the world's greatest art museums."
        backgroundImage="https://aprilmunday.wordpress.com/wp-content/uploads/2018/09/bodiam_castle_through_the_trees.jpg?w=500"
        buttonText="Book Uffizi Transfer"
      />

      <ServiceIntro
        title="Luxury Travel to the Cradle of the Renaissance"
        content="The Uffizi Gallery is a treasure trove of artistic masterpieces by Botticelli, Michelangelo, and Leonardo da Vinci. Located in the historic heart of Florence, navigating the city's restricted traffic zones (ZTL) and crowded streets can be a challenge. Our private taxi service offers authorized access to the city center, delivering you as close as possible to the Gallery entrance in a premium, air-conditioned vehicle."
      />

      <ServiceFeatures
        title="Florence Transfer Excellence"
        features={features}
        bg="bg-[#F8F9FA]"
      />

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">Seamless Sightseeing in Tuscany</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our professional drivers are experts in Florence's unique traffic patterns and local regulations. By choosing our private service, you avoid the confusion of local buses and the stress of driving in a foreign city with strict traffic cameras.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Whether you are arriving for a timed-entry museum tour or spending a full day exploring the Arno riverfront, we provide a punctual and reliable link to your destination. We offer a range of luxury vehicles to suit individuals, families, and larger groups.
            </p>
          </div>
        </div>
      </div>

      <HowItWorks />

      <FAQSection 
        faqs={uffiziFaqs}
        title="Uffizi Service FAQs"
        badge="Museum Access"
      />

      <CTA />
      <Footer />
    </main>
  );
}
