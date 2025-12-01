import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    const cards = document.querySelectorAll(".fade-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("show");
            }, index * 150); // stagger effect
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((el) => observer.observe(el));
  }, []);
}
