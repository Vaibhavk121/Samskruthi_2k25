import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from '/images/samskruthi-logo.png';

const Preloader = () => {
  const bubbles = Array.from({ length: 150 });
  const [dots, setDots] = useState('.');

  // Animate loading dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '.' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-deep-blue dark:bg-[#000814] overflow-hidden">
      
      {/* Fixed size logo */}
      <motion.img
        src={Logo}
        alt="Logo"
        className="w-80 h-auto mb-6"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Loading Joy text */}
      <motion.div
        className="text-white text-xl font-medium mt-4"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span className="text-blue-300">Loading Joy</span>
        <span className="text-white">{dots}</span>
      </motion.div>

      {/* Bubble container - improved animation */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden" style={{ zIndex: 5 }}>
        {bubbles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{ 
              left: `${Math.random() * 100}%`,
              bottom: `-50px`,
              width: `${Math.random() * 30 + 15}px`,
              height: `${Math.random() * 30 + 15}px`,
              background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(126, 200, 227, 0.4))',
              boxShadow: 'inset -3px -3px 10px rgba(0, 0, 0, 0.1), 0 0 10px rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              willChange: 'transform, opacity',
            }}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: -window.innerHeight - 250,
              opacity: [0.4, 0.6, 0.2],
              x: i % 2 === 0 ? [0, 10, -10, 0] : [0, -10, 10, 0], // Gentle side-to-side movement
            }}
            transition={{
              y: { 
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.05,
                ease: [0.2, 0.8, 0.8, 1] // Custom cubic bezier for smoother motion
              },
              opacity: {
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.05
              },
              x: {
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.05,
                ease: "easeInOut"
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Preloader;
