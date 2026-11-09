import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import ServiceSchema from '@/components/ServiceSchema';
import ServicePageContent from '@/components/ServicePageContent';
import type { PricingTier } from '@/components/ServicePageContent';
import { Metadata } from 'next';
import { enHreflangFor } from '@/lib/i18n/page-registry';

export const metadata: Metadata = {
  title: "Taxi Aziendale Executive in Italia",
  description: "Taxi aziendale e noleggio con conducente in tutta Italia: veicoli executive, autisti discreti, preventivo fisso per ogni viaggio e fattura per il singolo servizio ove applicabile.",
  alternates: {
    canonical: "/it/servizi/taxi-aziendale",
    languages: enHreflangFor('/it/servizi/taxi-aziendale'),
  },
};

const faqs = [
  {
    q: "Fornite fatture per i trasferimenti aziendali?",
    a: "Sì. Ogni viaggio viene preventivato e fatturato singolarmente, con una fattura per il singolo trasferimento ove applicabile: di solito è quanto serve per una nota spese. Non c'è nessun conto da aprire né nulla da configurare in anticipo: inviaci i dettagli del viaggio e ricevi un prezzo fisso e tutto incluso, comprensivo di pedaggi, parcheggi e carburante."
  },
  {
    q: "Potete garantire la puntualità per gli appuntamenti con i clienti?",
    a: "La puntualità è la nostra massima priorità per i viaggi di lavoro. Includiamo un margine di sicurezza basato sui dati del traffico italiano e gli autisti vengono inviati in anticipo per garantire un arrivo con margine di tempo."
  },
  {
    q: "È disponibile il Wi-Fi nei veicoli?",
    a: "Sì, il Wi-Fi è disponibile su richiesta nei nostri veicoli executive. Specifica questa esigenza al momento della prenotazione così potremo assegnare un veicolo adeguatamente attrezzato. Sono inoltre disponibili acqua, caricabatterie e quotidiani."
  },
  {
    q: "Potete organizzare trasferimenti per più dirigenti in arrivo contemporaneamente?",
    a: "Assolutamente. Gestiamo il coordinamento multi-veicolo per conferenze, roadshow ed eventi aziendali di qualsiasi dimensione. Fornisci l'elenco dei delegati e l'orario di arrivo e il nostro team operativo gestirà l'intera logistica a terra."
  },
  {
    q: "I veicoli sono discreti per viaggi di lavoro VIP e riservati?",
    a: "I nostri autisti sono formati alla discrezione professionale. I veicoli non sono contrassegnati e le conversazioni sono completamente private. Serviamo regolarmente funzionari governativi, dirigenti C-suite e personalità di alto profilo in tutta Italia."
  },
  {
    q: "Offrite conti aziendali con fatturazione mensile?",
    a: "No. Non gestiamo conti aziendali né fatture mensili consolidate. Ogni trasferimento viene preventivato a un prezzo fisso e tutto incluso e fatturato singolarmente ove applicabile, che di solito è quanto serve per una nota spese. Le aziende possono inviare l'intero programma di viaggio in un'unica richiesta e ricevere il preventivo di ogni tratta."
  },
  {
    q: "Offrite pianificazione di roadshow ed itinerari executive multi-città?",
    a: "Sì. La nostra divisione business travel è specializzata in itinerari multi-città inclusi Roma, Milano, Firenze e Bologna. Fornisci il tuo programma completo e ci assicureremo di un trasporto premium e coerente in ogni tappa del tuo viaggio."
  }
];

const pricing: PricingTier[] = [
  { label: "Berlina Executive", price: "Da €65/h", note: "Business class · Fino a 3 passeggeri" },
  { label: "Van Executive", price: "Da €95/h", note: "Gruppo executive · Fino a 7 passeggeri", popular: true },
  { label: "Transfer Aeroportuale", price: "Da €75", note: "Tariffa fissa · Milano, Roma e tutti gli aeroporti" },
];

export default function BusinessCorporatePageIt() {
  const url = "https://www.italytaxiservice.com/it/servizi/taxi-aziendale";

  return (
    <main className="min-h-screen font-inter">
      <ServiceSchema name="Taxi Aziendale Executive in Italia" description="Taxi executive e servizio taxi aziendale professionale in tutta Italia per riunioni di lavoro, conferenze e viaggi VIP." url={url} />
      <Navbar />

      <PageHero
        titleTop="Servizi Taxi Aziendali"
        titleBottom="Executive in Italia"
        description="Trasporto aziendale puntuale, discreto e professionale in tutta Italia. Veicoli executive con Wi-Fi su richiesta, preventivo fisso per ogni viaggio e fattura per il singolo servizio ove applicabile."
        backgroundImage="/images/taxis-1.jpg"
        buttonText="Richiedi un preventivo aziendale"
        breadcrumbs={[
          { name: "Servizi", item: "/it/servizi" },
          { name: "Taxi Aziendale", item: "/it/servizi/taxi-aziendale" }
        ]}
      />

      <ServicePageContent
        introTitle="Il Servizio Taxi Executive più Prestigioso d'Italia"
        introParagraphs={[
          "I viaggi di lavoro richiedono uno standard più elevato di affidabilità, discrezione e professionalità. Italy Taxi Service offre soluzioni di trasporto aziendale dedicate che soddisfano le esigenze di dirigenti, professionisti a contatto con i clienti, delegati di conferenze e visitatori VIP in tutta Italia.",
          "Da un singolo prelievo in aeroporto per un amministratore delegato a un roadshow multi-città che copre Roma, Milano e Bologna in tre giorni, la nostra divisione business travel gestisce ogni dettaglio — così il tuo team può concentrarsi interamente sul lavoro.",
          "La nostra flotta executive è composta da berline Mercedes-Benz di ultima generazione e minivan Vito con interni in pelle, climatizzazione e Wi-Fi. Gli autisti sono in uniforme, discreti e formati ai più alti standard di condotta professionale."
        ]}
        detailTitle="Cosa Include il Nostro Servizio Taxi Aziendale"
        detailParagraphs={[
          "Ogni prenotazione aziendale include un punto di contatto dedicato che gestisce la tua prenotazione dalla conferma al completamento. Riceverai il numero di cellulare diretto del tuo autista la sera prima, così la comunicazione è sempre fluida — anche per modifiche dell'ultimo minuto.",
          "I nostri autisti monitorano costantemente le condizioni del traffico, le zone di cantiere e la congestione legata agli eventi nelle città italiane. Se emerge un percorso più veloce, si adattano. Questo approccio proattivo è il motivo per cui i nostri clienti aziendali mantengono una relazione a lungo termine con noi anno dopo anno.",
          "Supportiamo tutti i principali distretti d'affari italiani: Roma (quartiere EUR, Fiumicino), Milano (CityLife, Porta Nuova, Fiera), Firenze (Fortezza da Basso, Palazzo dei Congressi), Bologna (BolognaFiere) e gli aeroporti internazionali in tutto il Paese.",
          "Per la logistica di conferenze ed eventi, il nostro team può coordinare prelievi simultanei da più punti di arrivo. Forniscici il programma dei tuoi delegati e gestiremo l'intera operazione, fornendo aggiornamenti in tempo reale al tuo coordinatore evento.",
          "La fatturazione è volutamente semplice. Ogni viaggio viene preventivato, prenotato e fatturato singolarmente, con una fattura per il singolo trasferimento ove applicabile: di solito è quanto serve per una nota spese. Non c'è nessun conto da aprire: le aziende possono inviare l'intero programma di viaggio in un'unica richiesta e ricevere il preventivo di ogni tratta a un prezzo fisso e tutto incluso."
        ]}
        benefits={[
          "Veicoli non contrassegnati e massima riservatezza",
          "Flotta executive Mercedes-Benz con interni in pelle",
          "Wi-Fi, caricabatterie e acqua in bottiglia forniti",
          "Autisti professionisti in uniforme, con NDA disponibile",
          "Fattura per il singolo servizio ove applicabile",
          "Coordinamento multi-veicolo per conferenze ed eventi",
          "Monitoraggio dei voli per i prelievi all'arrivo",
          "Assistenza 24/7",
          "Pickup pianificati con margine e monitoraggio del volo",
          "Pianificazione di roadshow e itinerari multi-città",
          "Prezzi fissi o orari — trasparenti fin dall'inizio",
          "Un'unica richiesta per l'intero programma di viaggio"
        ]}
        pricingTitle="Panoramica dei Prezzi Taxi Executive"
        pricingNote="Ogni viaggio viene preventivato come tariffa fissa e tutto compreso — pedaggi, carburante e parcheggio inclusi, nessun tassametro e nessun costo aggiunto alla fine. Eventuali supplementi notturni, festivi o per attesa aggiuntiva previsti dalle nostre condizioni sono indicati nel preventivo prima della prenotazione."
        pricingFootnote="Richiedi un preventivo esatto tramite il nostro modulo."
        ctaButtonText="Richiedi un preventivo"
        pricing={pricing}
        relatedLinks={[
          { label: "Transfer Aeroportuali", href: "/it/servizi/trasferimenti-aeroportuali" },
          { label: "Taxi a Ore", href: "/it/servizi/taxi-a-ore" },
          { label: "Trasferimenti Città-Città", href: "/it/servizi/trasferimenti-citta-citta" },
          { label: "Taxi a Milano", href: "/city/milan" },
          { label: "Distretto Aziendale di Roma", href: "/city/rome" },
          { label: "Transfer Ecomondo 2026 Rimini", href: "/it/blog/transfer-ecomondo-2026" },
          { label: "Transfer Artissima 2026 Torino", href: "/it/blog/transfer-artissima-2026" },
          { label: "Transfer Artigiano in Fiera 2026", href: "/it/blog/transfer-artigiano-in-fiera-2026" },
        ]}
      />

      <HowItWorks />

      <FAQSection faqs={faqs} title="FAQ sui Viaggi Aziendali" badge="Servizio Business Class" />

      <Footer />
    </main>
  );
}
