import React from "react";
import { Link } from "react-router-dom";
import "../styles/homepage.css";
function Home() {
  return (
    <div className="home">
      <section className="hero-section">
        <span className="top">
          <img src="./Vector.png" className="logo"></img>
          <img src="./Vector.png" className="logo reflection"></img>
        </span>
        <span className="bottom">
          <img src="./ducks.png" className="ducks"></img>
          <img src="./ducks.png" className="ducks duckreflection"></img>
        </span>
      </section>
        <p className="tagline">find your perfect duck.</p>
        <Link to="/shop" className="shop-button">
          shop now
        </Link>
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
