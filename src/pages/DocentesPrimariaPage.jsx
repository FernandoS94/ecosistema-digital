import { useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { AVATARES_PRIMARIA } from '../data/avatarsPrimaria';
import { AvatarCard } from '../components/ui/AvatarCard';
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

function AvataresPrimaria() {
  // Si un avatar no tiene href, se muestra deshabilitado ("Próximamente")
  return (
    <section className="primaria-avatares" id="avatares">
      <div className="primaria-avatares-inner">
        <h2 className="primaria-avatares-title">Avatares de Primaria</h2>
        <div className="primaria-avatares-grid">
          {AVATARES_PRIMARIA.map((av) => (
            <AvatarCard
              key={av.label}
              {...av}
              disabled={!av.href}
            />
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
      <PrimariaIntro />
      <AvataresPrimaria />
      <ProyectosBuscador />
    </main>
  );
}
