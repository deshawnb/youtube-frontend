import { Link } from "react-router-dom";




const RelatedVideos = (props) => {

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
 
export default RelatedVideos;