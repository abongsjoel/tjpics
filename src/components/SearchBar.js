import React, { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmitn = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmitn}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
      </form>
    </div>
  );
}

export default SearchBar;
