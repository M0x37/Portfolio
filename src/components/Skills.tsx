import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import { faCode, faTerminal } from '@fortawesome/free-solid-svg-icons';

const Skills: React.FC = () => {
  const skills = [
    { name: 'React', icon: faReact, color: '#4a90a4', bounty: '฿ 1,500,000,000', threat: 'God Class' },
    { name: 'Python', icon: faPython, color: '#b8a23a', bounty: '฿ 1,200,000,000', threat: 'Yonko Level' },
    { name: 'HTML+CSS+JS', icon: faCode, color: '#a0522d', bounty: '฿ 800,000,000', threat: 'Warlord' },
    { name: 'GIT', icon: faTerminal, color: '#b85450', bounty: '฿ 600,000,000', threat: 'Supernova' }
  ];

  const luffyQuotes = [
    { japanese: "海賊王に、俺はなる！", english: "I'm gonna be King of the Pirates!" },
    { japanese: "リスクを冒さなければ、未来は作れない！", english: "If you don't take risks, you can't create a future!" },
    { japanese: "仲間が、俺の一番の宝だ！", english: "My friends are my greatest treasure!" },
    { japanese: "一人でいるのは、怪我するよりも辛いんだ！", english: "Being alone is more painful than getting hurt!" },
    { japanese: "お前が誰だろうと、仲間は守る！", english: "I don't care who you are, I will protect my crew!" }
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isQuoteTransitioning, setIsQuoteTransitioning] = useState(false);

  // Rotating quotes every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsQuoteTransitioning(true);
      setTimeout(() => {
        setCurrentQuoteIndex((prev) => (prev + 1) % luffyQuotes.length);
        setIsQuoteTransitioning(false);
      }, 300);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" style={{
      minHeight: '60vh',
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
      padding: '0rem 2rem 6rem 2rem',
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
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            margin: '0 0 1rem 0',
            color: '#2c1810',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            textShadow: '3px 3px 6px rgba(0, 0, 0, 0.4)',
            fontFamily: '"Courier New", monospace'
          }}>
            Skills
          </h2>
          <div style={{
            width: '100px',
            height: '3px',
            backgroundColor: '#8b4513',
            margin: '0 auto',
            borderRadius: '2px'
          }} />
        </div>
        
        {/* Terminal Container with Border */}
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
          border: '5px solid #8b4513',
          borderRadius: '8px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 0 20px rgba(139, 69, 19, 0.1)',
          padding: '1rem'
        }}>
          {/* Terminal Window */}
          <div style={{
            backgroundColor: '#2c1810',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '2px solid #8b4513',
            borderBottom: '4px solid #8b4513',
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
              skills@portfolio:~$
            </div>
          </div>
          
          {/* Terminal Content */}
          <div style={{
            padding: '2rem',
            color: '#f4e8d0',
            borderBottom: '4px solid #8b4513',
            borderRadius: '0 0 8px 8px'
          }}>
            <div style={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#f4e8d0',
              textTransform: 'lowercase',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
              fontFamily: '"Courier New", monospace',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <FontAwesomeIcon icon={faTerminal} />
              skills --list
            </div>
            
            {/* Skills Grid - Wanted Poster Style */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.5rem',
              marginBottom: '1rem',
              perspective: '1000px'
            }}>
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="wanted-poster"
                  style={{
                    background: `linear-gradient(135deg, #f4e8d0 0%, #e8dcc0 100%)`,
                    borderRadius: '8px',
                    padding: '0',
                    border: `3px solid ${skill.color}`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    transformStyle: 'preserve-3d',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: `0 8px 32px ${skill.color}40, inset 0 0 30px rgba(139, 69, 19, 0.1)`
                  }}
                  onMouseMove={(e) => {
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 10;
                    const rotateY = (centerX - x) / 10;
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
                  }}
                >
                  {/* WANTED Header */}
                  <div style={{
                    width: '100%',
                    backgroundColor: skill.color,
                    color: '#2c1810',
                    padding: '0.5rem',
                    textAlign: 'center',
                    fontFamily: '"Courier New", monospace',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    letterSpacing: '3px',
                    textTransform: 'uppercase'
                  }}>
                    ☠ WANTED ☠
                  </div>
                  
                  {/* Poster Content */}
                  <div style={{
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    width: '100%'
                  }}>
                    {/* Icon */}
                    <div style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      backgroundColor: `${skill.color}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `2px dashed ${skill.color}`,
                      marginBottom: '0.5rem'
                    }}>
                      <FontAwesomeIcon 
                        icon={skill.icon} 
                        style={{ 
                          fontSize: '2rem', 
                          color: skill.color
                        }} 
                      />
                    </div>
                    
                    {/* Skill Name */}
                    <span style={{
                      color: '#2c1810',
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      fontFamily: '"Courier New", monospace',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      textAlign: 'center'
                    }}>
                      {skill.name}
                    </span>
                    
                    {/* Threat Level */}
                    <div style={{
                      backgroundColor: '#2c1810',
                      color: skill.color,
                      padding: '0.25rem 0.75rem',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontFamily: '"Courier New", monospace',
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      {skill.threat}
                    </div>
                    
                    {/* Bounty */}
                    <div style={{
                      marginTop: '0.5rem',
                      textAlign: 'center'
                    }}>
                      <div style={{
                        fontSize: '0.7rem',
                        color: '#5d4037',
                        fontFamily: '"Courier New", monospace',
                        marginBottom: '0.25rem'
                      }}>
                        DEAD OR ALIVE
                      </div>
                      <div style={{
                        fontSize: '1.1rem',
                        color: '#8b4513',
                        fontFamily: '"Courier New", monospace',
                        fontWeight: 'bold',
                        letterSpacing: '1px',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                      }}>
                        {skill.bounty}
                      </div>
                    </div>
                  </div>
                  
                  {/* Poster Texture Overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `
                      repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 2px,
                        rgba(139, 69, 19, 0.03) 2px,
                        rgba(139, 69, 19, 0.03) 4px
                      )
                    `,
                    pointerEvents: 'none',
                    opacity: 0.5
                  }} />
                </div>
              ))}
            </div>
            
            {/* Terminal Prompt */}
            <div style={{
              marginTop: '2rem',
              fontSize: '0.9rem',
              color: '#f4e8d0'
            }}>
              <span style={{ color: '#8b949e' }}>$</span>
              <span style={{ marginLeft: '0.5rem', animation: 'blink 1s infinite' }}>█</span>
            </div>
          </div>
        </div>
        </div>
        
        {/* Luffy Quotes Section */}
        <div style={{
          marginTop: '3rem',
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
          border: '5px solid #8b4513',
          borderRadius: '20px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 0 20px rgba(139, 69, 19, 0.1)',
          padding: '1rem',
          overflow: 'hidden'
        }}>
          {/* Terminal Header with Glitch Effect */}
          <div className="terminal-header" style={{
            backgroundColor: '#8b4513',
            padding: '0.75rem 1rem',
            borderBottom: '2px solid #654321',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: '16px 16px 0 0',
            position: 'relative'
          }}>
            <div style={{
              display: 'flex',
              gap: '0.5rem'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#e94560',
                animation: 'pulse-light 2s infinite'
              }} />
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#ffd700',
                animation: 'pulse-light 2s infinite 0.3s'
              }} />
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#27c93f',
                animation: 'pulse-light 2s infinite 0.6s'
              }} />
            </div>
            <div className="glitch-text" style={{
              color: '#f4e8d0',
              fontSize: '12px',
              fontFamily: '"Courier New", monospace',
              position: 'relative'
            }} data-text="quotes@portfolio:~$">
              quotes@portfolio:~$
            </div>
          </div>
          
          {/* Terminal Content */}
          <div style={{
            backgroundColor: '#2c1810',
            padding: '2rem',
            textAlign: 'center',
            borderBottom: '4px solid #8b4513',
            borderRadius: '0 0 16px 16px',
            cursor: 'pointer'
          }}
          onClick={() => {
            setIsQuoteTransitioning(true);
            setTimeout(() => {
              setCurrentQuoteIndex((prev) => (prev + 1) % luffyQuotes.length);
              setIsQuoteTransitioning(false);
            }, 300);
          }}>
            <div style={{
              fontSize: '1.3rem',
              fontStyle: 'italic',
              color: '#f4e8d0',
              fontFamily: '"Courier New", monospace',
              minHeight: '5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              opacity: isQuoteTransitioning ? 0 : 1,
              transform: isQuoteTransitioning ? 'translateY(10px)' : 'translateY(0)',
              transition: 'all 0.3s ease'
            }}>
              <div>&ldquo;{luffyQuotes[currentQuoteIndex].japanese}&rdquo;</div>
              <div style={{
                fontSize: '0.9rem',
                opacity: '0.7',
                fontStyle: 'normal'
              }}>
                {luffyQuotes[currentQuoteIndex].english}
              </div>
            </div>
            <div style={{
              marginTop: '1rem',
              fontSize: '0.7rem',
              color: '#8b949e',
              opacity: 0.5
            }}>
              Click to see next quote • Auto-rotates every 6s
            </div>
          </div>
        </div>

        {/* Global Styles */}
        <style>{`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
          
          @keyframes pulse-light {
            0%, 100% { opacity: 1; box-shadow: 0 0 5px currentColor; }
            50% { opacity: 0.6; box-shadow: 0 0 15px currentColor; }
          }
          
          .glitch-text {
            position: relative;
          }
          
          .glitch-text::before,
          .glitch-text::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          
          .glitch-text::before {
            animation: glitch-1 2s infinite;
            color: #e94560;
            z-index: -1;
          }
          
          .glitch-text::after {
            animation: glitch-2 2s infinite;
            color: #27c93f;
            z-index: -2;
          }
          
          @keyframes glitch-1 {
            0%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
            20% { clip-path: inset(20% 0 60% 0); transform: translate(-2px, 2px); }
            40% { clip-path: inset(40% 0 40% 0); transform: translate(2px, -2px); }
            60% { clip-path: inset(60% 0 20% 0); transform: translate(-2px, -2px); }
            80% { clip-path: inset(80% 0 0% 0); transform: translate(2px, 2px); }
          }
          
          @keyframes glitch-2 {
            0%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
            20% { clip-path: inset(60% 0 20% 0); transform: translate(2px, -2px); }
            40% { clip-path: inset(40% 0 40% 0); transform: translate(-2px, 2px); }
            60% { clip-path: inset(20% 0 60% 0); transform: translate(2px, 2px); }
            80% { clip-path: inset(0% 0 80% 0); transform: translate(-2px, -2px); }
          }
          
          .skill-card:hover .skill-glow {
            opacity: 1 !important;
          }
          
          .skill-card:hover svg {
            transform: translateZ(30px) scale(1.1) !important;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Skills;
