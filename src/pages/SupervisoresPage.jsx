import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './SupervisoresPage.css';

import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../firebase';
import { trackEvent } from '../utils/trackEvent';
import { ComoFuncionaSection } from '../components/sections/ComoFuncionaSection';

function SupervisoresHero() {
  return (
    <section className="supervisores-hero">
      <h1 className="supervisores-hero-title">Supervisores</h1>
    </section>
  );
}

function SupervisoresIntro() {
  return (
    <section className="supervisores-intro">
      <div className="supervisores-intro-container">
        <p className="supervisores-intro-text">
          Explorá recursos y herramientas para acompañar a los equipos de supervisión en la incorporación de Inteligencia Artificial en las instituciones educativas.
        </p>
      </div>
    </section>
  );
}



function GemaCard({ titulo, descripcion, href, firestoreKey }) {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    const cargar = async () => {
      try {
        const ref = doc(db, 'supervisores', firestoreKey);
        const snap = await getDoc(ref);
        if (snap.exists()) setClicks(snap.data().clicks || 0);
      } catch (err) {}
    };
    cargar();
  }, [firestoreKey]);

  const handleClick = async () => {
    try {
      const ref = doc(db, 'supervisores', firestoreKey);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        await updateDoc(ref, { clicks: increment(1) });
      } else {
        await setDoc(ref, { clicks: 1 });
      }
      setClicks(prev => prev + 1);
    } catch (err) {}
    // Evento con timestamp
    trackEvent('supervisor', firestoreKey);
  };

  return (
    <div className="supervisores-notebook-card animate-on-scroll">
      <div className="supervisores-notebook-content">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="supervisores-notebook-btn"
        onClick={handleClick}
      >
        Abrir Asistente
      </a>
    </div>
  );
}

function PromptCard() {
  const handleClick = async () => {
    try {
      const ref = doc(db, 'supervisores', 'prompt-modelo');
      const snap = await getDoc(ref);
      if (snap.exists()) {
        await updateDoc(ref, { clicks: increment(1) });
      } else {
        await setDoc(ref, { clicks: 1 });
      }
    } catch (err) {}
    // Evento con timestamp
    trackEvent('supervisor', 'prompt-modelo');
  };

  return (
    <div className="supervisores-prompt-wrap">
      <div className="supervisores-prompt-card animate-on-scroll">
        <div className="supervisores-prompt-icon">
          <i className="fas fa-wand-magic-sparkles" aria-hidden="true"></i>
        </div>
        <p className="supervisores-prompt-text">
          Modelo de prompt para crear un asistente personalizado
        </p>
        <a
          href="https://promptgemsupervisores.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="supervisores-prompt-btn"
          onClick={handleClick}
        >
          Abrir modelo
        </a>
      </div>
    </div>
  );
}

function GemasSection() {
  return (
    <section id="gemas" className="supervisores-notebook-section">
      <div className="container">
        <h2 className="supervisores-section-title animate-on-scroll">Asistentes IA para Supervisores</h2>
        <p className="supervisores-section-desc animate-on-scroll">
         Asistente de IA diseñado para acompañar distintas tareas propias del rol de supervisión. Permite preparar una visita o reunión con el equipo de conducción, registrar instancias de acompañamiento, analizar experiencias, propuestas o proyectos que incorporan IA, revisar acuerdos institucionales sobre su uso, elaborar devoluciones y definir próximos pasos, y consolidar información proveniente de distintas escuelas o instancias.
        </p>
        <p className="supervisores-section-desc animate-on-scroll"> La gema trabaja con una dinámica de preguntas de estilo socrático. Antes de elaborar una respuesta o producir un recurso, realiza preguntas para recuperar el contexto, comprender la situación y orientar mejor el acompañamiento. Una vez completado ese intercambio, el usuario puede activar la opción Canvas para generar la ficha interactiva correspondiente y continuar trabajando sobre ella.</p>

       

        <div className="supervisores-gemas-grid">
          <GemaCard
            titulo="Nivel Inicial"
            descripcion="Asistente de IA para acompañar la supervisión de instituciones de Nivel Inicial."
            href="https://gemini.google.com/gem/1SIwYLxPg4SoI_itSPeXMjd7fAYzWV-XC?usp=sharing"
            firestoreKey="gema-inicial"
          />
          <GemaCard
            titulo="Nivel Primario"
            descripcion="Asistente de IA para acompañar la supervisión de instituciones de Nivel Primario."
            href="https://gemini.google.com/gem/15yOBeMcATFhdL0y5jc3rxGb2hY9PCZzt?usp=sharing"
            firestoreKey="gema-primario"
          />
        </div>
      
        <div className="container">
        <h2 className="supervisores-section-title supervisores-title-guia animate-on-scroll"> Guía para crear tu asistente  personalizado</h2>
        <p className="supervisores-section-desc animate-on-scroll">
         Guía  basada en el modelo IBEFA para crear tu propio asistente de supervisión en Gemini. Te acompaña paso a paso en la definición de su identidad y rol, la base normativa y documental que maneja, el marco ético y de privacidad, las funciones que resuelve y la forma en que estructura cada respuesta, para que puedas adaptarlo a las tareas, necesidades y normativa del nivel o modalidad.
        </p>
        </div>

        <PromptCard />
      </div>
    </section>
  );
}

export function SupervisoresPage() {
  useScrollAnimation();

  return (
    <main>
      <SupervisoresHero />
    {/*  <SupervisoresIntro /> */}
  
      <GemasSection />
       <ComoFuncionaSection /> 
       
    </main>
  );
}
