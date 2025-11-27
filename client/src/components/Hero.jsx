import React from "react";
import "../styles/hero.css";
import heroBg from "../assets/images/hero-bg1.jpg";

export default function Hero() {
  return (
    <section 
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="overlay">

        <p className="hero-subtext">
          Shop Online. Pickup Today. It’s Fast, Simple and Easy. Learn More.
        </p>

       
        <h1 className="hero-title">
          Fast, Simple and Easy
        </h1>

        
        <div className="tabs">
          <span className="tab active">All</span>
          <span className="tab">New</span>
          <span className="tab">Used</span>
        </div>

        
        <div className="search-box">

          <div className="select-item">
            <select>
              <option>Any Makes</option>
            </select>
          </div>

          <div className="divider"></div>

          <div className="select-item">
            
            <select>
              <option>Any Models</option>
            </select>
          </div>

          <div className="divider"></div>

          <div className="select-item">
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
