import React, { useEffect, useState } from 'react';

const Bubbles = () => {
  const [bubbles, setBubbles] = useState([]);
  
  useEffect(() => {
    // Create random bubbles
    const createBubbles = () => {
      const newBubbles = [];
      const bubbleCount = window.innerWidth < 768 ? 15 : 30;
      
      for (let i = 0; i < bubbleCount; i++) {
        newBubbles.push({
          id: i,
          left: `${Math.random() * 100}%`,
          size: `${Math.random() * 2 + 0.5}rem`,
          animationDuration: `${Math.random() * 10 + 5}s`,
          animationDelay: `${Math.random() * 5}s`,
          opacity: Math.random() * 0.3 + 0.1
        });
      }
      
      setBubbles(newBubbles);
    };
    
    createBubbles();
    
    // Recreate bubbles on window resize
    const handleResize = () => {
      createBubbles();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            left: bubble.left,
            width: bubble.size,
            height: bubble.size,
            animationDuration: bubble.animationDuration,
            animationDelay: bubble.animationDelay,
            opacity: bubble.opacity
          }}
        ></div>
      ))}
    </div>
  );
};

export default Bubbles;