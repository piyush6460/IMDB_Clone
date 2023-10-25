import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";

function Home() {
  const [result, setResult] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => {
        return res.json();
      })
      .then((odata) => {
        return setResult(odata.results);
      })
      .catch((rej) => {
        console.log(rej);
      });
  }, []);
  //   console.log(result);

  function getSpecificWords(str, numWords) {
    var words = str.trim().split(/\s+/);
    // Check if the specified number of words is greater than the total words in the string
    if (numWords >= words.length) {
      return str;
    } else {
      // Slice the array to get the specified number of words and join them back into a string
      var specificWords = words.slice(0, numWords).join(" ");
      return specificWords;
    }
  }
  return (
    <div className="App">
      {/* <p>{result[0].backdrop_path}</p> */}

      {/* <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={`https://image.tmdb.org/t/p/original${result[0].backdrop_path}`}
              className="w-100 h-20"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>{result[0].title}</h5>
              <p>{result[0].overview}</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={`https://image.tmdb.org/t/p/original${result[1].backdrop_path}`}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>{result[1].title}</h5>
              <p>{result[1].overview}</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={`https://image.tmdb.org/t/p/original${result[2].backdrop_path}`}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>{result[2].title}</h5>
              <p>{result[2].overview}</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}

      {result.map((movies, index) => {
        var text = movies.overview;
        var numWords = 6; // Specify the number of words you want to print
        var resultOverview = getSpecificWords(text, numWords);
        var resultTitle = getSpecificWords(movies.title, 2);
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
              <h5 className="card-title">{resultTitle}...</h5>
              <p className="card-text">
                {/* {wordCount > 25 ? "..." : movies.overview} */}
                {resultOverview}...
              </p>
              <Link to={`/movies/${movies.id}`} className="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
