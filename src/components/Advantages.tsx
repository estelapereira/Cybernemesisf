import { Shield, Cpu, Users, Zap } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Advantages = () => {
  const [ref, hasBeenInView] = useInView({ threshold: 0.1 });

  const advantages = [
    {
      icon: Shield,
      title: 'Protección integral para datos y sistemas',
      description: 'Seguridad completa que protege todos tus activos digitales con tecnología de última generación.',
      color: 'from-cyan-bright to-green-aqua',
    },
    {
      icon: Cpu,
      title: 'Soluciones personalizadas e inteligentes',
      description: 'Desarrollamos soluciones específicas para cada cliente, adaptadas a sus necesidades únicas.',
      color: 'from-green-aqua to-light-blue-gray',
    },
    {
      icon: Users,
      title: 'Atención profesional y soporte humano',
      description: 'Equipo de expertos disponible para brindarte el mejor servicio y soporte técnico.',
      color: 'from-light-blue-gray to-cyan-bright',
    },
    {
      icon: Zap,
      title: 'Tecnología de punta al alcance de todos',
      description: 'Hacemos accesible la tecnología más avanzada para empresas de todos los tamaños.',
      color: 'from-cyan-bright to-green-aqua',
    },
  ];

  return (
    <section id="advantages" className="py-20 bg-[#131521]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`w-full grid grid-cols-1 md:grid-cols-3 gap-12 transition-all duration-1000 ${hasBeenInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestras <span className="bg-gradient-to-r from-cyan-bright to-green-aqua bg-clip-text text-transparent">Ventajas</span>
          </h2>
          <p className="text-xl text-light-blue-gray max-w-3xl mx-auto">
            Descubre por qué somos la elección preferida para proteger y automatizar tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`group bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-bright/10 ${
                hasBeenInView ? 'animate-slideUp' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${advantage.color} p-3 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <advantage.icon className="h-10 w-10 text-blue-dark-nearly-black" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">
                {advantage.title}
              </h3>
              <p className="text-gray-300 text-center leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;