import { MapPin, Clock, Phone, Mail } from "lucide-react";
import Whatsapp from "./../images/icons/whatsapp.svg";

const Location = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
            Contactos y Ubicación
          </h2>
          <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 rounded-lg overflow-hidden shadow-lg flex h-full">
            <div className="relative w-full h-full min-h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.0896385896986!2d-5.665416724315316!3d43.541675458905355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e5b68965d1473%3A0x3d34241e92541e48!2sC.%20Col%C3%B3n%2C%2033211%20Gij%C3%B3n%2C%20Asturias!5e0!3m2!1ses!2ses!4v1681456253407!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de ABBA Iglesia Evangélica"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-4">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-church-purple/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-church-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Dirección
                    </h4>
                    <p className="text-gray-600">Calle Colón, nº5, bajo</p>
                    <p className="text-gray-600">33211 Gijón, Asturias</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-church-purple/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-church-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Horario de Servicios
                    </h4>
                    <p className="text-gray-600">Martes: 20:00 (Oración)</p>
                    <p className="text-gray-600">
                      Viernes: 20:00 (Discipulado)
                    </p>
                    <p className="text-gray-600">
                      Domingo: 11:00 (Reunión Familiar)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-church-purple/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-church-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Teléfono
                    </h4>
                    <a
                      href="tel:+34675042136"
                      className="text-gray-600 hover:text-church-purple transition"
                    >
                      +34 675 042 136
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-church-purple/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-church-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <a
                      href="mailto:abbaiglesiagijon@gmail.com"
                      className="text-gray-600 hover:text-church-purple transition"
                    >
                      abbaiglesiagijon@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-4">
            ¿Tienes alguna pregunta sobre nosotros?
          </p>
          <div className="flex flex-col sm:flex-row  justify-center gap-3">
            <a
              href="https://wa.me/34675042136"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-church-purple text-white rounded-lg font-medium hover:bg-church-dark-purple transition-colors"
            >
              <img src={Whatsapp} alt="WhatsApp" className="h-5 w-5" />
              Escríbenos
            </a>
            <a
              href="mailto:abbaiglesiagijon@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 border border-church-purple text-church-purple hover:text-purple hover:bg-church-purple/20 rounded-lg text-base font-medium transition-colors"
            >
              <Mail className="h-5 w-5" />
              Envía un correo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
