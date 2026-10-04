import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import { copy, getBrowserLocale, type Locale } from './i18n';

const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

const getInitialTheme = (): 'light' | 'dark' => {
  const storedTheme = window.localStorage.getItem('theme');
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const HomePage: React.FC<{ locale: Locale }> = ({ locale }) => (
  <>
    <Hero locale={locale} />
    <About locale={locale} />
  </>
);

const PageLoader: React.FC<{ locale: Locale }> = ({ locale }) => (
  <div className="contact-page">
    <p className="contact-copy">{locale === 'de' ? 'Portfolio wird geladen…' : 'Loading portfolio…'}</p>
  </div>
);

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme);
  const [locale, setLocale] = useState<Locale>(getBrowserLocale);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    setLocale(getBrowserLocale());
  }, []);

  return (
    <Router>
      <div className="site-shell">
        <Header theme={theme} locale={locale} onToggleTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))} />
        <div className="site-main">
          <Suspense fallback={<PageLoader locale={locale} />}>
            <Routes>
              <Route path="/" element={<HomePage locale={locale} />} />
              <Route path="/projects" element={<ProjectsPage locale={locale} />} />
              <Route path="/contact" element={<ContactPage locale={locale} />} />
            </Routes>
          </Suspense>
        </div>
        <footer className="site-footer">
          <div className="container footer-shell">
            <p className="footer-copy">© 2026 M0x37 · {copy.footer.built[locale]}</p>
            <div className="footer-links">
              <a href="https://impressum.m0x2.de/" target="_blank" rel="noopener noreferrer">{copy.footer.impressum[locale]}</a>
              <a href="https://github.com/M0x37" target="_blank" rel="noopener noreferrer">{copy.footer.github[locale]}</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
