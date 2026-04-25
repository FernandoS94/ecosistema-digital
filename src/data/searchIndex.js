// ── Índice de búsqueda global ─────────────────────

import { AVATAR_CATEGORIES } from './avatars';
import { APPS } from './apps';

// Videos de docentes
const VIDEOS_DOCENTES = [
  { id: 'vd1',  title: 'Conocé el ecosistema digital' },
  { id: 'vd2',  title: 'Creá un asistente para planificar clases' },
  { id: 'vd3',  title: 'Mejorá tu entorno digital de trabajo' },
  { id: 'vd4',  title: 'Invitá estudiantes a tu clase' },
  { id: 'vd5',  title: 'Corregí tareas en el aula virtual' },
  { id: 'vd6',  title: 'Creá cronogramas con IA' },
  { id: 'vd7',  title: 'Adaptá contenidos para la inclusión' },
  { id: 'vd8',  title: 'Reutilizá clases y tareas' },
  { id: 'vd9',  title: 'Creá rúbricas con IA' },
  { id: 'vd10', title: 'Planificar con IA' },
  { id: 'vd13', title: 'Introducción a la IA' },
  { id: 'vd14', title: 'Organizar e investigar con IA' },
];

// Videos de familias
const VIDEOS_FAMILIAS = [
  { id: 'vf1', title: '¿Qué es el bienestar digital?' },
  { id: 'vf2', title: '¿Cómo acompañar a los niños en entornos digitales?' },
  { id: 'vf3', title: 'IA en casa y en la escuela' },
];

// Documentos de familias
const DOCUMENTOS_FAMILIAS = [
  { id: 'df1', title: 'Guía de Protección Digital Infantil', desc: 'Documento - Recomendaciones para proteger a tus hijos en entornos digitales.' },
  { id: 'df2', title: 'Escuela en familia', desc: 'Documento - Talleres virtuales para acompañar la crianza y las trayectorias escolares.' },
  {id:'df3', title:'Mapa de riesgos digitales en el entorno escolar', desc:'Documento - Infografía que presenta los riesgos digitales en el entorno escolar.'}
];

// Páginas principales
const PAGES = [
  { id: 'p1', title: 'Inicio',                   desc: 'Página principal del Ecosistema Digital',           route: '/',                              section: 'about',      icon: 'fas fa-home' },
  { id: 'p2', title: 'Docentes',                  desc: 'Recursos y materiales para docentes',               route: '/docentes',                       section: null,         icon: 'fas fa-chalkboard-teacher' },
  { id: 'p3', title: 'Docentes Secundaria Aprende', desc: 'Materiales, avatares y recursos para secundaria', route: '/docentes-secundaria-aprende',    section: null,         icon: 'fas fa-school' },
  { id: 'p4', title: 'Familias',                  desc: 'Recursos y videos para familias',                   route: '/familias',                       section: null,         icon: 'fas fa-users' },
  { id: 'p5', title: 'Avatares',                  desc: 'Asistentes pedagógicos con IA por materia',          route: '/docentes-secundaria-aprende',   section: 'avatares', icon: 'fas fa-robot' },
  { id: 'p6', title: 'Aplicaciones',              desc: 'Apps del ecosistema digital',                       route: '/',                              section: 'apps',       icon: 'fas fa-th-large' },
  { id: 'p7', title: 'Preguntas frecuentes',      desc: 'Ayuda y preguntas frecuentes',                      route: '/',                              section: 'faq',        icon: 'fas fa-question-circle' },
  { id: 'p8', title: 'Material didáctico',        desc: 'Recursos didácticos por nivel, espacio y materia',  route: '/docentes-secundaria-aprende',   section: 'recursos',   icon: 'fas fa-book' },
  { id: 'p9', title: 'Videos tutoriales',         desc: 'Tutoriales en video para docentes',                 route: '/docentes',                      section: 'videos',     icon: 'fas fa-play-circle' },
  { id: 'p10', title: 'Docente GEM',              desc: 'Creá tu propio asistente de planificación con IA',  route: '/docentes',                      section: null,         icon: 'fas fa-star' },
];

export function buildSearchIndex() {
  const index = [...PAGES];

  // Avatares
 AVATAR_CATEGORIES.forEach(cat => {
  cat.avatars.forEach(avatar => {
    index.push({
      id: `avatar-${avatar.label}`,
      title: avatar.label,
      desc: `Avatar de ${cat.title}`,
      type: 'avatar',
      route: '/docentes-secundaria-aprende',
      section: 'avatares',
      icon: 'fas fa-robot',
      href: avatar.href,  // ← agregá esto
    });
  });
});

  // Apps
  APPS.forEach(app => {
    index.push({
      id: `app-${app.id}`,
      title: app.name,
      desc: app.description,
      type: 'app',
      route: '/',
      section: 'apps',
      icon: 'fas fa-th-large',
    });
  });

  // Videos docentes
  VIDEOS_DOCENTES.forEach(v => {
    index.push({
      id: v.id,
      title: v.title,
      desc: 'Video tutorial para docentes',
      type: 'video',
      route: '/docentes',
      section: 'videos',
      icon: 'fas fa-play-circle',
    });
  });

  // Videos familias
  VIDEOS_FAMILIAS.forEach(v => {
    index.push({
      id: v.id,
      title: v.title,
      desc: 'Video educativo para familias',
      type: 'video',
      route: '/familias',
      section: 'videos-familias',
      icon: 'fas fa-play-circle',
    });
  });

  // Documentos familias
  DOCUMENTOS_FAMILIAS.forEach(d => {
    index.push({
      id: d.id,
      title: d.title,
      desc: d.desc,
      type: 'documento',
      route: '/familias',
      section: 'documentos',
      icon: 'fas fa-file-alt',
    });
  });

  return index;
}

export const TYPE_LABELS = {
  avatar:    'Avatar',
  app:       'Aplicación',
  video:     'Video',
  documento: 'Documento',
};

export const TYPE_COLORS = {
  avatar:    '#24a0a5',
  app:       '#4A487A',
  video:     '#f18489',
  documento: '#e67e22',
};
