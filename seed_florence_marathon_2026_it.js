/** Maratona di Firenze 2026 — transfer per il weekend di gara (IT, lead generation).
 *
 *  Italian counterpart of seed_florence_marathon_2026.js (translation_of =
 *  'florence-marathon-2026-transfers'), written for runners travelling from
 *  elsewhere in Italy first, then for airport arrivals. Not a race guide:
 *  every section is one journey of the weekend, linked to the page that sells
 *  it, ending in a quote request. Italian commercial pages are linked where
 *  they exist (/it/route/*, /it/servizi/*, /it/day-trips/*); English pages
 *  are used only where no Italian version exists (Florence airport/city hub,
 *  Bologna/Milan/Venice → Florence routes).
 *
 *  Same verified facts as the EN post (organiser's regulation, checked
 *  11 Nov 2026): Sun 29 Nov 2026, start 8:30 Piazza Duomo, grids from 7:00,
 *  6-hour limit; Expo at Stazione Leopolda Fri 27 Nov 10:00–19:30 and
 *  Sat 28 Nov 9:00–19:30; bag storage Piazza Santa Maria Novella from 7:00.
 *  Same confirmed policies only; no prices, no payment methods, no guarantees.
 *
 *  Run AFTER the EN seed: node seed_florence_marathon_2026_it.js */
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const SITE = 'https://www.italytaxiservice.com';
const SLUG = 'transfer-maratona-firenze-2026';
const EN_SLUG = 'florence-marathon-2026-transfers';
const WHATSAPP = 'https://wa.me/923148932631?text=' + encodeURIComponent('Buongiorno, vorrei un preventivo per i transfer della Maratona di Firenze (29 novembre 2026).');

const cta = (text, href = '/book-now', label = 'Richiedi un Preventivo') => `
<div style="background:#0F1C2E;color:#fff;padding:28px 32px;border-radius:16px;margin:32px 0;">
  <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#e2e8f0;">${text}</p>
  <a href="${href}" style="display:inline-block;background:#c5a059;color:#0F1C2E;font-weight:700;padding:12px 26px;border-radius:999px;text-decoration:none;margin:0 12px 8px 0;">${label} →</a>
  <a href="${WHATSAPP}" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#25D366;color:#fff;font-weight:700;padding:12px 26px;border-radius:999px;text-decoration:none;margin:0 0 8px 0;">Scrivici su WhatsApp →</a>
</div>`;

const related = (links) => `
<div class="internal-links-block" style="background:#f8fafc;padding:28px;border-radius:16px;margin-top:40px;border:1px solid #e2e8f0;">
  <h3 style="margin-top:0;color:#0F1C2E;">Transfer e Servizi a Firenze</h3>
  <ul style="margin-bottom:0;">
    ${links.map(l => `<li><a href="${l.href}" style="color:#c5a059;font-weight:600;">${l.label}</a></li>`).join('\n    ')}
  </ul>
</div>`;

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SportsEvent',
      '@id': `${SITE}/it/blog/${SLUG}#event`,
      name: 'Estra Firenze Marathon 2026',
      sport: 'Maratona',
      inLanguage: 'it-IT',
      description: 'Estra Firenze Marathon 2026: 42,195 km per le strade di Firenze, con partenza da Piazza del Duomo domenica 29 novembre.',
      startDate: '2026-11-29T08:30:00+01:00',
      endDate: '2026-11-29',
      image: ['', '-4x3', '-1x1'].map((r) => `${SITE}/images/blog/florence-duomo${r}.webp`),
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: {
        '@type': 'Place',
        name: 'Piazza del Duomo',
        address: { '@type': 'PostalAddress', streetAddress: 'Piazza del Duomo', addressLocality: 'Firenze', addressRegion: 'Toscana', addressCountry: 'IT' },
      },
      organizer: { '@type': 'Organization', name: 'Firenze Marathon', url: 'https://www.firenzemarathon.it/' },
      url: 'https://www.firenzemarathon.it/',
    },
    {
      '@type': 'Service',
      '@id': `${SITE}/it/blog/${SLUG}#service`,
      name: 'Transfer privati per la Maratona di Firenze 2026',
      serviceType: 'Noleggio con conducente (NCC)',
      inLanguage: 'it-IT',
      provider: { '@id': `${SITE}/#organization` },
      areaServed: { '@type': 'City', name: 'Firenze' },
      audience: { '@type': 'Audience', audienceType: 'Maratoneti, accompagnatori e gruppi podistici' },
      url: `${SITE}/it/blog/${SLUG}`,
      description: "Transfer privati prenotati per il weekend della Maratona di Firenze: viaggi da altre città italiane, arrivi in aeroporto e stazione, Expo alla Stazione Leopolda, accompagnamento la mattina della gara, rientro dopo l'arrivo e partenza. Preventivo fisso e tutto incluso prima del viaggio.",
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Transfer del weekend di gara',
        itemListElement: [
          'Transfer da altre città italiane a Firenze',
          'Aeroporto o stazione → hotel',
          'Hotel → Expo (Stazione Leopolda) e ritorno',
          'Mattina della gara: hotel → zona di partenza',
          "Dopo l'arrivo: rientro in hotel",
          'Hotel → aeroporto o stazione',
        ].map((n) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: n } })),
      },
    },
  ],
};

const itPost = {
  title: 'Maratona di Firenze 2026: Transfer da Aeroporto, Expo e Giorno di Gara',
  slug: SLUG,
  translation_of: EN_SLUG,
  category: 'Eventi',
  read_time: '7 min di lettura',
  // The Italian layout appends " | Italy Taxi Service" (21 chars).
  seo_title: 'Transfer Maratona di Firenze 2026',
  seo_description: "Corri la Maratona di Firenze il 29 novembre 2026? Transfer privati dalla tua città o dall'aeroporto, Expo e giorno di gara. Preventivo fisso prima del viaggio.",
  focus_keyword: 'transfer maratona di firenze',
  excerpt: "Transfer privati per il weekend della Maratona di Firenze (27–29 novembre 2026): dalla tua città o dall'aeroporto all'hotel, all'Expo, la mattina della gara e dopo l'arrivo, con un preventivo fisso prima del viaggio.",
  featured_image_url: '/images/blog/florence-duomo.webp',
  content: `
<script type="application/ld+json">${JSON.stringify(schema)}</script>

<p><strong>Organizziamo transfer privati per tutto il weekend della Maratona di Firenze: il viaggio dalla tua città o dall'aeroporto fino all'hotel, l'Expo alla Stazione Leopolda, la mattina della gara di domenica 29 novembre 2026, il rientro dopo l'arrivo e la partenza.</strong> Inviaci i tuoi programmi e ti rispondiamo con un preventivo fisso e tutto incluso, di solito entro 2–3 ore, così pensi solo alla gara.</p>

<p>Arrivi da Roma, Bologna, Milano, Venezia o dalla Toscana? Ti portiamo direttamente al tuo hotel di Firenze, con la sacca da gara, senza cambi di treno e senza entrare in auto in un centro dove gran parte delle strade è a traffico limitato. Per le società podistiche organizziamo più veicoli su un unico programma.</p>

${cta('Indicaci da dove parti, il tuo hotel e i transfer che ti servono: ti inviamo un unico preventivo per tutto il weekend di gara.')}

<h2 id="date-della-maratona">Maratona di Firenze 2026: le date che contano per i transfer</h2>
<table>
  <thead><tr><th>Quando</th><th>Cosa succede</th><th>Transfer che ti può servire</th></tr></thead>
  <tbody>
    <tr><td>Gio 26 – Sab 28 nov</td><td>Arrivo della maggior parte dei partecipanti</td><td>Città, aeroporto o stazione → hotel</td></tr>
    <tr><td>Ven 27 nov, 10:00–19:30</td><td>Ritiro pettorali all'Expo, Stazione Leopolda (Viale Fratelli Rosselli, Porta al Prato)</td><td>Hotel → Expo → hotel</td></tr>
    <tr><td>Sab 28 nov, 9:00–19:30</td><td>Ritiro pettorali, secondo e ultimo giorno</td><td>Hotel → Expo → hotel</td></tr>
    <tr><td>Dom 29 nov, dalle 7:00</td><td>Apertura delle griglie di partenza; deposito borse in Piazza Santa Maria Novella</td><td>Hotel → zona di partenza</td></tr>
    <tr><td>Dom 29 nov, 8:30</td><td>Partenza da Piazza Duomo (tempo massimo 6 ore); la 10K si corre la stessa mattina</td><td>—</td></tr>
    <tr><td>Dom 29 nov, dopo l'arrivo</td><td>Zona di arrivo nel centro storico</td><td>Rientro in hotel, oppure direttamente in stazione o in aeroporto</td></tr>
    <tr><td>Dom 29 – Lun 30 nov</td><td>Rientri</td><td>Hotel → casa, stazione o aeroporto</td></tr>
  </tbody>
</table>
<p>I dettagli della gara provengono dal <a href="https://firenzemarathon.it/en/marathon-regulation/" target="_blank" rel="noopener noreferrer">regolamento ufficiale</a> dell'organizzatore. Le chiusure stradali del giorno di gara vengono pubblicate dal Comune di Firenze a ridosso dell'evento: pianifichiamo ogni transfer del weekend in base a quelle.</p>

<h2 id="da-altre-citta-italiane">Dalla tua città a Firenze</h2>
<p>Con un transfer privato parti da casa o dal tuo hotel e arrivi a Firenze senza cambi e senza cercare parcheggio. Poiché i pettorali si ritirano all'Expo venerdì 27 o sabato 28 novembre, la maggior parte dei partecipanti che arrivano da altre città italiane raggiunge Firenze entro sabato.</p>
<table>
  <thead><tr><th>Da</th><th>A Firenze in auto</th><th>Prenota</th></tr></thead>
  <tbody>
    <tr><td>Roma</td><td>circa 3 ore (~277 km)</td><td><a href="/it/route/trasferimento-roma-firenze">Transfer Roma – Firenze</a></td></tr>
    <tr><td>Bologna</td><td>circa 1 ora e 30 (~110 km)</td><td><a href="/route/bologna-to-florence-taxi">Transfer Bologna – Firenze</a></td></tr>
    <tr><td>Milano</td><td>circa 3 h 15 – 3 h 30 (~300 km)</td><td><a href="/route/florence-to-milan-taxi">Transfer Firenze – Milano</a></td></tr>
    <tr><td>Venezia</td><td>circa 3 h – 3 h 15 (~260 km)</td><td><a href="/route/florence-to-venice-taxi">Transfer Firenze – Venezia</a></td></tr>
    <tr><td>Pisa, Lucca, Siena e il resto della Toscana</td><td>meno di 1 ora e 30</td><td><a href="/it/servizi/trasferimenti-citta-citta">Transfer città – città</a></td></tr>
  </tbody>
</table>
<p><strong>Società podistiche e gruppi:</strong> i nostri minivan trasportano fino a 7 passeggeri con bagagli; per i gruppi più numerosi utilizziamo più veicoli, coordinati su un unico programma di arrivo. Inviaci in un'unica richiesta l'elenco dei partecipanti, i punti e gli orari di partenza: ti quotiamo ogni tratta insieme.</p>

${cta('Viaggi con il tuo gruppo podistico? Inviaci elenco, punti di partenza e orari: ti rispondiamo con il preventivo di ogni veicolo.')}

<h2 id="transfer-del-weekend">I transfer del weekend di gara</h2>

<h3 id="arrivo">1. Arrivo: aeroporto o stazione → hotel</h3>
<p>Il tuo autista monitora il volo e ti aspetta agli arrivi con un cartello con il tuo nome, con 60 minuti di attesa gratuita per gli arrivi internazionali. Dall'<a href="/airport/florence">aeroporto di Firenze (FLR)</a> al centro storico servono circa 15–20 minuti. Atterri a Pisa? Il <a href="/it/route/trasferimento-aeroporto-pisa-firenze">transfer dall'aeroporto di Pisa a Firenze</a> richiede circa 1 ora – 1 ora e 15 e ti porta direttamente in hotel, senza cambiare dal PisaMover al treno con la sacca da gara. Se arrivi in treno, ti veniamo a prendere alla stazione di Santa Maria Novella.</p>
<p>Molti hotel del centro si trovano nella ZTL di Firenze. Verifichiamo l'accesso alla ZTL per l'indirizzo esatto del tuo hotel al momento della prenotazione; dove un'auto non può entrare, l'autista si ferma nel punto più vicino raggiungibile legalmente e ti aiuta con i bagagli.</p>

<h3 id="expo">2. Expo alla Stazione Leopolda (venerdì o sabato)</h3>
<p>Il pettorale si ritira all'Expo venerdì 27 o sabato 28 novembre. Un breve transfer dall'hotel alla Stazione Leopolda e ritorno ti fa risparmiare le gambe il giorno prima della gara, e si combina facilmente con l'arrivo: lasci i bagagli in hotel e vai subito all'Expo, oppure chiedi all'autista una sosta alla Leopolda lungo il tragitto.</p>

<h3 id="mattina-della-gara">3. Mattina della gara: hotel → zona di partenza</h3>
<p>Le griglie aprono alle 7:00, il ritrovo è alle 8:00 e la partenza alle 8:30 da Piazza Duomo, con deposito borse in Piazza Santa Maria Novella. Le strade lungo il percorso vengono chiuse per la gara, quindi nessun veicolo può arrivare fino alla linea di partenza. Pianifichiamo l'orario di prelievo e il punto di discesa consentito più vicino in base al tuo hotel, alla tua griglia e alle chiusure ufficiali. I prelievi prima delle 6:00 rientrano nella fascia notturna: l'eventuale supplemento notturno è indicato nel preventivo prima della prenotazione.</p>

<h3 id="dopo-l-arrivo">4. Dopo l'arrivo: rientro in hotel</h3>
<p>Dopo 42 km, l'ultima cosa che vuoi è una lunga camminata con medaglia e borsa. Indicaci l'orario di arrivo previsto e concordiamo un punto d'incontro appena fuori dall'area chiusa. Se arrivi più tardi del previsto, scrivi all'autista: l'eventuale attesa aggiuntiva viene quotata in anticipo e addebitata solo con il tuo consenso. Riparti subito? L'autista ti porta direttamente dal punto d'incontro alla stazione, all'aeroporto o a casa.</p>

<h3 id="partenza">5. Partenza: hotel → aeroporto, stazione o casa</h3>
<p>Prenota il rientro insieme al resto del weekend: dall'hotel all'<a href="/airport/florence">aeroporto di Firenze</a>, all'<a href="/it/route/trasferimento-aeroporto-pisa-firenze">aeroporto di Pisa</a>, alla <a href="/route/santa-maria-novella-to-florence-airport-taxi">stazione di Santa Maria Novella</a> oppure direttamente nella tua città con un <a href="/it/servizi/trasferimenti-citta-citta">transfer città – città</a>.</p>

${cta('Prenota insieme arrivo, Expo, mattina della gara, rientro e partenza: un solo preventivo per tutto il weekend.', '/it/servizi/trasferimenti-hotel', 'Transfer Hotel')}

<h2 id="accompagnatori-e-giorno-dopo">Per accompagnatori e il giorno dopo</h2>
<p>Familiari e amici possono prenotare un proprio transfer per raggiungerti al punto d'incontro dopo l'arrivo, e un autista a ore (<a href="/it/servizi/taxi-a-ore">taxi a ore</a>) è comodo per una giornata di brevi spostamenti in città. Se ti fermi qualche giorno, una giornata fuori città aiuta a recuperare: una <a href="/it/day-trips/gita-da-firenze-al-chianti">gita nel Chianti</a> oppure un <a href="/it/route/trasferimento-firenze-siena">transfer a Siena</a> con autista.</p>

<h2 id="come-prenotare">Come prenotare il transfer per la Maratona di Firenze</h2>
<ol>
  <li><strong>Inviaci i dettagli</strong> tramite il <a href="/book-now">modulo di prenotazione</a> o <a href="${WHATSAPP}" target="_blank" rel="noopener noreferrer">WhatsApp</a>: nomi, città o aeroporto di partenza, numero del volo o del treno, indirizzo completo dell'hotel, numero di passeggeri e bagagli e i transfer che ti servono (arrivo, Expo, mattina della gara, rientro, partenza).</li>
  <li><strong>Ricevi un preventivo fisso e tutto incluso</strong>, di solito entro 2–3 ore, comprensivo di pedaggi, carburante e parcheggi. L'eventuale supplemento notturno (22:00–06:00) o festivo è indicato nel preventivo prima della prenotazione.</li>
  <li><strong>Accetta e ricevi la conferma scritta</strong> con le istruzioni d'incontro per ogni transfer. Il numero di telefono del tuo autista ti viene inviato entro le 24 ore precedenti ogni transfer.</li>
</ol>
<p>Il weekend della maratona è molto richiesto a Firenze: prenota appena hai confermato hotel e viaggio.</p>

${cta('Pronto per il weekend della Maratona di Firenze? Richiedi ora il tuo preventivo.')}

<h2 id="domande-frequenti">Domande Frequenti</h2>
<h3 id="faq-1">Quando e dove si corre la Maratona di Firenze 2026?</h3>
<p>La Maratona di Firenze si corre domenica 29 novembre 2026. La partenza è alle 8:30 da Piazza Duomo, le griglie aprono alle 7:00 e il tempo massimo è di 6 ore. I pettorali si ritirano all'Expo alla Stazione Leopolda venerdì 27 e sabato 28 novembre.</p>
<h3 id="faq-2">Posso prenotare un transfer privato da Roma o Milano alla Maratona di Firenze?</h3>
<p>Sì. Organizziamo transfer città – città fino al tuo hotel di Firenze da Roma (circa 3 ore), Bologna (circa 1 ora e 30), Milano, Venezia e dal resto della Toscana. Poiché i pettorali si ritirano venerdì o sabato, la maggior parte dei partecipanti arriva entro sabato.</p>
<h3 id="faq-3">Come arrivo dall'aeroporto di Pisa a Firenze per la maratona?</h3>
<p>Un transfer privato dall'aeroporto di Pisa a Firenze richiede circa 1 ora – 1 ora e 15 e ti porta direttamente in hotel, senza il cambio tra PisaMover e treno con la sacca da gara.</p>
<h3 id="faq-4">L'auto può portarmi fino alla linea di partenza?</h3>
<p>Nessun veicolo può arrivare fino alla linea di partenza, perché le strade del percorso vengono chiuse per la gara. Pianifichiamo l'orario di prelievo e il punto di discesa consentito più vicino in base al tuo hotel, alla tua griglia e alle chiusure ufficiali.</p>
<h3 id="faq-5">Posso prenotare il rientro in hotel dopo l'arrivo della maratona?</h3>
<p>Sì. Indicaci l'orario di arrivo previsto e concordiamo un punto d'incontro appena fuori dall'area chiusa. L'autista ti riporta in hotel o direttamente in stazione o in aeroporto, e l'eventuale attesa aggiuntiva viene quotata in anticipo e addebitata solo con il tuo consenso.</p>
<h3 id="faq-6">Trasportate società podistiche e gruppi di runner?</h3>
<p>Sì. I nostri minivan trasportano fino a 7 passeggeri con bagagli e per i gruppi più numerosi utilizziamo più veicoli, coordinati su un unico programma. Inviaci in un'unica richiesta elenco dei partecipanti, punti e orari di partenza.</p>
<h3 id="faq-7">L'hotel è nella ZTL di Firenze: l'auto può arrivarci?</h3>
<p>Dipende dall'indirizzo esatto. Verifichiamo l'accesso alla ZTL per il tuo hotel al momento della prenotazione; dove un'auto non può entrare, l'autista si ferma nel punto più vicino raggiungibile legalmente e ti aiuta con i bagagli.</p>
<h3 id="faq-8">Come ottengo un preventivo per i transfer della maratona?</h3>
<p>Inviaci città o aeroporto di partenza, numero del volo o del treno, indirizzo dell'hotel, passeggeri, bagagli e i transfer che ti servono tramite il modulo o WhatsApp. Di solito rispondiamo entro 2–3 ore con un preventivo fisso e tutto incluso e, quando accetti, ricevi la conferma scritta.</p>

${related([
  { href: '/it/route/trasferimento-roma-firenze', label: 'Transfer Roma – Firenze' },
  { href: '/it/route/trasferimento-aeroporto-pisa-firenze', label: "Transfer dall'aeroporto di Pisa a Firenze" },
  { href: '/airport/florence', label: 'Transfer aeroporto di Firenze (FLR)' },
  { href: '/florence-private-taxi', label: 'Taxi privato a Firenze' },
  { href: '/it/servizi/trasferimenti-hotel', label: 'Transfer hotel in Italia' },
  { href: '/it/servizi/trasferimenti-citta-citta', label: 'Transfer città – città' },
  { href: '/it/servizi/trasferimenti-aeroportuali', label: 'Transfer aeroportuali in Italia' },
  { href: '/it/distance/distanza-dallaeroporto-di-pisa-a-firenze', label: "Distanza dall'aeroporto di Pisa a Firenze" },
  { href: `/blog/${EN_SLUG}`, label: 'Florence Marathon 2026 transfers (English)' },
  { href: '/book-now', label: 'Richiedi un Preventivo' },
])}
`,
};

async function run() {
  const env = Object.fromEntries(fs.readFileSync('.env', 'utf-8').split('\n').filter(l => l && !l.startsWith('#') && l.includes('=')).map(l => { const [k, ...v] = l.split('='); return [k.trim(), v.join('=').trim()]; }));
  const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

  const { data: exists } = await supabase.from('blogs').select('id').eq('slug', SLUG).maybeSingle();
  if (exists) { console.error(`A post with slug "${SLUG}" already exists — nothing inserted.`); process.exit(1); }
  const { data: en } = await supabase.from('blogs').select('id').eq('slug', EN_SLUG).eq('language', 'en').maybeSingle();
  if (!en) console.warn(`Warning: the English post "${EN_SLUG}" is not in the database yet — run seed_florence_marathon_2026.js first so the hreflang pair works.`);

  const { data: author, error: aerr } = await supabase.from('bloggers').select('id').limit(1).single();
  if (aerr || !author) { console.error('No author found:', aerr); process.exit(1); }

  const { data, error } = await supabase
    .from('blogs')
    .insert({ ...itPost, language: 'it', status: 'published', author_id: author.id, published_at: new Date().toISOString(), tags: [] })
    .select('slug');
  if (error) { console.error('Insert error:', error); process.exit(1); }
  console.log('Inserted:', data);
  console.log(`Done — live at ${SITE}/it/blog/${SLUG} (allow up to an hour for the blog cache).`);
}

if (require.main === module) run();
module.exports = { itPost, SLUG };
