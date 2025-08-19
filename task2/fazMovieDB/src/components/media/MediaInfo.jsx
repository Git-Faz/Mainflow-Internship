import { useNavigate } from "react-router-dom";


const GenreList = ({ genres, type }) => {
  const navigate = useNavigate();

  const handleGenreClick = (genreId, genreName) => {
    navigate(`/genres/${type}/${genreId}`, {
      state: { genreName, type }
    });
  };

  return (
    <div className="flex flex-col space-y-2 my-0">
      <div className="flex flex-row flex-wrap">
        {genres?.map((genre) => (
          <span
            key={genre.id}
            className="flex text-md hover:cursor-pointer hover:underline hover:text-blue-500 mt-1 ml-2"
            onClick={() => handleGenreClick(genre.id, genre.name)}
          >
            {genre.name}
            {", "}
          </span>
        ))}
      </div>
    </div>
  );
};

const MediaRating = ({ rating, voteCount }) => {
  return (
    <div className="flex flex-row items-center space-x-2">
      <span className="text-yellow-400 font-bold text-2xl">
        {rating ? rating.toFixed(1) : "N/A"}
      </span>
      <span className="text-gray-400 text-sm">
        {voteCount ? `(${voteCount} votes)` : ""}
      </span>
    </div>
  );
};

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <iframe
        width="100%"
        height="75%"
        src={video}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="my-2 aspect-video rounded"
      ></iframe>
    </div>
  );
};

const CastList = ({ cast }) => {

  const navigate = useNavigate();

  const handleActorClick = (actorId) => {
    navigate(`/person/${actorId}`);
  };

  return (
    <>
      {cast?.map((actor) => (
        <div key={actor.id} className="flex-shrink-0 w-24 mr-2" onClick={() => handleActorClick(actor.id)}>
          <img
            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
            alt={actor.name}
            className="image"
          />
          <p className="text-xs text-center mt-1 p-1">{actor.name}</p>
        </div>
      ))}
    </>
  );
};

export { GenreList, MediaRating, VideoCard, CastList };
