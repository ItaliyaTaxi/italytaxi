const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const envFile = fs.readFileSync('.env', 'utf-8');
const env = Object.fromEntries(
  envFile.split('\n').filter(line => line && !line.startsWith('#') && line.includes('=')).map(line => {
    const [key, ...value] = line.split('=');
    return [key.trim(), value.join('=').trim()];
  })
);

const supabase = createClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.SUPABASE_SERVICE_ROLE_KEY
);

// 30 Articles mapped to Keywords, Intent, Commercial Meta Titles, and Internal Links
const articlesData = [
  {
    originalTitle: "Complete Guide to Taxi Services in Italy for Tourists",
    keyword: "taxi services Italy",
    intent: "Informational/Commercial",
    metaTitle: "Ultimate Guide to Taxi Services in Italy: Avoid Scams & Save Money!",
    metaDescription: "Planning a trip to Italy? Learn top secrets for using Italy taxi services safely. Discover fares, booking tips, and why a private driver might be better.",
    internalLink: "/city",
    priceContext: "Starting from €50 depending on city routes"
  },
  {
    originalTitle: "How Taxi Services Work in Italy: A Beginner’s Guide",
    keyword: "how taxi services work Italy",
    intent: "Informational",
    metaTitle: "How Taxi Services Work in Italy: Rules, Fares & Insider Tips",
    metaDescription: "First time in Italy? Discover how local taxi services work, from hailing a cab to expected fares. Save time and travel like a local.",
    internalLink: "/city",
    priceContext: "Metered rates vs fixed airport transfers"
  },
  {
    originalTitle: "Average Taxi Prices in Italy: What Travelers Should Expect",
    keyword: "average taxi prices Italy",
    intent: "Commercial",
    metaTitle: "Average Taxi Prices in Italy (2026 Guide) - Complete Fare Breakdown",
    metaDescription: "Wondering about taxi costs? We break down the average taxi prices in Italy, covering Rome, Milan, Florence, and fixed-rate private transfers.",
    internalLink: "/book-now",
    priceContext: "Clear price breakdowns for top cities vs fixed private transfers"
  },
  {
    originalTitle: "How to Book a Taxi in Italy Easily as a Tourist",
    keyword: "book a taxi in Italy",
    intent: "Transactional",
    metaTitle: "How to Book a Taxi in Italy: Fast, Safe & Reliable Options",
    metaDescription: "Don't speak Italian? Learn exactly how to book a taxi in Italy easily. Pre-book private transfers online for guaranteed pricing and no stress.",
    internalLink: "/book-now",
    priceContext: "Pre-booking guarantees your fare upfront"
  },
  {
    originalTitle: "Taxi Rules and Regulations in Italy Every Traveler Should Know",
    keyword: "taxi rules Italy",
    intent: "Informational",
    metaTitle: "Crucial Taxi Rules in Italy: What Every Tourist Must Know",
    metaDescription: "Stay safe by knowing the official taxi rules in Italy. Learn about licensed vehicles, standard meters, and when to expect luggage surcharges.",
    internalLink: "/faq",
    priceContext: "Standard metered fares + luggage supplements"
  },
  {
    originalTitle: "Tips for Using Taxi Services Safely in Italy",
    keyword: "safe taxi Italy",
    intent: "Informational",
    metaTitle: "7 Essential Tips for Using Taxis Safely in Italy",
    metaDescription: "Avoid tourist traps with these expert tips for using taxi services safely in Italy. Always choose authorized white taxis or pre-booked professional drivers.",
    internalLink: "/about-us",
    priceContext: "Always establish the fare structure before departing"
  },
  {
    originalTitle: "Private Taxi vs Public Transport in Italy: Which Is Better for Travelers",
    keyword: "private taxi vs public transport Italy",
    intent: "Commercial",
    metaTitle: "Private Taxi vs Public Transport in Italy: The Ultimate Comparison",
    metaDescription: "Weighing your options? Compare private taxis vs public transport in Italy. See why a private driver offers unmatched comfort, speed, and safety for your luggage.",
    internalLink: "/book-now",
    priceContext: "Higher upfront cost, but saves hours of travel time & stress"
  },
  {
    originalTitle: "Common Taxi Scams in Italy and How to Avoid Them",
    keyword: "taxi scams Italy",
    intent: "Informational",
    metaTitle: "Common Taxi Scams in Italy & Exactly How to Avoid Them",
    metaDescription: "Don't get ripped off! Uncover the most common taxi scams in Italy and protect yourself. Hint: Pre-booking a private transfer eliminates all risk.",
    internalLink: "/book-now",
    priceContext: "Pre-paid fixed transfers prevent meter manipulation"
  },
  {
    originalTitle: "Do Taxis in Italy Accept Credit Cards? A Complete Guide",
    keyword: "taxis in Italy accept credit cards",
    intent: "Informational",
    metaTitle: "Do Taxis in Italy Accept Credit Cards? (2026 Rules & Tips)",
    metaDescription: "Wondering if you need cash? Find out if taxis in Italy accept credit cards, local regulations, and why pre-paying a private transfer is the easiest option.",
    internalLink: "/contact",
    priceContext: "Most accept cards, but private transfers allow secure online payment"
  },
  {
    originalTitle: "Tipping Taxi Drivers in Italy: What You Should Know",
    keyword: "tipping taxi drivers Italy",
    intent: "Informational",
    metaTitle: "Tipping Taxi Drivers in Italy: The Definitive Etiquette Guide",
    metaDescription: "Not sure how much to leave? Learn the rules for tipping taxi drivers in Italy. Discover when to round up and when a larger tip is expected.",
    internalLink: "/faq",
    priceContext: "Tipping is optional but rounding to the nearest Euro is standard"
  },
  {
    originalTitle: "How Airport Transfers Work in Italy for International Travelers",
    keyword: "airport transfers Italy",
    intent: "Transactional",
    metaTitle: "How Airport Transfers Work in Italy: A Stress-Free Guide",
    metaDescription: "Arriving exhausted? Discover how airport transfers work in Italy for international travelers. Meet & Greet services explained.",
    internalLink: "/airport",
    priceContext: "Fixed rates varying by airport distance"
  },
  {
    originalTitle: "Best Ways to Travel from Italian Airports to City Centers",
    keyword: "Italian airports to city centers",
    intent: "Commercial",
    metaTitle: "Top Ways to Travel from Italian Airports to City Centers",
    metaDescription: "Skip the long lines. Compare the best ways to travel from Italian airports to city centers. See why private taxis rank #1 for convenience.",
    internalLink: "/airport",
    priceContext: "Compare €15 train tickets with €50+ seamless taxi rides"
  },
  {
    originalTitle: "Taxi vs Train from Italian Airports: Which Option Is Better",
    keyword: "taxi vs train Italy airports",
    intent: "Commercial",
    metaTitle: "Taxi vs Train from Italian Airports: What's Best for You?",
    metaDescription: "Train or car? Read our extensive comparison of taxi vs train from Italian airports. Make the right choice based on luggage, group size, and destination.",
    internalLink: "/airport",
    priceContext: "Groups often save money splitting a private van compared to multiple train tickets"
  },
  {
    originalTitle: "What to Expect When Booking an Airport Transfer in Italy",
    keyword: "booking airport transfer Italy",
    intent: "Transactional",
    metaTitle: "Booking an Airport Transfer in Italy: Step-by-Step Expectations",
    metaDescription: "Never used a private driver? See exactly what to expect when booking an airport transfer in Italy, featuring airport Meet & Greet services.",
    internalLink: "/book-now",
    priceContext: "All-inclusive prices with no hidden flight-delay fees"
  },
  {
    originalTitle: "Travel Time from Major Italian Airports to City Centers",
    keyword: "travel time Italian airports",
    intent: "Informational",
    metaTitle: "Travel Time from Major Italian Airports to City Centers",
    metaDescription: "Plan your itinerary perfectly. We map out the exact travel times from major Italian airports (FCO, MXP, VCE) to their respective city centers.",
    internalLink: "/airport",
    priceContext: "Time is money: avoid 2-hour bus journeys with a 40-min direct drive"
  },
  {
    originalTitle: "Best Ways to Travel Between Cities in Italy",
    keyword: "travel between cities Italy",
    intent: "Commercial",
    metaTitle: "Best Ways to Travel Between Cities in Italy in Absolute Comfort",
    metaDescription: "Navigating Italy is easy with the right plan. Explore the best ways to travel between cities in Italy, highlighting the luxury of intercity transfers.",
    internalLink: "/city-transfer",
    priceContext: "Premium intercity services offer door-to-door convenience"
  },
  {
    originalTitle: "Transportation Options for Tourists Visiting Italy",
    keyword: "transportation options Italy",
    intent: "Informational",
    metaTitle: "Top Transportation Options for Tourists Visiting Italy",
    metaDescription: "Comprehensive overview of transportation options for tourists visiting Italy. Trains, buses, or private chauffeur—which should you choose?",
    internalLink: "/city-transfer",
    priceContext: "Options for every budget, from public transit to premium black car service"
  },
  {
    originalTitle: "Is Renting a Car Better Than Taking a Taxi in Italy?",
    keyword: "renting a car vs taxi Italy",
    intent: "Commercial",
    metaTitle: "Renting a Car vs Taking a Taxi in Italy: The Honest Truth",
    metaDescription: "Thinking about driving yourself? We compare renting a car vs taking a taxi in Italy. Avoid ZTL fines, parking nightmares, and stressful highways.",
    internalLink: "/book-now",
    priceContext: "Factor in fuel, tolls, and €100+ parking fines when comparing costs"
  },
  {
    originalTitle: "How Tourists Can Travel Comfortably Across Italy",
    keyword: "travel comfortably Italy",
    intent: "Informational",
    metaTitle: "How to Travel Comfortably Across Italy: Insider Strategies",
    metaDescription: "Avoid travel fatigue. Learn how tourists can travel comfortably across Italy using premium private transfer services and smart routing.",
    internalLink: "/city-transfer",
    priceContext: "Invest in comfort: High-end Mercedes vehicles vs crowded public transport"
  },
  {
    originalTitle: "Best Transportation Options for Families Traveling in Italy",
    keyword: "transportation for families Italy",
    intent: "Commercial",
    metaTitle: "Best Transportation for Families Traveling in Italy",
    metaDescription: "Traveling with kids and luggage? Discover the best transportation options for families traveling in Italy. See why a private van is a lifesaver.",
    internalLink: "/book-now",
    priceContext: "Minivans provide excellent value for groups of 4+"
  },
  {
    originalTitle: "Getting Around Rome: Taxi and Transportation Guide",
    keyword: "getting around Rome",
    intent: "Informational/Commercial",
    metaTitle: "Getting Around Rome: The Ultimate Taxi & Transport Guide",
    metaDescription: "Master the Eternal City. Our guide to getting around Rome reveals taxi apps, fixed fares from Fiumicino, and how to navigate the cobbled streets.",
    internalLink: "/city",
    priceContext: "Rome Fiumicino fixed official fare vs Premium private options"
  },
  {
    originalTitle: "Getting Around Milan: Taxi and Travel Tips",
    keyword: "getting around Milan",
    intent: "Informational/Commercial",
    metaTitle: "Getting Around Milan: Elite Taxi & Travel Tips",
    metaDescription: "Navigate the fashion capital with ease. Learn about getting around Milan, Malpensa connections, and the best way to hire a private driver for shopping.",
    internalLink: "/city",
    priceContext: "Milan Malpensa requires a longer ~50min transfer compared to Linate"
  },
  {
    originalTitle: "Transportation Guide for Visitors in Venice",
    keyword: "transportation in Venice",
    intent: "Informational/Commercial",
    metaTitle: "Venice Transportation Guide: Water Taxis & Airport Cars",
    metaDescription: "Venice is unique! Understand the transportation options for visitors in Venice, from Marco Polo airport land transfers to private water taxis (motoscafi).",
    internalLink: "/airport",
    priceContext: "Land taxis to Piazzale Roma vs expensive private water taxis"
  },
  {
    originalTitle: "Getting Around Florence: Taxi and Travel Guide",
    keyword: "getting around Florence",
    intent: "Informational/Commercial",
    metaTitle: "Getting Around Florence: Navigating Tuscany's Capital",
    metaDescription: "Explore the Renaissance city comfortably. Our guide to getting around Florence covers ZTL zones, airport connections, and taking a taxi to Pisa.",
    internalLink: "/attraction-transfer",
    priceContext: "Florence is highly walkable, but transfers to the countryside require a car"
  },
  {
    originalTitle: "Transportation Options in Naples for Tourists",
    keyword: "transportation in Naples",
    intent: "Informational/Commercial",
    metaTitle: "Naples Transportation Guide & Amalfi Coast Connections",
    metaDescription: "Don't let Naples traffic intimidate you. Discover the safest transportation options in Naples for tourists and the best way to travel to Positano.",
    internalLink: "/beach-transfer/amalfi-coast-taxi",
    priceContext: "Fixed rates to the Amalfi Coast provide peace of mind in Naples"
  },
  {
    originalTitle: "Essential Travel Tips for First-Time Visitors to Italy",
    keyword: "tips for first-time visitors Italy",
    intent: "Informational",
    metaTitle: "10 Essential Travel & Transport Tips for First-Time Visitors to Italy",
    metaDescription: "Planning your first Italian adventure? Read these essential travel tips for first-time visitors to Italy, focusing on navigating transit safely.",
    internalLink: "/faq",
    priceContext: "Budgeting for intercity travel vs booking far in advance"
  },
  {
    originalTitle: "Best Time to Travel Around Italy Without Traffic",
    keyword: "best time to travel Italy",
    intent: "Informational",
    metaTitle: "When is the Best Time to Travel Around Italy to Beat Traffic?",
    metaDescription: "Avoid summer gridlock on the Amalfi Coast. Learn the best times to travel around Italy without traffic, and why your driver's local knowledge matters.",
    internalLink: "/beach-transfer",
    priceContext: "Seasonal pricing and availability adjustments"
  },
  {
    originalTitle: "How to Plan Comfortable City-to-City Travel in Italy",
    keyword: "city-to-city travel Italy",
    intent: "Transactional",
    metaTitle: "How to Plan Comfortable City-to-City Travel in Italy",
    metaDescription: "Skip the stressful train stations. Discover how to plan comfortable city-to-city travel in Italy with a private driver, from Rome to Florence and beyond.",
    internalLink: "/city-transfer",
    priceContext: "Direct pricing for popular routes like Rome to Florence"
  },
  {
    originalTitle: "What Tourists Should Know Before Taking a Taxi in Italy",
    keyword: "before taking a taxi in Italy",
    intent: "Informational",
    metaTitle: "What Every Tourist MUST Know Before Taking a Taxi in Italy",
    metaDescription: "Read this before you hail a cab! Critical advice on what tourists should know before taking a taxi in Italy to ensure a fair price and safe ride.",
    internalLink: "/faq",
    priceContext: "Always confirm the meter is reset to the starting tariff"
  },
  {
    originalTitle: "Comprehensive Transportation Guide for Traveling Across Italy",
    keyword: "transportation guide Italy",
    intent: "Informational/Commercial",
    metaTitle: "The Ultimate 2026 Transportation Guide for Traveling Across Italy",
    metaDescription: "Your complete resource. The most comprehensive transportation guide for traveling across Italy, comparing high-speed trains, rental cars, and VIP private drivers.",
    internalLink: "/book-now",
    priceContext: "The ultimate breakdown of transportation costs across the country"
  }
];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

function generateContent(article) {
  const { originalTitle, keyword, intent, internalLink, priceContext } = article;
  
  // High-conversion, commercially-driven HTML Structure
  const intro = `
    <div class="mb-8">
      <p class="text-xl text-gray-700 leading-relaxed">
        Planning a trip to Italy involves many logistical choices. When it comes to <strong>${keyword}</strong>, travelers often feel overwhelmed by the options. Having a reliable, stress-free transportation plan can make or break your Italian vacation.
      </p>
    </div>
  `;
  
  // Commercial comparison section
  const comparison = `
    <h2 class="text-3xl font-bold text-navy mt-10 mb-6">Why Choose a Professional Taxi Transfer?</h2>
    <p class="mb-6">For those researching <em>${keyword}</em>, it is important to understand the value of a dedicated service. While public options like buses or trains might seem cheaper initially, they often result in longer travel times, hassle with heavy luggage, and potential delays.</p>
    
    <div class="bg-gray-50 border-l-4 border-gold p-6 rounded-lg mb-8">
      <h3 class="text-xl font-bold mb-3">Cost vs Value Breakdown (${priceContext})</h3>
      <ul class="space-y-3">
        <li class="flex items-start"><svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <strong>Direct Route:</strong> Door-to-door service directly to your hotel.</li>
        <li class="flex items-start"><svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <strong>English-Speaking Drivers:</strong> Clear communication and peace of mind.</li>
        <li class="flex items-start"><svg class="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <strong>Fixed Pricing:</strong> No hidden meters or traffic delay surcharges.</li>
      </ul>
    </div>
  `;

  // Internal Link section to pass link juice
  const linking = `
    <h2 class="text-3xl font-bold text-navy mt-10 mb-6">Explore Our Popular Routes</h2>
    <p class="mb-6">
      If you want to ensure your trip is perfectly coordinated, we highly recommend reviewing our dedicated 
      <a href="${internalLink}" class="text-gold font-bold hover:underline">Specialty Transfer Services</a>. 
      Whether you need an airport pickup, a comfortable intercity ride to Florence, or a scenic drive along the Amalfi Coast, booking in advance is your safest bet.
    </p>
  `;

  // Explicit CTA element built right into the content
  const cta = `
    <div class="my-12 bg-navy text-white rounded-2xl p-8 text-center shadow-lg border border-gold/20">
      <h3 class="text-3xl font-bold mb-4">Ready to Secure Your Transfer?</h3>
      <p class="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
        Don't leave your transportation to chance. Get a guaranteed fixed rate and a professional driver waiting for you.
      </p>
      <a href="/book-now" class="inline-block bg-gold hover:bg-white hover:text-navy text-navy font-bold py-4 px-10 rounded-xl transition-all duration-300 text-lg shadow-md transform hover:-translate-y-1">
        Book Your Transfer Now
      </a>
    </div>
  `;

  const outro = `
    <h2 class="text-3xl font-bold text-navy mt-10 mb-6">Final Thoughts on ${originalTitle}</h2>
    <p class="mb-6">
      Mastering everything about <strong>${keyword}</strong> sets the stage for a wonderful Italian holiday. By choosing a top-rated professional service, you secure comfort, safety, and a VIP experience right from the start.
    </p>
  `;

  return `${intro}${comparison}${linking}${cta}${outro}`;
}

async function seed() {
  console.log("Starting to execute SEO optimization update on 30 articles...");
  
  const { data: authorData } = await supabase
    .from('bloggers')
    .select('id')
    .limit(1)
    .single();

  if (!authorData) {
    console.error("No author found. Cannot proceed.");
    return;
  }

  const authorId = authorData.id;
  let successCount = 0;

  for (const article of articlesData) {
    const slug = slugify(article.originalTitle); // Keeping old slug
    const content = generateContent(article);
    
    const { error } = await supabase.from('blogs').upsert({
      title: article.originalTitle, // Keep title consistent or use metaTitle if preferred, but usually meta is seo_title
      slug,
      excerpt: article.metaDescription, // Use engaging meta description as excerpt
      content,
      category: article.intent.includes('Commercial') ? 'Commercial Guide' : 'Travel Guide',
      status: 'published',
      author_id: authorId,
      read_time: '6 min read',
      seo_title: article.metaTitle,
      seo_description: article.metaDescription,
      focus_keyword: article.keyword,
      updated_at: new Date().toISOString()
    }, { onConflict: 'slug' });

    if (error) {
      console.error(`Error updating ${article.originalTitle}:`, error.message);
    } else {
      console.log(`Successfully updated SEO for: ${article.originalTitle}`);
      successCount++;
    }
  }

  console.log(`SEO Optimization complete! Updated ${successCount} articles.`);
}

seed();
