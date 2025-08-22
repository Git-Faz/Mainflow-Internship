//import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./layout/pageLayout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Info from "./pages/Info";
import GenrePage from "./pages/GenrePage";
import GenreListPage from "./pages/GenreListPage";
import Celebrities from "./pages/Celebrities";
import footerLogo from "./assets/github.svg";

const App = () => {
  return (
    <BrowserRouter>
      <Header logo={"FMDB"} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<Series />} />
        <Route path="/people" element={<Celebrities />} />
        <Route path="/genres">
          <Route index element={<GenreListPage />} />
          {/* Specific genre page - shows movies/shows for that genre */}
          <Route path=":type/:genreId" element={<GenrePage />} />
        </Route>
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
