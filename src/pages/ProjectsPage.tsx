import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    number: '01',
    title: 'tempbox',
    glyph: '°C',
    tone: 'tempbox',
    description: 'A low-budget temperature monitor for my room, paired with a companion Android app.',
    tech: ['C', 'Capacitor', 'React', 'IoT'],
    url: '',
  },
  {
    number: '02',
    title: 'Robot Arm',
    glyph: '↳',
    tone: 'robot',
    description: 'A programmable robot arm I built as a hands-on portfolio project.',
    tech: ['React', 'Arduino Code', 'ESP32'],
    url: 'https://github.com/M0x37/ROBOT_ARM',
  },
  {
    number: '03',
    title: 'Planar',
    glyph: '□',
    tone: 'planar',
    description: 'A focused project manager designed to make planning feel simpler.',
    tech: ['React', 'TypeScript', 'GitHub OAuth', 'JWT'],
    url: 'https://pplanar.vercel.app/',
  },
];

const ProjectsPage: React.FC = () => (
  <main>
    <section className="project-hero" aria-labelledby="projects-heading">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h1 id="projects-heading">Projects made to be used.</h1>
          </div>
          <p>A selection of software and hardware projects I use to explore ideas, learn by building and improve along the way.</p>
        </div>
      </div>
    </section>

    <section className="section" aria-label="Project list">
      <div className="container project-list">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className={`project-visual project-visual--${project.tone}`} aria-hidden="true">
              <span className="project-number">PROJECT {project.number}</span>
              <span className="project-glyph">{project.glyph}</span>
            </div>
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="tech-list" aria-label={`${project.title} technologies`}>
                {project.tech.map((tech) => <span className="tag" key={tech}>{tech}</span>)}
              </div>
              {project.url ? (
                <a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer">
                  View project <ArrowUpRight size={16} strokeWidth={2.25} />
                </a>
              ) : (
                <span className="project-link is-disabled">Currently in progress</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  </main>
);

export default ProjectsPage;
