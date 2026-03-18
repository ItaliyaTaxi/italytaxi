import Navbar from '@/components/Navbar';
import PageHero from '@/components/PageHero';
import ServiceIntro, { ServiceFeatures } from '@/components/ServiceDetails';
import HowItWorks from '@/components/HowItWorks';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Wedding Guest Transfers | Italian Taxi Service",
    description: "Reliable and elegant wedding taxi transfers in Italy. Ensure your guests and bridal party arrive on time and in style with our professional drivers.",
    alternates: {
        canonical: "/services/wedding-transfers",
    }
};

export default function WeddingTransfersPage() {
    const features = [
        "Punctual guest transportation",
        "Multiple vehicle options",
        "Professional taxi drivers",
        "Customizable schedules",
        "Stress-free coordination",
        "Available across Italy"
    ];

    return (
        <main className="min-h-screen">
            <Navbar />
            <PageHero
                titleTop="Wedding & Guest"
                titleBottom="Taxi Transfers"
                description="Professional and reliable transportation for your wedding guests and bridal party across Italy."
                backgroundImage="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
                buttonText="Book Wedding Transport"
            />

            <ServiceIntro
                title="Reliable Wedding Logistics"
                content="Planning a wedding in Italy? We take care of all your transportation needs. From shuttling guests between venues to providing luxury cars for the couple, our team ensures everyone arrives on time and in comfort."
            />

            <ServiceFeatures
                title="Wedding Service Excellence"
                features={features}
                bg="bg-[#F8F9FA]"
            />

            <HowItWorks />
            <FAQSection />
            <CTA />
            <Footer />
        </main>
    );
}
