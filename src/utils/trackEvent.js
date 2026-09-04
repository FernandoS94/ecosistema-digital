// ── Helper de registro de eventos con timestamp ────
// Guarda cada click en la colección 'eventos' de Firestore
// para poder analizar tendencias temporales (por día, semana, mes)

import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

/**
 * Registra un evento de click con timestamp del servidor.
 * @param {string} tipo - Categoría: 'avatar' | 'directivo' | 'supervisor' | 'flyer'
 * @param {string} item - Identificador del ítem (ej: 'matematica', 'notebooklm')
 */
export async function trackEvent(tipo, item) {
  try {
    await addDoc(collection(db, 'eventos'), {
      tipo,
      item,
      timestamp: serverTimestamp(),
    });
  } catch (err) {
    // Silencioso: si falla el registro no interrumpe la navegación
  }
}
