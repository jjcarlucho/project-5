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
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>
          <p className="text-gray-500 text-sm mb-4">
            © 2025 UN JUEGO. UN SISTEMA. — Método Matemático Exclusivo
          </p>
          <p className="text-gray-600 text-xs">
            Descargo de responsabilidad: Este contenido es solo para fines informativos y educativos. No constituye asesoramiento financiero, legal ni de inversión. Los resultados pasados no garantizan resultados futuros. Utiliza este método bajo tu propio riesgo.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;