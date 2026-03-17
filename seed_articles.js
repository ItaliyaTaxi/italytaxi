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

const titles = [
  "Complete Guide to Taxi Services in Italy for Tourists",
  "How Taxi Services Work in Italy: A Beginner’s Guide",
  "Average Taxi Prices in Italy: What Travelers Should Expect",
  "How to Book a Taxi in Italy Easily as a Tourist",
  "Taxi Rules and Regulations in Italy Every Traveler Should Know",
  "Tips for Using Taxi Services Safely in Italy",
  "Private Taxi vs Public Transport in Italy: Which Is Better for Travelers",
  "Common Taxi Scams in Italy and How to Avoid Them",
  "Do Taxis in Italy Accept Credit Cards? A Complete Guide",
  "Tipping Taxi Drivers in Italy: What You Should Know",
  "How Airport Transfers Work in Italy for International Travelers",
  "Best Ways to Travel from Italian Airports to City Centers",
  "Taxi vs Train from Italian Airports: Which Option Is Better",
  "What to Expect When Booking an Airport Transfer in Italy",
  "Travel Time from Major Italian Airports to City Centers",
  "Best Ways to Travel Between Cities in Italy",
  "Transportation Options for Tourists Visiting Italy",
  "Is Renting a Car Better Than Taking a Taxi in Italy?",
  "How Tourists Can Travel Comfortably Across Italy",
  "Best Transportation Options for Families Traveling in Italy",
  "Getting Around Rome: Taxi and Transportation Guide",
  "Getting Around Milan: Taxi and Travel Tips",
  "Transportation Guide for Visitors in Venice",
  "Getting Around Florence: Taxi and Travel Guide",
  "Transportation Options in Naples for Tourists",
  "Essential Travel Tips for First-Time Visitors to Italy",
  "Best Time to Travel Around Italy Without Traffic",
  "How to Plan Comfortable City-to-City Travel in Italy",
  "What Tourists Should Know Before Taking a Taxi in Italy",
  "Comprehensive Transportation Guide for Traveling Across Italy"
];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

function generateContent(title) {
  // Generate a substantial SEO-friendly body for each title
  const intro = `<p>Planning a trip to Italy involves many logistics, and <strong>${title}</strong> is one of the most important aspects to understand. Whether you are arriving at a major airport or navigating the historic streets of Rome, having reliable transportation can make your journey much smoother.</p>`;
  
  const section1 = `<h2>Understanding the Basics of ${title}</h2>
  <p>When you arrive in a new country, the local transportation system can seem complex. In Italy, taxis are strictly regulated by municipal authorities. This ensures that fares are standardized and drivers are licensed, providing a level of safety and reliability for international travelers.</p>
  <p>Most travelers find that for airport transfers or moving between city centers with luggage, a professional taxi or private transfer is the most comfortable option. It eliminates the need to navigate crowded public transit systems while carrying heavy bags.</p>`;

  const tips = `<h2>Key Tips for a Better Experience</h2>
  <ul>
    <li><strong>Use Official Ranks:</strong> Always pick up a taxi from a designated "Posteggio Taxi" rank.</li>
    <li><strong>Verify the Meter:</strong> In most cities, the meter (tassametro) should be clearly visible and started at the beginning of your trip.</li>
    <li><strong>Ask for Rates:</strong> For long-distance or airport trips, many cities offer fixed rates (tariffe predeterminate). Always confirm this with the driver before starts.</li>
    <li><strong>Prepare Cash and Cards:</strong> While many modern taxis accept credit cards, it is always wise to have some Euro cash for smaller fares or as a backup.</li>
  </ul>`;

  const dataSection = `<h2>Comparison of Options</h2>
  <p>To help you decide, here is a quick breakdown of what to expect when looking into <em>${title}</em> compared to other methods:</p>
  <table border="1" style="width:100%; border-collapse: collapse; margin-bottom: 20px;">
    <thead>
      <tr style="background-color: #f2f2f2;">
        <th style="padding: 10px;">Factor</th>
        <th style="padding: 10px;">Professional Taxi</th>
        <th style="padding: 10px;">Public Transportation</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 10px;">Convenience</td>
        <td style="padding: 10px;">Door-to-door, 24/7</td>
        <td style="padding: 10px;">Fixed stops, scheduled times</td>
      </tr>
      <tr>
        <td style="padding: 10px;">Average Cost</td>
        <td style="padding: 10px;">Moderate to High</td>
        <td style="padding: 10px;">Low</td>
      </tr>
      <tr>
        <td style="padding: 10px;">Travel Time</td>
        <td style="padding: 10px;">Direct and Efficient</td>
        <td style="padding: 10px;">Subject to stops and delays</td>
      </tr>
    </tbody>
  </table>`;

  const faq = `<h2>Frequently Asked Questions</h2>
  <p><strong>Is it necessary to tip drivers?</strong><br>
  In Italy, tipping is not mandatory. However, rounding up to the nearest Euro is common and appreciated for good service.</p>
  <p><strong>Can I book in advance?</strong><br>
  Yes, pre-booking shared or private transfers is highly recommended for airport arrivals to avoid queues and ensure a fixed price.</p>`;

  const conclusion = `<h2>Final Thoughts on ${title}</h2>
  <p>Mastering <strong>${title}</strong> will undoubtedly enhance your Italian holiday. By choosing professional services, you ensure a stress-free start to your adventures in one of the world's most beautiful destinations. Remember to stay informed, plan ahead, and enjoy the sights!</p>`;

  return `${intro}${section1}${tips}${dataSection}${faq}${conclusion}`;
}

async function seed() {
  console.log("Starting to seed 30 articles...");
  
  // Get the author ID first (Italy Taxi Service Team)
  const { data: authorData } = await supabase
    .from('bloggers')
    .select('id')
    .limit(1)
    .single();

  if (!authorData) {
    console.error("No author found. Please run the migration and create a blogger first.");
    return;
  }

  const authorId = authorData.id;

  for (const title of titles) {
    const slug = slugify(title);
    const content = generateContent(title);
    const excerpt = `A detailed guide on ${title.toLowerCase()} for travelers visiting Italy. Learn everything from costs to official regulations.`;
    
    const { error } = await supabase.from('blogs').upsert({
      title,
      slug,
      excerpt,
      content,
      category: 'Travel Guide',
      status: 'published',
      author_id: authorId,
      read_time: '6 min read',
      seo_title: `${title} | Italy Travel Guide`,
      seo_description: excerpt,
      focus_keyword: title.split(' ').slice(0, 3).join(' '),
      published_at: new Date().toISOString()
    }, { onConflict: 'slug' });

    if (error) {
      console.error(`Error inserting ${title}:`, error.message);
    } else {
      console.log(`Successfully added: ${title}`);
    }
  }

  console.log("Seeding complete!");
}

seed();
