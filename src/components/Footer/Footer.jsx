import React from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation(); // Mantemos o hook

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <img src="/images/logo-quiro.jpeg" alt="Quiroclínica Logo" />
        </div>

        {/* Informações */}
        <div className="footer-info">
          <p>
            {" "}
            📍 Rua Senador Dantas, 117 – Sala 1418, Centro – Rio de Janeiro
          </p>
          <p> 📱 Telefone: (21) 96592-8971</p>
          <p> 📧 Email: quiroclinica.quiropraxia@gmail.com</p>
          {/* <p>{t('footer.address')}</p> Futuro uso da tradução */}
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
