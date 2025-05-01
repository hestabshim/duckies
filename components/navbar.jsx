import "../styles/homepage.css";
export const Navbar = () => {
  return (
    <header>
      <img className="duckLogo" src="./rubber-duck-svgrepo-com 1.svg"></img>

      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/duckies/shop">Shop</a>
        <a href="/duckies/about">About</a>
        <a href="/duckies/contact">Contact</a>
        <a href="/duckies/custom">Custom</a>
        {location.shop !== "/shop"}
      </nav>
      <img src="./navbar.png" className="navbar_style"></img>
    </header>
  );
};

export default Navbar;
