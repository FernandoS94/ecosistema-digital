import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useVideo } from '../context/VideoContext';
import './DocentesPage.css';

function DocentesHero() {
  return (
    <section className="docentes-hero">
      <h1 className="docentes-hero-title">Docentes</h1>
    </section>
  );
}

function DocentesIntro() {
  return (
    <section className="docentes-intro">
      <div className="docentes-intro-container">
        <p className="docentes-intro-text">
          Explorá y previsualizá recursos por categorías para vincularlos a tu aula virtual,
          potenciando tu clase con el apoyo de los Avatares o creando tu propio docente Gem
          para una personalización total. Accedé a los materiales haciendo click en los botones:
        </p>

        <div className="docentes-intro-buttons">
          <a href="#" className="docentes-intro-btn">
            Videos tutoriales
          </a>
          <Link to="/docentes-secundaria-aprende" className="docentes-intro-btn">
  Docentes<br />Secundaria Aprende
</Link>
        </div>
      </div>
    </section>
  );
}

function DocentesGem() {
  const { openAppVideo } = useVideo();

  return (
    <section className="docentes-gem">
      <div className="docentes-gem-container">

        <div className="docentes-gem-header">
          <div className="docentes-gem-icon">
            <img
              src="./img/estrella.png"
              alt=""
              aria-hidden="true"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <h2 className="docentes-gem-title">Docente GEM</h2>
        </div>

        <p className="docentes-gem-desc">
          Diseñá tu propio asistente de planificación especializado en el área que necesites.
        </p>

        <button className="docentes-gem-btn" onClick={() => openAppVideo('gem')}>
          Docente GEM
        </button>

      </div>

      {/* Políticas y usos — esquina inferior derecha */}
      <a
        href="https://docs.google.com/document/d/1_u8-sATfpOuY80t9z3HtkdbcyrBaIIMVqVG2z0HQc3A/edit?usp=sharing"
        className="docentes-politicas-btn"
        target="_blank"
        rel="noreferrer"
      >
        Políticas y usos
      </a>

    </section>
  );
}

export function DocentesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <main>
      <DocentesHero />
      <DocentesIntro />
      <DocentesGem />
    </main>
  );
}
