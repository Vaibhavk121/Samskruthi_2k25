import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Gallery from './components/Gallery';
import CountdownTimer from './components/CountdownTimer';
import Registration from './components/Registration';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Bubbles from './components/Bubbles';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS with mobile-optimized settings
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
      disable: window.innerWidth < 768 // Disable animations on mobile
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Reduced loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#000814] to-[#001D3D]">
      <Bubbles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Events />
        <Gallery />
        <CountdownTimer />
        <Registration />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}

export default App;
