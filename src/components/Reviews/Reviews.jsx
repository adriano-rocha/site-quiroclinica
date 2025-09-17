import React from "react";
import "./Reviews.css";

const Reviews = () => {
  const reviewImages = [
    {
      id: 1,
      src: "/reviews/1.png",
      alt: "Depoimento de paciente - Avaliação 1",
    },
    {
      id: 2,
      src: "/reviews/2.png",
      alt: "Depoimento de paciente - Avaliação 2",
    },
    {
      id: 3,
      src: "/reviews/3.png",
      alt: "Depoimento de paciente - Avaliação 3",
    },
    {
      id: 4,
      src: "/reviews/4.png",
      alt: "Depoimento de paciente - Avaliação 4",
    },
    {
      id: 5,
      src: "/reviews/5.png",
      alt: "Depoimento de paciente - Avaliação 5",
    },
    {
      id: 6,
      src: "/reviews/6.png",
      alt: "Depoimento de paciente - Avaliação 6",
    },
  ];

  const handleImageError = (e) => {
    e.target.src =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2Y4ZmFmYyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTRweCIgZmlsbD0iIzk0YTNiOCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkRlcG9pbWVudG88L3RleHQ+PC9zdmc+";
    e.target.alt = "Depoimento não encontrado";
  };

  return (
    <section className="reviews" id="depoimentos">
      <div className="reviews__container">
        <div className="reviews__header">
          <h2 className="reviews__title">Depoimentos</h2>
          <h4 className="reviews__subtitle">
            Veja o que nossos clientes dizem sobre nós
          </h4>
        </div>

        <div className="reviews__grid">
          {reviewImages.map((review) => (
            <div key={review.id} className="reviews__card">
              <div className="reviews__image-wrapper">
                <img
                  src={review.src}
                  alt={review.alt}
                  className="reviews__image"
                  onError={handleImageError}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
