import React from 'react';
import { Box, Code2, Cpu, GitBranch, Server, Terminal } from 'lucide-react';
import { copy, type Locale } from '../i18n';

type SkillsProps = { locale: Locale };

const skills = [
  { nameKey: 'react', descriptionKey: 'react', icon: Code2 },
  { nameKey: 'python', descriptionKey: 'python', icon: Terminal },
  { nameKey: 'htmlCss', descriptionKey: 'htmlCss', icon: Box },
  { nameKey: 'github', descriptionKey: 'github', icon: GitBranch },
  { nameKey: 'linux', descriptionKey: 'linux', icon: Server },
  { nameKey: 'hardware', descriptionKey: 'hardware', icon: Cpu },
] as const;

const Skills: React.FC<SkillsProps> = ({ locale }) => (
  <section className="section is-soft" id="skills" aria-labelledby="skills-heading">
    <div className="container">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{copy.skills.eyebrow[locale]}</p>
          <h2 id="skills-heading">{copy.skills.heading[locale]}</h2>
        </div>
        <p>{copy.skills.intro[locale]}</p>
      </div>

      <div className="skill-grid">
        {skills.map((skill) => {
          const Icon = skill.icon;
          const name = copy.skills.skillNames[skill.nameKey][locale];
          const description = copy.skills.descriptions[skill.descriptionKey][locale];
          return (
            <article key={name} className="skill-card" data-testid={`skill-card-${name.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="skill-card-head">
                <span className="skill-icon"><Icon size={18} strokeWidth={2.2} /></span>
                <span className="skill-index">{name.slice(0, 1)}</span>
              </div>
              <h3>{name}</h3>
              <p>{description}</p>
            </article>
          );
        })}
      </div>

      <aside className="learning-panel" aria-label={copy.skills.currentlyLearning[locale]}>
        <div className="learning-text"><span>{copy.skills.currentlyLearning[locale]}</span></div>
        <div className="learning-tags">
          <span className="tag">PCB Design</span>
          <span className="tag">Prompt Engineering</span>
        </div>
      </aside>
    </div>
  </section>
);

export default Skills;
