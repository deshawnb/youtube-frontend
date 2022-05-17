import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Outlet, Link, Navigate } from "react-router-dom";




const HomePage = (props) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
function handleClick(index){
  props.setSingleVideo(props.videos[index]);
  
}


  
  return (
    <div>
   <div>
      <h1> {props.videos[0].snippet.title}</h1>
       
        <Link to="/videopage" onClick={() => handleClick(0)} ><img src={props.videos[0].snippet.thumbnails.default.url} alt='video link'/></Link>
        </div>     
   <div>
      <h1> {props.videos[1].snippet.title}</h1>
       
        <Link to="/videopage" onClick={() => handleClick(1)} ><img src={props.videos[1].snippet.thumbnails.default.url} alt='video link'/></Link>
        </div>     
   <div>
      <h1> {props.videos[2].snippet.title}</h1>
       
        <Link to="/videopage" onClick={() => handleClick(2)} ><img src={props.videos[2].snippet.thumbnails.default.url} alt='video link'/></Link>
        </div>     
   <div>
      <h1> {props.videos[3].snippet.title}</h1>
       
        <Link to="/videopage" onClick={() => handleClick(3)} ><img src={props.videos[3].snippet.thumbnails.default.url} alt='video link'/></Link>
        </div>     
   <div>
      <h1> {props.videos[4].snippet.title}</h1>
       
        <Link to="/videopage" onClick={() => handleClick(4)} ><img src={props.videos[4].snippet.thumbnails.default.url} alt='video link'/></Link>
        </div>     
      
     




      </div>
    );
    
   
  
}
// onClick set search video to single clicked video
export default HomePage;
