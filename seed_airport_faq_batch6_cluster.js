/** Sixth batch of the Airport FAQs cluster — two new EN posts from
 *  docs/seo-topic-clusters-plan.md's Airport FAQs block (items 4 and 25):
 *  ATMs at Rome Fiumicino, and a driver/facilities FAQ for Treviso Airport
 *  (the budget-carrier gateway to Venice, distinct from Marco Polo, which
 *  already has its own driver-pickup and luggage-storage posts).
 *  Facts verified via live web search (Sep 2026): Fiumicino ATM/DCC scam
 *  warnings (Euronet, currency-exchange-branded ATMs) are a genuinely
 *  documented traveller complaint, not invented; Treviso's single two-floor
 *  terminal, taxi-stand meet point, and Venice distance/drive time are
 *  cross-referenced across multiple sources. Where sources conflicted
 *  (Treviso left-luggage availability), the post says so rather than
 *  asserting one version as fact.
 *  Run: node seed_airport_faq_batch6_cluster.js */
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

  // 1 ── ATMs at Fiumicino ────────────────────────────────────────────
  {
    title: "Where Are the ATMs at Rome Fiumicino and Which to Avoid?",
    slug: "atms-rome-fiumicino-airport",
    category: "Airport Guides",
    read_time: "5 min read",
    seo_title: "ATMs at Rome Fiumicino: Which to Use and Which to Skip",
    seo_description: "Need cash at Fiumicino? Here's where the ATMs are, why some charge far worse rates than others, and the one setting that protects you every time.",
    focus_keyword: "atms rome fiumicino airport",
    excerpt: "Not all ATMs at Fiumicino are equal — some quietly apply a much worse exchange rate than others. Here's how to spot the difference in seconds.",
    featured_image_url: "/images/rome airport.webp",
    content: `
<p>Fiumicino has plenty of ATMs scattered through both terminals, so finding cash isn't the issue — getting a fair exchange rate is. A few of the machines at the airport are widely reported by travellers to apply noticeably worse rates than a standard bank ATM, and the difference comes down to one setting most people don't think to check.</p>

${cta("Skip the arrivals-hall cash search entirely — book a private transfer and pay for it before you even land.", "/rome-airport-transfer", "See Rome Airport Transfer")}

<h2 id="where-to-find">Where to Find ATMs at Fiumicino</h2>
<p>ATMs are located throughout both Terminal 1 and Terminal 3, including in the arrivals halls, so you don't need to search far after landing. Bank-branded machines — commonly Unicredit's red-and-white "Bancomat" ATMs, Italy's largest bank — are the most widely available and reliable option in the terminals.</p>

<h2 id="which-to-avoid">Which ATMs to Be Cautious Of</h2>
<p>Machines branded with a currency-exchange company name rather than a bank — Travelex-style ATMs, for example — are consistently reported by travellers to offer worse exchange rates than standard bank machines. Euronet-operated ATMs in particular come up repeatedly in traveller complaints across European airports, Fiumicino included, for the same reason.</p>
<p>The mechanism behind this is called Dynamic Currency Conversion (DCC). When you withdraw cash, some machines ask whether you'd like the amount charged in your home currency or in euros. Choosing your home currency lets the ATM operator set its own exchange rate — one that's reliably worse than what your own bank would give you.</p>

${cta("If you'd rather not think about ATMs and exchange rates at all on arrival day, a private transfer is paid for in advance, in your own currency.", "/services/airport-transfers", "See Airport Transfer Options")}

<h2 id="the-one-rule">The One Setting That Protects You</h2>
<p>Whichever ATM you use at Fiumicino, always choose to be charged in <strong>euros (local currency)</strong>, never your home currency, when the machine asks. This single choice hands the conversion over to your own bank or card provider, which almost always applies a fairer exchange rate than the ATM operator's on-the-spot conversion.</p>
<p>It's worth checking a reliable currency converter on your phone before you land, so you have a rough benchmark for a fair euro-to-home-currency rate in mind — that way, if a machine's on-screen rate looks noticeably off, you'll recognise it immediately.</p>

<h2 id="faqs">Frequently Asked Questions</h2>
<h3 id="faq-1">Are there ATMs in both Fiumicino terminals?</h3>
<p>Yes — cash machines are available throughout Terminal 1 and Terminal 3, including in the arrivals halls.</p>
<h3 id="faq-2">Which ATMs give the best rates at Fiumicino?</h3>
<p>Standard bank-branded ATMs, such as Unicredit's Bancomat machines, are generally more reliable than ATMs branded with a currency-exchange company name.</p>
<h3 id="faq-3">What is Dynamic Currency Conversion and why does it matter?</h3>
<p>It's an option some ATMs offer to charge your withdrawal in your home currency instead of euros. It sounds convenient, but it lets the ATM set its own exchange rate, which is typically worse than your bank's — always decline it and choose euros instead.</p>
<h3 id="faq-4">Should I avoid Euronet ATMs specifically?</h3>
<p>Euronet-branded machines are frequently flagged by travellers for poor exchange rates at airports across Europe, Fiumicino included — a standard bank ATM is generally the safer choice when one is available.</p>
<h3 id="faq-5">Is it better to exchange cash before arriving in Italy?</h3>
<p>Not necessarily — using a bank-branded ATM and choosing to be charged in euros typically gives a fairer rate than a currency exchange counter, whether at the airport or elsewhere.</p>
${related([
  { href: '/airport/rome-fiumicino', label: 'Rome Fiumicino Airport Guide' },
  { href: '/blog/where-meet-driver-rome-fiumicino', label: 'Where to Meet Your Driver at Rome Fiumicino' },
  { href: '/blog/sim-card-rome-fiumicino', label: 'Buying a SIM Card at Rome Fiumicino' },
  { href: '/rome-airport-transfer', label: 'Rome Airport Transfer Service' },
  { href: '/book-now', label: 'Book Your Fiumicino Transfer' },
])}
`
  },

  // 2 ── Treviso Airport driver + facilities ───────────────────────────
  {
    title: "Treviso Airport FAQ: Meeting Your Driver & Facilities",
    slug: "treviso-airport-driver-facilities",
    category: "Airport Guides",
    read_time: "6 min read",
    seo_title: "Treviso Airport (TSF): Driver Pickup, Facilities & Venice Transfer",
    seo_description: "Landing at Treviso for Venice? Here's exactly where your driver waits, what facilities the airport actually has, and how far the city really is.",
    focus_keyword: "treviso airport driver facilities",
    excerpt: "Treviso is Venice's budget-carrier airport, and it's a small, simple one — here's exactly what to expect on arrival, from meeting your driver to getting into the city.",
    featured_image_url: "/images/venice airport.webp",
    content: `
<p>Venice Treviso Airport (TSF) is the smaller of the two airports serving Venice, mainly used by budget carriers, and sits well outside the city itself. Its compact size makes arrivals simple — here's exactly what to expect.</p>

${cta("Landing at Treviso and heading into Venice? Book a private transfer and skip working out the connection yourself.", "/services/airport-transfers", "See Airport Transfer Options")}

<h2 id="terminal-layout">Terminal Layout</h2>
<p>Treviso has a single terminal building spread over two floors: check-in and the arrivals hall are on the ground floor, with departures on the floor above. There's no confusion over which terminal to head to, since there's only one.</p>

<h2 id="meeting-your-driver">Where Your Driver Will Be Waiting</h2>
<p>For a pre-arranged private transfer, your driver waits in the arrivals hall on the ground floor, typically holding a sign with your name, and will help with luggage on the way to the vehicle. The public taxi rank is just outside the arrivals hall if you haven't booked in advance.</p>

<h2 id="facilities">What Facilities Does Treviso Actually Have?</h2>
<p>Being a small airport, Treviso's facilities are basic but cover the essentials: toilets, baby-changing facilities, WiFi and charging points are available on both floors. Don't expect the range of shops, lounges or dining options you'd find at a major hub like Fiumicino or Malpensa — Treviso is built for quick, functional transit, not for a long layover.</p>
<p>Left-luggage at the airport itself is genuinely unclear from published information — some sources describe a paid storage service at around €7 per day, while others report no left-luggage facility on site at all. If guaranteed storage matters to your plans, the automated lockers at Venice's Santa Lucia train station are a more reliably documented fallback, once you've made the journey into the city.</p>

${cta("Whichever floor you land on, your driver already knows exactly where to meet you at Treviso.", "/services/airport-transfers", "See Airport Transfer Options")}

<h2 id="distance-to-venice">How Far Is Venice From Treviso?</h2>
<p>Treviso Airport sits around 31 km from Venice, roughly a 40-minute drive under normal traffic conditions. This is noticeably further out than Venice's main airport, Marco Polo, which is why checking which airport your flight actually uses matters when planning your onward journey.</p>

<h2 id="faqs">Frequently Asked Questions</h2>
<h3 id="faq-1">Where exactly do I meet my driver at Treviso Airport?</h3>
<p>In the ground-floor arrivals hall, where a pre-booked private driver will be holding a sign with your name.</p>
<h3 id="faq-2">Does Treviso have more than one terminal?</h3>
<p>No — it's a single terminal building over two floors, with check-in and arrivals on the ground floor and departures above.</p>
<h3 id="faq-3">Is there left-luggage storage at Treviso Airport?</h3>
<p>Reports are mixed — some sources cite a paid storage service, others report none on site. If you need guaranteed storage, the lockers at Venice Santa Lucia train station are a more dependable option once you reach the city.</p>
<h3 id="faq-4">Is WiFi available at Treviso Airport?</h3>
<p>Yes, along with charging points, on both the arrivals and departures floors.</p>
<h3 id="faq-5">How far is Treviso Airport from Venice?</h3>
<p>About 31 km, roughly a 40-minute drive in normal traffic — notably further from the city centre than Venice Marco Polo Airport.</p>
${related([
  { href: '/airport/venice', label: 'Venice Marco Polo Airport Guide' },
  { href: '/blog/driver-pickup-venice-marco-polo', label: 'Where Do Drivers Wait at Venice Marco Polo Airport?' },
  { href: '/services/airport-transfers', label: 'Airport Transfer Services' },
  { href: '/book-now', label: 'Book Your Treviso Transfer' },
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
