import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../../firebase';
import './StarRating.css';

export function StarRating({ resourceId }) {
  const [promedio, setPromedio]   = useState(0);
  const [votos, setVotos]         = useState(0);
  const [hover, setHover]         = useState(0);
  const [yaVoto, setYaVoto]       = useState(false);
  const [miVoto, setMiVoto]       = useState(0);
  const [loading, setLoading]     = useState(true);

  const STORAGE_KEY = `voto_${resourceId}`;

  useEffect(() => {
    // Verificar si ya votó este usuario
    const votoGuardado = localStorage.getItem(STORAGE_KEY);
    if (votoGuardado) {
      setYaVoto(true);
      setMiVoto(Number(votoGuardado));
    }

    // Cargar datos de Firestore
    const cargarDatos = async () => {
      try {
        const ref = doc(db, 'recursos', String(resourceId));
        const snap = await getDoc(ref);
        if (snap.exists()) {
          const data = snap.data();
          setPromedio(data.promedio || 0);
          setVotos(data.votos || 0);
        }
      } catch (err) {
        console.error('Error cargando rating:', err);
      } finally {
        setLoading(false);
      }
    };

    cargarDatos();
  }, [resourceId]);

  const handleVoto = async (estrellas) => {
    if (yaVoto) return;

    setYaVoto(true);
    setMiVoto(estrellas);
    localStorage.setItem(STORAGE_KEY, String(estrellas));

    try {
      const ref = doc(db, 'recursos', String(resourceId));
      const snap = await getDoc(ref);

      if (snap.exists()) {
        const data = snap.data();
        const nuevosVotos = data.votos + 1;
        const nuevoPromedio = ((data.promedio * data.votos) + estrellas) / nuevosVotos;
        await updateDoc(ref, {
          votos: nuevosVotos,
          promedio: nuevoPromedio,
        });
        setPromedio(nuevoPromedio);
        setVotos(nuevosVotos);
      } else {
        await setDoc(ref, {
          votos: 1,
          promedio: estrellas,
        });
        setPromedio(estrellas);
        setVotos(1);
      }
    } catch (err) {
      console.error('Error guardando voto:', err);
    }
  };

  if (loading) return <div className="star-loading"></div>;

  const estrellasActivas = hover || (yaVoto ? miVoto : Math.round(promedio));

  return (
    <div className="star-rating">
      <div className="star-stars">
        {[1, 2, 3, 4, 5].map(i => (
          <button
            key={i}
            className={`star ${i <= estrellasActivas ? 'active' : ''} ${yaVoto ? 'voted' : ''}`}
            onClick={() => handleVoto(i)}
            onMouseEnter={() => !yaVoto && setHover(i)}
            onMouseLeave={() => setHover(0)}
            disabled={yaVoto}
            aria-label={`${i} estrellas`}
          >
            ★
          </button>
        ))}
      </div>
      <span className="star-info">
        {votos > 0
          ? `${promedio.toFixed(1)} (${votos} voto${votos !== 1 ? 's' : ''})`
          : 'Sin votos aún'}
      </span>
    </div>
  );
}
