// ── Índice de búsqueda global ─────────────────────
// Cada item tiene: id, title, desc, type, route, section

import { AVATAR_CATEGORIES } from './avatars';
import { APPS } from './apps';

// Videos de docentes
const VIDEOS_DOCENTES = [
  { id: 'v1', title: 'Conocé el Ecosistema Digital para la innovación', desc: 'Conocé de qué se trata el Ecosistema Digital para la innovación.' },
  { id: 'v2', title: '¿Cómo crear un asistente personalizado con IA para planificar tus clases?', desc: 'Paso a paso para crear tu asistente.' },
  { id: 'v3', title: '¿Cómo potenciar tu entorno digital de trabajo?', desc: 'Posibilidades para potenciar tus herramientas digitales.' },
  { id: 'v4', title: '¿Cómo invitar a estudiantes a nuestra clase?', desc: 'Tutorial para sumar estudiantes al aula digital.' },
  { id: 'v5', title: '¿Cómo corregir tareas en tu aula virtual?', desc: 'Configuración de tareas en Classroom.' },
  { id: 'v6', title: '¿Cómo crear hojas de ruta y cronogramas con IA?', desc: 'Guía paso a paso.' },
  { id: 'v7', title: '¿Cómo crear un asistente de planificación con IA?', desc: 'Tutorial para crear Gemas personalizadas.' },
  { id: 'v8', title: '¿Cómo copiar una clase y reutilizar tareas?', desc: 'Reutilizá tareas, clases y optimizá el tiempo.' },
  { id: 'v9', title: 'Conocé la IA para crear rúbricas de evaluación', desc: 'Cómo crear rúbricas con IA.' },
  { id: 'v10', title: 'IA para planificar', desc: 'Herramienta con IA para planificar tus trabajo/clases.' },
  { id: 'v11', title: 'Bialfabetización potenciada por IA', desc: 'La IA potencia el Plan de Bialfabetización.' },
  { id: 'v12', title: '¿Qué es un aula digital?', desc: 'El entorno del aula digital y cómo funciona.' },
  { id: 'v13', title: 'Introducción a la herramienta de IA', desc: 'Cómo funciona y sus potencialidades.' },
  { id: 'v14', title: '¿Conocías esta herramienta de IA para la organización e investigación?', desc: 'De qué se trata esta herramienta y cómo funciona.' },
  { id: 'v15', title: '¿Qué es Khanmigo?', desc: 'Cómo funciona Khanmigo.' },
  { id: 'v16', title: '¿Qué es Khan Academy?', desc: 'Las potencialidades de Khan Academy.' },
];

// Videos de familias
const VIDEOS_FAMILIAS = [
  { id: 'vf1', title: '¿Qué es el bienestar digital?', desc: 'Profundizá el concepto de bienestar digital.' },
  { id: 'vf2', title: '¿Cómo acompañar a los niños en entornos digitales?', desc: '¿Qué es el bienestar digital?' },
  { id: 'vf3', title: 'IA en casa y en la escuela', desc: 'Cómo se aborda la IA en la escuela y en el hogar.' },
];

// Construir índice
export function buildSearchIndex() {
  const index = [];

  // Avatares
  AVATAR_CATEGORIES.forEach(cat => {
    cat.avatars.forEach(avatar => {
      index.push({
        id: `avatar-${avatar.label}`,
        title: avatar.label,
        desc: `Avatar de ${cat.title}`,
        type: 'avatar',
        route: '/',
        section: 'avatares',
        icon: 'fas fa-robot',
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
      desc: v.desc,
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
      desc: v.desc,
      type: 'video',
      route: '/familias',
      section: 'videos-familias',
      icon: 'fas fa-play-circle',
    });
  });

  return index;
}

// Etiquetas por tipo
export const TYPE_LABELS = {
  avatar: 'Avatar',
  app: 'Aplicación',
  video: 'Video',
  recurso: 'Material',
};

export const TYPE_COLORS = {
  avatar:  '#24a0a5',
  app:     '#4A487A',
  video:   '#f18489',
  recurso: '#e67e22',
};
