import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceIntro, { ServiceFeatures } from '@/components/ServiceDetails';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Taxi for Piazza Del Campo Visits",
  description: "Arrive at the heart of Siena in style. Private taxi transfers to Piazza del Campo from Florence, Pisa, or Rome. Expert drivers with ZTL permits.",
  alternates: {
    canonical: "/attraction-transfer/piazza-del-campo-taxi-transfer",
  }
};

export default function PiazzaDelCampoPage() {
  const features = [
    "Authorized access to Siena's ZTL (Restricted Zone)",
    "Direct drop-off at your hotel or the Piazza",
    "English-speaking professional taxi drivers",
    "Fixed competitive rates for all routes",
    "Luxury vehicles for a smooth Tuscan journey",
    "Baggage assistance and child seats available"
  ];

  const sienaFaqs = [
    {
      q: "Can the taxi drive directly to Piazza del Campo?",
      a: "While the Piazza itself is pedestrian-only, our licensed taxis can drive to the closest possible drop-off points within the restricted historic center, which are much closer than public parking areas."
    },
    {
      q: "How long is the transfer from Florence to Siena?",
      a: "A private transfer from Florence to Siena takes approximately 1 hour and 15 minutes, depending on traffic."
    },
    {
      q: "Do you offer day trips to Siena?",
      a: "Yes, we provide full-day services where our driver stays at your disposal so you can visit the Cathedral, the Piazza, and the surrounding Chianti region."
    },
    {
      q: "Is there a surcharge for luggage?",
      a: "No, our fixed rates include all luggage, provided it fits in the vehicle category you have booked."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="Private Taxi Transfers to"
        titleBottom="Siena's Piazza del Campo"
        description="Experience the medieval heart of Tuscany. Premium door-to-door service to one of Europe's greatest medieval squares."
        backgroundImage="https://aprilmunday.wordpress.com/wp-content/uploads/2018/09/bodiam_castle_through_the_trees.jpg?w=500"
        buttonText="Book Siena Transfer"
      />

      <ServiceIntro
        title="Arrive Effortlessly in the Heart of Siena"
        content="Piazza del Campo is the shell-shaped heart of Siena, famous for its beauty and the historic Palio horse race. As a UNESCO World Heritage site with strict traffic restrictions (ZTL), reaching the center can be a challenge for visitors. Our professional taxi service provides authorized access, ensuring you and your luggage arrive as close to your destination as possible in complete comfort."
      />

      <ServiceFeatures
        title="Siena Transfer Excellence"
        features={features}
        bg="bg-[#F8F9FA]"
      />

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">Your Gateway to Medieval Tuscany</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Siena's hilly terrain and cobblestone streets are beautiful but can be difficult to navigate with heavy bags. Our drivers are experts in the city's complex layout and will assist you with your luggage directly to your hotel doorstep.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Traveling from Pisa or Rome? Enjoy the scenic Tuscan countryside while we handle the driving. Our fleet of modern Mercedes sedans and vans ensures a quiet, relaxing journey so you can arrive ready to explore the Torre del Mangia.
            </p>
          </div>
        </div>
      </div>

      <HowItWorks />

      <FAQSection 
        faqs={sienaFaqs}
        title="Siena Service FAQs"
        badge="City Transfer"
      />

      <CTA />
      <Footer />
    </main>
  );
}
