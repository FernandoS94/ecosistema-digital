import { Link, useLocation } from 'react-router-dom';
import './Breadcrumb.css';

const RUTAS = {
  '/':                            [],
  '/docentes':                    [{ label: 'Docentes', path: '/docentes' }],
  '/familias':                    [{ label: 'Familias', path: '/familias' }],
  '/docentes-secundaria-aprende': [
    { label: 'Docentes', path: '/docentes' },
    { label: 'Secundaria Aprende', path: '/docentes-secundaria-aprende' },
  ],
};

export function Breadcrumb() {
   const location = useLocation();
  const pathname = location.pathname;
  const items = RUTAS[pathname];
    console.log('location:', location);
  console.log('pathname:', location.pathname);
  console.log('hash:', location.hash);
  console.log('items:', items);
console.log('items length:', items?.length);

  if (!items || items.length === 0) return null;
  console.log('RENDERIZANDO breadcrumb');

  return (
    <nav className="breadcrumb" aria-label="Navegación de ruta">
      <ol className="breadcrumb-list">
        <li className="breadcrumb-item">
          <Link to="/" className="breadcrumb-link">
            <i className="fas fa-home" aria-hidden="true"></i>
            <span>Inicio</span>
          </Link>
        </li>
        {items.map((item, i) => {
          const esUltimo = i === items.length - 1;
          return (
            <li key={item.path} className="breadcrumb-item">
              <i className="fas fa-chevron-right breadcrumb-sep" aria-hidden="true"></i>
              {esUltimo ? (
                <span className="breadcrumb-current">{item.label}</span>
              ) : (
                <Link to={item.path} className="breadcrumb-link">{item.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
