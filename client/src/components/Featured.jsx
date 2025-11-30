import React from "react";
import "../styles/featured.css";
import useReveal from "./hooks/useReveal";

export default function Featured() {
  useReveal();

  const cars = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80",
      name: "Honda Accord 2024",
      miles: "24,000 km",
      fuel: "Petrol",
      trans: "Automatic",
      price: "₹ 22,50,000",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80",
      name: "Tesla Model 3 – 2024",
      miles: "18,200 km",
      fuel: "Electric",
      trans: "Automatic",
      price: "₹ 65,00,000",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
      name: "BMW 3 Series – 2024",
      miles: "27,500 km",
      fuel: "Petrol",
      trans: "Automatic",
      price: "₹ 48,00,000",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=80",
      name: "Mazda CX-5 – 2023",
      miles: "32,800 km",
      fuel: "Petrol",
      trans: "Automatic",
      price: "₹ 28,00,000",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
      name: "Porsche 911 – 2024",
      miles: "12,900 km",
      fuel: "Petrol",
      trans: "Automatic",
      price: "₹ 2,50,00,000",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=800&q=80",
      name: "Jeep Wrangler – 2023",
      miles: "34,600 km",
      fuel: "Hybrid",
      trans: "Automatic",
      price: "₹ 55,00,000",
    },
    {
      id: 7,
      img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
      name: "Mercedes-Benz GLE – 2024",
      miles: "21,700 km",
      fuel: "Petrol",
      trans: "Automatic",
      price: "₹ 85,00,000",
    },
    {
      id: 8,
      img: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=800&q=80",
      name: "Toyota RAV4 Hybrid – 2024",
      miles: "29,400 km",
      fuel: "Hybrid",
      trans: "CVT",
      price: "₹ 32,00,000",
    },
  ];

  return (
    <section className="featured">
      <div className="featured-top fade-in">
        <h2>FEATURED CARS</h2>
        <p>PREMIUM CARS THAT ARE BUILT FOR COMFORT, PERFORMANCE AND CONVENIENCE.</p>
      </div>

      <div className="car-grid">
        {cars.map((car) => (
          <div className="car-card fade-in" key={car.id}>
            <div className="car-img-container">
              <img src={car.img} alt={car.name} className="car-img" />
            </div>

            <div className="car-info">
              <h3 className="car-title">{car.name}</h3>

              <div className="car-divider"></div>

              <div className="car-specs-row">
                <span>🛣 {car.miles}</span>
                <span>⛽ {car.fuel}</span>
                <span>⚙ {car.trans}</span>
              </div>

              <div className="car-divider"></div>

              <div className="car-price">{car.price}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all-bottom fade-in">
        <a href="#">View All →</a>
      </div>
    </section>
  );
}
