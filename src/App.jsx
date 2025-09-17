import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Results from "./components/Results/Results";
import Videos from "./components/Videos/Videos";
import Reviews from "./components/Reviews/Reviews";
import ContactForm from "./components/ContactForm/ContactForm";
import Locations from "./components/Locations/Locations";
import Footer from "./components/Footer/Footer";
import WhatsAppFloat from "./components/whatsAppFloat/whatsAppFloat";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />

      <section id="resultados">
        <Results />
        <Videos />
      </section>

      <ContactForm />
      <Locations />
      <Reviews />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
