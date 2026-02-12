import React from 'react';
import FadeIn from './ui/FadeIn';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden pt-20 pb-16 md:pt-40 md:pb-20">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Pill Tag */}
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-white/10 rounded-full mb-8 border border-gray-200 dark:border-white/10 transition-colors">
            <div className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-white" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300">
              Agencia de Automatización e IA
            </span>
          </div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.2}>
          <h1 className="text-4xl md:text-6xl lg:text-[4rem] font-extrabold leading-[1.1] tracking-tight text-primary dark:text-white mb-6 transition-colors">
            Escalá tu negocio <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8CAD9] to-[#61788C]">sin aumentar tu carga operativa.</span>
          </h1>
        </FadeIn>

        {/* Subtext */}
        <FadeIn delay={0.3}>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed transition-colors">
            Transformamos tareas manuales y repetitivas en sistemas autónomos inteligentes, 
            permitiendo que tu equipo se enfoque en estrategias de alto valor.
          </p>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.4}>
          <Button withArrow className="text-base px-8 py-4">
            Agendar Llamada
          </Button>
        </FadeIn>

      </div>
      
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gray-50 dark:bg-primary/20 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none transition-colors" />
    </section>
  );
};

export default Hero;