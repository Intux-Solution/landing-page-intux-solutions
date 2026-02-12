import React from 'react';
import FadeIn from './ui/FadeIn';

const Process: React.FC = () => {
  const steps = [
    {
      num: "1",
      title: "Auditoría y Diagnóstico",
      desc: "Analizamos a fondo tus operaciones actuales para identificar cuellos de botella y oportunidades de alto impacto.",
      active: false
    },
    {
      num: "2",
      title: "Implementación a Medida",
      desc: "Diseñamos y conectamos soluciones de IA y automatización personalizadas, integrándolas con tus herramientas actuales sin interrumpir tu operación diaria.",
      active: true
    },
    {
      num: "3",
      title: "Optimización y Soporte",
      desc: "Monitoreamos el rendimiento, ajustamos según los resultados y te damos soporte continuo para escalar.",
      active: false
    }
  ];

  return (
    <section id="proceso" className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary dark:text-white transition-colors">¿Cómo lo hacemos?</h2>
          <p className="text-gray-500 dark:text-gray-400 transition-colors">Un enfoque metódico para resultados predecibles.</p>
        </FadeIn>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-[40px] left-0 w-full h-[1px] bg-gray-200 dark:bg-gray-800 -z-10 transition-colors" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, idx) => (
            <FadeIn key={idx} delay={idx * 0.2} className="flex flex-col items-center text-center">
              
              {/* Number Circle */}
              <div 
                className={`
                  w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mb-8 border-8 transition-all duration-300
                  ${step.active 
                    ? 'bg-primary dark:bg-white text-white dark:text-primary border-white dark:border-darkBg shadow-lg shadow-gray-200 dark:shadow-none' 
                    : 'bg-white dark:bg-darkCard text-primary dark:text-white border-gray-100 dark:border-darkBg shadow-sm'
                  }
                `}
              >
                {step.num}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold mb-3 text-primary dark:text-white transition-colors">{step.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs mx-auto transition-colors">
                {step.desc}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;