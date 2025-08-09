import Heading from "../components/Titles";
import MovieGrid from "../components/MovieGrid";
import { getSeries } from "../services/MovieService";
const Series = () => {
  return (
    <div>
      <Heading heading={"TV Shows"} />
      <MovieGrid fetchData={getSeries} />
    </div>
  );
};

export default Series;


