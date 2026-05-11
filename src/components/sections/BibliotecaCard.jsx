import './BibliotecaCard.css';

export function BibliotecaCard() {
  return (
    <div className="biblioteca-card">
      <div className="biblioteca-card-icon">
        <i className="fas fa-book-open"></i>
      </div>
      <div className="biblioteca-card-content">
        
        <h3 className="biblioteca-card-title">Biblioteca de Aprendizaje Autónomo</h3>
        <p className="biblioteca-card-desc">
          Accedé a una amplia colección de recursos educativos digitales organizados por nivel,
          área y modalidad para enriquecer tus propuestas pedagógicas.
        </p>
      </div>
      <a
        href="https://biblioteca-aprendizaje-autonomo.ticmas.io/inicio"
        target="_blank"
        rel="noreferrer"
        className="biblioteca-card-btn"
      >
        Explorar biblioteca <i className="fas fa-right-to-bracket"></i>
      </a>
    </div>
  );
}
