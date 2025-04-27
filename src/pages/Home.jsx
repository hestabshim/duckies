import React from 'react';


function Home() {
  return (
    <div className="home">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">duckies</div>
        <ul className="nav-links">
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
          <li>Custom</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">duckies</h1>
        <p className="tagline">find your perfect duck.</p>
        <button className="shop-button">shop now</button>
      </section>

      {/* New Arrivals */}
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
