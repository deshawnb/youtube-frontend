
import axios from "axios";
import React, { useEffect } from 'react';
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";

const VideoPage = (props) => {
  

async function fetchRelatedVideos(singleVideo){
  try {
    console.log(singleVideo)
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.singleVideo.id.videoId}&key=${props.KEY}&type=video&relatedToVideo&part=snippet&maxResults=5`);
    props.setRelatedVideos(response.data.items);
    console.log(props.relatedVideos)
    } catch (error) {
      console.log(error.message);
    }
  };


  useEffect(() => {
    fetchRelatedVideos(props.singleVideo);
    console.log(props.RelatedVideos)
  
    
    
  }, []);


  

    return ( 

      <div>
        
        <h1> {props.singleVideo.snippet.title}</h1>
        <iframe id="ytplayer" type="text/html" width="640" height="360"
  src={(`https://www.youtube.com/embed/${props.singleVideo.id.videoId}?autoplay=0&origin=http://example.com`)}
  frameborder="0"></iframe>
        <p>{props.singleVideo.snippet.description}</p>
        <div>
        <RelatedVideos relatedVideos={props.relatedVideos} setSingleVideo={props.setSingleVideo}/>
        </div>
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