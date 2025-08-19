import { useParams } from "react-router-dom";
import useMediaDetails from "../hooks/useMediaDetails";
import { Heading, SubHeading } from "../components/media/Titles";
import {
  GenreList,
  MediaRating,
  VideoCard,
  CastList,
} from "../components/media/MediaInfo";

const Info = () => {
  const { id, type } = useParams();

  const { data, loading, error, isInfoPage } = useMediaDetails(id, type);

  if (isInfoPage && loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (isInfoPage && error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500">
          Error: {error.message || "Failed to load media details"}
        </div>
      </div>
    );
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const {
    poster_path,
    profile_path,
    title,
    name,
    overview,
    biography,
    genres,
    vote_average,
    vote_count,
    video_url,
    cast,
  } = data;

  const isMovieOrTv = type === "movie" || type === "tv";

  return (
    <div className="info grid grid-cols-3 gap-4 text-white mx-4 my-1 p-4 content-start items-start h-fit">
      <div className="info-img col-span-1 flex">
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : profile_path
              ? `https://image.tmdb.org/t/p/w500${profile_path}`
              : "/placeholder.jpg"
          }
          alt={title || name}
          className="image mt-6"
        />
      </div>

      <div className="info-text col-span-2 flex flex-col px-2 space-y-2">
        {/* Title */}
        <Heading heading={title || name} className="my-2" />
        <p className="p2 mx-2 mb-0">{overview || biography}</p>

        {/* Genres + Rating */}
        {isMovieOrTv && (
          <div className="flex flex-col space-y-2 my-0">
            <div className="flex flex-row justify-between items-start">
              <div className="flex flex-col">
                <SubHeading heading="Genres" className="text-lg" />
                <GenreList genres={genres} type={type} />
              </div>
              <div className="flex flex-col">
                <SubHeading heading="Rating" className="text-lg" />
                <MediaRating
                  rating={vote_average}
                  voteCount={vote_count}
                />
              </div>
            </div>
          </div>
        )}

        {/* Trailer */}
        {isMovieOrTv && (
          <div className="flex flex-col space-y-2 flex-1">
            <SubHeading heading="Trailer" className="text-lg" />
            {video_url ? (
              <VideoCard video={video_url} />
            ) : (
              <p className="text-gray-400">No trailer available</p>
            )}
          </div>
        )}
      </div>

      {/* Cast */}
      {isMovieOrTv && (
        <div className="flex flex-col col-span-3 space-y-2">
          <SubHeading heading="Cast" />
          <div className="flex flex-wrap justify-between">
            <CastList cast={cast} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Info;
