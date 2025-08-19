import { useState } from "react";
import { Heading } from "../components/media/Titles.jsx";
import Genres from "../components/Genre.jsx";

const GenreListPage = () => {
  const [activeType, setActiveType] = useState("movie");
  const activeStyle = "bg-green-500 text-black font-bold"
  const inactiveStyle = "text-gray-300 hover:text-white font-bold"

  return (
    <div className="h-[80vh] mx-auto px-4 py-6">
      <Heading
        heading="Browse by Genre"
        className="w-full flex justify-center mb-8"
      />

      {/* Toggle between Movie and TV genres */}
      <div className="flex justify-center mb-6">
        <div className="flex bg-gray-800 rounded-lg p-1">
          <button
            onClick={() => setActiveType("movie")}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeType === "movie"
                ? activeStyle
                : inactiveStyle
            }`}
          >
            Movie Genres
          </button>
          <button
            onClick={() => setActiveType("tv")}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeType === "tv"
                ? activeStyle
                : inactiveStyle
            }`}
          >
            TV Show Genres
          </button>
        </div>
      </div>

      {/* Display genres for the selected type */}
      <div className=" mx-auto">
        <Genres
          type={activeType}
          genreStyle={
            "bg-gray-950 text-gray-300 p-2 rounded-md m-1 cursor-pointer border-transparent border-b-3 hover:border-blue-500 hover:border-b-3"
          }
          className={
            "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8"
          }
        />
      </div>
    </div>
  );
};

export default GenreListPage;
