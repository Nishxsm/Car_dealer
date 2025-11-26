import React from "react";
import "../styles/Navbar.css";

export default function Navbar(){
    return(
        <nav className="nav">
            <div className="nav-left">
                <div className="logo-box">CD</div>
                <div className="brand-text">
                    <h4>Carhut</h4>
                    <span>trusted since 1947</span>
                </div>
            </div>
            <div className="nav-right">
                <ul className="nav-links">
                    <li>Inventory</li>
                    <li>Sell</li>
                    <li>Finance</li>
                    <li>Rent</li>
                </ul>

                <button className="btn ghost">Sign-up</button>
                <button className="btn primary">Login</button>
            </div>
        </nav>
    );
}