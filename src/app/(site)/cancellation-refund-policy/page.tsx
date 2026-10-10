import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';
import { itHreflangFor } from '@/lib/i18n/page-registry';

export const metadata: Metadata = {
  title: "Cancellation, Refund & Missed Transfer Policy",
  description: "How cancellations, refunds, no-shows and delays are handled for Italy Taxi Service bookings: notice periods, waiting times, the evidence we review, and how to submit a request.",
  alternates: {
    canonical: "/cancellation-refund-policy",
    languages: itHreflangFor('/cancellation-refund-policy'),
  },
};

const sections = [
  { id: "who", title: "1. Who You Are Booking With" },
  { id: "how-to-cancel", title: "2. How to Cancel" },
  { id: "schedule", title: "3. Cancellation Schedule" },
  { id: "no-show", title: "4. No-Show & Failed Pickup" },
  { id: "delays", title: "5. Delays, Strikes & Missed Flights" },
  { id: "claims", title: "6. Refund Claims & Evidence" },
  { id: "payments", title: "7. Payments & Refund Processing" },
  { id: "we-cancel", title: "8. If We Cancel" },
  { id: "rights", title: "9. Your Statutory Rights" },
  { id: "submit", title: "10. Submitting a Request" },
  { id: "faq", title: "11. FAQ" },
];

export default function CancellationRefundPolicyPage() {
  const cell = "px-5 py-3";

  return (
    <main className="min-h-screen font-inter">
      <Navbar />
      <PageHero
        titleTop="Cancellation, Refund &amp;"
        titleBottom="Missed Transfer Policy"
        description="How we handle cancellations, refunds, no-shows and delays — including what we need from you to review a claim."
        backgroundImage="/images/hero.png"
        breadcrumbs={[{ name: "Cancellation & Refund Policy", item: "/cancellation-refund-policy" }]}
      />

      <div className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Sticky sidebar navigation */}
            <aside className="lg:w-64 shrink-0">
              <div className="lg:sticky lg:top-8">
                <p className="text-gold text-xs font-bold uppercase tracking-[0.3em] mb-4">Contents</p>
                <nav className="space-y-1">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block text-sm text-gray-500 hover:text-gold hover:translate-x-1 transition-all py-1 border-l-2 border-transparent hover:border-gold pl-3"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
                <div className="mt-8 p-4 bg-navy rounded-2xl text-white text-xs leading-relaxed">
                  <p className="font-bold text-gold mb-2">Last Updated</p>
                  <p>10 October 2026</p>
                  <p className="mt-2 text-gray-400">Submit a request to</p>
                  <a href="mailto:italytaxiservicee@gmail.com" className="text-gold hover:underline break-all">italytaxiservicee@gmail.com</a>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <article className="flex-1 prose prose-lg max-w-none text-gray-700">

              <p className="text-gray-500 text-sm mb-10">
                This policy explains how <strong>Italy Taxi Service</strong> handles cancellations, refunds, no-shows and
                journeys affected by delays. It sits alongside our{' '}
                <Link href="/terms-and-conditions" className="text-gold font-semibold hover:underline">Terms &amp; Conditions</Link>,
                which remain the governing agreement for every booking. Where this policy gives more detail than the
                Terms, it is intended to explain the same rules rather than replace them. Nothing in this policy limits
                rights you have under applicable Italian or EU law.
              </p>

              {/* 1 */}
              <section id="who" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">1. Who You Are Booking With</h2>
                <p>Italy Taxi Service accepts your booking as the contracting party. As set out in our Terms &amp; Conditions, Italy Taxi Service acts as the operator for all journeys and is responsible for the fulfilment of the contracted service. Where a journey is fulfilled by a vetted partner driver, Italy Taxi Service remains the contracting party and bears full responsibility for service delivery.</p>
                <p>In practice this means one point of contact throughout. We issue your quotation, we confirm your booking, and we handle any cancellation or refund request — including where the journey itself was performed by a licensed NCC partner driver, and including where you paid that driver directly.</p>
                <p>You do not need to approach the driver to resolve a billing or refund question. Please send it to us.</p>
              </section>

              {/* 2 */}
              <section id="how-to-cancel" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">2. How to Cancel</h2>
                <p>Cancellations must be made <strong>in writing</strong>, by email or WhatsApp message. We ask for written notice because the timestamp of your message is what determines which part of the cancellation schedule applies.</p>
                <p>Please include your <strong>booking reference</strong>, the <strong>pickup date and time</strong>, and the <strong>name the booking was made under</strong>. Without these we may not be able to identify the booking quickly, which can cost you time inside a notice window.</p>
                <p><strong>A cancellation request is not the same as a confirmed cancellation.</strong> Your booking is cancelled when we reply to confirm it. If you have sent a request and not received a confirmation, please follow it up rather than assume the booking has been closed — particularly if your pickup is near. A driver may otherwise still be dispatched.</p>
                <p>If you need to change rather than cancel a booking, amendments to date, time, address or vehicle are accepted free of charge when requested more than 24 hours before pickup, subject to availability. An amendment is often better for you than a cancellation and rebooking.</p>
              </section>

              {/* 3 */}
              <section id="schedule" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">3. Cancellation Schedule</h2>
                <p>Notice is measured from the time of your written cancellation message to the scheduled pickup time.</p>
                <div className="overflow-x-auto my-6">
                  <table className="w-full border-collapse text-base">
                    <thead>
                      <tr className="bg-navy text-white text-left text-xs uppercase tracking-wider">
                        <th className={cell}>Notice Given Before Pickup</th>
                        <th className={cell}>Cancellation Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-[#FBF8F0]">
                        <td className={cell}>More than 24 hours</td>
                        <td className={`${cell} text-green-700 font-semibold`}>Free cancellation — full refund of eligible prepaid amounts</td>
                      </tr>
                      <tr>
                        <td className={cell}>Between 6 and 24 hours</td>
                        <td className={cell}>50% of the total fare</td>
                      </tr>
                      <tr>
                        <td className={cell}>Less than 6 hours, or no-show</td>
                        <td className={`${cell} text-red-600 font-semibold`}>100% of the total fare</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p><strong>Cancelling between 24 and 48 hours before pickup is free.</strong> Our free-cancellation window is anything more than 24 hours&apos; notice, so a cancellation made two days before your transfer, or two weeks before, is treated the same way.</p>
                <p>These are our own commercial terms, offered voluntarily. They apply to customer-initiated cancellations and are subject to applicable law and to the terms confirmed in your individual booking, which take precedence if they differ.</p>
              </section>

              {/* 4 */}
              <section id="no-show" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">4. No-Show &amp; Failed Pickup</h2>
                <p>A booking may be treated as a no-show where, after the included waiting period has passed, the passenger has not appeared at the agreed pickup point and cannot be reached. It may also apply where the pickup information supplied to us was incorrect and the driver could not reasonably locate the passenger.</p>
                <p><strong>Included waiting time</strong> — the following is included in the fare at no extra charge:</p>
                <ul>
                  <li><strong>International flights:</strong> 60 minutes from actual landing time</li>
                  <li><strong>Domestic flights:</strong> 30 minutes from actual landing time</li>
                  <li><strong>Train station pickups:</strong> 20 minutes from scheduled arrival time</li>
                  <li><strong>Hotel or address pickups:</strong> 15 minutes from the scheduled pickup time</li>
                </ul>
                <p>For airport pickups the clock starts when your aircraft actually lands, not at its scheduled time, because we monitor flights and adjust the pickup automatically.</p>
                <p><strong>Contact procedure.</strong> Before a booking is treated as a no-show, the driver will attempt to reach you on the number supplied with the booking, and we will attempt contact by WhatsApp or email. Please save your driver&apos;s number when we send it and make contact if you are delayed — in the large majority of cases a short message prevents a no-show entirely. If you are held up at baggage reclaim, at passport control, or by anything else, tell us; waiting time can often be extended by agreement.</p>
                <p><strong>Where a no-show is confirmed, the full agreed fare may be payable.</strong> This applies whether you prepaid, agreed to pay the driver directly, or were due to be invoiced after the transfer. The method of payment you selected does not by itself cancel the payment obligation you agreed to when the booking was confirmed, because the vehicle and driver were committed to your journey.</p>
                <p>We will not claim that every no-show charge is enforceable in every circumstance. If you believe a no-show was recorded wrongly, or that there were exceptional circumstances, tell us and we will review it under section 6. We would rather look at the facts than argue about the principle.</p>
              </section>

              {/* 5 */}
              <section id="delays" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">5. Delays, Strikes &amp; Missed Flights</h2>
                <p>Road journeys in Italy are affected from time to time by traffic congestion, roadworks and closures, demonstrations, strikes, accidents, severe weather and other events outside anyone&apos;s control. This section explains how we approach those situations.</p>
                <p><strong>What we ask of you.</strong> Please give us accurate flight or train details when booking, and allow a realistic margin — particularly for a departure, a cruise embarkation, or any journey with a fixed deadline. If you ask for a pickup time that leaves no margin, we will normally say so, but the choice of timing is yours.</p>
                <p><strong>What we will do.</strong> Where a material delay arises or looks likely, the driver and our team will aim to tell you as promptly as is reasonably possible, and to discuss the options with you. We would rather give you bad news early than let you find out at the terminal.</p>
                <p><strong>How refund questions are approached.</strong> A delay does not automatically mean a refund is owed, and it does not automatically mean no refund is owed. It depends on what caused the delay, what was agreed, what was communicated, and what could reasonably have been done. We do not treat an external disruption as automatically releasing us or the driver from all responsibility — that is not how we read our obligations, and it is not a position we take.</p>
                <p>Requests involving a missed flight, a missed connection, or other consequential costs are reviewed individually, on the evidence, under the terms confirmed for your booking and applicable law. We do not offer a blanket promise to cover replacement flights, hotels, replacement tickets or other onward expenses, and we would rather say that plainly than imply a guarantee we have not given. Equally, we do not refuse such requests as a matter of course.</p>
                <p>If strike action is announced for your travel date, it is worth planning around it in advance. Our{' '}
                  <Link href="/blog/italy-train-strike-2026" className="text-gold font-semibold hover:underline">guide to how Italian transport strikes work</Link>{' '}
                  explains guaranteed-service rules and where to verify a strike officially.
                </p>
              </section>

              {/* 6 */}
              <section id="claims" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">6. Refund Claims &amp; Evidence</h2>
                <p>Where a claim is disputed, or where you are claiming costs beyond the fare itself, we review it on the available evidence. Depending on the claim, we may ask you for:</p>
                <ul>
                  <li>Your booking reference and booking confirmation</li>
                  <li>The agreed pickup time and pickup location</li>
                  <li>Airline confirmation or documentation relating to a missed flight or changed schedule</li>
                  <li>Rebooking receipts or other evidence of the costs you are claiming</li>
                  <li>Relevant messages or call records concerning the transfer and any delay</li>
                </ul>
                <p>We may request further documentation where it is reasonably necessary to assess the claim, and we may verify relevant information where it is appropriate and lawful to do so.</p>
                <p>Three commitments about how we handle this:</p>
                <ul>
                  <li><strong>We will not reject a claim simply because documents arrived a few days later.</strong> People deal with the immediate problem first and the paperwork afterwards, which is reasonable.</li>
                  <li><strong>We will not accuse you of submitting false documents without evidence.</strong> If something does not reconcile, we will tell you what does not match and ask about it.</li>
                  <li><strong>We will give you a reason.</strong> If a claim is declined in whole or in part, we will explain which facts and terms we relied on.</li>
                </ul>
                <p>If you disagree with our assessment, you can escalate it to us for a further review, and you retain any rights you have to pursue the matter through consumer dispute-resolution channels or the courts.</p>
              </section>

              {/* 7 */}
              <section id="payments" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">7. Payments &amp; Refund Processing</h2>
                <p>We operate more than one payment arrangement, and what a &ldquo;refund&rdquo; means in practice depends on which one applies to your booking.</p>
                <p><strong>Payment to the driver on the day.</strong> This is our standard default method. Because nothing is collected in advance, there is normally no prepaid amount to return. If you cancel inside a chargeable window, any applicable cancellation fee is confirmed with you and invoiced rather than deducted from a prepayment.</p>
                <p><strong>Card payment in advance.</strong> Where a card payment has been arranged by secure payment link, an approved refund of eligible prepaid amounts is returned to the original payment method where practicable. As stated in our Terms, refunds on advance-paid bookings are processed within <strong>7 business days</strong> of the cancellation confirmation. &ldquo;Where practicable&rdquo; matters: if the original method can no longer receive a refund — an expired or closed card, for example — we will agree an alternative route with you.</p>
                <p><strong>Corporate accounts and invoiced bookings.</strong> Where a booking is invoiced under agreed account terms, cancellation charges and credits are applied to the account rather than refunded as a separate transaction.</p>
                <p>In every case the cancellation or refund request comes to Italy Taxi Service, not to the driver, and we handle it.</p>
              </section>

              {/* 8 */}
              <section id="we-cancel" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">8. If We Cancel</h2>
                <p>Very occasionally we may need to cancel a booking in exceptional circumstances beyond our reasonable control — for example a natural event, civil unrest, or a government-imposed travel restriction. In those cases a full refund of amounts paid is issued, as set out in our Terms &amp; Conditions.</p>
                <p>Where we cancel for any reason, we will tell you as soon as we can and, where it is possible to do so, offer an alternative arrangement before falling back on a refund.</p>
              </section>

              {/* 9 */}
              <section id="rights" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">9. Your Statutory Rights</h2>
                <p>The schedule in section 3 is a <strong>voluntary commercial policy</strong> that we offer. It is not a statement of your statutory rights, and it does not replace them.</p>
                <p>One point is worth being clear about, because it is widely misunderstood: the standard 14-day right of withdrawal that applies to many online purchases is generally <em>not</em> available for passenger transport services. Under the EU Consumer Rights Directive (2011/83/EU), contracts for passenger transport services are excluded from most of the Directive&apos;s scope by Article 3(3)(k), with certain provisions still applying. That is why our free-cancellation window is a commercial commitment we choose to offer rather than a statutory cooling-off period.</p>
                <p>Separately from that, protections that <strong>do</strong> apply are not affected by this policy. In particular, rules on unfair contract terms under Italian and EU consumer law continue to apply, and nothing here is intended to exclude or limit liability where the law does not permit it — including liability for death or personal injury caused by negligence. We do not operate a blanket exclusion of liability or of consequential losses, and this policy should not be read as one.</p>
                <p>If any part of this policy were found to be unenforceable, the remainder continues to apply. For the governing law and dispute provisions, see our{' '}
                  <Link href="/terms-and-conditions" className="text-gold font-semibold hover:underline">Terms &amp; Conditions</Link>.
                </p>
                <p className="text-sm text-gray-500">This section describes the general legal background as we understand it and is not legal advice. Your own circumstances may differ.</p>
              </section>

              {/* 10 */}
              <section id="submit" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">10. Submitting a Request</h2>
                <p>Send cancellation and refund requests to us in writing, with your booking reference:</p>
                <ul>
                  <li><strong>Email:</strong> <a href="mailto:italytaxiservicee@gmail.com" className="text-gold font-semibold hover:underline">italytaxiservicee@gmail.com</a></li>
                  <li><strong>WhatsApp:</strong> the number shown on your booking confirmation</li>
                  <li><strong>Contact form:</strong> <Link href="/contact" className="text-gold font-semibold hover:underline">our contact page</Link></li>
                </ul>
                <p>We will acknowledge the request and confirm the outcome. Remember that the cancellation takes effect when we confirm it, not when you send the request.</p>
              </section>

              {/* 11 */}
              <section id="faq" className="mb-4 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">11. FAQ</h2>

                <h3 className="text-lg font-bold text-navy mt-6 mb-2">Can I cancel and receive a refund?</h3>
                <p>Yes, if you give more than 24 hours&apos; notice in writing before the scheduled pickup. In that case there is no cancellation fee and eligible prepaid amounts are refunded in full.</p>

                <h3 className="text-lg font-bold text-navy mt-6 mb-2">What happens if I cancel less than 24 hours before pickup?</h3>
                <p>A cancellation between 6 and 24 hours before pickup carries a fee of 50% of the fare. Less than 6 hours before pickup, the full fare applies.</p>

                <h3 className="text-lg font-bold text-navy mt-6 mb-2">What happens if I cancel between 24 and 48 hours before pickup?</h3>
                <p>It is free. Our free-cancellation window covers any notice of more than 24 hours, so 24 to 48 hours before pickup is inside it and no fee applies.</p>

                <h3 className="text-lg font-bold text-navy mt-6 mb-2">What happens if I do not show up?</h3>
                <p>If you have not appeared and cannot be reached once the included waiting period has passed, the booking may be treated as a no-show and the full fare may be payable. Contacting the driver or us if you are delayed usually prevents this.</p>

                <h3 className="text-lg font-bold text-navy mt-6 mb-2">What happens if the driver is delayed by traffic or a protest?</h3>
                <p>We will tell you as promptly as we reasonably can and discuss the options. A delay does not automatically mean a refund is owed, and it does not automatically mean none is owed — we look at the cause, what was agreed and what was communicated. We do not treat an external disruption as automatically ending our responsibility.</p>

                <h3 className="text-lg font-bold text-navy mt-6 mb-2">What happens if I miss my flight?</h3>
                <p>Tell us as soon as possible and we will review it individually on the evidence. We do not promise to cover replacement flights, hotels or other onward costs, because that depends on the cause and on the terms of your booking. We also do not decline such requests automatically.</p>

                <h3 className="text-lg font-bold text-navy mt-6 mb-2">What evidence is needed to review a refund request?</h3>
                <p>Usually your booking reference and confirmation, the agreed pickup time and place, and — where relevant — airline documentation, rebooking receipts and the relevant messages. We may ask for more if it is reasonably necessary.</p>

                <h3 className="text-lg font-bold text-navy mt-6 mb-2">What happens if I paid the driver directly?</h3>
                <p>Send your request to us, not to the driver. Italy Taxi Service is the contracting party and handles cancellations and refunds regardless of how payment was made. Where nothing was prepaid there is no prepayment to return, so any applicable fee is confirmed with you and invoiced instead.</p>

                <h3 className="text-lg font-bold text-navy mt-6 mb-2">How do I submit a cancellation or refund request?</h3>
                <p>In writing, by email to italytaxiservicee@gmail.com, by WhatsApp to the number on your confirmation, or through our contact page — always with your booking reference. The timestamp of your written message determines which part of the schedule applies.</p>
              </section>

              <p className="text-sm text-gray-500 border-t border-gray-100 pt-6">
                This policy should be read together with our{' '}
                <Link href="/terms-and-conditions" className="text-gold font-semibold hover:underline">Terms &amp; Conditions</Link> and{' '}
                <Link href="/privacy-policy" className="text-gold font-semibold hover:underline">Privacy Policy</Link>.
              </p>

            </article>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
