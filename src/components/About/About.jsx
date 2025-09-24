import React from "react";
import { useTranslation } from 'react-i18next';
import "./About.css";

const About = () => {
  const { t } = useTranslation();

  const openWhatsApp = () => {
    const message =
      `🏥 *QUERO FALAR COM O ESPECIALISTA*\n\n` +
      `😰 Estou sofrendo com dor e preciso de ajuda!\n` +
      `⚕️ Vi que você tem 10+ anos de experiência e 500+ pacientes curados.\n\n` +
      `🆘 Quando posso agendar uma consulta?\n` +
      `📞 Preciso resolver isso URGENTE!`;

    const phoneNumber = "5521965928971";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  // Carrega os dados traduzidos do JSON
  const statsData = t('about.stats', { returnObjects: true });
  const problemsData = t('about.problemsSolved.problems', { returnObjects: true });
  const credentialsData = t('about.credentials.items', { returnObjects: true });
  const benefitsData = t('about.whyChoose.benefits', { returnObjects: true });

  return (
    <section id="sobre" className="about">
      <div className="about-container">
        <div className="about-image">
          <img
            src="/images/perfil.jpg"
            alt={t('about.alt')}
            className="perfil-image"
            loading="lazy"
          />
          <div className="credibility-badge">
            <span className="years-badge">{t('about.badges.years')}</span>
            <span className="patients-badge">{t('about.badges.patients')}</span>
          </div>
        </div>

        <div className="about-text">
          <div className="pain-connection">
            <h2 className="about-title">
              {t('about.title')}
            </h2>
            <p className="pain-intro">
              <strong>
                {t('about.painIntro')}
              </strong>
              <br />
              {t('about.painIntroSub')}
            </p>
          </div>

          <div className="impact-stats">
            <div className="stat-item">
              <span className="stat-number">{statsData.patients.number}</span>
              <span className="stat-label">{statsData.patients.label}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{statsData.success.number}</span>
              <span className="stat-label">{statsData.success.label}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{statsData.experience.number}</span>
              <span className="stat-label">{statsData.experience.label}</span>
            </div>
          </div>

          <h3 className="about-name">{t('about.doctorName')}</h3>
          <p className="about-description">
            {t('about.description')}
          </p>

          <div className="problems-solved">
            <h3 className="section-subtitle">{t('about.problemsSolved.title')}</h3>
            <div className="problems-grid">
              {problemsData.map((problem, index) => (
                <div key={index} className="problem-item">{problem}</div>
              ))}
            </div>
          </div>

          <div className="credentials-compact">
            <h3 className="section-subtitle">{t('about.credentials.title')}</h3>
            <div className="credentials-list">
              {credentialsData.map((credential, index) => (
                <span key={index} className="credential">{credential}</span>
              ))}
            </div>
          </div>

          <div className="why-choose">
            <h3 className="section-subtitle">
              {t('about.whyChoose.title')}
            </h3>
            <ul className="benefits-list">
              {benefitsData.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="about-cta-section">
            <div className="urgency-message">
              <p>
                <strong>{t('about.cta.urgencyTitle')}</strong>
              </p>
              <p>
                {t('about.cta.urgencySubtitle')}
              </p>
            </div>

            <button className="about-cta-btn" onClick={openWhatsApp}>
              {t('about.cta.button')}
            </button>

            <div className="guarantee-note">
              <p>{t('about.cta.guarantee')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;