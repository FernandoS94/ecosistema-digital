import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { buildSearchIndex, TYPE_LABELS, TYPE_COLORS } from '../data/searchIndex';
import './SearchModal.css';

function normalize(str) {
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

const INDEX = buildSearchIndex();

export function SearchModal({ isOpen, onClose }) {
  const [query, setQuery]     = useState('');
  const [results, setResults] = useState([]);
  const inputRef              = useRef(null);
  const navigate              = useNavigate();

  // Foco al abrir
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  // ESC para cerrar
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  // Buscar
  useEffect(() => {
    if (!query.trim()) { setResults([]); return; }
    const q = normalize(query.trim());
    const found = INDEX.filter(item =>
      normalize(item.title).includes(q) ||
      normalize(item.desc || '').includes(q)
    ).slice(0, 20);
    setResults(found);
  }, [query]);

  const handleSelect = (item) => {
  onClose();
  if (item.href && item.href !== '#') {
    window.open(item.href, '_blank');
    return;
  }
  navigate(item.route);
  setTimeout(() => {
    if (!item.section) return;
    const el = document.getElementById(item.section);
    const navbar = document.querySelector('.navbar');
    if (el && navbar) {
      window.scrollTo({ top: el.offsetTop - navbar.offsetHeight, behavior: 'smooth' });
    }
  }, 600);
};

  if (!isOpen) return null;

  return (
    <div className="search-modal"
    onClick={onClose}
    >
    
      <div className="search-modal-content"
       onClick={(e) => e.stopPropagation()}
      >

        <div className="search-modal-input-wrap">
          <i className="fas fa-search search-modal-icon"></i>
          <input
            ref={inputRef}
            type="text"
            className="search-modal-input"
            placeholder="Buscar avatares, videos, materiales, apps..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoComplete="off"
          />
          {query && (
            <button className="search-modal-clear" onClick={() => setQuery('')}>
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>

        {query && (
          <div className="search-modal-results">
            {results.length === 0 ? (
              <div className="search-modal-empty">
                <i className="fas fa-search"></i>
                <p>No se encontraron resultados para <strong>"{query}"</strong></p>
              </div>
            ) : (
              <>
                <p className="search-modal-count">{results.length} resultado{results.length !== 1 ? 's' : ''}</p>
                {results.map(item => (
                  <div key={item.id} className="search-result-item" onClick={() => handleSelect(item)}>
                    <div
                      className="search-result-icon"
                      style={{ background: TYPE_COLORS[item.type] || '#24a0a5' }}
                    >
                      <i className={item.icon}></i>
                    </div>
                    <div className="search-result-text">
                      <span className="search-result-title">{item.title}</span>
                      {item.desc && <span className="search-result-desc">{item.desc}</span>}
                    </div>
                    {item.type && (
                      <span
                        className="search-result-badge"
                        style={{ color: TYPE_COLORS[item.type] || '#24a0a5' }}
                      >
                        {TYPE_LABELS[item.type]}
                      </span>
                    )}
                  </div>
                ))}
              </>
            )}
          </div>
        )}

        {!query && (
          <div className="search-modal-hint">
            <p>Escribí para buscar en todo el sitio</p>
            <div className="search-modal-tags">
              {['Avatar', 'IA', 'Videos', 'Material didáctico', 'Planificación', 'Familias'].map(tag => (
                <button key={tag} className="search-hint-tag" onClick={() => setQuery(tag)}>
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
