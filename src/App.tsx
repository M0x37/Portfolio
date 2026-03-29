import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinktree } from '@fortawesome/free-brands-svg-icons';
import { faSkull } from '@fortawesome/free-solid-svg-icons';

// Lazy load pages for better performance
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Loading fallback component
const PageLoader: React.FC = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '50vh',
    color: '#8b4513',
    fontFamily: '"Courier New", monospace',
    fontSize: '1.2rem'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '3px solid #dccfb0',
      borderTop: '3px solid #8b4513',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      marginRight: '1rem'
    }} />
    Loading...
  </div>
);


const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div style={{
        backgroundColor: '#f4e8d0',
        backgroundImage: `
          linear-gradient(135deg, #f4e8d0 0%, #e8dcc0 50%, #dccfb0 100%),
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(139, 69, 19, 0.03) 10px,
            rgba(139, 69, 19, 0.03) 20px
          ),
          repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 10px,
            rgba(139, 69, 19, 0.03) 10px,
            rgba(139, 69, 19, 0.03) 20px
          )
        `,
        minHeight: '100vh',
        color: '#2c1810',
        fontFamily: '"Georgia", "Times New Roman", serif',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}>
        <Header />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
        
        {/* Footer */}
        <footer style={{
          backgroundColor: '#e8dcc0',
          backgroundImage: `
            linear-gradient(135deg, #e8dcc0 0%, #dccfb0 100%),
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(139, 69, 19, 0.05) 10px,
              rgba(139, 69, 19, 0.05) 20px
            )
          `,
          padding: '2rem 1rem',
          textAlign: 'center',
          borderTop: '3px solid #8b4513',
          marginTop: 'auto',
          position: 'relative',
          boxShadow: '0 -4px 20px rgba(139, 69, 19, 0.2)'
        }}>
          {/* My socials */}
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#2c1810',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            fontFamily: '"Courier New", monospace'
          }}>
            <FontAwesomeIcon icon={faSkull} style={{ marginRight: '0.5rem' }} />
            WANTED: Social Links
          </h3>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '1.5rem'
          }}>
            <a
              href="https://github.com/M0x37"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#8b4513',
                fontSize: '1.2rem',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                border: '2px solid #8b4513',
                borderRadius: '4px',
                backgroundColor: 'rgba(244, 232, 208, 0.8)',
                fontWeight: 'bold'
              }}
              onMouseOver={(e: any) => {
                e.currentTarget.style.color = '#f4e8d0';
                e.currentTarget.style.backgroundColor = '#8b4513';
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(139, 69, 19, 0.4)';
              }}
              onMouseOut={(e: any) => {
                e.currentTarget.style.color = '#8b4513';
                e.currentTarget.style.backgroundColor = 'rgba(244, 232, 208, 0.8)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://x.com/Max3702q"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#8b4513',
                fontSize: '1.2rem',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                border: '2px solid #8b4513',
                borderRadius: '4px',
                backgroundColor: 'rgba(244, 232, 208, 0.8)',
                fontWeight: 'bold'
              }}
              onMouseOver={(e: any) => {
                e.currentTarget.style.color = '#f4e8d0';
                e.currentTarget.style.backgroundColor = '#8b4513';
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(139, 69, 19, 0.4)';
              }}
              onMouseOut={(e: any) => {
                e.currentTarget.style.color = '#8b4513';
                e.currentTarget.style.backgroundColor = 'rgba(244, 232, 208, 0.8)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://info.m0x2.de/" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#8b4513',
                fontSize: '1.2rem',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                border: '2px solid #8b4513',
                borderRadius: '4px',
                backgroundColor: 'rgba(244, 232, 208, 0.8)',
                fontWeight: 'bold'
              }}
              onMouseOver={(e: any) => {
                e.currentTarget.style.color = '#f4e8d0';
                e.currentTarget.style.backgroundColor = '#8b4513';
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(139, 69, 19, 0.4)';
              }}
              onMouseOut={(e: any) => {
                e.currentTarget.style.color = '#8b4513';
                e.currentTarget.style.backgroundColor = 'rgba(244, 232, 208, 0.8)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <FontAwesomeIcon icon={faLinktree} />
            </a>
          </div>
          
          <p style={{
            margin: 0,
            color: '#2c1810',
            fontSize: '0.9rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            fontFamily: '"Courier New", monospace'
          }}>
             2026 M0x37 | All Rights Reserved
          </p>
          
          <a 
            href="https://impressum.m0x2.de/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#8b4513',
              fontSize: '0.85rem',
              textDecoration: 'none',
              fontWeight: '600',
              fontFamily: '"Courier New", monospace',
              marginTop: '0.5rem',
              display: 'inline-block',
              borderBottom: '1px solid transparent',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = '#654321';
              e.currentTarget.style.borderBottom = '1px solid #654321';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = '#8b4513';
              e.currentTarget.style.borderBottom = '1px solid transparent';
            }}
          >
            Impressum
          </a>
        </footer>
      </div>
    </Router>
  );
};

// Add CSS for loading spinner
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);

export default App;
