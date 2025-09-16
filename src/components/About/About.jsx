import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="sobre" className="about">
      <div className="about-container">
        {/* Foto */}
        <div className="about-image">
          <img 
            src="/images/perfil.jpg" 
            alt="Vinnicius de Paula" 
            className="perfil-image"
            loading="lazy"
          />
        </div>

        {/* Texto */}
        <div className="about-text">
          {/* Título */}
          <h2 className="about-title">Sobre mim </h2>
          <h3 className="about-subtitle"> Vinnicius de Paula</h3>

          {/* Descrição */}
          <p className="about-description">
            Sou especialista em Quiropraxia, Acupuntura e Massoterapia, com mais de 10 anos de experiência ajudando pacientes a aliviar dores, recuperar movimentos e transformar a qualidade de vida.
          </p>

          {/* Formação */}
          <h3 className="about-subtitle">🎓 Formação sólida e reconhecida:</h3>
          <ul className="about-education">
            <li><span className="highlight">IBRAQUI – São Paulo (2012)</span> – Quiropraxia</li>
            <li><span className="highlight">ACABO – Rio de Janeiro (2008)</span> – Acupuntura</li>
            <li><span className="highlight">IBTED – Rio de Janeiro (2006)</span> – Massoterapia</li>
          </ul>

          {/* Carreira / experiência */}
          <p className="about-description">
            Durante minha trajetória, já atendi centenas de pacientes no Centro do Rio de Janeiro, sempre com foco em resultados rápidos, seguros e duradouros.
          </p>

          {/* Por que escolher */}
          <h3 className="about-subtitle">🚀 Por que escolher meu atendimento?</h3>
          <ul className="about-benefits">
            <li>✔ Mais de 10 anos de experiência comprovada</li>
            <li>✔ Atendimento personalizado e humanizado</li>
            <li>✔ Técnicas eficazes para dores na coluna, hérnia de disco, nervo ciático, tensões musculares e reabilitação articular</li>
            <li>✔ Consultório localizado no coração do Centro do Rio</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
