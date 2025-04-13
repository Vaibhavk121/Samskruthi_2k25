import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaEye, FaTheaterMasks, FaPaintBrush, FaTimes } from 'react-icons/fa';

const EventModal = ({ isOpen, onClose }) => {
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
                Samskruthi 2K25 Events
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                <button 
                  onClick={() => window.open('/Samskruthi2K25.pdf', '_blank')}
                  className="w-full flex items-center justify-center gap-3 bg-light-blue hover:bg-blue-600 text-deep-blue py-2.5 sm:py-3 px-4 rounded-lg transition-all duration-300"
                >
                  <FaDownload /> Download Brochure
                </button>
                
                <div className="pt-3 sm:pt-4 border-t border-white/20">
                  <p className="text-white text-center mb-3 sm:mb-4">Register for Events</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <button 
                      onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScN6fHnCzzfMKCgPN8kGM69_teFYU2bT6kqRJe3thnqECe6FQ/viewform?pli=1', '_blank')}
                      className="flex flex-col items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3 sm:py-4 px-3 rounded-lg transition-all duration-300"
                    >
                      <FaTheaterMasks size={22} className="sm:text-2xl" />
                      <span className="text-sm sm:text-base">On Stage Events</span>
                    </button>
                    
                    <button 
                      onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdhp1yTu3AZpGZQVvptmzQfhp9rcBkYQxxGaSAo3oYTLr6ouQ/viewform', '_blank')}
                      className="flex flex-col items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3 sm:py-4 px-3 rounded-lg transition-all duration-300"
                    >
                      <FaPaintBrush size={22} className="sm:text-2xl" />
                      <span className="text-sm sm:text-base">Off Stage Events</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EventModal;