import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const HomePage = (props) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [videoId, setVideoID] = useState([])
  return (
    <div>
  
  {props.videos.map((video) =>{
    {console.log(video)}
    let url =`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1&origin=http://example.com`
    return (
      <div>
        <h1> {video.snippet.title}</h1>
        <iframe id="ytplayer" type="text/html" width="640" height="360"
        src={url}
        frameborder="0"></iframe>
      </div>
    
   
    )
      })}
  
    </div>
  );
}
export default HomePage;
