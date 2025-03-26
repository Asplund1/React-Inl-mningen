import React from "react";
import Navbar from "../Components/Navbar";
import PlaylistContent from "../Components/Playlist";

export default function Playlist() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />

      <div className="container mx-auto px-4 py-8 text-gray-700 dark:text-gray-300">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary dark:text-white mb-4">
          Min Spellista
        </h1>

        <PlaylistContent />
      </div>
    </div>
  );
}
