import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnchor } from '@fortawesome/free-solid-svg-icons';

const ProjectsPage: React.FC = () => {
  const projects = [
    {
      title: "Visio",
      description: "A Real Time face tracking with shootings System.",
      tech: ["React", "JWT", "OpenCV", "Claude"],
      url: "https://example.com"
    },
    {
      title: "My Portfolio",
      description: "My One Piece Themed Portfolio Website.",
      tech: ["React", "Typescript",],
      url: "https://github.com/M0x37/Portfolio"
    },
    {
      title: "NEXUS | OSINt",
      description: "A small OSINT Tool. I leaned to create CLI Tools with it.",
      tech: ["Python", "HTMl", ],
      url: "https://github.com/M0x37/NEXUS-OSINT-TOOL"
    }
  ];

  return (
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
      padding: '2rem'
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#8b4513',
        padding: '1rem',
        textAlign: 'center',
        marginBottom: '2rem',
        border: '3px solid #654321',
        borderRadius: '8px',
        maxWidth: '800px',
        margin: '0 auto 2rem auto'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#f4e8d0',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          fontFamily: '"Courier New", monospace'
        }}>
          <FontAwesomeIcon icon={faAnchor} style={{ marginRight: '0.5rem' }} />
          Projects
        </h1>
      </header>
      
      {/* Projects Section */}
      <section style={{
        flex: '1',
        backgroundColor: 'rgba(244, 232, 208, 0.8)',
        padding: '2rem',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '3rem',
        paddingBottom: '0.5rem',
        border: '3px solid #8b4513',
        borderRadius: '8px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem'
          }}>
            {projects.map((project, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'rgba(244, 232, 208, 0.9)',
                  borderRadius: '16px',
                  padding: '2.5rem',
                  border: '3px solid #8b4513',
                  boxShadow: '0 8px 20px rgba(139, 69, 19, 0.3)',
                  transition: 'all 0.3s ease',
                  textAlign: 'center'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(139, 69, 19, 0.6)';
                  e.currentTarget.style.backgroundColor = '#f4e8d0';
                  e.currentTarget.style.borderColor = '#654321';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(139, 69, 19, 0.3)';
                  e.currentTarget.style.backgroundColor = 'rgba(244, 232, 208, 0.9)';
                  e.currentTarget.style.borderColor = '#8b4513';
                }}
              >
                {/* Project Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    margin: '0',
                    color: '#2c1810',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontFamily: '"Courier New", monospace'
                  }}>
                    {project.title}
                  </h3>
                </div>
                
                <p style={{
                  color: '#5d4037',
                  margin: '0 0 1.5rem 0',
                  lineHeight: 1.6,
                  fontSize: '1rem',
                  fontFamily: '"Georgia", serif',
                  textAlign: 'center'
                }}>
                  {project.description}
                </p>
                
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '2rem',
                  justifyContent: 'center'
                }}>
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      style={{
                        backgroundColor: 'rgba(139, 69, 19, 0.2)',
                        color: '#5d4037',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '8px',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        border: '1px solid rgba(201, 209, 217, 0.15)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: 'transparent',
                    color: '#8b4513',
                    border: '3px solid #8b4513',
                    padding: '0.75rem 1.5rem',
                    fontSize: '1rem',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontFamily: '"Courier New", monospace',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    display: 'inline-block',
                    textAlign: 'center'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(139, 69, 19, 0.6)';
                    e.currentTarget.style.backgroundColor = '#654321';
                    e.currentTarget.style.borderColor = '#8b4513';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(139, 69, 19, 0.4)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = '#8b4513';
                  }}
                >
                  <span style={{ position: 'relative', zIndex: 1 }}>View Project</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
