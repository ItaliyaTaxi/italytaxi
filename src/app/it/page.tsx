import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HomeSEOContentIt from '@/components/HomeSEOContentIt';
import { Metadata } from 'next';
import { enHreflangFor } from '@/lib/i18n/page-registry';

const SITE = 'https://www.italytaxiservice.com';

const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs'));
const Services = dynamic(() => import('@/components/Services'));
const PopularDestinations = dynamic(() => import('@/components/PopularDestinations'));
const HowItWorks = dynamic(() => import('@/components/HowItWorks'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const Coverage = dynamic(() => import('@/components/Coverage'));
const FAQSection = dynamic(() => import('@/components/FAQSection'));
const CTA = dynamic(() => import('@/components/CTA'));
const Footer = dynamic(() => import('@/components/Footer'));

export const metadata: Metadata = {
  title: "Taxi Privato in Italia | Transfer Aeroportuali e Noleggio con Conducente",
  description: "Prenota il miglior servizio di taxi privato in Italia. Transfer aeroportuali, trasferimenti città-città e tour privati. Prezzi fissi, autisti NCC professionisti, conferma immediata.",
  alternates: {
    canonical: "/it",
    languages: enHreflangFor('/it'),
  },
  openGraph: {
    title: "Taxi Privato in Italia | Transfer Aeroportuali e Noleggio con Conducente",
    description: "Prenota il miglior servizio di taxi privato in Italia. Transfer aeroportuali, trasferimenti città-città e tour privati con autisti professionisti.",
    url: `${SITE}/it`,
    locale: 'it_IT',
    images: [{ url: '/images/hero.webp', width: 1200, height: 630, alt: 'Italy Taxi Service — Trasferimenti Privati in Italia' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Taxi Privato in Italia | Italy Taxi Service",
    description: "Prenota il miglior servizio di taxi privato in Italia. Prezzi fissi, autisti professionisti, disponibilità 24/7.",
    images: ['/images/hero.webp'],
  },
};

function SectionFallback({ minHeight = 'min-h-[400px]' }: { minHeight?: string }) {
  return <div className={`${minHeight} bg-[#0F1C2E]`} aria-hidden="true" />;
}

export default function HomeIt() {
  const homeFaqsIt = [
    {
      q: "Perché scegliere il vostro transfer privato invece di un normale taxi italiano?",
      a: "Il nostro servizio offre prezzi fissi e trasparenti senza costi nascosti, autisti professionisti multilingue e prenotazioni garantite. A differenza dei taxi standard, offriamo un servizio premium di accoglienza in aeroporto (\"Meet & Greet\") e veicoli di lusso pensati per il massimo comfort."
    },
    {
      q: "Offrite transfer aeroportuali da qualsiasi città in Italia?",
      a: "Sì, offriamo copertura su tutto il territorio nazionale. Che tu abbia bisogno di un transfer da Roma, Milano, Venezia o da un piccolo borgo in Toscana, la nostra rete di autisti professionisti è disponibile 24 ore su 24, 7 giorni su 7."
    },
    {
      q: "Che tipo di veicoli sono disponibili nella vostra flotta?",
      a: "Offriamo una gamma di veicoli di lusso tra cui berline Mercedes Classe E/S per un massimo di 3 passeggeri, minivan Classe V per un massimo di 8 passeggeri e pullman Sprinter più grandi per i viaggi di gruppo."
    },
    {
      q: "I vostri autisti sono autorizzati ad accedere alle zone a traffico limitato (ZTL)?",
      a: "Sì, tutti i nostri autisti hanno la licenza professionale N.C.C., che consente loro di accedere ai centri storici con limitazione del traffico (ZTL) e alle corsie preferenziali, garantendo un servizio porta a porta diretto ed efficiente."
    },
    {
      q: "Con quanto anticipo devo prenotare il mio transfer in Italia?",
      a: "Consigliamo di prenotare con almeno 24 ore di anticipo per garantire la disponibilità. Per richieste dell'ultimo minuto, puoi contattare il nostro team di supporto WhatsApp attivo 24/7 per assistenza immediata."
    }
  ];

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE}/it#webpage`,
    "url": `${SITE}/it`,
    "inLanguage": "it-IT",
    "name": "Taxi Privato in Italia | Transfer Aeroportuali e Noleggio con Conducente",
    "description": "Prenota il miglior servizio di taxi privato in Italia. Transfer aeroportuali, trasferimenti città-città e tour privati.",
    "isPartOf": { "@id": `${SITE}/#website` },
    "about": { "@id": `${SITE}/#organization` },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE}/it` }],
    },
  };

  return (
    <main className="min-h-screen text-navy-rich font-inter">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      <Navbar />
      <Hero />

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
          <Coverage />
        </Suspense>
      </div>

      {/* Static server-rendered SEO content — always in initial HTML for crawlers */}
      <HomeSEOContentIt />

      <div className="cv-section">
        <Suspense fallback={<SectionFallback />}>
          <FAQSection faqs={homeFaqsIt} title="Domande Frequenti sui Viaggi e Transfer in Italia" />
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
