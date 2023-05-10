import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
  FiberManualRecord,
  PlayCircleFilled,
  KeyboardArrowDownOutlined,
} from "@material-ui/icons";
import "./listItem.scss";

const API_KEY = "aa00e3d2a883067d5c64c3b57d3d99f7";
const BASE_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;

export default function NowPlaying({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState(null);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(BASE_URL);
        const movies = response.data.results;
        if (movies.length > 0) {
          setMovie(movies[index]);
        }
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();
  }, [index]);

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
        alt=""
      />
      {isHovered && (
        <>
          <video src={movie?.trailer} autoPlay loop />
          <div className="itemInfo">
            <div className="iconDetails">
              <div className="icons">
                <PlayCircleFilled className="play" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownOutlined className="icon" />
              </div>
              <div className="icons">
                <KeyboardArrowDownOutlined className="icon" />
              </div>
            </div>
            <p style={{ marginBottom: 10 }}>{movie.title}</p>
            <div className="itemInfoTop">
              <span style={{ color: "green" }}>
                {movie?.vote_average}% Match
              </span>
              <span className="limit">{movie?.adult ? "+18" : "+16"}</span>
              <span>{movie?.release_date?.substring(0, 4)}</span>
              <span className="limit hd">HD</span>
            </div>
            <div className="genre">
              {movie?.genres?.map((genre) => (
                <React.Fragment key={genre.id}>
                  {genre.name} <FiberManualRecord className="dot" />
                </React.Fragment>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
