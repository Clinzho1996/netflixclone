import React, { useEffect, useState } from "react";
import axios from "axios";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./featured.scss";

const API_KEY = "aa00e3d2a883067d5c64c3b57d3d99f7";

const Featured = ({ type }) => {
  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [genre, setGenre] = useState("");

  useEffect(() => {
    const fetchRandomMovie = async () => {
      let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
      if (genre) {
        url += `&with_genres=${genre}`;
      }
      try {
        const response = await axios.get(url);
        const randomMovieIndex = Math.floor(
          Math.random() * response.data.results.length
        );
        const randomMovie = response.data.results[randomMovieIndex];
        setMovie(randomMovie);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRandomMovie();
  }, [genre]);

  useEffect(() => {
    const fetchTrailer = async () => {
      if (movie) {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}`
          );
          const trailers = response.data.results;
          const trailer = trailers.find(
            (trailer) => trailer.type === "Trailer"
          );
          if (trailer) {
            setTrailerUrl(trailer.key);
          } else {
            setTrailerUrl("");
          }
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchTrailer();
  }, [movie]);

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre" onChange={handleGenreChange}>
            <option value="">Genre</option>
            <option value="12">Adventure</option>
            <option value="35">Comedy</option>
            <option value="80">Crime</option>
            <option value="14">Fantasy</option>
            <option value="36">Historical</option>
            <option value="27">Horror</option>
            <option value="10749">Romance</option>
            <option value="878">Sci-fi</option>
            <option value="53">Thriller</option>
            <option value="37">Western</option>
          </select>
        </div>
      )}
      {movie && (
        <div
          className="background-video"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`,
            backgroundSize: "cover",
            height: "100%",
          }}
        >
          {trailerUrl && (
            <div className="background-video">
              <video
                className="video-player"
                src={`https://www.youtube.com/watch?v=${trailerUrl}`}
                autoPlay
                loop
                muted
              />
            </div>
          )}
          <div className="info">
            <h1 style={{ fontSize: 100 }}>{movie.title}</h1>
            <span className="desc">{movie.overview}</span>
            <div className="buttons">
              {trailerUrl && (
                <button className="play">
                  <PlayArrow />
                  <span>
                    <a
                      href={`https://www.youtube.com/watch?v=${trailerUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Play
                    </a>
                  </span>
                </button>
              )}
              <button className="more">
                <InfoOutlined />
                <span>Info</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Featured;
