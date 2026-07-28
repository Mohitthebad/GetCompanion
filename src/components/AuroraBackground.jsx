import React from 'react';
import { motion } from 'framer-motion';

export default function AuroraBackground() {
  const particles = Array.from({ length: 8 });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Aurora Gradient Blobs */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-orange-400/15 via-pink-400/10 to-transparent rounded-full filter blur-[100px] animate-pulse"></div>
      <div className="absolute top-1/2 -right-32 w-[550px] h-[550px] bg-gradient-to-bl from-blue-400/15 via-pink-300/10 to-transparent rounded-full filter blur-[100px] animate-pulse-glow"></div>
      <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-amber-300/10 via-orange-300/10 to-transparent rounded-full filter blur-[90px]"></div>

      {/* Floating Particles */}
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
            opacity: Math.random() * 0.4 + 0.1,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            y: ['-10%', '110%'],
            x: ['0%', Math.random() > 0.5 ? '10%' : '-10%']
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute w-2 h-2 rounded-full bg-[#FF8CB7]/40 backdrop-blur-xs"
        />
      ))}
    </div>
  );
}
