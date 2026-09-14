import { useState } from 'react';
import { AVATAR_CATEGORIES } from '../../data/avatars';
import { AvatarCard } from '../ui/AvatarCard';
import { AvatarsHero } from '../ui/AvatarsHero';

// Ícono por categoría. Color unificado a marca: se alterna teal/violeta/coral.
const CAT_META = {
  'matematica-lengua':  { icon: 'fas fa-square-root-variable', color: 'acc-teal' },
  'idiomas':            { icon: 'fas fa-language',              color: 'acc-violeta' },
  'ciencias-sociales':  { icon: 'fas fa-globe',                color: 'acc-coral' },
  'ciencias-naturales': { icon: 'fas fa-flask',                color: 'acc-teal' },
  'talleres':           { icon: 'fas fa-screwdriver-wrench',   color: 'acc-violeta' },
};

function AcordeonCategoria({ cat, abierto, onToggle }) {
  const meta = CAT_META[cat.id] || { icon: 'fas fa-graduation-cap', color: 'acc-teal' };
  const cantidad = cat.avatars.length;

  return (
    <div className={`sec2-acc${abierto ? ' abierto' : ''}`}>
      <button
        className={`sec2-acc-head ${meta.color}`}
        onClick={onToggle}
        aria-expanded={abierto}
      >
       
        <span className="sec2-acc-titulo">{cat.title}</span>
        <span className="sec2-acc-count">{cantidad} {cantidad === 1 ? 'avatar' : 'avatares'}</span>
        <span className="sec2-acc-chevron">
          <i className="fas fa-chevron-down" aria-hidden="true"></i>
        </span>
      </button>

      <div className="sec2-acc-body">
        <div className="sec2-acc-avatares">
          {cat.avatars.map((avatar) => (
            <AvatarCard key={avatar.label} {...avatar} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function AvatarsSectionV2() {
  const [abierto, setAbierto] = useState(null);
  const toggle = (id) => setAbierto((prev) => (prev === id ? null : id));

  return (
    <section id="avatares">

      {/* Hero heredado del diseño original (fondo oscuro + card + avatares flotando) */}
      <AvatarsHero />

      {/* Acordeón por área (colores de marca) */}
      <div className="sec2-avatares">
        <div className="sec2-avatares-head">
          <h2 className="sec2-avatares-title">Avatares por áreas</h2>
         
        </div>

        <div className="sec2-acordeon">
          {AVATAR_CATEGORIES.map((cat) => (
            <AcordeonCategoria
              key={cat.id}
              cat={cat}
              abierto={abierto === cat.id}
              onToggle={() => toggle(cat.id)}
            />
          ))}
        </div>

        <div className="sec2-beta">
          <p>
            Estamos mejorando para vos: el módulo de Avatares se encuentra en fase Beta.
            ¡Exploralo y{' '}
            <a href="https://form.jotform.com/260634099368669" target="_blank" rel="noreferrer">
              dejanos tu opinión
            </a>
            !
          </p>
        </div>
      </div>

    </section>
  );
}
