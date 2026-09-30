import { SKILLS } from '../constants';

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50/50 dark:bg-slate-900/50 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-slideInUp">
          <span className="text-xs uppercase tracking-widest font-bold text-blue-600 dark:text-cyan-400 mb-2 block">
            Capabilities & Tools
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((skillGroup, index) => (
            <div
              key={index}
              className="animate-slideInUp p-7 bg-white dark:bg-slate-800/80 rounded-2xl border border-gray-200/80 dark:border-slate-700/80 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 backdrop-blur-sm group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100 dark:border-slate-700/60">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-colors">
                  {skillGroup.category}
                </h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-cyan-300">
                  {skillGroup.skills.length} skills
                </span>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gray-50 dark:bg-slate-900/90 text-gray-800 dark:text-gray-200 border border-gray-200/60 dark:border-slate-700/60 hover:border-blue-500/50 hover:bg-blue-50/50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-cyan-400 hover:scale-105 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
