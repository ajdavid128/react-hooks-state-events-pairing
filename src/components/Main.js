import {useState} from 'react'
import Comments from './Comments'


function Main({video}) {
// console.log(video)

    const {title, views, upvotes, downvotes, createdAt, comments} = video
    // const title = video.title

    const [upCount, setUpvotes] = useState (upvotes)

    const [downCount, setDownvotes] = useState (downvotes)

    const handleUpClick = (e) => {
        // console.log(e.target.id)
        e.target.id === "+" ? setUpvotes(upCount + 1) : setDownvotes(downCount + 1)
    }

    const commentArray = comments.map( (commentObj) => <Comments key={commentObj.id} {...commentObj}/>  );

    const [hideButton, setHideButton  ] = useState(false);

    const handleHideButton = () => {
        setHideButton(!hideButton);
    };

    const CommentSection = ()=> {
        return (
            <div>
                <h3>{comments.length} Comments</h3>
                {commentArray}
            </div>
        )
    };


    return(
        <div>
            <h1>{title}</h1>
            <h4>{views} Views | {createdAt}</h4>
            <div>
                <button id="+" onClick={handleUpClick}>{upCount}👍</button>
                <button key="-" onClick={handleUpClick}>{downCount}👎</button>
            </div>
            <br/>
            <button onClick={handleHideButton}>{!hideButton ? "Hide Comments" : "Show Comments"}</button>
               {!hideButton ? <CommentSection /> : null}
        </div>
    )
}

export default Main;