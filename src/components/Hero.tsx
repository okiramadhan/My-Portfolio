import { FiArrowDown, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { scrollToSection } from '../utils/helpers';

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-white flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern transition-colors duration-300"
    >
      {/* Decorative Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-blue-500/10 dark:from-blue-600/25 to-cyan-400/10 dark:to-cyan-400/20 rounded-full blur-[130px] pointer-events-none -z-0"></div>
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-[110px] pointer-events-none -z-0"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fadeIn space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs font-semibold shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Full-Time Frontend Developer at PT. Metanouva Informatika
            </div>

            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 dark:from-blue-400 dark:via-cyan-300 dark:to-teal-300 bg-clip-text text-transparent">
                  Oki
                </span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 leading-snug">
                {PERSONAL_INFO.subtitle}
              </h2>
            </div>

            <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-xl font-normal">
              {PERSONAL_INFO.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Lihat Project Saya</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-700 font-semibold rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 hover:border-slate-400 transition-all duration-300 shadow-sm"
              >
                Hubungi Saya
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-4">
              <span className="text-xs uppercase tracking-wider font-bold text-slate-600 dark:text-slate-400 mr-2">
                Connect:
              </span>
              <a
                href={SOCIAL_LINKS[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-blue-600 hover:text-blue-600 hover:bg-white dark:hover:bg-slate-700 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href={SOCIAL_LINKS[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-pink-600 hover:text-pink-600 hover:bg-white dark:hover:bg-slate-700 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                aria-label="Instagram"
              >
                <FiInstagram size={20} />
              </a>
              <a
                href={SOCIAL_LINKS[2].url}
                className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-red-600 hover:text-red-600 hover:bg-white dark:hover:bg-slate-700 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>

          {/* Right - Profile Image with Sleek Modern Frame */}
          <div className="flex items-center justify-center order-first md:order-last">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
              {/* Outer decorative gradient border ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-500 via-cyan-400 to-indigo-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200 dark:border-slate-700/60 bg-slate-900">
                <img 
                  src="/images/me.jpeg" 
                  alt="Muhammad Oki Ramadhan" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-2.5 sm:p-3 rounded-xl bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border border-white/30 dark:border-slate-700/40">
                  <p className="text-xs font-semibold text-gray-900 dark:text-white">Muhammad Oki Ramadhan</p>
                  <p className="text-[10px] sm:text-[11px] text-blue-600 dark:text-cyan-400 font-medium">Frontend & Mobile Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="p-2 rounded-full border-2 border-gray-400 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            aria-label="Scroll down"
          >
            <FiArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};
