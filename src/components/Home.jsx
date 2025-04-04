import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; 
import '../styles/Home.css'; 

const Home = ({ isDarkMode, toggleTheme }) => {
  return (
    <section id="home" className="background">
      <div className="content">
        <div className="profile">
          
        </div>
        <div className="description">
          <div className='welcome'>
            <h1><strong className="text-blue-400">WELCOME</strong></h1>
          </div>

          <h1>I'm <strong>Tsion Abebayehu</strong></h1>
          <p>A Creative Graphic Designer and Frontend Developer</p>
          <p>
            Passionate about crafting beautiful and user-friendly web experiences. 
            I specialize in turning ideas into pixel-perfect designs and dynamic web applications. 
            Let's collaborate to bring your vision to life!
          </p>
          <p>
            Feel free to explore my portfolio and reach out for any inquiries or collaborations. 
            I'm always eager to connect with like-minded professionals and take on new challenges.
          </p>
          <div className="button-container">
            <a href="#projects">
              <button className="view-works-button">View Works</button>
            </a>
            <a href="#contact">
              <button className="get-intouch-button">Get in Touch</button>
            </a>
          </div>
        </div>
      </div>
      <div className="theme-toggle-container">
        <button 
          onClick={toggleTheme} 
          className="toggle-button" 
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </section>
  );
};

export default Home;