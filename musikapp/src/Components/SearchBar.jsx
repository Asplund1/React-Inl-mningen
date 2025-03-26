
import React from "react";

export default function SearchBar({ searchTerm, setSearchTerm, handleSearch, loading }) {
  return (
    <div className="mb-4 flex space-x-2">
      <input
        type="text"
        placeholder="Skriv sökterm..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 rounded text-sm placeholder-gray-400 dark:placeholder-gray-500 text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
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
