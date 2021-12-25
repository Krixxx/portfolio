import React, { useState, useEffect } from 'react';
import { Hero, Navbar, Projects, About, Contact, Footer } from './sections';

// Import AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const getStorageTheme = () => {
  let theme = 'dark-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    Aos.init({ offset: 75, duration: 1000, disable: 'mobile' });
  }, []);

  return (
    <>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <div className='container'>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
