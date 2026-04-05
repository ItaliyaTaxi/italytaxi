import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | Private Taxi Service",
  description: "Learn how Italy Taxi Service collects, uses, and protects your personal data in compliance with GDPR and Italian privacy law. Your data rights explained.",
  alternates: {
    canonical: "/privacy-policy",
  }
};

const sections = [
  { id: "intro", title: "1. Introduction" },
  { id: "controller", title: "2. Data Controller" },
  { id: "collect", title: "3. Data We Collect" },
  { id: "use", title: "4. How We Use Your Data" },
  { id: "legal-basis", title: "5. Legal Basis for Processing" },
  { id: "sharing", title: "6. Data Sharing" },
  { id: "retention", title: "7. Data Retention" },
  { id: "rights", title: "8. Your Rights (GDPR)" },
  { id: "cookies", title: "9. Cookies" },
  { id: "security", title: "10. Data Security" },
  { id: "changes", title: "11. Policy Changes" },
  { id: "contact", title: "12. Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen font-inter">
      <Navbar />
      <PageHero
        titleTop="Privacy"
        titleBottom="Policy"
        description="We are committed to protecting your personal data. This policy explains what we collect, why we collect it, and how you can control it."
        backgroundImage="/images/hero.png"
        breadcrumbs={[{ name: "Privacy Policy", item: "/privacy-policy" }]}
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
                  <p className="mt-3 text-gray-400">Data protection queries:</p>
                  <a href="mailto:info@italytaxiservice.com" className="text-gold hover:underline break-all">info@italytaxiservice.com</a>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <article className="flex-1 prose prose-lg max-w-none text-gray-700">

              <p className="text-gray-500 text-sm mb-10">
                This Privacy Policy explains how <strong>Italy Taxi Service</strong> ("we", "us", "our") collects, uses, stores, and protects personal data in accordance with the EU General Data Protection Regulation (GDPR), Italian Legislative Decree 196/2003 (as amended by D.Lgs. 101/2018), and all applicable Italian privacy law. Please read this policy carefully before using our services.
              </p>

              {/* Section 1 */}
              <section id="intro" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">1. Introduction</h2>
                <p>Italy Taxi Service operates private ground transportation services across Italy, including airport transfers, city-to-city transfers, hourly taxi hire, private sightseeing tours, and wedding and event transportation.</p>
                <p>In order to provide these services, we necessarily process personal data belonging to our customers, including contact details, travel information, and payment references. We take this responsibility seriously and are committed to handling your data with care, transparency, and in full compliance with applicable law.</p>
                <p>This policy applies to all data collected through our website at <strong>www.italytaxiservice.com</strong>, through our email correspondence, through WhatsApp, and through any other channel through which you contact or book with us.</p>
              </section>

              {/* Section 2 */}
              <section id="controller" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">2. Data Controller</h2>
                <p>The data controller responsible for your personal data is:</p>
                <div className="bg-gray-50 rounded-2xl p-6 my-4 text-sm not-prose">
                  <p className="font-bold text-navy text-base mb-3">Italy Taxi Service</p>
                  <p className="text-gray-600">Via della Conciliazione, 1</p>
                  <p className="text-gray-600">00193 Roma RM, Italy</p>
                  <p className="text-gray-600 mt-2">Email: <a href="mailto:info@italytaxiservice.com" className="text-gold hover:underline">info@italytaxiservice.com</a></p>
                </div>
                <p>If you have any questions or concerns about how your personal data is processed, you may contact us at the address above at any time.</p>
              </section>

              {/* Section 3 */}
              <section id="collect" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">3. Data We Collect</h2>
                <p>We collect only the personal data that is necessary to provide our services and fulfil our legal obligations. The categories of data we collect include:</p>
                <h3 className="text-lg font-bold text-navy mt-6 mb-3">3.1 Data You Provide to Us</h3>
                <ul>
                  <li><strong>Identity data:</strong> First name, last name</li>
                  <li><strong>Contact data:</strong> Email address, phone number, WhatsApp number</li>
                  <li><strong>Booking data:</strong> Pickup and drop-off addresses, travel date and time, flight number, number of passengers, luggage count, special requirements (child seats, accessibility needs)</li>
                  <li><strong>Payment data:</strong> Card type and last four digits (full card numbers are processed by our payment provider and never stored by us), billing address where applicable</li>
                  <li><strong>Communications:</strong> Content of emails, WhatsApp messages, and other correspondence you send to us</li>
                </ul>
                <h3 className="text-lg font-bold text-navy mt-6 mb-3">3.2 Data Collected Automatically</h3>
                <ul>
                  <li><strong>Usage data:</strong> Pages visited, time spent on pages, browser type, device type, and IP address</li>
                  <li><strong>Cookie data:</strong> Session identifiers and preference cookies (see Section 9 below)</li>
                </ul>
                <h3 className="text-lg font-bold text-navy mt-6 mb-3">3.3 Data We Do Not Collect</h3>
                <p>We do not knowingly collect sensitive personal data (special category data under GDPR), including racial or ethnic origin, political opinions, religious beliefs, health information, or biometric data. We do not knowingly collect data from children under 16 years of age.</p>
              </section>

              {/* Section 4 */}
              <section id="use" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">4. How We Use Your Data</h2>
                <p>We use your personal data for the following purposes:</p>
                <ul>
                  <li><strong>Booking fulfilment:</strong> Processing, confirming, and managing your transfer reservation</li>
                  <li><strong>Driver dispatch:</strong> Sharing your name, pickup location, and contact number with the assigned driver</li>
                  <li><strong>Flight tracking:</strong> Using your flight number to monitor arrival times and adjust pickup scheduling</li>
                  <li><strong>Communication:</strong> Sending booking confirmations, driver details, and journey reminders</li>
                  <li><strong>Payment processing:</strong> Facilitating and recording payment for services rendered</li>
                  <li><strong>Customer support:</strong> Responding to enquiries, complaints, and service feedback</li>
                  <li><strong>Legal compliance:</strong> Meeting obligations under Italian tax law, accounting standards, and applicable transport regulations</li>
                  <li><strong>Service improvement:</strong> Analysing anonymised usage data to improve our website and booking process</li>
                  <li><strong>Marketing (with consent):</strong> Sending promotional emails or newsletters only where you have explicitly opted in</li>
                </ul>
                <p>We will never sell your personal data to third parties. We will never use your data for purposes incompatible with those listed above without seeking your prior consent.</p>
              </section>

              {/* Section 5 */}
              <section id="legal-basis" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">5. Legal Basis for Processing</h2>
                <p>Under GDPR, we must have a lawful basis for each type of data processing. Our legal bases are:</p>
                <div className="overflow-x-auto my-6">
                  <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                    <thead className="bg-navy text-white">
                      <tr>
                        <th className="text-left px-5 py-3 font-semibold">Processing Activity</th>
                        <th className="text-left px-5 py-3 font-semibold">Legal Basis</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Booking and delivering your transfer", "Performance of a contract (Art. 6(1)(b) GDPR)"],
                        ["Processing payment", "Performance of a contract (Art. 6(1)(b) GDPR)"],
                        ["Sending booking confirmations", "Performance of a contract (Art. 6(1)(b) GDPR)"],
                        ["Maintaining accounting records", "Legal obligation (Art. 6(1)(c) GDPR)"],
                        ["Improving our services", "Legitimate interests (Art. 6(1)(f) GDPR)"],
                        ["Sending marketing communications", "Consent (Art. 6(1)(a) GDPR)"],
                      ].map(([activity, basis], i) => (
                        <tr key={i} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                          <td className="px-5 py-3">{activity}</td>
                          <td className="px-5 py-3 text-gold font-medium">{basis}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 6 */}
              <section id="sharing" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">6. Data Sharing</h2>
                <p>We share your personal data only where necessary and only with the following categories of recipients:</p>
                <ul>
                  <li><strong>Assigned drivers:</strong> Your name, mobile number, and pickup location are shared with the driver assigned to your booking. Drivers are contractually obligated to process this data only for the purpose of fulfilling your journey.</li>
                  <li><strong>Payment processors:</strong> Card payment data is processed by our PCI-DSS compliant payment provider. We do not store full card numbers.</li>
                  <li><strong>Flight tracking services:</strong> Your flight number is submitted to third-party flight data APIs to retrieve real-time arrival information.</li>
                  <li><strong>IT and hosting providers:</strong> Our website and booking systems are hosted on secure servers within the European Economic Area (EEA). Hosting providers process data solely on our instruction under a Data Processing Agreement.</li>
                  <li><strong>Legal and regulatory authorities:</strong> We may disclose data to competent authorities when required by law or court order.</li>
                </ul>
                <p>We do not transfer personal data outside the EEA except where adequate safeguards exist under GDPR (such as Standard Contractual Clauses or an adequacy decision by the European Commission).</p>
              </section>

              {/* Section 7 */}
              <section id="retention" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">7. Data Retention</h2>
                <p>We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Our standard retention periods are:</p>
                <ul>
                  <li><strong>Booking records:</strong> 7 years from the date of service (required for Italian tax and accounting compliance)</li>
                  <li><strong>Customer communications:</strong> 2 years from the last interaction</li>
                  <li><strong>Payment records:</strong> 7 years (required for financial record-keeping under Italian law)</li>
                  <li><strong>Marketing consent records:</strong> Until consent is withdrawn or 3 years from last engagement, whichever is earlier</li>
                  <li><strong>Website usage logs:</strong> 12 months</li>
                </ul>
                <p>After the applicable retention period, data is securely deleted or anonymised so that it can no longer be attributed to any individual.</p>
              </section>

              {/* Section 8 */}
              <section id="rights" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">8. Your Rights Under GDPR</h2>
                <p>As a data subject under GDPR, you have the following rights regarding your personal data. You may exercise these rights at any time by contacting us at <a href="mailto:info@italytaxiservice.com" className="text-gold">info@italytaxiservice.com</a>.</p>
                <div className="grid sm:grid-cols-2 gap-4 my-6 not-prose">
                  {[
                    { right: "Right of Access", desc: "Request a copy of the personal data we hold about you (a Subject Access Request)." },
                    { right: "Right to Rectification", desc: "Request correction of inaccurate or incomplete personal data." },
                    { right: "Right to Erasure", desc: "Request deletion of your personal data ('right to be forgotten') where there is no legal basis to retain it." },
                    { right: "Right to Restrict Processing", desc: "Request that we limit how we use your data while a dispute is resolved." },
                    { right: "Right to Data Portability", desc: "Receive your data in a structured, machine-readable format for transfer to another provider." },
                    { right: "Right to Object", desc: "Object to processing based on legitimate interests, including direct marketing." },
                    { right: "Right to Withdraw Consent", desc: "Withdraw consent for marketing communications at any time without affecting prior processing." },
                    { right: "Right to Lodge a Complaint", desc: "File a complaint with the Italian Data Protection Authority (Garante)." },
                  ].map((item, i) => (
                    <div key={i} className="p-5 rounded-2xl border border-gray-100 bg-white shadow-sm hover:border-gold transition-all">
                      <p className="font-bold text-navy text-sm mb-2">{item.right}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p>We will respond to all rights requests within 30 days. In complex cases, we may extend this by a further two months and will notify you accordingly. We will never charge a fee for legitimate data subject requests.</p>
              </section>

              {/* Section 9 */}
              <section id="cookies" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">9. Cookies</h2>
                <p>Our website uses cookies — small text files stored on your device — to improve functionality and analyse usage. The cookies we use fall into the following categories:</p>
                <ul>
                  <li><strong>Strictly necessary cookies:</strong> Essential for the website to function (session management, security tokens). These cannot be disabled.</li>
                  <li><strong>Analytical/performance cookies:</strong> Used to understand how visitors use our website (e.g. pages visited, time on site). Data is aggregated and anonymous. We use these to improve user experience.</li>
                  <li><strong>Functional cookies:</strong> Remember your preferences such as language selection.</li>
                  <li><strong>Marketing cookies:</strong> Used to track visits across websites for remarketing purposes. These are only activated with your consent.</li>
                </ul>
                <p>You can manage or withdraw cookie consent at any time through your browser settings. Disabling certain cookies may affect the functionality of our website. For more information on managing cookies, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-gold">www.allaboutcookies.org</a>.</p>
              </section>

              {/* Section 10 */}
              <section id="security" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">10. Data Security</h2>
                <p>We implement appropriate technical and organisational measures to protect your personal data against accidental loss, unauthorised access, disclosure, alteration, or destruction. These measures include:</p>
                <ul>
                  <li>SSL/TLS encryption for all data transmitted between your browser and our website</li>
                  <li>Access controls restricting data access to authorised personnel only</li>
                  <li>Regular security reviews and software updates</li>
                  <li>PCI-DSS compliant payment processing</li>
                  <li>Contractual obligations imposed on all data processors (drivers, IT providers) to maintain equivalent standards</li>
                </ul>
                <p>In the unlikely event of a personal data breach that poses a high risk to your rights and freedoms, we will notify you and the Italian Data Protection Authority (Garante) without undue delay and in accordance with GDPR Article 33 and 34 requirements.</p>
              </section>

              {/* Section 11 */}
              <section id="changes" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">11. Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will update the "Last Updated" date at the top of this page and, where appropriate, notify you by email.</p>
                <p>We encourage you to review this policy periodically. Continued use of our services after an update constitutes acceptance of the revised policy.</p>
              </section>

              {/* Section 12 */}
              <section id="contact" className="mb-12 scroll-mt-8">
                <h2 className="text-2xl font-extrabold text-navy border-b border-gray-100 pb-3 mb-6">12. Contact Us</h2>
                <p>For any questions, concerns, or requests relating to this Privacy Policy or the processing of your personal data, please contact us:</p>
                <div className="bg-navy rounded-2xl p-8 my-6 not-prose text-white">
                  <p className="font-bold text-gold text-lg mb-4">Italy Taxi Service — Data Enquiries</p>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>📧 <a href="mailto:info@italytaxiservice.com" className="text-gold hover:underline">info@italytaxiservice.com</a></p>
                    <p>💬 <a href="https://wa.me/923148932631" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">WhatsApp Chat</a></p>
                    <p>📍 Via della Conciliazione, 1, 00193 Roma RM, Italy</p>
                  </div>
                  <p className="mt-6 text-xs text-gray-500">
                    If you are not satisfied with our response, you have the right to lodge a complaint with the Italian Data Protection Authority (Garante per la protezione dei dati personali).
                  </p>
                </div>
              </section>

            </article>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
