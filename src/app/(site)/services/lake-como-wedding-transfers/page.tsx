import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import ServiceSchema from '@/components/ServiceSchema';
import ServicePageContent from '@/components/ServicePageContent';
import { Metadata } from 'next';

/**
 * Lake Como wedding transfers.
 *
 * Built to answer ~597 impressions/quarter of Lake Como wedding-transfer
 * intent ("lake como wedding transfer", "wedding car service lake como",
 * "wedding transportation lake como", "lake como wedding chauffeur") that
 * previously had no commercial landing page — the only page serving them was
 * /blog/lake-como-wedding-transfers, an article.
 *
 * Deliberately conservative on claims: no pricing tiers, no coordinator or
 * vehicle-tracking promises, no fleet guarantees. Every operational statement
 * here traces to the published Terms (fixed all-inclusive pricing, disclosed
 * surcharges, 60-minute airport waiting, free cancellation over 24 hours) or
 * to journey figures already published on this site's own route pages.
 */
export const metadata: Metadata = {
  // Keyword + CTA, 57 chars. Brand dropped — it does not fit the 50–60 window.
  title: { absolute: 'Lake Como Wedding Transfers & Cars | Get a Quote' },
  description:
    'Private wedding transfers on Lake Como — guest transport from Malpensa and Milan to Como, Bellagio, Varenna and Menaggio. Fixed all-inclusive quotes confirmed before you book.',
  alternates: {
    canonical: '/services/lake-como-wedding-transfers',
  },
};

const faqs = [
  {
    q: 'Which airport should wedding guests fly into for Lake Como?',
    a: 'Malpensa. It sits north-west of Milan, so transfers to the lake never have to cross the city — the Malpensa to Como transfer takes about 50 minutes. Linate and Bergamo are both served but sit on the far side of Milan from the lake, which adds time in traffic.',
  },
  {
    q: 'How long does the transfer take to each lake town?',
    a: 'It depends heavily on the town. Milan to Como is about 50 km and roughly 45 minutes, Milan to Bellagio about 80 km and 1 hour 30 minutes, and Milan to Varenna about 90 km and 1 hour 40 minutes. The lakeside roads north of Como are narrow and slow, so the extra time is not distance alone.',
  },
  {
    q: 'Can you collect guests arriving on different flights?',
    a: 'Yes. Send the full arrival schedule in a single enquiry rather than booking legs separately, and each transfer is quoted and confirmed against its own flight number. Flights are tracked from departure, so a delayed arrival adjusts the pickup automatically.',
  },
  {
    q: 'How much free waiting time is included at the airport?',
    a: 'Sixty minutes from actual landing time on international flights, and thirty minutes on domestic flights, measured from when the aircraft lands rather than its scheduled time. Guests delayed at immigration or baggage reclaim are not penalised.',
  },
  {
    q: 'Can the car reach the venue or hotel entrance?',
    a: 'In most cases yes, but parts of the lake have restricted-traffic zones and stepped lanes — Bellagio and Varenna in particular, where a short distance on a map can be a flight of steps on foot. Give us the venue or hotel name when enquiring so the approach and nearest permitted drop-off are planned in advance.',
  },
  {
    q: 'How is the price confirmed?',
    a: 'Each journey is quoted individually as a fixed all-inclusive fare covering motorway tolls, fuel and parking, and confirmed before you travel — the figure you agree is the figure you pay. Journeys starting between 22:00 and 06:00 and on Italian public holidays can carry a surcharge; where one applies it is shown in the quote before you book.',
  },
  {
    q: 'What happens if plans change?',
    a: 'Bookings cancelled more than 24 hours before the scheduled pickup are refunded in full. Between 6 and 24 hours a 50% fee applies, and under 6 hours the full fare is charged. Changes to a confirmed booking may result in a revised quote.',
  },
  {
    q: 'Do you cover the day before and the day after?',
    a: 'Yes — welcome dinners, next-day departures and guest sightseeing are all quoted the same way, per journey. Send the whole programme at once so timings stay consistent across the days.',
  },
];

export default function LakeComoWeddingTransfersPage() {
  const url = 'https://www.italytaxiservice.com/services/lake-como-wedding-transfers';

  return (
    <main className="min-h-screen font-inter">
      <ServiceSchema
        name="Lake Como Wedding Transfers"
        description="Private wedding guest transfers on Lake Como, from Milan and Malpensa to Como, Bellagio, Varenna and Menaggio."
        url={url}
      />
      <Navbar />

      <PageHero
        titleTop="Lake Como"
        titleBottom="Wedding Transfers"
        description="Guest transport from Malpensa and Milan to Como, Bellagio, Varenna and Menaggio. Every journey quoted as a fixed all-inclusive fare and confirmed before you book."
        backgroundImage="/images/hero.png"
        buttonText="Get a Wedding Transfer Quote"
        breadcrumbs={[
          { name: 'Services', item: '/services' },
          { name: 'Lake Como Wedding Transfers', item: '/services/lake-como-wedding-transfers' },
        ]}
      />

      <ServicePageContent
        introTitle="Wedding Guest Transport on Lake Como"
        introParagraphs={[
          'Lake Como hosts a large share of Italy’s destination weddings, and the transport problem it creates is a particular one. Guests arrive on different flights across several days, stay spread between Como, Bellagio, Varenna and Menaggio, and then have to reach a venue that may sit on a narrow lakeside road with restricted vehicle access.',
          'The lake is also far larger than most guests expect. It is an inverted Y of roughly 150 km of shoreline, and the town someone is staying in changes their journey far more than the map suggests — Como sits at the southern tip nearest Milan, while Bellagio sits at the fork in the middle and Varenna faces it across the eastern branch.',
          'We quote each journey individually against its own pickup point, destination and flight, so a transport plan built from them reflects the real geography rather than a lake-wide average.',
        ]}
        detailTitle="How Wedding Transport on the Lake Actually Works"
        detailParagraphs={[
          'Journey times vary sharply by town. Milan to Como is about 50 km and roughly 45 minutes; Milan to Bellagio about 80 km and 1 hour 30 minutes; Milan to Varenna about 90 km and 1 hour 40 minutes. From Malpensa, Como is about 50 minutes, Bellagio around 1 hour 35 minutes and Varenna around 1 hour 50 minutes. The additional time going north is the road itself — single carriageway, winding, and with very few opportunities to overtake.',
          'For guests flying in, Malpensa is the practical airport. It lies north-west of Milan, so the transfer never crosses the city. Linate and Bergamo are both served, but both sit on the far side of Milan from the lake. Flights are tracked from departure at the origin airport, so a late arrival moves the pickup automatically rather than forfeiting it, and the first sixty minutes of waiting after an international landing are included at no charge.',
          'Venue and hotel access is the detail most worth getting right in advance. Several of the lake’s best-known properties sit on narrow waterfront roads or inside restricted-traffic zones. Bellagio is the common surprise, with a centre built on stepped lanes running up from the water, and Varenna is similar. Where vehicles are not permitted to the door, the driver stops at the nearest legitimate point and helps with luggage from there — which is far easier to plan for when we know the venue name at the quoting stage.',
          'Once guests are on the lake, the ferries are often faster than the road for moving between the central towns — Bellagio, Varenna, Menaggio and Tremezzo are minutes apart by water against a long drive around the shoreline. That can change which arrival point makes sense: a guest staying on the eastern branch may be better taken directly to Varenna than driven to Bellagio and crossed over.',
          'Send the full programme in one enquiry rather than booking legs piecemeal. Arrivals across several days, a shuttle pattern between accommodation and venue, and next-day departures are all quoted together, which keeps the timings consistent and makes it clear where the same vehicle can cover more than one movement.',
        ]}
        benefits={[
          'Transfers from Malpensa, Linate, Bergamo and Milan city addresses',
          'All Lake Como towns served, including Como, Bellagio, Varenna and Menaggio',
          'Each journey quoted as a fixed all-inclusive fare before you book',
          'Motorway tolls, fuel and parking included in the quote',
          'Flight tracking from departure, with pickup adjusted automatically',
          '60 minutes free waiting from actual landing on international arrivals',
          'Whole arrival programme quoted together from a single schedule',
          'Venue and restricted-access drop-off points planned in advance',
          'Welcome dinner, wedding day and next-day departures all covered',
          'Free cancellation with full refund over 24 hours before pickup',
        ]}
        pricingNote="Every journey is quoted as a fixed, all-inclusive fare — motorway tolls, fuel and parking included, no meter and nothing added at the end of the journey without your prior agreement. Any night, holiday or extra-waiting supplement permitted under our terms is shown in the quote before you book."
        relatedLinks={[
          { label: 'Milan to Lake Como transfers', href: '/route/milan-to-lake-como-taxi' },
          { label: 'Malpensa Airport to Como', href: '/route/milan-malpensa-to-como-taxi' },
          { label: 'Transfers to Bellagio', href: '/route/milan-to-bellagio-taxi' },
          { label: 'Transfers to Varenna', href: '/route/milan-to-varenna-taxi' },
          { label: 'Como taxi service', href: '/city/como' },
          { label: 'Milan Malpensa airport transfers', href: '/airport/milan-malpensa' },
          { label: 'Wedding transfers across Italy', href: '/services/wedding-transfers' },
          { label: 'Planning a Lake Como wedding', href: '/blog/lake-como-wedding-transfers' },
        ]}
      />

      <HowItWorks />

      <FAQSection faqs={faqs} title="Lake Como Wedding Transfer FAQs" badge="Wedding Planning" />

      <Footer />
    </main>
  );
}
