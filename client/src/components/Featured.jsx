import React from "react";
import "../styles/featured.css";

export default function Featured() {
    //the images are placeholders for ui
const cars = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80",
    badge: "Great Price",
    name: "Honda Accord 2024",
    desc: "2.0T Sport with advanced safety features...",
    miles: "15 Miles",
    fuel: "Petrol",
    trans: "Automatic",
    price: "$35,000",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80",
    badge: "Low Mileage",
    name: "Tesla Model 3 – 2024",
    desc: "Long Range AWD with Autopilot...",
    miles: "500 Miles",
    fuel: "Electric",
    trans: "Automatic",
    price: "$45,000",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
    badge: "",
    name: "BMW 3 Series – 2024",
    desc: "330i with M Sport package and premium interior...",
    miles: "1,200 Miles",
    fuel: "Petrol",
    trans: "Automatic",
    price: "$48,000",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=80",
    badge: "Great Price",
    name: "Mazda CX-5 – 2023",
    desc: "Signature AWD with premium Bose sound...",
    miles: "8,500 Miles",
    fuel: "Petrol",
    trans: "Automatic",
    price: "$32,000",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
    badge: "Low Mileage",
    name: "Porsche 911 – 2024",
    desc: "Carrera S with Sport Chrono package...",
    miles: "2,100 Miles",
    fuel: "Petrol",
    trans: "Automatic",
    price: "$135,000",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=800&q=80",
    badge: "Popular",
    name: "Jeep Wrangler – 2023",
    desc: "Rubicon 4xe Hybrid with off-road capability...",
    miles: "5,400 Miles",
    fuel: "Hybrid",
    trans: "Automatic",
    price: "$52,000",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    badge: "",
    name: "Mercedes-Benz GLE – 2024",
    desc: "450 4MATIC luxury SUV with panoramic roof...",
    miles: "3,200 Miles",
    fuel: "Petrol",
    trans: "Automatic",
    price: "$68,000",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=800&q=80",
    badge: "Great Price",
    name: "Toyota RAV4 Hybrid – 2024",
    desc: "XLE AWD with excellent fuel economy...",
    miles: "6,800 Miles",
    fuel: "Hybrid",
    trans: "CVT",
    price: "$38,000",
  },
];



  return (
    <section className="featured">
      <div className="featured-top">
        <h2>FEATURED CARS</h2>
        <p>PREMIUM CARS THAT ARE BUILT FOR COMFORT,PERFORMANCE AND CONVENIENCE.</p>
      </div>

      <div className="car-grid">
        {cars.map((car) => (
<div className="car-card" key={car.id}>


  <div className="car-img-container">
    {car.badge && <span className="badge">{car.badge}</span>}
    <img src={car.img} alt={car.name} className="car-img" />
  </div>

  
  <div className="car-info">
    <h3 className="car-title">{car.name}</h3>

   
    <div className="car-specs-row">
      <span>🛣 {car.miles}</span>
      <span>⛽ {car.fuel}</span>
      <span>⚙ {car.trans}</span>
    </div>

   
    <div className="car-price">{car.price}</div>
  </div>

</div>
        ))}
      </div>
      <div className="view-all-bottom">
    <a href="#">View All →</a>
  </div>
    </section>
  );
}
