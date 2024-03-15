import './App.css';
import React, { useState } from 'react';
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    { id: 1, title: 'Creating a Learning Environment', url: 'https://cdn.pixabay.com/vimeo/486147545/boy-57753.mp4?width=1280&hash=d11640ff63eeed5ebf592c8194dd95bf279e07ff' },
    { id: 2, title: 'Engineering & Math', url: 'https://cdn.pixabay.com/vimeo/183629075/science-5373.mp4?width=640&hash=3d0ea166cc4bcafbd14ff489890aa144ab38ce45' },
    { id: 3, title: 'Critical Reading', url: 'https://cdn.pixabay.com/vimeo/874643413/book-185096.mp4?width=640&hash=1fc2abd656ab19e5263588af5a0e2144ede4b1e0' },
  ];

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return(
    <div className="app">
      <h1>E-Learning Gallery</h1>
      <div className="container">
        <VideoList videos={videos} onVideoSelect={handleVideoSelect}/>
        <VideoPlayer video={selectedVideo}/>
      </div>
    </div>
  )
}

export default App;
