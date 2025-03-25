import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="
      bg-gray-200
      dark:bg-gray-800
      p-4
      shadow-md
      transition-colors
      duration-300
    ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Titel */}
        <div className="text-black dark:text-white font-bold text-xl transition-colors duration-300">
          Musikappen
        </div>
        {/* Länkar */}
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="
                text-black
                dark:text-white
                hover:text-blue-600
                dark:hover:text-yellow-300
                transition-colors
                duration-300
              "
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/search"
              className="
                text-black
                dark:text-white
                hover:text-blue-600
                dark:hover:text-yellow-300
                transition-colors
                duration-300
              "
            >
              Search
            </Link>
          </li>
          <li>
            <Link
              to="/Playlist"
              className="
                text-black
                dark:text-white
                hover:text-blue-600
                dark:hover:text-yellow-300
                transition-colors
                duration-300
              "
            >
              Spellista
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="
                text-black
                dark:text-white
                hover:text-blue-600
                dark:hover:text-yellow-300
                transition-colors
                duration-300
              "
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}