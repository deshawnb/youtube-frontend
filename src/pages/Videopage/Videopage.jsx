import { Link, Outlet } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import useAuth from "../../hooks/useAuth";
import HomePage from "../HomePage/HomePage";
import CommentList from "../../components/CommentList/CommentList";
import CommentForm from "../../components/CommentForm/CommentForm";
import axios from "axios";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";

const VideoPage = (props) => {
  const [user, token] = useAuth();
  const [comments, setComments] = useState([])
  

useEffect(() => {
    // fetchRelatedVideos(props.singleVideo);
    fetchComments();
  }, []);


  // async function fetchRelatedVideos(singleVideo){
  //   try {
  //     console.log(singleVideo)
  //     let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.singleVideo.id.videoId}&key=${props.KEY}&type=video&relatedToVideo&part=snippet&maxResults=5`);
  //     props.setRelatedVideos(response.data.items);
  //     console.log(props.relatedVideos)
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };

  const fetchComments = async () => {
    try {
      let response = await axios.get(`http://127.0.0.1:8000/api/comment/${props.singleVideo.id.videoId}/`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setComments(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const createComment = async (newComment) => {
    try {
      let response = await axios.post('http://127.0.0.1:8000/api/comment/', newComment, {
        headers: {
          Authorization: "Bearer " + token,
        }, 
      } );
      if(response.status === 201){
        await fetchComments();
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  

    return ( 

      <div>
        <h1> {props.singleVideo.snippet.title}</h1>
        <iframe id="ytplayer" type="text/html" width="640" height="360"
  src={(`https://www.youtube.com/embed/${props.singleVideo.id.videoId}?autoplay=0&origin=http://example.com`)}
  frameborder="0"></iframe>
        <p>{props.singleVideo.snippet.description}</p>
        <div>
          <CommentForm addNewCommentProperty={createComment} video_id={props.singleVideo.id.videoId}/>
          <h2>Comments</h2>
          <CommentList parentComments={comments}/>
          
        </div>
        {props.relatedVideos && <RelatedVideos relatedVideos={props.relatedVideos} setSingleVideo={props.setSingleVideo}/> }
      </div>
    )
    }


export default VideoPage;