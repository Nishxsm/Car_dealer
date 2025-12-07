import React, { useState, useEffect, useRef } from "react";
import "../styles/cars.css";
import "../styles/filters.css";
import SearchBar from "./SearchBar";

export default function FilterSidebar({ filters, setFilters, isOpen, onClose }) {
  const [open, setOpen] = useState({
    budget: true,
    fuel: true,
    brand: true,
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

  const sidebarRef = useRef(null);



  useEffect(() => {
    if (isOpen && window.innerWidth <= 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);




  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const footer = document.querySelector("footer");
    const sidebar = sidebarRef.current;
    if (!footer || !sidebar) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const footerTop = footer.getBoundingClientRect().top + window.pageYOffset;
          const sidebarHeight = sidebar.offsetHeight;
          const gap = 60;
          const stopPosition = footerTop - sidebarHeight - gap;
          sidebar.style.top = `${stopPosition}px`;
          sidebar.classList.add("sidebar-stop");
        } else {
          sidebar.style.top = "100px";
          sidebar.classList.remove("sidebar-stop");
        }
      },
      { root: null, threshold: 0 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);




  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    let timeout;
    function handleScroll() {
      sidebar.classList.add("scroll-active");
      clearTimeout(timeout);
      timeout = setTimeout(() => sidebar.classList.remove("scroll-active"), 700);
    }

    sidebar.addEventListener("scroll", handleScroll);
    return () => sidebar.removeEventListener("scroll", handleScroll);
  }, []);





  useEffect(() => {
    const slider = document.querySelector(".filter-dropdown input[type='range']");
    if (!slider) return;
    const percent = (slider.value / slider.max) * 100;
    slider.style.setProperty("--progress", percent + "%");
  }, [filters.maxPrice]);




  useEffect(() => {
  const footer = document.querySelector("footer");
  const sidebar = sidebarRef.current;
  if (!footer || !sidebar) return;

  // Function to check if desktop
  const isDesktop = () => window.innerWidth > 768;

  // Clear inline styles if on mobile
  if (!isDesktop()) {
    sidebar.style.top = "";
    sidebar.classList.remove("sidebar-stop");
    return;
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      // Double check it's still desktop
      if (!isDesktop()) return;
      
      if (entry.isIntersecting) {
        const footerTop = footer.getBoundingClientRect().top + window.pageYOffset;
        const sidebarHeight = sidebar.offsetHeight;
        const gap = 60;
        const stopPosition = footerTop - sidebarHeight - gap;
        sidebar.style.top = `${stopPosition}px`;
        sidebar.classList.add("sidebar-stop");
      } else {
        sidebar.style.top = "100px";
        sidebar.classList.remove("sidebar-stop");
      }
    },
    { root: null, threshold: 0 }
  );

  observer.observe(footer);
  return () => {
    observer.disconnect();
    // Clean up inline styles when unmounting
    if (sidebar) {
      sidebar.style.top = "";
      sidebar.classList.remove("sidebar-stop");
    }
  };
}, []);



  const brandsList = [
    "Maruti Suzuki", "Hyundai", "Tata", "Mahindra", 
    "Honda", "Kia", "Toyota", "Renault", "Volkswagen",
  ];

  return (
    <div className={`filter-sidebar ${isOpen ? 'mobile-open' : ''}`} ref={sidebarRef}>
      
      <button className="sidebar-close-btn" onClick={onClose}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <SearchBar
        value={filters.searchQuery || ""}
        onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
      />

      <div className="filters-box">
        <div className="filters-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="7" y1="12" x2="17" y2="12" />
            <line x1="10" y1="18" x2="14" y2="18" />
          </svg>
          Filters
        </div>

        <div className="filters-wrapper">
          <div className="filter-row">
            <div className="filter-toggle" onClick={() => toggleSection("budget")}>
              <span>Budget</span>
              <span className="toggle-icon">{open.budget ? "−" : "+"}</span>
            </div>

            <div className={`filter-dropdown ${open.budget ? "open" : ""}`}>
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
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setFilters({ ...filters, maxPrice: val });
                  const percent = (val / 5000000) * 100;
                  e.target.style.setProperty("--progress", percent + "%");
                }}
                onInput={(e) => {
                  const percent = (e.target.value / e.target.max) * 100;
                  e.target.style.setProperty("--progress", percent + "%");
                }}
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

          <div className="filter-row">
            <div className="filter-toggle" onClick={() => toggleSection("fuel")}>
              <span>Fuel Type</span>
              <span className="toggle-icon">{open.fuel ? "−" : "+"}</span>
            </div>

            <div className={`filter-dropdown ${open.fuel ? "open" : ""}`}>
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

          <div className="filter-row">
            <div className="filter-toggle" onClick={() => toggleSection("brand")}>
              <span>Brands</span>
              <span className="toggle-icon">{open.brand ? "−" : "+"}</span>
            </div>

            <div className={`filter-dropdown ${open.brand ? "open" : ""}`}>
              {brandsList.map((brand) => (
                <label key={brand}>
                  <input
                    type="checkbox"
                    checked={filters.brands?.includes(brand)}
                    onChange={() => {
                      const updated = filters.brands.includes(brand)
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
      </div>
    </div>
  );
}