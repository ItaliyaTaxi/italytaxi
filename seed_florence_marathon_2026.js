/** Florence Marathon 2026 — marathon-weekend transfers (EN, lead-generation post).
 *
 *  Intent: booking, not a race guide. Every section maps one journey of the
 *  runner's weekend to the commercial page that sells it, and ends in a quote
 *  request. Cannibalization check: no existing post or page mentions the
 *  Florence Marathon / Firenze Marathon (grepped seeds, src and the live
 *  sitemap, Nov 2026).
 *
 *  Event facts verified against the organiser's official regulation
 *  (firenzemarathon.it/en/marathon-regulation/, checked 11 Nov 2026):
 *    - Sunday 29 November 2026, start 8:30 from Piazza Duomo; runners meet at
 *      the start area at 8:00; entry to the starting grids from 7:00.
 *    - 6-hour time limit for the 42.195 km.
 *    - Bib collection at the Marathon Expo, Stazione Leopolda (Viale Fratelli
 *      Rosselli, Porta al Prato): Fri 27 Nov 10:00–19:30, Sat 28 Nov 9:00–19:30.
 *    - Bag storage in Piazza Santa Maria Novella from 7:00.
 *    - The 10K Firenze Marathon runs the same day (organiser homepage).
 *  Road-closure times are NOT stated: the Comune publishes them close to the
 *  event, so the post defers to the official notice.
 *
 *  Journey times reuse the figures already published on this site
 *  (/airport/florence, /route/pisa-airport-to-florence-taxi,
 *  /route/bologna-to-florence-taxi, /route/rome-to-florence-taxi,
 *  /route/florence-to-milan-taxi, /route/florence-to-venice-taxi).
 *
 *  Service claims follow the confirmed policies only: quote usually within
 *  2–3 hours, written confirmation on acceptance, driver's number within 24
 *  hours before the transfer, ZTL access checked per address, minivans up to
 *  7 passengers (larger groups use more than one vehicle), night (22:00–06:00)
 *  and holiday surcharges shown in the quote, 60 min free waiting on
 *  international arrivals. No prices, no payment methods (only confirmed for
 *  Rome), no guarantees.
 *
 *  Run: node seed_florence_marathon_2026.js   (needs .env with the Supabase
 *  URL and service-role key, like the other seed scripts). */
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const SITE = 'https://www.italytaxiservice.com';
const SLUG = 'florence-marathon-2026-transfers';
const WHATSAPP = 'https://wa.me/923148932631?text=' + encodeURIComponent("Hi, I'd like a quote for Florence Marathon transfers (29 November 2026).");

const cta = (text, href = '/book-now', label = 'Request a Quote') => `
<div style="background:#0F1C2E;color:#fff;padding:28px 32px;border-radius:16px;margin:32px 0;">
  <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#e2e8f0;">${text}</p>
  <a href="${href}" style="display:inline-block;background:#c5a059;color:#0F1C2E;font-weight:700;padding:12px 26px;border-radius:999px;text-decoration:none;margin:0 12px 8px 0;">${label} →</a>
  <a href="${WHATSAPP}" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#25D366;color:#fff;font-weight:700;padding:12px 26px;border-radius:999px;text-decoration:none;margin:0 0 8px 0;">WhatsApp Us →</a>
</div>`;

const related = (links) => `
<div class="internal-links-block" style="background:#f8fafc;padding:28px;border-radius:16px;margin-top:40px;border:1px solid #e2e8f0;">
  <h3 style="margin-top:0;color:#0F1C2E;">Florence Transfers &amp; Services</h3>
  <ul style="margin-bottom:0;">
    ${links.map(l => `<li><a href="${l.href}" style="color:#c5a059;font-weight:600;">${l.label}</a></li>`).join('\n    ')}
  </ul>
</div>`;

// Event + the transfer service offered around it. The race is described with
// the organiser as organiser; Italy Taxi Service is only the transfer provider.
const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SportsEvent',
      '@id': `${SITE}/blog/${SLUG}#event`,
      name: 'Estra Firenze Marathon 2026',
      sport: 'Marathon',
      description: 'The Estra Firenze Marathon 2026: 42.195 km through the streets of Florence, starting from Piazza del Duomo on Sunday 29 November.',
      startDate: '2026-11-29T08:30:00+01:00',
      endDate: '2026-11-29',
      image: [`${SITE}/images/florence%20airport.webp`],
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: {
        '@type': 'Place',
        name: 'Piazza del Duomo',
        address: { '@type': 'PostalAddress', streetAddress: 'Piazza del Duomo', addressLocality: 'Firenze', addressRegion: 'Toscana', addressCountry: 'IT' },
      },
      organizer: { '@type': 'Organization', name: 'Firenze Marathon', url: 'https://www.firenzemarathon.it/' },
      url: 'https://www.firenzemarathon.it/en/home-en/',
    },
    {
      '@type': 'Service',
      '@id': `${SITE}/blog/${SLUG}#service`,
      name: 'Florence Marathon 2026 private transfers',
      serviceType: 'Private transfer with driver (NCC)',
      provider: { '@id': `${SITE}/#organization` },
      areaServed: { '@type': 'City', name: 'Florence' },
      audience: { '@type': 'Audience', audienceType: 'Marathon runners, supporters and running clubs' },
      url: `${SITE}/blog/${SLUG}`,
      description: 'Pre-booked private transfers for the Florence Marathon weekend: airport and station arrivals, the Marathon Expo at Stazione Leopolda, race-morning drop-off, post-race pickup, departures and city-to-city journeys from elsewhere in Italy. Fixed, all-inclusive quote before you travel.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Marathon weekend journeys',
        itemListElement: [
          'Airport or station to hotel',
          'Hotel to Marathon Expo (Stazione Leopolda) and back',
          'Race-morning hotel to start-area drop-off',
          'Post-race pickup back to the hotel',
          'Hotel to airport or station',
          'City-to-city transfer to Florence from elsewhere in Italy',
        ].map((n) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: n } })),
      },
    },
  ],
};

const enPost = {
  title: 'Florence Marathon 2026 Transfers: Airport, Expo & Race-Day Rides',
  slug: SLUG,
  category: 'Events',
  read_time: '7 min read',
  // The blog layout appends " | Italy Taxi Service" (21 chars) to seo_title.
  seo_title: 'Florence Marathon 2026 Transfers & Race-Day Rides',
  seo_description: 'Running the Florence Marathon on 29 Nov 2026? Private transfers for your airport arrival, the Expo, race morning and return. Fixed quote before you travel.',
  focus_keyword: 'florence marathon transfer',
  excerpt: 'Private transfers for the Florence Marathon weekend (27–29 November 2026): airport and station arrivals, the Expo, race morning, the ride back after the finish and your departure, with a fixed quote before you travel.',
  featured_image_url: '/images/florence airport.webp',
  language: 'en',
  content: `
<script type="application/ld+json">${JSON.stringify(schema)}</script>

<p><strong>We arrange private transfers for the whole Florence Marathon weekend: your arrival at Florence or Pisa airport or the station, the Expo at Stazione Leopolda, race morning on Sunday 29 November 2026, the ride back after you finish, and your departure.</strong> Send us your plans and we reply with a fixed, all-inclusive quote, usually within 2–3 hours, so the logistics are settled before you think about your race.</p>

<p>Runners coming from elsewhere in Italy can book a city-to-city transfer straight to their Florence hotel from Rome, Milan, Bologna, Venice or Pisa, and running clubs can book several vehicles around one schedule.</p>

${cta('Tell us your flight or train, hotel and race plans, and we will quote every journey of your marathon weekend in one reply.')}

<h2 id="race-weekend-dates">Florence Marathon 2026: the dates that shape your transfers</h2>
<table>
  <thead><tr><th>When</th><th>What happens</th><th>Transfer you may need</th></tr></thead>
  <tbody>
    <tr><td>Thu 26 – Sat 28 Nov</td><td>Most international runners arrive</td><td>Airport or station → hotel</td></tr>
    <tr><td>Fri 27 Nov, 10:00–19:30</td><td>Bib collection at the Marathon Expo, Stazione Leopolda (Viale Fratelli Rosselli, Porta al Prato)</td><td>Hotel → Expo → hotel</td></tr>
    <tr><td>Sat 28 Nov, 9:00–19:30</td><td>Bib collection, second and final day</td><td>Hotel → Expo → hotel</td></tr>
    <tr><td>Sun 29 Nov, from 7:00</td><td>Starting grids open; bag storage in Piazza Santa Maria Novella</td><td>Hotel → start-area drop-off</td></tr>
    <tr><td>Sun 29 Nov, 8:30</td><td>Marathon start from Piazza Duomo (6-hour time limit); the 10K runs the same morning</td><td>—</td></tr>
    <tr><td>Sun 29 Nov, after you finish</td><td>Finish area in the historic centre</td><td>Pickup back to your hotel, or straight to the airport or station</td></tr>
    <tr><td>Sun 29 – Mon 30 Nov</td><td>Departures</td><td>Hotel → airport or station</td></tr>
  </tbody>
</table>
<p>Race details come from the organiser's <a href="https://firenzemarathon.it/en/marathon-regulation/" target="_blank" rel="noopener noreferrer">official regulation</a>. Road closures for race day are published by the Comune di Firenze shortly before the event, and we plan every race-weekend pickup around them.</p>

<h2 id="marathon-weekend-transfers">Your marathon weekend transfers</h2>

<h3 id="arrival">1. Arrival: airport or station to your hotel</h3>
<p>Your driver tracks your flight and waits in arrivals with a name sign, with 60 minutes of free waiting time on international arrivals. From <a href="/airport/florence">Florence Airport (FLR)</a> the drive to the historic centre takes about 15–20 minutes. Flying into Pisa? The <a href="/route/pisa-airport-to-florence-taxi">Pisa Airport to Florence transfer</a> takes about 1 hour to 1 hour 15 minutes and goes straight to your hotel, with no train change carrying a race bag. For hotel-specific routes from both airports, see our <a href="/florence-transfer">Florence hotel transfers</a>.</p>
<p>Many central hotels sit inside Florence's ZTL. We check ZTL access for your hotel's exact address when you book; where a car can't enter, the driver stops at the nearest point a car can legally reach and helps with your luggage.</p>

<h3 id="expo">2. Marathon Expo at Stazione Leopolda (Friday or Saturday)</h3>
<p>You collect your bib at the Expo on Friday 27 or Saturday 28 November. A short private ride from your hotel to Stazione Leopolda and back keeps your legs fresh the day before the race, and it is easy to combine with your arrival: land, drop your bags at the hotel and go straight to the Expo, or ask your driver to stop at Leopolda on the way in from the airport.</p>

<h3 id="race-morning">3. Race morning: hotel to the start area</h3>
<p>The starting grids open at 7:00, runners gather at 8:00 and the race starts at 8:30 from Piazza Duomo, with bag storage in Piazza Santa Maria Novella. Streets around the course close for the race, so no vehicle can drive to the start line itself. We plan your pickup time and a drop-off at the nearest permitted point for your hotel and grid, based on the official closures. Pickups before 06:00 fall within our night window, and any night surcharge is shown in your quote before you book.</p>

<h3 id="after-the-finish">4. After the finish: the ride back to your hotel</h3>
<p>After 42 km, the last thing you want is a long walk with a medal and a heavy bag. Tell us your expected finish time, and we agree a meeting point just outside the closed area. If you finish later than planned, message your driver; any extended waiting is quoted in advance and only charged with your agreement. Heading home the same day? The driver can take you straight from the meeting point to the airport or station.</p>

<h3 id="departure">5. Departure: hotel to the airport or station</h3>
<p>Book your return with the rest of the weekend: hotel to <a href="/airport/florence">Florence Airport</a>, to <a href="/airport/pisa">Pisa Airport</a>, or to <a href="/route/santa-maria-novella-to-florence-airport-taxi">Santa Maria Novella station</a>. If you are flying out of Rome, Milan or Bologna, a city-to-city transfer takes you there directly (see the table below).</p>

<table>
  <thead><tr><th>Journey</th><th>Typical drive</th><th>Book it</th></tr></thead>
  <tbody>
    <tr><td>Florence Airport (FLR) → historic centre</td><td>15–20 min</td><td><a href="/airport/florence">Florence Airport transfers</a></td></tr>
    <tr><td>Florence Airport (FLR) → Santa Maria Novella</td><td>10–15 min</td><td><a href="/route/santa-maria-novella-to-florence-airport-taxi">SMN ↔ Florence Airport</a></td></tr>
    <tr><td>Pisa Airport (PSA) → Florence</td><td>about 1 h – 1 h 15</td><td><a href="/route/pisa-airport-to-florence-taxi">Pisa Airport to Florence</a></td></tr>
    <tr><td>Hotel ↔ Stazione Leopolda (Expo)</td><td>a short city ride</td><td><a href="/services/hotel-transfers">Hotel transfers</a></td></tr>
    <tr><td>Hotel → race start area / finish → hotel</td><td>planned around closures</td><td><a href="/florence-private-taxi">Florence private taxi</a></td></tr>
  </tbody>
</table>

${cta('Book your arrival, Expo, race-morning, post-race and departure rides together and get one quote for the whole weekend.', '/florence-private-taxi', 'Florence Private Taxi')}

<h2 id="from-elsewhere-in-italy">Coming from elsewhere in Italy</h2>
<p>If you live in Italy, a private transfer takes you from your door to your Florence hotel with your race kit, without a train change and without driving into a city where much of the centre is a limited-traffic zone. Because bibs are collected at the Expo on Friday 27 or Saturday 28 November, most runners travelling from elsewhere in Italy arrive by Saturday.</p>
<table>
  <thead><tr><th>From</th><th>To Florence by car</th><th>Book it</th></tr></thead>
  <tbody>
    <tr><td>Rome</td><td>about 3 hours (~277 km)</td><td><a href="/route/rome-to-florence-taxi">Rome to Florence transfer</a></td></tr>
    <tr><td>Bologna</td><td>about 1 hour 30 (~110 km)</td><td><a href="/route/bologna-to-florence-taxi">Bologna to Florence transfer</a></td></tr>
    <tr><td>Milan</td><td>about 3 h 15 – 3 h 30 (~300 km)</td><td><a href="/route/florence-to-milan-taxi">Florence ↔ Milan transfer</a></td></tr>
    <tr><td>Venice</td><td>about 3 h – 3 h 15 (~260 km)</td><td><a href="/route/florence-to-venice-taxi">Florence ↔ Venice transfer</a></td></tr>
    <tr><td>Pisa, Lucca, Siena and the rest of Tuscany</td><td>under 1 h 30</td><td><a href="/services/city-to-city">City-to-city transfers</a></td></tr>
  </tbody>
</table>
<p><strong>Running clubs and groups:</strong> our minivans take up to 7 passengers with luggage, and larger groups use more than one vehicle, coordinated around one arrival schedule. Send the list of runners, pickup points and times in one request and every leg comes back quoted together.</p>

<h2 id="supporters-and-recovery-day">For supporters and the day after</h2>
<p>Family and friends can book their own transfers to meet you at the finish meeting point, and a driver by the hour (<a href="/services/hourly-taxi">hourly hire</a>) suits a day of short trips around the city. If you are staying on, a recovery day out of town is an easy way to rest your legs: a <a href="/day-trips/florence-to-chianti-wine-tour">Chianti day trip</a> or a transfer to <a href="/route/florence-to-siena-taxi">Siena</a> with a driver who waits for you.</p>

<h2 id="how-to-book">How to book your Florence Marathon transfer</h2>
<ol>
  <li><strong>Send your details</strong> through the <a href="/book-now">booking form</a> or <a href="${WHATSAPP}" target="_blank" rel="noopener noreferrer">WhatsApp</a>: names, flight or train numbers, your hotel's full address, number of passengers and bags, and which journeys you need (arrival, Expo, race morning, post-race, departure).</li>
  <li><strong>Receive a fixed, all-inclusive quote</strong>, usually within 2–3 hours, covering tolls, fuel and parking. Any night (22:00–06:00) or holiday surcharge is shown in the quote before you book.</li>
  <li><strong>Accept and get a written confirmation</strong> with meeting instructions for each journey. Your driver's phone number is sent to you within 24 hours before each transfer.</li>
</ol>
<p>Race weekend is busy in Florence, so book as soon as your hotel and flights are confirmed.</p>

${cta('Ready to sort your Florence Marathon weekend? Request your quote now.')}

<h2 id="faqs">Frequently Asked Questions</h2>
<h3 id="faq-1">When and where is the Florence Marathon 2026?</h3>
<p>The Florence Marathon is on Sunday 29 November 2026. The race starts at 8:30 from Piazza Duomo, the starting grids open at 7:00 and the time limit is 6 hours. Bibs are collected at the Marathon Expo at Stazione Leopolda on Friday 27 and Saturday 28 November.</p>
<h3 id="faq-2">Can I book a private transfer from Florence Airport to my hotel for the marathon?</h3>
<p>Yes. Your driver tracks your flight, waits in arrivals with a name sign and takes you to your hotel, about 15–20 minutes from Florence Airport to the historic centre. We check ZTL access for your hotel's exact address when you book.</p>
<h3 id="faq-3">How do I get from Pisa Airport to Florence for the marathon?</h3>
<p>A private transfer from Pisa Airport to Florence takes about 1 hour to 1 hour 15 minutes and goes straight to your hotel, with no change between the PisaMover and the train while carrying your race bag.</p>
<h3 id="faq-4">Can a car take me to the start line on race morning?</h3>
<p>No vehicle can drive to the start line, because the streets around the course close for the race. We plan your pickup time and a drop-off at the nearest permitted point for your hotel and starting grid, based on the official closures published before race day.</p>
<h3 id="faq-5">Can I book a pickup after I finish the marathon?</h3>
<p>Yes. Tell us your expected finish time and we agree a meeting point just outside the closed area. The driver can take you back to your hotel or straight to the airport or station, and any extended waiting is quoted in advance and only charged with your agreement.</p>
<h3 id="faq-6">I live in Italy. Can you take me to Florence for the marathon?</h3>
<p>Yes. We run city-to-city transfers to Florence from Rome (about 3 hours), Bologna (about 1 hour 30), Milan, Venice, Pisa and the rest of Tuscany, straight to your hotel. Most runners arrive by Saturday, because bibs are collected at the Expo on Friday 27 or Saturday 28 November.</p>
<h3 id="faq-7">Can you transport a running club or a group of runners?</h3>
<p>Yes. Our minivans take up to 7 passengers with luggage, and larger groups use more than one vehicle, coordinated around one schedule. Send the runner list, pickup points and times in one request and every leg is quoted together.</p>
<h3 id="faq-8">How do I get a price for my marathon transfers?</h3>
<p>Send your flight or train, hotel address, passengers, bags and the journeys you need through the booking form or WhatsApp. We usually reply within 2–3 hours with a fixed, all-inclusive quote, and once you accept you receive a written confirmation.</p>

${related([
  { href: '/florence-private-taxi', label: 'Florence Private Taxi & Transfers' },
  { href: '/city/florence', label: 'Florence Taxi Service' },
  { href: '/airport/florence', label: 'Florence Airport (FLR) Transfers' },
  { href: '/airport/pisa', label: 'Pisa Airport (PSA) Transfers' },
  { href: '/route/pisa-airport-to-florence-taxi', label: 'Pisa Airport to Florence Transfer' },
  { href: '/florence-transfer', label: 'Florence Hotel Transfers' },
  { href: '/route/rome-to-florence-taxi', label: 'Rome to Florence Transfer' },
  { href: '/route/bologna-to-florence-taxi', label: 'Bologna to Florence Transfer' },
  { href: '/blog/reach-florence-hotel-inside-ztl-without-fines', label: 'Reaching a Florence Hotel Inside the ZTL' },
  { href: '/book-now', label: 'Request a Quote' },
])}
`,
};

async function run() {
  const env = Object.fromEntries(fs.readFileSync('.env', 'utf-8').split('\n').filter(l => l && !l.startsWith('#') && l.includes('=')).map(l => { const [k, ...v] = l.split('='); return [k.trim(), v.join('=').trim()]; }));
  const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

  const { data: exists } = await supabase.from('blogs').select('id').eq('slug', SLUG).maybeSingle();
  if (exists) { console.error(`A post with slug "${SLUG}" already exists — nothing inserted.`); process.exit(1); }

  const { data: author, error: aerr } = await supabase.from('bloggers').select('id').limit(1).single();
  if (aerr || !author) { console.error('No author found:', aerr); process.exit(1); }

  const { data, error } = await supabase
    .from('blogs')
    .insert({ ...enPost, status: 'published', author_id: author.id, published_at: new Date().toISOString(), tags: [] })
    .select('slug');
  if (error) { console.error('Insert error:', error); process.exit(1); }
  console.log('Inserted:', data);
  console.log(`Done — live at ${SITE}/blog/${SLUG} (allow up to an hour for the blog cache).`);
}

if (require.main === module) run();
module.exports = { enPost, SLUG };
