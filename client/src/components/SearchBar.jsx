import React from "react";
import "../styles/searchBar.css";

export default function SearchBar({ value, onChange, placeholder = "Search cars..." }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="search-input"
      />
      <span className="search-icon">🔍</span>
    </div>
  );
}
