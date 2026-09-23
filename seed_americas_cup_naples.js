/** Louis Vuitton America's Cup Naples 2026 Transfer & Chauffeur Guide — EN + IT.
 *  Cannibalization check performed first: grepped the codebase for
 *  "America's Cup", "Naples event", "sailing event", "Coppa America" — zero
 *  existing matches.
 *  IMPORTANT FACTUAL CORRECTION vs. the request: live verification (Sep
 *  2026, cross-checked across americascup.com, World Sailing, and Italian
 *  press/government sources) shows the 2026 Naples event is the Louis
 *  Vuitton 38th America's Cup PRELIMINARY REGATTA (PR2), 24-27 September
 *  2026 — NOT the America's Cup Match itself. The full Match is separately
 *  confirmed (americascup.com, World Sailing) to start 10 July 2027, also in
 *  Naples. The article is written to be precise about this (states PR2 +
 *  exact dates + previews the 2027 Match) while keeping the user's
 *  requested title/H1, which is accurate as an umbrella description of
 *  Naples' 2026 America's Cup activity.
 *  Verified facts: dates (multiple independent sources incl.
 *  commissari.gov.it, a .gov.it source); Race Village location (Via
 *  Francesco Caracciolo / Lungomare Caracciolo, specifically Rotonda Diaz -
 *  Mappatella Beach, free entry); Via Francesco Caracciolo closed to traffic
 *  during the regatta (verified across multiple press sources, a genuine,
 *  relevant transportation fact); 9 AC40 team boats competing.
 *  Naples airport (NAP) facts (7km/~15-20 min from city centre) reuse the
 *  exact figures already established in src/lib/cityData.ts's `naples` entry
 *  and the airport/[slug] page's Naples rich data, not new numbers.
 *  Run: node seed_americas_cup_naples.js */
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
  title: "Louis Vuitton America's Cup Naples 2026 Transfer & Chauffeur Guide",
  slug: "americas-cup-naples-transfer",
  category: "Business Travel",
  read_time: "8 min read",
  seo_title: "Louis Vuitton America's Cup Naples 2026 Transfer & Chauffeur Guide",
  seo_description: "Naples hosts the Louis Vuitton America's Cup Preliminary Regatta 24–27 September 2026. Here's how to get from the airport, your hotel, or the Lungomare Caracciolo race village.",
  focus_keyword: "america's cup naples transfer",
  excerpt: "A practical transportation guide for the Louis Vuitton America's Cup in Naples — airport, hotel and race-village transfers, and what the Via Caracciolo closure means for getting around.",
  featured_image_url: "/images/naples.webp",
  content: `
<p><strong>Naples hosts the Louis Vuitton 38th America's Cup Preliminary Regatta — Naples PR2 — from 24 to 27 September 2026, with racing in the Gulf of Naples and the Race Village along the Lungomare Caracciolo.</strong> It's the final preliminary event before the America's Cup Match itself, which is scheduled to return to Naples in July 2027. Either way, if you're travelling to Naples for it, the practical questions are the same: how to get from the airport, how to reach your hotel, and how to get to the waterfront on race days — especially since part of the seafront road closes to traffic for the event.</p>

<h2 id="at-a-glance">Louis Vuitton America's Cup Naples 2026 at a Glance</h2>
<table>
  <thead><tr><th>Information</th><th>Details</th></tr></thead>
  <tbody>
    <tr><td>Event</td><td>Louis Vuitton 38th America's Cup — Preliminary Regatta Naples (PR2)</td></tr>
    <tr><td>Location</td><td>Naples, Italy — Gulf of Naples</td></tr>
    <tr><td>Dates</td><td>24–27 September 2026</td></tr>
    <tr><td>Race Village</td><td>Lungomare Caracciolo (Via Francesco Caracciolo), Rotonda Diaz – Mappatella Beach — free entry</td></tr>
    <tr><td>Main airport</td><td>Naples International Airport / Capodichino (NAP)</td></tr>
    <tr><td>Looking ahead</td><td>The full America's Cup Match is scheduled to start 10 July 2027, also in Naples</td></tr>
    <tr><td>Transportation</td><td>Private transfer, taxi, public transport</td></tr>
  </tbody>
</table>

<h2 id="how-to-get-there">How to Get to the America's Cup in Naples</h2>
<p>Naples Capodichino Airport (NAP) is the main gateway for the event — it's the city's only airport and just 7 km from the centre. From there, or from your hotel once you've arrived, the same basic options apply as for any Naples visit: <strong>taxi</strong>, available at the airport rank and around the city; <strong>public transport</strong>, workable if you're staying centrally and travelling light; and a <strong>pre-booked private transfer</strong>, arranged in advance at a fixed price for a direct, door-to-door journey. Walking is realistic once you're already near the Lungomare, but not as a way of covering the distance from the airport or a hotel further from the seafront.</p>
<p>None of these is automatically the right choice — a solo visitor staying near the waterfront may not need more than a short taxi ride, while a family, a group, or anyone arriving with luggage on a race day when part of the seafront is closed to traffic will generally find a pre-arranged transfer more predictable.</p>

<h2 id="airport-transfer">Naples Airport to the America's Cup</h2>
<p>Naples Capodichino sits about 7 km from the city centre, normally a 15–20 minute drive under typical traffic conditions — though this can vary, and race days may bring extra traffic near the waterfront specifically.</p>

<h3 id="private-transfer-airport">Private Transfer from Naples Airport</h3>
<p>A pre-booked private transfer from Naples Airport takes you directly to your hotel or, where access allows, toward the Lungomare Caracciolo area, without needing to find a taxi or navigate public transport with luggage after landing. The same applies in reverse for your departure — a return airport transfer can be booked in advance for the end of your stay.</p>

${cta("Landing at Naples Airport for the America's Cup? A private transfer can take you straight to your hotel.", "/services/airport-transfers", "See Airport Transfer Options")}

<h2 id="hotel-transfers">Naples Hotel to America's Cup Transfers</h2>
<p>Beyond the airport leg, the journeys that matter most during the event itself are <strong>hotel to the Lungomare Caracciolo area</strong> on race days, and the <strong>return trip</strong> afterwards — plus, on your arrival and departure days, the usual <strong>airport-to-hotel</strong> and <strong>hotel-to-airport</strong> transfers. Many visitors stay in central Naples, within reach of the seafront, though exact walking distance depends on your specific hotel. Because part of Via Francesco Caracciolo closes to traffic for the regatta, it's worth confirming your pickup and drop-off point in advance rather than assuming a driver can reach the road directly outside the Race Village on race days — see our <a href="/city/naples">Naples city guide</a> for more on getting around the city generally, or our <a href="/services/hotel-transfers">hotel transfer service</a> for how pre-booked hotel pickups work.</p>

<h2 id="private-chauffeur">Private Chauffeur Service for the America's Cup in Naples</h2>
<p>A private chauffeur is most useful for visitors who want their transportation settled in advance rather than arranged day to day — international visitors unfamiliar with Naples, families and couples who'd rather not manage taxis with children or luggage, and anyone with a tighter schedule around race days. The core of the service is straightforward: a pre-booked pickup at your airport or hotel, a direct door-to-door journey, and a return transfer arranged for whenever you need it, rather than found on the spot.</p>

<h2 id="group-transfers">Group Transfers for the Naples America's Cup</h2>
<p>Families, groups of friends, and visitors travelling together can book transportation as a group rather than splitting across separate taxis — useful for keeping everyone together and arriving at the same time, particularly on a race day when finding multiple taxis near a busy waterfront can take longer than expected. If you're travelling as a larger group, mention your passenger count and luggage when booking so appropriate transportation can be arranged.</p>

${cta("Planning transportation for the America's Cup with family or a group? Contact us about your trip.", "/contact", "Contact Us")}

<h2 id="event-day">Planning Transportation on Event Days</h2>
<p>The clearest verified access detail for Naples PR2 is that <strong>Via Francesco Caracciolo — the road running along the Race Village — closes to traffic for the regatta.</strong> That affects how close a vehicle can actually get you to the waterfront on race days, so it's worth planning around rather than assuming door-to-door access all the way to the Lungomare itself. Beyond that, general event-day sense applies: allow extra time for traffic near the seafront, confirm your exact pickup and drop-off point rather than a general area, and expect the area around the Race Village to be busier than usual, especially in the hours around each day's racing.</p>

<h2 id="planning-your-trip">Planning Your Naples America's Cup Trip</h2>
<p>A typical visit breaks down into a few distinct journeys:</p>
<ul>
  <li><strong>Arrival day</strong>: Naples Airport → your hotel</li>
  <li><strong>Race day(s)</strong>: Hotel → Lungomare Caracciolo / Race Village area</li>
  <li><strong>After racing</strong>: Race Village area → hotel</li>
  <li><strong>Departure day</strong>: Hotel → Naples Airport</li>
</ul>
<p>Booking each of these in advance — rather than deciding on the day — is particularly worthwhile here given the road closure on Via Francesco Caracciolo and the general increase in waterfront traffic during the event.</p>

<h2 id="practical-guide">Practical Transportation Guide</h2>
<table>
  <thead><tr><th>Journey</th><th>Possible options</th></tr></thead>
  <tbody>
    <tr><td>Naples Airport → Hotel</td><td>Private transfer, taxi, or public transport</td></tr>
    <tr><td>Naples Airport → Event area</td><td>Private transfer or taxi (confirm drop-off point given the Via Caracciolo closure)</td></tr>
    <tr><td>Hotel → Event area</td><td>Private transfer, taxi, or walking if your hotel is nearby</td></tr>
    <tr><td>Event area → Hotel</td><td>Pre-booked transfer or taxi</td></tr>
    <tr><td>Hotel → Naples Airport</td><td>Private transfer, taxi, or public transport</td></tr>
    <tr><td>Group transportation</td><td>Private vehicle, sized to passenger and luggage count</td></tr>
  </tbody>
</table>

<h2 id="booking-tips">Tips for Booking Your Naples America's Cup Transfer</h2>
<ul>
  <li><strong>Book in advance</strong> — demand for transportation is higher than usual during the event period.</li>
  <li><strong>Provide your flight details</strong> for airport pickups, so your arrival can be tracked.</li>
  <li><strong>Confirm your passenger count and luggage</strong> so the right vehicle is arranged.</li>
  <li><strong>Confirm your exact hotel name and address</strong> when booking.</li>
  <li><strong>Confirm your event-day destination</strong> — given the Via Caracciolo closure, agree on a realistic pickup/drop-off point in advance rather than assuming direct access to the Race Village.</li>
  <li><strong>Check official event access information</strong> closer to your travel dates, since road closures and access points can be adjusted by organisers.</li>
  <li><strong>Allow extra time for traffic</strong> near the waterfront on race days.</li>
  <li><strong>Arrange your return airport transfer in advance</strong> rather than leaving it until your departure day.</li>
</ul>

<h2 id="faqs">Frequently Asked Questions</h2>
<h3 id="faq-1">How do I get from Naples Airport to the America's Cup?</h3>
<p>Naples Capodichino Airport is about 7 km from the city centre, normally a 15–20 minute drive. A taxi, public transport, or a pre-booked private transfer can all get you from the airport to your hotel or, where access allows, toward the Lungomare Caracciolo area — a private transfer is the most predictable option if you're arriving with luggage or on a tighter schedule.</p>
<h3 id="faq-2">Where is the America's Cup event in Naples?</h3>
<p>The Naples Preliminary Regatta (24–27 September 2026) races in the Gulf of Naples, with the Race Village along the Lungomare Caracciolo, centred on Rotonda Diaz – Mappatella Beach. Entry to the Race Village is free.</p>
<h3 id="faq-3">Can I book a private transfer from Naples Airport?</h3>
<p>Yes. Private transfers can be pre-booked from Naples Capodichino Airport to your hotel, at a fixed price agreed in advance.</p>
<h3 id="faq-4">Can I book a transfer from my Naples hotel to the event?</h3>
<p>Yes — hotel-to-waterfront transfers can be booked for race days, along with the return journey afterwards. Given the Via Francesco Caracciolo closure during the regatta, it's worth confirming your exact drop-off point when booking.</p>
<h3 id="faq-5">Can I arrange a return transfer after the event?</h3>
<p>Yes. Both your return journey from the Race Village area to your hotel, and your later departure transfer to Naples Airport, can be booked in advance.</p>
<h3 id="faq-6">Can groups book private transportation for the America's Cup?</h3>
<p>Yes — families and groups travelling together can book transportation as a group rather than splitting across separate taxis, useful for arriving together on race days.</p>
<h3 id="faq-7">How early should I book a Naples America's Cup transfer?</h3>
<p>As early as your travel plans are confirmed, since demand for transportation is higher than usual during the event period — this applies to airport transfers, hotel-to-venue journeys, and your return trip alike.</p>

<p style="margin-top:32px;">Planning your Naples America's Cup transfer? <a href="/book-now">Request a quote</a> for your airport, hotel or event transportation, or <a href="/contact">contact us</a> if you're coordinating travel for a family or group.</p>
${related([
  { href: '/airport/naples', label: 'Naples Airport Guide' },
  { href: '/city/naples', label: 'Naples City Guide & Transfers' },
  { href: '/services/hotel-transfers', label: 'Hotel Transfers Across Italy' },
  { href: '/services/airport-transfers', label: 'Airport Transfers in Italy' },
  { href: '/route/naples-to-amalfi-coast-taxi', label: 'Naples to Amalfi Coast Transfer' },
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
