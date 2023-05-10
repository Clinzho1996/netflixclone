import React, { useRef, useState } from "react";
import "./list.scss";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import Trending from "../listItem/Trending";

const TrendingList = () => {
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
      <span className="listTitle">Trending Movies</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />

        <div className="container" ref={listRef}>
          <Trending index={0} />
          <Trending index={1} />
          <Trending index={2} />
          <Trending index={3} />
          <Trending index={4} />
          <Trending index={5} />
          <Trending index={6} />
          <Trending index={7} />
          <Trending index={8} />
          <Trending index={9} />
          <Trending index={10} />
          <Trending index={11} />
          <Trending index={12} />
          <Trending index={13} />
          <Trending index={14} />
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

export default TrendingList;
