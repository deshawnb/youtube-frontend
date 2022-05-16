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
    
    return <h1> {video.id.videoId}</h1>
   
        
      })}
  </div>
 
  );
 

  
  
  }
export default HomePage;
