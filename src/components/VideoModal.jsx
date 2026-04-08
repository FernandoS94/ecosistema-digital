import { useVideo } from '../context/VideoContext';

export function VideoModal() {
  const { isOpen, videoSrc, videoTitle, closeVideo } = useVideo();

  if (!isOpen) return null;

  return (
    <div className="video-modal active" id="videoModal">
      <div className="video-modal-overlay" onClick={closeVideo}></div>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="video-modal-header">
          <h3 className="video-modal-title">{videoTitle}</h3>
          <button className="video-modal-close" onClick={closeVideo}>✕</button>
        </div>
        <div className="video-modal-body">
          <iframe
            className="video-iframe"
            src={videoSrc}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
