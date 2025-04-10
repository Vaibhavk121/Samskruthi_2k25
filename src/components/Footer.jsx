import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt ,FaFirefoxBrowser} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="pt-16 pb-8 relative overflow-hidden bg-deep-blue dark:bg-[#000814]" style={{ opacity: 1, visibility: 'visible' }}>
      <div className="container mx-auto px-4" style={{ opacity: 1, visibility: 'visible' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            data-aos="fade-up"
            data-aos-once="false"
            className="text-center md:text-left"
            style={{ opacity: 1, visibility: 'visible' }}
          >
            {/* Replace text with logo image */}
            <div className="mb-4">
              <img 
                src="/images/samskruthi-logo.png" 
                alt="Samskruthi 2K25" 
                className="h-16 mx-auto md:mx-0"
              />
            </div>
            <p className="text-light-blue dark:text-[#FFD60A] mb-4">
            Soak in the Hues of Joy
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.eastpoint.ac.in/" className="text-white hover:text-light-blue dark:hover:text-[#FFD60A] transition-colors duration-300">
                <FaFirefoxBrowser size={24} />
              </a>
             
              <a href="https://www.instagram.com/samskruthi_2k25?igsh=MXJ5M2NkM3ZxNGhsNg==" className="text-white hover:text-light-blue dark:hover:text-[#FFD60A] transition-colors duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.youtube.com/@eastpointgroupofinstitutio4225" className="text-white hover:text-light-blue dark:hover:text-[#FFD60A] transition-colors duration-300">
                <FaYoutube size={24} />
              </a>
            </div>
          </motion.div>
          
          {/* Rest of the component remains unchanged */}
          <motion.div 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-light-blue dark:text-[#FFD60A] hover:text-white dark:hover:text-white transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="text-light-blue dark:text-[#FFD60A] hover:text-white dark:hover:text-white transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="#events" className="text-light-blue dark:text-[#FFD60A] hover:text-white dark:hover:text-white transition-colors duration-300">Events</a>
              </li>
              <li>
                <a href="#gallery" className="text-light-blue dark:text-[#FFD60A] hover:text-white dark:hover:text-white transition-colors duration-300">Gallery</a>
              </li>
              <li>
                <a href="#register" className="text-light-blue dark:text-[#FFD60A] hover:text-white dark:hover:text-white transition-colors duration-300">Register</a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-center md:text-right"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-end text-light-blue dark:text-[#FFD60A]">
                <FaEnvelope className="mr-2" />
                <a href="mailto:registration.samskruthi@eastpoint.ac.in" className="hover:text-white dark:hover:text-white transition-colors duration-300">registration.samskruthi@eastpoint.ac.in</a>
              </li>
              <li className="flex items-center justify-center md:justify-end text-light-blue dark:text-[#FFD60A]">
                <FaPhone className="mr-2" />
                <a href="tel:+91 8145645183" className="hover:text-white dark:hover:text-white transition-colors duration-300">+91 8145645183</a>
              </li>
              <li className="flex items-center justify-center md:justify-end text-light-blue dark:text-[#FFD60A]">
                <FaMapMarkerAlt className="mr-2" />
                <span>East Point Group  of Institutions</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-light-blue/20 dark:border-[#003566]/30 text-center">
          <p className="text-white text-sm">
            &copy; {new Date().getFullYear()} Samskruthi 2K25. All rights reserved.
          </p>
          {/* <h3 className="text-white text-sm">
            Made with 💖  By Vaibhav Kumar
          </h3>
          <h3 className="text-white text-sm">
            (😎Your friendly tech geek😉)
          </h3> */}
        </div>
      </div>
      
      <div
  className="absolute bottom-0 left-0 w-full aspect-[12/1] opacity-30 pointer-events-none"
  style={{
    backgroundImage: 'url(/images/seabed.gif)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    backgroundPosition: 'bottom center',
  }}
></div>

    </footer>
  );
};

export default Footer;