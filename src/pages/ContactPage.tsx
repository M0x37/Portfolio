import React from 'react';
import { ArrowUpRight, ExternalLink, Mail, MapPin } from 'lucide-react';
import { GithubIcon, TwitterIcon } from '../components/Icons';
import { copy, type Locale } from '../i18n';

const socials = [
  { href: 'https://github.com/M0x37', icon: GithubIcon, label: 'GitHub' },
  { href: 'https://x.com/Max3702q', icon: TwitterIcon, label: 'X' },
  { href: 'https://info.m0x2.de/', icon: ExternalLink, label: 'Links' },
];

type ContactPageProps = { locale: Locale };

const ContactPage: React.FC<ContactPageProps> = ({ locale }) => (
  <main className="contact-page-shell">
    <div className="container contact-shell">
      <div className="contact-layout">
        <section className="contact-hero-block">
          <p className="eyebrow">{copy.contact.eyebrow[locale]}</p>
          <h1>{copy.contact.heading[locale]}</h1>
          <p className="contact-copy">{copy.contact.copy[locale]}</p>

          <div className="contact-actions">
            <a href="mailto:maxschueller11@gmail.com" className="button-primary">
              {copy.contact.email[locale]} <ArrowUpRight size={16} strokeWidth={2.4} />
            </a>
            <a href="https://github.com/M0x37" className="button-secondary" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </section>

        <aside className="contact-side-panel">
          <article className="contact-card" data-testid="contact-email-card">
            <span className="contact-card-icon"><Mail size={19} strokeWidth={2.3} /></span>
            <small>{copy.contact.email[locale]}</small>
            <a href="mailto:maxschueller11@gmail.com">maxschueller11@gmail.com</a>
          </article>

          <article className="contact-card" data-testid="contact-location-card">
            <span className="contact-card-icon"><MapPin size={19} strokeWidth={2.3} /></span>
            <small>{copy.contact.location[locale]}</small>
            <p>{copy.about.germany[locale]}</p>
          </article>

          <article className="contact-card contact-card--compact">
            <small>Availability</small>
            <p>Open for client work, experiments and product ideas.</p>
          </article>
        </aside>
      </div>

      <div className="contact-socials-panel" aria-label={copy.contact.socialsAria[locale]}>
        {socials.map((social) => (
          <a
            key={social.label}
            className="social-card"
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${social.label}`}
          >
            <span className="social-card-icon"><social.icon className="w-[18px] h-[18px]" /></span>
            <span>{social.label}</span>
            <ArrowUpRight size={14} strokeWidth={2.2} />
          </a>
        ))}
      </div>
    </div>
  </main>
);

export default ContactPage;
