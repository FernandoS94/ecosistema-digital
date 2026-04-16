import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SecundariaAprende.css';
import { AvatarsSection } from '../components/sections/AvatarsSection';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
{/*import { RecursosSection } from '../components/sections/RecursosSection';*/}
import { DocenteGemSection } from '../components/sections/DocenteGemSection';
import { RecursosSection } from '../components/sections/RecursosSection2';




const STATS = [
  { value: '350', label: 'Recursos disponibles' },
  { value: '30', label: 'Materias cubiertas' },
  { value: '100%', label: 'Gratuito' },
  { value: '24/7', label: 'Disponibilidad' },
];

const BUTTONS = [
  { label: 'Avatares', to: 'avatares' },
  { label: 'Docente GEM', to: 'docentegem' },
  { label: 'Material didáctico', to: 'recursos' },
];

function SecundariaHero() {
  return (
    <section className="secundaria-hero">
      <h1 className="secundaria-hero-title">Docentes Secundaria Aprende</h1>
    </section>
  );
}

function SecundariaStats() {
  return (
    <section className="secundaria-stats">
      <div className="secundaria-stats-container">
        {STATS.map((stat) => (
          <div className="secundaria-stat-item" key={stat.label}>
            <span className="secundaria-stat-value">{stat.value}</span>
            <span className="secundaria-stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function SecundariaIntro() {
  const navigate = useNavigate();

  /*const handleClick = (e, to) => {
    e.preventDefault();
    if (to === '#') return;
    if (to.startsWith('/#')) {
      navigate('/');
      setTimeout(() => {
        const id = to.replace('/#', '#');
        const el = document.querySelector(id);
        const navbar = document.querySelector('.navbar');
        if (el && navbar) {
          window.scrollTo({ top: el.offsetTop - navbar.offsetHeight, behavior: 'smooth' });
        }
      }, 300);
    } else {
      navigate(to);
    }
  };*/

  const handleClick = (e, to) => {
  e.preventDefault();
  if (to === '#') return;
  const el = document.getElementById(to);
  const navbar = document.querySelector('.navbar');
  if (el && navbar) {
    const top = el.getBoundingClientRect().top + window.scrollY - navbar.offsetHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

  return (
    <section className="secundaria-intro">
      <div className="secundaria-intro-container">
        <p className="secundaria-intro-text">
          Explorá y previsualizá recursos por categorías para vincularlos a tu aula virtual,
          potenciando tu clase con el apoyo de los Avatares o creando tu propio docente Gem
          para una personalización total. Accedé a los materiales haciendo click en los botones:
        </p>
        <div className="secundaria-intro-buttons">
          {BUTTONS.map((btn) => (
            <a
              key={btn.label}
              href={btn.to}
              className="secundaria-intro-btn"
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

export function SecundariaAprendePage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <main>
      
      <SecundariaHero />
   <SecundariaStats />
   
        <SecundariaIntro />
    <AvatarsSection />
         
      <DocenteGemSection />
        {/*<RecursosSection /> */}
    </main>
  );
}
