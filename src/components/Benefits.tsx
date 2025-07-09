import React from 'react';
import { Calculator, Zap, TrendingUp, Brain, Shield, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const benefits = [
  {
    icon: <Calculator className="w-8 h-8" />,
    title: "98% de precisión matemática",
    description: "Resultados consistentes basados en datos verificados"
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Jugar sin emoción, solo con estructura",
    description: "Elimina el factor emocional de la ecuación"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Ganancias pequeñas, repetidas, acumuladas",
    description: "Crecimiento sostenible y controlado"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Mentalidad de ejecutor, no de jugador",
    description: "Estrategia profesional, no entretenimiento"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Ideal para largo plazo, sin adrenalina",
    description: "Enfoque disciplinado y metodológico"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Sistema probado por décadas",
    description: "Más de 500,000 shoes de experiencia"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Por qué funciona"
          highlight="este sistema"
          className="text-center mb-16"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10"
              data-testid="benefit-card"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-yellow-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="inline-flex p-4 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-xl mb-6 group-hover:shadow-lg group-hover:shadow-yellow-500/30 transition-shadow">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;