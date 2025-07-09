import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import logo from "../../public/assets/LogoCybernemesis.webp";

const Footer = () => {
  return (
    <footer className="bg-[#131521] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={logo}
                alt="Logo"
                className="h-24 w-24 sm:h-20 sm:w-20 object-contain"
              />
              <span className="text-2xl font-bold text-white">Cybernemesis</span>
            </div>
            <p className="text-light-gray mb-4">
              Empresa colombiana especializada en ciberseguridad, inteligencia artificial y automatización tecnológica.
            </p>
            <p className="text-light-gray">
              Protegemos, optimizamos y transformamos tu entorno digital con herramientas innovadoras, confiables y accesibles.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Servicios Principales</h3>
            <ul className="space-y-2 text-light-gray">
              <li>Auditoría de ciberseguridad</li>
              <li>Domótica inteligente</li>
              <li>Automatización de procesos</li>
              <li>Sistemas de vigilancia con IA</li>
              <li>Desarrollo de software seguro</li>
              <li>Consultoría en protección digital</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cyan-bright" />
                <span className="text-light-gray">cybernemesisgmc@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-aqua" />
                <span className="text-light-gray">320 773 0532</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-light-blue-gray" />
                <span className="text-light-gray">Montería, Córdoba</span>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="h-5 w-5 text-cyan-bright" />
                <a 
                  href="https://www.instagram.com/cybernemesis2025/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-light-gray hover:text-cyan-bright transition-colors duration-200"
                >
                  @cybernemesis2025
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-light-gray">
            © 2025 Cybernemesis. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;