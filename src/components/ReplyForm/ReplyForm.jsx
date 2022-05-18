import React, { useState } from "react";

const ReplyForm = (props) => {
    const [text, setText] = useState('');
    let comment = props.comment
    let user = props.user

    function handleSubmit(event) {
        event.preventDefault();
        let newReply = {
            user : user,
            comment : comment,
            text : text,

        };
        console.log(newReply);
        props.addNewReplyProperty(newReply)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Text</label>
            <input type='text' value={text} onChange={(event) =>setText(event.target.value)}/>
            <button type="submit">Add</button>
        </form>
    );
}

export default ReplyForm