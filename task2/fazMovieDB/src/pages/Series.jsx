import MediaPage from "../components/MediaPage";
import { getSeries } from "../services/MovieService";

const Series = () => {

  return (
    <MediaPage heading={"TV Shows"} fetchData={getSeries} type={"tv"} />
  );
};

export default Series;



