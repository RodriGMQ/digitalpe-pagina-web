
import { Users, TrendingUp, Globe, Award } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Clientes Satisfechos" },
    { icon: TrendingUp, number: "250%", label: "Aumento Promedio del ROI" },
    { icon: Globe, number: "50+", label: "Países Atendidos" },
    { icon: Award, number: "100+", label: "Premios Ganados" }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-black" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
