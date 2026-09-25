/** Italian counterpart of seed_ttg_rimini.js — genuine Italian content (not
 *  machine-translated), language='it', translation_of pointing to the EN
 *  slug. Slug uses this site's established "transfer-[event]-[city]"
 *  pattern (matching transfer-cphi-milano, transfer-americas-cup-napoli)
 *  rather than literally reusing the English slug under /it/blog/, per the
 *  task's own instruction to follow the site's existing URL convention.
 *  IT-native service pages used where they exist (verified:
 *  /it/servizi/trasferimenti-aeroportuali, /it/servizi/trasferimenti-hotel,
 *  /it/servizi/taxi-aziendale, /it/contatti); /airport/bologna-marconi and
 *  /book-now reused as plain EN paths since neither has an /it/ counterpart.
 *  Run AFTER seed_ttg_rimini.js: node seed_ttg_rimini_it.js */
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
  title: "TTG Travel Experience 2026 Rimini: Transfer dall'Aeroporto e Guida ai Trasporti",
  slug: "transfer-ttg-rimini",
  translation_of: "ttg-travel-experience-rimini-transfer",
  category: "Viaggi di Lavoro",
  read_time: "8 min",
  seo_title: "TTG Travel Experience 2026 Rimini: Transfer e Guida ai Trasporti",
  seo_description: "TTG Travel Experience 2026 si svolge dal 14 al 16 ottobre alla Fiera di Rimini. Come arrivare dagli aeroporti di Rimini o Bologna, con transfer in hotel.",
  focus_keyword: "transfer ttg travel experience rimini",
  excerpt: "Una guida pratica ai trasporti per TTG Travel Experience 2026 a Rimini — transfer da aeroporto, hotel e Fiera per visitatori ed espositori.",
  featured_image_url: "/images/hero.webp",
  content: `
<p><strong>TTG Travel Experience 2026 si svolge dal 14 al 16 ottobre alla Fiera di Rimini (Via Emilia 155, 47900 Rimini), organizzata da Italian Exhibition Group.</strong> È la principale fiera B2B del turismo in Italia, che riunisce enti del turismo, tour operator, agenzie di viaggio, compagnie aeree, strutture ricettive e fornitori di tecnologia per tre giorni. Se partecipi come visitatore, espositore o buyer, questa guida copre esattamente ciò che ti serve per i trasporti: quale aeroporto scegliere, come arrivare da lì alla Fiera o al tuo hotel, e come organizzarlo in anticipo.</p>

<h2 id="in-breve">TTG Travel Experience 2026 in Breve</h2>
<table>
  <thead><tr><th>Informazione</th><th>Dettagli</th></tr></thead>
  <tbody>
    <tr><td>Evento</td><td>TTG Travel Experience 2026</td></tr>
    <tr><td>Date</td><td>14-16 ottobre 2026</td></tr>
    <tr><td>Sede</td><td>Fiera di Rimini (Rimini Expo Centre)</td></tr>
    <tr><td>Indirizzo</td><td>Via Emilia 155, 47900 Rimini RN</td></tr>
    <tr><td>Tipo</td><td>Fiera internazionale B2B del turismo</td></tr>
    <tr><td>Organizzatore</td><td>Italian Exhibition Group</td></tr>
    <tr><td>Aeroporto più vicino</td><td>Rimini Federico Fellini International (RMI)</td></tr>
    <tr><td>Aeroporto alternativo</td><td>Bologna Guglielmo Marconi (BLQ)</td></tr>
  </tbody>
</table>

<h2 id="cos-e-ttg">Cos'è TTG Travel Experience?</h2>
<p>TTG Travel Experience è il principale evento B2B italiano per il settore del turismo, ospitato ogni anno alla Fiera di Rimini. I partecipanti sono in larghissima parte professionisti del settore piuttosto che turisti — enti del turismo, tour operator, agenzie di viaggio, compagnie aeree, strutture ricettive e fornitori di tecnologia e servizi per il turismo, oltre a buyer ed espositori internazionali. Ai fini del trasporto questo conta: la maggior parte dei visitatori viaggia per incontri programmati e orari di fiera su tre giornate fisse, spesso con poca flessibilità per aspettare i trasporti.</p>

<h2 id="come-arrivare">Come Arrivare a TTG Travel Experience a Rimini</h2>

<h3 id="transfer-privato">In Transfer Privato</h3>
<p>Un transfer privato prenotato in anticipo ti porta direttamente dall'aeroporto al tuo hotel o alla Fiera, a un prezzo fisso concordato in anticipo. Questo è particolarmente utile per viaggiatori d'affari ed espositori che portano materiale espositivo o valigette campionario, gruppi che viaggiano insieme, e chiunque abbia un programma fisso tra voli e orari di fiera — un collegamento mancato o in ritardo conta di più quando hai uno stand da raggiungere o un appuntamento fissato.</p>

<h3 id="in-treno">In Treno</h3>
<p>Rimini ha una propria stazione ferroviaria sulla linea adriatica principale d'Italia, con collegamenti verso Bologna e poi Milano in una direzione e lungo la costa adriatica nell'altra — un'opzione pratica se stai già viaggiando in treno all'interno dell'Italia piuttosto che arrivare direttamente in aereo.</p>

<h3 id="in-auto">In Auto</h3>
<p>Rimini è servita dall'autostrada A14, che la collega anche a Bologna. Se guidi o vieni accompagnato da un'altra parte d'Italia, questa è la via principale d'accesso; le modalità di parcheggio presso la Fiera stessa è meglio verificarle tramite le informazioni ufficiali della sede più vicino alla data della tua visita, dato che non abbiamo verificato in modo indipendente i dettagli attuali sul parcheggio in loco.</p>

<h2 id="transfer-aeroportuali">Transfer Aeroportuali per TTG Travel Experience</h2>
<p>Due aeroporti sono realisticamente rilevanti per chi partecipa a TTG: l'aeroporto di Rimini stesso, e quello di Bologna, che è il principale scalo internazionale per l'area più ampia.</p>

<h3 id="aeroporto-rimini">Aeroporto di Rimini – Federico Fellini International (RMI)</h3>
<p>L'aeroporto di Rimini è genuinamente vicino alla Fiera — circa 10 km, comunemente indicati come un tragitto di circa 15 minuti in condizioni di traffico normali. Per i visitatori il cui volo serve direttamente RMI, questa è l'opzione di arrivo più diretta, con un transfer privato che ti porta direttamente dal terminal al tuo hotel o alla Fiera senza un lungo tragitto in nessuna delle due direzioni.</p>

<h3 id="aeroporto-bologna">Aeroporto di Bologna – Guglielmo Marconi (BLQ)</h3>
<p>Bologna è il principale aeroporto internazionale dell'Emilia-Romagna e, per molti visitatori in arrivo dall'estero, offre una gamma di collegamenti diretti più ampia rispetto al più piccolo aeroporto di Rimini. La distanza da BLQ a Rimini è di circa 120-125 km tramite l'autostrada A14, comunemente indicata come poco più di un'ora di viaggio — anche se questo varia con il traffico ed è meglio considerarlo una stima piuttosto che una garanzia. La nostra rete di transfer aeroportuali copre già Bologna Marconi, inclusi collegamenti verso Rimini tra le altre destinazioni dell'Emilia-Romagna, quindi questo percorso è un'opzione reale ed esistente, non qualcosa organizzato appositamente per l'evento. Consulta la nostra <a href="/airport/bologna-marconi">guida all'Aeroporto di Bologna Marconi</a> per maggiori dettagli sull'aeroporto stesso.</p>

${cta("Arrivi in Italia per TTG? Richiedi un transfer aeroportuale privato verso Rimini da entrambi gli aeroporti.", "/it/servizi/trasferimenti-aeroportuali", "Scopri i Trasferimenti Aeroportuali")}

<h2 id="da-rimini-a-ttg">Dall'Aeroporto di Rimini a TTG Travel Experience</h2>
<p><strong>Il modo più diretto per andare dall'Aeroporto di Rimini alla Fiera è un transfer privato prenotato in anticipo o un taxi, data la breve distanza coinvolta.</strong> Esistono opzioni di trasporto pubblico ma comportano in genere più fermate di quanto la distanza di circa 10 km farebbe pensare necessario. Per chi arriva prima in hotel, lo stesso transfer può fermarsi presso la tua sistemazione invece, con un tragitto separato hotel-fiera organizzato per ogni giornata espositiva. I transfer business o con autista privato funzionano allo stesso modo di un normale transfer aeroportuale — ritiro organizzato in anticipo, percorso diretto, prezzo fisso — la differenza riguarda soprattutto la classe del veicolo e l'eventuale necessità di più tappe in un'unica prenotazione.</p>

<h2 id="da-bologna-a-rimini">Dall'Aeroporto di Bologna a Rimini / TTG</h2>
<p>Per chi arriva in aereo a Bologna, un transfer privato diretto verso Rimini evita la necessità di cambiare tra trasporto aeroportuale e treno o strada in seguito, con bagagli e materiale espositivo al seguito. Il tragitto copre direttamente i circa 120-125 km del percorso A14, con arrivo al tuo hotel o, dove organizzato, alla Fiera stessa. La stessa prenotazione può includere il transfer di ritorno verso l'Aeroporto di Bologna al termine dell'evento, così la partenza è organizzata in anticipo invece che decisa all'ultimo momento.</p>

<h2 id="transfer-hotel">Transfer in Hotel a Rimini</h2>
<p>Oltre alla tratta aeroportuale, la maggior parte dei visitatori di TTG ha bisogno di trasporto per gli spostamenti ricorrenti di una fiera di più giorni: <strong>aeroporto-hotel</strong> all'arrivo, <strong>hotel-Fiera di Rimini</strong> ogni giornata espositiva, <strong>Fiera-hotel</strong> alla sera, e <strong>hotel-aeroporto</strong> alla partenza. Questo conta di più per arrivi mattutini in coincidenza con l'apertura della fiera, espositori su più giorni che ripetono lo stesso tragitto hotel-fiera, e gruppi o chiunque viaggi con attrezzatura o bagagli che preferisce non gestire ogni tratta separatamente. Consulta il nostro <a href="/it/servizi/trasferimenti-hotel">servizio di trasferimenti in hotel</a> per capire come funzionano in generale i ritiri prenotati in anticipo.</p>

${cta("Hai bisogno di un trasporto tra il tuo hotel a Rimini e la Fiera? Richiedi un preventivo.", "/book-now", "Richiedi un Preventivo")}

<h2 id="viaggiatori-business">Transfer Privati per Espositori e Visitatori Business di TTG</h2>
<p>Il pubblico di TTG è in larga parte professionale piuttosto che turistico — le esigenze di trasporto lo riflettono. Ritiri in aeroporto in coincidenza con voli specifici, transfer in hotel organizzati intorno agli orari di fiera piuttosto che a un programma turistico, trasferimenti da e per la Fiera stessa, viaggi di ritorno programmati invece che organizzati all'ultimo momento, e trasporto per lo staff e il materiale espositivo sono tutti più rilevanti qui che per una tipica visita in città. Per una giornata che include incontri di lavoro intorno a Rimini oltre agli orari di fiera, il nostro <a href="/it/servizi/taxi-aziendale">servizio taxi aziendale</a> copre il tipo di trasporto flessibile e multi-tappa che questo può richiedere.</p>

<h2 id="transfer-gruppo">Transfer di Gruppo per TTG Travel Experience</h2>
<p>Piccoli gruppi aziendali, team di espositori, colleghi che viaggiano insieme e delegazioni turistiche possono prenotare il trasporto come gruppo invece di organizzare veicoli separati per ogni persona — utile per arrivare insieme ed evitare il problema di coordinare più taxi individuali. Se prenoti per un gruppo, comunica il numero di passeggeri e i bagagli così viene organizzato un trasporto adeguato invece di darlo per scontato.</p>

<h2 id="perche-prenotare">Perché Prenotare un Transfer Privato per TTG?</h2>
<ul>
  <li><strong>Ritiro diretto</strong> dall'aeroporto o dall'hotel, all'orario che specifichi.</li>
  <li><strong>Trasporto hotel-fiera</strong> organizzato per ogni giornata espositiva invece di improvvisato.</li>
  <li><strong>Transfer di ritorno programmati</strong>, prenotati in anticipo invece che all'ultimo momento.</li>
  <li><strong>Gestione dei bagagli</strong>, incluso il materiale espositivo oltre alle valigie personali.</li>
  <li><strong>Coordinamento di gruppo</strong> — un'unica prenotazione per un intero team invece di più taxi separati.</li>
  <li><strong>Un'unica organizzazione invece di più</strong> — evitando di dover mettere insieme separatamente trasporto aeroportuale, hotel e fiera.</li>
</ul>

<h2 id="consigli">Consigli sui Trasporti per TTG Travel Experience</h2>
<ul>
  <li><strong>Conferma i dettagli di aeroporto e hotel</strong> prima di prenotare il transfer.</li>
  <li><strong>Metti in conto tempo extra durante l'evento</strong> — una grande fiera porta traffico aggiuntivo intorno alla sede.</li>
  <li><strong>Comunica il numero del tuo volo</strong> per i ritiri in aeroporto.</li>
  <li><strong>Comunica il nome e l'indirizzo esatti del tuo hotel</strong> al momento della prenotazione.</li>
  <li><strong>Conferma il numero di passeggeri e i bagagli</strong>, incluso eventuale materiale espositivo.</li>
  <li><strong>Prenota il trasporto di ritorno in anticipo</strong> invece di organizzarlo l'ultimo giorno.</li>
  <li><strong>Tieni a portata di mano le date e l'indirizzo della sede</strong> — 14-16 ottobre 2026, Via Emilia 155, Rimini — per il tuo autista e come riferimento personale.</li>
</ul>

<h2 id="domande-frequenti">Domande Frequenti</h2>
<h3 id="faq-1">Quando si svolge TTG Travel Experience 2026?</h3>
<p>TTG Travel Experience 2026 si svolge dal 14 al 16 ottobre 2026 alla Fiera di Rimini.</p>
<h3 id="faq-2">Dove si tiene TTG Travel Experience?</h3>
<p>Alla Fiera di Rimini (Rimini Expo Centre), Via Emilia 155, 47900 Rimini, organizzata da Italian Exhibition Group.</p>
<h3 id="faq-3">Come si arriva dall'Aeroporto di Rimini a TTG?</h3>
<p>L'Aeroporto di Rimini (RMI) dista circa 10 km dalla Fiera, un tragitto di circa 15 minuti — un taxi o un transfer privato prenotato in anticipo sono l'opzione più diretta data la breve distanza.</p>
<h3 id="faq-4">Come si arriva dall'Aeroporto di Bologna a Rimini?</h3>
<p>L'Aeroporto di Bologna (BLQ) dista circa 120-125 km da Rimini tramite l'autostrada A14, comunemente poco più di un'ora di viaggio a seconda del traffico. Un transfer privato può portarti direttamente da Bologna al tuo hotel a Rimini o alla Fiera.</p>
<h3 id="faq-5">Posso prenotare un transfer privato per la Fiera di Rimini?</h3>
<p>Sì — i transfer privati possono essere prenotati in anticipo dall'Aeroporto di Rimini, dall'Aeroporto di Bologna o dal tuo hotel direttamente fino alla Fiera di Rimini, a un prezzo fisso concordato in anticipo.</p>
<h3 id="faq-6">Posso organizzare un transfer aeroportuale per un intero gruppo aziendale?</h3>
<p>Sì. Gruppi e team di espositori possono prenotare il trasporto insieme invece di organizzare taxi separati per ogni persona — comunica la dimensione del gruppo e i bagagli al momento della prenotazione.</p>
<h3 id="faq-7">Posso prenotare un transfer dall'hotel alla Fiera di Rimini?</h3>
<p>Sì — i transfer hotel-fiera possono essere organizzati per ogni giornata dell'evento, insieme al viaggio di ritorno in hotel in seguito.</p>
<h3 id="faq-8">Con quanto anticipo conviene organizzare il transfer aeroportuale per TTG?</h3>
<p>Il prima possibile, non appena i piani di viaggio sono confermati, dato che la domanda di trasporto è più alta del solito durante una grande fiera — vale per l'arrivo, i transfer hotel-fiera e il viaggio di ritorno.</p>
<h3 id="faq-9">Posso prenotare un transfer di ritorno dopo TTG?</h3>
<p>Sì. Il transfer di ritorno verso l'aeroporto di Rimini o Bologna può essere prenotato nella stessa prenotazione dell'arrivo, così la partenza è confermata in anticipo invece che organizzata il giorno stesso.</p>
<h3 id="faq-10">Quali informazioni servono per richiedere un preventivo di transfer?</h3>
<p>Punto di ritiro, destinazione, data e ora, numero di passeggeri, bagagli (incluso eventuale materiale espositivo) e il numero del volo se si tratta di un ritiro in aeroporto — comunicare questi dettagli in anticipo permette un preventivo più preciso.</p>

<p style="margin-top:32px;">Stai organizzando il tuo viaggio per TTG Travel Experience? Inviaci i dettagli di volo, hotel, data, passeggeri e bagagli per un preventivo — <a href="/book-now">richiedi un preventivo</a> oppure <a href="/it/contatti">contattaci</a> direttamente se stai coordinando il viaggio per un team.</p>
${related([
  { href: '/airport/bologna-marconi', label: 'Guida Aeroporto di Bologna Marconi' },
  { href: '/it/servizi/trasferimenti-aeroportuali', label: 'Trasferimenti Aeroportuali in Italia' },
  { href: '/it/servizi/trasferimenti-hotel', label: 'Trasferimenti in Hotel in Italia' },
  { href: '/it/servizi/taxi-aziendale', label: 'Taxi Aziendale Executive in Italia' },
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
