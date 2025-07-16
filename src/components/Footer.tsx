
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
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
  );
};

export default Footer;
