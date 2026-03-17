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
    title: "Complete Guide to Taxi Services in Italy for Tourists",
    slug: "complete-guide-taxi-services-italy-tourists",
    category: "Travel Guide",
    read_time: "12 min read",
    seo_title: "Complete Guide to Taxi Services in Italy for Tourists (2025)",
    seo_description: "Expert guide on using taxis in Italy. Learn about official ranks, fares, payment apps, and safety tips for a stress-free Italian holiday.",
    focus_keyword: "taxi services in Italy",
    meta_title: "The Ultimate Guide to Taxi Services in Italy for Tourists",
    excerpt: "Navigating Italy's taxi system doesn't have to be stressful. Our comprehensive guide covers everything from finding official stands to understanding metered fares and credit card payments.",
    content: `
      <p><strong>Are you planning a trip to Italy and wondering how to navigate the local taxi system?</strong> Taxis are an essential part of the Italian transportation network, offering a convenient way to travel within cities and to/from airports. However, for first-time visitors, the system can seem a bit daunting with its specific rules and local variations.</p>
      
      <p>The quick answer is: <strong>Only use official white taxis found at designated ranks or booked via app; never hail a moving car on the street, and always check for a meter or a fixed airport rate before starting your journey.</strong></p>

      <div class="toc" style="background: #f8fafc; padding: 20px; border-radius: 12px; margin: 20px 0;">
        <h3 style="margin-top: 0;">Table of Contents</h3>
        <ul>
          <li><a href="#types">Identifying Licensed Taxis</a></li>
          <li><a href="#how-to-get">How to Find and Book a Ride</a></li>
          <li><a href="#fares">Understanding Fares and Surcharges</a></li>
          <li><a href="#payment">Payment Options and Credit Cards</a></li>
          <li><a href="#faq">Frequently Asked Questions</a></li>
        </ul>
      </div>

      <h2 id="types">1. Identifying Official Licensed Taxis in Italy</h2>
      <p>In Italy, taxis are strictly regulated by municipal governments. Unlike some other countries where you might see various colors and brands, official Italian taxis follow a standard appearance that makes them easy to spot if you know what to look for.</p>
      
      <h3 style="color: #1a365d;">Standard Appearance</h3>
      <ul>
        <li><strong>Color:</strong> Almost all official taxis in major Italian cities like Rome, Milan, and Florence are <strong>white</strong>.</li>
        <li><strong>Roof Sign:</strong> There must be a "Taxi" sign on the roof, which is usually illuminated when the taxi is free.</li>
        <li><strong>Identification:</strong> Look for the municipality's emblem (e.g., the SPQR crest in Rome) and the license number on the front doors and on the back of the car.</li>
        <li><strong>Taximeter:</strong> Inside, a digital meter (tassametro) must be clearly visible to the passenger.</li>
      </ul>

      <h2 id="how-to-get">2. How to Get a Taxi: Ranks, Apps, and Dispatch</h2>
      <p>One of the biggest mistakes tourists make is trying to hail a taxi in the middle of a busy street. While it occasionally works if a driver is free and notices you, it is not the standard practice in Italy.</p>
      
      <h3>The "Posteggio Taxi" (Taxi Stands)</h3>
      <p>The most reliable way to find a taxi is to head to an official rank. These are marked with a blue sign with white "TAXI" text. You will find them outside major train stations, airports, and in central piazzas near tourist landmarks. <strong>Important rule:</strong> You must always take the first taxi in the queue.</p>

      <h3>Using Mobile Apps</h3>
      <p>In the digital age, apps are becoming the preferred way for locals and savvy travelers to book. The two most popular apps in Italy are:</p>
      <ul>
        <li><strong>itTaxi:</strong> The national app that connects you to the largest network of local radio-taxi companies.</li>
        <li><strong>Free Now:</strong> Operates in major hubs like Rome and Milan and allows for easy in-app payments.</li>
      </ul>

      <h2 id="fares">3. Understanding the Fare Structure</h2>
      <p>Fares are generally divided into two categories: <strong>metered city fares</strong> and <strong>fixed airport rates</strong>.</p>
      
      <table border="1" style="width:100%; border-collapse: collapse; margin: 20px 0;">
        <thead style="background: #e2e8f0;">
          <tr>
            <th style="padding: 12px; text-align: left;">City</th>
            <th style="padding: 12px; text-align: left;">Airport to Center (Fixed)</th>
            <th style="padding: 12px; text-align: left;">Estimated City Ride</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding: 12px;">Rome (Fiumicino)</td><td style="padding: 12px;">€50</td><td style="padding: 12px;">€15 - €25</td></tr>
          <tr><td style="padding: 12px;">Milan (Malpensa)</td><td style="padding: 12px;">€104</td><td style="padding: 12px;">€20 - €35</td></tr>
          <tr><td style="padding: 12px;">Florence</td><td style="padding: 12px;">€22 + bag fees</td><td style="padding: 12px;">€12 - €18</td></tr>
        </tbody>
      </table>

      <h3>Common Surcharges (Supplementi)</h3>
      <p>Expect small extra charges for:</p>
      <ul>
        <li><strong>Luggage:</strong> Usually around €1.00 per large bag.</li>
        <li><strong>Night service:</strong> Typically applies between 10:00 PM and 6:00 AM.</li>
        <li><strong>Sunday/Holidays:</strong> A small flat fee extra.</li>
        <li><strong>More than 4 passengers:</strong> If you use a larger minivan taxi.</li>
      </ul>

      <h2 id="faq">FAQ: Frequently Asked Questions</h2>
      <div class="faq-section" itemscope itemtype="https://schema.org/FAQPage">
        <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <h4 itemprop="name">Do Italian taxis take credit cards?</h4>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p itemprop="text">Legally, all taxis in major cities are required to have POS terminals. However, "broken" terminals are a common claim. Always ask "Posso pagare con carta?" before you get in.</p>
          </div>
        </div>
        <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <h4 itemprop="name">Is Uber available in Italy?</h4>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p itemprop="text">Standard Uber (UberX) does not exist in Italy. Only Uber Black (licensed luxury cars) is available in cities like Rome and Milan, and it is usually significantly more expensive than a regular taxi.</p>
          </div>
        </div>
        <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <h4 itemprop="name">Should I tip the driver?</h4>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p itemprop="text">Tipping is not expected or mandatory. Rounding up to the nearest Euro (e.g., from €14.50 to €15) is a kind gesture for good service.</p>
          </div>
        </div>
      </div>

      <h2>Conclusion</h2>
      <p>By sticking to official vehicles and knowing how the ranks work, you can ensure a smooth and safe journey across Italy's most beautiful cities. Whether you choose to walk to a stand or use a modern app, the peace of mind that comes with professional service is worth the effort.</p>
    `,
    internal_links: [
      { text: "Rome airport taxi guide", url: "/blog/getting-around-rome-taxi-and-transportation-guide" },
      { text: "Airport transfer options", url: "/services/airport-transfers" },
      { text: "Taxi prices in Italy", url: "/blog/average-taxi-prices-in-italy-what-travelers-should-expect" }
    ],
    image_suggestions: [
      { alt: "White official taxi in a Rome street", file: "rome_taxi_official.webp" },
      { alt: "Taxi rank sign in Italy", file: "italy_taxi_rank_sign.webp" }
    ]
  },
  {
    title: "How Taxi Services Work in Italy: A Beginner’s Guide",
    slug: "how-taxi-services-work-italy-beginners-guide",
    category: "Travel Guide",
    read_time: "10 min read",
    seo_title: "How Taxi Services Work in Italy: Beginner's Guide (Rules & Tips)",
    seo_description: "New to Italy? This beginner guide explains how the taxi system works, the difference between metered and fixed rates, and how to avoid unlicensed drivers.",
    focus_keyword: "how taxi services work in Italy",
    meta_title: "Beginner's Guide: Understanding the Italian Taxi System",
    excerpt: "Heading to Italy for the first time? Learn the unwritten rules of Italian taxis, from hailing etiquette to understanding the 'scatto iniziale' on the meter.",
    content: `
      <p><strong>Are you a first-time traveler to Italy feeling a bit confused about how to catch a ride?</strong> Unlike many other countries where ride-sharing dominates or you can simply wave a car down, Italy has a very traditional and regulated taxi culture that requires a little bit of "insider knowledge."</p>

      <p>The quick answer is: <strong>Italian taxis operate from fixed stands (ranks) or via phone/app dispatch; the meter starts at a base rate called 'scatto iniziale' and increases based on distance and time.</strong></p>

      <h2 id="hailing">1. The Golden Rule: No Hailing on the Street</h2>
      <p>One of the most common sights in Italy is a tourist standing on a street corner waving frantically at passing white cars with "Taxi" signs. Usually, those cars will drive right past. Why? Because in Italy, if a taxi is on the move, it's either already on its way to a call or it belongs to a specific queue system where they aren't authorized to stop randomly.</p>

      <h2 id="meter">2. Understanding the Taximeter (Tassametro)</h2>
      <p>Every licensed cab has a meter. It's important to understand what the numbers mean so you don't feel overcharged. When you get in, the meter will not be at zero. It starts at a base price called the <strong>Scatto Iniziale</strong>.</p>
      <ul>
        <li><strong>Daytime base:</strong> Usually around €3.00 - €4.50.</li>
        <li><strong>Holiday/Sunday base:</strong> Slightly higher, around €5.00 - €6.00.</li>
        <li><strong>Night base:</strong> Can start as high as €7.00 in cities like Rome.</li>
      </ul>

      <h2 id="unlicensed">3. Beware of Unlicensed "Abusivi" Drivers</h2>
      <p>In high-traffic areas like Fiumicino Airport or Termini Station, you may be approached by well-dressed individuals asking "Taxi? Taxi?" or "Looking for a ride?". <strong>Ignore them.</strong> These are unlicensed drivers who often charge double or triple the official rate and lack the necessary commercial insurance.</p>

      <h2 id="luggage">4. The Luggage Policy</h2>
      <p>Don't be surprised if the driver gets out and adds a small fee to the meter after putting your suitcases in the trunk. Most municipal regulations allow for a €1.00 fee per suitcase. It's completely legal and part of the official tariff.</p>

      <h2 id="faq">FAQ: Beginner Questions</h2>
      <div class="faq-section" itemscope itemtype="https://schema.org/FAQPage">
        <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <h4 itemprop="name">How do I call a taxi if I'm at my hotel?</h4>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p itemprop="text">The easiest way is to ask the front desk to call a "Radiotaxi" for you. Be aware that the meter starts running from the moment the driver accepts the call and leaves their rank, so there will already be a small amount on the meter when they arrive.</p>
          </div>
        </div>
        <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <h4 itemprop="name">Do they speak English?</h4>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p itemprop="text">In major tourist hubs, many drivers speak basic English. However, it's always helpful to have your destination address written down or shown on your phone to avoid confusion.</p>
          </div>
        </div>
      </div>
    `,
    internal_links: [
      { text: "Taxi scams to avoid", url: "/blog/common-taxi-scams-in-italy-and-how-to-avoid-them" },
      { text: "Taxi booking guide", url: "/blog/how-to-book-a-taxi-in-italy-easily-as-a-tourist" }
    ],
    image_suggestions: [
      { alt: "Taximeter display inside an Italian car", file: "taximeter_italy.webp" },
      { alt: "Hotel concierge calling a taxi for guests", file: "hotel_concierge_taxi.webp" }
    ]
  }
];

async function seed() {
  const { data: author } = await supabase.from('bloggers').select('id').limit(1).single();
  
  for (const art of articles) {
    const { error } = await supabase.from('blogs').upsert({
      ...art,
      status: 'published',
      author_id: author.id,
      published_at: new Date().toISOString(),
      content: `${art.content}
        <div class="internal-linking" style="margin-top: 40px; border-top: 1px solid #eee; padding-top: 20px;">
          <h3>Recommended Reading</h3>
          <ul>
            ${art.internal_links.map(l => `<li><a href="${l.url}">${l.text}</a></li>`).join('')}
          </ul>
        </div>
        <div class="image-meta" style="display: none;">
          ${art.image_suggestions.map(img => `<span data-alt="${img.alt}" data-file="${img.file}"></span>`).join('')}
        </div>
      `
    }, { onConflict: 'slug' });
    
    if (error) console.error(`Error ${art.title}:`, error.message);
    else console.log(`Seeded: ${art.title}`);
  }
}

seed();
