import { doc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../../firebase';
import { trackEvent } from '../../utils/trackEvent';

export function AvatarCard({ href, img, label, alt, disabled }) {

  const registrarClick = async () => {
    try {
      // 1. Contador rápido (colección 'avatares', doc por label)
      const ref = doc(db, 'avatares', label);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        await updateDoc(ref, { clicks: increment(1) });
      } else {
        await setDoc(ref, { clicks: 1, titulo: label });
      }
    } catch (err) {
      // Silencioso
    }
    // 2. Evento con timestamp (colección 'eventos')
    trackEvent('avatar', label);
  };

  if (disabled) {
    return (
      <div className="avatar-circular avatar-disabled">
        <div className="avatar-circle">
          <img src={img} alt={alt} />
        </div>
        <span className="avatar-label">{label}</span>
      </div>
    );
  }

  return (
    <a
      href={href}
      className="avatar-circular"
      target="_blank"
      rel="noreferrer"
      onClick={registrarClick}
    >
      <div className="avatar-circle">
        <img src={img} alt={alt} />
      </div>
      <span className="avatar-label">{label}</span>
    </a>
  );
}
