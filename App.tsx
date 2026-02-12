import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solutions from './components/Solutions';
import Process from './components/Process';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check local storage or system preference
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col font-sans text-primary dark:text-white bg-white dark:bg-darkBg selection:bg-primary selection:text-white dark:selection:bg-white dark:selection:text-primary">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main className="flex-grow">
        <Hero />
        <PainPoints />
        <Solutions />
        <Process />
        <FinalCTA />
      </main>
      <Footer isDark={isDark} />
    </div>
  );
};

export default App;