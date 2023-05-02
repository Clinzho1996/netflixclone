import React from "react";
import "./featured.scss";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
          </select>
        </div>
      )}
      <img
        src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/11/15/16370114482906.jpg"
        alt=""
      />

      <div className="info">
        <img
          src="https://www.pngmart.com/files/22/Marvels-Spider-Man-PNG-Photo.png"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa sint
          totam quisquam praesentium recusandae! Architecto rem ipsum rerum
          praesentium exercitationem eligendi ipsam saepe aliquid aspernatur
          ipsa totam laboriosam tempora necessitatibus repudiandae porro
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow /> <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
