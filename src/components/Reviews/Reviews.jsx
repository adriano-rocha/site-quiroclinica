import React, { useState } from 'react';
import './Reviews.css';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  

  const reviewData = [
    { 
      id: 1, 
      author: "Dirceu Schneider Junior", 
      date: "02/08/2024", 
      text: "Não tenho palavras para descrever o trabalho e o profissional exemplar que é o Dr. Vinnicius. Só tenho a agradecer pelo desenvolvimento que tive com ele, pois viver sem dor é excepcional...", 
      photo: "/reviews/rev01.png" 
    },
    { 
      id: 2, 
      author: "Simone Conceição", 
      date: "11/06/2024", 
      text: "Um profissional top. Cheguei no consultório dele com dor, e saí sem, massagem maravilhosa, nota 1000!", 
      photo: "/reviews/rev02.png" 
    },
    { 
      id: 3, 
      author: "Fabio Emiliano", 
      date: "05/09/2024", 
      text: "Foi uma experiência incrível, só uma sessão e saí sem dor nenhuma... Um alívio enorme, estou muito satisfeito pode confiar, eu super recomendo!", 
      photo: "/reviews/rev03.png" 
    },
    { 
      id: 4, 
      author: "Sonia Cristina", 
      date: "15/02/2024", 
      text: "Super Profissional, adorei todo o procedimento. Já na primeira seção senti melhoras absurdas, super indico! Esse sabe o que faz, gratidão.", 
      photo: "/reviews/rev04.png" 
    },
    { 
      id: 5, 
      author: "Edgar Garcia", 
      date: "20/03/2024", 
      text: "O trabalho realizado é excepcional. agendamento tranquilo, clínica bem localizada e um profissional MUITO atencioso. Além da convencional quiropraxia, dedicou tempo a entender a minha rotina, para identificar possíveis causadores da má postura. Recomendo!", 
      photo: "/reviews/rev05.png" 
    },
    { 
      id: 6, 
      author: "Alessandra Vera", 
      date: "17/07/2024", 
      text: "Excelente profissional, fui por intermédio de meu marido que já é paciente dele há mais de 2 anos. Recomendo!", 
      photo: "/reviews/rev06.png" 
    }
  ];

  const slides = reviewData.length;

  const nextSlide = () => {
    setCurrentIndex(prev => (prev >= slides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev <= 0 ? slides - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const renderStars = () => (
    <div className="stars">
      {[...Array(5)].map((_, i) => <span key={i} className="star">★</span>)}
    </div>
  );



  return (
    <section className="reviews-section">
      <div className="container">
        <div className="reviews-carousel">
          <div className="carousel-container">
            {/* TRACK: width = slides * 100% */}
            <div
              className="reviews-track"
              style={{
                width: `${slides * 100}%`,
                transform: `translateX(-${currentIndex * (100 / slides)}%)`
              }}
            >
              {reviewData.map((review) => (
                <div
                  key={review.id}
                  className="reviews-card"
                  style={{ flex: `0 0 ${100 / slides}%` }} 
                >
                  <div className="card-inner">
                    <div className="card-header">
                      <div className="user-info">
                        <img 
                          src={review.photo} 
                          alt={`Foto de ${review.author}`} 
                          className="user-avatar"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                        <div className="user-details">
                          <h4 className="user-name">{review.author}</h4>
                          <span className="review-date">{review.date}</span>
                        </div>
                      </div>
                      <div className="google-badge">
                        <i className="fab fa-google" aria-hidden="true"></i>
                      </div>
                    </div>

                    {renderStars()}

                    <p className="review-text">
                      {review.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controles (setas) */}
          <div className="carousel-controls">
            <button 
              className="carousel-btn prev" 
              onClick={prevSlide} 
              aria-label="Avaliação anterior"
            >
              &#8249;
            </button>
            <button 
              className="carousel-btn next" 
              onClick={nextSlide} 
              aria-label="Próxima avaliação"
            >
              &#8250;
            </button>
          </div>

          {/* Dots */}
          <div className="carousel-dots">
            {Array.from({ length: slides }).map((_, idx) => (
              <button
                key={idx}
                className={`dot ${currentIndex === idx ? 'active' : ''}`}
                onClick={() => goToSlide(idx)}
                aria-label={`Ir para avaliação ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;