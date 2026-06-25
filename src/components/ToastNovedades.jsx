import { useState, useEffect } from 'react';
import './ToastNovedades.css';

// ── Novedades — editá este array para agregar novedades ──
const NOVEDADES = [
   {
    id: 3,
    titulo: 'Nuevos materiales didácticos',
    desc: 'Recursos actualizados disponibles en la sección de material didáctico',
    icon: 'fas fa-book-open',
    color: '#24a0a5',
  },
  {
    id: 4,
    titulo: 'Nueva aplicación: Futurizaje',
    desc: 'Explorá la nueva herramienta disponible en el Ecosistema Digital',
    icon: 'fas fa-rocket',
    color: '#F9B2FA',
  },
 //   {
//    id: 5,
//    titulo: 'Nueva funcionalidad: calificación de materiales',
//    desc: 'Ya podés valorar los recursos didácticos con estrellas para ayudarnos a mejorar.',
//    icon: 'fas fa-star',
//    color: '#f5a623',
//  },
  // {
  //   id: 1,
  //   titulo: 'Nuevos avatares disponibles',
  //   desc: 'Economía y Filosofía en Secundaria Aprende',
  //   icon: 'fas fa-robot',
  //   color: '#F9B2FA',
  //   fecha: 'Mayo 2026',
  // },
  // {
  //   id: 2,
  //   titulo: 'Biblioteca Ticmas integrada',
  //   desc: 'Recursos educativos digitales disponibles',
  //   icon: 'fas fa-book',
  //   color: '#24a0a5',
  //   fecha: 'Abril 2026',
  // },
];

const STORAGE_KEY = 'ecosistema_novedades_vistas';

export function ToastNovedades() {
  const [visible, setVisible] = useState(false);
  const [cerrado, setCerrado] = useState(false);
  const [expandido, setExpandido] = useState(false);

  useEffect(() => {
    if (NOVEDADES.length === 0) return;

    const vistas = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    const hayNuevas = NOVEDADES.some(n => !vistas.includes(n.id));

    if (hayNuevas) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

 const cerrarUna = () => {
  setCerrado(true);
  // No guarda en localStorage — vuelve a aparecer en la próxima visita
};

const cerrarTodo = () => {
  setCerrado(true);
  const ids = NOVEDADES.map(n => n.id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids)); // guarda permanentemente
};

  if (!visible || cerrado || NOVEDADES.length === 0) return null;

  const primera = NOVEDADES[0];
  const resto   = NOVEDADES.length - 1;

  return (
    <div className="toast-wrapper">

      {/* Notificación principal */}
      <div className="toast-item">
        <div className="toast-icon" style={{ color: primera.color }}>
          <i className={primera.icon} aria-hidden="true"></i>
        </div>
        <div className="toast-content">
          <p className="toast-titulo">{primera.titulo}</p>
          <p className="toast-desc">{primera.desc}</p>
        </div>
        <button className="toast-close" onClick={cerrarUna} aria-label="Cerrar notificación">
          <i className="fas fa-times" aria-hidden="true"></i>
        </button>
      </div>

      {/* Contador de novedades restantes */}
      {resto > 0 && !expandido && (
        <div className="toast-more">
          <span>{resto} novedad{resto > 1 ? 'es' : ''} más</span>
          <button onClick={() => setExpandido(true)}>Ver todas</button>
        </div>
      )}

      {/* Novedades expandidas */}
      {expandido && NOVEDADES.slice(1).map(n => (
        <div className="toast-item" key={n.id}>
          <div className="toast-icon" style={{ color: n.color }}>
            <i className={n.icon} aria-hidden="true"></i>
          </div>
          <div className="toast-content">
            <p className="toast-titulo">{n.titulo}</p>
            <p className="toast-desc">{n.desc}</p>
          </div>
        </div>
      ))}

      {/* Botón no mostrar más */}
      <button className="toast-dismiss" onClick={cerrarTodo}>
        No mostrar más
      </button>

    </div>
  );
}
