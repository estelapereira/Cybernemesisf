  import { 
  Shield, 
  Home, 
  Search, 
  Cpu, 
  Camera, 
  Cog, 
  Code, 
  Globe, 
  Bot,
  Eye,
  MapPin,
  Wrench
} from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Services = () => {
  const [ref, hasBeenInView] = useInView({ threshold: 0.1 });

  const services = [
    {
      icon: Shield,
      title: 'Auditoría de ciberseguridad',
      description: 'Análisis completo de vulnerabilidades y fortalecimiento de la seguridad digital.',
      color: 'from-cyan-bright to-green-aqua',
    },
    {
      icon: Home,
      title: 'Domótica inteligente',
      description: 'Automatización del hogar con sistemas inteligentes y control remoto.',
      color: 'from-green-aqua to-light-blue-gray',
    },
    {
      icon: Search,
      title: 'Auditorías integrales',
      description: 'Evaluación completa de sistemas, procesos y seguridad empresarial.',
      color: 'from-light-blue-gray to-cyan-bright',
    },
    {
      icon: Cpu,
      title: 'Automatización de procesos generales',
      description: 'Optimización y automatización de flujos de trabajo empresariales.',
      color: 'from-cyan-bright to-green-aqua',
    },
    {
      icon: Camera,
      title: 'Sistemas de vigilancia con IA',
      description: 'Implementación de cámaras inteligentes con análisis automático.',
      color: 'from-green-aqua to-light-blue-gray',
    },
    {
      icon: Cog,
      title: 'Automatización industrial y agrícola',
      description: 'Soluciones para optimizar procesos industriales y agrícolas.',
      color: 'from-light-blue-gray to-cyan-bright',
    },
    {
      icon: Code,
      title: 'Desarrollo de software seguro',
      description: 'Creación de aplicaciones con enfoque en seguridad y calidad.',
      color: 'from-cyan-bright to-green-aqua',
    },
    {
      icon: Globe,
      title: 'Consultoría en protección digital',
      description: 'Asesoramiento especializado para proteger infraestructura digital.',
      color: 'from-green-aqua to-light-blue-gray',
    },
    {
      icon: Bot,
      title: 'Redes neuronales aplicadas a robótica',
      description: 'Implementación de IA avanzada en sistemas robóticos.',
      color: 'from-light-blue-gray to-cyan-bright',
    },
    {
      icon: Eye,
      title: 'Reconocimiento de placas y rostros',
      description: 'Sistemas de identificación automática con inteligencia artificial.',
      color: 'from-cyan-bright to-green-aqua',
    },
    {
      icon: MapPin,
      title: 'Sistemas de rastreo GPS integrados',
      description: 'Soluciones de localización y seguimiento en tiempo real.',
      color: 'from-green-aqua to-light-blue-gray',
    },
    {
      icon: Wrench,
      title: 'Mantenimiento de sistemas inteligentes',
      description: 'Soporte técnico continuo para mantener sistemas optimizados.',
      color: 'from-light-blue-gray to-cyan-bright',
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#131521]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 transform transition-all duration-1000 ${hasBeenInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestros <span className="bg-gradient-to-r from-cyan-bright to-green-aqua bg-clip-text text-transparent">Servicios</span>
          </h2>
          <p className="text-xl text-light-blue-gray max-w-3xl mx-auto">
            Soluciones tecnológicas integrales para proteger, automatizar y optimizar tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-bright/10 ${
                hasBeenInView ? 'animate-slideUp' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-10 w-10 text-blue-dark-nearly-black" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-light-gray leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;