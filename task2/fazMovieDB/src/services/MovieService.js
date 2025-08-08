import axios from "axios";

const baseURL = "https://api.themoviedb.org"

const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${baseURL}/3/movie/popular`, {
      params: {
        api_key: import.meta.env.VITE_TMDB_API_KEY,
        language: "en-US",
        page: 1
      }
    });
    const movieList  = response.data.results.splice(0, 5); // Get only the first 5 movies (FOR NOW)
    return movieList;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export { getPopularMovies };
