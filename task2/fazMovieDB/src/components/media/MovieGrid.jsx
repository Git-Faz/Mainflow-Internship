import Card from "./Card.jsx";
import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import Filter from "./Filter.jsx";
import {
  ArrowRightCircleIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/16/solid";

const MovieGrid = ({ fetchData, type, className, enableFilters = false, movieClass }) => {
  const location = useLocation();
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState(null);

  const imgLink = "https://image.tmdb.org/t/p/w500";

  const fetchPageData = useCallback(
    async (page) => {
      setLoading(true);
      try {
        let data;
        if (enableFilters && filters) {
          // Use filtered fetch function
          data = await fetchData(page, filters);
        } else {
          // Use regular fetch function
          data = await fetchData(page);
        }

        setItems(data);
        setCurrentPage(page);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    },
    [enableFilters, fetchData, filters]
  );

  useEffect(() => {
    fetchPageData(1);
  }, [fetchPageData]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      fetchPageData(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const nextPage = () => {
    fetchPageData(currentPage + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`movie-grid-container ${className} px-2 sm:px-4 lg:px-8`}>
      {enableFilters && (
        <Filter
          type={type}
          onFilterChange={handleFilterChange}
          className="mb-6"
        />
      )}
      {loading ? (
        <div className="loading-placeholder">Loading...</div>
      ) : (
        <div className={`movie-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-4 my-2 ${movieClass}`}>
          {items.map((item, index) => (
            <Card
              key={index}
              id={item.id}
              type={type}
              title={item.title || item.name}
              image={
                item.poster_path
                  ? `${imgLink}${item.poster_path}`
                  : `${imgLink}${item.profile_path}`
              }
              description={item.overview}
              containerStyle={"border-t-2 border-gray-500"}
            />
          ))}
        </div>
      )}
      {location.pathname !== "/" && (
        <div className="flex flex-row my-4 justify-center space-x-2 sm:space-x-4 text-white px-2">
          <button
            className="p-2 bg-green-500 rounded px-3 sm:px-4 text-sm sm:text-base"
            onClick={() => prevPage()}
          >
            <ArrowLeftCircleIcon className="h-4 w-4 sm:h-5 sm:w-5 inline-block" />
          </button>
          <span className="px-4 py-2 text-white">Page {currentPage}</span>

          <button
            className="p-2 bg-green-500 rounded px-3 sm:px-4 text-sm sm:text-base"
            onClick={() => nextPage()}
          >
            <ArrowRightCircleIcon className="h-4 w-4 sm:h-5 sm:w-5 inline-block" />
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieGrid;