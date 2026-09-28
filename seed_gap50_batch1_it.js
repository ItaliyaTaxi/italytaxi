/** Italian counterparts of seed_gap50_batch1.js — genuine Italian content
 *  (not machine-translated), language='it', translation_of pointing to each
 *  EN slug. IT-native service pages used where they exist (verified:
 *  /it/servizi/trasferimenti-aeroportuali); /airport/milan-malpensa,
 *  /airport/turin, /milan-chauffeur-service, /route/milan-to-turin-taxi,
 *  /city/milan, /services/private-tours and /book-now reused as plain EN
 *  paths since none has an /it/ counterpart.
 *  Run AFTER seed_gap50_batch1.js: node seed_gap50_batch1_it.js */
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

const posts = [

  // 1 ── Milano Centrale - Malpensa ───────────────────────────────────────
  {
    title: "Da Milano Centrale a Malpensa: le Opzioni più Rapide",
    slug: "transfer-milano-centrale-malpensa",
    translation_of: "milano-centrale-to-malpensa-transfer",
    category: "Guide ai Trasporti",
    read_time: "6 min",
    seo_title: "Milano Centrale - Malpensa: Treno o Transfer Privato",
    seo_description: "Da Milano Centrale a Malpensa: il Malpensa Express impiega circa 51 minuti, oppure un transfer privato copre lo stesso tragitto porta a porta.",
    focus_keyword: "milano centrale malpensa transfer",
    excerpt: "Due modi reali per andare da Milano Centrale all'aeroporto di Malpensa — il Malpensa Express e un transfer privato — messi a confronto su tempi, comodità e bagagli.",
    featured_image_url: "/images/milan airport.jpg",
    content: `
<p><strong>Da Milano Centrale, il Malpensa Express impiega circa 51 minuti per raggiungere l'aeroporto di Malpensa, con partenze ogni 30 minuti circa; un transfer privato copre la stessa distanza su strada, porta a porta, in genere in 50-60 minuti a seconda del traffico.</strong> Sono entrambe opzioni reali — quale abbia più senso dipende dai tuoi bagagli, dal tuo programma e dal fatto che tu viaggi da solo o con altri.</p>

<h2 id="opzioni">Da Milano Centrale a Malpensa: le Opzioni</h2>
<p>Milano Centrale è il cuore della rete ferroviaria milanese, e l'aeroporto di Malpensa (MXP) si trova a circa 50 km a nord-ovest della città. Due opzioni realistiche li collegano direttamente: il treno dedicato Malpensa Express, e un transfer privato in auto. Anche un normale taxi dal posteggio funziona, ma senza un prezzo fisso concordato in anticipo.</p>

<h2 id="treno">Il Treno Malpensa Express</h2>
<p>Il Malpensa Express è il collegamento ferroviario dedicato di Trenord tra Milano Centrale e Malpensa (con fermata anche a Milano Porta Garibaldi lungo il tragitto). Il tempo di percorrenza da Milano Centrale è di circa 51 minuti, con partenze ogni 30 minuti circa per gran parte della giornata, da poco prima delle 5 del mattino a poco dopo le 23. Un biglietto di seconda classe costa circa 15 euro. È un'opzione genuinamente comoda se viaggi leggero e non hai problemi a orientarti in una grande stazione trovando il binario con un po' di anticipo.</p>

<h2 id="transfer-privato">Transfer Privato da Milano Centrale a Malpensa</h2>
<p>Un transfer privato prenotato in anticipo ti preleva a Milano Centrale — o al tuo hotel, se più comodo — e ti porta direttamente al tuo terminal a Malpensa, a un prezzo fisso concordato prima della partenza. La distanza stradale è di circa 50 km, e il tragitto richiede in genere 50-60 minuti in condizioni di traffico normali tramite l'autostrada A8, anche se questo varia a seconda dell'orario. La differenza pratica principale rispetto al treno è che un transfer privato è porta a porta e non comporta trasportare bagagli attraverso una stazione o cercare un binario — più rilevante se viaggi in gruppo, con valigie pesanti o con una coincidenza stretta per un volo.</p>

${cta("Hai bisogno di un transfer diretto da Milano Centrale a Malpensa? Un autista privato può prelevarti alla stazione o al tuo hotel.", "/it/servizi/trasferimenti-aeroportuali", "Scopri i Trasferimenti Aeroportuali")}

<h2 id="quale-scegliere">Quale Opzione Scegliere?</h2>
<table>
  <thead><tr><th>Fattore</th><th>Treno Malpensa Express</th><th>Transfer Privato</th></tr></thead>
  <tbody>
    <tr><td>Tempo di percorrenza</td><td>~51 minuti</td><td>~50-60 minuti (dipende dal traffico)</td></tr>
    <tr><td>Punto di partenza</td><td>Binario di Milano Centrale</td><td>Ingresso di Milano Centrale o il tuo hotel</td></tr>
    <tr><td>Arrivo</td><td>Stazione del terminal a Malpensa</td><td>Direttamente fuori dal tuo terminal</td></tr>
    <tr><td>Base del costo</td><td>Prezzo fisso per biglietto</td><td>Prezzo fisso concordato in anticipo</td></tr>
    <tr><td>Più adatto a</td><td>Viaggiatori singoli con bagagli leggeri</td><td>Gruppi, bagagli pesanti, programmi serrati</td></tr>
  </tbody>
</table>
<p>Nessuna delle due opzioni è universalmente migliore — il treno è un servizio genuinamente solido, frequente e diretto, e un transfer privato si giustifica soprattutto per la comodità porta a porta più che per la sola velocità.</p>

<h2 id="consigli">Consigli per la Prenotazione</h2>
<ul>
  <li><strong>Se prendi il treno</strong>, verifica quale binario di Milano Centrale usa il Malpensa Express il giorno stesso, dato che può variare.</li>
  <li><strong>Se prenoti un transfer privato</strong>, comunica il numero del tuo volo se si tratta di una partenza, così l'orario di ritiro può tenere conto del check-in.</li>
  <li><strong>Conferma il punto di ritiro esatto</strong> — l'ingresso principale di Milano Centrale, un hotel specifico o altro.</li>
  <li><strong>Metti in conto tempo extra nei periodi di viaggio più intensi</strong>, quando sia la stazione sia l'autostrada possono essere più trafficate del solito.</li>
</ul>

<h2 id="domande-frequenti">Domande Frequenti</h2>
<h3 id="faq-1">Quanto tempo serve da Milano Centrale a Malpensa?</h3>
<p>Il treno Malpensa Express impiega circa 51 minuti. Un transfer privato su strada copre gli stessi circa 50 km in circa 50-60 minuti a seconda del traffico.</p>
<h3 id="faq-2">È più veloce il Malpensa Express o un transfer privato?</h3>
<p>Sono sostanzialmente simili come tempo di percorrenza. Il treno è un servizio fisso e programmato; un transfer privato aggiunge comodità porta a porta più che un risparmio di tempo significativo.</p>
<h3 id="faq-3">Con quale frequenza parte il Malpensa Express da Milano Centrale?</h3>
<p>Circa ogni 30 minuti per gran parte della giornata, da poco prima delle 5 del mattino a poco dopo le 23.</p>
<h3 id="faq-4">Un transfer privato può prelevarmi al mio hotel a Milano invece che alla stazione?</h3>
<p>Sì — un transfer privato per Malpensa può partire da Milano Centrale, dal tuo hotel o da un altro indirizzo a Milano, non solo dalla stazione.</p>
<h3 id="faq-5">Vale la pena un transfer privato per chi viaggia da solo?</h3>
<p>Dipende dalle priorità. Il treno è una scelta perfettamente valida per un viaggiatore singolo con bagagli leggeri; un transfer privato è più utile se hai bagagli pesanti, un programma serrato o semplicemente preferisci non orientarti in stazione.</p>
<h3 id="faq-6">Il Malpensa Express ferma anche altrove a Milano?</h3>
<p>Sì — ferma anche a Milano Porta Garibaldi, oltre a Milano Centrale.</p>
${related([
  { href: '/airport/milan-malpensa', label: 'Guida Aeroporto di Milano Malpensa' },
  { href: '/milan-chauffeur-service', label: 'Milan Chauffeur Service' },
  { href: '/it/servizi/trasferimenti-aeroportuali', label: 'Trasferimenti Aeroportuali in Italia' },
  { href: '/city/milan', label: 'Guida alla Città di Milano' },
  { href: '/book-now', label: 'Richiedi un Preventivo' },
])}
`
  },

  // 2 ── Aeroporto di Torino - piste da sci ───────────────────────────────
  {
    title: "Transfer Aeroporto di Torino: Città e Piste da Sci",
    slug: "transfer-aeroporto-torino-sci",
    translation_of: "turin-airport-transfers-ski",
    category: "Guide ai Trasporti",
    read_time: "6 min",
    seo_title: "Aeroporto di Torino: Transfer per Città e Piste da Sci",
    seo_description: "L'Aeroporto di Torino Caselle (TRN) dista 16 km dal centro città e circa 1,5 ore da Sestriere o Courmayeur — ecco come organizzare il transfer.",
    focus_keyword: "transfer aeroporto torino sci",
    excerpt: "L'Aeroporto di Torino Caselle collega sia la città di Torino sia le Alpi — ecco cosa aspettarti per il transfer verso il centro città e verso le piste di Sestriere e Courmayeur.",
    featured_image_url: "/images/beach-transfer.webp",
    content: `
<p><strong>L'Aeroporto di Torino Caselle (TRN) si trova a circa 16 km a nord del centro di Torino, e a circa 1 ora e mezza su strada dalle stazioni sciistiche alpine di Sestriere o Courmayeur.</strong> È un aeroporto più piccolo rispetto a quelli di Milano, ma serve genuinamente un duplice scopo per i visitatori — una porta d'accesso a Torino stessa, e, per chi viaggia in inverno, un punto d'arrivo realistico per le stazioni sciistiche del Piemonte e della Valle d'Aosta.</p>

<h2 id="aeroporto-torino">L'Aeroporto di Torino Caselle (TRN)</h2>
<p>L'aeroporto di Torino — ufficialmente Torino-Caselle, codice IATA TRN — si trova a 16 km a nord della città, al servizio del Piemonte. È considerevolmente più piccolo di Milano Malpensa o Linate, con un processo di arrivo corrispondentemente più semplice, ma è il naturale punto di arrivo sia per Torino stessa sia per le stazioni sciistiche montane della regione più ampia.</p>

<h2 id="verso-centro">Dall'Aeroporto di Torino al Centro Città</h2>
<p>Per i visitatori diretti a Torino — per visitare il Museo Egizio, il quartiere del Lingotto, o le zone vinicole piemontesi intorno a Barolo e Barbaresco un po' più lontano — il tragitto aeroporto-città è breve, data la distanza di 16 km. Un taxi o un transfer privato prenotato in anticipo possono portarti direttamente al tuo hotel; esistono anche opzioni di trasporto pubblico, anche se un transfer privato evita di doverle affrontare con i bagagli dopo un volo.</p>

<h2 id="verso-piste">Dall'Aeroporto di Torino alle Alpi: Transfer verso le Piste da Sci</h2>
<p>Il vero vantaggio di trasporto di Torino per chi viaggia d'inverno è la sua posizione rispetto a due note aree sciistiche alpine:</p>
<ul>
  <li><strong>Sestriere</strong>, nel comprensorio sciistico della Via Lattea, dista circa 106 km dall'Aeroporto di Torino — comunemente indicati come circa 1 ora e 25 minuti su strada.</li>
  <li><strong>Courmayeur</strong>, ai piedi del Monte Bianco in Valle d'Aosta, dista circa 145 km dall'Aeroporto di Torino — comunemente indicati come circa 1 ora e 37 minuti su strada.</li>
</ul>
<p>Entrambe sono arrivi realistici in giornata da un volo sull'Aeroporto di Torino, anche se il tempo di percorrenza effettivo dipende molto dalle condizioni stradali e meteorologiche invernali, che possono allungare sensibilmente entrambi i percorsi durante la stagione sciistica.</p>

${cta("Voli a Torino per la montagna? Un transfer privato può portarti direttamente dall'aeroporto a Sestriere, Courmayeur o al tuo hotel a Torino.", "/services/airport-transfers", "Scopri le Opzioni di Transfer Aeroportuale")}

<h2 id="privato-vs-pubblico">Transfer Privato o Mezzi Pubblici per le Piste da Sci?</h2>
<p>Raggiungere una stazione sciistica in mezzi pubblici dall'Aeroporto di Torino significa in genere un collegamento in autobus o treno fino a Torino, e poi un ulteriore servizio in coincidenza — praticabile, ma una situazione genuinamente diversa quando viaggi con sci o snowboard invece che con una valigia normale. Un transfer privato va direttamente dall'aeroporto alla stazione sciistica, gestendo attrezzatura e bagagli in un unico veicolo senza cambi lungo il percorso, ed è proprio qui che si dimostra più utile su questo tipo di tragitto — non tanto per risparmiare tempo rispetto ai mezzi pubblici, quanto per evitare un viaggio in più tappe con attrezzatura ingombrante.</p>

<h2 id="consigli">Consigli per la Prenotazione</h2>
<ul>
  <li><strong>Prenota con largo anticipo i transfer nella stagione sciistica</strong> — la domanda di trasporto verso le stazioni sciistiche cresce molto nelle settimane di alta stagione invernale.</li>
  <li><strong>Comunica eventuale attrezzatura da sci o snowboard</strong> al momento della prenotazione, così viene organizzato un veicolo di dimensioni adeguate.</li>
  <li><strong>Metti in conto tempo extra in condizioni invernali</strong> — i tempi di percorrenza su strade di montagna possono superare le stime tipiche quando il meteo è avverso.</li>
  <li><strong>Conferma l'indirizzo esatto della struttura</strong>, dato che sia Sestriere sia Courmayeur coprono un'area estesa di hotel e chalet.</li>
</ul>

<h2 id="domande-frequenti">Domande Frequenti</h2>
<h3 id="faq-1">Quanto dista l'Aeroporto di Torino dal centro città?</h3>
<p>Circa 16 km a nord del centro di Torino.</p>
<h3 id="faq-2">Fate transfer verso le piste da sci dall'Aeroporto di Torino?</h3>
<p>Sì — i transfer privati possono essere organizzati dall'Aeroporto di Torino direttamente a Sestriere, Courmayeur e altre stazioni alpine della regione.</p>
<h3 id="faq-3">Quanto dista Sestriere dall'Aeroporto di Torino?</h3>
<p>Circa 106 km, comunemente indicati come circa 1 ora e 25 minuti su strada, anche se le condizioni invernali possono allungare questo tempo.</p>
<h3 id="faq-4">Quanto dista Courmayeur dall'Aeroporto di Torino?</h3>
<p>Circa 145 km, comunemente indicati come circa 1 ora e 37 minuti su strada, con la stessa avvertenza sulle condizioni meteorologiche invernali.</p>
<h3 id="faq-5">Potete trasportare l'attrezzatura da sci?</h3>
<p>Sì — comunicaci l'attrezzatura che porti al momento della prenotazione così viene organizzato un veicolo di dimensioni adeguate.</p>
<h3 id="faq-6">Un transfer privato è meglio dei mezzi pubblici per una stazione sciistica?</h3>
<p>Per i viaggi con molta attrezzatura, generalmente sì — i mezzi pubblici comportano di solito un cambio lungo il percorso, più scomodo con sci o snowboard rispetto a un transfer privato diretto.</p>
${related([
  { href: '/airport/turin', label: 'Guida Aeroporto di Torino' },
  { href: '/route/milan-to-turin-taxi', label: 'Transfer Milano - Torino' },
  { href: '/services/airport-transfers', label: 'Trasferimenti Aeroportuali in Italia' },
  { href: '/services/private-tours', label: 'Tour Privati in Italia' },
  { href: '/book-now', label: 'Richiedi un Preventivo' },
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
