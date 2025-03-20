import { Link } from "react-router-dom";

export default function Navbar() {
    return (
      <nav className="bg-primary dark:bg-gray-800 p-4 shadow-md" aria-label="Huvudmeny">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl">Musikappen</div>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-white hover:text-accent transition-colors" aria-label="Gå till startsidan">
                Home
              </Link>
            </li>
            <li>
              <Link to="/search" className="text-white hover:text-accent transition-colors" aria-label="Gå till söksidan">
                Search
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-accent transition-colors" aria-label="Gå till om-sidan">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }