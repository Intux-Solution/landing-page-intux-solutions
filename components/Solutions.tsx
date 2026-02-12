import React from 'react';
import { Settings, GitMerge, Lightbulb } from 'lucide-react';
import FadeIn from './ui/FadeIn';
import Button from './ui/Button';

const Solutions: React.FC = () => {
  const features = [
    {
      icon: <Settings className="text-blue-600 dark:text-blue-400 w-5 h-5" />,
      iconBg: "bg-blue-50 dark:bg-blue-900/20",
      text: "Automatización de tareas manuales y repetitivas"
    },
    {
      icon: <GitMerge className="text-purple-600 dark:text-purple-400 w-5 h-5" />,
      iconBg: "bg-purple-50 dark:bg-purple-900/20",
      text: "Integración de sistemas y fuentes de información"
    },
    {
      icon: <Lightbulb className="text-teal-600 dark:text-teal-400 w-5 h-5" />,
      iconBg: "bg-teal-50 dark:bg-teal-900/20",
      text: "Integración de sistemas y fuentes de información"
    }
  ];

  return (
    <section id="soluciones" className="py-16 md:py-24 px-6 bg-white dark:bg-darkBg transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <FadeIn>
            <span className="text-xs font-bold text-gray-400 dark:text-gray-500 tracking-widest uppercase mb-4 block transition-colors">
              Nuestras Soluciones
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary dark:text-white leading-[1.15] transition-colors">
              Tecnología que trabaja para vos, no al revés.
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed transition-colors">
              En Intux desarrollamos soluciones a medida que permiten automatizar procesos, 
              integrar herramientas y reducir la carga operativa diaria de tu equipo.
            </p>
            <Button withArrow>
              Agendar Llamada
            </Button>
          </FadeIn>
        </div>

        {/* Right Content - Feature Pills */}
        <div className="flex flex-col gap-6">
          {features.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.15} direction="left">
              <div className="bg-white dark:bg-darkCard rounded-full p-3 pr-8 shadow-sm border border-gray-100 dark:border-white/5 flex items-center gap-4 hover:shadow-md transition-all">
                <div className={`w-12 h-12 min-w-[48px] rounded-full ${item.iconBg} flex items-center justify-center transition-colors`}>
                  {item.icon}
                </div>
                <span className="font-semibold text-primary dark:text-white text-sm md:text-base transition-colors">
                  {item.text}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
      
      <FadeIn delay={0.4} className="mt-16 text-center">
        <p className="text-sm font-bold text-primary dark:text-white transition-colors">
            El objetivo es simple. Menos fricción operativa y mayor eficiencia en el funcionamiento del negocio.
        </p>
      </FadeIn>
    </section>
  );
};

export default Solutions;