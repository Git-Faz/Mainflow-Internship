import MediaPage from "../components/MediaPage";
import { getMovies } from "../services/MovieService";

const Movies = () => {

  return (
    <MediaPage heading={"Movies"} fetchData={getMovies} type={"movie"}/>
  );

};

export default Movies;
