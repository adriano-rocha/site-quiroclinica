// Reviews.jsx
import React, { useState, useEffect } from "react";
import "./Reviews.css";

const getVisible = (width) => {
  if (width >= 992) return 3; // desktop
  if (width >= 600) return 2; // tablet
  return 1; // mobile
};

const Reviews = () => {
  const totalImages = 6; // você confirmou que agora são 6 imagens
  const [visible, setVisible] = useState(
    typeof window !== "undefined" ? getVisible(window.innerWidth) : 3
  );
  const [current, setCurrent] = useState(0);

  // atualizar visible ao redimensionar
  useEffect(() => {
    const onResize = () => setVisible(getVisible(window.innerWidth));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // índice máximo de posições do carrossel (quando visible > 1)
  const maxIndex = Math.max(0, totalImages - visible);

  // se visible mudar, garante que current esteja dentro do range válido
  useEffect(() => {
    setCurrent((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  // autoplay (usa maxIndex como dependência segura)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const nextSlide = () => setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? maxIndex : prev - 1));

  // Important: usamos totalImages na conta do translateX (corrige deslocamento)
  const translatePercentPerStep = 100 / totalImages; // % relativo à largura do .reviews__inner

  return (
    <section
      className="reviews"
      // expõe as variáveis para o CSS (fallback) — o CSS também usa essas variáveis
      style={{ ["--visible"]: visible, ["--total"]: totalImages }}
    >
      <h2 className="reviews__title">Provas Socias</h2>
      <h3 className="reviews__title">Vejam o que nossos clientes dizem!</h3>

      <div className="reviews__container">
        <button
          className="reviews__arrow reviews__arrow--left"
          onClick={prevSlide}
          aria-label="Anterior"
        >
          &#10094;
        </button>

        <div className="reviews__window" aria-hidden={totalImages === 0 ? "true" : "false"}>
          <div
            className="reviews__inner"
            style={{
              transform: `translateX(-${current * translatePercentPerStep}%)`,
            }}
          >
            {Array.from({ length: totalImages }, (_, i) => (
              <div key={i} className="reviews__item">
                <img
                  className="reviews__img"
                  src={`/reviews/${i + 1}.png`}
                  alt={`Depoimento ${i + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          className="reviews__arrow reviews__arrow--right"
          onClick={nextSlide}
          aria-label="Próximo"
        >
          &#10095;
        </button>
      </div>

      <div className="reviews__indicators" role="tablist" aria-label="Indicadores">
        {Array.from({ length: maxIndex + 1 }, (_, i) => (
          <button
            key={i}
            className={`reviews__indicator ${i === current ? "reviews__indicator--active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
