/** Italian counterparts of seed_airport_faq_batch6_cluster.js — two genuine
 *  Italian posts (not machine-translated), published under language='it'
 *  with translation_of pointing back to the English slugs, matching the
 *  site's existing /it/blog/[slug] bilingual architecture.
 *  Run AFTER seed_airport_faq_batch6_cluster.js: node seed_airport_faq_batch6_cluster_it.js */
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

  // 1 ── Bancomat a Fiumicino ─────────────────────────────────────────
  {
    title: "Dove Sono i Bancomat a Fiumicino e Quali Evitare",
    slug: "bancomat-aeroporto-fiumicino",
    translation_of: "atms-rome-fiumicino-airport",
    category: "Guide Aeroportuali",
    read_time: "5 min",
    seo_title: "Bancomat a Fiumicino: Quali Usare e Quali Evitare",
    seo_description: "Hai bisogno di contanti a Fiumicino? Ecco dove trovare i bancomat, perché alcuni applicano un cambio molto peggiore di altri, e l'unica impostazione che ti protegge sempre.",
    focus_keyword: "bancomat aeroporto fiumicino",
    excerpt: "Non tutti i bancomat di Fiumicino sono uguali — alcuni applicano silenziosamente un cambio molto peggiore di altri. Ecco come riconoscere la differenza in pochi secondi.",
    featured_image_url: "/images/rome airport.webp",
    content: `
<p>A Fiumicino i bancomat non mancano, distribuiti in entrambi i terminal — trovare contanti non è il problema. Il vero problema è ottenere un cambio equo, perché alcune macchine dell'aeroporto sono segnalate da molti viaggiatori per applicare un cambio nettamente peggiore rispetto a un normale bancomat bancario. La differenza dipende da un'unica impostazione a cui pochi pensano di fare attenzione.</p>

${cta("Evita del tutto la ricerca di contanti in sala arrivi — prenota un transfer privato e pagalo prima ancora di atterrare.", "/rome-airport-transfer", "Scopri il Transfer per Roma")}

<h2 id="dove-trovarli">Dove Trovare i Bancomat a Fiumicino</h2>
<p>I bancomat si trovano sia al Terminal 1 sia al Terminal 3, incluse le sale arrivi, quindi non serve cercare a lungo dopo l'atterraggio. Le macchine a marchio bancario — comunemente quelle rosse e bianche di Unicredit, la più grande banca italiana — sono l'opzione più diffusa e affidabile nei terminal.</p>

<h2 id="quali-evitare">Quali Bancomat Guardare con Attenzione</h2>
<p>Le macchine con il marchio di una società di cambio valuta, anziché di una banca — come i bancomat in stile Travelex — sono segnalate con costanza dai viaggiatori per offrire tassi di cambio peggiori rispetto ai normali bancomat bancari. I bancomat gestiti da Euronet in particolare tornano ripetutamente nelle lamentele dei viaggiatori negli aeroporti europei, Fiumicino incluso, per lo stesso motivo.</p>
<p>Il meccanismo dietro a tutto questo si chiama Dynamic Currency Conversion (conversione dinamica della valuta). Quando prelevi contanti, alcune macchine chiedono se vuoi che l'importo venga addebitato nella tua valuta d'origine o in euro. Scegliere la tua valuta d'origine permette al gestore del bancomat di applicare il proprio tasso di cambio — sistematicamente peggiore di quello che applicherebbe la tua banca.</p>

${cta("Se preferisci non pensare affatto a bancomat e tassi di cambio il giorno dell'arrivo, un transfer privato si paga in anticipo, nella tua valuta.", "/services/airport-transfers", "Scopri le Opzioni di Transfer")}

<h2 id="la-regola">L'Unica Impostazione Che Ti Protegge</h2>
<p>Qualunque bancomat tu usi a Fiumicino, scegli sempre di essere addebitato in <strong>euro (valuta locale)</strong>, mai nella tua valuta d'origine, quando la macchina te lo chiede. Questa singola scelta lascia la conversione alla tua banca o al tuo circuito di pagamento, che quasi sempre applica un cambio più equo rispetto alla conversione immediata proposta dal gestore del bancomat.</p>
<p>Conviene controllare un convertitore di valuta affidabile sul telefono prima di atterrare, così hai un riferimento approssimativo per un cambio equo euro-valuta d'origine — in questo modo, se il tasso mostrato a schermo da una macchina sembra decisamente fuori linea, lo riconosci subito.</p>

<h2 id="domande-frequenti">Domande Frequenti</h2>
<h3 id="faq-1">Ci sono bancomat in entrambi i terminal di Fiumicino?</h3>
<p>Sì — i bancomat sono disponibili sia al Terminal 1 sia al Terminal 3, incluse le sale arrivi.</p>
<h3 id="faq-2">Quali bancomat offrono i tassi migliori a Fiumicino?</h3>
<p>I normali bancomat a marchio bancario, come quelli Unicredit, sono generalmente più affidabili di quelli con il marchio di una società di cambio valuta.</p>
<h3 id="faq-3">Cos'è la Dynamic Currency Conversion e perché conta?</h3>
<p>È un'opzione che alcuni bancomat offrono per addebitare il prelievo nella tua valuta d'origine anziché in euro. Sembra comoda, ma permette al bancomat di applicare il proprio tasso di cambio, tipicamente peggiore di quello della tua banca — rifiutala sempre e scegli euro.</p>
<h3 id="faq-4">Devo evitare in particolare i bancomat Euronet?</h3>
<p>Le macchine a marchio Euronet vengono segnalate spesso dai viaggiatori per tassi di cambio sfavorevoli negli aeroporti di tutta Europa, Fiumicino incluso — un normale bancomat bancario è generalmente la scelta più sicura quando disponibile.</p>
<h3 id="faq-5">È meglio cambiare contanti prima di arrivare in Italia?</h3>
<p>Non necessariamente — usare un bancomat a marchio bancario e scegliere di essere addebitato in euro offre in genere un cambio più equo rispetto a uno sportello di cambio valuta, sia in aeroporto sia altrove.</p>
${related([
  { href: '/airport/rome-fiumicino', label: 'Guida Aeroporto di Roma Fiumicino' },
  { href: '/rome-airport-transfer', label: 'Transfer Aeroportuale Roma' },
  { href: '/services/airport-transfers', label: 'Servizi di Transfer Aeroportuale' },
  { href: '/book-now', label: 'Prenota il Tuo Transfer per Fiumicino' },
])}
`
  },

  // 2 ── Aeroporto di Treviso: autista e servizi ────────────────────────
  {
    title: "Aeroporto di Treviso: Come Trovare l'Autista e Quali Servizi Offre",
    slug: "aeroporto-treviso-guida-autista-servizi",
    translation_of: "treviso-airport-driver-facilities",
    category: "Guide Aeroportuali",
    read_time: "6 min",
    seo_title: "Aeroporto di Treviso: Autista, Servizi e Distanza da Venezia",
    seo_description: "Atterri a Treviso per Venezia? Ecco dove aspetta esattamente il tuo autista, quali servizi offre davvero l'aeroporto e quanto dista realmente la città.",
    focus_keyword: "aeroporto treviso autista servizi",
    excerpt: "Treviso è l'aeroporto low-cost di Venezia, ed è piccolo e semplice. Ecco cosa aspettarti esattamente all'arrivo, dall'incontro con l'autista fino a come raggiungere la città.",
    featured_image_url: "/images/venice airport.webp",
    content: `
<p>L'aeroporto di Venezia-Treviso (TSF) è il più piccolo dei due scali che servono Venezia, usato soprattutto dalle compagnie low-cost, e si trova a una certa distanza dalla città vera e propria. Le sue dimensioni contenute rendono l'arrivo semplice — ecco cosa aspettarti esattamente.</p>

${cta("Atterri a Treviso e sei diretto a Venezia? Prenota un transfer privato ed evita di doverti orientare da solo con le coincidenze.", "/services/airport-transfers", "Scopri le Opzioni di Transfer")}

<h2 id="layout-terminal">La Struttura del Terminal</h2>
<p>Treviso ha un unico edificio terminal su due piani: check-in e sala arrivi si trovano al piano terra, mentre le partenze sono al piano superiore. Non c'è possibilità di confusione su quale terminal raggiungere, dato che ce n'è uno solo.</p>

<h2 id="incontrare-autista">Dove Aspetta il Tuo Autista</h2>
<p>Per un transfer privato prenotato in anticipo, il tuo autista aspetta nella sala arrivi al piano terra, in genere con un cartello con il tuo nome, e ti aiuterà con i bagagli fino al veicolo. Il posteggio taxi pubblico si trova appena fuori dalla sala arrivi se non hai prenotato in anticipo.</p>

<h2 id="servizi">Quali Servizi Offre Davvero Treviso</h2>
<p>Trattandosi di un aeroporto piccolo, i servizi di Treviso sono essenziali ma coprono il necessario: bagni, fasciatoio, WiFi e prese per la ricarica sono disponibili su entrambi i piani. Non aspettarti la varietà di negozi, lounge o ristorazione che trovi in un grande scalo come Fiumicino o Malpensa — Treviso è pensato per un transito rapido e funzionale, non per un lungo scalo.</p>
<p>Il deposito bagagli in aeroporto è un punto genuinamente poco chiaro dalle informazioni pubblicate — alcune fonti descrivono un servizio a pagamento di circa €7 al giorno, mentre altre riportano l'assenza di un servizio di deposito bagagli sul posto. Se il deposito garantito conta per i tuoi piani, gli armadietti automatici della stazione di Venezia Santa Lucia sono un'alternativa più documentata in modo affidabile, una volta raggiunta la città.</p>

${cta("Su qualunque piano tu atterri, il tuo autista sa già esattamente dove incontrarti a Treviso.", "/services/airport-transfers", "Scopri le Opzioni di Transfer")}

<h2 id="distanza-venezia">Quanto Dista Venezia da Treviso?</h2>
<p>L'aeroporto di Treviso si trova a circa 31 km da Venezia, un tragitto di circa 40 minuti in auto in condizioni di traffico normali. È una distanza decisamente maggiore rispetto al principale aeroporto di Venezia, Marco Polo, motivo per cui verificare quale aeroporto usa realmente il tuo volo è importante per pianificare il proseguimento del viaggio.</p>

<h2 id="domande-frequenti">Domande Frequenti</h2>
<h3 id="faq-1">Dove trovo esattamente il mio autista all'aeroporto di Treviso?</h3>
<p>Nella sala arrivi al piano terra, dove un autista privato prenotato in anticipo aspetta con un cartello con il tuo nome.</p>
<h3 id="faq-2">Treviso ha più di un terminal?</h3>
<p>No — è un unico edificio terminal su due piani, con check-in e arrivi al piano terra e partenze al piano superiore.</p>
<h3 id="faq-3">C'è un deposito bagagli all'aeroporto di Treviso?</h3>
<p>Le informazioni sono discordanti — alcune fonti citano un servizio di deposito a pagamento, altre ne segnalano l'assenza sul posto. Se hai bisogno di un deposito garantito, gli armadietti della stazione di Venezia Santa Lucia sono un'opzione più affidabile una volta raggiunta la città.</p>
<h3 id="faq-4">C'è il WiFi all'aeroporto di Treviso?</h3>
<p>Sì, insieme a prese per la ricarica, su entrambi i piani, sia arrivi sia partenze.</p>
<h3 id="faq-5">Quanto dista l'aeroporto di Treviso da Venezia?</h3>
<p>Circa 31 km, un tragitto di circa 40 minuti in auto in condizioni di traffico normali — decisamente più lontano dal centro città rispetto all'aeroporto di Venezia Marco Polo.</p>
${related([
  { href: '/airport/venice', label: 'Guida Aeroporto di Venezia Marco Polo' },
  { href: '/services/airport-transfers', label: 'Servizi di Transfer Aeroportuale' },
  { href: '/book-now', label: 'Prenota il Tuo Transfer per Treviso' },
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
