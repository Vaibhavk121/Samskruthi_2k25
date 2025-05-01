import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '/images/samskruthi-logo.png';
import bgvideo from '/background_video/hero_bg.mp4'; // Import the video here

const Preloader = () => {
  const [dots, setDots] = useState('.');
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  const videoRef = useRef(null); // Add a ref for preloading the video
  
  // Preload the background video
  useEffect(() => {
    // Create a video element to preload the video
    const video = document.createElement('video');
    video.style.display = 'none';
    video.preload = 'auto';
    
    // Create a source element
    const source = document.createElement('source');
    source.src = bgvideo;
    source.type = 'video/mp4';
    
    // Append source to video and video to document
    video.appendChild(source);
    document.body.appendChild(video);
    
    // Start loading the video
    video.load();
    
    // Clean up
    return () => {
      document.body.removeChild(video);
    };
  }, []);
  
  // Animate loading dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '.' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);
  
  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 5;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 200);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Dynamic background with deep ocean effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050A30] via-[#000B3C] to-[#000824]">
        {/* Animated light rays */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={`ray-${i}`}
              className="absolute bg-gradient-to-b from-[#7EC8E3]/10 to-transparent"
              style={{
                top: '-10%',
                left: `${10 + i * 10}%`,
                width: '3px',
                height: '120%',
                transformOrigin: 'top',
                rotate: `${-15 + i * 4}deg`,
                filter: 'blur(8px)',
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                width: ['3px', '6px', '3px'],
              }}
              transition={{
                duration: 5 + i % 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at center, rgba(126, 200, 227, 0.15) 0%, rgba(5, 10, 48, 0) 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Animated particles with depth effect */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 60 }).map((_, i) => {
          const size = 1 + Math.random() * 3;
          const depth = Math.random();
          const speed = 3 + (1 - depth) * 5;
          
          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.1 + depth * 0.6,
                background: `rgba(${126 + Math.random() * 50}, ${200 + Math.random() * 55}, ${227 + Math.random() * 28}, ${0.4 + depth * 0.6})`,
                boxShadow: `0 0 ${2 + depth * 8}px rgba(126, 200, 227, ${0.2 + depth * 0.4})`,
                zIndex: Math.floor(depth * 10),
              }}
              animate={{
                y: [0, -50 - Math.random() * 100],
                x: [0, (Math.random() - 0.5) * 30],
                opacity: [0, 0.1 + depth * 0.6, 0],
              }}
              transition={{
                duration: speed,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </div>

      {/* Animated wave effect with improved visuals */}
      <div className="absolute bottom-0 left-0 w-full h-40 overflow-hidden">
        <svg className="absolute bottom-0 left-0 w-full" 
             viewBox="0 0 1440 320" preserveAspectRatio="none">
          <motion.path 
            initial={{ d: "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" }}
            fill="rgba(126, 200, 227, 0.15)"
            animate={{
              d: [
                "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,266.7C672,267,768,245,864,224C960,203,1056,181,1152,186.7C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.path 
            initial={{ d: "M0,256L48,261.3C96,267,192,277,288,266.7C384,256,480,224,576,218.7C672,213,768,235,864,245.3C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" }}
            fill="rgba(126, 200, 227, 0.25)"
            animate={{
              d: [
                "M0,256L48,261.3C96,267,192,277,288,266.7C384,256,480,224,576,218.7C672,213,768,235,864,245.3C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,288L48,277.3C96,267,192,245,288,240C384,235,480,245,576,250.7C672,256,768,256,864,234.7C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,256L48,261.3C96,267,192,277,288,266.7C384,256,480,224,576,218.7C672,213,768,235,864,245.3C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>

      {/* Animated logo with advanced effects */}
      <motion.div 
        className="relative z-10 mb-16"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          y: [0, -10, 0],
        }}
        transition={{
          opacity: { duration: 1 },
          scale: { duration: 1.2 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        {/* Logo glow effect */}
        <motion.div
          className="absolute inset-0 blur-2xl"
          style={{
            background: "radial-gradient(circle, rgba(126, 200, 227, 0.6) 0%, rgba(126, 200, 227, 0) 70%)",
            transform: "scale(1.5)",
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Logo with ripple effect */}
        <div className="relative">
          <motion.img
            src={Logo}
            alt="Logo"
            className="w-80 h-auto relative z-10"
            animate={{
              filter: [
                "drop-shadow(0 0 15px rgba(126, 200, 227, 0.5))",
                "drop-shadow(0 0 25px rgba(126, 200, 227, 0.8))",
                "drop-shadow(0 0 15px rgba(126, 200, 227, 0.5))"
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Ripple effects */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`ripple-${i}`}
              className="absolute top-1/2 left-1/2 rounded-full border border-[#7EC8E3]/30"
              style={{
                width: 20,
                height: 20,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                width: [20, 300],
                height: [20, 300],
                opacity: [0.8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 1,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Advanced loading indicator */}
      <motion.div
        className="relative z-10 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="flex flex-col items-center">
          {/* Progress bar */}
          <div className="relative h-1.5 w-60 bg-white/10 rounded-full overflow-hidden mb-3">
            <motion.div 
              className="absolute h-full bg-gradient-to-r from-[#7EC8E3] via-[#50A7D1] to-[#7EC8E3] rounded-full"
              style={{ width: `${progress}%` }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          
          {/* Loading text with percentage */}
          <div className="flex items-center space-x-2">
            <motion.span 
              className="text-white/80 text-sm font-light tracking-widest uppercase"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Loading Experience{dots}
            </motion.span>
            <span className="text-[#7EC8E3] text-sm font-medium">
              {Math.round(progress)}%
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Preloader;
