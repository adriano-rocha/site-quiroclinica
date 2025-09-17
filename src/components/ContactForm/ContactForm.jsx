import React, { useState, useEffect } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    queixa_principal: '',
    duracao: '',
    impacto: '',
    tratamentos_anteriores: '',
    prioridade: '',
    whatsapp: '',
    periodo_preferido: '',
    utm_source: '',
    utm_medium: '',
    page: 'landing_clinica'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);
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
    if (!formData.idade) newErrors.idade = 'Idade é obrigatória';
    if (!formData.queixa_principal.trim()) newErrors.queixa_principal = 'Descreva sua queixa';
    if (!formData.duracao) newErrors.duracao = 'Selecione a duração';
    if (!formData.impacto) newErrors.impacto = 'Selecione o impacto';
    if (!formData.tratamentos_anteriores) newErrors.tratamentos_anteriores = 'Campo obrigatório';
    if (!formData.prioridade) newErrors.prioridade = 'Selecione sua prioridade';
    if (!formData.whatsapp) newErrors.whatsapp = 'WhatsApp é obrigatório';
    if (!formData.periodo_preferido) newErrors.periodo_preferido = 'Selecione o período';
    if (!consentChecked) newErrors.consent = 'Autorização obrigatória';

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
      idade: '',
      queixa_principal: '',
      duracao: '',
      impacto: '',
      tratamentos_anteriores: '',
      prioridade: '',
      whatsapp: '',
      periodo_preferido: '',
      utm_source: formData.utm_source,
      utm_medium: formData.utm_medium,
      page: 'landing_clinica'
    });
    setConsentChecked(false);
    setErrors({});

    
    setTimeout(() => setShowSuccess(false), 5000);
  };

  
  const sendViaWhatsApp = () => {
    const message = [
      '🏥 *AGENDAMENTO - QuiroClínica*',
      '',
      `👤 *Nome:* ${formData.nome}`,
      `🎂 *Idade:* ${formData.idade} anos`,
      `⚕️ *Queixa:* ${formData.queixa_principal}`,
      `⏰ *Duração:* ${formData.duracao}`,
      `📊 *Impacto:* ${formData.impacto}`,
      `🔄 *Tratamentos anteriores:* ${formData.tratamentos_anteriores}`,
      `🎯 *Prioridade:* ${formData.prioridade}`,
      `📱 *WhatsApp:* ${formData.whatsapp}`,
      `🕐 *Período preferido:* ${formData.periodo_preferido}`,
      '',
      '📝 Paciente autoriza contato para agendamento.'
    ].join('\n');

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CLINIC_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="agendamento" className="contact-form-section">
      <div className="form-container">
        <h2 className="contact-form-title">📋 Agende Sua Avaliação Gratuita</h2>

        <div className="form-wrapper">
          <p style={{textAlign: 'center', marginBottom: '30px', color: '#6c757d', fontSize: '1.1rem'}}>
            Preencha o formulário abaixo para que nossa equipe entre em contato e agende sua primeira consulta personalizada.
          </p>
          
          <form onSubmit={handleSubmit} className="contact-form">
            
            
            <div className="form-row">
              <div className="form-group">
                <label>Nome completo *</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  placeholder="Ex: Maria Silva"
                  className={errors.nome ? 'error' : ''}
                />
                {errors.nome && <span className="error-text">{errors.nome}</span>}
              </div>

              <div className="form-group">
                <label>Idade *</label>
                <input
                  type="number"
                  name="idade"
                  value={formData.idade}
                  onChange={handleInputChange}
                  placeholder="Ex: 35"
                  min="10"
                  max="120"
                  className={errors.idade ? 'error' : ''}
                />
                {errors.idade && <span className="error-text">{errors.idade}</span>}
              </div>
            </div>

            
            <div className="form-group">
              <label>Qual sua principal queixa ou dor hoje? *</label>
              <textarea
                name="queixa_principal"
                value={formData.queixa_principal}
                onChange={handleInputChange}
                placeholder="Ex: Dor na lombar que irradia para a perna direita, principalmente ao sentar"
                rows="3"
                className={errors.queixa_principal ? 'error' : ''}
              />
              {errors.queixa_principal && <span className="error-text">{errors.queixa_principal}</span>}
            </div>

            
            <div className="form-row">
              <div className="form-group">
                <label>Há quanto tempo sente esse problema? *</label>
                <select
                  name="duracao"
                  value={formData.duracao}
                  onChange={handleInputChange}
                  className={errors.duracao ? 'error' : ''}
                >
                  <option value="">Selecione...</option>
                  <option value="Menos de 1 mês">Menos de 1 mês</option>
                  <option value="1 a 6 meses">1 a 6 meses</option>
                  <option value="6 meses a 1 ano">6 meses a 1 ano</option>
                  <option value="Mais de 1 ano">Mais de 1 ano</option>
                </select>
                {errors.duracao && <span className="error-text">{errors.duracao}</span>}
              </div>

              <div className="form-group">
                <label>Como isso afeta sua rotina? *</label>
                <select
                  name="impacto"
                  value={formData.impacto}
                  onChange={handleInputChange}
                  className={errors.impacto ? 'error' : ''}
                >
                  <option value="">Selecione...</option>
                  <option value="Dificuldade para trabalhar">Dificuldade para trabalhar</option>
                  <option value="Dificuldade para dormir">Dificuldade para dormir</option>
                  <option value="Limitação para exercícios">Limitação para exercícios</option>
                  <option value="Limitação nas atividades diárias">Limitação nas atividades diárias</option>
                  <option value="Dor constante/incômodo">Dor constante/incômodo</option>
                  <option value="Outro">Outro</option>
                </select>
                {errors.impacto && <span className="error-text">{errors.impacto}</span>}
              </div>
            </div>

            
            <div className="form-row">
              <div className="form-group">
                <label>Já tentou algum tratamento? *</label>
                <select
                  name="tratamentos_anteriores"
                  value={formData.tratamentos_anteriores}
                  onChange={handleInputChange}
                  className={errors.tratamentos_anteriores ? 'error' : ''}
                >
                  <option value="">Selecione...</option>
                  <option value="Primeira vez">Primeira vez buscando tratamento</option>
                  <option value="Fisioterapia">Fisioterapia</option>
                  <option value="Medicamentos">Medicamentos</option>
                  <option value="Quiropraxia">Quiropraxia</option>
                  <option value="Acupuntura">Acupuntura</option>
                  <option value="Massoterapia">Massoterapia</option>
                  <option value="Outro">Outro</option>
                </select>
                {errors.tratamentos_anteriores && <span className="error-text">{errors.tratamentos_anteriores}</span>}
              </div>

              <div className="form-group">
                <label>Sua principal prioridade é: *</label>
                <select
                  name="prioridade"
                  value={formData.prioridade}
                  onChange={handleInputChange}
                  className={errors.prioridade ? 'error' : ''}
                >
                  <option value="">Selecione...</option>
                  <option value="Alívio rápido da dor">Alívio rápido da dor</option>
                  <option value="Tratar a causa do problema">Tratar a causa do problema</option>
                  <option value="Melhorar postura e movimento">Melhorar postura e movimento</option>
                  <option value="Prevenção de futuras lesões">Prevenção de futuras lesões</option>
                </select>
                {errors.prioridade && <span className="error-text">{errors.prioridade}</span>}
              </div>
            </div>

            
            <div className="form-row">
              <div className="form-group">
                <label>WhatsApp (com DDD) *</label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  placeholder="(21) 99999-9999"
                  maxLength="15"
                  className={errors.whatsapp ? 'error' : ''}
                />
                {errors.whatsapp && <span className="error-text">{errors.whatsapp}</span>}
              </div>

              <div className="form-group">
                <label>Melhor horário para contato *</label>
                <select
                  name="periodo_preferido"
                  value={formData.periodo_preferido}
                  onChange={handleInputChange}
                  className={errors.periodo_preferido ? 'error' : ''}
                >
                  <option value="">Selecione...</option>
                  <option value="Manhã (8h às 12h)">Manhã (8h às 12h)</option>
                  <option value="Tarde (12h às 18h)">Tarde (12h às 18h)</option>
                  <option value="Noite (18h às 20h)">Noite (18h às 20h)</option>
                  <option value="Qualquer horário">Qualquer horário</option>
                </select>
                {errors.periodo_preferido && <span className="error-text">{errors.periodo_preferido}</span>}
              </div>
            </div>

            
            <div className="consent-group">
              <label className="consent-label">
                <input
                  type="checkbox"
                  checked={consentChecked}
                  onChange={(e) => setConsentChecked(e.target.checked)}
                />
                <span className="checkmark"></span>
                Autorizo a QuiroClínica a entrar em contato via WhatsApp/telefone para agendamento e informações sobre tratamento. *
              </label>
              {errors.consent && <span className="error-text">{errors.consent}</span>}
            </div>

            
            <div className="button-group">
              <button
                type="submit"
                className="btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? '⏳ Enviando...' : '📧 Agendar Avaliação'}
              </button>

              <button
                type="button"
                className="btn-whatsapp"
                onClick={sendViaWhatsApp}
                disabled={!consentChecked}
              >
                💬 Enviar via WhatsApp
              </button>
            </div>

            {showSuccess && (
              <div className="success-message">
                ✅ <strong>Formulário enviado com sucesso!</strong><br />
                Nossa equipe entrará em contato em breve para agendar sua avaliação.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;