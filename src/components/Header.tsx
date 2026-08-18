import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home', exact: true },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

const Header: React.FC = () => {
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
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="nav-shell" aria-label="Main navigation">
        <Link to="/" className="brand" aria-label="M0x37 Portfolio home">
          <img className="brand-logo" src="/brand/ms-mark-512.png" width="32" height="32" alt="" />
          <span>M0x37</span>
          <span className="brand-note">portfolio</span>
        </Link>

        <div className="primary-nav">{navigation()}</div>

        <Link to="/contact" className="nav-utility">
          Let&apos;s build <span aria-hidden="true">↗</span>
        </Link>

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
        </div>
      </nav>
    </header>
  );
};

export default Header;
