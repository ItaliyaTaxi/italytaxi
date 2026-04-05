import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceIntro, { ServiceFeatures } from '@/components/ServiceDetails';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Taxi for San Gimignano Visits",
  description: "Arrive at the medieval Manhattan of Tuscany in style. Private taxi transfers to San Gimignano from Florence, Siena, or Pisa. Expert local drivers.",
  alternates: {
    canonical: "/attraction-transfer/san-gimignano-taxi-transfer",
  }
};

export default function SanGimignanoPage() {
  const features = [
    "Door-to-door service to the historic center",
    "Expert drivers for winding Tuscan roads",
    "Fixed transparent pricing for all routes",
    "Luxury sedans and spacious minivans",
    "Assistance with luggage and local tips",
    "Flexible stops for vineyard photos"
  ];

  const gimignanoFaqs = [
    {
      q: "Can the taxi drive inside the walls of San Gimignano?",
      a: "Yes, our licensed taxis have special permits to enter the ZTL (Restricted Traffic Zone) and drop you off directly at your hotel or the main plazas."
    },
    {
      q: "What is the best airport for San Gimignano?",
      a: "Florence (FLR) and Pisa (PSA) are the closest, both approximately 1 hour and 15 minutes away by private taxi."
    },
    {
      q: "Do you offer wine tours from San Gimignano?",
      a: "Yes, we can arrange private drivers for half-day or full-day tours of the nearby Vernaccia vineyards and Chianti wineries."
    },
    {
      q: "Can we visit San Gimignano on a day trip from Florence?",
      a: "Absolutely. This is one of our most popular services. We take you there, wait while you explore, and bring you back in the evening."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="Private Taxi Transfers to the"
        titleBottom="Medieval San Gimignano"
        description="Experience the towers of Tuscany's most beautiful hilltop town. Professional door-to-door service for a seamless journey."
        backgroundImage="https://aprilmunday.wordpress.com/wp-content/uploads/2018/09/bodiam_castle_through_the_trees.jpg?w=500"
        buttonText="Book San Gimignano Taxi"
      />

      <ServiceIntro
        title="Your Comfortable Journey to the Town of Fine Towers"
        content="San Gimignano is a medieval jewel, famous for its skyline of ancient towers and its world-class white wine, Vernaccia. Perched on a hill in the heart of the Tuscan countryside, reaching it by public transport can involve multiple changes and long waits. Our private taxi service offers a premium alternative, providing a scenic and comfortable ride directly to the town's historic gates or your villa's doorstep."
      />

      <ServiceFeatures
        title="San Gimignano Transfer Excellence"
        features={features}
        bg="bg-[#F8F9FA]"
      />

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">The Beauty of the Tuscan Landscape</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              The drive to San Gimignano is just as beautiful as the destination itself. Our professional drivers take the most scenic routes through cypress-lined roads and rolling vineyards, allowing you to experience the true essence of Tuscany before you even arrive.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              If you are traveling with a group or have significant luggage, our fleet of Mercedes-Benz minivans provides the perfect combination of space and luxury. We ensure your journey is smooth, safe, and tailored to your schedule.
            </p>
          </div>
        </div>
      </div>

      <HowItWorks />

      <FAQSection 
        faqs={gimignanoFaqs}
        title="San Gimignano Service FAQs"
        badge="Hilltop Transfer"
      />

      <CTA />
      <Footer />
    </main>
  );
}
