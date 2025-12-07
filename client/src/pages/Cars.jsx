import React, { useState } from "react";
import "../styles/cars.css";
import FilterSidebar from "../components/FilterSidebar";
import CarCard from "../components/carCard";
import SearchBar from "../components/SearchBar";
import carsData from "../utils/carsData";

export default function Cars() {
  const [filters, setFilters] = useState({
    maxPrice: 5000000,
    priceRanges: [],
    fuel: "",
    brands: [],
    searchQuery: "",   
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filteredCars = carsData.filter((car) => {
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      const matchesSearch = 
        car.title.toLowerCase().includes(query) ||
        car.fuel?.toLowerCase().includes(query) ||
        car.transmission?.toLowerCase().includes(query);
      
      if (!matchesSearch) return false;
    }

    if (car.price > filters.maxPrice) return false;

    if (filters.priceRanges.length > 0) {
      const match = filters.priceRanges.some((range) => {
        switch (range) {
          case "under2": return car.price <= 200000;
          case "2to3": return car.price >= 200000 && car.price <= 300000;
          case "3to5": return car.price >= 300000 && car.price <= 500000;
          case "5to8": return car.price >= 500000 && car.price <= 800000;
          case "8to10": return car.price >= 800000 && car.price <= 1000000;
          case "above10": return car.price >= 1000000;
          default: return true;
        }
      });

      if (!match) return false;
    }

    if (filters.fuel && car.fuel !== filters.fuel) return false;

    if (filters.brands.length > 0) {
      const matchBrand = filters.brands.some((b) =>
        car.title.toLowerCase().includes(b.toLowerCase())
      );
      if (!matchBrand) return false;
    }

    return true;
  });

  return (
    <>
 
      {sidebarOpen && (
        <div 
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="cars-page cars-wrapper">
    
        <div className="mobile-controls">
          <button 
            className="filter-toggle-btn" 
            onClick={() => setSidebarOpen(true)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="7" y1="12" x2="17" y2="12" />
              <line x1="10" y1="18" x2="14" y2="18" />
            </svg>
            Filters
          </button>
          
          <div className="mobile-search-wrapper">
            <SearchBar
              value={filters.searchQuery || ""}
              onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
            />
          </div>
        </div>

        <FilterSidebar 
          filters={filters} 
          setFilters={setFilters} 
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <div className="cars-list">
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => <CarCard key={car.id} car={car} />)
          ) : (
            <p className="no-results">No cars match your filters.</p>
          )}
        </div>
      </div>
    </>
  );
}