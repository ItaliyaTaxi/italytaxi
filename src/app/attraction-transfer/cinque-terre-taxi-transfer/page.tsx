import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceIntro, { ServiceFeatures } from '@/components/ServiceDetails';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cinque Terre Private Taxi | Seamless Coastal Transfers",
  description: "Arrive at the stunning villages of Cinque Terre in comfort. Private taxi transfers to Riomaggiore, Manarola, Corniglia, Vernazza, and Monterosso from Florence, Pisa, or Genoa.",
  alternates: {
    canonical: "/attraction-transfer/cinque-terre-taxi-transfer",
  }
};

export default function CinqueTerrePage() {
  const features = [
    "Transfers to all five iconic villages",
    "Expert drivers familiar with coastal roads",
    "Fixed transparent pricing",
    "Modern, air-conditioned fleet",
    "Luggage assistance included",
    "Flexible stops for panoramic photos"
  ];

  const cinqueTerreFaqs = [
    {
      q: "Can taxis drive into the Cinque Terre villages?",
      a: "The villages are mostly pedestrian zones. However, our drivers have special permits to drop you off at the closest possible access points, often much closer than public parking or train stations."
    },
    {
      q: "Which airport is best for Cinque Terre?",
      a: "Pisa (PSA) is the closest, followed by Genoa (GOA) and Florence (FLR). We provide private transfers from all three directly to your accommodation."
    },
    {
      q: "How many people can fit in one taxi?",
      a: "We have sedans for up to 3 passengers and minivans for up to 8 passengers, all with ample luggage space."
    },
    {
      q: "Can we do a day trip to Cinque Terre from Florence?",
      a: "Yes! We offer a popular full-day service where a driver takes you there, stays available, and brings you back to Florence in the evening."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="Private Taxi to the"
        titleBottom="Stunning Cinque Terre"
        description="The easiest way to reach Italy's most colorful coastline. Door-to-door service to Riomaggiore, Manarola, and beyond."
        backgroundImage="https://aprilmunday.wordpress.com/wp-content/uploads/2018/09/bodiam_castle_through_the_trees.jpg?w=500"
        buttonText="Book Cinque Terre Transfer"
      />

      <ServiceIntro
        title="Experience the Italian Riviera in Comfort"
        content="The Cinque Terre—a string of five centuries-old seaside villages on the rugged Italian Riviera coastline—is notoriously difficult to reach by car. Narrow roads and limited parking make public transport the common choice, but the crowded trains can be stressful. Our private taxi service offers a premium alternative, providing a scenic and comfortable journey directly to the gates of your chosen village."
      />

      <ServiceFeatures
        title="Why Choose Our Coastal Service"
        features={features}
        bg="bg-[#F8F9FA]"
      />

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">Beyond the Train Tracks</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              While the train connects the villages, it doesn't always connect you with your luggage or your specific hotel tucked away on a hillside. Our professional drivers handle the heavy lifting and the logistics, ensuring you arrive relaxed and ready to explore.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We also provide inter-village transfers for those who wish to avoid the steep hikes or frequent train delays, making your stay in the Cinque Terre as smooth as possible.
            </p>
          </div>
        </div>
      </div>

      <HowItWorks />

      <FAQSection 
        faqs={cinqueTerreFaqs}
        title="Cinque Terre Service FAQs"
        badge="Coastal Transfer"
      />

      <CTA />
      <Footer />
    </main>
  );
}
