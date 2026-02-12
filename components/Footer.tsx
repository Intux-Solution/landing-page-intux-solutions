import React from 'react';

interface FooterProps {
  isDark: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDark }) => {
  return (
    <footer className="py-10 px-6 border-t border-gray-100 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo Icon */}
        <div className="flex items-center">
            <a href="#" className="block hover:opacity-100 transition-opacity opacity-80">
              <img 
                src={isDark ? "/logo-white.png" : "/logo-dark.png"} 
                alt="Intux Solutions" 
                className="h-6 md:h-7 w-auto object-contain"
              />
            </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 dark:text-gray-500 text-xs md:text-sm text-center transition-colors">
          © 2026 Intux Solutions. Todos los derechos reservados.
        </p>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-white text-sm transition-colors">LinkedIn</a>
          <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-white text-sm transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;