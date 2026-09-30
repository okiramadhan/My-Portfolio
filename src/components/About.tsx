import { PERSONAL_INFO } from '../constants';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0e172a] text-slate-900 dark:text-white transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-slideInUp">
          <span className="text-xs uppercase tracking-widest font-bold text-blue-600 dark:text-cyan-400 mb-2 block">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-300">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Profile Image */}
          <div className="flex justify-center animate-slideInUp">
            <div className="relative w-72 h-72 md:w-80 md:h-80 group">
              {/* Glow background */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 rounded-3xl blur-xl opacity-25 dark:opacity-40 group-hover:opacity-60 transition duration-500"></div>
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-200 dark:border-slate-700/60 bg-slate-900">
                <img 
                  src="/images/me2.jpeg" 
                  alt="Muhammad Oki Ramadhan" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="space-y-6 animate-slideInUp">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-blue-600 dark:text-cyan-400 mb-2 block">
                Who I Am
              </span>
              <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
                Muhammad Oki Ramadhan
              </h3>
              <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-sm flex items-center space-x-3.5 hover:border-blue-500 dark:hover:border-cyan-500/50 transition-colors">
                <div className="flex-shrink-0 h-9 w-9 rounded-lg bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-cyan-400 flex items-center justify-center font-bold">
                  ✓
                </div>
                <p className="text-sm md:text-base text-slate-800 dark:text-slate-200">
                  <span className="font-bold text-slate-900 dark:text-white">Full-Time Frontend Developer</span> at <span className="font-bold text-blue-600 dark:text-cyan-400">PT. Metanouva Informatika (Digitak)</span>
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-sm flex items-center space-x-3.5 hover:border-blue-500 dark:hover:border-cyan-500/50 transition-colors">
                <div className="flex-shrink-0 h-9 w-9 rounded-lg bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 flex items-center justify-center font-bold">
                  ✓
                </div>
                <p className="text-sm md:text-base text-slate-800 dark:text-slate-200">
                  Currently in <span className="font-bold text-slate-900 dark:text-white">Semester 7</span> of Computer Science studies
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-sm flex items-center space-x-3.5 hover:border-blue-500 dark:hover:border-cyan-500/50 transition-colors">
                <div className="flex-shrink-0 h-9 w-9 rounded-lg bg-teal-100 dark:bg-teal-500/20 text-teal-700 dark:text-teal-300 flex items-center justify-center font-bold">
                  ✓
                </div>
                <p className="text-sm md:text-base text-slate-800 dark:text-slate-200">
                  Specialized in <span className="font-bold text-slate-900 dark:text-white">React.js, Next.js, Flutter, TypeScript & Tailwind CSS</span>
                </p>
              </div>
            </div>

            {/* Contact Details Card */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs">
                <span className="text-slate-500 dark:text-slate-400 block font-medium mb-1">Email</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100 truncate block">{PERSONAL_INFO.email}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs">
                <span className="text-slate-500 dark:text-slate-400 block font-medium mb-1">Phone</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100 block">{PERSONAL_INFO.phone}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs">
                <span className="text-slate-500 dark:text-slate-400 block font-medium mb-1">Location</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100 block">{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
