import React from "react";
import "./Results.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Results = () => {
  const resultsData = [
    {
      id: 1,
      icon: "🎯",
      title: "Alívio Imediato da Dor",
      description:
        "Resultados visíveis já na primeira sessão com técnicas avançadas de <strong>quiropraxia</strong> e tratamento personalizado.",
    },
    {
      id: 2,
      icon: "⚡",
      title: "Correção Postural Efetiva",
      description:
        'Melhora significativa da postura através de <span class="keyword">ajustes precisos</span> e exercícios terapêuticos específicos.',
    },
    {
      id: 3,
      icon: "💪",
      title: "Fortalecimento Muscular",
      description:
        "Desenvolvimento da musculatura de suporte para <strong>prevenção</strong> de futuras lesões e dores.",
    },
  ];

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
        <h2 className="results-title">Resultados Comprovados</h2>

        <p className="results-intro">
          Na <span className="highlight">Quiroclínica</span>, cada paciente
          experimenta uma
          <span className="highlight-blue"> transformação completa</span>{" "}
          através de nossos tratamentos{" "}
          <span className="highlight">personalizados e eficazes</span>.
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
          <h4>Vagas limitadas devido à alta procura.</h4>
          <h4>
            ⚠️ Não adie o cuidado com sua saúde — seu corpo merece estar livre
            das dores!
          </h4>
        </div>

        <button
          onClick={handleWhatsAppClick}
          className="results-cta-btn whatsapp-btn"
          type="button"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
          Agendar pelo WhatsApp
        </button>
      </div>
    </section>
  );
};

export default Results;
