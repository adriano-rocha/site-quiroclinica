import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Results from "./components/Results/Results";
import Videos from "./components/Videos/Videos";
import StrategicCTA1 from "./components/StrategicCTA1/StrategicCTA1";
import Reviews from "./components/Reviews/Reviews";
import StrategicCTA2 from "./components/StrategicCTA2/StrategicCTA2";
import ContactForm from "./components/ContactForm/ContactForm";
import Locations from "./components/Locations/Locations";
import Footer from "./components/Footer/Footer";
import WhatsAppFloatButton from "./components/WhatsAppFloatButton/WhatsAppFloatButton";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />

      <section id="resultados">
        <Results />
        <Videos />
        <StrategicCTA1 />
        <Reviews />
        <StrategicCTA2 />
      </section>

      <ContactForm />
      <Locations />

      <Footer />
      <WhatsAppFloatButton />
    </>
  );
}

export default App;
