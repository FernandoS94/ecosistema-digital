import { useState } from 'react';
import './AccessSection.css';

const PROFILES = [
  {
    id: 'docentes',
    label: 'Docentes',
    desc: 'Planificá tus clases con materiales y herramientas para el aprendizaje con IA',
    href: 'docentes.html',
    btnText: 'Ingresar',
    colorClass: 'card-yellow',
  },
  {
    id: 'familias',
    label: 'Familias',
    desc: 'Acompañá el proceso de aprendizaje y accedé a recursos para apoyar a tus hijos',
    href: 'familias.html',
    btnText: 'Ingresar',
    colorClass: 'card-pink',
  },
];

function FlipCard({ label, desc, href, btnText, colorClass }) {
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
          <a
            href={href}
            className="flip-card-btn"
            onClick={(e) => e.stopPropagation()}
          >
            {btnText}
          </a>
        </div>
      </div>
    </div>
  );
}

export function AccessSection() {
  return (
    <section className="access-section-new" id="access">
      <div className="access-new-container">
        {PROFILES.map((profile) => (
          <FlipCard key={profile.id} {...profile} />
        ))}
      </div>
    </section>
  );
}
