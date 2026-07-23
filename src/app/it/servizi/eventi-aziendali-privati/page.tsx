import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import ServiceSchema from '@/components/ServiceSchema';
import Link from 'next/link';
import { Metadata } from 'next';
import { CheckCircle, ChevronRight, MessageCircle, Star, Clock, Car, Users } from 'lucide-react';
import TaxiButton from '@/components/TaxiButton';
import { enHreflangFor } from '@/lib/i18n/page-registry';

export const metadata: Metadata = {
  title: "Trasporto Eventi in Italia | Taxi per Eventi Aziendali e Privati",
  description: "Trasporto taxi professionale per eventi aziendali, cene di gala, sfilate di moda, anniversari e feste private in tutta Italia. Flotta di lusso, autisti in abito, logistica in tempo reale.",
  alternates: {
    canonical: "/it/servizi/eventi-aziendali-privati",
    languages: enHreflangFor('/it/servizi/eventi-aziendali-privati'),
  },
  openGraph: {
    title: "Trasporto Eventi in Italia | Taxi per Eventi Aziendali e Privati",
    description: "Taxi privato di lusso per eventi aziendali, gala e feste private in tutta Italia. Autisti in abito, coordinamento multi-veicolo, prezzi fissi.",
    url: "https://www.italytaxiservice.com/it/servizi/eventi-aziendali-privati",
    locale: 'it_IT',
    images: [{ url: '/images/hero.webp', width: 1200, height: 630, alt: 'Trasporto per Eventi in Italia' }],
  },
};

const eventTypes = [
  { title: "Cene di Gala Aziendali", desc: "Coordinamento multi-veicolo per arrivi e partenze di ospiti executive nelle location più prestigiose d'Italia — dai ristoranti panoramici milanesi ai palazzi romani." },
  { title: "Sfilate di Moda ed Eventi di Brand", desc: "Trasporto discreto e puntuale per ospiti, modelle e dirigenti durante la Milano Fashion Week, eventi di moda a Firenze e lanci privati di brand." },
  { title: "Anniversari e Celebrazioni Importanti", desc: "Trasferimenti privati di gruppo per compleanni importanti, cene di anniversario, feste di pensionamento ed eventi di riunione familiare in location italiane esclusive." },
  { title: "Trasferimenti per Conferenze e Seminari", desc: "Servizi navetta coordinati tra hotel, centri congressi e location per gala per programmi aziendali di più giorni a Roma, Milano e Venezia." },
  { title: "Feste Private ed Eventi in Villa", desc: "Trasporto ospiti punto a punto per feste private in ville, eventi in tenute e celebrazioni esclusive in campagna in Toscana, Lago di Como e Puglia." },
  { title: "Trasferimenti per Produzioni Cinematografiche", desc: "Veicoli su chiamata per troupe di produzione, trasporto talenti e logistica da location a location durante riprese cinematografiche e produzioni pubblicitarie in tutta Italia." },
];

const eventFaqs = [
  {
    q: "Che tipo di eventi coprite con il trasporto privato?",
    a: "Offriamo trasporto a terra su misura per gala aziendali, sfilate di moda, programmi di conferenze, cene di anniversario, produzioni cinematografiche, feste private e qualsiasi evento che richieda una logistica multi-veicolo coordinata. I matrimoni sono coperti dal nostro servizio dedicato di trasferimenti matrimoniali."
  },
  {
    q: "Potete gestire trasferimenti per ospiti in arrivo da più aeroporti?",
    a: "Sì — coordinare gli arrivi da più aeroporti o hotel nello stesso programma evento è una delle nostre specialità principali. Gestiamo centralmente i tempi di dispatch degli autisti e comunichiamo proattivamente in caso di ritardo nel viaggio di qualsiasi ospite."
  },
  {
    q: "Quanti veicoli potete impiegare per un singolo evento?",
    a: "La nostra rete può schierare più veicoli simultaneamente in tutta Italia. Per grandi eventi, scaliamo da 3 a oltre 20 veicoli con logistica coordinata centralmente. Assegnazione dei veicoli, instradamento e tempistiche sono gestiti come un'operazione unificata."
  },
  {
    q: "Gli autisti possono rimanere in standby presso una location durante un evento?",
    a: "Sì. Offriamo un servizio orario \"a disposizione\" in cui uno o più autisti restano presso la location per tutta la durata dell'evento, per gestire partenze spontanee, movimenti VIP e rientri post-evento."
  },
  {
    q: "Gli autisti per eventi si vestono formalmente?",
    a: "Sì. Gli autisti assegnati agli eventi indossano abito scuro e cravatta come standard. Per specifiche esigenze di uniforme aziendale o codici di abbigliamento brandizzati, contattaci in anticipo e coordineremo di conseguenza."
  },
  {
    q: "Quanto tempo di preavviso serve per prenotare il trasporto per un evento?",
    a: "Per eventi che richiedono 3 o più veicoli, consigliamo almeno 4 settimane di preavviso. Per eventi più piccoli (1–2 veicoli), 48–72 ore sono generalmente sufficienti. I periodi di punta a Milano (Fashion Week) e Roma (giugno–settembre) richiedono tempi di preavviso più lunghi."
  },
  {
    q: "Sono disponibili ricevute e fatture con IVA per gli eventi aziendali?",
    a: "Sì. Emettiamo fatture professionali con IVA adatte alla rendicontazione delle spese aziendali. Sono disponibili conti aziendali con fatturazione mensile per le organizzazioni che richiedono trasporto regolare per eventi in tutta Italia."
  },
];

export default function WeddingEventsPageIt() {
  const url = "https://www.italytaxiservice.com/it/servizi/eventi-aziendali-privati";

  return (
    <main className="min-h-screen font-inter">
      <ServiceSchema
        name="Trasporto Eventi Aziendali e Privati in Italia"
        description="Taxi privato professionale e coordinamento multi-veicolo per gala aziendali, eventi di moda, conferenze e feste private in tutta Italia."
        url={url}
      />
      <Navbar />

      <PageHero
        titleTop="Trasporto per Eventi"
        titleBottom="Aziendali e Privati in Italia"
        description="Logistica multi-veicolo di lusso per gala aziendali, sfilate di moda, conferenze e celebrazioni private a Roma, Milano, Firenze, Venezia e oltre."
        backgroundImage="/images/hero.png"
        buttonText="Richiedi un Preventivo Evento"
        breadcrumbs={[
          { name: "Servizi", item: "/it/servizi" },
          { name: "Trasporto Eventi", item: "/it/servizi/eventi-aziendali-privati" }
        ]}
      />

      {/* Intro */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Logistica Evento Senza Interruzioni</p>
              <h2 className="text-4xl font-extrabold text-navy mb-6 leading-tight">
                Un Trasporto a Terra che Valorizza Ogni Evento
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Gli eventi in Italia richiedono un trasporto all'altezza del loro standard. Che tu stia organizzando un gala aziendale in un palazzo milanese, gestendo la logistica degli ospiti per una sfilata della fashion week o coordinando gli arrivi per una conferenza di più giorni, la qualità del tuo trasporto a terra è visibile a ogni partecipante.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Italy Taxi Service schiera flotte di veicoli privati coordinate per eventi di qualsiasi dimensione. Gestiamo briefing per gli autisti, tempistiche di partenza, logistica di accesso alla location e comunicazione in tempo reale — così il tuo evento si svolge senza un solo ritardo nei trasporti.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Coordinamento Multi-Veicolo", "Autisti in Abito", "Accesso ZTL", "Fatturazione Aziendale"].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-gold/10 text-navy font-bold text-sm rounded-full border border-gold/20">{tag}</span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Users className="w-6 h-6 text-gold mx-auto mb-2" />, stat: "3–20+", label: "Veicoli per Evento" },
                { icon: <Star className="w-6 h-6 text-gold mx-auto mb-2" />, stat: "4.9★", label: "Valutazione Clienti" },
                { icon: <Clock className="w-6 h-6 text-gold mx-auto mb-2" />, stat: "24/7", label: "Supporto Durante l'Evento" },
                { icon: <Car className="w-6 h-6 text-gold mx-auto mb-2" />, stat: "Lusso", label: "Flotta Mercedes" },
              ].map((s, i) => (
                <div key={i} className="p-6 rounded-2xl border border-gray-100 text-center shadow-sm hover:border-gold hover:shadow-md transition-all">
                  {s.icon}
                  <p className="text-2xl font-extrabold text-navy">{s.stat}</p>
                  <p className="text-gray-500 text-sm font-semibold mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tipi di Evento */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Eventi che Copriamo</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-navy leading-tight">Trasporto per Eventi di Ogni Occasione</h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {eventTypes.map((event, i) => (
              <div key={i} className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-gold transition-all group">
                <h3 className="font-extrabold text-navy text-lg mb-3 group-hover:text-gold transition-colors">{event.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cosa è Incluso */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#F4C430 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">Inclusioni Standard</p>
            <h2 className="text-4xl font-extrabold text-white">Tutto Incluso in Ogni Prenotazione Evento</h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-6" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Coordinatore logistico dedicato per l'evento il giorno stesso",
              "Autisti in abito formale per tutte le prenotazioni evento",
              "Coordinamento flotta multi-veicolo da un unico punto di contatto",
              "Accesso autorizzato ZTL a location storiche e limitate",
              "Tracciamento dei veicoli in tempo reale per tutto l'evento",
              "Arrivi ospiti da aeroporti, hotel e stazioni ferroviarie",
              "Gestione delle rotazioni navetta post-evento",
              "Fatture con IVA aziendale e documentazione spese",
              "Servizio standby \"a disposizione\" durante l'evento",
              "Comunicazione proattiva in caso di ritardo di un veicolo o ospite",
              "Seggiolini per bambini e veicoli accessibili su richiesta",
              "Pacchetti evento multi-giorno a tariffe agevolate",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-gold transition-all group">
                <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 font-medium text-sm leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Link Correlati */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-10">
            <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-3">Servizi Correlati</p>
            <h2 className="text-3xl font-extrabold text-navy">Altre Opzioni di Trasferimento Privato</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Trasferimenti Matrimonio", href: "/it/servizi/trasferimenti-matrimonio" },
              { label: "Taxi Aziendale", href: "/it/servizi/taxi-aziendale" },
              { label: "Transfer Aeroportuali", href: "/it/servizi/trasferimenti-aeroportuali" },
              { label: "Taxi a Ore", href: "/it/servizi/taxi-a-ore" },
              { label: "Trasferimenti Hotel", href: "/it/servizi/trasferimenti-hotel" },
              { label: "Prenota Ora", href: "/book-now" },
            ].map((l, i) => (
              <Link key={i} href={l.href}
                className="flex items-center gap-2 p-4 bg-[#F8F9FA] rounded-xl border border-gray-100 hover:border-gold hover:shadow-md transition-all group text-sm font-semibold text-navy hover:text-gold">
                <ChevronRight className="w-4 h-4 text-gold shrink-0" />{l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={eventFaqs} title="FAQ sul Trasporto Eventi" badge="Pianificazione Evento" />

      {/* CTA */}
      <section className="py-20 bg-gold">
        <div className="container mx-auto px-6 max-w-4xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-navy text-2xl font-extrabold mb-1">Pianifica il trasporto per il tuo evento in Italia</h3>
            <p className="text-navy/70 text-sm">Logistica multi-veicolo · Autisti in abito · Fatturazione aziendale · Coordinamento 24/7</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <TaxiButton href="/contact">Richiedi un Preventivo</TaxiButton>
            <a href="https://wa.me/923148932631" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-navy text-white font-bold hover:bg-white hover:text-navy transition-all text-sm">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
