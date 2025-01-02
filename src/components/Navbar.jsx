import { Link } from "react-router-dom";
import { useState } from "react";
import "../index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span>Ayyıldız Pide</span>
        </Link>

        <button className="hamburger" onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={toggleMenu}>
              Ana Sayfa
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/listings" className="nav-link" onClick={toggleMenu}>
              Ürünlerimiz
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
