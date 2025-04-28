import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCalendarCheck, FaMusic, FaInstagram} from 'react-icons/fa';

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
              
              <div className="text-center">
                <FaMusic size={50} className="mx-auto text-light-blue mb-4" />
                <h3 className="text-2xl sm:text-3xl font-bold text-light-blue mb-4">
                  Samskruthi 2K25 Ended With A Banger!
                </h3>
                
                <div className="space-y-4 mt-6">
                  <p className="text-white text-lg">
                    Thank you for making this event a huge success!
                  </p>
                  
                  <div className="py-4">
                    <div className="h-0.5 w-16 bg-light-blue/30 mx-auto"></div>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-lg">
                    <FaCalendarCheck size={24} className="mx-auto text-light-blue mb-2" />
                    <p className="text-white font-medium">See you next year with</p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-light-blue to-white bg-clip-text text-transparent">
                      Samskruthi 2K26!
                    </p>
                  </div>
                  
                  <div className="mt-6">
                    <p className="text-white/70 text-sm mb-3">
                      Follow us on social media for updates and highlights from this year's event.
                    </p>
                    <a 
                      href="https://www.instagram.com/samskruthi_2k25?igsh=MXJ5M2NkM3ZxNGhsNg==" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all"
                    >
                     <FaInstagram size={24} />
                      <span>@samskruthi_2k25</span>
                    </a>
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

export default ConcertModal;