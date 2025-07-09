import React, { useState } from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';

const EMAIL_KEY = 'subscribedEmails';

const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const FinalCTA = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Por favor, ingresa un email válido.');
      setStatus('error');
      return;
    }
    // Guardar en localStorage
    const prev = JSON.parse(localStorage.getItem(EMAIL_KEY) || '[]');
    localStorage.setItem(EMAIL_KEY, JSON.stringify([...prev, email]));
    setStatus('success');
    setError('');
    setEmail('');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, #D4AF37 0%, transparent 50%), radial-gradient(circle at 80% 20%, #D4AF37 0%, transparent 50%)`,
          backgroundSize: '200px 200px'
        }}></div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
            No necesitás suerte.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              Solo necesitás el sistema correcto.
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Después de 20 años de secretismo, el método matemático más efectivo 
            está disponible para quienes están listos para cambiar su enfoque.
          </p>
        </div>
        {/* Formulario de suscripción */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 max-w-xl mx-auto">
          <input
            type="email"
            className="w-full sm:w-auto px-6 py-4 rounded-lg border border-gray-700 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
            placeholder="Tu email para acceso inmediato"
            value={email}
            onChange={e => setEmail(e.target.value)}
            aria-label="Email"
            required
          />
          <Button type="submit" variant="primary">
            <Download className="w-6 h-6 mr-2" />
            Suscribirme
          </Button>
        </form>
        {status === 'success' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-400 mb-6"
            role="status"
          >¡Gracias! Revisa tu correo para más información.</motion.p>
        )}
        {status === 'error' && error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 mb-6"
            role="alert"
          >{error}</motion.p>
        )}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-yellow-500/20 inline-block">
          <p className="text-yellow-400 font-semibold mb-2">
            🔒 ACCESO LIMITADO
          </p>
          <p className="text-gray-300 italic">
            "Solo para mentes disciplinadas que buscan resultados, no emociones."
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;