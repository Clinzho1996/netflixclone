import React from "react";
import "./watch.scss";
import { ArrowBackOutlined } from "@material-ui/icons";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const Watch = () => {
  return (
    <div className="watch">
      <Link to="/browse">
        <div className="back">
          <ArrowBackOutlined /> Home
        </div>
      </Link>
      <div className="video">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=HyEOrBtb4_g&pp=ygUdc3BpZGVybWFuIGludG8gc3BpZGVyIHZlcnNlIDI%3D"
          width="100%"
          height="100%"
          playing={true}
          loop={true}
        />
      </div>
    </div>
  );
};

export default Watch;
