import React, { useRef, useState } from "react";
import "./list.scss";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import Top from "../listItem/Top";

const TopRated = () => {
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

    if (direction === "right" && slideNumber < 10) {
      // Updated condition to check against last index
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">Top 10 Movies in Dev-Clinton's Netflix</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />

        <div className="container" ref={listRef}>
          <Top index={0} />
          <Top index={1} />
          <Top index={2} />
          <Top index={3} />
          <Top index={4} />
          <Top index={5} />
          <Top index={6} />
          <Top index={7} />
          <Top index={8} />
          <Top index={9} />
        </div>

        <ArrowForwardIosOutlined
          className={`sliderArrow right ${
            slideNumber === 10 ? "disabled" : ""
          }`}
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default TopRated;
