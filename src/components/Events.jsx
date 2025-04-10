// First, let's add imports for event-specific images
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


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
  // Add the flippedCards state at the component level
  const [flippedCards, setFlippedCards] = useState({});
  
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

  // Update the events arrays to include images
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

  // Update the Events Grid section with hover effect
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
        
        {/* Event Carousel with Blur Transition */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-xl shadow-2xl h-64 md:h-80 lg:h-96">
            {/* Carousel images with blur transition */}
            <AnimatePresence initial={false}>
              <motion.div 
                key={currentSlide}
                className="absolute inset-0"
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(8px)" }}
                transition={{ 
                  duration: 1.2,
                  ease: "easeInOut",
                  opacity: { duration: 1 },
                  filter: { duration: 1.2 }
                }}
              >
                <img 
                  src={eventImages[currentSlide]} 
                  alt={`Event ${currentSlide + 1}`} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
            
            
            
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

        {/* Events Grid - Optimized rendering with hover effect */}
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
              
              {(activeTab === 'onStage' ? onStageEvents : offStageEvents).map((event, index) => (
                <motion.div
                  key={event.id}
                  variants={cardVariants}
                  className="relative h-40 w-full perspective-1000 group"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="card-container md:group-hover:rotate-y-180">
                    {/* Front of card */}
                    <div className="card-front backdrop-blur-md bg-white/10 p-5
                            border border-white/20 shadow-lg">
                      <div className="flex flex-col items-center justify-center h-full text-center">
                        <h3 className="text-lg font-bold text-white">{event.title}</h3>
                        <div className="w-10 h-0.5 bg-white/30 rounded-full mt-2"></div>
                      </div>
                    </div>
                    
                    {/* Back of card with description */}
                    <div className="card-back backdrop-blur-md bg-white/15 p-4
                            border border-white/20 shadow-lg">
                      <div className="flex flex-col h-full justify-between">
                        <h3 className="text-md font-bold text-white text-center">{event.title}</h3>
                        <p className="text-xs text-white/90 mt-1 overflow-auto flex-grow">
                          {activeTab === 'onStage' ? (
                            // On stage event descriptions
                            event.id === 1 ? "Showcase your classical dance skills with grace and precision in this traditional performance competition." :
                            event.id === 2 ? "Demonstrate your mastery of classical singing techniques and captivate the audience with your melodious voice." :
                            event.id === 3 ? "Team up with a partner to create harmonious duets that will leave the audience spellbound." :
                            event.id === 4 ? "Express yourself through solo singing and showcase your unique vocal talent on stage." :
                            event.id === 5 ? "Perform an enchanting duet dance routine with synchronized movements and creative choreography." :
                            event.id === 6 ? "Take center stage with your solo dance performance and demonstrate your individual style and technique." :
                            event.id === 7 ? "Coordinate with your team to deliver a spectacular group dance performance with perfect synchronization." :
                            event.id === 8 ? "Create amazing beats and rhythms using just your mouth in this exciting beatboxing competition." :
                            event.id === 9 ? "Strut your stuff on the runway and showcase your fashion sense and stage presence." :
                            event.id === 10 ? "Demonstrate your musical prowess with instrumental performances that will mesmerize the audience." :
                            "Compete with your band against others in this ultimate musical showdown."
                          ) : (
                            // Off stage event descriptions
                            event.id === 1 ? "Express your creativity through painting in this artistic competition." :
                            event.id === 2 ? "Create beautiful traditional rangoli designs showcasing your artistic skills." :
                            event.id === 3 ? "Produce and direct your own short film for this cinematic competition." :
                            event.id === 4 ? "Demonstrate your sketching talent with detailed and creative drawings." :
                            event.id === 5 ? "Challenge other dancers in this exciting freestyle dance battle." :
                            event.id === 6 ? "Capture stunning moments through your lens in this photography contest." :
                            event.id === 7 ? "Create intricate mehendi designs in this traditional art competition." :
                            event.id === 8 ? "Test your knowledge across various topics in this challenging quiz." :
                            "Express yourself through spoken poetry in this powerful verbal art form."
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      {/* Floating sea creatures */}
      <img 
        src="/images/seahorse.webp" 
        alt="" 
        className="absolute top-40 right-5 w-16 h-auto animate-float opacity-30 md:opacity-40 pointer-events-none z-0" 
        style={{ animationDelay: '0.5s' }} 
      />
      <img 
        src="/images/starfish.webp" 
        alt="" 
        className="absolute bottom-20 left-10 w-14 h-auto animate-float opacity-30 md:opacity-40 pointer-events-none z-0" 
        style={{ animationDelay: '1.5s' }} 
      />
    </section>
  );
};

export default Events;