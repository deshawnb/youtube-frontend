import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const HomePage = (props) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  
  return (
    <div>
  
  {props.videos.map((video) =>{
    {console.log(video)}
    let url =`/videopage`
    return (
      <div>
        <h1> {video.snippet.title}</h1>
        <a href={url}>
          <img src={video.snippet.thumbnails.default.url} alt='video link' link to='/videopage'/>
        </a>
      </div>
    )
      })}
  </div>
  );
  }
export default HomePage;
