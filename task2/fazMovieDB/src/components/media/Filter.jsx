import { useState } from "react";
import useFilter from "../../hooks/useFilter";

const Filter = ({ type, onFilterChange, className = "" }) => {
  const { filters, genres, updateFilter, resetFilters } = useFilter(type);
  const [isExpanded, setIsExpanded] = useState(false);

  // Add safety check
  if (!filters) {
    return (
      <div className={`bg-gray-900 rounded-lg p-4 mb-6 ${className}`}>
        <div className="text-white text-center">Loading filters...</div>
      </div>
    );
  }

  // Generate years array (current year to 1950)
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1949 },
    (_, i) => currentYear - i
  );

  // Rating options
  const ratingOptions = [
    { value: "", label: "Any Rating" },
    { value: "7", label: "7+ Stars" },
    { value: "6", label: "6+ Stars" },
    { value: "5", label: "5+ Stars" },
    { value: "4", label: "4+ Stars" },
    { value: "3", label: "3+ Stars" },
  ];

  const sortOptions = [
    { value: "popularity.desc", label: "Most Popular" },
    { value: "popularity.asc", label: "Least Popular" },
    { value: "release_date.desc", label: "Newest First" },
    { value: "release_date.asc", label: "Oldest First" },
    { value: "vote_average.desc", label: "Highest Rated" },
    { value: "vote_average.asc", label: "Lowest Rated" },
  ];

  const handleFilterChange = (filterType, value) => {
    updateFilter(filterType, value);
  };

  const handleApply = () => {
    onFilterChange(filters);
  };

  const handleReset = () => {
    resetFilters();
    onFilterChange({
      genre: "",
      releaseYear: "",
      sortBy: "popularity.desc",
      minRating: "",
    });
  };

  return (
    <div className={`bg-black border-y-1 border-gray-500 rounded-lg p-4 mb-6 ${className}`}>
      {/* Filter Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-white font-semibold mb-4 md:hidden"
      >
        <span className="text-2xl">Filters</span>
        <span>{isExpanded ? "−" : "+"}</span>
      </button>

      {/* Filter Options */}
      <div className={`${isExpanded ? "block" : "hidden"} md:block`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Genre Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Genre
            </label>
            <select
              value={filters.genre}
              onChange={(e) => handleFilterChange("genre", e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Genres</option>
              {genres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              ))}
            </select>
          </div>

          {/* Release Year Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Release Year
            </label>
            <select
              value={filters.releaseYear}
              onChange={(e) =>
                handleFilterChange("releaseYear", e.target.value)
              }
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Any Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* Rating Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Minimum Rating
            </label>
            <select
              value={filters.minRating}
              onChange={(e) => handleFilterChange("minRating", e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {ratingOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Sort By
            </label>
            <select
              value={filters.sortBy}
              onChange={(e) => handleFilterChange("sortBy", e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Buttons Row */}
        <div className="mt-4 flex flex-col sm:flex-row gap-2">
          <button
            onClick={handleReset}
            className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
          >
            Reset Filters
          </button>
          <button
            onClick={handleApply}
            className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
