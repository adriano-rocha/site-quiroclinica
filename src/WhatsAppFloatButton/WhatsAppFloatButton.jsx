import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import './WhatsAppFloatButton.css';

const WhatsAppFloatButton = () => {
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
    <button 
      className="whatsapp-float intense-pulse" 
      onClick={openWhatsApp} 
      type="button"
      title={t('hero.whatsappTitle', 'Fale conosco no WhatsApp')}
      aria-label={t('hero.whatsappLabel', 'Abrir conversa no WhatsApp')}
    >
      <img
        src="/images/whats.png"
        alt="WhatsApp"
        className="whatsapp-icon"
        loading="lazy"
      />
    </button>
  );
};

export default React.memo(WhatsAppFloatButton);