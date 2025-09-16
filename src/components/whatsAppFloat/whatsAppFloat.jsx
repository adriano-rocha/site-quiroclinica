import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import './WhatsAppFloat.css';

const WhatsAppFloat = () => {
  const { t } = useTranslation();

  const openWhatsApp = useCallback(() => {
    const message = t(
      'hero.whatsappMessage',
      'Olá! Gostaria de agendar uma consulta na Quiroclínica.'
    );
    const phoneNumber = '5521965928971';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }, [t]);

  return (
    <button className="whatsapp-float" onClick={openWhatsApp} type="button">
      <img
        src="/images/whats.png"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </button>
  );
};

export default React.memo(WhatsAppFloat);
