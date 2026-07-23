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
  title: "Trasferimenti Hotel in Italia | Taxi Privato",
  description: "Servizio di trasferimento hotel privato porta a porta in tutta Italia. Aeroporto-hotel, stazione-resort, hotel-hotel. Tutti gli indirizzi coperti, prezzi fissi, assistenza bagagli.",
  alternates: {
    canonical: "/it/servizi/trasferimenti-hotel",
    languages: enHreflangFor('/it/servizi/trasferimenti-hotel'),
  },
};

const faqs = [
  {
    q: "L'autista mi incontrerà all'interno della hall dell'hotel?",
    a: "Sì. Per i prelievi in hotel, il tuo autista ti incontrerà alla reception o al banco concierge nella hall principale, con un cartello con il tuo nome. Non dovrai aspettare fuori né portare i bagagli in strada."
  },
  {
    q: "Fornite trasferimenti verso Airbnb e appartamenti privati?",
    a: "Assolutamente. Siamo specializzati nel servizio porta a porta verso qualsiasi indirizzo — inclusi appartamenti privati, affitti Airbnb, ville di lusso, agriturismi e proprietà private in tutta Italia. Basta fornire l'indirizzo completo al momento della prenotazione."
  },
  {
    q: "Il vostro autista può aiutare a trasportare bagagli pesanti?",
    a: "Sì, l'assistenza bagagli è parte integrante del nostro servizio di trasferimento hotel. Gli autisti ti aiuteranno dalla hall dell'hotel al veicolo e dal veicolo fino al tuo alloggio all'arrivo."
  },
  {
    q: "I prezzi per i prelievi in hotel sono fissi indipendentemente dal traffico?",
    a: "Sì. Tutti i nostri prezzi per il trasferimento hotel sono fissi dal momento della prenotazione. Traffico, condizioni stradali e ora del giorno non influenzano il prezzo. Ciò che vedi al momento della prenotazione è esattamente ciò che pagherai."
  },
  {
    q: "Fornite seggiolini per bambini per i trasferimenti hotel?",
    a: "Sì. Forniamo ovetti, seggiolini fronte-marcia e rialzi gratuitamente su richiesta. Indica semplicemente l'età e il peso di ogni bambino al momento della prenotazione e ci assicureremo che venga installata l'attrezzatura corretta."
  },
  {
    q: "Potete effettuare un trasferimento tra due hotel diversi nella stessa città?",
    a: "Sì. I trasferimenti hotel-hotel all'interno di una città o tra città sono una richiesta molto comune. Basta inserire l'indirizzo dell'hotel di partenza e quello di destinazione nel modulo di prenotazione."
  },
  {
    q: "Cosa succede se l'orario di check-in del mio hotel viene posticipato?",
    a: "Coordiniamo la tua prenotazione in base al tuo programma di viaggio previsto. Se l'orario di check-in del tuo hotel viene posticipato, possiamo modificare il prelievo o organizzare un punto di attesa — basta scrivere al tuo autista, che ti assisterà."
  }
];

const pricing: PricingTier[] = [
  { label: "Aeroporto - Hotel", price: "Da €45", note: "Fisso · Tutti i principali aeroporti coperti" },
  { label: "Stazione - Hotel", price: "Da €25", note: "Fisso · Qualsiasi stazione ferroviaria in Italia", popular: true },
  { label: "Hotel - Hotel", price: "Da €30", note: "Trasferimento in città · Fino a 3 passeggeri" },
];

const reviews = [
  {
      name: "Sarah L.",
      country: "🇺🇸 Stati Uniti",
      rating: 5,
      text: "Il nostro autista ci aspettava nella hall dell'hotel a Firenze con 10 minuti di anticipo. Ci ha aiutato con tutte e 4 le nostre valigie pesanti e ci ha portati in sicurezza al nostro Airbnb a Roma. Servizio eccezionale.",
      date: "Marzo 2025"
  },
  {
      name: "David K.",
      country: "🇦🇺 Australia",
      rating: 5,
      text: "Trasferimento dall'aeroporto di Napoli al nostro hotel a Positano. Il van era immacolato e l'autista ha guidato con maestria sulle strade strette. Molto meglio di un normale taxi.",
      date: "Febbraio 2025"
  },
  {
      name: "Elena V.",
      country: "🇮🇹 Italia",
      rating: 5,
      text: "L'ho usato per un trasferimento tra due hotel a Milano. Puntuale, professionale e molto facile da prenotare. Altamente consigliato per qualsiasi soggiorno in hotel in Italia.",
      date: "Gennaio 2025"
  }
];

export default function HotelTransfersPageIt() {
  const url = "https://www.italytaxiservice.com/it/servizi/trasferimenti-hotel";

  return (
    <main className="min-h-screen font-inter">
      <ServiceSchema name="Trasferimenti Hotel Privati in Italia" description="Servizio taxi privato premium per trasferimenti porta a porta verso hotel e Airbnb in tutta Italia." url={url} />
      <Navbar />

      <PageHero
        titleTop="Trasferimenti Hotel Privati"
        titleBottom="in Tutta Italia"
        description="Servizio taxi privato porta a porta verso qualsiasi hotel, Airbnb, villa o resort in Italia. Prezzi fissi, assistenza bagagli e accoglienza personalizzata a ogni prelievo."
        backgroundImage="/images/hero.png"
        buttonText="Prenota il Trasferimento Hotel"
        breadcrumbs={[
          { name: "Servizi", item: "/it/servizi" },
          { name: "Trasferimenti Hotel", item: "/it/servizi/trasferimenti-hotel" }
        ]}
      />

      <ServicePageContent
        introTitle="Arrivi e Partenze Senza Stress — Ogni Volta"
        introParagraphs={[
          "L'ultima cosa che vuoi dopo un lungo volo o viaggio in treno è cercare un taxi in una città italiana sconosciuta. Italy Taxi Service risolve completamente questo problema. Ti preleviamo dal tuo punto d'arrivo — aeroporto, stazione o porto crociere — e ti consegniamo direttamente nella hall del tuo hotel, alla porta del tuo Airbnb o al cancello della tua villa privata.",
          "Il nostro servizio di trasferimento hotel è pensato per le esigenze dei viaggiatori leisure e delle famiglie. Che tu stia arrivando tardi la sera dopo un volo in ritardo o facendo il check-out da un boutique hotel nel centro storico di Firenze alle 5 del mattino per una coincidenza mattutina, noi ci siamo.",
          "Non ci sono tassametri, non è richiesto contante e non ci sono trattative. Prenoti online con un prezzo fisso confermato, ricevi in anticipo i dettagli di contatto del tuo autista e ti godi un'esperienza professionale e senza interruzioni, porta a porta."
        ]}
        detailTitle="Copriamo Ogni Tipo di Alloggio in Tutta Italia"
        detailParagraphs={[
          "A differenza dei taxi a tassametro che si concentrano su posizioni centrali, il nostro servizio di trasferimento hotel privato raggiunge ogni tipo di alloggio in Italia. Serviamo hotel a cinque stelle nel centro storico di Roma, B&B boutique sulle colline toscane, Airbnb nei quartieri residenziali di Venezia e resort di lusso sul mare lungo la Costiera Amalfitana.",
          "Per le strutture con accesso veicolare limitato — come i centri storici con zone ZTL — i nostri autisti conoscono i migliori punti di consegna e possono guidarti lungo il breve percorso a piedi fino all'ingresso del tuo alloggio.",
          "Copriamo anche i trasferimenti hotel-hotel all'interno della stessa città o tra città diverse, rendendoci il partner di trasporto a terra ideale per itinerari italiani multi-destinazione. Basta prenotare ogni tratta del tuo viaggio e lasciare a noi la logistica.",
          "Le famiglie con bambini apprezzeranno il fatto che forniamo seggiolini, ovetti e rialzi gratuitamente su richiesta. Bagagli multipli, passeggini e carrelli da aeroporto non sono un problema — assegniamo la dimensione di veicolo giusta per il tuo gruppo.",
          "Ogni prelievo in hotel include il nostro servizio completo di accoglienza. Il tuo autista attenderà nella hall, ti assisterà con i bagagli e si assicurerà che tu sia completamente a tuo agio nel veicolo prima della partenza. Non è un prelievo frettoloso al marciapiede — è un servizio premium e personalizzato."
        ]}
        benefits={[
          "Servizio di accoglienza in ogni hall d'hotel o atrio",
          "Copertura porta a porta inclusi Airbnb, ville e resort",
          "Assistenza bagagli completa — dalla hall al veicolo e viceversa",
          "Prezzi fissi e onnicomprensivi — nessuna sorpresa al check-out",
          "Seggiolini, rialzi e ovetti forniti gratuitamente",
          "Conoscenza delle zone ZTL — consegna sempre il più vicino possibile",
          "Disponibilità 24/7 per check-out mattutini presto e arrivi notturni",
          "Monitoraggio di volo e treno per prelievi da aeroporto e stazione",
          "Veicoli disponibili dalle berline compatte ai minivan da 8 posti",
          "Trasferimenti hotel-hotel all'interno delle città e tra città",
          "Acqua in bottiglia gratuita e climatizzazione in tutti i veicoli",
          "Cancellazione gratuita fino a 24 ore prima del prelievo"
        ]}
        pricingTitle="Panoramica dei Prezzi per il Trasferimento Hotel"
        pricing={pricing}
        reviews={reviews}
        relatedLinks={[
          { label: "Transfer Aeroportuali", href: "/it/servizi/trasferimenti-aeroportuali" },
          { label: "Trasferimenti Città-Città", href: "/it/servizi/trasferimenti-citta-citta" },
          { label: "Trasferimenti Porto Crociere", href: "/it/servizi/trasferimenti-porto-crociere" },
          { label: "Hotel e Transfer a Roma", href: "/city/rome" },
          { label: "Hotel e Transfer a Firenze", href: "/city/florence" },
          { label: "Hotel e Transfer a Venezia", href: "/city/venice" },
        ]}
      />

      <HowItWorks />

      <FAQSection faqs={faqs} title="FAQ sui Trasferimenti Hotel" badge="Dettagli del Servizio" />

      <Footer />
    </main>
  );
}
