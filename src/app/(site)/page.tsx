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
const Coverage = dynamic(() => import('@/components/Coverage'));
const PopularRoutes = dynamic(() => import('@/components/PopularRoutes'));
const KnowledgeHubSection = dynamic(() => import('@/components/KnowledgeHubSection'));
const FAQSection = dynamic(() => import('@/components/FAQSection'));
const CTA = dynamic(() => import('@/components/CTA'));
const Footer = dynamic(() => import('@/components/Footer'));

export const metadata: Metadata = {
  title: "Italy Taxi Service | Private Transfers & Airport Taxis",
  description: "Book Italy's top-rated private taxi service. Airport transfers, city-to-city rides & private tours. Fixed prices, professional NCC drivers, instant confirmation.",
  alternates: {
    canonical: "/",
    languages: itHreflangFor('/'),
  },
  openGraph: {
    title: "Italy Taxi Service | Private Transfers & Airport Taxis",
    description: "Book Italy's top-rated private taxi service. Airport transfers, city-to-city rides & private tours. Fixed prices, professional NCC drivers, instant confirmation.",
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


