import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../firebase';
import { trackEvent } from '../utils/trackEvent';

const MOSTRAR_FLYER = true;

export function FlyerModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (MOSTRAR_FLYER && !sessionStorage.getItem('flyerVisto')) {
      const timer = setTimeout(() => setIsOpen(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  const close = () => {
    setIsOpen(false);
    sessionStorage.setItem('flyerVisto', 'true');
  };

  const registrarClick = async () => {
    try {
      // Contador rápido (colección 'flyer', doc 'IA-progresiones')
      const ref = doc(db, 'flyer', 'IA-progresiones');
      const snap = await getDoc(ref);
      if (snap.exists()) {
        await updateDoc(ref, { clicks: increment(1) });
      } else {
        await setDoc(ref, { clicks: 1, titulo: 'IA-progresiones' });
      }
    } catch (err) {}
    // Evento con timestamp
    trackEvent('flyer', 'IA-progresiones');
  };

  if (!isOpen) return null;

  return (
    <div className="flyer-modal active" id="flyerModal">
      <div className="flyer-modal-overlay" onClick={close}></div>
      <div className="flyer-modal-content">
        <button className="flyer-modal-close" onClick={close} aria-label="Cerrar">✕</button>
        <div className="flyer-modal-scroll">
          <img src="./img/IA.png" alt="Nuevos Cursos de Educación Digital" className="flyer-modal-img" />
          <div className="flyer-modal-footer">
            <a
              href="https://buenosairesaprendeconia.bue.edu.ar/"
              className="flyer-modal-btn"
              target="_blank"
              rel="noreferrer"
              onClick={registrarClick}
            >
              Conocé más <i className="fas fa-plus"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

