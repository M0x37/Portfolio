import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const ProjectsPage: React.FC = () => {
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

  const projects = [
    {
      title: 'tempbox',
      description: 'A low Budget temperature monitoring box for my Room, with a working Android APK App.',
      tech: ['C', 'Capacitor', 'React', 'IOT'],
      url: '',
    },
    {
      title: 'Robot Arm',
      description: 'A programmable robot arm for my Portfolio.',
      tech: ['React', 'Arduino Code', 'esp32'],
      url: 'https://github.com/M0x37/ROBOT_ARM',
    },
    {
      title: 'Planar',
      description: 'The Perfect Project Manager.',
      tech: ['React', 'TypeScript', 'Github OAuth', 'JWT'],
      url: 'https://pplanar.vercel.app/',
    },
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-[#0A0A0A] pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="reveal mb-16">
          <span className="text-accent font-mono text-xs tracking-[0.2em] uppercase">Portfolio</span>
          <h1 className="font-heading font-bold tracking-tight text-white text-3xl sm:text-4xl lg:text-5xl mt-3">
            My Projects
          </h1>
          <div className="w-12 h-0.5 bg-accent/50 mt-4 rounded-full" />
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`reveal ${index === 0 ? '' : `reveal-d${index + 1}`} group`}
              >
                <div
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-[#121212] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300`}
                >
                  <div className="lg:w-1/3 bg-white/[0.015] p-8 lg:p-10 flex items-center">
                    <span className="font-heading font-bold text-[3rem] sm:text-[4rem] text-white/[0.04] leading-none">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                  <div className="lg:w-2/3 p-6 lg:p-8 flex flex-col justify-center">
                    <h3 className="font-heading font-bold tracking-tight text-white text-xl sm:text-2xl mb-2 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2.5 py-1 rounded-md bg-white/5 text-neutral-400 text-xs font-mono border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-neutral-500 font-medium hover:text-white transition-colors duration-200 w-fit"
                      data-testid={`project-link-${index}`}
                    >
                      View Project
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
