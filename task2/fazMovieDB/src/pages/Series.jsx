import MediaPage from "../components/MediaPage";
import { getFilteredSeries } from "../services/MovieService";

const Series = () => {

  return (
    <MediaPage heading={"TV Shows"} fetchData={getFilteredSeries} type={"tv"} />
  );
};

export default Series;



