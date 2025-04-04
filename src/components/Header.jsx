import React from 'react';
import '../styles/Header.css'; 

const Header = ({ isVisible }) => {
  return (
    <header className={`header-background bg-gray-900 text-white py-10 ${isVisible ? '' : 'hidden'}`}>
      <div className="header-content container mx-auto px-4 flex justify-end fixed w-full top-0 z-50">
        <nav className="flex space-x-4">
          <div className="nav-item">
            <a href="#home" className="text-white font-bold text-lg">Home</a>
          </div>
          <div className="nav-item">
            <a href="#about" className="text-white font-bold text-lg">About</a>
          </div>
          <div className="nav-item">
            <a href="#projects" className="text-white font-bold text-lg">Projects</a>
          </div>
          <div className="nav-item">
            <a href="#contact" className="text-white font-bold text-lg">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;