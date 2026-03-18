import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function ContactInfoCards() {
    const cards = [
        {
            title: "Phone Support",
            sub: "Available 24/7",
            icon: <Phone className="w-8 h-8 text-gold" />,
            link: "tel:+923148932631"
        },
        {
            title: "Email Us",
            info: "info@italiaride.it",
            sub: "Average response: 2h",
            icon: <Mail className="w-8 h-8 text-gold" />,
            link: "mailto:info@italiaride.it"
        },
        {
            title: "WhatsApp",
            sub: "Fastest response",
            icon: <MessageCircle className="w-8 h-8 text-gold" />,
            link: "https://wa.me/+923148932631"
        },
        {
            title: "Registered Office",
            info: "Via del Corso, Rome",
            sub: "Italy, 00186",
            icon: <MapPin className="w-8 h-8 text-gold" />,
            link: "#"
        }
    ];

    return (
        <section className="py-20 font-inter">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="uiverse-card p-10 group animate-slide-left cursor-pointer shadow-2xl min-h-[300px]"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <a
                                href={card.link}
                                className="flex flex-col items-center text-center w-full h-full"
                            >
                                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-navy transition-all duration-500 shadow-lg">
                                    {card.icon}
                                </div>
                                <h4 className="text-gold font-bold text-xs uppercase tracking-[0.2em] mb-3">{card.title}</h4>
                                <div className="text-xl font-extrabold text-white mb-2 leading-tight">{card.info}</div>
                                <div className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em] mt-auto">{card.sub}</div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
