import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./Videos.css";

const Videos = () => {
  const { t } = useTranslation();
  const videosData = t("videos.testimonials", { returnObjects: true });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videosData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === videosData.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="videos-section">
      <div className="videos-container">
        <h3 className="videos-title">{t("videos.title")}</h3>

        <div
          className="videos-grid"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {videosData.map((video, index) => (
            <div
              key={video.id}
              className={`video-item ${
                isMobile ? (index === currentIndex ? "active" : "") : ""
              }`}
            >
              <div className="video-wrapper">
                <video
                  className="video-player"
                  controls
                  preload="metadata"
                  playsInline
                  muted={false}
                  poster={`/videos/thumb-${video.id}.jpg`}
                  onError={(e) =>
                    console.error(
                      "❌ Erro ao carregar vídeo:",
                      video.src,
                      e.target.error
                    )
                  }
                >
                  <source src={video.src} type="video/mp4" />
                  {t("videos.browserError")}
                </video>
              </div>
              <div className="video-info">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        {isMobile && (
          <div className="carousel-controls">
            <button className="carousel-btn prev" onClick={handlePrev}>
              ❮
            </button>
            <button className="carousel-btn next" onClick={handleNext}>
              ❯
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Videos;
