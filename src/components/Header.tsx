import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, MoonStar, SunMedium, X } from 'lucide-react';
import { copy, type Locale } from '../i18n';

const navLinks = [
  { path: '/', key: 'home', exact: true },
  { path: '/projects', key: 'projects' },
  { path: '/contact', key: 'contact' },
] as const;

type HeaderProps = {
  theme: 'light' | 'dark';
  locale: Locale;
  onToggleTheme: () => void;
};

const Header: React.FC<HeaderProps> = ({ theme, locale, onToggleTheme }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  const isActive = (path: string, exact?: boolean) =>
    exact ? location.pathname === path : location.pathname.startsWith(path);

  const navigation = (mobile = false) => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`nav-link ${isActive(link.path, link.exact) ? 'is-active' : ''}`}
          aria-current={isActive(link.path, link.exact) ? 'page' : undefined}
          onClick={() => mobile && setIsMenuOpen(false)}
        >
          {copy.nav[link.key][locale]}
        </Link>
      ))}
    </>
  );

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="nav-shell" aria-label="Main navigation">
        <Link to="/" className="brand" aria-label={copy.nav.homeAria[locale]}>
          <span>M0x37</span>
          <span className="brand-note">{copy.nav.portfolio[locale]}</span>
        </Link>

        <div className="primary-nav">{navigation()}</div>

        <div className="nav-utility">
          <Link to="/contact" className="nav-utility-link">
            {copy.nav.build[locale]} <span aria-hidden="true">↗</span>
          </Link>
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <SunMedium size={16} strokeWidth={2.2} /> : <MoonStar size={16} strokeWidth={2.2} />}
          </button>
        </div>

        <button
          type="button"
          className="mobile-trigger"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? <X size={19} strokeWidth={2.25} /> : <Menu size={20} strokeWidth={2.25} />}
        </button>

        <div id="mobile-navigation" className={`mobile-nav ${isMenuOpen ? 'is-open' : ''}`}>
          {navigation(true)}
          <button
            type="button"
            className="theme-toggle mobile-theme-toggle"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (locale === 'de' ? 'Hell' : 'Light mode') : (locale === 'de' ? 'Dunkel' : 'Dark mode')}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
