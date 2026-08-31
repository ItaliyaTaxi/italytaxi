/** Fourth batch of the Airport FAQs cluster — completes the "meet your driver"
 *  series by publishing the existing Bari draft, and adds two new topics
 *  from docs/seo-topic-clusters-plan.md's Airport FAQs block (items 8 and 43):
 *  overnight sleeping at Fiumicino, and how Italian airport customs actually
 *  works for arriving passengers. Deduped against the current 218 published
 *  posts (196 EN / 22 IT) — no slug or topic overlap with existing content;
 *  the closest neighbour, arrivo-aeroporto-notte-italia (IT digital-nomad
 *  cluster), covers general night-arrival logistics, not the airside
 *  sleeping-in-the-terminal angle this post targets.
 *  Facts verified via live web search (Aug 2026): Fiumicino 24h landside
 *  access, EES biometric rollout status, EU customs channel system, cash
 *  declaration threshold, Bari transfer times to Alberobello/Matera/Lecce.
 *  Run: node seed_airport_faq_batch4_cluster.js */
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

  // 1 ── Overnight sleeping at Fiumicino ────────────────────────────────
  {
    title: "Can You Sleep Overnight at Rome Fiumicino Airport?",
    slug: "sleep-overnight-rome-fiumicino",
    category: "Airport Guides",
    read_time: "6 min read",
    seo_title: "Sleeping Overnight at Rome Fiumicino: What to Actually Expect",
    seo_description: "Stuck at Fiumicino overnight for an early flight? Here's where the airport's landside stays open 24 hours, the best rest spots, and paid alternatives.",
    focus_keyword: "sleeping rome fiumicino overnight",
    excerpt: "Fiumicino's landside terminals stay open around the clock, but comfort varies a lot by location. Here's where to actually find a place to rest.",
    featured_image_url: "/images/rome airport.webp",
    content: `
<p>An early departure or a long layover sometimes means spending the night at the airport rather than paying for a hotel you'll barely use. Rome Fiumicino's landside area (the public part, before security) stays open 24 hours across Terminals 1 and 3 — but where you actually end up resting matters a lot.</p>

${cta("Landing early or flying out at an awkward hour? A private transfer meets you at a set time, no waiting around the terminal for a taxi.", "/rome-airport-transfer", "See Rome Airport Transfer")}

<h2 id="is-it-allowed">Is Sleeping at Fiumicino Actually Allowed?</h2>
<p>Yes, on the landside — the airport doesn't close overnight and there's no rule against resting in the public areas. Airside (past security) is a different story: overnight access there is generally limited to ticketed passengers with a valid boarding pass, and non-ticketed visitors are sometimes asked to leave certain airside areas overnight, typically between around midnight and 4:00 AM.</p>

<h2 id="best-spots">Where to Find the Best Rest Areas</h2>
<p>Seating quality varies noticeably by terminal and location. Most of the standard seating has armrests, which makes lying down harder, but a few specific spots are known for being more comfortable:</p>
<ul>
  <li><strong>Near Gate E12</strong> — reclining chairs and sofa-style seating.</li>
  <li><strong>Near Gates B9, B11 and D1</strong> — benches without armrests, better for lying flat.</li>
  <li><strong>Pre-security, near Gates A27–31</strong> — quieter lounge-style seating with softer chairs, useful if you're not flying until later and want to avoid the airside crowds.</li>
</ul>
<p>If you're planning to sleep on the floor at any point, bringing a light blanket or sleeping mat makes a real difference — the tile floors get cold overnight, and cushioned spots fill up first.</p>

<h2 id="what-stays-open">What Stays Open Overnight</h2>
<p>Not every shop or café runs 24 hours, and overnight opening hours can shift seasonally, so don't count on a specific restaurant being open at 3 AM. The terminals themselves, restrooms, and basic public seating areas are what you can reliably count on staying accessible.</p>

${cta("If an odd-hour flight has you weighing a night at the airport against a hotel, we can also arrange your transfer around whichever you choose — flight-tracked, so timing changes don't cause problems.", "/services/airport-transfers", "See Airport Transfer Options")}

<h2 id="paid-alternatives">Paid Alternatives If You Want Real Rest</h2>
<p>If a proper night's sleep matters more than saving money, Fiumicino has paid options built for exactly this. HelloSky Air Rooms &amp; Lounge sits in front of the terminals, reachable via a covered walkway, and offers private rooms and rest areas for both short stays and full overnight bookings — a genuine alternative to hunting for a bench.</p>

<h2 id="tips">Tips for a More Comfortable Night</h2>
<ul>
  <li>Keep your passport, boarding pass, and valuables on you, not in checked bags left unattended.</li>
  <li>Noise-cancelling headphones or earplugs make a bigger difference than most people expect in a 24-hour terminal.</li>
  <li>Scope out your preferred seating area as early in the evening as possible — good spots fill up fast once late flights land.</li>
  <li>If you're flying out early, confirm which terminal your flight uses in advance so you're not relocating at 4 AM with your bags.</li>
</ul>

<h2 id="faqs">Frequently Asked Questions</h2>
<h3 id="faq-1">Is it actually legal to sleep overnight at Fiumicino?</h3>
<p>Yes — the landside areas of Terminals 1 and 3 are open 24 hours and there's no rule against resting there. Airside access overnight is more restricted and generally limited to ticketed passengers.</p>
<h3 id="faq-2">Where's the most comfortable place to sleep at Fiumicino?</h3>
<p>Seating near Gate E12, and the benches without armrests near Gates B9, B11 and D1, are among the more commonly used spots for actually lying down.</p>
<h3 id="faq-3">Are shops and restaurants open all night at Fiumicino?</h3>
<p>Not reliably — opening hours vary by outlet and season, so don't plan around a specific café being open in the early hours.</p>
<h3 id="faq-4">Is there a paid option if I don't want to sleep on a bench?</h3>
<p>Yes — HelloSky Air Rooms &amp; Lounge, located in front of the terminals via a covered walkway, offers private rooms for short stays or full overnight rests.</p>
<h3 id="faq-5">Can I stay airside overnight if I'm not flying until the next afternoon?</h3>
<p>Airside overnight access is generally reserved for ticketed passengers, and non-ticketed visitors may be asked to leave certain areas overnight — the landside terminal areas are the more reliable option for an extended wait.</p>
${related([
  { href: '/airport/rome-fiumicino', label: 'Rome Fiumicino Airport Guide' },
  { href: '/blog/where-meet-driver-rome-fiumicino', label: 'Where to Meet Your Driver at Rome Fiumicino' },
  { href: '/blog/luggage-storage-rome-fiumicino', label: 'Left Luggage Storage at Rome Fiumicino' },
  { href: '/rome-airport-transfer', label: 'Rome Airport Transfer Service' },
  { href: '/book-now', label: 'Book Your Fiumicino Transfer' },
])}
`
  },

  // 2 ── Italian airport customs on arrival ─────────────────────────────
  {
    title: "What Happens at Italian Airport Customs When You Land?",
    slug: "italy-airport-customs-arrivals",
    category: "Airport Guides",
    read_time: "7 min read",
    seo_title: "Italian Airport Customs: What Actually Happens When You Land (2026)",
    seo_description: "What to expect at customs when landing in Italy in 2026 — the green/red channel system, duty-free limits, cash declaration rules, and how EES affects non-EU arrivals.",
    focus_keyword: "italy airport customs arrivals",
    excerpt: "Customs at Italian airports runs on the EU's green/red channel system, but what actually happens at passport control now depends heavily on whether you're an EU or non-EU arrival.",
    featured_image_url: "/images/airport-transfer.webp",
    content: `
<p>Customs at Italian airports follows the same EU-wide framework as other Schengen countries, but exactly what happens between stepping off the plane and reaching the exit now depends a lot on your passport — especially since the EU's new biometric border system became fully operational across Italy in April 2026.</p>

${cta("Whatever happens at passport control, your driver tracks your flight and adjusts automatically — no need to rush or guess your arrival time.", "/services/airport-transfers", "See Airport Transfer Options")}

<h2 id="passport-control">Passport Control: EU/Schengen vs Non-EU Lanes</h2>
<p>Every major Italian airport splits arrivals into separate lanes: an EU/Schengen lane (often with self-service e-gates for eligible passport holders) and a non-EU or "all passports" lane. As of April 2026, all of Italy's airports and ports are covered by the EU's Entry/Exit System (EES) — non-EU, third-country nationals now have their fingerprints and a facial photo captured at first entry, which adds a few minutes compared with a simple passport stamp. That registration is a one-time step; return visits after your data is on file are a much quicker verification rather than a full re-enrolment.</p>
<p>Queues for non-EU arrivals have run long enough at peak summer periods that Italy's Interior Ministry has allowed border police to temporarily fall back to manual passport stamping when a queue tops 45 minutes, so actual wait times can vary significantly by airport and time of day.</p>

<h2 id="customs-channels">The Green and Red Customs Channels</h2>
<p>After passport control and baggage claim, you'll walk through one of two customs channels:</p>
<ul>
  <li><strong>Green Channel</strong> — for passengers with nothing to declare, meaning everything you're carrying falls within the standard duty-free allowances (see below).</li>
  <li><strong>Red Channel</strong> — for anyone carrying goods above those limits, restricted or controlled items, or €10,000 or more in cash.</li>
</ul>
<p>Choosing the green channel doesn't guarantee you'll walk straight through — customs officers carry out random checks on green-channel passengers too, and non-EU arrivals are checked somewhat more often than intra-EU ones. Within the EU itself, routine customs checks are largely a formality, though officers remain on duty and can stop anyone at random.</p>

<h2 id="duty-free-limits">What You Can Bring In Without Declaring</h2>
<p>If you're arriving by air from outside the EU, the standard duty-free allowance is broadly: 200 cigarettes (or an equivalent quantity of other tobacco), 1 litre of spirits above 22% ABV (or double that for weaker alcohol), plus additional wine and beer allowances, and up to roughly €430 worth of other goods. Bringing more than that means using the red channel and potentially paying duty on the excess.</p>

${cta("Landing with the family and all the extra luggage that comes with it? A private transfer means no juggling bags between train platforms after a long flight.", "/services/airport-transfers", "See Airport Transfer Options")}

<h2 id="cash-declaration">Declaring Cash Over €10,000</h2>
<p>If you're carrying €10,000 or more in cash — including notes, coins, banker's drafts or traveller's cheques, and this applies per person, not per family — you're legally required to declare it by using the red channel. This isn't specific to Italy; it's an EU-wide anti-money-laundering rule that applies whether you're a resident or a visitor.</p>

<h2 id="if-stopped">What Happens If You're Stopped for a Check</h2>
<p>If you're pulled aside in the green channel or flagged in the red channel, an officer will typically ask what you're carrying and may ask you to open your bags. Undeclared goods above the limit can result in the item being confiscated and a fine; undeclared cash above €10,000 can lead to seizure and penalties even if the money itself is entirely legitimate — the requirement is about declaring it, not proving where it came from on the spot.</p>

<h2 id="faqs">Frequently Asked Questions</h2>
<h3 id="faq-1">Do EU citizens go through customs when landing in Italy?</h3>
<p>EU citizens still pass through the airport's customs area, but for goods carried for personal use within normal limits, checks are largely a formality — the main distinction at passport control is the separate EU/Schengen e-gate lane versus the non-EU lane.</p>
<h3 id="faq-2">What is the EU's Entry/Exit System (EES) and does it affect me?</h3>
<p>EES is a biometric border system that captures fingerprints and a facial photo from non-EU, third-country nationals on first entry to the Schengen Area. It's been fully operational across all Italian airports since April 2026. EU/Schengen passport holders aren't subject to it.</p>
<h3 id="faq-3">How much cash can I bring into Italy without declaring it?</h3>
<p>Up to €10,000 per person. At or above that amount — in cash, cheques or drafts combined — you must declare it via the red channel, regardless of your nationality or residency.</p>
<h3 id="faq-4">What happens if I pick the green channel by mistake with something to declare?</h3>
<p>You should go back and use the red channel — customs officers do carry out random checks in the green channel, and being caught with undeclared goods or cash there can mean confiscation and a fine.</p>
<h3 id="faq-5">Does customs affect how long it takes my driver to meet me?</h3>
<p>Not directly — your driver tracks your actual flight landing time and waits accordingly, so a longer passport control or customs queue doesn't cause a missed pickup, just a later one.</p>
${related([
  { href: '/blog/find-exit-meet-driver-italy', label: 'How to Find the Right Exit to Meet a Driver in Italian Airports' },
  { href: '/airport/rome-fiumicino', label: 'Rome Fiumicino Airport Guide' },
  { href: '/services/airport-transfers', label: 'Airport Transfer Services' },
  { href: '/faq', label: 'Frequently Asked Questions' },
  { href: '/book-now', label: 'Book Your Airport Transfer' },
])}
`
  },
];

async function run() {
  const { data: author, error: aerr } = await supabase.from('bloggers').select('id').limit(1).single();
  if (aerr || !author) { console.error('No author found:', aerr); process.exit(1); }

  // 1. Publish the existing Bari draft (content already verified accurate).
  const { data: bariUpdate, error: bariErr } = await supabase
    .from('blogs')
    .update({ status: 'published', published_at: new Date().toISOString() })
    .eq('slug', 'meet-driver-bari-airport')
    .select('slug, status');
  if (bariErr) { console.error('Bari publish error:', bariErr); process.exit(1); }
  console.log('Published:', bariUpdate);

  // 2. Insert the two new posts.
  for (const post of posts) {
    const { data, error } = await supabase
      .from('blogs')
      .insert({
        ...post,
        status: 'published',
        author_id: author.id,
        published_at: new Date().toISOString(),
        tags: [],
      })
      .select('slug');
    if (error) { console.error(`Insert error for ${post.slug}:`, error); process.exit(1); }
    console.log('Inserted:', data);
  }

  console.log('\nDone — 3 EN posts published (1 promoted from draft, 2 new).');
}

run();
