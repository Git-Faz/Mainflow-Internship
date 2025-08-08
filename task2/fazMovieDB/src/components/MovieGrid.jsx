import MovieCard from "./MovieCard.jsx";
import { useEffect, useState } from "react";
import {getPopularMovies} from "../services/MovieService.js";

const MovieGrid = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieData = await getPopularMovies();
        setMovies(movieData);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="movie-grid flex flex-row mx-4 ">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          description={movie.overview}
        />
      ))}
    </div>
  );
};
export default MovieGrid;

