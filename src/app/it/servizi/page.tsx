import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Services from '@/components/Services';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import { enHreflangFor } from '@/lib/i18n/page-registry';

export const metadata: Metadata = {
  title: "Servizi di Taxi Privato in Italia | Tutte le Soluzioni di Trasferimento",
  description: "Servizi taxi completi in tutta Italia. Da transfer aeroportuali e trasferimenti città-città a noleggio a ore e trasporto per matrimoni.",
  alternates: {
    canonical: "/it/servizi",
    languages: enHreflangFor('/it/servizi'),
  },
};

export default function ServicesPageIt() {
  const hubFaqs = [
    {
      q: "Che tipo di servizi taxi offrite in Italia?",
      a: "Offriamo transfer aeroportuali, trasferimenti privati città-città, servizi di noleggio a ore, trasporto per matrimoni e tour privati personalizzabili in tutte le principali destinazioni italiane."
    },
    {
      q: "Come posso ottenere un preventivo immediato per il mio transfer?",
      a: "Puoi usare il nostro modulo di prenotazione online per un preventivo istantaneo o contattarci su WhatsApp per un prezzo personalizzato in base alle tue esigenze specifiche."
    },
    {
      q: "I vostri servizi taxi sono disponibili 24/7?",
      a: "Sì, i nostri servizi sono disponibili 24 ore su 24, 7 giorni su 7. Consigliamo di prenotare con almeno 24 ore di anticipo per garantire la disponibilità."
    },
    {
      q: "Fornite veicoli di lusso per eventi aziendali?",
      a: "La nostra flotta è composta esclusivamente da berline e minivan Mercedes-Benz premium di ultima generazione, per garantire un'esperienza di alta qualità sia per i viaggi di lavoro che per il tempo libero."
    },
    {
      q: "Coprite i trasferimenti tra tutte le città italiane?",
      a: "Sì, offriamo trasferimenti privati punto a punto tra due qualsiasi città in Italia, un'alternativa più comoda e porta a porta rispetto al treno."
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      <PageHero
        titleTop="Servizi Privati"
        titleBottom="Professionali e Affidabili"
        description="Dal prelievo in aeroporto ai tour di lusso in città, offriamo il massimo standard di servizi taxi in tutta Italia."
        backgroundImage="/images/hero.png"
        breadcrumbs={[{ name: "Servizi", item: "/it/servizi" }]}
      />

      <div className="py-20">
        <Services />
      </div>

      <FAQSection faqs={hubFaqs} title="FAQ sui Nostri Servizi" />

      <Footer />
    </main>
  );
}
