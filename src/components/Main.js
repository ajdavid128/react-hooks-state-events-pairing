import {useState} from 'react'
import Comments from './Comments'


function Main({video}) {
// console.log(video)

const {title, views, upvotes, downvotes, createdAt} = video
// const title = video.title

const [upCount, setUpvotes] = useState (upvotes)

const [downCount, setDownvotes] = useState (downvotes)

const handleUpClick = (e) => {
    // console.log(e.target.id)
 
    e.target.id === "+" ? setUpvotes(upCount + 1) : setDownvotes(downCount + 1)
    
}

    return(
        <div>
            <h1>{title}</h1>
            <h4>{views} Views | {createdAt}</h4>
            <div>
                <button id="+" onClick={handleUpClick}>{upCount}👍</button>
                <button key="-" onClick={handleUpClick}>{downCount}👎</button>
            </div>
            <br/>
            <button>Hide Comments</button>
            <Comments />
        </div>
    )
}

export default Main;