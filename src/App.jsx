import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { VideoProvider } from './context/VideoContext';
import { useScrollAnimation } from './hooks/useScrollAnimation';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FlyerModal } from './components/FlyerModal';
import { VideoModal } from './components/VideoModal';

import { AboutSection } from './components/sections/AboutSection';

import { AppsSection } from './components/sections/AppsSection';
import { AccessSection } from './components/sections/AccessSection';
import { FaqSection } from './components/sections/FaqSection';

import { DocentesPage } from './pages/DocentesPage';
import { SecundariaAprendePage } from './pages/SecundariaAprende';
import { FamiliasPage } from './pages/FamiliasPage';


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
    <AccessSection />
       <AppsSection />
      <FaqSection />
    </main>
  );
}

function AppContent() {
  
  useSecurityBlocks();

  return (
    <>
      <Navbar />
      <FlyerModal />
      <VideoModal />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/docentes" element={<DocentesPage />} />
        <Route path="/docentes-secundaria-aprende" element={<SecundariaAprendePage />} />
        <Route path="/familias" element={<FamiliasPage />} />
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
