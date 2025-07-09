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
    <section className="py-28 bg-transparent relative overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent rounded-full" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            ¿Por qué este método es <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">único?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Beneficios que no encontrarás en ningún otro sistema
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.1 }}
              className="premium-glass flex flex-col items-center text-center p-8 rounded-2xl border border-yellow-500/10 shadow-xl"
            >
              <div className="mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 font-serif mb-2 drop-shadow">
                {benefit.title}
              </h3>
              <p className="text-gray-300 text-lg font-light">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;