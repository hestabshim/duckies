import React from 'react';

function Contact() {
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
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
