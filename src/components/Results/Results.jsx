import React from "react";
import { useTranslation } from 'react-i18next';
import "./Results.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Results = () => {
  const { t } = useTranslation();

  // Carrega os dados traduzidos do JSON
  const resultsData = t('results.cards', { returnObjects: true });
  const CLINIC_WHATSAPP = "5521965928971";

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `🏥 *Olá! Gostaria de agendar uma consulta na QuiroClínica*\n\n` +
        `📋 Vim através do site e tenho interesse em:\n` +
        `• Avaliação completa\n` +
        `• Tratamento personalizado\n` +
        `• Alívio das dores\n\n` +
        `Quando posso agendar minha consulta? 📅`
    );

    const whatsappUrl = `https://wa.me/${CLINIC_WHATSAPP}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="results" id="results">
      <div className="results-container">
        <h2 className="results-title">{t('results.title')}</h2>

        <p className="results-intro">
          {t('results.intro.part1')}
          <span className="highlight">{t('results.intro.highlight1')}</span>
          {t('results.intro.part2')}
          <span className="highlight-blue">{t('results.intro.highlight2')}</span>
          {t('results.intro.part3')}
          <span className="highlight">{t('results.intro.highlight3')}</span>
          {t('results.intro.part4')}
        </p>

        <div className="results-cards">
          {resultsData.map((result) => (
            <div key={result.id} className="results-card">
              <div className="results-icon">{result.icon}</div>
              <h3 className="results-card-title">{result.title}</h3>
              <p
                className="results-card-description"
                dangerouslySetInnerHTML={{ __html: result.description }}
              />
            </div>
          ))}
        </div>

        <div>
          <h4>{t('results.urgency.limitedSpots')}</h4>
          <h4>
            {t('results.urgency.callToAction')}
          </h4>
        </div>

        <button
          onClick={handleWhatsAppClick}
          className="results-cta-btn whatsapp-btn"
          type="button"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
          {t('results.whatsappButton')}
        </button>
      </div>
    </section>
  );
};

export default Results;