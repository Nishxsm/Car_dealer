import React from "react";
import { FiSearch } from "react-icons/fi";  
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
      <FiSearch className="search-icon" /> 
    </div>
  );
}
