import React from "react";
import { useTranslation } from 'react-i18next';
import "./Locations.css";

const Locations = () => {
  const { t } = useTranslation();

  return (
    <section id="localizacao" className="locations">
      <div className="locations-container">
        <div className="locations-info">
          <h2>{t('locations.title')}</h2>
          <p>
            <i className="fas fa-map-marker-alt"></i> {t('locations.address.street')}<br />
            {t('locations.address.district')}
          </p>

          <h2>{t('locations.hours.title')}</h2>
          <p>{t('locations.hours.weekdays')}:</p>
          <p><i className="fas fa-clock"></i> {t('locations.hours.weekdaysTime')}</p>
          <p>{t('locations.hours.saturday')}:</p>
          <p><i className="fas fa-clock"></i> {t('locations.hours.saturdayTime')}</p>
          <h4><i className="fas fa-calendar-check"></i> {t('locations.appointment')}</h4>
        </div>

        <div className="locations-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.116855190534!2d-43.18088292476312!3d-22.909060337952216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd53c499cbb9b%3A0x2e1ea778e970bfc0!2sR.%20Sen.%20Dantas%2C%20117%20-%20Centro%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020031-204!5e0!3m2!1spt-BR!2sbr!4v1757983390000!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={t('locations.mapTitle')}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Locations;