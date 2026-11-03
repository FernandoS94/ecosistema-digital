import { useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { AVATARES_PRIMARIA } from '../data/avatarsPrimaria';
import { ProyectosBuscador } from '../components/sections/ProyectosBuscador';
import './DocentesPrimariaPage.css';

function PrimariaHero() {
  return (
    <section className="primaria-hero">
      <h1 className="primaria-hero-title">Docentes Primaria Aprende</h1>
    </section>
  );
}

function PrimariaIntro() {
  return (
    <section className="primaria-intro">
      <div className="primaria-intro-container">
        <p className="primaria-intro-text">
          Encontrá proyectos educativos, asistentes de IA y recursos pensados para el nivel
          primario. Explorá por grado, ciclo, temática o área curricular.
        </p>
      </div>
    </section>
  );
}

function AsistenteCard({ label, nombre, grados, descripcion, img, href, tema }) {
  const disponible = Boolean(href);

  return (
    <article className={`asistente-card asistente-card--${tema}`}>
      <div className="asistente-card-media">
        <span className="asistente-card-halo" aria-hidden="true" />
        <span className="asistente-card-sparkle s1" aria-hidden="true">✦</span>
        <span className="asistente-card-sparkle s2" aria-hidden="true">✦</span>
        <img className="asistente-card-img" src={img} alt={`Avatar ${nombre}`} loading="lazy" />
      </div>

      <div className="asistente-card-body">
        <span className="asistente-card-chip">{grados}</span>
        <h3 className="asistente-card-ciclo">{label}</h3>
      
        

        {disponible ? (
          <a
            className="asistente-card-btn"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir asistente
           
          </a>
        ) : (
          <span className="asistente-card-btn is-disabled">Próximamente</span>
        )}
      </div>
    </article>
  );
}

function AvataresPrimaria() {
  return (
    <section className="primaria-avatares" id="avatares">
      <div className="primaria-avatares-inner">
        <header className="primaria-avatares-header">
          <span className="primaria-avatares-eyebrow">Asistentes virtuales con IA</span>
          <h2 className="primaria-avatares-title">Avatares de Primaria</h2>
          <p className="primaria-avatares-sub">
            Elegí el asistente según el ciclo con el que trabajás.
          </p>
        </header>

        <div className="primaria-avatares-grid">
          {AVATARES_PRIMARIA.map((av) => (
            <AsistenteCard key={av.id} {...av} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function DocentesPrimariaPage() {
  useScrollAnimation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <main>
      <PrimariaHero />
     
      <AvataresPrimaria />
    
    </main>
  );
}
