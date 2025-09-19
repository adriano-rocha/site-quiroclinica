import React from 'react';
import './StrategicCTA2.css';

const StrategicCTA2 = () => {
  const openWhatsApp = () => {
    const message = `⭐ *VI AS AVALIAÇÕES E QUERO FAZER PARTE!*\n\n` +
      `🔍 *Depois de ler os depoimentos:*\n` +
      `• Vejo que outros pacientes tiveram sucesso\n` +
      `• Quero o mesmo alívio e qualidade de vida\n` +
      `• Confio na experiência comprovada do Dr. Vinnicius\n\n` +
      `👥 *QUERO ME JUNTAR AOS PACIENTES SATISFEITOS*\n` +
      `📅 Quando posso agendar minha primeira consulta?\n` +
      `💬 Preciso de mais informações sobre o tratamento`;
    
    const phoneNumber = "5521965928971";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="strategic-cta-2">
      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-badge">
            ⭐ CENTENAS DE SUCESSOS
          </div>
          
          <h3 className="cta-title">
            Junte-se a Centenas de Pacientes Satisfeitos
          </h3>
          
          <p className="cta-description">
            Essas avaliações são apenas uma <strong>pequena amostra</strong> dos resultados que 
            alcançamos. <strong>Mais de 500 pacientes</strong> já recuperaram sua qualidade de vida conosco.
          </p>

          <div className="cta-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Pacientes Tratados</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Anos de Experiência</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Satisfação</div>
            </div>
          </div>

          <div className="cta-social-proof">
            <p className="proof-text">
              "Já na primeira sessão senti melhoras absurdas" - <strong>Sonia Cristina</strong>
            </p>
            <p className="proof-text">
              "Saí sem dor nenhuma... Um alívio enorme!" - <strong>Fabio Emiliano</strong>
            </p>
          </div>

          <div className="cta-urgency">
            <p><strong>Não seja mais um sofrendo em silêncio.</strong></p>
            <p>Seja o próximo caso de sucesso!</p>
          </div>

          <button className="cta-button" onClick={openWhatsApp}>
            🎯 Quero Fazer Parte Desse Grupo!
          </button>

          <div className="cta-guarantee">
            <span>🏆 Técnicas comprovadas | ⚡ Resultados rápidos | 💯 Profissional especializado</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicCTA2;