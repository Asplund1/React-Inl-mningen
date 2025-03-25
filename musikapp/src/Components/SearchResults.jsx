// src/Components/SearchResults.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { addSongToPlaylist } from "../Features/playlistSlice";

export default function SearchResults({ results, searchType }) {
  const dispatch = useDispatch();

  if (!results.length) {
    return <p>Inga resultat</p>;
  }

  return (
    <ul className="space-y-2">
      {results.map((item, index) => {
        // Bygg "songData" för att lägga till i spellista
        const songData = {
          id: item.id,
          title: searchType === "artist" ? item.name : item.title,
          artist:
            searchType === "artist"
              ? item.name
              : item["artist-credit"]?.[0]?.name || "Okänd",
        };

        return (
          <li key={item.id || index} className="border-b py-2">
            <strong>{songData.title}</strong> <br />
            {searchType === "track" && (
              <small>Artist: {songData.artist}</small>
            )}
            {searchType === "artist" && (
              <small>Typ: {item.type || "Okänd"}</small>
            )}
            <br />
            <button
              onClick={() => dispatch(addSongToPlaylist(songData))}
              className="
                mt-1 
                bg-green-500 
                text-white 
                px-2 
                py-1 
                rounded 
                transition 
                transform 
                hover:scale-105 
                hover:bg-green-600 
                active:scale-95
              "
            >
              Lägg till i spellista
            </button>
          </li>
        );
      })}
    </ul>
  );
}
