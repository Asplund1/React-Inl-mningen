import { useSelector } from "react-redux";

export default function SongList() {
    const songs = useSelector((state) => state.music.filteredSongs);
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {songs && songs.length > 0 ? (
          songs.map((song, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow-md transition-colors duration-300">
              <h3 className="font-bold text-lg text-primary dark:text-white">{song.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{song.artist}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">Inga låtar hittades.</p>
        )}
      </div>
    );
  }