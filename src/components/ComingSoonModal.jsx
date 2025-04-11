import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaHourglassHalf } from 'react-icons/fa';

const ComingSoonModal = ({ isOpen, onClose }) => {
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
              className="relative bg-gradient-to-br from-deep-blue/90 to-ocean-blue/90 rounded-xl p-5 sm:p-6 md:p-8 shadow-2xl border border-light-blue/30 w-full max-w-md"
            >
              <button 
                onClick={onClose}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 text-white/70 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <FaTimes size={20} />
              </button>

              <div className="text-center">
                <motion.div 
                  className="mx-auto w-16 h-16 mb-6 text-light-blue"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <FaHourglassHalf size={64} />
                </motion.div>

                <h3 className="text-2xl font-bold text-light-blue mb-4">
                  Coming Soon!
                </h3>

                <p className="text-white/90 mb-6">
                  We're putting the finishing touches on something amazing. Stay tuned for the big reveal!
                </p>

                <div className="space-y-4">
                  <div className="flex justify-center items-center gap-2 text-white/80">
                    <span className="text-sm">Samskruthi 2K25</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-light-blue"></span>
                    <span className="text-sm">April 24-25, 2025</span>
                  </div>
                  
                  <motion.div
                    className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-light-blue to-blue-400"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "linear",
                      }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ComingSoonModal;