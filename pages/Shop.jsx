import React from 'react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import styles from '../styles/shop.module.css';

function Shop() {
  const { addToCart } = useCart();
  const [products] = useState([
    {
      id: 1,
      name: "Classic Yellow Duck",
      price: 12.99,
      image: "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0604%2F4801%2Fproducts%2FClassic_1_clipped_rev_1_1024x1024.jpeg%3Fv%3D1505807388&sp=1746130507T6d45e248ce2c8d1dc7f375cc79a7fb6886d92c000cfca701d824d70ea21cb99f",
      description: "The timeless classic rubber duck everyone knows and loves"
    },
    {
      id: 2,
      name: "Superhero Duck",
      price: 15.99,
      image: "https://files.ekmcdn.com/daae31/images/superhero-duck-2714-p.jpg?w=570&h=9999&v=B7AB43A5-4A4B-402B-B2DF-10EF9E9C959F",
      description: "Caped crusader duck ready to save bath time"
    },
    {
      id: 3,
      name: "Rainbow Duck",
      price: 14.99,
      image: "https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/1983/17619/lilalu-quietscheente-regenbogen-rainbow-rubber-duck-HR__98253.1628101371.png?c=2",
      description: "Colorful rubber duck bringing joy to every bath"
    }
  ]);

  return (
    <div className={styles.shop}>
      <h2 className={styles.h2}>Our Ducks</h2>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.name} className={styles.cardImage} />
            <h3 className={styles.h2}> {product.name}</h3>
            <p className={styles.h2}>${product.price}</p>
            <p className={styles.h2}>{product.description}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
