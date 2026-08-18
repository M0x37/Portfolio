import React from 'react';
import { Box, Code2, Cpu, GitBranch, Server, Terminal } from 'lucide-react';

const skills = [
  { name: 'React', description: 'Frontend Framework', icon: Code2 },
  { name: 'Python', description: 'Backend & scripts', icon: Terminal },
  { name: 'HTML / CSS', description: 'Core web tech', icon: Box },
  { name: 'GitHub', description: 'Version control', icon: GitBranch },
  { name: 'Arch', description: 'Daily driver', icon: Server },
  { name: 'Raspberry Pi', description: 'Running a homelab', icon: Cpu },
];

const Skills: React.FC = () => (
  <section className="section is-soft" id="skills" aria-labelledby="skills-heading">
    <div className="container">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Toolkit</p>
          <h2 id="skills-heading">What I use to make things.</h2>
        </div>
        <p>The tools I reach for when I design interfaces, script ideas and bring digital and physical projects together.</p>
      </div>

      <div className="skill-grid">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <article key={skill.name} className="skill-card" data-testid={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}>
              <span className="skill-icon"><Icon size={19} strokeWidth={2.2} /></span>
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </article>
          );
        })}
      </div>

      <aside className="learning-panel" aria-label="Currently learning">
        <div className="learning-text"><span>Currently learning</span> Always learning as I go.</div>
        <div className="learning-tags">
          <span className="tag">PCB Design</span>
          <span className="tag">Prompt Engineering</span>
        </div>
      </aside>
    </div>
  </section>
);

export default Skills;
