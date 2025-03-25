// src/Components/SearchBar.jsx
import React from "react";

export default function SearchBar({ searchTerm, setSearchTerm, handleSearch, loading }) {
  return (
    <div className="mb-4 flex space-x-2">
      <input
        type="text"
        placeholder="Skriv ett artistnamn..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded"
        disabled={loading}
      >
        {loading ? "Söker..." : "Sök"}
      </button>
    </div>
  );
}
