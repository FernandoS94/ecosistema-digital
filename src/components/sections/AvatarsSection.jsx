import { useVideo } from '../../context/VideoContext';
import { AvatarCategory } from '../ui/AvatarCategory';
import { HowToUseSteps } from '../ui/HowToUseSteps';
import { AVATAR_CATEGORIES } from '../../data/avatars';

export function AvatarsSection() {
  const { openAppVideo } = useVideo();

  return (
    <section className="section avatares-section" id="avatares">
      <div className="container">
        <h2 className="section-title animate-on-scroll">
          <img src="./img/beta.png" alt="Beta" className="title-beta-logo" />
          Avatares de Secundaria Aprende
        </h2>

        <div className="about-text animate-on-scroll">
          <p>
            Los Avatares de Secundaria Aprende son asistentes pedagógicos que, entrenados con IA,
            ayudan a los docentes a resolver consultas, armar planes de aprendizaje, recibir
            explicaciones y retroalimentación inmediata. Funcionan como una puerta de entrada simple:
            elegís un avatar, preguntás y obtenés apoyo concreto que te permitirá potenciar tus
            prácticas de enseñanza.
          </p>
        </div>

        <HowToUseSteps />

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

        <div className="beta-notice-bottom animate-on-scroll">
          <p>
            🚧 Estamos mejorando para vos: el módulo de Avatares se encuentra en fase Beta.
            <br />
            ¡Exploralo y{' '}
            <a href="https://form.jotform.com/260634099368669" target="_blank" rel="noreferrer" className="beta-notice-link">
              dejanos tu opinión
            </a>
            !
          </p>
        </div>

        <div className="avatar-action-container animate-on-scroll">
          <button className="cta-button" onClick={() => openAppVideo('gem')}>
            Hacé tu docente GEM
          </button>
          <p className="action-note">
            Diseñá tu propio asistente de planificación especializado en el área que necesites.
          </p>
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
    </section>
  );
}
