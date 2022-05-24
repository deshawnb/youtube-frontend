import axios from "axios";
import ReplyList from "../ReplyList/ReplyList";
import ReplyForm from "../ReplyForm/ReplyForm";
import React, { useEffect, useState } from 'react';
import useAuth from "../../hooks/useAuth";
import "./Comment.css"


const Comment = (props) => {
    const [replies, setReplies] = useState([])
    const [user, token] = useAuth();

    useEffect(() => {
        fetchReplies();
      }, []);

      const fetchReplies = async () => {
        try {
          let response = await axios.get(`${REACT_APP_URL}/api/comment/replies/${props.id}`, {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          setReplies(response.data);
        } catch (error) {
          console.log(error.message);
        }
      };
    
      const createReply = async (newReply) => {
        try {
          let response = await axios.post(`${REACT_APP_URL}/api/comment/replies/${props.id}`, newReply, {
            headers: {
              Authorization: "Bearer " + token,
            }, 
          } );
          if(response.status === 201){
            await fetchReplies();
          }
        } catch (error) {
          console.log(error.message);
        }
      };

      const likeComment = async () => {
        try {
          let response = await axios.put(`${REACT_APP_URL}/api/comment/${props.id}/update/`, {
            video_id : props.video_id,
            text : props.text,
            likes : props.likes + 1,
            dislikes : props.dislikes,
            published: true,

          }, {
            headers: {
              Authorization: "Bearer " + token,
            }, 
          } );
          if(response.status === 201){
            await fetchReplies();
          }
        } catch (error) {
          console.log(error.message);
        }
        
      };


      const dislikeComment = async () => {
        try {
          let response = await axios.put(`${REACT_APP_URL}/api/comment/${props.id}/update/`, {
            video_id : props.video_id,
            text : props.text,
            likes : props.likes,
            dislikes : props.dislikes + 1,
            published: true,

          }, {
            headers: {
              Authorization: "Bearer " + token,
            }, 
          } );
          if(response.status === 201){
            await fetchReplies();
          }
        } catch (error) {
          console.log(error.message);
        }
        
      };

    return (
        <div className="comment">
            <div>
                <p>{props.user.username}</p>
                <p>{props.text}</p>
                <div className="button">
                    <button onClick={likeComment} >Like</button>
                    <p className="counter">{props.likes}</p>
                </div>
                <div className="button">
                    <button onClick={dislikeComment}>Dislike</button>
                    <p className="counter">{props.dislikes}</p>
                </div>
            </div>
            
            <div>
                <ReplyForm addNewReplyProperty={createReply} comment={props.id} user={props.user.id}/>
                <h2>Replies</h2>
                <div className="reply">
                  <ReplyList parentReplies={replies}/>
                </div>
            </div>
            
        </div>
    );
}

export default Comment;