/** Italian counterpart of seed_americas_cup_naples.js — genuine Italian
 *  content (not machine-translated), language='it', translation_of pointing
 *  to the EN slug. IT-native service pages used where they exist (verified:
 *  /it/servizi/trasferimenti-aeroportuali, /it/servizi/trasferimenti-hotel,
 *  /it/contatti); /airport/naples, /city/naples, /city/amalfi-coast and
 *  /book-now reused as plain EN paths since none has an /it/ counterpart —
 *  matching the exact same precedent already used by this site's own
 *  Italian Naples-Airport-to-hotel route content in new-regions-routes-data.ts,
 *  which links to /city/amalfi-coast and /tour/amalfi-coast directly even
 *  from Italian-language pages.
 *  Run AFTER seed_americas_cup_naples.js: node seed_americas_cup_naples_it.js */
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
  title: "Louis Vuitton America's Cup Napoli 2026: Guida a Transfer e Chauffeur",
  slug: "transfer-americas-cup-napoli",
  translation_of: "americas-cup-naples-transfer",
  category: "Viaggi di Lavoro",
  read_time: "8 min",
  seo_title: "Louis Vuitton America's Cup Napoli 2026: Guida a Transfer e Chauffeur",
  seo_description: "Napoli ospita la Regata Preliminare della Louis Vuitton America's Cup dal 24 al 27 settembre 2026. Ecco come arrivare dall'aeroporto, dall'hotel o dal Lungomare Caracciolo.",
  focus_keyword: "transfer america's cup napoli",
  excerpt: "Una guida pratica ai trasporti per la Louis Vuitton America's Cup a Napoli — transfer da aeroporto, hotel e villaggio di regata, e cosa comporta la chiusura di via Caracciolo.",
  featured_image_url: "/images/naples.webp",
  content: `
<p><strong>Napoli ospita la Regata Preliminare della Louis Vuitton 38ª America's Cup — Napoli PR2 — dal 24 al 27 settembre 2026, con le regate nel Golfo di Napoli e il Villaggio di Regata lungo il Lungomare Caracciolo.</strong> È l'ultimo evento preliminare prima della vera e propria America's Cup Match, che dovrebbe tornare a Napoli nel luglio 2027. In entrambi i casi, se stai viaggiando verso Napoli per l'evento, le domande pratiche sono le stesse: come arrivare dall'aeroporto, come raggiungere il tuo hotel e come spostarti verso il lungomare nei giorni di regata — soprattutto perché un tratto della strada costiera viene chiuso al traffico per l'evento.</p>

<h2 id="in-breve">Louis Vuitton America's Cup Napoli 2026 in Breve</h2>
<table>
  <thead><tr><th>Informazione</th><th>Dettagli</th></tr></thead>
  <tbody>
    <tr><td>Evento</td><td>Louis Vuitton 38ª America's Cup — Regata Preliminare Napoli (PR2)</td></tr>
    <tr><td>Luogo</td><td>Napoli, Italia — Golfo di Napoli</td></tr>
    <tr><td>Date</td><td>24-27 settembre 2026</td></tr>
    <tr><td>Villaggio di Regata</td><td>Lungomare Caracciolo (Via Francesco Caracciolo), Rotonda Diaz – Spiaggia della Mappatella — ingresso gratuito</td></tr>
    <tr><td>Aeroporto principale</td><td>Aeroporto Internazionale di Napoli / Capodichino (NAP)</td></tr>
    <tr><td>Prossimo appuntamento</td><td>La vera e propria America's Cup Match dovrebbe iniziare il 10 luglio 2027, sempre a Napoli</td></tr>
    <tr><td>Trasporti</td><td>Transfer privato, taxi, mezzi pubblici</td></tr>
  </tbody>
</table>

<h2 id="come-arrivare">Come Arrivare all'America's Cup a Napoli</h2>
<p>L'Aeroporto di Napoli Capodichino (NAP) è il principale punto di arrivo per l'evento — è l'unico aeroporto della città e dista solo 7 km dal centro. Da lì, o dal tuo hotel una volta arrivato, valgono le stesse opzioni di base di qualsiasi visita a Napoli: il <strong>taxi</strong>, disponibile al posteggio dell'aeroporto e in città; i <strong>mezzi pubblici</strong>, praticabili se alloggi in centro e viaggi leggero; e un <strong>transfer privato</strong> prenotato in anticipo, organizzato a prezzo fisso per un tragitto diretto porta a porta. Camminare è realistico solo se sei già vicino al Lungomare, non come modo per coprire la distanza dall'aeroporto o da un hotel più lontano dal mare.</p>
<p>Nessuna di queste opzioni è automaticamente quella giusta — un visitatore singolo che alloggia vicino al lungomare potrebbe non aver bisogno di altro che un breve taxi, mentre una famiglia, un gruppo o chiunque arrivi con bagagli in un giorno di regata, quando parte del lungomare è chiusa al traffico, troverà generalmente più prevedibile un transfer organizzato in anticipo.</p>

<h2 id="transfer-aeroporto">Dall'Aeroporto di Napoli all'America's Cup</h2>
<p>Capodichino si trova a circa 7 km dal centro città, normalmente un tragitto di 15-20 minuti in condizioni di traffico normali — anche se questo può variare, e i giorni di regata potrebbero portare traffico aggiuntivo proprio nella zona del lungomare.</p>

<h3 id="transfer-privato-aeroporto">Transfer Privato dall'Aeroporto di Napoli</h3>
<p>Un transfer privato prenotato in anticipo dall'Aeroporto di Napoli ti porta direttamente al tuo hotel o, dove l'accesso lo consente, verso la zona del Lungomare Caracciolo, senza dover cercare un taxi o affrontare i mezzi pubblici con i bagagli dopo l'atterraggio. Lo stesso vale al contrario per la partenza — un transfer di ritorno verso l'aeroporto può essere prenotato in anticipo per la fine del tuo soggiorno.</p>

${cta("Atterri all'Aeroporto di Napoli per l'America's Cup? Un transfer privato può portarti direttamente in hotel.", "/it/servizi/trasferimenti-aeroportuali", "Scopri i Trasferimenti Aeroportuali")}

<h2 id="transfer-hotel">Transfer dagli Hotel di Napoli all'America's Cup</h2>
<p>Oltre alla tratta aeroportuale, gli spostamenti che contano di più durante l'evento vero e proprio sono <strong>dall'hotel alla zona del Lungomare Caracciolo</strong> nei giorni di regata, e il <strong>tragitto di ritorno</strong> in seguito — oltre, nei giorni di arrivo e partenza, ai consueti transfer <strong>aeroporto-hotel</strong> e <strong>hotel-aeroporto</strong>. Molti visitatori alloggiano nel centro di Napoli, a distanza ragionevole dal lungomare, anche se la distanza esatta a piedi dipende dal singolo hotel. Poiché un tratto di Via Francesco Caracciolo viene chiuso al traffico per la regata, conviene confermare in anticipo il punto di ritiro e di arrivo, invece di dare per scontato che un autista possa raggiungere direttamente la strada davanti al Villaggio di Regata nei giorni di gara — consulta la nostra <a href="/city/naples">guida alla città di Napoli</a> per maggiori dettagli su come muoversi in città in generale, oppure il nostro <a href="/it/servizi/trasferimenti-hotel">servizio di trasferimenti in hotel</a> per capire come funzionano i ritiri prenotati in anticipo.</p>

<h2 id="autista-privato">Servizio di Autista Privato per l'America's Cup a Napoli</h2>
<p>Un autista privato è utile soprattutto per chi preferisce avere il trasporto organizzato in anticipo invece di doverlo gestire giorno per giorno — visitatori internazionali che non conoscono Napoli, famiglie e coppie che preferiscono non gestire taxi con bambini o bagagli, e chiunque abbia un programma serrato nei giorni di regata. Il servizio nella sua essenza è semplice: un ritiro prenotato in anticipo in aeroporto o in hotel, un tragitto diretto porta a porta, e un transfer di ritorno organizzato per quando ne hai bisogno, invece di cercarlo sul momento.</p>

<h2 id="transfer-gruppo">Transfer di Gruppo per l'America's Cup a Napoli</h2>
<p>Famiglie, gruppi di amici e visitatori che viaggiano insieme possono prenotare il trasporto come gruppo invece di dividersi su taxi separati — utile per restare uniti e arrivare tutti insieme, soprattutto in un giorno di regata quando trovare più taxi vicino a un lungomare affollato può richiedere più tempo del previsto. Se viaggi in un gruppo numeroso, comunica il numero di passeggeri e i bagagli al momento della prenotazione così può essere organizzato un trasporto adeguato.</p>

${cta("Stai organizzando il trasporto per l'America's Cup con la famiglia o un gruppo? Contattaci per il tuo viaggio.", "/it/contatti", "Contattaci")}

<h2 id="giorni-evento">Organizzare i Trasporti nei Giorni di Evento</h2>
<p>Il dettaglio di accesso più chiaro e verificato per Napoli PR2 è che <strong>Via Francesco Caracciolo — la strada che costeggia il Villaggio di Regata — viene chiusa al traffico durante la regata.</strong> Questo influisce su quanto vicino un veicolo possa effettivamente portarti al lungomare nei giorni di gara, quindi conviene organizzarsi di conseguenza invece di dare per scontato un accesso porta a porta fino al Lungomare stesso. Al di là di questo, valgono le normali accortezze per i giorni di evento: mettere in conto tempo extra per il traffico vicino al lungomare, confermare un punto di ritiro e arrivo preciso invece di una zona generica, e aspettarsi che l'area intorno al Villaggio di Regata sia più trafficata del solito, specialmente nelle ore intorno alle regate di ogni giornata.</p>

<h2 id="pianifica-viaggio">Pianifica il Tuo Viaggio per l'America's Cup a Napoli</h2>
<p>Una visita tipica si articola in alcuni spostamenti distinti:</p>
<ul>
  <li><strong>Giorno di arrivo</strong>: Aeroporto di Napoli → il tuo hotel</li>
  <li><strong>Giorno/i di regata</strong>: Hotel → zona Lungomare Caracciolo / Villaggio di Regata</li>
  <li><strong>Dopo le regate</strong>: zona Villaggio di Regata → hotel</li>
  <li><strong>Giorno di partenza</strong>: Hotel → Aeroporto di Napoli</li>
</ul>
<p>Prenotare ciascuno di questi spostamenti in anticipo — invece di deciderlo il giorno stesso — è particolarmente utile qui, data la chiusura di Via Francesco Caracciolo e il generale aumento di traffico sul lungomare durante l'evento.</p>

<h2 id="guida-pratica">Guida Pratica ai Trasporti</h2>
<table>
  <thead><tr><th>Spostamento</th><th>Opzioni possibili</th></tr></thead>
  <tbody>
    <tr><td>Aeroporto di Napoli → Hotel</td><td>Transfer privato, taxi o mezzi pubblici</td></tr>
    <tr><td>Aeroporto di Napoli → Zona evento</td><td>Transfer privato o taxi (confermare il punto di arrivo data la chiusura di Via Caracciolo)</td></tr>
    <tr><td>Hotel → Zona evento</td><td>Transfer privato, taxi o a piedi se l'hotel è vicino</td></tr>
    <tr><td>Zona evento → Hotel</td><td>Transfer prenotato in anticipo o taxi</td></tr>
    <tr><td>Hotel → Aeroporto di Napoli</td><td>Transfer privato, taxi o mezzi pubblici</td></tr>
    <tr><td>Trasporto di gruppo</td><td>Veicolo privato, dimensionato su passeggeri e bagagli</td></tr>
  </tbody>
</table>

<h2 id="consigli">Consigli per Prenotare il Tuo Transfer per l'America's Cup a Napoli</h2>
<ul>
  <li><strong>Prenota in anticipo</strong> — la domanda di trasporto è più alta del solito durante il periodo dell'evento.</li>
  <li><strong>Comunica i dettagli del tuo volo</strong> per i ritiri in aeroporto, così il tuo arrivo può essere monitorato.</li>
  <li><strong>Conferma il numero di passeggeri e i bagagli</strong> così viene organizzato il veicolo giusto.</li>
  <li><strong>Conferma il nome esatto e l'indirizzo del tuo hotel</strong> al momento della prenotazione.</li>
  <li><strong>Conferma la destinazione nei giorni di evento</strong> — data la chiusura di Via Caracciolo, concorda in anticipo un punto di ritiro e arrivo realistico invece di dare per scontato un accesso diretto al Villaggio di Regata.</li>
  <li><strong>Verifica le informazioni ufficiali sull'accesso all'evento</strong> più vicino alla data del tuo viaggio, dato che chiusure stradali e punti di accesso possono essere modificati dagli organizzatori.</li>
  <li><strong>Metti in conto tempo extra per il traffico</strong> vicino al lungomare nei giorni di regata.</li>
  <li><strong>Organizza in anticipo il transfer di ritorno verso l'aeroporto</strong>, invece di lasciarlo all'ultimo giorno.</li>
</ul>

<h2 id="domande-frequenti">Domande Frequenti</h2>
<h3 id="faq-1">Come si arriva dall'Aeroporto di Napoli all'America's Cup?</h3>
<p>L'Aeroporto di Napoli Capodichino dista circa 7 km dal centro città, normalmente un tragitto di 15-20 minuti. Un taxi, i mezzi pubblici o un transfer privato prenotato in anticipo possono portarti dall'aeroporto al tuo hotel o, dove l'accesso lo consente, verso la zona del Lungomare Caracciolo — un transfer privato è l'opzione più prevedibile se arrivi con bagagli o hai un programma serrato.</p>
<h3 id="faq-2">Dove si svolge l'evento America's Cup a Napoli?</h3>
<p>La Regata Preliminare di Napoli (24-27 settembre 2026) si corre nel Golfo di Napoli, con il Villaggio di Regata lungo il Lungomare Caracciolo, centrato sulla Rotonda Diaz – Spiaggia della Mappatella. L'ingresso al Villaggio di Regata è gratuito.</p>
<h3 id="faq-3">Posso prenotare un transfer privato dall'Aeroporto di Napoli?</h3>
<p>Sì. I transfer privati possono essere prenotati in anticipo dall'Aeroporto di Napoli Capodichino fino al tuo hotel, a un prezzo fisso concordato in anticipo.</p>
<h3 id="faq-4">Posso prenotare un transfer dal mio hotel a Napoli fino all'evento?</h3>
<p>Sì — i transfer hotel-lungomare possono essere prenotati per i giorni di regata, insieme al viaggio di ritorno in seguito. Data la chiusura di Via Francesco Caracciolo durante la regata, conviene confermare il punto di arrivo esatto al momento della prenotazione.</p>
<h3 id="faq-5">Posso organizzare un transfer di ritorno dopo l'evento?</h3>
<p>Sì. Sia il tragitto di ritorno dalla zona del Villaggio di Regata all'hotel, sia il successivo transfer di partenza verso l'Aeroporto di Napoli, possono essere prenotati in anticipo.</p>
<h3 id="faq-6">I gruppi possono prenotare un trasporto privato per l'America's Cup?</h3>
<p>Sì — famiglie e gruppi che viaggiano insieme possono prenotare il trasporto come gruppo invece di dividersi su taxi separati, utile per arrivare insieme nei giorni di regata.</p>
<h3 id="faq-7">Con quanto anticipo conviene prenotare un transfer per l'America's Cup a Napoli?</h3>
<p>Il prima possibile, non appena i piani di viaggio sono confermati, dato che la domanda di trasporto è più alta del solito durante il periodo dell'evento — vale sia per i transfer aeroportuali sia per il viaggio di ritorno.</p>

<p style="margin-top:32px;">Stai organizzando il tuo transfer per l'America's Cup a Napoli? <a href="/book-now">Richiedi un preventivo</a> per il trasporto da aeroporto, hotel o evento, oppure <a href="/it/contatti">contattaci</a> se stai coordinando il viaggio per una famiglia o un gruppo.</p>
${related([
  { href: '/airport/naples', label: 'Guida Aeroporto di Napoli' },
  { href: '/city/naples', label: 'Guida alla Città di Napoli e Transfer' },
  { href: '/it/servizi/trasferimenti-hotel', label: 'Trasferimenti in Hotel in Italia' },
  { href: '/it/servizi/trasferimenti-aeroportuali', label: 'Trasferimenti Aeroportuali in Italia' },
  { href: '/city/amalfi-coast', label: 'Panoramica Costiera Amalfitana' },
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
