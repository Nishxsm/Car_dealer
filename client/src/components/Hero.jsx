import React from "react";
import "../styles/Hero.css";
import heroBg from "../assets/images/hero-bg.jpg";

export default function Hero() {
  return (
    <section 
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay">
        
        
        <p className="hero-subtext">
          Shop Online. Pickup Today. It’s Fast, Simple and Easy. Learn More.
        </p>

        
        <h1 className="hero-title">
          Fast, Simple and Easy
        </h1>

        
        <div className="hero-tabs">
          <span className="tab active">All</span>
          <span className="tab">New</span>
          <span className="tab">Used</span>
        </div>

        
        <div className="search-box">
          
          <div className="search-item">
            <label>Any Makes</label>
            <select>
              <option>Any Makes</option>
            </select>
          </div>

          <div className="search-item">
            <label>Any Models</label>
            <select>
              <option>Any Models</option>
            </select>
          </div>

          <div className="search-item">
            <label>Price:</label>
            <select>
              <option>All Prices</option>
            </select>
          </div>

          <button className="search-btn">
             Search
          </button>

        </div>
      </div>
    </section>
  );
}
