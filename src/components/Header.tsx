import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnchor } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isMenuOpen && !(e.target as Element).closest('header')) {
        setIsMenuOpen(false);
      }
    };
    
    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);
  
  return (
    <header 
      style={{
        position: location.pathname === '/' ? 'fixed' : 'static',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(139, 69, 19, 0.95)',
        backdropFilter: 'blur(20px)',
        zIndex: 1000,
        padding: isMobile ? '0.75rem 1rem' : '1rem 2rem',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.1)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
      role="banner"
      aria-label="Main navigation"
    >
      <nav 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
        role="navigation"
        aria-label="Site navigation"
      >
        <Link 
          to="/"
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#f4e8d0',
            textDecoration: 'none',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            position: 'relative',
            transition: 'all 0.3s ease',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            fontFamily: '"Courier New", monospace'
          }}
          aria-label="Portfolio homepage"
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#e8dcc0';
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.textShadow = '3px 3px 6px rgba(0, 0, 0, 0.7)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = '#f4e8d0';
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
          }}
        >
          <FontAwesomeIcon icon={faAnchor} style={{ marginRight: '0.5rem' }} />
          Portfolio
        </Link>
        
        {/* Mobile menu button */}
        <button
          style={{
            display: isMobile ? 'block' : 'none',
            backgroundColor: 'transparent',
            border: 'none',
            color: '#ffffff',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0.5rem',
            zIndex: 1002,
            transition: 'all 0.3s ease'
          }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onMouseOver={(e) => {
            e.currentTarget.style.color = '#c9d1d9';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <ul 
          id="primary-navigation"
          style={{
            display: isMobile ? (isMenuOpen ? 'flex' : 'none') : 'flex',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            gap: isMobile ? '0' : '2rem',
            flexDirection: isMobile ? 'column' : 'row',
            position: isMobile ? 'absolute' : 'static',
            top: isMobile ? '100%' : 'auto',
            left: isMobile ? '0' : 'auto',
            right: isMobile ? '0' : 'auto',
            backgroundColor: isMobile ? 'rgba(23, 22, 22, 0.98)' : 'transparent',
            backdropFilter: isMobile ? 'blur(20px)' : 'none',
            borderBottom: isMobile ? '1px solid rgba(201, 209, 217, 0.15)' : 'none',
            boxShadow: isMobile ? '0 4px 24px rgba(0, 0, 0, 0.1)' : 'none',
            alignItems: isMobile ? 'stretch' : 'center',
            transform: isMobile ? (isMenuOpen ? 'translateY(0)' : 'translateY(-10px)') : 'translateY(0)',
            opacity: isMobile ? (isMenuOpen ? 1 : 0) : 1,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: isMobile ? 1001 : 'auto'
          }}
          role="menubar"
        >
          {location.pathname === '/' ? (
            <li style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '0.2s'
            }}
            role="none"
          >
                <a
                  href="#home"
                  style={{
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontSize: isMobile ? '1.1rem' : '1rem',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    padding: isMobile ? '1rem' : '0.5rem 1rem',
                    borderRadius: '8px',
                    fontWeight: '500',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'block',
                    textAlign: 'center'
                  }}
                  role="menuitem"
                  aria-label="Navigate to home section"
                  tabIndex={0}
                  onClick={() => isMobile && setIsMenuOpen(false)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      window.location.hash = '#home';
                      isMobile && setIsMenuOpen(false);
                    }
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = '#c9d1d9';
                    e.currentTarget.style.backgroundColor = 'rgba(201, 209, 217, 0.1)';
                    e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(201, 209, 217, 0.3)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.color = '#c9d1d9';
                    e.currentTarget.style.backgroundColor = 'rgba(201, 209, 217, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  Home
                  {/* Animated underline */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    width: '0',
                    height: '2px',
                    backgroundColor: '#c9d1d9',
                    transform: 'translateX(-50%)',
                    transition: 'width 0.3s ease'
                  }}
                  aria-hidden="true"
                  />
                </a>
              </li>
          ) : (
            <li style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '0.2s'
            }}
            role="none"
            >
              <Link
                to="/"
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: isMobile ? '1.1rem' : '1rem',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  padding: isMobile ? '1rem' : '0.5rem 1rem',
                  borderRadius: '8px',
                  fontWeight: '500',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'block',
                  textAlign: 'center'
                }}
                role="menuitem"
                aria-label="Navigate to homepage"
                tabIndex={0}
                onClick={() => isMobile && setIsMenuOpen(false)}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#c9d1d9';
                  e.currentTarget.style.backgroundColor = 'rgba(201, 209, 217, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(201, 209, 217, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                onFocus={(e) => {
                  e.currentTarget.style.color = '#c9d1d9';
                  e.currentTarget.style.backgroundColor = 'rgba(201, 209, 217, 0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Home
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  width: '0',
                  height: '2px',
                  backgroundColor: '#c9d1d9',
                  transform: 'translateX(-50%)',
                  transition: 'width 0.3s ease'
                }}
                aria-hidden="true"
                />
              </Link>
            </li>
          )}
          <li style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: '0.4s'
          }}
          role="none"
          >
            <Link
              to="/projects"
              style={{
                color: location.pathname === '/projects' ? '#c9d1d9' : '#ffffff',
                textDecoration: 'none',
                fontSize: isMobile ? '1.1rem' : '1rem',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                padding: isMobile ? '1rem' : '0.5rem 1rem',
                borderRadius: '8px',
                fontWeight: '500',
                backgroundColor: location.pathname === '/projects' ? 'rgba(201, 209, 217, 0.1)' : 'transparent',
                position: 'relative',
                overflow: 'hidden',
                animation: location.pathname === '/projects' ? 'pulse 2s infinite' : 'none',
                display: 'block',
                textAlign: 'center'
              }}
              role="menuitem"
              aria-label="Navigate to projects page"
              aria-current={location.pathname === '/projects' ? 'page' : undefined}
              tabIndex={0}
              onClick={() => isMobile && setIsMenuOpen(false)}
              onMouseOver={(e) => {
                e.currentTarget.style.color = '#c9d1d9';
                e.currentTarget.style.backgroundColor = 'rgba(201, 209, 217, 0.1)';
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(201, 209, 217, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = location.pathname === '/projects' ? '#c9d1d9' : '#ffffff';
                e.currentTarget.style.backgroundColor = location.pathname === '/projects' ? 'rgba(201, 209, 217, 0.1)' : 'transparent';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              onFocus={(e) => {
                e.currentTarget.style.color = '#c9d1d9';
                e.currentTarget.style.backgroundColor = 'rgba(201, 209, 217, 0.1)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.color = location.pathname === '/projects' ? '#c9d1d9' : '#ffffff';
                e.currentTarget.style.backgroundColor = location.pathname === '/projects' ? 'rgba(201, 209, 217, 0.1)' : 'transparent';
              }}
            >
              Projects
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                width: location.pathname === '/projects' ? '80%' : '0',
                height: '2px',
                backgroundColor: '#c9d1d9',
                transform: 'translateX(-50%)',
                transition: 'width 0.3s ease'
              }}
              aria-hidden="true"
              />
            </Link>
          </li>
          <li style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: '0.5s'
          }}
          role="none"
          >
            <Link
              to="/contact"
              style={{
                color: location.pathname === '/contact' ? '#c9d1d9' : '#ffffff',
                textDecoration: 'none',
                fontSize: isMobile ? '1.1rem' : '1rem',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                padding: isMobile ? '1rem' : '0.5rem 1rem',
                borderRadius: '8px',
                fontWeight: '500',
                backgroundColor: location.pathname === '/contact' ? 'rgba(201, 209, 217, 0.1)' : 'transparent',
                position: 'relative',
                overflow: 'hidden',
                animation: location.pathname === '/contact' ? 'pulse 2s infinite' : 'none',
                display: 'block',
                textAlign: 'center'
              }}
              role="menuitem"
              aria-label="Navigate to contact page"
              aria-current={location.pathname === '/contact' ? 'page' : undefined}
              tabIndex={0}
              onClick={() => isMobile && setIsMenuOpen(false)}
              onMouseOver={(e) => {
                e.currentTarget.style.color = '#c9d1d9';
                e.currentTarget.style.backgroundColor = 'rgba(201, 209, 217, 0.1)';
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(201, 209, 217, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = location.pathname === '/contact' ? '#c9d1d9' : '#ffffff';
                e.currentTarget.style.backgroundColor = location.pathname === '/contact' ? 'rgba(201, 209, 217, 0.1)' : 'transparent';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              onFocus={(e) => {
                e.currentTarget.style.color = '#c9d1d9';
                e.currentTarget.style.backgroundColor = 'rgba(201, 209, 217, 0.1)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.color = location.pathname === '/contact' ? '#c9d1d9' : '#ffffff';
                e.currentTarget.style.backgroundColor = location.pathname === '/contact' ? 'rgba(201, 209, 217, 0.1)' : 'transparent';
              }}
            >
              Contact
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                width: location.pathname === '/contact' ? '80%' : '0',
                height: '2px',
                backgroundColor: '#c9d1d9',
                transform: 'translateX(-50%)',
                transition: 'width 0.3s ease'
              }}
              aria-hidden="true"
              />
            </Link>
          </li>
        </ul>
      </nav>
      
      {/* Skip to main content link */}
      <Link
        to="#main-content"
        style={{
          position: 'absolute',
          top: '-40px',
          left: '10px',
          backgroundColor: '#c9d1d9',
          color: '#171616',
          padding: '0.5rem 1rem',
          textDecoration: 'none',
          borderRadius: '4px',
          fontWeight: '600',
          zIndex: 1001,
          transition: 'top 0.3s ease'
        }}
        onFocus={(e) => {
          e.currentTarget.style.top = '10px';
        }}
        onBlur={(e) => {
          e.currentTarget.style.top = '-40px';
        }}
      >
        Skip to main content
      </Link>
      
      {/* Global styles */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        /* Focus visible styles for better accessibility */
        :focus-visible {
          outline: 2px solid #c9d1d9;
          outline-offset: 2px;
        }
        
        /* High contrast mode support */
        @media (prefers-contrast: high) {
          header {
            border: 2px solid #ffffff;
          }
        }
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
