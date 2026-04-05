import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms & Conditions | Private Taxi Service",
  description: "Read the full terms and conditions for booking private taxi and transfer services with Italy Taxi Service. Pricing, cancellations, liability, and service agreements.",
  alternates: {
    canonical: "/terms-and-conditions",
  }
};

const sections = [
  { id: "agreement", title: "1. Service Agreement" },
  { id: "booking", title: "2. Booking & Confirmation" },
  { id: "pricing", title: "3. Pricing & Payment" },
  { id: "cancellation", title: "4. Cancellation & Refunds" },
  { id: "waiting", title: "5. Waiting Time & Delays" },
  { id: "passenger", title: "6. Passenger Responsibilities" },
  { id: "conduct", title: "7. Driver Conduct & Standards" },
  { id: "liability", title: "8. Liability & Insurance" },
  { id: "complaints", title: "9. Complaints & Disputes" },
  { id: "law", title: "10. Governing Law" },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen font-inter">
      <Navbar />
      <PageHero
        titleTop="Terms &"
        titleBottom="Conditions"
        description="Please read these terms carefully before booking. By confirming a reservation you agree to the conditions set out below."
        backgroundImage="/images/hero.png"
        breadcrumbs={[{ name: "Terms & Conditions", item: "/terms-and-conditions" }]}
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
                  <p>1 January 2025</p>
                  <p className="mt-2 text-gray-400">Questions? Email us at</p>
                  <a href="mailto:info@italytaxiservice.com" className="text-gold hover:underline break-all">info@italytaxiservice.com</a>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <article className="flex-1 prose prose-lg max-w-none text-gray-700">

              <p className="text-gray-500 text-sm mb-10">
                These Terms and Conditions govern the relationship between <strong>Italy Taxi Service</strong> ("we", "us", "our") and the customer ("you", "the passenger") for all private transfer and taxi bookings made through our website, by telephone, email, or WhatsApp. By completing a booking with us you confirm that you have read and accepted these terms.
              </p>

              {/* Section 1 */}
              <section id="agreement" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">1. Service Agreement</h2>
                <p>Italy Taxi Service provides private, pre-booked ground transportation across Italy. Our services include airport transfers, city-to-city transfers, hotel pickups, cruise port transfers, hourly taxi hire, private tours, and wedding transportation.</p>
                <p>A binding contract is formed between Italy Taxi Service and the customer at the moment we issue a written booking confirmation. This confirmation may be sent via email, WhatsApp message, or SMS. Verbal agreements do not constitute a confirmed booking.</p>
                <p>We reserve the right to refuse service to any passenger who is behaving in a manner that poses a risk to the driver, the vehicle, or other passengers. This includes but is not limited to: intoxication, verbal or physical aggression, and non-compliance with reasonable driver instructions.</p>
                <p>Italy Taxi Service acts as the operator for all journeys and is responsible for the fulfilment of the contracted service. Where a journey is fulfilled by a vetted partner driver, Italy Taxi Service remains the contracting party and bears full responsibility for service delivery.</p>
              </section>

              {/* Section 2 */}
              <section id="booking" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">2. Booking & Confirmation</h2>
                <p>All bookings must include the following information: full passenger name, pickup address, destination address, date and time of travel, number of passengers, and number of luggage items. For airport pickups, your flight number is also required.</p>
                <p>Bookings are accepted via our online booking form, by email to <a href="mailto:info@italytaxiservice.com" className="text-gold">info@italytaxiservice.com</a>, or by WhatsApp message. Bookings made by WhatsApp are confirmed once we send a written confirmation message.</p>
                <p>You are responsible for providing accurate information. Italy Taxi Service cannot be held liable for any missed pickup or service failure caused by incorrect details provided by the customer, including wrong flight numbers, incorrect addresses, or inaccurate travel dates.</p>
                <p>We recommend booking at least 24 hours in advance. Same-day bookings are accepted subject to availability and at our discretion. During peak travel periods — July, August, Easter, Christmas, and Italian public holidays — early booking is strongly advised.</p>
                <p>Booking amendments (change of date, time, address, or vehicle) must be communicated as early as possible. Amendments are accepted free of charge when requested more than 24 hours before the scheduled pickup time, subject to availability.</p>
              </section>

              {/* Section 3 */}
              <section id="pricing" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">3. Pricing & Payment</h2>
                <p>All prices quoted by Italy Taxi Service are fixed, all-inclusive fares. Our quotes include all applicable motorway tolls, road charges, fuel costs, parking, and waiting time within the complimentary grace period. No additional charges will be applied at the end of the journey without prior agreement.</p>
                <p>Prices are quoted in Euro (€) and are valid for the specific booking details confirmed at the time of quotation. Any changes to the booking details — including destination, date, time, vehicle type, or number of stops — may result in a revised price.</p>
                <p><strong>Payment methods accepted:</strong></p>
                <ul>
                  <li>Cash payment to the driver on the day of service (standard default method)</li>
                  <li>Credit or debit card payment (Visa, Mastercard) via secure online payment link</li>
                  <li>Bank transfer for corporate accounts and pre-approved advance bookings</li>
                </ul>
                <p>For corporate accounts with monthly invoicing, payment terms are net 30 days from invoice date unless otherwise agreed in writing. Late payments may be subject to statutory interest under applicable Italian commercial law.</p>
                <p>Prices may be subject to a surcharge for travel on Italian public holidays, journeys commencing between 22:00 and 06:00, and journeys on 24–26 December, 31 December, and 1 January. Any applicable surcharge will be disclosed at the time of quotation.</p>
              </section>

              {/* Section 4 */}
              <section id="cancellation" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">4. Cancellation & Refunds</h2>
                <p>Our cancellation policy is as follows:</p>
                <div className="overflow-x-auto my-6">
                  <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                    <thead className="bg-navy text-white">
                      <tr>
                        <th className="text-left px-5 py-3 font-semibold">Notice Given Before Pickup</th>
                        <th className="text-left px-5 py-3 font-semibold">Cancellation Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-gray-100 bg-white">
                        <td className="px-5 py-3">More than 24 hours</td>
                        <td className="px-5 py-3 text-green-600 font-semibold">Free cancellation — full refund</td>
                      </tr>
                      <tr className="border-t border-gray-100 bg-gray-50">
                        <td className="px-5 py-3">Between 6 and 24 hours</td>
                        <td className="px-5 py-3 text-amber-600 font-semibold">50% of the total fare</td>
                      </tr>
                      <tr className="border-t border-gray-100 bg-white">
                        <td className="px-5 py-3">Less than 6 hours / no-show</td>
                        <td className="px-5 py-3 text-red-600 font-semibold">100% of the total fare — non-refundable</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>Cancellations must be communicated in writing via email or WhatsApp message. The timestamp of your written cancellation message is used to determine the applicable cancellation policy.</p>
                <p>For advance-paid bookings, refunds will be processed within 7 business days of the cancellation confirmation. Refunds are issued to the original payment method.</p>
                <p>Italy Taxi Service reserves the right to cancel a booking in exceptional circumstances beyond our reasonable control (force majeure), including natural disasters, civil unrest, and government-imposed travel restrictions. In such cases, a full refund will be issued.</p>
              </section>

              {/* Section 5 */}
              <section id="waiting" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">5. Waiting Time & Delays</h2>
                <p>The following complimentary waiting time is included in all airport transfers:</p>
                <ul>
                  <li><strong>International flights:</strong> 60 minutes from actual landing time</li>
                  <li><strong>Domestic flights:</strong> 30 minutes from actual landing time</li>
                  <li><strong>Train station pickups:</strong> 20 minutes from scheduled arrival time</li>
                  <li><strong>Hotel / address pickups:</strong> 15 minutes from the scheduled pickup time</li>
                </ul>
                <p>We monitor all flights in real-time using live flight tracking data. If your flight is delayed, your driver's pickup time adjusts automatically at no charge. You will not be penalised for delays caused by airlines, air traffic control, or weather events.</p>
                <p>If you have not appeared or made contact within the complimentary waiting period, the driver may leave. In this event, the booking will be treated as a no-show and the full fare will be charged. To avoid this, please save your driver's mobile number and make contact if you are delayed.</p>
                <p>Additional waiting time beyond the complimentary period, at the passenger's request, may be charged at a waiting rate of €10 per 15 minutes. This will always be agreed with the passenger before the meter begins.</p>
              </section>

              {/* Section 6 */}
              <section id="passenger" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">6. Passenger Responsibilities</h2>
                <p>Passengers are responsible for being ready and available at the agreed pickup point at the booked time. Italy Taxi Service is not liable for missed connections, flights, trains, or events caused by the passenger's failure to be ready within the waiting period.</p>
                <p>All passengers must wear a seatbelt throughout the journey. Italian law requires all passengers in private vehicles to wear seatbelts, including rear passengers. Italy Taxi Service and its drivers accept no liability for passenger injury sustained as a result of the passenger's refusal to wear a seatbelt.</p>
                <p>Passengers must not consume food or alcohol inside the vehicle without the driver's permission. Passengers who cause damage to the vehicle — including but not limited to soiling caused by illness — may be charged a cleaning fee of up to €150, at the driver's discretion.</p>
                <p>Children must be seated in appropriate child restraint systems as required by Italian law. Child seats are available free of charge on request. If no child seat is requested and no seat is carried, the adult passenger accepts full responsibility for child seating arrangements.</p>
                <p>Smoking, including the use of e-cigarettes, is prohibited in all vehicles at all times.</p>
              </section>

              {/* Section 7 */}
              <section id="conduct" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">7. Driver Conduct & Service Standards</h2>
                <p>All Italy Taxi Service drivers are professionally licensed under Italian NCC (Noleggio Con Conducente) regulations. They are required to hold a valid professional driving licence, maintain a clean vehicle, and provide courteous, professional service at all times.</p>
                <p>Drivers will follow the most direct and appropriate route to the destination unless otherwise requested by the passenger. If the passenger requests an alternative route that results in a longer journey, the originally agreed fixed price remains valid — no additional charge will be applied.</p>
                <p>Our drivers are English-speaking. For passengers whose preferred language is not English, we will make reasonable efforts to assign a driver who speaks the passenger's language where available.</p>
              </section>

              {/* Section 8 */}
              <section id="liability" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">8. Liability & Insurance</h2>
                <p>Italy Taxi Service and all partner drivers carry comprehensive passenger liability insurance as required by Italian law. In the event of an accident caused by our driver's negligence, passengers are covered up to the limits of the applicable insurance policy.</p>
                <p>Italy Taxi Service accepts no liability for:</p>
                <ul>
                  <li>Delays caused by traffic, road closures, accidents, or other circumstances beyond our reasonable control</li>
                  <li>Missed flights, connections, or other transport as a result of the passenger not allowing sufficient travel time</li>
                  <li>Loss or damage to luggage or personal property unless caused directly by proven driver negligence</li>
                  <li>Medical conditions aggravated during transport that are pre-existing and not disclosed at time of booking</li>
                </ul>
                <p>Our maximum liability for any single booking shall not exceed the value of that booking. We strongly recommend that all passengers obtain appropriate travel insurance covering transportation disruption and personal property loss.</p>
              </section>

              {/* Section 9 */}
              <section id="complaints" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">9. Complaints & Disputes</h2>
                <p>We are committed to resolving any complaint promptly and fairly. If you experience any issue with our service, please contact us as soon as possible:</p>
                <ul>
                  <li><strong>Email:</strong> <a href="mailto:info@italytaxiservice.com" className="text-gold">info@italytaxiservice.com</a></li>
                  <li><strong>WhatsApp:</strong> <a href="https://wa.me/923148932631" target="_blank" rel="noopener noreferrer" className="text-gold">WhatsApp Chat</a></li>
                </ul>
                <p>Please include your booking reference number, a description of the issue, and any supporting evidence (photos, screenshots). We aim to acknowledge all complaints within 24 hours and provide a full response within 5 business days.</p>
                <p>If a complaint cannot be resolved directly, disputes may be referred to the competent Italian civil court in Rome.</p>
              </section>

              {/* Section 10 */}
              <section id="law" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">10. Governing Law</h2>
                <p>These Terms and Conditions are governed by and construed in accordance with the laws of the Italian Republic. Any disputes arising from or related to these terms shall be subject to the exclusive jurisdiction of the courts of Rome, Italy.</p>
                <p>If any provision of these Terms is found to be invalid or unenforceable under applicable law, the remaining provisions shall continue in full force and effect.</p>
                <p>We reserve the right to update these Terms and Conditions at any time. The current version is always published on this page and the effective date noted above. Continued use of our services after an update constitutes acceptance of the revised terms.</p>
              </section>

            </article>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
