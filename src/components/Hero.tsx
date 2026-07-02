import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { GithubIcon, TwitterIcon } from './Icons';

const FLOATING_SHAPES = [
  { type: 'circle', size: 60, x: '15%', y: '20%', anim: 'animate-drift' },
  { type: 'square', size: 40, x: '80%', y: '25%', anim: 'animate-drift-reverse' },
  { type: 'circle', size: 30, x: '70%', y: '70%', anim: 'animate-drift' },
  { type: 'square', size: 50, x: '20%', y: '75%', anim: 'animate-drift-reverse' },
  { type: 'circle', size: 20, x: '50%', y: '15%', anim: 'animate-drift-slow' },
];

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setIsVisible(true); }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A] pt-16"
      role="main"
      aria-label="Hero section"
    >
      {/* Mesh gradient background */}
      <div
        className="absolute inset-0 pointer-events-none z-0 animate-mesh"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(129,140,248,0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 50%, rgba(99,102,241,0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 0%, rgba(165,180,252,0.04) 0%, transparent 40%)
          `,
          backgroundSize: '200% 200%',
        }}
      />

      {/* Floating shapes */}
      {FLOATING_SHAPES.map((shape, i) => (
        <div
          key={i}
          className={`absolute pointer-events-none z-0 ${shape.anim}`}
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
            borderRadius: shape.type === 'circle' ? '50%' : '8px',
            border: '1px solid rgba(129, 140, 248, 0.15)',
            background: 'rgba(129, 140, 248, 0.04)',
            backdropFilter: 'blur(4px)',
          }}
        />
      ))}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h1
          className={`transition-all duration-800 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span
            className="font-heading font-extrabold tracking-tight leading-none text-[clamp(4rem,15vw,10rem)] text-gradient"
            style={{
              backgroundImage: 'linear-gradient(135deg, #FFFFFF 0%, #A5B4FC 40%, #818CF8 70%, #6366F1 100%)',
            }}
          >
            M0x37
          </span>
        </h1>

        <div
          className={`flex flex-col sm:flex-row gap-4 mt-2 transition-all duration-800 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          role="group"
          aria-label="Call to action buttons"
        >
          <Link
            to="/projects"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-accent text-white font-medium text-sm hover:bg-accent-dark transition-all duration-200 shadow-lg shadow-accent/20"
            role="button"
            aria-label="View projects"
            tabIndex={0}
            data-testid="hero-projects-btn"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div
          className={`flex gap-4 transition-all duration-800 delay-[1100ms] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a
            href="https://github.com/M0x37"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-accent transition-colors duration-200"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href="https://x.com/Max3702q"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-accent transition-colors duration-200"
            aria-label="Twitter"
          >
            <TwitterIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
