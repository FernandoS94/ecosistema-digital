import { useState, useEffect } from 'react';


export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleOutside = (e) => {
      if (!e.target.closest('.nav-dropdown')) setDropdownOpen(false);
    };
    document.addEventListener('click', handleOutside);
    return () => document.removeEventListener('click', handleOutside);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    closeMenu();
    if (id === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.querySelector(id);
    const navbar = document.querySelector('.navbar');
    if (el && navbar) {
      window.scrollTo({ top: el.offsetTop - navbar.offsetHeight, behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar visible">
      <div className="navbar-container">

        {/* Logo izquierda — siempre visible */}
        <a href="#" className="logo logo-left" onClick={(e) => scrollToSection(e, '#')}>
          <img src="./img/ECO_HORIZONTAL.png" alt="Logo Ecosistema Digital" />
        </a>

        {/* Hamburger — solo mobile, pegado a la derecha */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Links centrados */}
        <div className={`nav-links-centered${menuOpen ? ' open' : ''}`} id="navMenu">
          <a href="#about" className="nav-link" onClick={(e) => scrollToSection(e, '#about')}>Inicio</a>

          <div className={`nav-dropdown${dropdownOpen ? ' open' : ''}`}>
            <a className="nav-link nav-dropdown-toggle" onClick={toggleDropdown} href="#">
              Materiales
              <svg className="dropdown-arrow" width="10" height="10" viewBox="0 0 10 10">
                <path d="M2 3.5 L5 6.5 L8 3.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
            </a>
            <div className="nav-dropdown-menu">
              <a href="docentes.html" className="nav-dropdown-item" onClick={closeMenu}>Docentes</a>
              <a href="familias.html" className="nav-dropdown-item" onClick={closeMenu}>Familias</a>
            </div>
          </div>

         
          <a href="#faq" className="nav-link" onClick={(e) => scrollToSection(e, '#faq')}>Ayuda</a>
        </div>

        {/* Logo derecha — oculto en mobile */}
        <a href="#" className="logo logo-right" onClick={(e) => scrollToSection(e, '#')}>
          <img src="./img/ba_aprende.png" alt="Logo Buenos Aires Aprende" />
        </a>

      </div>
    </nav>
  );
}
