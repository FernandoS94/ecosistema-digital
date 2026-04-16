import { useVideo } from '../../context/VideoContext';
import './DocenteGemSection.css';

export function DocenteGemSection() {
  const { openAppVideo } = useVideo();

  return (
    <section className="docentes-gem">
      <div className="docentes-gem-container">


        <p className="docentes-gem-desc">
          Diseñá tu propio asistente de planificación especializado en el área que necesites.
        </p>

        <button className="docentes-gem-btn" onClick={() => openAppVideo('gem')}>
          Docente GEM
        </button>

      </div>

      <a
        href="https://docs.google.com/document/d/1_u8-sATfpOuY80t9z3HtkdbcyrBaIIMVqVG2z0HQc3A/edit?usp=sharing"
        className="docentes-politicas-btn"
        target="_blank"
        rel="noreferrer"
      >
        Políticas y usos
      </a>

    </section>
  );
}
