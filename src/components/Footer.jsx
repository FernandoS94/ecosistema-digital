export function Footer() {
  return (
    <footer>
      <div className="footer-gov-container">
        <div className="footer-gov-logo">
          <img src="./img/logo_ed.webp" alt="Educacion Digital ED" />
        </div>

        <hr className="footer-gov-divider" />

        <div className="footer-gov-institucional">
          <div className="footer-gov-logos">
            <div className="footer-gov-logo-item">
              <img src="./img/buenos-aires-ciudad.webp" alt="Buenos Aires Ciudad" />
            </div>
            <div className="footer-gov-logo-item">
              <img src="./img/ministerio-de-educacion.webp" alt="BA Buenos Aires Ciudad" />
            </div>
          </div>
        </div>

        <div className="footer-gov-links">
          <a href="https://boletinoficial.buenosaires.gob.ar/" className="footer-gov-link" target="_blank" rel="noreferrer">Boletín oficial</a>
          <a href="https://buenosaires.gob.ar/inicio/terminos-y-condiciones" className="footer-gov-link" target="_blank" rel="noreferrer">Términos y condiciones</a>
          <a href="https://buenosaires.gob.ar/inicio/privacidad" className="footer-gov-link" target="_blank" rel="noreferrer">Política de privacidad</a>
          <a href="https://buenosaires.gob.ar/jefedegobierno/legalytecnica/normativa/boletin-oficial-y-registro/oficios-judiciales" className="footer-gov-link" target="_blank" rel="noreferrer">Oficios Judiciales</a>
          <a href="https://buenosaires.gob.ar/gobierno/transparencia" className="footer-gov-link" target="_blank" rel="noreferrer">Transparencia</a>
        </div>

        <div className="copyright">
          <p>Los contenidos de buenosaires.gob.ar están licenciados bajo Creative Commons Reconocimiento 2.5 Argentina License.</p>
        </div>
      </div>
    </footer>
  );
}
