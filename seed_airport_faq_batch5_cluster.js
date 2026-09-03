/** Fifth batch of the Airport FAQs cluster — one new EN post from
 *  docs/seo-topic-clusters-plan.md's Airport FAQs block (item 44): where
 *  customs and immigration are actually cleared on a connecting international
 *  flight through Italy. Deliberately distinct from the already-published
 *  italy-airport-customs-arrivals post (which covers the green/red channel
 *  system, duty-free limits and cash declaration for a single-leg arrival) —
 *  this one answers the specific connecting-flight logistics question of
 *  WHERE each checkpoint happens when there's a layover.
 *  Facts verified via live web search (Sep 2026): Schengen immigration is
 *  cleared at the first Schengen entry point, customs at the final
 *  destination (checked baggage isn't available until then), and EES
 *  biometric registration applies at first entry even when just transiting
 *  onward to another Schengen country.
 *  Run: node seed_airport_faq_batch5_cluster.js */
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

const post = {
    title: "Do You Clear Customs at Your First or Final Italian Airport?",
    slug: "italy-customs-connecting-flight",
    category: "Airport Guides",
    read_time: "6 min read",
    seo_title: "Connecting Flights to Italy: Where Do You Clear Customs?",
    seo_description: "Flying into Italy with a connection? Here's exactly where immigration and customs actually happen — and it's not always the same airport.",
    focus_keyword: "italy customs connecting flight",
    excerpt: "On a connecting flight into Italy, immigration and customs don't happen at the same checkpoint — here's exactly where each one takes place.",
    featured_image_url: "/images/airport-transfer.webp",
    content: `
<p>If your flight to Italy involves a connection — landing at one airport and continuing on to another — it's a fair question where you actually deal with passport control and customs. The honest answer is that the two checkpoints don't happen at the same place, and mixing them up is a common source of confusion at the gate.</p>

${cta("Whichever airport your flight actually clears, your driver tracks the real arrival time at your final airport and adjusts automatically.", "/services/airport-transfers", "See Airport Transfer Options")}

<h2 id="immigration">Immigration: Cleared at Your First Schengen Airport</h2>
<p>If you're arriving from outside the Schengen Area and connecting onward to another Schengen country — for example, landing in Rome and continuing to Milan — passport control happens at that <strong>first Schengen airport</strong>, not your final destination. Once you've been stamped or biometrically registered into the Schengen Area, moving on to a connecting flight within it is treated the same as a domestic transfer, with no further immigration check.</p>
<p>If both your origin and your final destination are already inside the Schengen Area, you don't clear immigration at all during the connection — there's no external border being crossed.</p>

<h2 id="customs">Customs: Cleared at Your Final Destination</h2>
<p>Customs works the other way around. You go through the green or red channel — declaring or not declaring goods — at the airport where you actually collect your checked luggage, which is your <strong>final destination</strong>, not the connecting airport. This is largely a practical matter: your bags are checked through to the final airport, so there's nothing to declare or inspect until you actually have them in hand.</p>

${cta("Landing at your final Italian airport after a long journey with a connection? A private transfer means no working out where to go next with tired kids or heavy bags.", "/services/airport-transfers", "See Airport Transfer Options")}

<h2 id="ees">The EES Biometric Step Still Happens at First Entry</h2>
<p>One thing that catches travellers out: the EU's Entry/Exit System (EES), which records fingerprints and a facial photo for non-EU, third-country nationals, is completed at your <strong>first Schengen entry point</strong> — even if that airport isn't your final destination. It's a one-time registration per trip, so you won't repeat it at the connecting airport, but you do need to budget time for it at the first stop, not assume it happens later where you might have a longer layover.</p>

<h2 id="practical-example">A Practical Example: Rome to Milan</h2>
<p>Say you're flying from outside Europe into Rome Fiumicino, connecting onward to Milan. At Fiumicino, you clear immigration and, if applicable, the EES biometric step. You do not collect luggage or pass through customs there — your bags stay checked through. You then take your connecting flight to Milan, and it's only at Milan that you collect your bags and go through the customs channel.</p>
<p>For a Schengen-to-Schengen connection like this, travel advice generally suggests allowing a comfortable buffer between flights — commonly cited guidance is at least 90 minutes — to account for the walk between gates and any queues at the immigration and EES step.</p>

<h2 id="faqs">Frequently Asked Questions</h2>
<h3 id="faq-1">If I'm connecting through Rome to Milan, do I clear customs in Rome?</h3>
<p>No — customs is cleared at your final destination, where you actually collect your checked luggage. In Rome you'd clear immigration (and the EES biometric step, if applicable); customs happens in Milan.</p>
<h3 id="faq-2">Do I need to clear immigration again at my connecting airport?</h3>
<p>No, not if you're connecting between two Schengen countries — once you've cleared immigration at your first Schengen entry point, onward Schengen connections are treated like a domestic transfer.</p>
<h3 id="faq-3">Does the EES biometric check happen at every airport I pass through?</h3>
<p>No — it's a one-time registration per trip, completed at your first Schengen entry point, not repeated at a connecting airport.</p>
<h3 id="faq-4">How much time should I leave for a Schengen-to-Schengen connection?</h3>
<p>A commonly cited guideline is at least around 90 minutes, to allow for moving between gates and any queues at immigration or the EES step at the first airport.</p>
<h3 id="faq-5">What if both my origin and final destination are inside the Schengen Area?</h3>
<p>Then you don't clear immigration at all during the connection, since no external Schengen border is being crossed — you'll only deal with the standard customs channel at your final airport if you have something to declare.</p>
${related([
  { href: '/blog/italy-airport-customs-arrivals', label: 'What Happens at Italian Airport Customs When You Land?' },
  { href: '/blog/find-exit-meet-driver-italy', label: 'How to Find the Right Exit to Meet a Driver in Italian Airports' },
  { href: '/airport/rome-fiumicino', label: 'Rome Fiumicino Airport Guide' },
  { href: '/services/airport-transfers', label: 'Airport Transfer Services' },
  { href: '/book-now', label: 'Book Your Airport Transfer' },
])}
`
};

async function run() {
  const { data: author, error: aerr } = await supabase.from('bloggers').select('id').limit(1).single();
  if (aerr || !author) { console.error('No author found:', aerr); process.exit(1); }

  const { data, error } = await supabase
    .from('blogs')
    .insert({ ...post, status: 'published', author_id: author.id, published_at: new Date().toISOString(), tags: [] })
    .select('slug');
  if (error) { console.error('Insert error:', error); process.exit(1); }
  console.log('Inserted:', data);
}

run();
