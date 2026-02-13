import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solutions from './components/Solutions';
import Process from './components/Process';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col font-sans text-primary dark:text-white bg-white dark:bg-darkBg selection:bg-primary selection:text-white dark:selection:bg-white dark:selection:text-primary">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <PainPoints />
        <Solutions />
        <Process />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;