import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Custom from "./pages/Custom";
import Navbar from "./components/navbar";
import { CartProvider, useCart } from "./context/CartContext";

function CartButton() {
  const { cart, showCart, toggleCart, removeFromCart, updateQuantity, calculateTotal } = useCart();

  return (
    <>
      <button className="cart-button" onClick={toggleCart}>
        Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
      </button>
      <div className={`cart-overlay ${showCart ? 'show' : ''}`} onClick={toggleCart} />
      <div className={`cart-container ${showCart ? 'show' : ''}`}>
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
            <div className="cart-total">
              <h3>Total: ${calculateTotal().toFixed(2)}</h3>
              <button className="checkout-button">Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <div className="app">
        <CartButton />
        <Router basename="/duckies">
          <main>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/custom" element={<Custom />} />
            </Routes>
          </main>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
