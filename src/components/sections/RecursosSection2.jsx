import { useState, useEffect, useCallback, useRef } from 'react';
import './RecursosSection2.css';
import { BibliotecaCard } from './BibliotecaCard';

const PAGE_SIZE = 4;

function normalize(str) {
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function splitValues(value) {
  if (!value) return [];
  return value.split(',').map(v => v.trim()).filter(Boolean);
}

function matchesFilter(resourceValue, filterSet) {
  if (filterSet.size === 0) return true;
  return splitValues(resourceValue).some(v => filterSet.has(v));
}

// ── Resource Card ────────────────────────────────
function ResourceCard({ resource }) {
  return (
    <div className="resource-card">
      <div className="resource-header">
        <span className="resource-level">{resource.level}</span>
        <h3 className="resource-title">{resource.title}</h3>
      </div>
      <div className="resource-meta">
        <p className="resource-description">{resource.description}</p>
        <div className="resource-tags">
          <span className="tag category">{resource.category}</span>
          <span className="tag subject">{resource.subject}</span>
          {resource.mode && <span className="tag mode">{resource.mode}</span>}
          {resource.tags?.map(t => <span className="tag" key={t}>{t}</span>)}
        </div>
      </div>
      <div className="resource-actions">
        <button className="btn-view-pdf" onClick={() => window.open(resource.url, '_blank')}>
          Ver material
        </button>
      </div>
    </div>
  );
}

// ── Chips ─────────────────────────────────────────
function Chips({ values, activeSet, filterType, extraClass, onToggle }) {
  return (
    <div className="chips-container">
      {values.map(v => (
        <div
          key={v}
          className={`chip ${extraClass} ${activeSet.has(v) ? 'active' : ''}`}
          onClick={() => onToggle(filterType, v)}
        >
          {v}
        </div>
      ))}
    </div>
  );
}

// ── Subject Dropdown ──────────────────────────────
function SubjectDropdown({ allSubjects, activeSubjects, onToggle }) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  const filtered = query
    ? allSubjects.filter(s => normalize(s).includes(normalize(query)))
    : allSubjects;

  useEffect(() => {
    const handleOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('click', handleOutside);
    return () => document.removeEventListener('click', handleOutside);
  }, []);

  return (
    <div className="subject-search-wrapper" ref={wrapperRef}>
      <input
        type="text"
        className="subject-search-input"
        placeholder="Buscar materia..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        onFocus={() => setOpen(true)}
        autoComplete="off"
      />
      <i className="fas fa-search subject-search-icon"></i>
      {open && (
        <div className="subject-dropdown open">
          {filtered.length === 0 ? (
            <div className="subject-dropdown-empty">Sin resultados</div>
          ) : (
            filtered.map(subject => (
              <div
                key={subject}
                className={`subject-dropdown-item ${activeSubjects.has(subject) ? 'selected' : ''}`}
                onClick={(e) => { e.stopPropagation(); onToggle('subject', subject); }}
              >
                <span className="item-check">{activeSubjects.has(subject) ? '✓' : ''}</span>
                <span>{subject}</span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

// ── Paginación ────────────────────────────────────
function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const getPages = () => {
    const pages = [];
    const delta = 2;
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        pages.push(i);
      }
    }
    const result = [];
    let prev = null;
    for (const page of pages) {
      if (prev && page - prev > 1) result.push('...');
      result.push(page);
      prev = page;
    }
    return result;
  };

  const handlePage = (page) => {
    onPageChange(page);
    //document.getElementById('recursos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pagination">
     <button
  className="pagination-btn"
  onClick={() => handlePage(currentPage - 1)}
  disabled={currentPage === 1}
>
  <i className="fas fa-chevron-left"></i>
</button>

      <div className="pagination-pages">
        {getPages().map((item, i) =>
          item === '...' ? (
            <span key={`e${i}`} className="pagination-ellipsis">…</span>
          ) : (
            <button
              key={item}
              className={`pagination-page${item === currentPage ? ' active' : ''}`}
              onClick={() => handlePage(item)}
            >
              {item}
            </button>
          )
        )}
      </div>

      <button
  className="pagination-btn"
  onClick={() => handlePage(currentPage + 1)}
  disabled={currentPage === totalPages}
>
  <i className="fas fa-chevron-right"></i>
</button>
    </div>
  );
}

// ── Componente principal ──────────────────────────
export function RecursosSection() {
  const [resources, setResources]         = useState([]);
  const [filtered, setFiltered]           = useState([]);
  const [currentPage, setCurrentPage]     = useState(1);
  const [searchQuery, setSearchQuery]     = useState('');
  const [loading, setLoading]             = useState(true);
  const [error, setError]                 = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    level: new Set(), category: new Set(), subject: new Set(), mode: new Set(),
  });

  const allLevels     = [...new Set(resources.flatMap(r => splitValues(r.level)))].sort();
  const allCategories = [...new Set(resources.flatMap(r => splitValues(r.category)))].sort();
  const allModes      = [...new Set(resources.flatMap(r => splitValues(r.mode)).filter(Boolean))].sort();
  const allSubjects   = [...new Set(resources.flatMap(r => splitValues(r.subject)))].sort();

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const start      = (currentPage - 1) * PAGE_SIZE;
  const rendered   = filtered.slice(start, start + PAGE_SIZE);

  // Carga JSON
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}resources.json`)
      .then(r => { if (!r.ok) throw new Error(); return r.json(); })
      .then(data => { setResources(data); setFiltered(data); setLoading(false); })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  // Filtros
  useEffect(() => {
    const q = normalize(searchQuery.trim());
    const hasFilters = Object.values(activeFilters).some(s => s.size > 0);
    let result = resources;

    if (hasFilters) {
      result = result.filter(r =>
        matchesFilter(r.level, activeFilters.level) &&
        matchesFilter(r.category, activeFilters.category) &&
        matchesFilter(r.subject, activeFilters.subject) &&
        matchesFilter(r.mode, activeFilters.mode)
      );
    }

    if (q) {
      result = result.filter(r =>
        normalize(r.title).includes(q) ||
        normalize(r.description).includes(q) ||
        normalize(r.subject).includes(q) ||
        r.tags?.some(t => normalize(t).includes(q))
      );
    }

    setFiltered(result);
    setCurrentPage(1);
  }, [resources, searchQuery, activeFilters]);

  const toggleFilter = useCallback((type, value) => {
    setActiveFilters(prev => {
      const newSet = new Set(prev[type]);
      newSet.has(value) ? newSet.delete(value) : newSet.add(value);
      return { ...prev, [type]: newSet };
    });
  }, []);

  const resetFilters = () => {
    setActiveFilters({ level: new Set(), category: new Set(), subject: new Set(), mode: new Set() });
    setSearchQuery('');
    setCurrentPage(1);
  };

  const hasActiveFilters = Object.values(activeFilters).some(s => s.size > 0);
  const allActiveTags = [
    ...Array.from(activeFilters.level).map(v    => ({ type: 'level',    value: v })),
    ...Array.from(activeFilters.category).map(v => ({ type: 'category', value: v })),
    ...Array.from(activeFilters.subject).map(v  => ({ type: 'subject',  value: v })),
    ...Array.from(activeFilters.mode).map(v     => ({ type: 'mode',     value: v })),
  ];

  return (
      <section id="recursos" className="recursos-section">

    {/* Encabezado */}
    <div className="container">
      <div className="recursos-header">
        <h2 className="recursos-title">Material didáctico</h2>
        <p className="recursos-desc">
          Para explorar el material didáctico, utilizá los filtros por año, nivel, espacio,
          materia y modalidad; luego, simplemente seleccioná el recurso, previsualizalo,
          vinculalo a tu aula virtual y adaptalo a las necesidades de tus estudiantes.
        </p>
      </div>
    </div>
     

    {/* Filtros — ocupa todo el ancho */}
    <div className="filters-section-full">
      <div className="container">
       {/*} <BibliotecaCard /> */}

        <div className="global-search-bar">
          <div className="global-search-wrapper">
            <i className="fas fa-search global-search-icon"></i>
            <input
              type="text"
              className="global-search-input"
              placeholder="Buscar recurso..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              autoComplete="off"
            />
            {searchQuery && (
              <button className="global-search-clear" onClick={() => setSearchQuery('')}>
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>
        </div>

        <div className="filters-header">
          <h2 className="filters-title">
            <i className="fas fa-filter"></i> Filtros
          </h2>
          <button className="reset-filters-btn" onClick={resetFilters}>
            <i className="fas fa-redo"></i> Limpiar
          </button>
        </div>

        <div className="filters-content">
          <div className="filter-categories">
            <div className="filter-category">
              <div className="filter-category-title">Nivel:</div>
              <Chips values={allLevels} activeSet={activeFilters.level} filterType="level" extraClass="" onToggle={toggleFilter} />
            </div>
            <div className="filter-category">
              <div className="filter-category-title">Espacio:</div>
              <Chips values={allCategories} activeSet={activeFilters.category} filterType="category" extraClass="category-chip" onToggle={toggleFilter} />
            </div>
            <div className="filter-category">
              <div className="filter-category-title">Materia:</div>
              <SubjectDropdown allSubjects={allSubjects} activeSubjects={activeFilters.subject} onToggle={toggleFilter} />
            </div>
            <div className="filter-category">
              <div className="filter-category-title">Modalidad:</div>
              <Chips values={allModes} activeSet={activeFilters.mode} filterType="mode" extraClass="mode-chip" onToggle={toggleFilter} />
            </div>
          </div>
        </div>

        {allActiveTags.length > 0 && (
          <div className="filters-footer">
            <div className="active-filter-tags">
              {allActiveTags.map(f => (
                <div key={f.type + f.value} className="active-filter-tag">
                  {f.value}
                  <span className="remove-filter" onClick={() => toggleFilter(f.type, f.value)}>×</span>
                </div>
              ))}
            </div>
            <div className="results-count">{filtered.length} de {resources.length} recursos</div>
          </div>
        )}
        {!hasActiveFilters && !searchQuery && (
          <div className="results-count-simple">{resources.length} recursos</div>
        )}

      </div>
    </div>

    {/* Grid de recursos */}
    <div className="container">
      {loading && <div className="recursos-loading"><p>Cargando recursos...</p></div>}
      {error && (
        <div className="recursos-error">
          <h3>⚠️ Error al cargar los recursos</h3>
          <p>Por favor, recargá la página.</p>
        </div>
      )}
      {!loading && !error && rendered.length === 0 && (
        <div className="no-results">
          <h3>No se encontraron resultados</h3>
          <p>Intentá ajustar tus filtros de búsqueda.</p>
        </div>
      )}
      {!loading && !error && rendered.length > 0 && (
        <>
          <div className="resources-grid">
            {rendered.map(r => <ResourceCard key={r.id} resource={r} />)}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>

  </section>
  );
}
