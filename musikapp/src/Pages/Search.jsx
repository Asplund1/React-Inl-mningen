// src/pages/SearchMusicBrainz.jsx (förenklad)
import { useState } from "react";
import Navbar from "../Components/Navbar";
import { searchArtist, searchTrack } from "../services/musicbrainz";
import SearchBar from "../Components/SearchBar";
import SearchResults from "../Components/SearchResults";
import ThemeToggle from "../Components/ThemeToggle";

export default function SearchMusicBrainz() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("artist");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    try {
      setLoading(true);
      setError(null);
      let data;
      if (searchType === "artist") {
        data = await searchArtist(searchTerm);
      } else {
        data = await searchTrack(searchTerm);
      }
      setResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <div className="container mx-auto px-4 py-8 text-gray-700 dark:text-gray-300">
        {/* Placera ThemeToggle om du vill ha samma layout som Home/About */}
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>

        <h1 className="text-2xl font-bold text-primary dark:text-white mb-4">
          Sök i MusicBrainz
        </h1>

        {/* Radioknappar för artist/låt */}
        <div className="mb-4 flex items-center space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="artist"
              checked={searchType === "artist"}
              onChange={() => setSearchType("artist")}
              className="form-radio text-blue-500"
            />
            <span className="ml-2">Artist</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="track"
              checked={searchType === "track"}
              onChange={() => setSearchType("track")}
              className="form-radio text-blue-500"
            />
            <span className="ml-2">Låt</span>
          </label>
        </div>

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
          loading={loading}
        />

        {error && <p className="text-red-500 dark:text-red-400 mt-4">Fel: {error}</p>}

        {/* Resultatlistan */}
        <SearchResults results={results} error={error} searchType={searchType} />
      </div>
    </div>
  );
}
