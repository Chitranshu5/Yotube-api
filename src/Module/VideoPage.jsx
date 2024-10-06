import React from "react";
import { useParams } from "react-router-dom";

const VideoPage = () => {
  const { videoId } = useParams(); // Get the videoId from URL params

  return (
    <div className="flex justify-center h-screen bg-gray-100">
      <div className="relative w-full max-w-4xl bg-white p-4 rounded-lg shadow-lg">
        <iframe
          width="100%" // Full width to ensure responsiveness
          height="600"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3`}
          title="YouTube video player"
        //   frameBorder="0" // Ensures a clean border
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPage;
