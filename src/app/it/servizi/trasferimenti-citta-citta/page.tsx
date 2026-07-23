import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import ServiceSchema from '@/components/ServiceSchema';
import ServicePageContent from '@/components/ServicePageContent';
import type { PricingTier, RouteItem } from '@/components/ServicePageContent';
import { Metadata } from 'next';
import { enHreflangFor } from '@/lib/i18n/page-registry';

export const metadata: Metadata = {
  title: "Trasferimenti Città-Città in Italia | Taxi Privato",
  description: "Taxi privati per trasferimenti intercity tra tutte le città italiane. Roma-Firenze, Milano-Venezia, Napoli-Amalfi e altro. Prezzo fisso, servizio porta a porta.",
  alternates: {
    canonical: "/it/servizi/trasferimenti-citta-citta",
    languages: enHreflangFor('/it/servizi/trasferimenti-citta-citta'),
  },
  openGraph: {
    title: "Trasferimenti Città-Città in Italia | Taxi Privato",
    description: "Taxi privati per trasferimenti intercity tra tutte le città italiane. Prezzo fisso, servizio porta a porta con autisti professionisti.",
  },
};

const faqs = [
  {
    q: "Come prenoto un taxi privato tra città italiane?",
    a: "La prenotazione è semplice — usa il nostro modulo online, inserisci la città di partenza, la destinazione, la data e il numero di passeggeri. Riceverai immediatamente un prezzo fisso e la conferma della prenotazione via email. In alternativa, contattaci su WhatsApp per un preventivo personalizzato."
  },
  {
    q: "Un taxi privato intercity è più economico del treno in Italia?",
    a: "Per gruppi di 3 o più persone, un taxi privato è spesso comparabile al costo dei biglietti del treno, offrendo però la comodità porta a porta, nessun cambio in stazione, nessun limite di bagaglio e orari di partenza flessibili. Le famiglie con bambini trovano spesso questa opzione decisamente più conveniente."
  },
  {
    q: "Posso richiedere soste panoramiche durante i trasferimenti a lunga distanza?",
    a: "Sì, permettiamo fino a 2 soste personalizzate per foto, un pasto veloce o una visita panoramica lungo il percorso. Indica le tue soste preferite durante la prenotazione, così potremo pianificare il percorso e i tempi ottimali."
  },
  {
    q: "Quanto dura il viaggio da Roma a Firenze in taxi privato?",
    a: "Il viaggio da Roma a Firenze richiede circa 2,5–3 ore a seconda del traffico e del percorso scelto. Utilizziamo sempre le autostrade a pedaggio per il viaggio più rapido e confortevole — tutti i costi dei pedaggi sono inclusi nel prezzo fisso."
  },
  {
    q: "Quanti bagagli posso portare in un trasferimento città-città?",
    a: "Le nostre berline accolgono comodamente 2 valigie grandi più bagagli a mano. Per gruppi più numerosi o con molti bagagli, consigliamo di prenotare il nostro spazioso minivan, che ospita fino a 8 passeggeri e tutto il loro bagaglio."
  },
  {
    q: "Posso prenotare un trasferimento intercity di sola andata o andata e ritorno?",
    a: "Entrambe le opzioni sono disponibili. Puoi prenotare un viaggio singolo o andata e ritorno. Per le prenotazioni di ritorno, consigliamo di programmarle insieme per garantire la disponibilità dell'autista e talvolta ottenere uno sconto combinato."
  },
  {
    q: "Quali città italiane coprite per i trasferimenti intercity?",
    a: "Copriamo tutte le principali città italiane, tra cui Roma, Milano, Firenze, Venezia, Napoli, Bologna, Siena, Genova, Torino, Verona, Padova, Bari e molte altre. Copriamo anche percorsi verso San Marino, la Città del Vaticano e trasferimenti transfrontalieri verso Svizzera, Monaco e Slovenia."
  }
];

const pricing: PricingTier[] = [
  { label: "Roma → Firenze", price: "Da €250", note: "~2,5 ore · Fino a 3 passeggeri" },
  { label: "Roma → Milano", price: "Da €450", note: "~5,5 ore · Percorso più richiesto", popular: true },
  { label: "Firenze → Venezia", price: "Da €300", note: "~2,5 ore · Fino a 3 passeggeri" },
];

const routes: RouteItem[] = [
  { from: "Roma", to: "Firenze", duration: "~2,5 ore", price: "Da €250" },
  { from: "Roma", to: "Milano", duration: "~5,5 ore", price: "Da €450" },
  { from: "Firenze", to: "Venezia", duration: "~2,5 ore", price: "Da €300" },
  { from: "Milano", to: "Venezia", duration: "~2,5 ore", price: "Da €260" },
  { from: "Roma", to: "Napoli", duration: "~2 ore", price: "Da €200" },
  { from: "Napoli", to: "Costiera Amalfitana", duration: "~1,5 ore", price: "Da €150" },
];

export default function CityToCityPageIt() {
  const url = "https://www.italytaxiservice.com/it/servizi/trasferimenti-citta-citta";

  return (
    <main className="min-h-screen font-inter">
      <ServiceSchema name="Trasferimenti Privati Città-Città in Italia" description="Servizio taxi intercity privato e premium in tutta Italia. Viaggio porta a porta sicuro e comodo tra qualsiasi città italiana." url={url} />
      <Navbar />

      <PageHero
        titleTop="Trasferimenti Città-Città"
        titleBottom="Privati e Comodi in Italia"
        description="Evita i treni affollati. Viaggia porta a porta tra Roma, Firenze, Milano, Venezia e ogni città italiana in un veicolo privato e climatizzato a prezzo fisso."
        backgroundImage="/images/hero.png"
        buttonText="Prenota il Trasferimento Intercity"
        breadcrumbs={[
          { name: "Servizi", item: "/it/servizi" },
          { name: "Città-Città", item: "/it/servizi/trasferimenti-citta-citta" }
        ]}
      />

      <ServicePageContent
        introTitle="Il Modo più Intelligente di Viaggiare tra le Città Italiane"
        introParagraphs={[
          "La rete ferroviaria italiana è eccellente — ma non è sempre la scelta più pratica. I treni richiedono di raggiungere la stazione, acquistare i biglietti, gestire le coincidenze e trasportare i bagagli attraverso snodi affollati prima di prendere un altro taxi per la destinazione finale.",
          "Il nostro servizio di taxi intercity privato offre un unico viaggio porta a porta senza interruzioni. Il tuo autista ti preleva dal tuo alloggio e ti accompagna direttamente al tuo hotel, villa o appartamento nella città di destinazione — senza cambi, senza code e con un prezzo fisso concordato in anticipo.",
          "Che tu stia viaggiando da Roma a Firenze per un weekend, collegando Milano a Venezia per una riunione di lavoro o intraprendendo un grande tour dell'Italia, i nostri veicoli confortevoli e i nostri autisti esperti rendono il viaggio stesso un piacere."
        ]}
        detailTitle="Perché Famiglie, Gruppi e Viaggiatori d'Affari ci Scelgono"
        detailParagraphs={[
          "La libertà del viaggio intercity privato non ha eguali. A differenza di treni e autobus, il tuo autista parte quando sei pronto. Se vuoi partire alle 6 del mattino per evitare il traffico, o preferisci un tranquillo avvio alle 10, la scelta è interamente tua. Questa flessibilità è particolarmente preziosa per famiglie con bambini piccoli, viaggiatori anziani o professionisti con orari serrati.",
          "I nostri autisti sono esperti delle strade italiane e utilizzano i percorsi autostradali più veloci, tenendo sempre conto del traffico in tempo reale per arrivare puntuali. I pedaggi autostradali sono precalcolati e inclusi nel preventivo — non ci sarà mai un addebito a sorpresa quando raggiungi la destinazione.",
          "Per i percorsi più lunghi, come Roma-Milano (circa 5,5 ore), il tuo autista includerà una sosta di comfort di 20 minuti in un'area di servizio a metà strada. Per percorsi più brevi come Roma-Napoli (2 ore), il viaggio è diretto a meno che tu non richieda diversamente.",
          "Gruppi e famiglie che viaggiano insieme trovano quasi sempre i trasferimenti intercity privati più convenienti rispetto a più biglietti del treno combinati con i costi dei taxi a entrambe le estremità. I nostri minivan accolgono fino a 8 passeggeri e tutto il loro bagaglio, mantenendo unito l'intero gruppo.",
          "Siamo specializzati anche nei trasferimenti per itinerari di più giorni — perfetti per tour curati dell'Italia. Prenota Roma il Giorno 1, Firenze il Giorno 3, Venezia il Giorno 5, e coordineremo l'intero trasporto a terra per il tuo viaggio."
        ]}
        benefits={[
          "Vero servizio porta a porta — niente treni, niente stazioni",
          "Prezzi fissi con tutti i pedaggi e le tasse autostradali inclusi",
          "Parti all'orario che preferisci, non secondo l'orario dei treni",
          "Ampia capacità di bagaglio — nessuna restrizione",
          "Soste di comfort incluse sui percorsi superiori a 3 ore",
          "Flotta di veicoli premium, inclusi minivan da 8 posti per i gruppi",
          "Autisti professionisti di lingua inglese esperti dei percorsi",
          "Disponibilità 24/7 — partenze mattutine presto e arrivi notturni",
          "Soste panoramiche opzionali per fotografare i luoghi lungo il percorso",
          "Cancellazione gratuita fino a 48 ore prima del viaggio",
          "Adatto per itinerari multi-città in Italia",
          "Seggiolini per bambini disponibili gratuitamente su richiesta"
        ]}
        pricingTitle="Esempi di Tariffe per Trasferimenti Intercity"
        pricing={pricing}
        routesTitle="I Percorsi Città-Città Più Richiesti"
        routes={routes}
        relatedLinks={[
          { label: "Firenze - Pisa Taxi", href: "/route/florence-to-pisa-taxi" },
          { label: "Roma - Firenze Transfer", href: "/route/rome-to-florence-taxi" },
          { label: "Milano - Lago di Como Taxi", href: "/route/milan-to-lake-como-taxi" },
          { label: "Roma - Napoli Transfer", href: "/route/rome-to-naples-taxi" },
          { label: "Napoli - Costiera Amalfitana", href: "/route/naples-to-amalfi-coast-taxi" },
          { label: "Tutti i Percorsi in Italia", href: "/route" },
          { label: "Transfer Aeroportuali", href: "/it/servizi/trasferimenti-aeroportuali" },
          { label: "Tour Privati", href: "/it/servizi/tour-privati" },
        ]}
      />

      <HowItWorks />

      <FAQSection faqs={faqs} title="FAQ sui Trasferimenti tra Città" badge="Tutto Quello che Devi Sapere" />

      <Footer />
    </main>
  );
}
