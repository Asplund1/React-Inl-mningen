// src/Components/SearchBar.jsx
import React from "react";

export default function SearchBar({ searchTerm, setSearchTerm, handleSearch, loading }) {
  return (
    <div className="mb-4 flex space-x-2">
      <input
        type="text"
        placeholder="Skriv sökterm..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded bg"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded transition hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? "Söker..." : "Sök"}
      </button>
    </div>
  );
}
