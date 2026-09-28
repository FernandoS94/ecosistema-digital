import { useState, useMemo, useEffect, useRef } from 'react';
import { PROYECTOS, GRADOS, CICLOS, TEMATICAS, AREAS } from '../../data/proyectos';
import './ProyectosBuscador.css';

const POR_PAGINA = 9;

function normalizar(str) {
  if (!str) return '';
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// Mapa de cada valor -> tipo de filtro (para saber de qué lista sacarlo al quitar el chip)
const TIPO_COLOR = {
  ciclo: 'chip-ciclo',
  grado: 'chip-grado',
  tematica: 'chip-tematica',
  area: 'chip-area',
};

export function ProyectosBuscador() {
  const [busqueda, setBusqueda] = useState('');
  const [fGrados, setFGrados] = useState([]);
  const [fCiclos, setFCiclos] = useState([]);
  const [fTematicas, setFTematicas] = useState([]);
  const [fAreas, setFAreas] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [abierto, setAbierto] = useState(null); // qué dropdown está abierto

  const contenedorRef = useRef(null);

  const toggle = (valor, lista, setLista) => {
    setLista(lista.includes(valor) ? lista.filter((v) => v !== valor) : [...lista, valor]);
  };

  const limpiar = () => {
    setBusqueda('');
    setFGrados([]); setFCiclos([]); setFTematicas([]); setFAreas([]);
  };

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handler = (e) => {
      if (contenedorRef.current && !contenedorRef.current.contains(e.target)) {
        setAbierto(null);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  const resultados = useMemo(() => {
    const q = normalizar(busqueda);
    return PROYECTOS.filter((p) => {
      if (q) {
        const texto = normalizar(p.titulo + ' ' + p.descripcion + ' ' + p.materias);
        if (!texto.includes(q)) return false;
      }
      if (fGrados.length && !fGrados.some((g) => p.grados.includes(g))) return false;
      if (fCiclos.length && !fCiclos.some((c) => p.ciclos.includes(c))) return false;
      if (fTematicas.length && !fTematicas.some((t) => p.tematicas.includes(t))) return false;
      if (fAreas.length && !fAreas.some((a) => p.areas.includes(a))) return false;
      return true;
    });
  }, [busqueda, fGrados, fCiclos, fTematicas, fAreas]);

  useEffect(() => { setPagina(1); }, [busqueda, fGrados, fCiclos, fTematicas, fAreas]);

  const totalPaginas = Math.ceil(resultados.length / POR_PAGINA) || 1;
  const desde = (pagina - 1) * POR_PAGINA;
  const visibles = resultados.slice(desde, desde + POR_PAGINA);

  const irPagina = (n) => {
    setPagina(n);
    const el = document.getElementById('proyectos');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Chips de todo lo seleccionado (para el resumen removible)
  const seleccionados = [
    ...fCiclos.map((v) => ({ v, tipo: 'ciclo', quitar: () => toggle(v, fCiclos, setFCiclos) })),
    ...fGrados.map((v) => ({ v, tipo: 'grado', quitar: () => toggle(v, fGrados, setFGrados) })),
    ...fTematicas.map((v) => ({ v, tipo: 'tematica', quitar: () => toggle(v, fTematicas, setFTematicas) })),
    ...fAreas.map((v) => ({ v, tipo: 'area', quitar: () => toggle(v, fAreas, setFAreas) })),
  ];

  return (
    <section className="proy-seccion" id="proyectos">
      <div className="proy-container">

        <div className="proy-head">
          <h2 className="proy-titulo">Proyectos educativos</h2>
          <p className="proy-sub">Explorá proyectos por grado, ciclo, temática o área curricular.</p>
        </div>

        {/* Buscador */}
        <div className="proy-search">
          <i className="fas fa-search proy-search-ico" aria-hidden="true"></i>
          <input
            type="text"
            className="proy-search-input"
            placeholder="Buscar por título, materia o palabra clave…"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          {busqueda && (
            <button className="proy-search-clear" onClick={() => setBusqueda('')} aria-label="Limpiar">
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>

        {/* Dropdowns de filtros */}
        <div className="proy-dropdowns" ref={contenedorRef}>
          <Dropdown
            titulo="Ciclo" opciones={CICLOS} sel={fCiclos}
            onToggle={(v) => toggle(v, fCiclos, setFCiclos)}
            abierto={abierto === 'ciclo'}
            onAbrir={() => setAbierto(abierto === 'ciclo' ? null : 'ciclo')}
          />
          <Dropdown
            titulo="Grado" opciones={GRADOS} sel={fGrados}
            onToggle={(v) => toggle(v, fGrados, setFGrados)}
            abierto={abierto === 'grado'}
            onAbrir={() => setAbierto(abierto === 'grado' ? null : 'grado')}
          />
          <Dropdown
            titulo="Temática" opciones={TEMATICAS} sel={fTematicas}
            onToggle={(v) => toggle(v, fTematicas, setFTematicas)}
            abierto={abierto === 'tematica'}
            onAbrir={() => setAbierto(abierto === 'tematica' ? null : 'tematica')}
          />
          <Dropdown
            titulo="Área curricular" opciones={AREAS} sel={fAreas}
            onToggle={(v) => toggle(v, fAreas, setFAreas)}
            abierto={abierto === 'area'}
            onAbrir={() => setAbierto(abierto === 'area' ? null : 'area')}
          />
        </div>

        {/* Resumen de seleccionados (chips removibles) */}
        {seleccionados.length > 0 && (
          <div className="proy-chips">
            <span className="proy-chips-label">Filtros:</span>
            {seleccionados.map((s, i) => (
              <span key={i} className={`proy-chip ${TIPO_COLOR[s.tipo]}`}>
                {s.v}
                <button onClick={s.quitar} aria-label={`Quitar ${s.v}`}>
                  <i className="fas fa-times"></i>
                </button>
              </span>
            ))}
            <button className="proy-chips-clear" onClick={limpiar}>Limpiar todo</button>
          </div>
        )}

        {/* Barra resultados */}
        <div className="proy-resultbar">
          <span className="proy-count">
            {resultados.length} {resultados.length === 1 ? 'proyecto' : 'proyectos'}
          </span>
        </div>

        {/* Resultados */}
        {resultados.length === 0 ? (
          <div className="proy-empty">
            <i className="fas fa-folder-open" aria-hidden="true"></i>
            <p>No se encontraron proyectos con estos criterios.</p>
          </div>
        ) : (
          <>
            <div className="proy-grid">
              {visibles.map((p, i) => <ProyectoCard key={desde + i} proyecto={p} />)}
            </div>

            {totalPaginas > 1 && (
              <div className="proy-paginacion">
                <button className="proy-pag-btn" onClick={() => irPagina(pagina - 1)} disabled={pagina === 1}>
                  <i className="fas fa-chevron-left"></i> <span>Anterior</span>
                </button>
                <div className="proy-pag-nums">
                  {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((n) => (
                    <button key={n} className={`proy-pag-num${n === pagina ? ' active' : ''}`} onClick={() => irPagina(n)}>
                      {n}
                    </button>
                  ))}
                </div>
                <button className="proy-pag-btn" onClick={() => irPagina(pagina + 1)} disabled={pagina === totalPaginas}>
                  <span>Siguiente</span> <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            )}
          </>
        )}

      </div>
    </section>
  );
}

/* Dropdown desplegable con checkboxes múltiples */
function Dropdown({ titulo, opciones, sel, onToggle, abierto, onAbrir }) {
  return (
    <div className={`proy-dd${abierto ? ' abierto' : ''}`}>
      <button className="proy-dd-toggle" onClick={onAbrir} aria-expanded={abierto}>
        <span>{titulo}</span>
        {sel.length > 0 && <span className="proy-dd-badge">{sel.length}</span>}
        <i className="fas fa-chevron-down proy-dd-chevron"></i>
      </button>
      {abierto && (
        <div className="proy-dd-menu">
          {opciones.map((op) => (
            <label key={op} className="proy-dd-opcion">
              <input
                type="checkbox"
                checked={sel.includes(op)}
                onChange={() => onToggle(op)}
              />
              <span>{op}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

function ProyectoCard({ proyecto }) {
  const [expandido, setExpandido] = useState(false);
  const desc = proyecto.descripcion || '';
  const cortada = desc.length > 220 && !expandido ? desc.slice(0, 220) + '…' : desc;

  return (
    <article className="proy-card">
      <div className="proy-card-tags">
        {proyecto.ciclos.map((c) => <span key={c} className="proy-tag tag-ciclo">{c}</span>)}
        {proyecto.grados.map((g) => <span key={g} className="proy-tag tag-grado">{g}</span>)}
        {proyecto.tematicas.map((t) => <span key={t} className="proy-tag tag-tematica">{t}</span>)}
      </div>
      <h3 className="proy-card-title">{proyecto.titulo}</h3>
      {proyecto.areas.length > 0 && (
        <p className="proy-card-areas">
          <i className="fas fa-book" aria-hidden="true"></i> {proyecto.areas.join(' · ')}
        </p>
      )}
      <p className="proy-card-desc">
        {cortada}
        {desc.length > 220 && (
          <button className="proy-card-vermas" onClick={() => setExpandido(!expandido)}>
            {expandido ? 'Ver menos' : 'Ver más'}
          </button>
        )}
      </p>
      <a href={proyecto.url} target="_blank" rel="noreferrer" className="proy-card-btn">
        <i className="fas fa-file-pdf" aria-hidden="true"></i> Abrir proyecto
      </a>
    </article>
  );
}
