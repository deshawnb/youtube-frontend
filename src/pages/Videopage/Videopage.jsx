
const VideoPage = (props) => {
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
        <p>{video.snippet.description}</p>
      </div>
    )
      })}

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
  </div>

  );
}
 
export default VideoPage;