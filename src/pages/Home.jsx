import DailyVerse from "../components/DailyVerse";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Location from "../components/Location";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <DailyVerse />
      <About />
      <Services />
      <Location />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;
