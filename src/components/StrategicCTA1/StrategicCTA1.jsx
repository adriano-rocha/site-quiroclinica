import React from 'react';
import './StrategicCTA1.css';

const StrategicCTA1 = () => {
  const openWhatsApp = () => {
    const message = `🎥 *VI OS DEPOIMENTOS E QUERO ESSE RESULTADO!*\n\n` +
      `😰 *Minha situação atual:*\n` +
      `• Sofro com dores constantes\n` +
      `• Quero ter o mesmo alívio desses pacientes\n` +
      `• Preciso de um tratamento que realmente funcione\n\n` +
      `🎯 *Quero agendar minha avaliação HOJE!*\n` +
      `📞 Quando posso conversar com o especialista?`;
    
    const phoneNumber = "5521965928971";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="strategic-cta-1">
      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-badge">
            🔥 TRANSFORMAÇÃO REAL
          </div>
          
          <h3 className="cta-title">
            Quer Ter Resultados Como Esses Pacientes?
          </h3>
          
          <p className="cta-description">
            Você acabou de ver pessoas que <strong>sofriam com dores</strong> exatamente como você. 
            Hoje elas vivem <strong>sem dor</strong> e com <strong>qualidade de vida</strong> renovada.
          </p>

          <div className="cta-benefits">
            <div className="benefit-item">✅ Alívio já na primeira sessão</div>
            <div className="benefit-item">✅ Resultados comprovados</div>
            <div className="benefit-item">✅ Técnicas que funcionam</div>
          </div>

          <div className="cta-urgency">
            <p><strong>Sua dor não vai sumir sozinha.</strong></p>
            <p>Cada dia que passa é mais sofrimento desnecessário.</p>
          </div>

          <button className="cta-button" onClick={openWhatsApp}>
            🚀 Quero Esse Resultado Também!
          </button>

          <div className="cta-guarantee">
            <span>📞 Atendimento imediato | 🔒 Conversa confidencial</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicCTA1;