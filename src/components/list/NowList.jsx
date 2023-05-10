import React, { useRef, useState } from "react";
import "./list.scss";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import NowPlaying from "../listItem/NowPlaying";

const NowList = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }

    if (direction === "right" && slideNumber < 14) {
      // Updated condition to check against last index
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">Popular on Dev-Clinton's Netflix</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />

        <div className="container" ref={listRef}>
          <NowPlaying index={0} />
          <NowPlaying index={1} />
          <NowPlaying index={2} />
          <NowPlaying index={3} />
          <NowPlaying index={4} />
          <NowPlaying index={5} />
          <NowPlaying index={6} />
          <NowPlaying index={7} />
          <NowPlaying index={8} />
          <NowPlaying index={9} />
          <NowPlaying index={10} />
          <NowPlaying index={11} />
          <NowPlaying index={12} />
          <NowPlaying index={13} />
          <NowPlaying index={14} />
        </div>

        <ArrowForwardIosOutlined
          className={`sliderArrow right ${
            slideNumber === 14 ? "disabled" : ""
          }`}
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default NowList;
