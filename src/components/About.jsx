import React from 'react';
import picture from '../assets/images/Me2.jpg';

const About = () => {
  return (
    <section id="about" className="container mx-auto px-4 py-16 mb-20 flex flex-col items-center">

      <div className="mb-8">
        <img 
          src={picture}  
          className="rounded-full w-60 h-60 object-cover shadow-lg border-4 border-gray-300"
        />
      </div>
      
  
      <div className="bio-section text-center mb-6 text-gray-800 dark:text-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg mb-4">
          I'm a dedicated front-end developer with a passion for creating user-friendly and visually appealing web applications. 
          My focus is on delivering seamless user experiences that make a lasting impact.
        </p>
        <p className="text-lg mb-4">
          I hold certificates in graphic design and am currently a third-year Information Science student at Addis Ababa University. 
          I have experience working with a range of technologies, including JavaScript, React, and Tailwind CSS. My goal is to continuously learn and adapt in this ever-evolving field.
        </p>
      </div>

     
      <div className="flex md:w-full justify-between mt-6 space-x-4">
        <div className="md:w-1/2 bg-blue-100 text-gray-800 dark:text-gray-200 shadow-lg rounded-lg p-6 h-64 flex flex-col justify-between">
          <h3 className="text-2xl font-semibold text-center mb-2">My Journey</h3>
          <p className="flex-grow">
            Today, I continue to explore the evolving landscape of design and technology, always seeking new challenges and 
            opportunities. I am passionate about crafting beautiful, user-centric experiences that inspire and engage. 
            Whether it's through a striking graphic or a responsive web application, my goal is to make a positive impact through my works.
          </p>
        </div>
        <div className="md:w-1/2 bg-blue-100 text-gray-800 dark:text-gray-200 shadow-lg rounded-lg p-6 h-64 flex flex-col justify-between">
          <h3 className="text-2xl font-semibold text-center mb-2">Interests</h3>
          <p className="flex-grow">
            In my free time, I love exploring new technologies, contributing to open-source projects, and designing creative solutions. 
            I also enjoy graphic design and photography.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;