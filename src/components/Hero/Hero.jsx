import React, { useState, useEffect, useCallback } from "react";
import "./Hero.css";

const images = [
  "/images/img1.jpeg",
  "/images/img2.jpeg",
  "/images/img3.jpeg",
  "/images/img4.jpeg",
];

const slideContent = [
  {
    title: "Sofre com Dor Lombar, Ciática ou Coluna Travada?",
    subtitle: "Tratamento de Quiropraxia no Rio de Janeiro que resolve a CAUSA da dor, não só alivia temporariamente.",
    buttonText: "Agende sua Avaliação JÁ",
    symptoms: [
      "Dor lombar constante",
      "Travamento da coluna", 
      "Dificuldade para levantar ou andar",
      "Dor que irradia para as pernas"
    ]
  },
  {
    title: "Dor nas Costas Limitando sua Vida?",
    subtitle: "Mais de 10 anos tratando hérnias de disco, nervo ciático e dores crônicas com resultados comprovados.",
    buttonText: "Fale com Especialista Agora",
    symptoms: [
      "Hérnia de disco",
      "Nervo ciático inflamado",
      "Dores que pioram sentado",
      "Formigamento nas pernas"
    ]
  },
  {
    title: "Cansado de Tomar Remédios para Dor?",
    subtitle: "Descubra como a Quiropraxia elimina a dor sem medicamentos, tratando a raiz do problema.",
    buttonText: "Quero Tratamento Definitivo",
    symptoms: [
      "Dependência de anti-inflamatórios",
      "Dor que sempre volta",
      "Efeitos colaterais dos remédios",
      "Sem melhora duradoura"
    ]
  },
  {
    title: "Dor Impedindo Você de Trabalhar?",
    subtitle: "Centenas de pacientes recuperaram sua qualidade de vida. Você pode ser o próximo!",
    buttonText: "Garanta sua Vaga Hoje",
    symptoms: [
      "Faltas no trabalho por dor",
      "Dificuldade para se concentrar", 
      "Noites mal dormidas",
      "Limitações nas atividades"
    ]
  }
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showQuickForm, setShowQuickForm] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); // Aumentei para 6s para dar tempo de ler

    return () => clearInterval(interval);
  }, []);

  const openWhatsApp = useCallback(() => {
    const currentSlide = slideContent[currentImageIndex];
    const message = `🏥 *URGENTE - Preciso de Ajuda com Dor!*\n\n` +
      `😰 *Minha situação:*\n` +
      currentSlide.symptoms.map(symptom => `• ${symptom}`).join('\n') + 
      `\n\n📞 Quando posso conversar com o especialista?\n` +
      `⏰ Preciso de uma solução rápida!`;
    
    const phoneNumber = "5521965928971";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  }, [currentImageIndex]);

  const openQuickForm = () => {
    setShowQuickForm(true);
  };

  const closeQuickForm = () => {
    setShowQuickForm(false);
  };

  const goToSlide = (index) => setCurrentImageIndex(index);
  const nextSlide = () =>
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const currentSlide = slideContent[currentImageIndex];

  return (
    <section className="hero">
      <div className="hero-background">
        {images.map((src, index) => (
          <div
            key={index}
            className={`hero-slide ${
              index === currentImageIndex ? "active" : ""
            }`}
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div 
              className="hero-slide-blur" 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                filter: 'blur(15px) brightness(0.6)',
                zIndex: 0
              }}
            />
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className={`hero-img ${
                src.includes("img1.jpeg") ? "hero-img-top" : ""
              }`}
              style={{
                zIndex: 1,
                position: 'relative'
              }}
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
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="15,18 9,12 15,6"></polyline>
        </svg>
      </button>

      <button
        className="hero-arrow hero-arrow-right"
        onClick={nextSlide}
        aria-label="Próximo slide"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="9,18 15,12 9,6"></polyline>
        </svg>
      </button>

      <div className="hero-container">
        <div className="hero-content">
          {/* Conteúdo Superior */}
          <div className="hero-top-content">
            {/* Badge de Urgência - MELHORADO */}
            <div className="hero-urgency-badge">
              🚨 VAGAS LIMITADAS HOJE - Apenas 3 horários disponíveis
            </div>

            <h1 className="hero-title">{currentSlide.title}</h1>
            <p className="hero-subtitle">{currentSlide.subtitle}</p>
          </div>

          {/* Conteúdo Inferior */}
          <div className="hero-bottom-content">
            {/* Sintomas em Lista - MELHORADOS */}
            <div className="hero-symptoms">
              <p className="symptoms-intro">Você sente alguns destes sintomas?</p>
              <ul className="symptoms-list">
                {currentSlide.symptoms.map((symptom, index) => (
                  <li key={index} className="symptom-item">
                    {symptom}
                  </li>
                ))}
              </ul>
            </div>

            {/* Botões CTA - MELHORADOS */}
            <div className="hero-cta-buttons">
              <button className="hero-cta-btn primary" onClick={openWhatsApp} type="button">
                📱 {currentSlide.buttonText}
              </button>
              <button className="hero-cta-btn secondary" onClick={openQuickForm} type="button">
                ⚡ Formulário Rápido
              </button>
            </div>

            {/* Prova Social Rápida - MELHORADA */}
            <div className="hero-social-proof">
              <div className="social-stats">
                <span className="stat">⭐ 4.9/5 avaliação</span>
                <span className="stat">✅ 500+ pacientes</span>
                <span className="stat">🏆 10+ anos</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${
              index === currentImageIndex ? "active" : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Modal de Formulário Rápido */}
      {showQuickForm && (
        <div className="quick-form-overlay" onClick={closeQuickForm}>
          <div className="quick-form-modal" onClick={(e) => e.stopPropagation()}>
            <button className="quick-form-close" onClick={closeQuickForm}>✕</button>
            <h3>⚡ Agendamento Rápido</h3>
            <p>Preencha em 30 segundos e receba contato imediato:</p>
            
            <form className="quick-form" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const nome = formData.get('nome');
              const whatsapp = formData.get('whatsapp');
              const queixa = formData.get('queixa');
              
              const message = `🏥 *FORMULÁRIO RÁPIDO - QuiroClínica*\n\n` +
                `👤 *Nome:* ${nome}\n` +
                `📱 *WhatsApp:* ${whatsapp}\n` +
                `⚕️ *Queixa:* ${queixa}\n\n` +
                `🚨 URGENTE: Preciso de atendimento hoje!`;
              
              const url = `https://wa.me/5521965928971?text=${encodeURIComponent(message)}`;
              window.open(url, "_blank");
              closeQuickForm();
            }}>
              <input 
                type="text" 
                name="nome" 
                placeholder="Seu nome completo" 
                required 
                className="quick-input"
              />
              <input 
                type="tel" 
                name="whatsapp" 
                placeholder="WhatsApp (21) 99999-9999" 
                required 
                className="quick-input"
              />
              <select name="queixa" required className="quick-input">
                <option value="">Sua principal queixa:</option>
                <option value="Dor lombar/lombalgia">Dor lombar/lombalgia</option>
                <option value="Hérnia de disco">Hérnia de disco</option>
                <option value="Nervo ciático/ciatalgia">Nervo ciático/ciatalgia</option>
                <option value="Dor cervical/pescoço">Dor cervical/pescoço</option>
                <option value="Travamento da coluna">Travamento da coluna</option>
                <option value="Outros">Outros</option>
              </select>
              <button type="submit" className="quick-submit-btn">
                🚀 Receber Contato AGORA
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default React.memo(Hero);