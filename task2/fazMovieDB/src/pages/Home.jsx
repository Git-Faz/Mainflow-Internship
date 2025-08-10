import Banner from "../components/Banner.jsx";
import MediaPage from "../components/MediaPage.jsx";
import { getPopularMovies, getPopularSeries, getTopRated } from "../services/MovieService.js";
import f1 from "../assets/f1.jpg";

const Home = () =>{
    return (      
      <div className="body h-fit w-full">
        <Banner bgImg={f1} heading={"FazMovieDB"} caption={"Discover the best movies & series here"}/>
        <MediaPage heading={"Latest Movies"} fetchData={getPopularMovies} type={"movie"} />
        <MediaPage heading={"Latest TV Shows"} fetchData={getPopularSeries} type={"tv"} />
        <MediaPage heading={"Top Rated"} fetchData={getTopRated} type={"movie"} />
      </div>
  );
}

export default Home;
