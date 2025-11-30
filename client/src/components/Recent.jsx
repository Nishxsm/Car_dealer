import React from "react";
import "../styles/recent.css";
import useReveal from "./hooks/useReveal";

export default function Recent() {
  useReveal();

  const cars = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=800&q=80",
      name: "Volkswagen Passat – 2024",
      desc: "R-Line with premium leather interior...",
      miles: "3,700 km",
      fuel: "Petrol",
      trans: "Automatic",
      price: "₹ 24,50,000",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1567818735868-e71b99932e29?auto=format&fit=crop&w=800&q=80",
      name: "Nissan Altima – 2024",
      desc: "SR with advanced safety shield...",
      miles: "2,900 km",
      fuel: "Petrol",
      trans: "CVT",
      price: "₹ 22,00,000",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=800&q=80",
      name: "Kia Sportage – 2024",
      desc: "EX AWD with smart cruise control...",
      miles: "6,600 km",
      fuel: "Hybrid",
      trans: "Automatic",
      price: "₹ 27,50,000",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
      name: "Chevrolet Silverado – 2023",
      desc: "LT 4WD crew cab with towing package...",
      miles: "20,100 km",
      fuel: "Diesel",
      trans: "Automatic",
      price: "₹ 39,00,000",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
      name: "Jaguar F-Type – 2024",
      desc: "R-Dynamic with supercharged V6 engine...",
      miles: "5,100 km",
      fuel: "Petrol",
      trans: "Automatic",
      price: "₹ 1,15,00,000",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?auto=format&fit=crop&w=800&q=80",
      name: "GMC Yukon – 2024",
      desc: "Denali Ultimate with luxury features...",
      miles: "3,000 km",
      fuel: "Petrol",
      trans: "Automatic",
      price: "₹ 85,00,000",
    },
    {
      id: 7,
      img: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&w=800&q=80",
      name: "Volvo XC90 – 2024",
      desc: "Recharge plug-in hybrid with Pilot Assist...",
      miles: "8,900 km",
      fuel: "Hybrid",
      trans: "Automatic",
      price: "₹ 72,00,000",
    },
    {
      id: 8,
      img: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80",
      name: "Dodge Charger – 2023",
      desc: "R/T Scat Pack with Brembo brakes...",
      miles: "12,400 km",
      fuel: "Petrol",
      trans: "Automatic",
      price: "₹ 52,00,000",
    },
  ];

  return (
    <section className="recent">
      <div className="recent-top fade-in">
        <h2>RECENTLY ADDED</h2>
        <p>
          CAREFULLY SELECTED VEHICLES THAT COMBINE LUXURY, PERFORMANCE AND MODERN
          ENGINEERING.
        </p>
      </div>

      <div className="car-grid1">
        {cars.map((car) => (
          <div className="car-card1 fade-in" key={car.id}>
            <div className="car-img-container1">
              <img src={car.img} alt={car.name} className="car-img1" />
            </div>

            <div className="car-info1">
              <h3 className="car-title1">{car.name}</h3>

              <div className="car-divider1"></div>

              <div className="car-specs-row1">
                <span>🛣 {car.miles}</span>
                <span>⛽ {car.fuel}</span>
                <span>⚙ {car.trans}</span>
              </div>

              <div className="car-divider1"></div>

              <div className="car-price1">{car.price}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all-bottom1 fade-in">
        <a href="#">View All →</a>
      </div>
    </section>
  );
}
