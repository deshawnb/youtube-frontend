

const Reply = (props) => {
    return (
        <div >
            <p>{props.id}</p>
            <p>{props.user}</p>
            <p>{props.comment}</p>
            <p>{props.text}</p>
        </div>
    );
}

export default Reply;