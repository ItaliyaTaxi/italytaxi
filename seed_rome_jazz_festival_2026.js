/** Roma Jazz Festival 2026 — concert transfers (EN, lead-generation post).
 *
 *  Intent: booking, not an event guide. Each section is one journey around a
 *  concert night (airport arrival, hotel → venue, the ride back after the
 *  encore, the two out-of-town concerts, departure), linked to the page that
 *  sells it and ending in a quote request. Cannibalization check: no existing
 *  post or page mentions the Roma/Rome Jazz Festival (Nov 2026).
 *
 *  Event facts verified on the organiser's site (romajazzfestival.it — the
 *  programme page and each concert page, checked 12 Nov 2026) and Turismo
 *  Roma: 50th edition, 1–24 November 2026, "Rereading Miles, Rethinking
 *  Jazz" (Miles Davis / John Coltrane centenaries). Remaining dates, times
 *  and venues are taken from the individual concert pages. Where the
 *  programme lists two 22 November concerts without an unambiguous time in
 *  our extraction, no time is stated. Programme subject to change — the post
 *  says so and links the official programme.
 *
 *  Journey times reuse figures already published on this site
 *  (/rome-airport-transfer: FCO 40–55 min, CIA 30–40 min; Rome–Florence ~3 h;
 *  Rome–Naples ~2.5 h). No time is invented for Rieti / Fossanova.
 *  Service claims: confirmed policies only (quote within 2–3 h, written
 *  confirmation, driver's number within 24 h before, ZTL checked per address,
 *  minivans up to 7, night 22:00–06:00 surcharge shown in the quote, 60 min
 *  free waiting on international arrivals). No prices, payment methods or
 *  guarantees.
 *
 *  Run: node seed_rome_jazz_festival_2026.js */
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const SITE = 'https://www.italytaxiservice.com';
const SLUG = 'rome-jazz-festival-2026-transfers';
const PROGRAMME = 'https://romajazzfestival.it/programma/';
const WHATSAPP = 'https://wa.me/923148932631?text=' + encodeURIComponent("Hi, I'd like a quote for Roma Jazz Festival transfers (November 2026).");

const cta = (text, href = '/book-now', label = 'Request a Quote') => `
<div style="background:#0F1C2E;color:#fff;padding:28px 32px;border-radius:16px;margin:32px 0;">
  <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#e2e8f0;">${text}</p>
  <a href="${href}" style="display:inline-block;background:#c5a059;color:#0F1C2E;font-weight:700;padding:12px 26px;border-radius:999px;text-decoration:none;margin:0 12px 8px 0;">${label} →</a>
  <a href="${WHATSAPP}" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#25D366;color:#fff;font-weight:700;padding:12px 26px;border-radius:999px;text-decoration:none;margin:0 0 8px 0;">WhatsApp Us →</a>
</div>`;

const related = (links) => `
<div class="internal-links-block" style="background:#f8fafc;padding:28px;border-radius:16px;margin-top:40px;border:1px solid #e2e8f0;">
  <h3 style="margin-top:0;color:#0F1C2E;">Rome Transfers &amp; Services</h3>
  <ul style="margin-bottom:0;">
    ${links.map(l => `<li><a href="${l.href}" style="color:#c5a059;font-weight:600;">${l.label}</a></li>`).join('\n    ')}
  </ul>
</div>`;

const place = (name, addressLocality, streetAddress) => ({ '@type': 'Place', name, address: { '@type': 'PostalAddress', ...(streetAddress ? { streetAddress } : {}), addressLocality, addressCountry: 'IT' } });

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Festival',
      '@id': `${SITE}/blog/${SLUG}#event`,
      name: 'Roma Jazz Festival 2026 (50th edition)',
      description: 'The 50th Roma Jazz Festival, "Rereading Miles, Rethinking Jazz", marking the Miles Davis centenary.',
      startDate: '2026-11-01',
      endDate: '2026-11-24',
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      location: [
        place('Auditorium Parco della Musica "Ennio Morricone"', 'Roma', 'Viale Pietro de Coubertin'),
        place('Casa del Jazz', 'Roma', 'Viale di Porta Ardeatina'),
        place('Alcazar', 'Roma'),
      ],
      url: 'https://romajazzfestival.it/',
    },
    {
      '@type': 'Service',
      '@id': `${SITE}/blog/${SLUG}#service`,
      name: 'Roma Jazz Festival 2026 private transfers',
      serviceType: 'Private transfer with driver (NCC)',
      provider: { '@id': `${SITE}/#organization` },
      areaServed: { '@type': 'City', name: 'Rome' },
      audience: { '@type': 'Audience', audienceType: 'Concert-goers and jazz travellers' },
      url: `${SITE}/blog/${SLUG}`,
      description: 'Pre-booked private transfers for Roma Jazz Festival concerts: airport arrivals, hotel to the Auditorium, Casa del Jazz or Alcazar, the ride back after the concert, out-of-town concerts in Rieti and at Fossanova Abbey, and departures. Fixed, all-inclusive quote before you travel.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Concert-night journeys',
        itemListElement: [
          'Rome airport (Fiumicino or Ciampino) to hotel',
          'Hotel to concert venue',
          'Return ride after the concert',
          'Out-of-town concert transfer with return (Rieti, Fossanova Abbey)',
          'Hotel to airport or station',
          'City-to-city transfer to Rome from elsewhere in Italy',
        ].map((n) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: n } })),
      },
    },
  ],
};

const enPost = {
  title: 'Rome Jazz Festival 2026 Transfers: Airport, Hotel & Concert Rides',
  slug: SLUG,
  category: 'Events',
  read_time: '6 min read',
  // The blog layout appends " | Italy Taxi Service" (21 chars).
  seo_title: 'Rome Jazz Festival 2026 Transfers & Concert Rides',
  seo_description: 'Going to the Roma Jazz Festival (to 24 Nov 2026)? Private transfers from the airport, to the Auditorium or Casa del Jazz and back after the show. Fixed quote.',
  focus_keyword: 'rome jazz festival transfer',
  excerpt: 'Private transfers for the 50th Roma Jazz Festival (to 24 November 2026): airport arrivals, hotel to the Auditorium, Casa del Jazz or Alcazar, the ride back after the concert, and the out-of-town concerts in Rieti and at Fossanova Abbey.',
  featured_image_url: '/images/rome airport.webp',
  language: 'en',
  content: `
<script type="application/ld+json">${JSON.stringify(schema)}</script>

<p><strong>We arrange private transfers for the 50th Roma Jazz Festival, which runs until Tuesday 24 November 2026: your arrival at Fiumicino or Ciampino, the ride from your hotel to the Auditorium Parco della Musica, the Casa del Jazz or the Alcazar, the ride back after the concert, and the two out-of-town concerts in Rieti and at Fossanova Abbey.</strong> Send us your concert dates and hotel, and we reply with a fixed, all-inclusive quote, usually within 2–3 hours.</p>

<p>Evening concerts mostly start at 19:30–21:00 and finish late. A pre-booked car means your driver is waiting when the music ends, instead of you looking for a ride home across the city at night.</p>

${cta('Tell us which concerts you have tickets for and where you are staying, and we will quote every ride in one reply.')}

<h2 id="remaining-concerts">Roma Jazz Festival 2026: remaining concerts and the ride you need</h2>
<table>
  <thead><tr><th>Date</th><th>Concert</th><th>Venue</th><th>Transfer</th></tr></thead>
  <tbody>
    <tr><td>Fri 13 Nov, 19:30</td><td>Eleonora Strino Trio</td><td>Casa del Jazz</td><td>Hotel → Casa del Jazz → hotel</td></tr>
    <tr><td>Sat 14 Nov, 19:30</td><td>Nexus Quartet</td><td>Casa del Jazz</td><td>Hotel → Casa del Jazz → hotel</td></tr>
    <tr><td>Sun 15 Nov, 18:00</td><td>Rieti Jazz Orchestra (Coltrane, A Love Supreme)</td><td>Chiesa di San Domenico, Rieti</td><td>Rome → Rieti and back, driver waits</td></tr>
    <tr><td>Mon 16 Nov, 20:00</td><td>Enzo Favata</td><td>Auditorium, Sala Petrassi</td><td>Hotel → Auditorium → hotel</td></tr>
    <tr><td>Tue 17 Nov, 20:00</td><td>Erik Truffaz &amp; Antonio Lizana</td><td>Auditorium, Sala Petrassi</td><td>Hotel → Auditorium → hotel</td></tr>
    <tr><td>Wed 18 Nov, 20:00</td><td>Gregory Hutchinson</td><td>Auditorium, Sala Petrassi</td><td>Hotel → Auditorium → hotel</td></tr>
    <tr><td>Thu 19 Nov, 20:00</td><td>CDJO Casa del Jazz Orchestra</td><td>Auditorium, Sala Petrassi</td><td>Hotel → Auditorium → hotel</td></tr>
    <tr><td>Fri 20 Nov, 21:00</td><td>Omasta</td><td>Alcazar, Trastevere</td><td>Hotel → Alcazar → hotel</td></tr>
    <tr><td>Sat 21 Nov, 20:00</td><td>Jeremy Pelt Quintet</td><td>Auditorium, Teatro Studio Borgna</td><td>Hotel → Auditorium → hotel</td></tr>
    <tr><td>Sun 22 Nov, 11:00</td><td>Fiabe Jazz "I Musicanti di Brema" (for families)</td><td>Auditorium, Teatro Studio Borgna</td><td>Hotel → Auditorium → hotel</td></tr>
    <tr><td>Sun 22 Nov</td><td>Rosa Brunello</td><td>Auditorium, Teatro Studio Borgna</td><td>Hotel → Auditorium → hotel</td></tr>
    <tr><td>Sun 22 Nov</td><td>Priverno Jazz Orchestra (Coltrane, A Love Supreme)</td><td>Abbazia di Fossanova, Priverno</td><td>Rome → Fossanova and back, driver waits</td></tr>
    <tr><td>Mon 23 Nov, 20:00</td><td>Chiara Civello e Clap! Clap!</td><td>Auditorium, Teatro Studio Borgna</td><td>Hotel → Auditorium → hotel</td></tr>
    <tr><td>Tue 24 Nov, 20:00</td><td>Jason Miles, "100 Miles for Miles Davis"</td><td>Auditorium, Sala Petrassi</td><td>Hotel → Auditorium → hotel</td></tr>
  </tbody>
</table>
<p>Dates, times and venues come from the <a href="${PROGRAMME}" target="_blank" rel="noopener noreferrer">official festival programme</a>, which may change; tickets are sold by the festival, not by us. We plan each pickup around your concert's start time.</p>

<h2 id="concert-night-transfers">Your concert-night transfers</h2>

<h3 id="arrival">1. Arrival: Fiumicino or Ciampino to your hotel</h3>
<p>Your driver tracks your flight and waits in arrivals with a name sign, with 60 minutes of free waiting time on international arrivals. From <a href="/airport/rome-fiumicino">Fiumicino</a> the drive into central Rome takes about 40–55 minutes, and from <a href="/airport/rome-ciampino">Ciampino</a> about 30–40 minutes. See our <a href="/rome-airport-transfer">Rome airport transfer</a> page for hotel-specific routes. Arriving by train? We also collect from <a href="/route/rome-fiumicino-to-roma-termini-taxi">Roma Termini</a>.</p>

<h3 id="to-the-venue">2. Hotel to the venue</h3>
<p>The festival is spread across three Rome venues: the <strong>Auditorium Parco della Musica</strong> in the Flaminio district (Sala Petrassi and Teatro Studio Borgna), the <strong>Casa del Jazz</strong> on Viale di Porta Ardeatina, and the <strong>Alcazar</strong> in Trastevere. We time your pickup so you arrive before the doors open, with margin for evening traffic. Many central hotels, and Trastevere's lanes, are inside Rome's ZTL: we check access for your exact address when you book, and where a car can't enter, the driver stops at the nearest point a car can legally reach and helps you from there.</p>

<h3 id="after-the-concert">3. After the encore: the ride back</h3>
<p>Tell us roughly when the concert ends and we agree a meeting point outside the venue. If it runs late, message your driver; any extended waiting is quoted in advance and only charged with your agreement. Journeys starting between 22:00 and 06:00 can carry a night surcharge, which is always shown in your quote before you book.</p>

<h3 id="out-of-town">4. Out-of-town concerts: Rieti and Fossanova Abbey</h3>
<p>Two concerts celebrate John Coltrane's <em>A Love Supreme</em> outside Rome: the Rieti Jazz Orchestra at the Chiesa di San Domenico in Rieti (Sunday 15 November, 18:00) and the Priverno Jazz Orchestra at the Abbazia di Fossanova (Sunday 22 November). Rather than plan an evening return by train or bus, book the trip with a driver who waits for you and drives you back to your Rome hotel the same night, priced as one journey or by the hour with <a href="/services/hourly-taxi">hourly hire</a>.</p>

<h3 id="departure">5. Departure: hotel to the airport or station</h3>
<p>Book your return with the rest of your stay: from your hotel to Fiumicino or Ciampino, or to <a href="/route/roma-termini-to-rome-fiumicino-taxi">Roma Termini</a> for your train.</p>

${cta('Book your arrival, concert nights and departure together: one quote for your whole Roma Jazz Festival stay.', '/rome-airport-transfer', 'Rome Airport Transfers')}

<h2 id="from-elsewhere-in-italy">Coming to Rome from elsewhere in Italy</h2>
<p>For a single concert or a festival weekend, a private transfer takes you from your door to your Rome hotel, without a train change and without driving into the ZTL.</p>
<table>
  <thead><tr><th>From</th><th>To Rome by car</th><th>Book it</th></tr></thead>
  <tbody>
    <tr><td>Florence</td><td>about 3 hours (~277 km)</td><td><a href="/route/florence-to-rome-taxi">Florence to Rome transfer</a></td></tr>
    <tr><td>Naples</td><td>about 2 h 30 (~226 km)</td><td><a href="/route/rome-to-naples-taxi">Rome ↔ Naples transfer</a></td></tr>
    <tr><td>Civitavecchia (cruise port)</td><td>see route page</td><td><a href="/route/civitavecchia-to-rome-taxi">Civitavecchia to Rome transfer</a></td></tr>
    <tr><td>Anywhere else in Italy</td><td>quoted per journey</td><td><a href="/services/city-to-city">City-to-city transfers</a></td></tr>
  </tbody>
</table>
<p><strong>Groups:</strong> our minivans take up to 7 passengers with luggage, and larger groups use more than one vehicle, coordinated around the same concert time.</p>

<h2 id="how-to-book">How to book your Roma Jazz Festival transfer</h2>
<ol>
  <li><strong>Send your details</strong> through the <a href="/book-now">booking form</a> or <a href="${WHATSAPP}" target="_blank" rel="noopener noreferrer">WhatsApp</a>: names, flight or train numbers, your hotel's full address, the concerts and dates you are attending, and the number of passengers.</li>
  <li><strong>Receive a fixed, all-inclusive quote</strong>, usually within 2–3 hours, covering tolls, fuel and parking. Any night (22:00–06:00) or holiday surcharge is shown in the quote before you book.</li>
  <li><strong>Accept and get a written confirmation</strong> with meeting instructions for each ride. Your driver's phone number is sent to you within 24 hours before each transfer.</li>
</ol>

${cta('The festival ends on 24 November: request your concert transfers now.')}

<h2 id="faqs">Frequently Asked Questions</h2>
<h3 id="faq-1">When is the Roma Jazz Festival 2026?</h3>
<p>The 50th Roma Jazz Festival runs from 1 to 24 November 2026, mainly at the Auditorium Parco della Musica, the Casa del Jazz and the Alcazar, with two concerts outside Rome in Rieti (15 November) and at Fossanova Abbey (22 November). The programme may change, so check the official festival site.</p>
<h3 id="faq-2">Can I book a private transfer to the Auditorium Parco della Musica?</h3>
<p>Yes. We drive you from your hotel to the Auditorium in the Flaminio district before the concert and back afterwards, with the pickup timed to the concert's start and a meeting point agreed for the return.</p>
<h3 id="faq-3">Can the driver wait and take me back after the concert?</h3>
<p>Yes. Tell us roughly when the concert ends and we agree a meeting point outside the venue. If it runs late, message your driver; any extended waiting is quoted in advance and only charged with your agreement.</p>
<h3 id="faq-4">Is there a night surcharge for late concerts?</h3>
<p>Journeys starting between 22:00 and 06:00 can carry a night surcharge. It is always shown in your quote before you book.</p>
<h3 id="faq-5">How do I get to the Roma Jazz Festival concerts in Rieti and Fossanova?</h3>
<p>Book a transfer from your Rome hotel with a driver who waits during the concert and drives you back the same night, priced as one journey or by the hour. Both concerts are outside Rome, so the driver stays for the return.</p>
<h3 id="faq-6">How long is the drive from Fiumicino Airport to central Rome?</h3>
<p>About 40–55 minutes from Fiumicino and about 30–40 minutes from Ciampino, depending on traffic. Your driver tracks your flight and waits in arrivals with a name sign.</p>
<h3 id="faq-7">My hotel is in the ZTL or in Trastevere. Can the car reach it?</h3>
<p>It depends on the exact address. We check ZTL access for your hotel when you book; where a car can't enter, the driver stops at the nearest point a car can legally reach and helps you from there.</p>
<h3 id="faq-8">How do I get a price for my concert transfers?</h3>
<p>Send your flight or train, hotel address, passengers and the concerts you are attending through the booking form or WhatsApp. We usually reply within 2–3 hours with a fixed, all-inclusive quote, and once you accept you receive a written confirmation.</p>

${related([
  { href: '/rome-airport-transfer', label: 'Rome Airport Transfer (Fiumicino & Ciampino)' },
  { href: '/city/rome', label: 'Rome Taxi Service' },
  { href: '/airport/rome-fiumicino', label: 'Fiumicino Airport Transfers' },
  { href: '/airport/rome-ciampino', label: 'Ciampino Airport Transfers' },
  { href: '/services/hourly-taxi', label: 'Hourly Driver Hire' },
  { href: '/services/hotel-transfers', label: 'Hotel Transfers' },
  { href: '/route/florence-to-rome-taxi', label: 'Florence to Rome Transfer' },
  { href: '/blog/reach-florence-hotel-inside-ztl-without-fines', label: 'Hotels Inside a ZTL: How the Drop-off Works' },
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
  console.log(`Done — live at ${SITE}/blog/${SLUG}`);
}

if (require.main === module) run();
module.exports = { enPost, SLUG };
