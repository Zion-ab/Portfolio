import React from 'react';
import '../styles/Card.css'; 

const skills = [
    { title: 'JavaScript', proficiency: 80, icon: 'fab fa-js', color: '#f7df1e' },
    { title: 'React', proficiency: 75, icon: 'fab fa-react', color: '#61dafb' },
    { title: 'CSS', proficiency: 85, icon: 'fab fa-css3-alt', color: '#1572b6' },
    { title: 'Tailwind CSS', proficiency: 70, icon: 'fas fa-paint-brush', color: '#38b2ac' },
    { title: 'Adobe Photoshop', proficiency: 90, icon: 'fas fa-image', color: '#31a8ff' },
];

const SkillCard = () => {
    return (
        <div className="skills-container">
            {skills.map((skill, index) => (
                <div className="skill-card-wrapper" key={index}>
                    <div className="skill-card" style={{ backgroundColor: skill.color }}>
                        <div className="skill-icon">
                            <i className={skill.icon}></i>
                        </div>
                        <h3>{skill.title}</h3>
                        <div className="progress-bar">
                            <div 
                                className="progress-fill" 
                                style={{ width: `${skill.proficiency}%` }}
                            ></div>
                        </div>
                        <p>Proficiency: {skill.proficiency}%</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillCard;