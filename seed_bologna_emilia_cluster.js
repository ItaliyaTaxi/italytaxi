/** Bologna & Emilia-Romagna SEO cluster — 10 new blogs, no overlap with existing 155 posts.
 *  Pillar (things to do) + airport guide + 4 day-trip guides (Ravenna, Modena, Parma, Rimini)
 *  + food guide + comparison + road-trip + landmark deep-dive. Cross-links to the new
 *  /bologna-transfer/* cluster, /airport/bologna-marconi, /city/bologna-taxi-service and
 *  each other. Run: node seed_bologna_emilia_cluster.js */
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

  // 1 ── Pillar: Bologna things to do ──────────────────────────────────────────
  {
    title: "Bologna Travel Guide: Best Things to Do in 2026",
    slug: "bologna-italy-travel-guide",
    category: "Destinations",
    read_time: "9 min read",
    seo_title: "Bologna Travel Guide: Best Things to Do in 2026",
    seo_description: "Planning a trip to Bologna? Our 2026 guide covers the best things to do, where to eat, day trips, getting around and how to reach the historic centre.",
    focus_keyword: "bologna italy travel guide",
    excerpt: "Bologna is Italy's most underrated city — porticoed, walkable and built around extraordinary food. Here's what to see, eat and do, plus how to reach the centre from the airport.",
    featured_image_url: "/images/Bologna.webp",
    content: `
<p>Bologna rarely tops a first-time visitor's Italy list, and that's exactly why it rewards those who go. Italians call it <strong>La Rossa</strong> (the red, for its terracotta rooftops), <strong>La Grassa</strong> (the fat one, for its food) and <strong>La Dotta</strong> (the learned, home to the oldest university in the Western world, founded in 1088). This <strong>Bologna travel guide</strong> covers the essential sights, the best day trips, where to eat, and how to get into the city from Bologna Marconi Airport.</p>

${cta("Landing at Bologna Marconi Airport? Skip the AerobusTrain and taxi queue — book a private, fixed-price transfer straight to your hotel door. Get a free quote.")}

<h2 id="why-bologna">Why Visit Bologna</h2>
<p>Bologna is compact, flat and almost entirely walkable, wrapped in Europe's largest network of covered porticoes — over 60 km of them, so you can cross the historic centre in the rain without opening an umbrella. It has the historic weight of Florence or Venice without the crowds, plus arguably Italy's best food scene, since this is the region that gave the world tortellini, tagliatelle al ragù, mortadella and Parmigiano Reggiano.</p>

<h2 id="top-things-to-do">Top Things to Do in Bologna</h2>
<ul>
  <li><strong>Piazza Maggiore &amp; Basilica di San Petronio</strong> — Bologna's grand central square, dominated by a basilica so large its façade was never finished; it's the fifth-biggest church in the world.</li>
  <li><strong>Le Due Torri (Two Towers)</strong> — the leaning Garisenda and the climbable Asinelli, which rewards almost 500 steps with a rooftop panorama over the city's red roofs.</li>
  <li><strong>Quadrilatero Market District</strong> — a tangle of medieval lanes behind Piazza Maggiore lined with butchers, cheesemongers and pasta shops; the best introduction to Bologna's food culture.</li>
  <li><strong>Portico di San Luca</strong> — a 3.8 km covered walk of nearly 700 arches climbing to a hilltop sanctuary with views over the city. See our full <a href="/blog/portico-di-san-luca-bologna-guide">Portico di San Luca walking guide</a>.</li>
  <li><strong>University Quarter (Via Zamboni)</strong> — Europe's oldest university district, full of student bars, the Archiginnasio's historic anatomical theatre, and the MAMbo modern art museum.</li>
  <li><strong>Fontana del Nettuno</strong> — Giambologna's 16th-century bronze Neptune fountain, just off Piazza Maggiore.</li>
</ul>

<h2 id="itinerary">A Simple One-Day Itinerary</h2>
<table>
  <thead><tr><th>Time</th><th>Plan</th></tr></thead>
  <tbody>
    <tr><td>Morning</td><td>Piazza Maggiore, Basilica di San Petronio, Fontana del Nettuno</td></tr>
    <tr><td>Late morning</td><td>Climb the Asinelli Tower, wander the Quadrilatero market</td></tr>
    <tr><td>Lunch</td><td>Tagliatelle al ragù or tortellini in brodo in the university quarter</td></tr>
    <tr><td>Afternoon</td><td>Via Zamboni, Archiginnasio, MAMbo or a walk up the Portico di San Luca</td></tr>
    <tr><td>Evening</td><td>Aperitivo in Piazza Santo Stefano, dinner in the old town</td></tr>
  </tbody>
</table>
<p>With two or three days, add a day trip — Bologna's location on the Via Emilia puts <a href="/blog/modena-day-trip-ferrari-museum">Modena</a>, <a href="/blog/parma-food-guide">Parma</a> and <a href="/blog/ravenna-day-trip-from-bologna">Ravenna</a> all within an hour's drive.</p>

<h2 id="where-to-eat">Where to Eat</h2>
<p>Bologna's food reputation isn't marketing — it's the birthplace of ragù alla bolognese (properly served with tagliatelle, not spaghetti), tortellini in brodo, lasagne alla bolognese and mortadella. We cover this in full in our <a href="/blog/bologna-food-guide-what-to-eat">Bologna food guide: what to eat in La Grassa</a>.</p>

<h2 id="getting-around">Getting Around &amp; Getting In</h2>
<p>The historic centre is flat and walkable, with almost everything reachable on foot from Piazza Maggiore. Like most Italian historic centres, it has a ZTL (limited-traffic zone) that restricts ordinary cars — licensed taxis and NCC drivers can still enter. Bologna Guglielmo Marconi Airport (BLQ) sits about 6 km northwest of the centre; see our full <a href="/blog/bologna-airport-blq-guide">Bologna Airport (BLQ) guide</a> for transfer options, or book a <a href="/bologna-transfer/bologna-airport-to-grand-hotel-majestic-gia-baglioni">private airport transfer</a> directly to your hotel.</p>

${cta("Make the most of Bologna without the transport hassle — fixed-price private transfers from the airport, day trips to Modena, Parma and Ravenna, and hotel-to-hotel rides across Emilia-Romagna. Request a quote.")}

<h2 id="faqs">Frequently Asked Questions</h2>
<h3 id="faq-1">Is Bologna worth visiting?</h3>
<p>Yes — Bologna combines a walkable, porticoed historic centre, the oldest university in the Western world, and Italy's best regional food scene, with far fewer crowds than Rome, Florence or Venice.</p>
<h3 id="faq-2">How many days do you need in Bologna?</h3>
<p>One full day covers the highlights around Piazza Maggiore and the university quarter. Two to three days lets you add a day trip to Modena, Parma or Ravenna, all under an hour away.</p>
<h3 id="faq-3">What is Bologna famous for?</h3>
<p>Food, above all — tortellini, tagliatelle al ragù and mortadella all originate here — plus its red terracotta rooftops, covered porticoes, and Europe's oldest university, founded in 1088.</p>
<h3 id="faq-4">Is Bologna walkable?</h3>
<p>Very. The historic centre is flat and compact, and over 60 km of covered porticoes mean you can walk between most sights without needing transport, rain or shine.</p>
<h3 id="faq-5">What's the best way to get from Bologna Airport to the city centre?</h3>
<p>The AerobusTrain people-mover reaches Bologna Centrale station in a few minutes, but requires a further taxi or walk with luggage. A private transfer takes you directly to your hotel door in about 15–20 minutes.</p>
${related([
  { href: '/blog/bologna-airport-blq-guide', label: 'Bologna Airport (BLQ) Guide' },
  { href: '/blog/bologna-food-guide-what-to-eat', label: 'Bologna Food Guide: What to Eat' },
  { href: '/blog/bologna-vs-florence', label: 'Bologna vs Florence: Which to Visit' },
  { href: '/airport/bologna-marconi', label: 'Bologna Marconi Airport Guide' },
  { href: '/city/bologna-taxi-service', label: 'Bologna City Transfers' },
  { href: '/book-now', label: 'Book a Bologna Airport Transfer' },
])}
`
  },

  // 2 ── Bologna Airport guide ─────────────────────────────────────────────────
  {
    title: "Bologna Airport (BLQ): Complete Transfer Guide",
    slug: "bologna-airport-blq-guide",
    category: "Airport Guides",
    read_time: "8 min read",
    seo_title: "Bologna Airport (BLQ): Complete Transfer Guide",
    seo_description: "Bologna Guglielmo Marconi Airport (BLQ) guide: how to get to the city centre, transfer times to Modena, Parma and Ravenna, and the fastest way to your hotel.",
    focus_keyword: "bologna airport blq guide",
    excerpt: "Everything you need to know about Bologna Guglielmo Marconi Airport (BLQ) — transfer options into the city, travel times to nearby destinations, and how to skip the queues.",
    featured_image_url: "/images/Bologna.jpg",
    content: `
<p>Bologna Guglielmo Marconi Airport (<strong>BLQ</strong>) is a compact, single-terminal airport about 6 km northwest of the historic centre — small enough to clear quickly, but far enough out that getting into the city needs a plan. This guide covers every transfer option from <strong>Bologna Airport</strong> and realistic travel times to the region's other highlights.</p>

${cta("Skip the AerobusTrain-plus-taxi combo — book a private transfer that meets you at arrivals and drives you straight to your hotel. Get a free quote.")}

<h2 id="about-blq">About Bologna Marconi Airport</h2>
<p>BLQ has a single passenger terminal with one compact arrivals hall, so there's no confusion about where to go. It handles both European and a growing number of long-haul routes, and works as a useful alternative gateway to northern Italy and Tuscany when Rome or Florence airports are pricier or busier. Give yourself around 2 hours before European departures and 3 hours before long-haul flights.</p>

<h2 id="transfer-options">Transfer Options From BLQ to the City</h2>
<table>
  <thead><tr><th>Option</th><th>Time</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>Private transfer</td><td>~15–20 min</td><td>Door-to-door, fixed price, no changes</td></tr>
    <tr><td>AerobusTrain + taxi/walk</td><td>~25–35 min total</td><td>People-mover to Bologna Centrale, then a further leg with luggage</td></tr>
    <tr><td>Airport taxi rank</td><td>~15–20 min</td><td>Metered, queue length varies</td></tr>
  </tbody>
</table>
<p>The AerobusTrain is a fast, cheap link to Bologna Centrale station, but it drops you at the station, not your hotel — with luggage, most travellers still need a taxi or a walk at the other end. A <a href="/bologna-transfer/bologna-airport-to-grand-hotel-majestic-gia-baglioni">private transfer</a> removes that extra step entirely.</p>

<h2 id="travel-times">Travel Times From BLQ to Emilia-Romagna Highlights</h2>
<table>
  <thead><tr><th>Destination</th><th>Approx. time</th></tr></thead>
  <tbody>
    <tr><td>Bologna city centre (Piazza Maggiore)</td><td>15–20 min</td></tr>
    <tr><td>Bologna Centrale station</td><td>12–18 min</td></tr>
    <tr><td>Modena (Ferrari Museum)</td><td>40–50 min</td></tr>
    <tr><td>Parma city centre</td><td>55–65 min</td></tr>
    <tr><td>Ravenna / Ravenna Cruise Port</td><td>65–80 min</td></tr>
    <tr><td>Florence city centre</td><td>~1 h 30 min</td></tr>
  </tbody>
</table>
<p>That range makes BLQ a genuinely useful base for exploring the whole region in one trip — see our <a href="/blog/emilia-romagna-road-trip">Emilia-Romagna road trip guide</a> for how to link them together.</p>

<h2 id="meet-and-greet">Meet &amp; Greet and Flight Monitoring</h2>
<p>Booking ahead means your driver tracks your flight and adjusts the pickup time automatically if it lands early or late, then waits in the arrivals area with a name sign — no scrambling to find transport after a long flight. This matters most on early-morning or late-night arrivals, when the AerobusTrain and taxi ranks are at their quietest.</p>

<h2 id="cruise-passengers">Flying In for a Cruise?</h2>
<p>BLQ is also a practical gateway for cruise passengers embarking from nearby <strong>Ravenna Cruise Port</strong>, about 75 km away. Rather than routing through the city centre, a direct transfer takes you from arrivals straight to the port — see our <a href="/bologna-transfer/bologna-airport-to-ravenna-cruise-port">Bologna Airport to Ravenna Cruise Port transfer</a>.</p>

${cta("Whether you're heading into Bologna or straight on to Ravenna, book a fixed-price private transfer from BLQ with flight monitoring included. Request your quote.")}

<h2 id="faqs">Frequently Asked Questions</h2>
<h3 id="faq-1">How far is Bologna Airport from the city centre?</h3>
<p>About 6 km, roughly a 15–20 minute drive depending on traffic — one of the shortest airport-to-centre distances of any major Italian city.</p>
<h3 id="faq-2">What is the fastest way from Bologna Airport to the city?</h3>
<p>A private transfer is the fastest door-to-door option, taking you directly to your hotel in about 15–20 minutes. The AerobusTrain people-mover is quick to the station but still requires a further taxi or walk with luggage.</p>
<h3 id="faq-3">How many terminals does Bologna Airport have?</h3>
<p>Just one, with a single compact arrivals hall — there's no terminal to choose, which makes meet-and-greet pickups straightforward.</p>
<h3 id="faq-4">Can I reach Modena or Parma from Bologna Airport without going into the city?</h3>
<p>Yes. A private transfer can drive straight from arrivals to Modena (about 40–50 minutes) or Parma (about 55–65 minutes) without a stop in central Bologna.</p>
<h3 id="faq-5">Is Bologna Airport a good gateway for Ravenna cruises?</h3>
<p>Yes — it's about 75 km and roughly 70–80 minutes from Ravenna's cruise port by road, making BLQ a practical fly-in option for an Adriatic cruise departure.</p>
${related([
  { href: '/airport/bologna-marconi', label: 'Bologna Marconi Airport Guide' },
  { href: '/bologna-transfer/bologna-airport-to-grand-hotel-majestic-gia-baglioni', label: 'Airport to Hotel Transfers' },
  { href: '/bologna-transfer/bologna-airport-to-ravenna-cruise-port', label: 'Airport to Ravenna Cruise Port' },
  { href: '/blog/bologna-italy-travel-guide', label: 'Bologna Travel Guide' },
  { href: '/services/airport-transfers', label: 'Airport Transfer Service' },
  { href: '/book-now', label: 'Book a Bologna Airport Transfer' },
])}
`
  },

  // 3 ── Ravenna day trip ──────────────────────────────────────────────────────
  {
    title: "Ravenna Day Trip from Bologna: Mosaics Guide",
    slug: "ravenna-day-trip-from-bologna",
    category: "Destinations",
    read_time: "8 min read",
    seo_title: "Ravenna Day Trip from Bologna: Mosaics Guide",
    seo_description: "Planning a Ravenna day trip from Bologna? See the UNESCO Byzantine mosaics, Dante's tomb and the best route, timing and transfer options for the day.",
    focus_keyword: "ravenna day trip from bologna",
    excerpt: "Ravenna's Byzantine mosaics are among Europe's greatest hidden treasures, and it's an easy day trip from Bologna. Here's what to see and the best way to get there.",
    featured_image_url: "/images/Bologna.webp",
    content: `
<p>Most visitors to Italy never make it to Ravenna, and that's the region's best-kept secret — this small city holds more surviving Byzantine mosaic art than anywhere else on Earth, eight monuments' worth, all UNESCO World Heritage listed. A <strong>Ravenna day trip from Bologna</strong> takes just over an hour each way and delivers one of Italy's most underrated sights.</p>

${cta("Skip the regional train changes — book a private day-trip transfer from Bologna to Ravenna with waiting time included. Get a free quote.")}

<h2 id="why-ravenna">Why Ravenna?</h2>
<p>Ravenna was once the capital of the Western Roman Empire, then the Ostrogothic Kingdom, then the Byzantine Exarchate — three consecutive imperial capitals packed into one small city, each leaving behind extraordinary mosaic-covered churches and mausoleums. It's also where Dante Alighieri died in exile in 1321 and remains buried, a point of quiet pilgrimage for Italian literature fans.</p>

<h2 id="what-to-see">What to See in Ravenna</h2>
<ul>
  <li><strong>Basilica di San Vitale</strong> — Ravenna's mosaic masterpiece, with the famous 6th-century portraits of Emperor Justinian and Empress Theodora in gold and jewel tones.</li>
  <li><strong>Mausoleo di Galla Placidia</strong> — a small, unassuming exterior hiding one of the most breathtaking mosaic-covered interiors in Europe; often visited on the same ticket as San Vitale.</li>
  <li><strong>Basilica di Sant'Apollinare Nuovo</strong> — long mosaic processions of saints and martyrs lining the nave, in the heart of the old town.</li>
  <li><strong>Dante's Tomb</strong> — a small neoclassical mausoleum near the Basilica di San Francesco, marking the exile-poet's final resting place.</li>
  <li><strong>Battistero Neoniano</strong> — Ravenna's oldest surviving monument, with a striking mosaic dome above the baptismal font.</li>
</ul>
<p>A combined ticket usually covers the main mosaic sites; plan on 3–4 hours to see the essentials without rushing.</p>

<h2 id="getting-there">Getting There from Bologna</h2>
<table>
  <thead><tr><th>Option</th><th>Time</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>Private transfer</td><td>~72–82 min direct</td><td>Door-to-door, flexible timing, waits while you sightsee</td></tr>
    <tr><td>Regional train</td><td>~1 h 15 – 1 h 30</td><td>Direct on some services; budget option</td></tr>
    <tr><td>Self-drive</td><td>~75 min</td><td>Via the A14 Adriatica motorway</td></tr>
  </tbody>
</table>
<p>The regional train is a perfectly workable budget option, but a private transfer via the A14 gives you a fixed schedule and someone to bring you straight back to your Bologna hotel afterwards, without watching a departures board.</p>

<h2 id="combine-with-cruise">Combining Ravenna with a Cruise</h2>
<p>Ravenna is also an Adriatic cruise port, so many visitors see the mosaics as part of an embarkation or disembarkation day rather than a pure day trip. If you're joining or leaving a ship, see our dedicated <a href="/bologna-transfer/bologna-city-centre-to-ravenna-cruise-port">Bologna to Ravenna Cruise Port transfer</a>, which can factor in time for the historic centre around your boarding window.</p>

<h2 id="road-trip">Part of a Bigger Trip?</h2>
<p>Ravenna pairs naturally with Modena and Parma if you have more than a couple of days in the region — see our <a href="/blog/emilia-romagna-road-trip">Emilia-Romagna road trip guide</a> for a route linking all three to Bologna.</p>

${cta("See Ravenna's Byzantine mosaics without the train timetable — book a private Bologna-to-Ravenna day-trip transfer that waits for you and drives you back. Request a quote.")}

<h2 id="faqs">Frequently Asked Questions</h2>
<h3 id="faq-1">Is Ravenna worth a day trip from Bologna?</h3>
<p>Yes — Ravenna's UNESCO-listed Byzantine mosaics, especially at the Basilica di San Vitale and the Mausoleo di Galla Placidia, are among the finest surviving in the world, and the city is under 90 minutes from Bologna.</p>
<h3 id="faq-2">How long does it take to get from Bologna to Ravenna?</h3>
<p>Around 70–90 minutes by car or private transfer via the A14 motorway, or roughly 75–90 minutes by regional train.</p>
<h3 id="faq-3">How much time do you need in Ravenna?</h3>
<p>Half a day (3–4 hours) covers the main mosaic sites comfortably; a full day allows a relaxed pace with lunch and Dante's tomb included.</p>
<h3 id="faq-4">Can I combine Ravenna with a cruise from the port?</h3>
<p>Yes — Ravenna is an Adriatic cruise port, and many visitors see the mosaics on their embarkation or disembarkation day. A transfer can be timed around your boarding window.</p>
<h3 id="faq-5">Is Ravenna near the beach?</h3>
<p>Yes — Marina di Ravenna and the wider Adriatic coast are about 15 minutes from the historic centre, a popular add-on for a longer visit.</p>
${related([
  { href: '/bologna-transfer/bologna-city-centre-to-ravenna-cruise-port', label: 'Bologna to Ravenna Cruise Port Transfer' },
  { href: '/services/cruise-port-transfers', label: 'Cruise Port Transfer Service' },
  { href: '/blog/emilia-romagna-road-trip', label: 'Emilia-Romagna Road Trip Guide' },
  { href: '/blog/bologna-italy-travel-guide', label: 'Bologna Travel Guide' },
  { href: '/city/bologna-taxi-service', label: 'Bologna City Transfers' },
  { href: '/book-now', label: 'Book a Ravenna Day Trip Transfer' },
])}
`
  },

  // 4 ── Modena day trip ───────────────────────────────────────────────────────
  {
    title: "Modena Day Trip: Ferrari Museum & Food Guide",
    slug: "modena-day-trip-ferrari-museum",
    category: "Destinations",
    read_time: "8 min read",
    seo_title: "Modena Day Trip: Ferrari Museum & Food Guide",
    seo_description: "Planning a Modena day trip from Bologna? Visit the Ferrari Museum, taste real balsamic vinegar, and see the UNESCO cathedral — full guide and travel times.",
    focus_keyword: "modena day trip from bologna",
    excerpt: "Ferraris, balsamic vinegar and a UNESCO-listed cathedral — Modena packs a lot into an easy day trip from Bologna. Here's what to see and how to get there.",
    featured_image_url: "/images/Bologna.jpg",
    content: `
<p>Modena sits just 40 minutes up the Via Emilia from Bologna, and punches wildly above its size: it's home to Ferrari, traditional balsamic vinegar aged for decades in wooden barrels, a UNESCO World Heritage cathedral, and — until his death in 2007 — Massimo Bottura's Osteria Francescana, repeatedly named the world's best restaurant. A <strong>Modena day trip from Bologna</strong> is one of the easiest and most rewarding in the region.</p>

${cta("Skip the regional train — book a private transfer from Bologna to Modena, timed around your Ferrari Museum visit or balsamic tasting. Get a free quote.")}

<h2 id="ferrari">The Ferrari Museums</h2>
<p>Modena is Ferrari's hometown, and car enthusiasts typically combine two sites: the <strong>Museo Enzo Ferrari</strong> in central Modena, built around the house where Enzo Ferrari was born, and the <strong>Museo Ferrari</strong> in nearby Maranello (about 20 minutes further south), next to the factory itself and home to the largest collection of historic and current Ferrari models. Both museums sell a combined ticket, and a shuttle bus connects the two sites if you're travelling without a driver.</p>

<h2 id="balsamic">Traditional Balsamic Vinegar</h2>
<p>What's sold as "balsamic vinegar" in most supermarkets bears little resemblance to <strong>Aceto Balsamico Tradizionale di Modena DOP</strong> — a protected product aged for a minimum of 12 years (often far longer) in a graduated battery of wooden barrels, in family-run acetaie around the city. Several producers offer tastings and tours by appointment, and it's worth booking one ahead if this is a priority for your visit.</p>

<h2 id="historic-centre">Modena's Historic Centre</h2>
<ul>
  <li><strong>Modena Cathedral (Duomo)</strong> — a UNESCO World Heritage Romanesque masterpiece, built from 1099, alongside the Ghirlandina bell tower.</li>
  <li><strong>Piazza Grande</strong> — the cathedral square, part of the same UNESCO listing and the social heart of the city.</li>
  <li><strong>Mercato Albinelli</strong> — a covered food market a short walk from the centre, good for a casual lunch of local specialties.</li>
</ul>

<h2 id="getting-there">Getting There from Bologna</h2>
<table>
  <thead><tr><th>Option</th><th>Time</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>Private transfer</td><td>~40–50 min</td><td>Door-to-door via the A1 motorway; can include Maranello</td></tr>
    <tr><td>Regional train</td><td>~25–35 min + local transport</td><td>Fast to Modena station, but the Ferrari museums are outside walking distance</td></tr>
    <tr><td>Self-drive</td><td>~40 min</td><td>Via the A1 motorway</td></tr>
  </tbody>
</table>
<p>The train is genuinely fast into Modena itself, but reaching both Ferrari museums (especially Maranello) without a car usually means a taxi or the museum shuttle at the other end — a private transfer avoids that extra leg and can wait while you visit.</p>

<h2 id="combine">Combine with Parma</h2>
<p>Modena and Parma sit on the same stretch of the Via Emilia, about 45 minutes apart, so many travellers see both in a single longer day or over two days. See our <a href="/blog/parma-food-guide">Parma food guide</a> and <a href="/blog/emilia-romagna-road-trip">Emilia-Romagna road trip guide</a> for how to combine them.</p>

${cta("See the Ferrari Museum and taste real balsamic vinegar without a rental car — book a private Bologna-to-Modena day trip transfer. Request a quote.")}

<h2 id="faqs">Frequently Asked Questions</h2>
<h3 id="faq-1">How far is Modena from Bologna?</h3>
<p>About 40–50 minutes by car or private transfer via the A1 motorway, or roughly 25–35 minutes by regional train to Modena's station.</p>
<h3 id="faq-2">Is the Ferrari Museum in Modena or Maranello?</h3>
<p>Both — the Museo Enzo Ferrari is in central Modena, while the larger Museo Ferrari sits beside the factory in Maranello, about 20 minutes further south. A combined ticket and shuttle bus connect them.</p>
<h3 id="faq-3">Can you taste real balsamic vinegar in Modena?</h3>
<p>Yes — several family-run acetaie around Modena offer tastings and tours of their aging barrels by appointment; traditional balsamic is aged a minimum of 12 years and is very different from supermarket versions.</p>
<h3 id="faq-4">Is Modena worth visiting besides the Ferrari Museum?</h3>
<p>Yes — its UNESCO-listed cathedral and Piazza Grande, plus its food market and balsamic producers, make Modena worthwhile even for non-car-enthusiasts.</p>
<h3 id="faq-5">Can I visit Modena and Parma in one day?</h3>
<p>It's possible with a private driver, since they're about 45 minutes apart, but it makes for a long day — most visitors prefer to split them across two day trips or a short road trip.</p>
${related([
  { href: '/blog/parma-food-guide', label: 'Parma Food Guide' },
  { href: '/blog/emilia-romagna-road-trip', label: 'Emilia-Romagna Road Trip Guide' },
  { href: '/blog/bologna-italy-travel-guide', label: 'Bologna Travel Guide' },
  { href: '/services/private-tours', label: 'Private Day Trips & Tours' },
  { href: '/city/bologna-taxi-service', label: 'Bologna City Transfers' },
  { href: '/book-now', label: 'Book a Modena Day Trip Transfer' },
])}
`
  },

  // 5 ── Parma food guide ──────────────────────────────────────────────────────
  {
    title: "Parma Food Guide: Parmesan, Ham & More",
    slug: "parma-food-guide",
    category: "Culinary Travel",
    read_time: "7 min read",
    seo_title: "Parma Food Guide: Parmesan, Ham & More",
    seo_description: "A food-lover's guide to Parma: where Parmigiano Reggiano and Prosciutto di Parma come from, dairy tours, what to eat, and how to get there from Bologna.",
    focus_keyword: "parma food guide",
    excerpt: "Parma gave the world Parmigiano Reggiano and Prosciutto di Parma. Here's where to taste them at the source, what else to eat, and how to get there from Bologna.",
    featured_image_url: "/images/Bologna.webp",
    content: `
<p>If Emilia-Romagna is Italy's food valley, Parma is its capital — a UNESCO Creative City of Gastronomy and the birthplace of two of Italy's most exported names: <strong>Parmigiano Reggiano</strong> and <strong>Prosciutto di Parma</strong>. This <strong>Parma food guide</strong> covers where to taste both at the source, what else to eat, and the easiest way to get there from Bologna.</p>

${cta("Taste Parmigiano Reggiano and Prosciutto di Parma where they're made — book a private day trip from Bologna to Parma with dairy and prosciutteria visits. Get a free quote.")}

<h2 id="parmigiano">Parmigiano Reggiano at the Source</h2>
<p>Real Parmigiano Reggiano is a protected DOP product made only in a defined zone around Parma, Reggio Emilia, Modena and parts of Bologna and Mantova, aged a minimum of 12 months (often 24, 36 or longer). Several working caseifici (dairies) around Parma open for tours, typically in the early morning when the day's cheese-making happens — you watch the curds formed and pressed into wheels, then taste wedges at different ages side by side. Booking ahead is essential, as most dairies work to a strict production schedule.</p>

<h2 id="prosciutto">Prosciutto di Parma</h2>
<p>The hills southeast of Parma, particularly around Langhirano, are Prosciutto di Parma's protected production zone — a specific combination of altitude, sea breeze and mountain air is credited with the ham's distinctive curing conditions. Producers here age legs for a minimum of 12 months in long, shuttered curing rooms, and several offer tastings and tours alongside the Parmigiano dairies, often bookable as a combined half-day itinerary.</p>

<h2 id="what-else-to-eat">What Else to Eat in Parma</h2>
<ul>
  <li><strong>Tortelli d'erbetta</strong> — pasta parcels filled with ricotta and greens, a Parma classic.</li>
  <li><strong>Culatello di Zibello</strong> — a prized, more delicate cured pork specialty from the nearby Po river plain.</li>
  <li><strong>Torta fritta / gnocco fritto</strong> — fried dough puffs served alongside cured meats and cheese, a Parma bar snack staple.</li>
</ul>

<h2 id="beyond-food">Beyond the Food</h2>
<p>Parma's historic centre is worth the trip on its own: the <strong>Parma Cathedral</strong> and adjoining <strong>Baptistery</strong> hold important medieval and Renaissance art, including Correggio's dome fresco in the cathedral, and the city is closely tied to composer Giuseppe Verdi, who was born nearby in Busseto. The <strong>Teatro Regio</strong> remains one of Italy's most respected opera houses.</p>

<h2 id="getting-there">Getting There from Bologna</h2>
<table>
  <thead><tr><th>Option</th><th>Time</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>Private transfer</td><td>~55–65 min</td><td>Door-to-door, can include dairy/prosciutteria stops en route</td></tr>
    <tr><td>Regional/high-speed train</td><td>~25–60 min</td><td>Fast into central Parma; producers outside town need onward transport</td></tr>
    <tr><td>Self-drive</td><td>~55 min</td><td>Via the A1 motorway</td></tr>
  </tbody>
</table>
<p>Since the best dairy and prosciutto tours are outside the town centre and only run at set morning times, a private transfer that can build in stops en route is usually more practical than public transport for a genuine food-focused day trip.</p>

${cta("Book a private day trip from Bologna to Parma, timed around a Parmigiano Reggiano dairy tour and a Prosciutto di Parma tasting. Request a quote.")}

<h2 id="faqs">Frequently Asked Questions</h2>
<h3 id="faq-1">How far is Parma from Bologna?</h3>
<p>About 55–65 minutes by car or private transfer via the A1 motorway, or as little as 25–60 minutes by train depending on the service.</p>
<h3 id="faq-2">Can you visit a Parmigiano Reggiano dairy near Parma?</h3>
<p>Yes — several working caseifici around Parma offer tours, usually in the early morning during production; booking ahead is essential.</p>
<h3 id="faq-3">Where does Prosciutto di Parma come from?</h3>
<p>The hills southeast of Parma, particularly around Langhirano, where the local climate is credited with the ham's distinctive curing conditions.</p>
<h3 id="faq-4">What is Parma known for besides food?</h3>
<p>Its UNESCO-recognised cathedral and baptistery with important medieval frescoes, its historic opera house, and its ties to composer Giuseppe Verdi.</p>
<h3 id="faq-5">Is Parma worth a day trip from Bologna?</h3>
<p>Yes — for food lovers especially, combining a dairy tour, a prosciutto tasting and Parma's historic centre makes for one of the most rewarding day trips in Emilia-Romagna.</p>
${related([
  { href: '/blog/modena-day-trip-ferrari-museum', label: 'Modena Day Trip: Ferrari Museum & Food' },
  { href: '/blog/bologna-food-guide-what-to-eat', label: 'Bologna Food Guide: What to Eat' },
  { href: '/blog/emilia-romagna-road-trip', label: 'Emilia-Romagna Road Trip Guide' },
  { href: '/services/private-tours', label: 'Private Day Trips & Tours' },
  { href: '/city/bologna-taxi-service', label: 'Bologna City Transfers' },
  { href: '/book-now', label: 'Book a Parma Day Trip Transfer' },
])}
`
  },

  // 6 ── Bologna food guide ────────────────────────────────────────────────────
  {
    title: "Bologna Food Guide: What to Eat in La Grassa",
    slug: "bologna-food-guide-what-to-eat",
    category: "Culinary Travel",
    read_time: "8 min read",
    seo_title: "Bologna Food Guide: What to Eat in La Grassa",
    seo_description: "What to eat in Bologna, Italy's food capital: real tagliatelle al ragù, tortellini in brodo, mortadella and where to find them in the Quadrilatero market.",
    focus_keyword: "what to eat in bologna",
    excerpt: "Bologna earned its nickname La Grassa — the fat one — honestly. Here's what to eat, where to find it, and the dishes tourists usually get wrong.",
    featured_image_url: "/images/Bologna.jpg",
    content: `
<p>Bologna's nickname, <strong>La Grassa</strong> ("the fat one"), is a badge of honour: this is the city that gave the world tortellini, tagliatelle al ragù, lasagne alla bolognese and mortadella. Knowing <strong>what to eat in Bologna</strong> — and what the locals actually call each dish — makes the difference between a good meal and a great one.</p>

${cta("Explore Bologna's food scene with a local private driver — day trips to Modena and Parma's producers, or simply door-to-door transfers so you can eat and drink without worrying about the walk home. Get a free quote.")}

<h2 id="ragu">Tagliatelle al Ragù (Not "Spaghetti Bolognese")</h2>
<p>The dish the rest of the world calls "spaghetti bolognese" doesn't really exist in Bologna. The authentic version is <strong>tagliatelle al ragù</strong> — flat egg pasta with a slow-cooked meat sauce of beef, soffritto, tomato and a splash of milk or wine, simmered for hours. The flat ribbons hold the sauce far better than spaghetti, which is why locals consider the spaghetti version a foreign invention.</p>

<h2 id="tortellini">Tortellini in Brodo</h2>
<p>Small pasta parcels filled with a mix of pork, prosciutto, mortadella and Parmigiano Reggiano, traditionally served <strong>in brodo</strong> — in a light meat broth, rather than with a sauce. It's the dish Bologna is proudest of, especially around Christmas, and you'll find versions ranging from home-style trattoria bowls to elaborate tasting-menu presentations.</p>

<h2 id="mortadella">Mortadella</h2>
<p>Bologna's namesake cold cut (mortadella is often called "baloney" abroad, a corruption of the city's name) is nothing like the mass-produced version found outside Italy — the real thing is a finely textured pork sausage studded with cubes of fat and often pistachios, best tried thinly sliced on its own or in a simple sandwich.</p>

<h2 id="more-dishes">More Bolognese Classics</h2>
<ul>
  <li><strong>Lasagne alla bolognese</strong> — layered with the same ragù, béchamel and Parmigiano, distinct from tomato-heavy versions found elsewhere in Italy.</li>
  <li><strong>Crescentine / tigelle</strong> — small fried or griddled breads, split and filled with cured meats and cheese.</li>
  <li><strong>Passatelli</strong> — breadcrumb, egg and Parmigiano dumplings, usually served in broth.</li>
</ul>

<h2 id="where-to-eat">Where to Eat It</h2>
<p>The <strong>Quadrilatero</strong>, the tangle of medieval lanes behind Piazza Maggiore, is Bologna's best introduction: butchers, cheesemongers and pasta shops sit alongside small bars for a quick lunch or aperitivo. For a sit-down meal, the streets around <strong>Via Zamboni</strong> and the university quarter mix student-friendly trattorie with more established osterie. See our full <a href="/blog/bologna-italy-travel-guide">Bologna travel guide</a> for how to fit food into a wider itinerary.</p>

<h2 id="beyond-bologna">Beyond Bologna: The Wider Food Region</h2>
<p>Bologna sits at the centre of a food region that also produces Parmigiano Reggiano and Prosciutto di Parma (see our <a href="/blog/parma-food-guide">Parma food guide</a>) and traditional balsamic vinegar around Modena (see our <a href="/blog/modena-day-trip-ferrari-museum">Modena day trip guide</a>) — all within an hour's drive, making Bologna an ideal base for a food-focused trip to Emilia-Romagna.</p>

${cta("Turn your Bologna trip into a full food itinerary — private day trips to Modena and Parma's producers, or door-to-door restaurant transfers around the city. Request a quote.")}

<h2 id="faqs">Frequently Asked Questions</h2>
<h3 id="faq-1">What is the traditional Bolognese pasta dish?</h3>
<p>Tagliatelle al ragù — flat egg pasta with a slow-cooked meat sauce. "Spaghetti bolognese" is not the traditional local version; tagliatelle is what you'll find in Bologna itself.</p>
<h3 id="faq-2">What is tortellini in brodo?</h3>
<p>Small filled pasta parcels served in a light meat broth rather than a sauce — considered Bologna's signature dish, especially popular at Christmas.</p>
<h3 id="faq-3">Is mortadella from Bologna the same as what's sold abroad?</h3>
<p>No — authentic mortadella is a finely textured pork sausage with visible fat cubes and often pistachios, quite different from mass-produced versions sold outside Italy under similar names.</p>
<h3 id="faq-4">Where is the best place to eat in Bologna?</h3>
<p>The Quadrilatero market district behind Piazza Maggiore is the best starting point, with the university quarter around Via Zamboni offering a wider range of sit-down trattorie and osterie.</p>
<h3 id="faq-5">Can I do a food day trip from Bologna?</h3>
<p>Yes — Modena (balsamic vinegar, Ferrari) and Parma (Parmigiano Reggiano, prosciutto) are both under an hour away and make excellent food-focused day trips from Bologna.</p>
${related([
  { href: '/blog/parma-food-guide', label: 'Parma Food Guide' },
  { href: '/blog/modena-day-trip-ferrari-museum', label: 'Modena Day Trip: Ferrari Museum & Food' },
  { href: '/blog/bologna-italy-travel-guide', label: 'Bologna Travel Guide' },
  { href: '/services/private-tours', label: 'Private Day Trips & Tours' },
  { href: '/city/bologna-taxi-service', label: 'Bologna City Transfers' },
  { href: '/book-now', label: 'Book a Bologna Food Tour Transfer' },
])}
`
  },

  // 7 ── Bologna vs Florence ───────────────────────────────────────────────────
  {
    title: "Bologna vs Florence: Which City Should You Visit?",
    slug: "bologna-vs-florence",
    category: "Comparison",
    read_time: "8 min read",
    seo_title: "Bologna vs Florence: Which City Should You Visit?",
    seo_description: "Bologna vs Florence: compare the food, crowds, cost, sights and travel time between the two Italian cities to decide which fits your trip — or how to see both.",
    focus_keyword: "bologna vs florence",
    excerpt: "Bologna and Florence are under an hour apart, yet feel like different worlds. Here's how they compare on food, crowds, sights and cost — and how to see both.",
    featured_image_url: "/images/Bologna.webp",
    content: `
<p>Bologna and Florence sit less than 40 minutes apart on the high-speed rail line, yet offer almost opposite travel experiences. Florence is Renaissance art and iconic crowds; Bologna is porticoed, food-driven and refreshingly uncrowded. Here's an honest <strong>Bologna vs Florence</strong> comparison to help decide which fits your trip — or how to fit in both.</p>

${cta("Combining Bologna and Florence? Book a private hotel-to-hotel transfer between them, no train changes or luggage on the platform. Get a free quote.")}

<h2 id="quick-comparison">Quick Comparison</h2>
<table>
  <thead><tr><th></th><th>Bologna</th><th>Florence</th></tr></thead>
  <tbody>
    <tr><td>Known for</td><td>Food, university life, porticoes</td><td>Renaissance art, architecture</td></tr>
    <tr><td>Crowds</td><td>Low — genuinely local feel</td><td>High, especially April–October</td></tr>
    <tr><td>Cost</td><td>Noticeably cheaper</td><td>Higher, especially accommodation</td></tr>
    <tr><td>Must-see sights</td><td>Piazza Maggiore, Due Torri, Quadrilatero</td><td>Uffizi, Duomo, Ponte Vecchio</td></tr>
    <tr><td>Best for</td><td>Food lovers, first-time-in-Italy repeat visitors</td><td>Art and architecture pilgrims</td></tr>
    <tr><td>Walkability</td><td>Flat, compact, covered porticoes</td><td>Compact but hillier at the edges</td></tr>
  </tbody>
</table>

<h2 id="food">Food</h2>
<p>This is Bologna's clearest win. It's the source of tagliatelle al ragù, tortellini in brodo and mortadella — genuinely different from, and arguably richer than, Tuscan cuisine's simpler grilled meats and bean-based dishes. See our full <a href="/blog/bologna-food-guide-what-to-eat">Bologna food guide</a> for specifics. Florence's food culture is excellent too — bistecca alla fiorentina, ribollita — but Bologna's reputation as Italy's food capital is well earned.</p>

<h2 id="art-and-history">Art &amp; History</h2>
<p>Florence wins decisively here. The Uffizi Gallery, the Duomo, the Accademia (home to Michelangelo's David) and Ponte Vecchio represent one of the highest concentrations of Renaissance art anywhere in the world. Bologna's historic core is genuinely beautiful and historically important — Europe's oldest university, medieval towers, an unfinished basilica larger than most cathedrals — but it doesn't compete with Florence's Renaissance masterpieces.</p>

<h2 id="crowds-and-cost">Crowds &amp; Cost</h2>
<p>Florence's historic centre can feel overwhelming in peak season, with queues at every major sight and accommodation prices to match. Bologna, despite being a genuinely major city, sees a fraction of the tourist traffic — you can walk into most restaurants without a reservation and find hotel rates noticeably lower for comparable quality.</p>

<h2 id="see-both">Seeing Both</h2>
<p>Given the short distance, many visitors don't have to choose. A high-speed train covers Bologna–Florence in around 35–40 minutes, ideal for a quick city-centre-to-city-centre hop with light luggage. For door-to-door travel with more bags, a family, or an early/late departure when trains are less frequent, a private transfer covers the roughly 110 km / 1 h 30 route directly — see our <a href="/route/bologna-to-florence-taxi">Bologna to Florence taxi transfer</a> and <a href="/route/florence-to-bologna-taxi">Florence to Bologna taxi transfer</a>.</p>

${cta("Seeing both Bologna and Florence on your trip? Book a direct, door-to-door private transfer between them — no station changes, luggage handled. Request a quote.")}

<h2 id="faqs">Frequently Asked Questions</h2>
<h3 id="faq-1">Is Bologna or Florence better to visit?</h3>
<p>It depends on your priorities: Florence for Renaissance art and iconic architecture, Bologna for food, a local feel and lower crowds. Given the short distance between them, many travellers visit both.</p>
<h3 id="faq-2">Is Bologna cheaper than Florence?</h3>
<p>Generally yes — accommodation and dining in Bologna are noticeably less expensive than in Florence, especially in peak season, without a meaningful drop in quality.</p>
<h3 id="faq-3">How far is Bologna from Florence?</h3>
<p>About 110 km, roughly 35–40 minutes by high-speed train or around 1 hour 30 minutes by car or private transfer.</p>
<h3 id="faq-4">Is Bologna worth visiting if I only have time for one Italian city besides Florence?</h3>
<p>Yes, especially for food lovers — Bologna offers a genuinely different experience from Florence's art-focused tourism, with far fewer crowds and famously good regional cuisine.</p>
<h3 id="faq-5">What's the best way to travel between Bologna and Florence?</h3>
<p>The high-speed train is fastest city-centre to city-centre. A private transfer is more convenient for families, groups, heavy luggage or early/late travel times.</p>
${related([
  { href: '/route/bologna-to-florence-taxi', label: 'Bologna to Florence Taxi Transfer' },
  { href: '/route/florence-to-bologna-taxi', label: 'Florence to Bologna Taxi Transfer' },
  { href: '/blog/bologna-italy-travel-guide', label: 'Bologna Travel Guide' },
  { href: '/blog/bologna-food-guide-what-to-eat', label: 'Bologna Food Guide: What to Eat' },
  { href: '/city/florence', label: 'Florence Travel Guide' },
  { href: '/book-now', label: 'Book a Bologna–Florence Transfer' },
])}
`
  },

  // 8 ── Emilia-Romagna road trip ──────────────────────────────────────────────
  {
    title: "Emilia-Romagna Road Trip: Bologna to the Coast",
    slug: "emilia-romagna-road-trip",
    category: "Travel Planning",
    read_time: "9 min read",
    seo_title: "Emilia-Romagna Road Trip: Bologna to the Coast",
    seo_description: "An Emilia-Romagna road trip itinerary from Bologna via Modena, Parma, Ravenna and Rimini — Ferrari country, balsamic vinegar, Byzantine mosaics and the beach.",
    focus_keyword: "emilia romagna road trip",
    excerpt: "From Ferrari country to Byzantine mosaics to the Adriatic coast, Emilia-Romagna packs an extraordinary range into a short route. Here's how to link it all from Bologna.",
    featured_image_url: "/images/Bologna.jpg",
    content: `
<p>Few Italian regions pack as much variety into as short a route as Emilia-Romagna. Starting in Bologna, an <strong>Emilia-Romagna road trip</strong> can take in Ferrari country, centuries-old balsamic vinegar and prosciutto producers, Byzantine mosaics, and an Adriatic beach resort — all within a couple of hours' drive of each other, largely following the ancient Roman Via Emilia.</p>

${cta("Skip the car rental and ZTL fines — book a private multi-stop transfer across Emilia-Romagna, with a driver who knows the region. Get a free quote.")}

<h2 id="the-route">The Route at a Glance</h2>
<table>
  <thead><tr><th>Stop</th><th>From Bologna</th><th>Highlight</th></tr></thead>
  <tbody>
    <tr><td>Modena</td><td>~40–50 min</td><td>Ferrari Museum, balsamic vinegar, UNESCO cathedral</td></tr>
    <tr><td>Parma</td><td>~55–65 min</td><td>Parmigiano Reggiano, Prosciutto di Parma, cathedral</td></tr>
    <tr><td>Ravenna</td><td>~70–80 min</td><td>UNESCO Byzantine mosaics, Dante's tomb</td></tr>
    <tr><td>Rimini</td><td>~1 h 10–1 h 20</td><td>Adriatic beaches, Roman heritage, San Marino nearby</td></tr>
  </tbody>
</table>
<p>Modena and Parma both sit along the Via Emilia to the northwest, while Ravenna and Rimini lie southeast toward the Adriatic coast — meaning most travellers pick a direction rather than attempting all four in one trip.</p>

<h2 id="motor-valley">Motor Valley: More Than Ferrari</h2>
<p>Emilia-Romagna is sometimes called Italy's "Motor Valley" — alongside Ferrari in Maranello, the region is also home to Lamborghini (Sant'Agata Bolognese), Pagani (San Cesario sul Panaro), Ducati motorcycles (Bologna) and Maserati (Modena). Enthusiasts can build an entire itinerary around factory museums within roughly an hour of Bologna. See our <a href="/blog/modena-day-trip-ferrari-museum">Modena day trip guide</a> for the Ferrari details.</p>

<h2 id="food-valley">Food Valley: The Via Emilia's Other Reputation</h2>
<p>The same stretch of road running through Modena and Parma is also Italy's most concentrated food-producing region — Parmigiano Reggiano, Prosciutto di Parma, traditional balsamic vinegar and Bologna's own tagliatelle and tortellini are all made within an hour of each other. See our <a href="/blog/parma-food-guide">Parma food guide</a> and <a href="/blog/bologna-food-guide-what-to-eat">Bologna food guide</a> for what to prioritise.</p>

<h2 id="coast">Toward the Coast: Ravenna and Rimini</h2>
<p>Head southeast instead, and the Via Emilia leads to the Adriatic. Ravenna offers some of Europe's finest surviving Byzantine mosaics (see our <a href="/blog/ravenna-day-trip-from-bologna">Ravenna day trip guide</a>), while Rimini is Emilia-Romagna's classic beach resort, with Roman ruins, a lively seafront and easy access to the microstate of San Marino (see our <a href="/blog/rimini-beach-guide">Rimini beach guide</a>).</p>

<h2 id="planning-tips">Planning Tips</h2>
<ul>
  <li>Base yourself in Bologna and take separate day trips rather than changing hotels each night — the whole region is within a 90-minute radius.</li>
  <li>Pick a direction: Motor Valley/Food Valley (Modena, Parma) to the northwest, or the coast (Ravenna, Rimini) to the southeast, rather than trying to combine both in one day.</li>
  <li>Book dairy, prosciutto and factory museum visits ahead — several run on fixed morning schedules.</li>
  <li>A private driver removes the logistics of parking, ZTL zones and multi-stop timing, letting you focus on the visits rather than the route.</li>
</ul>

${cta("Let a local driver handle the route — private day trips or multi-day itineraries across Emilia-Romagna's Motor Valley, Food Valley and Adriatic coast. Request a quote.")}

<h2 id="faqs">Frequently Asked Questions</h2>
<h3 id="faq-1">What is the best base for an Emilia-Romagna road trip?</h3>
<p>Bologna, thanks to its central location — Modena, Parma, Ravenna and Rimini are all within roughly 40–80 minutes, letting you take day trips without changing hotels.</p>
<h3 id="faq-2">Can I see Modena, Parma, Ravenna and Rimini all in one trip?</h3>
<p>Yes, but most travellers pick a direction per day: Modena and Parma to the northwest (Motor Valley and Food Valley), or Ravenna and Rimini to the southeast (mosaics and coast).</p>
<h3 id="faq-3">What is Emilia-Romagna's "Motor Valley"?</h3>
<p>A cluster of Italian car and motorcycle marques headquartered within about an hour of Bologna, including Ferrari, Lamborghini, Pagani, Ducati and Maserati.</p>
<h3 id="faq-4">Do I need a rental car for an Emilia-Romagna road trip?</h3>
<p>Not necessarily — a private driver can cover the same multi-stop route without the hassle of parking, ZTL zones or navigating unfamiliar roads, and can wait at each stop.</p>
<h3 id="faq-5">How long does an Emilia-Romagna road trip take?</h3>
<p>A rewarding trip can be done in 3–5 days based from Bologna, with one or two day trips northwest and one or two southeast toward the coast.</p>
${related([
  { href: '/blog/modena-day-trip-ferrari-museum', label: 'Modena Day Trip: Ferrari Museum & Food' },
  { href: '/blog/parma-food-guide', label: 'Parma Food Guide' },
  { href: '/blog/ravenna-day-trip-from-bologna', label: 'Ravenna Day Trip from Bologna' },
  { href: '/blog/rimini-beach-guide', label: "Rimini Beach Guide" },
  { href: '/services/city-to-city', label: 'City-to-City Transfers' },
  { href: '/book-now', label: 'Plan Your Emilia-Romagna Trip' },
])}
`
  },

  // 9 ── Rimini beach guide ────────────────────────────────────────────────────
  {
    title: "Rimini Beach Guide: Italy's Adriatic Riviera",
    slug: "rimini-beach-guide",
    category: "Destinations",
    read_time: "7 min read",
    seo_title: "Rimini Beach Guide: Italy's Adriatic Riviera",
    seo_description: "A Rimini beach guide: the best beach clubs, Roman ruins, Fellini's old town, day trips to San Marino, and how to get there from Bologna Airport.",
    focus_keyword: "rimini beach guide",
    excerpt: "Rimini pairs Roman ruins and a Fellini-famous old town with Italy's classic Adriatic beach-club culture. Here's how to plan a visit, plus how to reach it from Bologna.",
    featured_image_url: "/images/Bologna.webp",
    content: `
<p>Rimini is Italy's most famous Adriatic beach resort, and has been since the mid-20th century — but behind the beach clubs and seafront promenade is a genuinely historic town, with Roman monuments still standing after two thousand years and a UNESCO-relevant old centre. This <strong>Rimini beach guide</strong> covers both sides of the city, plus how to get there from Bologna.</p>

${cta("Heading to the Adriatic coast? Book a private transfer from Bologna Airport or the city centre straight to your Rimini hotel. Get a free quote.")}

<h2 id="the-beach">The Beach &amp; Bagni Culture</h2>
<p>Rimini's beachfront stretches for kilometres, organised into numbered "bagni" — private beach clubs, each with its own sunbeds, umbrellas, bars and often a restaurant, a distinctly Italian institution rather than public open sand. Renting a spot for the day (or the week) is the norm, and the bagni range from family-oriented and simple to stylish and see-and-be-seen. The season runs roughly June to September, with July and August at their busiest.</p>

<h2 id="old-town">Rimini's Roman Old Town</h2>
<ul>
  <li><strong>Ponte di Tiberio</strong> — a Roman bridge from the 1st century AD, still carrying traffic across the Marecchia river today.</li>
  <li><strong>Arco d'Augusto</strong> — Italy's oldest surviving Roman arch, marking the end of the Via Flaminia from Rome.</li>
  <li><strong>Tempio Malatestiano</strong> — an unfinished Renaissance masterpiece, originally a Gothic church remodelled for the Malatesta family.</li>
</ul>
<p>Rimini is also the birthplace of film director Federico Fellini, and the old town has embraced the connection with a dedicated museum and references throughout the city.</p>

<h2 id="san-marino">Day Trip: San Marino</h2>
<p>One of the world's oldest and smallest republics, the microstate of San Marino sits on a hilltop about 30 minutes inland from Rimini, with sweeping Adriatic views from its medieval fortress towers. It's a popular half-day add-on to a Rimini beach stay, easily reached by car or private transfer.</p>

<h2 id="getting-there">Getting There from Bologna</h2>
<table>
  <thead><tr><th>Option</th><th>Time</th><th>Notes</th></tr></thead>
  <tbody>
    <tr><td>Private transfer</td><td>~1 h 10–1 h 20</td><td>Door-to-door from the airport or Bologna city centre</td></tr>
    <tr><td>Train</td><td>~1 h – 1 h 20</td><td>Direct services from Bologna Centrale</td></tr>
    <tr><td>Self-drive</td><td>~1 h 10</td><td>Via the A14 Adriatica motorway</td></tr>
  </tbody>
</table>
<p>Rimini also has its own airport, but many travellers use Bologna as the gateway thanks to its wider flight network — a private transfer avoids a train change with beach luggage. See our <a href="/blog/bologna-airport-blq-guide">Bologna Airport guide</a> for arrival details.</p>

${cta("Book a private transfer from Bologna to Rimini — direct from the airport or the city, with room for beach bags and family gear. Request a quote.")}

<h2 id="faqs">Frequently Asked Questions</h2>
<h3 id="faq-1">How far is Rimini from Bologna?</h3>
<p>About 1 hour 10 to 1 hour 20 minutes by car or private transfer via the A14 motorway, or a similar time by direct train from Bologna Centrale.</p>
<h3 id="faq-2">What are "bagni" in Rimini?</h3>
<p>Numbered private beach clubs along Rimini's seafront, each offering sunbeds, umbrellas and often a bar or restaurant — the standard way to enjoy the beach in Italy, rather than open public sand.</p>
<h3 id="faq-3">Is Rimini more than just a beach resort?</h3>
<p>Yes — its old town holds genuine Roman monuments including a still-used 1st-century bridge and Italy's oldest surviving Roman arch, plus ties to film director Federico Fellini.</p>
<h3 id="faq-4">Can I visit San Marino from Rimini?</h3>
<p>Yes — the microstate of San Marino sits about 30 minutes inland and is a popular half-day trip from Rimini.</p>
<h3 id="faq-5">What is the best way to reach Rimini from Bologna Airport?</h3>
<p>A private transfer takes you directly from arrivals to your Rimini hotel in around 1 hour 10–20 minutes, avoiding a train change with luggage.</p>
${related([
  { href: '/blog/bologna-airport-blq-guide', label: 'Bologna Airport (BLQ) Guide' },
  { href: '/blog/emilia-romagna-road-trip', label: 'Emilia-Romagna Road Trip Guide' },
  { href: '/blog/ravenna-day-trip-from-bologna', label: 'Ravenna Day Trip from Bologna' },
  { href: '/services/airport-transfers', label: 'Airport Transfer Service' },
  { href: '/services/city-to-city', label: 'City-to-City Transfers' },
  { href: '/book-now', label: 'Book a Bologna to Rimini Transfer' },
])}
`
  },

  // 10 ── Portico di San Luca ──────────────────────────────────────────────────
  {
    title: "Portico di San Luca: Bologna's Iconic Walk",
    slug: "portico-di-san-luca-bologna-guide",
    category: "Travel Guide",
    read_time: "7 min read",
    seo_title: "Portico di San Luca: Bologna's Iconic Walk",
    seo_description: "The Portico di San Luca is the world's longest portico. A complete guide to walking Bologna's 3.8km covered arcade to the hilltop sanctuary, with tips.",
    focus_keyword: "portico di san luca",
    excerpt: "Bologna's Portico di San Luca stretches 3.8km up a hillside to a sanctuary with sweeping city views. Here's how to walk it, what to expect, and where it starts.",
    featured_image_url: "/images/Bologna.jpg",
    content: `
<p>Bologna is famous for its 60+ km of covered porticoes, but one stands above the rest — literally. The <strong>Portico di San Luca</strong> is the longest portico in the world, a continuous covered arcade of nearly 700 arches stretching 3.8 km from the edge of the city up to a hilltop sanctuary. It's one of Bologna's defining experiences, and this guide covers how to walk it.</p>

${cta("Staying near the start of the Portico di San Luca? Book a private airport or city transfer straight to your hotel in the Porta Saragozza area. Get a free quote.")}

<h2 id="what-is-it">What Is the Portico di San Luca?</h2>
<p>Built between 1674 and 1793, the portico was constructed to shelter a religious procession carrying an icon of the Madonna down from the hillside sanctuary to Bologna's cathedral each year — a tradition still observed today. Recognised by UNESCO as part of Bologna's "Portici" World Heritage listing, it climbs steadily from Porta Saragozza at the edge of the historic centre to the <strong>Santuario della Madonna di San Luca</strong> on the Colle della Guardia hill.</p>

<h2 id="the-walk">Walking the Portico</h2>
<ul>
  <li><strong>Distance:</strong> about 3.8 km one way, with roughly 666 arches.</li>
  <li><strong>Elevation gain:</strong> around 200 metres, entirely covered — a genuine benefit in both summer sun and Bologna's occasional rain.</li>
  <li><strong>Time:</strong> most walkers take 45–75 minutes up, depending on pace and photo stops.</li>
  <li><strong>Difficulty:</strong> a steady, moderate incline rather than steep steps — manageable for most fitness levels, with benches along the way to rest.</li>
</ul>
<p>The arcade starts near <strong>Porta Saragozza</strong>, a short walk or transfer from central Bologna, and the route is entirely on foot — no vehicles use the portico itself.</p>

<h2 id="the-sanctuary">The Sanctuary at the Top</h2>
<p>The Santuario della Madonna di San Luca crowns the walk with a Baroque church housing the Byzantine icon at the centre of Bologna's annual procession, and — the real reward for the climb — a terrace with sweeping views over the city's red rooftops and, on a clear day, the plain stretching toward the Apennines.</p>

<h2 id="tips">Practical Tips</h2>
<ul>
  <li>Go early morning or late afternoon in summer to avoid the midday heat, even though the portico is covered.</li>
  <li>Wear comfortable shoes — it's a long walk, even if not a technically difficult one.</li>
  <li>A small shuttle bus service ("San Luca Express") runs on weekends and holidays for those who'd rather ride up and walk down, or vice versa.</li>
  <li>Combine it with the rest of Bologna's historic centre — see our full <a href="/blog/bologna-italy-travel-guide">Bologna travel guide</a> for a wider itinerary.</li>
</ul>

<h2 id="where-to-stay">Staying Near the Start</h2>
<p>A handful of Bologna hotels sit right at the foot of the climb near Porta Saragozza, offering a quieter, more residential base than the station or Piazza Maggiore hotels — ideal if an early San Luca walk is a priority. See our <a href="/bologna-transfer/hotel-porta-san-mamolo-to-bologna-airport">Hotel Porta San Mamolo airport transfer</a> for an example of a property right by the portico's start.</p>

${cta("Book a private transfer to your Bologna hotel near Porta Saragozza and the Portico di San Luca — direct from the airport, no station changes. Request a quote.")}

<h2 id="faqs">Frequently Asked Questions</h2>
<h3 id="faq-1">How long is the Portico di San Luca?</h3>
<p>About 3.8 km one way, with roughly 666 arches, making it the longest portico in the world.</p>
<h3 id="faq-2">How long does it take to walk the Portico di San Luca?</h3>
<p>Most walkers take 45–75 minutes to reach the top, depending on pace, with a steady but manageable incline throughout.</p>
<h3 id="faq-3">Where does the Portico di San Luca start?</h3>
<p>Near Porta Saragozza, at the southwestern edge of Bologna's historic centre, a short walk or transfer from Piazza Maggiore.</p>
<h3 id="faq-4">Is there transport up the Portico di San Luca?</h3>
<p>A weekend and holiday shuttle bus ("San Luca Express") is available for those who prefer not to walk the full distance in one direction.</p>
<h3 id="faq-5">What is at the top of the Portico di San Luca?</h3>
<p>The Santuario della Madonna di San Luca, a Baroque sanctuary with a terrace offering sweeping views over Bologna and the surrounding plain.</p>
${related([
  { href: '/blog/bologna-italy-travel-guide', label: 'Bologna Travel Guide' },
  { href: '/bologna-transfer/hotel-porta-san-mamolo-to-bologna-airport', label: 'Hotel Porta San Mamolo Airport Transfer' },
  { href: '/city/bologna-taxi-service', label: 'Bologna City Transfers' },
  { href: '/airport/bologna-marconi', label: 'Bologna Marconi Airport Guide' },
  { href: '/services/hotel-transfers', label: 'Hotel Transfer Service' },
  { href: '/book-now', label: 'Book a Bologna Transfer' },
])}
`
  },

];

async function seed() {
  const { data: author, error: aerr } = await supabase.from('bloggers').select('id').limit(1).single();
  if (aerr || !author) { console.error('No author found.'); return; }
  let ok = 0;
  for (const post of posts) {
    const { error } = await supabase.from('blogs').upsert(
      { ...post, status: 'published', author_id: author.id, published_at: new Date().toISOString() },
      { onConflict: 'slug' });
    if (error) console.error(`✗ ${post.title}:`, error.message);
    else { ok++; console.log(`✓ Seeded: ${post.title}`); }
  }
  console.log(`\nDone. ${ok}/${posts.length} Bologna & Emilia-Romagna cluster posts seeded.`);
}
seed();
