import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMovieGenres, getSeriesGenres } from "../services/MovieService";

const Genres = ({ type, className, genreStyle }) => {
  const [genreList, setGenreList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGenres = async () => {
      let data;
      if (type === "movie") {
        data = await getMovieGenres();
      } else if (type === "tv") {
        data = await getSeriesGenres();
      } else {
        console.error("Invalid genre type");
        return;
      }
      setGenreList(data);
    };
    fetchGenres();
  }, [type]);

  const handleGenreClick = (genreId, genreName) => {
    console.log(`Navigating to genre: ${genreName}`);
    // Navigate to nested route: /genres/movie/28
    navigate(`/genres/${type}/${genreId}`, {
      state: { genreName, type },
    });
  };

  return (
    <div className={className}>
      {genreList.map((genre) => (
        <span
          key={genre.id}
          className={genreStyle}
          onClick={() => handleGenreClick(genre.id, genre.name)}
        >
          {genre.name}
        </span>
      ))}
    </div>
  );
};

export default Genres;
