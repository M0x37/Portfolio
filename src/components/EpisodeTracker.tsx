import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';

const EpisodeTracker: React.FC = () => {
  const [currentEpisode, setCurrentEpisode] = useState(58);
  const [isPlaying, setIsPlaying] = useState(false);
  const totalEpisodes = 1000; // Approximate total episodes

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentEpisode(prev => Math.min(prev + 1, totalEpisodes));
      }, 5000); // Auto-advance every 5 seconds when "playing"
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const handlePrevious = () => {
    setCurrentEpisode(prev => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentEpisode(prev => Math.min(prev + 1, totalEpisodes));
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{
      backgroundColor: '#f4e8d0',
      border: '3px solid #8b4513',
      borderRadius: '8px',
      padding: '1.5rem',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 0 20px rgba(139, 69, 19, 0.1)',
      position: 'relative',
      backgroundImage: 'linear-gradient(135deg, #f4e8d0 0%, #e8dcc0 50%, #dccfb0 100%)',
      fontFamily: '"Courier New", monospace',
      maxWidth: '400px',
      margin: '2rem auto'
    }}>
      {/* Wanted Poster Style Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '1rem',
        borderBottom: '2px solid #8b4513',
        paddingBottom: '0.5rem'
      }}>
        <h2 style={{
          margin: 0,
          color: '#2c1810',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
        }}>
          WANTED
        </h2>
        <p style={{
          margin: '0.5rem 0 0 0',
          color: '#5d4037',
          fontSize: '0.9rem',
          fontStyle: 'italic'
        }}>
          One Piece Episode Tracker
        </p>
      </div>

      {/* Episode Display */}
      <div style={{
        textAlign: 'center',
        marginBottom: '1.5rem',
        padding: '1rem',
        backgroundColor: 'rgba(139, 69, 19, 0.1)',
        borderRadius: '4px',
        border: '1px solid #8b4513'
      }}>
        <div style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#2c1810',
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.4)',
          marginBottom: '0.5rem'
        }}>
          {currentEpisode}
        </div>
        <div style={{
          fontSize: '1rem',
          color: '#5d4037',
          fontWeight: '500'
        }}>
          FOLGE {currentEpisode}
        </div>
        <div style={{
          fontSize: '0.8rem',
          color: '#8b4513',
          marginTop: '0.5rem'
        }}>
          von {totalEpisodes} Episoden
        </div>
      </div>

      {/* Control Buttons */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        marginBottom: '1rem'
      }}>
        <button
          onClick={handlePrevious}
          style={{
            backgroundColor: '#8b4513',
            color: '#f4e8d0',
            border: '2px solid #654321',
            borderRadius: '4px',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#654321';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#8b4513';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
          }}
        >
          <FontAwesomeIcon icon={faBackward} />
        </button>

        <button
          onClick={togglePlayPause}
          style={{
            backgroundColor: '#d2691e',
            color: '#f4e8d0',
            border: '2px solid #a0522d',
            borderRadius: '4px',
            padding: '0.5rem 1.5rem',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#a0522d';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#d2691e';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
          }}
        >
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </button>

        <button
          onClick={handleNext}
          style={{
            backgroundColor: '#8b4513',
            color: '#f4e8d0',
            border: '2px solid #654321',
            borderRadius: '4px',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#654321';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#8b4513';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
          }}
        >
          <FontAwesomeIcon icon={faForward} />
        </button>
      </div>

      {/* Progress Bar */}
      <div style={{
        marginTop: '1rem'
      }}>
        <div style={{
          backgroundColor: '#8b4513',
          height: '8px',
          borderRadius: '4px',
          overflow: 'hidden',
          border: '1px solid #654321'
        }}>
          <div
            style={{
              width: `${(currentEpisode / totalEpisodes) * 100}%`,
              height: '100%',
              backgroundColor: '#d2691e',
              transition: 'width 0.5s ease',
              boxShadow: 'inset 0 0 4px rgba(255, 255, 255, 0.3)'
            }}
          />
        </div>
      </div>

      {/* Aged Paper Texture Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
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
          pointerEvents: 'none',
          borderRadius: '8px'
        }}
      />
    </div>
  );
};

export default EpisodeTracker;
