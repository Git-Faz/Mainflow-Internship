// Navbar.jsx
import { Link } from "react-router-dom";
import { HomeIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Genre from "../components/Genre";

const Navbar = ({ logo, genreStyle, genreContainer }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between w-full items-center bg-black text-white py-2 px-4">
      {/* Left Section */}
      <div className="flex items-center space-x-4 md:space-x-20">
        {/* Logo */}
        <div
          className="logo text-green-500 p-2 text-2xl md:text-4xl font-bold font-stretch-expanded"
          style={{ fontFamily: "Impact" }}
        >
          <Link to="/">{logo}</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>

        {/* Nav Links - Desktop */}
        <div className="nav-links hidden md:flex items-center justify-center gap-12 p-2">
          {/* Movies dropdown */}
          <div className="relative group">
            <Link
              to="/movies"
              className="border-b-2 border-transparent hover:border-blue-400 p-1"
            >
              Movies
            </Link>
            <div className="absolute left-0 mt-2 w-64 bg-gray-900 rounded-lg shadow-lg hidden group-hover:block p-3 z-50">
              <Genre
                type="movie"
                genreStyle={genreStyle}
                className={genreContainer}
              />
            </div>
          </div>

          {/* TV Shows dropdown */}
          <div className="relative group">
            <Link
              to="/tv"
              className="border-b-2 border-transparent hover:border-blue-400 p-1"
            >
              TV Shows
            </Link>
            <div className="absolute left-0 mt-2 w-64 bg-gray-900 rounded-lg shadow-lg hidden group-hover:block p-3 z-50">
              <Genre
                type="tv"
                genreStyle={genreStyle}
                className={genreContainer}
              />
            </div>
          </div>

          {/* Other links */}
          <div className="relative group">
            <Link
              to="/people"
              className="border-b-2 border-transparent hover:border-blue-400 p-1"
            >
              Celebrities
            </Link>
          </div>
          <div className="relative group">
            <Link
              to="/genres"
              className="border-b-2 border-transparent hover:border-blue-400 p-1"
            >
              Genres
            </Link>
          </div>
        </div>
      </div>

      {/* Right Section - Desktop */}
      <div className="hidden md:flex flex-row items-center space-x-4">
        <SearchBar />
        <Link to="/" className="flex items-center gap-2">
          <HomeIcon className="w-6 h-6 text-green-500 hover:text-blue-500" />
        </Link>
      </div>

      {/* Mobile Search and Home - Always visible on mobile */}
      <div className="flex md:hidden items-center space-x-2">
        <SearchBar />
        <Link to="/" className="flex items-center gap-2">
          <HomeIcon className="w-5 h-5 text-green-500 hover:text-blue-500" />
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-t border-gray-800 md:hidden z-50">
          <div className="flex flex-col p-4 space-y-4">
            <Link
              to="/movies"
              className="border-b border-gray-800 pb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Movies
            </Link>
            <Link
              to="/tv"
              className="border-b border-gray-800 pb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              TV Shows
            </Link>
            <Link
              to="/people"
              className="border-b border-gray-800 pb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Celebrities
            </Link>
            <Link to="/genres" onClick={() => setIsMenuOpen(false)}>
              Genres
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
