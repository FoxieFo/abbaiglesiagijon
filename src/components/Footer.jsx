import { Church, Facebook, Instagram, Youtube, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Church className="h-6 w-6 text-church-gold" />
              <span className="font-playfair text-xl font-bold text-white">
                ABBA
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              Una comunidad cristiana en el corazón de Gijón.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-church-gold transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-church-gold transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-church-gold transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {["Inicio", "Acerca de", "Servicios", "Galería", "Contacto"].map(
                (link, index) => (
                  <li key={index}>
                    <a
                      href={`#${
                        link.toLowerCase() === "inicio"
                          ? "home"
                          : link.toLowerCase().replace(" ", "-")
                      }`}
                      className="text-gray-300 hover:text-church-gold transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Horarios</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">
                <span className="block font-medium">Martes</span>
                <span className="text-sm">Oración - 20:00</span>
              </li>
              <li className="text-gray-300">
                <span className="block font-medium">Viernes</span>
                <span className="text-sm">Discipulado - 20:00</span>
              </li>
              <li className="text-gray-300">
                <span className="block font-medium">Domingo</span>
                <span className="text-sm">Reunión Familiar - 11:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Ubicación</h3>
            <address className="text-gray-300 not-italic mb-4">
              Calle Colón, nº5, bajo
              <br />
              33211 Gijón, Asturias
            </address>
            <a
              href="mailto:abbaiglesiagijon@gmail.com"
              className="text-gray-300 hover:text-white transition mb-2 block"
            >
              abbaiglesiagijon@gmail.com
            </a>
            <a
              href="tel:+34675042136"
              className="text-gray-300 hover:text-white transition block"
            >
              +34 675 042 136
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center">
            &copy; {currentYear} ABBA Iglesia Evangélica. Todos los derechos
            reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2 flex items-center justify-center gap-1 text-center">
            Creado con <Heart className="h-3 w-3 text-church-gold" /> para la
            gloria de Dios por{" "}
            <a
              href="https://www.linkedin.com/in/victoriaanisimova/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-church-purple transition"
            >
              Victoria A.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
