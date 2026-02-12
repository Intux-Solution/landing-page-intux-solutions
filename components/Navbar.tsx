import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ["Soluciones", "Proceso", "Nosotros"];

  return (
    <nav 
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-white/80 dark:bg-darkBg/80 backdrop-blur-md border-b border-gray-100 dark:border-white/5 py-4' 
          : 'bg-transparent py-6'}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
            <img 
              src={isDark ? "/logo-white.png" : "/logo-dark.png"} 
              alt="Intux Solutions" 
              className="h-8 md:h-9 w-auto object-contain"
            />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right Section: Toggle + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-primary dark:text-white"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Button>Agendar Llamada</Button>
        </div>

        {/* Mobile Menu Toggle + Theme Toggle (Mobile) */}
        <div className="flex items-center gap-4 md:hidden">
            <button 
                onClick={toggleTheme}
                className="p-2 text-primary dark:text-white"
            >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              className="text-primary dark:text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-darkCard border-b border-gray-100 dark:border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 items-center">
              {links.map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-white"
                >
                  {link}
                </a>
              ))}
              <Button className="w-full mt-4" onClick={() => setMobileMenuOpen(false)}>
                Agendar Llamada
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;