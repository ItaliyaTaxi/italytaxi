/** Gap-50 batch 3 — Italian versions (translation_of the EN posts from
 *  seed_gap50_batch3.js). Genuinely localized: natural Italian search
 *  phrasing ("transfer matrimonio Lago di Como", "costiera amalfitana in
 *  famiglia"), IT-native internal-link targets where they exist.
 *  Run: node seed_gap50_batch3_it.js */
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

  // 1 ── Transfer per Matrimoni ed Eventi sul Lago di Como ────────────────
  {
    title: "Transfer per Matrimoni ed Eventi sul Lago di Como",
    slug: "transfer-matrimonio-lago-di-como",
    translation_of: "lake-como-wedding-transfers",
    category: "Viaggi di Lusso",
    read_time: "8 min di lettura",
    seo_title: "Transfer Matrimonio Lago di Como: Guida per Invitati",
    seo_description: "Organizzi un matrimonio sul Lago di Como? Ecco come funzionano davvero i transfer degli invitati dall'aeroporto e gli spostamenti tra le location sulle strade strette del lago.",
    focus_keyword: "transfer matrimonio lago di como",
    excerpt: "I matrimoni sul Lago di Como coinvolgono spesso più location collegate da un'unica strada stretta. Ecco come organizzare realisticamente i trasporti.",
    featured_image_url: "/images/Lake Como.webp",
    content: `
<p><strong>I matrimoni sul Lago di Como comportano tipicamente il trasferimento degli invitati dagli aeroporti di Milano a una località sul lago, per poi spostarli tra la location della cerimonia, quella del ricevimento e i rispettivi hotel — spesso tra paesi collegati da un'unica strada stretta che costeggia il lago.</strong> Questo aspetto logistico, più della cerimonia in sé, è di solito ciò che determina se i trasporti vadano pianificati in anticipo.</p>

<h2 id="perche-diverso">Perché un Matrimonio sul Lago di Como Richiede una Pianificazione Diversa</h2>
<p>Molte delle location più note per i matrimoni — ville a Bellagio, Varenna, Cernobbio, Tremezzo e lungo la riva — si affacciano sulla stessa strada stretta a due corsie che circonda il lago. Non esiste una scorciatoia autostradale tra i paesi rivieraschi, e alcuni viali d'accesso o vie dei centri storici non permettono il passaggio di un pullman intero. Per un matrimonio con invitati che arrivano da più voli e alloggiano in più hotel, questa combinazione — strade strette, alloggi sparsi e un programma della cerimonia serrato — è il motivo per cui molte coppie e wedding planner organizzano i trasporti con largo anticipo.</p>

<h2 id="transfer-aeroporto">Dall'Aeroporto al Lago</h2>
<p>Malpensa è di solito lo scalo di riferimento per gli ospiti internazionali, seguito da Linate. Da Malpensa, il tragitto fino al centro di Como è di circa 60 km e richiede 50-60 minuti; raggiungere Bellagio, più a nord sul lago, è di circa 79 km e richiede tipicamente 1 ora e 35 minuti circa via autostrada A8/A9 e la provinciale rivierasca SS583, di più in caso di traffico intenso. Da Milano centro, il centro di Como dista circa 50 km, pari a 45-60 minuti di auto.</p>
<p>Per un matrimonio con invitati che atterrano su più voli nell'arco di uno o due giorni, i transfer dall'aeroporto vengono di solito organizzati singolarmente o in piccoli gruppi in base all'orario di arrivo, piuttosto che con un unico pullman che attende tutti insieme.</p>

${cta("Devi coordinare gli arrivi degli invitati per un matrimonio sul Lago di Como? Inviaci gli orari di arrivo e ti aiutiamo a pianificare i transfer individuali o di gruppo.", "/route/milan-to-lake-como-taxi", "Scopri i Transfer Milano-Lago di Como")}

<h2 id="tra-location">Tra Cerimonia, Ricevimento e Hotel</h2>
<p>È comune che un matrimonio sul Lago di Como si svolga in una location per la cerimonia e in una villa o ristorante diverso per il ricevimento, con gli invitati distribuiti tra due o tre hotel nei paesi vicini. Poiché la strada rivierasca è l'unico collegamento tra la maggior parte dei paesi, e poiché alcune location hanno un parcheggio limitato, molte coppie organizzano un servizio navetta tra questi punti invece di affidarsi ai taxi del momento.</p>
<p>Veicoli più piccoli — invece di un unico grande pullman — sono spesso la scelta più pratica, perché possono percorrere strade d'accesso più strette e viali privati che un pullman non può affrontare.</p>

<h2 id="location-principali">I Paesi e le Location Dove Serve Più Attenzione</h2>
<p>Questo tipo di pianificazione multi-punto riguarda soprattutto <strong>Bellagio</strong>, <strong>Varenna</strong>, <strong>Cernobbio</strong> e <strong>Tremezzo</strong> — tutti paesi molto richiesti per i matrimoni, collegati dalla stessa strada rivierasca — e location note come <strong>Villa del Balbianello</strong>, <strong>Villa Erba</strong>, <strong>Villa d'Este</strong> e <strong>Villa Serbelloni</strong>, ciascuna con proprie limitazioni di accesso e parcheggio da verificare direttamente con la location.</p>

${cta("Hai bisogno di trasporti tra cerimonia, ricevimento e hotel degli invitati sul Lago di Como? Indicaci le location e il numero di invitati per un preventivo.", "/it/servizi/trasferimenti-matrimonio", "Scopri i Transfer per Matrimoni")}

<h2 id="consigli">Consigli per Coppie e Wedding Planner</h2>
<ul>
  <li><strong>Condividi il programma completo della giornata</strong>, non solo l'orario della cerimonia — i tempi di spostamento tra le location dipendono da questo.</li>
  <li><strong>Raggruppa gli invitati per volo e hotel</strong> quando possibile, così i transfer dall'aeroporto possono essere pianificati in modo efficiente.</li>
  <li><strong>Verifica l'accesso dei veicoli direttamente con ogni location</strong> — alcuni viali e vie dei centri storici hanno limitazioni reali.</li>
  <li><strong>Segnala eventuali invitati che necessitano di un seggiolino</strong> al momento della prenotazione.</li>
  <li><strong>Prevedi un margine tra una location e l'altra</strong>, dato che la strada del lago può essere trafficata nei weekend estivi.</li>
</ul>

<h2 id="faq">Domande Frequenti</h2>
<h3 id="faq-1">Quanto dista il Lago di Como dagli aeroporti di Milano?</h3>
<p>Da Malpensa, il centro di Como dista circa 60 km (50-60 minuti circa); Bellagio circa 79 km (1 ora e 35 minuti circa). Da Milano centro, Como dista circa 50 km (45-60 minuti circa).</p>
<h3 id="faq-2">È possibile organizzare i trasporti per più invitati che arrivano separatamente?</h3>
<p>Sì — i transfer dall'aeroporto possono essere organizzati singolarmente o raggruppati per volo e orario di arrivo, soluzione di solito più pratica rispetto a un unico pickup per tutta la lista invitati.</p>
<h3 id="faq-3">Un veicolo può fare la spola tra la location della cerimonia e quella del ricevimento?</h3>
<p>Sì, è possibile organizzare i trasporti tra le location — indica entrambi gli indirizzi e il programma orario per pianificare tempi e veicoli adeguati.</p>
<h3 id="faq-4">Perché non prenotare semplicemente un pullman per tutti gli invitati?</h3>
<p>Un pullman di grandi dimensioni non sempre riesce a raggiungere ogni location sulle strade e i viali più stretti del Lago di Como — veicoli più piccoli, a volte più di uno in contemporanea, sono spesso la soluzione più pratica.</p>
<h3 id="faq-5">Sono disponibili seggiolini per i bambini tra gli invitati?</h3>
<p>Sì, i seggiolini per bambini e neonati possono essere richiesti al momento della prenotazione.</p>
<h3 id="faq-6">Conviene prenotare i trasporti con largo anticipo per un matrimonio?</h3>
<p>Dato il livello di coordinamento richiesto — più invitati, più location, un programma fisso — prenotare con largo anticipo è decisamente consigliabile rispetto a organizzare i trasporti all'ultimo momento.</p>
${related([
  { href: '/city/como', label: 'Guida di Viaggio al Lago di Como' },
  { href: '/route/milan-to-lake-como-taxi', label: 'Transfer Milano - Lago di Como' },
  { href: '/it/servizi/trasferimenti-matrimonio', label: 'Servizi di Transfer per Matrimoni' },
  { href: '/blog/how-to-get-from-milan-to-lake-como', label: 'Come Arrivare da Milano al Lago di Como' },
  { href: '/it/contatti', label: 'Richiedi un Preventivo' },
])}
`
  },

  // 2 ── La Costiera Amalfitana in Famiglia: Guida all'Autista Privato ────
  {
    title: "La Costiera Amalfitana in Famiglia: Guida all'Autista Privato",
    slug: "costiera-amalfitana-in-famiglia-autista-privato",
    translation_of: "amalfi-coast-with-family-private-driver",
    category: "Viaggi in Famiglia",
    read_time: "7 min di lettura",
    seo_title: "Costiera Amalfitana in Famiglia: Guida all'Autista",
    seo_description: "Organizzi un viaggio sulla Costiera Amalfitana con i bambini? Ecco cosa sapere su strada panoramica, seggiolini, bagagli e tempi reali prima di prenotare.",
    focus_keyword: "costiera amalfitana in famiglia autista privato",
    excerpt: "La strada stretta e tortuosa della Costiera Amalfitana è l'aspetto principale da considerare con i bambini. Ecco cosa significa davvero per un viaggio in famiglia.",
    featured_image_url: "/images/almafi.webp",
    content: `
<p><strong>La prima cosa da sapere prima di un viaggio in famiglia sulla Costiera Amalfitana è che la strada costiera stessa — la SS163 che collega Sorrento, Positano, Amalfi e Ravello — è stretta, tortuosa e spesso più trafficata di quanto la distanza sulla mappa faccia pensare, un aspetto che riguarda tanto una famiglia con un bambino piccolo quanto un gruppo con i nonni.</strong> Un autista privato non cambia la natura della strada, ma elimina la necessità di gestirla voi stessi con i bambini in auto.</p>

<h2 id="la-strada">Cosa Comporta Davvero la Strada Costiera</h2>
<p>La SS163 corre lungo tratti a picco sul mare con curve frequenti, e in alta stagione può essere davvero lenta, soprattutto nei pressi di Positano e del centro di Amalfi nelle ore centrali della giornata. Per le famiglie questo conta in due modi pratici: i tragitti possono richiedere più tempo di quanto suggerisca la distanza in linea d'aria, e guidare da soli questo percorso con i bambini — gestendo il mal d'auto sulle curve, le soste, la segnaletica poco familiare — è un'esperienza diversa dal guidare in autostrada.</p>

<h2 id="arrivare">Arrivare sulla Costiera Amalfitana con i Bambini</h2>
<p>Napoli è di solito il punto d'accesso, sia che si arrivi in aereo all'aeroporto di Napoli sia in nave da crociera alla Stazione Marittima. Da entrambi, il tragitto fino ad Amalfi è di circa 70 km e richiede tipicamente 1 ora e 45 minuti circa, a seconda del traffico e della destinazione esatta — da considerare come indicazione di massima, non come tempo fisso, dato che sulla strada costiera i tempi variano più che su altri percorsi.</p>
<p>Un transfer privato significa un solo veicolo, una sola gestione dei bagagli e un tragitto diretto fino al hotel o alla villa, invece di cambiare tra treno, autobus e un ultimo tratto in taxi con bambini e bagagli al seguito.</p>

${cta("Viaggi sulla Costiera Amalfitana con la famiglia? Indicaci i dettagli del tuo arrivo e ti aiutiamo a pianificare un transfer diretto.", "/route/naples-airport-to-amalfi-taxi", "Scopri Aeroporto di Napoli - Amalfi")}

<h2 id="seggiolini">Seggiolini e Aspetti Pratici per la Famiglia</h2>
<p>I seggiolini per bambini e neonati possono essere richiesti al momento della prenotazione — indica l'età dei bambini che viaggiano così da organizzare in anticipo i seggiolini giusti invece di darli per scontati. Per le famiglie con molti bagagli, passeggini o altra attrezzatura, vale la pena segnalarlo, così da inviare un veicolo della dimensione adeguata.</p>

<h2 id="quali-paesi">Quali Paesi Visitare</h2>
<p>Positano, il centro di Amalfi e Ravello sono le tre tappe più note della costiera, ognuna con un carattere diverso — Positano è ripida e ricca di scalinate, il centro di Amalfi è più pianeggiante e percorribile a piedi da dove un veicolo può lasciarti, e Ravello si trova più in alto con ampie viste sul mare, raggiungibile da una strada secondaria che sale dalla costa. Per una giornata in famiglia con bambini piccoli, vale la pena considerare quanto cammino e quante scale comporti ciascun paese prima di pianificare un itinerario che li includa tutti e tre in una sola giornata.</p>
<p>Nei mesi più caldi è attivo anche un servizio di traghetto stagionale lungo parte della costiera tra Napoli, Sorrento, Positano e Amalfi — una vera alternativa alla strada per parte del viaggio, anche se gli orari sono stagionali ed è bene verificarli direttamente con gli operatori del traghetto piuttosto che darli per scontati tutto l'anno.</p>

${cta("Pianifichi tappe a Positano, Amalfi e Ravello con la famiglia? Indicaci il tuo itinerario e valutiamo insieme cosa è realistico per la giornata.", "/services/private-tours", "Scopri i Tour Privati")}

<h2 id="bagagli">Bagagli e Giornate con Più Tappe</h2>
<p>Se il tuo viaggio in famiglia prevede più di una tappa in un giorno, segnalalo al momento della prenotazione — tappe aggiuntive e tempi di attesa influiscono sia sull'itinerario sia sul preventivo, ed è più semplice pianificare una giornata realistica in anticipo che doverla adattare in strada con bambini che hanno bisogno di pranzo e pause secondo un proprio ritmo.</p>

<h2 id="faq">Domande Frequenti</h2>
<h3 id="faq-1">La strada della Costiera Amalfitana è difficile con i bambini piccoli?</h3>
<p>È stretta e tortuosa per natura, il che può incidere sui bambini soggetti al mal d'auto. Un autista privato elimina la necessità di guidare da soli, anche se la natura della strada resta la stessa.</p>
<h3 id="faq-2">Quanto tempo serve per arrivare ad Amalfi da Napoli con la famiglia?</h3>
<p>Circa 1 ora e 45 minuti in condizioni normali, anche se il tempo varia con il traffico e la destinazione esatta — meglio prevedere un margine piuttosto che pianificare sul tempo minimo.</p>
<h3 id="faq-3">Posso richiedere seggiolini per bambini durante il tragitto?</h3>
<p>Sì — indica l'età dei bambini al momento della prenotazione così da organizzare i seggiolini adeguati.</p>
<h3 id="faq-4">Quale paese della Costiera Amalfitana è più adatto ai bambini piccoli?</h3>
<p>Il centro di Amalfi è generalmente più pianeggiante e percorribile a piedi rispetto alle scalinate tipiche di Positano.</p>
<h3 id="faq-5">Esiste un'alternativa in traghetto alla strada costiera?</h3>
<p>Sì, nei mesi più caldi sono attivi servizi di traghetto stagionali tra Napoli, Sorrento, Positano e Amalfi — verifica gli orari aggiornati direttamente con gli operatori, non essendo un servizio attivo tutto l'anno.</p>
<h3 id="faq-6">Possiamo visitare più paesi in un giorno con i bambini?</h3>
<p>È possibile, ma conviene pianificare con realismo — indica le tappe preferite al momento della prenotazione così da organizzare la giornata con le pause necessarie per i bambini, senza un programma troppo serrato.</p>
${related([
  { href: '/city/amalfi-coast', label: 'Transfer sulla Costiera Amalfitana' },
  { href: '/route/naples-airport-to-amalfi-taxi', label: 'Aeroporto di Napoli - Amalfi' },
  { href: '/services/private-tours', label: 'Tour Privati in Italia' },
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
