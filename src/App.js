import React from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const handleSubmit = (term) => {
    console.log({ term });
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
