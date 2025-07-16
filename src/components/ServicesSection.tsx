
import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  MessageSquare, 
  PenTool, 
  MousePointer, 
  Mail, 
  Palette 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: "Optimización SEO",
      description: "Mejora tu posicionamiento en buscadores con estrategias SEO basadas en datos que generan resultados.",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      icon: MessageSquare,
      title: "Gestión de Redes Sociales",
      description: "Conecta con tu audiencia en todas las plataformas con campañas de redes sociales convincentes.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: PenTool,
      title: "Creación de Contenido",
      description: "Crea contenido atractivo que resuene con tu audiencia y genere conversiones.",
      color: "from-yellow-400 to-blue-500"
    },
    {
      icon: MousePointer,
      title: "Publicidad PPC",
      description: "Maximiza el ROI con campañas de pago por clic dirigidas en Google y plataformas sociales.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Construye relaciones duraderas con campañas de email personalizadas que convierten.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Palette,
      title: "Diseño Web y Branding",
      description: "Crea experiencias digitales impresionantes que reflejen la identidad única de tu marca.",
      color: "from-blue-400 to-cyan-500"
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Nuestros Servicios</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluciones integrales de marketing digital diseñadas para elevar tu marca y acelerar tu crecimiento
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glow-card hover:scale-105 transition-all duration-300 group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg mb-6 group-hover:animate-float`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
