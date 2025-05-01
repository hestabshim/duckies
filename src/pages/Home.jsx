import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/homepage.css"
function Home() {
  return (
    <div className="home">
      <nav className="navbar">
      </nav>

      <section className="hero-section">
        <h1 className="hero-title">duckies</h1>
        <p className="tagline">find your perfect duck.</p>
        <Link to="/shop" className="shop-button">
          shop now
        </Link>
      </section>

      <section className="new-arrivals">
        <h2>New Arrivals</h2>
        <div className="arrival-cards">
          <div className="card">Item 1</div>
          <div className="card">Item 2</div>
          <div className="card">Item 3</div>
        </div>
      </section>
    </div>
  );
}

export default Home;
