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
  title: "Taxi Privato a Ore in Italia",
  description: "Noleggia un taxi privato a ore in tutta Italia. Servizio flessibile per visite turistiche, shopping, lavoro ed eventi. Tariffe orarie fisse, nessun costo nascosto.",
  alternates: {
    canonical: "/it/servizi/taxi-a-ore",
    languages: enHreflangFor('/it/servizi/taxi-a-ore'),
  },
};

const faqs = [
  {
    q: "Come funziona la prenotazione del taxi a ore in Italia?",
    a: "Noleggi un autista professionista e un veicolo per un numero minimo di ore. Durante questo periodo, l'autista e il veicolo sono interamente a tua disposizione. Decidi tu dove andare, quanto fermarti e quando ripartire — flessibilità totale."
  },
  {
    q: "Qual è la prenotazione minima per il servizio taxi a ore?",
    a: "La prenotazione minima è di 2 ore per il servizio in città e 4 ore per escursioni giornaliere e visite turistiche su distanze maggiori. Contattaci per accordi speciali per prenotazioni più brevi."
  },
  {
    q: "Posso cambiare destinazione spontaneamente durante le ore prenotate?",
    a: "Sì — questo è il principale vantaggio del servizio a ore. Puoi visitare più luoghi, modificare l'itinerario in corso d'opera ed estendere le soste quanto desideri, entro il totale delle ore prenotate."
  },
  {
    q: "Cosa succede se voglio estendere la mia prenotazione a ore?",
    a: "Se vuoi estendere la prenotazione, informa il tuo autista il prima possibile. Compatibilmente con i suoi impegni, può aggiungere ore extra alla stessa tariffa oraria. Cerchiamo sempre di accogliere le estensioni dell'ultimo minuto."
  },
  {
    q: "Il servizio taxi a ore è disponibile in tutte le città italiane?",
    a: "Sì. Il nostro servizio a ore opera a Roma, Milano, Firenze, Venezia, Napoli, Costiera Amalfitana, Toscana, Cinque Terre, Lago di Como e in tutte le altre destinazioni italiane. È ideale per le zone senza trasporto pubblico comodo."
  },
  {
    q: "Posso usare il servizio taxi a ore per lo shopping a Milano o Roma?",
    a: "Molti clienti usano il nostro servizio a ore specificamente per lo shopping — in particolare nel Quadrilatero della Moda di Milano o su Via Condotti a Roma. Il tuo autista aspetterà e ti aiuterà a trasportare i sacchetti tra una tappa e l'altra."
  },
  {
    q: "È disponibile un pacchetto mezza giornata o giornata intera?",
    a: "Sì. Offriamo pacchetti mezza giornata (4 ore) e giornata intera (8 ore) a tariffe forfettarie scontate rispetto alla prenotazione oraria singola. Sono particolarmente richiesti per le visite turistiche a Roma, Firenze e sulla Costiera Amalfitana."
  }
];

const pricing: PricingTier[] = [
  { label: "2 Ore in Città", price: "Da €120", note: "Ideale per aeroporto e commissioni locali" },
  { label: "Mezza Giornata (4h)", price: "Da €220", note: "Tour turistici e shopping", popular: true },
  { label: "Giornata Intera (8h)", price: "Da €380", note: "Escursioni giornaliere complete" },
];

const reviews = [
  {
      name: "Olivia M.",
      country: "🇬🇧 Regno Unito",
      rating: 5,
      text: "Ho noleggiato un autista per 4 ore a Milano per lo shopping. È stato incredibilmente paziente, ha aspettato fuori da ogni boutique e ha gestito tutti i nostri sacchetti. Consigliatissimo per una giornata senza stress.",
      date: "Marzo 2025"
  },
  {
      name: "Thomas W.",
      country: "🇨🇦 Canada",
      rating: 5,
      text: "Ho prenotato un servizio di 8 ore per una giornata intera nel Chianti. Il nostro autista era come una guida locale, suggerendoci i migliori punti panoramici e piccole cantine familiari. Vale ogni euro.",
      date: "Febbraio 2025"
  },
  {
      name: "Grace H.",
      country: "🇺🇸 Stati Uniti",
      rating: 5,
      text: "Ho usato il servizio a ore per riunioni di lavoro in giro per Roma. Professionale, discreto e perfettamente puntuale per ogni prelievo. Ha reso la nostra giornata intensa molto più semplice.",
      date: "Gennaio 2025"
  }
];

export default function HourlyTaxiPageIt() {
  const url = "https://www.italytaxiservice.com/it/servizi/taxi-a-ore";

  return (
    <main className="min-h-screen font-inter">
      <ServiceSchema name="Servizio Taxi Privato a Ore in Italia" description="Noleggia un taxi professionale a ore per la massima flessibilità e viaggi di lusso in tutta Italia." url={url} />
      <Navbar />

      <PageHero
        titleTop="Taxi Privato e Flessibile"
        titleBottom="a Ore"
        description="Il tuo autista privato, interamente a tua disposizione, per tutte le ore di cui hai bisogno. Perfetto per visite turistiche, shopping, lavoro ed escursioni giornaliere in tutta Italia."
        backgroundImage="/images/Taxis.webp"
        buttonText="Prenota il Servizio a Ore"
        breadcrumbs={[
          { name: "Servizi", item: "/it/servizi" },
          { name: "Taxi a Ore", item: "/it/servizi/taxi-a-ore" }
        ]}
      />

      <ServicePageContent
        introTitle="Il Tuo Autista Personale — I Tuoi Orari, a Modo Tuo"
        introParagraphs={[
          "A volte un singolo trasferimento punto a punto non basta. L'Italia è un Paese che premia l'esplorazione — e il nostro servizio taxi a ore ti dà la libertà di viverla a modo tuo. Noleggia un autista privato per due ore o per un'intera giornata, e scopri tutto ciò che desideri.",
          "Che tu voglia passare una mattina saltellando tra le piazze e le chiese di Roma, un pomeriggio facendo shopping nel distretto della moda di Milano, o un'intera giornata esplorando i borghi a picco sul mare della Costiera Amalfitana, il nostro servizio a ore ti mette saldamente al comando.",
          "Il tuo autista è un esperto locale che può suggerirti i percorsi migliori, segnalarti gemme nascoste fuori dai circuiti turistici e assicurarti di essere sempre dove vuoi essere — comodamente, in sicurezza e puntuali."
        ]}
        detailTitle="Cosa Aspettarti dalla Tua Esperienza di Taxi a Ore"
        detailParagraphs={[
          "Quando prenoti un taxi a ore con Italy Taxi Service, non stai semplicemente noleggiando un'auto con autista — stai coinvolgendo un partner personale di mobilità per il tuo viaggio. Il servizio inizia al tuo hotel, aeroporto o qualsiasi indirizzo tu specifichi, e da quel momento il tuo autista si dedica interamente a rendere straordinario il tuo tempo in Italia.",
          "A differenza degli autobus turistici con percorsi rigidi e fermate fisse, il tuo itinerario è interamente tuo. Dì al tuo autista che vuoi fermarti 30 minuti alla Fontana di Trevi, poi dirigerti verso un ristorante specifico per pranzo, seguito da una deviazione non pianificata verso un mercato che hai notato — tutto questo non è solo possibile, è previsto.",
          "I nostri autisti sono pazienti, tranquilli e genuinamente coinvolti nella tua esperienza. Sanno quali punti panoramici offrono la luce migliore per le fotografie, quali strade prendere per evitare la maggiore congestione turistica e quali angoli locali le guide turistiche non menzionano.",
          "Durante qualsiasi tempo di attesa — che tu sia in un museo, a pranzo o in esplorazione a piedi — il tuo veicolo resta parcheggiato nelle vicinanze. Il tuo autista tiene conto del tempo ed è sempre raggiungibile sul cellulare. Quando sei pronto per ripartire, un semplice messaggio lo riporta da te in pochi minuti.",
          "Per le escursioni di shopping, in particolare a Milano o Roma, il tuo autista può aiutarti a trasportare i sacchetti e a spostarti efficientemente da una boutique all'altra. Molti dei nostri clienti abituali usano il servizio a ore come assistente personale per lo shopping, assicurandosi che gli acquisti siano riposti in sicurezza per tutta la giornata."
        ]}
        benefits={[
          "Flessibilità totale dell'itinerario — decidi tutto tu",
          "Tariffa oraria fissa senza costi extra per le soste",
          "Tariffe pacchetto per mezza giornata e giornata intera disponibili",
          "Autisti disponibili come guide locali esperte",
          "Il veicolo ti attende in ogni luogo — senza costi aggiuntivi",
          "Perfetto per visite turistiche, shopping, tour enogastronomici e riunioni",
          "Ideale per destinazioni con trasporto pubblico limitato",
          "Disponibile in tutta Italia — città, costa e campagna",
          "Autisti professionisti di lingua inglese",
          "Veicoli premium inclusi SUV e minivan per gruppi",
          "Prenota in giornata o con settimane di anticipo",
          "Disponibilità 24/7 — mattine presto e serate tarde"
        ]}
        pricingTitle="Tariffe del Servizio a Ore"
        pricing={pricing}
        reviews={reviews}
        relatedLinks={[
          { label: "Tour Privati", href: "/it/servizi/tour-privati" },
          { label: "Trasferimenti Città-Città", href: "/it/servizi/trasferimenti-citta-citta" },
          { label: "Taxi Aziendale", href: "/it/servizi/taxi-aziendale" },
          { label: "Escursioni a Roma", href: "/city/rome" },
          { label: "Distretto della Moda di Milano", href: "/city/milan" },
          { label: "Escursioni sulla Costiera Amalfitana", href: "/city/amalfi-coast" },
        ]}
      />

      <HowItWorks />

      <FAQSection faqs={faqs} title="FAQ sul Taxi a Ore" badge="Flessibilità di Prenotazione" />

      <Footer />
    </main>
  );
}
