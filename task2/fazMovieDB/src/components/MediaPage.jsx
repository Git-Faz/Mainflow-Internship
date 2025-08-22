import {Heading} from "./media/Titles";
import MovieGrid from "./media/MovieGrid";

const MediaPage = ({ heading, fetchData, type }) => {
  return (
    <div className="flex flex-col m-2 sm:m-4">
      <Heading heading={heading} className="mt-2 sm:mt-4 mb-1 flex justify-center" />
      <MovieGrid fetchData={fetchData} type={type} className="my-2 sm:my-4" enableFilters={true} />
    </div>
  );
};

export default MediaPage;