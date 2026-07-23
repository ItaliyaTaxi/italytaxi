import Link from 'next/link';

/**
 * Italian counterpart of HomeSEOContent — static server component, always
 * present in the initial HTML for crawlers. Genuine translated SEO copy,
 * not machine-translated: keyword targets adapted for Italian search intent
 * (e.g. "noleggio con conducente", "taxi privato Italia").
 */
export default function HomeSEOContentIt() {
  return (
    <section className="py-24 bg-white font-inter" aria-label="Chi è Italy Taxi Service">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* ── Introduzione ────────────────────────────────────────────────────── */}
        <div className="text-center mb-16">
          <p className="text-[#F4C430] text-sm font-bold uppercase tracking-[0.4em] mb-4">La Scelta di Fiducia in Italia</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F1C2E] leading-tight mb-6">
            Il Servizio di Taxi Privato e Noleggio con Conducente N°1 in Italia
          </h2>
          <div className="w-20 h-1 bg-[#F4C430] mx-auto mb-8" />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 mb-16">
          <p>
            Quando si tratta di viaggiare in Italia — che tu stia atterrando in un grande aeroporto internazionale,
            esplorando le strade storiche di Roma, viaggiando per lavoro a Milano o scoprendo le città d&apos;arte
            della Toscana — <strong>Italy Taxi Service</strong> offre il trasporto privato più affidabile, comodo e
            professionale disponibile sul mercato. Come <strong>servizio taxi Italia</strong> dedicato, uniamo
            decenni di esperienza locale alla guida a una piattaforma di prenotazione moderna che mette il tuo
            viaggio sotto controllo fin dal primo click.
          </p>
          <p>
            A differenza dei normali taxi con tassametro in coda fuori dai terminal d&apos;arrivo o delle app di
            ride-sharing non regolamentate con tariffe dinamiche nelle ore di punta, la nostra rete di{' '}
            <strong>autisti privati in Italia</strong> opera con prezzi trasparenti e fissi, confermati al momento
            della prenotazione. Nessuna sorpresa. Nessun costo nascosto. Il prezzo che vedi è il prezzo che paghi —
            inclusi pedaggi autostradali, accessi alle Zone a Traffico Limitato (ZTL) e gestione dei bagagli.
          </p>
        </div>

        {/* ── Servizi ─────────────────────────────────────────────────────────── */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F1C2E] mb-6">
            I Nostri Servizi di Trasferimento Privato in Tutta Italia
          </h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Offriamo una gamma completa di servizi di trasporto terrestre pensati per coprire ogni esigenza di
            viaggio sulla penisola italiana. Da brevi spostamenti in città a itinerari turistici di più giorni, la
            nostra flotta di veicoli premium e i nostri autisti professionisti con licenza NCC sono a tua
            disposizione 24 ore su 24, 365 giorni all&apos;anno.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-100 rounded-2xl p-8 hover:border-[#F4C430]/50 transition-colors">
              <h3 className="text-xl font-bold text-[#0F1C2E] mb-3">
                <Link href="/it/servizi/trasferimenti-aeroportuali" className="hover:text-[#F4C430] transition-colors">
                  Trasferimento Aeroportuale in Italia
                </Link>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                <Link href="/it/servizi/trasferimenti-aeroportuali" className="text-[#F4C430] font-semibold hover:underline">Transfer aeroportuali</Link> a prezzo fisso da tutti i 30+ aeroporti italiani, tra cui
                Roma Fiumicino (FCO), Milano Malpensa (MXP), Venezia Marco Polo (VCE), Firenze (FLR) e Napoli (NAP).
                Monitoraggio del volo incluso, 60 minuti di attesa gratuita, accoglienza personalizzata in sala arrivi.
              </p>
            </div>

            <div className="border border-gray-100 rounded-2xl p-8 hover:border-[#F4C430]/50 transition-colors">
              <h3 className="text-xl font-bold text-[#0F1C2E] mb-3">
                <Link href="/it/servizi/trasferimenti-citta-citta" className="hover:text-[#F4C430] transition-colors">
                  Trasferimento Privato Città-Città
                </Link>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Trasferimenti comodi da punto a punto tra le principali città italiane. Viaggia da Roma a Firenze,
                da Milano al Lago di Como, da Napoli alla Costiera Amalfitana o qualsiasi altra combinazione nel
                Paese. Servizio porta a porta, senza cambi, senza coincidenze, senza pensieri.
              </p>
            </div>

            <div className="border border-gray-100 rounded-2xl p-8 hover:border-[#F4C430]/50 transition-colors">
              <h3 className="text-xl font-bold text-[#0F1C2E] mb-3">
                <Link href="/it/servizi/taxi-aziendale" className="hover:text-[#F4C430] transition-colors">
                  Noleggio con Conducente per Aziende
                </Link>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Servizio executive di <strong>noleggio con conducente in Italia</strong> per dirigenti d&apos;azienda,
                delegazioni aziendali e viaggiatori esigenti. Veicoli Mercedes-Benz Classe S, Classe E e Classe V con
                autisti in abito, professionali. Discrezione, puntualità e comfort di prim&apos;ordine garantiti.
              </p>
            </div>

            <div className="border border-gray-100 rounded-2xl p-8 hover:border-[#F4C430]/50 transition-colors">
              <h3 className="text-xl font-bold text-[#0F1C2E] mb-3">
                <Link href="/it/servizi/tour-privati" className="hover:text-[#F4C430] transition-colors">
                  Tour Privati Giornalieri
                </Link>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tour privati su misura in tutta Italia con un autista-guida locale esperto. Esplora la Costiera
                Amalfitana, la campagna toscana, il Vaticano e il Colosseo, il Lago di Como e le Cinque Terre al tuo
                ritmo, senza i vincoli dei tour di gruppo o degli orari dei mezzi pubblici.
              </p>
            </div>

            <div className="border border-gray-100 rounded-2xl p-8 hover:border-[#F4C430]/50 transition-colors">
              <h3 className="text-xl font-bold text-[#0F1C2E] mb-3">
                <Link href="/it/servizi/trasferimenti-porto-crociere" className="hover:text-[#F4C430] transition-colors">
                  Trasferimenti Porto Crociere
                </Link>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Trasferimenti privati senza interruzioni tra i terminal crociere e i centri città italiani. Serviamo
                Civitavecchia (porto di Roma), il Porto di Napoli, Livorno (Firenze), il terminal crociere di Venezia
                e tutti i principali scali portuali italiani.
              </p>
            </div>

            <div className="border border-gray-100 rounded-2xl p-8 hover:border-[#F4C430]/50 transition-colors">
              <h3 className="text-xl font-bold text-[#0F1C2E] mb-3">
                <Link href="/it/servizi/taxi-a-ore" className="hover:text-[#F4C430] transition-colors">
                  Noleggio a Ore
                </Link>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Prenota il tuo autista a ore per la massima flessibilità. Ideale per riunioni di lavoro in più sedi,
                shopping, visite turistiche al tuo ritmo o trasporti per eventi in cui hai bisogno di un veicolo e un
                autista a disposizione per l&apos;intera giornata.
              </p>
            </div>
          </div>
        </div>

        {/* ── Città servite ───────────────────────────────────────────────────── */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F1C2E] mb-6">
            Taxi Privato a Roma, Milano e Firenze
          </h2>
          <p className="text-gray-700 leading-relaxed mb-10">
            Il nostro servizio è disponibile in tutta Italia, con una copertura particolarmente capillare nelle tre
            città più visitate. Ecco come si presenta il nostro servizio di <strong>autista privato in Italia</strong>{' '}
            sul campo in ciascuna delle principali destinazioni:
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-[#0F1C2E] mb-3">
                <Link href="/rome-airport-transfer" className="hover:text-[#F4C430] transition-colors">
                  Taxi Privato a Roma
                </Link>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Roma è la destinazione più visitata d&apos;Italia e una delle città più complesse al mondo per il
                trasporto autonomo. Le restrizioni della ZTL (Zona a Traffico Limitato) impediscono ai veicoli
                ordinari di entrare nel centro storico — ma i nostri autisti con licenza NCC hanno piena
                autorizzazione ad accedere a queste zone, portandoti direttamente al tuo hotel o appartamento
                indipendentemente dalla posizione. Serviamo sia l&apos;Aeroporto Internazionale Leonardo da Vinci
                (FCO, 32 km dalla città) sia l&apos;Aeroporto di Roma Ciampino (CIA, 15 km), con trasferimenti verso
                il centro storico, Trastevere, Parioli, Testaccio e tutti gli altri quartieri.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0F1C2E] mb-3">
                <Link href="/milan-chauffeur-service" className="hover:text-[#F4C430] transition-colors">
                  Noleggio con Conducente a Milano
                </Link>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Milano è la capitale finanziaria e della moda d&apos;Italia, e i suoi tre principali aeroporti —
                Malpensa (MXP), Linate (LIN) e Bergamo Orio al Serio (BGY) — gestiscono insieme oltre 40 milioni di
                passeggeri all&apos;anno. Il nostro servizio è la scelta preferita dai viaggiatori d&apos;affari in
                arrivo per le fiere di Fiera Milano, dai dirigenti che visitano il distretto finanziario di Porta
                Nuova e dai viaggiatori leisure diretti verso il Distretto dei Laghi, il Lago di Como o il Lago
                Maggiore. Tutti i transfer aeroportuali milanesi includono i pedaggi autostradali e sono disponibili
                in berlina economica, business e minivan di gruppo.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#0F1C2E] mb-3">
                <Link href="/florence-private-taxi" className="hover:text-[#F4C430] transition-colors">
                  Taxi Privato a Firenze
                </Link>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Firenze, culla del Rinascimento, presenta le sue sfide di trasporto uniche. Il centro storico è quasi
                interamente pedonale e soggetto a ZTL. I taxi standard e le auto private non possono legalmente
                raggiungere la maggior parte degli hotel entro le mura dell&apos;antica Firenze — ma i nostri autisti
                con licenza NCC possono. Il nostro servizio copre anche escursioni giornaliere a Siena, Pisa, nel
                Chianti e nella più ampia campagna toscana, offrendo un&apos;esperienza flessibile e autenticamente
                locale di una delle regioni più belle d&apos;Europa.
              </p>
            </div>
          </div>
        </div>

        {/* ── Perché sceglierci ───────────────────────────────────────────────── */}
        <div className="bg-[#0F1C2E] rounded-3xl p-10 md:p-14 mb-16 text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">
            Perché Scegliere Italy Taxi Service?
          </h2>
          <p className="text-gray-300 text-center mb-10 max-w-2xl mx-auto">
            Ogni anno migliaia di viaggiatori ci scelgono per transfer aeroportuali, viaggi di lavoro e tour privati
            in tutta Italia. Ecco perché il nostro <strong className="text-[#F4C430]">servizio taxi in Italia</strong> si
            distingue dalla concorrenza.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Autisti Professionisti con Licenza NCC", body: "Tutti i nostri autisti possiedono la licenza professionale italiana NCC (Noleggio Con Conducente), che li autorizza legalmente ad entrare nelle zone ZTL, utilizzare le corsie preferenziali e operare come veicoli a noleggio privati in tutta Italia. Sei in mani sicure, qualificate e completamente assicurate." },
              { title: "Prezzi Fissi — Nessuna Sorpresa", body: "Ogni preventivo è fisso e onnicomprensivo. Il prezzo confermato alla prenotazione è quello che paghi all'arrivo — indipendentemente da traffico, pedaggi, ritardi del volo o bagagli extra. I taxi con tassametro e le app non regolamentate non possono offrire questa garanzia." },
              { title: "Disponibilità 24/7", body: "Il nostro team di dispatch e la nostra rete di autisti operano 24 ore su 24, ogni giorno dell'anno. Che il tuo volo atterri alle 3 del mattino il giorno di Natale o che tu abbia bisogno di un transfer dell'ultimo minuto a mezzanotte, ci siamo. Nessuna interruzione di servizio, nessuna riduzione della capacità notturna." },
              { title: "Monitoraggio del Volo Incluso", body: "Ogni prelievo in aeroporto include automaticamente il monitoraggio del volo in tempo reale. Se il tuo volo è in ritardo o atterra in anticipo, il tuo autista si adegua senza che tu debba fare nulla. Non arriverai mai a trovare nessun veicolo ad attenderti, indipendentemente dagli imprevisti." },
              { title: "Flotta Premium", body: "I nostri veicoli sono esclusivamente di ultima generazione, ben mantenuti e puliti tra un viaggio e l'altro. La flotta include berline Mercedes-Benz Classe E e Classe S per viaggi individuali o di coppia, minivan Classe V per famiglie e piccoli gruppi, e veicoli Sprinter più grandi per i trasferimenti di gruppo." },
              { title: "Autisti che Parlano Inglese", body: "Tutti gli autisti sono selezionati per la loro capacità di comunicare professionalmente in inglese. Per i viaggiatori internazionali, questo elimina completamente la barriera linguistica — il tuo autista può rispondere a domande sugli usi locali, consigliare ristoranti, suggerire percorsi e assisterti per tutto il viaggio." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#F4C430] mt-2.5 shrink-0" />
                <div>
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
