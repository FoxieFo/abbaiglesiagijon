import { Check } from "lucide-react";
import SobreNosotros from './../images/photos/SobreNosotros4.jpg'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl text-center md:text-4xl font-bold mb-4 font-playfair">
            Sobre Nosotros
          </h2>
          <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
          <p className="text-gray-600">
            Nuestra iglesia, Abba, nació de un profundo deseo de seguir los
            mandatos de Dios. Así como es Él, un experto en sacarnos de nuestra
            zona de confort, vino a mostrarnos un camino diferente al que
            teníamos planeado. Así fue como comenzó esta familia, en la casa de
            nuestros pastores, donde se formó una pequeña célula de fe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg max-h-96">
              <img
                src={SobreNosotros}
                alt="Gente fuera de casa"
                className="w-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 bg-church-purple p-6 rounded-lg shadow-xl">
              <p className="text-white font-semibold">Desde 2024</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Nuestra Misión
            </h3>
            <p className="text-gray-600 mb-6">
              En ABBA Iglesia Evangélica nos comprometemos a compartir el amor
              de Cristo a través de la adoración, el discipulado y el servicio
              comunitario. Creemos en crear un espacio donde todos puedan
              encontrar esperanza, propósito y una familia espiritual.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Nuestros Valores
            </h3>
            <ul className="space-y-3 mb-8">
              {[
                "Fe centrada en Cristo y basada en la Biblia",
                "Comunidad acogedora e inclusiva",
                "Compromiso con el crecimiento espiritual",
                "Servicio a nuestra ciudad y al mundo",
              ].map((value, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 p-1 rounded-full bg-church-purple/10 mr-3 mt-1">
                    <Check className="h-4 w-4 text-church-purple" />
                  </span>
                  <span className="text-gray-700">{value}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center text-church-purple font-medium hover:text-church-darkPurple transition-colors"
            >
              Contáctanos para saber más
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
