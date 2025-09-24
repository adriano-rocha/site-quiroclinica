import React, { useCallback, useState } from "react";
import "./WhatsAppFloatButton.css";
import { useTranslation } from "react-i18next";

const WhatsAppFloatButton = () => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const openWhatsApp = useCallback(() => {
    const message = t('whatsappFloat.urgentMessage');

    const phoneNumber = "5521965928971";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  }, [t]);

  return (
    <div
      className="whatsapp-float-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      <div className={`whatsapp-text ${isHovered ? "visible" : ""}`}>
        <span className="whatsapp-message">{t('whatsappFloat.hoverMessage')}</span>
        <span className="whatsapp-cta">{t('whatsappFloat.hoverCta')}</span>
      </div>

      <button
        className="whatsapp-float intense-pulse"
        onClick={openWhatsApp}
        type="button"
        title={t('whatsappFloat.buttonTitle')}
        aria-label={t('whatsappFloat.ariaLabel')}
      >
        <img
          src="/images/whats.png"
          alt={t('whatsappFloat.iconAlt')}
          className="whatsapp-icon"
          loading="lazy"
        />
      </button>

      
      <div className="whatsapp-mobile-text">
        <span>{t('whatsappFloat.mobileQuestion')}</span>
        <strong>{t('whatsappFloat.mobileAction')}</strong>
      </div>
    </div>
  );
};

export default React.memo(WhatsAppFloatButton);