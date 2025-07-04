import FullLogo from "./../images/logo/full-logo.svg";
import HeroImg from "./../images/photos/HeroAbba.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center bg-no-repeat bg-gradient-to-b from-white to-gray-50"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      <div className="absolute inset-0 bg-church-purple/30 mix-blend-overlay"></div>
      <div className="relative z-10 container mx-auto px-4 py-32 flex justify-left items-end min-h-[80vh]">
        <div className="max-w-2xl text-left text-white animate-slide-up ">
          <p className="text-5xl font-bold mb-4">
            Profesando y viviendo el amor de Cristo.
          </p>
          <h1 className="text-white text-lg mb-8">
            Somos ABBA Iglesia Evangélica, una comunidad de fe, esperanza y
            amor, situada en el corazón de Gijón. Te invitamos a unirte a
            nuestra familia.
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-church-purple text-white rounded-lg hover:bg-church-dark-purple transition-colors"
            >
              Nuestros Servicios
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 border bg-church-purple/20 border-church-purple text-white hover:bg-church-purple/40 rounded-lg text-base transition-colors"
            >
              Conócenos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
