import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("castles");

  useEffect(() => {
    fetchVideos(searchTerm);
  }, [searchTerm]);

  const fetchVideos = async (searchTerm) => {
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}key=AIzaSyAtdlBhTmpzQ5D-aDGR9PNpfJJAL6aofWY&type=video&relatedToVideo&part=snippet&maxResults=5`);
      setVideos(response.data);
      console.log(videos)
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      
        {videos &&
        videos.map((video, index) => (
          <p key={index}>
            {video.kind} 
          </p>
        ))}
    </div>
  );
};

export default HomePage;
