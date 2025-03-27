import { useState } from "react";
import Navbar from "../Components/Navbar";
import { searchArtist, searchTrack } from "../services/musicbrainz";
import SearchBar from "../Components/SearchBar";
import SearchResults from "../Components/SearchResults";

export default function SearchMusicBrainz() {
  const [searchType, setSearchType] = useState("artist"); 
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

 // välj mellan artist eller låt
  function handleRadioChange(e) {
    const newType = e.target.value; 
    setSearchType(newType);
    setSearchTerm("");   
    setResults([]);      
    setError(null);      
  }
  
// själva sökningen
  async function handleSearch() {
    try {
      setError(null);
      setLoading(true);

      if (!searchTerm.trim()) {
        setResults([]);
        setError("Vänligen skriv något i sökrutan");  
        setLoading(false);
        return;
      }

// Beroende på vald söktyp, anropa rätt API-funktion/sökning
      let data;
      if (searchType === "artist") {
        data = await searchArtist(searchTerm);
      } else {
        data = await searchTrack(searchTerm);
      }
// Uppdatera state med sökresultaten
      setResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      // Avsluta laddningstillståndet oavsett resultat
      setLoading(false);
    }
  }
  
//aria-label
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <div className="container mx-auto px-4 py-8 text-gray-700 dark:text-gray-300">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary dark:text-white mb-4">
          Sök efter din nya favorit låt eller artist!
        </h1>
        <div className="mb-4 flex items-center space-x-4" aria-label="Välj söktyp">
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

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
          loading={loading}
        />

        {error && (
          <p className="text-red-500 dark:text-red-400 mt-4">Fel: {error}</p>
        )}

        <SearchResults results={results} searchType={searchType} />
      </div>
    </div>
  );
}