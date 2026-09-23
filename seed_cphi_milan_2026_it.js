/** Italian counterpart of seed_cphi_milan_2026.js — genuine Italian content
 *  (not machine-translated), language='it', translation_of pointing to the
 *  EN slug, matching the site's existing /it/blog/[slug] architecture.
 *  Uses correct IT-native service pages where they exist (verified live:
 *  /it/servizi/trasferimenti-aeroportuali, /it/servizi/taxi-aziendale,
 *  /it/servizi/trasferimenti-hotel, /it/contatti) rather than reusing EN
 *  paths, and the plain EN path only where no IT page exists
 *  (/milan-chauffeur-service, /book-now, /airport/milan-malpensa,
 *  /airport/milan-linate — none of these has an /it/ counterpart).
 *  Run AFTER seed_cphi_milan_2026.js: node seed_cphi_milan_2026_it.js */
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const env = Object.fromEntries(fs.readFileSync('.env', 'utf-8').split('\n').filter(l => l && !l.startsWith('#') && l.includes('=')).map(l => { const [k, ...v] = l.split('='); return [k.trim(), v.join('=').trim()]; }));
const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const cta = (text, href = '/book-now', label = 'Richiedi un Preventivo') => `
<div style="background:#0F1C2E;color:#fff;padding:28px 32px;border-radius:16px;margin:32px 0;">
  <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#e2e8f0;">${text}</p>
  <a href="${href}" style="display:inline-block;background:#c5a059;color:#0F1C2E;font-weight:700;padding:12px 26px;border-radius:999px;text-decoration:none;">${label} →</a>
</div>`;

const related = (links) => `
<div class="internal-links-block" style="background:#f8fafc;padding:28px;border-radius:16px;margin-top:40px;border:1px solid #e2e8f0;">
  <h3 style="margin-top:0;color:#0F1C2E;">Guide e Servizi Correlati</h3>
  <ul style="margin-bottom:0;">
    ${links.map(l => `<li><a href="${l.href}" style="color:#c5a059;font-weight:600;">${l.label}</a></li>`).join('\n    ')}
  </ul>
</div>`;

const itPost = {
  title: "Guida ai Transfer e Chauffeur per CPHI Milano 2026",
  slug: "transfer-cphi-milano",
  translation_of: "cphi-milan-transfer",
  category: "Viaggi di Lavoro",
  read_time: "8 min",
  seo_title: "Guida ai Transfer e Chauffeur per CPHI Milano 2026",
  seo_description: "Partecipi a CPHI Milano 2026 (6-8 ottobre, Fiera Milano Rho)? Ecco come raggiungere la fiera da Malpensa, Linate o Bergamo, e quando conviene un transfer privato.",
  focus_keyword: "transfer cphi milano",
  excerpt: "Una guida pratica ai trasporti per chi partecipa a CPHI Milano 2026 — aeroporti, hotel, quartiere fieristico, e quando un transfer privato prenotato in anticipo è davvero utile.",
  featured_image_url: "/images/milan airport.jpg",
  content: `
<p><strong>CPHI Milano 2026 si svolge dal 6 all'8 ottobre 2026 a Fiera Milano Rho, sul lato nord-ovest di Milano.</strong> Come per la maggior parte di chi partecipa a una fiera internazionale di tre giorni, le domande sui trasporti che contano davvero sono semplici: quale aeroporto scegliere, come arrivare da lì all'hotel o al quartiere fieristico, e come muoversi per il resto dell'evento. Questa guida risponde direttamente a tutto questo.</p>

<h2 id="in-breve">CPHI Milano 2026 in Breve</h2>
<table>
  <thead><tr><th>Informazione</th><th>Dettagli</th></tr></thead>
  <tbody>
    <tr><td>Evento</td><td>CPHI Milano 2026</td></tr>
    <tr><td>Date</td><td>6-8 ottobre 2026</td></tr>
    <tr><td>Sede</td><td>Fiera Milano Rho</td></tr>
    <tr><td>Indirizzo</td><td>Strada Statale del Sempione 28, 20017 Rho, Milano</td></tr>
    <tr><td>Aeroporto più vicino</td><td>Milano Malpensa (MXP)</td></tr>
    <tr><td>Altri aeroporti di Milano</td><td>Linate (LIN), Milano Bergamo/Orio al Serio (BGY)</td></tr>
    <tr><td>Opzioni di trasporto</td><td>Transfer privato, taxi, mezzi pubblici</td></tr>
  </tbody>
</table>

<h2 id="come-arrivare">Come Arrivare a CPHI Milano 2026</h2>
<p>Non esiste un unico modo "migliore" per raggiungere Fiera Milano Rho — la scelta giusta dipende da quale aeroporto usi, da dove alloggi, da quanti bagagli o materiali fieristici porti con te e se viaggi da solo o con colleghi.</p>
<p>I <strong>mezzi pubblici</strong> raggiungono direttamente Fiera Milano Rho — la fiera ha una propria fermata della metropolitana milanese (linea M1, fermata Rho Fiera Milano) — un'opzione ragionevole per chi viaggia da solo e senza troppi bagagli tra un hotel in centro e la fiera. I <strong>taxi</strong> sono disponibili a tutti e tre gli aeroporti di Milano e in città, utili per spostamenti singoli ma con un costo che si conosce solo a corsa finita. Un <strong>transfer privato</strong> prenotato in anticipo si organizza a prezzo fisso e ti porta porta a porta — aeroporto-hotel, hotel-fiera o direttamente aeroporto-fiera — il che conta di più se porti valigette campionario o materiale per lo stand, viaggi con colleghi o hai un programma di incontri serrato.</p>

${cta("Voli a Milano per CPHI e vuoi organizzare l'arrivo prima ancora di partire? Un transfer privato si può prenotare da qualsiasi aeroporto di Milano.", "/it/servizi/trasferimenti-aeroportuali", "Scopri i Trasferimenti Aeroportuali")}

<h2 id="transfer-aeroportuali">Transfer Aeroportuali per CPHI Milano</h2>
<p>Milano è servita da tre aeroporti, e nessuno dei tre si trova in città — ogni arrivo comporta comunque un trasferimento. Ecco come ciascuno si colloca rispetto a Fiera Milano Rho.</p>

<h3 id="malpensa">Da Malpensa (MXP) a CPHI Milano</h3>
<p>Malpensa è il principale hub internazionale di Milano e, per CPHI Milano in particolare, l'aeroporto più diretto dei tre — Fiera Milano Rho si trova sullo stesso lato nord-ovest della città dell'aeroporto. Un transfer privato da Malpensa a Fiera Milano richiede in genere circa 25-35 minuti tramite l'autostrada A8 e il collegamento diretto SS336, evitando del tutto il centro di Milano. Questo è già uno dei percorsi business più richiesti tra i nostri servizi a Milano, segno di quanto spesso chi atterra a Malpensa sia diretto proprio a Fiera Milano piuttosto che in città.</p>

<h3 id="linate">Da Linate (LIN) a CPHI Milano</h3>
<p>Linate è l'aeroporto più vicino al centro di Milano, a circa 7 km a est, e serve soprattutto rotte europee a corto raggio. È il più rapido dei tre per raggiungere gli hotel del centro — ma Fiera Milano Rho si trova sul lato opposto, nord-ovest, della città, quindi un tragitto da Linate alla fiera significa attraversare Milano invece di evitarla. Se il tuo volo passa solo da Linate, conviene mettere in conto tempo extra e, se la prima tappa è l'hotel e non la fiera, passare prima dal centro invece di puntare direttamente su Rho.</p>

<h3 id="bergamo">Da Bergamo (BGY) a CPHI Milano</h3>
<p>Bergamo Orio al Serio — ufficialmente Milano Bergamo Airport — è lo scalo low-cost di Milano, servito soprattutto da Ryanair ed easyJet. Si trova a circa 45 km a nord-est di Milano, oltre un rilievo collinare, e come Linate è sul lato opposto della città rispetto a Fiera Milano Rho. I tempi di percorrenza da Bergamo variano più che da Malpensa a seconda della destinazione esatta e del traffico, quindi se arrivi con una compagnia low-cost conviene calcolare un margine realistico invece di dare per scontato un tragitto breve.</p>

${cta("Qualunque sia l'aeroporto del tuo volo per CPHI Milano, un transfer privato può portarti direttamente in hotel o alla fiera.", "/milan-chauffeur-service", "Scopri il Milan Chauffeur Service")}

<h2 id="transfer-privato">Transfer Privato per CPHI Milano</h2>
<p><strong>Sì — un transfer privato può essere prenotato in anticipo per l'arrivo, la partenza e gli spostamenti tra il tuo hotel e Fiera Milano durante l'evento.</strong> Il motivo per prenotarne uno è pratico, non eccezionale: un ritiro organizzato in anticipo significa non dover cercare un taxi in un aeroporto o all'uscita della fiera in un giorno di grande affluenza, i bagagli e le valigette campionario vengono gestiti senza che tu debba occupartene, e il prezzo è fisso e noto in anticipo invece che calcolato al tassametro.</p>
<p>Questo è utile soprattutto per espositori e viaggiatori d'affari con un programma definito — un volo da rispettare, uno stand da allestire, appuntamenti in sequenza — dove un'attesa imprevedibile per il trasporto è un costo reale, non solo un fastidio. È meno necessario se arrivi senza un programma fisso, viaggi leggero e sei disposto a usare la metropolitana o un taxi normale.</p>

<h2 id="transfer-hotel">Transfer dagli Hotel per CPHI Milano</h2>
<p>Oltre alla tratta aeroportuale, la maggior parte di chi partecipa a CPHI Milano ha bisogno di trasporto per almeno altri tre spostamenti: <strong>dall'hotel a Fiera Milano</strong> ogni giorno di fiera, <strong>da Fiera Milano all'hotel</strong> alla sera, e <strong>dall'hotel all'aeroporto</strong> per la partenza. Ognuno di questi può essere prenotato in anticipo come un transfer aeroportuale — orario e prezzo fissi, organizzati prima dell'inizio dell'evento invece che decisi giorno per giorno.</p>
<p>Organizzare in anticipo il tragitto hotel-fiera conta più durante una fiera di tre giorni che per una singola visita in città, dato che probabilmente ripeterai lo stesso tragitto più volte e vuoi che sia prevedibile ogni volta. Consulta il nostro <a href="/it/servizi/trasferimenti-hotel">servizio di trasferimenti in hotel</a> per capire come funziona in generale, oppure la pagina <a href="/milan-chauffeur-service">Milan Chauffeur Service</a> per il dettaglio specifico su Milano, inclusa la copertura di Malpensa, Linate e Bergamo.</p>

<h2 id="viaggiatori-business">Transfer per Espositori, Buyer e Visitatori Business a CPHI Milano</h2>
<p>Espositori, buyer e altri visitatori business a CPHI Milano affrontano di solito un problema di trasporto diverso rispetto a un visitatore occasionale: più appuntamenti nei tre giorni di fiera, un programma che può cambiare con poco preavviso, un arrivo in aeroporto che deve coincidere con l'allestimento dello stand o un primo incontro, e spesso bagagli o materiali di lavoro oltre alla valigia standard. Un transfer prenotato in anticipo — per l'arrivo, per la tratta quotidiana hotel-fiera e per la partenza — elimina la parte meno prevedibile di questo programma, cioè spostarsi puntualmente tra un luogo e l'altro.</p>
<p>Per una giornata con più tappe invece di un unico spostamento, una prenotazione a ore o multi-tappa è in genere più pratica rispetto a prenotare corse separate per ogni tratta — consulta il nostro <a href="/it/servizi/taxi-aziendale">servizio taxi aziendale</a> per capire come si organizza.</p>

${cta("Viaggi verso CPHI Milano per lavoro, con appuntamenti nei tre giorni di fiera? Contattaci per il tuo programma.", "/it/contatti", "Contattaci")}

<h2 id="transfer-gruppo">Transfer di Gruppo per CPHI Milano</h2>
<p>Team di espositori e delegazioni internazionali che viaggiano insieme possono prenotare un trasporto di gruppo invece di organizzare veicoli separati per ogni persona — utile quando un team deve arrivare insieme alla fiera, o quando coordinare più taxi singoli rischierebbe di dividere o ritardare il gruppo. Per gruppi più numerosi o con bagagli aggiuntivi sono disponibili veicoli più grandi; specifica il numero di persone e i bagagli al momento della prenotazione così viene organizzato il veicolo giusto, invece di dare per scontata una capacità standard.</p>

<h2 id="fiera-milano">Fiera Milano Rho: la Sede</h2>
<p>Fiera Milano Rho è uno dei più grandi complessi fieristici d'Europa, distribuito su circa venti padiglioni collegati da una spina pedonale lunga circa un chilometro. Si trova a Rho, sul lato nord-ovest di Milano, ed è anche la sede abituale di altre grandi manifestazioni come il Salone del Mobile ed EICMA — quindi se hai già partecipato a una di queste, la disposizione e i punti di accesso ti saranno familiari. La fiera ha una propria fermata della metropolitana milanese (linea M1, Rho Fiera Milano) oltre all'accesso autostradale diretto tramite l'A8, lo stesso utilizzato da un transfer privato in arrivo da Malpensa.</p>

<h2 id="guida-pratica">Guida Pratica ai Trasporti</h2>
<table>
  <thead><tr><th>Spostamento</th><th>Opzione adatta</th></tr></thead>
  <tbody>
    <tr><td>Aeroporto → Hotel</td><td>Transfer privato, taxi o treno (a seconda del percorso)</td></tr>
    <tr><td>Aeroporto → Fiera Milano</td><td>Transfer privato o mezzi pubblici (metro M1, fermata Rho Fiera Milano)</td></tr>
    <tr><td>Hotel → Fiera Milano</td><td>Transfer privato, taxi o metro, a seconda della posizione dell'hotel</td></tr>
    <tr><td>Fiera Milano → Hotel</td><td>Transfer privato, taxi o metro</td></tr>
    <tr><td>Hotel → Aeroporto (partenza)</td><td>Transfer prenotato in anticipo, taxi o treno</td></tr>
    <tr><td>Trasporto per team/espositori</td><td>Veicolo privato di gruppo, dimensionato su passeggeri e bagagli</td></tr>
  </tbody>
</table>

<h2 id="consigli">Consigli per Prenotare i Trasporti per CPHI Milano</h2>
<ul>
  <li><strong>Prenota i transfer aeroportuali in anticipo</strong> — durante un grande evento fieristico la disponibilità di veicoli è più limitata rispetto a una settimana normale.</li>
  <li><strong>Comunica il numero del tuo volo</strong> per i ritiri in aeroporto, così l'arrivo può essere monitorato e adattato in caso di ritardo.</li>
  <li><strong>Conferma l'hotel esatto e il suo indirizzo</strong> al momento della prenotazione, soprattutto se si trova fuori dal centro di Milano.</li>
  <li><strong>Conferma il numero di passeggeri e i bagagli</strong>, incluse eventuali valigette campionario o materiali fieristici, così viene organizzato un veicolo di dimensioni adeguate.</li>
  <li><strong>Metti in conto tempo extra per il traffico</strong> intorno alla fiera negli orari di punta, soprattutto a inizio e fine giornata.</li>
  <li><strong>Organizza in anticipo il transfer di ritorno verso l'aeroporto</strong>, invece di lasciarlo all'ultimo giorno dell'evento.</li>
  <li><strong>Conferma le istruzioni di ritiro</strong> — punto d'incontro, modalità di contatto con l'autista — prima di partire, non dopo l'atterraggio.</li>
</ul>

<h2 id="domande-frequenti">Domande Frequenti</h2>
<h3 id="faq-1">Come si arriva a CPHI Milano?</h3>
<p>CPHI Milano si svolge a Fiera Milano Rho, raggiungibile con la linea metropolitana M1 (fermata Rho Fiera Milano), in taxi o con un transfer privato prenotato in anticipo da uno dei tre aeroporti di Milano o dal tuo hotel. L'opzione più adatta dipende dall'aeroporto, dai bagagli e dal programma.</p>
<h3 id="faq-2">Qual è l'aeroporto più vicino a CPHI Milano?</h3>
<p>Malpensa (MXP) è il più diretto dei tre aeroporti di Milano per raggiungere Fiera Milano Rho, dato che entrambi si trovano sullo stesso lato nord-ovest della città — un transfer privato richiede in genere circa 25-35 minuti. Linate e Bergamo sono entrambi sul lato opposto di Milano rispetto alla fiera.</p>
<h3 id="faq-3">Come si arriva da Malpensa a CPHI Milano?</h3>
<p>Un transfer privato da Malpensa a Fiera Milano Rho richiede circa 25-35 minuti tramite l'autostrada A8 e il collegamento diretto SS336, evitando il centro di Milano. Può essere prenotato in anticipo per il tuo orario di arrivo esatto.</p>
<h3 id="faq-4">Posso prenotare un transfer privato per CPHI Milano?</h3>
<p>Sì. I transfer privati possono essere prenotati in anticipo da Malpensa, Linate o Bergamo direttamente a Fiera Milano Rho o al tuo hotel, a un prezzo fisso concordato prima del viaggio.</p>
<h3 id="faq-5">Posso prenotare un transfer dal mio hotel a Milano fino a CPHI?</h3>
<p>Sì — i transfer hotel-fiera possono essere prenotati per ogni giorno dell'evento, insieme al viaggio di ritorno in hotel alla sera.</p>
<h3 id="faq-6">Un autista privato è utile per gli espositori di CPHI Milano?</h3>
<p>Può esserlo, in particolare per un programma con più tappe nella stessa giornata — allestimento dello stand, appuntamenti e rientro serale — dove una prenotazione a ore o multi-tappa evita di dover organizzare un trasporto separato per ogni tratta.</p>
<h3 id="faq-7">Le aziende possono prenotare trasporti di gruppo per CPHI Milano?</h3>
<p>Sì. Team di espositori e delegazioni possono prenotare transfer di gruppo invece di dividersi su taxi singoli — utile per tenere unito un team e coordinare un unico orario di arrivo invece di diversi.</p>
<h3 id="faq-8">Con quanto anticipo conviene prenotare il transfer aeroportuale per CPHI Milano?</h3>
<p>Il prima possibile, non appena i piani di viaggio sono confermati, dato che durante un grande evento fieristico la disponibilità dei veicoli è più limitata rispetto a una settimana normale — vale sia per l'arrivo sia per il transfer di ritorno.</p>

<p style="margin-top:32px;">Stai organizzando il tuo transfer per CPHI Milano? <a href="/book-now">Richiedi un preventivo</a> per il trasporto da aeroporto, hotel o fiera, oppure <a href="/it/contatti">contattaci</a> direttamente se stai coordinando il viaggio per un team.</p>
${related([
  { href: '/milan-chauffeur-service', label: 'Milan Chauffeur Service' },
  { href: '/airport/milan-malpensa', label: 'Guida Aeroporto di Milano Malpensa' },
  { href: '/airport/milan-linate', label: 'Guida Aeroporto di Milano Linate' },
  { href: '/it/servizi/taxi-aziendale', label: 'Taxi Aziendale Executive in Italia' },
  { href: '/it/servizi/trasferimenti-hotel', label: 'Trasferimenti in Hotel in Italia' },
  { href: '/book-now', label: 'Richiedi un Preventivo' },
])}
`
};

async function run() {
  const { data: author, error: aerr } = await supabase.from('bloggers').select('id').limit(1).single();
  if (aerr || !author) { console.error('No author found:', aerr); process.exit(1); }

  const { data, error } = await supabase
    .from('blogs')
    .insert({ ...itPost, language: 'it', status: 'published', author_id: author.id, published_at: new Date().toISOString(), tags: [] })
    .select('slug');
  if (error) { console.error('Insert error:', error); process.exit(1); }
  console.log('Inserted:', data);
  console.log('Done — 1 IT post published, linked via translation_of.');
}

run();
