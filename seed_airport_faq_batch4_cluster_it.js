/** Italian counterparts of seed_airport_faq_batch4_cluster.js — three genuine
 *  Italian posts (not machine-translated), published under language='it'
 *  with translation_of pointing back to the English slug, matching the
 *  site's existing /it/blog/[slug] bilingual architecture and reciprocal
 *  hreflang (see src/app/(site)/blog/[slug]/page.tsx and src/app/it/blog/[slug]/page.tsx).
 *  Headings and framing were composed for how an Italian-reading traveler
 *  actually searches (e.g. "si puo dormire in aeroporto", not a literal
 *  translation of the English "Can You Sleep Overnight At..." title),
 *  following the same approach used in seed_digital_nomad_cluster_it.js.
 *  Run AFTER seed_airport_faq_batch4_cluster.js: node seed_airport_faq_batch4_cluster_it.js */
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

  // 1 ── Ritiro all'aeroporto di Bari ────────────────────────────────────
  {
    title: "Dove Trovare il Proprio Autista all'Aeroporto di Bari",
    slug: "dove-trovare-autista-aeroporto-bari",
    translation_of: "meet-driver-bari-airport",
    category: "Guide Aeroportuali",
    read_time: "6 min",
    seo_title: "Aeroporto di Bari: Dove Aspetta il Tuo Autista Privato",
    seo_description: "Atterri a Bari Karol Wojtyła per la Puglia? Ecco esattamente dove aspetta il tuo autista privato e quanto durano i transfer verso Alberobello, Matera e Lecce.",
    focus_keyword: "autista aeroporto bari",
    excerpt: "L'aeroporto di Bari Karol Wojtyła è la porta d'accesso principale alla Puglia. Ecco dove aspetta esattamente il tuo autista, e quanto è davvero lontana la regione da qui.",
    featured_image_url: "/images/bari-taxi.webp",
    content: `
<p>L'aeroporto di Bari Karol Wojtyła (BRI) è il principale punto d'ingresso in Puglia, il punto di partenza naturale per i Trulli di Alberobello, la città rupestre di Matera e i borghi imbiancati della regione. Ecco dove aspetta esattamente il tuo autista.</p>

${cta("Atterri a Bari per esplorare la Puglia? Prenota un transfer privato con un autista che conosce le strade secondarie verso i borghi collinari.")}

<h2 id="dove-aspetta">Dove Aspetta il Tuo Autista</h2>
<p>Bari ha un unico terminal, il che semplifica tutto. Dopo il controllo passaporti — i cittadini UE passano dai varchi automatici, mentre le code per i non-UE possono arrivare a 15-25 minuti nei mesi estivi più affollati — si entra in un'unica sala arrivi. Il tuo autista aspetta appena oltre l'uscita, con un cartello con il tuo nome ben visibile.</p>

<h2 id="come-funziona">Come Funziona l'Accoglienza</h2>
<p>Il tuo volo viene monitorato automaticamente, quindi l'autista si adatta al tuo orario di atterraggio reale. Hai a disposizione 60 minuti di attesa gratuita dopo il touchdown, e il trasferimento fino al centro di Bari richiede solo 15 minuti in condizioni normali.</p>

<h2 id="verso-la-puglia">Proseguire Verso la Puglia dopo l'Atterraggio</h2>
<p>La maggior parte dei visitatori che atterra a Bari non si ferma a lungo in città — le vere attrazioni della Puglia sono sparse per la regione, e un autista locale che conosce le strade secondarie verso i borghi imbiancati e le città rupestri fa davvero la differenza sul viaggio.</p>

<table>
  <thead><tr><th>Destinazione da BRI</th><th>Tempo di trasferimento indicativo</th></tr></thead>
  <tbody>
    <tr><td>Centro storico di Bari (Bari Vecchia)</td><td>~15 minuti</td></tr>
    <tr><td>Alberobello (i Trulli)</td><td>~55-60 minuti</td></tr>
    <tr><td>Matera</td><td>~1 ora</td></tr>
    <tr><td>Polignano a Mare</td><td>~40 minuti</td></tr>
    <tr><td>Lecce</td><td>~1 ora e 30 minuti (di più con il traffico estivo)</td></tr>
  </tbody>
</table>

${cta("Prezzo fisso in tutta la Puglia — dai trulli di Alberobello alle strade barocche di Lecce, con autisti che conoscono davvero la regione.", "/services/airport-transfers", "Scopri le Opzioni di Transfer")}

<h2 id="conoscenza-locale">Perché la Conoscenza delle Strade Locali Conta Qui</h2>
<p>Molti dei borghi più belli della Puglia si trovano lungo strade secondarie strette e poco segnalate, non sempre ben servite dal GPS. Un transfer privato con un autista specializzato in Puglia evita la frustrazione della svolta sbagliata che può rovinare una giornata, specialmente diretti verso Alberobello o i villaggi costieri più piccoli.</p>

<h2 id="domande-frequenti">Domande Frequenti</h2>
<h3 id="faq-1">Dove trovo esattamente il mio autista all'aeroporto di Bari?</h3>
<p>Appena oltre l'unica uscita della sala arrivi, dove il tuo autista aspetta con un cartello con il tuo nome.</p>
<h3 id="faq-2">Quanto dista Alberobello dall'aeroporto di Bari?</h3>
<p>Circa 55-60 minuti in transfer privato.</p>
<h3 id="faq-3">Posso prenotare un transfer diretto da Bari a Matera?</h3>
<p>Sì — è un percorso molto richiesto, che richiede circa 1 ora.</p>
<h3 id="faq-4">Bari è una buona base per esplorare la Puglia?</h3>
<p>Bari è ben collegata, ma molti visitatori la usano soprattutto come punto d'arrivo prima di dirigersi verso Alberobello, Polignano a Mare o più a sud, verso Lecce.</p>
<h3 id="faq-5">Quanto dura il trasferimento dall'aeroporto di Bari al centro città?</h3>
<p>Circa 15 minuti fino al centro storico di Bari, in condizioni di traffico normali.</p>
${related([
  { href: '/services/airport-transfers', label: 'Servizi di Transfer Aeroportuale' },
  { href: '/city/bari', label: 'Servizio Taxi Bari' },
  { href: '/book-now', label: 'Prenota il Tuo Transfer per Bari' },
])}
`
  },

  // 2 ── Dormire in aeroporto a Fiumicino ────────────────────────────────
  {
    title: "Si Può Dormire in Aeroporto a Fiumicino Durante la Notte?",
    slug: "dormire-in-aeroporto-fiumicino-di-notte",
    translation_of: "sleep-overnight-rome-fiumicino",
    category: "Guide Aeroportuali",
    read_time: "6 min",
    seo_title: "Dormire a Fiumicino di Notte: Cosa Aspettarsi Davvero",
    seo_description: "Volo presto la mattina e nessun hotel prenotato a Fiumicino? Ecco dove l'aeroporto resta aperto 24 ore, i posti migliori per riposare e le alternative a pagamento.",
    focus_keyword: "dormire aeroporto fiumicino di notte",
    excerpt: "L'area landside di Fiumicino resta aperta 24 ore su 24, ma il comfort cambia parecchio a seconda di dove ci si ferma. Ecco dove trovare davvero un posto per riposare.",
    featured_image_url: "/images/rome airport.webp",
    content: `
<p>Un volo mattutino molto presto, o uno scalo lungo, a volte significano passare la notte in aeroporto invece di prenotare un hotel che si userebbe a malapena per poche ore. L'area landside di Fiumicino — la zona pubblica, prima dei controlli di sicurezza — resta aperta 24 ore su 24 sia al Terminal 1 sia al Terminal 3, ma dove ci si ferma davvero fa una grande differenza.</p>

${cta("Atterraggio presto o partenza a un orario scomodo? Un transfer privato ti aspetta all'orario concordato, senza dover cercare un taxi in piena notte.", "/rome-airport-transfer", "Scopri il Transfer per Roma")}

<h2 id="e-permesso">È Davvero Permesso Dormire a Fiumicino?</h2>
<p>Sì, nell'area landside — l'aeroporto non chiude mai di notte e non ci sono regole che vietano di riposare negli spazi pubblici. L'area airside (oltre i controlli di sicurezza) è diversa: l'accesso notturno è generalmente riservato ai passeggeri con carta d'imbarco valida, e ai visitatori senza biglietto può essere chiesto di lasciare alcune aree airside durante la notte, di solito tra mezzanotte e le 4 del mattino circa.</p>

<h2 id="posti-migliori">Dove Trovare i Posti Migliori per Riposare</h2>
<p>La qualità dei sedili varia parecchio a seconda del terminal e della zona. La maggior parte delle sedute standard ha braccioli, il che rende più difficile sdraiarsi, ma alcuni punti specifici sono noti per essere più comodi:</p>
<ul>
  <li><strong>Vicino al Gate E12</strong> — poltrone reclinabili e divanetti.</li>
  <li><strong>Vicino ai Gate B9, B11 e D1</strong> — panche senza braccioli, più adatte per sdraiarsi.</li>
  <li><strong>Prima dei controlli di sicurezza, vicino ai Gate A27-31</strong> — sedute più tranquille in stile lounge, con poltrone più morbide, utili se il tuo volo è più tardi e vuoi evitare la folla dell'area airside.</li>
</ul>
<p>Se prevedi di dormire per terra a un certo punto, portare una coperta leggera o un tappetino fa davvero la differenza — i pavimenti in piastrelle diventano freddi di notte, e i posti più comodi si riempiono per primi.</p>

<h2 id="cosa-resta-aperto">Cosa Resta Aperto Durante la Notte</h2>
<p>Non tutti i negozi o i caffè restano aperti 24 ore, e gli orari notturni possono cambiare a seconda della stagione, quindi non contare su un locale specifico aperto alle 3 del mattino. I terminal stessi, i bagni e le aree pubbliche di seduta di base sono ciò su cui puoi contare con maggiore affidabilità.</p>

${cta("Se un volo a orario scomodo ti sta facendo scegliere tra una notte in aeroporto e un hotel, possiamo organizzare il tuo transfer in entrambi i casi — con monitoraggio del volo, così i cambi di orario non creano problemi.", "/services/airport-transfers", "Scopri le Opzioni di Transfer")}

<h2 id="alternative-a-pagamento">Alternative a Pagamento per un Riposo Vero</h2>
<p>Se una notte di sonno vero conta più del risparmio, Fiumicino ha opzioni a pagamento pensate proprio per questo. HelloSky Air Rooms &amp; Lounge si trova di fronte ai terminal, raggiungibile tramite un passaggio coperto, e offre camere private e aree relax sia per soste brevi sia per pernottamenti completi — un'alternativa concreta alla ricerca di una panchina libera.</p>

<h2 id="consigli">Consigli per una Notte Più Comoda</h2>
<ul>
  <li>Tieni passaporto, carta d'imbarco e oggetti di valore con te, non nei bagagli in stiva lasciati incustoditi.</li>
  <li>Cuffie con cancellazione del rumore o tappi per le orecchie fanno più differenza di quanto si pensi in un terminal aperto 24 ore.</li>
  <li>Individua la tua zona preferita il prima possibile in serata — i posti migliori si riempiono in fretta quando atterrano i voli serali.</li>
  <li>Se parti presto la mattina, verifica in anticipo quale terminal usa il tuo volo, per non doverti spostare alle 4 del mattino con i bagagli.</li>
</ul>

<h2 id="domande-frequenti">Domande Frequenti</h2>
<h3 id="faq-1">È davvero legale dormire di notte a Fiumicino?</h3>
<p>Sì — le aree landside dei Terminal 1 e 3 sono aperte 24 ore su 24 e non ci sono regole che vietano di riposare lì. L'accesso airside notturno è più limitato ed è generalmente riservato ai passeggeri con carta d'imbarco.</p>
<h3 id="faq-2">Qual è il posto più comodo per dormire a Fiumicino?</h3>
<p>Le sedute vicino al Gate E12, e le panche senza braccioli vicino ai Gate B9, B11 e D1, sono tra i posti più usati per sdraiarsi davvero.</p>
<h3 id="faq-3">Negozi e ristoranti restano aperti tutta la notte a Fiumicino?</h3>
<p>Non in modo affidabile — gli orari variano da locale a locale e in base alla stagione, quindi non fare affidamento su un caffè specifico aperto nelle prime ore del mattino.</p>
<h3 id="faq-4">C'è un'opzione a pagamento se non voglio dormire su una panchina?</h3>
<p>Sì — HelloSky Air Rooms &amp; Lounge, di fronte ai terminal tramite un passaggio coperto, offre camere private per soste brevi o pernottamenti completi.</p>
<h3 id="faq-5">Posso restare in area airside di notte se il mio volo è solo il pomeriggio successivo?</h3>
<p>L'accesso airside notturno è generalmente riservato ai passeggeri con carta d'imbarco, e ai visitatori senza biglietto può essere chiesto di lasciare alcune aree di notte — le zone landside del terminal restano l'opzione più affidabile per un'attesa prolungata.</p>
${related([
  { href: '/airport/rome-fiumicino', label: 'Guida Aeroporto di Roma Fiumicino' },
  { href: '/rome-airport-transfer', label: 'Transfer Aeroportuale Roma' },
  { href: '/services/airport-transfers', label: 'Servizi di Transfer Aeroportuale' },
  { href: '/book-now', label: 'Prenota il Tuo Transfer per Fiumicino' },
])}
`
  },

  // 3 ── Dogana negli aeroporti italiani ─────────────────────────────────
  {
    title: "Come Funziona la Dogana Quando Atterri in un Aeroporto Italiano",
    slug: "come-funziona-dogana-aeroporti-italiani",
    translation_of: "italy-airport-customs-arrivals",
    category: "Guide Aeroportuali",
    read_time: "7 min",
    seo_title: "Dogana negli Aeroporti Italiani: Come Funziona Davvero (2026)",
    seo_description: "Cosa aspettarsi alla dogana atterrando in Italia nel 2026 — canale verde e rosso, franchigie doganali, obbligo di dichiarazione del contante e il sistema EES per i non-UE.",
    focus_keyword: "dogana aeroporti italiani arrivi",
    excerpt: "La dogana negli aeroporti italiani segue il sistema UE a canali verde e rosso, ma cosa succede davvero al controllo passaporti dipende ormai molto dalla tua cittadinanza.",
    featured_image_url: "/images/airport-transfer.webp",
    content: `
<p>La dogana negli aeroporti italiani segue lo stesso quadro normativo di tutta l'area Schengen, ma quello che succede realmente tra la discesa dall'aereo e l'uscita dipende ora parecchio dal tuo passaporto — soprattutto da quando il nuovo sistema biometrico di frontiera dell'UE è diventato pienamente operativo in tutta Italia nell'aprile 2026.</p>

${cta("Qualunque cosa succeda al controllo passaporti, il tuo autista monitora il volo e si adatta automaticamente — nessuna fretta né stime da indovinare sull'orario di arrivo.", "/services/airport-transfers", "Scopri le Opzioni di Transfer")}

<h2 id="controllo-passaporti">Controllo Passaporti: Corsia UE/Schengen o Non-UE</h2>
<p>Ogni grande aeroporto italiano divide gli arrivi in corsie separate: una corsia UE/Schengen (spesso con varchi automatici self-service per i passaporti idonei) e una corsia non-UE o "tutti i passaporti". Da aprile 2026, tutti gli aeroporti e i porti italiani sono coperti dal sistema Entry/Exit (EES) dell'UE — ai cittadini di paesi terzi non-UE vengono ora rilevate le impronte digitali e una foto del volto al primo ingresso, il che aggiunge qualche minuto rispetto al semplice timbro sul passaporto. Questa registrazione è un passaggio una tantum: ai viaggi successivi, con i dati già archiviati, la verifica è molto più rapida di una registrazione completa.</p>
<p>Le code per gli arrivi non-UE sono state abbastanza lunghe nei picchi estivi che il Ministero dell'Interno italiano ha autorizzato la polizia di frontiera a tornare temporaneamente al timbro manuale del passaporto quando una coda supera i 45 minuti, quindi i tempi di attesa reali possono variare parecchio in base all'aeroporto e all'orario.</p>

<h2 id="canali-doganali">I Canali Doganali Verde e Rosso</h2>
<p>Dopo il controllo passaporti e il ritiro bagagli, si passa attraverso uno dei due canali doganali:</p>
<ul>
  <li><strong>Canale Verde</strong> — per chi non ha nulla da dichiarare, cioè tutto ciò che si porta rientra nelle franchigie doganali standard (vedi sotto).</li>
  <li><strong>Canale Rosso</strong> — per chi porta merci oltre quei limiti, articoli soggetti a restrizioni, o €10.000 o più in contanti.</li>
</ul>
<p>Scegliere il canale verde non garantisce di passare senza controlli — i funzionari doganali effettuano controlli a campione anche sui passeggeri del canale verde, e gli arrivi non-UE vengono controllati un po' più spesso di quelli intra-UE. All'interno dell'UE stessa, i controlli doganali di routine sono in gran parte una formalità, anche se i funzionari restano in servizio e possono fermare chiunque a campione.</p>

<h2 id="franchigie">Cosa Si Può Portare Senza Dichiarare</h2>
<p>Se arrivi in aereo da fuori l'UE, la franchigia doganale standard prevede in linea di massima: 200 sigarette (o una quantità equivalente di altri prodotti del tabacco), 1 litro di superalcolici sopra il 22% di gradazione (o il doppio per alcolici più leggeri), oltre a franchigie aggiuntive per vino e birra, e fino a circa €430 di altre merci. Superare questi limiti significa passare dal canale rosso e potenzialmente pagare i diritti doganali sull'eccedenza.</p>

${cta("Arrivi con la famiglia e tutti i bagagli extra che comporta? Con un transfer privato non c'è da destreggiarsi tra le banchine del treno dopo un volo lungo.", "/services/airport-transfers", "Scopri le Opzioni di Transfer")}

<h2 id="dichiarazione-contante">Dichiarare Contanti Oltre €10.000</h2>
<p>Se porti con te €10.000 o più in contanti — inclusi banconote, monete, assegni bancari o traveller's cheque, e questo vale per persona, non per nucleo familiare — sei tenuto per legge a dichiararlo passando dal canale rosso. Non è una regola specifica italiana: è una norma antiriciclaggio valida in tutta l'UE, sia che tu sia residente sia che tu sia in visita.</p>

<h2 id="se-fermato">Cosa Succede se Vieni Fermato per un Controllo</h2>
<p>Se vieni fermato nel canale verde o segnalato nel canale rosso, un funzionario in genere chiederà cosa stai trasportando e potrebbe chiederti di aprire i bagagli. Le merci non dichiarate oltre il limite possono essere confiscate con relativa multa; il contante non dichiarato oltre €10.000 può portare a sequestro e sanzioni anche se il denaro è del tutto legittimo — l'obbligo riguarda la dichiarazione in sé, non dimostrare sul momento la provenienza del denaro.</p>

<h2 id="domande-frequenti">Domande Frequenti</h2>
<h3 id="faq-1">I cittadini UE passano dalla dogana atterrando in Italia?</h3>
<p>I cittadini UE attraversano comunque l'area doganale dell'aeroporto, ma per le merci di uso personale entro i limiti normali i controlli sono in gran parte una formalità — la vera distinzione al controllo passaporti è la corsia separata UE/Schengen rispetto a quella non-UE.</p>
<h3 id="faq-2">Cos'è il sistema Entry/Exit (EES) dell'UE e mi riguarda?</h3>
<p>L'EES è un sistema biometrico di frontiera che rileva impronte digitali e foto del volto dei cittadini di paesi terzi non-UE al primo ingresso nell'area Schengen. È pienamente operativo in tutti gli aeroporti italiani da aprile 2026. I titolari di passaporto UE/Schengen non ne sono soggetti.</p>
<h3 id="faq-3">Quanto contante posso portare in Italia senza dichiararlo?</h3>
<p>Fino a €10.000 per persona. A partire da questa cifra — tra contanti, assegni o titoli combinati — è obbligatorio dichiararlo tramite il canale rosso, indipendentemente dalla cittadinanza o dalla residenza.</p>
<h3 id="faq-4">Cosa succede se scelgo per sbaglio il canale verde avendo qualcosa da dichiarare?</h3>
<p>Conviene tornare indietro e usare il canale rosso — i funzionari doganali effettuano controlli a campione anche nel canale verde, ed essere trovati con merci o contanti non dichiarati lì può comportare confisca e multa.</p>
<h3 id="faq-5">La dogana influisce sui tempi di attesa del mio autista?</h3>
<p>Non direttamente — il tuo autista monitora l'orario reale di atterraggio del volo e si adatta di conseguenza, quindi una coda più lunga al controllo passaporti o alla dogana non causa un mancato ritiro, solo un ritiro leggermente posticipato.</p>
${related([
  { href: '/airport/rome-fiumicino', label: 'Guida Aeroporto di Roma Fiumicino' },
  { href: '/services/airport-transfers', label: 'Servizi di Transfer Aeroportuale' },
  { href: '/it/domande-frequenti', label: 'Domande Frequenti' },
  { href: '/book-now', label: 'Prenota il Tuo Transfer Aeroportuale' },
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
      .insert({
        ...post,
        language: 'it',
        status: 'published',
        author_id: author.id,
        published_at: new Date().toISOString(),
        tags: [],
      })
      .select('slug');
    if (error) { console.error(`Insert error for ${post.slug}:`, error); process.exit(1); }
    console.log('Inserted:', data);
  }

  console.log('\nDone — 3 IT posts published, linked via translation_of.');
}

run();
