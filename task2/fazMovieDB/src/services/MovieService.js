import axios from "axios";

const baseURL = "https://api.themoviedb.org/3";

const getMovies = async () => {
  try {
    const response = await axios.get(`${baseURL}/discover/movie`, {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
        include_adult: "true",
        include_video: "false",
        language: "en-US",
        page: "1",
        sort_by: "popularity.desc",
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${baseURL}/movie/popular`, {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
        language: "en-US",
        page: 1,
      },
    });
    const movieList = response.data.results.splice(0, 6); // Get only the first 6 movies (FOR NOW)
    return movieList;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

const getSeries = async () => {
  try {
    const response = await axios.get(`${baseURL}/discover/tv`, {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
        include_adult: "false",
        include_null_first_air_dates: "false",
        language: "en-US",
        page: "1",
        sort_by: "popularity.desc",
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching series:", error);
    throw error;
  }
};

const getPopularSeries = async () => {
  try {
    const response = await axios.get(`${baseURL}/tv/popular`, {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
        language: "en-US",
        page: 1,
      },
    });
    const seriesList = response.data.results.splice(0, 6); // Get only the first 6 series (FOR NOW)
    return seriesList;
  } catch (error) {
    console.error("Error fetching series:", error);
    throw error;
  }
};

const getTopRated = async () => {
  try {
    const response = await axios.get(`${baseURL}/movie/top_rated`, {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
        language: "en-US",
        page: 1,
      },
    });
    const topRatedList = response.data.results.splice(0, 6); // Get only the first 5 top-rated movies (FOR NOW)
    return topRatedList;
  } catch (error) {
    console.error("Error fetching top-rated movies:", error);
    throw error;
  }
};

const getCelebs = async () => {
  try{
    const response = await axios.get(`${baseURL}/person/popular`, {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
        language: "en-US",
        page: 1,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
}

export { getMovies, getPopularMovies, getSeries, getPopularSeries, getTopRated, getCelebs };
