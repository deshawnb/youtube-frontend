import React, { useState } from "react";

const CommentForm = (props) => {
    
    const [text, setText] = useState('');
    let video_id = props.video_id

    function handleSubmit(event) {
        event.preventDefault();
        let newComment = {
            video_id : video_id,
            text : text,
            likes : 0,
            dislikes : 0,
        };
        console.log(newComment);
        props.addNewCommentProperty(newComment)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Comment</label>
            <input type='text' value={text} onChange={(event) => setText(event.target.value)}/>
            <button type="submit">Add</button>
        </form>
    );
}

export default CommentForm