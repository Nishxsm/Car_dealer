import React from "react";
import "../styles/recent.css";

export default function Recent() {
    //the images are placeholders for ui
const cars = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=800&q=80",
    badge: "Great Price",
    name: "Volkswagen Passat – 2024",
    desc: "R-Line with premium leather interior...",
    miles: "2,300 Miles",
    fuel: "Petrol",
    trans: "Automatic",
    price: "$29,500",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1567818735868-e71b99932e29?auto=format&fit=crop&w=800&q=80",
    badge: "Low Mileage",
    name: "Nissan Altima – 2024",
    desc: "SR with advanced safety shield...",
    miles: "1,850 Miles",
    fuel: "Petrol",
    trans: "CVT",
    price: "$27,000",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=800&q=80",
    badge: "Popular",
    name: "Kia Sportage – 2024",
    desc: "EX AWD with smart cruise control...",
    miles: "4,100 Miles",
    fuel: "Hybrid",
    trans: "Automatic",
    price: "$33,500",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
    badge: "Great Price",
    name: "Chevrolet Silverado – 2023",
    desc: "LT 4WD crew cab with towing package...",
    miles: "12,500 Miles",
    fuel: "Diesel",
    trans: "Automatic",
    price: "$44,000",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    badge: "Low Mileage",
    name: "Jaguar F-Type – 2024",
    desc: "R-Dynamic with supercharged V6 engine...",
    miles: "3,200 Miles",
    fuel: "Petrol",
    trans: "Automatic",
    price: "$78,000",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?auto=format&fit=crop&w=800&q=80",
    badge: "New Arrival",
    name: "GMC Yukon – 2024",
    desc: "Denali Ultimate with luxury features...",
    miles: "1,900 Miles",
    fuel: "Petrol",
    trans: "Automatic",
    price: "$82,000",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=800&q=80",
    badge: "Great Price",
    name: "Volvo XC90 – 2024",
    desc: "Recharge plug-in hybrid with Pilot Assist...",
    miles: "5,600 Miles",
    fuel: "Hybrid",
    trans: "Automatic",
    price: "$62,000",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80",
    badge: "Popular",
    name: "Dodge Charger – 2023",
    desc: "R/T Scat Pack with Brembo brakes...",
    miles: "7,800 Miles",
    fuel: "Petrol",
    trans: "Automatic",
    price: "$49,000",
  },
];


  return (
    <section className="recent">
      <div className="recent-top">
        <h2>RECENTLY ADDED</h2>
        <p>CAREFULLY SELECTED VEHICLES THAT COMBINE LUXURY,PERFORMANCE AND MODERN ENGINEERING.</p>
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
      <div className="view-all-bottom1">
    <a href="#">View All →</a>
  </div>
    </section>
  );
}
