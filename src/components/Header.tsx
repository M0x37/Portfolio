import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) setIsMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const navLinks = [
    { path: '/', label: 'Home', exact: true },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string, exact?: boolean) =>
    exact ? location.pathname === path : location.pathname.startsWith(path);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } ${scrolled ? 'backdrop-blur-xl bg-black/80 border-b border-white/10' : 'bg-transparent'}`}
      role="banner"
      aria-label="Main navigation"
    >
      <nav
        className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16"
        role="navigation"
        aria-label="Site navigation"
      >
        <Link
          to="/"
          className="font-heading font-bold tracking-tight text-lg hover:opacity-80 transition-opacity duration-200"
          aria-label="M0x37 homepage"
          data-testid="logo-link"
        >
          <span className="text-gradient bg-gradient-to-r from-accent-light via-accent to-accent-dark">
            M0x37
          </span>
        </Link>

        <button
          className="md:hidden text-white/80 hover:text-white transition-colors p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          data-testid="mobile-menu-button"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <ul
          id="primary-navigation"
          className={`list-none m-0 p-0 flex items-center gap-1 ${
            isMobile
              ? `flex-col absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 py-4 px-4 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`
              : 'flex-row'
          }`}
          role="menubar"
        >
          {navLinks.map((link) => (
            <li key={link.path} role="none" className="w-full md:w-auto">
              {link.path === '/' && location.pathname === '/' ? (
                <a
                  href="#home"
                  className={`block px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive(link.path, link.exact)
                      ? 'text-white bg-accent/10'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                  role="menuitem"
                  aria-label="Navigate to home section"
                  tabIndex={0}
                  onClick={() => isMobile && setIsMenuOpen(false)}
                  data-testid="nav-home"
                >
                  Home
                </a>
              ) : (
                <Link
                  to={link.path}
                  className={`block px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive(link.path, link.exact)
                      ? 'text-white bg-accent/10'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                  role="menuitem"
                  aria-label={`Navigate to ${link.label} page`}
                  aria-current={isActive(link.path, link.exact) ? 'page' : undefined}
                  tabIndex={0}
                  onClick={() => isMobile && setIsMenuOpen(false)}
                  data-testid={`nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
