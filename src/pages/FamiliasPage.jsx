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
  const el = document.querySelector('#videos-familias');
  const navbar = document.querySelector('.navbar');
  if (el && navbar) {
    window.scrollTo({ top: el.offsetTop - navbar.offsetHeight, behavior: 'smooth' });
  }
}}
          >
            Videos educativos
          </a>
          <a
            href="#documentos"
            className="familias-intro-btn"
           onClick={(e) => {
  e.preventDefault();
  const el = document.querySelector('#documentos');
  const navbar = document.querySelector('.navbar');
  if (el && navbar) {
    window.scrollTo({ top: el.offsetTop - navbar.offsetHeight, behavior: 'smooth' });
  }
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
      <DocumentosSection />
     {/*<VideosFamiliasSection /> */}
    </main>
  );
}
