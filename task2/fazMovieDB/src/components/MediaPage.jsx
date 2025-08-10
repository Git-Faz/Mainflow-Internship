import {Heading} from "./media/Titles";
import MovieGrid from "./media/MovieGrid";

const MediaPage = ({ heading, fetchData, type }) => {
  return (
    <div className="flex flex-col mx-4 my-4">
      <Heading heading={heading} className="my-4" />
      <MovieGrid fetchData={fetchData} type={type} className="my-4" />
    </div>
  );
};

export default MediaPage;