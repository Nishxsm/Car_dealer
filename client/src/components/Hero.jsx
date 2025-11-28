import React from "react";
import "../styles/hero.css";
import herovideo from "../assets/videos/hero1.mp4";

export default function Hero() {
  return (
    <header className="hero">

      <video className="hero-video" autoPlay muted loop playsInline>
        <source src={herovideo} type="video/mp4" />
      </video>

      <div className="hero-left-overlay">
        <div className="hero-content">

          {/* top section */}
          <div className="hero-top">
            <h1 className="hero-title">
              <span>DONT MISS</span>
              <span>OUT ON</span>
              <span>PREMIUM</span>
              <span>CARS</span>
            </h1>
          </div>

          {/* bottom section */}
          <p className="hero-desc">
            Experience the absolute joy of driving the finest cars out there.
          </p>

        </div>
      </div>

    </header>
  );
}
