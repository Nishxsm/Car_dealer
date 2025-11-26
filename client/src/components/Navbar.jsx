import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">

      {/* LEFT */}
      <div className="nav-left">
        <span className="brand">CarHut</span>
        <h1>Hello</h1>
      </div>

      {/* RIGHT */}
      <div className="nav-right"></div>

    </nav>
  );
}
