import React from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon, TwitterIcon } from './Icons';
import Skills from './Skills';
import { copy, type Locale } from '../i18n';

type AboutProps = { locale: Locale };

const About: React.FC<AboutProps> = ({ locale }) => {
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
              <p className="eyebrow">{copy.about.eyebrow[locale]}</p>
              <h2 id="about-heading">{copy.about.heading[locale]}</h2>
            </div>
            <p>{copy.about.intro[locale]}</p>
          </div>

          <div className="feature-grid">
            <article className="bio-panel">
              <p className="bio-quote">
                {copy.about.quote[locale].replace('use.', 'use.')} 
              </p>
              <p className="bio-details">{copy.about.bio[locale]}</p>
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

            <aside className="facts-panel" aria-label={copy.about.quickFacts[locale]}>
              <span className="panel-label">{copy.about.quickFacts[locale]}</span>
              <ul className="fact-list">
                <li><span>{copy.about.age[locale]}</span><strong>14</strong></li>
                <li><span>{copy.about.basedIn[locale]}</span><strong>{copy.about.germany[locale]}</strong></li>
                <li><span>{copy.about.focus[locale]}</span><strong>{copy.about.focusValue[locale]}</strong></li>
                <li><span>{copy.about.building[locale]}</span><strong>{copy.about.hardware[locale]}</strong></li>
              </ul>
            </aside>
          </div>
        </div>
      </section>
      <Skills locale={locale} />
    </>
  );
};

export default About;
