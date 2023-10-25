import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function MoviesDetail() {
  const { id } = useParams();
  const [moviesDetail, setMoviesDetail] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return setMoviesDetail(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div style={{ width: "100%", height: "100%", display: "flex" }}>
      <img
        src={`https://image.tmdb.org/t/p/original${moviesDetail.backdrop_path}`}
        style={{
          width: "50%",
          height: "100%",
          marginTop: "10px",

          border: "1px solid black",
        }}
        alt={moviesDetail.backdrop_path}
      />
      <div>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "4rem",
          }}
        >
          {moviesDetail.title}
        </p>

        <div style={{ fontSize: "2rem", marginLeft: "5px" }}>
          {moviesDetail.overview}
        </div>
      </div>
    </div>
  );
}

export default MoviesDetail;
