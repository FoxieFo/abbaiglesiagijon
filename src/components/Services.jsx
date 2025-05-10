import { Clock, BookOpen, Users, Mail } from "lucide-react";

const Services = () => {
  const serviceSchedule = [
    {
      day: "Martes",
      name: "Oración",
      time: "20:00",
      description: "Tiempo dedicado a la oración comunitaria y personal.",
      icon: <Clock className="h-8 w-8 text-church-gold" />,
    },
    {
      day: "Viernes",
      name: "Discipulado",
      time: "20:00",
      description: "Estudio bíblico y formación espiritual para creyentes.",
      icon: <BookOpen className="h-8 w-8 text-church-gold" />,
    },
    {
      day: "Domingo",
      name: "Reunión Familiar",
      time: "11:00",
      description:
        "Celebración principal con alabanza, predicación y comunión.",
      icon: <Users className="h-8 w-8 text-church-gold" />,
    },
  ];

  return (
    <section id="services" className="pt-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
            Horario de Servicios
          </h2>
          <div className="w-20 h-1 bg-church-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Te invitamos a participar en nuestras reuniones semanales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceSchedule.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-1 bg-church-purple"></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {service.day}
                    </h3>
                    <p className="text-church-purple font-medium">
                      {service.name}
                    </p>
                  </div>
                  <div className="bg-church-purple/10 p-3 rounded-full">
                    {service.icon}
                  </div>
                </div>
                <div className="mb-4">
                  <div className="inline-block px-3 py-1 bg-church-gold/20 rounded-full text-church-darkGold font-medium">
                    {service.time}
                  </div>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Services;
