import React from 'react';
import '../styles/TestimonialSlider.css'; 

const TestimonialCard = ({ name, photo, quote }) => {
    return (
        <div className="testimonial-card">
            <img src={photo} alt={`${name}'s photo`} className="testimonial-photo" />
            <h4>{name}</h4>
            <p>"{quote}"</p>
        </div>
    );
};

export default TestimonialCard;