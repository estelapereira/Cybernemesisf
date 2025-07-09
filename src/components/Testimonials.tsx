import { Quote, Star } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Testimonials = () => {
  const [ref, hasBeenInView] = useInView({ threshold: 0.1 });

  return (
    <section id="testimonials" className="py-20 bg-[#131521]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 transform transition-all duration-1000 ${hasBeenInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Lo que dicen nuestros <span className="bg-gradient-to-r from-cyan-bright to-green-aqua bg-clip-text text-transparent">Clientes</span>
          </h2>
          <p className="text-xl text-light-blue-gray max-w-3xl mx-auto">
            La confianza de nuestros clientes es nuestro mayor logro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Testimonial Card 1 - Ready for future content */}
          <div className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-bright/10 ${
            hasBeenInView ? 'animate-slideInLeft' : ''
          }`}>
            <div className="flex items-center mb-6">
              <Quote className="h-8 w-8 text-cyan-bright mr-3" />
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-green-aqua" />
                ))}
              </div>
            </div>
            <p className="text-light-gray text-lg leading-relaxed mb-6 italic">
              "Próximamente testimonios de nuestros clientes satisfechos que han transformado su seguridad digital con nuestras soluciones."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-bright to-green-aqua rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-dark-nearly-black font-bold text-lg">?</span>
              </div>
              <div>
                <p className="font-semibold text-white">Cliente Futuro</p>
                <p className="text-light-blue-gray">Empresa</p>
              </div>
            </div>
          </div>

          {/* Testimonial Card 2 - Ready for future content */}
          <div className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-bright/10 ${
            hasBeenInView ? 'animate-slideInRight' : ''
          }`}>
            <div className="flex items-center mb-6">
              <Quote className="h-8 w-8 text-cyan-bright mr-3" />
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-green-aqua" />
                ))}
              </div>
            </div>
            <p className="text-light-gray text-lg leading-relaxed mb-6 italic">
              "Espacio reservado para testimonios de clientes que han mejorado su productividad y seguridad con nuestras soluciones de automatización."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-aqua to-cyan-bright rounded-full flex items-center justify-center mr-4">
                <span className="text-blue-dark-nearly-black font-bold text-lg">?</span>
              </div>
              <div>
                <p className="font-semibold text-white">Cliente Futuro</p>
                <p className="text-light-blue-gray">Institución</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-light-blue-gray mb-8">
            ¿Quieres ser parte de nuestros testimonios de éxito?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-cyan-bright to-green-aqua text-blue-dark-nearly-black px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-bright/25 transition-all duration-200 transform hover:scale-105"
          >
            Contáctanos Ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;