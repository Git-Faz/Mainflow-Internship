import {useState, useEffect} from "react";
import { getMovieDetails, getSeriesDetails } from "../../services/MovieService";
import useMediaDetails from "../../hooks/useMediaDetails";

const Filter = ({ id, type }) => {
  const { data, loading, error } = useMediaDetails(id, type);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching media details</div>;

  return (
    <div className="filter-container">
      
    </div>
  );
};

export default Filter;
