import { EXPERIENCE, EDUCATION } from '../constants';
import { FiBriefcase, FiAward } from 'react-icons/fi';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 animate-slideInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience &<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500"> Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Experience and Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <FiBriefcase size={22} />
              </span>
              Work Experience
            </h3>

            <div className="space-y-6 relative border-l-2 border-blue-500/30 dark:border-blue-500/20 ml-3 pl-6">
              {EXPERIENCE.map((job, index) => (
                <div
                  key={job.id}
                  className="animate-slideInUp relative p-6 bg-white dark:bg-slate-800/90 rounded-2xl border border-gray-200/80 dark:border-slate-700/80 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[33px] top-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-slate-900 shadow-md"></div>

                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                        {job.position}
                      </h4>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300">
                        {job.duration}
                      </span>
                    </div>

                    <p className="text-blue-600 dark:text-cyan-400 font-semibold text-sm mt-1">
                      {job.company}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {job.startDate} - {job.endDate}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {job.description.map((desc, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs md:text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                        >
                          <span className="text-blue-500 font-bold mt-0.5">›</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="mt-5 pt-4 border-t border-gray-100 dark:border-slate-700/60 flex flex-wrap gap-1.5">
                      {job.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-gray-50 dark:bg-slate-900 text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-slate-700/60 rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                <FiAward size={22} />
              </span>
              Education
            </h3>

            <div className="space-y-6 relative border-l-2 border-cyan-500/30 dark:border-cyan-500/20 ml-3 pl-6">
              {EDUCATION.map((edu, index) => (
                <div
                  key={edu.id}
                  className="animate-slideInUp relative p-6 bg-white dark:bg-slate-800/90 rounded-2xl border border-gray-200/80 dark:border-slate-700/80 shadow-md hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[33px] top-6 w-4 h-4 bg-cyan-500 rounded-full border-4 border-white dark:border-slate-900 shadow-md"></div>

                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm mt-1">
                      {edu.school}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {edu.field}
                    </p>
                    <span className="text-xs font-semibold mt-3 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300 inline-block">
                      {edu.year}
                    </span>
                    {edu.description && (
                      <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-teal-500/5 dark:from-slate-800/90 dark:to-slate-800/40 border border-blue-500/20 dark:border-slate-700 rounded-2xl backdrop-blur-sm">
                <h4 className="font-bold text-gray-900 dark:text-white mb-3 text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  Currently Open For
                </h4>
                <ul className="space-y-2.5 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500 font-bold">✓</span> High-impact software development projects
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-cyan-500 font-bold">✓</span> Freelance & contract opportunities
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-500 font-bold">✓</span> Tech collaborations and consultations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
