

const Comment = (props) => {
    return (
        <div >
            <p>{props.user.username}</p>
            <p>{props.text}</p>
            <tr>
                <button>Like</button>
                <td>{props.likes}</td>
                <button>Dislike</button>
                <td>{props.dislikes}</td>
            </tr>
            
        </div>
    );
}

export default Comment;