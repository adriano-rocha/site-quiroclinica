import React, { useCallback, useState } from "react";
import "./WhatsAppFloatButton.css";

const WhatsAppFloatButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const openWhatsApp = useCallback(() => {
    const message =
      "🚨 URGENTE - Estou com dor e preciso de ajuda!\n\n" +
      "😰 Situação atual:\n" +
      "• Dor que está limitando minha vida\n" +
      "• Preciso de uma solução eficaz\n" +
      "• Não aguento mais essa situação\n\n" +
      "📞 Quando posso falar com o especialista?\n" +
      "⏰ Preciso de atendimento hoje mesmo!\n\n" +
      "💬 Vim pelo site da QuiroClínica";

    const phoneNumber = "5521965928971";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  }, []);

  return (
    <div
      className="whatsapp-float-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Texto que aparece no hover - Desktop */}
      <div className={`whatsapp-text ${isHovered ? "visible" : ""}`}>
        <span className="whatsapp-message">Dor não espera!</span>
        <span className="whatsapp-cta">Fale com especialista AGORA</span>
      </div>

      <button
        className="whatsapp-float intense-pulse"
        onClick={openWhatsApp}
        type="button"
        title="Emergência: Fale com especialista em dor AGORA"
        aria-label="Contato urgente via WhatsApp para tratamento de dor"
      >
        <img
          src="/images/whats.png"
          alt="WhatsApp"
          className="whatsapp-icon"
          loading="lazy"
        />
      </button>

      {/* Texto fixo no mobile */}
      <div className="whatsapp-mobile-text">
        <span>Dor?</span>
        <strong>Fale Agora!</strong>
      </div>
    </div>
  );
};

export default React.memo(WhatsAppFloatButton);
