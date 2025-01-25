import React from "react";
import { useLocation } from "react-router-dom";

export function SearchProductScreen () {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  return (
    <div>
      <h1>Search Results</h1>
      {query ? (
        <p>Showing results for: <strong>{query}</strong></p>
      ) : (
        <p>No search term provided.</p>
      )}
    </div>
  );
};

