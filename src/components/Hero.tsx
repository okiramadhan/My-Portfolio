import { FiArrowDown } from 'react-icons/fi';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { scrollToSection } from '../utils/helpers';

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fadeIn space-y-6">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Oki
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                {PERSONAL_INFO.subtitle}
              </h2>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-gray-700 dark:border-gray-300 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-700 dark:hover:bg-gray-300 hover:text-white dark:hover:text-gray-900 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              <a
                href={SOCIAL_LINKS[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={24} />
              </a>
              <a
                href={SOCIAL_LINKS[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-pink-500 dark:hover:bg-pink-500 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <FiMail size={24} />
              </a>
              <a
                href={SOCIAL_LINKS[2].url}
                className="p-3 rounded-full bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-red-500 dark:hover:bg-red-500 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <FiGithub size={24} />
              </a>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-72 h-72">
              {/* Floating Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl opacity-20 blur-3xl animate-pulse"></div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/me.jpeg" 
                  alt="Muhammad Oki Ramadhan" 
                  className="w-full h-full object-cover"
                />
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
