import React, { useState } from "react";

import "./SearchBar.css";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmitn = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  return (
    <div className="searchBar">
      <form onSubmit={handleFormSubmitn}>
        <label>Enter Search Term</label>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
      </form>
    </div>
  );
}

export default SearchBar;
