
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
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
  );
};

export default CTASection;
