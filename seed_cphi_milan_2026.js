/** CPHI Milan 2026 Transfer & Chauffeur Guide — EN + IT, single topic pair
 *  (not a full cluster). Cannibalization check performed first: grepped the
 *  entire codebase for "CPHI", "pharmaceutical exhibition", "Fiera Milano
 *  transfer", "exhibition transfer", "trade fair transfer" — zero existing
 *  matches, so this is a genuinely new intent, no merge/redirect needed.
 *  Event facts verified via live web search (Sep 2026), cross-checked across
 *  multiple independent sources (cphi.com, icepharma.com, tradeindia.com):
 *  CPHI Milan 2026 runs 6–8 October 2026 at Fiera Milano Rho. Venue address
 *  (Strada Statale del Sempione 28, 20017 Rho) and structural facts (20
 *  pavilions, ~1km pedestrian spine, opened 2005, designed by Massimiliano
 *  Fuksas) verified via fieramilano.it-adjacent sources. Malpensa-to-Fiera
 *  travel time/price (~25–35 min, from €65) and the MXP/LIN/BGY distance
 *  figures reuse the exact numbers already live on /milan-chauffeur-service
 *  rather than inventing new ones. No specific Linate/Bergamo-to-Fiera time
 *  is stated as a fixed figure — no established source for that exists on
 *  this site, and Fiera Milano sits on the opposite side of the city from
 *  both airports, so it's framed qualitatively instead of a invented number.
 *  Run: node seed_cphi_milan_2026.js */
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

const enPost = {
  title: "CPHI Milan 2026 Transfer & Chauffeur Service Guide",
  slug: "cphi-milan-transfer",
  category: "Business Travel",
  read_time: "8 min read",
  seo_title: "CPHI Milan 2026 Transfer & Chauffeur Service Guide",
  seo_description: "Attending CPHI Milan 2026 (6–8 October, Fiera Milano Rho)? Here's how to get from Malpensa, Linate or Bergamo to the venue or your hotel, and when a private transfer makes sense.",
  focus_keyword: "cphi milan transfer",
  excerpt: "A practical transportation guide for CPHI Milan 2026 attendees — airports, hotels, the exhibition venue, and when a pre-booked private transfer actually helps.",
  featured_image_url: "/images/milan airport.jpg",
  content: `
<p><strong>CPHI Milan 2026 runs 6–8 October 2026 at Fiera Milano Rho, on the north-western edge of Milan.</strong> Like most attendees at a three-day international exhibition, the transportation questions that matter are simple: which airport to fly into, how to get from that airport to your hotel or the venue, and how to get around for the rest of the event. This guide covers all of that directly.</p>

<h2 id="at-a-glance">CPHI Milan 2026 at a Glance</h2>
<table>
  <thead><tr><th>Information</th><th>Details</th></tr></thead>
  <tbody>
    <tr><td>Event</td><td>CPHI Milan 2026</td></tr>
    <tr><td>Dates</td><td>6–8 October 2026</td></tr>
    <tr><td>Venue</td><td>Fiera Milano Rho</td></tr>
    <tr><td>Venue address</td><td>Strada Statale del Sempione 28, 20017 Rho, Milan</td></tr>
    <tr><td>Closest airport</td><td>Milan Malpensa (MXP)</td></tr>
    <tr><td>Other Milan airports</td><td>Linate (LIN), Bergamo Orio al Serio (BGY)</td></tr>
    <tr><td>Transport options</td><td>Private transfer, taxi, public transport</td></tr>
  </tbody>
</table>

<h2 id="how-to-get-there">How to Get to CPHI Milan 2026</h2>
<p>There's no single "best" way to reach Fiera Milano Rho — the right choice depends on which airport you're flying into, where you're staying, how much luggage or exhibition material you're carrying, and whether you're travelling alone or with colleagues.</p>
<p><strong>Public transport</strong> reaches Fiera Milano Rho directly — the venue has its own metro station (M1 line, Rho Fiera Milano stop) — and is a reasonable option for a solo visitor travelling light between a city-centre hotel and the venue. <strong>Taxis</strong> are available at all three Milan airports and in the city, useful for short, one-off journeys but priced per trip with no advance certainty on cost or driver language. A <strong>pre-booked private transfer</strong> is arranged in advance at a fixed price and takes you door-to-door — airport to hotel, hotel to venue, or airport to venue directly — which matters more if you're carrying sample cases or presentation materials, travelling with colleagues, or working to a tight schedule between meetings.</p>

${cta("Flying in for CPHI Milan and want your arrival sorted before you land? A private transfer can be booked from any of Milan's three airports.", "/services/airport-transfers", "See Airport Transfer Options")}

<h2 id="airport-transfers">CPHI Milan Airport Transfers</h2>
<p>Milan is served by three airports, and none of them is inside the city — every arrival involves some kind of transfer. Here's how each one relates to Fiera Milano Rho.</p>

<h3 id="malpensa">Malpensa Airport (MXP) to CPHI Milan</h3>
<p>Malpensa is Milan's main international hub and, for CPHI Milan specifically, the most direct airport of the three — Fiera Milano Rho sits on the same north-western side of the city as the airport. A private transfer from Malpensa to Fiera Milano typically takes around 25–35 minutes via the A8 motorway and the direct SS336 connection, bypassing Milan city centre entirely. This is already one of the more frequently requested business routes on this site, reflecting how often Malpensa arrivals are headed straight to Fiera Milano rather than into town first.</p>

<h3 id="linate">Linate Airport (LIN) to CPHI Milan</h3>
<p>Linate is Milan's close-in airport, about 7 km east of the city centre, and mainly serves short-haul European routes. It's the fastest of the three airports for reaching central Milan hotels — but Fiera Milano Rho is on the opposite, north-western side of the city, so a Linate-to-Fiera journey means crossing Milan rather than avoiding it. If your flight only connects through Linate, it's worth building extra time into your schedule and, if your first stop is your hotel rather than the venue, routing through the city centre first rather than trying to reach Rho directly.</p>

<h3 id="bergamo">Bergamo Airport (BGY) to CPHI Milan</h3>
<p>Bergamo Orio al Serio — officially Milan Bergamo Airport — is Milan's low-cost hub, serving primarily Ryanair and easyJet routes. It sits around 45 km north-east of Milan, across a mountain ridge, and like Linate is on the opposite side of the city from Fiera Milano Rho. Journey times from Bergamo vary more than from Malpensa depending on your exact destination and traffic, so if you're flying in on a budget carrier, allow a realistic margin rather than assuming a short hop.</p>

${cta("Whichever airport your CPHI Milan flight lands at, a private transfer can take you straight to your hotel or the venue.", "/milan-chauffeur-service", "See Milan Chauffeur Service")}

<h2 id="private-transfer">Private Transfer to CPHI Milan</h2>
<p><strong>Yes — a private transfer can be pre-booked for arrival, departure, and journeys between your hotel and Fiera Milano during the event.</strong> The case for booking one is straightforward rather than dramatic: a pre-arranged pickup means you're not relying on finding a taxi at a busy exhibition-week airport or venue exit, luggage and sample cases are handled without you managing them yourself, and the price is fixed and known in advance rather than metered.</p>
<p>This is most useful for exhibitors and business travellers with defined schedules — a flight to meet, a stand to set up, meetings booked back-to-back — where an unpredictable wait for transport is a real cost, not just an inconvenience. It's less necessary if you're arriving with no fixed schedule, travelling light, and happy to use the metro or a standard taxi.</p>

<h2 id="hotel-transfers">CPHI Milan Hotel Transfers</h2>
<p>Beyond the airport leg, most CPHI Milan attendees need transport for at least three other journeys: <strong>hotel to Fiera Milano</strong> each exhibition day, <strong>Fiera Milano back to the hotel</strong> in the evening, and <strong>hotel to airport</strong> for departure. Each of these can be pre-booked the same way as an airport transfer — a fixed pickup time and price, arranged before the event starts rather than sorted out on the day.</p>
<p>Pre-arranging the hotel-to-venue journey specifically matters more during a three-day exhibition than it would for a single city visit, since you're likely making the same trip more than once and want it to be predictable each time. See our <a href="/services/hotel-transfers">hotel transfer service</a> for how this works generally, or our <a href="/milan-chauffeur-service">Milan chauffeur service</a> page for Milan-specific detail including Malpensa, Linate and Bergamo coverage.</p>

<h2 id="business-visitors">CPHI Milan Transfers for Exhibitors, Buyers and Business Visitors</h2>
<p>Exhibitors, buyers and other business visitors at CPHI Milan typically have a different transport problem than a leisure visitor: multiple appointments across the three exhibition days, a tight schedule that may shift at short notice, an airport arrival that needs to align with stand set-up or a first meeting, and often business luggage or materials beyond a standard suitcase. A pre-booked transfer — arranged for arrival, for the daily hotel-to-venue leg, and for departure — removes the least predictable part of that schedule, which is getting between locations on time.</p>
<p>For a day involving multiple stops rather than a single journey, an hourly or multi-stop chauffeur booking is generally more practical than booking separate one-way transfers for each leg — see our <a href="/services/business-taxi">business taxi service</a> for how this is arranged.</p>

${cta("Travelling to CPHI Milan for business, with meetings across the three days? Contact us about your schedule.", "/contact", "Contact Us")}

<h2 id="group-transfers">Group Transfers for CPHI Milan</h2>
<p>Exhibitor teams and international delegations travelling together can book group transportation rather than arranging separate vehicles for each person — useful when a team needs to arrive at the venue together, or when coordinating several individual taxis would risk the group getting split up or delayed. Larger vehicles are available for groups with more passengers or additional luggage; specify your group size and luggage when booking so the right vehicle is arranged, rather than assuming a standard capacity.</p>

<h2 id="fiera-milano">Fiera Milano Rho: The Venue</h2>
<p>Fiera Milano Rho is one of Europe's largest exhibition complexes, spread across roughly twenty pavilions connected by a pedestrian spine around a kilometre long. It sits in Rho, on Milan's north-western edge, and is also the regular venue for other major trade fairs including Salone del Mobile and EICMA — so if you've attended one of those, the site layout and access points will be familiar. The venue has its own dedicated Milan metro stop (M1, Rho Fiera Milano) as well as direct motorway access via the A8, which is what a private transfer from Malpensa uses.</p>

<h2 id="practical-guide">Practical Transportation Guide</h2>
<table>
  <thead><tr><th>Journey</th><th>Suitable option</th></tr></thead>
  <tbody>
    <tr><td>Airport → Hotel</td><td>Private transfer, taxi, or train (route-dependent)</td></tr>
    <tr><td>Airport → Fiera Milano</td><td>Private transfer or public transport (M1 metro to Rho Fiera Milano)</td></tr>
    <tr><td>Hotel → Fiera Milano</td><td>Private transfer, taxi, or metro, depending on hotel location</td></tr>
    <tr><td>Fiera Milano → Hotel</td><td>Private transfer, taxi, or metro</td></tr>
    <tr><td>Hotel → Airport (departure)</td><td>Pre-booked transfer, taxi, or train</td></tr>
    <tr><td>Team/exhibitor group transportation</td><td>Group private vehicle, sized to passenger and luggage count</td></tr>
  </tbody>
</table>

<h2 id="booking-tips">Tips for Booking CPHI Milan Transportation</h2>
<ul>
  <li><strong>Book airport transfers in advance</strong> — vehicle availability during a major exhibition period is tighter than on an ordinary week.</li>
  <li><strong>Provide your flight number</strong> for airport pickups, so arrival can be tracked and adjusted if your flight is delayed.</li>
  <li><strong>Confirm your exact hotel and its address</strong> when booking, particularly if it's outside central Milan.</li>
  <li><strong>Confirm passenger count and luggage</strong>, including any sample cases or exhibition materials, so the right vehicle size is arranged.</li>
  <li><strong>Allow extra time for traffic</strong> around the venue during peak exhibition hours, especially at the start and end of each day.</li>
  <li><strong>Arrange your return airport transfer in advance</strong> rather than leaving it until the last day of the event.</li>
  <li><strong>Confirm pickup instructions</strong> — meeting point, driver contact method — before you travel, not after you land.</li>
</ul>

<h2 id="faqs">Frequently Asked Questions</h2>
<h3 id="faq-1">How do I get to CPHI Milan?</h3>
<p>CPHI Milan is held at Fiera Milano Rho, reachable by the M1 metro line (Rho Fiera Milano stop), taxi, or a pre-booked private transfer from any of Milan's three airports or from your hotel. Which option suits you best depends on your airport, luggage, and schedule.</p>
<h3 id="faq-2">Which airport is closest to CPHI Milan?</h3>
<p>Malpensa (MXP) is the most direct of Milan's three airports for reaching Fiera Milano Rho, since both are on the same north-western side of the city — a private transfer typically takes around 25–35 minutes. Linate and Bergamo are both on the opposite side of Milan from the venue.</p>
<h3 id="faq-3">How do I get from Malpensa Airport to CPHI Milan?</h3>
<p>A private transfer from Malpensa to Fiera Milano Rho takes approximately 25–35 minutes via the A8 motorway and the direct SS336 connection, bypassing Milan city centre. This can be booked in advance for your exact arrival time.</p>
<h3 id="faq-4">Can I book a private transfer to CPHI Milan?</h3>
<p>Yes. Private transfers can be pre-booked from Malpensa, Linate or Bergamo airports directly to Fiera Milano Rho or to your hotel, at a fixed price agreed in advance.</p>
<h3 id="faq-5">Can I book a transfer from my Milan hotel to CPHI?</h3>
<p>Yes — hotel-to-venue transfers can be booked for each exhibition day, along with the return journey back to your hotel in the evening.</p>
<h3 id="faq-6">Is a private chauffeur useful for CPHI Milan exhibitors?</h3>
<p>It can be, particularly for a schedule involving multiple stops in one day — stand set-up, meetings, and an evening return — where an hourly or multi-stop booking removes the need to arrange separate transport for each leg.</p>
<h3 id="faq-7">Can companies book group transportation for CPHI Milan?</h3>
<p>Yes. Exhibitor teams and delegations can book group transfers rather than splitting across individual taxis — useful for keeping a team together and coordinating one arrival time rather than several.</p>
<h3 id="faq-8">How early should I book a CPHI Milan airport transfer?</h3>
<p>As early as your travel plans are confirmed is safest, since vehicle availability during a major exhibition period is tighter than during an ordinary week — this applies to both your arrival and your return transfer.</p>

<p style="margin-top:32px;">Planning your CPHI Milan transfer? <a href="/book-now">Request a quote</a> for your airport, hotel or exhibition transportation, or <a href="/contact">contact us</a> directly if you're coordinating travel for a team.</p>
${related([
  { href: '/milan-chauffeur-service', label: 'Milan Chauffeur Service' },
  { href: '/airport/milan-malpensa', label: 'Milan Malpensa Airport Guide' },
  { href: '/airport/milan-linate', label: 'Milan Linate Airport Guide' },
  { href: '/services/business-taxi', label: 'Executive Business Taxi in Italy' },
  { href: '/services/hotel-transfers', label: 'Hotel Transfers Across Italy' },
  { href: '/book-now', label: 'Request a Quote' },
])}
`
};

async function run() {
  const { data: author, error: aerr } = await supabase.from('bloggers').select('id').limit(1).single();
  if (aerr || !author) { console.error('No author found:', aerr); process.exit(1); }

  const { data, error } = await supabase
    .from('blogs')
    .insert({ ...enPost, status: 'published', author_id: author.id, published_at: new Date().toISOString(), tags: [] })
    .select('slug');
  if (error) { console.error('Insert error:', error); process.exit(1); }
  console.log('Inserted:', data);
  console.log('Done — 1 EN post published.');
}

run();
