import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Services from '@/components/Services';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Private Taxi Services Italy | All Transfer Solutions",
  description: "Comprehensive taxi services across Italy. From airport transfers and city-to-city transfers to hourly chauffeur and wedding transportation.",
  alternates: {
    canonical: "/services",
  }
};

export default function ServicesPage() {
  const hubFaqs = [
    {
      q: "What types of taxi services do you offer in Italy?",
      a: "We offer airport transfers, city-to-city private travel, hourly chauffeur services, wedding transportation, and customizable private tours across all major Italian destinations."
    },
    {
      q: "How can I get an instant quote for my transfer?",
      a: "You can use our online booking form for an instant quote or contact us via WhatsApp for a personalized price based on your specific requirements."
    },
    {
      q: "Are your taxi services available 24/7?",
      a: "Yes, our services are available 24 hours a day, 7 days a week. We recommend booking at least 24 hours in advance to guarantee availability."
    },
    {
      q: "Do you provide luxury vehicles for business and events?",
      a: "Our fleet consists entirely of premium, late-model Mercedes-Benz sedans and minivans, ensuring a high-quality experience for both business and leisure travel."
    },
    {
      q: "Do you cover transfers between all Italian cities?",
      a: "Yes, we provide long-distance point-to-point transfers between any two cities in Italy, offering a more comfortable and door-to-door alternative to trains."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      <PageHero
        titleTop="Private & Reliable"
        titleBottom="Professional Services"
        description="From airport pickups to luxury city tours, we provide the highest standard of taxi services across Italy."
        backgroundImage="/images/hero.png"
        breadcrumbs={[{ name: "Services", item: "/services" }]}
      />
      
      <div className="py-20">
        <Services />
      </div>

      <FAQSection faqs={hubFaqs} title="Our Services FAQ" />

      <Footer />
    </main>
  );
}


