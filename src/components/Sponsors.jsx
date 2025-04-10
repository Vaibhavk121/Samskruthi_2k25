import React from 'react';
import { motion } from 'framer-motion';

// Import sponsor logos
import sponsor1 from '/images/sponsor_logo/coca-cola.png';
import sponsor2 from '/images/sponsor_logo/kfc.png';
import sponsor3 from '/images/sponsor_logo/ktm.png';
import sponsor4 from '/images/sponsor_logo/raj.png';
import sponsor5 from '/images/sponsor_logo/printo.png';
import sponsor6 from '/images/sponsor_logo/trends.png';
import sponsor7 from '/images/sponsor_logo/careerlabs.avif';
import sponsor8 from '/images/sponsor_logo/decathlon.svg';
import sponsor9 from '/images/sponsor_logo/dominos.svg';
import sponsor10 from '/images/sponsor_logo/mufti.png';
import sponsor11 from '/images/sponsor_logo/PluginHive.png';
import sponsor12 from '/images/sponsor_logo/Radio_Mirchi.webp';
import sponsor13 from '/images/sponsor_logo/saatchi-saatchi.png';
import sponsor14 from '/images/sponsor_logo/shot_circuit.png';
import sponsor15 from '/images/sponsor_logo/showoff.jpg';
import sponsor16 from '/images/sponsor_logo/snack&ladder.png';
import sponsor17 from '/images/sponsor_logo/tvs.png';
import sponsor18 from '/images/sponsor_logo/uco.png';
import sponsor19 from '/images/sponsor_logo/unibic.png';
import sponsor20 from '/images/sponsor_logo/yamaha.png';
import sponsor21 from '/images/sponsor_logo/ylg.png';
import sponsor22 from '/images/sponsor_logo/Federal_Bank.png';
import sponsor23 from '/images/sponsor_logo/McDonald.png';
import sponsor24 from '/images/sponsor_logo/PrintSEC_Digital.jpg';



const Sponsors = () => {
  const previousSponsors = [
    { id: 1, name: 'Coca Cola', logo: sponsor1 },
    { id: 2, name: 'KFC', logo: sponsor2 },
    { id: 3, name: 'KTM', logo: sponsor3 },
    { id: 4, name: 'Sponsor 4', logo: sponsor4 },
    { id: 5, name: 'Sponsor 5', logo: sponsor5 },
    { id: 6, name: 'Sponsor 6', logo: sponsor6 },
    { id: 7, name: 'Sponsor 7', logo: sponsor7 },
    { id: 8, name: 'Sponsor 8', logo: sponsor8 },
    { id: 9, name: 'Sponsor 9', logo: sponsor9 },
    { id: 10, name: 'Sponsor 10', logo: sponsor10 },
    { id: 11, name: 'Sponsor 11', logo: sponsor11 },
    { id: 12, name: 'Sponsor 12', logo: sponsor12 },
    { id: 13, name: 'Sponsor 13', logo: sponsor13 },
    { id: 14, name: 'Sponsor 14', logo: sponsor14 },
    { id: 15, name: 'Sponsor 15', logo: sponsor15 },
    { id: 16, name: 'Sponsor 16', logo: sponsor16 },
    { id: 17, name: 'Sponsor 17', logo: sponsor17 },
    { id: 18, name: 'Sponsor 18', logo: sponsor18 },
    { id: 19, name: 'Sponsor 19', logo: sponsor19 },
    { id: 20, name: 'Sponsor 20', logo: sponsor20 },
    { id: 21, name: 'Sponsor 21', logo: sponsor21 },
    { id: 22, name: 'Sponsor 22', logo: sponsor22 },
    { id: 23, name: 'Sponsor 23', logo: sponsor23 },
  ];

  return (
    <section className="py-16 relative overflow-hidden dark:bg-[#001D3D]/20">
      <div className="container mx-auto px-4">
        <motion.h2 
          data-aos="fade-up"
          className="text-4xl font-bold mb-8 text-center glow"
        >
          Previous Sponsors
        </motion.h2>
        
        <motion.div 
          data-aos="fade-up"
          className="max-w-6xl mx-auto bg-white/5 dark:bg-[#001D3D]/30 backdrop-blur-sm rounded-xl p-8 border border-light-blue/20 dark:border-[#003566]/30"
        >
          <div className="overflow-hidden relative">
            <div className="flex space-x-8 animate-marquee-mobile md:animate-marquee">
              {[...previousSponsors, ...previousSponsors].map((sponsor, index) => (
                <div 
                  key={`${sponsor.id}-${index}`}
                  className="flex-shrink-0"
                >
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="h-12 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-white text-lg mb-4">
              Interested in sponsoring Samskruthi 2K25?
            </p>
            <a 
              href="mailto:sponsors@samskruthi2k25.com" 
              className="inline-block bubble-button bg-light-blue/20 hover:bg-light-blue/30 text-white dark:bg-[#003566]/50 dark:hover:bg-[#003566]/70 font-medium py-2 px-6 rounded-full transition-all duration-300"
            >
              Become a Sponsor
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements remain the same */}
    </section>
  );
};

export default Sponsors;