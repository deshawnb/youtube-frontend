const VideoPage = (props) => {

{console.log(props.singleVideo)}
    return ( 
        <iframe id="ytplayer" type="text/html" width="640" height="360"
  src={`https://www.youtube.com/embed/${props.singleVideo.id.videoId}?autoplay=0`}
  frameborder="0">

  </iframe>
     );
}
 
export default VideoPage;