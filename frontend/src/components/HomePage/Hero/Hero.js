import React from "react";
import "./Hero.css"; // Import styles for the Hero component

export const Hero = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value.trim();
    console.log("Search Term:", searchTerm);
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
          <button type="submit" className="hero-search-button">
            <i class="fa fa-search"></i> 
          </button>
        </form>
      </div>
    </div>
  );
};
