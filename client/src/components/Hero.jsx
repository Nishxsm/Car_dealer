import React, { useState, useEffect } from "react";
import "../styles/hero.css";
import herovideo from "../assets/videos/hero1.mp4";
import useReveal from "./hooks/useReveal";

export default function Hero() {
  useReveal();
  const text = "EXPERIENCE THE ABSOLUTE JOY OF DRIVING THE FINEST CARS OUT THERE.";
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!deleting) {
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
    <header className="hero" role="banner" aria-label="Hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        poster="" 
      >
        <source src={herovideo} type="video/mp4" />
      </video>

      <div className="hero-left-overlay">
        <div className="hero-content">
          <div className="hero-top">
            <h1 className="hero-title fade-card" aria-hidden="true">
              <span>DONT MISS</span>
              <span>OUT ON</span>
              <span>PREMIUM</span>
              <span>CARS</span>
            </h1>
          </div>

          <p className="hero-desc" aria-live="polite">
            {display}
            <span className="cursor" aria-hidden="true">|</span>
          </p>
        </div>
      </div>
    </header>
  );
}
