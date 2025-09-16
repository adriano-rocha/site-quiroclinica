import React from 'react';
import './Videos.css';

const Videos = () => {
  // Dados dos vídeos
  const videosData = [
    {
      id: 1,
      src: '/videos/dep1.mp4',
      title: 'Alívio Total das Dores no Ombro',
      description: 'Ivanira superou dores intensas no ombro e pescoço. Resultado tão incrível que sempre indica!'
    },
    {
      id: 2,
      src: '/videos/dep2.mp4',
      title: 'Coluna Tratada, Postura Renovada',
      description: 'Marcos encontrou no Vinicius o melhor quiropraxista. Coluna alinhada e postura corrigida!'
    },
    {
      id: 3,
      src: '/videos/dep3.mp4',
      title: 'Técnicas Únicas, Resultados Espetaculares',
      description: 'Thali experimentou tratamento diferenciado: quiropraxia + medicina chinesa + acupuntura = zero dor!'
    }
  ];

  return (
    <section className="videos-section">
      <div className="videos-container">
        <h2 className="videos-title">Pacientes Transformados</h2>
        <div className="videos-grid">
          {videosData.map((video) => (
            <div key={video.id} className="video-item">
              <div className="video-wrapper">
                <video
                  className="video-player"
                  controls
                  preload="metadata"
                  poster={`/videos/thumb-${video.id}.jpg`} // opcional: thumbnail
                >
                  <source src={video.src} type="video/mp4" />
                  Seu navegador não suporta vídeos HTML5.
                </video>
              </div>
              <div className="video-info">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;