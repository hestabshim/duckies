import "../styles/homepage.css"
export const Navbar =() => {
    return (
        <Router basename="/duckies/">
          <div className="app">
            <header>
              <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                {location.shop !== '/shop' && 
                <button>
                Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
              </button>
                }
              </nav>
             
            </header>
            </div>
            </Router>
            )
}

export default Navbar;