import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John M.",
      country: "🇺🇸",
      role: "Inversor de fondos",
      text: "Después de 15 años en Wall Street, puedo confirmar que este sistema es matemáticamente sólido. Los resultados hablan por sí mismos.",
      rating: 5
    },
    {
      name: "Carlos R.",
      country: "🇪🇸",
      role: "Trader profesional",
      text: "Llevo usando este método 8 meses. La consistencia es impresionante. No es emocional, es pura lógica.",
      rating: 5
    },
    {
      name: "Marie L.",
      country: "🇫🇷",
      role: "Analista financiera",
      text: "Como matemática, aprecio la elegancia de este sistema. 98% de precisión no es casualidad, es ciencia.",
      rating: 5
    },
    {
      name: "David K.",
      country: "🇬🇧",
      role: "Gestor de riesgos",
      text: "He validado este sistema con mis propios datos. Los patrones son reales y los resultados, consistentes.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Validación
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              profesional
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Testimonios de profesionales que han verificado y aplicado el sistema
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-yellow-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold">
                    {testimonial.country} {testimonial.name}
                  </p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;