import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { VideoProvider } from './context/VideoContext';
import { useScrollAnimation } from './hooks/useScrollAnimation';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FlyerModal } from './components/FlyerModal';
import { VideoModal } from './components/VideoModal';

import { AboutSection } from './components/sections/AboutSection';
import { AvatarsSection } from './components/sections/AvatarsSection';
import { AppsSection } from './components/sections/AppsSection';
import { AccessSection } from './components/sections/AccessSection';
import { FaqSection } from './components/sections/FaqSection';

import { DocentesPage } from './pages/DocentesPage';

function useParticles() {
  useEffect(() => {
    const colors = ['#24a0a5', '#f18489', '#eed464', '#a7d5d6'];
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
        left: ${Math.random() * 100}vw;
        animation: float ${Math.random() * 3 + 2}s linear infinite;
      `;
      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), 5000);
    };
    const interval = setInterval(createParticle, 3000);
    return () => clearInterval(interval);
  }, []);
}

function useSecurityBlocks() {
  useEffect(() => {
    const blockContext = (e) => e.preventDefault();
    const blockKeys = (e) => {
      if (e.keyCode === 123) return false;
      if (e.ctrlKey && e.shiftKey && e.keyCode === 73) return false;
      if (e.ctrlKey && e.keyCode === 85) return false;
    };
    document.addEventListener('contextmenu', blockContext);
    document.onkeydown = blockKeys;
    return () => {
      document.removeEventListener('contextmenu', blockContext);
      document.onkeydown = null;
    };
  }, []);
}

function HomePage() {
  useScrollAnimation();

  return (
    <main>
      <AboutSection />
      {/*<AccessSection />
      <AvatarsSection />
      <AppsSection />
      <FaqSection />*/}
    </main>
  );
}

function AppContent() {
  useParticles();
  useSecurityBlocks();

  return (
    <>
      <Navbar />
      <FlyerModal />
      <VideoModal />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/docentessjjkjk" element={<DocentesPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <VideoProvider>
      <AppContent />
    </VideoProvider>
  );
}
