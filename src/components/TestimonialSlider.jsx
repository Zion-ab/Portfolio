import React, { useState, useEffect } from 'react';
import '../styles/TestimonialSlider.css';
import dina from '../assets/images/Dina.png'; 
import mihiret from '../assets/images/Mihiret.png';
import lamrot from '../assets/images/lamrot.jpg';
import meti from '../assets/images/Meti.jpg';

const testimonials = [
    {
        name: 'Dina Tewelde',
        photo: dina,
        quote: "I had the pleasure of working alongside Tsion in our recent group project, and I can't express enough how impactful her contributions were. Her ability to organize our tasks and keep everyone motivated made a significant difference in our workflow. Tsion always brought fresh ideas to the table and was open to feedback, which fostered a collaborative environment.",
    },
    {
        name: 'Meti Abera',
        photo: meti, 
        quote: "Tsion's insights and collaborative spirit consistently elevate our work. I appreciate how she always encourage everyone to share their ideas, creating an atmosphere where we can thrive together. Her dedication and attention to detail have made a significant impact on our success.!",
    },
    {
        name: 'Mihret Mesfin',
        photo: mihiret, 
        quote: 'Working with Tsion has been a great experience. She brings solid ideas to our discussions and are always open to feedback. It’s easy to collaborate with her, and I appreciate how she helps keep the group focused.',
    },
    {
        name: 'Lamrot Tariku',
        photo: lamrot,
        quote: 'Teaming up with Tsion has been rewarding. She communicate well and make it easy for everyone to share their thoughts. I appreciate her willingness to pitch in and make sure we all succeed.',
    },
];

const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visible, setVisible] = useState(false);

    const nextTestimonial = () => {
        setVisible(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
            setVisible(true);
        }, 500);
    };

    const prevTestimonial = () => {
        setVisible(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => 
                (prevIndex - 1 + testimonials.length) % testimonials.length
            );
            setVisible(true);
        }, 500);
    };

    useEffect(() => {
        setVisible(true); 

        const intervalId = setInterval(nextTestimonial, 4000); 

        return () => clearInterval(intervalId); 
    }, [currentIndex]);

    return (
        <section className="testimonial-section">
            <div className="testimonial-slider">
                <button className="nav-button" onClick={prevTestimonial} aria-label="Previous testimonial">
                    &#9664; 
                </button>
                <div className={`testimonial-card ${visible ? 'visible' : ''}`}>
                    <img 
                        src={testimonials[currentIndex].photo} 
                        alt={`${testimonials[currentIndex].name}'s photo`} 
                        className="testimonial-photo" 
                    />
                    <h4>{testimonials[currentIndex].name}</h4>
                    <p>"{testimonials[currentIndex].quote}"</p>
                </div>
                <button className="nav-button" onClick={nextTestimonial} aria-label="Next testimonial">
                    &#9654; 
                </button>
            </div>
        </section>
    );
};

export default TestimonialSlider;