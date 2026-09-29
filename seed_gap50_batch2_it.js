/** Gap-50 / opportunity batch 2 — Italian versions (translation_of the EN
 *  posts from seed_gap50_batch2.js). Genuinely localized, not translated:
 *  natural Italian search phrasing ("autista privato più giorni" rather
 *  than a literal "multi-day driver"), IT-native internal-link targets
 *  where they exist (/it/servizi/...), Italian-native metadata.
 *  Run: node seed_gap50_batch2_it.js */
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const env = Object.fromEntries(fs.readFileSync('.env', 'utf-8').split('\n').filter(l => l && !l.startsWith('#') && l.includes('=')).map(l => { const [k, ...v] = l.split('='); return [k.trim(), v.join('=').trim()]; }));
const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const cta = (text, href = '/it/contatti', label = 'Richiedi un Preventivo') => `
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

const posts = [

  // 1 ── EICMA Milano 2026 ────────────────────────────────────────────────
  {
    title: "EICMA Milano 2026: Guida ai Transfer e al Servizio Chauffeur",
    slug: "transfer-eicma-milano",
    translation_of: "eicma-milan-transfer",
    category: "Viaggi di Lavoro",
    read_time: "7 min di lettura",
    seo_title: "EICMA Milano 2026: Transfer dall'Aeroporto e Chauffeur",
    seo_description: "EICMA 2026 si svolge dal 3 all'8 novembre a Fiera Milano Rho. Confronta i transfer da Malpensa, Linate e Bergamo e organizza il tuo transfer privato.",
    focus_keyword: "transfer eicma milano",
    excerpt: "EICMA 2026, il Salone Internazionale del Motociclo, si svolge a Fiera Milano Rho dal 3 all'8 novembre. Ecco come arrivare dai tre aeroporti di Milano.",
    featured_image_url: "/images/milan airport.jpg",
    content: `
<p><strong>EICMA 2026, il Salone Internazionale del Motociclo, si svolge a Fiera Milano Rho dal 3 all'8 novembre 2026 — il 3 e 4 novembre riservati a stampa e operatori del settore, dal 5 all'8 novembre aperto al pubblico.</strong> Malpensa è l'aeroporto più diretto per raggiungere il quartiere fieristico, circa 25-35 minuti in auto; Linate e Bergamo sono entrambi praticabili ma si trovano sul lato opposto della città, quindi i tempi di percorrenza dipendono maggiormente dal traffico.</p>

<h2 id="su-eicma">EICMA 2026: le Informazioni Essenziali</h2>
<table>
  <tbody>
    <tr><td><strong>Date (stampa/operatori)</strong></td><td>3-4 novembre 2026</td></tr>
    <tr><td><strong>Date (pubblico)</strong></td><td>5-8 novembre 2026</td></tr>
    <tr><td><strong>Sede</strong></td><td>Fiera Milano Rho, Strada Statale del Sempione 28, 20017 Rho, Milano</td></tr>
    <tr><td><strong>Aeroporto più vicino</strong></td><td>Milano Malpensa (MXP)</td></tr>
    <tr><td><strong>Altri aeroporti di Milano</strong></td><td>Linate (LIN), Bergamo Orio al Serio (BGY)</td></tr>
  </tbody>
</table>
<p>EICMA è organizzata da ANCMA, l'associazione dei costruttori di motocicli aderente a Confindustria, ed è uno degli appuntamenti fieristici più importanti del settore, con espositori e visitatori da tutta Europa nello stesso polo di Fiera Milano Rho che ospita anche CPHI Milano.</p>

<h2 id="come-arrivare">Come Arrivare a EICMA dagli Aeroporti di Milano</h2>
<p>Fiera Milano Rho ha una propria fermata della metropolitana (linea M1, fermata Rho Fiera Milano), una soluzione ragionevole per chi viaggia leggero da un hotel in centro. Dagli aeroporti, la scelta migliore dipende da dove si atterra, da quanto bagaglio si porta — caschi, abbigliamento tecnico e materiale espositivo aumentano rapidamente il volume per gli operatori del settore — e se si viaggia da soli o in gruppo.</p>

<table>
  <thead><tr><th>Aeroporto</th><th>Distanza approssimativa</th><th>Tempo di percorrenza approssimativo</th></tr></thead>
  <tbody>
    <tr><td>Malpensa (MXP)</td><td>~45 km</td><td>~25-35 minuti via A8 e SS336</td></tr>
    <tr><td>Linate (LIN)</td><td>~19 km</td><td>~25-40 minuti, più variabile perché il percorso attraversa il centro di Milano</td></tr>
    <tr><td>Bergamo Orio al Serio (BGY)</td><td>~55-58 km</td><td>~40-55 minuti</td></tr>
  </tbody>
</table>
<p>Malpensa è il collegamento più diretto, essendo sullo stesso lato nord-ovest della città della fiera. Linate è più vicino in termini di distanza ma il percorso attraversa il centro città, quindi i tempi variano maggiormente col traffico. Bergamo è il più distante ma resta un'opzione realistica in giornata con un transfer prenotato in anticipo.</p>

${cta("Arrivi a Milano per EICMA? Un transfer privato ti porta direttamente da Malpensa, Linate o Bergamo a Fiera Milano Rho o al tuo hotel, a un prezzo fisso concordato in anticipo.", "/it/servizi/trasferimenti-aeroportuali", "Scopri i Transfer Aeroportuali")}

<h2 id="espositori">Transfer per Espositori e Operatori del Settore</h2>
<p>EICMA attira un pubblico fortemente B2B accanto agli appassionati — rivenditori, distributori e stampa che arrivano con materiale espositivo, campionari o attrezzatura fotografica, spesso per diversi giorni di incontri attorno alla fiera. Un transfer privato prenotato in anticipo evita di dipendere dai mezzi pubblici con bagagli ingombranti e può essere organizzato per arrivi anticipati prima delle giornate riservate a stampa e operatori del 3-4 novembre, o pianificato in base ai propri appuntamenti anziché a un orario fisso. Per i team che viaggiano insieme, un unico transfer di gruppo è generalmente più pratico che coordinare più taxi separati.</p>

<h2 id="consigli-prenotazione">Consigli per la Prenotazione</h2>
<ul>
  <li><strong>Prenota in anticipo per i primi giorni</strong> — il 3-4 novembre e il weekend di apertura registrano la maggiore richiesta sia per i transfer aeroportuali che per gli spostamenti verso gli hotel di Milano.</li>
  <li><strong>Comunica il numero di volo</strong> in modo che l'orario di ritiro possa adattarsi ad arrivi anticipati o ritardi.</li>
  <li><strong>Segnala eventuali bagagli ingombranti</strong> — campionari, materiale espositivo, attrezzatura fotografica — così da organizzare un veicolo adeguato.</li>
  <li><strong>Se soggiorni nel centro di Milano</strong>, ricorda che il tragitto hotel-fiera è separato dall'arrivo in aeroporto — entrambi possono essere prenotati insieme.</li>
</ul>

<h2 id="faq">Domande Frequenti</h2>
<h3 id="faq-1">Quando si svolge EICMA 2026?</h3>
<p>Le giornate riservate a stampa e operatori sono il 3-4 novembre 2026, mentre il pubblico può accedere dal 5 all'8 novembre 2026, a Fiera Milano Rho.</p>
<h3 id="faq-2">Qual è l'aeroporto più vicino a EICMA?</h3>
<p>Milano Malpensa (MXP) è il più diretto, a circa 25-35 minuti in auto via autostrada A8. Linate e Bergamo sono entrambi utilizzabili ma si trovano sul lato opposto di Milano rispetto alla fiera.</p>
<h3 id="faq-3">Si può arrivare a EICMA in metropolitana?</h3>
<p>Sì — Fiera Milano Rho ha una propria fermata sulla linea metropolitana M1 (Rho Fiera Milano), una soluzione ragionevole per chi viaggia leggero dal centro di Milano.</p>
<h3 id="faq-4">Posso prenotare un transfer privato direttamente a Fiera Milano Rho?</h3>
<p>Sì — i transfer privati possono essere prenotati in anticipo da Malpensa, Linate o Bergamo direttamente alla fiera o al tuo hotel di Milano, a un prezzo fisso concordato prima del viaggio.</p>
<h3 id="faq-5">Conviene un transfer privato per chi viaggia da solo?</h3>
<p>Dipende dal bagaglio e dagli orari. La metropolitana è una soluzione ragionevole per chi viaggia leggero; un transfer privato è più utile con campionari, attrezzatura o un'agenda serrata tra un appuntamento e l'altro.</p>
<h3 id="faq-6">È possibile organizzare transfer di gruppo?</h3>
<p>Sì — è possibile organizzare transfer di gruppo così un team che viaggia insieme non deve coordinare taxi separati.</p>
${related([
  { href: '/milan-chauffeur-service', label: 'Servizio Chauffeur a Milano' },
  { href: '/airport/milan-malpensa', label: 'Guida all\'Aeroporto di Malpensa' },
  { href: '/it/servizi/trasferimenti-aeroportuali', label: 'Trasferimenti Aeroportuali' },
  { href: '/it/blog/transfer-cphi-milano', label: 'Guida ai Transfer per CPHI Milano' },
  { href: '/it/contatti', label: 'Richiedi un Preventivo' },
])}
`
  },

  // 2 ── Autista privato per più giorni in Italia ─────────────────────────
  {
    title: "Autista Privato per Più Giorni in Italia: Come Funziona",
    slug: "autista-privato-piu-giorni-italia",
    translation_of: "multi-day-private-driver-italy",
    category: "Guida Commerciale",
    read_time: "7 min di lettura",
    seo_title: "Autista Privato per Più Giorni in Italia: Come Funziona",
    seo_description: "Noleggiare un autista privato per più giorni in Italia: come funzionano itinerario, pernottamenti e tariffe, e quando conviene rispetto a un'auto a noleggio.",
    focus_keyword: "autista privato più giorni italia",
    excerpt: "Vuoi esplorare la Toscana, la Costiera Amalfitana o più città italiane in diversi giorni? Ecco come funziona davvero il noleggio di un autista privato multi-giorno.",
    featured_image_url: "/images/blog/why-private-drivers-italy-2026.webp",
    content: `
<p><strong>Un autista privato per più giorni significa prenotare lo stesso autista e lo stesso veicolo per due o più giorni consecutivi, tipicamente per coprire un itinerario di viaggio — le colline vinicole della Toscana, la Costiera Amalfitana, o un percorso Roma-Firenze-Venezia — anziché un singolo transfer punto a punto.</strong> Viene organizzato attorno al tuo programma giornaliero concordato in anticipo, con una struttura fissa stabilita prima della partenza anziché prenotata tratta per tratta.</p>

<h2 id="come-funziona">Come si Organizza un Servizio Multi-Giorno</h2>
<p>A differenza di un singolo transfer aeroportuale o di un tour di un giorno, una prenotazione multi-giorno parte dal tuo itinerario di massima — quali città o regioni, quanti giorni, e a grandi linee cosa vuoi vedere o fare ogni giorno. Da lì si costruisce un programma giorno per giorno con distanze di guida realistiche tra le tappe, lasciando margine per adattarlo mentre il viaggio si svolge davvero. Lo stesso autista resta con te per i giorni prenotati, così non devi rispiegare i tuoi programmi a qualcuno di nuovo ogni mattina.</p>

<h2 id="pernottamenti">Pernottamenti e Logistica tra più Città</h2>
<p>Per un itinerario che si sposta tra città o regioni diverse — la Toscana un giorno, la Costiera Amalfitana qualche giorno dopo, ad esempio — la logistica di pernottamento dell'autista e i chilometri percorsi tra le tue tappe sono inclusi nella pianificazione e riflessi nel prezzo complessivo, senza che tu debba organizzare nulla separatamente. Non sei responsabile di alcun aspetto organizzativo lato autista — è gestito come parte della prenotazione.</p>

${cta("Stai pianificando un viaggio di più giorni in Toscana, sulla Costiera Amalfitana o tra più città italiane? Inviaci il tuo itinerario di massima e il numero di passeggeri per un preventivo.", "/it/servizi/tour-privati", "Pianifica un Itinerario Multi-Giorno")}

<h2 id="tariffe">Come Funzionano le Tariffe</h2>
<p>Il servizio multi-giorno viene generalmente tariffato per giornata, in base a quanta guida e quante tappe prevede quel giorno specifico. Una giornata trascorsa prevalentemente in una zona — una degustazione vini nel Chianti vicino a Firenze, ad esempio — ha una base tariffaria diversa da una giornata che copre un lungo trasferimento tra regioni. La struttura esatta viene confermata una volta definito l'itinerario, così hai un totale chiaro prima di partire, invece di un costo calcolato tratta per tratta.</p>

<table>
  <thead><tr><th></th><th>Autista Privato Multi-Giorno</th><th>Auto a Noleggio (guida autonoma)</th></tr></thead>
  <tbody>
    <tr><td>Guida</td><td>Gestita per te per tutto il viaggio</td><td>Guidi personalmente ogni tratta</td></tr>
    <tr><td>Strade locali e zone ZTL</td><td>Gestite da un autista che conosce la zona</td><td>I centri storici a traffico limitato (ZTL) possono comportare multe se si entra per errore</td></tr>
    <tr><td>Parcheggio</td><td>Non è un tuo problema ad ogni tappa</td><td>Spesso limitato o costoso nei centri storici</td></tr>
    <tr><td>Flessibilità dell'itinerario</td><td>Pianificato con te in anticipo, adattabile in corso d'opera</td><td>Piena libertà, ma gestisci tu la navigazione</td></tr>
    <tr><td>Viaggio di gruppo</td><td>Tutti viaggiano insieme in un unico veicolo</td><td>Dipende dalla dimensione del veicolo e dal numero di auto necessarie</td></tr>
  </tbody>
</table>

<h2 id="a-chi-si-rivolge">A Chi Si Rivolge il Servizio Multi-Giorno</h2>
<ul>
  <li><strong>Itinerari multi-regione</strong> — Toscana, Costiera Amalfitana o più città senza dover guidare personalmente tra una tappa e l'altra.</li>
  <li><strong>Gruppi e famiglie</strong> — che viaggiano insieme in un unico veicolo per tutto il viaggio, invece di dividersi tra più auto a noleggio.</li>
  <li><strong>Viaggiatori d'affari che prolungano un soggiorno</strong> — aggiungendo qualche giorno di visite attorno a un viaggio di lavoro senza organizzare trasporti separati ogni giorno.</li>
  <li><strong>Chi preferisce evitare strade italiane e zone ZTL</strong> — particolarmente rilevante nei centri storici come Firenze o Siena, dove entrare per errore in una zona a traffico limitato può comportare una multa.</li>
</ul>

<h2 id="consigli-prenotazione">Consigli per la Prenotazione</h2>
<ul>
  <li><strong>Condividi un programma di massima giorno per giorno</strong> quando richiedi un preventivo, anche se non definitivo — è più semplice perfezionare una bozza che partire da zero.</li>
  <li><strong>Conferma il numero di persone e i bagagli</strong> in anticipo, così viene organizzato il veicolo adatto per tutto il viaggio.</li>
  <li><strong>Segnala eventuali impegni fissi</strong> — un treno specifico da prendere, una visita in cantina con un orario stabilito — così il programma di guida può essere costruito attorno ad essi.</li>
  <li><strong>Valuta un noleggio di un solo giorno</strong> se il tuo viaggio è concentrato in un'unica regione per una sola giornata — il servizio multi-giorno ha senso soprattutto quando le tappe sono davvero separate su due o più giornate.</li>
</ul>

<h2 id="faq">Domande Frequenti</h2>
<h3 id="faq-1">In cosa si differenzia dal prenotare un transfer ogni giorno separatamente?</h3>
<p>È organizzato come un'unica prenotazione continuativa con un programma giorno per giorno concordato in anticipo, di solito con lo stesso autista per tutta la durata, anziché prenotare ogni tratta separatamente man mano.</p>
<h3 id="faq-2">Come viene calcolata la tariffa per un viaggio multi-giorno?</h3>
<p>Generalmente per giornata, in base a quanta guida e quante tappe prevede quel giorno. La struttura completa viene confermata una volta definito l'itinerario.</p>
<h3 id="faq-3">L'itinerario può cambiare a viaggio iniziato?</h3>
<p>Il programma viene costruito attorno al tuo itinerario di massima in anticipo, con un certo margine di adattamento mentre il viaggio si svolge — è meglio segnalare eventuali cambiamenti il prima possibile.</p>
<h3 id="faq-4">Conviene di più rispetto a un'auto a noleggio?</h3>
<p>Dipende dalle tue priorità. Un'auto a noleggio offre piena autonomia se te la senti di guidare sulle strade italiane e gestire le restrizioni ZTL da solo; l'autista multi-giorno elimina del tutto la guida, il parcheggio e il rischio ZTL, con una base tariffaria diversa.</p>
<h3 id="faq-5">Lo stesso autista resta con noi per tutto il viaggio?</h3>
<p>Generalmente sì — lo stesso autista e lo stesso veicolo vengono prenotati per i giorni concordati, così non ricominci da capo con qualcuno di nuovo ogni giorno.</p>
<h3 id="faq-6">Per quali regioni è più indicato?</h3>
<p>Gli itinerari multi-regione sono l'utilizzo più chiaro — le colline vinicole della Toscana, la Costiera Amalfitana, o un percorso tra più città come Roma, Firenze e Venezia.</p>
<h3 id="faq-7">Possiamo combinare il tour multi-giorno con un transfer aeroportuale?</h3>
<p>Sì — un itinerario multi-giorno può iniziare o terminare con un ritiro o un trasferimento in aeroporto come parte della stessa prenotazione.</p>
${related([
  { href: '/it/servizi/tour-privati', label: 'Tour Privati in Italia' },
  { href: '/blog/hire-private-chauffeur-day-italy', label: 'Come Noleggiare un Autista per un Giorno' },
  { href: '/blog/tuscany-wine-tour-without-a-car-private-driver', label: 'Tour del Vino in Toscana Senza Auto' },
  { href: '/city/florence', label: 'Informazioni di Viaggio sulla Toscana' },
  { href: '/it/contatti', label: 'Richiedi un Preventivo' },
])}
`
  },
];

async function run() {
  const { data: author, error: aerr } = await supabase.from('bloggers').select('id').limit(1).single();
  if (aerr || !author) { console.error('No author found:', aerr); process.exit(1); }

  for (const post of posts) {
    const { data, error } = await supabase
      .from('blogs')
      .insert({ ...post, language: 'it', status: 'published', author_id: author.id, published_at: new Date().toISOString(), tags: [] })
      .select('slug');
    if (error) { console.error(`Insert error for ${post.slug}:`, error); process.exit(1); }
    console.log('Inserted:', data);
  }
  console.log('\nDone — 2 IT posts published, linked via translation_of.');
}

run();
