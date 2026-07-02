import React, { useEffect, useRef } from 'react';
import { ExternalLink, Quote } from 'lucide-react';
import { GithubIcon, TwitterIcon } from './Icons';
import Skills from './Skills';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const targets = entry.target.querySelectorAll('.reveal');
          targets.forEach((el, i) => {
            setTimeout(() => el.classList.add('revealed'), i * 100);
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
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen bg-[#0A0A0A] py-32 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none">
        <div
          className="w-full h-full rounded-full opacity-[0.06]"
          style={{
            background: 'radial-gradient(circle, rgba(129,140,248,1) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        {/* Section header */}
        <div className="reveal mb-16">
          <span className="text-accent font-mono text-xs tracking-[0.2em] uppercase">About</span>
          <h2 className="font-heading font-bold tracking-tight text-white text-3xl sm:text-4xl lg:text-5xl mt-3">
            Who I am
          </h2>
          <div className="w-12 h-0.5 bg-accent/50 mt-4 rounded-full" />
        </div>

        {/* Bio card */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-20">
          <div className="lg:col-span-3 reveal reveal-d1">
            <div className="bg-[#121212] border border-white/10 rounded-xl p-8 h-full hover:border-accent/20 transition-all duration-500">
              <Quote className="w-6 h-6 text-accent/40 mb-4" />
              <p className="text-neutral-300 text-base leading-relaxed font-body">
                Hey, welcome to my portfolio! I'm a 14-year-old web developer and hobby electronic engineer from Germany, passionate about building clean. I love turning ideas into reality through code and constantly exploring new technologies.
              </p>
              <div className="flex gap-3 mt-6">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-neutral-400 hover:text-accent hover:bg-white/10 hover:border-accent/30 transition-all duration-200"
                    aria-label={`Visit ${social.label} profile`}
                    data-testid={`social-${social.label.toLowerCase()}`}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 reveal reveal-d2">
            <div className="bg-[#121212] border border-white/10 rounded-xl p-8 h-full hover:border-accent/20 transition-all duration-500">
              <span className="text-xs text-neutral-500 font-mono uppercase tracking-wider">Quick Facts</span>
              <ul className="mt-4 space-y-3">
                {[
                  ['Age', '14'],
                  ['From', 'Germany'],
                  ['Role', 'Web Developer & Hobby Electronic Engineer'],
                  ['Focus', 'React & Python'],
                ].map(([label, value]) => (
                  <li key={label} className="border-b border-white/5 pb-3 last:border-0 last:pb-0">
                    <span className="text-neutral-500 text-xs">{label}</span>
                    <p className="text-white text-sm font-medium leading-snug mt-0.5">{value}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Skills />
      </div>
    </section>
  );
};

export default About;
