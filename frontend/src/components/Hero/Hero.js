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
        <h1 className="hero-tagline">Find Your Next Adventure</h1>
        <form className="hero-search-form" onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            className="hero-search-input"
            placeholder="Search for destinations, activities, or places..."
          />
          <button type="submit" className="hero-search-button">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
