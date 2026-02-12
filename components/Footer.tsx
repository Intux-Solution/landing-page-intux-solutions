import React from 'react';
import { Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 px-6 border-t border-gray-100 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo Icon */}
        <div className="w-8 h-8 bg-primary dark:bg-white rounded-lg flex items-center justify-center transition-colors">
            <Sparkles className="text-white dark:text-primary w-4 h-4 transition-colors" />
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