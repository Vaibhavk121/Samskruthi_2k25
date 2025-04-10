import React from 'react';
import { motion } from 'framer-motion';


const Preloader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-deep-blue dark:bg-[#000814]">
      <div className="relative">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-32 h-32 relative"
        >
          
        </motion.div>
        
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="text-2xl font-bold text-light-blue dark:text-[#FFD60A] glow">Loading...</span>
        </motion.div>
        
        {/* Bubbles animation */}
        <div className="absolute -top-10 -left-10 w-4 h-4 rounded-full bg-light-blue/30 animate-bubble" style={{ animationDelay: '0s' }}></div>
        <div className="absolute -top-5 left-5 w-3 h-3 rounded-full bg-light-blue/30 animate-bubble" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-0 left-10 w-5 h-5 rounded-full bg-light-blue/30 animate-bubble" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -top-10 right-0 w-6 h-6 rounded-full bg-light-blue/30 animate-bubble" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute -top-5 right-10 w-3 h-3 rounded-full bg-light-blue/30 animate-bubble" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default Preloader;