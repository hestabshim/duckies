import React from 'react';
import { useState } from 'react';
import "../styles/shop.css"
function Shop({ addToCart }) {
  const [products] = useState([
    {
      id: 1,
      name: "Classic Yellow Duck",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1582845512747-e42001c95638",
      description: "The timeless classic rubber duck everyone knows and loves"
    },
    {
      id: 2,
      name: "Superhero Duck",
      price: 15.99,
      image: "https://m.media-amazon.com/images/I/71J5PH8LZQL._AC_SL1500_.jpg",
      description: "Caped crusader duck ready to save bath time"
    },
    {
      id: 3,
      name: "Rainbow Duck",
      price: 14.99,
      image: "https://m.media-amazon.com/images/I/71Lx-m0R4yL._AC_SL1500_.jpg",
      description: "Colorful rubber duck bringing joy to every bath"
    }
  ]);

  return (
    <div className="shop">
      <h2>Our Duck Collection</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="description">{product.description}</p>
            <p className="price">${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
