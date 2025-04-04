import React, { useState, useEffect } from 'react';
import atlasImage from '../assets/images/Atlas.jpg'; 
import bookCover from '../assets/images/Bookcover.jpg'; 
import calculator from '../assets/images/Calculator.png';
import realestate from '../assets/images/RealEstate.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../styles/Card.css';

const Projects = () => {
  const [likes, setLikes] = useState([0, 0, 0]); 
  const [visibleCards, setVisibleCards] = useState([false, false, false]); 

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] += 1; 
    setLikes(newLikes);
  };

  const googleDriveLink = "https://drive.google.com/drive/folders/18E1jUZdBwbhi92LoHa8ghv0lTVayvffI?usp=drive_link"; 
  const repoLink = "https://github.com/Zion-ab/react-calculator"; 
  const repoLink2=  "https://github.com/Zion-ab/Real-Estate";
  const handleScroll = () => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setVisibleCards((prev) => {
          const newVisibleCards = [...prev];
          newVisibleCards[index] = true; 
          return newVisibleCards;
        });
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="projects" className="container mx-auto px-4 py-20 mb-15 mt-15">
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>
      <p className="text-lg mb-8">Here are some of the projects I've worked on:</p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-1">
        <ProjectCard 
          title="Project 1" 
          description="This poster was designed for the Atlas Beauty event organized by Nova Organization taking place from August 25 to 28. Various techniques such as layering, blending modes, and typography adjustments were used to achieve a polished, professional look."
          technologies={["Adobe Photoshop"]}
          imageUrl={atlasImage} 
          repoLink={googleDriveLink} 
          likes={likes[0]} 
          onLike={() => handleLike(0)} 
          isVisible={visibleCards[0]}
        />
        <ProjectCard 
          title="Project 2" 
          description="This Real Estate application provides a comprehensive platform for users to browse, buy, and sell properties. 
          It features an intuitive interface that showcases property listings with detailed descriptions, high-quality images, and essential information such as price, location, and amenities."
          technologies={["React"]}
          imageUrl={realestate} 
          repoLink={repoLink2} 
          likes={likes[2]} 
          onLike={() => handleLike(2)} 
          isVisible={visibleCards[1]} 
        />
        <ProjectCard 
          title="Project 3" 
          description="This project involved the design of an engaging book cover for Cold Lake, a novel by Maya Thompson. The cover art captures the essence of the story, which explores themes of mystery, nature, and the supernatural."
          technologies={["Adobe Photoshop", "Canva"]}
          imageUrl={bookCover}
          repoLink={googleDriveLink} 
          likes={likes[1]} 
          onLike={() => handleLike(1)} 
          isVisible={visibleCards[2]} 
        />
        <ProjectCard 
          title="Project 4" 
          description="This project is a fully functional calculator application built using React and JavaScript. 
          The app allows users to perform basic arithmetic operations, including addition, subtraction, multiplication, and division."
          technologies={["React", "JavaScript"]}
          imageUrl={calculator} 
          repoLink={repoLink} 
          likes={likes[2]} 
          onLike={() => handleLike(2)} 
          isVisible={visibleCards[3]} 
        />
      </div>
    </section>
  );
};

const ProjectCard = ({ title, description, technologies, repoLink, imageUrl, likes, onLike, isVisible }) => {
  const [isLiked, setIsLiked] = useState(false); 

  const handleHeartClick = () => {
    setIsLiked(!isLiked); 
    onLike(); 
  };

  return (
    <div className={`project-card bg-blue-100 rounded-lg p-6 shadow-md transition-transform transform hover:scale-105 ${isVisible ? 'visible' : ''} flex items-center`}>
      <img src={imageUrl} className="rounded-lg mr-4 w-1/3" />
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-base mb-4 text-gray-800 dark:text-white">{description}</p>
        <p className="text-sm mb-4 text-gray-600 dark:text-white">Technologies: {technologies.join(', ')}</p>
        <div className="flex flex-col">
          <a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline dark:text-blue-300">View Project</a>
          <button className="text-blue-500 hover:underline dark:text-blue-300 mt-2 flex items-center" onClick={handleHeartClick}>
            <FontAwesomeIcon icon={faHeart} className={`mr-2 ${isLiked ? 'text-red-500' : 'text-gray-600 dark:text-gray-300'}`} />
            View Likes ({likes})
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;