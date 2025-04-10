import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTheaterMasks, FaPaintBrush, FaMusic, FaFilm, FaCamera, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import event images
import event1 from '/images/events/1.jpg';
import event2 from '/images/events/2.jpg';
import event3 from '/images/events/3.jpg';
import event4 from '/images/events/4.jpg';
import event5 from '/images/events/5.jpg';
import event6 from '/images/events/6.jpg';
import event7 from '/images/events/7.jpg';
import event8 from '/images/events/8.jpg'

const Events = () => {
  const [activeTab, setActiveTab] = useState('onStage');
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Event images for carousel
  const eventImages = [event1, event2, event3, event4, event5,event6,event7,event8];
  
  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === eventImages.length - 1 ? 0 : prev + 1));
    }, 3000);
    
    return () => clearInterval(interval);
  }, [eventImages.length]);
  
  // Manual navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === eventImages.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? eventImages.length - 1 : prev - 1));
  };

  const onStageEvents = [
    { id: 1, title: 'Classical Dance' },
    { id: 2, title: 'Classical Singing' },
    { id: 3, title: 'Duet Singing' },
    { id: 4, title: 'Solo Singing' },
    { id: 5, title: 'Duet Dance' },
    { id: 6, title: 'Solo Dance' },
    { id: 7, title: 'Group Dance' },
    { id: 8, title: 'Beatboxing' },
    { id: 9, title: 'Fashion Show' },
    { id: 10, title: 'Instrumental' },
    { id: 11, title: 'Battle of Bands' }
  ];
  
  const offStageEvents = [
    { id: 1, title: 'Painting' },
    { id: 2, title: 'Rangoli' },
    { id: 3, title: 'Short Film' },
    { id: 4, title: 'Sketching' },
    { id: 5, title: 'Dance Battle' },
    { id: 6, title: 'Photography' },
    { id: 7, title: 'Mehendi' },
    { id: 8, title: 'Quiz' },
    { id: 9, title: 'Spoken Poetry' }
  ];

  // Container variants for optimized animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        duration: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="events" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center glow"
        >
          Events
        </motion.h2>
        
        {/* Event Carousel */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-xl shadow-2xl h-64 md:h-80 lg:h-96">
            {/* Carousel images */}
            <div className="absolute inset-0 flex transition-transform duration-500 ease-in-out" 
                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {eventImages.map((image, index) => (
                <div key={index} className="min-w-full h-full">
                  <img 
                    src={image} 
                    alt={`Event ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                  
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-1.5 rounded-full inline-flex shadow-lg">
            <button
              onClick={() => setActiveTab('onStage')}
              className={`px-8 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === 'onStage' 
                  ? 'bg-white/10 text-white shadow-lg backdrop-blur-lg border border-white/20' 
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              On Stage Events
            </button>
            <button
              onClick={() => setActiveTab('offStage')}
              className={`px-8 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === 'offStage' 
                  ? 'bg-white/10 text-white shadow-lg backdrop-blur-lg border border-white/20' 
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              Off Stage Events
            </button>
          </div>
        </div>

        {/* Events Grid - Optimized rendering */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {(activeTab === 'onStage' ? onStageEvents : offStageEvents).map((event) => (
                <motion.div
                  key={event.id}
                  variants={cardVariants}
                  className="relative group"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative backdrop-blur-md bg-white/10 rounded-2xl p-6 
                                border border-white/20 shadow-lg
                                group-hover:bg-white/15 transition-colors duration-200">
                    <div className="flex flex-col items-center text-center space-y-3">
                      <h3 className="text-xl font-bold text-white">{event.title}</h3>
                      <div className="w-12 h-0.5 bg-white/30 rounded-full"></div>
                      <button className="w-full py-2.5 px-5
                                   bg-white/10 hover:bg-white/20
                                   border border-white/20
                                   text-white rounded-xl transition-colors duration-200
                                   text-sm font-semibold">
                        Register Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      {/* Floating sea creatures */}
      <img src="/images/seahorse.png" alt="" className="absolute top-40 right-5 w-16 h-auto animate-float" style={{ animationDelay: '0.5s' }} />
      <img src="/images/starfish.png" alt="" className="absolute bottom-20 left-10 w-14 h-auto animate-float" style={{ animationDelay: '1.5s' }} />
    </section>
  );
};

export default Events;