//import { useState, useEffect } from "react";
import MovieGrid from "../components/MovieGrid";
import Heading from "../components/Titles";
import { getMovies } from "../services/MovieService";

const Movies = () => {

  //const [movies, setMovies] = useState([]);

  return (
    <div>
      <Heading heading={"Movies"} />
      <MovieGrid fetchData={getMovies} />
    </div>
  );
};

export default Movies;
