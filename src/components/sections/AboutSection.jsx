import './AboutSection.css';

export function AboutSection() {
  return (
    <section id="about" className="about-section-new">
      <div className="about-new-container">

        <div className="about-new-text animate-on-scroll">
          <h1 className="about-new-title">¿Qué es el Ecosistema Digital?</h1>
          <p className="about-new-desc">
            Es un entorno potenciado por IA para enriquecer la enseñanza y el aprendizaje.
          </p>
        </div>

        <div className="about-new-image animate-on-scroll">
          <img src="./img/puzle.png" alt="Diagrama del Ecosistema Digital" />
        </div>

      </div>
    </section>
  );
}
