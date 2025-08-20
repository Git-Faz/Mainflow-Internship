import { useParams, useLocation } from "react-router-dom";
import { getMovieByGenre, getSeriesByGenre } from "../services/MovieService.js";
import { Heading } from "../components/media/Titles.jsx";
import MovieGrid from "../components/media/MovieGrid.jsx";

const GenrePage = () => {
  const { genreId, type } = useParams();
  const location = useLocation();

  const altGenreName = type === "movie" ? "Movies" : "TV Series";
  const genreName = location.state?.genreName || altGenreName;

  const fetchGenreData = async (page = 1) => {
    if (type === "movie") {
      return await getMovieByGenre(genreId, page);
    } else if (type === "tv") {
      return await getSeriesByGenre(genreId, page);
    }
    throw new Error("Invalid type");
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <Heading
        heading={`${genreName} ${type === "movie" ? "Movies" : "TV Shows"}`}
        level={1}
        className="w-full flex justify-center mb-8 mx-auto"
      />

      <MovieGrid
        fetchData={fetchGenreData}
        type={type}
        className="genre-grid"
      />
    </div>
  );
};

export default GenrePage;
