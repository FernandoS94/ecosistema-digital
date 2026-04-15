import { useVideo } from '../../context/VideoContext';
import './AvatarsHero.css';

export function AvatarsHero() {
  const { openAppVideo } = useVideo();

  return (
    <section className="avatars-hero">

       {/* Título */}
      <h2 className="avatars-hero-title">Avatares de Secundaria Aprende</h2>

      {/* Estrella decorativa izquierda */}
      <img
        src="./img/estrella.png"
        alt=""
        aria-hidden="true"
        className="avatars-hero-estrella"
        onError={(e) => { e.target.style.display = 'none'; }}
      />

      <div className="avatars-hero-inner">

        {/* Card de texto */}
        <div className="avatars-hero-card">
          <p className="avatars-hero-text">
            Los Avatares son <strong>asistentes pedagógicos con IA</strong> que optimizan la
            práctica docente mediante planificación, consultas y retroalimentación inmediata,
            potenciando la enseñanza de forma simple y eficiente.
          </p>
          <p className="avatars-hero-text">
            Uso de avatares en <strong>3 pasos</strong>: Elegí tu materia, abrí el chat
            personalizado y consultá para recibir apoyo pedagógico inmediato.{' '}
           
          </p>
           <button className="avatars-hero-btn" onClick={() => openAppVideo('avatar')}>
              Video tutorial
            </button>
        </div>

        {/* Avatares circulares derecha */}
        <div className="avatars-hero-imgs">
          <img src="./img/avatares/ingles.png"    alt="Avatar" className="avatars-hero-av avatars-hero-av--top" />
          <img src="./img/avatares/fisica.png"    alt="Avatar" className="avatars-hero-av avatars-hero-av--mid" />
          <img src="./img/avatares/geografia.png" alt="Avatar" className="avatars-hero-av avatars-hero-av--bot" />
        </div>

      </div>
    </section>
  );
}
