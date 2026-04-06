import { FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { PERSONAL_INFO } from '../constants';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Muhammad Oki Ramadhan
            </h3>
            <p className="text-gray-400">
              Full-stack software developer specializing in React, Flutter, and mobile development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <a
                href={PERSONAL_INFO.email}
                className="p-3 bg-gray-800 rounded-lg hover:bg-red-500 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} Muhammad Oki Ramadhan. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <FiHeart size={16} className="text-red-500" /> using React & TypeScript
          </p>
          <div className="text-gray-400 text-sm">
            Last Updated: {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
