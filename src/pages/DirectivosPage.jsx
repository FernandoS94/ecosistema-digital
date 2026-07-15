import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './DirectivosPage.css';

import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../firebase';


function DirectivosHero() {
  return (
    <section className="directivos-hero">
      <h1 className="directivos-hero-title">Directivos</h1>
    </section>
  );
}
{/* */}
function DirectivosIntro() {
  return (
    <section className="directivos-intro">
      <div className="directivos-intro-container">
        <p className="directivos-intro-text">
          Explorá recursos y herramientas para acompañar a los equipos directivos en la incorporación de Inteligencia Artificial en las instituciones educativas.
        </p>
   {/*     <div className="directivos-intro-buttons">
          <a
            href="#notebooklm"
            className="directivos-intro-btn"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector('#notebooklm');
              const navbar = document.querySelector('.navbar');
              if (el && navbar) {
                window.scrollTo({ top: el.offsetTop - navbar.offsetHeight, behavior: 'smooth' });
              }
            }}
          >
            Asistente IA
          </a>
        </div> */}
      </div>
    </section>
  );
} 
{/* 
function NotebookLMSection() {
  return (
    <section id="notebooklm" className="directivos-notebook-section">
      <div className="container">
        <h2 className="directivos-section-title animate-on-scroll">Asistente IA para directivos</h2>
        <p className="directivos-section-desc animate-on-scroll">
          Accedé al asistente de inteligencia artificial desarrollado especialmente para directivos.
          Consultá dudas, explorá recursos y gestioná información institucional de forma inteligente.
        </p>
        <div className="directivos-notebook-card animate-on-scroll">
          
          <div className="directivos-notebook-content">
            <h3></h3>
            <p>Herramienta de IA para consultas, análisis y gestión de información educativa institucional.</p>
          </div>
          <a
            href="https://notebooklm.google.com/notebook/0caf2e73-b986-4757-8a1a-c3c21254cbda?authuser=2"
            target="_blank"
            rel="noreferrer"
            className="directivos-notebook-btn"
          >
            Abrir asistente 
          </a>
        </div>
      </div>
    </section>
  );
}
*/}

function NotebookLMSection() {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    const cargar = async () => {
      try {
        const ref = doc(db, 'directivos', 'notebooklm');
        const snap = await getDoc(ref);
        if (snap.exists()) setClicks(snap.data().clicks || 0);
      } catch (err) {}
    };
    cargar();
  }, []);

  const handleClick = async () => {
    try {
      const ref = doc(db, 'directivos', 'notebooklm');
      const snap = await getDoc(ref);
      if (snap.exists()) {
        await updateDoc(ref, { clicks: increment(1) });
      } else {
        await setDoc(ref, { clicks: 1 });
      }
      setClicks(prev => prev + 1);
    } catch (err) {}
  };

  return (
    <section id="notebooklm" className="directivos-notebook-section">
      <div className="container">
        <h2 className="directivos-section-title animate-on-scroll">Asistente IA para directivos</h2>
        <p className="directivos-section-desc animate-on-scroll">
          Accedé al asistente de inteligencia artificial desarrollado especialmente para directivos.
          Consultá dudas, explorá recursos y gestioná información institucional de forma inteligente.
        </p>
        <div className="directivos-notebook-card animate-on-scroll">
          <div className="directivos-notebook-content">
            <h3></h3>
            <p>Herramienta de IA para consultas, análisis y gestión de información educativa institucional.</p>
          
          </div>
          <a
            href="https://notebooklm.google.com/notebook/0caf2e73-b986-4757-8a1a-c3c21254cbda"
            target="_blank"
            rel="noreferrer"
            className="directivos-notebook-btn"
            onClick={handleClick}
          >
            Abrir asistente
          </a>
        </div>
      </div>
    </section>
  );
}

export function DirectivosPage() {
  useScrollAnimation();

  return (
    <main>
      <DirectivosHero />
      <DirectivosIntro />
      <NotebookLMSection />
    </main>
  );
}
