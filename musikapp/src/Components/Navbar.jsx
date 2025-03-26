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
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="text-black dark:text-white font-bold text-xl transition-colors duration-300">
          Musikappen
        </div>
        <ul className="flex flex-wrap space-x-3 text-sm sm:text-base mt-2 sm:mt-0">
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