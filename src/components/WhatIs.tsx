import React from 'react';
import { TrendingUp, Shield, Brain, Target } from 'lucide-react';

const WhatIs = () => {
  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Sistema matemático con 98% de precisión",
      description: "Basado en patrones matemáticos verificados"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Ganancias sostenibles y controladas",
      description: "Metodología de riesgo calculado"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Basado en datos reales, no en suerte",
      description: "Análisis estadístico de millones de shoes"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Usado por inversores y jugadores elite",
      description: "Método exclusivo para profesionales"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Esto no es un libro.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Es una fórmula.
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Después de 20 años de investigación y más de 500,000 shoes analizados, 
            este sistema matemático ha demostrado una precisión del 98% en resultados controlados.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-yellow-500/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-lg group-hover:shadow-lg group-hover:shadow-yellow-500/20 transition-shadow">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIs;