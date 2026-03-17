const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const envFile = fs.readFileSync('.env', 'utf-8');
const env = Object.fromEntries(
  envFile.split('\n').filter(line => line && !line.startsWith('#') && line.includes('=')).map(line => {
    const [key, ...value] = line.split('=');
    return [key.trim(), value.join('=').trim()];
  })
);

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const articles = [
  {
    title: "Average Taxi Prices in Italy: What Travelers Should Expect",
    slug: "average-taxi-prices-in-italy-what-travelers-should-expect",
    category: "Cost Guide",
    read_time: "15 min read",
    seo_title: "Average Taxi Prices in Italy (2025): Fare Guide & Tips",
    meta_title: "What Do Taxis Cost in Italy? Complete Fare & Pricing Guide",
    seo_description: "Understand average taxi prices in Italy. Detailed breakdown of starting fares, per-km rates, airport fixed fees, and hidden surcharges.",
    focus_keyword: "taxi prices in Italy",
    excerpt: "Worried about getting overcharged in Italy? Our detailed breakdown of Italian taxi prices covers everything from base fares in Rome to fixed rates in Milan and Florence.",
    content: `
      <p><strong>Planning your budget for an Italian getaway and wondering what you will spend on local transportation?</strong> Understanding <em>taxi prices in Italy</em> is crucial for any traveler who wants to avoid surprises and ensure they are paying the fair, regulated rate. In Italy, taxi fares aren't just a suggestion; they are strictly governed by municipal laws, which means you can accurately predict your costs if you know the system.</p>
      
      <p>The quick answer is: <strong>Most city rides in Italy range from €10 to €25, with airport transfers often having fixed rates (e.g., €50 for Rome-Fiumicino), while base fares start between €3 and €7 depending on the time of day.</strong></p>

      <div class="toc" style="background: #f1f5f9; padding: 25px; border-radius: 15px; margin: 30px 0; border: 1px solid #e2e8f0;">
        <h3 style="margin-top: 0; color: #1e293b;">In This Article</h3>
        <ul style="margin-bottom: 0;">
          <li><a href="#how-calculated">How Fares are Calculated</a></li>
          <li><a href="#base-rates">Base Rates (Scatto Iniziale)</a></li>
          <li><a href="#city-comparison">Major City Comparison Table</a></li>
          <li><a href="#airport-fixed">Fixed Airport Rates Explained</a></li>
          <li><a href="#hidden-costs">Common Surcharges to Watch For</a></li>
          <li><a href="#faq">Frequently Asked Questions</a></li>
        </ul>
      </div>

      <h2 id="how-calculated">How Taxi Fares Are Calculated in Italy</h2>
      <p>In almost every Italian city, taxis use a progressive taximeter system. The fare is calculated based on two main variables: distance traveled and time elapsed. When the vehicle is moving above a certain speed (usually around 20 km/h), the meter charges per kilometer. When stuck in traffic or waiting at lights, it switches to a time-based tariff.</p>
      <p>This "dual-rate" system ensures that drivers are compensated for their time in Italy's notoriously slow-moving historic center traffic, while passengers get a fair price on open roads.</p>

      <h2 id="base-rates">The Starting Fare: Scatto Iniziale</h2>
      <p>The moment you step into an Italian taxi, the meter will already show a price. This is the "flag-fall" fee, or <em>Scatto Iniziale</em>. This amount changes based on three factors:</p>
      <ul>
        <li><strong>Daytime (6:00 AM - 10:00 PM):</strong> Typically €3.00 to €4.50.</li>
        <li><strong>Sunday and Public Holidays:</strong> Slightly higher, often around €4.50 to €6.00.</li>
        <li><strong>Nighttime (10:00 PM - 6:00 AM):</strong> The highest base rate, ranging from €6.50 to €7.50.</li>
      </ul>

      <h2 id="city-comparison">Fare Comparison: Rome, Milan, and Florence</h2>
      <p>While the national system is similar, each city sets its own specific tariffs. Here is what you should expect in Italy's most visited cities in 2025:</p>
      
      <table style="width:100%; border-collapse: collapse; margin: 30px 0; border: 1px solid #cbd5e1; font-size: 1.1rem;">
        <thead style="background: #1e293b; color: white;">
          <tr>
            <th style="padding: 15px; border: 1px solid #cbd5e1;">City</th>
            <th style="padding: 15px; border: 1px solid #cbd5e1;">Base Fare (Day)</th>
            <th style="padding: 15px; border: 1px solid #cbd5e1;">Rate per KM</th>
            <th style="padding: 15px; border: 1px solid #cbd5e1;">Typical 5km Ride</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 15px; border: 1px solid #cbd5e1;"><strong>Rome</strong></td><td style="padding: 15px; border: 1px solid #cbd5e1;">€3.00</td><td style="padding: 15px; border: 1px solid #cbd5e1;">€1.10 - €1.60</td><td style="padding: 15px; border: 1px solid #cbd5e1;">€12 - €16</td></tr>
          <tr style="background: #f8fafc;"><td style="padding: 15px; border: 1px solid #cbd5e1;"><strong>Milan</strong></td><td style="padding: 15px; border: 1px solid #cbd5e1;">€3.30</td><td style="padding: 15px; border: 1px solid #cbd5e1;">€1.09 - €1.40</td><td style="padding: 15px; border: 1px solid #cbd5e1;">€15 - €20</td></tr>
          <tr><td style="padding: 15px; border: 1px solid #cbd5e1;"><strong>Florence</strong></td><td style="padding: 15px; border: 1px solid #cbd5e1;">€3.30</td><td style="padding: 15px; border: 1px solid #cbd5e1;">€1.10 - €1.50</td><td style="padding: 15px; border: 1px solid #cbd5e1;">€14 - €18</td></tr>
        </tbody>
      </table>

      <h2 id="airport-fixed">Fixed Tariffs for Airport Transfers</h2>
      <p>One of the best ways to save money is to take advantage of the <em>Tariffe Predeterminate</em> (Fixed Rates). In Rome and Milan, if you are traveling from the airport to the city center (within the city walls), the driver is legally required to charge a flat fee that includes all luggage and surcharges.</p>
      <p><strong>Rome Fiumicino (FCO):</strong> Fixed at €50 to anywhere inside the Aurelian Walls.</p>
      <p><strong>Rome Ciampino (CIA):</strong> Fixed at €31 to the center.</p>
      <p><strong>Milan Malpensa (MXP):</strong> Fixed at €104 to the central Milan area.</p>

      <h2 id="hidden-costs">Watch Out for These Surcharges</h2>
      <p>Even with a metered fare, you might see small additions at the end of the ride. These are regulated "supplements" (supplementi):</p>
      <ul>
        <li><strong>Luggage Fee:</strong> Often €1.00 for each suitcase larger than a carry-on.</li>
        <li><strong>More than 4 Passengers:</strong> If you book a van (6-8 seats), expect a surcharge of about €5.00 for the vehicle type.</li>
        <li><strong>Booking Fee:</strong> If you call a radio-taxi or use an app, the meter starts running from the moment the driver receives the call, so don't be alarmed if it shows €4-€5 when they pick you up.</li>
      </ul>

      <h2 id="faq">FAQ: Your Pricing Questions Answered</h2>
      <div class="faq-container" style="border-top: 2px solid #e2e8f0; margin-top: 40px; padding-top: 20px;">
        <div class="faq-item" style="margin-bottom: 25px;">
          <h4 style="color: #1a365d;">Is there a surcharge for paying by credit card?</h4>
          <p>No. It is illegal for a driver to add a fee for credit card payments. If they ask for an extra €1-2 for the terminal, you should decline and point at the meter.</p>
        </div>
        <div class="faq-item" style="margin-bottom: 25px;">
          <h4 style="color: #1a365d;">How much is a taxi from Rome Termini to the Vatican?</h4>
          <p>Expect to pay between €12 and €18 depending on traffic and time of day.</p>
        </div>
        <div class="faq-item" style="margin-bottom: 25px;">
          <h4 style="color: #1a365d;">Are prices higher during the Pope's audience or major events?</h4>
          <p>The rates per kilometer do not change, but traffic will be much worse, meaning the time-based part of the meter will tick up more frequently, leading to a higher final cost.</p>
        </div>
      </div>

      <h2>Conclusion: How to Ensure a Fair Price</h2>
      <p>To avoid any pricing anxiety, always use official white taxis from ranks, ensure the meter is started at the correct base rate, and confirm the destination before pulling away. By understanding <strong>taxi prices in Italy</strong>, you can enjoy the convenience of private transport without worrying about your budget. Safe travels!</p>
    `,
    internal_links: [
      { text: "How to book a taxi in Italy", url: "/blog/how-to-book-a-taxi-in-italy-easily-as-a-tourist" },
      { text: "Average airport transfer costs", url: "/blog/how-airport-transfers-work-in-italy-for-international-travelers" },
      { text: "Official taxi regulations", url: "/blog/taxi-rules-and-regulations-in-italy-every-traveler-should-know" }
    ],
    image_suggestions: [
      { alt: "Official Rome taxi price list sticker inside window", file: "rome_taxi_prices_sticker.webp" },
      { alt: "Digital taximeter showing fare in Euros", file: "taximeter_fare_italy.webp" }
    ]
  },
  {
    title: "How to Book a Taxi in Italy Easily as a Tourist",
    slug: "how-to-book-a-taxi-in-italy-easily-as-a-tourist",
    category: "How-To",
    read_time: "12 min read",
    seo_title: "How to Book a Taxi in Italy: 4 Easy Ways for Tourists",
    meta_title: "Booking a Taxi in Italy: Apps, Ranks, and Phone Guide",
    seo_description: "Learn the best ways to book a taxi in Italy. From the itTaxi app to finding official ranks and calling a dispatcher, we make it easy for tourists.",
    focus_keyword: "book a taxi in Italy",
    excerpt: "Struggling to find a ride in Italy? Our guide explains exactly how to book a taxi using the best apps, finding the right ranks, and what to say to the dispatcher.",
    content: `
      <p><strong>One of the most common frustrations for visitors in Italy is simply trying to figure out how to get a taxi.</strong> Unlike New York or London, where you might be used to raising your hand to hail a car, Italy follows a structured system that can leave you waiting on a street corner if you don't know the "rules of engagement." Fortunately, booking a ride is easy once you know the four primary methods.</p>

      <p>The quick answer is: <strong>The most reliable ways to book a taxi in Italy are visiting an official rank (posteggio), using the itTaxi or Free Now apps, or having your hotel/restaurant call a local dispatcher for you.</strong></p>

      <h2 id="ranks">1. Finding an Official Taxi Rank</h2>
      <p>The most traditional and often fastest way to get a ride is to walk to a <em>Posteggio Taxi</em>. In Italy, taxis aren't allowed to pick up passengers on the street if they are near a rank. You will find these spots marked by large orange or blue signs, usually located near:</p>
      <ul>
        <li>Main railway stations (like Termini or Milano Centrale)</li>
        <li>International airports</li>
        <li>Major squares (Piazza Venezia, Piazza del Duomo, etc.)</li>
        <li>Entrance to popular tourist museums</li>
      </ul>
      <p><strong>Note:</strong> You must always take the <em>first</em> taxi in the line. Don't try to jump to a newer-looking car at the back; the drivers follow a strict rotation and will direct you to the front.</p>

      <h2 id="apps">2. Using Mobile Apps (The Modern Way)</h2>
      <p>If you prefer a digital experience, there are two apps you absolutely need to download before your trip:</p>
      
      <h3>itTaxi - The National Leader</h3>
      <p>This is the most widespread app in the country. It connects you directly to the local "Radio Taxi" cooperatives in over 80 cities. It allows you to track your driver, estimate the fare, and most importantly, pay with a credit card stored in the app—bypassing the "broken terminal" excuse entirely.</p>

      <h3>Free Now (formerly MyTaxi)</h3>
      <p>Very popular in Rome, Milan, and Naples. Free Now works similarly to Uber but connects you with official licensed white taxis. It's often the best choice for visitors who want a familiar interface and reliable GPS tracking.</p>

      <h2 id="phone">3. Calling a Professional Dispatcher</h2>
      <p>If you don't have data or prefer to talk to someone, you can call a <em>Radiotaxi</em> number. Each city has its own. For example, in Rome, the most famous are 06 3570 and 06 0606.</p>
      <p>When you call, you give your current address. The operator will give you a "Code Name" (e.g., <em>Parigi 15</em>) and an estimated time. When the car arrives, look for that code on the side of the taxi.</p>

      <h2 id="staff">4. Let the Local Staff Help</h2>
      <p>If you are finished with a meal at a restaurant or checking out of your hotel, don't hesitate to ask: <em>"Può chiamarmi un taxi, per favore?"</em> (Can you call me a taxi, please?). Staff members have direct lines to dispatcher services and can often get a car to your location in under 5 minutes.</p>

      <h2 id="faq">FAQ: Booking Made Simple</h2>
      <div class="faq-section">
        <p><strong>Can I book a taxi in advance for a flight?</strong><br>
        Yes, both the apps and phone services allow you to "reserve" a ride for a specific time. We recommend doing this at least 12 hours in advance for early morning flights.</p>
        <p><strong>Is there a fee for booking?</strong><br>
        When you call or use an app, the driver starts the meter at their current rank. This means there might be €3-€6 already on the meter when they arrive at your door.</p>
      </div>

      <h2>Summary</h2>
      <p>Whether you choose to walk to a convenient stand or use a high-tech app, to <strong>book a taxi in Italy</strong> is a straightforward process once you step away from the curb and use the official channels. Safe and comfortable travels await!</p>
    `,
    internal_links: [
      { text: "How to avoid taxi scams", url: "/blog/common-taxi-scams-in-italy-and-how-to-avoid-them" },
      { text: "Taxi rates for tourists", url: "/blog/average-taxi-prices-in-italy-what-travelers-should-expect" }
    ],
    image_suggestions: [
      { alt: "Person using iconic itTaxi app on smartphone", file: "ittaxi_app_booking.webp" },
      { alt: "Taxi rank sign in a busy Italian piazza", file: "taxi_rank_sign_piazza.webp" }
    ]
  }
];

async function seed() {
  const { data: author } = await supabase.from('bloggers').select('id').limit(1).single();
  if (!author) return console.error("No author found.");

  for (const art of articles) {
    const { error } = await supabase.from('blogs').upsert({
      ...art,
      status: 'published',
      author_id: author.id,
      published_at: new Date().toISOString(),
      content: `${art.content}
        <div class="internal-linking" style="margin-top: 50px; background: #f8fafc; padding: 30px; border-radius: 20px;">
          <h3 style="margin-top: 0; color: #1a365d;">Explore More Travel Insights</h3>
          <ul style="margin-bottom: 0;">
            ${art.internal_links.map(l => `<li><a href="${l.url}" style="color: #c5a059; font-weight: bold;">${l.text}</a></li>`).join('')}
          </ul>
        </div>
      `
    }, { onConflict: 'slug' });
    
    if (error) console.error(`Error ${art.title}:`, error.message);
    else console.log(`Seeded: ${art.title}`);
  }
}

seed();
