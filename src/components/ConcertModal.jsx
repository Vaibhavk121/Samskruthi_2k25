import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMusic, FaUniversity, FaTimes } from 'react-icons/fa';

const ConcertModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-deep-blue/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative bg-gradient-to-br from-deep-blue/90 to-ocean-blue/90 rounded-xl p-5 sm:p-6 md:p-8 shadow-2xl border border-light-blue/30 w-full max-w-md overflow-y-auto max-h-[90vh]"
            >
              <button 
                onClick={onClose}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 text-white/70 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <FaTimes size={20} />
              </button>
              
              <h3 className="text-xl sm:text-2xl font-bold text-light-blue mb-4 sm:mb-6 text-center mt-1">
                Concert & DJ Night Registration
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="pt-3 sm:pt-4">
                  <p className="text-white text-center mb-3 sm:mb-4">Select your registration type</p>
                  
                  <div className="grid grid-cols-1 gap-3 sm:gap-4">
                    <button 
                      onClick={() => window.open('https://forms.gle/D4APTwjxHDyX5VVJA', '_blank')}
                      className="flex flex-col items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3 sm:py-4 px-3 rounded-lg transition-all duration-300 border border-light-blue/30"
                    >
                      <FaUniversity size={22} className="sm:text-2xl text-light-blue" />
                      <span className="text-sm sm:text-base font-medium">East Point Registration</span>
                    </button>
                    
                    <button 
                      onClick={() => window.open('https://forms.gle/Yb2wrV9zzFojmnjm9', '_blank')}
                      className="flex flex-col items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3 sm:py-4 px-3 rounded-lg transition-all duration-300 border border-light-blue/30"
                    >
                      <FaMusic size={22} className="sm:text-2xl text-light-blue" />
                      <span className="text-sm sm:text-base font-medium">Outside College Registration</span>
                    </button>
                  </div>
                </div>
                
                <div className="mt-4 text-white/80 text-sm text-center">
                  <p>Join us for an unforgettable night of music and celebration!</p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ConcertModal;