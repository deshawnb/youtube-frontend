import axios from "axios";
import ReplyList from "../ReplyList/ReplyList";
import ReplyForm from "../ReplyForm/ReplyForm";
import React, { useEffect, useState } from 'react';
import useAuth from "../../hooks/useAuth";


const Comment = (props) => {
    const [replies, setReplies] = useState([])
    const [user, token] = useAuth();

    useEffect(() => {
        fetchReplies();
      }, []);

      const fetchReplies = async () => {
        try {
          let response = await axios.get(`http://127.0.0.1:8000/api/comment/replies/${props.id}`, {
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
          let response = await axios.post(`http://127.0.0.1:8000/api/comment/replies/${props.id}`, newReply, {
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
        <div >
            <div>
                <p>{props.user.username}</p>
                <p>{props.text}</p>
                <tr>
                    <button >Like</button>
                    <td>{props.likes}</td>
                    <button >Dislike</button>
                    <td>{props.dislikes}</td>
                </tr>
            </div>
            
            <div>
                <ReplyForm addNewReplyProperty={createReply} comment={props.id} user={props.user.id}/>
                <h2>Replies</h2>
                <ReplyList parentReplies={replies}/>
            </div>
            
        </div>
    );
}

export default Comment;