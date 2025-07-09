import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-2">
              UN JUEGO. UN SISTEMA.
            </h3>
            <p className="text-gray-400">
              Método Matemático Exclusivo
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
            <button className="text-gray-400 hover:text-yellow-400 transition-colors">
              Contacto Privado
            </button>
            <div className="w-px h-4 bg-gray-600 hidden sm:block"></div>
            <button className="text-gray-400 hover:text-yellow-400 transition-colors">
              Descarga Directa
            </button>
          </div>
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>
          
          <p className="text-gray-500 text-sm">
            © 2025 UN JUEGO. UN SISTEMA. — Método Matemático Exclusivo
          </p>
          
          <p className="text-gray-600 text-xs mt-2">
            Este sistema está diseñado exclusivamente para profesionales y personas 
            con mentalidad disciplinada que buscan resultados consistentes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;