import Comment from "../Comment/Comment";

const CommentList = (props) => {
    return (
        <div>
            {props.parentComments.map((comment) => {
                return (
                    <div>
                        <Comment name={comment.text}/>
                    </div>
                );
            })}
        </div>
    );
}

export default CommentList