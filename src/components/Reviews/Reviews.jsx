import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Reviews.css';

const Reviews = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carrega os dados traduzidos do JSON
  const reviewData = t('reviews.testimonials', { returnObjects: true });

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
                          alt={`${t('reviews.photoAlt')} ${review.author}`} 
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
              aria-label={t('reviews.navigation.prevReview')}
            >
              &#8249;
            </button>
            <button 
              className="carousel-btn next" 
              onClick={nextSlide} 
              aria-label={t('reviews.navigation.nextReview')}
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
                aria-label={`${t('reviews.navigation.goToReview')} ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;