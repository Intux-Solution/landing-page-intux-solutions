import React, { useState, useEffect } from 'react';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: "Inicio", id: "inicio" },
    { name: "Soluciones", id: "soluciones" },
    { name: "Proceso", id: "proceso" }
  ];

  const handleScrollTo = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Offset for fixed navbar
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`
        fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300
        w-[95%] max-w-5xl rounded-full border border-white/10
        ${isScrolled
          ? 'bg-[#191E26]/90 backdrop-blur-md shadow-lg shadow-black/10 py-3'
          : 'bg-[#191E26]/80 backdrop-blur-sm py-4'}
      `}
    >
      <div className="px-6 md:px-8 flex justify-between items-center h-full">
        {/* Logo */}
        <div className="flex items-center">
          <a
            href="#inicio"
            onClick={(e) => handleScrollTo('inicio', e)}
            className="block hover:opacity-80 transition-opacity"
          >
            <img
              src="/logo-white.png"
              alt="Intux Solutions"
              className="h-8 md:h-9 w-auto object-contain"
            />
          </a>
        </div>

        {/* Centered Desktop Links */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {links.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => handleScrollTo(link.id, e)}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Section: CTA only (Theme toggle removed) */}
        <div className="flex items-center gap-4">
          <Button>Agendar Llamada</Button>
        </div>

        {/* Mobile Menu Removed as requested */}
      </div>
    </nav>
  );
};

export default Navbar;