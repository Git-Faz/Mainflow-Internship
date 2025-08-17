import axios from "axios";

const baseURL = "https://api.themoviedb.org/3";
const tmdb_api = import.meta.env.VITE_API_KEY;

const searchResults = async (query) => {
  try{
    const response = await axios.get(`${baseURL}/search/multi`, {
      params:{
        api_key: tmdb_api,
        query: query,
        include_adult: "true",
        language: "en-US",
        page: "1"
      }
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
}

/* const getGenres = async () => {
  //parallel requests
  const urls = [`${baseURL}/genre/movie/list`, `${baseURL}/genre/tv/list`];
  try {
    const responses = await Promise.all(urls.map(url =>
      axios.get(url, {
        params: {
          api_key: tmdb_api,
          language: "en-US",
        }
      })
    ));
    const movieGenres = responses[0].data.genres;
    const tvGenres = responses[1].data.genres;
    return { movieGenres, tvGenres };
  } catch (error) {
    console.error("Error fetching genres:", error);
    throw error;
  }
}; */

const getMovieGenres = async () => {
  try {
    const response = await axios.get(`${baseURL}/genre/movie/list`, {
      params: {
        api_key: tmdb_api,
        language: "en-US",
      },
    });
    return response.data.genres;
  } catch (error) {
    console.error("Error fetching movie genres:", error);
    throw error;
  }
};

const getMovies = async (page) => {
  try {
    const response = await axios.get(`${baseURL}/discover/movie`, {
      params: {
        api_key: tmdb_api,
        include_adult: "true",
        include_video: "false",
        language: "en-US",
        page,
        sort_by: "popularity.desc",
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

const getPopularMovies = async (page) => {
  try {
    const response = await axios.get(`${baseURL}/movie/popular`, {
      params: {
        api_key: tmdb_api,
        language: "en-US",
        page,
      },
    });
    const movieList = response.data.results.splice(0, 6); // Get only the first 6 movies (FOR NOW)
    return movieList;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

const getMovieDetails = async (movieId) => {
  const urls = [
    `${baseURL}/movie/${movieId}`,
    `${baseURL}/movie/${movieId}/credits`,
    `${baseURL}/movie/${movieId}/videos`,
  ];
  try {
    const [movieResponse, creditsResponse, videosResponse] = await Promise.all(
      urls.map((url) =>
        axios.get(url, {
          params: {
            api_key: tmdb_api,
            language: "en-US",
          },
        })
      )
    );
    return {
      ...movieResponse.data,
      credits: creditsResponse.data,
      videos: videosResponse.data,
    };
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

const getSeries = async (page) => {
  try {
    const response = await axios.get(`${baseURL}/discover/tv`, {
      params: {
        api_key: tmdb_api,
        include_adult: "false",
        include_null_first_air_dates: "false",
        language: "en-US",
        page,
        sort_by: "popularity.desc",
        media_type: "tv"
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching series:", error);
    throw error;
  }
};

const getPopularSeries = async (page) => {
  try {
    const response = await axios.get(`${baseURL}/tv/popular`, {
      params: {
        api_key: tmdb_api,
        language: "en-US",
        page,
        media_type: "tv"
      },
    });
    const seriesList = response.data.results.splice(0, 6); // Get only the first 6 series (FOR NOW)
    return seriesList;
  } catch (error) {
    console.error("Error fetching series:", error);
    throw error;
  }
};

const getSeriesDetails = async (seriesId) => {

  const urls = [
    `${baseURL}/tv/${seriesId}`,
    `${baseURL}/tv/${seriesId}/credits`,
    `${baseURL}/tv/${seriesId}/videos`,
  ];
  try {
    const [seriesResponse, creditsResponse, videosResponse] = await Promise.all(
      urls.map((url) =>
        axios.get(url, {
          params: {
            api_key: tmdb_api,
            language: "en-US",
          },
        })
      )
    );
    return {
      ...seriesResponse.data,
      credits: creditsResponse.data,
      videos: videosResponse.data,
    };
  } catch (error) {
    console.error("Error fetching series details:", error);
    throw error;
  }
};

const getSeriesGenres = async () => {
  try {
    const response = await axios.get(`${baseURL}/genre/tv/list`, {
      params: {
        api_key: tmdb_api,
        language: "en-US",
      },
    });
    return response.data.genres;
  } catch (error) {
    console.error("Error fetching series genres:", error);
    throw error;
  }
};

const getTopRated = async (page) => {
  try {
    const response = await axios.get(`${baseURL}/movie/top_rated`, {
      params: {
        api_key: tmdb_api,
        language: "en-US",
        page,
      },
    });
    const response2 = await axios.get(`${baseURL}/tv/top_rated`, {
      params: {
        api_key: tmdb_api,
        language: "en-US",
        page,
      },
    });
    const topRatedList = response.data.results.splice(0, 3); // Get only the first 3 top-rated movies (FOR NOW)
    const topRatedSeries = response2.data.results.splice(0, 3); // Get only the first 3 top-rated series (FOR NOW)
    return [ ...topRatedList, ...topRatedSeries ];
  } catch (error) {
    console.error("Error fetching top-rated movies:", error);
    throw error;
  }
};

const getCelebs = async (page) => {
  try {
    const response = await axios.get(`${baseURL}/person/popular`, {
      params: {
        api_key: tmdb_api,
        language: "en-US",
        page,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
}

const getCelebDetails = async (celebId) => {
  try {
    const response = await axios.get(`${baseURL}/person/${celebId}`, {
      params: {
        api_key: tmdb_api,
        language: "en-US",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching celebrity details:", error);
    throw error;
  }
};

export { getMovies, getPopularMovies, getMovieDetails, getMovieGenres,
        getSeries, getPopularSeries, getSeriesDetails, getSeriesGenres,
        getTopRated, getCelebs, getCelebDetails, searchResults };
