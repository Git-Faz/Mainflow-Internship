import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { searchResults } from "../services/MovieService";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid";

const SearchBar = () => {
  const [search, setsearch] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    const value = event.target.value;
    setsearch(value);
    console.log("Searching for:", value);

    if (value.length > 3) {
      searchResults(value)
        .then((results) => {
          console.log("Search results:", results);
          setResults(results);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
          setResults([]);
        });
    } else {
      setResults([]);
    }
  };

  const clearSearch = () => {
    setsearch("");
    setResults([]);
  };

  const handleResultClick = (result) => {
    console.log("Result clicked:", result);
    navigate(`/${result.media_type}/${result.id}`);
    clearSearch();
  };

  return (
    <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto">
      <div
        className={`flex flex-row items-center border-b-2 hover:border-blue-500 ${
          search ? "border-blue-500" : "border-green-500"
        } bg-transparent transition-colors duration-200`}
      >
        <input
          type="search"
          placeholder="Search movies, TV shows, people..."
          value={search}
          className="p-3 bg-transparent text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none w-full transition-all duration-200 text-base md:text-lg"
          onChange={handleSearch}
        />
        {search ? (
          <button
            onClick={clearSearch}
            className="size-8 hover:text-red-500 text-gray-400 cursor-pointer transition-colors duration-200 flex-shrink-0"
          >
            ✕
          </button>
        ) : (
          <MagnifyingGlassCircleIcon
            className={`size-8 md:size-10 hover:text-blue-500 ${
              search ? "text-blue-500" : "text-green-500"
            } transition-colors duration-200 flex-shrink-0`}
          />
        )}
      </div>

      {results.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-gray-900 text-white mt-1 rounded-lg shadow-2xl border border-gray-700 overflow-hidden z-50 max-h-96 overflow-y-auto">
          {results.map((result, index) => (
            <div
              key={index}
              className="flex flex-row p-3 border-b border-gray-700 hover:bg-gray-800 cursor-pointer transition-colors duration-200 last:border-b-0"
              onClick={() => handleResultClick(result)}
            >
              <div className="flex-shrink-0 mr-3">
                {result.poster_path || result.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w92${
                      result.poster_path || result.profile_path
                    }`}
                    alt={result.title || result.name}
                    className="w-10 h-14 sm:w-12 sm:h-16 object-cover rounded-md"
                  />
                ) : (
                  <div className="w-10 h-14 sm:w-12 sm:h-16 bg-gray-700 rounded-md flex items-center justify-center">
                    <span className="text-gray-400 text-xs">No Image</span>
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm truncate">
                  {result.title || result.name}
                </h4>
                <p className="text-xs text-gray-400 capitalize">
                  {result.media_type === "person"
                    ? "Person"
                    : result.media_type}
                </p>
                {result.release_date && (
                  <p className="text-xs text-gray-400">
                    {new Date(result.release_date).getFullYear()}
                  </p>
                )}
                {result.first_air_date && (
                  <p className="text-xs text-gray-400">
                    {new Date(result.first_air_date).getFullYear()}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
