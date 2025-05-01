import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    
    // Clear form and show success message
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setSubmitted(true);
    
    // Hide the success message after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact">
      <h2>Contact Duckies</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Visit Our Duck Shop</h3>
          <p>456 Duck Lane</p>
          <p>Rubber Town, RT 54321</p>
          <p>Phone: (555) duck-123</p>
          <p>Email: hello@duckies.com</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name"
            placeholder="Name" 
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input 
            type="email" 
            name="email"
            placeholder="Email" 
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea 
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
          {submitted && <div className="success-message">Message sent!</div>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
