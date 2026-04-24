import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useVideo } from '../context/VideoContext';
import './DocentesPage.css';
import { VideosSection } from '../components/sections/VideosSection';
import { VideosGrid } from '../components/sections/VideosGrid';
import { DocenteGemSection } from '../components/sections/DocenteGemSection1';



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
         Potenciá tu clase con recursos de Avatares o docentes Gem. Accedé haciendo click en los botones:
        </p>

        <div className="docentes-intro-buttons">
          <a 
          href="#videos"
  className="docentes-intro-btn"
  onClick={(e) => {
    e.preventDefault();
    const el = document.querySelector('#videos');
    const navbar = document.querySelector('.navbar');
    if (el && navbar) {
      window.scrollTo({ top: el.offsetTop - navbar.offsetHeight, behavior: 'smooth' });
    }
  }}
>
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

<div className="docentes-gem-icon">
  <img
    src="./img/estrella.png"
    alt=""
    aria-hidden="true"
    onError={(e) => { e.target.style.display = 'none'; }}
  />
</div>

<h2 className="docentes-gem-title">Docente GEM</h2>

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
      {/*<DocentesGem />*/} 
      <DocenteGemSection />
      <VideosGrid />
   
    </main>
  );
}
