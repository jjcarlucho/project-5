import React from 'react';
import { Check, X } from 'lucide-react';

const Comparison = () => {
  const yesItems = [
    "Control absoluto sobre cada decisión",
    "Estrategia basada en matemáticas",
    "Números, patrones y probabilidades",
    "Disciplina y paciencia",
    "Ganancias consistentes y medibles",
    "Enfoque profesional y sistemático"
  ];

  const noItems = [
    "Depender del azar o la suerte",
    "Decisiones basadas en emociones",
    "Impulsividad y adrenalina",
    "Esperanza de 'golpes de suerte'",
    "Pérdidas incontrolables",
    "Mentalidad de entretenimiento"
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Lo que
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"> NO es </span>
            este sistema
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Claridad absoluta sobre el enfoque correcto vs. el enfoque común
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* What it IS */}
          <div className="bg-gradient-to-br from-green-900/20 to-green-800/20 p-8 rounded-xl border border-green-500/30">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-green-500 rounded-lg">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-400">ESTO SÍ</h3>
            </div>
            
            <div className="space-y-4">
              {yesItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* What it is NOT */}
          <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 p-8 rounded-xl border border-red-500/30">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-red-500 rounded-lg">
                <X className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-red-400">ESTO NO</h3>
            </div>
            
            <div className="space-y-4">
              {noItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-2xl font-light text-yellow-400 italic">
            "La diferencia entre apostar y invertir está en el sistema que usas."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Comparison;