/** Seventh batch of the Airport FAQs cluster — two new EN posts from
 *  docs/seo-topic-clusters-plan.md's Airport FAQs block (items 15 and 30):
 *  ATMs/currency exchange at Milan Malpensa, and left-luggage/WiFi at Pisa
 *  Galileo Galilei (a distinct Tuscany gateway, no overlap with the existing
 *  Fiumicino/Treviso/Malpensa posts already published).
 *  Facts verified via live web search (Sep 2026): Malpensa T1/T2 ATM and
 *  bureau-de-change locations, specific bank names and floor/area placement;
 *  Pisa's left-luggage service (info office, €7/day, 08:00-20:00) and free
 *  60-minute WiFi with fixed internet stations — both cross-checked against
 *  the airport's published facilities pages.
 *  Run: node seed_airport_faq_batch7_cluster.js */
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const env = Object.fromEntries(fs.readFileSync('.env', 'utf-8').split('\n').filter(l => l && !l.startsWith('#') && l.includes('=')).map(l => { const [k, ...v] = l.split('='); return [k.trim(), v.join('=').trim()]; }));
const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const cta = (text, href = '/book-now', label = 'Get a Free Quote') => `
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

  // 1 ── ATMs and currency exchange at Malpensa ─────────────────────────
  {
    title: "Where Are ATMs and Currency Exchange at Milan Malpensa?",
    slug: "atms-currency-milan-malpensa",
    category: "Airport Guides",
    read_time: "5 min read",
    seo_title: "Milan Malpensa ATMs & Currency Exchange: Where to Find Them",
    seo_description: "Need cash at Malpensa? Here's exactly where the ATMs and currency exchange desks are in Terminal 1 and Terminal 2, and which to use.",
    focus_keyword: "atms currency exchange milan malpensa",
    excerpt: "Malpensa's ATMs and exchange desks are spread across both terminals, in different areas and floors — here's exactly where to look in each.",
    featured_image_url: "/images/milan airport.jpg",
    content: `
<p>Milan Malpensa is split across two terminals with genuinely different layouts, so "just look for an ATM near arrivals" isn't quite enough guidance here. Here's exactly where cash machines and currency exchange counters are in each terminal.</p>

${cta("Skip the cash search entirely — book a private transfer from Malpensa and pay for it before you land.", "/services/airport-transfers", "See Airport Transfer Options")}

<h2 id="terminal-1">Terminal 1: ATMs and Exchange Desks</h2>
<p>Terminal 1 has ATMs spread through the Check-in, Arrivals, Baggage Claim and Departure Gate areas, so you're rarely far from one wherever you are in the terminal. For currency exchange, Forexchange operates several booths here — one in the check-in area on the second floor, directly opposite counters 9–10, and another on the ground floor in the International Arrivals B area, next to door 9.</p>
<p>Two Italian banks also have branches with ATMs on the +2 floor check-in area — Banca Popolare Italiana and Banca Popolare di Sondrio — though their counter service runs limited weekday and Saturday-morning hours only; the ATMs themselves are accessible beyond those hours. Banca Nazionale del Lavoro has a branch with an ATM on the ground floor in Arrivals.</p>

<h2 id="terminal-2">Terminal 2: ATMs and Exchange Desks</h2>
<p>Terminal 2 is smaller and simpler: there's an ATM in the ground-floor check-in area, plus Deutsche Bank's ATM in Arrivals and Banca Popolare di Milano's ATM in Departures. For currency exchange, Global Blue and Forexchange both operate at Boarding Gate D — used for Schengen flights only — and in the Arrivals area, typically open from early morning to evening.</p>

${cta("If you'd rather not think about cash machines on arrival day, a private transfer from Malpensa is paid for in advance.", "/services/airport-transfers", "See Airport Transfer Options")}

<h2 id="which-to-use">Which Option Actually Gives You a Fair Rate?</h2>
<p>A standard bank-branded ATM is generally the more reliable choice over a dedicated currency-exchange counter — bureau-de-change desks at airports, Malpensa included, typically build a wider margin into their rates than you'd get from your own bank's card network. If you do use an ATM, always choose to be charged in euros rather than your home currency when prompted; accepting the machine's own currency conversion (Dynamic Currency Conversion) hands the exchange rate to the ATM operator, which is reliably worse than your bank's rate.</p>

<h2 id="faqs">Frequently Asked Questions</h2>
<h3 id="faq-1">Are there ATMs in both Malpensa terminals?</h3>
<p>Yes — Terminal 1 has several spread across check-in, arrivals, baggage claim and the departure gates, while Terminal 2 has ATMs in its check-in, arrivals and departures areas.</p>
<h3 id="faq-2">Where exactly is currency exchange in Terminal 1?</h3>
<p>Forexchange operates a booth in the check-in area on the second floor (opposite counters 9–10) and another on the ground floor in International Arrivals B, next to door 9.</p>
<h3 id="faq-3">Where is currency exchange in Terminal 2?</h3>
<p>Global Blue and Forexchange both operate at Boarding Gate D (Schengen flights only) and in the Arrivals area.</p>
<h3 id="faq-4">Should I use a bank ATM or a currency exchange desk?</h3>
<p>A bank-branded ATM generally offers a fairer rate than a dedicated exchange counter — just make sure to select euros, not your home currency, when the machine asks.</p>
<h3 id="faq-5">Are the bank branches at Malpensa open all the time?</h3>
<p>No — the bank branches keep limited counter hours (roughly weekday mornings and early afternoons, with shorter Saturday hours), though their ATMs are generally accessible outside those hours.</p>
${related([
  { href: '/airport/milan-malpensa', label: 'Milan Malpensa Airport Guide' },
  { href: '/blog/meet-driver-milan-malpensa', label: 'Where to Meet Your Driver at Milan Malpensa' },
  { href: '/blog/malpensa-t1-t2-transit', label: 'How Do You Transit Between Malpensa T1 and T2?' },
  { href: '/milan-chauffeur-service', label: 'Milan Chauffeur Service' },
  { href: '/book-now', label: 'Book Your Malpensa Transfer' },
])}
`
  },

  // 2 ── Pisa Airport luggage storage and WiFi ──────────────────────────
  {
    title: "Does Pisa Airport Have Left Luggage and WiFi?",
    slug: "pisa-airport-luggage-wifi",
    category: "Airport Guides",
    read_time: "5 min read",
    seo_title: "Pisa Airport: Left Luggage Storage and WiFi Explained",
    seo_description: "Need to store bags or get online at Pisa Galileo Galilei? Here's exactly how the left-luggage service works, its cost, and how the free WiFi is set up.",
    focus_keyword: "pisa airport luggage wifi",
    excerpt: "Pisa's left-luggage service runs through the information office at a flat daily rate, and the airport's WiFi gives you an hour free — here's exactly how both work.",
    featured_image_url: "/images/hero.webp",
    content: `
<p>Pisa Galileo Galilei is compact enough that its facilities are easy to find once you know where to look — useful if you're storing a bag before heading into Pisa or Florence for the day, or just need to get online while waiting for a flight.</p>

${cta("Landing at Pisa for Florence or Tuscany? A private transfer skips the wait for a bag storage counter and the terminal WiFi login screen entirely.", "/services/airport-transfers", "See Airport Transfer Options")}

<h2 id="left-luggage">Left Luggage: How It Works</h2>
<p>Pisa Airport runs its left-luggage service through the airport's information office, reachable at +39 050 849 300. It's open every day from 08:00 to 20:00, and storage costs €7 per item per day. That daytime-only window matters if your flight lands very early or departs very late — the service won't be available to drop off or collect bags outside those hours, so plan around it if your schedule is tight.</p>

<h2 id="wifi">WiFi: What's Free and What Isn't</h2>
<p>WiFi is available throughout the terminal, and the first 60 minutes are free of charge. Beyond that first hour, continued access typically requires a paid extension, so if you need to be online for longer — working through a long layover, for instance — plan for that rather than assuming the free hour will stretch to cover your whole wait. Fixed internet stations are also available in both the Departures and Arrivals areas for a quick check without needing your own device connected.</p>

${cta("Whether you're storing a bag for a Pisa day trip or heading straight into Florence, a private transfer is booked and waiting when you land.", "/florence-transfer", "See Florence Transfer Options")}

<h2 id="other-facilities">Other Facilities Worth Knowing About</h2>
<p>Beyond luggage storage and WiFi, Pisa Airport has a reasonable range of amenities for its size: a pub, bar and café on the ground floor, three restaurants (one self-service) and a further bar on the first floor, and a shopping area called La Corte with more than 20 shops, accessible from both floors. There's also a paid VIP lounge (Sala VIP Galilei) open from 05:00 to 20:00 with snacks, WiFi and drinks, plus a bank, currency exchange desk, a family room with baby-changing facilities near the ticket office, and a pharmacy.</p>

<h2 id="faqs">Frequently Asked Questions</h2>
<h3 id="faq-1">Is there left-luggage storage at Pisa Airport?</h3>
<p>Yes — through the airport's information office, open daily from 08:00 to 20:00, at a cost of €7 per item per day.</p>
<h3 id="faq-2">Can I store or collect luggage outside those hours?</h3>
<p>Not through the standard service — it operates within the 08:00–20:00 window, so an early-morning or late-night flight needs planning around that.</p>
<h3 id="faq-3">Is WiFi free at Pisa Airport?</h3>
<p>The first 60 minutes are free; continued use beyond that typically requires a paid extension.</p>
<h3 id="faq-4">Are there internet stations if I don't have my own device?</h3>
<p>Yes — fixed internet terminals are available in both the Departures and Arrivals areas.</p>
<h3 id="faq-5">Does Pisa Airport have a paid lounge?</h3>
<p>Yes — the Sala VIP Galilei lounge, open 05:00 to 20:00, offers snacks, drinks, WiFi and reading material for a fee.</p>
${related([
  { href: '/airport/pisa', label: 'Pisa Airport Guide' },
  { href: '/blog/driver-pickup-pisa-airport', label: 'Where Do Drivers Pick Up at Pisa Galileo Galilei Airport?' },
  { href: '/blog/pisa-vs-florence-airport', label: 'Pisa vs Florence Airport: Which for Your Tuscany Trip?' },
  { href: '/florence-transfer', label: 'Florence Transfer Service' },
  { href: '/book-now', label: 'Book Your Pisa Airport Transfer' },
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
