import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
// Import gallery images
import  image2k24_1 from '/images/gallery/2k24/1.jpg';
import  image2k24_2 from '/images/gallery/2k24/2.jpg';
import  image2k24_3 from '/images/gallery/2k24/3.jpg';
import  image2k24_4 from '/images/gallery/2k24/4.jpg';
import  image2k24_5 from '/images/gallery/2k24/5.jpg';
import  image2k24_6 from '/images/gallery/2k24/6.jpg';
import  image2k24_7 from '/images/gallery/2k24/7.jpg';
import  image2k24_8 from '/images/gallery/2k24/8.jpg';
import  image2k24_9 from '/images/gallery/2k24/9.jpg';
import  image2k24_10 from '/images/gallery/2k24/10.jpg';
import  image2k24_11 from '/images/gallery/2k24/11.jpg';
import  image2k24_12 from '/images/gallery/2k24/12.jpg';
import  image2k24_13 from '/images/gallery/2k24/13.jpg';
import  image2k24_14 from '/images/gallery/2k24/14.jpg';
import  image2k24_15 from '/images/gallery/2k24/15.jpg';
import  image2k24_16 from '/images/gallery/2k24/16.jpg';
import  image2k24_17 from '/images/gallery/2k24/17.jpg';
import  image2k24_18 from '/images/gallery/2k24/18.jpg';
import  image2k24_19 from '/images/gallery/2k24/19.jpg';
import  image2k24_20 from '/images/gallery/2k24/20.jpg';
import  image2k24_21 from '/images/gallery/2k24/21.jpg';
import  image2k24_22 from '/images/gallery/2k24/22.jpg';
import  image2k24_23 from '/images/gallery/2k24/23.jpg';
import  image2k24_24 from '/images/gallery/2k24/24.jpg';
import  image2k24_25 from '/images/gallery/2k24/25.jpg';
import  image2k24_26 from '/images/gallery/2k24/26.jpg';
import  image2k24_27 from '/images/gallery/2k24/27.jpg';
import  image2k24_28 from '/images/gallery/2k24/28.jpg';
import  image2k24_29 from '/images/gallery/2k24/29.jpg';
import  image2k24_30 from '/images/gallery/2k24/30.jpg';
import  image2k23_1 from '/images/gallery/2k23/1.jpg';
import  image2k23_2 from '/images/gallery/2k23/2.jpg';
import  image2k23_3 from '/images/gallery/2k23/3.jpg';
import  image2k23_4 from '/images/gallery/2k23/4.jpg';
import  image2k23_5 from '/images/gallery/2k23/5.jpg';
import  image2k23_6 from '/images/gallery/2k23/6.jpg';
import  image2k23_7 from '/images/gallery/2k23/7.jpg';
import  image2k23_8 from '/images/gallery/2k23/8.jpg';
import  image2k23_10 from '/images/gallery/2k23/10.jpg';
import  image2k23_11 from '/images/gallery/2k23/11.jpg';
import  image2k23_12 from '/images/gallery/2k23/12.jpg';
import  image2k23_13 from '/images/gallery/2k23/13.jpg';
import  image2k23_14 from '/images/gallery/2k23/14.jpg';
import  image2k22_1 from '/images/gallery/2k22/1.jpg';
import  image2k22_2 from '/images/gallery/2k22/2.jpg';
import  image2k22_3 from '/images/gallery/2k22/3.jpg';
import  image2k22_4 from '/images/gallery/2k22/4.jpg';
import  image2k22_5 from '/images/gallery/2k22/5.jpg';
import  image2k22_6 from '/images/gallery/2k22/6.jpg';
import  image2k22_7 from '/images/gallery/2k22/7.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Organize images by year
  const images2024 = [
    { src: image2k24_1, alt: 'Cultural Event' },
    { src: image2k24_2, alt: 'Dance Performance' },
    { src: image2k24_3, alt: 'Cultural Event' },
    { src: image2k24_4, alt: 'Cultural Event' } ,
    { src: image2k24_5, alt: 'Cultural Event' },
    { src: image2k24_6, alt: 'Cultural Event' },
    { src: image2k24_7, alt: 'Cultural Event' },
    { src: image2k24_8, alt: 'Cultural Event' },
    { src: image2k24_9, alt: 'Cultural Event' },
    { src: image2k24_10, alt: 'Cultural Event' },
    { src: image2k24_11, alt: 'Cultural Event' },
    { src: image2k24_12, alt: 'Cultural Event' },
    { src: image2k24_13, alt: 'Cultural Event' },
    { src: image2k24_14, alt: 'Cultural Event' },
    { src: image2k24_15, alt: 'Cultural Event' },
    { src: image2k24_16, alt: 'Cultural Event' },
    { src: image2k24_17, alt: 'Cultural Event' },
    { src: image2k24_18, alt: 'Cultural Event' },
    { src: image2k24_19, alt: 'Cultural Event' },
    { src: image2k24_20, alt: 'Cultural Event' },
    { src: image2k24_21, alt: 'Cultural Event' },
    { src: image2k24_22, alt: 'Cultural Event' },
    { src: image2k24_23, alt: 'Cultural Event' },
    { src: image2k24_24, alt: 'Cultural Event' },
    { src: image2k24_25, alt: 'Cultural Event' },
    { src: image2k24_26, alt: 'Cultural Event' },
    { src: image2k24_27, alt: 'Cultural Event' },
    { src: image2k24_28, alt: 'Cultural Event' },
    { src: image2k24_29, alt: 'Cultural Event' },
    { src: image2k24_30, alt: 'Cultural Event' },
    

    // ... add all 2024 images
  ];

  const images2023 = [
    { src: image2k23_1, alt: 'Singing Competition' },
    { src: image2k23_2, alt: 'Dance Competition' },
    { src: image2k23_3, alt: 'Cultural Event' },
    { src: image2k23_4, alt: 'Cultural Event' },
    { src: image2k23_5, alt: 'Cultural Event' },
    { src: image2k23_6, alt: 'Cultural Event' },
    { src: image2k23_7, alt: 'Cultural Event' },
    { src: image2k23_8, alt: 'Cultural Event' },
    { src: image2k23_10, alt: 'Cultural Event' },
    // ... add all 2023 images
  ];

  const images2022 = [
    { src: image2k22_1, alt: 'Dance Performance' },
    { src: image2k22_2, alt: 'Dance Performance' },
    { src: image2k22_3, alt: 'Cultural Event' },
    { src: image2k22_4, alt: 'Cultural Event' },
    { src: image2k22_5, alt: 'Cultural Event' },
    { src: image2k22_6, alt: 'Cultural Event' },
    { src: image2k22_7, alt: 'Cultural Event' },
    
    // ... add all 2022 images
  ];

  return (
    <section id="gallery" className="py-12 bg-deep-blue/50">
      <div className="container mx-auto px-4">
        {/* Header section with improved visibility for mobile */}
        <div className="text-center mb-10 relative z-10">
          <h2 
            className="text-4xl font-bold mb-4 text-center text-white"
            style={{ 
              opacity: 1, 
              visibility: 'visible',
              textShadow: '0 0 10px rgba(255, 255, 255, 0.7)'
            }}
          >
            Gallery
          </h2>
          <h6 
            className="text-xl md:text-2xl font-bold mb-6 text-center text-white"
            style={{ 
              opacity: 1, 
              visibility: 'visible',
              textShadow: '0 0 8px rgba(255, 255, 255, 0.7)'
            }}
          >
            Have a Glimpse of Samskruthi
          </h6>
        </div>

        {/* 2024 Carousel - Left to Right */}
        <div className="mb-12">
          <div className="overflow-hidden relative">
            <div className="flex gap-4 animate-scroll-left whitespace-nowrap">
              {[...images2024, ...images2024].map((image, index) => (
                <div 
                  key={index}
                  className="min-w-[250px] h-[180px] rounded-lg overflow-hidden flex-shrink-0 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2023 Carousel - Right to Left */}
        <div className="mb-12">
          <div className="overflow-hidden relative">
            <div className="flex gap-4 animate-scroll-right whitespace-nowrap">
              {[...images2023, ...images2023].map((image, index) => (
                <div 
                  key={index}
                  className="min-w-[250px] h-[180px] rounded-lg overflow-hidden flex-shrink-0 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2022 Carousel - Left to Right */}
        <div className="mb-12">
         
          <div className="overflow-hidden relative">
            <div className="flex gap-4 animate-scroll-left whitespace-nowrap will-change-transform">
              {[...images2022].map((image, index) => (
                <div 
                  key={index}
                  className="min-w-[250px] h-[180px] rounded-lg overflow-hidden flex-shrink-0 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-light-blue transition-colors duration-300"
              >
                <FaTimes size={24} />
              </button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;

