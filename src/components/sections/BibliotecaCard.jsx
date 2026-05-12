import './BibliotecaCard.css';

export function BibliotecaCard() {
  return (
    <div className="biblioteca-card">
      <div className="biblioteca-card-icon">
        <i className="fas fa-book-open"></i>
      </div>
      <div className="biblioteca-card-content">
        
        <h3 className="biblioteca-card-title">Biblioteca de aprendizaje autónomo</h3>
        <p className="biblioteca-card-desc">
          
        </p>
      </div>
      <a
        href="https://biblioteca-aprendizaje-autonomo.ticmas.io/inicio"
        target="_blank"
        rel="noreferrer"
        className="biblioteca-card-btn"
      >
        Explorá 
      </a>
    </div>
  );
}
