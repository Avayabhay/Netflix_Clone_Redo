import React from "react";
import { useState, useEffect } from "react";
import axios from "./axios";
import "./Rows.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function Rows({ title, fetchURL, isLargeRow }) {
  const baseURL = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2`;
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      // console.log(request);
      // console.log("this time");
      return request;
    }
    fetchData();
  }, [fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  // console.log(movies);
  function handleTrailer(movie) {
    console.log(movie);
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(movie?.original_title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(url);
          // console.log(urlParams.get("v"));
          setTrailerURL(urlParams.get("v"));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <div className="row">
      <h1 className="row_title">{title}</h1>
      <div className="row-posters">
        {movies.map((movie) => {
          // console.log(movie.name);
          return (
            (
              <img
                key={movie.id}
                src={`${baseURL}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={`${movie.name}`}
                className={`poster ${isLargeRow && "poster_large"}`}
                onClick={() => handleTrailer(movie)}
              />
            ) || "nodata"
            // console.log}
            // ""
          );
        })}
      </div>
      {trailerURL && <Youtube videoId={trailerURL} opts={opts} />}
    </div>
  );
}

export default Rows;
