import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbwY9H0jUmoNzRpREWd7zTNAeYXEC8ytNslyt0PaoYTSd_2Rdh88jZnEsqhMflJ1StZ7/exec';

const FinalCTA = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!nombre.trim() || !apellido.trim()) {
      setError('Por favor, completa tu nombre y apellido.');
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError('Ingresa un email válido.');
      return;
    }
    setSubmitted(true);
    try {
      const formBody = new URLSearchParams({ nombre, apellido, email }).toString();
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody,
      });
      if (!res.ok) {
        const text = await res.text();
        console.log('Respuesta del webhook:', text);
        setError(`Error: ${res.status} - ${text}`);
        setSubmitted(false);
        return;
      }
      setNombre('');
      setApellido('');
      setEmail('');
    } catch (err: any) {
      setError('Error de red: ' + (err?.message || JSON.stringify(err)));
      console.error('Error de red al enviar datos:', err);
    }
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <section id="final-cta" className="py-24 flex justify-center items-center bg-transparent">
      <div className="premium-glass max-w-xl w-full mx-auto p-12 rounded-2xl border border-yellow-500/10 shadow-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
          Accede al método <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">antes que nadie</span>
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Suscríbete para recibir acceso prioritario y material exclusivo.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center justify-center">
          <input
            type="text"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            placeholder="Nombre"
            className="w-full px-6 py-4 rounded-xl bg-black/40 border border-yellow-500/20 text-white placeholder:text-yellow-200/60 focus:outline-none focus:ring-2 focus:ring-yellow-400/40 text-lg font-light transition"
            disabled={submitted}
            required
          />
          <input
            type="text"
            value={apellido}
            onChange={e => setApellido(e.target.value)}
            placeholder="Apellido"
            className="w-full px-6 py-4 rounded-xl bg-black/40 border border-yellow-500/20 text-white placeholder:text-yellow-200/60 focus:outline-none focus:ring-2 focus:ring-yellow-400/40 text-lg font-light transition"
            disabled={submitted}
            required
          />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-6 py-4 rounded-xl bg-black/40 border border-yellow-500/20 text-white placeholder:text-yellow-200/60 focus:outline-none focus:ring-2 focus:ring-yellow-400/40 text-lg font-light transition"
            disabled={submitted}
            required
          />
          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.04, boxShadow: '0 0 16px #D4AF37cc' }}
            type="submit"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-yellow-500/80 to-yellow-400/80 text-black font-bold text-lg shadow-lg border border-yellow-500/30 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={submitted}
          >
            {submitted ? '¡Listo!' : 'Quiero Acceso'}
          </motion.button>
        </form>
        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="text-red-400 mt-4"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {submitted && !error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              className="flex flex-col items-center mt-8"
            >
              <CheckCircle2 className="w-16 h-16 text-yellow-400 mb-2 animate-bounce" />
              <span className="text-yellow-200 text-lg font-semibold">¡Suscripción exitosa! Revisa tu correo para más novedades.</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FinalCTA;