import { useVideo } from '../../context/VideoContext';
import './NewHowToUseSteps.css';

export function NewHowToUseSteps() {
  const { openAppVideo } = useVideo();

  return (
    <section className="how-to-section">
      <div className="how-to-inner">

        {/* Estrella decorativa */}
        <img
          src="./img/estrella.png"
          alt=""
          aria-hidden="true"
          className="how-to-estrella"
          onError={(e) => { e.target.style.display = 'none'; }}
        />

        {/* Card de texto */}
        <div className="how-to-card">
          <p className="how-to-text">
            Los Avatares son <strong>asistentes pedagógicos con IA</strong> que optimizan la
            práctica docente mediante planificación, consultas y retroalimentación inmediata,
            potenciando la enseñanza de forma simple y eficiente.
          </p>
          <p className="how-to-text">
            Uso de avatares en <strong>3 pasos</strong>: Elegí tu materia, abrí el chat
            personalizado y consultá para recibir apoyo pedagógico inmediato.
          </p>
          <button className="how-to-video-button" onClick={() => openAppVideo('avatar')}>
            <i className="fas fa-play-circle"></i> Video tutorial
          </button>
        </div>

        {/* Avatares flotantes derecha */}
        <div className="how-to-avatares">
          <img src="./img/avatares/ingles.png"    alt="Avatar Inglés"    className="how-to-av how-to-av-top" />
          <img src="./img/avatares/fisica.png"    alt="Avatar Física"    className="how-to-av how-to-av-mid" />
          <img src="./img/avatares/geografia.png" alt="Avatar Geografía" className="how-to-av how-to-av-bot" />
        </div>

      </div>
    </section>
  );
}
