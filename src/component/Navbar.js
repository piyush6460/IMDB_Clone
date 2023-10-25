import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ setSearchval, searchval }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
              width={100}
              hight={100}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/populer"
                >
                  Populer
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/upcoming">
                  Upcoming
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/toprated">
                  Top Rated
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchval}
                onChange={(e) => setSearchval(e.target.value)}
              />
              <Link to="/movies/search">
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
