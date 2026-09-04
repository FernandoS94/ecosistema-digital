import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

import { AppsSection } from '../components/sections/AppsSection';
import { VideosGridV2 } from '../components/sections/VideosGridV2';
import { FaqSectionColapsable } from '../components/sections/FaqSectionColapsable';

import './HomePageV2.css';

// Actores por nivel. Primaria queda en placeholder ('#') con badge "Próximamente"
// hasta que definas su contenido. Secundaria usa tus rutas reales.
const ACTORES = {
  primaria: [
    { id: 'docentes',     titulo: 'Docentes',     icon: 'fas fa-chalkboard-teacher', color: 'actor-teal',     to: '#', proximamente: true },
    { id: 'directivos',   titulo: 'Directivos',   icon: 'fas fa-user-tie',           color: 'actor-amarillo', to: '#', proximamente: true },
    { id: 'supervisores', titulo: 'Supervisores', icon: 'fas fa-clipboard-check',    color: 'actor-rosa',     to: '#', proximamente: true },
  ],
  secundaria: [
    { id: 'docentes',     titulo: 'Docentes',     icon: 'fas fa-chalkboard-teacher', color: 'actor-teal',     to: '/docentes-secundaria-aprende' },
    { id: 'directivos',   titulo: 'Directivos',   icon: 'fas fa-user-tie',           color: 'actor-amarillo', to: '/directivos' },
    { id: 'supervisores', titulo: 'Supervisores', icon: 'fas fa-clipboard-check',    color: 'actor-rosa',     to: '/supervisores' },
  ],
};

function ActorCard({ actor }) {
  const contenido = (
    <>
      <i className={`${actor.icon} v2-actor-ico`} aria-hidden="true"></i>
      <div className="v2-actor-bottom">
        <h3>{actor.titulo}</h3>
        {actor.proximamente && <span className="v2-actor-badge">Próximamente</span>}
      </div>
    </>
  );

  if (actor.to === '#') {
    return <div className={`v2-actor-card ${actor.color} v2-actor-card--disabled`}>{contenido}</div>;
  }

  return (
    <Link to={actor.to} className={`v2-actor-card ${actor.color}`}>
      {contenido}
    </Link>
  );
}

function AccesoV2() {
  const [nivel, setNivel] = useState('secundaria');

  return (
    <section className="v2-top-band">
      {/* ── BANNER INTRO (arriba) ── */}
      <div className="v2-intro-panel">
        <div className="v2-intro-text">
          <h1 className="v2-intro-title">¿Qué es el Ecosistema Digital?</h1>
          <p className="v2-intro-desc">
            Es un entorno potenciado por IA para enriquecer la enseñanza y el aprendizaje.
          </p>
        </div>
        <div className="v2-intro-image">
          <img src="./img/puzle.png" alt="Diagrama del Ecosistema Digital" />
        </div>
      </div>

      {/* ── ACCESO (abajo) ── */}
      <div className="v2-acceso-panel">

        {/* Header: título + switch con etiqueta y check */}
        <div className="v2-acceso-header">
          <h2 className="v2-acceso-title">Ingresá a tu espacio</h2>

          <div className="v2-switch-wrap">
            <span className="v2-switch-label">
              <i className="fas fa-sliders-h" aria-hidden="true"></i>
              Elegí tu nivel
            </span>
            <div className="v2-switch">
              <button
                className={nivel === 'primaria' ? 'active' : ''}
                onClick={() => setNivel('primaria')}
              >
                {nivel === 'primaria' && <i className="fas fa-check" aria-hidden="true"></i>}
                Primaria
              </button>
              <button
                className={nivel === 'secundaria' ? 'active' : ''}
                onClick={() => setNivel('secundaria')}
              >
                {nivel === 'secundaria' && <i className="fas fa-check" aria-hidden="true"></i>}
                Secundaria
              </button>
            </div>
          </div>
        </div>

        {/* Roles (3 cards en fila) */}
        <div className="v2-actores">
          {ACTORES[nivel].map((actor) => (
            <ActorCard key={actor.id} actor={actor} />
          ))}
        </div>

        {/* Familias (franja ancha abajo) */}
        <Link to="/familias" className="v2-familias">
          <div className="v2-familias-ico">
            <i className="fas fa-house-chimney" aria-hidden="true"></i>
          </div>
          <div className="v2-familias-text">
            <h3>Familias</h3>
            <p>Recursos y acompañamiento para el hogar</p>
          </div>
        </Link>

      </div>
    </section>
  );
}

export function HomePageV2() {
  useScrollAnimation();

  return (
    <main className="v2-home">
      <AccesoV2 />
      <AppsSection />
      <VideosGridV2 />
      <FaqSectionColapsable />
    </main>
  );
}
