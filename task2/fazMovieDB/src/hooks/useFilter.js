import { useState, useEffect } from "react";
import { getMovieGenres, getSeriesGenres } from "../services/MovieService";

const useFilter = (type) => {
  const [filters, setFilters] = useState({
    genre: "",
    releaseYear: "",
    sortBy: "popularity.desc",
    minRating: "",
  });
  
  const [genres, setGenres] = useState([]);
  
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const data = type === "movie" ? await getMovieGenres() : await getSeriesGenres();
        setGenres(data);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };
    
    if (type) {
      fetchGenres();
    }
  }, [type]);

  const updateFilter = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const resetFilters = () => {
    setFilters({
      genre: "",
      releaseYear: "",
      sortBy: "popularity.desc",
      minRating: ""
    });
  };

  return {
    filters,
    genres,
    updateFilter,
    resetFilters
  };
};

export default useFilter;