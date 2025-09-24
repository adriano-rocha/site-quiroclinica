import React from "react";
import { useTranslation } from "react-i18next";
import "./StrategicCTA2.css";

const StrategicCTA2 = () => {
  const { t } = useTranslation();

  const statsData = t("strategicCTA2.stats", { returnObjects: true });
  const socialProofData = t("strategicCTA2.socialProof", {
    returnObjects: true,
  });

  const openWhatsApp = () => {
    const message = t("strategicCTA2.whatsappMessage");

    const phoneNumber = "5521965928971";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="strategic-cta-2">
      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-badge">{t("strategicCTA2.badge")}</div>

          <h3 className="cta-title">{t("strategicCTA2.title")}</h3>

          <p className="cta-description">
            {t("strategicCTA2.description.part1")}
            <strong>{t("strategicCTA2.description.highlight1")}</strong>
            {t("strategicCTA2.description.part2")}
            <strong>{t("strategicCTA2.description.highlight2")}</strong>
            {t("strategicCTA2.description.part3")}
          </p>

          <div className="cta-stats">
            {statsData.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="cta-social-proof">
            {socialProofData.map((proof, index) => (
              <p key={index} className="proof-text">
                "{proof.quote}" - <strong>{proof.author}</strong>
              </p>
            ))}
          </div>

          <div className="cta-urgency">
            <p>
              <strong>{t("strategicCTA2.urgency.title")}</strong>
            </p>
            <p>{t("strategicCTA2.urgency.subtitle")}</p>
          </div>

          <button className="cta-button" onClick={openWhatsApp}>
            {t("strategicCTA2.button")}
          </button>

          <div className="cta-guarantee">
            <span>{t("strategicCTA2.guarantee")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicCTA2;
