import React from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon, TwitterIcon } from './Icons';
import Skills from './Skills';

const About: React.FC = () => {
  const socials = [
    { href: 'https://github.com/M0x37', icon: GithubIcon, label: 'GitHub' },
    { href: 'https://x.com/Max3702q', icon: TwitterIcon, label: 'X' },
    { href: 'https://info.m0x2.de/', icon: ExternalLink, label: 'Links' },
  ];

  return (
    <>
      <section className="section" id="about" aria-labelledby="about-heading">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">About me</p>
              <h2 id="about-heading">A maker at heart.</h2>
            </div>
            <p>I enjoy building clear interfaces, useful tools and small experiments that bring ideas to life.</p>
          </div>

          <div className="feature-grid">
            <article className="bio-panel">
              <p className="bio-quote">
                “The best part is seeing a rough idea become something people can actually <strong>use.</strong>”
              </p>
              <p className="bio-details">
                I&apos;m a 14-year-old web developer and hobby electronics engineer based in Germany. Most of my time goes into
                building with React and Python, exploring new tools and learning by making things from scratch.
              </p>
              <div className="social-row">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    className="icon-link"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${social.label}`}
                  >
                    <social.icon className="w-[17px] h-[17px]" />
                  </a>
                ))}
              </div>
            </article>

            <aside className="facts-panel" aria-label="Quick facts">
              <span className="panel-label">Quick facts</span>
              <ul className="fact-list">
                <li><span>Age</span><strong>14</strong></li>
                <li><span>Based in</span><strong>Germany</strong></li>
                <li><span>Focus</span><strong>React &amp; Python</strong></li>
                <li><span>Also building</span><strong>Hardware projects</strong></li>
              </ul>
            </aside>
          </div>
        </div>
      </section>
      <Skills />
    </>
  );
};

export default About;
