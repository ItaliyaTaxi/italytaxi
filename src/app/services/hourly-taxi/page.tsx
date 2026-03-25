import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceIntro, { ServiceFeatures } from '@/components/ServiceDetails';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "By the Hour Taxi Service | Italian Taxi Service",
  description: "Personal taxi service by the hour in Italy. Enjoy flexibility with a professional driver at your disposal for sightseeing, business, or events.",
  alternates: {
    canonical: "/services/hourly-taxi",
  }
};

export default function HourlytaxiPage() {
  const features = [
    "Complete schedule flexibility",
    "Unlimited stops within hours",
    "Dedicated private taxi",
    "Sightseeing or shopping",
    "English-speaking professionalism",
    "Fixed hourly rates"
  ];

  const hourlyFaqs = [
    {
      q: "Is there a minimum number of hours for booking?",
      a: "Yes, our hourly service usually starts at a minimum of 3 or 4 hours, depending on the destination and vehicle type."
    },
    {
      q: "Can I change my destination during the service?",
      a: "Absolutely! The beauty of hourly service is total flexibility. You can direct your driver to any location within the booked time frame."
    },
    {
      q: "Are the hours consecutive?",
      a: "Yes, once the service starts, the hours are counted consecutively until the end of the booking duration."
    },
    {
      q: "What happens if I go over the booked time?",
      a: "If you need more time, you can usually extend by paying the additional hourly rate, subject to the driver's availability."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="Private taxi"
        titleBottom="Service by the Hour"
        description="Flexible, taxi transport tailored specifically to your schedule and personal requirements."
        backgroundImage="/images/Taxis.webp"
        buttonText="Book Hourly Service"
      />

      <ServiceIntro
        title="Your Schedule, Your Way"
        content="Hire a private driver for sightseeing, shopping, business meetings, or special events. Enjoy full flexibility with hourly booking and a dedicated vehicle at your disposal."
      />

      <ServiceFeatures
        title="Flexible Mobility Solutions"
        features={features}
        bg="bg-[#F8F9FA]"
      />


      <HowItWorks />

      <FAQSection 
        faqs={hourlyFaqs}
        title="Hourly Service FAQs"
        badge="Booking Flexibility"
      />

      <CTA />

      <Footer />
    </main>
  );
}
