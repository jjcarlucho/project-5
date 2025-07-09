import React from 'react';
import { Lock, Eye, Crown } from 'lucide-react';

const Storytelling = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #D4AF37 25%, transparent 25%), linear-gradient(-45deg, #D4AF37 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #D4AF37 75%), linear-gradient(-45deg, transparent 75%, #D4AF37 75%)`,
          backgroundSize: '30px 30px',
          backgroundPosition: '0 0, 0 15px, 15px -15px, -15px 0px'
        }}></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 px-6 py-3 rounded-full border border-yellow-500/30 mb-8">
            <Lock className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">ACCESO RESTRINGIDO</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
            El Secreto de los
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              $10,000 USD
            </span>
          </h2>
        </div>
        
        <div className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed">
          <p className="flex items-start gap-4">
            <Eye className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
            <span>
              Durante más de 20 años, este conocimiento fue enseñado por <strong className="text-white">Kevin Trudeau</strong> 
              en un entorno completamente privado, exclusivamente a aquellos que pagaban más de $10,000 USD por el acceso.
            </span>
          </p>
          
          <p className="flex items-start gap-4">
            <Crown className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
            <span>
              Solo una élite selecta conocía este patrón matemático. Banqueros, inversores institucionales, 
              y jugadores profesionales que operaban en los círculos más exclusivos del mundo.
            </span>
          </p>
          
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-yellow-500/20 mt-12">
            <p className="text-2xl font-light text-yellow-400 mb-4 italic">
              "Ahora, por primera vez, este patrón se revela al mundo..."
            </p>
            <p className="text-gray-400">
              De forma anónima. Sin restricciones. Sin membresías de $10,000.
            </p>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Storytelling;