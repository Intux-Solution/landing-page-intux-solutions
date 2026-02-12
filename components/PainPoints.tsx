import React from 'react';
import { Clock, MicOff, AlertCircle } from 'lucide-react';
import FadeIn from './ui/FadeIn';

const PainPoints: React.FC = () => {
  const cards = [
    {
      icon: <Clock className="text-red-500 dark:text-red-400 w-5 h-5" />,
      iconBg: "bg-red-50 dark:bg-red-900/20",
      title: "Procesos Manuales Lentos",
      description: "Tareas que se repiten todos los días y podrían resolverse solas con procesos automatizados."
    },
    {
      icon: <MicOff className="text-orange-500 dark:text-orange-400 w-5 h-5" />,
      iconBg: "bg-orange-50 dark:bg-orange-900/20",
      title: "Falta de Estandarización",
      description: "Sin sistemas claros, cada empleado resuelve los problemas a su manera, creando inconsistencias y dificultando la escalabilidad."
    },
    {
      icon: <AlertCircle className="text-gray-600 dark:text-gray-300 w-5 h-5" />,
      iconBg: "bg-gray-200 dark:bg-gray-700/50",
      title: "Errores Humanos Costosos",
      description: "Inconsistencias o pasos mal ejecutados generan retrabajo, costos ocultos y pérdida de oportunidades."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary dark:text-white leading-tight transition-colors">
            ¿Tu equipo dedica mucho tiempo a tareas<br className="hidden md:block"/> operativas que podrían automatizarse?
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-gray-600 dark:text-gray-400 md:text-lg max-w-3xl mx-auto transition-colors">
            Perder tiempo en procesos manuales no solo es costoso, sino que frena el crecimiento real de tu empresa.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {cards.map((card, idx) => (
          <FadeIn key={idx} delay={0.2 + idx * 0.1} className="h-full">
            <div className="bg-bgLight dark:bg-darkCard rounded-[2rem] p-8 md:p-10 h-full flex flex-col items-start transition-all hover:bg-gray-200/80 dark:hover:bg-darkCard/80">
              <div className={`w-12 h-12 rounded-full ${card.iconBg} flex items-center justify-center mb-6 transition-colors`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary dark:text-white transition-colors">{card.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base transition-colors">
                {card.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.5}>
        <div className="mt-12 text-center">
            <p className="text-sm font-semibold text-primary dark:text-white tracking-wide transition-colors">
                Automatizar no es solo ahorrar tiempo. Es evitar errores, delegar lo que no suma y tener el control real de tu operación.
            </p>
        </div>
      </FadeIn>
    </section>
  );
};

export default PainPoints;