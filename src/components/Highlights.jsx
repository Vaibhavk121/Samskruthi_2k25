import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaPlay, FaExpand } from 'react-icons/fa';

const Highlights = () => {
  const [selectedReel, setSelectedReel] = useState(null);
  
  // Instagram reel data - replace these with actual reel URLs from Samskruthi 2K25
  const reels = [
    {
      id: 1,
      title: "Sonu Nigam Concert",
      thumbnail: "/images/highlights/thumb1.jpg", 
      url: "https://www.instagram.com/share/reel/BAFahiiJP_",
      description: "Mesmerizing performance by the legendary Sonu Nigam at Samskruthi 2K25"
    },
    {
      id: 2,
      title: "Siana Catherine DJ Night",
      thumbnail: "/images/highlights/thumb2.jpg",
      url: "https://www.instagram.com/share/reel/__cPZ4olI",
      description: "Electrifying DJ set by Siana Catherine that had everyone dancing"
    },
    {
      id: 3,
      title: "Basstronik DJ Night",
      thumbnail: "/images/highlights/thumb3.jpg",
      url: "https://www.instagram.com/share/reel/__cPZ4olI",
      description: "Heart-thumping bass drops by Basstronik that energized the crowd"
    },
    {
      id: 4,
      title: "EPGI Concert",
      thumbnail: "/images/highlights/thumb4.jpg",
      url: "https://www.instagram.com/share/reel/BAF_NphDak",
      description: "Talented performers from East Point Group of Institutions showcasing their musical prowess"
    },
    {
      id: 5,
      title: "Fashion Show",
      thumbnail: "/images/highlights/thumb5.jpg",
      url: "https://www.instagram.com/share/reel/BAKe5rkS0S",
      description: "Spectacular fashion show showcasing creative designs and stunning outfits"
    },
    {
      id: 6,
      title: "Inauguration",
      thumbnail: "/images/highlights/thumb6.jpg",
      url: "https://www.instagram.com/share/reel/_mfYLaIv0",
      description: "Grand opening ceremony of Samskruthi 2K25 with distinguished guests and cultural performances"
    }
  ];

  // Update the openReel function to open Instagram links in a new tab
  const openReel = (reel) => {
    // Instead of showing in modal, open in new tab
    window.open(reel.url, '_blank', 'noopener,noreferrer');
  };
  
  // Remove or comment out the getEmbedUrl function since we won't be using it
  // const getEmbedUrl = (url) => {
  //   return url.replace('instagram.com/reel', 'instagram.com/p');
  // };
  const closeReel = () => {
    setSelectedReel(null);
  };

  // Function to extract Instagram embed URL from regular URL
  const getEmbedUrl = (url) => {
    // Convert regular Instagram URL to embed URL
    return url.replace('instagram.com/reel', 'instagram.com/p');
  };

  return (
    <section id="highlights" className="py-20 relative overflow-hidden bg-gradient-to-b from-[#001D3D] to-[#000814]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-light-blue dark:text-[#FFD60A] glow">
            Samskruthi 2K25 Highlights
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Relive the magical moments from our underwater cultural extravaganza through these captivating highlights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reels.map((reel) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-deep-blue/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-light-blue/20"
            >
              <div className="relative aspect-video group cursor-pointer" onClick={() => openReel(reel)}>
                <img 
                  src={reel.thumbnail} 
                  alt={reel.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center">
                  <div className="bg-light-blue/30 dark:bg-[#FFD60A]/30 p-4 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaPlay className="text-white text-2xl" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-lg">{reel.title}</h3>
                </div>
                <div className="absolute top-3 right-3">
                  <div className="bg-light-blue/20 dark:bg-[#FFD60A]/20 p-2 rounded-full backdrop-blur-sm">
                    <FaInstagram className="text-white text-lg" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-white/70 text-sm">{reel.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a 
            href="https://www.instagram.com/samskruthi_2k25?igsh=MXJ5M2NkM3ZxNGhsNg==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            <FaInstagram className="text-white" />
            <span>View More on Instagram</span>
          </a>
        </div>
      </div>

      {/* Modal for displaying the selected reel */}
      {selectedReel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={closeReel}>
          <div className="relative w-full max-w-3xl max-h-[80vh] bg-deep-blue/90 rounded-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              onClick={closeReel}
            >
              <FaExpand className="transform rotate-180" />
            </button>
            <div className="aspect-video w-full">
              <iframe
                src={`${getEmbedUrl(selectedReel.url)}/embed`}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-white font-bold text-xl mb-2">{selectedReel.title}</h3>
              <p className="text-white/70">{selectedReel.description}</p>
              <a 
                href={selectedReel.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-light-blue dark:text-[#FFD60A] hover:underline"
              >
                <FaInstagram />
                <span>View on Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Highlights;