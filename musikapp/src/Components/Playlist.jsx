import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeSongFromPlaylist, clearPlaylist } from "../Features/PlaylistSlice";

export default function PlaylistContent() {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.playlist.songs);

  return (
    <div>
      {songs.length === 0 ? (
        <p>Inga låtar i spellistan ännu.</p>
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
  );
}
