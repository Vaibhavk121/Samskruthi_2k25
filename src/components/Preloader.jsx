import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from '/images/samskruthi-logo.png';

const Preloader = () => {
  const [dots, setDots] = useState('.');
  
  // Animate loading dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '.' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Create underwater elements
  const seaweeds = Array.from({ length: 8 });
  const fishes = Array.from({ length: 6 });

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-blue-950 overflow-hidden">
      {/* Underwater light rays */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-200 blur-md"
            style={{
              top: '-10%',
              left: `${10 + i * 10}%`,
              width: '5px',
              height: '120%',
              transformOrigin: 'top',
              rotate: `${-10 + i * 3}deg`,
            }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i % 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Seaweed */}
      <div className="absolute bottom-0 w-full">
        {seaweeds.map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0"
            style={{
              left: `${5 + i * 12}%`,
              width: '8px',
              height: `${80 + i * 20}px`,
              background: 'linear-gradient(to top, #065f46, #059669)',
              borderRadius: '4px',
              transformOrigin: 'bottom',
              zIndex: 1
            }}
            animate={{
              rotateZ: i % 2 === 0 ? [-5, 5, -5] : [5, -5, 5]
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Swimming fish */}
      {fishes.map((_, i) => {
        const isRightToLeft = i % 2 === 0;
        const yPos = 30 + (i * 10);
        const size = 20 + (i % 3) * 10;
        
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${yPos}%`,
              left: isRightToLeft ? '100%' : '-5%',
              width: size,
              height: size * 0.6,
              zIndex: 2
            }}
            animate={{
              x: isRightToLeft ? [0, -window.innerWidth - size] : [0, window.innerWidth + size],
              y: [0, -15, 15, 0]
            }}
            transition={{
              x: {
                duration: 15 - (i % 5),
                repeat: Infinity,
                ease: "linear"
              },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <motion.div
              className={`w-full h-full relative ${isRightToLeft ? 'scale-x-[-1]' : ''}`}
            >
              {/* Fish body */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full" 
                   style={{ clipPath: 'ellipse(50% 50% at 40% 50%)' }} />
              
              {/* Fish tail */}
              <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-cyan-300"
                   style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }} />
              
              {/* Fish eye */}
              <div className="absolute left-1/4 top-1/3 w-2 h-2 bg-black rounded-full" />
            </motion.div>
          </motion.div>
        );
      })}
      
      {/* Logo with underwater effect */}
      <motion.div
        className="relative z-10"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.img
          src={Logo}
          alt="Logo"
          className="w-80 h-auto mb-6 drop-shadow-lg"
          animate={{
            scale: [1, 1.05, 1],
            filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Loading text with underwater effect */}
      <motion.div
        className="text-white text-xl font-medium mt-4 z-10 bg-blue-900/50 px-6 py-2 rounded-full backdrop-blur-sm"
        animate={{ 
          y: [0, 5, 0],
          opacity: [0.8, 1, 0.8] 
        }}
        transition={{ 
          duration: 2.5, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span className="text-cyan-300">Diving In</span>
        <span className="text-white">{dots}</span>
      </motion.div>
      
      {/* Particle effects */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/30"
            style={{
              width: 2 + (i % 3),
              height: 2 + (i % 3),
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Preloader;
