import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HomeSEOContent from '@/components/HomeSEOContent';
import { Metadata } from 'next';
import { itHreflangFor } from '@/lib/i18n/page-registry';

const SITE = 'https://www.italytaxiservice.com';

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
const TrustpilotWidget = dynamic(() => import('@/components/TrustpilotWidget'));
const Coverage = dynamic(() => import('@/components/Coverage'));
const PopularRoutes = dynamic(() => import('@/components/PopularRoutes'));
const KnowledgeHubSection = dynamic(() => import('@/components/KnowledgeHubSection'));
const FAQSection = dynamic(() => import('@/components/FAQSection'));
const CTA = dynamic(() => import('@/components/CTA'));
const Footer = dynamic(() => import('@/components/Footer'));

export const metadata: Metadata = {
  title: "Italy Taxi Service | Private Transfers & Airport Taxis",
  description: "Private taxis and airport transfers across Italy. Fixed, all-inclusive quote before you travel, NCC-licensed drivers and meet & greet in arrivals.",
  alternates: {
    canonical: "/",
    languages: itHreflangFor('/'),
  },
  openGraph: {
    title: "Italy Taxi Service | Private Transfers & Airport Taxis",
    description: "Private taxis and airport transfers across Italy. Fixed, all-inclusive quote before you travel, NCC-licensed drivers and meet & greet in arrivals.",
    url: "https://www.italytaxiservice.com",
    images: [{ url: '/images/hero.webp', width: 1200, height: 630, alt: 'Italy Taxi Service' }],
  },
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
      a: "Our service offers fixed, transparent pricing with no hidden fees, professional multi-lingual drivers, and pre-booked reliable pickups with flight tracking. Unlike standard taxis, we provide a premium 'Meet & Greet' service and luxury vehicles suited for comfort."
    },
    {
      q: "Do you provide airport transfers from any city in Italy?",
      a: "Yes, we offer nationwide coverage across Italy. Whether you need a transfer from Rome, Milan, Venice, or a remote village in Tuscany, our network of professional drivers is available 24/7."
    },
    {
      q: "What types of vehicles are available in your fleet?",
      a: "We offer a range of luxury vehicles including Mercedes E-Class/S-Class sedans for up to 3 passengers, V-Class minivans for up to 7 passengers, and, in some areas, larger Sprinter vehicles for group travel."
    },
    {
      q: "Are your drivers licensed to enter restricted traffic zones (ZTL)?",
      a: "Often, but it depends on the exact address. We check ZTL access when you book; where a car can't enter, the driver stops at the nearest legal point and helps with your luggage."
    },
    {
      q: "How far in advance should I book my Italian transfer?",
      a: "We recommend booking at least 24 hours in advance to guarantee availability. For last-minute requests, you can contact our 24/7 WhatsApp support team for immediate assistance."
    },
    {
      q: "Is a private transfer the same as a taxi in Italy?",
      a: "Not quite. Italian taxis are licensed by each city, wait at ranks or are called by phone or app, and usually run on the meter or a city's fixed airport fare. A private transfer uses an NCC (private hire with driver) vehicle booked in advance: you receive a fixed, all-inclusive quote before you travel and the driver meets you with a name sign."
    },
    {
      q: "How do I get a price for my transfer?",
      a: "Send your pickup point, destination, date and time, flight number if you're flying in, and the number of passengers and bags. We usually reply within 2–3 hours with a fixed, all-inclusive quote. Once you accept, you receive a written confirmation, and your driver's phone number follows within 24 hours before the transfer."
    },
    {
      q: "How can I pay?",
      a: "You can pay by card, through a secure online payment link, or in cash to the driver on the day of your transfer."
    }
  ];

  // Homepage-specific structured data. This used to live sitewide in JsonLd.tsx
  // (rendered on every page, not just this one) — moved here so it only
  // describes this actual page. See src/components/JsonLd.tsx for the
  // language-neutral Organization/LocalBusiness/WebSite entities that still
  // render sitewide via the root layout.
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE}/#webpage`,
    "url": SITE,
    "name": "Italy Taxi Service | Private Transfers and Airport Taxis",
    "description": "Book a premium private taxi service in Italy. We provide airport transfers, city tours, and point-to-point transportation.",
    "isPartOf": { "@id": `${SITE}/#website` },
    "about": { "@id": `${SITE}/#organization` },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": SITE }],
    },
  };
  // Note: no separate FAQPage schema here — <FAQSection> below (includeSchema
  // defaults to true) already emits one generated from this same homeFaqs
  // array, so adding another would recreate the exact duplicate-schema bug
  // this refactor is fixing.

  return (
    <main className="min-h-screen text-navy-rich font-inter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      {/* Above-fold: loaded eagerly, critical for FCP + LCP */}
      <Navbar />
      <Hero />

      {/* Below-fold: each wrapped in Suspense so the page doesn't block on them */}
      <div className="cv-section">
        <Suspense fallback={<SectionFallback minHeight="min-h-screen" />}>
          <WhyChooseUs />
        </Suspense>
      </div>

      <div className="cv-section">
        <Suspense fallback={<SectionFallback />}>
          <Services />
        </Suspense>
      </div>

      <div className="cv-section">
        <Suspense fallback={<SectionFallback />}>
          <PopularDestinations />
        </Suspense>
      </div>

      <div className="cv-section">
        <Suspense fallback={<SectionFallback />}>
          <PopularRoutes />
        </Suspense>
      </div>

      <div className="cv-section">
        <Suspense fallback={<SectionFallback />}>
          <HowItWorks />
        </Suspense>
      </div>

      <div className="cv-section">
        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>
      </div>

      <div className="cv-section py-12 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <Suspense fallback={<SectionFallback />}>
            <TrustpilotWidget />
          </Suspense>
        </div>
      </div>

      <div className="cv-section">
        <Suspense fallback={<SectionFallback />}>
          <KnowledgeHubSection />
        </Suspense>
      </div>

      <div className="cv-section">
        <Suspense fallback={<SectionFallback />}>
          <Coverage />
        </Suspense>
      </div>

      {/* Static server-rendered SEO content — always in initial HTML for crawlers */}
      <HomeSEOContent />

      <div className="cv-section">
        <Suspense fallback={<SectionFallback />}>
          <FAQSection faqs={homeFaqs} title="Italy Travel & Transfer FAQ" />
        </Suspense>
      </div>

      <div className="cv-section">
        <Suspense fallback={<SectionFallback minHeight="min-h-[300px]" />}>
          <CTA />
        </Suspense>
      </div>

      <Suspense fallback={<SectionFallback minHeight="min-h-[400px]" />}>
        <Footer />
      </Suspense>
    </main>
  );
}


