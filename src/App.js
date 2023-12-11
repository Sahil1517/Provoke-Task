import React, { useState, useEffect } from "react";
import VideoPlayer from "./videoplayer";
import Search from "./search";
import Attributes from "./Attributes";
import "./styles.css";

const App = () => {
  const [video, setVideo] = useState("");
  const [videoId, setVideoId] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (term) => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet,id&maxResults=1&q=${term}&key=AIzaSyBv1vLUZT4Sym81KPrAgt75cYolknqGXOA`
    )
      .then((r) => r.json())
      .then((r) => {
        if (r.items && r.items.length > 0) {
          setVideo(r.items[0]);
          setVideoId(r.items[0].id.videoId);
          setUrl(`https://www.youtube.com/watch?v=${r.items[0].id.videoId}`);
        } else {
          console.error("No items found in the YouTube API response.");
          // Handle the case where no items are found, e.g., show an error message
        }
      })
      .catch((error) => {
        console.error("Error fetching data from the YouTube API:", error);
        // Handle the error, e.g., show an error message
      });
  };

  useEffect(() => {
    // Additional logic can be placed here if needed
  }, [video, videoId, url]);

  return (
    <div className="App">
      <Search handleSubmit={handleSubmit} />
      <br />
      <VideoPlayer url={url} videoId={videoId} />
      <Attributes atts={video} />
    </div>
  );
};

export default App;
