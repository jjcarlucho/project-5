import React from 'react';
import { Calculator, Zap, TrendingUp, Brain, Shield, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const benefits = [
  {
    icon: <Calculator className="w-8 h-8 text-yellow-400" />,
    title: "98% de precisión matemática",
    description: "Resultados consistentes basados en datos verificados"
  },
  {
    icon: <Brain className="w-8 h-8 text-yellow-400" />,
    title: "Jugar sin emoción, solo con estructura",
    description: "Elimina el factor emocional de la ecuación"
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
    title: "Ganancias pequeñas, repetidas, acumuladas",
    description: "Crecimiento sostenible y controlado"
  },
  {
    icon: <Target className="w-8 h-8 text-yellow-400" />,
    title: "Mentalidad de ejecutor, no de jugador",
    description: "Estrategia profesional, no entretenimiento"
  },
  {
    icon: <Shield className="w-8 h-8 text-yellow-400" />,
    title: "Ideal para largo plazo, sin adrenalina",
    description: "Enfoque disciplinado y metodológico"
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: "Sistema probado por décadas",
    description: "Más de 500,000 shoes de experiencia"
  }
];

const Benefits = () => {
  return (
    <section className="py-28 bg-transparent relative">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent rounded-full" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Por qué funciona"
          highlight="este sistema"
          className="text-center mb-20"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="premium-glass group relative p-10 rounded-2xl border border-yellow-500/10 hover:border-yellow-400/40 transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-yellow-500/10 flex flex-col items-center text-center"
              data-testid="benefit-card"
            >
              <div className="mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-yellow-400 transition-colors font-serif">
                {benefit.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;