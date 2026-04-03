import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceIntro, { ServiceFeatures } from '@/components/ServiceDetails';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Leaning Tower of Pisa Private Taxi | Premium Transfers",
  description: "Arrive at the Piazza dei Miracoli in comfort. Private taxi transfers to the Leaning Tower of Pisa from Florence, Livorno Port, or Pisa Airport.",
  alternates: {
    canonical: "/attraction-transfer/leaning-tower-of-pisa-taxi-transfer",
  }
};

export default function LeaningTowerPisaPage() {
  const features = [
    "Direct drop-off near the Piazza dei Miracoli",
    "Punctual transfers from Livorno Cruise Port",
    "Professional English-speaking drivers",
    "Fixed rates with no hidden fees",
    "Luxury sedans and spacious minivans",
    "Assistance with luggage and local tips"
  ];

  const pisaFaqs = [
    {
      q: "How far is the Leaning Tower from Pisa Airport?",
      a: "The Piazza dei Miracoli is a short 15-minute drive from Pisa International Airport (PSA)."
    },
    {
      q: "Do you offer transfers from Livorno Port for cruise passengers?",
      a: "Yes, we specialize in shore excursions. We can pick you up directly at the pier and ensure you return to your ship on time."
    },
    {
       q: "Can the taxi wait while we climb the tower?",
       a: "Yes, we offer flexible wait-and-return services. Our driver will wait at a designated spot while you explore the tower and the Cathedral."
    },
    {
      q: "Is it possible to visit Pisa on the way from Florence to Rome?",
      a: "Absolutely. We offer 'transfer tours' where you can stop in Pisa for a few hours during your journey between Florence and Rome."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="Private Taxi Transfers to the"
        titleBottom="Iconic Leaning Tower of Pisa"
        description="Visit Italy's most famous architectural wonder without the stress. Comfortable, reliable, and professional door-to-door service."
        backgroundImage="https://aprilmunday.wordpress.com/wp-content/uploads/2018/09/bodiam_castle_through_the_trees.jpg?w=500"
        buttonText="Book Pisa Transfer"
        breadcrumbs={[
          { name: "Attraction Transfers", item: "/attraction-transfer" },
            { name: "Leaning Tower", item: "/attraction-transfer/leaning-tower-of-pisa-taxi-transfer" }
        ]}
      />

      <ServiceIntro
        title="Experience the Wonders of the Piazza dei Miracoli"
        content="The Leaning Tower of Pisa is more than just a photo opportunity; it is a masterpiece of medieval engineering located in the stunning Piazza dei Miracoli. Whether you are arriving for a quick visit from a cruise ship in Livorno or spending a day exploring the city from Florence, our private taxi service provides the most efficient and comfortable way to reach the monument. Skip the crowded tourist buses and enjoy a premium travel experience."
      />

      <ServiceFeatures
        title="Pisa Transfer Excellence"
        features={features}
        bg="bg-[#F8F9FA]"
      />

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">Seamless Sightseeing in Tuscany</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Navigating Pisa's city center can be tricky for newcomers, especially with the strict ZTL (Restricted Traffic Zones) around the historic monuments. Our licensed taxis have authorized access, allowing us to drop you off and pick you up much closer than private cars or public buses.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              For cruise passengers, we guarantee a 'worry-free' return to your ship. Our drivers are well-acquainted with the port schedules and traffic patterns, ensuring you have plenty of time to enjoy the sites without stressing about the time.
            </p>
          </div>
        </div>
      </div>

      <HowItWorks />

      <FAQSection 
        faqs={pisaFaqs}
        title="Pisa Service FAQs"
        badge="Monument Access"
      />

      <CTA />
      <Footer />
    </main>
  );
}
