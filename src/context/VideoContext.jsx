import { createContext, useContext, useState, useEffect } from 'react';
import { VIDEOS, VIDEO_TITLES } from '../data/videos';

const VideoContext = createContext(null);

export function VideoProvider({ children }) {
  const [videoSrc, setVideoSrc] = useState('');
  const [videoTitle, setVideoTitle] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const openVideo = (url, title) => {
    setVideoSrc(url + '?autoplay=1');
    setVideoTitle(title);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const openAppVideo = (appName) => {
    const url = VIDEOS[appName];
    const title = VIDEO_TITLES[appName] || 'Tutorial';
    if (url) {
      openVideo(url, title);
    } else {
      alert('Este tutorial aún no está disponible. Próximamente...');
    }
  };

  const closeVideo = () => {
    setIsOpen(false);
    setVideoSrc('');
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && isOpen) closeVideo();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  return (
    <VideoContext.Provider value={{ isOpen, videoSrc, videoTitle, openVideo, openAppVideo, closeVideo }}>
      {children}
    </VideoContext.Provider>
  );
}

export function useVideo() {
  return useContext(VideoContext);
}
