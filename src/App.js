import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Homea from "./pages/Home";
import Populer from "./pages/Populer";
import UpComing from "./pages/UpComing";
import TopRated from "./pages/TopRated";
import MoviesDetail from "./pages/MoviesDetail";
import SearchMovies from "./pages/SearchMovies";
import Navbar from "./component/Navbar";
function App() {
  const [searchval, setSearchval] = useState();

  return (
    <Router>
      <Navbar searchVal={searchval} setSearchval={setSearchval} />
      <Routes>
        <Route path="/" element={<Homea />} />
        <Route path="/populer" element={<Populer />} />
        <Route path="/upcoming" element={<UpComing />} />
        <Route path="/toprated" element={<TopRated />} />
        <Route path="/movies/:id" element={<MoviesDetail />} />
        <Route
          path="/movies/search"
          element={<SearchMovies searchVal={searchval} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
