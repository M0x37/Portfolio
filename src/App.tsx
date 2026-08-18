import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';

const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

const HomePage: React.FC = () => (
  <>
    <Hero />
    <About />
  </>
);

const PageLoader: React.FC = () => <div className="contact-page"><p className="contact-copy">Loading portfolio…</p></div>;

const App: React.FC = () => (
  <Router>
    <div className="site-shell">
      <Header />
      <div className="site-main">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </div>
      <footer className="site-footer">
        <div className="container footer-shell">
          <p className="footer-copy">© 2026 M0x37 · Built with curiosity.</p>
          <div className="footer-links">
            <a href="https://impressum.m0x2.de/" target="_blank" rel="noopener noreferrer">Impressum</a>
            <a href="https://github.com/M0x37" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  </Router>
);

export default App;
