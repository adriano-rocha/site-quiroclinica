import React, { useState, useEffect } from 'react';
import './ContactForm.css';

const ContactForm = () => {
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

    if (!formData.nome.trim()) newErrors.nome = 'Nome é obrigatório';
    if (!formData.whatsapp.trim()) newErrors.whatsapp = 'WhatsApp é obrigatório';
    if (!formData.queixa_principal) newErrors.queixa_principal = 'Selecione sua queixa principal';

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
        alert('Erro ao enviar formulário. Tente pelo WhatsApp ou recarregue a página.');
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

    const message = [
      '🚨 *FORMULÁRIO RÁPIDO - QuiroClínica*',
      '',
      `👤 *Nome:* ${formData.nome}`,
      `📱 *WhatsApp:* ${formData.whatsapp}`,
      `⚕️ *Queixa Principal:* ${formData.queixa_principal}`,
      '',
      '🆘 *URGENTE: Preciso de atendimento hoje!*',
      '⏰ Quando posso conversar com especialista?'
    ].join('\n');

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CLINIC_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="agendamento" className="contact-form-section">
      <div className="form-container">
        {/* Badge de Urgência */}
        <div className="urgency-badge">
          🚨 APENAS 3 VAGAS HOJE - Atendimento Imediato Garantido
        </div>

        <h2 className="contact-form-title">
          Sofre com Dor Lombar, Ciática ou Coluna Travada?
        </h2>

        <div className="form-wrapper quick-form-wrapper">
          <div className="pain-focus">
            <h3>Você sente alguns destes sintomas?</h3>
            <div className="symptoms-grid">
              <div className="symptom-item">✓ Dor lombar constante</div>
              <div className="symptom-item">✓ Travamento da coluna</div>
              <div className="symptom-item">✓ Dificuldade para levantar</div>
              <div className="symptom-item">✓ Dor que irradia para pernas</div>
            </div>
            <p className="treatment-promise">
              <strong>Tratamento de Quiropraxia que resolve a CAUSA da dor, não só alivia!</strong>
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="contact-form quick-contact-form">
            <h4 className="form-subtitle">Preencha em 30 segundos e receba contato IMEDIATO:</h4>
            
            <div className="form-group">
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                placeholder="Seu nome completo"
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
                placeholder="WhatsApp (21) 99999-9999"
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
                <option value="">Sua principal queixa:</option>
                <option value="Dor lombar/lombalgia">🔥 Dor lombar/lombalgia</option>
                <option value="Hérnia de disco">💥 Hérnia de disco</option>
                <option value="Nervo ciático/ciatalgia">⚡ Nervo ciático/ciatalgia</option>
                <option value="Dor cervical/pescoço">😣 Dor cervical/pescoço</option>
                <option value="Travamento da coluna">🔒 Travamento da coluna</option>
                <option value="Dor que irradia para pernas">📍 Dor que irradia para pernas</option>
              </select>
              {errors.queixa_principal && <span className="error-text">{errors.queixa_principal}</span>}
            </div>

            <div className="button-group">
              <button
                type="submit"
                className="btn-primary cta-main"
                disabled={isSubmitting}
              >
                {isSubmitting ? '⏳ Enviando...' : '🚀 Quero Agendar AGORA'}
              </button>

              <button
                type="button"
                className="btn-whatsapp"
                onClick={sendViaWhatsApp}
              >
                📱 Fale com Especialista AGORA
              </button>
            </div>

            <div className="quick-benefits">
              <div className="benefit-item">⭐ 4.9/5 avaliação</div>
              <div className="benefit-item">✅ 500+ pacientes</div>
              <div className="benefit-item">🏆 10+ anos experiência</div>
            </div>

            {showSuccess && (
              <div className="success-message">
                ✅ <strong>Formulário enviado com sucesso!</strong><br />
                Nossa equipe entrará em contato em até 5 minutos para agendar sua avaliação URGENTE.
              </div>
            )}
          </form>
        </div>

        <div className="trust-indicators">
          <p>🔒 Seus dados estão seguros</p>
            <p> 📞 Atendimento rápido</p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;