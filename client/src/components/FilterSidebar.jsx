import React, { useState } from "react";
import "../styles/cars.css";
import "../styles/filters.css";

export default function FilterSidebar({ filters, setFilters }) {
  const [open, setOpen] = useState({
    budget: false,
    fuel: false,
    brand: false,
  });

  const toggleSection = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const togglePriceRange = (value) => {
    const updated = filters.priceRanges.includes(value)
      ? filters.priceRanges.filter((v) => v !== value)
      : [...filters.priceRanges, value];

    setFilters({ ...filters, priceRanges: updated });
  };

  const brandsList = [
    "Maruti Suzuki",
    "Hyundai",
    "Tata",
    "Mahindra",
    "Honda",
    "Kia",
    "Toyota",
    "Renault",
    "Volkswagen",
  ];

  return (
    <div className="filter-sidebar">


      <div className="filter-box">
        <div className="filter-header" onClick={() => toggleSection("budget")}>
          <h3>Budget</h3>
          <span className={open.budget ? "arrow rotate" : "arrow"}>▼</span>
        </div>

        <div className={`filter-content ${open.budget ? "open" : ""}`}>
          <div className="price-values">
            <span>₹0</span>
            <span>₹{filters.maxPrice.toLocaleString()}</span>
          </div>

          <input
            type="range"
            min="0"
            max="5000000"
            step="50000"
            value={filters.maxPrice}
            onChange={(e) =>
              setFilters({ ...filters, maxPrice: Number(e.target.value) })
            }
          />

          <div className="price-ranges">
            <label><input type="checkbox" onChange={() => togglePriceRange("under2")} /> Under ₹2 Lakh</label>
            <label><input type="checkbox" onChange={() => togglePriceRange("2to3")} /> ₹2–₹3 Lakh</label>
            <label><input type="checkbox" onChange={() => togglePriceRange("3to5")} /> ₹3–₹5 Lakh</label>
            <label><input type="checkbox" onChange={() => togglePriceRange("5to8")} /> ₹5–₹8 Lakh</label>
            <label><input type="checkbox" onChange={() => togglePriceRange("8to10")} /> ₹8–₹10 Lakh</label>
            <label><input type="checkbox" onChange={() => togglePriceRange("above10")} /> Above ₹10 Lakh</label>
          </div>
        </div>
      </div>


      <div className="filter-box">
        <div className="filter-header" onClick={() => toggleSection("fuel")}>
          <h3>Fuel Type</h3>
          <span className={open.fuel ? "arrow rotate" : "arrow"}>▼</span>
        </div>

        <div className={`filter-content ${open.fuel ? "open" : ""}`}>
          {["Petrol", "Diesel", "Electric", "CNG"].map((fuel) => (
            <label key={fuel}>
              <input
                type="checkbox"
                checked={filters.fuel === fuel}
                onChange={() =>
                  setFilters({
                    ...filters,
                    fuel: filters.fuel === fuel ? "" : fuel,
                  })
                }
              />
              {fuel}
            </label>
          ))}
        </div>
      </div>


      <div className="filter-box">
        <div className="filter-header" onClick={() => toggleSection("brand")}>
          <h3>Brands</h3>
          <span className={open.brand ? "arrow rotate" : "arrow"}>▼</span>
        </div>

        <div className={`filter-content ${open.brand ? "open" : ""}`}>
          {brandsList.map((brand) => (
            <label key={brand}>
              <input
                type="checkbox"
                checked={filters.brands?.includes(brand)}
                onChange={() => {
                  const updated = filters.brands?.includes(brand)
                    ? filters.brands.filter((b) => b !== brand)
                    : [...filters.brands, brand];

                  setFilters({ ...filters, brands: updated });
                }}
              />
              {brand}
            </label>
          ))}
        </div>
      </div>

    </div>
  );
}
