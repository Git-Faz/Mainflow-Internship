import Banner from "../components/Banner.jsx";
import { Heading } from "../components/media/Titles.jsx";
import MovieGrid from "../components/media/MovieGrid.jsx"; 
import { getPopularMovies, getPopularSeries, getTopRated } from "../services/MovieService.js";
import f1 from "../assets/f1.jpg";

const Home = () =>{
    return (
        <div className="body h-fit w-full">
            <Banner bgImg={f1} heading={"FazMovieDB"} caption={"Discover the best movies & series here"}/>
            <Heading heading={"Latest Movies"} className="my-4 flex justify-start w-fit" hClass={"mx-6"} />
            <MovieGrid fetchData={getPopularMovies} type={"movie"} className="my-4" />
            <Heading heading={"Latest TV Shows"} className="my-4 flex justify-start w-fit" hClass={"mx-6"} />
            <MovieGrid fetchData={getPopularSeries} type={"tv"} className="my-4" />
            <Heading heading={"Top Rated"} className="my-4 flex justify-start w-fit" hClass={"mx-6"} />
            <MovieGrid fetchData={getTopRated} type={"movie"} className="my-4" />
        </div>
    );
}


export default Home;
