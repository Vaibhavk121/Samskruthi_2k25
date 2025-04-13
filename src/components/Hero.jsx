import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaClock, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import EventModal from './EventModal';
import ComingSoonModal from './ComingSoonModal';

// Import images
import epgiLogo from '/images/gallery/logos/EPGI_LOGO.png';
import samskruthiLogo from '/images/samskruthi-logo.png';
import jellyfish1 from '/images/jellyfish1.png';
import jellyfish2 from '/images/jellyfish2.webp';
import seaweed1 from '/images/seaweed1.png';
import seaweed2 from '/images/seaweed2.png';
import fish1 from '/images/fish1.png';
import fish2 from '/images/fish2.png';
import bgvideo from '/background_video/hero_bg.mp4'


const Hero = () => {
  const [isComingSoonModalOpen, setIsComingSoonModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);  // Add this state
  
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Set the event date - April 24, 2025
  const eventDate = new Date('April 24, 2025 00:00:00').getTime();

  // Update countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;
      
      if (distance < 0) {
        // Event has started
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
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-0.9"
          style={{ position: 'fixed' }}
        >
          <source src={bgvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay with increased darkness */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Rest of your content */}
      {/* Animated background bubbles */}
      {/* <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-light-blue/10 dark:bg-[#FFD60A]/5 animate-float"
            style={{
              width: `${Math.random() * 6 + 2}rem`,
              height: `${Math.random() * 6 + 2}rem`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 20 + 30}s`,
              animationDelay: `${Math.random() * 10}s`,
              opacity: Math.random() * 0.2
            }}
          />
        ))}
      </div> */}
      
      {/* Animated jellyfish */}
      {/* <div className="absolute top-1/4 left-1/4 w-32 h-32 jellyfish opacity-30 animate-pulse">
        <img src={jellyfish1} alt="" className="w-full h-full" />
      </div>
      <div className="absolute bottom-1/3 right-1/5 w-24 h-24 jellyfish opacity-20 animate-pulse" style={{ animationDelay: '2s' }}>
        <img src={jellyfish2} alt="" className="w-full h-full" />
      </div> */}
      
      {/* Decorative seaweed */}
      {/* <div className="absolute bottom-0 left-10 w-20 h-64 opacity-40 animate-sway">
        <img src={seaweed1} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute bottom-0 right-10 w-24 h-72 opacity-30 animate-sway-reverse">
        <img src={seaweed2} alt="" className="w-full h-full object-contain" />
      </div> */}
      
      {/* Swimming fish - increased size, reduced opacity */}
      {/* <motion.div 
        className="absolute top-1/3 -left-20 w-24 h-16 opacity-40"
        animate={{ x: ["0%", "120vw"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <img src={fish1} alt="" className="w-full h-full" />
      </motion.div>
      <motion.div 
        className="absolute top-2/3 -right-20 w-20 h-14 opacity-30"
        animate={{ x: ["0%", "-120vw"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear", delay: 5 }}
        style={{ transform: "scaleX(-1)" }}
      >
        <img src={fish2} alt="" className="w-full h-full" />
      </motion.div> */}
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 mt-[-50px]"
        >
          {/* Added EPGI logo presenting Samskruthi logo */}
          <div className="p-4 inline-block">
            <div className="flex flex-col items-center">
              <img 
                src={epgiLogo} 
                alt="EPGI" 
                style={{ width: '400px' }}
                className=" brightness-0 invert"
              />
              <p className="text-white text-lg mb-3 font-medium">presents</p>
              <img 
                src={samskruthiLogo} 
                alt="Samskruthi 2K25" 
                className="max-w-xs md:max-w-md lg:max-w-lg mx-auto drop-shadow-[0_0_15px_rgba(155,155,155,0.7)]"
              />
              {/* Added Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl md:text-2xl lg:text-3xl text-white font-extrabold mt-8 tracking-wider 
                  bg-gradient-to-r from-light-blue via-white to-light-blue bg-clip-text text-transparent
                  drop-shadow-[0_0_15px_rgba(126,200,227,0.5)] font-serif"
              >
                Soak in the Hues of Joy
              </motion.h1>
            </div>
          </div>
        </motion.div>
        
        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-10"
        >
          <div className="flex flex-col items-center">
            
            <div className="flex justify-center gap-4 sm:gap-8">
              <div className="bg-deep-blue/70 dark:bg-[#000814]/70 backdrop-blur-sm p-3 sm:p-4 rounded-lg w-16 sm:w-24 shadow-lg border border-light-blue/30 dark:border-[#FFD60A]/30">
                <div className="text-2xl sm:text-4xl font-bold text-light-blue dark:text-[#FFD60A]">{timeLeft.days}</div>
                <div className="text-xs sm:text-sm text-white/80">Days</div>
              </div>
              <div className="bg-deep-blue/70 dark:bg-[#000814]/70 backdrop-blur-sm p-3 sm:p-4 rounded-lg w-16 sm:w-24 shadow-lg border border-light-blue/30 dark:border-[#FFD60A]/30">
                <div className="text-2xl sm:text-4xl font-bold text-light-blue dark:text-[#FFD60A]">{timeLeft.hours}</div>
                <div className="text-xs sm:text-sm text-white/80">Hours</div>
              </div>
              <div className="bg-deep-blue/70 dark:bg-[#000814]/70 backdrop-blur-sm p-3 sm:p-4 rounded-lg w-16 sm:w-24 shadow-lg border border-light-blue/30 dark:border-[#FFD60A]/30">
                <div className="text-2xl sm:text-4xl font-bold text-light-blue dark:text-[#FFD60A]">{timeLeft.minutes}</div>
                <div className="text-xs sm:text-sm text-white/80">Minutes</div>
              </div>
              <div className="bg-deep-blue/70 dark:bg-[#000814]/70 backdrop-blur-sm p-3 sm:p-4 rounded-lg w-16 sm:w-24 shadow-lg border border-light-blue/30 dark:border-[#FFD60A]/30">
                <div className="text-2xl sm:text-4xl font-bold text-light-blue dark:text-[#FFD60A]">{timeLeft.seconds}</div>
                <div className="text-xs sm:text-sm text-white/80">Seconds</div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-light-blue dark:text-[#FFD60A] font-bold drop-shadow-lg"
        >
        </motion.p>
        
        {/* Adding back the buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4 mb-12"
        >
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => window.open('/Samskruthi2K25.pdf', '_blank')}
              className="bubble-button primary"
            >
              Download Brochure
            </button>
            <button 
              onClick={() => setIsEventModalOpen(true)}  // Changed from setIsComingSoonModalOpen
              className="bubble-button secondary"
            >
              Register Now
            </button>
          </div>

          {/* Remove duplicate ComingSoonModal and keep only one EventModal */}
          <EventModal 
            isOpen={isEventModalOpen} 
            onClose={() => setIsEventModalOpen(false)} 
          />
        </motion.div>
        
        {/* Event date and location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-20 left-0 right-0 text-center"
        >
          
        </motion.div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full">
        
      </div>
      
      {/* Event Modal */}
      {/* <EventModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
       */}
      {/* Move the ComingSoonModal inside the section, before the closing tag */}
      <ComingSoonModal 
        isOpen={isComingSoonModalOpen} 
        onClose={() => setIsComingSoonModalOpen(false)} 
      />
    </section>
  );
};

export default Hero;