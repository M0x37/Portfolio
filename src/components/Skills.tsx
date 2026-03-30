import React, { useState } from 'react';

const Skills: React.FC = () => {
  const skills = [
    'React',
    'Python',
    'HTML+CSS+JS'
  ];

  const luffyQuotes = [
    "I'm gonna be King of the Pirates!",
    "If you don't take risks, you can't create a future!",
    "My friends are my greatest treasure!",
    "Being alone is more painful than getting hurt!",
    "I don't care who you are, I will protect my crew!"
  ];

  const [currentQuote] = useState(() => Math.floor(Math.random() * luffyQuotes.length));

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
          backgroundColor: 'transparent',
          border: '3px solid #8b4513',
          borderRadius: '8px',
          padding: '2px'
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
              marginBottom: '1rem',
              color: '#f4e8d0',
              textTransform: 'lowercase',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
              fontFamily: '"Courier New", monospace'
            }}>
              ls skills/
            </div>
            
            {/* Skills List */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              {skills.map((skill, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '1rem',
                  color: '#f4e8d0'
                }}>
                  <span style={{ color: '#27c93f', fontSize: '1rem' }}>➜</span>
                  <span style={{ color: '#ffbd2e', fontSize: '1rem' }}>./</span>
                  <span style={{
                    color: '#ffffff',
                    fontSize: '1rem',
                    fontWeight: '500'
                  }}>
                    {skill}
                  </span>
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
          backgroundColor: '#2c1810',
          border: '3px solid #8b4513',
          borderRadius: '8px',
          padding: '2rem',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '0.9rem',
            color: '#8b4513',
            marginBottom: '1rem',
            fontFamily: '"Courier New", monospace',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            Captain&apos;s Log
          </div>
          <div style={{
            fontSize: '1.3rem',
            fontStyle: 'italic',
            color: '#f4e8d0',
            fontFamily: '"Courier New", monospace',
            minHeight: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            &ldquo;{luffyQuotes[currentQuote]}&rdquo;
          </div>
        </div>

        {/* Episode Tracker */}
        <div style={{
          marginTop: '2rem',
          backgroundColor: '#2c1810',
          border: '3px solid #8b4513',
          borderRadius: '8px',
          padding: '1.5rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <span style={{ fontSize: '1.5rem' }}>📺</span>
            <div>
              <div style={{
                fontSize: '0.75rem',
                color: '#8b4513',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontFamily: '"Courier New", monospace',
                marginBottom: '0.25rem'
              }}>
                Currently Watching
              </div>
              <div style={{
                fontSize: '0.9rem',
                color: '#f4e8d0',
                fontFamily: '"Courier New", monospace'
              }}>
                One Piece
              </div>
            </div>
          </div>
        </div>

        {/* Global Styles */}
        <style>{`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Skills;
