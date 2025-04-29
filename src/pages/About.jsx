import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <div className="about-content">
        <div className="image-container">
          <img src="/duckies/about_duck.jpg" alt="Rubber ducks in a row" />
        </div>
        <div className="about-text">
          <h3>because a rubber duck makes everything better</h3>
          <p>Duckies has been bringing joy and smiles through our unique rubber duck collections since 2020. Our mission is to make bath time and collecting fun for everyone!</p>
          <p>Each duck is carefully designed and crafted using high-quality materials, ensuring both durability and safety for all ages.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
