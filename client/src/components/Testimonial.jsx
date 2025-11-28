import React from "react";
import "../styles/testimonial.css";

export default function Testimonial() {
  const reviews = [
    {
      id: 1,
      name: "Arjun Malhotra",
      car: "BMW M4 Competition",
      photo: "https://randomuser.me/api/portraits/men/75.jpg",
      rating: 5,
      review:
        "CarHut made buying my dream BMW so smooth. The delivery and support were exceptional!",
    },
    {
      id: 2,
      name: "Sanya Kapoor",
      car: "Mercedes-Benz GLC 300",
      photo: "https://randomuser.me/api/portraits/women/69.jpg",
      rating: 5,
      review:
        "The best luxury car experience. Transparent pricing and very friendly staff!",
    },
    {
      id: 3,
      name: "Rohan Verma",
      car: "Audi A6 Premium Plus",
      photo: "https://randomuser.me/api/portraits/men/22.jpg",
      rating: 4,
      review:
        "A wonderful experience from test drive to delivery. Highly recommended!",
    },
    {
      id: 4,
      name: "Ayesha Sheikh",
      car: "Range Rover Evoque",
      photo: "https://randomuser.me/api/portraits/women/48.jpg",
      rating: 5,
      review:
        "Truly premium experience! Loved how flawless and quick the entire process was.",
    },
  ];

  return (
    <section className="testimonial">
      <h2 className="testimonial-title">What Our Customers Say</h2>

      <div className="testimonial-grid">
        {reviews.map((r) => (
          <div key={r.id} className="testimonial-card">
            
            <div className="user-info">
              <img src={r.photo} alt={r.name} className="user-photo" />

              <div>
                <h4 className="user-name">{r.name}</h4>
                <p className="car-bought">{r.car}</p>
                <p className="rating">{"⭐".repeat(r.rating)}</p>
              </div>
            </div>

            <p className="review-text">{r.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
