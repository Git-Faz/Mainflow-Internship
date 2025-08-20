import { useState,useEffect } from "react";
import { getMovieDetails, getSeriesDetails, getCelebDetails } from "../services/MovieService";

const useMediaDetails = (id, type) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isInfoPage = Boolean(id); // if id exists => info page

  const vidCondition = (vid) => {
    return (
      (vid.site === "YouTube" || vid.site === "IMDB") &&
      (vid.type === "Trailer" || vid.type === "Teaser") &&
      (vid.size === 1080 || vid.size === 720)
    );
  };

  useEffect(() => {

    const fetchData = async () => {

			setLoading(true);
			setError(null);

      try {
        let result;

        if (type === "movie") result = await getMovieDetails(id);
        else if (type === "tv") result = await getSeriesDetails(id);
        else if (type === "person") result = await getCelebDetails(id);
        else throw new Error("Invalid type");

        const trailer = result.videos?.results?.find((video) =>
          vidCondition(video)
        );

        result.video_url = trailer
          ? `https://www.youtube.com/embed/${trailer.key}`
          : null;

        result.cast = result.credits?.cast?.slice(0, 10) || [];
        result.release_date = result.release_date || result.first_air_date;

        setData(result);
      } catch (error) {
        setError(error);
        console.error("Error fetching media details:", error);

      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, type]);

  return { data, loading, error, isInfoPage };
};

export default useMediaDetails;
