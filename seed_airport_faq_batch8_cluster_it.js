/** Italian counterparts of seed_airport_faq_batch8_cluster.js — two genuine
 *  Italian posts (not machine-translated), published under language='it'
 *  with translation_of pointing back to the English slugs, matching the
 *  site's existing /it/blog/[slug] bilingual architecture.
 *  Internal links follow the same pattern as the earlier IT batches
 *  (seed_airport_faq_batch6_cluster_it.js): core service/airport pages are
 *  linked at their plain (non-/it/-prefixed) paths, matching what those
 *  earlier IT posts already shipped with; links to sibling IT blog posts use
 *  the verified /it/blog/<slug> path (see src/app/it/blog/[slug]/page.tsx),
 *  and links to EN blog posts with no IT translation yet (fiumicino-
 *  terminals-guide, sim-card-rome-fiumicino) point at /blog/<slug>, same as
 *  the existing IT posts already do for pages without a translation.
 *  Run AFTER seed_airport_faq_batch8_cluster.js: node seed_airport_faq_batch8_cluster_it.js */
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const env = Object.fromEntries(fs.readFileSync('.env', 'utf-8').split('\n').filter(l => l && !l.startsWith('#') && l.includes('=')).map(l => { const [k, ...v] = l.split('='); return [k.trim(), v.join('=').trim()]; }));
const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const cta = (text, href = '/book-now', label = 'Richiedi un Preventivo Gratuito') => `
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

  // 1 ── WiFi gratuito a Fiumicino ────────────────────────────────────────
  {
    title: "C'è il WiFi Gratis a Fiumicino? Come Collegarsi",
    slug: "wifi-gratis-aeroporto-fiumicino",
    translation_of: "wifi-rome-fiumicino-airport",
    category: "Guide Aeroportuali",
    read_time: "4 min",
    seo_title: "WiFi Gratis all'Aeroporto di Fiumicino: Come Collegarsi",
    seo_description: "Sì, Fiumicino ha WiFi gratuito e illimitato, senza password né numero di cellulare italiano. Ecco il nome esatto della rete e come collegarti in pochi secondi.",
    focus_keyword: "wifi gratis aeroporto fiumicino",
    excerpt: "Il WiFi di Fiumicino è gratuito, illimitato e non richiede un numero di cellulare italiano per registrarsi — ecco esattamente come collegarti appena atterri.",
    featured_image_url: "/images/rome airport.webp",
    content: `
<p><strong>Sì — l'aeroporto di Fiumicino offre WiFi gratuito in tutto il terminal, ed è illimitato, senza password e senza bisogno di un numero di cellulare italiano per registrarsi.</strong> Ecco esattamente come collegarti, e dove il segnale è più forte.</p>

${cta("Salta del tutto la schermata di login del terminal — prenota un transfer privato da Fiumicino e il tuo autista ti aspetta già con un cartello con il tuo nome.", "/services/airport-transfers", "Scopri le Opzioni di Transfer")}

<h2 id="come-collegarsi">Come Collegarsi al WiFi Gratuito di Fiumicino</h2>
<p>Attiva il WiFi sul telefono o sul computer e cerca la rete chiamata <strong>AIRPORT FREE WIFI</strong> (su alcuni dispositivi compare come "Aeroporti di Roma Free Wi-Fi"). Selezionala, apri il browser e attendi qualche istante — verrai reindirizzato automaticamente a una breve pagina di accesso. Segui le istruzioni a schermo e sei online. Non c'è nessuna password da digitare e, a differenza di alcuni aeroporti esteri, non è richiesto un numero di cellulare italiano per ricevere un codice di verifica.</p>

<h2 id="dove-segnale">Dove il Segnale è Più Forte</h2>
<p>La rete è distribuita ampiamente in tutto il terminal — le aree check-in, i gate d'imbarco e le sale arrivi hanno tutte una copertura solida, quindi difficilmente ti troverai senza segnale utilizzabile, sia appena atterrato sia in attesa dell'imbarco. Il layout di Fiumicino è diviso per tipo di volo più che in un unico edificio, quindi per capire esattamente in quale terminal ti troverai consulta la nostra <a href="/blog/fiumicino-terminals-guide">guida ai terminal di Fiumicino</a>.</p>

${cta("Atterri a Fiumicino e sei diretto in centro a Roma? Un transfer privato prenotato in anticipo è una cosa in meno a cui pensare dopo un volo lungo.", "/rome-airport-transfer", "Scopri il Transfer per Roma")}

<h2 id="davvero-illimitato">È Davvero Illimitato, o C'è un Trucco?</h2>
<p>A differenza di alcuni aeroporti che limitano il WiFi gratuito a 30 o 60 minuti per poi spingerti verso un upgrade a pagamento, la rete gratuita di Fiumicino non impone alcun limite di tempo — è realmente gratuita e illimitata per tutta la tua permanenza nel terminal. Questo la rende un'opzione ragionevole per controllare le email, scrivere all'autista o consultare le informazioni sui trasporti senza consumare dati mobili, anche se nelle ore di punta una rete pubblica molto affollata può risultare più lenta di quanto sei abituato a casa.</p>

<h2 id="connessione-affidabile">Ti Serve una Connessione Più Affidabile?</h2>
<p>Il WiFi dell'aeroporto va benissimo per operazioni rapide, ma se ti servono dati affidabili per il resto del viaggio — mappe, app di traduzione, taxi tramite app — conviene procurarsi una SIM locale o una eSIM invece di affidarsi al WiFi pubblico per tutto il soggiorno. Trovi indicazioni su dove farlo appena atterrato nella nostra guida su <a href="/blog/sim-card-rome-fiumicino">dove comprare una SIM a Fiumicino</a>.</p>

<h2 id="domande-frequenti">Domande Frequenti</h2>
<h3 id="faq-1">Il WiFi dell'aeroporto di Fiumicino è davvero gratuito?</h3>
<p>Sì — la rete AIRPORT FREE WIFI è gratuita e illimitata, senza password e senza bisogno di un numero di cellulare italiano per collegarsi.</p>
<h3 id="faq-2">Devo creare un account o inserire un numero di telefono?</h3>
<p>No. Seleziona la rete, apri il browser e segui il reindirizzamento automatico — non serve registrazione, codice SMS o account.</p>
<h3 id="faq-3">C'è un limite di tempo sul WiFi gratuito di Fiumicino?</h3>
<p>No — a differenza di aeroporti che limitano l'accesso gratuito a 30-60 minuti, il WiFi di Fiumicino è illimitato per tutto il tempo che passi nel terminal.</p>
<h3 id="faq-4">Dove il segnale WiFi è più forte a Fiumicino?</h3>
<p>La copertura è solida nelle aree check-in, ai gate d'imbarco e in sala arrivi — difficilmente ti troverai senza connessione utilizzabile in nessuna zona del terminal.</p>
<h3 id="faq-5">Conviene affidarsi al WiFi dell'aeroporto per tutto il viaggio?</h3>
<p>Non proprio — è comodo per l'aeroporto stesso, ma per mappe, app di traduzione e taxi tramite app durante il viaggio, una SIM locale o una eSIM sono più affidabili del WiFi pubblico.</p>
${related([
  { href: '/airport/rome-fiumicino', label: "Guida Aeroporto di Roma Fiumicino" },
  { href: '/rome-airport-transfer', label: 'Transfer Aeroportuale Roma' },
  { href: '/blog/fiumicino-terminals-guide', label: 'Quale Terminal Usa la Tua Compagnia a Fiumicino?' },
  { href: '/blog/sim-card-rome-fiumicino', label: 'Dove Comprare una SIM a Fiumicino' },
  { href: '/book-now', label: 'Prenota il Tuo Transfer per Fiumicino' },
])}
`
  },

  // 2 ── Lounge dell'aeroporto di Fiumicino ───────────────────────────────
  {
    title: "Le Lounge dell'Aeroporto di Fiumicino: Quali Puoi Usare",
    slug: "lounge-aeroporto-fiumicino",
    translation_of: "lounges-rome-fiumicino",
    category: "Guide Aeroportuali",
    read_time: "5 min",
    seo_title: "Lounge a Fiumicino: Accesso, Posizione e Prezzi",
    seo_description: "Non serve lo status da frequent flyer per entrare in una lounge a Fiumicino — quasi tutte sono ad accesso libero a pagamento. Ecco quali, dove si trovano e quanto costano.",
    focus_keyword: "lounge aeroporto fiumicino",
    excerpt: "Non serve lo status con la compagnia aerea per entrare in una lounge a Fiumicino — la maggior parte sono ad accesso libero pagando alla porta. Ecco quali, e quanto costano.",
    featured_image_url: "/images/rome airport.webp",
    content: `
<p><strong>Non serve lo status con la compagnia aerea né un biglietto in business per usare una lounge a Fiumicino — la maggior parte sono ad accesso libero, aperte a chiunque sia disposto a pagare all'ingresso.</strong> Ecco esattamente quali lounge esistono, dove si trovano e quanto costano.</p>

${cta("Preferisci saltare la coda della lounge e andare dritto alla tua sistemazione? Un transfer privato prenotato in anticipo ti aspetta dal momento in cui atterri.", "/services/airport-transfers", "Scopri le Opzioni di Transfer")}

<h2 id="terminal-1">Le Lounge al Terminal 1 (Partenze Schengen)</h2>
<p>Il Terminal 1 ha quattro lounge ad accesso libero, tutte nell'area partenze dopo i controlli di sicurezza: Plaza Premium Lounge, Prima Vista Lounge, Primeclass Lounge e Plaza Premium First. Ognuna offre i servizi tipici — posti a sedere, cibo e bevande, WiFi — con Plaza Premium First come opzione più curata tra le quattro. Per capire quali voli partono effettivamente dal T1, consulta la nostra <a href="/blog/fiumicino-terminals-guide">guida ai terminal di Fiumicino</a>.</p>

<h2 id="terminal-3">Le Lounge al Terminal 3 (Partenze Extra-Schengen)</h2>
<p>Il Terminal 3 ha tre lounge: Plaza Premium Lounge (generalmente considerata la scelta con il miglior rapporto qualità-prezzo qui), Prima Vista Lounge come valida alternativa, ed Emirates Lounge — quest'ultima è un'eccezione parziale, perché è aperta solo ai passeggeri Emirates in classe economy e premium economy disposti a pagare l'ingresso, non ad accesso libero generale.</p>

${cta("Scalo lungo o check-in anticipato a Fiumicino? Con un transfer privato il tuo autista si adatta ai tuoi orari, visita alla lounge inclusa.", "/rome-airport-transfer", "Scopri il Transfer per Roma")}

<h2 id="hellosky">HelloSky: l'Unica Lounge Arrivi di Fiumicino</h2>
<p>Se atterri presto o hai una lunga attesa prima del ritiro, vale la pena conoscere HelloSky — una lounge lato landside vicino all'area parcheggi del Terminal 3, l'unica lounge arrivi di tutto Fiumicino. Essendo landside, non serve la carta d'imbarco per entrarci, il che la rende un'opzione pratica anche per un arrivo mattutino e non solo prima della partenza.</p>

<h2 id="quanto-costa">Quanto Costa Davvero Entrare in una Lounge?</h2>
<p>I prezzi variano da lounge a lounge: HelloSky, l'opzione landside, parte da circa €25; le lounge migliori tra T1 e T3 si aggirano in media sui €40; l'opzione più apprezzata, Plaza Premium First, arriva fino a circa €66. La maggior parte si paga semplicemente all'ingresso o con prenotazione anticipata — di norma non servono status con la compagnia aerea, una particolare classe tariffaria o un abbonamento a un network di lounge, con l'Emirates Lounge del T3 come principale eccezione.</p>

<h2 id="domande-frequenti">Domande Frequenti</h2>
<h3 id="faq-1">Serve lo status con la compagnia aerea per usare una lounge a Fiumicino?</h3>
<p>No — la maggior parte delle lounge di Fiumicino sono ad accesso libero, aperte a chiunque sia disposto a pagare all'ingresso. L'eccezione principale è l'Emirates Lounge al Terminal 3, riservata ai passeggeri Emirates in economy e premium economy.</p>
<h3 id="faq-2">Quante lounge ha l'aeroporto di Fiumicino?</h3>
<p>Quattro lounge ad accesso libero al Terminal 1, tre al Terminal 3 e una lounge landside per gli arrivi (HelloSky) — otto in totale.</p>
<h3 id="faq-3">C'è una lounge utilizzabile prima ancora di passare i controlli di sicurezza?</h3>
<p>Sì — HelloSky è una lounge landside vicino all'area parcheggi del Terminal 3, l'unica lounge arrivi di Fiumicino, quindi non richiede carta d'imbarco.</p>
<h3 id="faq-4">Quanto costa circa entrare in una lounge a Fiumicino?</h3>
<p>Si va da circa €25 per la lounge landside HelloSky a una media di circa €40 per le lounge migliori tra T1 e T3, fino a circa €66 per l'opzione più apprezzata, Plaza Premium First.</p>
<h3 id="faq-5">Qual è la lounge migliore al Terminal 3?</h3>
<p>Plaza Premium Lounge al Terminal 3 è generalmente considerata la scelta con il miglior rapporto qualità-prezzo, con Prima Vista Lounge come valida alternativa.</p>
${related([
  { href: '/airport/rome-fiumicino', label: "Guida Aeroporto di Roma Fiumicino" },
  { href: '/rome-airport-transfer', label: 'Transfer Aeroportuale Roma' },
  { href: '/blog/fiumicino-terminals-guide', label: 'Quale Terminal Usa la Tua Compagnia a Fiumicino?' },
  { href: '/it/blog/dormire-in-aeroporto-fiumicino-di-notte', label: 'Si Può Dormire in Aeroporto a Fiumicino Durante la Notte?' },
  { href: '/book-now', label: 'Prenota il Tuo Transfer per Fiumicino' },
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
