import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import { Loader2 } from 'lucide-react';

const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

const PageLoader: React.FC = () => (
  <div className="flex items-center justify-center min-h-[50vh] text-text-secondary font-mono text-sm">
    <Loader2 className="w-5 h-5 animate-spin mr-3" />
    Loading...
  </div>
);

const HomePage: React.FC = () => (
  <>
    <Hero />
    <About />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#0A0A0A] text-text-primary font-body flex flex-col">
        <Header />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>

        <footer className="border-t border-white/10 bg-[#0A0A0A] py-8 px-4 text-center mt-auto">
          <p className="text-text-secondary text-xs font-mono tracking-wider uppercase">
            &copy; 2026 M0x37 &middot; All Rights Reserved
          </p>
          <a
            href="https://impressum.m0x2.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-xs text-text-secondary font-mono hover:text-text-primary transition-colors duration-200 border-b border-transparent hover:border-text-primary"
            data-testid="impressum-link"
          >
            Impressum
          </a>
        </footer>
      </div>
    </Router>
  );
};

export default App;
