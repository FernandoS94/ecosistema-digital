import { useEffect } from 'react';
import './FamiliasPage.css';
import { DocumentosSection } from '../components/sections/DocumentosSection';
import { VideosFamiliasSection } from '../components/sections/VideosFamiliasSection';

function FamiliasHero() {
  return (
    <section className="familias-hero">
      <h1 className="familias-hero-title">Familias</h1>
    </section>
  );
}

function FamiliasIntro() {
  return (
    <section className="familias-intro">
      <div className="familias-intro-container">
        <p className="familias-intro-text">
          Encontrá materiales y contenidos audiovisuales que ofrecen ayuda y acompañamiento
          para familias y estudiantes.
        </p>

        <div className="familias-intro-buttons">
          <a
            href="#videos-familias"
            className="familias-intro-btn"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#videos-familias')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Videos educativos
          </a>
          <a
            href="#comunicacion"
            className="familias-intro-btn"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#comunicacion')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Comunicación y<br />acompañamiento
          </a>
        </div>
      </div>
    </section>
  );
}

export function FamiliasPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <main>
      <FamiliasHero />
      <FamiliasIntro />
      {/*<DocumentosSection />
      <VideosFamiliasSection /> */}
    </main>
  );
}
