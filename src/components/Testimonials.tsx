import { Quote, Star } from "lucide-react";
import { useInView } from "../hooks/useInView";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Desde Optimum Performance reconocemos la labor de Cybernemesis como un aliado estratégico en soluciones de ciberseguridad e instalación de sistemas de seguridad física. Su profesionalismo, cumplimiento y conocimiento técnico han sido evidentes en cada interacción. Recomendamos sus servicios con total confianza y respaldamos su compromiso con la excelencia.",
      cliente: "Andres F. Garcia",
      empresa: "Optimum Performance",
      avatarGradient: "from-cyan-bright to-green-aqua",
      animation: "animate-slideInLeft",
    },
    {
      text: "Estamos muy satisfechos con el servicio prestado en la instalación del sistema y software especializado para nuestra clínica. La atención fue oportuna, el trabajo profesional y adaptado a nuestras necesidades. Gracias a esta implementación, hemos optimizado nuestros procesos y mejorado la atención a nuestros pacientes. Recomendamos ampliamente este servicio por su calidad y compromiso",
      cliente: "Angélica Alvarez y Angel Parra",
      empresa: "Clinica Centro de Varices y Cirugías Ambulatorias",
      avatarGradient: "from-green-aqua to-cyan-bright",
      animation: "animate-slideInRight",
    },
  ];

  const [ref, hasBeenInView] = useInView({ threshold: 0.1 });

  return (
    <section id="testimonials" className="py-20 bg-[#131521]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            hasBeenInView
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Lo que dicen nuestros{" "}
            <span className="bg-gradient-to-r from-cyan-bright to-green-aqua bg-clip-text text-transparent">
              Clientes
            </span>
          </h2>
          <p className="text-xl text-light-blue-gray max-w-3xl mx-auto">
            La confianza de nuestros clientes es nuestro mayor logro
          </p>
        </div>

        {/* Array de testimonios */}
        {/** Extraer información relevante y mapearla **/}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-bright/10 ${
                hasBeenInView ? t.animation : ""
              }`}
            >
              <div className="flex items-center mb-6">
                <Quote className="h-8 w-8 text-cyan-bright mr-3" />
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-current text-green-aqua"
                    />
                  ))}
                </div>
              </div>
              <p className="text-light-gray text-lg leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
                {/* <div
                  className={`w-12 h-12 bg-gradient-to-r ${t.avatarGradient} rounded-full flex items-center justify-center mr-4`}
                > */}
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-white">{t.cliente}</p>
                  <p className="text-light-blue-gray">{t.empresa}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-light-blue-gray mb-8">
            ¿Quieres ser parte de nuestros testimonios de éxito?
          </p>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
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
