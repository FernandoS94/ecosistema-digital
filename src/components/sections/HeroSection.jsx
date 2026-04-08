export function HeroSection() {
  const scrollToAbout = (e) => {
    e.preventDefault();
    const el = document.querySelector('#about');
    const navbar = document.querySelector('.navbar');
    if (el && navbar) {
      window.scrollTo({ top: el.offsetTop - navbar.offsetHeight, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero" aria-label="Introducción al Ecosistema Educativo Digital">
      <div className="container">
        <div className="hero-content">
          <h1>ECOSISTEMA DIGITAL</h1>
          <p>Para la innovación educativa</p>
          <a href="#about" className="cta-button" onClick={scrollToAbout}>
            Descubrí más
          </a>
        </div>
      </div>
    </section>
  );
}
