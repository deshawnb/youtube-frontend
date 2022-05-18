import { Link, Outlet } from "react-router-dom";
import React, { useEffect } from 'react';




const VideoPage = (props) => {

  useEffect(() => {
    props.fetchRelatedVideos(props.singleVideo);
  
    
    
  }, []);


  

    return ( 

      <div>
        
        <h1> {props.singleVideo.snippet.title}</h1>
        <iframe id="ytplayer" type="text/html" width="640" height="360"
  src={(`https://www.youtube.com/embed/${props.singleVideo.id.videoId}?autoplay=0&origin=http://example.com`)}
  frameborder="0"></iframe>
        <p>{props.singleVideo.snippet.description}</p>
        <Link to={"/videopage/relatedvideos"}>Click here for related vids</Link>
        <Outlet></Outlet>
      </div>
      
    )
    }


  
  // {props.videos.map((video) =>{
  //   {console.log(video)}
  //   let url =`/videopage`
  //   return (
  //     <div>
  //       <h1> {video.snippet.title}</h1>
  //       <a href={url}>
  //         <img src={video.snippet.thumbnails.default.url} alt='video link' link to='/videopage'/>
  //       </a>
  //     </div>
  //   )
  //     })}
  
  



 
export default VideoPage;