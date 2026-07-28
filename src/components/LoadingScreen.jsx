import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (onComplete) onComplete();
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(12px)' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-black-bg text-white flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Ambient Background Aura */}
          <div className="absolute w-[350px] h-[350px] bg-gradient-to-tr from-[#FF5500]/30 via-[#FF8CB7]/30 to-[#0066FF]/20 rounded-full filter blur-3xl animate-pulse"></div>

          {/* Mending Heart Animation */}
          <div className="relative flex items-center justify-center mb-6">
            {/* Breathing Outer Circle */}
            <motion.div
              animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-24 h-24 rounded-full border-2 border-primary/50 absolute"
            />

            {/* Broken to Whole Heart Motion */}
            <div className="flex items-center gap-1 relative z-10 text-primary text-5xl">
              <motion.span
                initial={{ x: -10, rotate: -15, opacity: 0.5 }}
                animate={{ x: 0, rotate: 0, opacity: 1 }}
                transition={{ duration: 1.4, ease: 'easeOut' }}
                className="material-symbols-outlined font-black drop-shadow-[0_0_15px_#FF5500]"
              >
                favorite
              </motion.span>
            </div>
          </div>

          {/* Emotional Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <h2 className="text-xl font-extrabold text-white tracking-tight mb-1">Get Companion</h2>
            <p className="text-xs text-[#FF8CB7] font-bold tracking-widest uppercase">
              Preparing Your Emotional Sanctuary...
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
