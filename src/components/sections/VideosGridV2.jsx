import { useState } from 'react';
import './VideosGridV2.css';

const VIDEOS = [
  // ── FUNDAMENTOS ──
  { id: 13, label: 'Introducción a la IA', url: 'https://www.youtube.com/watch?v=EcfmsklVV-8', color: 'v-teal' },
  { id: 1, label: 'Conocé el Ecosistema Digital', url: 'https://www.youtube.com/watch?v=jZ51YyQFiK0', color: 'v-coral' },
  { id: 15, label: 'Futurizaje', url: 'https://www.youtube.com/watch?v=WW3oKrQ7AZI', color: 'v-violeta' },

  // ── PLANIFICACIÓN ──
  { id: 2, label: 'Creá un asistente para planificar clases', url: 'https://www.youtube.com/watch?v=tG1RtI9Vq4g', color: 'v-teal' },
  { id: 10, label: 'Planificar con IA', url: 'https://www.youtube.com/watch?v=qNupmww7IwA', color: 'v-coral' },
  { id: 6, label: 'Creá cronogramas con IA', url: 'https://www.youtube.com/watch?v=CnnFwh0vPkY', color: 'v-violeta' },

  // ── ORGANIZACIÓN Y CONTENIDOS ──
  { id: 3, label: 'Mejorá tu entorno digital de trabajo', url: 'https://www.youtube.com/watch?v=kLXKp_Z0xnE', color: 'v-teal' },
  { id: 14, label: 'Organizar e investigar con IA', url: 'https://www.youtube.com/watch?v=-jtBN6_VsK4', color: 'v-coral' },
  { id: 7, label: 'Adaptá contenidos para la inclusión', url: 'https://www.youtube.com/watch?v=P8qU_1WWOIg', color: 'v-violeta' },
  { id: 8, label: 'Reutilizá clases y tareas', url: 'https://www.youtube.com/watch?v=NCBTIQ3rKgU', color: 'v-teal' },

  // ── GESTIÓN DEL AULA ──
  { id: 4, label: 'Invitá estudiantes a tu clase', url: 'https://www.youtube.com/watch?v=axETzvL7l7c', color: 'v-coral' },
  { id: 5, label: 'Corregí tareas en el aula virtual', url: 'https://www.youtube.com/watch?v=zza_s6ah8cs', color: 'v-violeta' },

  // ── EVALUACIÓN ──
  { id: 9, label: 'Creá rúbricas con IA', url: 'https://www.youtube.com/watch?v=ZtzELSMulYc', color: 'v-teal' },
];

const VISIBLES_INICIAL = 6;

export function VideosGridV2() {
  const [expandido, setExpandido] = useState(false);

  const visibles = expandido ? VIDEOS : VIDEOS.slice(0, VISIBLES_INICIAL);
  const hayMas = VIDEOS.length > VISIBLES_INICIAL;

  return (
    <section id="videos" className="vg2-section">
      <div className="vg2-container">
        <div className="vg2-header">
          <h2 className="vg2-title">Videos tutoriales</h2>
         
        </div>

        <div className="vg2-grid">
          {visibles.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className={`vg2-item ${item.color}`}
            >
              
              <span className="vg2-item-label">{item.label}</span>
            </a>
          ))}
        </div>

        {hayMas && (
          <div className="vg2-more-wrap">
            <button className="vg2-more-btn" onClick={() => setExpandido((v) => !v)}>
              {expandido ? 'Ver menos' : `Ver todos (${VIDEOS.length})`}
              <i className={`fas fa-chevron-${expandido ? 'up' : 'down'}`}></i>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
