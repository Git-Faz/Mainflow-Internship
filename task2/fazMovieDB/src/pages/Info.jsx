import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getMovieDetails,
  getSeriesDetails,
  getCelebDetails,
} from "../services/MovieService";
import { Heading, SubHeading } from "../components/media/Titles";

const Info = () => {
  const { id, type } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const isDetailPage = Boolean(id); // if id exists => detail page

  const vidCondition = (vid) => {
    return (
      (vid.site === "YouTube" || vid.site === "IMDB") &&
      (vid.type === "Trailer" || vid.type === "Teaser") &&
      (vid.size === 1080 || vid.size === 720)
    );
  };

  useEffect(() => {
    
    if (!isDetailPage) return;

    const fetchData = async () => {
      try {
        let result;

        if (type === "movie") {
          result = await getMovieDetails(id);
        } else if (type === "tv") {
          result = await getSeriesDetails(id);
        } else if (type === "person") {
          result = await getCelebDetails(id);
        } else {
          throw new Error("Invalid type");
        }

        // Common trailer extraction for movie & TV
        const trailer = result.videos?.results?.find((video) =>
          vidCondition(video)
        );
        result.video_url = trailer
          ? `https://www.youtube.com/embed/${trailer.key}`
          : null;

        result.cast = result.credits?.cast?.slice(0, 10) || [];
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id, type, isDetailPage]);

  if (isDetailPage && !data) {
    return <div>Loading...</div>;
  }

  const handleActorClick = (actorId) => {
    navigate(`/person/${actorId}`);
  };

  const isType = () => {
    if (type === "movie") return "Movie";
    if (type === "tv") return "Series";
    if (type === "person") return "Celebrities";
  };

  return (
    <div className="info grid grid-cols-3 gap-4 text-white m-4 p-4 content-start items-start h-fit">
      {/* Show category heading only on listing pages */}
      {!isDetailPage && (
        <Heading heading={isType()} className={"flex shrink-0"} />
      )}

      {isDetailPage && (
        <>
          <div className="info-img col-span-1 flex">
            <img
              src={
                data?.poster_path
                  ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
                  : data?.profile_path
                  ? `https://image.tmdb.org/t/p/w500${data.profile_path}`
                  : "/placeholder.jpg"
              }
              alt={data?.title || data?.name}
              className="w-full h-auto object-cover mt-6"
            />
          </div>

          <div className="info-text col-span-2 flex flex-col px-2 space-y-2">
            {/* Title */}
            <Heading heading={data?.title || data?.name} className="my-2" />
            <p className="p2 mx-2 mb-0">{data?.overview || data?.biography}</p>
            {/*Genres*/}
            {(type === "movie" || type === "tv") && (
              <div className="flex flex-col space-y-2 my-0">
                <div className="flex flex-row justify-between items-start">
                  <div className="flex flex-col">
                    <SubHeading heading="Genres" className="text-lg" />
                    <div className="flex flex-row flex-wrap">
                      {data?.genres?.map((genre) => (
                        <span
                          key={genre.id}
                          className="flex text-md hover:cursor-pointer hover:underline hover:text-blue-500 mt-1 mr-1"
                          onClick={() => navigate(`/genres/${genre.id}`)}
                        >
                          {genre.name}
                          {", "}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex flex-col">
                    <SubHeading heading="Rating" className="text-lg" />
                    <div className="flex flex-row items-center space-x-2">
                      <span className="text-yellow-400 font-bold text-2xl">
                        {data?.vote_average
                          ? data.vote_average.toFixed(1)
                          : "N/A"}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {data?.vote_count ? `(${data.vote_count} votes)` : ""}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Trailer */}
            {(type === "movie" || type === "tv") && (
              <div className="flex flex-col space-y-2 flex-1">
                <SubHeading heading="Trailer" className="text-lg" />
                {data?.video_url ? (
                  <iframe
                    width="100%"
                    height="75%"
                    src={data.video_url}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="my-2 aspect-video rounded"
                  ></iframe>
                ) : (
                  <p className="text-gray-400">No trailer available</p>
                )}
              </div>
            )}
          </div>

          {/* Cast */}
          {(type === "movie" || type === "tv") && (
            <div className="flex flex-col col-span-3 space-y-2">
              <SubHeading heading="Cast" />
              <div className="flex flex-wrap justify-between">
                {data?.cast?.map((actor) => (
                  <div
                    key={actor.id}
                    className="flex-shrink-0 w-24 mr-2"
                    onClick={() => handleActorClick(actor.id)}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                      alt={actor.name}
                      className="image"
                    />
                    <p className="text-xs text-center mt-1 p-1">{actor.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Info;
