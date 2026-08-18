import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { GithubIcon, TwitterIcon } from './Icons';

const Hero: React.FC = () => (
  <section className="hero" id="home" aria-labelledby="hero-heading">
    <div className="container hero-layout">
      <div>
        <p className="eyebrow">Web developer · Germany</p>
        <h1 id="hero-heading">
          I turn ideas into <span>useful things.</span>
        </h1>
        <p className="hero-copy">
          I&apos;m Max, a web developer and hobby electronics enthusiast. I enjoy turning small ideas into useful
          digital experiences and working prototypes.
        </p>
        <div className="hero-actions">
          <Link to="/projects" className="button-primary">
            Explore projects <ArrowRight size={17} strokeWidth={2.5} />
          </Link>
          <Link to="/contact" className="button-secondary">Get in touch</Link>
        </div>
        <div className="social-row" aria-label="Social profiles">
          <a className="icon-link" href="https://github.com/M0x37" target="_blank" rel="noopener noreferrer" aria-label="M0x37 on GitHub">
            <GithubIcon className="w-[18px] h-[18px]" />
          </a>
          <a className="icon-link" href="https://x.com/Max3702q" target="_blank" rel="noopener noreferrer" aria-label="M0x37 on X">
            <TwitterIcon className="w-[17px] h-[17px]" />
          </a>
        </div>
      </div>

      <div className="hero-showcase" aria-label="A visual preview of a personal project interface">
        <div className="showcase-window">
          <div className="window-topbar" aria-hidden="true">
            <span className="window-dot is-rausch" />
            <span className="window-dot" />
            <span className="window-dot" />
          </div>
          <div className="window-body" aria-hidden="true">
            <div className="window-sidebar">
              <span className="sidebar-line" />
              <span className="sidebar-line" />
              <span className="sidebar-line" />
              <span className="sidebar-line" />
            </div>
            <div className="window-content">
              <div className="content-kicker">currently building</div>
              <div className="content-title" />
              <div className="content-subtitle" />
              <div className="mini-card-grid">
                <div className="mini-card">
                  <div className="mini-card-mark" />
                  <div className="mini-card-line" />
                  <div className="mini-card-line is-short" />
                </div>
                <div className="mini-card">
                  <div className="mini-card-mark" />
                  <div className="mini-card-line" />
                  <div className="mini-card-line is-short" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="showcase-badge">
          <span className="badge-orb" aria-hidden="true" />
          React interfaces & hardware experiments
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
