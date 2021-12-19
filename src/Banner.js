import React from "react";
import axios from "./axios";
import { useState, useEffect } from "react";
import "./banner.css";

import requests from "./requests";

function Banner() {
  const baseURL = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/`;
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  console.log(movie);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url( ${baseURL}${movie?.backdrop_path} )`,
        // minHeight: "300px",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="buttons">
          <button className="btn button_play">Play</button>
          <button className="btn button_list">My List</button>
        </div>
        <h3 className="banner_description">{truncate(movie?.overview, 350)}</h3>
      </div>
      <div className="fade_bottom"></div>
    </header>
  );
}

export default Banner;
