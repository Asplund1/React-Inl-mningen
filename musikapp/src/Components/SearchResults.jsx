// src/components/SearchResults.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { addSongToPlaylist } from "../Features/PlaylistSlice";

export default function SearchResults({ results, error, searchType }) {
  const dispatch = useDispatch();

  if (error) {
    return <p className="text-red-500">Fel: {error}</p>;
  }

  if (!results.length) {
    return <p>Inga resultat</p>;
  }

  return (
    <ul className="space-y-2">
      {results.map((item, index) => {
        // Om searchType är "track", item kan innehålla { id, title, artist-credit }
        // Om searchType är "artist", item innehåller { id, name } etc.

        const songData = {
          id: item.id,
          title: searchType === "track" ? item.title : item.name,
          artist:
            searchType === "track"
              ? item["artist-credit"]?.[0]?.name || "Okänd"
              : item.name,
        };

        return (
          <li key={index} className="border-b py-2">
            <strong>{songData.title}</strong> <br />
            <small>Artist: {songData.artist}</small>
            <br />
            <button
              onClick={() => dispatch(addSongToPlaylist(songData))}
              className="mt-1 bg-blue-500 text-white px-2 py-1 rounded"
            >
              Lägg till i spellista
            </button>
          </li>
        );
      })}
    </ul>
  );
}
