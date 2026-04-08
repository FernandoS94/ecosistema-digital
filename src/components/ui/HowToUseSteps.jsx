import { useVideo } from '../../context/VideoContext';

const STEPS = [
  { number: 1, title: 'Hacé click', desc: 'Elegí el avatar de la materia y hacé click en el botón circular.' },
  { number: 2, title: 'Abrí el chat', desc: 'Se abrirá una nueva pestaña con tu asistente de IA personalizado.' },
  { number: 3, title: 'Consultá', desc: 'Escribí tus preguntas y recibí apoyo concreto para enseñar mejor.' },
];

export function HowToUseSteps() {
  const { openAppVideo } = useVideo();

  return (
    <section className="how-to-section">
      <div className="container">
        <h2>¿Cómo usar los avatares?</h2>
        <div className="steps-container">
          {STEPS.map((step) => (
            <div className="step-card" key={step.number}>
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="how-to-video-container animate-on-scroll">
          <button className="how-to-video-button" onClick={() => openAppVideo('avatar')}>
            <i className="fas fa-play-circle"></i> Ver video tutorial
          </button>
        </div>
      </div>
    </section>
  );
}
