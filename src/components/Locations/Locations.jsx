import React from "react";
import "./Locations.css";

const Locations = () => {
  return (
    <section id="localizacao" className="locations">
      <div className="locations-container">
        <div className="locations-info">
          <h2>Localização</h2>
          <p>
            <i className="fas fa-map-marker-alt"></i> Rua Senador Dantas, 117 – Sala 1418, <br />
            Centro – Rio de Janeiro
          </p>

          <h2>Horários</h2>
          <p>Segunda à Sexta:</p>
          <p><i className="fas fa-clock"></i> 08h00 às 20:00</p>
          <p>Sàbado:</p>
          <p><i className="fas fa-clock"></i> 09:00 às 18:00</p>
          <h4><i className="fas fa-calendar-check"></i> Agendamento por hora marcada</h4>
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
            title="Localização da clínica"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Locations;