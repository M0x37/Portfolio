import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { copy, type Locale } from '../i18n';

const projects = [
  {
    number: '01',
    title: 'tempbox',
    glyph: '°C',
    tone: 'tempbox',
    descriptionKey: 'tempbox',
    tech: ['C', 'Expo', 'React', 'IoT'],
    url: 'https://github.com/M0x37/TEMPBOX',
  },
  {
    number: '02',
    title: 'Robot Arm',
    glyph: '↳',
    tone: 'robot',
    descriptionKey: 'robot',
    tech: ['React', 'Arduino Code', 'ESP32'],
    url: 'https://github.com/M0x37/ROBOT_ARM',
  },
  {
    number: '03',
    title: 'Runna',
    glyph: '↗',
    tone: 'runna',
    descriptionKey: 'runna',
    tech: ['Expo', 'React', 'Supabase', 'Sentry'],
    url: 'https://runna.m0x2.de',
  },
] as const;

type ProjectsPageProps = { locale: Locale };

const ProjectsPage: React.FC<ProjectsPageProps> = ({ locale }) => (
  <main className="projects-page-shell">
    <section className="project-hero" aria-labelledby="projects-heading">
      <div className="container projects-header-wrap">
        <div className="projects-header-copy">
          <p className="eyebrow">{copy.projects.eyebrow[locale]}</p>
          <h1 id="projects-heading">{copy.projects.heading[locale]}</h1>
        </div>

        <div className="projects-summary">
          <div className="summary-pill"><span>03</span> projects</div>
          <div className="summary-pill"><span>2</span> disciplines</div>
          <div className="summary-pill"><span>∞</span> experiments</div>
        </div>
      </div>
    </section>

    <section className="section projects-section" aria-label="Project list">
      <div className="container project-list">
        {projects.map((project) => (
          <article className={`project-card project-card--${project.tone}`} key={project.title}>
            <div className="project-card-topline">
              <span className="project-number">PROJECT {project.number}</span>
              <span className="project-badge">Built in public</span>
            </div>

            <div className="project-card-layout">
              <div className="project-content">
                <h2>{project.title}</h2>
                <p>{copy.projects.project[project.descriptionKey].description[locale]}</p>

                <div className="tech-list" aria-label={`${project.title} technologies`}>
                  {project.tech.map((tech) => <span className="tag" key={tech}>{tech}</span>)}
                </div>

                {project.url ? (
                  <a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer">
                    {copy.projects.viewProject[locale]} <ArrowUpRight size={16} strokeWidth={2.25} />
                  </a>
                ) : (
                  <span className="project-link is-disabled">{copy.projects.inProgress[locale]}</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  </main>
);

export default ProjectsPage;
