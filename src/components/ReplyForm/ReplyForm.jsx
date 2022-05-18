import react, { useState } from "react";

const ReplyForm = (props) => {
    const [text, setText] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newReply = {
            text : text
        };
        console.log(newReply);
        props.addNewCommentProperty(newReply)
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