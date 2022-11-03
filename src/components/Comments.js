

function Comments({user, comment}) {

    console.log(comment);
    return (
        <div>
            <h3>{user}</h3>
            <p>{comment}</p>
        </div>
    )
}

export default Comments;