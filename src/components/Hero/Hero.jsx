import React, { useState, useEffect, useCallback } from "react";
import "./Hero.css";

const images = [
  "/images/img1.jpeg",
  "/images/img2.jpeg",
  "/images/img3.jpeg",
  "/images/img4.jpeg"
];

const slideContent = [
  {
    title: "Quiroclínica",
    subtitle: "Atendimento personalizado com resultados rápidos e efetivos para dor crônica, reabilitação muscular e bem-estar.",
    buttonText: "Agendar 1ª consulta",
  },
  {
    title: "Transforme sua Saúde",
    subtitle: "Tratamentos especializados em quiropraxia e acupuntura. Cuide do seu corpo com quem entende.",
    buttonText: "Quero atendimento",
  },
  {
    title: "Dor nas Costas?",
    subtitle: "Nossos tratamentos são focados em resultados duradouros. Agende sua consulta e sinta a diferença.",
    buttonText: "Agende sua consulta",
  },
  {
    title: "Conheça Nossa Clínica",
    subtitle: "Estrutura completa para cuidar da sua saúde com excelência.",
    buttonText: "Saiba mais",
  },
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const openWhatsApp = useCallback(() => {
    const message = "Olá! Gostaria de agendar uma consulta na Quiroclínica.";
    const phoneNumber = "5521965928971";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  }, []);

  const goToSlide = (index) => setCurrentImageIndex(index);
  const nextSlide = () =>
    setCurrentImageIndex(prev =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  const prevSlide = () =>
    setCurrentImageIndex(prev =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  const currentSlide = slideContent[currentImageIndex];

  return (
    <section className="hero">
      <div className="hero-background">
        {images.map((src, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentImageIndex ? "active" : ""}`}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className={`hero-img ${src.includes("img1.jpeg") ? "hero-img-top" : ""}`}
            />
          </div>
        ))}
        <div className="hero-overlay" />
      </div>

      <button
        className="hero-arrow hero-arrow-left"
        onClick={prevSlide}
        aria-label="Slide anterior"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15,18 9,12 15,6"></polyline>
        </svg>
      </button>

      <button
        className="hero-arrow hero-arrow-right"
        onClick={nextSlide}
        aria-label="Próximo slide"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9,18 15,12 9,6"></polyline>
        </svg>
      </button>

      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">{currentSlide.title}</h1>
          <p className="hero-subtitle">{currentSlide.subtitle}</p>
          <button
            className="hero-cta-btn"
            onClick={openWhatsApp}
            type="button"
          >
            {currentSlide.buttonText}
          </button>
        </div>
      </div>

      <div className="hero-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentImageIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default React.memo(Hero);
