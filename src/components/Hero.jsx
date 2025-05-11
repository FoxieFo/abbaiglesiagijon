import HeroImg from "./../images/photos/Hero.jpg";
import FullLogo from "./../images/logo/full-logo.svg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center pt-16 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in">
            <div className="rounded-xl overflow-hidden shadow-xl relative">
              <img
                src={HeroImg}
                alt="Biblia con flores"
                className="object-cover w-full h-full max-h-[300px] lg:max-h-none"
              />
              <div className="absolute inset-0 bg-church-purple/20 mix-blend-overlay"></div>
            </div>
          </div>

          <div className="animate-slide-up">
            <h1 className="flex flex-col md:text-5xl lg:text-5xl font-bold mb-6 font-playfair text-gray-900">
              <img src={FullLogo} alt="logo" className="max-w-58" />
            </h1>
            <div className="text-lg text-gray-700 mb-8 max-w-xl">
              <p>Profesando y viviendo el amor de Cristo.</p>
              <p>
                Somos ABBA Iglesia Evangélica — una comunidad de fe, esperanza y amor en el corazón de
                Gijón. Te invitamos a formar parte de nuestra familia.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-church-purple text-white rounded-lg hover:bg-church-dark-purple transition-colors"
              >
                Nuestros Servicios
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 border border-church-purple text-church-purple hover:text-purple hover:bg-church-purple/20 rounded-lg text-base transition-colors"
              >
                Conócenos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
