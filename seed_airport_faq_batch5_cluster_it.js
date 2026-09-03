/** Italian counterpart of seed_airport_faq_batch5_cluster.js — a genuine
 *  Italian post (not machine-translated), published under language='it'
 *  with translation_of pointing back to the English slug, matching the
 *  site's existing /it/blog/[slug] bilingual architecture.
 *  Run AFTER seed_airport_faq_batch5_cluster.js: node seed_airport_faq_batch5_cluster_it.js */
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

const post = {
    title: "Voli in Coincidenza in Italia: Dove Si Passa la Dogana?",
    slug: "dogana-voli-in-coincidenza-italia",
    translation_of: "italy-customs-connecting-flight",
    category: "Guide Aeroportuali",
    read_time: "6 min",
    seo_title: "Voli in Coincidenza per l'Italia: Dove Si Passa Davvero la Dogana",
    seo_description: "Voli verso l'Italia con uno scalo? Ecco esattamente dove avvengono controllo passaporti e dogana — e non sempre nello stesso aeroporto.",
    focus_keyword: "dogana volo in coincidenza italia",
    excerpt: "Su un volo in coincidenza verso l'Italia, controllo passaporti e dogana non avvengono nello stesso punto — ecco dove si svolge davvero ciascuno dei due controlli.",
    featured_image_url: "/images/airport-transfer.webp",
    content: `
<p>Se il tuo volo per l'Italia prevede uno scalo — atterraggio in un aeroporto e proseguimento verso un altro — è naturale chiedersi dove si gestiscono davvero il controllo passaporti e la dogana. La risposta onesta è che i due controlli non avvengono nello stesso punto, e confonderli è una fonte comune di disorientamento al gate.</p>

${cta("Qualunque sia l'aeroporto dove il tuo volo viene effettivamente sdoganato, il tuo autista monitora l'orario reale di arrivo al tuo aeroporto finale e si adatta automaticamente.", "/services/airport-transfers", "Scopri le Opzioni di Transfer")}

<h2 id="controllo-passaporti">Controllo Passaporti: al Primo Aeroporto Schengen</h2>
<p>Se arrivi da fuori l'area Schengen e prosegui verso un altro paese Schengen — ad esempio atterrando a Roma e proseguendo per Milano — il controllo passaporti avviene in quel <strong>primo aeroporto Schengen</strong>, non alla tua destinazione finale. Una volta timbrato il passaporto o completata la registrazione biometrica per l'ingresso nell'area Schengen, proseguire con un volo in coincidenza al suo interno viene trattato come un trasferimento interno, senza ulteriori controlli di frontiera.</p>
<p>Se sia il tuo punto di partenza sia la tua destinazione finale si trovano già all'interno dell'area Schengen, non passi affatto dal controllo passaporti durante lo scalo — non viene attraversata alcuna frontiera esterna.</p>

<h2 id="dogana">La Dogana: alla Destinazione Finale</h2>
<p>La dogana funziona al contrario. Il canale verde o rosso — dichiarare o meno merci — si affronta nell'aeroporto dove ritiri effettivamente il bagaglio in stiva, cioè la tua <strong>destinazione finale</strong>, non l'aeroporto di scalo. È in gran parte una questione pratica: i bagagli restano registrati fino all'aeroporto finale, quindi non c'è nulla da dichiarare o controllare finché non li hai fisicamente in mano.</p>

${cta("Atterri nel tuo aeroporto finale in Italia dopo un lungo viaggio con scalo? Un transfer privato evita di doversi orientare al volo con bagagli pesanti o bambini stanchi.", "/services/airport-transfers", "Scopri le Opzioni di Transfer")}

<h2 id="ees">La Registrazione Biometrica EES Resta al Primo Ingresso</h2>
<p>Un dettaglio che spiazza spesso i viaggiatori: il sistema Entry/Exit (EES) dell'UE, che rileva impronte digitali e foto del volto per i cittadini di paesi terzi non-UE, si completa al tuo <strong>primo punto di ingresso Schengen</strong> — anche se quell'aeroporto non è la tua destinazione finale. È una registrazione una tantum per viaggio, quindi non la ripeterai all'aeroporto di scalo, ma va messa in conto al primo aeroporto, non rimandata mentalmente a uno scalo successivo dove magari hai più tempo.</p>

<h2 id="esempio-pratico">Un Esempio Pratico: da Roma a Milano</h2>
<p>Immagina di volare da fuori Europa verso Roma Fiumicino, con proseguimento per Milano. A Fiumicino passi dal controllo passaporti e, se applicabile, dalla registrazione biometrica EES. Non ritiri i bagagli né passi dalla dogana lì — restano registrati fino a destinazione. Prendi poi il volo in coincidenza per Milano, ed è solo lì che ritiri i bagagli e attraversi il canale doganale.</p>
<p>Per una coincidenza Schengen-Schengen come questa, le indicazioni di viaggio generalmente suggeriscono di prevedere un margine adeguato tra i voli — un riferimento comune è di almeno 90 minuti — per il tragitto tra i gate ed eventuali code al controllo passaporti o al passaggio EES.</p>

<h2 id="domande-frequenti">Domande Frequenti</h2>
<h3 id="faq-1">Se sono in coincidenza a Roma per Milano, passo la dogana a Roma?</h3>
<p>No — la dogana si affronta alla destinazione finale, dove ritiri effettivamente il bagaglio in stiva. A Roma passeresti dal controllo passaporti (e dall'EES, se applicabile); la dogana avviene a Milano.</p>
<h3 id="faq-2">Devo passare di nuovo dal controllo passaporti all'aeroporto di scalo?</h3>
<p>No, non se sei in coincidenza tra due paesi Schengen — una volta superato il controllo passaporti al primo ingresso Schengen, le coincidenze successive all'interno dell'area vengono trattate come un trasferimento interno.</p>
<h3 id="faq-3">Il controllo biometrico EES avviene in ogni aeroporto che attraverso?</h3>
<p>No — è una registrazione una tantum per viaggio, completata al primo punto di ingresso Schengen, non ripetuta in un aeroporto di scalo.</p>
<h3 id="faq-4">Quanto tempo devo prevedere per una coincidenza Schengen-Schengen?</h3>
<p>Un riferimento comune è almeno circa 90 minuti, per coprire lo spostamento tra i gate ed eventuali code al controllo passaporti o al passaggio EES nel primo aeroporto.</p>
<h3 id="faq-5">E se sia la partenza sia la destinazione finale sono già all'interno dell'area Schengen?</h3>
<p>Allora non passi affatto dal controllo passaporti durante lo scalo, poiché non viene attraversata alcuna frontiera Schengen esterna — dovrai affrontare solo il normale canale doganale alla destinazione finale se hai qualcosa da dichiarare.</p>
${related([
  { href: '/blog/come-funziona-dogana-aeroporti-italiani', label: 'Come Funziona la Dogana negli Aeroporti Italiani' },
  { href: '/airport/rome-fiumicino', label: 'Guida Aeroporto di Roma Fiumicino' },
  { href: '/services/airport-transfers', label: 'Servizi di Transfer Aeroportuale' },
  { href: '/book-now', label: 'Prenota il Tuo Transfer Aeroportuale' },
])}
`
};

async function run() {
  const { data: author, error: aerr } = await supabase.from('bloggers').select('id').limit(1).single();
  if (aerr || !author) { console.error('No author found:', aerr); process.exit(1); }

  const { data, error } = await supabase
    .from('blogs')
    .insert({ ...post, language: 'it', status: 'published', author_id: author.id, published_at: new Date().toISOString(), tags: [] })
    .select('slug');
  if (error) { console.error('Insert error:', error); process.exit(1); }
  console.log('Inserted:', data);
}

run();
