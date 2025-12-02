import React, { useState } from "react";
import "../styles/testimonial.css";
import useReveal from "./hooks/useReveal";

export default function Testimonial() {
  useReveal();
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Arjun Malhotra",
      location: "Mumbai",
      photo: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 5,
      review:
        "I personally recommend you to visit CarHut's website because they work consistently to provide their customers with the best deals. With CarHut, you can own your dream car very quickly.",
    },
    {
      id: 2,
      name: "Sanya Kapoor",
      location: "New Delhi",
      photo: "https://randomuser.me/api/portraits/women/69.jpg",
      rating: 5,
      review:
        "CarHut made the delivery of my dream car truly memorable with a personalized experience. Thank you for going above and beyond to deliver it on my special day.",
    },
    {
      id: 3,
      name: "Rohan Verma",
      location: "Bangalore",
      photo: "https://randomuser.me/api/portraits/men/22.jpg",
      rating: 4,
      review:
        "Kudos to the CarHut's delivery team for making my purchase so special and memorable. The entire process was smooth and professional.",
    },
    {
      id: 4,
      name: "Ayesha Sheikh",
      location: "Pune",
      photo: "https://randomuser.me/api/portraits/women/48.jpg",
      rating: 5,
      review:
        "Truly premium experience! Loved how flawless and quick the entire process was. The team was very supportive throughout.",
    },
    {
      id: 5,
      name: "Vikram Singh",
      location: "Jaipur",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      review:
        "Best car buying experience ever! The transparency and customer service exceeded all my expectations. Highly recommended!",
    },
    {
      id: 6,
      name: "Priya Sharma",
      location: "Chennai",
      photo: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5,
      review:
        "CarHut team went above and beyond to ensure I got the perfect car. The after-sales service is also excellent!",
    },
    {
      id: 7,
      name: "Karan Patel",
      location: "Ahmedabad",
      photo: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 4,
      review:
        "Great selection of premium cars and very professional staff. Made my dream car purchase a reality!",
    },
    {
      id: 8,
      name: "Neha Gupta",
      location: "Kolkata",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      review:
        "Amazing experience from start to finish. The team was patient and helped me find exactly what I was looking for.",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };


  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      visible.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return visible;
  };

  const visibleReviews = getVisibleReviews();

  return (
    <section className="testimonial">
      <div className="testimonial-header fade-card">
        <p className="testimonial-subtitle">Testimonials</p>
        <h2 className="testimonial-title">Thousands Of Happy Customers!</h2>
      </div>

      <div className="carousel-container fade-card">
        <button onClick={handlePrev} className="arrow-btn arrow-prev" aria-label="Previous">
          {"<"}
        </button>

        <div className="testimonial-grid">
          {visibleReviews.map((r) => (
            <div key={r.id} className="testimonial-card">
              <img src={r.photo} alt={r.name} className="user-photo" />
              
              <h4 className="user-name">{r.name}</h4>
              <p className="user-location">{r.location}</p>
              
              <div className="rating">
                {"★".repeat(r.rating)}
                {r.rating < 5 && <span className="empty-star">{"★".repeat(5 - r.rating)}</span>}
              </div>

              <p className="review-text">"{r.review}"</p>
            </div>
          ))}
        </div>

        <button onClick={handleNext} className="arrow-btn arrow-next" aria-label="Next">
          {">"}
        </button>
      </div>
    </section>
  );
}