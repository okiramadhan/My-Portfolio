import { PERSONAL_INFO } from '../constants';

export const About = () => {

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 animate-slideInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Profile Image */}
          <div className="flex justify-center animate-slideInUp">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl opacity-10 blur-2xl"></div>
              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-gradient-to-br from-blue-500 to-cyan-500">
                <img 
                  src="/images/me2.jpeg" 
                  alt="Muhammad Oki Ramadhan" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="space-y-6 animate-slideInUp">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Muhammad Oki Ramadhan
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Info Points */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-blue-500 text-white">
                    ✓
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Part-Time Developer</span> with contract until September 2026
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-blue-500 text-white">
                    ✓
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Currently in <span className="font-semibold">Semester 6</span> of my studies
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-blue-500 text-white">
                    ✓
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  Specialized in <span className="font-semibold">React, Flutter, React Native</span>
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="pt-6 border-t border-gray-300 dark:border-slate-700">
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                <span className="font-semibold">Email:</span> {PERSONAL_INFO.email}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                <span className="font-semibold">Phone:</span> {PERSONAL_INFO.phone}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <span className="font-semibold">Location:</span> {PERSONAL_INFO.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
