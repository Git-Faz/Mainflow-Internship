import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Banner from "../components/Banner.jsx";
import Heading from "../components/Titles.jsx";
import MovieGrid from "../components/MovieGrid.jsx";
import { getPopularMovies, getPopularSeries, getTopRated } from "../services/MovieService.js";
import f1 from "../assets/f1.jpg";

const Home = () =>{
    return (      
      <div className="body h-fit w-full">
        <Banner
          bgImg={f1}
          heading={"FazMovieDB"}
          caption={"Discover the best movies & series here"}
        />
        <Heading heading={"Latest Movies"} />
          <MovieGrid fetchData={ getPopularMovies } />
        <Heading heading={"Latest TV Shows"} />
          <MovieGrid fetchData={ getPopularSeries } />
        <Heading heading={"Top Rated"} />
          <MovieGrid fetchData={ getTopRated } />
      </div>
  );
}

export default Home;
