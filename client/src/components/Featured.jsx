import React from "react";
import "../styles/Featured.css";

export default function Featured() {
    //the images are placeholders for ui
const cars = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80",
    badge: "Great Price",
    name: "Toyota Camry New",
    desc: "3.5 D5 PowerPulse Momentum 5dr AWD...",
    miles: "20 Miles",
    fuel: "Petrol",
    trans: "Automatic",
    price: "$40,000",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=800&q=80",
    badge: "",
    name: "T-Cross – 2023",
    desc: "4.0 D5 PowerPulse Momentum 5dr AWD...",
    miles: "15 Miles",
    fuel: "Petrol",
    trans: "CVT",
    price: "$15,000",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80",
    badge: "",
    name: "C-Class – 2023",
    desc: "4.0 D5 PowerPulse Momentum 5dr AWD...",
    miles: "50 Miles",
    fuel: "Petrol",
    trans: "Automatic",
    price: "$150,000",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1583121274602-5f69f6cfb36d?auto=format&fit=crop&w=800&q=80",
    badge: "Great Price",
    name: "Ford Transit – 2021",
    desc: "4.0 D5 PowerPulse Momentum 5dr AWD...",
    miles: "2500 Miles",
    fuel: "Diesel",
    trans: "Manual",
    price: "$22,000",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    badge: "Low Mileage",
    name: "Nissan Rogue 2022",
    desc: "Comfortable compact SUV with AWD...",
    miles: "10 Miles",
    fuel: "Petrol",
    trans: "Automatic",
    price: "$32,000",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1589395595558-3c23359a46f0?auto=format&fit=crop&w=800&q=80",
    badge: "",
    name: "Bentley Bentayga – 2023",
    desc: "Luxury SUV with top-tier interior...",
    miles: "5 Miles",
    fuel: "Petrol",
    trans: "Automatic",
    price: "$250,000",
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1523987355523-c7b5b48b4f99?auto=format&fit=crop&w=800&q=80",
    badge: "",
    name: "Mini Cooper S – 2022",
    desc: "Sporty compact car with turbo engine...",
    miles: "12 Miles",
    fuel: "Petrol",
    trans: "Automatic",
    price: "$28,000",
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80",
    badge: "Great Price",
    name: "Audi Q7 – 2023",
    desc: "Luxury 7-seater SUV with AWD system...",
    miles: "8 Miles",
    fuel: "Petrol",
    trans: "Automatic",
    price: "$75,000",
  },
];



  return (
    <section className="featured">
      <div className="featured-top">
        <h2>The Most Searched SUV Cars</h2>
        <a href="#" className="view-all">View All ↗</a>
      </div>

      <div className="car-grid">
        {cars.map((car) => (
          <div className="car-card" key={car.id}>

           
            <div className="car-img-container">
              {car.badge && <span className="badge">{car.badge}</span>}
              <img src={car.img} alt={car.name} className="car-img" />
            </div>

            
            <div className="car-info">
              <h3>{car.name}</h3>
              <p className="desc">{car.desc}</p>

              
              <div className="specs">
                <span>🛣 {car.miles}</span>
                <span>⛽ {car.fuel}</span>
                <span>⚙ {car.trans}</span>
              </div>

              
              <div className="price-row">
                <strong>{car.price}</strong>
                <a href="#" className="details">View Details ↗</a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
