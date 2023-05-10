import React, { useRef, useState } from "react";
import "./list.scss";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import Upcoming from "../listItem/Upcoming";

const UpcomingMovies = () => {
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
      <span className="listTitle">Upcoming Movies</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />

        <div className="container" ref={listRef}>
          <Upcoming index={0} />
          <Upcoming index={1} />
          <Upcoming index={2} />
          <Upcoming index={3} />
          <Upcoming index={4} />
          <Upcoming index={5} />
          <Upcoming index={6} />
          <Upcoming index={7} />
          <Upcoming index={8} />
          <Upcoming index={9} />
          <Upcoming index={10} />
          <Upcoming index={11} />
          <Upcoming index={12} />
          <Upcoming index={13} />
          <Upcoming index={14} />
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

export default UpcomingMovies;
