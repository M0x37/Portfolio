import React, { useEffect, useRef } from 'react';

const Skills: React.FC = () => {
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

  const skills = [
    { name: 'React', icon: 'react', desc: 'Frontend Framework' },
    { name: 'Python', icon: 'py', desc: 'Backend & Scripts' },
    { name: 'HTML/CSS', icon: 'html', desc: 'Core Web Tech' },
    { name: 'GitHub', icon: 'github', desc: 'Version Control' },
    { name: 'Arch', icon: 'arch', desc: 'Daily Driver' },
    { name: 'Raspberry Pi', icon: 'raspberrypi', desc: 'Running a Homelab' },
  ];

  return (
    <section ref={sectionRef} id="skills">
      <div className="reveal mb-12">
        <span className="text-accent font-mono text-xs tracking-[0.2em] uppercase">Skills</span>
        <h2 className="font-heading font-bold tracking-tight text-white text-3xl sm:text-4xl lg:text-5xl mt-3">
          What I use
        </h2>
        <div className="w-12 h-0.5 bg-accent/50 mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`reveal ${index === 0 ? '' : `reveal-d${index + 1}`} group bg-[#121212] border border-white/10 rounded-xl p-6 hover:border-accent/20 hover:bg-[#161616] transition-all duration-300`}
            data-testid={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/10 flex items-center justify-center overflow-hidden">
                <img
                  src={`https://skillicons.dev/icons?i=${skill.icon}`}
                  alt={skill.name}
                  className="w-6 h-6"
                />
              </div>
              <div>
                <h3 className="text-white font-medium text-base font-heading">{skill.name}</h3>
                <p className="text-neutral-500 text-sm mt-0.5">{skill.desc}</p>
              </div>
            </div>
            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full w-full rounded-full bg-gradient-to-r from-accent/60 to-accent" />
            </div>
          </div>
        ))}
      </div>

      {/* Currently Learning */}
      <div className="reveal reveal-d4 mt-10">
        <div className="bg-[#121212] border border-white/10 rounded-xl p-6 hover:border-accent/20 transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-accent font-mono text-[10px] tracking-[0.2em] uppercase">Currently Learning</span>
            <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-neutral-300 font-mono">
              <img src="https://skillicons.dev/icons?i=raspberrypi" alt="PCB Design" className="w-4 h-4" />
              PCB Design
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-neutral-300 font-mono">
              <img src="https://skillicons.dev/icons?i=py" alt="Prompt Engineering" className="w-4 h-4" />
              Prompt Engineering
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
