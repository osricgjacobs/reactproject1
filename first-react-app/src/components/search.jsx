import React from "react";

function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="search">
      <div>
        <img src="./public/search.svg" alt="search" />
        <input
          type="text"
          placeholder="Search Through thousands of movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.EventTarget.value)}
        />
      </div>
    </div>
  );
}

export default Search;
