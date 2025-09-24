import React from "react";
import { useTranslation } from "react-i18next";
import "./StrategicCTA1.css";

const StrategicCTA1 = () => {
  const { t } = useTranslation();

  const benefits = t("strategicCTA1.benefits", { returnObjects: true });

  const openWhatsApp = () => {
    const message = t("strategicCTA1.whatsappMessage");

    const phoneNumber = "5521965928971";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="strategic-cta-1">
      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-badge">{t("strategicCTA1.badge")}</div>

          <h3 className="cta-title">{t("strategicCTA1.title")}</h3>

          <p className="cta-description">
            {t("strategicCTA1.description.part1")}
            <strong>{t("strategicCTA1.description.highlight1")}</strong>
            {t("strategicCTA1.description.part2")}
            <strong>{t("strategicCTA1.description.highlight2")}</strong>
            {t("strategicCTA1.description.part3")}
            <strong>{t("strategicCTA1.description.highlight3")}</strong>
            {t("strategicCTA1.description.part4")}
          </p>

          <div className="cta-benefits">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                {benefit}
              </div>
            ))}
          </div>

          <div className="cta-urgency">
            <p>
              <strong>{t("strategicCTA1.urgency.title")}</strong>
            </p>
            <p>{t("strategicCTA1.urgency.subtitle")}</p>
          </div>

          <button className="cta-button" onClick={openWhatsApp}>
            {t("strategicCTA1.button")}
          </button>

          <div className="cta-guarantee">
            <span>{t("strategicCTA1.guarantee")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicCTA1;
