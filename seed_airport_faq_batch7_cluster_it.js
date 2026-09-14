/** Italian counterparts of seed_airport_faq_batch7_cluster.js — two genuine
 *  Italian posts (not machine-translated), published under language='it'
 *  with translation_of pointing back to the English slugs, matching the
 *  site's existing /it/blog/[slug] bilingual architecture.
 *  Run AFTER seed_airport_faq_batch7_cluster.js: node seed_airport_faq_batch7_cluster_it.js */
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

  // 1 ── Bancomat e cambio valuta a Malpensa ─────────────────────────────
  {
    title: "Dove Sono Bancomat e Cambio Valuta a Malpensa",
    slug: "bancomat-cambio-valuta-malpensa",
    translation_of: "atms-currency-milan-malpensa",
    category: "Guide Aeroportuali",
    read_time: "5 min",
    seo_title: "Bancomat e Cambio Valuta a Malpensa: Dove Trovarli",
    seo_description: "Hai bisogno di contanti a Malpensa? Ecco esattamente dove si trovano bancomat e sportelli di cambio valuta al Terminal 1 e al Terminal 2, e quali conviene usare.",
    focus_keyword: "bancomat cambio valuta malpensa",
    excerpt: "A Malpensa bancomat e sportelli di cambio si trovano in zone e piani diversi tra i due terminal — ecco esattamente dove cercarli in ciascuno.",
    featured_image_url: "/images/milan airport.jpg",
    content: `
<p>L'aeroporto di Milano Malpensa è diviso in due terminal con planimetrie davvero diverse tra loro, quindi "cerca un bancomat vicino agli arrivi" non basta come indicazione. Ecco esattamente dove si trovano sportelli automatici e sportelli di cambio valuta in ciascun terminal.</p>

${cta("Evita del tutto la ricerca di contanti — prenota un transfer privato da Malpensa e pagalo prima ancora di atterrare.", "/services/airport-transfers", "Scopri le Opzioni di Transfer")}

<h2 id="terminal-1">Terminal 1: Bancomat e Sportelli di Cambio</h2>
<p>Il Terminal 1 ha bancomat distribuiti nelle zone Check-in, Arrivi, Ritiro Bagagli e Gate di Imbarco, quindi ovunque tu sia nel terminal difficilmente ne sei lontano. Per il cambio valuta, Forexchange gestisce diversi sportelli qui — uno nella zona check-in al secondo piano, proprio di fronte ai banchi 9-10, e un altro al piano terra nella zona Arrivi Internazionali B, accanto alla porta 9.</p>
<p>Anche due banche italiane hanno filiali con bancomat al piano +2 nella zona check-in — Banca Popolare Italiana e Banca Popolare di Sondrio — anche se il servizio agli sportelli segue orari limitati nei giorni feriali e il sabato mattina; i bancomat stessi restano generalmente accessibili anche fuori da questi orari. Banca Nazionale del Lavoro ha una filiale con bancomat al piano terra negli Arrivi.</p>

<h2 id="terminal-2">Terminal 2: Bancomat e Sportelli di Cambio</h2>
<p>Il Terminal 2 è più piccolo e semplice: c'è un bancomat nella zona check-in al piano terra, oltre al bancomat di Deutsche Bank negli Arrivi e a quello di Banca Popolare di Milano nelle Partenze. Per il cambio valuta, Global Blue e Forexchange operano entrambi al Gate d'imbarco D — usato solo per i voli Schengen — e nella zona Arrivi, generalmente aperti dalla mattina presto fino a sera.</p>

${cta("Se preferisci non pensare affatto ai bancomat il giorno dell'arrivo, un transfer privato da Malpensa si paga in anticipo.", "/services/airport-transfers", "Scopri le Opzioni di Transfer")}

<h2 id="quale-scegliere">Quale Opzione Offre Davvero un Cambio Equo?</h2>
<p>Un normale bancomat a marchio bancario è generalmente la scelta più affidabile rispetto a uno sportello di cambio valuta dedicato — gli sportelli di cambio negli aeroporti, Malpensa incluso, in genere applicano un margine più ampio rispetto a quello che otterresti dal circuito della tua banca. Se usi un bancomat, scegli sempre di essere addebitato in euro anziché nella tua valuta d'origine quando richiesto; accettare la conversione proposta dalla macchina stessa (Dynamic Currency Conversion) lascia il tasso di cambio nelle mani del gestore del bancomat, sistematicamente peggiore di quello della tua banca.</p>

<h2 id="domande-frequenti">Domande Frequenti</h2>
<h3 id="faq-1">Ci sono bancomat in entrambi i terminal di Malpensa?</h3>
<p>Sì — il Terminal 1 ne ha diversi distribuiti tra check-in, arrivi, ritiro bagagli e gate di imbarco, mentre il Terminal 2 ha bancomat nelle zone check-in, arrivi e partenze.</p>
<h3 id="faq-2">Dove si trova esattamente il cambio valuta al Terminal 1?</h3>
<p>Forexchange gestisce uno sportello nella zona check-in al secondo piano (di fronte ai banchi 9-10) e un altro al piano terra negli Arrivi Internazionali B, accanto alla porta 9.</p>
<h3 id="faq-3">Dove si trova il cambio valuta al Terminal 2?</h3>
<p>Global Blue e Forexchange operano entrambi al Gate d'imbarco D (solo voli Schengen) e nella zona Arrivi.</p>
<h3 id="faq-4">Meglio un bancomat bancario o uno sportello di cambio?</h3>
<p>Un bancomat a marchio bancario offre generalmente un cambio più equo rispetto a uno sportello di cambio dedicato — basta scegliere euro, non la propria valuta d'origine, quando la macchina lo chiede.</p>
<h3 id="faq-5">Le filiali bancarie a Malpensa sono sempre aperte?</h3>
<p>No — le filiali bancarie seguono orari limitati agli sportelli (all'incirca mattine e primi pomeriggi feriali, con orari più brevi il sabato), anche se i loro bancomat restano generalmente accessibili anche fuori da tali orari.</p>
${related([
  { href: '/airport/milan-malpensa', label: 'Guida Aeroporto di Milano Malpensa' },
  { href: '/milan-chauffeur-service', label: 'Servizio Chauffeur Milano' },
  { href: '/services/airport-transfers', label: 'Servizi di Transfer Aeroportuale' },
  { href: '/book-now', label: 'Prenota il Tuo Transfer per Malpensa' },
])}
`
  },

  // 2 ── Deposito bagagli e WiFi all'aeroporto di Pisa ──────────────────
  {
    title: "L'Aeroporto di Pisa Ha Deposito Bagagli e WiFi?",
    slug: "deposito-bagagli-wifi-aeroporto-pisa",
    translation_of: "pisa-airport-luggage-wifi",
    category: "Guide Aeroportuali",
    read_time: "5 min",
    seo_title: "Aeroporto di Pisa: Deposito Bagagli e WiFi Spiegati",
    seo_description: "Devi depositare i bagagli o collegarti a Internet all'aeroporto di Pisa Galileo Galilei? Ecco come funziona esattamente il deposito bagagli, il costo e come è organizzato il WiFi gratuito.",
    focus_keyword: "deposito bagagli wifi aeroporto pisa",
    excerpt: "Il servizio di deposito bagagli di Pisa funziona tramite l'ufficio informazioni a tariffa giornaliera fissa, e il WiFi dell'aeroporto offre un'ora gratuita — ecco esattamente come funzionano entrambi.",
    featured_image_url: "/images/hero.webp",
    content: `
<p>L'aeroporto di Pisa Galileo Galilei è abbastanza compatto da rendere facile trovare i suoi servizi una volta che sai dove cercare — utile se devi depositare una borsa prima di dirigerti verso Pisa o Firenze per la giornata, o hai semplicemente bisogno di collegarti a Internet in attesa di un volo.</p>

${cta("Atterri a Pisa diretto verso Firenze o la Toscana? Un transfer privato evita del tutto l'attesa allo sportello del deposito bagagli e la schermata di accesso al WiFi del terminal.", "/services/airport-transfers", "Scopri le Opzioni di Transfer")}

<h2 id="deposito-bagagli">Deposito Bagagli: Come Funziona</h2>
<p>L'aeroporto di Pisa gestisce il servizio di deposito bagagli tramite l'ufficio informazioni dell'aeroporto, raggiungibile al numero +39 050 849 300. È aperto tutti i giorni dalle 08:00 alle 20:00, e il deposito costa €7 per collo al giorno. Questa fascia oraria diurna conta se il tuo volo atterra molto presto o parte molto tardi — il servizio non sarà disponibile per lasciare o ritirare bagagli fuori da questi orari, quindi organizzati di conseguenza se i tuoi orari sono stretti.</p>

<h2 id="wifi">WiFi: Cosa È Gratuito e Cosa No</h2>
<p>Il WiFi è disponibile in tutto il terminal, e i primi 60 minuti sono gratuiti. Oltre la prima ora, continuare a navigare richiede in genere un'estensione a pagamento, quindi se hai bisogno di restare online più a lungo — ad esempio durante uno scalo prolungato — prevedilo, anziché contare sul fatto che l'ora gratuita basti per tutta l'attesa. Sono disponibili anche postazioni internet fisse sia nella zona Partenze sia in quella Arrivi, per un controllo rapido senza dover collegare il proprio dispositivo.</p>

${cta("Che tu stia depositando una borsa per una gita di un giorno a Pisa o diretto direttamente a Firenze, un transfer privato ti aspetta già prenotato all'atterraggio.", "/florence-transfer", "Scopri le Opzioni di Transfer per Firenze")}

<h2 id="altri-servizi">Altri Servizi Utili da Conoscere</h2>
<p>Oltre al deposito bagagli e al WiFi, l'aeroporto di Pisa offre una gamma di servizi ragionevole per le sue dimensioni: un pub, un bar e una caffetteria al piano terra, tre ristoranti (uno self-service) e un altro bar al primo piano, e un'area commerciale chiamata La Corte con oltre 20 negozi, accessibile da entrambi i piani. C'è anche una lounge VIP a pagamento (Sala VIP Galilei) aperta dalle 05:00 alle 20:00 con snack, WiFi e bevande, oltre a una banca, uno sportello di cambio valuta, una sala family con fasciatoio vicino alla biglietteria, e una farmacia.</p>

<h2 id="domande-frequenti">Domande Frequenti</h2>
<h3 id="faq-1">C'è il deposito bagagli all'aeroporto di Pisa?</h3>
<p>Sì — tramite l'ufficio informazioni dell'aeroporto, aperto tutti i giorni dalle 08:00 alle 20:00, al costo di €7 per collo al giorno.</p>
<h3 id="faq-2">Posso depositare o ritirare bagagli fuori da questi orari?</h3>
<p>Non tramite il servizio standard — opera all'interno della fascia 08:00-20:00, quindi un volo mattutino molto presto o serale molto tardi va pianificato di conseguenza.</p>
<h3 id="faq-3">Il WiFi è gratuito all'aeroporto di Pisa?</h3>
<p>I primi 60 minuti sono gratuiti; continuare oltre richiede in genere un'estensione a pagamento.</p>
<h3 id="faq-4">Ci sono postazioni internet se non ho un dispositivo mio?</h3>
<p>Sì — postazioni internet fisse sono disponibili sia nella zona Partenze sia in quella Arrivi.</p>
<h3 id="faq-5">L'aeroporto di Pisa ha una lounge a pagamento?</h3>
<p>Sì — la lounge Sala VIP Galilei, aperta dalle 05:00 alle 20:00, offre snack, bevande, WiFi e materiale di lettura a pagamento.</p>
${related([
  { href: '/airport/pisa', label: 'Guida Aeroporto di Pisa' },
  { href: '/florence-transfer', label: 'Servizio Transfer Firenze' },
  { href: '/services/airport-transfers', label: 'Servizi di Transfer Aeroportuale' },
  { href: '/book-now', label: 'Prenota il Tuo Transfer per Pisa' },
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
