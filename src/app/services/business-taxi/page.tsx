import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import ServiceSchema from '@/components/ServiceSchema';
import ServicePageContent from '@/components/ServicePageContent';
import type { PricingTier } from '@/components/ServicePageContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Executive Business Taxi Italy | Corporate Chauffeur Service",
  description: "Professional corporate taxi and chauffeur service across Italy. Priority booking, executive vehicles, discreet drivers, and invoicing for business accounts.",
  alternates: {
    canonical: "/services/business-taxi",
  }
};

const faqs = [
  {
    q: "Do you provide invoices for corporate accounts?",
    a: "Yes. We provide full VAT invoices for every journey, making expense reporting straightforward. Corporate accounts can be set up for monthly consolidated billing — contact us directly for business account enquiries."
  },
  {
    q: "Can you guarantee punctuality for client meetings?",
    a: "Punctuality is our highest priority for business travel. We build in buffer time based on Italian traffic data, and drivers are dispatched early to ensure you arrive with margin to spare. We have a 99.2% on-time rate for corporate bookings."
  },
  {
    q: "Is Wi-Fi available in the vehicles?",
    a: "Yes, Wi-Fi is available on request in our executive vehicles. Please specify this requirement when booking so we can assign an appropriately equipped vehicle. Water, phone chargers, and newspapers are also available."
  },
  {
    q: "Can you arrange transfers for multiple executives visiting simultaneously?",
    a: "Absolutely. We handle multi-vehicle coordination for conferences, roadshows, and corporate events of any scale. Assign us your delegate list and arrival schedule and our operations team will manage the entire ground logistics."
  },
  {
    q: "Are vehicles discreet for VIP and sensitive business travel?",
    a: "Our drivers are trained in professional discretion. Vehicles are unmarked and conversations are entirely private. We regularly service government officials, C-suite executives, and high-profile personalities across Italy."
  },
  {
    q: "How do I set up a corporate business account?",
    a: "Contact us via email at info@italytaxiservice.com with your company name, registration details, and expected monthly usage. We'll configure your account within 24 hours and assign a dedicated account manager."
  },
  {
    q: "Do you offer roadshow and multi-city executive itinerary planning?",
    a: "Yes. Our business travel division specialises in multi-city itineraries including Rome, Milan, Florence, and Bologna. Provide your full schedule and we will ensure consistent, premium transportation across every leg of your trip."
  }
];

const pricing: PricingTier[] = [
  { label: "Executive Sedan", price: "From €65/hr", note: "Business-class · Up to 3 passengers" },
  { label: "Executive Van", price: "From €95/hr", note: "Group executive · Up to 7 passengers", popular: true },
  { label: "Airport Transfer", price: "From €75", note: "Fixed fare · Milan, Rome & all airports" },
];

export default function BusinessCorporatePage() {
  const url = "https://www.italytaxiservice.com/services/business-taxi";

  return (
    <main className="min-h-screen font-inter">
      <ServiceSchema name="Executive Business Taxi Italy" description="Professional executive taxi and corporate chauffeur service across Italy for business meetings, conferences, and VIP travel." url={url} />
      <Navbar />

      <PageHero
        titleTop="Executive Corporate"
        titleBottom="Taxi Services in Italy"
        description="On-time, discreet, and professional business transportation across Italy. Executive vehicles with Wi-Fi, invoicing, and dedicated corporate account management."
        backgroundImage="/images/taxis-1.jpg"
        buttonText="Open Corporate Account"
        breadcrumbs={[
          { name: "Services", item: "/services" },
          { name: "Business Taxi", item: "/services/business-taxi" }
        ]}
      />

      <ServicePageContent
        introTitle="Italy's Premier Executive Chauffeur Service"
        introParagraphs={[
          "Business travel demands a higher standard of reliability, discretion, and professionalism. Italy Taxi Service provides dedicated corporate transportation solutions that meet the needs of executives, client-facing professionals, conference delegates, and VIP visitors across Italy.",
          "From a single airport pickup for a managing director to a multi-city roadshow covering Rome, Milan, and Bologna over three days, our business travel division handles every detail — so your team can focus entirely on the work at hand.",
          "Our executive fleet consists of late-model Mercedes-Benz sedans and Vito minivans with leather interiors, climate control, and Wi-Fi. Drivers are uniformed, discreet, and trained to the highest standards of professional conduct."
        ]}
        detailTitle="What Our Corporate Taxi Service Includes"
        detailParagraphs={[
          "Every business booking comes with a dedicated point-of-contact who manages your reservation from confirmation to completion. You'll receive your driver's direct mobile number the evening before, so communication is always seamless — even for last-minute changes.",
          "Our drivers continuously monitor traffic conditions, construction zones, and event-related congestion across Italian cities. If a faster route emerges, they adapt. This proactive approach is why our corporate clients maintain a long-term relationship with us year after year.",
          "We support all major Italian business hubs: Rome (EUR district, Fiumicino), Milan (CityLife, Porta Nuova, Fiera), Florence (Fortezza da Basso, Palazzo dei Congressi), Bologna (BolognaFiere), and international airports across the country.",
          "For conference and event logistics, our team can coordinate simultaneous pickups from multiple arrival points. Provide us with your delegate schedule and we will manage the entire operation, delivering real-time updates to your event coordinator.",
          "Corporate accounts receive consolidated monthly invoices with full transaction details and VAT breakdown, simplifying your finance team's expense reporting and eliminating the need for individual receipts."
        ]}
        benefits={[
          "Priority booking — always available, even on short notice",
          "Executive Mercedes-Benz fleet with leather interiors",
          "Wi-Fi, phone chargers, and bottled water provided",
          "Professional uniformed drivers with NDA available",
          "Monthly invoicing with full VAT breakdown",
          "Multi-vehicle coordination for conferences and events",
          "Flight and train tracking for arrival pickups",
          "24/7 corporate account support via phone and WhatsApp",
          "Punctuality guarantee — 99.2% on-time rate",
          "Roadshow and multi-city itinerary planning",
          "Fixed or hourly pricing — transparent from the start",
          "Dedicated account manager for regular clients"
        ]}
        pricingTitle="Executive Taxi Pricing Overview"
        pricing={pricing}
        relatedLinks={[
          { label: "Airport Transfers", href: "/services/airport-transfers" },
          { label: "Hourly Chauffeur", href: "/services/hourly-taxi" },
          { label: "City-to-City Transfers", href: "/services/city-to-city" },
          { label: "Milan Taxi Service", href: "/city/milan" },
          { label: "Rome Business District", href: "/city/rome" },
        ]}
      />

      <HowItWorks />

      <FAQSection faqs={faqs} title="Corporate Travel FAQs" badge="Business Class Service" />

      <Footer />
    </main>
  );
}
