import './VideosSection.css';

const VIDEOS = [
  {
    id: 1,
    url: 'https://www.youtube.com/embed/jZ51YyQFiK0?si=e0W_ryOPVVq5lyyq',
    title: 'Conocé el Ecosistema Digital para la innovación',
    desc: 'En este video podrá conocer de qué se trata el Ecosistema Digital para la innovación.',
  },
  {
    id: 2,
    url: 'https://www.youtube.com/embed/tG1RtI9Vq4g?si=9CaP6OC9My47BWee',
    title: '¿Cómo crear un asistente personalizado con IA para planificar tus clases?',
    desc: 'En este video te explicamos paso a paso para crearlo.',
  },
  {
    id: 3,
    url: 'https://www.youtube.com/embed/kLXKp_Z0xnE?si=LLrxLb2T9UArpG5s',
    title: '¿Cómo potenciar tu entorno digital de trabajo?',
    desc: 'Conocé las posibilidades para potenciar tus herramientas digitales.',
  },
  {
    id: 4,
    url: 'https://www.youtube.com/embed/axETzvL7l7c?si=iReVh5JmR3Mjh-YM',
    title: '¿Cómo invitar a estudiantes a nuestra clase?',
    desc: 'El siguiente tutorial te guía paso a paso para sumar a tus estudiantes al aula digital.',
  },
  {
    id: 5,
    url: 'https://www.youtube.com/embed/zza_s6ah8cs?si=7pOB3W9TKGRfDAKB',
    title: '¿Cómo corregir tareas en tu aula virtual?',
    desc: 'En este video podrás acceder a la configuración de tareas en Classroom.',
  },
  {
    id: 6,
    url: 'https://www.youtube.com/embed/CnnFwh0vPkY?si=k1sp2QvMTu_qQnfK',
    title: '¿Cómo crear hojas de ruta y cronogramas con IA?',
    desc: 'En este video encontrarás una guía paso a paso.',
  },
  {
    id: 7,
    url: 'https://www.youtube.com/embed/P8qU_1WWOIg?si=Hzi1fDv_GSeez4kn',
    title: '¿Cómo crear un asistente de planificación con IA?',
    desc: 'Accedé a esta guía en formato tutorial para crear Gemas personalizadas.',
  },
  {
    id: 8,
    url: 'https://www.youtube.com/embed/NCBTIQ3rKgU?si=znoBVKigjKbn0dYu',
    title: '¿Cómo copiar una clase y reutilizar tareas?',
    desc: 'Este video te guiará para reutilizar tareas, clases y optimizar el tiempo.',
  },
  {
    id: 9,
    url: 'https://www.youtube.com/embed/ZtzELSMulYc?si=R9VqfPosqQLe_zww',
    title: 'Conocé la IA para crear rúbricas de evaluación',
    desc: 'Conocé como crear rúbricas con IA.',
  },
  {
    id: 10,
    url: 'https://www.youtube.com/embed/qNupmww7IwA?si=rJgY452U2IYGGlf9',
    title: 'IA para planificar',
    desc: 'Conocé esta herramienta con IA para planificar tus trabajo/clases.',
  },
  {
    id: 11,
    url: 'https://www.youtube.com/embed/hMalaXzdRb8?si=WAKL84KqJ56mnBu_',
    title: 'Bialfabetización potenciada por IA',
    desc: 'Conocé de qué manera la IA potencia el Plan de Bialfabetización.',
  },
  {
    id: 12,
    url: 'https://www.youtube.com/embed/L6RJ-gpAROE?si=y6hxgicQqxYotQu3',
    title: '¿Qué es un aula digital?',
    desc: 'En este video conocerás el entorno del aula digital y cómo funciona.',
  },
  {
    id: 13,
    url: 'https://www.youtube.com/embed/EcfmsklVV-8?si=c26UaPIPxRA4BB-C',
    title: 'Introducción a la herramienta de IA',
    desc: 'En este video podrás conocer cómo funciona y cuales son sus potencialidades.',
  },
  {
    id: 14,
    url: 'https://www.youtube.com/embed/-jtBN6_VsK4?si=SKGj7iLgHa9wYOem',
    title: '¿Conocías esta herramienta de IA para la organización e investigación?',
    desc: 'En este video conocerás de qué se trata esta herramienta y cómo funciona.',
  },
  {
    id: 15,
    url: 'https://www.youtube.com/embed/yJ8fpSxSzP8?si=yOnXvo55jUxX4PVS',
    title: '¿Qué es Khanmigo?',
    desc: 'En este video conocerás cómo funciona Khanmigo.',
  },
  {
    id: 16,
    url: 'https://www.youtube.com/embed/M81Aez7PJX0?si=GWGzdGDVgqhszb0y',
    title: '¿Qué es Khan Academy?',
    desc: 'En este video conocerás las potencialidades de Khan Academy.',
  },
];

function VideoCard({ url, title, desc }) {
  return (
    <div className="video-card">
      <div className="video-frame">
        <iframe src={url} allowFullScreen title={title} />
      </div>
      <div className="video-content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export function VideosSection() {
  return (
    <section id="videos" className="videos-section">
      <h2>Videos tutoriales</h2>
      <p>
       
      </p>
      <div className="videos-grid">
        {VIDEOS.map((video) => (
          <VideoCard key={video.id} url={video.url} title={video.title} desc={video.desc} />
        ))}
      </div>
    </section>
  );
}
