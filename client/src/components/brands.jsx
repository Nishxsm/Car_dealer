import React from "react";
import "../styles/brands.css";

export default function Brands() {
  const brands = [
    { id: 1, name: "Audi", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Audi_logo_detail.svg" },
    { id: 2, name: "BMW", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
    { id: 3, name: "Ford", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg" },
    { id: 4, name: "Mercedes Benz", logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg" },
    { id: 5, name: "Peugeot", logo: "https://upload.wikimedia.org/wikipedia/en/3/3a/Peugeot_Logo_2021.svg" },
    { id: 6, name: "Volkswagen", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg" },

    // SECOND ROW
    { id: 7, name: "Toyota", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg" },
    { id: 8, name: "Nissan", logo: "https://upload.wikimedia.org/wikipedia/commons/2/23/Nissan_2020_logo.svg" },
    { id: 9, name: "Lexus", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Lexus_division_emblem.svg" },
    { id: 10, name: "Porsche", logo: "https://upload.wikimedia.org/wikipedia/en/1/15/Porsche_logo.svg" },
    { id: 11, name: "Jaguar", logo: "https://upload.wikimedia.org/wikipedia/en/f/f0/Jaguar_logo.svg" },
    { id: 12, name: "Land Rover", logo: "https://upload.wikimedia.org/wikipedia/en/1/19/Land_Rover_logo.svg" },
  ];

  return (
    <section className="brands-section">
      <div className="brands-top">
        <h2>Explore Our Premium Brands</h2>
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
