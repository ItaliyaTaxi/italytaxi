import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';
import { CheckCircle, MessageCircle, Clock, Shield, CreditCard, Users, Star, ChevronRight } from 'lucide-react';
import TaxiButton from '@/components/TaxiButton';
import { enHreflangFor } from '@/lib/i18n/page-registry';

export const metadata: Metadata = {
  title: "FAQ Servizio Taxi | Informazioni Utili",
  description: "Guida completa alle FAQ di Italy Taxi Service. Scopri i transfer aeroportuali, i prezzi, la cancellazione, i seggiolini per bambini, i conti aziendali e come prenotare in Italia.",
  alternates: {
    canonical: "/it/domande-frequenti",
    languages: enHreflangFor('/it/domande-frequenti'),
  },
};

const generalFaqs = [
  { q: "Come prenoto un transfer in taxi privato in Italia?", a: "Prenota direttamente tramite il nostro modulo di prenotazione online, invia un'email a italytaxiservicee@gmail.com o scrivici su WhatsApp. Riceverai una conferma immediata con i dettagli del tuo autista, le informazioni sul veicolo e un prezzo fisso." },
  { q: "Il prezzo è a persona o per veicolo?", a: "Tutti i prezzi sono per veicolo, non a persona. Che tu prenoti una berlina per 1 persona o un minivan per 7, la tariffa resta lo stesso prezzo fisso concordato alla prenotazione — un ottimo affare per famiglie e gruppi." },
  { q: "Quando e come pago il mio transfer?", a: "Le opzioni di pagamento vengono confermate alla prenotazione. Accettiamo carte di credito e debito online, oppure pagamento in contanti o con carta al tuo autista al termine del viaggio. Non ci sono costi nascosti — ciò che hai pagato è ciò che devi." },
  { q: "Offrite il servizio di accoglienza in aeroporto?", a: "Sì. Per tutti i prelievi in aeroporto, il tuo autista attende all'interno della sala arrivi con un cartello con il tuo nome. Non dovrai cercare un taxi fuori — sarà il tuo autista a trovarti." },
  { q: "Qual è la vostra politica di cancellazione?", a: "Offriamo la cancellazione gratuita fino a 24 ore prima del prelievo programmato. Le cancellazioni tra 24 e 6 ore possono comportare un addebito del 50%. Le cancellazioni entro 6 ore dal prelievo non sono rimborsabili." },
];

const airportFaqs = [
  { q: "Monitorate automaticamente i ritardi dei voli?", a: "Sì. Monitoriamo tutti i voli in tempo reale. Se il tuo aereo è in ritardo o arriva in anticipo, il tuo autista adegua automaticamente l'orario di prelievo senza costi aggiuntivi per te." },
  { q: "Quanto dura l'attesa gratuita in aeroporto?", a: "Includiamo 60 minuti di attesa gratuita dopo l'effettivo atterraggio per i voli internazionali e 30 minuti per quelli nazionali. Questo tiene conto di immigrazione, bagagli e dogana." },
  { q: "Quali aeroporti italiani coprite?", a: "Operiamo da tutti i principali aeroporti italiani: Roma FCO e CIA, Milano MXP e LIN, Venezia VCE, Firenze FLR, Napoli NAP, Catania, Palermo, Bologna, Bari e tutti gli aeroporti regionali." },
  { q: "Posso prenotare contemporaneamente anche il transfer di ritorno?", a: "Sì — e lo consigliamo. Prenota entrambe le tratte insieme per garantire la disponibilità e semplificare il coordinamento. Aggiungi semplicemente la data di ritorno e i dettagli del volo durante la prenotazione." },
];

const vehicleFaqs = [
  { q: "Sono disponibili i seggiolini per bambini?", a: "Sì. Ovetti, seggiolini fronte-marcia e rialzi sono forniti gratuitamente su richiesta. Specifica l'età e il peso di ogni bambino al momento della prenotazione e l'attrezzatura corretta sarà preinstallata." },
  { q: "Quali veicoli sono disponibili?", a: "La nostra flotta include: Berline Economy (fino a 3 passeggeri), Berline Business (fino a 3 passeggeri, categoria superiore), Minivan (fino a 7–8 passeggeri) e SUV. Abbiniamo automaticamente il veicolo alla dimensione del tuo gruppo e alla quantità di bagagli." },
  { q: "È disponibile il Wi-Fi nei veicoli?", a: "Il Wi-Fi è disponibile su richiesta nei nostri veicoli executive e business class. Indica questa esigenza nella tua prenotazione e assegneremo un'auto adeguatamente attrezzata." },
  { q: "Potete gestire grandi quantità di bagagli?", a: "Sì. Le nostre berline ospitano 2 valigie grandi più bagagli a mano. I minivan accolgono l'intero bagaglio da crociera o da sci. Comunicaci il numero di bagagli alla prenotazione e ci assicureremo che venga assegnato il veicolo giusto." },
];

const pricingFaqs = [
  { q: "Ci sono costi nascosti come supplementi notturni o pedaggi?", a: "No. Ogni preventivo è completamente onnicomprensivo. Pedaggi, tasse autostradali, carburante, bagagli e tempo di attesa entro il periodo di tolleranza sono tutti inclusi. I transfer notturni e festivi vengono quotati in modo trasparente — nessun costo a sorpresa all'arrivo." },
  { q: "Come ottengo un prezzo per un percorso non elencato sul sito?", a: "Contattaci su WhatsApp o tramite il modulo di contatto con gli indirizzi esatti di prelievo e destinazione. Ti forniremo un preventivo fisso personalizzato in pochi minuti." },
  { q: "Offrite sconti per i gruppi?", a: "Per gruppi numerosi (8+ passeggeri) e conti aziendali, offriamo tariffe negoziate. Contatta direttamente il nostro team per discutere le opzioni." },
  { q: "Posso modificare la mia prenotazione dopo la conferma?", a: "Sì. Contattaci su WhatsApp o via email il prima possibile. Gestiamo modifiche di orario di prelievo, tipo di veicolo e numero di passeggeri in base alla disponibilità." },
];

export default function FaqPageIt() {
  return (
    <main className="min-h-screen text-navy-rich font-inter">
      <Navbar />

      <PageHero
        titleTop="Domande Frequenti"
        titleBottom="Italy Taxi Service"
        description="Tutto ciò che devi sapere su prenotazioni, prezzi, veicoli, aeroporti e il nostro servizio in tutta Italia. Non trovi la tua risposta? Contattaci 24/7."
        backgroundImage="/images/hero.png"
        breadcrumbs={[{ name: "FAQ", item: "/it/domande-frequenti" }]}
      />

      {/* Riepilogo Perché Sceglierci */}
      <section className="py-20 bg-white font-inter">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Panoramica Rapida</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy">Cosa ci Rende Diversi</h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Clock className="w-6 h-6 text-gold" />, title: "Disponibilità 24/7", desc: "Voli mattutini presto e arrivi a mezzanotte — ci siamo sempre." },
              { icon: <CreditCard className="w-6 h-6 text-gold" />, title: "Prezzi Fissi", desc: "Il tuo prezzo è bloccato alla prenotazione. Niente tassametri, niente sorprese." },
              { icon: <Shield className="w-6 h-6 text-gold" />, title: "Autorizzati e Assicurati", desc: "Tutti gli autisti possiedono licenza N.C.C. professionale e copertura assicurativa completa." },
              { icon: <Users className="w-6 h-6 text-gold" />, title: "Parlano Inglese", desc: "Comunica facilmente con ogni membro della nostra rete di autisti." },
              { icon: <CheckCircle className="w-6 h-6 text-gold" />, title: "Monitoraggio Volo", desc: "Monitoriamo gli arrivi in tempo reale. I ritardi non sono mai un tuo problema." },
              { icon: <Star className="w-6 h-6 text-gold" />, title: "Valutazione 4.9★", desc: "Servizio costantemente a 5 stelle su oltre 500 recensioni verificate." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-gold transition-all">
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schema FAQPage combinato — entità unica e autorevole per questa pagina */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              ...generalFaqs,
              ...airportFaqs,
              ...vehicleFaqs,
              ...pricingFaqs,
            ].map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": { "@type": "Answer", "text": faq.a }
            }))
          })
        }}
      />

      {/* Categorie FAQ — schema disabilitato per sezione per evitare duplicati */}
      <FAQSection faqs={generalFaqs} title="Domande Generali sulla Prenotazione" badge="Per Iniziare" includeSchema={false} />
      <FAQSection faqs={airportFaqs} title="Domande sui Transfer Aeroportuali" badge="Aeroporti e Arrivi" includeSchema={false} />
      <FAQSection faqs={vehicleFaqs} title="Domande su Veicoli e Comfort" badge="Flotta ed Equipaggiamento" includeSchema={false} />
      <FAQSection faqs={pricingFaqs} title="Domande su Prezzi e Pagamenti" badge="Tariffe e Costi" includeSchema={false} />

      {/* Hai ancora domande */}
      <section className="py-20 bg-navy font-inter relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
          <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Hai Ancora Domande?</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Siamo Disponibili 24/7</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">Non trovi quello che cerchi? Il nostro team risponde in pochi minuti via WhatsApp o email — in qualsiasi momento, giorno e notte.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <TaxiButton href="/it/contatti">Inviaci un Messaggio</TaxiButton>
            <a href="https://wa.me/923148932631?text=Ciao%2C+ho+una+domanda+sulla+prenotazione+di+un+taxi+in+Italia." target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold hover:bg-[#1ebe57] transition-all shadow-lg hover:scale-105">
              <MessageCircle className="w-5 h-5" /> Scrivici su WhatsApp
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {[
              { label: "Transfer Aeroportuali", href: "/it/servizi/trasferimenti-aeroportuali" },
              { label: "Città-Città", href: "/it/servizi/trasferimenti-citta-citta" },
              { label: "Trasferimenti Hotel", href: "/it/servizi/trasferimenti-hotel" },
              { label: "Tour Privati", href: "/it/servizi/tour-privati" },
              { label: "Prenota Ora", href: "/book-now" },
            ].map((l, i) => (
              <Link key={i} href={l.href} className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 text-white text-sm hover:border-gold hover:text-gold transition-all">
                <ChevronRight className="w-4 h-4" />{l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
