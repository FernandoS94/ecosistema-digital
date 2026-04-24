import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { SearchModal } from './SearchModal';

export function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(id);
        const navbar = document.querySelector('.navbar');
        if (el && navbar) {
          window.scrollTo({ top: el.offsetTop - navbar.offsetHeight, behavior: 'smooth' });
        }
      }, 300);
      return;
    }

    if (!id || id === '#') {
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

        {/* Logo izquierdo */}
        <div className="logo logo-left">
          <img src="./img/ECO_HORIZONTAL.png" alt="Logo Ecosistema Digital" />
        </div>

        {/* Links centrados — desktop */}
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
              <Link to="/docentes" className="nav-dropdown-item" onClick={closeMenu}>Docentes</Link>
              <Link to="/familias" className="nav-dropdown-item" onClick={closeMenu}>Familias</Link>
              <Link to="#" className="nav-dropdown-item" onClick={closeMenu}>Documento PDF del Ecosistema</Link>
            </div>
          </div>

          <a href="#faq" className="nav-link" onClick={(e) => scrollToSection(e, '#faq')}>Ayuda</a>
        </div>

        {/* Lupa — solo desktop */}
        <button className="search-nav-btn search-nav-desktop" onClick={() => setSearchOpen(true)}>
          <i className="fas fa-search"></i>
        </button>

        {/* Grupo derecho mobile: lupa + hamburger */}
        <div className="navbar-actions">
          <button className="search-nav-btn" onClick={() => setSearchOpen(true)}>
            <i className="fas fa-search"></i>
          </button>
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
        </div>

        {/* Logo derecho — solo desktop */}
        <div className="logo logo-right">
          <img src="./img/ba_aprende.png" alt="Logo Buenos Aires Aprende" />
        </div>

      </div>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </nav>
  );
}