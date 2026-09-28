/** Gap-50 cluster batch 1 — the two topics selected after auditing
 *  docs/seo-content-gap-50.md (50 planned topics, June 2026) against live
 *  Supabase content: only 6/50 were published (the cruise-port-transfer
 *  tier). Of the remaining 44, most Rome/Florence/Tuscany station-transfer
 *  candidates turned out to already be covered by rich existing pages in
 *  src/lib/extra-routes-final.ts (e.g. roma-termini-to-rome-fiumicino-taxi
 *  already has a full "Private Transfer vs the Leonardo Express" comparison
 *  section — creating gap-50 item #10 on top of it would be a disguised
 *  duplicate). Checked and rejected for that reason: #10 (Roma Termini to
 *  Fiumicino), #1 (Naples Airport to Sorrento — thinner existing coverage
 *  but same head-phrase risk), #35 (Bologna to Florence — existing
 *  bologna-to-florence-taxi / florence-to-bologna-taxi city-to-city routes).
 *  Selected instead — both verified as having ZERO existing dedicated
 *  coverage anywhere in the codebase (grepped extensively):
 *   1. Gap-50 #11 — Milano Centrale to Malpensa Airport Transfer. Reinforces
 *      the doc's own top-identified gap ("train-station transfers — ZERO
 *      blog coverage"). Milan has no equivalent to Rome's rich
 *      extra-routes-final.ts station pages.
 *   2. Gap-50 #38 — Turin Airport Transfers & Ski Resort Transfers. Turin
 *      only has a one-sentence mention of Sestriere/Courmayeur inside the
 *      general `airports` array description in page-data.ts — no dedicated
 *      page or article.
 *  Facts verified via live web search (Sep 2026): Malpensa Express journey
 *  time (~51 min, Trenord, ~30-min frequency, also serves Porta Garibaldi)
 *  from trenord.it/malpensaexpress.it; Turin Airport to Sestriere (~106km/
 *  ~1h25) and Courmayeur (~145km/~1h37) cross-checked across rome2rio and
 *  welcomepickups. Milan driving-distance/time figures reuse the exact
 *  numbers already established in src/lib/milan-transfer-data.ts (~50km,
 *  ~50-60min) rather than inventing new ones. Turin's "16km north of Turin
 *  city centre" reuses the exact existing airports-array description.
 *  Run: node seed_gap50_batch1.js */
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const env = Object.fromEntries(fs.readFileSync('.env', 'utf-8').split('\n').filter(l => l && !l.startsWith('#') && l.includes('=')).map(l => { const [k, ...v] = l.split('='); return [k.trim(), v.join('=').trim()]; }));
const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const cta = (text, href = '/book-now', label = 'Request a Quote') => `
<div style="background:#0F1C2E;color:#fff;padding:28px 32px;border-radius:16px;margin:32px 0;">
  <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#e2e8f0;">${text}</p>
  <a href="${href}" style="display:inline-block;background:#c5a059;color:#0F1C2E;font-weight:700;padding:12px 26px;border-radius:999px;text-decoration:none;">${label} →</a>
</div>`;

const related = (links) => `
<div class="internal-links-block" style="background:#f8fafc;padding:28px;border-radius:16px;margin-top:40px;border:1px solid #e2e8f0;">
  <h3 style="margin-top:0;color:#0F1C2E;">Related Guides &amp; Services</h3>
  <ul style="margin-bottom:0;">
    ${links.map(l => `<li><a href="${l.href}" style="color:#c5a059;font-weight:600;">${l.label}</a></li>`).join('\n    ')}
  </ul>
</div>`;

const posts = [

  // 1 ── Milano Centrale to Malpensa Airport Transfer ───────────────────
  {
    title: "Milano Centrale to Malpensa: Fastest Transfer Options",
    slug: "milano-centrale-to-malpensa-transfer",
    category: "Transport Guides",
    read_time: "6 min read",
    seo_title: "Milano Centrale to Malpensa: Train vs Private Transfer",
    seo_description: "Getting from Milano Centrale to Malpensa Airport: the Malpensa Express train takes about 51 minutes, or a private transfer covers the same trip door-to-door.",
    focus_keyword: "milano centrale to malpensa",
    excerpt: "Two real ways to get from Milano Centrale to Malpensa Airport — the Malpensa Express train and a private transfer — compared on time, comfort and luggage.",
    featured_image_url: "/images/milan airport.jpg",
    content: `
<p><strong>From Milano Centrale, the Malpensa Express train takes about 51 minutes to Malpensa Airport, departing roughly every 30 minutes; a private transfer covers the same distance by road, door-to-door, typically in around 50–60 minutes depending on traffic.</strong> Both are genuine options — which one makes more sense depends on your luggage, your schedule, and whether you're travelling alone or with others.</p>

<h2 id="options">Getting from Milano Centrale to Malpensa: Your Options</h2>
<p>Milano Centrale sits at the heart of Milan's rail network, and Malpensa Airport (MXP) is around 50 km north-west of the city. Two realistic options connect them directly: the dedicated Malpensa Express train, and a private car transfer. A standard taxi from the rank works too, but without a fixed price agreed in advance.</p>

<h2 id="train">The Malpensa Express Train</h2>
<p>The Malpensa Express is Trenord's dedicated airport rail link, running directly between Milano Centrale and Malpensa (it also stops at Milano Porta Garibaldi en route). Journey time from Milano Centrale is around 51 minutes, with departures roughly every 30 minutes through most of the day, from just before 5am to just after 11pm. A second-class ticket costs around €15. It's a genuinely convenient option if you're travelling light and comfortable navigating a large station and finding your platform with time to spare.</p>

<h2 id="private-transfer">Private Transfer from Milano Centrale to Malpensa</h2>
<p>A pre-booked private transfer picks you up at Milano Centrale — or your hotel, if that's more convenient — and takes you directly to your Malpensa terminal, at a fixed price agreed before you travel. The driving distance is around 50 km, and the journey typically takes 50–60 minutes under normal traffic conditions via the A8 motorway, though this varies with the time of day. The main practical difference from the train is that a private transfer is door-to-door and doesn't involve carrying luggage through a station or finding a platform — more relevant if you're travelling with a group, heavy cases, or on a tight connection to a flight.</p>

${cta("Need a direct transfer from Milano Centrale to Malpensa? A private driver can pick you up at the station or your hotel.", "/services/airport-transfers", "See Airport Transfer Options")}

<h2 id="which-to-choose">Which Option Should You Choose?</h2>
<table>
  <thead><tr><th>Factor</th><th>Malpensa Express Train</th><th>Private Transfer</th></tr></thead>
  <tbody>
    <tr><td>Journey time</td><td>~51 minutes</td><td>~50–60 minutes (traffic-dependent)</td></tr>
    <tr><td>Departure point</td><td>Milano Centrale platform</td><td>Milano Centrale entrance or your hotel</td></tr>
    <tr><td>Drop-off</td><td>Malpensa terminal station</td><td>Directly outside your terminal</td></tr>
    <tr><td>Cost basis</td><td>Fixed per-ticket price</td><td>Fixed price agreed in advance</td></tr>
    <tr><td>Best suited to</td><td>Solo or light-luggage travellers</td><td>Groups, heavy luggage, tight schedules</td></tr>
  </tbody>
</table>
<p>Neither option is universally better — the train is a genuinely solid, frequent, direct service, and a private transfer earns its price mainly on door-to-door convenience rather than speed alone.</p>

<h2 id="booking-tips">Booking Tips</h2>
<ul>
  <li><strong>If taking the train</strong>, confirm which Milano Centrale platform the Malpensa Express uses on the day, since it can vary.</li>
  <li><strong>If booking a private transfer</strong>, provide your flight number if it's for departure, so pickup timing can account for check-in.</li>
  <li><strong>Confirm your exact pickup point</strong> — Milano Centrale's main entrance, a specific hotel, or elsewhere.</li>
  <li><strong>Allow extra time during peak travel periods</strong>, when both the station and the motorway can be busier than usual.</li>
</ul>

<h2 id="faqs">Frequently Asked Questions</h2>
<h3 id="faq-1">How long does it take from Milano Centrale to Malpensa?</h3>
<p>The Malpensa Express train takes about 51 minutes. A private transfer by road covers the same ~50 km distance in roughly 50–60 minutes depending on traffic.</p>
<h3 id="faq-2">Is the Malpensa Express or a private transfer faster?</h3>
<p>They're broadly similar in journey time. The train is a fixed, scheduled service; a private transfer adds door-to-door convenience rather than a significant time saving.</p>
<h3 id="faq-3">How often does the Malpensa Express run from Milano Centrale?</h3>
<p>Roughly every 30 minutes for most of the day, from just before 5am to just after 11pm.</p>
<h3 id="faq-4">Can a private transfer pick me up at my Milan hotel instead of the station?</h3>
<p>Yes — a private transfer to Malpensa can start from Milano Centrale, your hotel, or another Milan address, not only the station.</p>
<h3 id="faq-5">Is a private transfer worth it for a solo traveller?</h3>
<p>It depends on your priorities. The train is a perfectly reasonable choice for a solo traveller with light luggage; a private transfer is more useful if you have heavy luggage, a tight schedule, or simply prefer not to navigate the station.</p>
<h3 id="faq-6">Does the Malpensa Express stop anywhere else in Milan?</h3>
<p>Yes — it also calls at Milano Porta Garibaldi, in addition to Milano Centrale.</p>
${related([
  { href: '/airport/milan-malpensa', label: 'Milan Malpensa Airport Guide' },
  { href: '/milan-chauffeur-service', label: 'Milan Chauffeur Service' },
  { href: '/services/airport-transfers', label: 'Airport Transfers in Italy' },
  { href: '/city/milan', label: 'Milan City Guide' },
  { href: '/book-now', label: 'Request a Quote' },
])}
`
  },

  // 2 ── Turin Airport Transfers & Ski Resort Transfers ──────────────────
  {
    title: "Turin Airport Transfers: City & Alpine Ski Resorts",
    slug: "turin-airport-transfers-ski",
    category: "Transport Guides",
    read_time: "6 min read",
    seo_title: "Turin Airport Transfers: City Centre & Ski Resort Guide",
    seo_description: "Turin Caselle Airport (TRN) is 16km from the city centre and around 1.5 hours from Sestriere or Courmayeur — here's how to plan transfers to each.",
    focus_keyword: "turin airport transfer ski",
    excerpt: "Turin Caselle Airport connects to both Turin city and the Alps — here's what to expect getting to the city centre, and to ski resorts like Sestriere and Courmayeur.",
    featured_image_url: "/images/beach-transfer.webp",
    content: `
<p><strong>Turin Caselle Airport (TRN) is about 16 km north of Turin city centre, and roughly 1.5 hours by road from the Alpine ski resorts of Sestriere or Courmayeur.</strong> It's a smaller airport than Milan's, but it serves a genuinely dual purpose for visitors — a gateway into Turin itself, and, for winter travellers, a realistic arrival point for the Piedmont and Aosta Valley ski resorts.</p>

<h2 id="turin-airport">Turin Caselle Airport (TRN)</h2>
<p>Turin Airport — officially Torino-Caselle, IATA code TRN — sits 16 km north of the city, serving Piedmont. It's considerably smaller than Milan Malpensa or Linate, with a correspondingly simpler arrivals process, but it's the natural arrival point both for Turin itself and for the wider region's mountain resorts.</p>

<h2 id="to-city-centre">Turin Airport to Turin City Centre</h2>
<p>For visitors heading into Turin — to see the Egyptian Museum, the Lingotto district, or the Piedmontese wine country around Barolo and Barbaresco a little further out — the airport-to-city journey is short given the 16 km distance. A taxi or a pre-booked private transfer can take you directly to your hotel; public transport options exist too, though a private transfer avoids the need to navigate them with luggage after a flight.</p>

<h2 id="to-ski-resorts">Turin Airport to the Alps: Ski Resort Transfers</h2>
<p>Turin's real transportation advantage for winter travellers is its position relative to two well-known Alpine resort areas:</p>
<ul>
  <li><strong>Sestriere</strong>, in the Milky Way (Via Lattea) ski area, is around 106 km from Turin Airport — commonly cited as roughly 1 hour 25 minutes by road.</li>
  <li><strong>Courmayeur</strong>, at the foot of Mont Blanc in the Aosta Valley, is around 145 km from Turin Airport — commonly cited as roughly 1 hour 37 minutes by road.</li>
</ul>
<p>Both are realistic same-day arrivals from a Turin Airport flight, though actual journey time depends heavily on winter road and weather conditions, which can add meaningfully to either route during the ski season.</p>

${cta("Flying into Turin for the mountains? A private transfer can take you directly from the airport to Sestriere, Courmayeur, or your Turin hotel.", "/services/airport-transfers", "See Airport Transfer Options")}

<h2 id="private-vs-public">Private Transfer vs Public Transport for Ski Resorts</h2>
<p>Reaching a ski resort by public transport from Turin Airport generally means a bus or train connection into Turin first, then a further onward service — workable, but a genuinely different proposition when you're travelling with ski or snowboard equipment rather than a standard suitcase. A private transfer goes directly from the airport to the resort, handling equipment and luggage in one vehicle without a change partway, which is where it earns its keep most clearly on this particular route — less about saving time over public transport, more about avoiding a multi-stage journey with bulky gear.</p>

<h2 id="booking-tips">Booking Tips</h2>
<ul>
  <li><strong>Book ski-season transfers well in advance</strong> — demand for transport to resorts rises sharply in peak winter weeks.</li>
  <li><strong>Mention any ski or snowboard equipment</strong> when booking, so an appropriately sized vehicle is arranged.</li>
  <li><strong>Allow extra time in winter conditions</strong> — mountain-road journey times can extend beyond typical estimates when weather is poor.</li>
  <li><strong>Confirm your exact resort address</strong>, since both Sestriere and Courmayeur cover a spread-out area of hotels and chalets.</li>
</ul>

<h2 id="faqs">Frequently Asked Questions</h2>
<h3 id="faq-1">How far is Turin Airport from the city centre?</h3>
<p>About 16 km north of Turin city centre.</p>
<h3 id="faq-2">Do you transfer to the ski resorts from Turin Airport?</h3>
<p>Yes — private transfers can be arranged from Turin Airport directly to Sestriere, Courmayeur, and other Alpine resorts in the region.</p>
<h3 id="faq-3">How far is Sestriere from Turin Airport?</h3>
<p>Around 106 km, commonly cited as roughly 1 hour 25 minutes by road, though winter conditions can extend this.</p>
<h3 id="faq-4">How far is Courmayeur from Turin Airport?</h3>
<p>Around 145 km, commonly cited as roughly 1 hour 37 minutes by road, with the same winter-weather caveat.</p>
<h3 id="faq-5">Can you carry ski equipment?</h3>
<p>Yes — let us know what equipment you're bringing when booking so a suitably sized vehicle is arranged.</p>
<h3 id="faq-6">Is a private transfer better than public transport for a ski resort?</h3>
<p>For equipment-heavy travel specifically, generally yes — public transport usually means a change partway, which is more cumbersome with skis or a snowboard than a direct private transfer.</p>
${related([
  { href: '/airport/turin', label: 'Turin Airport Guide' },
  { href: '/route/milan-to-turin-taxi', label: 'Milan to Turin Transfer' },
  { href: '/services/airport-transfers', label: 'Airport Transfers in Italy' },
  { href: '/services/private-tours', label: 'Private Tours in Italy' },
  { href: '/book-now', label: 'Request a Quote' },
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
      .insert({ ...post, status: 'published', author_id: author.id, published_at: new Date().toISOString(), tags: [] })
      .select('slug');
    if (error) { console.error(`Insert error for ${post.slug}:`, error); process.exit(1); }
    console.log('Inserted:', data);
  }
  console.log('\nDone — 2 EN posts published.');
}

run();
