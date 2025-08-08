//import { useState } from "react";
import { Navbar, Footer } from "./layout/pageLayout.jsx";
import Banner from "./components/Banner.jsx";
import { Heading } from "./layout/pageLayout.jsx";
import MovieGrid from "./components/MovieGrid.jsx";
import footerLogo from "./assets/github.svg";
import f1 from "./assets/f1.jpg";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar logo={"FazMovieDB"} />
      <div className="body h-fit w-[1265px]">
        <Banner
          bgImg={f1}
          heading={"Welcome!"}
          caption={"Discover the best movies & series here"}
        />
        <Heading heading={"Latest Movies"} />
          <MovieGrid />
        <Heading heading={"Latest TV Shows"} />
          {/* <MovieGrid /> */}
        <Heading heading={"Top Rated"} />
          {/* <MovieGrid /> */}
      </div>
      <Footer
        name={"Git-Faz"}
        link={"https://github.com/Git-Faz"}
        logo={footerLogo}
      />
    </>
  );
};

export default App;
