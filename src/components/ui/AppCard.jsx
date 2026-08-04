import { useState } from 'react';
import { useVideo } from '../../context/VideoContext';
import './AppCard.css';

export function AppCard({ img, alt, name, description, tag, videoKey, url }) {
  const { openAppVideo } = useVideo();
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`app-card-flip${flipped ? ' flipped' : ''}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <div className="app-card-inner">

        {/* FRENTE: logo + nombre */}
        <div className="app-card-front">
          <img src={img} alt={alt} className="app-card-logo" />
          <div className="app-card-name">{name}</div>
        </div>

        {/* DORSO: descripción + botón + link */}
        <div className="app-card-back">
          <p className="app-card-desc">{description}</p>
          <button
            className="app-card-btn"
            onClick={(e) => { e.stopPropagation(); openAppVideo(videoKey); }}
          >
            <i className="fas fa-play-circle"></i> Ver tutorial
          </button>
          {url && (
            <a
              href={url}
  target="_blank"
  rel="noreferrer"
  className="app-card-btn app-card-link"
  onClick={(e) => e.stopPropagation()}
>
  <i className="fas fa-external-link-alt"></i> Abrir
</a>
          )}
        </div>

      </div>
    </div>
  );
}
