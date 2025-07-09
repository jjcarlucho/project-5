import React from 'react';
import { TrendingUp, Shield, Brain, Target } from 'lucide-react';
import SectionTitle from './SectionTitle';

const features = [
  {
    icon: <TrendingUp className="w-6 h-6 text-yellow-400" />,
    title: "Sistema matemático con 98% de precisión",
    description: "Basado en patrones matemáticos verificados"
  },
  {
    icon: <Shield className="w-6 h-6 text-yellow-400" />,
    title: "Ganancias sostenibles y controladas",
    description: "Metodología de riesgo calculado"
  },
  {
    icon: <Brain className="w-6 h-6 text-yellow-400" />,
    title: "Basado en datos reales, no en suerte",
    description: "Análisis estadístico de millones de shoes"
  },
  {
    icon: <Target className="w-6 h-6 text-yellow-400" />,
    title: "Usado por inversores y jugadores elite",
    description: "Método exclusivo para profesionales"
  }
];

const WhatIs = () => {
  return (
    <section className="py-28 bg-transparent relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Esto no es un libro."
          highlight="Es una fórmula."
          className="text-center mb-20"
        />
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="premium-glass group p-10 rounded-2xl border border-yellow-500/10 hover:border-yellow-400/40 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-yellow-500/10 flex items-start gap-6"
            >
              <div className="p-4 bg-gradient-to-r from-yellow-600/20 to-yellow-500/10 rounded-xl flex items-center justify-center">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors font-serif">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatIs;