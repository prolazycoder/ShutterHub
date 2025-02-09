import React from "react";
import { useNavigate } from "react-router-dom";
import { SearchBar } from "../../Common/SearchBar";
import "./Hero.css"; 

export function Hero () {
  const navigate = useNavigate();
  const handleSearch = (query) => {
    navigate(`/search?query=${query}`);
  };

  return (
    <div className="hero">
      <div className="hero-overlay">
        <h1 className="hero-tagline">Your journey in pixels.</h1>
        <h4 className="hero-desc">Browse, upload, and purchase captivating moments—crafted to inspire.</h4>
        <SearchBar placeholder="Search all assets..." onSearch={handleSearch} />
      </div>
    </div>
  );
};
