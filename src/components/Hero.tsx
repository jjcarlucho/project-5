import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #D4AF37 0%, transparent 50%), radial-gradient(circle at 75% 75%, #D4AF37 0%, transparent 50%)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center lg:text-left animate-fade-in"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              UN JUEGO.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                UN SISTEMA.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light leading-relaxed max-w-2xl">
              El método matemático secreto con <span className="text-yellow-400 font-semibold">98% de efectividad</span>. 
              Usado en más de 500,000 shoes. Nunca antes revelado públicamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button type="button" variant="primary">
                Acceder al Método
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4 italic">
              Acceso limitado — solo para mentes disciplinadas
            </p>
          </motion.div>
          {/* Book Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="relative flex justify-center lg:justify-end animate-fade-in-delay"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 blur-3xl scale-110 rounded-lg"></div>
              {/* Book */}
              <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-700">
                <div className="w-80 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl border border-yellow-500/20 relative overflow-hidden">
                  {/* Book Cover Design */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6 flex flex-col justify-between">
                    <div>
                      <div className="w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mb-8"></div>
                      <h2 className="text-3xl font-serif font-bold text-white mb-2 leading-tight">
                        UN JUEGO.<br />
                        UN SISTEMA.
                      </h2>
                      <div className="w-16 h-px bg-yellow-400 mb-4"></div>
                      <p className="text-yellow-400 text-lg font-semibold">
                        98% DE<br />
                        PROBABILIDADES
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-4"></div>
                      <p className="text-gray-400 text-sm tracking-widest">
                        MÉTODO EXCLUSIVO
                      </p>
                    </div>
                  </div>
                  {/* Book Spine */}
                  <div className="absolute -right-2 top-0 w-4 h-full bg-gradient-to-b from-gray-700 to-gray-800 transform skew-y-3"></div>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-yellow-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;