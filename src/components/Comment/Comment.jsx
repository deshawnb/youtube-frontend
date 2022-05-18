

const Comment = (props) => {
    return (
        <div >
            <p>{props.id}</p>
            <p>{props.video_id}</p>
            <p>{props.text}</p>
            <p>{props.likes}</p>
            <p>{props.dislikes}</p>
        </div>
    );
}

export default Comment;