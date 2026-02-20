import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set target date for Samskruthi 2K26 (April 2026)
  const targetDate = new Date('2026-04-24T00:00:00').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000814] via-[#001D3D] to-[#003566] flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Bubbles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-400/20 rounded-full"
            style={{
              width: Math.random() * 60 + 20,
              height: Math.random() * 60 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Wave Animation */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" className="w-full h-32">
            <motion.path
              d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
              fill="rgba(59, 130, 246, 0.1)"
              animate={{
                d: [
                  "M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z",
                  "M0,80 C300,20 900,100 1200,40 L1200,120 L0,120 Z",
                  "M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        className="text-center z-10 px-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo/Title */}
        <motion.div variants={itemVariants} className="mb-8 mt-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-4">
            Samskruthi
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">
            2K26
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Coming Soon Text */}
        <motion.div variants={itemVariants} className="mb-12">
          <h3 className="text-2xl md:text-4xl font-semibold text-blue-300 mb-4">
            Coming Soon
          </h3>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Get ready for another spectacular journey into the depths of culture and creativity. 
            Samskruthi 2K26 is preparing to bring you an unforgettable experience.
          </p>
        </motion.div>

        {/* Countdown Timer */}
        {/* <motion.div variants={itemVariants} className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {value.toString().padStart(2, '0')}
                </div>
                <div className="text-sm md:text-base text-blue-300 uppercase tracking-wider">
                  {unit}
                </div>
              </div>
            ))}
          </div>
        </motion.div> */}

        {/* Event Details */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 max-w-2xl mx-auto">
            <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">
              Save the Date
            </h4>
            <div className="space-y-2 text-gray-300">
              <p className="text-lg md:text-xl font-medium text-blue-300">
                Yet to be Anounced 🫣😉
              </p>
              <p>East Point College Campus</p>
              <p>Annual Intercollegiate Cultural Fest</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* <motion.button
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Notify Me
            </motion.button> */}
            <motion.a
              href="https://www.instagram.com/samskruthi.fest?igsh=dzE4ZHdwcDUycG5j"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Follow Updates
            </motion.a>
          </div>
        </motion.div>

        {/* Footer Text */}
        <motion.div variants={itemVariants} className="mt-16">
          <p className="text-gray-400 text-sm md:text-base">
            Stay tuned for more updates and announcements
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;