import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';
import { enHreflangFor } from '@/lib/i18n/page-registry';

export const metadata: Metadata = {
  title: "Politica di Cancellazione, Rimborso e Mancato Transfer",
  description: "Come gestiamo cancellazioni, rimborsi, mancate presentazioni e ritardi per le prenotazioni Italy Taxi Service: termini di preavviso, attesa inclusa, documentazione richiesta e come inviare una richiesta.",
  alternates: {
    canonical: "/it/politica-di-cancellazione-e-rimborso",
    languages: enHreflangFor('/it/politica-di-cancellazione-e-rimborso'),
  },
};

const sections = [
  { id: "chi", title: "1. Con chi stipuli il contratto" },
  { id: "come-cancellare", title: "2. Come cancellare" },
  { id: "termini", title: "3. Termini di cancellazione" },
  { id: "mancata-presentazione", title: "4. Mancata presentazione" },
  { id: "ritardi", title: "5. Ritardi, scioperi e voli persi" },
  { id: "reclami", title: "6. Richieste di rimborso e documenti" },
  { id: "pagamenti", title: "7. Pagamenti e rimborsi" },
  { id: "cancelliamo-noi", title: "8. Se cancelliamo noi" },
  { id: "diritti", title: "9. I tuoi diritti di legge" },
  { id: "invio", title: "10. Come inviare una richiesta" },
  { id: "faq", title: "11. Domande frequenti" },
];

export default function PoliticaCancellazioneRimborsoPage() {
  const cell = "px-5 py-3";

  return (
    <main className="min-h-screen font-inter">
      <Navbar />
      <PageHero
        titleTop="Politica di Cancellazione,"
        titleBottom="Rimborso e Mancato Transfer"
        description="Come gestiamo cancellazioni, rimborsi, mancate presentazioni e ritardi — e cosa ci serve per valutare una richiesta."
        backgroundImage="/images/hero.png"
        breadcrumbs={[{ name: "Politica di Cancellazione e Rimborso", item: "/it/politica-di-cancellazione-e-rimborso" }]}
      />

      <div className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Indice laterale */}
            <aside className="lg:w-64 shrink-0">
              <div className="lg:sticky lg:top-8">
                <p className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-4">Indice</p>
                <nav className="space-y-1">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block text-sm text-gray-500 hover:text-gold hover:translate-x-1 transition-all py-1 border-l-2 border-transparent hover:border-gold pl-3"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
                <div className="mt-8 p-4 bg-navy rounded-2xl text-white text-xs leading-relaxed">
                  <p className="font-bold text-gold mb-2">Ultimo aggiornamento</p>
                  <p>10 ottobre 2026</p>
                  <p className="mt-2 text-gray-400">Invia la richiesta a</p>
                  <a href="mailto:italytaxiservicee@gmail.com" className="text-gold hover:underline break-all">italytaxiservicee@gmail.com</a>
                </div>
              </div>
            </aside>

            {/* Contenuto */}
            <article className="flex-1 prose prose-lg max-w-none text-gray-700">

              <p className="text-gray-500 text-sm mb-10">
                Questa pagina spiega come <strong>Italy Taxi Service</strong> gestisce cancellazioni, rimborsi, mancate
                presentazioni e corse interessate da ritardi. Si affianca ai nostri{' '}
                <Link href="/terms-and-conditions" className="text-gold font-semibold hover:underline">Termini e Condizioni</Link>,
                che restano l&apos;accordo di riferimento per ogni prenotazione. Dove questa pagina entra più nel dettaglio,
                lo fa per spiegare le stesse regole, non per sostituirle. Nulla di quanto segue limita i diritti che ti
                spettano per legge in Italia e nell&apos;Unione Europea.
              </p>

              {/* 1 */}
              <section id="chi" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">1. Con chi stipuli il contratto</h2>
                <p>Italy Taxi Service accetta la prenotazione come parte contraente. Come indicato nei Termini e Condizioni, Italy Taxi Service opera come operatore per tutte le corse ed è responsabile dell&apos;esecuzione del servizio contrattato. Quando una corsa è svolta da un autista partner selezionato, Italy Taxi Service resta la parte contraente e mantiene la piena responsabilità dell&apos;erogazione del servizio.</p>
                <p>In pratica significa un solo interlocutore dall&apos;inizio alla fine: emettiamo noi il preventivo, confermiamo noi la prenotazione e gestiamo noi qualsiasi richiesta di cancellazione o rimborso — anche quando la corsa è stata effettuata da un autista NCC partner e anche quando hai pagato direttamente l&apos;autista.</p>
                <p>Non devi rivolgerti all&apos;autista per questioni di pagamento o rimborso: scrivi a noi.</p>
              </section>

              {/* 2 */}
              <section id="come-cancellare" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">2. Come cancellare</h2>
                <p>Le cancellazioni devono essere comunicate <strong>per iscritto</strong>, via email o messaggio WhatsApp. Chiediamo la forma scritta perché è l&apos;orario del tuo messaggio a determinare quale fascia dei termini si applica.</p>
                <p>Indica il <strong>codice di prenotazione</strong>, la <strong>data e l&apos;ora del prelievo</strong> e il <strong>nome con cui hai prenotato</strong>. Senza questi dati potremmo non riuscire a identificare rapidamente la prenotazione, e il tempo perso può farti uscire da una fascia di preavviso.</p>
                <p><strong>Richiedere una cancellazione non equivale ad averla ottenuta.</strong> La prenotazione è cancellata quando ti rispondiamo confermandolo. Se hai inviato una richiesta e non hai ricevuto conferma, sollecitala invece di dare per chiusa la prenotazione — soprattutto se il prelievo è imminente: in caso contrario un autista potrebbe comunque essere inviato.</p>
                <p>Se devi modificare e non cancellare, le variazioni di data, ora, indirizzo o veicolo sono accettate senza costi se richieste più di 24 ore prima del prelievo e compatibilmente con la disponibilità. Spesso una modifica conviene più di una cancellazione seguita da una nuova prenotazione.</p>
              </section>

              {/* 3 */}
              <section id="termini" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">3. Termini di cancellazione</h2>
                <p>Il preavviso si calcola dall&apos;orario del messaggio scritto di cancellazione all&apos;orario di prelievo previsto.</p>
                <div className="overflow-x-auto my-6">
                  <table className="w-full border-collapse text-base">
                    <thead>
                      <tr className="bg-navy text-white text-left text-xs uppercase tracking-wider">
                        <th className={cell}>Preavviso prima del prelievo</th>
                        <th className={cell}>Penale</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-[#FBF8F0]">
                        <td className={cell}>Più di 24 ore</td>
                        <td className={`${cell} text-green-700 font-semibold`}>Cancellazione gratuita — rimborso integrale degli importi prepagati ammissibili</td>
                      </tr>
                      <tr>
                        <td className={cell}>Tra 6 e 24 ore</td>
                        <td className={cell}>50% della tariffa</td>
                      </tr>
                      <tr>
                        <td className={cell}>Meno di 6 ore, o mancata presentazione</td>
                        <td className={`${cell} text-red-600 font-semibold`}>100% della tariffa</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p><strong>Cancellare tra 24 e 48 ore prima del prelievo è gratuito.</strong> La nostra finestra di gratuità copre qualunque preavviso superiore a 24 ore: una cancellazione due giorni prima del transfer e una due settimane prima ricevono lo stesso trattamento.</p>
                <p>Si tratta di condizioni commerciali che offriamo volontariamente. Si applicano alle cancellazioni richieste dal cliente e restano soggette alla legge applicabile e alle condizioni confermate nella singola prenotazione, che prevalgono in caso di differenze.</p>
              </section>

              {/* 4 */}
              <section id="mancata-presentazione" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">4. Mancata presentazione</h2>
                <p>Una prenotazione può essere trattata come mancata presentazione quando, trascorso il tempo di attesa incluso, il passeggero non si è presentato al punto di prelievo concordato e non è raggiungibile. Lo stesso può valere quando i dati di prelievo comunicati erano errati e l&apos;autista non ha potuto ragionevolmente individuare il passeggero.</p>
                <p><strong>Attesa inclusa</strong> — compresa nella tariffa, senza costi aggiuntivi:</p>
                <ul>
                  <li><strong>Voli internazionali:</strong> 60 minuti dall&apos;atterraggio effettivo</li>
                  <li><strong>Voli nazionali:</strong> 30 minuti dall&apos;atterraggio effettivo</li>
                  <li><strong>Prelievi in stazione:</strong> 20 minuti dall&apos;orario di arrivo previsto</li>
                  <li><strong>Prelievi in hotel o a un indirizzo:</strong> 15 minuti dall&apos;orario concordato</li>
                </ul>
                <p>Per i prelievi in aeroporto il conteggio parte dall&apos;atterraggio effettivo e non dall&apos;orario schedulato, perché monitoriamo i voli e adeguiamo automaticamente l&apos;orario.</p>
                <p><strong>Procedura di contatto.</strong> Prima di registrare una mancata presentazione, l&apos;autista tenta di raggiungerti al numero indicato nella prenotazione e noi proviamo a contattarti via WhatsApp o email. Salva il numero dell&apos;autista quando te lo inviamo e avvisaci se sei in ritardo: nella grande maggioranza dei casi un breve messaggio evita del tutto il problema. Se sei bloccato al ritiro bagagli, ai controlli o per qualsiasi altro motivo, comunicacelo: l&apos;attesa può spesso essere prolungata di comune accordo.</p>
                <p><strong>In caso di mancata presentazione accertata può essere dovuta l&apos;intera tariffa concordata.</strong> Vale sia se hai prepagato, sia se era previsto il pagamento diretto all&apos;autista, sia se la corsa doveva essere fatturata successivamente. La modalità di pagamento scelta non annulla di per sé l&apos;obbligazione assunta alla conferma della prenotazione, perché veicolo e autista erano impegnati per il tuo viaggio.</p>
                <p>Non sosteniamo che ogni addebito per mancata presentazione sia esigibile in ogni circostanza. Se ritieni che sia stata registrata per errore, o che vi fossero circostanze eccezionali, segnalacelo e la riesamineremo secondo la sezione 6. Preferiamo guardare i fatti piuttosto che discutere il principio.</p>
              </section>

              {/* 5 */}
              <section id="ritardi" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">5. Ritardi, scioperi e voli persi</h2>
                <p>Gli spostamenti su strada in Italia sono talvolta condizionati da traffico, cantieri e chiusure, manifestazioni, scioperi, incidenti, maltempo e altri eventi fuori dal controllo di chiunque. Questa sezione spiega come affrontiamo quelle situazioni.</p>
                <p><strong>Cosa ti chiediamo.</strong> Fornisci dati di volo o di treno corretti al momento della prenotazione e prevedi un margine realistico, in particolare per una partenza, un imbarco su una nave da crociera o qualunque spostamento con un orario vincolante. Se l&apos;orario richiesto non lascia margine di norma lo segnaliamo, ma la scelta resta tua.</p>
                <p><strong>Cosa facciamo noi.</strong> Quando emerge o appare probabile un ritardo rilevante, l&apos;autista e il nostro team cercano di avvisarti il prima possibile e di valutare con te le alternative. Preferiamo darti una brutta notizia in anticipo piuttosto che lasciartela scoprire al terminal.</p>
                <p><strong>Come affrontiamo la questione del rimborso.</strong> Un ritardo non comporta automaticamente il diritto a un rimborso, né lo esclude automaticamente. Dipende dalla causa, da quanto era stato concordato, da quanto è stato comunicato e da cosa si poteva ragionevolmente fare. Non consideriamo un&apos;interruzione esterna come circostanza che libera automaticamente noi o l&apos;autista da ogni responsabilità: non è la nostra lettura degli obblighi assunti e non è una posizione che sosteniamo.</p>
                <p>Le richieste relative a un volo perso, a una coincidenza mancata o ad altri costi conseguenti vengono valutate caso per caso, sulla base delle prove disponibili, delle condizioni confermate per la tua prenotazione e della legge applicabile. Non offriamo una garanzia generalizzata di copertura per voli sostitutivi, hotel, biglietti di riacquisto o altre spese successive, e preferiamo dirlo chiaramente invece di lasciare intendere un impegno che non abbiamo preso. Allo stesso modo, non rifiutiamo queste richieste per prassi.</p>
                <p>Se per la tua data di viaggio è proclamato uno sciopero, conviene pianificare in anticipo: il nostro{' '}
                  <Link href="/it/blog/sciopero-trasporti-ottobre-2026" className="text-gold font-semibold hover:underline">calendario degli scioperi dei trasporti</Link>{' '}
                  spiega le fasce di garanzia e dove verificare ufficialmente una proclamazione.
                </p>
              </section>

              {/* 6 */}
              <section id="reclami" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">6. Richieste di rimborso e documenti</h2>
                <p>Quando una richiesta è contestata, o quando chiedi il rimborso di costi ulteriori rispetto alla tariffa, la valutiamo sulla base della documentazione disponibile. A seconda del caso possiamo chiederti:</p>
                <ul>
                  <li>Codice e conferma di prenotazione</li>
                  <li>Orario e luogo di prelievo concordati</li>
                  <li>Conferma o documentazione della compagnia aerea relativa al volo perso o riprogrammato</li>
                  <li>Ricevute del riacquisto o altra prova delle spese richieste</li>
                  <li>Messaggi o registri delle chiamate relativi al transfer e all&apos;eventuale ritardo</li>
                </ul>
                <p>Possiamo richiedere ulteriore documentazione se ragionevolmente necessaria per valutare la richiesta, e possiamo verificare le informazioni rilevanti quando è opportuno e lecito farlo.</p>
                <p>Tre impegni sul metodo:</p>
                <ul>
                  <li><strong>Non rifiutiamo una richiesta solo perché i documenti sono arrivati qualche giorno dopo.</strong> È normale affrontare prima il problema concreto e poi la documentazione.</li>
                  <li><strong>Non ti accusiamo di aver prodotto documenti falsi senza prove.</strong> Se qualcosa non torna, ti diciamo che cosa non coincide e te lo chiediamo.</li>
                  <li><strong>Motiviamo la decisione.</strong> Se la richiesta è respinta in tutto o in parte, spieghiamo su quali fatti e su quali condizioni ci siamo basati.</li>
                </ul>
                <p>Se non condividi la nostra valutazione puoi chiederci un riesame, e restano ferme le facoltà di rivolgerti agli strumenti di risoluzione alternativa delle controversie in materia di consumo o all&apos;autorità giudiziaria.</p>
              </section>

              {/* 7 */}
              <section id="pagamenti" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">7. Pagamenti e rimborsi</h2>
                <p>Utilizziamo più modalità di pagamento, e il significato pratico di &laquo;rimborso&raquo; dipende da quale si applica alla tua prenotazione.</p>
                <p><strong>Pagamento all&apos;autista il giorno del servizio.</strong> È la modalità predefinita. Poiché nulla viene incassato in anticipo, di norma non esiste un importo prepagato da restituire. Se cancelli all&apos;interno di una fascia con penale, l&apos;eventuale importo dovuto viene confermato con te e fatturato, non trattenuto da un prepagato.</p>
                <p><strong>Pagamento anticipato con carta.</strong> Quando è stato concordato un pagamento con carta tramite link sicuro, il rimborso approvato degli importi prepagati ammissibili viene restituito sul mezzo di pagamento originario ove praticabile. Come indicato nei Termini, per le prenotazioni pagate in anticipo i rimborsi sono elaborati entro <strong>7 giorni lavorativi</strong> dalla conferma della cancellazione. La precisazione &laquo;ove praticabile&raquo; conta: se lo strumento originario non può più ricevere un accredito — per esempio una carta scaduta o chiusa — concordiamo con te una via alternativa.</p>
                <p><strong>Conti aziendali e prenotazioni fatturate.</strong> Quando una prenotazione è fatturata secondo condizioni di conto concordate, penali e accrediti vengono applicati al conto invece di essere rimborsati come operazione separata.</p>
                <p>In ogni caso la richiesta va indirizzata a Italy Taxi Service, non all&apos;autista, e la gestiamo noi.</p>
              </section>

              {/* 8 */}
              <section id="cancelliamo-noi" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">8. Se cancelliamo noi</h2>
                <p>In casi eccezionali potremmo dover cancellare una prenotazione per circostanze fuori dal nostro ragionevole controllo — per esempio un evento naturale, disordini civili o una limitazione agli spostamenti imposta dall&apos;autorità. In tali casi viene emesso il rimborso integrale degli importi versati, come previsto dai Termini e Condizioni.</p>
                <p>Qualunque sia la ragione, se cancelliamo te lo comunichiamo il prima possibile e, quando è possibile, proponiamo una soluzione alternativa prima di ricorrere al rimborso.</p>
              </section>

              {/* 9 */}
              <section id="diritti" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">9. I tuoi diritti di legge</h2>
                <p>Le condizioni della sezione 3 costituiscono una <strong>politica commerciale volontaria</strong> che offriamo. Non sono una descrizione dei tuoi diritti di legge e non li sostituiscono.</p>
                <p>Un punto merita chiarezza, perché è spesso frainteso: il diritto di recesso di 14 giorni previsto per molti acquisti online in genere <em>non</em> si applica ai servizi di trasporto passeggeri. Ai sensi della direttiva UE sui diritti dei consumatori (2011/83/UE), i contratti di trasporto passeggeri sono esclusi dalla maggior parte dell&apos;ambito di applicazione in forza dell&apos;articolo 3, paragrafo 3, lettera k), fermo restando che alcune disposizioni continuano ad applicarsi. È questa la ragione per cui la nostra finestra di cancellazione gratuita è un impegno commerciale che scegliamo di offrire e non un periodo di recesso previsto dalla legge.</p>
                <p>Restano invece pienamente applicabili, e non sono toccate da questa politica, le tutele che <strong>si applicano</strong>: in particolare la disciplina delle clausole vessatorie nei contratti con i consumatori prevista dalla normativa italiana ed europea. Nulla di quanto qui previsto intende escludere o limitare la responsabilità dove la legge non lo consente, compresa la responsabilità per morte o lesioni personali derivanti da negligenza. Non applichiamo un&apos;esclusione generalizzata di responsabilità o dei danni conseguenti, e questa pagina non va letta in tal senso.</p>
                <p>Se una parte di questa politica risultasse inefficace, il resto continua ad applicarsi. Per la legge applicabile e la disciplina delle controversie si rinvia ai{' '}
                  <Link href="/terms-and-conditions" className="text-gold font-semibold hover:underline">Termini e Condizioni</Link>.
                </p>
                <p className="text-sm text-gray-500">Questa sezione descrive il quadro normativo generale per come lo intendiamo e non costituisce consulenza legale. La tua situazione specifica può differire.</p>
              </section>

              {/* 10 */}
              <section id="invio" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">10. Come inviare una richiesta</h2>
                <p>Invia per iscritto le richieste di cancellazione e rimborso, indicando il codice di prenotazione:</p>
                <ul>
                  <li><strong>Email:</strong> <a href="mailto:italytaxiservicee@gmail.com" className="text-gold font-semibold hover:underline">italytaxiservicee@gmail.com</a></li>
                  <li><strong>WhatsApp:</strong> il numero indicato nella conferma di prenotazione</li>
                  <li><strong>Modulo di contatto:</strong> <Link href="/it/contatti" className="text-gold font-semibold hover:underline">la nostra pagina contatti</Link></li>
                </ul>
                <p>Confermeremo la ricezione e ti comunicheremo l&apos;esito. Ricorda che la cancellazione ha effetto quando la confermiamo, non quando invii la richiesta.</p>
              </section>

              {/* 11 */}
              <section id="faq" className="mb-4 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">11. Domande frequenti</h2>

                <h3 className="text-lg font-bold text-navy mt-6 mb-2">Posso cancellare e ottenere un rimborso?</h3>
                <p>Sì, se comunichi la cancellazione per iscritto con più di 24 ore di preavviso rispetto al prelievo. In quel caso non è dovuta alcuna penale e gli importi prepagati ammissibili vengono rimborsati integralmente.</p>

                <h3 className="text-lg font-bold text-navy mt-6 mb-2">Cosa accade se cancello meno di 24 ore prima?</h3>
                <p>Una cancellazione tra 6 e 24 ore prima del prelievo comporta una penale pari al 50% della tariffa. Con meno di 6 ore di preavviso è dovuta l&apos;intera tariffa.</p>

                <h3 className="text-lg font-bold text-navy mt-6 mb-2">Cosa accade se cancello tra 24 e 48 ore prima?</h3>
                <p>È gratuito. La nostra finestra di gratuità copre qualunque preavviso superiore a 24 ore, quindi l&apos;intervallo tra 24 e 48 ore vi rientra e non comporta penali.</p>

                <h3 className="text-lg font-bold text-navy mt-6 mb-2">Cosa accade se non mi presento?</h3>
                <p>Se non ti presenti e non sei raggiungibile una volta trascorsa l&apos;attesa inclusa, la prenotazione può essere trattata come mancata presentazione e può essere dovuta l&apos;intera tariffa. Contattare l&apos;autista o noi in caso di ritardo di solito evita il problema.</p>

                <h3 className="text-lg font-bold text-navy mt-6 mb-2">Cosa accade se l&apos;autista è in ritardo per traffico o una manifestazione?</h3>
                <p>Ti avvisiamo il prima possibile e valutiamo con te le alternative. Un ritardo non comporta automaticamente il diritto a un rimborso, né lo esclude automaticamente: guardiamo alla causa, a quanto concordato e a quanto comunicato. Non consideriamo un&apos;interruzione esterna come fine automatica della nostra responsabilità.</p>

                <h3 className="text-lg font-bold text-navy mt-6 mb-2">Cosa accade se perdo il volo?</h3>
                <p>Avvisaci appena possibile: valuteremo il caso singolarmente sulla base delle prove. Non promettiamo di coprire voli sostitutivi, hotel o altri costi successivi, perché dipende dalla causa e dalle condizioni della prenotazione. Allo stesso tempo non respingiamo queste richieste per prassi.</p>

                <h3 className="text-lg font-bold text-navy mt-6 mb-2">Quali documenti servono per valutare una richiesta di rimborso?</h3>
                <p>Di norma codice e conferma di prenotazione, orario e luogo di prelievo concordati e, se pertinenti, la documentazione della compagnia aerea, le ricevute del riacquisto e i messaggi rilevanti. Possiamo chiedere altro se ragionevolmente necessario.</p>

                <h3 className="text-lg font-bold text-navy mt-6 mb-2">Cosa accade se ho pagato direttamente l&apos;autista?</h3>
                <p>Invia la richiesta a noi, non all&apos;autista. Italy Taxi Service è la parte contraente e gestisce cancellazioni e rimborsi indipendentemente dalla modalità di pagamento. Dove nulla è stato prepagato non c&apos;è un importo da restituire, quindi l&apos;eventuale penale viene confermata con te e fatturata.</p>

                <h3 className="text-lg font-bold text-navy mt-6 mb-2">Come invio una richiesta di cancellazione o rimborso?</h3>
                <p>Per iscritto: via email a italytaxiservicee@gmail.com, su WhatsApp al numero indicato nella conferma, oppure tramite la pagina contatti — sempre con il codice di prenotazione. L&apos;orario del messaggio scritto determina la fascia applicabile.</p>
              </section>

              <p className="text-sm text-gray-500 border-t border-gray-100 pt-6">
                Questa pagina va letta insieme ai nostri{' '}
                <Link href="/terms-and-conditions" className="text-gold font-semibold hover:underline">Termini e Condizioni</Link> e alla{' '}
                <Link href="/privacy-policy" className="text-gold font-semibold hover:underline">Privacy Policy</Link>.
              </p>

            </article>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
