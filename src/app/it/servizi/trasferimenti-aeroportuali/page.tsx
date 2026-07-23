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
  title: "Transfer Aeroportuali in Italia | Taxi Privato",
  description: "Prenota transfer aeroportuali privati e a prezzo fisso in tutta Italia. Autisti professionisti di lingua inglese per Roma FCO, Milano MXP, Venezia VCE e oltre 30 aeroporti. Servizio 24/7.",
  alternates: {
    canonical: "/it/servizi/trasferimenti-aeroportuali",
    languages: enHreflangFor('/it/servizi/trasferimenti-aeroportuali'),
  },
};

const faqs = [
  {
    q: "Dove incontrerò il mio autista in aeroporto?",
    a: "Il tuo autista ti aspetterà all'interno della sala arrivi, con un cartello personalizzato con il tuo nome, subito dopo l'uscita del ritiro bagagli. Riceverai il numero di cellulare dell'autista prima dell'atterraggio del tuo volo, così potrai contattarlo direttamente. Nei principali aeroporti come Roma Fiumicino e Milano Malpensa, i nostri autisti si posizionano nei punti d'incontro designati nel terminal arrivi internazionali, così sarai facile da individuare anche nei momenti di maggiore affluenza."
  },
  {
    q: "Cosa succede se il mio volo per l'Italia è in ritardo?",
    a: "Monitoriamo tutti i voli in tempo reale tramite software di tracciamento live. Se il tuo volo è in ritardo o arriva in anticipo, il tuo autista adegua automaticamente l'orario di prelievo senza costi aggiuntivi. Non c'è alcuna penale per i ritardi del volo, che si tratti di 30 minuti o di diverse ore. Il tuo autista sarà lì, qualunque sia l'orario di atterraggio."
  },
  {
    q: "È inclusa l'attesa gratuita nel prezzo del transfer aeroportuale?",
    a: "Sì. Includiamo 60 minuti di attesa gratuita dopo l'orario di atterraggio previsto per i voli internazionali e 30 minuti per i voli nazionali. Questo ti dà tempo sufficiente per superare i controlli di immigrazione, ritirare i bagagli e passare la dogana senza fretta. Se hai bisogno di ulteriore tempo di attesa, si applica un piccolo supplemento, che comunicheremo sempre in anticipo."
  },
  {
    q: "Servite tutti gli aeroporti italiani, compresi quelli regionali più piccoli?",
    a: "Sì. Operiamo da tutti i principali aeroporti italiani — Roma Fiumicino (FCO), Roma Ciampino (CIA), Milano Malpensa (MXP), Milano Linate (LIN), Venezia Marco Polo (VCE), Firenze (FLR), Napoli (NAP), Catania, Palermo, Bari, Bologna, Genova, Torino, Pisa, Verona, Bergamo (BGY), Brindisi, Cagliari e tutti gli aeroporti regionali. Se il tuo aeroporto non è elencato, contattaci pure — quasi certamente lo copriamo."
  },
  {
    q: "I prezzi dei transfer aeroportuali sono fissi o a tassametro?",
    a: "I nostri prezzi sono fissi al 100% dal momento della prenotazione. Non ci sono costi nascosti per traffico, pedaggi, bagagli o tempo di attesa entro il periodo di tolleranza. Il prezzo che vedi quando confermi la prenotazione è l'importo esatto che pagherai — nient'altro, indipendentemente dalla durata del viaggio o dalle condizioni stradali riscontrate."
  },
  {
    q: "Posso prenotare contemporaneamente anche il transfer di ritorno?",
    a: "Assolutamente sì. Ti incoraggiamo a prenotare entrambe le tratte del tuo viaggio insieme, per garantire la disponibilità e semplificare il coordinamento. Aggiungi semplicemente la data di ritorno, l'orario di partenza e i dettagli del volo durante la prenotazione e confermeremo entrambe le prenotazioni. Prenotare entrambi i viaggi insieme semplifica anche la logistica — un solo riferimento di prenotazione, un solo pagamento, un unico fornitore di fiducia."
  },
  {
    q: "Che tipo di veicoli sono disponibili per i transfer aeroportuali?",
    a: "La nostra flotta spazia da berline standard (fino a 3 passeggeri con bagagli) a eleganti berline executive Mercedes-Benz Classe E e spaziosi minivan da 8 posti — perfetti per famiglie e gruppi. Tutti i veicoli sono climatizzati, puliti e dotati di prese di ricarica. I veicoli business class includono interni in pelle e Wi-Fi gratuito su richiesta."
  },
  {
    q: "Con quanto anticipo devo prenotare il mio taxi per l'aeroporto in Italia?",
    a: "Consigliamo di prenotare con almeno 24 ore di anticipo per garantire la disponibilità del veicolo, anche se le prenotazioni in giornata sono spesso possibili. Nei periodi di alta stagione — luglio e agosto, Pasqua, Natale e le festività italiane — è fortemente consigliato prenotare con una settimana o più di anticipo, in particolare per i voli mattutini presto o notturni, quando la disponibilità degli autisti è naturalmente più limitata."
  }
];

const pricing: PricingTier[] = [
  { label: "Berlina Economy", price: "Da €45", note: "Roma FCO → Centro città (fino a 3 pax)" },
  { label: "Business Class", price: "Da €75", note: "Milano MXP → Centro città (fino a 3 pax)", popular: true },
  { label: "Minivan di Gruppo", price: "Da €99", note: "Venezia VCE → Centro città (fino a 7 pax)" },
];

const routes: RouteItem[] = [
  { from: "Roma Fiumicino (FCO)", to: "Centro di Roma", duration: "~35–55 min", price: "Da €45" },
  { from: "Roma Ciampino (CIA)", to: "Centro di Roma", duration: "~25–40 min", price: "Da €35" },
  { from: "Milano Malpensa (MXP)", to: "Centro di Milano", duration: "~50–70 min", price: "Da €75" },
  { from: "Aeroporto di Venezia (VCE)", to: "Venezia / Mestre", duration: "~20–30 min", price: "Da €55" },
  { from: "Aeroporto di Firenze (FLR)", to: "Centro di Firenze", duration: "~20–30 min", price: "Da €35" },
  { from: "Aeroporto di Napoli (NAP)", to: "Centro di Napoli", duration: "~20–35 min", price: "Da €40" },
];

export default function AirportTransfersPageIt() {
  const url = "https://www.italytaxiservice.com/it/servizi/trasferimenti-aeroportuali";

  return (
    <main className="min-h-screen text-navy-rich font-inter">
      <ServiceSchema name="Transfer Aeroportuali Privati in Italia" description="Transfer aeroportuali privati affidabili a prezzo fisso da tutti i principali aeroporti italiani con autisti professionisti di lingua inglese." url={url} />
      <Navbar />

      <PageHero
        titleTop="Transfer Aeroportuali Privati"
        titleBottom="Affidabili in Tutta Italia"
        description="Prelievo e consegna aeroportuale a prezzo fisso in ogni principale aeroporto italiano. Autisti professionisti, monitoraggio del volo e 60 minuti di attesa gratuita — garantiti."
        backgroundImage="/images/hero.png"
        buttonText="Prenota il Transfer Aeroportuale"
        breadcrumbs={[
          { name: "Servizi", item: "/it/servizi" },
          { name: "Transfer Aeroportuali", item: "/it/servizi/trasferimenti-aeroportuali" }
        ]}
      />

      <ServicePageContent
        introTitle="Il Servizio di Transfer Aeroportuale Privato più Affidabile d'Italia"
        introParagraphs={[
          "Arrivare in un nuovo Paese dovrebbe essere emozionante, non stressante. Italy Taxi Service elimina l'incertezza del trasporto a terra fornendo transfer privati prenotati in anticipo e a prezzo fisso da ogni principale aeroporto italiano fino al tuo hotel, Airbnb o destinazione finale. Niente code per il taxi, nessuna barriera linguistica, nessuna ansia da tassametro e nessun costo nascosto — solo un autista professionista che ti aspetta nel momento in cui esci dagli arrivi.",
          "A differenza dei taxi pubblici in coda fuori dal terminal, i nostri autisti ti aspettano all'interno della sala arrivi — con un cartello personalizzato con il tuo nome — prima ancora che arrivino i tuoi bagagli. Che tu atterri a Roma Fiumicino alle 6 del mattino dopo un volo transatlantico notturno o a Milano Malpensa a mezzanotte dopo una coincidenza in ritardo, noi ci siamo. Il nostro servizio è attivo 24 ore su 24, 365 giorni all'anno.",
          "Monitoriamo il tuo volo in tempo reale, così i ritardi non sono mai un tuo problema. Se il tuo aereo resta bloccato al gate, viene dirottato o atterra con due ore di ritardo, il tuo autista si adegua automaticamente. Non ti verrà addebitato il tempo di attesa extra e non arriverai mai a trovare nessun veicolo ad aspettarti. Questa è la vera affidabilità.",
          "L'Italia è servita da oltre 30 aeroporti commerciali, dai grandi hub internazionali come Roma Fiumicino (uno dei più trafficati d'Europa) a scali regionali più piccoli come Rimini, Ancona, Reggio Calabria e Trieste. La nostra rete li copre tutti. Ovunque il tuo volo ti porti in Italia, un transfer privato professionale è disponibile.",
          "Per le famiglie che arrivano con bambini, i viaggiatori anziani e i gruppi con bagagli numerosi, il nostro servizio elimina ogni possibile attrito. I seggiolini per bambini vengono installati in anticipo. Le valigie multiple sono gestite dall'autista. Il veicolo attende a bordo strada mentre completi il tuo arrivo — niente fretta, niente pesi da portare, niente confusione."
        ]}
        detailTitle="Come Funziona il Nostro Servizio di Transfer Aeroportuale"
        detailParagraphs={[
          "Prenotare il tuo transfer aeroportuale con Italy Taxi Service è interamente online e richiede meno di due minuti. Seleziona l'aeroporto di partenza, inserisci il numero di volo, scegli la destinazione e la categoria di veicolo, e conferma. Riceverai un'email immediata con tutti i dettagli della prenotazione, il numero di contatto dell'autista e una descrizione chiara di dove incontrarlo.",
          "Il giorno del viaggio, il nostro team di dispatch monitora il tuo volo in tempo reale. L'autista assegnato parte per l'aeroporto calcolando l'orario in base al tuo effettivo atterraggio — non a quello programmato — e attende nella zona di accoglienza designata all'interno della sala arrivi, ben visibile con il cartello con il tuo nome.",
          "Una volta raggiunto il veicolo, l'autista carica i tuoi bagagli e inizia il viaggio verso il tuo alloggio. All'interno del veicolo, goditi acqua in bottiglia gratuita, climatizzazione e Wi-Fi (su richiesta). La nostra flotta premium include berline Mercedes-Benz per viaggi singoli o di coppia, berline executive per i viaggiatori d'affari e spaziosi minivan per famiglie e gruppi fino a otto passeggeri.",
          "Tutti i percorsi, inclusi quelli con pedaggi autostradali come il Grande Raccordo Anulare di Roma (A90) o l'autostrada A8 verso Milano, sono inclusi nel tuo preventivo fisso. Non c'è nulla di extra da pagare all'arrivo. L'autista sceglierà il percorso più sicuro e veloce verso la tua destinazione, gestendo il traffico in modo intelligente grazie a dati in tempo reale. Se il tuo alloggio si trova all'interno di una ZTL (zona a traffico limitato), l'autista parcheggerà nel punto accessibile più vicino e ti guiderà fino all'ingresso.",
          "Per le partenze, ti prendiamo dal tuo alloggio a un orario concordato in anticipo, calcolato con un margine comodo prima della scadenza del check-in. I nostri autisti conoscono i modelli del traffico italiano, la disposizione dei terminal aeroportuali e le tendenze delle code al check-in per ogni aeroporto che serviamo. Includiamo sempre un margine di sicurezza per garantirti un arrivo tranquillo e puntuale.",
          "I viaggiatori d'affari che prenotano transfer aeroportuali per dirigenti e clienti possono richiedere la nostra opzione di viaggio silenzioso — autisti formati per rispettare la privacy professionale, disponibili ad assistere con i bagagli ed esperti nel raggiungere direttamente i distretti d'affari. Fatturazione mensile e gestione degli account aziendali sono disponibili.",
          "I transfer di ritorno vengono gestiti con la stessa precisione. Per una partenza dall'Italia, ti prendiamo all'ingresso dell'hotel, ti assistiamo con i bagagli e ti consegniamo all'ingresso corretto del terminal. L'orario di partenza viene calcolato in base all'orario di apertura del check-in del tuo volo, alla durata del viaggio nelle condizioni di traffico previste e a un margine di sicurezza che garantisce di non sentirti mai di fretta.",
          "La sicurezza è un principio fondamentale del nostro servizio. Tutti gli autisti possiedono la licenza professionale N.C.C. (Noleggio Con Conducente) — lo standard italiano per i veicoli a noleggio privati. I veicoli sono mantenuti secondo le scadenze di manutenzione del produttore, completamente assicurati e regolarmente ispezionati. Viaggi con la certezza che ogni aspetto del tuo transfer soddisfa i più alti standard professionali."
        ]}
        benefits={[
          "Monitoraggio del volo in tempo reale — il prelievo si adegua automaticamente senza costi extra",
          "Servizio di accoglienza (Meet & Greet) all'interno della sala arrivi con cartello personalizzato",
          "60 minuti di attesa gratuita per i voli internazionali, 30 minuti per quelli nazionali",
          "Prezzi fissi e onnicomprensivi dal momento della prenotazione — zero costi nascosti",
          "Autisti professionisti di lingua inglese con licenza N.C.C.",
          "Disponibilità 24/7 — voli mattutini e notturni completamente coperti",
          "Flotta premium Mercedes-Benz con aria condizionata completa",
          "Cancellazione gratuita fino a 24 ore prima del prelievo",
          "Seggiolini per bambini, rialzi e ovetti disponibili gratuitamente su richiesta",
          "Tutti i pedaggi, le tasse autostradali e i permessi ZTL inclusi nel prezzo indicato",
          "Servizio da oltre 30 aeroporti italiani, inclusi tutti gli scali regionali",
          "Conferma immediata via email con numero di contatto dell'autista e istruzioni per l'incontro"
        ]}
        pricingTitle="Esempi di Tariffe per il Transfer Aeroportuale"
        pricing={pricing}
        routesTitle="I Percorsi di Transfer Aeroportuale Più Richiesti"
        routes={routes}
        relatedLinks={[
          { label: "Trasferimenti Hotel", href: "/it/servizi/trasferimenti-hotel" },
          { label: "Trasferimenti Città-Città", href: "/it/servizi/trasferimenti-citta-citta" },
          { label: "Taxi Aziendale", href: "/it/servizi/taxi-aziendale" },
          { label: "Taxi a Roma", href: "/city/rome" },
          { label: "Taxi a Milano", href: "/city/milan" },
          { label: "Taxi a Firenze", href: "/city/florence" },
        ]}
      />

      {/* Approfondimento sui percorsi */}
      <section className="py-24 bg-white font-inter">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Copertura Aeroportuale</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight">I Principali Percorsi di Transfer Aeroportuale in Italia</h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-6" />
          </div>
          <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
            <div>
              <h3 className="text-2xl font-bold text-navy mb-3">Transfer Aeroporto di Roma Fiumicino (FCO)</h3>
              <p>L&apos;Aeroporto Internazionale Leonardo da Vinci — universalmente noto come Fiumicino — è il più grande e trafficato d&apos;Italia, con oltre 40 milioni di passeggeri all&apos;anno. Situato a 32 km a sud-ovest del centro di Roma, il viaggio verso il centro città richiede tra 35 e 55 minuti a seconda del traffico. Il nostro transfer privato da FCO al centro di Roma parte da €45 e copre tutte le destinazioni, incluso il centro storico, Trastevere, Parioli, il quartiere EUR e Ostia.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-navy mb-3">Transfer Aeroporto di Roma Ciampino (CIA)</h3>
              <p>L&apos;aeroporto di Ciampino serve compagnie low-cost come Ryanair e Wizz Air ed è situato a 15 km a sud-est di Roma. Nonostante sia più piccolo e più vicino alla città, i taxi locali senza tassametro a Ciampino sono noti per applicare tariffe eccessive ai turisti. Il nostro transfer privato a prezzo fisso da Ciampino al centro di Roma parte da €35 e, con un tempo di percorrenza medio di 40 minuti, è uno dei collegamenti aeroporto-città più veloci d&apos;Italia.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-navy mb-3">Transfer Aeroporto di Milano Malpensa (MXP)</h3>
              <p>Milano Malpensa è la principale porta d&apos;ingresso internazionale del Nord Italia e uno dei 20 aeroporti più trafficati d&apos;Europa. Situato a 50 km a nord-ovest del centro di Milano, il transfer privato in taxi richiede circa 50–70 minuti tramite l&apos;autostrada A8. Il nostro servizio copre Malpensa verso tutti i quartieri di Milano, tra cui Centro Storico, Porta Nuova, CityLife e il complesso fieristico di Fiera Milano — oltre a transfer verso il Lago di Como, il Lago Maggiore, Bergamo e il confine svizzero.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-navy mb-3">Transfer Aeroporto di Venezia Marco Polo (VCE)</h3>
              <p>L&apos;aeroporto di Venezia richiede una conoscenza locale particolare. L&apos;errore più comune commesso dai turisti è tentare di utilizzare i taxi acquei pubblici o privati — panoramici ma estremamente costosi e logisticamente complessi con bagagli pesanti. Il nostro transfer privato via terra da VCE ti porta rapidamente al tuo hotel a Mestre (20 minuti) o al punto di sosta di Piazzale Roma a Venezia (25 minuti), da dove facchini e collegamenti vaporetto ti condurranno al tuo alloggio nella città lagunare.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-navy mb-3">Transfer Aeroporti di Firenze e Napoli</h3>
              <p>L&apos;aeroporto di Firenze Amerigo Vespucci (FLR) si trova a soli 5 km dal centro storico, rendendolo uno dei collegamenti aeroportuali più comodi d&apos;Italia — tipicamente solo 20–25 minuti da Piazza del Duomo. L&apos;aeroporto internazionale di Napoli (NAP) è altrettanto vicino alla città (7 km) e funge da porta d&apos;accesso alla Costiera Amalfitana, Pompei, Sorrento e Capri. Offriamo collegamenti da Napoli NAP verso tutte le destinazioni della Campania, inclusa l&apos;intera costiera amalfitana.</p>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />

      <FAQSection faqs={faqs} title="Domande Frequenti sui Transfer Aeroportuali" badge="Le Tue Domande, Risolte" />

      <Footer />
    </main>
  );
}
