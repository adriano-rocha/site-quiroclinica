import React from "react";
import "./About.css";

const About = () => {
  const openWhatsApp = () => {
    const message = `🏥 *QUERO FALAR COM O ESPECIALISTA*\n\n` +
      `😰 Estou sofrendo com dor e preciso de ajuda!\n` +
      `⚕️ Vi que você tem 10+ anos de experiência e 500+ pacientes curados.\n\n` +
      `🆘 Quando posso agendar uma consulta?\n` +
      `📞 Preciso resolver isso URGENTE!`;
    
    const phoneNumber = "5521965928971";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="sobre" className="about">
      <div className="about-container">
        <div className="about-image">
          <img
            src="/images/perfil.jpg"
            alt="Dr. Vinnicius de Paula - Especialista em Quiropraxia"
            className="perfil-image"
            loading="lazy"
          />
          <div className="credibility-badge">
            <span className="years-badge">10+ Anos</span>
            <span className="patients-badge">500+ Pacientes</span>
          </div>
        </div>

        <div className="about-text">
          {/* Abertura focada na DOR */}
          <div className="pain-connection">
            <h2 className="about-title">O Especialista que Vai Acabar com Sua Dor</h2>
            <p className="pain-intro">
              <strong>Há 10 anos resolvendo dores que outros profissionais não conseguem.</strong><br />
              Se você está sofrendo com dor lombar, hérnia de disco ou nervo ciático, chegou ao lugar certo.
            </p>
          </div>

          {/* Stats de Impacto */}
          <div className="impact-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Pacientes sem dor</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Taxa de sucesso</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Anos de experiência</span>
            </div>
          </div>

          {/* Apresentação com foco em resultados */}
          <h3 className="about-name">Dr. Vinnicius de Paula</h3>
          <p className="about-description">
            Especialista em acabar com dores crônicas usando técnicas avançadas de Quiropraxia, 
            Acupuntura e Massoterapia. Meus pacientes chegam sofrendo e saem sem dor.
          </p>

          {/* Problemas que resolve */}
          <div className="problems-solved">
            <h3 className="section-subtitle">Resolvo problemas como:</h3>
            <div className="problems-grid">
              <div className="problem-item">🔥 Dor lombar crônica</div>
              <div className="problem-item">💥 Hérnia de disco</div>
              <div className="problem-item">⚡ Nervo ciático inflamado</div>
              <div className="problem-item">😣 Dor cervical e pescoço</div>
              <div className="problem-item">🔒 Travamento da coluna</div>
              <div className="problem-item">💪 Tensões musculares</div>
            </div>
          </div>

          {/* Formação compacta */}
          <div className="credentials-compact">
            <h3 className="section-subtitle">Formação especializada:</h3>
            <div className="credentials-list">
              <span className="credential">IBRAQUI-SP (Quiropraxia)</span>
              <span className="credential">ACABO-RJ (Acupuntura)</span>
              <span className="credential">IBTED-RJ (Massoterapia)</span>
            </div>
          </div>

          {/* Diferencial */}
          <div className="why-choose">
            <h3 className="section-subtitle">Por que meus pacientes escolhem continuar comigo:</h3>
            <ul className="benefits-list">
              <li>✓ Técnicas que atacam a CAUSA da dor, não só os sintomas</li>
              <li>✓ Resultados visíveis já na primeira sessão</li>
              <li>✓ Atendimento no Centro do Rio - fácil acesso</li>
              <li>✓ Mais de uma década salvando vidas da dor crônica</li>
            </ul>
          </div>

          {/* CTA Principal */}
          <div className="about-cta-section">
            <div className="urgency-message">
              <p><strong>Sua dor não vai passar sozinha.</strong></p>
              <p>Cada dia que você espera é mais um dia de sofrimento desnecessário.</p>
            </div>
            
            <button className="about-cta-btn" onClick={openWhatsApp}>
              🚀 Fale Comigo Agora e Acabe com Sua Dor
            </button>

            <div className="guarantee-note">
              <p>🔒 Conversa confidencial | 📞 Respondemos rápido</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;