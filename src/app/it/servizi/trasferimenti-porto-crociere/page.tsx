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
  title: "Trasferimenti Porto Crociere in Italia",
  description: "Taxi privati per trasferimenti da tutti i porti crocieristici italiani. Civitavecchia-Roma, Livorno-Firenze, porto di Napoli, porto di Venezia e altro. Prezzi fissi, ritiro al molo.",
  alternates: {
    canonical: "/it/servizi/trasferimenti-porto-crociere",
    languages: enHreflangFor('/it/servizi/trasferimenti-porto-crociere'),
  },
};

const faqs = [
  {
    q: "Quali porti crocieristici italiani servite?",
    a: "Operiamo da tutti i principali porti crocieristici italiani: Civitavecchia (porta d'accesso a Roma), Livorno (porta d'accesso a Firenze/Toscana), Napoli, il terminal passeggeri di Venezia (Marghera), Genova, Salerno, Bari, Catania e Messina. Contattaci se il tuo porto non è elencato."
  },
  {
    q: "L'autista mi incontrerà direttamente al molo?",
    a: "Sì. I nostri autisti possiedono i permessi di accesso al porto necessari per prelevarti direttamente alla passerella della tua nave o all'uscita designata del porto. Avranno un cartello con il tuo nome e ti assisteranno con i bagagli dal momento dello sbarco."
  },
  {
    q: "Quanto tempo devo prevedere per il trasferimento da Civitavecchia a Roma?",
    a: "Il trasferimento dal porto di Civitavecchia al centro di Roma richiede circa 60–80 minuti, a seconda del traffico. Per le coincidenze con l'aeroporto, consigliamo di prevedere almeno 90 minuti e coordineremo i tempi in base alle esigenze di check-in del tuo volo."
  },
  {
    q: "Posso prenotare un'escursione durante la mia giornata in porto?",
    a: "Sì — i tour delle escursioni a terra sono una delle nostre specialità. Ti preleviamo dal molo, ti portiamo alla destinazione scelta (Colosseo da Civitavecchia, Uffizi da Livorno, Pompei da Napoli) e ti riportiamo alla nave con ampio anticipo rispetto all'orario di reimbarco. L'intera giornata è pianificata intorno al programma della tua nave."
  },
  {
    q: "Cosa succede se la mia nave arriva in ritardo?",
    a: "Monitoriamo l'orario di arrivo previsto della tua nave tramite sistemi di tracciamento marittimo in tempo reale. Se la tua nave è in ritardo, il tuo autista adegua automaticamente l'orario di prelievo. Non ci sono cancellazioni né costi extra per i cambi di programma del porto."
  },
  {
    q: "Gestite trasferimenti per grandi gruppi di crocieristi?",
    a: "Sì. Coordiniamo prelievi multi-veicolo per gruppi di qualsiasi dimensione. Per gruppi crocieristi di 10 o più passeggeri, contattaci direttamente e il nostro team di logistica di gruppo preparerà un piano di trasporto personalizzato con i veicoli adeguati."
  },
  {
    q: "Il prezzo dal porto all'aeroporto è fisso?",
    a: "Sì. Tutti i prezzi porto-aeroporto e porto-città sono fissi al momento della prenotazione. Non ci sono tassametri, non ci sono tariffe dinamiche e non ci sono costi aggiuntivi per i bagagli."
  }
];

const pricing: PricingTier[] = [
  { label: "Civitavecchia → Roma", price: "Da €80", note: "~70 min · Fino a 3 passeggeri" },
  { label: "Livorno → Firenze", price: "Da €70", note: "~1 ora · Più richiesto", popular: true },
  { label: "Porto di Napoli → Città", price: "Da €35", note: "~20 min · Fino a 3 passeggeri" },
];

const routes: RouteItem[] = [
  { from: "Porto di Civitavecchia", to: "Centro di Roma", duration: "~70 min", price: "Da €80" },
  { from: "Porto di Civitavecchia", to: "Roma Fiumicino (FCO)", duration: "~60 min", price: "Da €90" },
  { from: "Porto di Livorno", to: "Centro di Firenze", duration: "~60 min", price: "Da €70" },
  { from: "Porto di Napoli", to: "Centro di Napoli", duration: "~20 min", price: "Da €35" },
  { from: "Porto di Napoli", to: "Pompei", duration: "~30 min", price: "Da €55" },
  { from: "Porto di Venezia (Marghera)", to: "Città di Venezia", duration: "~20 min", price: "Da €45" },
];

export default function CruisePortTransfersPageIt() {
  const url = "https://www.italytaxiservice.com/it/servizi/trasferimenti-porto-crociere";

  return (
    <main className="min-h-screen font-inter">
      <ServiceSchema name="Trasferimenti Privati Porto Crociere in Italia" description="Trasferimenti taxi privati veloci e affidabili dai moli delle navi da crociera italiane verso aeroporti e centri città." url={url} />
      <Navbar />

      <PageHero
        titleTop="Trasferimenti Privati"
        titleBottom="Porto Crociere in Italia"
        description="Scendi dalla nave e sali sul tuo taxi privato. Trasferimenti a prezzo fisso da Civitavecchia, Napoli, Livorno, Venezia e tutti i moli crocieristici italiani — niente code, niente tassametri."
        backgroundImage="/images/cruise-port-transfer.webp"
        buttonText="Prenota il Trasferimento dal Porto"
        breadcrumbs={[
          { name: "Servizi", item: "/it/servizi" },
          { name: "Porto Crociere", item: "/it/servizi/trasferimenti-porto-crociere" }
        ]}
      />

      <ServicePageContent
        introTitle="Il Modo più Semplice per Lasciare (e Tornare a) la Tua Nave da Crociera in Italia"
        introParagraphs={[
          "I porti crocieristici italiani sono tra i più trafficati del Mediterraneo — e anche tra i più confusionari. Civitavecchia accoglie oltre 3 milioni di crocieristi ogni anno. Le code per il taxi si estendono per centinaia di metri, gli autisti competono aggressivamente per le corse e i prezzi variano enormemente a seconda della tua capacità di contrattare.",
          "Il nostro servizio di trasferimento privato dal porto crociere elimina tutto questo. Il tuo autista ti aspetta già al molo con il tuo nome su un cartello, prima ancora che tu abbia completato lo sbarco. I bagagli passano direttamente dalle tue mani al veicolo. Il prezzo era fisso quando hai prenotato — settimane o mesi fa — e non cambierà.",
          "Che tu abbia bisogno di un trasferimento diretto al centro di Roma, di una coincidenza con l'aeroporto di Fiumicino o di un tour completo per vedere il Colosseo prima di tornare alla nave, coordiniamo tutto in base al programma della tua crociera."
        ]}
        detailTitle="Competenza Specializzata nei Principali Porti Crocieristici Italiani"
        detailParagraphs={[
          "Ogni porto crocieristico italiano ha le proprie caratteristiche logistiche, e i nostri autisti le conoscono tutte. A Civitavecchia, i nostri autisti autorizzati possono entrare nella struttura portuale e prelevarti al terminal corretto. A Livorno, conosciamo i percorsi più veloci sull'autostrada A11 verso il centro storico di Firenze. A Napoli, navighiamo efficientemente nel distretto portuale per raggiungere la città o Pompei nel minor tempo possibile.",
          "Le escursioni a terra sono una delle nostre offerte più richieste. Molti crocieristi vogliono vedere Roma da Civitavecchia, Firenze e Pisa da Livorno, o Pompei e la Costiera Amalfitana da Napoli — ma non vogliono prenotare costose escursioni della nave né sottostare alle restrizioni dei tour di gruppo. Le nostre escursioni private a terra offrono un accesso migliore, maggiore flessibilità e un'esperienza davvero personale a un prezzo competitivo.",
          "Per tutte le escursioni a terra, costruiamo il tuo itinerario specificamente intorno all'orario di reimbarco della tua nave. Sappiamo quanto tempo richiede realisticamente vedere i luoghi principali di ogni destinazione e includiamo un margine per il viaggio di ritorno, così sei sicuro di essere al molo con almeno 45 minuti di anticipo — mai al limite.",
          "Per i gruppi, i nostri minivan accolgono fino a 8 passeggeri con tutti i bagagli da crociera. Per famiglie più numerose o gruppi turistici, coordiniamo più veicoli con un unico punto di contatto per il dispatch, assicurando che ogni sottogruppo arrivi insieme o in sequenza coordinata.",
          "Il giorno dell'imbarco, lavoriamo nella direzione opposta — prelevandoti dal tuo hotel a Roma, dall'Airbnb a Firenze o dall'alloggio a Napoli e portandoti al tuo specifico terminal crociere in tempo utile per il check-in. Conosciamo le procedure del terminal e ti posizioneremo esattamente al punto d'ingresso giusto."
        ]}
        benefits={[
          "Autisti autorizzati all'accesso portuale — ritiro al molo direttamente alla passerella",
          "Tracciamento della nave in tempo reale — ci adeguiamo se la tua nave è in ritardo",
          "Escursioni a terra con garanzia dell'orario di reimbarco",
          "Prezzi fissi confermati alla prenotazione — niente tassametri, niente sorprese",
          "Copertura di tutti i principali porti crocieristici italiani",
          "Assistenza bagagli dalla nave al veicolo",
          "Coordinamento multi-veicolo per gruppi più numerosi",
          "Collegamenti porto-aeroporto per inizio e fine della crociera",
          "Disponibile sia per lo sbarco che per l'imbarco",
          "Autisti professionisti di lingua inglese",
          "Seggiolini per bambini disponibili gratuitamente su richiesta",
          "Cancellazione della prenotazione fino a 48 ore in anticipo"
        ]}
        pricingTitle="Esempi di Tariffe per il Trasferimento dal Porto"
        pricing={pricing}
        routesTitle="I Percorsi di Trasferimento dal Porto Più Richiesti"
        routes={routes}
        relatedLinks={[
          { label: "Transfer Aeroportuali", href: "/it/servizi/trasferimenti-aeroportuali" },
          { label: "Tour Turistici Privati", href: "/it/servizi/tour-privati" },
          { label: "Escursioni a Roma", href: "/city/rome" },
          { label: "Escursioni a Firenze", href: "/city/florence" },
          { label: "Napoli e Costiera Amalfitana", href: "/city/naples" },
        ]}
      />

      <HowItWorks />

      <FAQSection faqs={faqs} title="FAQ sui Trasferimenti dal Porto Crociere" badge="Passeggeri delle Crociere" />

      <Footer />
    </main>
  );
}
