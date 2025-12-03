import React, { useState } from "react";
import "../styles/cars.css";
import FilterSidebar from "../components/FilterSidebar";
import CarCard from "../components/carCard";
import carsData from "../utils/carsData";

export default function Cars() {
  const [filters, setFilters] = useState({
    maxPrice: 5000000,
    priceRanges: [],
    fuel: "",
    brand: "",
  });


  const filteredCars = carsData.filter((car) => {

    if (car.price > filters.maxPrice) return false;


    if (filters.priceRanges.length > 0) {
      const inRange = filters.priceRanges.some((range) => {
        switch (range) {
          case "under2":
            return car.price <= 200000;
          case "2to3":
            return car.price >= 200000 && car.price <= 300000;
          case "3to5":
            return car.price >= 300000 && car.price <= 500000;
          case "5to8":
            return car.price >= 500000 && car.price <= 800000;
          case "8to10":
            return car.price >= 800000 && car.price <= 1000000;
          case "above10":
            return car.price >= 1000000;
        }
      });

      if (!inRange) return false;
    }

  
    if (filters.fuel && car.fuel !== filters.fuel) return false;


    if (
      filters.brand &&
      !car.title.toLowerCase().includes(filters.brand.toLowerCase())
    )
      return false;

    return true;
  });

  return (
    <div className="cars-page">
      <FilterSidebar filters={filters} setFilters={setFilters} />

      <div className="cars-list">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => <CarCard key={car.id} car={car} />)
        ) : (
          <p className="no-results">No cars match your filters.</p>
        )}
      </div>
    </div>
  );
}
