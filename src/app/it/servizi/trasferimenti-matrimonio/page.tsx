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
  title: "Taxi per Matrimoni in Italia | Trasferimento Privato",
  description: "Trasporto professionale per invitati a matrimoni in tutta Italia. Auto eleganti, autisti in abito, coordinamento multi-veicolo e transfer aeroportuali per matrimoni in Toscana, Costiera Amalfitana e Lago di Como.",
  alternates: {
    canonical: "/it/servizi/trasferimenti-matrimonio",
    languages: enHreflangFor('/it/servizi/trasferimenti-matrimonio'),
  },
};

const faqs = [
  {
    q: "Fornite auto di lusso per matrimoni in Italia?",
    a: "Sì. La nostra flotta per matrimoni include Mercedes-Benz Classe E e Classe S per gli sposi e gli ospiti VIP, e il minivan Classe V per il seguito nuziale. Tutti i veicoli sono completamente puliti e presentati al massimo standard nel giorno del tuo matrimonio."
  },
  {
    q: "Potete coordinare trasferimenti per grandi gruppi di invitati?",
    a: "Assolutamente — il coordinamento multi-veicolo per matrimoni di qualsiasi dimensione è la nostra specialità. Gestiamo prelievi simultanei in aeroporto per gli invitati in arrivo, rotazioni navetta tra la cerimonia e il luogo del ricevimento, e ritorni notturni agli hotel, tutto gestito da un unico coordinatore logistico."
  },
  {
    q: "Con quanto anticipo devo prenotare i trasferimenti per il matrimonio?",
    a: "Per i matrimoni in destinazione durante l'alta stagione (maggio–settembre), consigliamo vivamente di prenotare con 4–6 mesi di anticipo. Questo garantisce la disponibilità dei veicoli e dà al nostro team tempo sufficiente per pianificare l'intero programma logistico del tuo evento."
  },
  {
    q: "Potete gestire le zone a traffico limitato (ZTL) per l'accesso alla location?",
    a: "Sì. Molte location per matrimoni italiane si trovano all'interno di centri storici con zone a traffico limitato (ZTL). I nostri autisti con licenza possiedono i permessi appropriati e sono esperti nell'accedere a queste aree per depositare gli invitati il più vicino possibile all'ingresso della location."
  },
  {
    q: "Gli autisti per matrimoni si vestono in modo formale?",
    a: "Sì. I nostri autisti per matrimoni indossano abito scuro e cravatta come standard per tutte le prenotazioni matrimoniali. Per richieste specifiche di uniforme — come abbinare uno schema di colori particolare — contattaci e faremo il possibile per accontentarti."
  },
  {
    q: "Fornite trasferimenti per la cena di benvenuto e gli eventi post-matrimonio?",
    a: "Sì. Molti clienti prenotano il nostro servizio per più giorni — coprendo una cena di benvenuto la sera prima, il giorno del matrimonio stesso (cerimonia, cocktail e ricevimento) e un brunch post-matrimonio o una visita turistica il giorno dopo. Sono disponibili pacchetti multi-giorno a tariffe agevolate."
  },
  {
    q: "Potete accogliere invitati internazionali in aeroporto per un matrimonio in destinazione?",
    a: "Sì — coordinare gli arrivi in aeroporto per gli invitati internazionali al matrimonio è uno dei nostri servizi principali. Forniamo l'accoglienza con cartello personalizzato nella sala arrivi e trasferiamo gli invitati direttamente al loro alloggio o alla location del matrimonio."
  }
];

const pricing: PricingTier[] = [
  { label: "Transfer degli Sposi", price: "Da €120", note: "Berlina Mercedes di lusso · 1 tappa" },
  { label: "Navetta Invitati", price: "Da €95/corsa", note: "Minivan Classe V · Fino a 7 invitati", popular: true },
  { label: "Coordinamento Giornata Intera", price: "Su misura", note: "Multi-veicolo · Logistica per tutto il giorno" },
];

export default function WeddingTransfersPageIt() {
  const url = "https://www.italytaxiservice.com/it/servizi/trasferimenti-matrimonio";

  return (
    <main className="min-h-screen font-inter">
      <ServiceSchema name="Trasferimenti Privati per Matrimoni in Italia" description="Trasferimenti taxi privati eleganti e professionali per invitati a matrimoni nelle location più belle d'Italia." url={url} />
      <Navbar />

      <PageHero
        titleTop="Trasferimenti Eleganti per"
        titleBottom="Matrimoni ed Eventi in Italia"
        description="Trasporto professionale per invitati a matrimoni in destinazione in Toscana, Lago di Como, Costiera Amalfitana e oltre. Autisti in abito, veicoli di lusso e logistica evento impeccabile."
        backgroundImage="/images/hero.png"
        buttonText="Pianifica il Trasporto per il Matrimonio"
        breadcrumbs={[
          { name: "Servizi", item: "/it/servizi" },
          { name: "Trasferimenti Matrimonio", item: "/it/servizi/trasferimenti-matrimonio" }
        ]}
      />

      <ServicePageContent
        introTitle="Logistica Impeccabile per Invitati al Tuo Matrimonio in Destinazione in Italia"
        introParagraphs={[
          "Un matrimonio in destinazione in Italia è un sogno — ma coordinare il trasporto a terra per decine di invitati in arrivo da più Paesi, alloggiati in luoghi diversi e che si spostano tra le location può essere una sfida logistica che rischia rapidamente di diventare travolgente.",
          "Italy Taxi Service offre un servizio di trasporto matrimoniale dedicato che ti solleva completamente da questa responsabilità. Dal primo arrivo in aeroporto di un invitato all'ultimo rientro notturno dopo il ricevimento, il nostro team gestisce ogni veicolo, ogni percorso e ogni minuto — così tu puoi concentrarti interamente sulla tua celebrazione.",
          "Abbiamo coordinato il trasporto matrimoniale per cerimonie intime in casali toscani, grandi eventi lacustri in ville sul Lago di Como, celebrazioni a picco sul mare sulla Costiera Amalfitana e matrimoni in ville storiche a Roma, Siena e Positano."
        ]}
        detailTitle="Gestione Completa del Trasporto per il Tuo Matrimonio"
        detailParagraphs={[
          "Il nostro coinvolgimento inizia tipicamente settimane prima del giorno del tuo matrimonio. Lavoriamo con il tuo wedding planner o coordinatore per rivedere l'elenco completo degli invitati, gli orari di arrivo, le posizioni degli alloggi e la logistica della location. Da queste informazioni, progettiamo un piano di trasporto completo con assegnazione dei veicoli, briefing per gli autisti e disposizioni di emergenza.",
          "Nel giorno stesso, un coordinatore logistico dedicato al matrimonio è raggiungibile via WhatsApp per tutta la durata dell'evento. Monitora tutti i veicoli in tempo reale e comunica proattivamente se sono necessari aggiustamenti — come un invitato in ritardo o una location che richiede un cambio di percorso.",
          "Per gli invitati internazionali in arrivo negli aeroporti italiani, offriamo il nostro servizio distintivo di accoglienza all'interno della sala arrivi. Gli invitati vengono prelevati individualmente o in gruppi coordinati e trasferiti direttamente al loro alloggio — una prima impressione accogliente che dà il tono a tutto il tuo evento.",
          "Le location per matrimoni con accesso veicolare limitato non rappresentano una sfida per il nostro team. I nostri autisti sono autorizzati ed esperti con i permessi ZTL (Zona a Traffico Limitato) italiani, e conoscono i migliori percorsi di accesso per le location nel centro storico di Firenze, a Trastevere a Roma e sulle strette strade costiere dei borghi amalfitani.",
          "Le rotazioni navetta post-ricevimento sono gestite con precisione militare. Programmiamo ondate di partenza regolari dalla location verso i gruppi di alloggi, assicurando che tutti gli invitati vengano riportati in sicurezza senza lunghe attese — anche alle 2 o 3 del mattino."
        ]}
        benefits={[
          "Coordinatore logistico dedicato per il tuo matrimonio",
          "Gestione multi-veicolo per trasferimenti simultanei degli invitati",
          "Flotta Mercedes di lusso — berline, Classe V e minivan",
          "Autisti in abito formale per tutte le prenotazioni matrimoniali",
          "Accesso autorizzato ZTL alle location storiche e limitate",
          "Accoglienza in aeroporto inclusa per gli invitati internazionali",
          "Copertura per eventi del giorno prima e del giorno dopo",
          "Tracciamento dei veicoli in tempo reale per tutto il giorno del matrimonio",
          "Gestione delle rotazioni navetta per le partenze dal ricevimento",
          "Pacchetti multi-giorno per celebrazioni matrimoniali di 2–5 giorni",
          "Seggiolini per bambini per famiglie con neonati o bambini piccoli",
          "Coordinamento con il tuo wedding planner o coordinatore"
        ]}
        pricingTitle="Panoramica dei Prezzi per il Trasferimento Matrimonio"
        pricing={pricing}
        relatedLinks={[
          { label: "Transfer Aeroportuali per Invitati", href: "/it/servizi/trasferimenti-aeroportuali" },
          { label: "Taxi Aziendale e VIP", href: "/it/servizi/taxi-aziendale" },
          { label: "Taxi a Ore", href: "/it/servizi/taxi-a-ore" },
          { label: "Trasferimenti Matrimonio in Toscana", href: "/city/florence" },
          { label: "Trasferimenti Matrimonio Costiera Amalfitana", href: "/city/amalfi-coast" },
          { label: "Trasferimenti Matrimonio Lago di Como", href: "/city/como" },
        ]}
      />

      <HowItWorks />

      <FAQSection faqs={faqs} title="FAQ sui Trasporti per Matrimoni" badge="Pianificazione Evento" />

      <Footer />
    </main>
  );
}
