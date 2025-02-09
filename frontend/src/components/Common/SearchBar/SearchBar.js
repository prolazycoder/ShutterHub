import React, { useState } from "react";
import "./SearchBar.css"; // Import only SearchBar-specific styles

export function SearchBar ({ placeholder = "Search...", onSearch, initialValue = "" }) {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search-button" type="submit">
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
};

