import './como-funciona.css';
const PASOS = [
  {
    numero: '01',
    titulo: 'Elegí qué necesitás hacer',
    descripcion: 'Con una palabra clave: Visita, Registro, Proyecto, Acuerdos, Devolución o Consolidar.',
  },
  {
    numero: '02',
    titulo: 'Respondé hasta 5 preguntas breves',
    descripcion: 'Preguntas generales y guiadas, sin nombres ni datos personales de docentes, familias o estudiantes.',
  },
  {
    numero: '03',
    titulo: 'Activás el tablero interactivo',
    descripcion: 'Se genera un tablero con sus 6 dimensiones y el plan de acompañamiento, listo para revisar, editar y exportar en PDF, PNG o Excel.',
  },
];

export function ComoFuncionaSection() {
  return (
    <section className="supervisores-como-section">
      <div className="container">
        <h2 className="supervisores-section-title animate-on-scroll">¿Cómo funciona?</h2>
        <p className="supervisores-section-desc animate-on-scroll">
          Los asistentes trabajan de manera socrática: guían con preguntas breves para construir
          el contexto de cada situación y elaborar un plan de acompañamiento.
        </p>

        <div className="supervisores-pasos-grid">
          {PASOS.map((paso) => (
            <div className="paso-card animate-on-scroll" key={paso.numero}>
              <span className="paso-card-num">{paso.numero}</span>
              <h3 className="paso-card-title">{paso.titulo}</h3>
              <p className="paso-card-desc">{paso.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
