import Heading from "../components/Titles";
import MovieGrid from "../components/MovieGrid";
import { getCelebs } from "../services/MovieService";

const Celebrities = () => {
  return (
    <div>
      <Heading heading={"Celebrities"} />
      <MovieGrid fetchData={getCelebs} />
    </div>
  );
};

export default Celebrities;
