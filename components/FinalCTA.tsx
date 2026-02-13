import React from 'react';
import FadeIn from './ui/FadeIn';
import Button from './ui/Button';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-6 dark:bg-[#1C222B] transition-colors">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold text-primary dark:text-white mb-6 leading-tight transition-colors">
            Dejá atrás la gestión manual y<br /> enfocate en crecer.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-10 transition-colors">
            Agendá una llamada y trabajemos juntos en el crecimiento de tu negocio.
          </p>
        </FadeIn>
        <FadeIn delay={0.2} className="flex justify-center">
          <Button withArrow className="px-8 py-4 text-base">
            Agendar Llamada
          </Button>
        </FadeIn>
      </div>
    </section>
  );
};

export default FinalCTA;