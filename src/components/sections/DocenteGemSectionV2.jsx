import { useVideo } from '../../context/VideoContext';
import './DocenteGemSectionV2.css';

const PASOS = [
  {
    n: '1',
    titulo: 'Creá el GEM',
    desc: 'En Gemini: menú lateral → Gems → Nuevo Gem. Ponele nombre y descripción.',
  },
  {
    n: '2',
    titulo: 'Escribí las instrucciones',
    desc: 'Definí qué hace y cómo interactúa (que pida materia, clases o bimestre).',
  },
  {
    n: '3',
    titulo: 'Subí tus materiales',
    desc: 'Cargá diseño curricular, manuales y tu planificación en la base de conocimiento.',
  },
  {
    n: '4',
    titulo: 'Guardá y usá',
    desc: 'Guardá, iniciá el chat y pedile que planifique. Editalo cuando quieras.',
  },
];

export function DocenteGemSectionV2() {
  const { openAppVideo } = useVideo();

  return (
    <section className="gem2" id="docentegem">
      <div className="gem2-card">

        {/* Panel izquierdo (oscuro) */}
        <div className="gem2-left">
          <span className="gem2-eyebrow">Asistente personalizado</span>
          <h2 className="gem2-title">Creá tu Docente IA</h2>
          <p className="gem2-desc">
            Diseñá tu propio asistente de planificación especializado en el área que necesites.
          </p>

          <button className="gem2-btn" onClick={() => openAppVideo('gem')}>
            Ver tutorial
            <i className="fas fa-play" aria-hidden="true"></i>
          </button>

          <a
            href="https://docs.google.com/document/d/1_u8-sATfpOuY80t9z3HtkdbcyrBaIIMVqVG2z0HQc3A/edit?usp=sharing"
            className="gem2-politicas"
            target="_blank"
            rel="noreferrer"
          >
            Políticas y usos
          </a>
        </div>

        {/* Panel derecho (pasos con línea conectora) */}
        <div className="gem2-right">
          <span className="gem2-steps-label">Cómo funciona</span>
          <div className="gem2-steps">
            {PASOS.map((p) => (
              <div className="gem2-step" key={p.n}>
                <span className="gem2-step-num">{p.n}</span>
                <div className="gem2-step-body">
                  <p className="gem2-step-title">{p.titulo}</p>
                  <p className="gem2-step-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
