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
  title: "Wedding Guest Transfers Italy | Luxury Event Taxi for Tuscany, Amalfi & Lake Como",
  description: "Professional wedding guest transportation across Italy. Elegant cars, suited chauffeurs, multi-vehicle coordination, and airport transfers for destination weddings in Tuscany, Amalfi Coast, and Lake Como.",
  alternates: {
    canonical: "/services/wedding-transfers",
  }
};

const faqs = [
  {
    q: "Do you provide luxury wedding cars in Italy?",
    a: "Yes. Our wedding fleet includes the Mercedes-Benz E-Class and S-Class for the couple and VIP guests, and the V-Class minivan for bridal parties. All vehicles are fully cleaned and presented to the highest standard on your wedding day."
  },
  {
    q: "Can you coordinate transfers for large groups of wedding guests?",
    a: "Absolutely — multi-vehicle coordination for weddings of any scale is our specialty. We manage simultaneous airport pickups for arriving guests, shuttle rotations between the ceremony and reception venue, and late-night returns to hotels, all managed by a single logistics coordinator."
  },
  {
    q: "How far in advance should I book wedding transfers?",
    a: "For destination weddings in peak season (May–September), we strongly recommend booking 4–6 months in advance. This ensures vehicle availability and gives our team sufficient time to plan the full logistics schedule for your event."
  },
  {
    q: "Can you handle ZTL restricted zones for venue access?",
    a: "Yes. Many Italian wedding venues are inside historic city centres with traffic restriction (ZTL) zones. Our licensed drivers hold the appropriate permits and are experienced in accessing these areas to deposit guests as close to the venue entrance as possible."
  },
  {
    q: "Do wedding chauffeurs dress formally?",
    a: "Yes. Our wedding chauffeurs wear a dark suit and tie as standard for all wedding bookings. For specific uniform requests — such as matching a particular colour scheme — please contact us and we will accommodate where possible."
  },
  {
    q: "Do you provide transfers for the welcome dinner and post-wedding events?",
    a: "Yes. Many clients book our service across multiple days — covering a welcome dinner the evening before, the wedding day itself (ceremony, cocktail hour, and reception), and a post-wedding brunch or day-after sightseeing. Multi-day packages are available at preferential rates."
  },
  {
    q: "Can you meet international guests at the airport for a destination wedding?",
    a: "Yes — coordinating airport arrivals for international wedding guests is one of our core wedding services. We provide name-sign meet-and-greet at the arrivals hall and transfer guests directly to their accommodation or the wedding venue."
  }
];

const pricing: PricingTier[] = [
  { label: "Couple's Transfer", price: "From €120", note: "Luxury Mercedes sedan · 1 stop" },
  { label: "Guest Shuttle", price: "From €95/run", note: "V-Class minivan · Up to 7 guests", popular: true },
  { label: "Full-Day Coordination", price: "Custom", note: "Multi-vehicle · All-day logistics" },
];

export default function WeddingTransfersPage() {
  const url = "https://www.italytaxiservice.com/services/wedding-transfers";

  return (
    <main className="min-h-screen font-inter">
      <ServiceSchema name="Private Wedding Transfers Italy" description="Elegant and professional private taxi transfers for wedding guests across Italy's most beautiful venues." url={url} />
      <Navbar />

      <PageHero
        titleTop="Elegant Wedding & Event"
        titleBottom="Transfers in Italy"
        description="Professional guest transportation for destination weddings in Tuscany, Lake Como, Amalfi Coast, and beyond. Suited chauffeurs, luxury vehicles, and seamless event logistics."
        backgroundImage="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
        buttonText="Plan Wedding Transport"
        breadcrumbs={[
          { name: "Services", item: "/services" },
          { name: "Wedding Transfers", item: "/services/wedding-transfers" }
        ]}
      />

      <ServicePageContent
        introTitle="Flawless Guest Logistics for Your Italian Destination Wedding"
        introParagraphs={[
          "A destination wedding in Italy is a dream — but coordinating ground transportation for dozens of guests arriving from multiple countries, staying in different locations, and travelling between venues is a logistical challenge that can quickly become overwhelming.",
          "Italy Taxi Service provides a dedicated wedding transportation service that takes this entire responsibility off your shoulders. From the first guest's airport arrival to the last late-night return after the reception, our team manages every vehicle, every route, and every minute — so you can focus entirely on your celebration.",
          "We have coordinated wedding transportation for intimate ceremonies in Tuscan farmhouses, grand lakeside events at Lake Como palazzos, clifftop celebrations on the Amalfi Coast, and historic villa weddings across Rome, Siena, and Positano."
        ]}
        detailTitle="Complete Wedding Transportation Management"
        detailParagraphs={[
          "Our involvement typically begins weeks before your wedding day. We work with your wedding planner or coordinator to review the full guest list, arrival schedules, accommodation locations, and venue logistics. From this information, we design a comprehensive transport plan with vehicle allocation, driver briefings, and contingency arrangements.",
          "On the day itself, a dedicated wedding logistics coordinator is reachable via WhatsApp throughout the event. They monitor all vehicles in real-time and communicate proactively if any adjustments are needed — such as a guest running late or a venue requiring a routing change.",
          "For international guests arriving at Italian airports, we provide our signature meet-and-greet service inside the arrivals hall. Guests are collected individually or in coordinated groups and transferred directly to their accommodation — a welcoming first impression that sets the tone for your entire event.",
          "Wedding venues with restricted vehicle access present no challenge for our team. Our drivers are licensed and experienced with Italy's ZTL (Zona Traffico Limitato) permits, and know the best access routes for venues in Florence's historic centre, Rome's Trastevere, and the narrow coastal roads of the Amalfi villages.",
          "Post-reception shuttle rotations are managed with military precision. We schedule regular departure waves from the venue to accommodation clusters, ensuring all guests are safely returned without long waits — even at 2 or 3 in the morning."
        ]}
        benefits={[
          "Dedicated wedding logistics coordinator for your event",
          "Multi-vehicle management for simultaneous guest transfers",
          "Luxury Mercedes fleet — sedans, V-Class, and minivans",
          "Formally suited chauffeurs for all wedding bookings",
          "ZTL-permitted access to historic and restricted venues",
          "International guest airport meet-and-greet included",
          "Day-before and day-after events covered",
          "Real-time vehicle tracking throughout the wedding day",
          "Shuttle rotation management for reception departures",
          "Multi-day packages for 2–5 day wedding celebrations",
          "Child seats for families with infants or toddlers",
          "Coordination with your wedding planner or coordinator"
        ]}
        pricingTitle="Wedding Transfer Pricing Overview"
        pricing={pricing}
        relatedLinks={[
          { label: "Airport Transfers for Guests", href: "/services/airport-transfers" },
          { label: "Business & VIP Taxi", href: "/services/business-taxi" },
          { label: "Hourly Chauffeur Service", href: "/services/hourly-taxi" },
          { label: "Tuscany Wedding Transfers", href: "/city/florence" },
          { label: "Amalfi Coast Wedding Transfers", href: "/city/amalfi-coast" },
          { label: "Lake Como Wedding Transfers", href: "/city/como" },
        ]}
      />

      <HowItWorks />

      <FAQSection faqs={faqs} title="Wedding Transport FAQs" badge="Event Planning" />

      <Footer />
    </main>
  );
}
