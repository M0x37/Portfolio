import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPaperPlane, faUser, faSkull } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinktree } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await emailjs.send(
        'service_ttlv9ps',
        'template_rma27or',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'maxschueller11@gmail.com'
        },
        'gujzx7hF_Xo8XTtiy'
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
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
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#8b4513',
        padding: '1rem',
        textAlign: 'center',
        border: '3px solid #654321',
        borderRadius: '8px',
        margin: '2rem'
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
          <FontAwesomeIcon icon={faSkull} style={{ marginRight: '0.5rem' }} />
          Get in Touch
        </h1>
      </header>
      
      <section style={{
        flex: '1',
        backgroundColor: 'rgba(244, 232, 208, 0.8)',
        padding: '2rem',
        border: '3px solid #8b4513',
        borderRadius: '8px',
        margin: '0 2rem 2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start'
        }}>
          
          {/* Contact Info */}
          <div>
            <p 
              style={{
                fontSize: '1.2rem',
                color: '#2c1810',
                opacity: 0.8,
                marginBottom: '3rem',
                lineHeight: '1.6'
              }}
              tabIndex={0}
            >
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to get in touch!
            </p>

            {/* Social Links */}
            <div 
              style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '3rem'
              }}
              role="group"
              aria-label="Social media links"
            >
              <a
                href="https://github.com/M0x37"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(139, 69, 19, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#8b4513',
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  border: '2px solid #8b4513'
                }}
                role="button"
                aria-label="Visit GitHub profile"
                tabIndex={0}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#c9d1d9';
                  e.currentTarget.style.color = '#171616';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(201, 209, 217, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(201, 209, 217, 0.1)';
                  e.currentTarget.style.color = '#c9d1d9';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                onFocus={(e) => {
                  e.currentTarget.style.backgroundColor = '#c9d1d9';
                  e.currentTarget.style.color = '#171616';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(201, 209, 217, 0.3)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(201, 209, 217, 0.1)';
                  e.currentTarget.style.color = '#c9d1d9';
                  e.currentTarget.style.transform = 'translateY(0)';
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
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(139, 69, 19, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#8b4513',
                  fontSize: '1.1rem',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  border: '2px solid #8b4513'
                }}
                role="button"
                aria-label="Visit Twitter profile"
                tabIndex={0}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#8b4513';
                  e.currentTarget.style.color = '#f4e8d0';
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.1)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(139, 69, 19, 0.5)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(139, 69, 19, 0.1)';
                  e.currentTarget.style.color = '#8b4513';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                onFocus={(e) => {
                  e.currentTarget.style.backgroundColor = '#c9d1d9';
                  e.currentTarget.style.color = '#171616';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(201, 209, 217, 0.3)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(201, 209, 217, 0.1)';
                  e.currentTarget.style.color = '#c9d1d9';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <FontAwesomeIcon icon={faLinktree} />
              </a>
            </div>

            {/* Contact Details */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem'
            }}>
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.5rem',
                  backgroundColor: 'rgba(201, 209, 217, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(201, 209, 217, 0.1)',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(201, 209, 217, 0.08)';
                  e.currentTarget.style.transform = 'translateX(5px)';
                  e.currentTarget.style.borderColor = 'rgba(201, 209, 217, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(201, 209, 217, 0.05)';
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.borderColor = 'rgba(201, 209, 217, 0.1)';
                }}
                onFocus={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(201, 209, 217, 0.08)';
                  e.currentTarget.style.transform = 'translateX(3px)';
                  e.currentTarget.style.borderColor = 'rgba(201, 209, 217, 0.2)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(201, 209, 217, 0.05)';
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.borderColor = 'rgba(201, 209, 217, 0.1)';
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #8b4513, #654321)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#f4e8d0',
                  fontSize: '1.2rem',
                  boxShadow: '0 2px 8px rgba(139, 69, 19, 0.4)'
                }}
                  aria-hidden="true"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#5d4037',
                    marginBottom: '0.25rem',
                    fontWeight: '500'
                  }}>
                    Email
                  </div>
                  <div style={{
                    fontSize: '1rem',
                    color: '#2c1810',
                    fontWeight: '600'
                  }}>
                    maxschueller11@gmail.com
                  </div>
                </div>
              </div>

              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.5rem',
                  backgroundColor: 'rgba(201, 209, 217, 0.05)',
                  borderRadius: '12px',
                  border: '1px solid rgba(201, 209, 217, 0.1)',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(201, 209, 217, 0.08)';
                  e.currentTarget.style.transform = 'translateX(5px)';
                  e.currentTarget.style.borderColor = 'rgba(201, 209, 217, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(201, 209, 217, 0.05)';
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.borderColor = 'rgba(201, 209, 217, 0.1)';
                }}
                onFocus={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(201, 209, 217, 0.08)';
                  e.currentTarget.style.transform = 'translateX(3px)';
                  e.currentTarget.style.borderColor = 'rgba(201, 209, 217, 0.2)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(201, 209, 217, 0.05)';
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.borderColor = 'rgba(201, 209, 217, 0.1)';
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #8b4513, #654321)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#f4e8d0',
                  fontSize: '1.2rem',
                  boxShadow: '0 2px 8px rgba(139, 69, 19, 0.4)'
                }}
                aria-hidden="true"
                >
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#5d4037',
                    marginBottom: '0.25rem',
                    fontWeight: '500'
                  }}>
                    Location
                  </div>
                  <div style={{
                    fontSize: '1rem',
                    color: '#2c1810',
                    fontWeight: '600'
                  }}>
                    Germany
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            backgroundColor: 'rgba(244, 232, 208, 0.95)',
            borderRadius: '16px',
            padding: '3rem',
            border: '3px solid #8b4513',
            boxShadow: '0 8px 32px rgba(139, 69, 19, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #8b4513 0%, #654321 50%, #8b4513 100%)',
            }} 
              aria-hidden="true"
            />
            
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              margin: '0 0 2rem 0',
              color: '#2c1810',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: '"Courier New", monospace'
            }}>
              <FontAwesomeIcon icon={faPaperPlane} style={{ fontSize: '1.2rem' }} />
              Send me a message
            </h3>
            
            <form 
              onSubmit={handleSubmit} 
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}
              noValidate
              aria-label="Contact form"
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label 
                  htmlFor="name"
                  style={{ 
                    color: '#2c1810', 
                    fontSize: '0.9rem', 
                    fontWeight: '500', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    fontFamily: '"Courier New", monospace'
                  }}
                >
                  <FontAwesomeIcon icon={faUser} style={{ fontSize: '0.8rem', marginRight: '0.5rem' }} />
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  aria-required="true"
                  aria-describedby="name-error"
                  style={{
                    backgroundColor: 'rgba(244, 232, 208, 0.8)',
                    border: '2px solid #8b4513',
                    borderRadius: '8px',
                    padding: '1rem',
                    color: '#2c1810',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    fontFamily: '"Georgia", serif'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#654321';
                    e.currentTarget.style.backgroundColor = '#f4e8d0';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(139, 69, 19, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#8b4513';
                    e.currentTarget.style.backgroundColor = 'rgba(244, 232, 208, 0.8)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label 
                  htmlFor="email"
                  style={{ 
                    color: '#2c1810', 
                    fontSize: '0.9rem', 
                    fontWeight: '500', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    fontFamily: '"Courier New", monospace'
                  }}
                >
                  <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '0.8rem', marginRight: '0.5rem' }} />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  aria-required="true"
                  aria-describedby="email-error"
                  style={{
                    backgroundColor: 'rgba(244, 232, 208, 0.8)',
                    border: '2px solid #8b4513',
                    borderRadius: '8px',
                    padding: '1rem',
                    color: '#2c1810',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    fontFamily: '"Georgia", serif'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#654321';
                    e.currentTarget.style.backgroundColor = '#f4e8d0';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(139, 69, 19, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#8b4513';
                    e.currentTarget.style.backgroundColor = 'rgba(244, 232, 208, 0.8)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label 
                  htmlFor="message"
                  style={{ 
                    color: '#2c1810', 
                    fontSize: '0.9rem', 
                    fontWeight: '500',
                    fontFamily: '"Courier New", monospace'
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={6}
                  required
                  aria-required="true"
                  aria-describedby="message-error"
                  style={{
                    backgroundColor: 'rgba(244, 232, 208, 0.8)',
                    border: '2px solid #8b4513',
                    borderRadius: '8px',
                    padding: '1rem',
                    color: '#2c1810',
                    fontSize: '1rem',
                    resize: 'vertical',
                    fontFamily: '"Georgia", serif',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#654321';
                    e.currentTarget.style.backgroundColor = '#f4e8d0';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(139, 69, 19, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#8b4513';
                    e.currentTarget.style.backgroundColor = 'rgba(244, 232, 208, 0.8)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  background: 'linear-gradient(135deg, #8b4513 0%, #654321 100%)',
                  color: '#f4e8d0',
                  border: '3px solid #8b4513',
                  borderRadius: '8px',
                  padding: '1rem 2rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  alignSelf: 'flex-start',
                  opacity: isSubmitting ? 0.7 : 1,
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(139, 69, 19, 0.4)',
                  fontFamily: '"Courier New", monospace',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
                aria-label={isSubmitting ? 'Sending message...' : 'Send message'}
                aria-busy={isSubmitting}
                onMouseOver={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #654321 0%, #8b4513 100%)';
                    e.currentTarget.style.transform = 'translateY(-2px) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(139, 69, 19, 0.6)';
                  }
                }}
                onMouseOut={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #8b4513 0%, #654321 100%)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(139, 69, 19, 0.4)';
                  }
                }}
                onFocus={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #654321 0%, #8b4513 100%)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(139, 69, 19, 0.5)';
                  }
                }}
                onBlur={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #8b4513 0%, #654321 100%)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(139, 69, 19, 0.4)';
                  }
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
              </button>
              
              {submitStatus === 'success' && (
                <div 
                  style={{
                    color: '#2c1810',
                    fontSize: '0.9rem',
                    marginTop: '1rem',
                    padding: '1rem',
                    backgroundColor: 'rgba(139, 69, 19, 0.15)',
                    border: '2px solid #8b4513',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    animation: 'slideIn 0.5s ease-out'
                  }}
                  role="alert"
                  aria-live="polite"
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div 
                  style={{
                    color: '#8b0000',
                    fontSize: '0.9rem',
                    marginTop: '1rem',
                    padding: '1rem',
                    backgroundColor: 'rgba(139, 0, 0, 0.1)',
                    border: '2px solid #8b0000',
                    borderRadius: '8px',
                    animation: 'shake 0.5s ease-out'
                  }}
                  role="alert"
                  aria-live="polite"
                >
                  <FontAwesomeIcon icon={faPaperPlane} /> Failed to send message. Please try again or contact me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Global styles */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        /* Focus visible styles for better accessibility */
        :focus-visible {
          outline: 2px solid #c9d1d9;
          outline-offset: 2px;
        }
        
        /* High contrast mode support */
        @media (prefers-contrast: high) {
          section {
            border: 2px solid #ffffff;
          }
          
          input, textarea {
            border: 2px solid #ffffff !important;
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
    </div>
  );
};

export default ContactPage;
