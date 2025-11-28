import React from "react";
import "../styles/brands.css";

export default function Brands() {
const brands = [
  { id: 1, name: "Audi", logo: "https://cdn.brandfetch.io/audi.com/w/400/h/400" },
  { id: 2, name: "BMW", logo: "https://cdn.brandfetch.io/bmw.com/w/400/h/400" },
  { id: 3, name: "Ford", logo: "https://cdn.brandfetch.io/ford.com/w/400/h/400" },
  { id: 4, name: "Mercedes Benz", logo: "https://cdn.brandfetch.io/mercedes-benz.com/w/400/h/400" },
  { id: 5, name: "Peugeot", logo: "https://cdn.brandfetch.io/peugeot.com/w/400/h/400" },
  { id: 6, name: "Volkswagen", logo: "https://cdn.brandfetch.io/vw.com/w/400/h/400" },

  // SECOND ROW
  { id: 7, name: "Toyota", logo: "https://cdn.brandfetch.io/toyota.com/w/400/h/400" },
  { id: 8, name: "Nissan", logo: "https://cdn.brandfetch.io/nissan-global.com/w/400/h/400" },
  { id: 9, name: "Lexus", logo: "https://cdn.brandfetch.io/lexus.com/w/400/h/400" },
  { id: 10, name: "Porsche", logo: "https://cdn.brandfetch.io/porsche.com/w/400/h/400" },
  { id: 11, name: "Jaguar", logo: "https://cdn.brandfetch.io/jaguar.com/w/400/h/400" },
  { id: 12, name: "Land Rover", logo: "https://cdn.brandfetch.io/landrover.com/w/400/h/400" },
];



  return (
    <section className="brands-section">
      <div className="brands-top">
        <h2>EXPLORE PREMIUM BRANDS</h2>
        <a href="#" className="view-all">Show All Brands ↗</a>
      </div>

      <div className="brand-grid">
        {brands.map((b) => (
          <div className="brand-card" key={b.id}>
            <img src={b.logo} alt={b.name} className="brand-logo" />
            <p className="brand-name">{b.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
