import Navbar from "../Components/Navbar";

// src/pages/SearchMusicBrainz.jsx
import { useState } from "react";
import { searchArtist } from "../services/musicbrainzService";

export default function SearchMusicBrainz() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  async function handleSearch() {
    try {
      setError(null);
      const artists = await searchArtist(searchTerm);
      setResults(artists);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="p-4">
    <Navbar/>
      <h1 className="text-2xl font-bold mb-4">Sök i MusicBrainz</h1>
      <div className="mb-4 flex space-x-2">
        <input
          type="text"
          placeholder="Skriv ett artistnamn..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded">
          Sök
        </button>
      </div>

      {error && <p className="text-red-500">Fel: {error}</p>}

      <ul className="space-y-2">
        {results.map((artist, index) => (
          <li key={index} className="border-b py-2">
            <strong>{artist.name}</strong> <br />
            <small>Typ: {artist.type || "Okänd"}</small><br />
            <small>Disambiguation: {artist.disambiguation || "N/A"}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
