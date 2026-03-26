import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Drivers | Italy Private Taxi | Professional Chauffeurs",
  description: "Meet our fleet of professional, English-speaking drivers in Italy. Licensed, experienced, and dedicated to providing world-class private transportation.",
  alternates: {
    canonical: "/drivers",
  }
};

export default function DriversPage() {
  const driverFaqs = [
    {
      q: "What qualifications do your drivers have?",
      a: "Every driver in our network is fully licensed under the Italian N.C.C. (Noleggio Con Conducente) regulations. They are background-checked, professionally insured, and have years of experience on Italian roads."
    },
    {
      q: "Do all your drivers speak English?",
      a: "Yes, we guarantee English-speaking drivers for all our international clients to ensure clear communication and a seamless travel experience."
    },
    {
      q: "Can I request a specific driver if I've traveled with them before?",
      a: "While we cannot always guarantee a specific driver due to scheduling and location, we do our best to honor requests from returning clients."
    },
    {
      q: "Are the drivers knowledgeable about local Italian attractions?",
      a: "Absolutely. Our drivers are local experts who can provide helpful recommendations for restaurants, hidden gems, and historical insights during your journey."
    },
    {
      q: "Is tipping the driver mandatory in Italy?",
      a: "Tipping is not mandatory, but it is appreciated if you are satisfied with the service. A typical tip is around 5-10% of the total fare."
    }
  ];

  return (
    <main className="min-h-screen text-navy-rich font-inter">
      <Navbar />

      <div className="container mx-auto px-6 pt-10">
        <Breadcrumb 
          items={[
            { name: "Our Drivers", item: "/drivers" }
          ]} 
        />
      </div>

      <PageHero
        titleTop="Our Licensed"
        titleBottom="Professional Drivers"
        description="Every driver in our fleet is fully licensed, background-checked, and committed to your safety, comfort, and local insight across Italy."
        backgroundImage="/images/hero.png"
      />

      <div className="container mx-auto py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-navy mb-8">Excellence Behind the Wheel</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
                Our drivers are more than just chauffeurs; they are local ambassadors who take pride in providing seamless travel experiences. From airport meet-and-greets to long-distance city transfers, you can rely on their professionalism and deep local knowledge.
            </p>
        </div>
      </div>

      <FAQSection faqs={driverFaqs} title="Driver Standards FAQ" />

      <Footer />
    </main>
  );
}

