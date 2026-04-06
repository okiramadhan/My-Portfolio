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
              <FiBriefcase className="text-blue-500" />
              Work Experience
            </h3>

            <div className="space-y-6">
              {EXPERIENCE.map((job, index) => (
                <div
                  key={job.id}
                  className="animate-slideInUp relative p-6 bg-gray-50 dark:bg-slate-800 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-4 top-8 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-slate-900"></div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {job.position}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mt-1">
                      {job.company}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      {job.startDate} - {job.endDate} ({job.duration})
                    </p>

                    <ul className="mt-4 space-y-2">
                      {job.description.map((desc, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                        >
                          <span className="text-blue-500 font-bold mt-1">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
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
              <FiAward className="text-cyan-500" />
              Education
            </h3>

            <div className="space-y-6">
              {EDUCATION.map((edu, index) => (
                <div
                  key={edu.id}
                  className="animate-slideInUp relative p-6 bg-gray-50 dark:bg-slate-800 rounded-xl border-l-4 border-cyan-500 hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-4 top-8 w-6 h-6 bg-cyan-500 rounded-full border-4 border-white dark:border-slate-900"></div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-cyan-600 dark:text-cyan-400 font-semibold mt-1">
                      {edu.school}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      {edu.field}
                    </p>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-3 bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300 px-3 py-1 rounded inline-block">
                      {edu.year}
                    </p>
                    {edu.description && (
                      <p className="mt-4 text-gray-700 dark:text-gray-300">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900 dark:to-cyan-900 rounded-xl">
                <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                  Currently Available For
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">✓</span> Full-time opportunities after September 2026
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">✓</span> Freelance projects
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">✓</span> Internships and learning opportunities
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
