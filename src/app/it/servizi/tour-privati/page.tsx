import Link from 'next/link';
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
  title: "Tour Turistici Privati in Italia",
  description: "Scopri l'Italia con tour privati in taxi con autisti esperti. Costiera Amalfitana, Toscana, Vaticano, Colosseo, Lago di Como e altro. Itinerari su misura, prezzi fissi.",
  alternates: {
    canonical: "/it/servizi/tour-privati",
    languages: enHreflangFor('/it/servizi/tour-privati'),
  },
};

const faqs = [
  {
    q: "Come posso personalizzare il mio tour privato in Italia?",
    a: "Basta contattarci con le destinazioni preferite, i tuoi interessi e le date disponibili. Progetteremo un itinerario su misura — che tu sia interessato a storia, gastronomia, vino, paesaggi costieri o arte. Nessun impegno e nessun costo aggiuntivo per la personalizzazione."
  },
  {
    q: "I vostri autisti fungono anche da guide turistiche?",
    a: "I nostri autisti sono locali esperti con una profonda conoscenza delle regioni italiane, della storia e dei segreti meglio custoditi. Per visite guidate all'interno di monumenti come il Vaticano o il Colosseo, possiamo aiutarti a prenotare in anticipo una guida professionista autorizzata che si unisca al tuo tour."
  },
  {
    q: "Qual è il miglior tour privato per chi visita l'Italia per la prima volta?",
    a: "Per chi è alla prima visita, consigliamo un Tour di un Giorno a Roma che copra Colosseo, Foro Romano, Fontana di Trevi, Pantheon e area vaticana. Per chi ha più tempo, un itinerario di 3 giorni che combini Roma, Firenze e un giro sulla Costiera Amalfitana offre una panoramica indimenticabile."
  },
  {
    q: "Posso prenotare un tour privato dalla mia nave da crociera in Italia?",
    a: "Sì. Siamo esperti di escursioni dai porti crocieristici di Civitavecchia (Roma), Livorno (Firenze/Toscana), Napoli (Pompei/Amalfi), Venezia e Genova. Pianifichiamo il tour con precisione intorno alla partenza della tua nave e garantiamo il rientro prima dell'orario di reimbarco."
  },
  {
    q: "Il prezzo del tour è a persona o per veicolo?",
    a: "I nostri tour sono a prezzo per veicolo, non a persona. Questo rende i tour privati un ottimo affare per famiglie o piccoli gruppi, poiché tutti viaggiano insieme in un unico veicolo confortevole a un prezzo fisso."
  },
  {
    q: "Possiamo fermarci per pranzo e vino durante un tour in Toscana?",
    a: "Assolutamente — fermarsi per la cucina toscana tradizionale e il vino locale è un momento clou di questi tour. Possiamo suggerire trattorie e cantine specifiche, oppure prenotare posti in anticipo. Il tempo di attesa durante il pasto è incluso nel prezzo del tour."
  },
  {
    q: "Qual è il modo migliore per vivere la Costiera Amalfitana senza guidare da soli?",
    a: "Un tour privato in taxi è il modo migliore per affrontare le strade strette e tortuose della Costiera Amalfitana. Il tuo autista professionista gestisce tutte le curve impegnative mentre tu ti rilassi e goditi uno dei paesaggi costieri più spettacolari d'Italia."
  },
  {
    q: "Con quanto anticipo devo prenotare un tour privato?",
    a: "Consigliamo di prenotare con almeno 3–5 giorni di anticipo per percorsi popolari come Roma, Amalfi e Toscana. Nei mesi estivi di alta stagione (giugno–agosto) e nei giorni festivi italiani, prenotare con 2–4 settimane di anticipo garantisce la disponibilità."
  }
];

const pricing: PricingTier[] = [
  { label: "Tour Mezza Giornata", price: "Da €200", note: "4 ore · 1 area di destinazione" },
  { label: "Tour Giornata Intera", price: "Da €380", note: "8 ore · Più tappe", popular: true },
  { label: "Tour Multi-Giorno", price: "Su misura", note: "Grande tour dell'Italia di 2–5 giorni" },
];

const popularTours = [
  { name: "Tour di un Giorno: Colosseo e Vaticano", path: "/attraction-transfer/vatican-museums-taxi-transfer" },
  { name: "Giro Panoramico sulla Costiera Amalfitana", path: "/attraction-transfer/amalfi-coast-taxi-transfer" },
  { name: "Vino e Campagna in Toscana", path: "/city/florence" },
  { name: "Gita di un Giorno al Lago di Como e Bellagio", path: "/attraction-transfer/lake-como-taxi-transfer" },
  { name: "Pompei ed Ercolano da Napoli", path: "/attraction-transfer/pompeii-taxi-transfer" },
  { name: "Escursione tra le Montagne delle Dolomiti", path: "/attraction-transfer/dolomites-taxi-transfer" },
];

export default function PrivateToursPageIt() {
  const url = "https://www.italytaxiservice.com/it/servizi/tour-privati";

  return (
    <main className="min-h-screen font-inter">
      <ServiceSchema name="Tour Turistici Privati in Italia" description="Tour privati in taxi premium e personalizzabili verso le mete più iconiche d'Italia." url={url} />
      <Navbar />

      <PageHero
        titleTop="Scopri l'Italia con"
        titleBottom="Tour Privati in Taxi"
        description="Tour privati personalizzati verso le destinazioni più iconiche d'Italia. Costiera Amalfitana, Toscana, Roma, Vaticano e altro — secondo i tuoi tempi, al tuo ritmo."
        backgroundImage="/images/hero.png"
        buttonText="Progetta il Tuo Tour Privato"
        breadcrumbs={[
          { name: "Servizi", item: "/it/servizi" },
          { name: "Tour Privati", item: "/it/servizi/tour-privati" }
        ]}
      />

      <ServicePageContent
        introTitle="Il Tuo Viaggio Personale Attraverso l'Italia — A Modo Tuo"
        introParagraphs={[
          "L'Italia racchiude così tante destinazioni straordinarie in un Paese relativamente compatto che può essere davvero difficile scegliere cosa vedere e come raggiungerlo in modo efficiente. I tour di gruppo ti fanno passare velocemente accanto a ciò che ti interessa davvero. I mezzi pubblici non possono raggiungere i borghi a picco sul mare della Costiera Amalfitana o le tenute vinicole remote della Toscana.",
          "I nostri tour privati in taxi risolvono tutto questo. Ci dici cosa vuoi vedere, progettiamo il percorso perfetto, il tuo taxi esperto ti preleva dal tuo hotel e trascorri la giornata scoprendo l'Italia esattamente al ritmo che ti si addice.",
          "Da un'esplorazione di mezza giornata delle antiche rovine di Roma a un grande tour di cinque giorni che tocca Milano, il Lago di Como, Venezia, Firenze e la Costiera Amalfitana, creiamo esperienze intorno a ciò che conta di più per te — non un itinerario preconfezionato."
        ]}
        detailTitle="Cosa Rende Diversi i Nostri Tour Privati"
        detailParagraphs={[
          "La differenza fondamentale tra un tour privato in taxi e un'escursione di gruppo è l'assenza di compromessi. In un tour di gruppo, visiti ciò che ha votato la maggioranza, ti muovi quando lo dice la guida e trascorri il tuo tempo in compagnia di persone che potrebbero non condividere i tuoi interessi. In un tour privato, ogni decisione è tua.",
          "Vuoi trascorrere due ore in una singola cantina toscana invece di visitarne frettolosamente tre? Fatto. Vuoi fermarti a un punto panoramico che non fa parte di nessun itinerario standard perché l'hai notato su una rivista? Assolutamente sì. Vuoi saltare le sezioni affollate di Pompei e concentrarti esclusivamente sulle terme meno visitate? Il tuo autista saprà esattamente dove andare.",
          "I nostri autisti non sono semplici conducenti passivi — sono compagni coinvolti e competenti che amano condividere la loro conoscenza dell'Italia. Sanno quali punti panoramici sono migliori con la luce del mattino, quali ristoranti sono davvero locali e quali visite è meglio programmare per evitare la folla peggiore.",
          "Le escursioni dai porti crocieristici sono una delle nostre specialità più richieste. Ti preleviamo dal molo di Civitavecchia, Livorno, Napoli o Venezia e costruiamo l'intera giornata intorno all'orario di reimbarco della tua nave — con un rientro garantito che ti lascia un margine comodo prima della partenza.",
          "Per le famiglie, i nostri tour eliminano tutta la pressione logistica che deriva dal viaggiare con bambini. Non ci sono bagagli da trascinare nelle stazioni della metro, nessuna coincidenza persa con un autobus e nessun ritmo affrettato. I bambini si godono il viaggio, i genitori si godono l'esperienza."
        ]}
        benefits={[
          "Itinerario completamente personalizzabile, progettato intorno ai tuoi interessi",
          "Prelievo direttamente dal tuo hotel, Airbnb o porto crociere",
          "Nessun prezzo a persona — un unico prezzo fisso per veicolo per tutti",
          "Autisti locali esperti con profonda conoscenza delle destinazioni",
          "Ritmo flessibile — fermati quanto o quanto poco desideri",
          "Soste per pranzo e vino incluse e incoraggiate",
          "Escursioni dal porto crociere con garanzia dell'orario di reimbarco",
          "Soste fotografiche nei migliori punti panoramici",
          "Assistenza nella prenotazione di guide autorizzate per gli interni dei musei",
          "Perfetto per famiglie, coppie e piccoli gruppi fino a 8 persone",
          "Ritmo adatto ai bambini e seggiolini disponibili",
          "Pianificazione di grandi tour multi-giorno dell'Italia disponibile"
        ]}
        pricingTitle="Prezzi dei Tour Privati"
        pricing={pricing}
        relatedLinks={[
          { label: "Taxi a Ore", href: "/it/servizi/taxi-a-ore" },
          { label: "Trasferimenti Città-Città", href: "/it/servizi/trasferimenti-citta-citta" },
          { label: "Trasferimenti Porto Crociere", href: "/it/servizi/trasferimenti-porto-crociere" },
          { label: "Guida alla Costiera Amalfitana", href: "/city/amalfi-coast" },
          { label: "Informazioni di Viaggio sulla Toscana", href: "/city/florence" },
          { label: "Punti Salienti di Roma", href: "/city/rome" },
        ]}
      />

      {/* Percorsi Tour Popolari */}
      <section className="py-20 bg-white font-inter">
        <div className="container mx-auto px-6 max-w-5xl">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4 text-center">Itinerari Popolari</p>
          <h2 className="text-4xl font-extrabold text-navy mb-12 text-center">I Tour Turistici Più Richiesti</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTours.map((tour, i) => (
              <Link
                key={i}
                href={tour.path}
                className="p-6 rounded-2xl border border-gray-100 font-bold text-navy block hover:border-gold hover:text-gold hover:shadow-xl transition-all text-center"
              >
                {tour.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />
      <FAQSection faqs={faqs} title="FAQ sui Tour Privati" badge="Pianifica la Tua Esperienza" />
      <Footer />
    </main>
  );
}
