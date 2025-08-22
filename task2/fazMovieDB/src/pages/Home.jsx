import Banner from "../components/Banner.jsx";
import { Heading } from "../components/media/Titles.jsx";
import MovieGrid from "../components/media/MovieGrid.jsx";
import {
  getPopularMovies,
  getPopularSeries,
  getTopRated,
} from "../services/MovieService.js";
import f1 from "../assets/f1.jpg";

const Home = () => {
    const headingContainer = "my-4 sm:mx-4 flex justify-center md:justify-start lg:justify-start w-full md:w-fit";
    const headingStyle = "lg:mx-6 sm:mx-4 sm:px-2 w-full md:w-fit lg:w-fit text-center sm:justify-center md:justify-start lg:justify-start";

  return (
    <div className="body h-fit w-full">
      <Banner
        bgImg={f1}
        heading={"FazMovieDB"}
        caption={"Discover the best movies & series here"}
      />
      <Heading
        heading={"Latest Movies"}
        className={headingContainer}
        hClass={headingStyle}
      />
      <MovieGrid
        fetchData={getPopularMovies}
        type={"movie"}
        movieClass="my-4 mb-6 sm:mb-10"
      />
      <Heading
        heading={"Latest TV Shows"}
        className={headingContainer}
        hClass={headingStyle}
      />
      <MovieGrid
        fetchData={getPopularSeries}
        type={"tv"}
        movieClass="my-4 mb-6 sm:mb-10"
      />
      <Heading
        heading={"Top Rated"}
        className={headingContainer}
        hClass={headingStyle}
      />
      <MovieGrid fetchData={getTopRated} type={"movie"} movieClass="my-4 mb-6 sm:mb-10" />
    </div>
  );
};

export default Home;
