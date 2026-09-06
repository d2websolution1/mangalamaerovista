import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingCTAs } from './components/FloatingCTAs';
import { LeadModal } from './components/LeadModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top automatically when navigating routes
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [modalDefaultProject, setModalDefaultProject] = useState('');

  const handleOpenLeadModal = (projectName = '') => {
    setModalDefaultProject(projectName);
    setIsLeadModalOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white font-sans text-slate-900 selection:bg-amber-400 selection:text-slate-950">

        {/* Navbar */}
        <Navbar onOpenLeadModal={() => handleOpenLeadModal()} />

        {/* Dynamic Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<HomePage onOpenLeadModal={() => handleOpenLeadModal()} />}
            />
            <Route
              path="/about"
              element={<AboutPage onOpenLeadModal={() => handleOpenLeadModal()} />}
            />
            <Route
              path="/projects"
              element={<ProjectsPage onOpenLeadModal={() => handleOpenLeadModal()} />}
            />
            <Route
              path="/project/:projectId"
              element={<ProjectDetailPage onOpenLeadModal={(name) => handleOpenLeadModal(name)} />}
            />
            <Route
              path="/gallery"
              element={<GalleryPage onOpenLeadModal={() => handleOpenLeadModal()} />}
            />
            <Route
              path="/contact"
              element={<ContactPage />}
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onOpenLeadModal={() => handleOpenLeadModal()} />

        {/* Floating WhatsApp & Call buttons */}
        <FloatingCTAs onOpenLeadModal={() => handleOpenLeadModal()} />

        {/* Lead Capture Modal */}
        <LeadModal
          isOpen={isLeadModalOpen}
          onClose={() => setIsLeadModalOpen(false)}
          defaultProject={modalDefaultProject}
        />

      </div>
    </BrowserRouter>
  );
}

export default App;
