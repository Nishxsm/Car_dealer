import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";
import logoWhite from "../assets/images/luxewheelslogo.png";
import logoBlack from "../assets/images/blacklogo.png"; 

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isHome = location.pathname === "/";

      if (!isHome) {
        setScrolled(true); 
      } else {
        setScrolled(window.scrollY > 50);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-left">
          <img 
            src={scrolled ? logoBlack : logoWhite} 
            alt="Luxe Wheels" 
            className="brand-logo" 
          />
        </div>

        <ul className="nav-menu">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/cars">CARS</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
        <Link to="/cars" onClick={() => setMenuOpen(false)}>CARS</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
      </div>
    </>
  );
}