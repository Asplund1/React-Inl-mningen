// src/pages/Playlist.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../Components/Navbar";
import ThemeToggle from "../Components/ThemeToggle";
import { removeSongFromPlaylist, clearPlaylist } from "../Features/PlaylistSlice";

export default function Playlist() {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.playlist.songs);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Samma navbar som övriga sidor */}
      <Navbar />
      <div className="container mx-auto px-4 py-8 text-gray-700 dark:text-gray-300">
        {/* Placera ThemeToggle uppe till höger, om du vill ha samma struktur */}
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>

        <h1 className="text-2xl font-bold text-primary dark:text-white mb-4">
          Min Spellista
        </h1>

        {songs.length === 0 ? (
          <p className="text-gray-700 dark:text-gray-300">
            Inga låtar i spellistan ännu.
          </p>
        ) : (
          <ul className="space-y-2">
            {songs.map((song) => (
              <li key={song.id} className="border-b py-2">
                <strong>{song.title}</strong> - {song.artist}
                <button
                  onClick={() => dispatch(removeSongFromPlaylist(song.id))}
                  className="ml-4 text-red-500 hover:underline"
                >
                  Ta bort
                </button>
              </li>
            ))}
          </ul>
        )}

        {songs.length > 0 && (
          <button
            onClick={() => dispatch(clearPlaylist())}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Rensa spellista
          </button>
        )}
      </div>
    </div>
  );
}
