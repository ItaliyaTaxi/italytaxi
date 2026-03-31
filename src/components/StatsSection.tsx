import { Award, Users, MapPin, Star } from 'lucide-react';

const stats = [
    {
        value: "10,000+",
        label: "Transfers Completed",
        context: "Across airports, cities, cruise ports & wedding venues throughout Italy since 2013.",
        icon: <Award className="w-8 h-8" />,
    },
    {
        value: "25,000+",
        label: "Passengers Served",
        context: "From solo business travellers to families of eight — every passenger arrives safely and on time.",
        icon: <Users className="w-8 h-8" />,
    },
    {
        value: "30+",
        label: "Cities & Airports",
        context: "Full coverage from the Alps to Sicily — every major Italian city, airport, and cruise port.",
        icon: <MapPin className="w-8 h-8" />,
    },
    {
        value: "4.9 ★",
        label: "Average Rating",
        context: "Verified across Google, TripAdvisor, and direct feedback — 500+ five-star reviews.",
        icon: <Star className="w-8 h-8" />,
    },
];

interface StatsSectionProps {
    variant?: 'dark' | 'light';
}

export default function StatsSection({ variant = 'dark' }: StatsSectionProps) {
    const isDark = variant === 'dark';
    return (
        <section className={`py-24 ${isDark ? 'bg-navy' : 'bg-[#F8F9FA]'} relative overflow-hidden font-inter`}>
            {/* Pattern Overlay */}
            <div className={`absolute inset-0 ${isDark ? 'opacity-5' : 'opacity-[0.03]'} pointer-events-none`}
                style={{ backgroundImage: `radial-gradient(circle, ${isDark ? '#F4C430' : '#0F1C2E'} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

            <div className="container mx-auto px-6 relative z-10 max-w-6xl">
                <div className="text-center mb-14">
                    <p className="text-gold text-sm font-bold uppercase tracking-[0.4em] mb-4">By the Numbers</p>
                    <h2 className={`text-4xl md:text-5xl font-extrabold ${isDark ? 'text-white' : 'text-navy'} leading-tight`}>
                        A Decade of Private Taxi Service in Italy
                    </h2>
                    <div className="w-20 h-1 bg-gold mx-auto mt-6" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`${isDark ? 'uiverse-card' : 'bg-white border border-gray-100 shadow-sm'} p-8 group animate-slide-left rounded-2xl`}
                            style={{ animationDelay: `${index * 0.1}s`, flexDirection: 'column', alignItems: 'stretch' }}
                        >
                            <div className="flex flex-col items-center text-center w-full gap-4">
                                <div className={`inline-flex items-center justify-center p-4 rounded-2xl ${isDark ? 'bg-white/5 border border-white/10 text-gold' : 'bg-gold/10 text-navy'} group-hover:scale-110 group-hover:bg-gold group-hover:text-navy transition-all duration-500 shadow-lg`}>
                                    {stat.icon}
                                </div>
                                <div>
                                    <div className={`text-4xl md:text-5xl font-extrabold ${isDark ? 'text-white' : 'text-navy'} tracking-tight`}>{stat.value}</div>
                                    <div className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mt-1">{stat.label}</div>
                                </div>
                                <p className={`${isDark ? 'text-gray-400 border-white/10' : 'text-gray-500 border-gray-100'} text-xs leading-relaxed text-center border-t pt-4 w-full`}>
                                    {stat.context}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
