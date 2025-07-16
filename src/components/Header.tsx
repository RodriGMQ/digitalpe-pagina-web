
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
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
  );
};

export default Header;
