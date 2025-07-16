
import { Shield, Zap, Users } from 'lucide-react';

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
