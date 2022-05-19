import { Outlet, Link, useNavigate  } from "react-router-dom";


const RelatedVideos = (props) => {
let navigate = useNavigate()
  
function handleClick2(index){
    let newSingleVideo = props.relatedVideos[index];
        props.setSingleVideo(newSingleVideo);
        navigate("/videopage")
      console.log(newSingleVideo);
      
      }
      
      
    return ( 
       
            
            
              <div>
                  
{console.log(props.relatedVideos)}

<h1>RELATED VIDEOS:</h1>
               
             <div>
                <h1> {props.relatedVideos[0].snippet.title}</h1>
                 
                   <Link to="/videopage" onClick={() => handleClick2(0)} ><img src={props.relatedVideos[0].snippet.thumbnails.default.url} className="center" alt='video link'/></Link>
                  </div>      

              <div>
                <h1> {props.relatedVideos[1].snippet.title}</h1>
                 
                  <Link to="/videopage" onClick={() => handleClick2(1)} ><img src={props.relatedVideos[1].snippet.thumbnails.default.url} className="center" alt='video link'/></Link>
                  </div>     
             <div>
                <h1> {props.relatedVideos[2].snippet.title}</h1>
                 
                  <Link to="/videopage" onClick={() => handleClick2(2)} ><img src={props.relatedVideos[2].snippet.thumbnails.default.url} className="center" alt='video link'/></Link>
                  </div>     
             <div>
                <h1> {props.relatedVideos[3].snippet.title}</h1>
                 
                  <Link to="/videopage" onClick={() => handleClick2(3)} ><img src={props.relatedVideos[3].snippet.thumbnails.default.url} className="center" alt='video link'/></Link>
                  </div>     
             <div>
                <h1> {props.relatedVideos[4].snippet.title}</h1>
                 
                  <Link to="/videopage" onClick={() => handleClick2(4)} ><img src={props.relatedVideos[4].snippet.thumbnails.default.url} className="center" alt='video link'/></Link>
                  </div>      
                
               
          
          
          
          
                </div>
              );
              
     
    
}

export default RelatedVideos;