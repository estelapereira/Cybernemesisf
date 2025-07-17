import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/LogoCybernemesis.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-blue-dark-nearly-black/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Logo"
              className="h-24 w-24 sm:h-20 sm:w-20 object-contain"
            />
            {/*Cynerbenemesis name */}
            <h1 className="text-2xl font-bold text-white">Cybernemesis</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-white hover:text-cyan-bright transition-colors duration-200"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("advantages")}
              className="text-white hover:text-cyan-bright transition-colors duration-200"
            >
              Ventajas
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-white hover:text-cyan-bright transition-colors duration-200"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-cyan-bright to-green-aqua text-blue-dark-nearly-black px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-bright/25 transition-all duration-200"
            >
              Agenda tu consultoría
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-cyan-bright transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-dark-nearly-black/95 backdrop-blur-md rounded-lg mt-2 p-4 animate-slideUp">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left text-white hover:text-cyan-bright transition-colors duration-200"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("advantages")}
                className="text-left text-white hover:text-cyan-bright transition-colors duration-200"
              >
                Ventajas
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-white hover:text-cyan-bright transition-colors duration-200"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-cyan-bright to-green-aqua text-blue-dark-nearly-black px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-bright/25 transition-all duration-200"
              >
                Agenda tu consultoría
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
