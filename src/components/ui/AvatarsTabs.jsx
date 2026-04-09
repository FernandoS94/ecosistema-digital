import { useState } from 'react';
import { useVideo } from '../../context/VideoContext';
import { AvatarCategory } from './AvatarCategory';
import { AVATAR_CATEGORIES } from '../../data/avatars';
import './AvatarsTabs.css';

export function AvatarsTabs() {
  const [activeTab, setActiveTab] = useState('info');
  const { openAppVideo } = useVideo();

  return (
    <div className="avatars-tabs">

      {/* Tab buttons */}
      <div className="avatars-tabs-header">
        <button
          className={`avatars-tab-btn${activeTab === 'info' ? ' active' : ''}`}
          onClick={() => setActiveTab('info')}
        >
          Sobre los avatares
        </button>
        <button
          className={`avatars-tab-btn${activeTab === 'avatares' ? ' active' : ''}`}
          onClick={() => setActiveTab('avatares')}
        >
          Ver avatares
        </button>
      </div>

      {/* Tab: info */}
      {activeTab === 'info' && (
        <div className="avatars-tab-panel">
          <div className="avatars-info-content">

            <div className="avatars-info-text">
              <p>
                Los Avatares son <strong>asistentes pedagógicos con IA</strong> que optimizan la
                práctica docente mediante planificación, consultas y retroalimentación inmediata,
                potenciando la enseñanza de forma simple y eficiente.
              </p>
              <p>
                Uso de avatares en <strong>3 pasos</strong>: Elegí tu materia, abrí el chat
                personalizado y consultá para recibir apoyo pedagógico inmediato.
              </p>
              <div className="avatars-info-actions">
                <button className="avatars-video-btn" onClick={() => openAppVideo('avatar')}>
                  <i className="fas fa-play-circle"></i> Video tutorial
                </button>
                <button
                  className="avatars-tab-goto"
                  onClick={() => setActiveTab('avatares')}
                >
                  Ver avatares →
                </button>
              </div>
            </div>

            <div className="avatars-info-imgs">
              <img src="./img/avatares/ingles.png"    alt="Avatar" className="av-preview av-top" />
              <img src="./img/avatares/fisica.png"    alt="Avatar" className="av-preview av-mid" />
              <img src="./img/avatares/geografia.png" alt="Avatar" className="av-preview av-bot" />
            </div>

          </div>
        </div>
      )}

      {/* Tab: avatares */}
      {activeTab === 'avatares' && (
        <div className="avatars-tab-panel">
          <div className="categorias-wrapper">
            {AVATAR_CATEGORIES.map((cat) => (
              <AvatarCategory
                key={cat.id}
                title={cat.title}
                avatars={cat.avatars}
                fullWidth={cat.fullWidth}
              />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
