import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ContactInfoCards from '@/components/ContactInfoCards';
import ContactFormSection from '@/components/ContactFormSection';
import FAQSection from '@/components/FAQSection';
import MapEmbed from '@/components/MapEmbed';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';
import { CheckCircle, MessageCircle, Star, Clock, ChevronRight, MapPin, ShieldCheck, ThumbsUp, PhoneCall, ArrowRight } from 'lucide-react';
import TaxiButton from '@/components/TaxiButton';
import { enHreflangFor } from '@/lib/i18n/page-registry';

export const metadata: Metadata = {
  title: "Contattaci in Italia | Taxi Privato",
  description: "Contatta Italy Taxi Service per transfer privati 24/7 in tutta Italia. Al servizio di Roma, Milano, Venezia, Firenze e Napoli, aeroporti e centri città. Preventivi immediati via WhatsApp o email.",
  alternates: {
    canonical: "/it/contatti",
    languages: enHreflangFor('/it/contatti'),
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.italytaxiservice.com/#localbusiness",
      "name": "Italy Taxi Service",
      "image": "https://www.italytaxiservice.com/images/hero.png",
      "telephone": "+923148932631",
      "email": "italytaxiservicee@gmail.com",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Via dell'Aeroporto, s/n",
        "addressLocality": "Fiumicino",
        "addressRegion": "RM",
        "postalCode": "00054",
        "addressCountry": "IT"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 41.7999, "longitude": 12.2462 },
      "url": "https://www.italytaxiservice.com",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+923148932631",
        "contactType": "customer service",
        "areaServed": ["IT", "Rome", "Milan", "Venice", "Florence", "Naples"],
        "availableLanguage": ["English", "Italian"]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quanto velocemente riceverò una risposta alla mia richiesta?",
          "acceptedAnswer": { "@type": "Answer", "text": "Su WhatsApp, rispondiamo generalmente entro 5–15 minuti, 24 ore su 24. Per le richieste via email, il nostro obiettivo è rispondere entro 2 ore durante l'orario lavorativo ed entro 4 ore di notte o nel weekend." }
        },
        {
          "@type": "Question",
          "name": "Posso prenotare un transfer lo stesso giorno contattandovi direttamente?",
          "acceptedAnswer": { "@type": "Answer", "text": "Sì. Le prenotazioni in giornata sono spesso possibili contattandoci su WhatsApp o telefono. Fornisci il luogo di prelievo, la destinazione, l'orario e il numero di passeggeri e confermeremo subito la disponibilità." }
        },
        {
          "@type": "Question",
          "name": "Gestite richieste di prenotazione aziendali o di gruppo?",
          "acceptedAnswer": { "@type": "Answer", "text": "Sì. Conti aziendali, trasporto matrimoniale, logistica per conferenze e prenotazioni di gruppo con 10+ passeggeri sono gestiti al meglio direttamente dal nostro team. Scrivici a italytaxiservicee@gmail.com con i dettagli del tuo evento." }
        }
      ]
    }
  ]
};

const contactFaqs = [
  { q: "Quanto velocemente riceverò una risposta alla mia richiesta?", a: "Su WhatsApp, rispondiamo generalmente entro 5–15 minuti, 24 ore su 24. Per le richieste via email, il nostro obiettivo è rispondere entro 2 ore durante l'orario lavorativo ed entro 4 ore di notte o nel weekend." },
  { q: "Posso prenotare un transfer lo stesso giorno contattandovi direttamente?", a: "Sì. Le prenotazioni in giornata sono spesso possibili contattandoci su WhatsApp o telefono. Fornisci il luogo di prelievo, la destinazione, l'orario e il numero di passeggeri e confermeremo subito la disponibilità." },
  { q: "Come ottengo un preventivo personalizzato per un percorso non presente sul sito?", a: "Inviaci semplicemente l'indirizzo esatto di prelievo, l'indirizzo di destinazione, la data di viaggio e il numero di passeggeri via WhatsApp o tramite il modulo di contatto. Ti forniremo un prezzo fisso onnicomprensivo in pochi minuti." },
  { q: "Gestite richieste di prenotazione aziendali o di gruppo?", a: "Sì. Conti aziendali, trasporto matrimoniale, logistica per conferenze e prenotazioni di gruppo con 10+ passeggeri sono gestiti al meglio direttamente dal nostro team. Scrivici a italytaxiservicee@gmail.com con i dettagli del tuo evento." },
  { q: "Posso modificare una prenotazione esistente tramite i vostri canali di contatto?", a: "Sì. Contattaci su WhatsApp con il numero di riferimento della tua prenotazione e le modifiche di cui hai bisogno. Gestiamo rapidamente le modifiche di orario di prelievo, tipo di veicolo, destinazione e numero di passeggeri." },
  { q: "Cosa devo fare se si verifica un problema durante il mio transfer?", a: "Chiamaci o scrivici subito su WhatsApp. Il nostro team operativo monitora tutti i transfer attivi e può comunicare direttamente con il tuo autista per risolvere qualsiasi problema — deviazione di percorso, problema al veicolo o emergenza — in tempo reale." },
];

const responsePromises = [
  { icon: <MessageCircle className="w-6 h-6 text-gold" />, channel: "WhatsApp", time: "Meno di 15 minuti", note: "24/7 · Il più consigliato" },
  { icon: <Clock className="w-6 h-6 text-gold" />, channel: "Email", time: "Entro 2 ore", note: "italytaxiservicee@gmail.com" },
  { icon: <PhoneCall className="w-6 h-6 text-gold" />, channel: "Chiamata Diretta", time: "Risposta Immediata" },
];

const serviceAreas = [
  { city: "Roma", locations: "Fiumicino (FCO), Ciampino (CIA), Stazione Termini", img: "/images/hero.png" },
  { city: "Milano", locations: "Malpensa (MXP), Linate (LIN), Bergamo (BGY)", img: "/images/hero.png" },
  { city: "Venezia", locations: "Marco Polo (VCE), Piazzale Roma, Mestre", img: "/images/hero.png" },
  { city: "Firenze", locations: "Peretola (FLR), Santa Maria Novella", img: "/images/hero.png" }
];

export default function ContactPageIt() {
  return (
    <main className="min-h-screen font-inter pb-20 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <Navbar />

      <PageHero
        titleTop="Contatta Italy Taxi Service"
        titleBottom="Prenota il Tuo Transfer Privato"
        description="Disponibili 24 ore su 24, 7 giorni su 7. Preventivi immediati via WhatsApp, richieste dettagliate via email e supporto in tempo reale per le prenotazioni attive a Roma, Milano, Venezia e oltre."
        backgroundImage="/images/hero.png"
        breadcrumbs={[{ name: "Contatti", item: "/it/contatti" }]}
      />

      {/* Promesse sui tempi di risposta */}
      <section className="py-16 bg-white font-inter">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy leading-tight mb-4">Siamo Sempre Qui — Come Contattarci</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Per la risposta più rapida su transfer aeroportuali, tour in città o prenotazioni aziendali, ti consigliamo vivamente di usare WhatsApp.</p>
            <div className="w-20 h-1 bg-gold mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {responsePromises.map((r, i) => (
              <div key={i} className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-gold transition-all text-center group bg-white">
                <div className="flex justify-center mb-4 p-4 bg-gold/10 rounded-full w-fit mx-auto group-hover:bg-gold/20 transition-colors">{r.icon}</div>
                <h3 className="font-bold text-navy text-xl mb-1">{r.channel}</h3>
                <p className="text-gold font-extrabold text-2xl mb-2">{r.time}</p>
                <p className="text-gray-500 text-sm font-medium">{r.note}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="https://wa.me/923148932631?text=Ciao%2C+vorrei+prenotare+un+taxi+privato+in+Italia." target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-lg hover:bg-[#1ebe57] transition-all shadow-xl hover:shadow-green-500/30 hover:-translate-y-1">
              <MessageCircle className="w-6 h-6" /> Scrivici su WhatsApp
            </a>
            <a href="tel:+923148932631"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-3 px-8 py-4 rounded-full bg-navy text-white font-bold text-lg hover:bg-navy/90 transition-all shadow-xl hover:-translate-y-1">
              <PhoneCall className="w-6 h-6" /> Chiamaci Direttamente
            </a>
          </div>
        </div>
      </section>

      {/* Segnali di Fiducia */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-white p-3 rounded-full shadow-sm"><ShieldCheck className="w-6 h-6 text-gold" /></div>
              <p className="font-bold text-navy text-sm">Autisti Autorizzati</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-white p-3 rounded-full shadow-sm"><ThumbsUp className="w-6 h-6 text-gold" /></div>
              <p className="font-bold text-navy text-sm">Servizio 5 Stelle</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-white p-3 rounded-full shadow-sm"><Clock className="w-6 h-6 text-gold" /></div>
              <p className="font-bold text-navy text-sm">Garanzia di Puntualità</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-white p-3 rounded-full shadow-sm"><CheckCircle className="w-6 h-6 text-gold" /></div>
              <p className="font-bold text-navy text-sm">Cancellazione Gratuita*</p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#F8F9FA]">
        <ContactInfoCards />
      </div>

      {/* Aree di Servizio */}
      <section className="py-20 bg-white font-inter">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight mb-4">I Nostri Principali Hub di Servizio in Italia</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Offriamo servizi taxi premium in tutte le principali città, aeroporti e stazioni ferroviarie italiane.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((area, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-50">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-gold" />
                    <h3 className="font-bold text-xl text-navy">{area.city}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 h-10">{area.locations}</p>
                  <Link href={`/city/${area.city.toLowerCase() === 'roma' ? 'rome' : area.city.toLowerCase() === 'milano' ? 'milan' : area.city.toLowerCase() === 'venezia' ? 'venice' : area.city.toLowerCase() === 'firenze' ? 'florence' : area.city.toLowerCase()}`} className="text-gold font-bold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Esplora i Percorsi <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cosa includere nel messaggio */}
      <section className="py-20 bg-[#F8F9FA] font-inter border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 p-8 md:p-12 bg-navy rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3"><Star className="w-6 h-6 text-gold" /> Richieste di Prenotazione Specializzate</h3>
                <div className="space-y-6">
                  {[
                    { label: "Conti Aziendali", sub: "Fatturazione mensile, prenotazione prioritaria, account manager dedicato" },
                    { label: "Trasporto Matrimoniale", sub: "Coordinamento multi-veicolo, logistica invitati" },
                    { label: "Trasferimenti per Conferenze", sub: "Arrivi di gruppo, servizi navetta per delegati" },
                    { label: "Percorsi Personalizzati a Lunga Distanza", sub: "Trasferimenti nazionali e transfrontalieri" },
                    { label: "Partnership con Agenzie di Viaggio", sub: "Integrazione API e tariffe per prenotazioni in blocco" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-white text-lg">{item.label}</p>
                        <p className="text-gray-400 text-sm mt-1">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[3px] bg-gold rounded-full" />
                <p className="text-gold text-sm font-bold uppercase tracking-[0.2em]">Guida Rapida</p>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6 leading-tight">Cosa Includere nella Tua Richiesta</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">Per ricevere il tuo preventivo fisso e onnicomprensivo il più rapidamente possibile, includi i seguenti dettagli nel tuo messaggio WhatsApp o nell'invio del modulo di contatto:</p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Indirizzo Esatto di Prelievo",
                  "Dettagli della Destinazione",
                  "Data e Ora del Viaggio",
                  "Numero di Passeggeri",
                  "Quantità di Bagagli",
                  "Numero di Volo (per Aeroporti)",
                  "Richieste Seggiolini per Bambini",
                  "Esigenze Particolari"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-navy font-semibold text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactFormSection />
      <MapEmbed />

      <FAQSection faqs={contactFaqs} title="FAQ su Contatti e Prenotazioni" badge="Domande Frequenti dei Clienti" />

      {/* Link Interni Correlati per SEO */}
      <section className="py-16 bg-navy font-inter text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto a Prenotare il Tuo Transfer in Italia?</h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">Veloce, affidabile e confortevole. Sfoglia i nostri servizi specifici o assicurati subito il tuo passaggio.</p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { label: "Transfer Aeroportuali", href: "/it/servizi/trasferimenti-aeroportuali" },
              { label: "Città-Città", href: "/it/servizi/trasferimenti-citta-citta" },
              { label: "Aree di Copertura", href: "/coverage-areas" },
            ].map((l, i) => (
              <Link key={i} href={l.href} className="px-6 py-3 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-gold hover:text-navy hover:border-gold transition-all duration-300">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex justify-center">
            <TaxiButton href="/book-now">Richiedi un Preventivo Immediato</TaxiButton>
          </div>
        </div>
      </section>


      <Footer />
    </main>
  );
}
