import React from "react";
import "../styles/SearchBar.css"; // Assuming the CSS file is named styles.css

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <input 
        type="text" 
        className="search-bar" 
        placeholder="Search..." 
      />
    </div>
  );
};

export default SearchBar;
