import React, { useState } from "react";
import ReactPlayer from "react-player";
import StartStop from "./StartStop.png";
import PlayButton from "./PlayButton.png";

const VideoPlayer = ({ videoId, url }) => {
  const [playing, setPlaying] = useState(false);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handlePlay = () => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  return (
    <>
      {videoId === "" ? (
        <div className="videoplayer">
          <img className="playButton" alt="Play Button" src={PlayButton} />
        </div>
      ) : videoId === undefined ? (
        <h4>Error. Search Again :)</h4>
      ) : (
        <ReactPlayer
          width="100%"
          height="20em"
          url={url}
          playing={playing}
          controls={true}
          onPlay={handlePlay}
          onPause={handlePause}
          onError={(e) => console.log("onError", e)}
        />
      )}
      <img className="startStop" src={StartStop} onClick={handlePlayPause} />
    </>
  );
};

export default VideoPlayer;
