import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  // Set the date for the fest (March 15, 2025)
  const festDate = new Date('April 24, 2025 00:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = festDate - now;
      
      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, [festDate]);

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          data-aos="fade-up"
          className="max-w-4xl mx-auto bg-deep-blue/80 dark:bg-[#001D3D]/80 rounded-2xl p-8 shadow-2xl backdrop-blur-sm border border-light-blue/30 dark:border-[#003566]/30"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-white glow">Countdown to Dive In</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-light-blue/20 dark:bg-[#003566]/50 rounded-lg p-4">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{timeLeft.days}</div>
              <div className="text-sm uppercase tracking-wider text-light-blue dark:text-[#FFD60A]">Days</div>
            </div>
            
            <div className="bg-light-blue/20 dark:bg-[#003566]/50 rounded-lg p-4">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{timeLeft.hours}</div>
              <div className="text-sm uppercase tracking-wider text-light-blue dark:text-[#FFD60A]">Hours</div>
            </div>
            
            <div className="bg-light-blue/20 dark:bg-[#003566]/50 rounded-lg p-4">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{timeLeft.minutes}</div>
              <div className="text-sm uppercase tracking-wider text-light-blue dark:text-[#FFD60A]">Minutes</div>
            </div>
            
            <div className="bg-light-blue/20 dark:bg-[#003566]/50 rounded-lg p-4">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{timeLeft.seconds}</div>
              <div className="text-sm uppercase tracking-wider text-light-blue dark:text-[#FFD60A]">Seconds</div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-white text-lg">
              Get ready to dive into the underwater world of Samskruthi 2K25!
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Submarine dashboard elements */}
      <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-20 h-full flex flex-col justify-center space-y-4 opacity-30">
        <div className="w-10 h-10 rounded-full bg-light-blue/50 animate-pulse"></div>
        <div className="w-10 h-10 rounded-full bg-seafoam/50 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="w-10 h-10 rounded-full bg-coral/50 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 w-20 h-full flex flex-col justify-center space-y-4 opacity-30">
        <div className="w-10 h-10 rounded-full bg-coral/50 animate-pulse"></div>
        <div className="w-10 h-10 rounded-full bg-light-blue/50 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="w-10 h-10 rounded-full bg-seafoam/50 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};

export default CountdownTimer;