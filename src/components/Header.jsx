import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "./../images/logo/logo.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setTimeout(() => setIsMenuVisible(false), 300);
    } else {
      setIsMenuVisible(true);
      setTimeout(() => setIsMenuOpen(true), 10);
    }
  };

  const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Sobre nosotros", href: "#about" },
    { name: "Servicios", href: "#services" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-md backdrop-blur-sm py-3"
          : "bg-transparent py-3"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="#home" className="flex items-center gap-2">
          <img className="w-28" src={logo} alt="logo" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-church-purple transition-colors font-normal"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-church-purple hover:bg-church-darkPurple text-white text-base px-4 py-2 rounded-md transition-colors"
          >
            Contáctanos
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 z-50 relative"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuVisible && (
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white z-40 md:hidden transition-opacity duration-300 pt-20 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="container mx-auto px-4 flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-church-purple text-lg font-normal py-2"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={toggleMenu}
              className="bg-church-purple hover:bg-church-darkPurple text-white text-base w-full text-center py-2 rounded-md"
            >
              Contáctanos
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header

