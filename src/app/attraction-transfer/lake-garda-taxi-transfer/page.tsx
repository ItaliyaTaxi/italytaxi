import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceIntro, { ServiceFeatures } from '@/components/ServiceDetails';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Lake Garda Private Taxi | Premium Transfers to Sirmione & Riva",
  description: "Book a professional private transfer to Lake Garda. Reliable taxi services to Sirmione, Malcesine, Riva del Garda, and all lake resorts from Milan, Verona, or Venice airports.",
  alternates: {
    canonical: "/attraction-transfer/lake-garda-taxi-transfer",
  }
};

export default function LakeGardaPage() {
  const features = [
    "Transfers from Milan, Verona, and Venice airports",
    "English-speaking local drivers",
    "Fixed prices with no hidden toll fees",
    "Door-to-door service to your lakefront hotel",
    "Spacious vehicles for sports equipment (bikes, skis)",
    "Free meet & greet at arrivals"
  ];

  const gardaFaqs = [
    {
      q: "Which is the closest airport to Lake Garda?",
      a: "Verona Villafranca (VRN) is the closest, about 20-40 minutes away. However, we also provide frequent transfers from Milan Malpensa, Milan Linate, and Venice Marco Polo."
    },
    {
      q: "Do you provide transfers to all towns around the lake?",
      a: "Yes, we serve all locations including Sirmione, Peschiera del Garda, Lazise, Bardolino, Malcesine, Limone, and Riva del Garda."
    },
    {
      q: "Can we book a taxi for a group with lots of luggage?",
      a: "Certainly. Our Mercedes V-Class vans are perfect for groups of up to 8 people with significant luggage or sports gear."
    },
    {
      q: "Is the service available at night?",
      a: "Yes, we operate 24/7. For late-night or early-morning pickups, we recommend booking at least 24 hours in advance."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHero
        titleTop="Private Taxi Transfers to"
        titleBottom="The Beautiful Lake Garda"
        description="Relax as you travel to Italy's largest lake. Comfortable, reliable, and professional transport from any major airport or city."
        backgroundImage="https://cdn.mos.cms.futurecdn.net/9KRcyeyTjZ25RfMUmNg8fk.png"
        buttonText="Book Lake Garda Taxi"
      />

      <ServiceIntro
        title="Your Gateway to Italian Alpine Beauty"
        content="Lake Garda, with its crystal-clear waters and dramatic mountain backdrops, is one of Italy's most beloved destinations. Whether you are heading to the historic peninsula of Sirmione, the windsurfing mecca of Riva del Garda, or the charming streets of Malcesine, our private taxi service ensures your holiday starts the moment you land. Skip the crowded airport buses and expensive last-minute taxis; book a fixed-rate transfer with a professional driver today."
      />

      <ServiceFeatures
        title="Lake Garda Transfer Excellence"
        features={features}
        bg="bg-[#F8F9FA]"
      />

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">Seamless Travel Around the Lake</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Navigating the lakeside roads can be challenging, especially during the peak summer months. Our drivers are local experts who know the best routes to avoid traffic and get you to your destination efficiently.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We specialize in providing transfers for families, couples, and outdoor enthusiasts. If you are bringing bicycles or sailing equipment, please let us know in advance so we can provide the appropriate vehicle.
            </p>
          </div>
        </div>
      </div>

      <HowItWorks />

      <FAQSection
        faqs={gardaFaqs}
        title="Lake Garda Service FAQs"
        badge="Lakeside Travel"
      />

      <CTA />
      <Footer />
    </main>
  );
}
