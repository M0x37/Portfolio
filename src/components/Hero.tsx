import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section 
      id="home"
      style={{
        minHeight: '100vh',
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '6rem 2rem 4rem',
        overflow: 'hidden',
        fontFamily: '"Georgia", "Times New Roman", serif'
      }}
      role="main"
      aria-label="Hero section"
    >
      {/* Animated background particles */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none'
        }}
        aria-hidden="true"
      >
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              backgroundColor: 'rgba(139, 69, 19, 0.2)',
              borderRadius: '50%',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 15 + 15}s linear infinite`,
              animationDelay: Math.random() * 5 + 's'
            }}
          />
        ))}
      </div>

      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3rem',
          maxWidth: '800px',
          margin: '0 auto',
          width: '100%',
          textAlign: 'center'
        }}
        id="main-content"
      >
        {/* Hero Content with staggered entrance animation */}
        <div style={{
          color: '#2c1810',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
          transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDelay: '0.5s'
        }}>
          <h1 
            style={{
              fontSize: '3.5rem',
              fontWeight: 'bold',
              margin: '0 0 1.5rem 0',
              lineHeight: 1.1,
              letterSpacing: '2px',
              color: '#2c1810',
              textTransform: 'uppercase',
              fontFamily: '"Courier New", monospace',
              textShadow: '3px 3px 6px rgba(0, 0, 0, 0.4)',
              animationName: isVisible ? 'glow' : 'none',
              animationDuration: '2s',
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
              animationDirection: 'alternate',
              animationDelay: '1s'
            }}
            tabIndex={0}
          >
            M0x37
          </h1>
          
          <p 
            style={{
              fontSize: '1.3rem',
              margin: '0 0 3rem 0',
              opacity: 0.9,
              lineHeight: 1.6,
              fontWeight: '400',
              color: '#5d4037',
              fontFamily: '"Georgia", "Times New Roman", serif',
              fontStyle: 'italic',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
              animationName: isVisible ? 'slideInText' : 'none',
              animationDuration: '1s',
              animationTimingFunction: 'ease-out',
              animationDelay: '0.8s',
              animationFillMode: 'both'
            }}
            tabIndex={0}
          >
            Building my Own stuff with Fun and Coffee
          </p>
          
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '1rem',
            justifyContent: 'center',
            animationName: isVisible ? 'slideInButtons' : 'none',
            animationDuration: '1s',
            animationTimingFunction: 'ease-out',
            animationDelay: '1.2s',
            animationFillMode: 'both'
          }}
            role="group"
            aria-label="Call to action buttons"
          >
            <Link
              to="/projects"
              style={{
                backgroundColor: '#8b4513',
                color: '#f4e8d0',
                border: '3px solid #654321',
                padding: '1rem 2.5rem',
                fontSize: '1rem',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontFamily: '"Courier New", monospace',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(139, 69, 19, 0.4)',
                position: 'relative',
                overflow: 'hidden',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
              }}
              role="button"
              aria-label="View projects portfolio"
              tabIndex={0}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(139, 69, 19, 0.6)';
                e.currentTarget.style.backgroundColor = '#654321';
                e.currentTarget.style.borderColor = '#8b4513';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(139, 69, 19, 0.4)';
                e.currentTarget.style.backgroundColor = '#8b4513';
                e.currentTarget.style.borderColor = '#654321';
              }}
              onFocus={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(139, 69, 19, 0.5)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(139, 69, 19, 0.4)';
              }}
            >
              <span style={{ position: 'relative', zIndex: 1 }}>Projects</span>
              {/* Button shine effect */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(244, 232, 208, 0.6), transparent)',
                  transition: 'left 0.5s ease'
                }}
                aria-hidden="true"
              />
            </Link>
            
            <Link
              to="/contact"
              style={{
                backgroundColor: 'transparent',
                color: '#8b4513',
                border: '3px solid #8b4513',
                padding: '1rem 2.5rem',
                fontSize: '1rem',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontFamily: '"Courier New", monospace',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                textDecoration: 'none',
                position: 'relative',
                overflow: 'hidden',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
              }}
              role="button"
              aria-label="Go to contact page"
              tabIndex={0}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.backgroundColor = 'rgba(139, 69, 19, 0.1)';
                e.currentTarget.style.borderColor = '#654321';
                e.currentTarget.style.color = '#654321';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(139, 69, 19, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = '#8b4513';
                e.currentTarget.style.color = '#8b4513';
                e.currentTarget.style.boxShadow = 'none';
              }}
              onFocus={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.backgroundColor = 'rgba(139, 69, 19, 0.05)';
                e.currentTarget.style.borderColor = '#654321';
                e.currentTarget.style.color = '#654321';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(139, 69, 19, 0.2)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = '#8b4513';
                e.currentTarget.style.color = '#8b4513';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span style={{ position: 'relative', zIndex: 1 }}>Contact</span>
              {/* Button pulse effect */}
              <div 
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '0',
                  height: '0',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(139, 69, 19, 0.2)',
                  transform: 'translate(-50%, -50%)',
                  transition: 'all 0.6s ease'
                }}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes float {
          0% { transform: translateY(100vh) rotate(0deg); }
          100% { transform: translateY(-100px) rotate(360deg); }
        }
        
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes glow {
          0% { filter: drop-shadow(0 0 20px rgba(139, 69, 19, 0.3)); }
          100% { filter: drop-shadow(0 0 30px rgba(139, 69, 19, 0.6)); }
        }
        
        @keyframes slideInText {
          0% { 
            opacity: 0;
            transform: translateX(-30px);
          }
          100% { 
            opacity: 0.9;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInButtons {
          0% { 
            opacity: 0;
            transform: translateY(30px);
          }
          100% { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Focus visible styles for better accessibility */
        :focus-visible {
          outline: 2px solid #8b4513;
          outline-offset: 2px;
        }
        
        /* High contrast mode support */
        @media (prefers-contrast: high) {
          section {
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
    </section>
  );
};

export default Hero;
