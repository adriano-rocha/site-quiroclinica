import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './ContactForm.css';

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    queixa_principal: '',
    utm_source: '',
    utm_medium: '',
    page: 'landing_clinica'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const WEBHOOK_URL = 'https://quiroclinica.com.br'; 
  const CLINIC_NUMBER = '5521965928971';

  // Carrega os dados traduzidos do JSON
  const symptomsData = t('contactForm.symptoms', { returnObjects: true });
  const complaintsData = t('contactForm.complaints', { returnObjects: true });
  const benefitsData = t('contactForm.benefits', { returnObjects: true });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utm_source = params.get('utm_source') || '';
    const utm_medium = params.get('utm_medium') || '';
    
    setFormData(prev => ({
      ...prev,
      utm_source,
      utm_medium
    }));
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nome.trim()) newErrors.nome = t('contactForm.validation.nameRequired');
    if (!formData.whatsapp.trim()) newErrors.whatsapp = t('contactForm.validation.whatsappRequired');
    if (!formData.queixa_principal) newErrors.queixa_principal = t('contactForm.validation.complaintRequired');

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const applyWhatsAppMask = (value) => {
    let numbers = value.replace(/\D/g, '');
    
    if (numbers.length <= 11) {
      if (numbers.length > 2) {
        numbers = numbers.replace(/^(\d{2})(\d)/, '($1) $2');
      }
      if (numbers.length > 9) {
        numbers = numbers.replace(/(\d{5})(\d)/, '$1-$2');
      }
    }
    
    return numbers;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    let processedValue = value;
    
    if (name === 'whatsapp') {
      processedValue = applyWhatsAppMask(value);
    }
    
    setFormData(prev => ({ ...prev, [name]: processedValue }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const submitToWebhook = async (data) => {
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      return { ok: response.ok, status: response.status };
    } catch (error) {
      console.error('Erro ao enviar webhook:', error);
      return { ok: false, error: error.message };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const dataToSend = {
      ...formData,
      submitted_at: new Date().toISOString(),
      ip: '', 
      form_type: 'quick_conversion'
    };

    console.log('Enviando dados:', dataToSend);

    if (WEBHOOK_URL === 'https://seu-webhook-url.com/leads') {
      console.warn('⚠️ WEBHOOK não configurado - simulando envio');
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setShowSuccess(true);
      resetForm();
    } else {
      const result = await submitToWebhook(dataToSend);
      
      if (result.ok) {
        setShowSuccess(true);
        resetForm();
      } else {
        alert(t('contactForm.errorMessage'));
      }
    }

    setIsSubmitting(false);
  };

  const resetForm = () => {
    setFormData({
      nome: '',
      whatsapp: '',
      queixa_principal: '',
      utm_source: formData.utm_source,
      utm_medium: formData.utm_medium,
      page: 'landing_clinica'
    });
    setErrors({});

    setTimeout(() => setShowSuccess(false), 5000);
  };

  const sendViaWhatsApp = () => {
    if (!validateForm()) {
      return;
    }

    const message = t('contactForm.whatsappMessage', {
      nome: formData.nome,
      whatsapp: formData.whatsapp,
      queixa: formData.queixa_principal
    });

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CLINIC_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="agendamento" className="contact-form-section">
      <div className="form-container">
        <div className="urgency-badge">
          {t('contactForm.urgencyBadge')}
        </div>

        <h2 className="contact-form-title">
          {t('contactForm.title')}
        </h2>

        <div className="form-wrapper quick-form-wrapper">
          <div className="pain-focus">
            <h3>{t('contactForm.symptomsQuestion')}</h3>
            <div className="symptoms-grid">
              {symptomsData.map((symptom, index) => (
                <div key={index} className="symptom-item">{symptom}</div>
              ))}
            </div>
            <p className="treatment-promise">
              <strong>{t('contactForm.treatmentPromise')}</strong>
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="contact-form quick-contact-form">
            <h4 className="form-subtitle">{t('contactForm.formSubtitle')}</h4>
            
            <div className="form-group">
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                placeholder={t('contactForm.fields.namePlaceholder')}
                className={errors.nome ? 'error' : ''}
              />
              {errors.nome && <span className="error-text">{errors.nome}</span>}
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleInputChange}
                placeholder={t('contactForm.fields.whatsappPlaceholder')}
                maxLength="15"
                className={errors.whatsapp ? 'error' : ''}
              />
              {errors.whatsapp && <span className="error-text">{errors.whatsapp}</span>}
            </div>

            <div className="form-group">
              <select
                name="queixa_principal"
                value={formData.queixa_principal}
                onChange={handleInputChange}
                className={errors.queixa_principal ? 'error' : ''}
              >
                <option value="">{t('contactForm.fields.complaintPlaceholder')}</option>
                {complaintsData.map((complaint, index) => (
                  <option key={index} value={complaint.value}>{complaint.label}</option>
                ))}
              </select>
              {errors.queixa_principal && <span className="error-text">{errors.queixa_principal}</span>}
            </div>

            <div className="button-group">
              <button
                type="submit"
                className="btn-primary cta-main"
                disabled={isSubmitting}
              >
                {isSubmitting ? t('contactForm.buttons.submitting') : t('contactForm.buttons.submit')}
              </button>

              <button
                type="button"
                className="btn-whatsapp"
                onClick={sendViaWhatsApp}
              >
                {t('contactForm.buttons.whatsapp')}
              </button>
            </div>

            <div className="quick-benefits">
              {benefitsData.map((benefit, index) => (
                <div key={index} className="benefit-item">{benefit}</div>
              ))}
            </div>

            {showSuccess && (
              <div className="success-message">
                {t('contactForm.successMessage')}
              </div>
            )}
          </form>
        </div>

        <div className="trust-indicators">
          <p>{t('contactForm.trustIndicators.secure')}</p>
          <p>{t('contactForm.trustIndicators.fastService')}</p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;