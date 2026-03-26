import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import Breadcrumb from '@/components/Breadcrumb';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Italy Taxi Service | FAQ Hub",
  description: "Everything you need to know about our premium private transfers, booking process, and airport services in Italy.",
  alternates: {
    canonical: "/faq",
  }
};

export default function FaqPage() {
  const megaFaqs = [
    {
      q: "How do I book a private taxi transfer with you?",
      a: "You can book directly through our website's booking form, send an email, or message us on WhatsApp. Once we receive your request, we will send you a confirmation with all the details."
    },
    {
      q: "Is the price group-based or per person?",
      a: "All our prices are per vehicle, not per person. This means if you book a minivan for 7 people, the price remains the same whether there is 1 traveler or 7."
    },
    {
      q: "When and how do I pay for my transfer?",
      a: "Depending on the route, you can pay via credit card online or pay your driver directly in cash or by card at the end of the journey. We will specify the payment options during confirmation."
    },
    {
      q: "How will I find my driver at the airport or train station?",
      a: "For all airport and station pickups, your driver will be waiting in the arrivals area holding a sign with your name. For hotels, the driver will meet you in the lobby."
    },
    {
      q: "What is your cancellation policy?",
      a: "We offer free cancellation up to 24 hours before your scheduled pickup. Cancellations made less than 24 hours in advance may be subject to a fee."
    },
    {
      q: "Are child car seats available?",
      a: "Yes! We provide infant, toddler, and booster seats upon request. Please specify the age and weight of the children in your booking request so we can provide the correct seat."
    },
    {
      q: "Can I make changes to my booking after it is confirmed?",
      a: "Yes, you can modify your booking by contacting us via WhatsApp or email. We recommend doing so as early as possible to ensure we can accommodate your new schedule."
    },
    {
      q: "Are there any hidden costs like luggage fees or night surcharges?",
      a: "No. Our quotes are all-inclusive, covering fuel, tolls, parking, and luggage. Any night or holiday surcharges will be clearly stated in your initial quote."
    }
  ];

  return (
    <main className="min-h-screen text-navy-rich font-inter">
      <Navbar />

      <div className="container mx-auto px-6 pt-10">
        <Breadcrumb 
          items={[
            { name: "FAQ", item: "/faq" }
          ]} 
        />
      </div>

      <PageHero
        titleTop="Frequently Asked"
        titleBottom="Questions Hub"
        description="Everything you need to know about our premium private transfers, booking process, and airport transportation in Italy."
        backgroundImage="/images/hero.png"
      />
      
      <div className="py-20">
        <FAQSection faqs={megaFaqs} title="Comprehensive Support FAQ" />
      </div>

      <Footer />
    </main>
  );
}

