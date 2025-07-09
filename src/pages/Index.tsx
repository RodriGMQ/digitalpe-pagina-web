
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  MessageSquare, 
  PenTool, 
  MousePointer, 
  Mail, 
  Palette, 
  Award,
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Globe,
  Shield,
  Zap,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  MapPin
} from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "DigitalPe transformó completamente nuestra presencia online. ¡Nuestros leads aumentaron un 300% en solo 3 meses!",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-Commerce Plus",
      text: "El equipo de marketing digital más profesional con el que he trabajado. Sus estrategias son vanguardistas y orientadas a resultados.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Local Business Co.",
      text: "De reconocimiento local a nacional - DigitalPe lo hizo posible. ROI excepcional en cada campaña.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Clientes Satisfechos" },
    { icon: TrendingUp, number: "250%", label: "Aumento Promedio del ROI" },
    { icon: Globe, number: "50+", label: "Países Atendidos" },
    { icon: Award, number: "100+", label: "Premios Ganados" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white cyber-grid">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold gradient-text">
                DigitalPe
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-yellow-400 transition-colors">Servicios</a>
              <a href="#about" className="hover:text-yellow-400 transition-colors">Nosotros</a>
              <a href="#testimonials" className="hover:text-yellow-400 transition-colors">Testimonios</a>
              <a href="#contact" className="hover:text-yellow-400 transition-colors">Contacto</a>
            </div>
            <Button className="bg-gradient-to-r from-yellow-400 to-blue-500 hover:from-yellow-500 hover:to-blue-600 text-black font-semibold">
              Comenzar
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Marketing Digital</span>
              <br />
              <span className="text-white">Reimaginado para</span>
              <br />
              <span className="gradient-text">El Futuro</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transforma tu negocio con estrategias digitales de vanguardia que generan resultados reales. 
              No somos solo otra agencia – somos tus socios de crecimiento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-blue-500 hover:from-yellow-500 hover:to-blue-600 text-black font-semibold text-lg px-8 py-6 animate-glow">
                Comienza Tu Viaje <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6">
                Ver Nuestro Trabajo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Services Section */}
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

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">¿Por Qué Elegir DigitalPe?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                No solo seguimos las tendencias digitales – las establecemos. Nuestro equipo de expertos combina 
                creatividad con insights basados en datos para entregar campañas que no solo se ven bien, sino que funcionan excepcionalmente.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-full flex items-center justify-center">
                    <Shield className="h-4 w-4 text-black" />
                  </div>
                  <span className="text-lg">100% Reportes Transparentes</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-full flex items-center justify-center">
                    <Zap className="h-4 w-4 text-black" />
                  </div>
                  <span className="text-lg">Optimización de Campañas con IA</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-black" />
                  </div>
                  <span className="text-lg">Gestión de Cuentas Dedicada</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="text-center">
                  <div className="text-6xl font-bold gradient-text mb-4">97%</div>
                  <div className="text-xl text-gray-300 mb-6">Tasa de Retención de Clientes</div>
                  <p className="text-gray-400">
                    Nuestros resultados hablan por sí solos. Únete a cientos de empresas que confían en nosotros para su crecimiento digital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Lo Que Dicen Nuestros Clientes</span>
            </h2>
            <p className="text-xl text-gray-300">Historias reales de empresas reales que hemos ayudado a transformar</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glow-card animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-full flex items-center justify-center text-black font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-400/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para <span className="gradient-text">Transformar</span> Tu Negocio?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            No dejes que tus competidores se adelanten. Comienza tu viaje de transformación digital hoy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-blue-500 hover:from-yellow-500 hover:to-blue-600 text-black font-semibold text-lg px-12 py-6 animate-glow">
              Obtén Consulta Gratuita
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-12 py-6">
              Ver Planes de Precios
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black/40 py-16 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-3xl font-bold gradient-text mb-4">DigitalPe</div>
              <p className="text-gray-300 mb-6 max-w-md">
                Transformando empresas a través de estrategias innovadoras de marketing digital. 
                Tu éxito es nuestra misión.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <Facebook className="h-5 w-5 text-black" />
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <Twitter className="h-5 w-5 text-black" />
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <Instagram className="h-5 w-5 text-black" />
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <Linkedin className="h-5 w-5 text-black" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Servicios</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Optimización SEO</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Redes Sociales</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Creación de Contenido</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Publicidad PPC</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Email Marketing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Información de Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-yellow-400" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-yellow-400" />
                  <span className="text-gray-300">hola@digitalpe.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-yellow-400" />
                  <span className="text-gray-300">Av. Digital 123, Ciudad Tech</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DigitalPe. Todos los derechos reservados. | Política de Privacidad | Términos de Servicio</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
