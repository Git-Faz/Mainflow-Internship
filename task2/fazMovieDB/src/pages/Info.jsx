import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getMovieDetails,
  getMovieVids,
  getSeriesDetails,
  getSeriesVids,
  getCelebDetails,
} from "../services/MovieService";
import {Heading, SubHeading} from "../components/media/Titles";

const Info = () => {
  const { id, type } = useParams();
  const [data, setData] = useState(null);

  const isDetailPage = Boolean(id);// if id exists => detail page

  const vidCondition = (vid) => {
    return vid.site === "YouTube" &&
           (vid.type === "Trailer" || vid.type === "Teaser") &&
          //  vid.official === true &&
           vid.size === 1080;
  }

  useEffect(() => {
    if (!isDetailPage) return;

    const fetchData = async () => {
      try {
        let result;
        if (type === "movie") {
          result = await getMovieDetails(id);
          const videoData = await getMovieVids(id);
          // Find the first trailer or teaser
          const trailer = videoData?.find((video) => vidCondition(video));
          result.video_url = trailer
            ? `https://www.youtube.com/embed/${trailer.key}`
            : null;
        } else if (type === "tv") {
          result = await getSeriesDetails(id);
          const videoData = await getSeriesVids(id);
          // Find the first trailer or teaser
          const trailer = videoData?.find((video) => vidCondition(video));
          result.video_url = trailer
            ? `https://www.youtube.com/embed/${trailer.key}`
            : null;
        } else if (type === "person") {
          result = await getCelebDetails(id);
        } else {
          throw new Error("Invalid type");
        }
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
  const isType = () => {
    if (type === "movie") return "Movie";
    if (type === "tv") return "Series";
    if (type === "person") return "Celebrities";
  };

  return (
    <div className="info grid grid-cols-3 gap-4 text-white m-4 p-4 content-start items-center-safe h-fit">
      {/* Show category heading only on listing pages */}
      {!isDetailPage && <Heading heading={isType()} className={"flex shrink-0"}/>}

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
            className="w-full h-auto object-cover mt-2"
          />
        </div>

          <div className="info-text col-span-2 flex flex-col px-2 space-y-2">
            <Heading
              heading={data?.title || data?.name}
              className="my-2"
            />
            <p className="p2 mx-2">{data?.overview || data?.biography}</p>

            {(type === "movie" || type === "tv") && <SubHeading heading="Trailer" className="text-lg" />}
            {data.video_url && (
              <iframe
                width="100%"
                height="100%"
                src={data.video_url}
                title="Trailer"

                className="aspect-video h-auto w-full"
              ></iframe>
            )}

          </div>
        </>
      )}
    </div>
  );
};

export default Info;
