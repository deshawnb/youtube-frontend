import Reply from "../Reply/Reply";

const ReplyList = (props) => {
    return (
        <div>
            {props.parentReplies.map((reply) => {
                return (
                    <div>
                        <Reply id={reply.id} user={reply.user} comment={reply.comment} text={reply.text}/>
                    </div>
                );
            })}
        </div>
    );
}

export default ReplyList