import React, { useState, useEffect } from 'react';
import { Menu, X, PlayCircle, Sun, Moon, Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#portfolio' },
    { name: 'Resume', href: '#resume' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Hire Me', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-cinema-900/90 backdrop-blur-md py-4 shadow-lg border-b border-gray-200 dark:border-gray-800'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <PlayCircle className="text-cinema-accent group-hover:text-cinema-900 dark:group-hover:text-white transition-colors" size={28} />
          <span className="font-display font-bold text-xl tracking-wider text-gray-900 dark:text-white">
            FAYSI<span className="text-cinema-accent">.EDIT</span>
          </span>
        </a>

        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-cinema-accent dark:hover:text-cinema-accent transition-colors uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}

          <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-2"></div>

          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-cinema-accent dark:hover:text-cinema-accent transition-colors uppercase tracking-wide"
          >
            <Download size={16} />
            Resume
          </a>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a
            href="#contact"
            className="px-5 py-2 bg-cinema-900 dark:bg-white text-white dark:text-cinema-900 font-bold text-sm rounded-full hover:bg-cinema-accent dark:hover:bg-cinema-accent transition-colors shadow-lg"
          >
            Start Project
          </a>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 text-gray-900 dark:text-white">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="text-gray-900 dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-cinema-900 border-t border-gray-200 dark:border-gray-800 shadow-xl">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-gray-800 dark:text-gray-300 hover:text-cinema-accent"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="text-lg font-medium text-gray-800 dark:text-gray-300 hover:text-cinema-accent flex items-center gap-2"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 text-center py-3 bg-cinema-accent text-cinema-900 font-bold rounded-lg shadow-md"
            >
              Start a Project
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;