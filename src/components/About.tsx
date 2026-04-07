import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinktree } from '@fortawesome/free-brands-svg-icons';
import { faSkull, faAnchor, faCompass } from '@fortawesome/free-solid-svg-icons';
import Skills from './Skills';

const About: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [glowIntensity, setGlowIntensity] = useState(0);
  const fullText = 'I am a 14 Web Developer and Hobby Engineer from Germany and a big One Piece Fan.';

  // Typewriter effect for terminal
  useEffect(() => {
    if (!isTyping) return;
    
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isTyping]);

  // Pulsing glow effect for profile
  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIntensity(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="about" style={{
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
      padding: '6rem 2rem 2rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '"Georgia", "Times New Roman", serif'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        width: '100%'
      }}>
        {/* Decorative Corner Elements */}
        <div style={{
          position: 'absolute',
          top: '2rem',
          left: '2rem',
          fontSize: '2rem',
          color: '#8b4513',
          opacity: 0.3,
          animation: 'float 4s ease-in-out infinite'
        }}>
          <FontAwesomeIcon icon={faAnchor} />
        </div>
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          right: '2rem',
          fontSize: '2rem',
          color: '#8b4513',
          opacity: 0.3,
          animation: 'float 4s ease-in-out infinite reverse'
        }}>
          <FontAwesomeIcon icon={faCompass} />
        </div>

        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '0.00002rem'
        }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            margin: '0 0 1rem 0',
            color: '#2c1810',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            textShadow: '3px 3px 6px rgba(0, 0, 0, 0.4)',
            fontFamily: '"Courier New", monospace'
          }}>
            <FontAwesomeIcon icon={faSkull} style={{ marginRight: '0.5rem' }} />
            About me
          </h2>
          <div style={{
            width: '100px',
            height: '3px',
            backgroundColor: '#8b4513',
            margin: '0 auto',
            borderRadius: '2px'
          }} />
        </div>
        
        {/* Main Card */}
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
          borderRadius: '8px',
          padding: '3rem',
          border: '3px solid #8b4513',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 0 20px rgba(139, 69, 19, 0.1)',
          textAlign: 'center'
        }}>
          {/* Profile Picture with Animated Glow */}
          <div style={{
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            backgroundColor: '#e8dcc0',
            margin: '0 auto 2rem auto',
            border: '4px solid #8b4513',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '4rem',
            color: '#8b4513',
            overflow: 'hidden',
            boxShadow: `0 0 ${20 + Math.sin(glowIntensity * 0.1) * 15}px rgba(139, 69, 19, ${0.4 + Math.sin(glowIntensity * 0.1) * 0.2}), 0 4px 16px rgba(0, 0, 0, 0.3)`,
            transition: 'box-shadow 0.1s ease',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '-10%',
              left: '-10%',
              right: '-10%',
              bottom: '-10%',
              background: `conic-gradient(from ${glowIntensity * 3.6}deg, transparent, rgba(139, 69, 19, 0.3), transparent)`,
              borderRadius: '50%',
              animation: 'spin 10s linear infinite'
            }} />
            <img
              src="/profile.jpg"
              alt="Profile"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center',
                position: 'relative',
                zIndex: 1
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = '<div style="font-size: 4rem; color: #8b4513;">☠</div>';
              }}
            />
          </div>
          
          {/* Name */}
          <h3 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            margin: '0 0 1.5rem 0',
            color: '#2c1810',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            fontFamily: '"Courier New", monospace'
          }}>
            M0x37
          </h3>
          
          {/* Social Icons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            marginBottom: '2.5rem'
          }}>
            <a
              href="https://github.com/M0x37"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#8b4513',
                fontSize: '1.5rem',
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
              onMouseOver={(e) => {
                e.currentTarget.style.color = '#f4e8d0';
                e.currentTarget.style.backgroundColor = '#8b4513';
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(139, 69, 19, 0.4)';
              }}
              onMouseOut={(e) => {
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
                fontSize: '1.5rem',
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
              onMouseOver={(e) => {
                e.currentTarget.style.color = '#f4e8d0';
                e.currentTarget.style.backgroundColor = '#8b4513';
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(139, 69, 19, 0.4)';
              }}
              onMouseOut={(e) => {
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
                fontSize: '1.5rem',
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
              onMouseOver={(e) => {
                e.currentTarget.style.color = '#f4e8d0';
                e.currentTarget.style.backgroundColor = '#8b4513';
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(139, 69, 19, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = '#8b4513';
                e.currentTarget.style.backgroundColor = 'rgba(244, 232, 208, 0.8)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <FontAwesomeIcon icon={faLinktree} />
            </a>
          </div>
          
          {/* Terminal Box */}
          <div style={{
            backgroundColor: '#2c1810',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '2px solid #8b4513',
            fontFamily: '"Courier New", monospace',
            fontSize: '14px',
            textAlign: 'left'
          }}>
            {/* Terminal Header */}
            <div style={{
              backgroundColor: '#8b4513',
              padding: '0.75rem 1rem',
              borderBottom: '2px solid #654321',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{
                display: 'flex',
                gap: '0.5rem'
              }}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#e94560'
                }} />
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#ffd700'
                }} />
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#27c93f'
                }} />
              </div>
              <div style={{
                color: '#f4e8d0',
                fontSize: '12px'
              }}>
                m0x@portfolio:~$
              </div>
            </div>
            
            {/* Terminal Content */}
            <div style={{
              padding: '2rem',
              color: '#f4e8d0',
              minHeight: '120px'
            }}>
              <div style={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: '#f4e8d0',
                textTransform: 'lowercase',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                fontFamily: '"Courier New", monospace'
              }}>
                <span style={{ color: '#e94560' }}>➜</span> <span style={{ color: '#ffbd2e' }}>~</span> about me
              </div>
              <div style={{
                marginBottom: '0.5rem',
                color: '#f4e8d0',
                fontFamily: '"Courier New", monospace'
              }}>
                Hey, welcome to my Portfolio!
              </div>
              <div style={{
                color: '#f4e8d0',
                fontFamily: '"Courier New", monospace',
                minHeight: '1.5rem'
              }}>
                {typedText}
                <span style={{
                  animation: 'blink 1s infinite',
                  marginLeft: '2px',
                  color: '#27c93f'
                }}>{isTyping ? '▋' : ''}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills Section */}
        <Skills />
      </div>
      
      {/* Global Styles */}
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default About;
