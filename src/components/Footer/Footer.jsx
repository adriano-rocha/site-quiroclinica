import React from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation(); // Mantemos o hook

  // Funções para abrir links
  const openWhatsApp = () => {
    const message = "Olá! Gostaria de mais informações sobre a Quiroclínica.";
    const phoneNumber = "5521965928971";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const openEmail = () => {
    const email = "quiroclinica.quiropraxia@gmail.com";
    const subject = "Contato - Quiroclínica";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  };

  const openInstagram = () => {
    window.open("https://instagram.com/quiroclinica.quiropraxia", "_blank");
  };

  const openMaps = () => {
    const address = "Rua Senador Dantas, 117 – Sala 1418, Centro – Rio de Janeiro";
    window.open(`https://maps.google.com/?q=${encodeURIComponent(address)}`, "_blank");
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <img src="/images/logo-quiro.jpeg" alt="Quiroclínica Logo" />
        </div>

        {/* Informações */}
        <div className="footer-info">
          <div className="footer-item" onClick={openMaps} style={{cursor: 'pointer'}}>
            <svg className="footer-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <p>Rua Senador Dantas, 117 – Sala 1418, Centro – Rio de Janeiro</p>
          </div>

          <div className="footer-item" onClick={openWhatsApp} style={{cursor: 'pointer'}}>
            <svg className="footer-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <p>Telefone: (21) 96592-8971</p>
          </div>

          <div className="footer-item" onClick={openEmail} style={{cursor: 'pointer'}}>
            <svg className="footer-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <p>Email: quiroclinica.quiropraxia@gmail.com</p>
          </div>

          <div className="footer-item" onClick={openInstagram} style={{cursor: 'pointer'}}>
            <svg className="footer-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <p>Instagram: @quiroclinica.quiropraxia</p>
          </div>
        </div>

        <div className="footer-notice">
          <p>
            Atendimento particular. Não fornecemos recibos para reembolso de planos de saúde.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Quiroclínica – Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;