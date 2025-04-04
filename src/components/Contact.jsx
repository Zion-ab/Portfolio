import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope as solidEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!formData.name) {
      formErrors.name = 'Name is required.';
    }
    if (!formData.email) {
      formErrors.email = 'Email is required.';
    } else if (!validateEmail(formData.email)) {
      formErrors.email = 'Email is not valid.';
    }
    if (!formData.message) {
      formErrors.message = 'Message is required.';
    } else if (formData.message.split(' ').length > 500) {
      formErrors.message = 'Message cannot exceed 500 words.';
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    setErrors({}); 
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="mb-8">Feel free to reach out for any inquiries or collaborations!</p>
        
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-8">
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Your Name" 
            className={`w-full p-3 mb-4 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded`}
            required
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}

          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Your Email" 
            className={`w-full p-3 mb-4 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
            required
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}

          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            placeholder="Your Message" 
            className={`w-full p-3 mb-4 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded`}
            rows="5"
            required
          />
          {errors.message && <p className="text-red-500">{errors.message}</p>}

          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send Message
          </button>
        </form>

        <div className="text-center"> 
  <a href="https://www.linkedin.com/in/tsiyon-abebayehu-226468331" target="_blank" rel="noopener noreferrer" className="social-icon mr-5">
    <FontAwesomeIcon icon={faLinkedin} size="2x" />
  </a>
  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tsiyonabebayehu56@gmail.com" className="social-icon mr-5">
    <FontAwesomeIcon icon={solidEnvelope} size="2x" />
  </a>
  <a href="https://github.com/Zion-ab" target="_blank" rel="noopener noreferrer" className="social-icon">
    <FontAwesomeIcon icon={faGithub} size="2x" />
  </a>
</div>
      </div>
    </section>
  );
};

export default Contact;