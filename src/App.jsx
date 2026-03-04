import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SkillCard from './components/SkillCard';
import TestimonialSlider from './components/TestimonialSlider';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

const App = () => {
  const [headerVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true); 

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div>
      {/* isVisible={headerVisible} */}
      <Header isVisible={headerVisible}/>
      <main className="flex-grow">
        <Home isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <About />
        <section className="container mx-auto px-4 py-8 flex flex-col items-center">
          <h3 className="text-3xl font-bold">Skills</h3>
          <div className="flex flex-wrap justify-center">
            <SkillCard />
          </div>
        </section>
        <section className="container mx-auto px-4 py-8 flex flex-col items-center">
          <h3 className="text-3xl font-bold mt-20">Testimonials</h3>
          <TestimonialSlider />
        </section>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;