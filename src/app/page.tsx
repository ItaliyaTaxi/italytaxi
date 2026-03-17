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
const CTA = dynamic(() => import('@/components/CTA'));
const Footer = dynamic(() => import('@/components/Footer'));

export const metadata: Metadata = {
  title: "Private Taxi Transfers in Italy | Italian Taxi Service",
  description: "Experience the finest travel in Italy. Professional drivers and vehicle fleet for airport transfers and city tours. Book your taxi today!",
  alternates: {
    canonical: "https://www.italytaxiservice.com",
  }
};

// Minimal section placeholder shown while a code-split chunk loads.
// Height approximates the section so there is no layout shift.
function SectionFallback({ minHeight = 'min-h-[400px]' }: { minHeight?: string }) {
  return <div className={`${minHeight} bg-[#0F1C2E]`} aria-hidden="true" />;
}

export default function Home() {
  return (
    <main className="min-h-screen">
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

      <Suspense fallback={<SectionFallback minHeight="min-h-[300px]" />}>
        <CTA />
      </Suspense>

      <Suspense fallback={<SectionFallback minHeight="min-h-[400px]" />}>
        <Footer />
      </Suspense>
    </main>
  );
}
