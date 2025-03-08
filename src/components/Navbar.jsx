import { Link } from "react-router-dom";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../utils/CartContext";
import "../index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();

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
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={toggleMenu}>
              İletişim
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/cart"
              className="nav-link cart-link"
              onClick={toggleMenu}
            >
              <div className="relative">
                <FaShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#ff8500] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
