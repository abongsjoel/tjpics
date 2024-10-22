import React from "react";

import SearchBar from "./components/SearchBar";
import searchImages from "./api";

function App() {
  const handleSubmit = async (term) => {
    const results = await searchImages(term);
    console.log({ results });
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
