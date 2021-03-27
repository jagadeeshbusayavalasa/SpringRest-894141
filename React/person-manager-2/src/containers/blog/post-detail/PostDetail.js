import React from 'react';
import './PostDetail.css';
const postDetail = props => {
    let postDetail = <h1>Please Click to see the post Data</h1>
    if (props.post) {
        postDetail = (
            <div className="post-detail">
                <h1>{props.post.title}</h1>
                <p>{props.post.body}</p>
            </div>)
    }
    return (
        <div>
            { postDetail}
        </div>

    )
}
export default postDetail;