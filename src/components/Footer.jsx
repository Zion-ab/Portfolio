import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <div className="text-center mb-2"> 
        <a 
          href="https://linkedin.com/in/tsiyon-abebayehu-226468331" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-gray-400 mr-6" 
        >
          LinkedIn
        </a>
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=tsiyonabebayehu56@gmail.com"
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-gray-400 mr-6"  
        >
          Email
        </a>
        <a 
          href="https://github.com/Zion-ab" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-gray-400"  
        >
          GitHub
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Tsion Abebayehu. All rights reserved.</p>
    </footer>
  );
};

export default Footer;