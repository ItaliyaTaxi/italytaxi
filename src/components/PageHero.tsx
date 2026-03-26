import Link from 'next/link';
import Image from 'next/image';
import TaxiButton from './TaxiButton';
import Breadcrumb from './Breadcrumb';

interface PageHeroProps {
    titleTop: string;
    titleBottom: string;
    description?: string;
    backgroundImage: string;
    buttonText?: string;
    buttonLink?: string;
    breadcrumbs?: { name: string; item: string }[];
}

export default function PageHero({
    titleTop,
    titleBottom,
    description,
    backgroundImage,
    buttonText = "RESERVE YOUR RIDE",
    buttonLink = "/book-now/",
    breadcrumbs
}: PageHeroProps) {

    return (
        <section className="relative h-screen w-full flex items-center overflow-hidden font-inter">
            {/* Background with darker gradient overlay */}
            <div className="absolute inset-0">
                <Image
                    src={backgroundImage}
                    alt={`${titleTop} ${titleBottom}`}
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F1C2E]/90 via-[#0F1C2E]/60 to-transparent" />
            </div>

            {/* Content Area */}
            <div className="relative z-10 container mx-auto px-6">
                <div className="max-w-4xl pt-24">
                    {breadcrumbs && <Breadcrumb items={breadcrumbs} variant="light" />}
                    <h1 className="text-white font-montserrat font-semibold leading-[1.1] mb-6">
                        <span className="text-5xl md:text-6xl block mb-2 animate-slide-left [animation-delay:0.2s]">
                            {titleTop}
                        </span>
                        <span className="text-5xl md:text-7xl text-[#F4C430] font-serif italic block animate-slide-left [animation-delay:0.4s]">
                            {titleBottom}
                        </span>
                    </h1>

                    {description && (
                        <div className="mb-10 max-w-2xl animate-slide-left [animation-delay:0.6s]">
                            <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed">
                                {description}
                            </p>
                        </div>
                    )}

                    <div className="animate-slide-left [animation-delay:0.8s]">
                        <TaxiButton href={buttonLink}>
                            {buttonText}
                        </TaxiButton>
                    </div>
                </div>
            </div>

            {/* Solid Gold Bottom Edge */}
            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#F4C430] shadow-[0_-5px_15px_rgba(244,196,48,0.3)]" />
        </section>
    );
}
