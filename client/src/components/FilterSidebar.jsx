import React from "react";
import "../styles/cars.css";
import "../styles/filters.css";


export default function FilterSidebar({ filters, setFilters }) {
  const togglePriceRange = (value) => {
    const updated = filters.priceRanges.includes(value)
      ? filters.priceRanges.filter((v) => v !== value)
      : [...filters.priceRanges, value];

    setFilters({ ...filters, priceRanges: updated });
  };

  return (
    <div className="filter-sidebar">

      {/* BUDGET */}
      <div className="filter-box">
        <h3>Budget</h3>

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

      {/* FUEL TYPE */}
      <div className="filter-box">
        <h3>Fuel Type</h3>

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

      {/* BRAND SEARCH */}
      <div className="filter-box">
        <h3>Brand + Model</h3>
        <input
          type="text"
          placeholder="Search brand or model"
          value={filters.brand}
          onChange={(e) =>
            setFilters({ ...filters, brand: e.target.value })
          }
        />
      </div>

    </div>
  );
}
