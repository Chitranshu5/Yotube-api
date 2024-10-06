import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { api_url } from "../utils/Data";
import { YoutubeContext } from "./YoutubeContext";

const Feed = () => {
  const [data, setData] = useState([]);

  // Get search term from YoutubeContext
  const { search } = useContext(YoutubeContext);
  const navigate = useNavigate(); // Hook for navigation

  const fetchYoutubeData = async () => {
    try {
      // Use search term in API URL, defaults to an empty string if search is not defined
      const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
        search
      )}&key=${api_url}&maxResults=10`;

      const response = await fetch(url);
      const result = await response.json();

      setData(result.items); // Store fetched data
      console.log("Fetched data:", result.items);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchYoutubeData();
  }, [search]);

  const handlePlayButtonClick = (videoId) => {
    // Navigate to the video page with the selected videoId
    navigate(`/video/${videoId}`);
  };

  return (
    <div>
      {/* Video card layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {data?.map((vid) => (
          <div key={vid.id.videoId} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={vid.snippet.thumbnails.medium.url}
              alt={vid.snippet.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{vid.snippet.title}</h3>
              <div className="flex items-center mb-2">
                <img
                  src={vid.snippet.thumbnails.default.url}
                  alt={vid.snippet.channelTitle}
                  className="w-10 h-10 rounded-full mr-2"
                />
                <p className="text-sm font-medium text-gray-700">{vid.snippet.channelTitle}</p>
              </div>
              <button
                onClick={() => handlePlayButtonClick(vid.id.videoId)}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
              >
                Play
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
