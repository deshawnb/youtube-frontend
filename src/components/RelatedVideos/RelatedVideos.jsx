import { Outlet, Link } from "react-router-dom";


const RelatedVideos = (props) => {
  
function handleClick(index){
    let newSingleVideo = props.videos[index];
        props.setSingleVideo(newSingleVideo);
      console.log(newSingleVideo);
      
      }
      
      
    return ( 
       
            
            
              <div>
{console.log(props.relatedVideos)}


               
             <div>
                <h1> {props.relatedVideos[0].snippet.title}</h1>
                 
                  <Link to="/videopage" onClick={() => handleClick(0)} ><img src={props.relatedVideos[0].snippet.thumbnails.default.url} alt='video link'/></Link>
                  </div>     
             <div>
                <h1> {props.relatedVideos[1].snippet.title}</h1>
                 
                  <Link to="/videopage" onClick={() => handleClick(1)} ><img src={props.relatedVideos[1].snippet.thumbnails.default.url} alt='video link'/></Link>
                  </div>     
             <div>
                <h1> {props.relatedVideos[2].snippet.title}</h1>
                 
                  <Link to="/videopage" onClick={() => handleClick(2)} ><img src={props.relatedVideos[2].snippet.thumbnails.default.url} alt='video link'/></Link>
                  </div>     
             <div>
                <h1> {props.relatedVideos[3].snippet.title}</h1>
                 
                  <Link to="/videopage" onClick={() => handleClick(3)} ><img src={props.relatedVideos[3].snippet.thumbnails.default.url} alt='video link'/></Link>
                  </div>     
             <div>
                <h1> {props.relatedVideos[4].snippet.title}</h1>
                 
                  <Link to="/videopage" onClick={() => handleClick(4)} ><img src={props.relatedVideos[4].snippet.thumbnails.default.url} alt='video link'/></Link>
                  </div>     
                
               
          
          
          
          
                </div>
              );
              
     
}

export default RelatedVideos;