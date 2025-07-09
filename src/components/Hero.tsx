import { useEffect, useState } from 'react';
import { Shield, Zap, Lock } from 'lucide-react';
import logo from "../../public/assets/LogoCybernemesis.webp";
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#131521]">
      {/* Background Elements */}
      {/*<div className="absolute inset-0 bg-gradient-to-br from-blue-dark-nearly-black via-blue-dark-electric to-petroleum-blue"></div>}
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-cyan-bright/10 animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-green-aqua/10 animate-float"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 rounded-full bg-light-blue-gray/10 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 rounded-full bg-cyan-bright/10 animate-float"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Logo/Icon */}
          {/* <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-bright to-green-aqua rounded-full blur-xl opacity-30 animate-pulse-slow"></div>
              <div className="relative bg-gradient-to-r from-cyan-bright to-green-aqua p-4 rounded-full">
                <Shield className="h-16 w-16 text-blue-dark-nearly-black" />
              </div>
            </div>
          </div> */}

          <div className="flex justify-center">
            <img
              src={logo}
              alt="Logo"
              className="h-[300px] w-[300px] object-contain"
            />
          </div>



          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-bright to-green-aqua bg-clip-text text-transparent">
              Innovación,
            </span>
            <span className="text-white"> Seguridad</span>
            <span className="text-white"> y </span>
            <span className="bg-gradient-to-r from-green-aqua to-cyan-bright bg-clip-text text-transparent">
              Control
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-light-blue-gray mb-3 max-w-3xl mx-auto">
            Todo en un solo lugar
          </p>

          {/* Description */}
          <p className="text-lg text-light-gray mb-12 max-w-4xl mx-auto leading-relaxed">
            Cybernemesis es una empresa colombiana especializada en ciberseguridad, inteligencia artificial y automatización tecnológica. 
            Ayudamos a empresas, fincas e instituciones a proteger sus activos digitales y automatizar procesos con soluciones inteligentes.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            <div className="flex items-center space-x-2 text-cyan-bright">
              <Lock className="h-5 w-5" />
              <span className="text-white">Ciberseguridad</span>
            </div>
            <div className="flex items-center space-x-2 text-green-aqua">
              <Zap className="h-5 w-5" />
              <span className="text-white">Inteligencia Artificial</span>
            </div>
            <div className="flex items-center space-x-2 text-light-blue-gray">
              <Shield className="h-5 w-5" />
              <span className="text-white">Automatización</span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-cyan-bright to-green-aqua text-blue-dark-nearly-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-cyan-bright/25 transform hover:scale-105 transition-all duration-300 mb-16"
          >
            Agenda tu consultoría
          </button>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <ChevronDown className="h-8 w-8 text-cyan-bright" />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;