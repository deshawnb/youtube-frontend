import Comment from "../Comment/Comment";

const CommentList = (props) => {
    return (
        <div>
            {props.parentComments.map((comment) => {
                return (
                    <div>
                        <Comment id={comment.id} video_id={comment.video_id} text={comment.text} likes={comment.likes} dislikes={comment.dislikes}/>
                    </div>
                );
            })}
        </div>
    );
}

export default CommentList