import React from 'react';
import './Videos.css';

const Videos = () => {
  
  const videosData = [
    {
      id: 1,
      src: '/videos/dep01.mp4',
      title: 'Alívio Total das Dores no Ombro',
      description: 'Ivanira chegou até nós com dores intensas no ombro e pescoço. Após o tratamento, ela não apenas superou o desconforto, mas alcançou um resultado tão impressionante que hoje faz questão de indicar a experiência a todos que conhece.'
    },
    {
      id: 2,
      src: '/videos/dep02.mp4',
      title: 'De Cirurgia à Cura: A Transformação do André com a Quiropraxia',
      description: 'Após ser diagnosticado com duas hérnias de disco e indicado para cirurgia, André encontrou no tratamento com o Vinnicius a solução que mudou sua vida. Recuperou seus movimentos e hoje caminha sem dor. Gratidão e qualidade de vida renovada!'
    },
    {
      id: 4,
      src: '/videos/dep03.mp4',
      title: 'Técnicas Únicas, Resultados Espetaculares',
      description: 'Conheça a história de Thali, que descobriu no tratamento integrado a solução para suas dores. Combinando a quiropraxia com os benefícios da medicina chinesa e da acupuntura, ela alcançou um resultado incrível: zero dor e uma nova qualidade de vida.'
    },
    {
      id: 3,
      src: '/videos/dep04.mp4',
      title: 'Coluna Tratada, Postura Renovada',
      description: 'Marcos vivia com dores e problemas de postura, mas encontrou no Vinnicius a solução que buscava. Com um tratamento especializado, ele não só alinhou a coluna e corrigiu a postura, como também recuperou sua qualidade de vida. Hoje, ele é a prova viva de que a quiropraxia, quando feita por um profissional de excelência, faz toda a diferença.'
    },
  ];

  return (
    <section className="videos-section">
      <div className="videos-container">
        <h3 className="videos-title">Pacientes Transformados</h3>
        <div className="videos-grid">
          {videosData.map((video) => (
            <div key={video.id} className="video-item">
              <div className="video-wrapper">
                <video
                  className="video-player"
                  controls
                  preload="metadata"
                  playsInline
                  muted={false}
                  poster={`/videos/thumb-${video.id}.jpg`}
                  onError={(e) => console.error('❌ Erro ao carregar vídeo:', video.src, e.target.error)}
                  onLoadedData={() => console.log('✅ Vídeo carregado:', video.src)}
                  onLoadStart={() => console.log('🔄 Iniciando carregamento:', video.src)}
                  onCanPlay={() => console.log('▶️ Vídeo pronto para tocar:', video.src)}
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