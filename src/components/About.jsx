import React from 'react';
import { motion } from 'framer-motion';
import banner from '/images/banner.jpg';
const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden  dark:bg-[#001D3D]/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            data-aos="fade-up"
            className="text-4xl font-bold mb-8 text-center glow"
          >
            About Samskruthi 2K25
          </motion.h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div 
              data-aos="fade-right"
              className="md:w-1/2"
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src={banner}
                  alt="Underwater Theme" 
                  className="w-full h-auto rounded-lg"
                />
                
              </div>
            </motion.div>
            
            <motion.div 
              data-aos="fade-left"
              className="md:w-1/2"
            >
              <p className="text-lg mb-4">
              Samskruthi 2025 brings the magical world under the sea to life through a vibrant celebration of arts, music, dance, and creativity. This year's theme invites participants to explore the depths of cultural expression inspired by oceanic wonders.
              From coral reefs to mysterious deep-sea creatures, our events draw inspiration from the vast underwater world, creating a unique and immersive experience for all participants and attendees.
              </p>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <motion.div 
              data-aos="zoom-in"
              className="inline-block"
            >
              <div className="bg-light-blue/20 dark:bg-[#003566]/50 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-2">24<sup>th</sup>,  25<sup>th</sup> and 26<sup>th</sup> April, 2025</h3>
                <p className="text-lg">East Point College Campus</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Coral reef decoration */}
      {/* <div className="absolute bottom-0 left-0 w-full h-24 bg-contain bg-repeat-x" style={{ backgroundImage: 'url(/images/coral-reef.png)' }}></div> */}
      
      {/* Sea creatures - repositioned to avoid text overlap */}
      <img 
        src="/images/fish1.png" 
        alt="" 
        className="absolute top-7 left-9 w-16 h-auto animate-float" 
      />
      <img 
        src="/images/fish2.png" 
        alt="" 
        className="absolute bottom-23 right-10 w-20 h-auto animate-float" 
        style={{ animationDelay: '1s' }} 
      />
    </section>
  );
};

export default About;