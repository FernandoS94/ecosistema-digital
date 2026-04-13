import './DocumentosSection.css';

const DOCUMENTOS = [
  {
    id: 1,
    href: 'https://drive.google.com/file/d/1h1Yc61pKIqzXapal6RJ_SFSjwHPJdl91/view',
    iconClass: 'doc-icon-wrap--infografia',
    icon: 'fas fa-image',
    badge: 'Lectura',
    badgeClass: 'doc-badge--infografia',
    title: 'Guía de Protección Digital Infantil',
    desc: 'Compartimos algunas recomendaciones que pueden ayudarte a proteger a tus hijos en los entornos digitales.',
  },
  {
    id: 2,
    href: 'https://buenosaires.gob.ar/gcaba_historico/educacion/familias/familias-en-comunidad',
    iconClass: 'doc-icon-wrap--otro',
    icon: 'fas fa-link',
    badge: 'Web',
    badgeClass: 'doc-badge--otro',
    title: 'Escuela en familia',
    desc: 'Accedé a la oferta de talleres virtuales para acompañar la crianza y las trayectorias escolares de los chicos.',
  },
  // Para agregar un nuevo documento, copiá este bloque y completá los datos:
  // {
  //   id: 3,
  //   href: 'https://...',
  //   iconClass: 'doc-icon-wrap--pdf',       // opciones: doc-icon-wrap--pdf | doc-icon-wrap--infografia | doc-icon-wrap--otro
  //   icon: 'fas fa-file-pdf',               // ícono de Font Awesome
  //   badge: 'PDF',                          // texto del badge
  //   badgeClass: 'doc-badge--pdf',          // opciones: doc-badge--pdf | doc-badge--infografia | doc-badge--otro
  //   title: 'Título del documento',
  //   desc: 'Descripción breve del contenido.',
  // },
];

export function DocumentosSection() {
  return (
    <section id="documentos" className="docs-section">
      <h2>Documentos</h2>
      <p className="docs-intro">
       
      </p>

      <div className="docs-grid">
        {DOCUMENTOS.map((doc) => (
          <a
            key={doc.id}
            href={doc.href}
            target="_blank"
            rel="noreferrer"
            className="doc-card"
          >
            <div className={`doc-icon-wrap ${doc.iconClass}`}>
              <i className={doc.icon}></i>
            </div>
            <div className="doc-content">
              <span className={`doc-badge ${doc.badgeClass}`}>{doc.badge}</span>
              <h3>{doc.title}</h3>
              <p>{doc.desc}</p>
            </div>
            <div className="doc-arrow">
              <i className="fas fa-arrow-right"></i>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
