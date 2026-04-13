import './VideosSection.css';

const VIDEOS_FAMILIAS = [
  {
    id: 1,
    url: 'https://www.youtube.com/embed/ut4q3Upacj4?si=tnTA_BEXh-jaU3n1',
    title: '¿Qué es el bienestar digital?',
    desc: 'Accedé al video para profundizar el concepto.',
  },
  {
    id: 2,
    url: 'https://www.youtube.com/embed/0uPe60FouVU?si=EC2x-36tghfCjehI',
    title: '¿Cómo acompañar a los niños en entornos digitales?',
    desc: '¿Qué es el bienestar digital?',
  },
  {
    id: 3,
    url: 'https://www.youtube.com/embed/LMRteCCl8Oc?si=wpQqINMgL3eoFwrl',
    title: 'IA en casa y en la escuela',
    desc: 'Conocé de qué manera se aborda la IA en la escuela y de qué modo se puede integrar en el hogar.',
  },
];

function VideoCard({ url, title, desc }) {
  return (
    <div className="video-card">
      <div className="video-frame">
        <iframe src={url} allowFullScreen title={title} />
      </div>
      <div className="video-content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export function VideosFamiliasSection() {
  return (
    <section id="videos-familias" className="videos-section">
      <h2>Videos educativos</h2>
      <p>
        
      </p>
      <div className="videos-grid">
        {VIDEOS_FAMILIAS.map((video) => (
          <VideoCard key={video.id} url={video.url} title={video.title} desc={video.desc} />
        ))}
      </div>
    </section>
  );
}
