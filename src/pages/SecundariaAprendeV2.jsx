import { useEffect } from 'react';
import './SecundariaAprendeV2.css';

import { AvatarsSectionV2 } from '../components/sections/AvatarsSectionV2';
import { DocenteGemSectionV2 } from '../components/sections/DocenteGemSectionV2';
import { RecursosSection } from '../components/sections/RecursosSection2';
import { BibliotecaCard } from '../components/sections/BibliotecaCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';


const BUTTONS = [
  { label: 'Avatares', to: 'avatares' },
  { label: 'Docente IA', to: 'docentegem' },
  { label: 'Material didáctico', to: 'recursos' },
];

// Hero ancho con stats + accesos integrados (Opción 1)
function SecundariaHeroV2() {
  const handleClick = (e, to) => {
    e.preventDefault();
    const el = document.getElementById(to);
    const navbar = document.querySelector('.navbar');
    if (el && navbar) {
      const top = el.getBoundingClientRect().top + window.scrollY - navbar.offsetHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="sec2-hero">
      <div className="sec2-hero-inner">
        <h1 className="sec2-hero-title">Docentes Secundaria Aprende</h1>

        <div className="sec2-hero-buttons">
          {BUTTONS.map((btn, i) => (
            <a
              key={btn.label}
              href={btn.to}
              className={`sec2-hero-btn${i === 0 ? ' sec2-hero-btn--solid' : ''}`}
              onClick={(e) => handleClick(e, btn.to)}
            >
              {btn.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SecundariaAprendeV2Page() {
  useScrollAnimation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <main className="sec2-home">
      <SecundariaHeroV2 />
      <AvatarsSectionV2 />
      <DocenteGemSectionV2 />
      <RecursosSection />
      <BibliotecaCard />
    </main>
  );
}
