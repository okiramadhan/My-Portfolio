import { PROJECTS } from '../constants';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 animate-slideInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            A selection of my recent projects showcasing my expertise in web and mobile development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => {
            const hasDemo = Boolean(project.demoLink && project.demoLink !== '#');
            const hasGithub = Boolean(project.githubLink && project.githubLink !== '#');

            const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
              // If click happened inside an interactive element like a button or link, don't trigger card redirect
              const target = e.target as HTMLElement;
              if (target.closest('a') || target.closest('button')) {
                return;
              }
              if (hasDemo) {
                window.open(project.demoLink, '_blank', 'noopener,noreferrer');
              }
            };

            return (
              <div
                key={project.id}
                onClick={handleCardClick}
                className={`animate-slideInUp group flex flex-col h-full bg-white dark:bg-slate-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  hasDemo ? 'cursor-pointer' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                title={hasDemo ? `Buka ${project.title}` : undefined}
              >
                {/* Image Container */}
                <div className="relative h-48 bg-gray-300 dark:bg-slate-700 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    {hasDemo && (
                      <span className="text-white text-xs font-semibold flex items-center gap-1.5 bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm">
                        <span>Kunjungi Website / Aplikasi</span>
                        <FiExternalLink />
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow line-clamp-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-slate-700 mt-auto">
                    {hasDemo && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group/link text-sm"
                      >
                        <span>Kunjungi</span>
                        <FiExternalLink className="group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    )}
                    {hasGithub ? (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 border-2 border-gray-700 dark:border-gray-300 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-700 dark:hover:bg-gray-300 hover:text-white dark:hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2 group/link text-sm"
                      >
                        <span>Code</span>
                        <FiGithub className="group-hover/link:scale-110 transition-transform" />
                      </a>
                    ) : (
                      !hasDemo && (
                        <span className="text-xs text-gray-400 italic py-2">Link segera hadir</span>
                      )
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
