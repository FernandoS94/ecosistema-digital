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
import { ToastNovedades } from './components/ToastNovedades';




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
  
 

  return (
    <>
    <ToastNovedades />
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
