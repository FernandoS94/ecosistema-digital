import './VideosGrid.css';

const VIDEO_CATEGORIES = [
  {
    id: 1,
    label: 'Conocé el ecosistema digital',
    url: 'https://www.youtube.com/watch?v=jZ51YyQFiK0',
    colorClass: 'vg-purple',
  },
  {
    id: 2,
    label: 'Creá un asistente para planificar clases',
    url: 'https://www.youtube.com/watch?v=tG1RtI9Vq4g',
    colorClass: 'vg-teal',
  },
  {
    id: 3,
    label: 'Mejorá tu entorno digital de trabajo',
    url: 'https://www.youtube.com/watch?v=kLXKp_Z0xnE',
    colorClass: 'vg-purple',
  },
  {
    id: 4,
    label: ' Invitá estudiantes a tu clase',
    url: 'https://www.youtube.com/watch?v=axETzvL7l7c',
    colorClass: 'vg-slate',
  },
  {
    id: 5,
    label: 'Corregí tareas en el aula virtual',
    url: 'https://www.youtube.com/watch?v=zza_s6ah8cs',
    colorClass: 'vg-teal',
  },
  {
    id: 6,
    label: 'Creá cronogramas con IA',
    url: 'https://www.youtube.com/watch?v=CnnFwh0vPkY',
    colorClass: 'vg-purple',
  },
  {
    id: 7,
    label: 'Asistente de planificación con IA',
    url: 'https://www.youtube.com/watch?v=P8qU_1WWOIg',
    colorClass: 'vg-olive-dark',
  },
  {
    id: 8,
    label: 'Reutilizá clases y tareas',
    url: 'https://www.youtube.com/watch?v=NCBTIQ3rKgU',
    colorClass: 'vg-purple',
  },
  {
    id: 9,
    label: ' Creá rúbricas con IA',
    url: 'https://www.youtube.com/watch?v=ZtzELSMulYc',
    colorClass: 'vg-olive-dark',
  },
  {
    id: 10,
    label: 'Planificar con IA',
    url: 'https://www.youtube.com/watch?v=qNupmww7IwA',
    colorClass: 'vg-teal',
  },
 
 
  {
    id: 13,
    label: 'Introducción a la IA',
    url: 'https://www.youtube.com/watch?v=EcfmsklVV-8',
    colorClass: 'vg-slate',
  },
  {
    id: 14,
    label: 'Organizar e investigar con IA',
    url: 'https://www.youtube.com/watch?v=-jtBN6_VsK4',
    colorClass: 'vg-olive-dark',
  },
 
];

/*
 {
    id: 11,
    label: 'Bialfabetización potenciada por IA',
    url: 'https://www.youtube.com/watch?v=hMalaXzdRb8',
    colorClass: 'vg-purple',
  },
   {
    id: 15,
    label: 'Khanmigo',
    url: 'https://www.youtube.com/watch?v=yJ8fpSxSzP8',
    colorClass: 'vg-slate',
  },
  {
    id: 16,
    label: 'Khan Academy',
    url: 'https://www.youtube.com/watch?v=M81Aez7PJX0',
    colorClass: 'vg-teal',
  },
   {
    id: 12,
    label: 'Aula digital',
    url: 'https://www.youtube.com/watch?v=L6RJ-gpAROE',
    colorClass: 'vg-olive-dark',
  },

const VIDEO_CATEGORIES = [
  { id: 1, label: '', url: '', colorClass: 'vg-purple' },
  { id: 2, label: '', url: '', colorClass: 'vg-teal' },
  { id: 3, label: '', url: '', colorClass: 'vg-olive' },
  { id: 4, label: '', url: '', colorClass: 'vg-slate' },
  { id: 5, label: '', url: '', colorClass: 'vg-teal' },
  { id: 6, label: '', url: '', colorClass: 'vg-purple' },
  { id: 7, label: '', url: '', colorClass: 'vg-olive-dark' },
  { id: 8, label: '', url: '', colorClass: 'vg-purple' },
  { id: 9, label: '', url: '', colorClass: 'vg-yellow' },
  { id: 10, label: '', url: '', colorClass: 'vg-teal' },
  { id: 11, label: '', url: '', colorClass: 'vg-purple' },
  { id: 12, label: '', url: '', colorClass: 'vg-olive' },
  { id: 13, label: '', url: '', colorClass: 'vg-slate' },
  { id: 14, label: '', url: '', colorClass: 'vg-olive-dark' },
  { id: 15, label: '', url: '', colorClass: 'vg-yellow' },
  { id: 16, label: '', url: '', colorClass: 'vg-teal' },
];*/

export function VideosGrid() {
  return (
    <section id="videos" className="videos-grid-section">
      <div className="videos-grid-container">
        <h2 className="videos-grid-title">Videos tutoriales</h2>
        <p className="videos-grid-desc">
        {/*  Explorá nuestra colección de tutoriales. Hacé click en cualquier botón para ver el video en YouTube.*/}
        </p>
        <div className="videos-grid-buttons">
          {VIDEO_CATEGORIES.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className={`vg-btn ${item.colorClass}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
