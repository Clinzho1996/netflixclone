import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
  FiberManualRecord,
  PlayCircleFilled,
  KeyboardArrowDownOutlined,
} from "@material-ui/icons";
import { useState } from "react";

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://ntvb.tmsimg.com/assets/p13499680_v_h10_ak.jpg?w=1280&h=720"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
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
            <div className="itemInfoTop">
              <span style={{ color: "green" }}>97% Match</span>
              <span className="limit">+16</span>
              <span>1999</span>
              <span className="limit hd">HD</span>
            </div>
            <div className="genre">
              Action <FiberManualRecord className="dot" /> Movie
              <FiberManualRecord className="dot" /> Triller
            </div>
          </div>
        </>
      )}
    </div>
  );
}
