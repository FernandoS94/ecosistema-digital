import { useVideo } from '../../context/VideoContext';
import { AvatarCategory } from '../ui/AvatarCategory';
import { AVATAR_CATEGORIES } from '../../data/avatars';
import { AvatarsHero } from '../ui/AvatarsHero';

export function AvatarsSection() {
  const { openAppVideo } = useVideo();

  return (
    <section className="section avatares-section" id="avatares">

      <AvatarsHero />

      <div className="categorias-bg">
  <div className="categorias-wrapper">
        {AVATAR_CATEGORIES.map((cat) => (
          <AvatarCategory
            key={cat.id}
            title={cat.title}
            avatars={cat.avatars}
            fullWidth={cat.fullWidth}
          />
        ))}
       </div>
</div>

<div className="categorias-bg">
      <div className="container">
        <div className="beta-notice-bottom animate-on-scroll">
          <p>
             Estamos mejorando para vos: el módulo de Avatares se encuentra en fase Beta.
            
            ¡Exploralo y{' '}
            <a href="https://form.jotform.com/260634099368669" target="_blank" rel="noreferrer" className="beta-notice-link">
              dejanos tu opinión
            </a>
            !
          </p>
        </div>

        <div className="avatar-action-container animate-on-scroll">
         <p className="action-note">
            Diseñá tu propio asistente de planificación especializado en el área que necesites.
          </p>
         
          <button className="cta-button" onClick={() => openAppVideo('gem')}>
            Docente GEM
          </button>
          
          <div className="button-left-container">
            <a
              href="https://docs.google.com/document/d/1_u8-sATfpOuY80t9z3HtkdbcyrBaIIMVqVG2z0HQc3A/edit?usp=sharing"
              className="secondary-button"
              target="_blank"
              rel="noreferrer"
            >
              Políticas y usos
            </a>
          </div>
        </div>
        </div>
      </div>

    </section>
  );
}