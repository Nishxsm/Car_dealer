import React, { useState, useEffect } from "react";
import "../styles/hero.css";
import herovideo from "../assets/videos/hero1.mp4";

export default function Hero() {
  const text = "EXPERIENCE THE ABSOLUTE JOY OF DRIVING THE FINEST CARS OUT THERE.";
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!deleting) {
        // typing forward
        if (index < text.length) {
          setDisplay(text.slice(0, index + 1));
          setIndex(index + 1);
        } else {
          setTimeout(() => setDeleting(true), 1000);
        }
      } else {
        
        if (index > 0) {
          setDisplay(text.slice(0, index - 1));
          setIndex(index - 1);
        } else {
          setDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, deleting]);

  return (
    <header className="hero">

      <video className="hero-video" autoPlay muted loop playsInline>
        <source src={herovideo} type="video/mp4" />
      </video>

      <div className="hero-left-overlay">
        <div className="hero-content">

          <div className="hero-top">
            <h1 className="hero-title">
              <span>DONT MISS</span>
              <span>OUT ON</span>
              <span>PREMIUM</span>
              <span>CARS</span>
            </h1>
          </div>

          <p className="hero-desc">
            {display}
            <span className="cursor">|</span>
          </p>

        </div>
      </div>

    </header>
  );
}
