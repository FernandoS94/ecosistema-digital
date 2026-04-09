import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AccessSection.css';

const PROFILES = [
  {
    id: 'docentes',
    label: 'Docentes',
    desc: 'Planificá tus clases con materiales y herramientas para el aprendizaje con IA',
    to: '/docentes',
    btnText: 'Ingresar',
    colorClass: 'card-yellow',
  },
  {
    id: 'familias',
    label: 'Familias',
    desc: 'Acompañá el proceso de aprendizaje y accedé a recursos para apoyar a tus hijos',
    to: '/familias',
    btnText: 'Ingresar',
    colorClass: 'card-pink',
  },
];

function FlipCard({ label, desc, to, btnText, colorClass }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card${flipped ? ' flipped' : ''}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <div className="flip-card-inner">
        {/* FRENTE */}
        <div className={`flip-card-front ${colorClass}`}>
          <span className="flip-card-label">{label}</span>
        </div>

        {/* DORSO */}
        <div className={`flip-card-back ${colorClass}`}>
          <p className="flip-card-desc">{desc}</p>
          <Link
            to={to}
            className="flip-card-btn"
            onClick={(e) => e.stopPropagation()}
          >
            {btnText}
          </Link>
        </div>
      </div>
    </div>
  );
}

{/*export function AccessSection() {
  return (
    <section className="access-section-new" id="access">
      <div className="access-new-container">
        {PROFILES.map((profile) => (
          <FlipCard key={profile.id} {...profile} />
        ))}
      </div>
    </section>
  );
}*/}

export function AccessSection() {
  return (
    <section
      className="access-section-new"
      id="access"
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}img/banner.png)` }}
    >
      <div className="access-new-container">
        {PROFILES.map((profile) => (
          <FlipCard key={profile.id} {...profile} />
        ))}
      </div>
    </section>
  );
}