import MediaPage from "../components/MediaPage";
import { getFilteredMovies } from "../services/MovieService";

const Movies = () => {

  return (
    <MediaPage heading={"Movies"} fetchData={getFilteredMovies} type={"movie"}/>
  );

};

export default Movies;
