import React, { useState, useEffect, useCallback } from "react";
import { useTranslation } from 'react-i18next';
import "./Hero.css";

const images = [
  "/images/img1.jpeg",
  "/images/img2.jpeg",
  "/images/img3.jpeg",
  "/images/img4.jpeg",
];

const Hero = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showQuickForm, setShowQuickForm] = useState(false);

  // Carrega os slides traduzidos do JSON
  const slideContent = t('hero.slides', { returnObjects: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000); 

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
  }, [currentImageIndex, slideContent]);

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

  // Proteção caso os slides ainda não tenham carregado
  if (!slideContent || !Array.isArray(slideContent)) {
    return <div>Carregando...</div>;
  }

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
        aria-label={t('hero.navigation.prevSlide')}
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
        aria-label={t('hero.navigation.nextSlide')}
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
          
          <div className="hero-top-content">
            
            <div className="hero-urgency-badge">
              {t('hero.urgencyBadge')}
            </div>

            <h1 className="hero-title">{currentSlide.title}</h1>
            <p className="hero-subtitle">{currentSlide.subtitle}</p>
          </div>

          
          <div className="hero-bottom-content">
            
            <div className="hero-symptoms">
              <p className="symptoms-intro">{t('hero.symptomsIntro')}</p>
              <ul className="symptoms-list">
                {currentSlide.symptoms.map((symptom, index) => (
                  <li key={index} className="symptom-item">
                    {symptom}
                  </li>
                ))}
              </ul>
            </div>

            
            <div className="hero-cta-buttons">
              <button className="hero-cta-btn primary" onClick={openWhatsApp} type="button">
                📱 {currentSlide.buttonText}
              </button>
              <button className="hero-cta-btn secondary" onClick={openQuickForm} type="button">
                ⚡ {t('hero.quickForm.buttonText')}
              </button>
            </div>

            
            <div className="hero-social-proof">
              <div className="social-stats">
                <span className="stat">{t('hero.socialProof.rating')}</span>
                <span className="stat">{t('hero.socialProof.patients')}</span>
                <span className="stat">{t('hero.socialProof.experience')}</span>
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
            aria-label={`${t('hero.navigation.goToSlide')} ${index + 1}`}
          />
        ))}
      </div>

      
      {showQuickForm && (
        <div className="quick-form-overlay" onClick={closeQuickForm}>
          <div className="quick-form-modal" onClick={(e) => e.stopPropagation()}>
            <button className="quick-form-close" onClick={closeQuickForm}>✕</button>
            <h3>{t('hero.quickForm.title')}</h3>
            <p>{t('hero.quickForm.subtitle')}</p>
            
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
                placeholder={t('hero.quickForm.fields.name')} 
                required 
                className="quick-input"
              />
              <input 
                type="tel" 
                name="whatsapp" 
                placeholder={t('hero.quickForm.fields.whatsapp')} 
                required 
                className="quick-input"
              />
              <select name="queixa" required className="quick-input">
                <option value="">{t('hero.quickForm.fields.complaints.placeholder')}</option>
                <option value={t('hero.quickForm.fields.complaints.lombar')}>{t('hero.quickForm.fields.complaints.lombar')}</option>
                <option value={t('hero.quickForm.fields.complaints.hernia')}>{t('hero.quickForm.fields.complaints.hernia')}</option>
                <option value={t('hero.quickForm.fields.complaints.sciatica')}>{t('hero.quickForm.fields.complaints.sciatica')}</option>
                <option value={t('hero.quickForm.fields.complaints.cervical')}>{t('hero.quickForm.fields.complaints.cervical')}</option>
                <option value={t('hero.quickForm.fields.complaints.locked')}>{t('hero.quickForm.fields.complaints.locked')}</option>
                <option value={t('hero.quickForm.fields.complaints.others')}>{t('hero.quickForm.fields.complaints.others')}</option>
              </select>
              <button type="submit" className="quick-submit-btn">
                {t('hero.quickForm.submitBtn')}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default React.memo(Hero);