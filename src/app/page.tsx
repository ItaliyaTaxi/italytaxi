import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { Metadata } from 'next';

// ── Below-fold components: code-split into separate JS chunks ──────────────────
// This reduces the initial JS bundle that must be parsed before the page becomes
// interactive.  Each component is still server-rendered (SSR) for SEO; only the
// client-side JavaScript is deferred/split.
// ──────────────────────────────────────────────────────────────────────────────
const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs'));
const Services = dynamic(() => import('@/components/Services'));
const PopularDestinations = dynamic(() => import('@/components/PopularDestinations'));
const HowItWorks = dynamic(() => import('@/components/HowItWorks'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const Coverage = dynamic(() => import('@/components/Coverage'));
const KnowledgeHubSection = dynamic(() => import('@/components/KnowledgeHubSection'));
const FAQSection = dynamic(() => import('@/components/FAQSection'));
const CTA = dynamic(() => import('@/components/CTA'));
const Footer = dynamic(() => import('@/components/Footer'));

export const metadata: Metadata = {
  title: "Private Taxi Transfers in Italy | Italian Taxi Service",
  description: "Experience the finest travel in Italy. Professional drivers and vehicle fleet for airport transfers and city tours. Book your taxi today!",
  alternates: {
    canonical: "/",
  }
};

// Minimal section placeholder shown while a code-split chunk loads.
// Height approximates the section so there is no layout shift.
function SectionFallback({ minHeight = 'min-h-[400px]' }: { minHeight?: string }) {
  return <div className={`${minHeight} bg-[#0F1C2E]`} aria-hidden="true" />;
}

export default function Home() {
  const homeFaqs = [
    {
      q: "Why choose your private transfer over a standard Italian taxi?",
      a: "Our service offers fixed, transparent pricing with no hidden fees, professional multi-lingual drivers, and pre-booked guaranteed pickups. Unlike standard taxis, we provide a premium 'Meet & Greet' service and luxury vehicles suited for comfort."
    },
    {
      q: "Do you provide airport transfers from any city in Italy?",
      a: "Yes, we offer nationwide coverage across Italy. Whether you need a transfer from Rome, Milan, Venice, or a remote village in Tuscany, our network of professional drivers is available 24/7."
    },
    {
      q: "What types of vehicles are available in your fleet?",
      a: "We offer a range of luxury vehicles including Mercedes E-Class/S-Class sedans for up to 3 passengers, V-Class minivans for up to 8 passengers, and larger Sprinter buses for group travel."
    },
    {
      q: "Are your drivers licensed to enter restricted traffic zones (ZTL)?",
      a: "Yes, all our drivers are professionally licensed (N.C.C.) which allows them to enter restricted city centers (ZTL) and bus/taxi lanes, ensuring a direct and efficient door-to-door service."
    },
    {
      q: "How far in advance should I book my Italian transfer?",
      a: "We recommend booking at least 24 hours in advance to guarantee availability. For last-minute requests, you can contact our 24/7 WhatsApp support team for immediate assistance."
    }
  ];

  return (
    <main className="min-h-screen text-navy-rich font-inter">
      {/* Above-fold: loaded eagerly, critical for FCP + LCP */}
      <Navbar />
      <Hero />

      {/* Below-fold: each wrapped in Suspense so the page doesn't block on them */}
      <Suspense fallback={<SectionFallback minHeight="min-h-screen" />}>
        <WhyChooseUs />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Services />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <PopularDestinations />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <HowItWorks />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <KnowledgeHubSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Coverage />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <FAQSection faqs={homeFaqs} title="Italy Travel & Transfer FAQ" />
      </Suspense>

      <Suspense fallback={<SectionFallback minHeight="min-h-[300px]" />}>
        <CTA />
      </Suspense>

      <Suspense fallback={<SectionFallback minHeight="min-h-[400px]" />}>
        <Footer />
      </Suspense>
    </main>
  );
}


