import { lazy, Suspense } from 'react';
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
import { VideosGrid } from './components/sections/VideosGrid';
import { FaqSectionColapsable } from './components/sections/FaqSectionColapsable';

import { ToastNovedades } from './components/ToastNovedades';

{/*import { HomePageV2 } from './pages/HomePageV2';*/}

// ── Páginas con carga diferida (lazy) ──────────────
const DocentesPage        = lazy(() => import('./pages/DocentesPage').then(m => ({ default: m.DocentesPage })));
const SecundariaAprendePage = lazy(() => import('./pages/SecundariaAprende').then(m => ({ default: m.SecundariaAprendePage })));
const FamiliasPage        = lazy(() => import('./pages/FamiliasPage').then(m => ({ default: m.FamiliasPage })));
const DirectivosPage      = lazy(() => import('./pages/DirectivosPage').then(m => ({ default: m.DirectivosPage })));
const SupervisoresPage    = lazy(() => import('./pages/SupervisoresPage').then(m => ({ default: m.SupervisoresPage })));

// ── Fallback de carga con estilo del sitio ─────────
function PageLoader() {
  return (
    <div className="page-loader">
      <div className="page-loader-spinner"></div>
    </div>
  );
}

function HomePage() {
  useScrollAnimation();

  return (
    <main>
      <AboutSection />
      <AccessSection />
      <AppsSection />
      <VideosGrid />
      <FaqSectionColapsable />
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

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/docentes" element={<DocentesPage />} />
          <Route path="/docentes-secundaria-aprende" element={<SecundariaAprendePage />} />
          <Route path="/familias" element={<FamiliasPage />} />
          <Route path="/directivos" element={<DirectivosPage />} />
          <Route path="/supervisores" element={<SupervisoresPage />} />
         {/* <Route path="/nueva" element={<HomePageV2 />} /> */}
      
        </Routes>
      </Suspense>

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
