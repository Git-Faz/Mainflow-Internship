import MediaPage from "../components/MediaPage";
import { getCelebs } from "../services/MovieService";

const Celebrities = () => {
  return (
    <MediaPage heading={"Celebrities"} fetchData={getCelebs} type={"person"}/>
  );
};

export default Celebrities;
