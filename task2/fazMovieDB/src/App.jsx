//import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./layout/pageLayout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Info from "./pages/Info";
import Genres from "./pages/Genres";
import Celebrities from "./pages/Celebrities";
import footerLogo from "./assets/github.svg";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar logo={"FMDB"} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<Series />} />
        <Route path="/people" element={<Celebrities />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/:type/:id" element={<Info />} />
      </Routes>

      <Footer
        name={"Git-Faz"}
        link={"https://github.com/Git-Faz"}
        logo={footerLogo}
      />
    </BrowserRouter>
  );
};

export default App;
