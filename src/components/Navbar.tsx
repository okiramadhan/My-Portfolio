import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { NAVIGATION_LINKS } from '../constants';
import { scrollToSection } from '../utils/helpers';

interface NavbarProps {
  isDark?: boolean;
  toggleDarkMode?: () => void;
}

export const Navbar = ({}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick('home')}
              className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
            >
              okiramadhan<span className="text-cyan-400">.</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 bg-gray-100/70 dark:bg-slate-800/60 p-1.5 rounded-full border border-gray-200/50 dark:border-slate-700/50">
            {NAVIGATION_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="px-4 py-1.5 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-3 pt-2 pb-4 space-y-1">
            {NAVIGATION_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="block w-full text-left px-4 py-2.5 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
