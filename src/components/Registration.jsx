import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import EventModal from './EventModal';

const Registration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="register" className="py-20 relative overflow-hidden" style={{ opacity: 1, visibility: 'visible' }}>
      <div className="container mx-auto px-4" style={{ opacity: 1, visibility: 'visible' }}>
        <motion.h2 
          data-aos="fade-up"
          data-aos-once="false"
          className="text-4xl font-bold mb-8 text-center glow"
          style={{ opacity: 1, visibility: 'visible' }}
        >
          Registration
        </motion.h2>
        
        <div className="max-w-2xl mx-auto">
          <motion.div 
            data-aos="fade-up"
            className="bg-deep-blue/70 dark:bg-[#001D3D]/70 rounded-xl p-8 md:p-10 shadow-xl backdrop-blur-sm border border-light-blue/30 dark:border-[#003566]/30 text-center"
          >
            <div className="py-8">
              <div className="text-6xl mb-6">🎟️</div>
              <h3 className="text-2xl font-bold mb-4 text-light-blue dark:text-[#FFD60A]">Join Samskruthi 2K25!</h3>
              <p className="text-white text-lg mb-8">
                Register now to participate in our exciting underwater-themed cultural fest. 
                Don't miss out on this immersive experience!
              </p>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bubble-button inline-flex items-center bg-light-blue hover:bg-blue-600 text-deep-blue dark:bg-[#003566] dark:hover:bg-[#004D99] dark:text-[#FFD60A] font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Explore Events & Register <FaExternalLinkAlt className="ml-2" />
              </button>
              
              <div className="mt-8 text-white/80 text-sm">
                <p className="mt-2">For any queries, contact us at <a href="mailto:registration.samskruthi@eastpoint.ac.in" className="text-light-blue dark:text-[#FFD60A] underline hover:no-underline">registration.samskruthi@eastpoint.ac.in</a></p>
              </div>
            </div>
          </motion.div>
          
          {/* Event Modal */}
          <EventModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 opacity-20">
        <img src="/images/octopus.png" alt="" className="w-full h-full animate-float" />
      </div>
      <div className="absolute top-20 right-10 w-16 h-16 opacity-20">
        <img src="/images/turtle.png" alt="" className="w-full h-full animate-float" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute bottom-40 right-20 w-24 h-24 opacity-30">
        <img src="/images/jellyfish1.png" alt="" className="w-full h-full animate-pulse" />
      </div>
    </section>
  );
};

export default Registration;