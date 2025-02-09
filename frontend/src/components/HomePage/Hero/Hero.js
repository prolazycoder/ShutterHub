import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css"; 

export function Hero () {
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value.trim();
    if(searchTerm)
    {
      navigate(`/search?query=${searchTerm}`); // Navigate to the search page with the query
    }
  };

  return (
    <div className="hero">
      <div className="hero-overlay">
        <h1 className="hero-tagline">Your journey in pixels.</h1>
        <h4 className="hero-desc">Browse, upload, and purchase captivating moments—crafted to inspire.</h4>
        <form className="hero-search-form" onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            className="hero-search-input"
            placeholder="Search all assets..."
          />
          <button className="hero-search-button">
            <i className="fa fa-search"></i> 
          </button>
        </form>
      </div>
    </div>
  );
};
