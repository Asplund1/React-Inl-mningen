// src/pages/SearchMusicBrainz.jsx
import { useState } from "react";
import Navbar from "../Components/Navbar";
import { searchArtist, searchTrack } from "../services/musicbrainz";
import SearchBar from "../Components/SearchBar";
import SearchResults from "../Components/SearchResults";

export default function SearchMusicBrainz() {
  const [searchType, setSearchType] = useState("artist"); // "artist" eller "track"
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Byter typ (artist/track) och nollställer sökning
  function handleRadioChange(e) {
    const newType = e.target.value; // "artist" eller "track"
    setSearchType(newType);
    setSearchTerm("");   // Tömmer input-fältet
    setResults([]);      // Töm tidigare resultat
    setError(null);      // Nollställer ev. felmeddelande
  }

  async function handleSearch() {
    try {
      // Rensa eventuella gamla fel
      setError(null);
      setLoading(true);
  
      // 1. Kolla om sökfältet är tomt
      if (!searchTerm.trim()) {
        setResults([]);
        setError("Vänligen skriv något i sökrutan");  
        setLoading(false);
        return; // Avbryt innan anrop till MusicBrainz
      }
  
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
        
        <h1 className="text-2xl font-bold text-primary dark:text-white mb-4">
          Sök i MusicBrainz
        </h1>

        {/* Radioknappar för "artist" eller "track" */}
        <div className="mb-4 flex items-center space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="artist"
              checked={searchType === "artist"}
              onChange={handleRadioChange}
              className="form-radio text-blue-500"
            />
            <span className="ml-2">Artist</span>
          </label>

          <label className="inline-flex items-center">
            <input
              type="radio"
              value="track"
              checked={searchType === "track"}
              onChange={handleRadioChange}
              className="form-radio text-blue-500"
            />
            <span className="ml-2">Låt</span>
          </label>
        </div>

        {/* Sökfältet */}
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
          loading={loading}
        />

        {/* Felmeddelande */}
        {error && (
          <p className="text-red-500 dark:text-red-400 mt-4">Fel: {error}</p>
        )}

        {/* Resultatlista */}
        <SearchResults results={results} searchType={searchType} />
      </div>
    </div>
  );
}
