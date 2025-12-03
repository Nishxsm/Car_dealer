import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-left">
        <span className="brand">Luxe Wheels</span>
      </div>

      <ul className="nav-menu">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/cars">CARS</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
    </nav>
  );
}
