import { useState } from 'react';
import { useVideo } from '../../context/VideoContext';
import './AppCard.css';

export function AppCard({ img, alt, name, description, tag, videoKey }) {
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

        {/* DORSO: descripción + tag + botón */}
        <div className="app-card-back">
          {/*<span className="app-card-tag">{tag}</span>*/}
          <p className="app-card-desc">{description}</p>
          <button
            className="app-card-btn"
            onClick={(e) => { e.stopPropagation(); openAppVideo(videoKey); }}
          >
            <i className="fas fa-play-circle"></i> Ver tutorial
          </button>
        </div>

      </div>
    </div>
  );
}
