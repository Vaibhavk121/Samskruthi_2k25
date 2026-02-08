import React, { useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react"

// Components
import Preloader from './components/Preloader';
import ComingSoon from './components/ComingSoon';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 second loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <Analytics />
      <ComingSoon />
    </>
  );
}

export default App;
