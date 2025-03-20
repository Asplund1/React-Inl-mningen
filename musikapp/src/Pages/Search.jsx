import Navbar from "../Components/Navbar";
import SearchBar from "../Components/SearchBar";
import SongList from "../Components/SongList";

export default function Search() {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-primary dark:text-white mb-4">Sök efter låtar</h1>
          <SearchBar />
          <div className="mt-6">
            <SongList />
          </div>
        </div>
      </div>
    );
  }