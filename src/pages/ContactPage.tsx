import React from 'react';
import { ExternalLink, Mail, MapPin } from 'lucide-react';
import { GithubIcon, TwitterIcon } from '../components/Icons';

const socials = [
  { href: 'https://github.com/M0x37', icon: GithubIcon, label: 'GitHub' },
  { href: 'https://x.com/Max3702q', icon: TwitterIcon, label: 'X' },
  { href: 'https://info.m0x2.de/', icon: ExternalLink, label: 'Links' },
];

const ContactPage: React.FC = () => (
  <main className="contact-page">
    <div className="contact-shell">
      <header className="contact-hero">
        <p className="eyebrow">Contact</p>
        <h1>Let&apos;s make something useful.</h1>
        <p className="contact-copy">
          Got an idea, a project or just want to say hello? Feel free to reach out or find me through one of the links below.
        </p>
      </header>

      <div className="contact-cards">
        <article className="contact-card" data-testid="contact-email-card">
          <span className="contact-card-icon"><Mail size={19} strokeWidth={2.3} /></span>
          <small>Email</small>
          <a href="mailto:maxschueller11@gmail.com">maxschueller11@gmail.com</a>
        </article>
        <article className="contact-card" data-testid="contact-location-card">
          <span className="contact-card-icon"><MapPin size={19} strokeWidth={2.3} /></span>
          <small>Location</small>
          <p>Germany</p>
        </article>
      </div>

      <div className="social-row contact-socials" aria-label="Social profiles">
        {socials.map((social) => (
          <a
            key={social.label}
            className="icon-link"
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${social.label}`}
          >
            <social.icon className="w-[18px] h-[18px]" />
          </a>
        ))}
      </div>
    </div>
  </main>
);

export default ContactPage;
