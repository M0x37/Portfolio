import React, { useEffect, useRef } from 'react';
import { Mail, MapPin, ExternalLink } from 'lucide-react';
import { GithubIcon, TwitterIcon } from '../components/Icons';

const ContactPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const targets = entry.target.querySelectorAll('.reveal');
          targets.forEach((el, i) => {
            setTimeout(() => el.classList.add('revealed'), i * 120);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const socials = [
    { href: 'https://github.com/M0x37', icon: GithubIcon, label: 'GitHub' },
    { href: 'https://x.com/Max3702q', icon: TwitterIcon, label: 'Twitter' },
    { href: 'https://info.m0x2.de/', icon: ExternalLink, label: 'Linktree' },
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-[#0A0A0A] pt-28 pb-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-3xl mx-auto w-full">
        <div className="reveal mb-12 text-center">
          <span className="text-accent font-mono text-xs tracking-[0.2em] uppercase">Contact</span>
          <h1 className="font-heading font-bold tracking-tight text-white text-3xl sm:text-4xl lg:text-5xl mt-3">
            Get in Touch
          </h1>
          <div className="w-12 h-0.5 bg-accent/50 mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-neutral-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="reveal reveal-d1 flex justify-center gap-4 mb-8">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-neutral-400 hover:text-accent hover:bg-white/10 hover:border-accent/30 transition-all duration-200"
              role="button"
              aria-label={`Visit ${social.label} profile`}
              tabIndex={0}
              data-testid={`contact-social-${social.label.toLowerCase()}`}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl mx-auto">
          <div
            className="reveal reveal-d2 bg-[#121212] border border-white/10 rounded-xl p-7 text-center hover:border-accent/20 transition-all duration-300"
            data-testid="contact-email-card"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-5 h-5 text-accent" />
            </div>
            <p className="text-xs text-neutral-500 font-mono uppercase tracking-wider mb-1.5">Email</p>
            <p className="text-sm text-white font-medium break-all">maxschueller11@gmail.com</p>
          </div>
          <div
            className="reveal reveal-d3 bg-[#121212] border border-white/10 rounded-xl p-7 text-center hover:border-accent/20 transition-all duration-300"
            data-testid="contact-location-card"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-5 h-5 text-accent" />
            </div>
            <p className="text-xs text-neutral-500 font-mono uppercase tracking-wider mb-1.5">Location</p>
            <p className="text-sm text-white font-medium">Germany</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
