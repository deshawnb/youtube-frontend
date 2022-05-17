import react, { useState } from "react";

const CommentForm = (props) => {
    const [text, setText] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newComment = {
            text : text
        };
        console.log(newComment);
        props.addNewCommentProperty(newComment)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Text</label>
            <input type='text' value={text} onChange={(event) =>setText(event.target.value)}/>
            <button type="submit">Add</button>
        </form>
    );
}

export default CommentForm