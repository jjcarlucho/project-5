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
    <section className="py-28 bg-transparent relative overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent rounded-full" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="premium-glass p-12 rounded-2xl border border-yellow-500/10 shadow-xl text-center">
          <div className="flex justify-center mb-6">
            <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><circle cx="24" cy="24" r="22" stroke="#D4AF37" strokeWidth="3" fill="#23262F" /><path d="M24 14v12l8 4" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            ¿Qué es <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Un Juego. Un Sistema.</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Un método matemático exclusivo, diseñado para transformar la manera en que tomas decisiones y maximizas tus resultados. Basado en patrones, estadísticas y la disciplina de los grandes inversores.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhatIs;