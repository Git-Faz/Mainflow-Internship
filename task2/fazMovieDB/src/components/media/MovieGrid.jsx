import Card from "./Card.jsx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  ArrowRightCircleIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/16/solid";


const MovieGrid = ({ fetchData, type, className }) => {
  const location = useLocation();
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const imgLink = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await fetchData();
        setItems(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchItems();
  }, [fetchData]);

  const fetchPageData = async (page) => {
    setLoading(true);
    try {
      const data = await fetchData(page);
      setItems(data);
      setCurrentPage(page);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      fetchPageData(currentPage - 1);
    }
  };

  const nextPage = () => {
    fetchPageData(currentPage + 1);
    window.scrollTo(0, 0);
  };

  return (
    <div className={`movie-grid-container ${className} px-2 sm:px-4 lg:px-8`}>
      {loading ? (
        <div className="loading-placeholder">Loading...</div>
      ) : (
        <div className="movie-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-4 my-2">
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
          />) 
          )}
        </div>
      )}
      { (location.pathname !== "/") && (
        <div className="flex flex-row my-4 justify-center space-x-2 sm:space-x-4 text-white px-2">
          <button className="p-2 bg-green-500 rounded px-3 sm:px-4 text-sm sm:text-base" onClick={() => prevPage()}>
            <ArrowLeftCircleIcon className="h-4 w-4 sm:h-5 sm:w-5 inline-block" />
          </button>
          <button className="p-2 bg-green-500 rounded px-3 sm:px-4 text-sm sm:text-base" onClick={() => nextPage()}>
            <ArrowRightCircleIcon className="h-4 w-4 sm:h-5 sm:w-5 inline-block" />
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieGrid;
