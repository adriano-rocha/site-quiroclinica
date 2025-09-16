import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Videos from "./components/Videos/Videos";
import Results from "./components/Results/Results";
import Locations from "./components/Locations/Locations";
import Reviews from "./components/Reviews/Reviews";
import WhatsAppFloat from "./components/whatsAppFloat/whatsAppFloat";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Videos />
      <Results />
      <Locations />
      <Reviews />
      <WhatsAppFloat />
      <Footer />
    </>
  );
}
export default App;
