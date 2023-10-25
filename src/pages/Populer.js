import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
function Populer() {
  const [popularMovie, setPopularMovie] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return setPopularMovie(data.results);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      {popularMovie.map((movies, index) => {
        return (
          <div
            className="card ms-3 mt-3 d-inline-flex"
            style={{ width: 200 }}
            key={index}
          >
            <img
              src={`https://image.tmdb.org/t/p/original${movies.backdrop_path}`}
              className="card-img-top"
              alt="."
            />
            <div className="card-body">
              <h5 className="card-title">{movies.title}</h5>
              <p className="card-text">{movies.overview}</p>
              <Link to={`/movies/${movies.id}`} className="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Populer;
